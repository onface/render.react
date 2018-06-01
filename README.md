# render.react

<!--MR-D{tpl: 'home'}-->

<!-- MARKRUN-HTML
<style>h1 {display:none;}</style>
-->

<!-- MARKRUN-HTML
<div style="display:none;" >
-->

```html
<Render if={loading} >
    loading
    <Else if={loading === undefined}>
        default
    </Else>
    <Else>loaded</Else>
</Render>
<Render switch={type} >
    <Case c="pass" >成功</Case>
    <Case c="fail" >失败</Case>
</Render>
```

<!-- MARKRUN-HTML
</div>
-->


<div class="face-one-intro">
    <div class="face-one-intro-title">render.react</div>
    <h2 class="face-one-intro-desc">
        React if switch 条件渲染
    </h2>
    <!-- MARKRUN-HTML
        <div class="face-one-readmedemo">
            <div class="face-one-readmedemo-node" style="padding:0 1em;" >
            <pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">Render</span> <span class="hljs-attr">if</span>=<span class="hljs-string">{loading}</span> &gt;</span>
    loading
    <span class="hljs-tag">&lt;<span class="hljs-name">Else</span> <span class="hljs-attr">if</span>=<span class="hljs-string">{</span><span class="hljs-attr">loading</span> === <span class="hljs-string">undefined</span>}&gt;</span>
        default
    <span class="hljs-tag">&lt;/<span class="hljs-name">Else</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Else</span>&gt;</span>loadinged<span class="hljs-tag">&lt;/<span class="hljs-name">Else</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Render</span>&gt;</span>
</code><span class="hljs-tag">&lt;<span class="hljs-name">Render</span> <span class="hljs-attr">switch</span>=<span class="hljs-string">{type}</span> &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Case</span> <span class="hljs-attr">c</span>=<span class="hljs-string">"pass"</span> &gt;</span>成功<span class="hljs-tag">&lt;/<span class="hljs-name">Case</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Case</span> <span class="hljs-attr">c</span>=<span class="hljs-string">"fail"</span> &gt;</span>失败<span class="hljs-tag">&lt;/<span class="hljs-name">Case</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Render</span>&gt;</span>
</code>
</pre>
            </div>
        </div>
    -->
    <div class="face-one-intro-tool">
        <a href="https://onface.github.io/render.react" class="face-one-intro-btn face-one-intro-btn--primary mr-online-hide" >在线文档</a>
        <!-- MARKRUN-HTML
            <a href="./doc/intro.md" class="face-one-intro-btn face-one-intro-btn--primary">指引</a>
            <a href="http://github.com/onface/render.react" class="face-one-intro-btn">GITHUB</a>
        -->
    </div>
</div>
<div class="face-one-feature">
    <table style="width:100%;" data-comments="In order to github typesetting so use the table tag" >
        <tr>
            <td align="center" >

                <div class="face-one-feature-item">
                    <img src="./doc/theme/media/share.svg" alt="" class="face-one-feature-item-photo">
                    <br />
                        <div class="face-one-feature-item-label">让代码更易读</div>
                        <div class="face-one-feature-item-desc">支持 <code>switch case</code> 语句</div>
                </div>
            </td>
            <td align="center" >
                <div class="face-one-feature-item">
                    <img src="./doc/theme/media/cogwheel.svg" alt="" class="face-one-feature-item-photo">
                    <br />
                        <div class="face-one-feature-item-label">语法简洁</div>
                        <div class="face-one-feature-item-desc">接近 template 语法，减少嵌套结构</div>
                </div>
            </td>
            <td align="center" >
                <div class="face-one-feature-item">
                    <img src="./doc/theme/media/browser.svg" alt="" class="face-one-feature-item-photo">
                    <br />
                    <div class="face-one-feature-item-label">隐藏或销毁</div>
                    <div class="face-one-feature-item-desc">配置 <code>useDisplay</code> 控制切换现显示时销毁还是 <code>display:none;</code> </div>
                </div>
            </td>
        </tr>
    </table>
</div>


<div style="text-align:center;" >
    <a href="https://travis-ci.org/onface/render.react" style="text-decoration: none;" >
        <img alt="Build Status" src="https://api.travis-ci.org/onface/render.react.svg?branch=master" />
    </a>
    <a href="https://npmjs.org/package/render.react"  style="text-decoration: none;" >
        <img alt="NPM version" src="https://img.shields.io/npm/v/render.react.svg?style=flat" />
    </a>
    <a href="https://npmjs.org/package/render.react"  style="text-decoration: none;" >
        <img alt="NPM downloads" src="https://img.shields.io/npm/dm/render.react.svg?style=flat" />
    </a>
</div>


<a href="https://saucelabs.com/u/onface-render.react" >
    <img alt="Saucelabs Tests" style="display:block;margin-left:auto;margin-right:auto;" src="https://saucelabs.com/browser-matrix/onface-render-react.svg" >
</a>


<h3 class="face-one-feature-title">
    Creator
</h3>
<div class="face-one-feature face-one-feature--creator">
    <table style="width:100%;" data-comments="In order to github typesetting so use the table tag" >
        <tr>
            <td align="center" >
                <a class="face-one-feature-item" href="https://github.com/nimojs">
                    <img src="https://github.com/nimojs.png" width="150 height="150" alt="" class="face-one-feature-item-avatar">
                    <br />
                    <div class="face-one-feature-item-label">NimoChu</div>
                </a>
            </td>
        </tr>
    </table>
</div>
