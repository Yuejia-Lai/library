<template><div><h1 id="java的基本程序设计结构" tabindex="-1"><a class="header-anchor" href="#java的基本程序设计结构" aria-hidden="true">#</a> <strong>Java的基本程序设计结构</strong></h1>
<blockquote>
<p>[!tip] 本章节主要介绍了Java程序的基本概念（如数据类型，分支以及循环等）在Java中的实现方式</p>
</blockquote>
<h2 id="一个简单的java程序" tabindex="-1"><a class="header-anchor" href="#一个简单的java程序" aria-hidden="true">#</a> 一个简单的Java程序</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> hello<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>程序虽然简单，但还是有很多注意点：</p>
<ul>
<li>Java区分大小写</li>
<li>名称以字母开头，后面跟数字或者字母，长度基本没有限制</li>
<li>建议遵循骆驼命名法（驼峰命名）：类名大写字母开头，多单词则每个单词开头大写，变量方法小写</li>
<li>源代码文件名必须与公共类名称相同</li>
<li>JVM总是从指定类main方法开始执行（main方法必须声明为public）</li>
</ul>
</blockquote>
<blockquote>
<p>[!note] Java中所有函数都是某个类的方法，且Java中的main方法必须为静态方法，一般来说，如果正常退出，则有退出码0，如果要返回其他退出码，应使用System.exit</p>
</blockquote>
<blockquote>
<p>[!warning] 每个语句需要用分号结束，回车不表示结束，Java对缩进要求不严格，若果有需要可以将一个语句写在多行</p>
</blockquote>
<hr>
<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2>
<ul>
<li>//表示注释到本行末尾</li>
<li>/* */之间的内容注释（可多行）</li>
<li>/** */之间的内容注释，且可以生成文档（javadoc），在之后的章节有详细介绍</li>
</ul>
<hr>
<h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2>
<p>Java是<strong>强类型</strong>语言，每个变量必须指定类型</p>
<p>有八种基本类型：四种整型，两种浮点型，一种字符类型，一种布尔（boolean）类型</p>
<blockquote>
<p>Java中的大数算术包，bignumber类型不是基本类型，而是一个Java对象，类似的，Integer，Double，Character等是包装类型（之后章节有详细说明），也不是基本类型</p>
</blockquote>
<h3 id="整型" tabindex="-1"><a class="header-anchor" href="#整型" aria-hidden="true">#</a> 整型</h3>
<table>
<thead>
<tr>
<th>类型</th>
<th>存储需求</th>
<th>取值范围</th>
</tr>
</thead>
<tbody>
<tr>
<td>int</td>
<td>4字节</td>
<td>$$ [-2^{31} , 2^{31}-1]$$</td>
</tr>
<tr>
<td>short</td>
<td>2字节</td>
<td>$$[-2<sup 15="">{15},2</sup>-1]$$</td>
</tr>
<tr>
<td>long</td>
<td>8字节</td>
<td>$$[-2<sup 63="">{63},2</sup>-1]$$</td>
</tr>
<tr>
<td>byte</td>
<td>1字节</td>
<td>$$[-2<sup 7="">{7},2</sup>-1]$$</td>
</tr>
</tbody>
</table>
<blockquote>
<p>[!note] Java中，整型的范围与运行机器无关</p>
<p>长整型数值有一个后缀L或者l，十六进制有一个前缀0x或者0X，八进制有前缀0，八进制表示法容易混淆，应减少使用</p>
<p>二进制数有前缀0b或者0B</p>
<p>还可以为数字字面量加下划线，如：100_000_000，Java编译器会去除下划线</p>
</blockquote>
<blockquote>
<p>[!warning] Java没有无符号（unsigned）型的int，long，byte，short等类型</p>
</blockquote>
<blockquote>
<p>Java提供了无符号数运算的相关方法，比如：Byte.toUnsignedInt()来获得0~255之间的值，同时，Integer和Long都有相关方法</p>
</blockquote>
<h3 id="浮点类型" tabindex="-1"><a class="header-anchor" href="#浮点类型" aria-hidden="true">#</a> 浮点类型</h3>
<table>
<thead>
<tr>
<th>类型</th>
<th>存储需求</th>
<th>范围</th>
</tr>
</thead>
<tbody>
<tr>
<td>float</td>
<td>4</td>
<td>$$\pm 3.402 823 47E+38F （约6，7位有效位）$$</td>
</tr>
<tr>
<td>double</td>
<td>8</td>
<td>$$\pm 1.797 693 134 862 315 70E+308 （约15位）$$</td>
</tr>
</tbody>
</table>
<blockquote>
<ul>
<li>
<p>float类型有后缀f或者F，没有则默认为double类型</p>
</li>
<li>
<p>可以采用十六进制表示浮点类型，0.125 -&gt; 0x1.0p-3，尾数十六进制，指数十进制，指数基数为2</p>
</li>
<li>
<p>根据IEEE 754规范，浮点数有三个特殊值：正无穷，负无穷，NaN（参考<RouterLink to="/computer/csapp/chapter2.html">csapp第二章</RouterLink>），这三个数很少用到，可以用Double.POSITIVE_INFINTITY,Double.NEGTIVE_INFINITY,Double.NaN来得到</p>
</li>
<li>
<p>所有“非数值”的数认为不相等（不可用NaN==NaN），但可以使用Double.NaN来判断</p>
</li>
</ul>
</blockquote>
<blockquote>
<p>[!attention] 计算机中浮点数表示不精确！！！（参考<RouterLink to="/computer/csapp/chapter2.html">csapp第二章</RouterLink>），容易产生舍入误差，如果要精确表示，应采用BigDecimal类</p>
</blockquote>
<h3 id="char类型" tabindex="-1"><a class="header-anchor" href="#char类型" aria-hidden="true">#</a> char类型</h3>
<blockquote>
<p>char原本用于表示单个字符，但现在可以表示某些Unicode字符，某些Unicode字符需要两个char来表示</p>
</blockquote>
<p>char类型的字面量值要用单引号括起来，所有的转义序列都可以出现在加括号的字符常量和字符串中，特别的，\u可以出现在字符串外部（当心一些隐式错误！！！）</p>
<p><strong>Java中建议少用char类型，除非必须对UTF-16代码单元做一些操作，建议用字符串类型</strong></p>
<h3 id="boolean类型" tabindex="-1"><a class="header-anchor" href="#boolean类型" aria-hidden="true">#</a> boolean类型</h3>
<p>有true和false两个值，<strong>整数布尔型之间不能进行相互转换</strong></p>
<hr>
<h2 id="变量与常量" tabindex="-1"><a class="header-anchor" href="#变量与常量" aria-hidden="true">#</a> 变量与常量</h2>
<ol>
<li><strong>声明变量</strong></li>
</ol>
<ul>
<li>先指定类型，再写出变量名：int len；double salary；等</li>
<li>声明以分号结束</li>
<li>变量名遵循Java取名规范</li>
<li>不能使用Java保留字作为变量名</li>
</ul>
<ol start="2">
<li><strong>变量初始化</strong></li>
</ol>
<p>建议在声明变量时初始化，不允许直接使用未初始化的变量</p>
<blockquote>
<p>Java10开始，如果可以推断出变量类型，则可以在声明时使用var关键字</p>
</blockquote>
<ol start="3">
<li><strong>常量</strong></li>
</ol>
<ul>
<li>利用final指示常量，表示只能被赋值一次</li>
<li>习惯上，常量名全大写</li>
<li>类常量：static final 声明，类中的所有方法可以使用</li>
</ul>
<ol start="4">
<li><strong>枚举类型</strong></li>
</ol>
<p>枚举类型包括有限个命名的值，如：<code v-pre>enum Size{S,M,L,XL,XXL};</code>,</p>
<p>声明枚举：<code v-pre>Size s=Size.M;</code>,枚举类型变量只能储存给定的枚举值，或者null（表示没有设定任何值），关于枚举之后章节有详细介绍</p>
<hr>
<h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2>
<ol>
<li>算术运算符：+-*/%等，两个运算数都是整数为整数运算，否则为浮点数运算</li>
<li>数学函数与常量：Math类中，定义了很多数学函数，如sqrt,pow,sin,atan,exp,log10,PI,E等，如果对结果精度要求较高，可以使用StrictMath类</li>
<li>数值类型相互转换：</li>
</ol>
<p><img src="https://s2.loli.net/2022/07/15/R2GdaHJrn1YSeil.png" alt="1" loading="lazy"></p>
<blockquote>
<p>实线箭头表示无损失转换，虚线箭头表示有精度损失</p>
</blockquote>
<p>当运算符两个操作数类型不同时：</p>
<ul>
<li>有一个为double，另一个转换为double</li>
<li>有一个是float，另一个转换为float</li>
<li>有一个是long，另一个转换为long</li>
<li>否则，两个数转换为int</li>
</ul>
<ol start="4">
<li>强制类型转换：</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">double</span> d<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> k<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> d<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>[!tip] 浮点数转为整型会丢失小数点以及后面的数，如果要进行舍入操作，应该用Math.round()</p>
</blockquote>
<ol start="5">
<li>结合赋值和运算符：如<code v-pre>int x=0;x+=1;</code>,左右操作数不同则会发生类型转换</li>
<li>自增与自减运算符：如<code v-pre>i++;--i;</code></li>
<li>关系和boolean运算符：与cpp类似，&amp;&amp;，||，！=，？：等</li>
<li>位运算符：&amp;(and),|(or),^(xor),~(not)</li>
</ol>
<blockquote>
<p>[!note] &gt;&gt;:算术右移，&gt;&gt;&gt;:逻辑右移，&lt;&lt;:左移</p>
</blockquote>
<ol start="9">
<li>括号与运算符级别：</li>
</ol>
<table>
<thead>
<tr>
<th>运算符</th>
<th>结合性</th>
</tr>
</thead>
<tbody>
<tr>
<td>[] ()(方法调用)</td>
<td>左</td>
</tr>
<tr>
<td>! ~ ++ -- +(一元运算) -（一元运算）()(强制类型转换) new</td>
<td>右</td>
</tr>
<tr>
<td>* / %</td>
<td>左</td>
</tr>
<tr>
<td>+ -</td>
<td>左</td>
</tr>
<tr>
<td>&lt;&lt; &gt;&gt; &gt;&gt;&gt;</td>
<td>左</td>
</tr>
<tr>
<td>&lt; &lt;= &gt;= &gt; instanceof</td>
<td>左</td>
</tr>
<tr>
<td>== !=</td>
<td>左</td>
</tr>
<tr>
<td>&amp;</td>
<td>左</td>
</tr>
<tr>
<td>^</td>
<td>左</td>
</tr>
<tr>
<td>|</td>
<td>左</td>
</tr>
<tr>
<td>&amp;&amp;</td>
<td>左</td>
</tr>
<tr>
<td>||</td>
<td>左</td>
</tr>
<tr>
<td>?:</td>
<td>右</td>
</tr>
<tr>
<td>= += -= *= /= %= &amp;= |= ^= &lt;&lt;= &gt;&gt;= &gt;&gt;&gt;=</td>
<td>右</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2>
<p>Java字符串就是一个Unicode字符序列</p>
<p>定义String类实例：<code v-pre>String s=&quot;&quot;;</code>(空字符串)</p>
<ul>
<li>substring方法可以提取子串：</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> s<span class="token operator">=</span><span class="token string">"hello"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> tem<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//s="hel"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Java中可以用“+”拼接字符串，如果是字符串与非字符串拼接，会自动转换成字符串，多个字符串拼接，可以使用join方法：</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> all<span class="token operator">=</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span><span class="token string">"s"</span><span class="token punctuation">,</span><span class="token string">"m"</span><span class="token punctuation">,</span><span class="token string">"l"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// all="s/m/l"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Java中String类不可修改，但是可以提取字串后替换：</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> s<span class="token operator">=</span><span class="token string">"hello world"</span><span class="token punctuation">;</span>
s<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"!"</span><span class="token punctuation">;</span> <span class="token comment">//s="hello!"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>[!tip] 不可变字符串有一个优点：可以让编译器实现字符串共享，复制一个字符串变量将与原始字符串共享相同的字符</p>
</blockquote>
<blockquote>
<p>从概念上来看，Java字符串类似于C/C++中的char*</p>
</blockquote>
<ul>
<li>应该使用equals方法判断字符串是否相等，如果不区分大小写，则使用equalsIgnoreCase方法：</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>s<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
s<span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>[!warning] 虚拟机的字符串共享，只是“字面量”共享，经过+，substring操作的字符串不共享，哪怕他们看起来“一样”，所以字符串比较应使用equals方法</p>
</blockquote>
<ul>
<li>空串“”是长度为零的字符串，而null是一个空对象（不可以用其调用任何方法和属性）</li>
<li>调用length方法返回代码单元数量，而实际长度（码点数量）可以用codePointCount来得到，特别的，charAt将返回某个指定索引的代码单元，但是Java中某些特殊字符是由两个代码单元构成，有时会出现bug，应尽量避免使用char类型</li>
<li>String API：</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">char</span> <span class="token function">charAt</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">codePointAt</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">offsetByCodePoints</span><span class="token punctuation">(</span><span class="token keyword">int</span> startIndex<span class="token punctuation">,</span><span class="token keyword">int</span> cpCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">String</span> other<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">IntStream</span> <span class="token function">codePoints</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>构建字符串</li>
</ul>
<p>使用+拼接字符串费时且效率低，使用StringBuilder类可以避免这个问题</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">StringBuilder</span> builder<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
···
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="输入与输出" tabindex="-1"><a class="header-anchor" href="#输入与输出" aria-hidden="true">#</a> 输入与输出</h2>
<p>现代的程序使用GUI来收集用户的输入输出，之后会有详细说明</p>
<p>现在使用基本的控制台来实现输入输出</p>
<ol>
<li>读取输入</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Scanner</span> in<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"输入名字"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> name<span class="token operator">=</span>in<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//读取一整行</span>
<span class="token class-name">String</span> name<span class="token operator">=</span>in<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//读取一个单词</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类似的，读取int用nextInt，double用nextDouble</p>
<blockquote>
<p>[!note] Scanner输入是可见的，所以不适合输入密码</p>
<p>输入密码应该用Console</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Console</span> cons<span class="token operator">=</span><span class="token class-name">System<span class="token punctuation">.</span>Console</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> username<span class="token operator">=</span>cons<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token string">"User name:"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> passwd<span class="token operator">=</span>cons<span class="token punctuation">.</span><span class="token function">readPassword</span><span class="token punctuation">(</span><span class="token string">"Password:"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>格式化输出</li>
</ol>
<p>沿用了C语言函数库中的printf方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%8.2f"</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打印八个字符，精度为小数点后2位</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>详情参考C语言相关教程</p>
<p><img src="https://s2.loli.net/2022/07/20/gO9GNoMuhKqUtw1.jpg" alt="attachments-2020-06-ILzp1riQ5ed8a440c252a" loading="lazy"></p>
<p><img src="https://s2.loli.net/2022/07/20/6WnTfPDi3vaHwJB.png" alt="2018072010214586" loading="lazy"></p>
<p>可以使用静态的String.format方法创建格式化的字符串而不打印输出：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> msg<span class="token operator">=</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"hello,%s. Next year,you'll be %d"</span><span class="token punctuation">,</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>文件的输入与输出</li>
</ol>
<p>读取文件使用Scanner对象：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Scanner</span> in <span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">Path</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">"myfile.txt"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span>UTF<span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>文件路径包含<code v-pre>\</code>，需要转义：<code v-pre>\\</code></p>
</blockquote>
<p>写入文件使用PrintWriter对象：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">PrintWriter</span> out<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">PrintWriter</span><span class="token punctuation">(</span><span class="token string">"myfile.txt"</span><span class="token punctuation">,</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span>UTF_8<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="控制流程" tabindex="-1"><a class="header-anchor" href="#控制流程" aria-hidden="true">#</a> 控制流程</h2>
<p>Java中没有goto语句，但是break语句可以带标签</p>
<ol>
<li>块作用域</li>
</ol>
<p>{}包裹的部分称为一个”块“</p>
<ol start="2">
<li>条件语句</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>condition1<span class="token punctuation">)</span> <span class="token keyword">do</span> something1<span class="token punctuation">;</span>
<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>condition2<span class="token punctuation">)</span> <span class="token keyword">do</span> something2<span class="token punctuation">;</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> ······
<span class="token keyword">else</span> <span class="token keyword">do</span> something<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>循环</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">while</span><span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token keyword">do</span> something<span class="token punctuation">;</span>
<span class="token keyword">do</span> <span class="token keyword">do</span> something <span class="token keyword">while</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>确定循环</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token keyword">do</span> something<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>[!attention] 注意循环变量的统一性，循环结束的条件，变量的作用域</p>
</blockquote>
<ol start="5">
<li>多重选择：switch语句</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">switch</span><span class="token punctuation">(</span>choice<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
        <span class="token keyword">do</span> something<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
        <span class="token keyword">do</span> something<span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    ······
    <span class="token keyword">default</span><span class="token operator">:</span>
    	<span class="token keyword">do</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>[!warning] 注意break语句</p>
