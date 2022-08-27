<template><div><h1 id="计算机系统漫游" tabindex="-1"><a class="header-anchor" href="#计算机系统漫游" aria-hidden="true">#</a> <strong>计算机系统漫游</strong></h1>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>作为整本书的<strong>概述</strong>，第一章显得尤其重要，既要让我们了解书籍各章节的内容，又要有趣生动，能吸引人读下去</p>
</div>
<hr>
<h2 id="hello-c" tabindex="-1"><a class="header-anchor" href="#hello-c" aria-hidden="true">#</a> hello.c</h2>
<p>一切都从<strong>hello.c程序</strong>开始：</p>
<div class="language-cpp ext-cpp line-numbers-mode"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎来到计算机的世界！</p>
<hr>
<h2 id="信息就是位-上下文" tabindex="-1"><a class="header-anchor" href="#信息就是位-上下文" aria-hidden="true">#</a> 信息就是位+上下文</h2>
<ol>
<li>hello.c（源文件）是0，1序列，八个位是一个字节，由ASCII字符构成，也成为文本文件</li>
<li>通过翻译为低级机器语言指令并打包，成为可执行目标文件</li>
</ol>
<blockquote>
<p>编译器驱动程序：</p>
<p>linux&gt; gcc -o hello hello.c</p>
</blockquote>
<p><img src="https://s2.loli.net/2022/07/11/WxAVUmyMvS24s7K.png" alt="01-03 compilation systems" loading="lazy"></p>
<ul>
<li>预处理阶段：处理头文件</li>
<li>编译阶段：hello.i -&gt; hello.s,汇编语言程序</li>
<li>汇编阶段：hello.s -&gt; hello.o，可重定位目标程序</li>
<li>链接阶段：合并c标准库中的函数</li>
</ul>
<hr>
<h2 id="理解编译器的工作流程" tabindex="-1"><a class="header-anchor" href="#理解编译器的工作流程" aria-hidden="true">#</a> 理解编译器的工作流程：</h2>
<blockquote>
<ul>
<li>优化程序性能</li>
<li>理解链接出现的错误</li>
<li>避免安全漏洞</li>
</ul>
</blockquote>
<hr>
<h2 id="处理器读与解释内存中的指令" tabindex="-1"><a class="header-anchor" href="#处理器读与解释内存中的指令" aria-hidden="true">#</a> 处理器读与解释内存中的指令</h2>
<p>首先了解系统硬件构成：</p>
<blockquote>
<ul>
<li>总线</li>
<li>I/O设备</li>
<li>主存</li>
<li>处理器（CPU）</li>
</ul>
</blockquote>
<p><img src="https://s2.loli.net/2022/07/11/Iv74mus9PigFTRG.png" alt="01-04 system hardwares" loading="lazy"></p>
<hr>
<h2 id="高速缓存" tabindex="-1"><a class="header-anchor" href="#高速缓存" aria-hidden="true">#</a> 高速缓存</h2>
<p>能提升程序性能，处理器与主存之间的读取速度差距很大</p>
<hr>
<h2 id="存储设备层次结构" tabindex="-1"><a class="header-anchor" href="#存储设备层次结构" aria-hidden="true">#</a> 存储设备层次结构</h2>
<p><img src="https://s2.loli.net/2022/07/11/SCrXVgABMbqPJND.png" alt="01-09 一个存储器层次结构的示例" loading="lazy"></p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>主要思想是上一层存储器作为第一层存储器的高速缓存</p>
</div>
<hr>
<h2 id="操作系统管理硬件" tabindex="-1"><a class="header-anchor" href="#操作系统管理硬件" aria-hidden="true">#</a> 操作系统管理硬件</h2>
<p>操作系统两个基本功能：</p>
<ul>
<li>防止硬件被失控程序滥用</li>
<li>向应用程序提供简单一致的机制来控制复杂繁多的硬件</li>
</ul>
<p>一个进程可以有多个线程，之间可以数据共享，每个进程用一个虚拟内存：</p>
<p><img src="https://s2.loli.net/2022/07/11/v4dzTqb8rX97nKt.png" alt="01-13 进程的虚拟地址空间" loading="lazy"></p>
<p>文件是字节序列，所有I/O设备都可以看成文件</p>
<hr>
<h2 id="系统之间进行网络通信" tabindex="-1"><a class="header-anchor" href="#系统之间进行网络通信" aria-hidden="true">#</a> 系统之间进行网络通信</h2>
<p>网络也可视为I/O设备</p>
<hr>
<h2 id="并发并行" tabindex="-1"><a class="header-anchor" href="#并发并行" aria-hidden="true">#</a> 并发并行</h2>
<blockquote>
<p>并发：系统同时进行多个活动</p>
<p>并行：用并发来加快系统运行</p>
</blockquote>
<p>可以在系统多个概念层次上应用：</p>
<ul>
<li>线程级并发：一个进程执行多个控制流（多处理器系统，超线程）</li>
<li>指令级并行：同时执行多条指令（流水线）</li>
<li>单指令，多数据并行：允许一条指令产生多个可以并行执行的操作</li>
</ul>
<p>抽象是计算机很重要的概念，应用很广。</p>
</div></template>
