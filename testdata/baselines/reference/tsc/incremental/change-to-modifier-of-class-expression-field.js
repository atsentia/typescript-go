currentDirectory::/home/src/workspaces/project
useCaseSensitiveFileNames::true
Input::
//// [/home/src/tslibs/TS/Lib/lib.d.ts] *new* 
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
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;
//// [/home/src/workspaces/project/MessageablePerson.ts] *new* 
const Messageable = () => {
    return class MessageableClass {
        public message = 'hello';
    }
};
const wrapper = () => Messageable();
type MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;
export default MessageablePerson;
//// [/home/src/workspaces/project/main.ts] *new* 
import MessageablePerson from './MessageablePerson.js';
function logMessage( person: MessageablePerson ) {
    console.log( person.message );
}
//// [/home/src/workspaces/project/tsconfig.json] *new* 
{ 
    "compilerOptions": { 
        "module": "esnext"
    }
}

tsgo --incremental
ExitStatus:: Success
Output::
//// [/home/src/workspaces/project/MessageablePerson.js] *new* 
const Messageable = () => {
    return class MessageableClass {
        message = 'hello';
    };
};
const wrapper = () => Messageable();
export {};

//// [/home/src/workspaces/project/main.js] *new* 
function logMessage(person) {
    console.log(person.message);
}
export {};

//// [/home/src/workspaces/project/tsconfig.tsbuildinfo] *new* 
{"version":"FakeTSVersion","fileNames":["../../tslibs/TS/Lib/lib.d.ts","./MessageablePerson.ts","./main.ts"],"fileInfos":[{"version":"b19bd7c47bb2cad085a470ada95e9d46-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };\ntype ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;\ntype InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;","affectsGlobalScope":true,"impliedNodeFormat":1},"478b8f4f7da86d748405411aca04ae37-const Messageable = () => {\n    return class MessageableClass {\n        public message = 'hello';\n    }\n};\nconst wrapper = () => Messageable();\ntype MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;\nexport default MessageablePerson;","5f952704442dc1f1670d4f2073795b3d-import MessageablePerson from './MessageablePerson.js';\nfunction logMessage( person: MessageablePerson ) {\n    console.log( person.message );\n}"],"fileIdsList":[[2]],"options":{"module":99},"referencedMap":[[3,1]]}
//// [/home/src/workspaces/project/tsconfig.tsbuildinfo.readable.baseline.txt] *new* 
{
  "version": "FakeTSVersion",
  "fileNames": [
    "../../tslibs/TS/Lib/lib.d.ts",
    "./MessageablePerson.ts",
    "./main.ts"
  ],
  "fileInfos": [
    {
      "fileName": "../../tslibs/TS/Lib/lib.d.ts",
      "version": "b19bd7c47bb2cad085a470ada95e9d46-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };\ntype ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;\ntype InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;",
      "signature": "b19bd7c47bb2cad085a470ada95e9d46-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };\ntype ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;\ntype InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;",
      "affectsGlobalScope": true,
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "b19bd7c47bb2cad085a470ada95e9d46-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };\ntype ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;\ntype InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;",
        "affectsGlobalScope": true,
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./MessageablePerson.ts",
      "version": "478b8f4f7da86d748405411aca04ae37-const Messageable = () => {\n    return class MessageableClass {\n        public message = 'hello';\n    }\n};\nconst wrapper = () => Messageable();\ntype MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;\nexport default MessageablePerson;",
      "signature": "478b8f4f7da86d748405411aca04ae37-const Messageable = () => {\n    return class MessageableClass {\n        public message = 'hello';\n    }\n};\nconst wrapper = () => Messageable();\ntype MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;\nexport default MessageablePerson;",
      "impliedNodeFormat": "CommonJS"
    },
    {
      "fileName": "./main.ts",
      "version": "5f952704442dc1f1670d4f2073795b3d-import MessageablePerson from './MessageablePerson.js';\nfunction logMessage( person: MessageablePerson ) {\n    console.log( person.message );\n}",
      "signature": "5f952704442dc1f1670d4f2073795b3d-import MessageablePerson from './MessageablePerson.js';\nfunction logMessage( person: MessageablePerson ) {\n    console.log( person.message );\n}",
      "impliedNodeFormat": "CommonJS"
    }
  ],
  "fileIdsList": [
    [
      "./MessageablePerson.ts"
    ]
  ],
  "options": {
    "module": 99
  },
  "referencedMap": {
    "./main.ts": [
      "./MessageablePerson.ts"
    ]
  },
  "size": 1656
}

