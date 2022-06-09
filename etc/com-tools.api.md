## API Report File for "com-tools"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public
export function betterEval(code: string): any;

// @public
export function copyConstructor<F extends Function>(fun: F): F;

// @public (undocumented)
export function copyFunction<F extends Function>(fun: F): F;

// @public
export function createControllablePromise<T>(executor?:(resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void,statusCompletesImmediately?:boolean): ControllablePromise<T>;

// @public
export function createFunctionBy(funString: string, name?: string, asDefault?: boolean): Function;

// @public
export function createSingleton<Fun extends Function>(fun: Fun): Fun;

// @public
export function createUniqueIdentifier():string;

// @public
export class Decide<V = any> {
    // (undocumented)
    get decided(): boolean;
    // (undocumented)
    protected _decided: boolean;
    // (undocumented)
    listeners: ((copy: V) => void)[];
    protected resolve(): void;
    static resolve<V>(value: V): Decide<V>;
    then(cb: (val: V) => void): void;
    // (undocumented)
    get value(): V;
    set value(newVal: V);
    // (undocumented)
    protected _value: V;
}

// @public
export function defineListenableProperties<T extends object>(obj:T,propsOptions:{[prop:string]:ListenablePropOpts<T>}):any;

// @public (undocumented)
export function defineListenableProperties<T extends object>(obj:T,propArray:string[],options?:ListenablePropOpts<T>):any;

// @public (undocumented)
export function defineListenableProperty<T extends object>(obj:T,prop:string,options?:ListenablePropOpts<T>):any;

// @public
export function defineListenablePropertyGetter<T extends object>(obj:T, prop:string, getDefault?:(this:T,thisValue:T)=>any, asGetter?:boolean):void;

// @public
export function defineProxyProperties(proxy: object, target: object, props: string[], options?: ProxyOptions): any;

// @public
export function defineProxyProperties(proxy: object, target: object, propOptions: { [prop: string]: ProxyOptions }): any;

// @public
export function defineProxyProperty(proxy: object, target: object, prop: string, options?: ProxyOptions): any;

// @public
export function isEqualByJSON(value1:any, value2:any):boolean;

// @public
export type ListenablePropOpts<T> = {
    ready ?:string,
    noEvent ?:boolean,
    event ?:string,
    newValueKey ?:string,
    oldValueKey ?:string,
    getDefault ?:(this:T,thisValue:T)=>any
};

// @public
export function multipleLoop<StopInfo,ThisValue>(mLoopOpts:{
    loopCall:(this:ThisValue,index:number,stepCount:number,total:number)=>StopInfo,
    complete ?: (this:ThisValue,stopInfo:StopInfo,index:number,stepCount:number,total:number)=>void,
    stepComplete ?: (this:ThisValue,index:number,stepCount:number,total:number)=>StopInfo,
    thisValue?:ThisValue,
    total?:number,
    step?:number,
    delay?:number
}):(stopInfo?:StopInfo)=>void;

// @public (undocumented)
export type ProxyOptions = {
    get?: boolean,
    set?: boolean,
    configurable?: boolean,
    enumerable?: boolean,
    getDefault?: any,
    setDefault?: any
};

// @public
export function safelyIterate<T,ThisValue>(iterable:Iterable<T>,operation:(this:ThisValue,currentValue:T,currentIndex:number,iterable:Iterable<T>)=>any, thisValue?:ThisValue):T[];

// (No @packageDocumentation comment for this package)

```