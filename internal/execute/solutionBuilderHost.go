package execute

import (
	"time"

	"github.com/microsoft/typescript-go/internal/ast"
	"github.com/microsoft/typescript-go/internal/collections"
	"github.com/microsoft/typescript-go/internal/compiler"
	"github.com/microsoft/typescript-go/internal/incremental"
	"github.com/microsoft/typescript-go/internal/tsoptions"
	"github.com/microsoft/typescript-go/internal/tspath"
	"github.com/microsoft/typescript-go/internal/vfs"
)

type configAndTime struct {
	resolved *tsoptions.ParsedCommandLine
	time     time.Duration
}

type solutionBuilderHost struct {
	builder               *solutionBuilder
	host                  compiler.CompilerHost
	extendedConfigCache   collections.SyncMap[tspath.Path, *tsoptions.ExtendedConfigCacheEntry]
	sourceFiles           collections.SyncMap[ast.SourceFileParseOptions, *ast.SourceFile]
	resolvedReferences    collections.SyncMap[tspath.Path, *configAndTime]
	buildInfos            collections.SyncMap[tspath.Path, *incremental.BuildInfo]
	modifiedTimes         collections.SyncMap[tspath.Path, time.Time]
	latestChangedDtsFiles collections.SyncMap[tspath.Path, time.Time]
}

var (
	_ compiler.CompilerHost       = (*solutionBuilderHost)(nil)
	_ incremental.BuildInfoReader = (*solutionBuilderHost)(nil)
)

func (h *solutionBuilderHost) FS() vfs.FS {
	return h.host.FS()
}

func (h *solutionBuilderHost) DefaultLibraryPath() string {
	return h.host.DefaultLibraryPath()
}

func (h *solutionBuilderHost) GetCurrentDirectory() string {
	return h.host.GetCurrentDirectory()
}

func (h *solutionBuilderHost) Trace(msg string) {
	//!!! TODO: implement
}

func (h *solutionBuilderHost) GetSourceFile(opts ast.SourceFileParseOptions) *ast.SourceFile {
	if existing, loaded := h.sourceFiles.Load(opts); loaded {
		return existing
	}

	file := h.host.GetSourceFile(opts)
	file, _ = h.sourceFiles.LoadOrStore(opts, file)
	return file
}

func (h *solutionBuilderHost) GetResolvedProjectReference(fileName string, path tspath.Path) *tsoptions.ParsedCommandLine {
	if existing, loaded := h.resolvedReferences.Load(path); loaded {
		return existing.resolved
	}
	configStart := h.builder.opts.sys.Now()
	commandLine, _ := tsoptions.GetParsedCommandLineOfConfigFilePath(fileName, path, h.builder.opts.command.CompilerOptions, h, &h.extendedConfigCache)
	configTime := h.builder.opts.sys.Now().Sub(configStart)
	configAndTime, _ := h.resolvedReferences.LoadOrStore(path, &configAndTime{resolved: commandLine, time: configTime})
	return configAndTime.resolved
}

func (h *solutionBuilderHost) ReadBuildInfo(buildInfoFileName string) *incremental.BuildInfo {
	path := h.builder.toPath(buildInfoFileName)
	if existing, loaded := h.buildInfos.Load(path); loaded {
		return existing
	}
	buildInfo := incremental.NewBuildInfoReader(h).ReadBuildInfo(buildInfoFileName)
	buildInfo, _ = h.buildInfos.LoadOrStore(path, buildInfo)
	return buildInfo
}

func (h *solutionBuilderHost) GetModifiedTime(file string) time.Time {
	path := h.builder.toPath(file)
	if existing, loaded := h.modifiedTimes.Load(path); loaded {
		return existing
	}
	stat := h.host.FS().Stat(file)
	var modTime time.Time
	if stat != nil {
		modTime = stat.ModTime()
	}
	modTime, _ = h.modifiedTimes.LoadOrStore(path, modTime)
	return modTime
}

func (h *solutionBuilderHost) getLatestChangedDtsTime(config string) time.Time {
	path := h.builder.toPath(config)
	if existing, loaded := h.latestChangedDtsFiles.Load(path); loaded {
		return existing
	}

	var changedDtsTime time.Time
	if configAndTime, loaded := h.resolvedReferences.Load(path); loaded {
		buildInfoPath := configAndTime.resolved.GetBuildInfoFileName()
		buildInfo, loaded := h.buildInfos.Load(h.builder.toPath(buildInfoPath))
		if loaded && buildInfo != nil && buildInfo.LatestChangedDtsFile != "" {
			changedDtsTime = h.GetModifiedTime(
				tspath.GetNormalizedAbsolutePath(
					buildInfo.LatestChangedDtsFile,
					tspath.GetDirectoryPath(tspath.GetNormalizedAbsolutePath(buildInfoPath, h.GetCurrentDirectory())),
				),
			)
		}
	}

	changedDtsTime, _ = h.modifiedTimes.LoadOrStore(path, changedDtsTime)
	return changedDtsTime
}
