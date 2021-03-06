/**
 * 决议
 * 用来监听决议的值；
 * 当 决议时，会自动回调所有注册的事件，并回传决议的值；决议之后，再进行监听，监听事件会被立即被回调，并传递决议的值；
 *
 * 说明：
 * 功能类似 Promise，也可用 Promise 来更轻松地实现，但之所以不用 Promise ，是因为 Promise 的回调是异步的，但我想同步回调，即让回调在一个运行循环内完成；
 * 与 Promise 的区别是：
 * - then回调是在 决议时 和 决议之后 同步执行的；并会回传最新的 this.value
 * - 简单、轻量
 * - 通过给 Decide 实例的 value 属性设置值 `decide.value = newValue` 自动触发决议；
 * - 即使决议之后，你也可以更改 value 的值，但不会再触发之添加的事件监听器；
 */
export declare class Decide<V = any> {
    protected _decided: boolean;
    get decided(): boolean;
    listeners: ((copy: V) => void)[];
    protected _value: V;
    get value(): V;
    set value(newVal: V);
    /**
     * 执行回调，并且为了提高性能，会让决议之后的 then 方法直接执行回调
     */
    protected resolve(): void;
    /**
     * 监听决议，当被决议后，会自动回调 cb，并回传最新的 this.value
     * @param cb
     */
    then(cb: (val: V) => void): void;
    /**
     * 创建一个直接决议的 Decide，并且决议的值是 value
     * @param value
     */
    static resolve<V>(value: V): Decide<V>;
}