SemanticDiagnostics::
*refresh*    /home/src/tslibs/TS/Lib/lib.d.ts
*refresh*    /home/src/workspaces/project/MessageablePerson.ts
*refresh*    /home/src/workspaces/project/main.ts
Signatures::


Edit [0]:: no change

tsgo --incremental
ExitStatus:: Success
Output::

SemanticDiagnostics::
Signatures::


Edit [1]:: modify public to protected
//// [/home/src/workspaces/project/MessageablePerson.ts] *modified* 
const Messageable = () => {
    return class MessageableClass {
        protected message = 'hello';
    }
};
const wrapper = () => Messageable();
type MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;
export default MessageablePerson;

tsgo --incremental
ExitStatus:: DiagnosticsPresent_OutputsGenerated
Output::
[96mmain.ts[0m:[93m3[0m:[93m25[0m - [91merror[0m[90m TS2445: [0mProperty 'message' is protected and only accessible within class 'MessageableClass' and its subclasses.

[7m3[0m     console.log( person.message );
[7m [0m [91m                        ~~~~~~~[0m


Found 1 error in main.ts[90m:3[0m

//// [/home/src/workspaces/project/MessageablePerson.js] *rewrite with same content*
//// [/home/src/workspaces/project/main.js] *rewrite with same content*
//// [/home/src/workspaces/project/tsconfig.tsbuildinfo] *modified* 
{"version":"FakeTSVersion","fileNames":["../../tslibs/TS/Lib/lib.d.ts","./MessageablePerson.ts","./main.ts"],"fileInfos":[{"version":"b19bd7c47bb2cad085a470ada95e9d46-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };\ntype ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;\ntype InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"f53543280f8effd8b3b850717fc1e6ca-const Messageable = () => {\n    return class MessageableClass {\n        protected message = 'hello';\n    }\n};\nconst wrapper = () => Messageable();\ntype MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;\nexport default MessageablePerson;","signature":"ffd21efbace3a6b8be4c0a167934e8ab-declare const wrapper: () => {\n    new (): {\n        message: string;\n    };\n};\ntype MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;\nexport default MessageablePerson;\n\n(116,7): error4094: Property 'message' of exported anonymous class type may not be private or protected.\n(116,7): error9027: Add a type annotation to the variable wrapper.","impliedNodeFormat":1},{"version":"5f952704442dc1f1670d4f2073795b3d-import MessageablePerson from './MessageablePerson.js';\nfunction logMessage( person: MessageablePerson ) {\n    console.log( person.message );\n}","signature":"04e66752f096b7e8df60e5900b0692bc-export {};\n","impliedNodeFormat":1}],"fileIdsList":[[2]],"options":{"module":99},"referencedMap":[[3,1]],"semanticDiagnosticsPerFile":[[3,[{"pos":131,"end":138,"code":2445,"category":1,"message":"Property 'message' is protected and only accessible within class 'MessageableClass' and its subclasses."}]]]}
//// [/home/src/workspaces/project/tsconfig.tsbuildinfo.readable.baseline.txt] *modified* 
{
  "version": "FakeTSVersion",
  "fileNames": [
    "../../tslibs/TS/Lib/lib.d.ts",
    "./MessageablePerson.ts",
    "./main.ts"
  ],
  "fileInfos": [
    {
      "fileName": "../../tslibs/TS/Lib/lib.d.ts",
      "version": "b19bd7c47bb2cad085a470ada95e9d46-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };\ntype ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;\ntype InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;",
      "signature": "b19bd7c47bb2cad085a470ada95e9d46-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };\ntype ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;\ntype InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;",
      "affectsGlobalScope": true,
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "b19bd7c47bb2cad085a470ada95e9d46-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };\ntype ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;\ntype InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;",
        "affectsGlobalScope": true,
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./MessageablePerson.ts",
      "version": "f53543280f8effd8b3b850717fc1e6ca-const Messageable = () => {\n    return class MessageableClass {\n        protected message = 'hello';\n    }\n};\nconst wrapper = () => Messageable();\ntype MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;\nexport default MessageablePerson;",
      "signature": "ffd21efbace3a6b8be4c0a167934e8ab-declare const wrapper: () => {\n    new (): {\n        message: string;\n    };\n};\ntype MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;\nexport default MessageablePerson;\n\n(116,7): error4094: Property 'message' of exported anonymous class type may not be private or protected.\n(116,7): error9027: Add a type annotation to the variable wrapper.",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "f53543280f8effd8b3b850717fc1e6ca-const Messageable = () => {\n    return class MessageableClass {\n        protected message = 'hello';\n    }\n};\nconst wrapper = () => Messageable();\ntype MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;\nexport default MessageablePerson;",
        "signature": "ffd21efbace3a6b8be4c0a167934e8ab-declare const wrapper: () => {\n    new (): {\n        message: string;\n    };\n};\ntype MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;\nexport default MessageablePerson;\n\n(116,7): error4094: Property 'message' of exported anonymous class type may not be private or protected.\n(116,7): error9027: Add a type annotation to the variable wrapper.",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./main.ts",
      "version": "5f952704442dc1f1670d4f2073795b3d-import MessageablePerson from './MessageablePerson.js';\nfunction logMessage( person: MessageablePerson ) {\n    console.log( person.message );\n}",
      "signature": "04e66752f096b7e8df60e5900b0692bc-export {};\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "5f952704442dc1f1670d4f2073795b3d-import MessageablePerson from './MessageablePerson.js';\nfunction logMessage( person: MessageablePerson ) {\n    console.log( person.message );\n}",
        "signature": "04e66752f096b7e8df60e5900b0692bc-export {};\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "./MessageablePerson.ts"
    ]
  ],
  "options": {
    "module": 99
  },
  "referencedMap": {
    "./main.ts": [
      "./MessageablePerson.ts"
    ]
  },
  "semanticDiagnosticsPerFile": [
    [
      "./main.ts",
      [
        {
          "pos": 131,
          "end": 138,
          "code": 2445,
          "category": 1,
          "message": "Property 'message' is protected and only accessible within class 'MessageableClass' and its subclasses."
        }
      ]
    ]
  ],
  "size": 2397
}

SemanticDiagnostics::
*refresh*    /home/src/workspaces/project/MessageablePerson.ts
*refresh*    /home/src/workspaces/project/main.ts
Signatures::
(computed .d.ts) /home/src/workspaces/project/MessageablePerson.ts
(computed .d.ts) /home/src/workspaces/project/main.ts


Edit [2]:: no change

tsgo --incremental
ExitStatus:: DiagnosticsPresent_OutputsGenerated
Output::
[96mmain.ts[0m:[93m3[0m:[93m25[0m - [91merror[0m[90m TS2445: [0mProperty 'message' is protected and only accessible within class 'MessageableClass' and its subclasses.

[7m3[0m     console.log( person.message );
[7m [0m [91m                        ~~~~~~~[0m


Found 1 error in main.ts[90m:3[0m


SemanticDiagnostics::
Signatures::


Edit [3]:: modify protected to public
//// [/home/src/workspaces/project/MessageablePerson.ts] *modified* 
const Messageable = () => {
    return class MessageableClass {
        public message = 'hello';
    }
};
const wrapper = () => Messageable();
type MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;
export default MessageablePerson;

tsgo --incremental
ExitStatus:: Success
Output::
//// [/home/src/workspaces/project/MessageablePerson.js] *rewrite with same content*
//// [/home/src/workspaces/project/main.js] *rewrite with same content*
//// [/home/src/workspaces/project/tsconfig.tsbuildinfo] *modified* 
{"version":"FakeTSVersion","fileNames":["../../tslibs/TS/Lib/lib.d.ts","./MessageablePerson.ts","./main.ts"],"fileInfos":[{"version":"b19bd7c47bb2cad085a470ada95e9d46-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };\ntype ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;\ntype InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;","affectsGlobalScope":true,"impliedNodeFormat":1},{"version":"478b8f4f7da86d748405411aca04ae37-const Messageable = () => {\n    return class MessageableClass {\n        public message = 'hello';\n    }\n};\nconst wrapper = () => Messageable();\ntype MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;\nexport default MessageablePerson;","signature":"e4b2b952bee9815b3c9c9af8f1c315c0-declare const wrapper: () => {\n    new (): {\n        message: string;\n    };\n};\ntype MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;\nexport default MessageablePerson;\n","impliedNodeFormat":1},{"version":"5f952704442dc1f1670d4f2073795b3d-import MessageablePerson from './MessageablePerson.js';\nfunction logMessage( person: MessageablePerson ) {\n    console.log( person.message );\n}","signature":"04e66752f096b7e8df60e5900b0692bc-export {};\n","impliedNodeFormat":1}],"fileIdsList":[[2]],"options":{"module":99},"referencedMap":[[3,1]]}
//// [/home/src/workspaces/project/tsconfig.tsbuildinfo.readable.baseline.txt] *modified* 
{
  "version": "FakeTSVersion",
  "fileNames": [
    "../../tslibs/TS/Lib/lib.d.ts",
    "./MessageablePerson.ts",
    "./main.ts"
  ],
  "fileInfos": [
    {
      "fileName": "../../tslibs/TS/Lib/lib.d.ts",
      "version": "b19bd7c47bb2cad085a470ada95e9d46-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };\ntype ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;\ntype InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;",
      "signature": "b19bd7c47bb2cad085a470ada95e9d46-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };\ntype ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;\ntype InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;",
      "affectsGlobalScope": true,
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "b19bd7c47bb2cad085a470ada95e9d46-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ninterface SymbolConstructor {\n    (desc?: string | number): symbol;\n    for(name: string): symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\ndeclare const console: { log(msg: any): void; };\ntype ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;\ntype InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;",
        "affectsGlobalScope": true,
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./MessageablePerson.ts",
      "version": "478b8f4f7da86d748405411aca04ae37-const Messageable = () => {\n    return class MessageableClass {\n        public message = 'hello';\n    }\n};\nconst wrapper = () => Messageable();\ntype MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;\nexport default MessageablePerson;",
      "signature": "e4b2b952bee9815b3c9c9af8f1c315c0-declare const wrapper: () => {\n    new (): {\n        message: string;\n    };\n};\ntype MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;\nexport default MessageablePerson;\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "478b8f4f7da86d748405411aca04ae37-const Messageable = () => {\n    return class MessageableClass {\n        public message = 'hello';\n    }\n};\nconst wrapper = () => Messageable();\ntype MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;\nexport default MessageablePerson;",
        "signature": "e4b2b952bee9815b3c9c9af8f1c315c0-declare const wrapper: () => {\n    new (): {\n        message: string;\n    };\n};\ntype MessageablePerson = InstanceType<ReturnType<typeof wrapper>>;\nexport default MessageablePerson;\n",
        "impliedNodeFormat": 1
      }
    },
    {
      "fileName": "./main.ts",
      "version": "5f952704442dc1f1670d4f2073795b3d-import MessageablePerson from './MessageablePerson.js';\nfunction logMessage( person: MessageablePerson ) {\n    console.log( person.message );\n}",
      "signature": "04e66752f096b7e8df60e5900b0692bc-export {};\n",
      "impliedNodeFormat": "CommonJS",
      "original": {
        "version": "5f952704442dc1f1670d4f2073795b3d-import MessageablePerson from './MessageablePerson.js';\nfunction logMessage( person: MessageablePerson ) {\n    console.log( person.message );\n}",
        "signature": "04e66752f096b7e8df60e5900b0692bc-export {};\n",
        "impliedNodeFormat": 1
      }
    }
  ],
  "fileIdsList": [
    [
      "./MessageablePerson.ts"
    ]
  ],
  "options": {
    "module": 99
  },
  "referencedMap": {
    "./main.ts": [
      "./MessageablePerson.ts"
    ]
  },
  "size": 2020
}

SemanticDiagnostics::
*refresh*    /home/src/workspaces/project/MessageablePerson.ts
*refresh*    /home/src/workspaces/project/main.ts
Signatures::
(computed .d.ts) /home/src/workspaces/project/MessageablePerson.ts
(computed .d.ts) /home/src/workspaces/project/main.ts


Edit [4]:: no change

tsgo --incremental
ExitStatus:: Success
Output::

SemanticDiagnostics::
Signatures::
