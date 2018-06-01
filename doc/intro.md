# 指引

> 使用一个组件或模块之前，应当知道它能解决的问题是什么，不能解决的问题是什么。使用的最佳实践是什么？

JSX 支持三元运算符


```js
<div>
{
    loading?
    "loading":
    "loaded"
}
</div>
```

你可以使用 `render.react`

```js
<Render if={loading}>
    loading
    <Else> loaded </Else>
</Render>
```

三元运算符易读简洁，简单的判断使用 `render.react` 有点多此一举，但我们会遇到更复杂的场景。

## 复杂判断

```js
{
    loading?
    (
        <div className="loading" >加载中</div>
    ):
        logged?
        `用户名：${user}`:
        (<a href="#">请登录</a>)
}
```

加上 `div` 的情况下简直是噩梦

```js
{
    loading?
    (
        <div className="loading" >加载中</div>
    ):
    (
        <div>
            {
                logged?
                (
                    <div>
                        用户名：{user}
                    </div>
                ):
                (
                     <a href="#">请登录</a>
                )
            }
        </div>
    )
}
```


隔一段时间或者让其他同事看这段代码，绝对会懵逼。写的时候也会感觉到很惊险很刺激😄。

## if-else

使用 `render.react` 可以让代码易读，减少嵌套。

```js
<Render if={loading} >
    loading
    <Else if={user}>
        用户名：{user}
    </Else>
    <Else>
        <a href="#">请登录</a>
    </Else>
</Render>
```

````code
{
    title: 'if else',
    desc: '',
    html: '<div id="intro-if-else-demo" ></div>',
    source: './intro-if-else.demo.js',
    side: true
}
````

### if

```js
<Render if={loading} >
    loading
</Render>
```

注意：不需要用 `<If>` 包裹 `loading`.(`<If>loading</If>`)。这样保持了代码简洁。

> `<Render if={loading} >` `props.children` 的第一个元素会在 `if={loading}` 为 `true` 时渲染出来。 `if={loading}` 的判断与 JavaScript 内置 `if` 语法一致，会对 `condition` 进行 `==` 比较。而不是 `===`。

### else if

```js
<Else if={user}>
    用户名：{user}
</Else>
```

```js
else if (user) {
    return `用户名：${user}`
}
```

`<Else if={user}>` 模仿了内置 `else if ` 的语法。


## swtich-case

大量的 `<Else if={}>` 会让代码不易读，这种情况下可使用 `<Render switch={} >`

```js
<Render switch={type} >
    <Case eql="pass" >
        成功
    </Case>
    <Case eql="fail">
        失败
    </Case>
    {/* default: */}
    无状态
</Render>
```


## 更多用法

`render.react` 还支持
- [switch-case](./README.md#switch-case)
- [useDisplay](./README.md#useDisplay)
- [loose](./README.md#loose)
- [render-props](./README.md#render-props)
