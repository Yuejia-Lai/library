<template><div><h1 id="对象和类" tabindex="-1"><a class="header-anchor" href="#对象和类" aria-hidden="true">#</a> 对象和类</h1>
<blockquote>
<p>[!tip] 本章节主要介绍Java中面向对象相关知识，主要关于类的编写和相关使用方法</p>
</blockquote>
<h2 id="面向对象程序设计概述" tabindex="-1"><a class="header-anchor" href="#面向对象程序设计概述" aria-hidden="true">#</a> 面向对象程序设计概述</h2>
<p>面向对象程序设计（OOP）把数据放在第一位，然后再考虑操作数据的算法</p>
<h3 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h3>
<ul>
<li>
<p>类是构造对象的模板和蓝图</p>
</li>
<li>
<p>由类构造对象的过程称为创建类的实例</p>
</li>
<li>
<p>封装：也称为数据隐藏，将数据和行为组合在一个包中</p>
</li>
<li>
<p>封装思想是实现代码重用性和可靠性的关键</p>
</li>
<li>
<p>所有的类都继承于Object</p>
</li>
</ul>
<h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3>
<p>对象三个主要特性：行为，状态，标识</p>
<h3 id="识别类" tabindex="-1"><a class="header-anchor" href="#识别类" aria-hidden="true">#</a> 识别类</h3>
<h3 id="类之间的关系" tabindex="-1"><a class="header-anchor" href="#类之间的关系" aria-hidden="true">#</a> 类之间的关系</h3>
<p>常见关系有：</p>
<ul>
<li>依赖：一个类的方法使用/操控另一个类对象</li>
<li>聚合：一个对象包含另一个对象</li>
<li>继承：拓展关系</li>
</ul>
<hr>
<h2 id="使用预定义类" tabindex="-1"><a class="header-anchor" href="#使用预定义类" aria-hidden="true">#</a> 使用预定义类</h2>
<h3 id="对象与对象变量" tabindex="-1"><a class="header-anchor" href="#对象与对象变量" aria-hidden="true">#</a> 对象与对象变量</h3>
<ul>
<li>
<p>Java中，使用构造器（构造函数）构造新实例</p>
</li>
<li>
<p>构造器名字应当与类名相同</p>
</li>
<li>
<p><strong>对象变量并没有实际包含一个变量，只是引用一个对象</strong></p>
</li>
<li>
<p>所有Java对象都存储在堆中</p>
</li>
</ul>
<h3 id="java类库中的localdate类" tabindex="-1"><a class="header-anchor" href="#java类库中的localdate类" aria-hidden="true">#</a> Java类库中的LocalDate类</h3>
<p>类库设计者决定将保存时间和给时间点命名分开，所以有两个类：</p>
<ul>
<li>Date：用来表示时间点</li>
<li>LocalDate：用日历表示法表示日期</li>
</ul>
<blockquote>
<p>使用构造LocalDate对象时，应使用静态工厂方法</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">LocalDate</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>LocalDate封装了实例字段来维护设置的日期</strong></p>
<h3 id="更改器方法与访问器方法" tabindex="-1"><a class="header-anchor" href="#更改器方法与访问器方法" aria-hidden="true">#</a> 更改器方法与访问器方法</h3>
<ul>
<li>更改对象状态的方法称为更改器方法</li>
<li>只访问对象不更改对象的方法叫访问器方法</li>
</ul>
<hr>
<h2 id="用户自定义类" tabindex="-1"><a class="header-anchor" href="#用户自定义类" aria-hidden="true">#</a> 用户自定义类</h2>
<h3 id="隐式参数和显式参数" tabindex="-1"><a class="header-anchor" href="#隐式参数和显式参数" aria-hidden="true">#</a> 隐式参数和显式参数</h3>
<p>一般来说，对于一个对象中的方法，第一个参数为隐式参数，即方法调用的目标或者接收者，可以用this指代，其他的参数为显式参数，即方法后括号中声明的参数</p>
<blockquote>
<p>Java中，所有方法都定义在类的内部，但不意味着这些是内联方法，是否成为内联方法是JVM的任务</p>
</blockquote>
<h3 id="final实例字段" tabindex="-1"><a class="header-anchor" href="#final实例字段" aria-hidden="true">#</a> final实例字段</h3>
<p>可以将实例字段定义为final，这样必须在构造对象时初始化</p>
<p>注意final修饰基本类型（或者对应的装饰器类型）与修饰对象的区别</p>
<hr>
<h2 id="静态字段和静态方法" tabindex="-1"><a class="header-anchor" href="#静态字段和静态方法" aria-hidden="true">#</a> 静态字段和静态方法</h2>
<p>一般用static修饰符来修饰</p>
<h3 id="静态字段" tabindex="-1"><a class="header-anchor" href="#静态字段" aria-hidden="true">#</a> 静态字段</h3>
<p>将字段定义为static后，每个类只有一个字段（共享），对于非静态字段，每个对象都有一个副本</p>
<p>即使某一个类没有对象，静态字段也存在，它属于类，不属于任何一个对象</p>
<h3 id="静态常量" tabindex="-1"><a class="header-anchor" href="#静态常量" aria-hidden="true">#</a> 静态常量</h3>
<p>静态常量相对于静态变量更常用</p>
<p>用<code v-pre>public static final</code>来修饰</p>
<h3 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法" aria-hidden="true">#</a> 静态方法</h3>
<p>静态方法是不在对象上执行的方法，所以静态方法没有<strong>隐式参数</strong></p>
<p>静态方法不能访问实例字段，但能访问静态字段</p>
<blockquote>
<p>使用静态方法一般有两种情况：</p>
<ul>
<li>方法不需要访问对象状态，因为所有参数都显式提供</li>
<li>方法只需要访问类的静态字段</li>
</ul>
</blockquote>
<h3 id="工厂方法" tabindex="-1"><a class="header-anchor" href="#工厂方法" aria-hidden="true">#</a> 工厂方法</h3>
<p>静态方法一个常用用途是静态工厂方法来构造对象，不使用构造器有两个原因：</p>
<ul>
<li>无法命名构造器，构造器名称必须和类名一致，但是有时需要得到两个不同的实例名字</li>
<li>使用构造器无法改变构造对象的类型，工厂方法可以返回子类</li>
</ul>
</div></template>
