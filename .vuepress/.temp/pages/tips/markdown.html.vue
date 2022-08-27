<template><div><h3 id="标题语法" tabindex="-1"><a class="header-anchor" href="#标题语法" aria-hidden="true">#</a> 标题语法</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># title //一级标题
## title  //二级标题
### title  //三级标题
#### title  //四级标题
##### title  //五级标题
###### title  //六级标题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从大到小（一级最大，六级最小）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>title
===    //一级标题
title
---    //二级标题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：‘#’与标题之间<strong>需有空格！！！</strong></p>
<h3 id="段落语法" tabindex="-1"><a class="header-anchor" href="#段落语法" aria-hidden="true">#</a> 段落语法</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>para1.....................................................................................

para2.................................................................................		//不同段落之间用空白行分隔
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="换行语法" tabindex="-1"><a class="header-anchor" href="#换行语法" aria-hidden="true">#</a> 换行语法</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>para1..........  //行末添加两个或者更多个空格并回车

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;br>  //换行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="强调语法" tabindex="-1"><a class="header-anchor" href="#强调语法" aria-hidden="true">#</a> 强调语法</h3>
<ul>
<li>粗体</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>**加粗文本** //建议统一使用*，_不支持文本中部使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>斜体</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>*斜体文本* //同样建议使用*，理由同上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>粗体加斜体</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>***粗斜体文本*** //建议使用*。。。。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="引用语法" tabindex="-1"><a class="header-anchor" href="#引用语法" aria-hidden="true">#</a> 引用语法</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>> 引用段落   //单段引用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>> para1
>
> para2		//多段引用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>> para1
>
>> para2	//嵌套引用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列表语法" tabindex="-1"><a class="header-anchor" href="#列表语法" aria-hidden="true">#</a> 列表语法</h3>
<ul>
<li>有序列表</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1. first
2. second
3. third....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1. first
1. second
1. third
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1. first
5. second
3. third		//数字不必按顺序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1. first
	1. first_first
	2. first_second
2. second
3. third
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>无序列表</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>- first
- second
- third
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>* first
* second
* third
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>+ first
+ second
+ third
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>列表可嵌套</p>
<h3 id="代码语法" tabindex="-1"><a class="header-anchor" href="#代码语法" aria-hidden="true">#</a> 代码语法</h3>
<ul>
<li>单词或短语</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>`lalala`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>lalala</code></p>
<p>如果其中含有`:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>``lal`ala``
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>lal`ala</code></p>
<h3 id="分隔线语法" tabindex="-1"><a class="header-anchor" href="#分隔线语法" aria-hidden="true">#</a> 分隔线语法</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>***
---
___		//效果一样
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="链接语法" tabindex="-1"><a class="header-anchor" href="#链接语法" aria-hidden="true">#</a> 链接语法</h3>
<ul>
<li>基础链接</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[显示名](链接地址)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[显示名](链接地址 链接title)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>[链接显示名](# 链接title)</p>
<ul>
<li>网址和email</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;网址或者email>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>带格式化的链接</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>**[]()**		//加粗链接
*[]()*			//斜体链接
[``]()			//代码块链接样式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引用类型链接" tabindex="-1"><a class="header-anchor" href="#引用类型链接" aria-hidden="true">#</a> 引用类型链接</h3>
<ul>
<li>第一部分</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[reference1][1]   //第一个方括号写显示名，第二个写指向其他位置的链接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>第二部分</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[1]: url (链接标题)	//方括号内写第一部分的链接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="图片语法" tabindex="-1"><a class="header-anchor" href="#图片语法" aria-hidden="true">#</a> 图片语法</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>![这是图片替代文本](图片地址)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[![替代文本](图片地址)](url)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="转义字符语法" tabindex="-1"><a class="header-anchor" href="#转义字符语法" aria-hidden="true">#</a> 转义字符语法</h3>
<p><code v-pre>特殊字符需要在其之前加‘\’进行转义</code></p>
<h3 id="内嵌html标签" tabindex="-1"><a class="header-anchor" href="#内嵌html标签" aria-hidden="true">#</a> 内嵌HTML标签</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>html标签可以直接在md文件中使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>样式1[^1]
[^1]: www.baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>样式1<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup></p>
<h3 id="删除线" tabindex="-1"><a class="header-anchor" href="#删除线" aria-hidden="true">#</a> 删除线</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>~~文本~~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><s>文本</s></p>
<h3 id="复选框" tabindex="-1"><a class="header-anchor" href="#复选框" aria-hidden="true">#</a> 复选框</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>- [x] 选项一
- [ ] 选项二
- [ ] 选项三
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 选项一</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 选项二</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 选项三</label></li>
</ul>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p><a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">www.baidu.com<ExternalLinkIcon/></a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>
