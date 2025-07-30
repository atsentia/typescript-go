package execute_test

import (
	"testing"

	"github.com/microsoft/typescript-go/internal/testutil/stringtestutil"
)

func TestBuildCommandLine(t *testing.T) {
	t.Parallel()
	testCases := []*tscInput{
		{
			subScenario:     "help",
			files:           FileMap{},
			commandLineArgs: []string{"--build", "--help"},
		},
	}

	for _, test := range testCases {
		test.run(t, "commandLine")
	}
}

func TestBuildClean(t *testing.T) {
	t.Parallel()
	testCases := []*tscInput{
		{
			subScenario: "file name and output name clashing",
			files: FileMap{
				"/home/src/workspaces/solution/index.js": "",
				"/home/src/workspaces/solution/bar.ts":   "",
				"/home/src/workspaces/solution/tsconfig.json": stringtestutil.Dedent(`
				{
					"compilerOptions": { "allowJs": true }
				}`),
			},
			cwd:             "/home/src/workspaces/solution",
			commandLineArgs: []string{"--b", "--clean"},
		},
		{
			subScenario: "tsx with dts emit",
			files: FileMap{
				"/home/src/workspaces/solution/project/src/main.tsx": "export const x = 10;",
				"/home/src/workspaces/solution/project/tsconfig.json": stringtestutil.Dedent(`
				{
					"compilerOptions": { "declaration": true },
					"include": ["src/**/*.tsx", "src/**/*.ts"]
				}`),
			},
			cwd:             "/home/src/workspaces/solution",
			commandLineArgs: []string{"--b", "project", "-v", "--explainFiles"},
			edits: []*testTscEdit{
				{
					caption:      "no change",
					expectedDiff: "Verbose output status will be different because of up-to-date-ness checks",
				},
				{
					caption:         "clean build",
					commandLineArgs: []string{"-b", "project", "--clean"},
				},
			},
		},
	}

	for _, test := range testCases {
		test.run(t, "clean")
	}
}

func TestBuildDemoProject(t *testing.T) {
	t.Parallel()
	testCases := []*tscInput{
		{
			subScenario:     "in master branch with everything setup correctly and reports no error",
			files:           getDemoFileMap(),
			cwd:             "/user/username/projects/demo",
			commandLineArgs: []string{"--b", "--verbose"},
			edits: []*testTscEdit{
				{
					caption:      "no change",
					expectedDiff: "Verbose output status will be different because of up-to-date-ness checks",
				},
			},
		},
		{
			subScenario:     "in circular branch reports the error about it by stopping build",
			files:           getCircularDemoFileMap(),
			cwd:             "/user/username/projects/demo",
			commandLineArgs: []string{"--b", "--verbose"},
		},
		{
			subScenario:     "in bad-ref branch reports the error about files not in rootDir at the import location",
			files:           getBadRefDemoFileMap(),
			cwd:             "/user/username/projects/demo",
			commandLineArgs: []string{"--b", "--verbose"},
		},
	}

	for _, test := range testCases {
		test.run(t, "demo")
	}
}

func getDemoFileMap() FileMap {
	return FileMap{
		"/user/username/projects/demo/animals/animal.ts": stringtestutil.Dedent(`
            export type Size = "small" | "medium" | "large";
            export default interface Animal {
                size: Size;
            }
        `),
		"/user/username/projects/demo/animals/dog.ts": stringtestutil.Dedent(`
            import Animal from '.';
            import { makeRandomName } from '../core/utilities';

            export interface Dog extends Animal {
                woof(): void;
                name: string;
            }

            export function createDog(): Dog {
                return ({
                    size: "medium",
                    woof: function(this: Dog) {
                        console.log(` + "`" + `${ this.name } says "Woof"!` + "`" + `);
                    },
                    name: makeRandomName()
                });
            }
        `),
		"/user/username/projects/demo/animals/index.ts": stringtestutil.Dedent(`
            import Animal from './animal';

            export default Animal;
            import { createDog, Dog } from './dog';
            export { createDog, Dog };
        `),
		"/user/username/projects/demo/animals/tsconfig.json": stringtestutil.Dedent(`
            {
                "extends": "../tsconfig-base.json",
                "compilerOptions": {
                    "outDir": "../lib/animals",
                    "rootDir": "."
                },
                "references": [
                    { "path": "../core" }
                ]
            }
        `),
		"/user/username/projects/demo/core/utilities.ts": stringtestutil.Dedent(`

            export function makeRandomName() {
                return "Bob!?! ";
            }

            export function lastElementOf<T>(arr: T[]): T | undefined {
                if (arr.length === 0) return undefined;
                return arr[arr.length - 1];
            }
        `),
		"/user/username/projects/demo/core/tsconfig.json": stringtestutil.Dedent(`
			{
				"extends": "../tsconfig-base.json",
				"compilerOptions": {
					"outDir": "../lib/core",
					"rootDir": "."
				},
			}
		`),
		"/user/username/projects/demo/zoo/zoo.ts": stringtestutil.Dedent(`
            import { Dog, createDog } from '../animals/index';

            export function createZoo(): Array<Dog> {
                return [
                    createDog()
                ];
            }
        `),
		"/user/username/projects/demo/zoo/tsconfig.json": stringtestutil.Dedent(`
            {
                "extends": "../tsconfig-base.json",
                "compilerOptions": {
                    "outDir": "../lib/zoo",
                    "rootDir": "."
                },
				"references": [
					{
						"path": "../animals"
					}
				]
        	}
        `),
		"/user/username/projects/demo/tsconfig-base.json": stringtestutil.Dedent(`
			{
				"compilerOptions": {
					"declaration": true,
					"target": "es5",
					"module": "commonjs",
					"strict": true,
					"noUnusedLocals": true,
					"noUnusedParameters": true,
					"noImplicitReturns": true,
					"noFallthroughCasesInSwitch": true,
					"composite": true,
				},
			}
		`),
		"/user/username/projects/demo/tsconfig.json": stringtestutil.Dedent(`
            {
                "files": [],
                "references": [
					{
						"path": "./core"
					},
					{
						"path": "./animals",
					},
					{
						"path": "./zoo",
					},
				],
        	}
		`),
	}
}

func getCircularDemoFileMap() FileMap {
	files := getDemoFileMap()
	files["/user/username/projects/demo/core/tsconfig.json"] = stringtestutil.Dedent(`
		{
			"extends": "../tsconfig-base.json",
			"compilerOptions": {
				"outDir": "../lib/core",
				"rootDir": "."
			},
			"references": [
				{
					"path": "../zoo",
				}
			]
		}
	`)
	return files
}

func getBadRefDemoFileMap() FileMap {
	files := getDemoFileMap()
	files["/user/username/projects/demo/core/utilities.ts"] = `import * as A from '../animals'
` + files["/user/username/projects/demo/core/utilities.ts"].(string)
	return files
}
