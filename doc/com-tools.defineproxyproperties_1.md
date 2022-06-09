<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [com-tools](./com-tools.md) &gt; [defineProxyProperties](./com-tools.defineproxyproperties_1.md)

## defineProxyProperties() function

批量定义代理属性

接口2：defineProxyProperties(proxy,target,propOptions)

<b>Signature:</b>

```typescript
export function defineProxyProperties(proxy: object, target: object, propOptions: { [prop: string]: ProxyOptions }): any;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  proxy | object | : Object 必选；会在该对象上添加代理属性 prop |
|  target | object | : Object 必选；被代理的对象 |
|  propOptions | { \[prop: string\]: [ProxyOptions](./com-tools.proxyoptions.md) } | : {<!-- -->propName:ProxyOptions<!-- -->} 必选；要定义的代理属性的配置对象；以该配置对象的属性名为 要配置的属性的名字，以其值为 本配置的属性的 配置选项 |

<b>Returns:</b>

any

proxy : Object 传递给函数的 代理对象 proxy
