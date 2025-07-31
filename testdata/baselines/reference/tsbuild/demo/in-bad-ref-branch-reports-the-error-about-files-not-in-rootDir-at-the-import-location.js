currentDirectory::/user/username/projects/demo
useCaseSensitiveFileNames::true
Input::
//// [/user/username/projects/demo/animals/animal.ts] *new* 
export type Size = "small" | "medium" | "large";
export default interface Animal {
    size: Size;
}
//// [/user/username/projects/demo/animals/dog.ts] *new* 
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
            console.log(`${ this.name } says "Woof"!`);
        },
        name: makeRandomName()
    });
}
//// [/user/username/projects/demo/animals/index.ts] *new* 
import Animal from './animal';

export default Animal;
import { createDog, Dog } from './dog';
export { createDog, Dog };
//// [/user/username/projects/demo/animals/tsconfig.json] *new* 
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
//// [/user/username/projects/demo/core/tsconfig.json] *new* 
{
    "extends": "../tsconfig-base.json",
    "compilerOptions": {
        "outDir": "../lib/core",
        "rootDir": "."
    },
}
//// [/user/username/projects/demo/core/utilities.ts] *new* 
import * as A from '../animals'
export function makeRandomName() {
    return "Bob!?! ";
}

export function lastElementOf<T>(arr: T[]): T | undefined {
    if (arr.length === 0) return undefined;
    return arr[arr.length - 1];
}
//// [/user/username/projects/demo/tsconfig-base.json] *new* 
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
//// [/user/username/projects/demo/tsconfig.json] *new* 
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
//// [/user/username/projects/demo/zoo/tsconfig.json] *new* 
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
//// [/user/username/projects/demo/zoo/zoo.ts] *new* 
import { Dog, createDog } from '../animals/index';

export function createZoo(): Array<Dog> {
    return [
        createDog()
    ];
}

