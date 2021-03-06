/**
 * 由于 eval() 有 安全 和 性能 的问题，所以封装了本函数 来 替代 eval()
 * 本方法采用 Function 的方式 来实现 eval() 的效果；
 * @param code
 */
export function betterEval(code:string):any {
    return (new Function(`"use strict"; return (${code})`))();
}


/**
 * 拷贝构造函数，与 copyFunction 相比，该函数还会还原构造函数的继续链，即 prototype
 * @param fun
 */
export function copyConstructor<F extends Function>(fun:F):F {
    const funCopy = copyFunction(fun);
    funCopy.prototype = Object.create(fun.prototype);
    funCopy.prototype.constructor = funCopy;
    return funCopy;
}



/*
考虑到安全和性能的原因，弃用 eval，改用 Function 的方式；
*/
export function copyFunction<F extends Function>(fun:F):F {
    return  createFunctionBy(fun.toString(),fun.name,true) as F;
}








/*
函数名字的正则表达式
注意：
2020年6月17日测试：IOS 和 Mac 的 Safari 不支持 后行断言 `(?<=)` 和 `(?<!)`

为了保证兼容性，先后行都不用
*/
// const funNameRegExpOfFunString = /(?<=^\s*(async\s+)?function\s*(\s|\*)\s*)[A-Za-z_$]+[\w$]*(?=\s*\()/;   // 函数名字正则-后行断言版
const funNameRegExpOfFunString = /(^\s*(async\s+)?function\s*(\s|\*)\s*)[A-Za-z_$]+[\w$]*(\s*\()/;       // 函数名字正则-没有断言版
// JavaScript 的标识符 正则
const jsIdentifier = /^[A-Za-z_$]+[\w$]*$/;


/**
 * 根据函数字符串 和 函数名字 来创建函数
 * @param funString:string   必选； 函数的代码字符串，必须是完整的函数代码字符串，不能是函数体的代码片断，可通过函数的 toString() 方法获得；
 * @param name?:string      可选； 函数的名字；
 * @param asDefault?:boolean    可选；name 参数是否作为函数名字的默认值（当 funString 中不包含函数名字时，再使用 name 作为函数的名字）
 */
export function createFunctionBy(funString:string,name?:string,asDefault?:boolean):Function {

    const funNameRegOfFunString = funNameRegExpOfFunString;
    const funNameReg = jsIdentifier;

    //判断函数代码是否是匿名函数
    const hasName = funNameRegOfFunString.test(funString);
    const isValidName = name && funNameReg.test(name)

    if (hasName && isValidName && !asDefault){
        // funString = funString.replace(funNameRegOfFunString,name as string);  // 函数名字正则-后行断言版
        funString = funString.replace(funNameRegOfFunString,`$1${name}$4`);   // 函数名字正则-没有断言版
    }


    if (!hasName && isValidName){ // 当 函数代码是匿名函数 且 name 是有效的标识符
        var funBody = `"use strict"; var ${name} = ${funString} ; return ${name}`;
    }else {
        funBody = `"use strict"; return (${funString})`;
    }
    return (new Function(funBody))();
}







/**
 * 为指定的函数 fun 创建对应的 单例函数
 * @param fun : Function  普通函数 或者 构造函数
 * @return Function  增加了单例机制的函数；该函数的使用方式 和 原函数 fun 一样，只是无论多少次调用该函数，该函数都会返回原函数 fun 的同一实例
 */
export function createSingleton<Fun extends Function>(fun:Fun):Fun {
    var singleInst:any;

    return function () {
        if (singleInst !== undefined) {
            return singleInst;
        }
        if (new.target) {
            // @ts-ignore
            return new fun(...arguments);
        }

        // @ts-ignore
        return fun.apply(this, arguments);
    } as unknown as Fun
}
