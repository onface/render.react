# 文档


## if-else

````code
{
    title: 'if else',
    desc: '`<Render if={loading}> <Else if={loading === undefined} > <Else>`',
    html: '<div id="if-else-demo" ></div>',
    source: './if-else.demo.js',
    side: true
}
````

## switch-case

大量的 `<Else if={}>` 会让代码不易读，这种情况下可使用 `<Render switch={} >`

````code
{
    title: 'swtich case',
    desc: '`<Render switch={type} ><Case eql="pass" >成功</Case></Render>`',
    html: '<div id="switch-case-demo" ></div>',
    source: './switch-case.demo.js',
    side: true
}
````

## loose-switch

````code
{
    title: 'swtich case',
    desc: '`<Render loose switch={value} >`',
    html: '<div id="loose-switch-demo" ></div>',
    source: './loose-switch.demo.js',
    side: true
}
````

## useDisplay

某些场景下我们想通过修改 `display:none` 的方式去隐藏元素，通过配置 `<Render useDisplay if={loading} >` 可以做到这一点

````code
{
    title: 'useDisplay',
    desc: '',
    html: '<div id="useDisplay-if-demo" ></div>',
    source: './useDisplay-if.demo.js',
    side: true
}
````

## render-props

````code
{
    title: 'render props',
    desc: '',
    html: '<div id="render-props-demo" ></div>',
    source: './render-props.demo.js',
    open: true
}
````

`<Render>{function(){}}</Render>` 与

```js
{
    (() => {
        let target
        data.some(function (item){
            if (item.type === 'pass') {
                target = item
                return true
            }
        })
        return (<div>{target.name}</div>)
    })()
}
```

在结果上没有任何区别，只是我们提供了另外一种写法。

```js
// <Render>{function(){}}</Render> 源码实现
if (typeof this.props.children === 'function') {
    return this.props.children()
}
```