tsgo --b --verbose
ExitStatus:: DiagnosticsPresent_OutputsGenerated
Output::
[[90mHH:MM:SS AM[0m] Projects in this build: 
    * core/tsconfig.json
    * animals/tsconfig.json
    * zoo/tsconfig.json
    * tsconfig.json

[[90mHH:MM:SS AM[0m] Project 'core/tsconfig.json' is out of date because output file 'lib/core/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project 'core/tsconfig.json'...

[96manimals/animal.ts[0m:[93m1[0m:[93m1[0m - [91merror[0m[90m TS6307: [0mFile '/user/username/projects/demo/animals/animal.ts' is not listed within the file list of project '/user/username/projects/demo/core/tsconfig.json'. Projects must list all files or use an 'include' pattern.

[7m1[0m export type Size = "small" | "medium" | "large";
[7m [0m [91m~[0m

[96manimals/dog.ts[0m:[93m1[0m:[93m1[0m - [91merror[0m[90m TS6307: [0mFile '/user/username/projects/demo/animals/dog.ts' is not listed within the file list of project '/user/username/projects/demo/core/tsconfig.json'. Projects must list all files or use an 'include' pattern.

[7m1[0m import Animal from '.';
[7m [0m [91m~[0m

[96manimals/index.ts[0m:[93m1[0m:[93m1[0m - [91merror[0m[90m TS6307: [0mFile '/user/username/projects/demo/animals/index.ts' is not listed within the file list of project '/user/username/projects/demo/core/tsconfig.json'. Projects must list all files or use an 'include' pattern.

[7m1[0m import Animal from './animal';
[7m [0m [91m~[0m

[[90mHH:MM:SS AM[0m] Project 'animals/tsconfig.json' is out of date because output file 'lib/animals/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project 'animals/tsconfig.json'...

[[90mHH:MM:SS AM[0m] Project 'zoo/tsconfig.json' is out of date because output file 'lib/zoo/tsconfig.tsbuildinfo' does not exist

[[90mHH:MM:SS AM[0m] Building project 'zoo/tsconfig.json'...


Found 3 errors in 3 files.

Errors  Files
     1  animals/animal.ts[90m:1[0m
     1  animals/dog.ts[90m:1[0m
     1  animals/index.ts[90m:1[0m

//// [/home/src/tslibs/TS/Lib/lib.d.ts] *Lib*
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
interface SymbolConstructor {
    (desc?: string | number): symbol;
    for(name: string): symbol;
    readonly toStringTag: symbol;
}
declare var Symbol: SymbolConstructor;
interface Symbol {
    readonly [Symbol.toStringTag]: string;
}
declare const console: { log(msg: any): void; };
//// [/user/username/projects/demo/animals/animal.d.ts] *new* 
export type Size = "small" | "medium" | "large";
export default interface Animal {
    size: Size;
}

//// [/user/username/projects/demo/animals/animal.js] *new* 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

//// [/user/username/projects/demo/animals/dog.d.ts] *new* 
import Animal from '.';
export interface Dog extends Animal {
    woof(): void;
    name: string;
}
export declare function createDog(): Dog;

//// [/user/username/projects/demo/animals/dog.js] *new* 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDog = createDog;
const utilities_1 = require("../core/utilities");
function createDog() {
    return ({
        size: "medium",
        woof: function () {
            console.log(`${this.name} says "Woof"!`);
        },
        name: (0, utilities_1.makeRandomName)()
    });
}

//// [/user/username/projects/demo/animals/index.d.ts] *new* 
import Animal from './animal';
export default Animal;
import { createDog, Dog } from './dog';
export { createDog, Dog };

//// [/user/username/projects/demo/animals/index.js] *new* 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDog = void 0;
const dog_1 = require("./dog");
Object.defineProperty(exports, "createDog", { enumerable: true, get: function () { return dog_1.createDog; } });

//// [/user/username/projects/demo/lib/animals/animal.d.ts] *new* 
export type Size = "small" | "medium" | "large";
export default interface Animal {
    size: Size;
}

//// [/user/username/projects/demo/lib/animals/animal.js] *new* 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

//// [/user/username/projects/demo/lib/animals/dog.d.ts] *new* 
import Animal from '.';
export interface Dog extends Animal {
    woof(): void;
    name: string;
}
export declare function createDog(): Dog;

//// [/user/username/projects/demo/lib/animals/dog.js] *new* 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDog = createDog;
const utilities_1 = require("../core/utilities");
function createDog() {
    return ({
        size: "medium",
        woof: function () {
            console.log(`${this.name} says "Woof"!`);
        },
        name: (0, utilities_1.makeRandomName)()
    });
}

//// [/user/username/projects/demo/lib/animals/index.d.ts] *new* 
import Animal from './animal';
export default Animal;
import { createDog, Dog } from './dog';
export { createDog, Dog };

//// [/user/username/projects/demo/lib/animals/index.js] *new* 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDog = void 0;
const dog_1 = require("./dog");
Object.defineProperty(exports, "createDog", { enumerable: true, get: function () { return dog_1.createDog; } });

//// [/user/username/projects/demo/lib/animals/tsconfig.tsbuildinfo] *new* 
{"version":"FakeTSVersion","fileNames":["../../../../../../home/src/tslibs/TS/Lib/lib.d.ts","../../animals/animal.ts","../../animals/index.ts","../core/utilities.d.ts","../../animals/dog.ts"],"fileInfos":[{"version":"eae9e83ef0f77eeb2e35dc9b91facce1-/// \u003creference no-default-lib=\"true\"/\u003e\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array\u003cT\u003e { length: number; [n: number]: T; }\ninterface ReadonlyArray\u003cT\u003e {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"5339eebb3884229214fcf35402516a12-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}","signature":"bc4b11c8a29689bfd33f685eda2d8b88-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}\n","impliedNodeFormat":1},{"version":"ee61c4e494f5a5e8ecdc4829316917b6-import Animal from './animal';\n\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };","signature":"7d327a7e885a13b892a80d0b0eb94dc2-import Animal from './animal';\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };\n","impliedNodeFormat":1},"887d244a72907bf26f61dbeefc0581e8-export declare function makeRandomName(): string;\nexport declare function lastElementOf\u003cT\u003e(arr: T[]): T | undefined;\n",{"version":"fe591959b771c416c1f86646f10fc0b7-import Animal from '.';\nimport { makeRandomName } from '../core/utilities';\n\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\n\nexport function createDog(): Dog {\n    return ({\n        size: \"medium\",\n        woof: function(this: Dog) {\n            console.log(`${ this.name } says \"Woof\"!`);\n        },\n        name: makeRandomName()\n    });\n}","signature":"d380704a1d0b123ccfc312afad0d4699-import Animal from '.';\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\nexport declare function createDog(): Dog;\n","impliedNodeFormat":1}],"fileIdsList":[[3,4],[2,5]],"options":{"composite":true,"declaration":true,"module":1,"noFallthroughCasesInSwitch":true,"noImplicitReturns":true,"noUnusedLocals":true,"noUnusedParameters":true,"outDir":"./","rootDir":"../../animals","strict":true,"target":1},"referencedMap":[[5,1],[3,2]],"latestChangedDtsFile":"./index.d.ts"}
//// [/user/username/projects/demo/lib/animals/tsconfig.tsbuildinfo.readable.baseline.txt] *new* 
{
  "version": "FakeTSVersion",
  "fileNames": [
    "../../../../../../home/src/tslibs/TS/Lib/lib.d.ts",
    "../../animals/animal.ts",
    "../../animals/index.ts",
    "../core/utilities.d.ts",
    "../../animals/dog.ts"
  ],
  "fileInfos": [
    {
      "fileName": "../../../../../../home/src/tslibs/TS/Lib/lib.d.ts",
      "version": "eae9e83ef0f77eeb2e35dc9b91facce1-/// \u003creference no-default-lib=\"true\"/\u003e\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array\u003cT\u003e { length: number; [n: number]: T; }\ninterface ReadonlyArray\u003cT\u003e {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
      "signature": "eae9e83ef0f77eeb2e35dc9b91facce1-/// \u003creference no-default-lib=\"true\"/\u003e\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array\u003cT\u003e { length: number; [n: number]: T; }\ninterface ReadonlyArray\u003cT\u003e {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "eae9e83ef0f77eeb2e35dc9b91facce1-/// \u003creference no-default-lib=\"true\"/\u003e\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array\u003cT\u003e { length: number; [n: number]: T; }\ninterface ReadonlyArray\u003cT\u003e {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../../animals/animal.ts",
      "version": "5339eebb3884229214fcf35402516a12-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}",
      "signature": "bc4b11c8a29689bfd33f685eda2d8b88-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "5339eebb3884229214fcf35402516a12-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}",
        "signature": "bc4b11c8a29689bfd33f685eda2d8b88-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../../animals/index.ts",
      "version": "ee61c4e494f5a5e8ecdc4829316917b6-import Animal from './animal';\n\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };",
      "signature": "7d327a7e885a13b892a80d0b0eb94dc2-import Animal from './animal';\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "ee61c4e494f5a5e8ecdc4829316917b6-import Animal from './animal';\n\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };",
        "signature": "7d327a7e885a13b892a80d0b0eb94dc2-import Animal from './animal';\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../core/utilities.d.ts",
      "version": "887d244a72907bf26f61dbeefc0581e8-export declare function makeRandomName(): string;\nexport declare function lastElementOf\u003cT\u003e(arr: T[]): T | undefined;\n",
      "signature": "887d244a72907bf26f61dbeefc0581e8-export declare function makeRandomName(): string;\nexport declare function lastElementOf\u003cT\u003e(arr: T[]): T | undefined;\n",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "../../animals/dog.ts",
      "version": "fe591959b771c416c1f86646f10fc0b7-import Animal from '.';\nimport { makeRandomName } from '../core/utilities';\n\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\n\nexport function createDog(): Dog {\n    return ({\n        size: \"medium\",\n        woof: function(this: Dog) {\n            console.log(`${ this.name } says \"Woof\"!`);\n        },\n        name: makeRandomName()\n    });\n}",
      "signature": "d380704a1d0b123ccfc312afad0d4699-import Animal from '.';\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\nexport declare function createDog(): Dog;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "fe591959b771c416c1f86646f10fc0b7-import Animal from '.';\nimport { makeRandomName } from '../core/utilities';\n\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\n\nexport function createDog(): Dog {\n    return ({\n        size: \"medium\",\n        woof: function(this: Dog) {\n            console.log(`${ this.name } says \"Woof\"!`);\n        },\n        name: makeRandomName()\n    });\n}",
        "signature": "d380704a1d0b123ccfc312afad0d4699-import Animal from '.';\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\nexport declare function createDog(): Dog;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "../../animals/index.ts",
      "../core/utilities.d.ts"
    ],
    [
      "../../animals/animal.ts",
      "../../animals/dog.ts"
    ]
  ],
  "options": {
    "composite": true,
    "declaration": true,
    "module": 1,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "outDir": "./",
    "rootDir": "../../animals",
    "strict": true,
    "target": 1
  },
  "referencedMap": {
    "../../animals/dog.ts": [
      "../../animals/index.ts",
      "../core/utilities.d.ts"
    ],
    "../../animals/index.ts": [
      "../../animals/animal.ts",
      "../../animals/dog.ts"
    ]
  },
  "latestChangedDtsFile": "./index.d.ts",
  "size": 2860
}
//// [/user/username/projects/demo/lib/core/tsconfig.tsbuildinfo] *new* 
{"version":"FakeTSVersion","fileNames":["../../../../../../home/src/tslibs/TS/Lib/lib.d.ts","../../animals/animal.ts","../../animals/dog.ts","../../animals/index.ts","../../core/utilities.ts"],"fileInfos":[{"version":"eae9e83ef0f77eeb2e35dc9b91facce1-/// \u003creference no-default-lib=\"true\"/\u003e\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array\u003cT\u003e { length: number; [n: number]: T; }\ninterface ReadonlyArray\u003cT\u003e {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"5339eebb3884229214fcf35402516a12-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}","signature":"bc4b11c8a29689bfd33f685eda2d8b88-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}\n","impliedNodeFormat":1},{"version":"fe591959b771c416c1f86646f10fc0b7-import Animal from '.';\nimport { makeRandomName } from '../core/utilities';\n\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\n\nexport function createDog(): Dog {\n    return ({\n        size: \"medium\",\n        woof: function(this: Dog) {\n            console.log(`${ this.name } says \"Woof\"!`);\n        },\n        name: makeRandomName()\n    });\n}","signature":"d380704a1d0b123ccfc312afad0d4699-import Animal from '.';\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\nexport declare function createDog(): Dog;\n","impliedNodeFormat":1},{"version":"ee61c4e494f5a5e8ecdc4829316917b6-import Animal from './animal';\n\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };","signature":"7d327a7e885a13b892a80d0b0eb94dc2-import Animal from './animal';\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };\n","impliedNodeFormat":1},{"version":"28601ab82df3c8e5235373b8a9b5fab0-import * as A from '../animals'\nexport function makeRandomName() {\n    return \"Bob!?! \";\n}\n\nexport function lastElementOf\u003cT\u003e(arr: T[]): T | undefined {\n    if (arr.length === 0) return undefined;\n    return arr[arr.length - 1];\n}","signature":"887d244a72907bf26f61dbeefc0581e8-export declare function makeRandomName(): string;\nexport declare function lastElementOf\u003cT\u003e(arr: T[]): T | undefined;\n","impliedNodeFormat":1}],"fileIdsList":[[4,5],[2,3],[4]],"options":{"composite":true,"declaration":true,"module":1,"noFallthroughCasesInSwitch":true,"noImplicitReturns":true,"noUnusedLocals":true,"noUnusedParameters":true,"outDir":"./","rootDir":"../../core","strict":true,"target":1},"referencedMap":[[3,1],[4,2],[5,3]],"semanticDiagnosticsPerFile":[1,2,3,4,5],"latestChangedDtsFile":"./utilities.d.ts"}
//// [/user/username/projects/demo/lib/core/tsconfig.tsbuildinfo.readable.baseline.txt] *new* 
{
  "version": "FakeTSVersion",
  "fileNames": [
    "../../../../../../home/src/tslibs/TS/Lib/lib.d.ts",
    "../../animals/animal.ts",
    "../../animals/dog.ts",
    "../../animals/index.ts",
    "../../core/utilities.ts"
  ],
  "fileInfos": [
    {
      "fileName": "../../../../../../home/src/tslibs/TS/Lib/lib.d.ts",
      "version": "eae9e83ef0f77eeb2e35dc9b91facce1-/// \u003creference no-default-lib=\"true\"/\u003e\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array\u003cT\u003e { length: number; [n: number]: T; }\ninterface ReadonlyArray\u003cT\u003e {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
      "signature": "eae9e83ef0f77eeb2e35dc9b91facce1-/// \u003creference no-default-lib=\"true\"/\u003e\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array\u003cT\u003e { length: number; [n: number]: T; }\ninterface ReadonlyArray\u003cT\u003e {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "eae9e83ef0f77eeb2e35dc9b91facce1-/// \u003creference no-default-lib=\"true\"/\u003e\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array\u003cT\u003e { length: number; [n: number]: T; }\ninterface ReadonlyArray\u003cT\u003e {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../../animals/animal.ts",
      "version": "5339eebb3884229214fcf35402516a12-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}",
      "signature": "bc4b11c8a29689bfd33f685eda2d8b88-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "5339eebb3884229214fcf35402516a12-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}",
        "signature": "bc4b11c8a29689bfd33f685eda2d8b88-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../../animals/dog.ts",
      "version": "fe591959b771c416c1f86646f10fc0b7-import Animal from '.';\nimport { makeRandomName } from '../core/utilities';\n\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\n\nexport function createDog(): Dog {\n    return ({\n        size: \"medium\",\n        woof: function(this: Dog) {\n            console.log(`${ this.name } says \"Woof\"!`);\n        },\n        name: makeRandomName()\n    });\n}",
      "signature": "d380704a1d0b123ccfc312afad0d4699-import Animal from '.';\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\nexport declare function createDog(): Dog;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "fe591959b771c416c1f86646f10fc0b7-import Animal from '.';\nimport { makeRandomName } from '../core/utilities';\n\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\n\nexport function createDog(): Dog {\n    return ({\n        size: \"medium\",\n        woof: function(this: Dog) {\n            console.log(`${ this.name } says \"Woof\"!`);\n        },\n        name: makeRandomName()\n    });\n}",
        "signature": "d380704a1d0b123ccfc312afad0d4699-import Animal from '.';\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\nexport declare function createDog(): Dog;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../../animals/index.ts",
      "version": "ee61c4e494f5a5e8ecdc4829316917b6-import Animal from './animal';\n\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };",
      "signature": "7d327a7e885a13b892a80d0b0eb94dc2-import Animal from './animal';\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "ee61c4e494f5a5e8ecdc4829316917b6-import Animal from './animal';\n\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };",
        "signature": "7d327a7e885a13b892a80d0b0eb94dc2-import Animal from './animal';\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../../core/utilities.ts",
      "version": "28601ab82df3c8e5235373b8a9b5fab0-import * as A from '../animals'\nexport function makeRandomName() {\n    return \"Bob!?! \";\n}\n\nexport function lastElementOf\u003cT\u003e(arr: T[]): T | undefined {\n    if (arr.length === 0) return undefined;\n    return arr[arr.length - 1];\n}",
      "signature": "887d244a72907bf26f61dbeefc0581e8-export declare function makeRandomName(): string;\nexport declare function lastElementOf\u003cT\u003e(arr: T[]): T | undefined;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "28601ab82df3c8e5235373b8a9b5fab0-import * as A from '../animals'\nexport function makeRandomName() {\n    return \"Bob!?! \";\n}\n\nexport function lastElementOf\u003cT\u003e(arr: T[]): T | undefined {\n    if (arr.length === 0) return undefined;\n    return arr[arr.length - 1];\n}",
        "signature": "887d244a72907bf26f61dbeefc0581e8-export declare function makeRandomName(): string;\nexport declare function lastElementOf\u003cT\u003e(arr: T[]): T | undefined;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "../../animals/index.ts",
      "../../core/utilities.ts"
    ],
    [
      "../../animals/animal.ts",
      "../../animals/dog.ts"
    ],
    [
      "../../animals/index.ts"
    ]
  ],
  "options": {
    "composite": true,
    "declaration": true,
    "module": 1,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "outDir": "./",
    "rootDir": "../../core",
    "strict": true,
    "target": 1
  },
  "referencedMap": {
    "../../animals/dog.ts": [
      "../../animals/index.ts",
      "../../core/utilities.ts"
    ],
    "../../animals/index.ts": [
      "../../animals/animal.ts",
      "../../animals/dog.ts"
    ],
    "../../core/utilities.ts": [
      "../../animals/index.ts"
    ]
  },
  "semanticDiagnosticsPerFile": [
    "../../../../../../home/src/tslibs/TS/Lib/lib.d.ts",
    "../../animals/animal.ts",
    "../../animals/dog.ts",
    "../../animals/index.ts",
    "../../core/utilities.ts"
  ],
  "latestChangedDtsFile": "./utilities.d.ts",
  "size": 3244
}
//// [/user/username/projects/demo/lib/core/utilities.d.ts] *new* 
export declare function makeRandomName(): string;
export declare function lastElementOf<T>(arr: T[]): T | undefined;

//// [/user/username/projects/demo/lib/core/utilities.js] *new* 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRandomName = makeRandomName;
exports.lastElementOf = lastElementOf;
function makeRandomName() {
    return "Bob!?! ";
}
function lastElementOf(arr) {
    if (arr.length === 0)
        return undefined;
    return arr[arr.length - 1];
}

//// [/user/username/projects/demo/lib/zoo/tsconfig.tsbuildinfo] *new* 
{"version":"FakeTSVersion","fileNames":["../../../../../../home/src/tslibs/TS/Lib/lib.d.ts","../animals/animal.d.ts","../animals/dog.d.ts","../animals/index.d.ts","../../zoo/zoo.ts"],"fileInfos":[{"version":"eae9e83ef0f77eeb2e35dc9b91facce1-/// \u003creference no-default-lib=\"true\"/\u003e\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array\u003cT\u003e { length: number; [n: number]: T; }\ninterface ReadonlyArray\u003cT\u003e {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedNodeFormat":1},"bc4b11c8a29689bfd33f685eda2d8b88-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}\n","d380704a1d0b123ccfc312afad0d4699-import Animal from '.';\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\nexport declare function createDog(): Dog;\n","7d327a7e885a13b892a80d0b0eb94dc2-import Animal from './animal';\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };\n",{"version":"a18fe42e29074819412bcf92fea34726-import { Dog, createDog } from '../animals/index';\n\nexport function createZoo(): Array\u003cDog\u003e {\n    return [\n        createDog()\n    ];\n}","signature":"635df4a3dd96d0e28bb7d179b541db5f-import { Dog } from '../animals/index';\nexport declare function createZoo(): Array\u003cDog\u003e;\n","impliedNodeFormat":1}],"fileIdsList":[[4],[2,3]],"options":{"composite":true,"declaration":true,"module":1,"noFallthroughCasesInSwitch":true,"noImplicitReturns":true,"noUnusedLocals":true,"noUnusedParameters":true,"outDir":"./","rootDir":"../../zoo","strict":true,"target":1},"referencedMap":[[3,1],[4,2],[5,1]],"latestChangedDtsFile":"./zoo.d.ts"}
//// [/user/username/projects/demo/lib/zoo/tsconfig.tsbuildinfo.readable.baseline.txt] *new* 
{
  "version": "FakeTSVersion",
  "fileNames": [
    "../../../../../../home/src/tslibs/TS/Lib/lib.d.ts",
    "../animals/animal.d.ts",
    "../animals/dog.d.ts",
    "../animals/index.d.ts",
    "../../zoo/zoo.ts"
  ],
  "fileInfos": [
    {
      "fileName": "../../../../../../home/src/tslibs/TS/Lib/lib.d.ts",
      "version": "eae9e83ef0f77eeb2e35dc9b91facce1-/// \u003creference no-default-lib=\"true\"/\u003e\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array\u003cT\u003e { length: number; [n: number]: T; }\ninterface ReadonlyArray\u003cT\u003e {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
      "signature": "eae9e83ef0f77eeb2e35dc9b91facce1-/// \u003creference no-default-lib=\"true\"/\u003e\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array\u003cT\u003e { length: number; [n: number]: T; }\ninterface ReadonlyArray\u003cT\u003e {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "eae9e83ef0f77eeb2e35dc9b91facce1-/// \u003creference no-default-lib=\"true\"/\u003e\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array\u003cT\u003e { length: number; [n: number]: T; }\ninterface ReadonlyArray\u003cT\u003e {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "../animals/animal.d.ts",
      "version": "bc4b11c8a29689bfd33f685eda2d8b88-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}\n",
      "signature": "bc4b11c8a29689bfd33f685eda2d8b88-export type Size = \"small\" | \"medium\" | \"large\";\nexport default interface Animal {\n    size: Size;\n}\n",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "../animals/dog.d.ts",
      "version": "d380704a1d0b123ccfc312afad0d4699-import Animal from '.';\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\nexport declare function createDog(): Dog;\n",
      "signature": "d380704a1d0b123ccfc312afad0d4699-import Animal from '.';\nexport interface Dog extends Animal {\n    woof(): void;\n    name: string;\n}\nexport declare function createDog(): Dog;\n",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "../animals/index.d.ts",
      "version": "7d327a7e885a13b892a80d0b0eb94dc2-import Animal from './animal';\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };\n",
      "signature": "7d327a7e885a13b892a80d0b0eb94dc2-import Animal from './animal';\nexport default Animal;\nimport { createDog, Dog } from './dog';\nexport { createDog, Dog };\n",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "../../zoo/zoo.ts",
      "version": "a18fe42e29074819412bcf92fea34726-import { Dog, createDog } from '../animals/index';\n\nexport function createZoo(): Array\u003cDog\u003e {\n    return [\n        createDog()\n    ];\n}",
      "signature": "635df4a3dd96d0e28bb7d179b541db5f-import { Dog } from '../animals/index';\nexport declare function createZoo(): Array\u003cDog\u003e;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "a18fe42e29074819412bcf92fea34726-import { Dog, createDog } from '../animals/index';\n\nexport function createZoo(): Array\u003cDog\u003e {\n    return [\n        createDog()\n    ];\n}",
        "signature": "635df4a3dd96d0e28bb7d179b541db5f-import { Dog } from '../animals/index';\nexport declare function createZoo(): Array\u003cDog\u003e;\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "../animals/index.d.ts"
    ],
    [
      "../animals/animal.d.ts",
      "../animals/dog.d.ts"
    ]
  ],
  "options": {
    "composite": true,
    "declaration": true,
    "module": 1,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "outDir": "./",
    "rootDir": "../../zoo",
    "strict": true,
    "target": 1
  },
  "referencedMap": {
    "../animals/dog.d.ts": [
      "../animals/index.d.ts"
    ],
    "../animals/index.d.ts": [
      "../animals/animal.d.ts",
      "../animals/dog.d.ts"
    ],
    "../../zoo/zoo.ts": [
      "../animals/index.d.ts"
    ]
  },
  "latestChangedDtsFile": "./zoo.d.ts",
  "size": 2184
}
//// [/user/username/projects/demo/lib/zoo/zoo.d.ts] *new* 
import { Dog } from '../animals/index';
export declare function createZoo(): Array<Dog>;

//// [/user/username/projects/demo/lib/zoo/zoo.js] *new* 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createZoo = createZoo;
const index_1 = require("../animals/index");
function createZoo() {
    return [
        (0, index_1.createDog)()
    ];
}


/user/username/projects/demo/core/tsconfig.json::
SemanticDiagnostics::
*not cached* /home/src/tslibs/TS/Lib/lib.d.ts
*not cached* /user/username/projects/demo/animals/animal.ts
*not cached* /user/username/projects/demo/animals/dog.ts
*not cached* /user/username/projects/demo/animals/index.ts
*not cached* /user/username/projects/demo/core/utilities.ts
Signatures::
(stored at emit) /user/username/projects/demo/animals/animal.ts
(stored at emit) /user/username/projects/demo/animals/dog.ts
(stored at emit) /user/username/projects/demo/animals/index.ts
(stored at emit) /user/username/projects/demo/core/utilities.ts

/user/username/projects/demo/animals/tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/tslibs/TS/Lib/lib.d.ts
*refresh*    /user/username/projects/demo/animals/animal.ts
*refresh*    /user/username/projects/demo/animals/index.ts
*refresh*    /user/username/projects/demo/lib/core/utilities.d.ts
*refresh*    /user/username/projects/demo/animals/dog.ts
Signatures::
(stored at emit) /user/username/projects/demo/animals/animal.ts
(stored at emit) /user/username/projects/demo/animals/index.ts
(stored at emit) /user/username/projects/demo/animals/dog.ts

/user/username/projects/demo/zoo/tsconfig.json::
SemanticDiagnostics::
*refresh*    /home/src/tslibs/TS/Lib/lib.d.ts
*refresh*    /user/username/projects/demo/lib/animals/animal.d.ts
*refresh*    /user/username/projects/demo/lib/animals/dog.d.ts
*refresh*    /user/username/projects/demo/lib/animals/index.d.ts
*refresh*    /user/username/projects/demo/zoo/zoo.ts
Signatures::
(stored at emit) /user/username/projects/demo/zoo/zoo.ts
