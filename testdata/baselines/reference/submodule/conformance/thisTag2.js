//// [tests/cases/conformance/jsdoc/thisTag2.ts] ////

//// [a.js]
/** @this {string} */
export function f1() {}

/** @this */
export function f2() {}




//// [a.d.ts]
/** @this {string} */
export declare function f1(this: string): void;
/** @this */
export declare function f2(this: ): void;
