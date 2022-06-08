
/**
 * 混合
 * @internal
 */
 export function mixin<T, S>(target: T, source: S): T & S;
 /**
  * 混合
  * @internal
  */
 export function mixin<T, S1, S2>(
   target: T,
   source1: S1,
   source2: S2
 ): T & S1 & S2;
 /**
  * 混合
  * @internal
  */
 export function mixin<T, S1, S2, S3>(
   target: T,
   source1: S1,
   source2: S2,
   source3: S3
 ): T & S1 & S2 & S3;
 /**
  * 混合
  * @internal
  */
 export function mixin<T, S1, S2, S3, S4>(
   target: T,
   source1: S1,
   source2: S2,
   source3: S3,
   
   source4: S3
 ): T & S1 & S2 & S3 & S4;
 /**
  * 混合
  * 
  * @remarks
  * 将 source 的所有成员混入 target 对象中。
  *
  * 与 `Object.assign()` 的功能类似，不同的是 `mixin()` 会在 target 对象中 保持 source 对象属性的  PropertyDescriptors
  *
  * @param target - 目标对象，所有 源对象 的属性都要被混入进到 目标对象中
  * @param sources - 源对象，所有 源对象 的属性都要被混入进到 目标对象中
  * @returns 混入后的 target
  */
 export function mixin(target: any, ...sources: any[]): any;
 export function mixin(target: any, ...sources: any[]): any {
 
   for (const s of sources) {
     const propDes = Object.getOwnPropertyDescriptors(s);
     Object.defineProperties(target, propDes);
   }
   return target;
 }
 