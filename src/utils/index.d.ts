/* eslint-disable @typescript-eslint/no-explicit-any */
export declare function isEmpty(value: string): boolean
export declare function isEmpty<T = any>(value: Array<T>): boolean
export declare function isEmpty(value: object): boolean
export declare function isEmpty<I = any, O = any>(value: Map<I, O>): boolean
export declare function isEmpty<T = any>(value: Set<T>): boolean
export declare function isObject(value: any): value is object
export declare function isArray<T = any>(value: any): value is Array<T>
export declare function isString(value: any): value is string
export declare function isMap<T = any, O = any>(value: any): value is Map<T, O>
export declare function isSet<T = any>(value: any): value is Set<T>
