<template><div><h2 id="场景模拟" tabindex="-1"><a class="header-anchor" href="#场景模拟" aria-hidden="true">#</a> 场景模拟</h2>
<h3 id="声明接口" tabindex="-1"><a class="header-anchor" href="#声明接口" aria-hidden="true">#</a> 声明接口</h3>
<p>声明计算器接口Calculator，包含加减乘除的抽象方法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token function">mul</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token function">div</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建实现类" tabindex="-1"><a class="header-anchor" href="#创建实现类" aria-hidden="true">#</a> 创建实现类</h3>
<p><img src="https://s2.loli.net/2022/09/23/2A3Gy4wcFhWmI7s.png" alt="Snipaste_2022-09-23_08-49-32.png" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CalculatorPureImpl</span> <span class="token keyword">implements</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> result <span class="token operator">=</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"方法内部 result = "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> result <span class="token operator">=</span> i <span class="token operator">-</span> j<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"方法内部 result = "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">mul</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> result <span class="token operator">=</span> i <span class="token operator">*</span> j<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"方法内部 result = "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">div</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> result <span class="token operator">=</span> i <span class="token operator">/</span> j<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"方法内部 result = "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建带日志功能的实现类" tabindex="-1"><a class="header-anchor" href="#创建带日志功能的实现类" aria-hidden="true">#</a> 创建带日志功能的实现类</h3>
<p><img src="https://s2.loli.net/2022/09/23/imDf1dh6oEV9F8b.png" alt="Snipaste_2022-09-23_08-51-41.png" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CalculatorLogImpl</span> <span class="token keyword">implements</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"[日志] add 方法开始了，参数是："</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">","</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> result <span class="token operator">=</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"方法内部 result = "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"[日志] add 方法结束了，结果是："</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"[日志] sub 方法开始了，参数是："</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">","</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> result <span class="token operator">=</span> i <span class="token operator">-</span> j<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"方法内部 result = "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"[日志] sub 方法结束了，结果是："</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
		<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">mul</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"[日志] mul 方法开始了，参数是："</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">","</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> result <span class="token operator">=</span> i <span class="token operator">*</span> j<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"方法内部 result = "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"[日志] mul 方法结束了，结果是："</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">div</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"[日志] div 方法开始了，参数是："</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">","</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> result <span class="token operator">=</span> i <span class="token operator">/</span> j<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"方法内部 result = "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"[日志] div 方法结束了，结果是："</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提出问题" tabindex="-1"><a class="header-anchor" href="#提出问题" aria-hidden="true">#</a> 提出问题</h3>
<p><strong>①现有代码缺陷</strong></p>
<p>针对带日志功能的实现类，我们发现有如下缺陷：</p>
<ul>
<li>对核心业务功能有干扰，导致程序员在开发核心业务功能时分散了精力</li>
<li>附加功能分散在各个业务功能方法中，不利于统一维护</li>
</ul>
<p><strong>②解决思路</strong></p>
<p>解决这两个问题，核心就是：解耦。我们需要把附加功能从业务功能代码中抽取出来</p>
<p><strong>③困难</strong></p>
<p>解决问题的困难：要抽取的代码在方法内部，靠以前把子类中的重复代码抽取到父类的方式没法解决。所以需要引入新的技术</p>
<h2 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> 代理模式</h2>
<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3>
<p><strong>①介绍</strong></p>
<p>二十三种设计模式中的一种，属于结构型模式。它的作用就是通过提供一个代理类，让我们在调用目标方法的时候，不再是直接对目标方法进行调用，而是通过代理类间接调用。让不属于目标方法核心逻辑的代码从目标方法中剥离出来——解耦。调用目标方法时先调用代理对象的方法，减少对目标方法的调用和打扰，同时让附加功能能够集中在一起也有利于统一维护</p>
<h3 id="静态代理" tabindex="-1"><a class="header-anchor" href="#静态代理" aria-hidden="true">#</a> 静态代理</h3>
<p>创建静态代理类：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CalculatorStaticProxy</span> <span class="token keyword">implements</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>

    <span class="token comment">// 将被代理的目标对象声明为成员变量</span>
	<span class="token keyword">private</span> <span class="token class-name">Calculator</span> target<span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token class-name">CalculatorStaticProxy</span><span class="token punctuation">(</span><span class="token class-name">Calculator</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 附加功能由代理类中的代理方法来实现</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"[日志] add 方法开始了，参数是："</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">","</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 通过目标对象来实现核心业务逻辑</span>
        <span class="token keyword">int</span> addResult <span class="token operator">=</span> target<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"[日志] add 方法结束了，结果是："</span> <span class="token operator">+</span> addResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> addResult<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>静态代理确实实现了解耦，但是由于代码都写死了，完全不具备任何的灵活性。就拿日志功能来说，将来其他地方也需要附加日志，那还得再声明更多个静态代理类，那就产生了大量重复的代 码，日志功能还是分散的，没有统一管理。</p>
