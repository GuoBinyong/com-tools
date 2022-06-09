<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [com-tools](./com-tools.md) &gt; [defineProxyProperty](./com-tools.defineproxyproperty.md)

## defineProxyProperty() function

定义代理属性； 给 对象 proxy 增加 能够代理 target 对象 的 属性 prop； 当在 访问或配置 proxy 对象上的 prop 属性时，会将操作转发到 target 对象的 prop 属性；

<b>Signature:</b>

```typescript
export function defineProxyProperty(proxy: object, target: object, prop: string, options?: ProxyOptions): any;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  proxy | object | : Object 必选；会在该对象上添加代理属性 prop |
|  target | object | : Object 必选；被代理的对象 |
|  prop | string | : Property 必选；代理属性的名字； |
|  options | [ProxyOptions](./com-tools.proxyoptions.md) | <i>(Optional)</i> ?: ProxyOptions 代理属性的配置选项<!-- -->ProxyOptions = {<!-- -->get:boolean,set:boolean,configurable:boolean,enumerable:boolean,getDefault,setDefault<!-- -->} get:boolean 可选；默认值：true； 表示是否要定义 get 的代理； set:boolean 可选；默认值：true； 表示是否要定义 set 的代理； configurable:boolean 可选；默认值：true； 表示该属性描述符的类型是否可以被改变并且该属性可以从对应对象中删除。 enumerable:boolean 可选；默认值：true； 表示当在枚举相应对象上的属性时该属性是否显现。 getDefault:any 可选；当 target 的属性 prop 为 undefined 时，proxy 会返回默认值 getDefault setDefault:any 可选；当给代理对象 proxy 的 prop 属性 设置的 新值是 undefined 时，会将默认值 setDefault 设置 到 target 对象的 prop 属性上； |

<b>Returns:</b>

any

proxy : Object 传递给函数的 代理对象 proxy