</blockquote>
<ol start="6">
<li>中断控制流程的语句</li>
</ol>
<p>Java虽然有goto保留字，但是不建议使用，代替的有带标签的break语句,可以用于跳出多重嵌套的循环：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>read_data<span class="token operator">:</span>
<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token keyword">break</span> read_data<span class="token punctuation">;</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>[!note] break的标签必须放在希望跳出的最外层循环之前，而且紧跟一个冒号</p>
</blockquote>
<p><strong>注意：只能跳出语句块，不能跳入！</strong></p>
<p>同样，有一种带标签的continue语句，可以跳到与标签匹配的循环的首部</p>
<hr>
<h2 id="大数" tabindex="-1"><a class="header-anchor" href="#大数" aria-hidden="true">#</a> 大数</h2>
<ul>
<li>
<p>BigInteger可以实现任意精度的整数运算</p>
</li>
<li>
<p>BigDecimal可以实现任意精度的浮点数运算</p>
</li>
<li>
<p>在使用构造器时，可以用字符串参数，如：“999999999999999999”</p>
</li>
<li>
<p>大数的运算需要调用对应的方法，不能用+，*</p>
</li>
</ul>
<hr>
<h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2>
<ul>
<li>
<p>数组是存储相同类型值的序列</p>
</li>
<li>
<p>一旦创建了数组，就不能改变长度</p>
</li>
</ul>
<blockquote>
<p>如果需要经常改变长度，应该用数组列表（array list）</p>
</blockquote>
<ul>
<li>Java中，允许有长度为零的数组，<strong>但是其和null不相同</strong></li>
</ul>
<h3 id="访问数组元素" tabindex="-1"><a class="header-anchor" href="#访问数组元素" aria-hidden="true">#</a> 访问数组元素</h3>
<p>创建数组时，所有元素初始化为0，boolean类型初始化为false，对象则初始化为null</p>
<h3 id="for-each-循环" tabindex="-1"><a class="header-anchor" href="#for-each-循环" aria-hidden="true">#</a> for each 循环</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>变量：集合<span class="token punctuation">)</span> <span class="token keyword">do</span> something<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>集合必须是数组或者实现了Iterable接口的类对象</p>
<h3 id="数组拷贝" tabindex="-1"><a class="header-anchor" href="#数组拷贝" aria-hidden="true">#</a> 数组拷贝</h3>
<p>允许数组变量赋值给另一个数组变量,这时两个变量将引用同一个数组对象</p>
<blockquote>
<p>[!tip] 数组拷贝可以使用Array.copyOf()</p>
</blockquote>
<h3 id="命令行参数" tabindex="-1"><a class="header-anchor" href="#命令行参数" aria-hidden="true">#</a> 命令行参数</h3>
<p>即main函数中的args[],从零开始</p>
<h3 id="数组排序" tabindex="-1"><a class="header-anchor" href="#数组排序" aria-hidden="true">#</a> 数组排序</h3>
<p>使用<code v-pre>Array.sort</code>方法，这个方法使用了优化的快速排序算法</p>
<h3 id="多维数组" tabindex="-1"><a class="header-anchor" href="#多维数组" aria-hidden="true">#</a> 多维数组</h3>
<p>使用两个下标来访问二维数组元素</p>
<blockquote>
<p>[!note] for each循环不能自动处理多维数组，只能处理第一个维度</p>
</blockquote>
<p>要打印二维数组，可以使用<code v-pre>deepToString()</code></p>
<h3 id="不规则数组" tabindex="-1"><a class="header-anchor" href="#不规则数组" aria-hidden="true">#</a> 不规则数组</h3>
<p>从原理上讲，Java没有多维数组，只有数组的数组，即数组存储数组的引用</p>
<p>所以在一个数组中不同的元素可以代表不同长度的数组，形成类似于”三角阵“的构造</p>
</div></template>