<p>提出进一步的需求：将日志功能集中到一个代理类中，将来有任何日志需求，都通过这一个代理类来实现。这就需要使用动态代理技术了</p>
</blockquote>
<h3 id="动态代理" tabindex="-1"><a class="header-anchor" href="#动态代理" aria-hidden="true">#</a> 动态代理</h3>
<p><img src="https://s2.loli.net/2022/09/23/imDf1dh6oEV9F8b.png" alt="Snipaste_2022-09-23_08-51-41.png" loading="lazy"></p>
<p>生产代理对象的工厂类：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProxyFactory</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Object</span> target<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ProxyFactory</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token doc-comment comment">/**
		* newProxyInstance()：创建一个代理实例
		* 其中有三个参数：
		* 1、classLoader：加载动态生成的代理类的类加载器
		* 2、interfaces：目标对象实现的所有接口的class对象所组成的数组
		* 3、invocationHandler：设置代理对象实现目标对象方法的过程，即代理类中如何重写接口中的抽象方法
		*/</span>
		<span class="token class-name">ClassLoader</span> classLoader <span class="token operator">=</span> target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> interfaces <span class="token operator">=</span> target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">InvocationHandler</span> invocationHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InvocationHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token annotation punctuation">@Override</span>
		<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
		<span class="token doc-comment comment">/**
		* proxy：代理对象
		* method：代理对象需要实现的方法，即其中需要重写的方法
		* args：method所对应方法的参数
        */</span>
		<span class="token class-name">Object</span> result <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"[动态代理][日志] "</span><span class="token operator">+</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"，参数："</span><span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			result <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"[动态代理][日志] "</span><span class="token operator">+</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"，结果："</span><span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"[动态代理][日志] "</span><span class="token operator">+</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"，异常："</span><span class="token operator">+</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"[动态代理][日志] "</span><span class="token operator">+</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"，方法执行完毕"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> result<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span>classLoader<span class="token punctuation">,</span> interfaces<span class="token punctuation">,</span>
	invocationHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDynamicProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">ProxyFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProxyFactory</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CalculatorLogImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Calculator</span> proxy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Calculator</span><span class="token punctuation">)</span> factory<span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	proxy<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//proxy.div(1,1);</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aop概念及相关术语" tabindex="-1"><a class="header-anchor" href="#aop概念及相关术语" aria-hidden="true">#</a> AOP概念及相关术语</h2>
