/**
 * 由于 eval() 有 安全 和 性能 的问题，所以封装了本函数 来 替代 eval()
 * 本方法采用 Function 的方式 来实现 eval() 的效果；
 * @param code
 */
export declare function betterEval(code: string): any;
/**
 * 拷贝构造函数，与 copyFunction 相比，该函数还会还原构造函数的继续链，即 prototype
 * @param fun
 */
export declare function copyConstructor<F extends Function>(fun: F): F;
export declare function copyFunction<F extends Function>(fun: F): F;
/**
 * 根据函数字符串 和 函数名字 来创建函数
 * @param funString:string   必选； 函数的代码字符串，必须是完整的函数代码字符串，不能是函数体的代码片断，可通过函数的 toString() 方法获得；
 * @param name?:string      可选； 函数的名字；
 * @param asDefault?:boolean    可选；name 参数是否作为函数名字的默认值（当 funString 中不包含函数名字时，再使用 name 作为函数的名字）
 */
export declare function createFunctionBy(funString: string, name?: string, asDefault?: boolean): Function;
/**
 * 为指定的函数 fun 创建对应的 单例函数
 * @param fun : Function  普通函数 或者 构造函数
 * @return Function  增加了单例机制的函数；该函数的使用方式 和 原函数 fun 一样，只是无论多少次调用该函数，该函数都会返回原函数 fun 的同一实例
 */
export declare function createSingleton<Fun extends Function>(fun: Fun): Fun;
