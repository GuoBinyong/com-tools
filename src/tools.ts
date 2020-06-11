/**
 * 由于 eval() 有 安全 和 性能 的问题，所以封装了本函数 来 替代 eval()
 * 本方法采用 Function 的方式 来实现 eval() 的效果；
 * @param code
 */
export function betterEval(code:string):any {
    return (new Function(`"use strict"; return (${code})`))();
}





/*
考虑到安全和性能的原因，弃用 eval，改用 Function 的方式；
*/
export function copyFunction<F extends Function>(fun:F):F {
    return  createFunctionBy(fun.toString(),fun.name) as F;
}






/**
 * 根据函数字符串 和 函数名字 来创建函数
 * @param funString
 * @param name
 */
export function createFunctionBy(funString:string,name?:string):Function {
    //判断函数代码是否是匿名函数
    let hasName = /function\s+[A-Za-z_$]+[\w$]*\s*\(/.test(funString);

    if (!hasName && name && /^[A-Za-z_$]+[\w$]*$/.test(name)){ // 当 函数代码是匿名函数 且 name 是有效的标识符
        var funBody = `"use strict"; var ${name} = ${funString} ; return ${name}`;
    }else {
        funBody = `"use strict"; return (${funString})`;
    }
    return (new Function(funBody))();
}