<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3>
<p>AOP（Aspect Oriented Programming）是一种设计思想，是软件设计领域中的面向切面编程，它是面向对象编程的一种补充和完善，它以通过预编译方式和运行期动态代理方式实现在不修改源代码的情况下给程序动态统一添加额外功能的一种技术</p>
<h3 id="相关术语" tabindex="-1"><a class="header-anchor" href="#相关术语" aria-hidden="true">#</a> 相关术语</h3>
<p><strong>①横切关注点</strong></p>
<p>从每个方法中抽取出来的同一类非核心业务。在同一个项目中，我们可以使用多个横切关注点对相关方法进行多个不同方面的增强</p>
<p>这个概念不是语法层面天然存在的，而是根据附加功能的逻辑上的需要：有十个附加功能，就有十个横切关注点</p>
<p><img src="https://s2.loli.net/2022/09/23/aWjICEB85KGn4Xh.png" alt="Snipaste_2022-09-23_10-07-24.png" loading="lazy"></p>
<p><strong>②通知</strong></p>
<p>每一个横切关注点上要做的事情都需要写一个方法来实现，这样的方法就叫通知方法</p>
<ul>
<li>前置通知：在被代理的目标方法前执行</li>
<li>返回通知：在被代理的目标方法成功结束后执行（寿终正寝）</li>
<li>异常通知：在被代理的目标方法异常结束后执行（死于非命）</li>
<li>后置通知：在被代理的目标方法最终结束后执行（盖棺定论）</li>
<li>环绕通知：使用try...catch...finally结构围绕整个被代理的目标方法，包括上面四种通知对应的所有位置</li>
</ul>
<p><img src="https://s2.loli.net/2022/09/23/iSG2w6LldpoPZhR.png" alt="Snipaste_2022-09-23_10-08-55.png" loading="lazy"></p>
<p><strong>③切面</strong></p>
<p>封装通知方法的类</p>
<p><img src="https://s2.loli.net/2022/09/23/4Lostwbc8I5eEiz.png" alt="Snipaste_2022-09-23_10-09-46.png" loading="lazy"></p>
<p><strong>④目标</strong></p>
<p>被代理的目标对象</p>
<p><strong>⑤代理</strong></p>
<p>向目标对象应用通知之后创建的代理对象</p>
<p><strong>⑥连接点</strong></p>
<p>这也是一个纯逻辑概念，不是语法定义的</p>
<p>把方法排成一排，每一个横切位置看成x轴方向，把方法从上到下执行的顺序看成y轴，x轴和y轴的交叉点就是连接点</p>
<p><img src="https://s2.loli.net/2022/09/23/1fE9a5NRWXJp3Cs.png" alt="Snipaste_2022-09-23_10-11-16.png" loading="lazy"></p>
<p><strong>⑦切入点</strong></p>
<p>定位连接点的方式</p>
<p>每个类的方法中都包含多个连接点，所以连接点是类中客观存在的事物（从逻辑上来说）。</p>
<p>如果把连接点看作数据库中的记录，那么切入点就是查询记录的 SQL 语句。</p>
<p>Spring 的 AOP 技术可以通过切入点定位到特定的连接点。</p>
<p>切点通过 org.springframework.aop.Pointcut 接口进行描述，它使用类和方法作为连接点的查询条 件。</p>
<h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3>
<ul>
<li>简化代码：把方法中固定位置的重复的代码抽取出来，让被抽取的方法更专注于自己的核心功能，提高内聚性。</li>
<li>代码增强：把特定的功能封装到切面类中，看哪里有需要，就往上套，被套用了切面逻辑的方法就被切面给增强了。</li>
</ul>
<h2 id="基于注解的aop" tabindex="-1"><a class="header-anchor" href="#基于注解的aop" aria-hidden="true">#</a> 基于注解的AOP</h2>
<h3 id="技术说明" tabindex="-1"><a class="header-anchor" href="#技术说明" aria-hidden="true">#</a> 技术说明</h3>
<p><img src="https://s2.loli.net/2022/09/23/Gt2DLpVeX8CRyTa.png" alt="Snipaste_2022-09-23_10-13-13.png" loading="lazy"></p>
<ul>
<li>动态代理（InvocationHandler）：JDK原生的实现方式，需要被代理的目标类必须实现接口。因为这个技术要求代理对象和目标对象实现同样的接口（兄弟两个拜把子模式）。</li>
<li>cglib：通过继承被代理的目标类（认干爹模式）实现代理，所以不需要目标类实现接口。</li>
<li>AspectJ：本质上是静态代理，将代理逻辑“织入”被代理的目标类编译得到的字节码文件，所以最终效果是动态的。weaver就是织入器。Spring只是借用了AspectJ中的注解</li>
</ul>
<h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h3>
<p><strong>①添加依赖</strong></p>
<p>在IOC所需依赖基础上再加入下面依赖即可：</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- spring-aspects会帮我们传递过来aspectjweaver --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-aspects<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.3.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>②准备被代理的目标资源</strong></p>
<p>接口：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token function">mul</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> <span class="token function">div</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现类：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CalculatorPureImpl</span> <span class="token keyword">implements</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> result <span class="token operator">=</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"方法内部 result = "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> result <span class="token operator">=</span> i <span class="token operator">-</span> j<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"方法内部 result = "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">mul</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> result <span class="token operator">=</span> i <span class="token operator">*</span> j<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"方法内部 result = "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">div</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> result <span class="token operator">=</span> i <span class="token operator">/</span> j<span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"方法内部 result = "</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建切面类并配置" tabindex="-1"><a class="header-anchor" href="#创建切面类并配置" aria-hidden="true">#</a> 创建切面类并配置</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// @Aspect表示这个类是一个切面类</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token comment">// @Component注解保证这个切面类能够放入IOC容器</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LogAspect</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span><span class="token string">"execution(public int com.atguigu.aop.annotation.CalculatorImpl.*(..))"</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">beforeMethod</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">String</span> methodName <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> args <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>joinPoint<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Logger-->前置通知，方法名："</span><span class="token operator">+</span>methodName<span class="token operator">+</span><span class="token string">"，参数："</span><span class="token operator">+</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token annotation punctuation">@After</span><span class="token punctuation">(</span><span class="token string">"execution(* com.atguigu.aop.annotation.CalculatorImpl.*(..))"</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterMethod</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">String</span> methodName <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Logger-->后置通知，方法名："</span><span class="token operator">+</span>methodName<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token annotation punctuation">@AfterReturning</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"execution(* com.atguigu.aop.annotation.CalculatorImpl.*(..))"</span><span class="token punctuation">,</span> returning <span class="token operator">=</span> <span class="token string">"result"</span><span class="token punctuation">)</span>
		<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterReturningMethod</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">,</span> <span class="token class-name">Object</span> result<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">String</span> methodName <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Logger-->返回通知，方法名："</span><span class="token operator">+</span>methodName<span class="token operator">+</span><span class="token string">"，结果："</span><span class="token operator">+</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token annotation punctuation">@AfterThrowing</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"execution(* com.atguigu.aop.annotation.CalculatorImpl.*(..))"</span><span class="token punctuation">,</span> throwing <span class="token operator">=</span> <span class="token string">"ex"</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterThrowingMethod</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">String</span> methodName <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Logger-->异常通知，方法名："</span><span class="token operator">+</span>methodName<span class="token operator">+</span><span class="token string">"，异常："</span><span class="token operator">+</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Around</span><span class="token punctuation">(</span><span class="token string">"execution(* com.atguigu.aop.annotation.CalculatorImpl.*(..))"</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">aroundMethod</span><span class="token punctuation">(</span><span class="token class-name">ProceedingJoinPoint</span> joinPoint<span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token class-name">String</span> methodName <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">String</span> args <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>joinPoint<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> result <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"环绕通知-->目标对象方法执行之前"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">//目标对象（连接点）方法的执行</span>
			result <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"环绕通知-->目标对象方法返回值之后"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> throwable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			throwable<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"环绕通知-->目标对象方法出现异常时"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"环绕通知-->目标对象方法执行完毕"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在Spring的配置文件中配置：</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--
基于注解的AOP的实现：
1、将目标对象和切面交给IOC容器管理（注解+扫描）
2、开启AspectJ的自动代理，为目标对象自动生成代理
3、将切面类通过注解@Aspect标识
--></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.atguigu.aop.annotation<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">context:</span>component-scan</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>aspectj-autoproxy</span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="各种通知" tabindex="-1"><a class="header-anchor" href="#各种通知" aria-hidden="true">#</a> 各种通知</h3>
<ul>
<li>前置通知：使用@Before注解标识，在被代理的目标方法前执行</li>
<li>返回通知：使用@AfterReturning注解标识，在被代理的目标方法成功结束后执行（寿终正寝）</li>
<li>异常通知：使用@AfterThrowing注解标识，在被代理的目标方法异常结束后执行（死于非命）</li>
<li>后置通知：使用@After注解标识，在被代理的目标方法最终结束后执行（盖棺定论）</li>
<li>环绕通知：使用@Around注解标识，使用try...catch...finally结构围绕整个被代理的目标方法，包括上面四种通知对应的所有位置</li>
</ul>
<blockquote>
<p>各种通知的执行顺序：</p>
<ul>
<li>Spring版本5.3.x以前：
<ul>
<li>前置通知</li>
<li>目标操作</li>
<li>后置通知</li>
<li>返回通知或异常通知</li>
</ul>
</li>
<li>Spring版本5.3.x以后：
<ul>
<li>前置通知</li>
<li>目标操作</li>
<li>返回通知或异常通知</li>
<li>后置通知</li>
</ul>
</li>
</ul>
</blockquote>
<h3 id="切入点表达式语法" tabindex="-1"><a class="header-anchor" href="#切入点表达式语法" aria-hidden="true">#</a> 切入点表达式语法</h3>
<p><strong>①作用</strong></p>
<p><img src="https://s2.loli.net/2022/09/23/kOgCrPTalvxcoKS.png" alt="Snipaste_2022-09-23_10-39-10.png" loading="lazy"></p>
<p><strong>②语法细节</strong></p>
<ul>
<li>用<code v-pre>*</code>号代替“权限修饰符”和“返回值”部分表示“权限修饰符”和“返回值”不限</li>
<li>在包名的部分，一个“<code v-pre>*</code>”号只能代表包的层次结构中的一层，表示这一层是任意的。
<ul>
<li>例如：<code v-pre>*.Hello</code>匹配com.Hello，不匹配com.atguigu.Hello</li>
</ul>
</li>
<li>在包名的部分，使用<code v-pre>“*..”</code>表示包名任意、包的层次深度任意</li>
<li>在类名的部分，类名部分整体用<code v-pre>*</code>号代替，表示类名任意</li>
<li>在类名的部分，可以使用<code v-pre>*</code>号代替类名的一部分
<ul>
<li>例如：<code v-pre>*Service</code>匹配所有名称以Service结尾的类或接口</li>
</ul>
</li>
<li>在方法名部分，可以使用<code v-pre>*</code>号表示方法名任意</li>
<li>在方法名部分，可以使用<code v-pre>*</code>号代替方法名的一部分
<ul>
<li>例如：<code v-pre>*Operation</code>匹配所有方法名以Operation结尾的方法</li>
</ul>
</li>
<li>在方法参数列表部分，使用(..)表示参数列表任意</li>
<li>在方法参数列表部分，使用(int,..)表示参数列表以一个int类型的参数开头</li>
<li>在方法参数列表部分，基本数据类型和对应的包装类型是不一样的
<ul>
<li>切入点表达式中使用 int 和实际方法中 Integer 是不匹配的</li>
</ul>
</li>
<li>在方法返回值部分，如果想要明确指定一个返回值类型，那么必须同时写明权限修饰符</li>
<li>例如：<code v-pre>execution(public int ..Service.*(.., int))</code> 正确</li>
<li>例如：<code v-pre>execution(* int ..Service.*(.., int)) </code>错误</li>
</ul>
<p><img src="https://s2.loli.net/2022/09/23/T8aI7teDb5KJs61.png" alt="Snipaste_2022-09-23_10-44-03.png" loading="lazy"></p>
<h3 id="重用切入点表达式" tabindex="-1"><a class="header-anchor" href="#重用切入点表达式" aria-hidden="true">#</a> 重用切入点表达式</h3>
<p><strong>①声明</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">"execution(* com.atguigu.aop.annotation.*.*(..))"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pointCut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>②在同一个切面中使用</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span><span class="token string">"pointCut()"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">beforeMethod</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">String</span> methodName <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span> args <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>joinPoint<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Logger-->前置通知，方法名："</span><span class="token operator">+</span>methodName<span class="token operator">+</span><span class="token string">"，参数："</span><span class="token operator">+</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>③在不同切面中使用</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span><span class="token string">"com.atguigu.aop.CommonPointCut.pointCut()"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">beforeMethod</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">String</span> methodName <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span> args <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>joinPoint<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Logger-->前置通知，方法名："</span><span class="token operator">+</span>methodName<span class="token operator">+</span><span class="token string">"，参数："</span><span class="token operator">+</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取通知的相关信息" tabindex="-1"><a class="header-anchor" href="#获取通知的相关信息" aria-hidden="true">#</a> 获取通知的相关信息</h3>
<p><strong>①获取连接点信息</strong></p>
<p>获取连接点信息可以在通知方法的参数位置设置JoinPoint类型的形参</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span><span class="token string">"execution(public int com.atguigu.aop.annotation.CalculatorImpl.*(..))"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">beforeMethod</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//获取连接点的签名信息</span>
	<span class="token class-name">String</span> methodName <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//获取目标方法到的实参信息</span>
	<span class="token class-name">String</span> args <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>joinPoint<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Logger-->前置通知，方法名："</span><span class="token operator">+</span>methodName<span class="token operator">+</span><span class="token string">"，参数："</span><span class="token operator">+</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>②获取目标方法的返回值</strong></p>
<p>@AfterReturning中的属性returning，用来将通知方法的某个形参，接收目标方法的返回值</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@AfterReturning</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"execution(* com.atguigu.aop.annotation.CalculatorImpl.* (..))"</span><span class="token punctuation">,</span> returning <span class="token operator">=</span> <span class="token string">"result"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterReturningMethod</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">,</span> <span class="token class-name">Object</span> result<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">String</span> methodName <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Logger-->返回通知，方法名："</span><span class="token operator">+</span>methodName<span class="token operator">+</span><span class="token string">"，结果："</span><span class="token operator">+</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>③获取目标方法的异常</strong></p>
<p>@AfterThrowing中的属性throwing，用来将通知方法的某个形参，接收目标方法的异常</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@AfterThrowing</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"execution(* com.atguigu.aop.annotation.CalculatorImpl.* (..))"</span><span class="token punctuation">,</span> throwing <span class="token operator">=</span> <span class="token string">"ex"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterThrowingMethod</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">String</span> methodName <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Logger-->异常通知，方法名："</span><span class="token operator">+</span>methodName<span class="token operator">+</span><span class="token string">"，异常："</span><span class="token operator">+</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环绕通知" tabindex="-1"><a class="header-anchor" href="#环绕通知" aria-hidden="true">#</a> 环绕通知</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Around</span><span class="token punctuation">(</span><span class="token string">"execution(* com.atguigu.aop.annotation.CalculatorImpl.*(..))"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">aroundMethod</span><span class="token punctuation">(</span><span class="token class-name">ProceedingJoinPoint</span> joinPoint<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">String</span> methodName <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span> args <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>joinPoint<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Object</span> result <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"环绕通知-->目标对象方法执行之前"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//目标方法的执行，目标方法的返回值一定要返回给外界调用者</span>
		result <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"环绕通知-->目标对象方法返回值之后"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> throwable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		throwable<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"环绕通知-->目标对象方法出现异常时"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"环绕通知-->目标对象方法执行完毕"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切面的优先级" tabindex="-1"><a class="header-anchor" href="#切面的优先级" aria-hidden="true">#</a> 切面的优先级</h3>
<p>相同目标方法上同时存在多个切面时，切面的优先级控制切面的<strong>内外嵌套</strong>顺序。</p>
<ul>
<li>优先级高的切面：外面</li>
<li>优先级低的切面：里面</li>
</ul>
<p>使用@Order注解可以控制切面的优先级：</p>
<ul>
<li>@Order(较小的数)：优先级高</li>
<li>@Order(较大的数)：优先级低</li>
</ul>
<p><img src="https://s2.loli.net/2022/09/23/KyUPAYdD9Io2u1q.png" alt="Snipaste_2022-09-23_10-52-07.png" loading="lazy"></p>
<h2 id="基于xml的aop" tabindex="-1"><a class="header-anchor" href="#基于xml的aop" aria-hidden="true">#</a> 基于XML的AOP</h2>
<h3 id="准备工作-1" tabindex="-1"><a class="header-anchor" href="#准备工作-1" aria-hidden="true">#</a> 准备工作</h3>
<p>参考基于注解的AOP环境</p>
<h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.atguigu.aop.xml<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">context:</span>component-scan</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>config</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--配置切面类--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>aspect</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loggerAspect<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>pointcut</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pointCut<span class="token punctuation">"</span></span> <span class="token attr-name">expression</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>execution(* com.atguigu.aop.xml.CalculatorImpl.*(..))<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>before</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>beforeMethod<span class="token punctuation">"</span></span> <span class="token attr-name">pointcut-ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pointCut<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">aop:</span>before</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>after</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>afterMethod<span class="token punctuation">"</span></span> <span class="token attr-name">pointcut-ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pointCut<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">aop:</span>after</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>after-returning</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>afterReturningMethod<span class="token punctuation">"</span></span> <span class="token attr-name">returning</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>result<span class="token punctuation">"</span></span> <span class="token attr-name">pointcut-ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pointCut<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">aop:</span>after-returning</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>after-throwing</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>afterThrowingMethod<span class="token punctuation">"</span></span> <span class="token attr-name">throwing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span> <span class="token attr-name">pointcut-ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pointCut<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">aop:</span>after-throwing</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>around</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>aroundMethod<span class="token punctuation">"</span></span> <span class="token attr-name">pointcut-ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pointCut<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">aop:</span>around</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">aop:</span>aspect</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>aspect</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validateAspect<span class="token punctuation">"</span></span> <span class="token attr-name">order</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">aop:</span>before</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validateBeforeMethod<span class="token punctuation">"</span></span> <span class="token attr-name">pointcut-ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pointCut<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">aop:</span>before</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">aop:</span>aspect</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">aop:</span>config</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
