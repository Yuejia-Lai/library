<template><div><h1 id="c语言概述" tabindex="-1"><a class="header-anchor" href="#c语言概述" aria-hidden="true">#</a> C语言概述</h1>
<h2 id="简单的c程序示例" tabindex="-1"><a class="header-anchor" href="#简单的c程序示例" aria-hidden="true">#</a> 简单的C程序示例</h2>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token comment">/* 一个简单的C程序 */</span>
<span class="token punctuation">{</span>
<span class="token keyword">int</span> num<span class="token punctuation">;</span> <span class="token comment">/* 定义一个名为num的变量 */</span>
num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">/* 为num赋一个值 */</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"I am a simple "</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 使用printf()函数 */</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"computer.\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"My favorite number is %d because it is first.\n"</span><span class="token punctuation">,</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="示例解释" tabindex="-1"><a class="header-anchor" href="#示例解释" aria-hidden="true">#</a> 示例解释</h2>
<p><img src="https://s2.loli.net/2022/07/29/lWUJPjKiLwuI31B.png" alt="Snipaste_2022-07-29_22-14-56" loading="lazy"></p>
<h3 id="第一遍-快速概要" tabindex="-1"><a class="header-anchor" href="#第一遍-快速概要" aria-hidden="true">#</a> 第一遍：快速概要</h3>
<ul>
<li>
<p>#include ←包含另一个文件</p>
</li>
<li>
<p>int main(void) ←函数名</p>
</li>
<li>
<p>/* 一个简单的C程序 */ ←注释</p>
</li>
<li>
<p>{ ←函数体开始</p>
</li>
<li>
<p>int num; ←声明</p>
</li>
<li>
<p>num = 1; ←赋值表达式语句</p>
</li>
<li>
<p>printf(&quot;I am a simple &quot;); ←调用一个函数</p>
</li>
<li>
<p>printf(&quot;computer.\n&quot;); ←调用另一个函数</p>
</li>
<li>
<p>printf(&quot;My favorite number is %d because it is first.\n&quot;, num);</p>
</li>
<li>
<p>return 0; ←return语句</p>
</li>
<li>
<p>} ←结束</p>
</li>
</ul>
<h3 id="第二遍-程序细节" tabindex="-1"><a class="header-anchor" href="#第二遍-程序细节" aria-hidden="true">#</a> 第二遍：程序细节</h3>
<ol>
<li>#include指令和头文件</li>
</ol>
<p>所有的C编译器软件包都提供stdio.h文件。该文件中包含了供编译器使用的输入和输出函数（如， printf()）信息。该文件名的含义是标准输入/输出头文件。通常，在C程序顶部的信息集合被称为头文件（header）</p>
<p>在大多数情况下，头文件包含了编译器创建最终可执行程序要用到的信息，头文件帮助编译器把你的程序正确地组合在一起</p>
<ol start="2">
<li>main()函数</li>
</ol>
<p>C程序一定从main()函数开始执行（目前 不必考虑例外的情况），通常，函数名后面的圆括号中包含一些传入函数的信息。该例中没有传 递任何信息。因此，圆括号内是单词void</p>
<ol start="3">
<li>注释</li>
</ol>
<p>在程序中，被/* */两个符号括起来的部分是程序的注释。写注释能让他 人（包括自己）更容易明白你所写的程序。// 这种注释只能写成一行</p>
<ol start="4">
<li>花括号、函数体和块</li>
</ol>
<p>一般而言，所有的C函数 都使用花括号标记函数体的开始和结束。这是规定，不能省略。只有花括号 （{}）能起这种作用，圆括号（()）和方括号（[]）都不行</p>
<ol start="5">
<li>声明</li>
</ol>
<p>声明是C语言最重 要的特性之一，分号在C语言中是大部分语句和声明的一部分，不像在 Pascal中只是语句间的分隔符，以前的C语言，还要求把变量声明在块的顶部，其他语句不能在任何声 76 明的前面，C99和C11遵循C++的惯例，可以把声明放在块中的任何位置。尽管如 此，首次使用变量之前一定要先声明它</p>
<p>C语言的名称区分大小写，即把一个字母的大写和小写视为两个不同的 字符</p>
<ol start="6">
<li>赋值</li>
</ol>
<p>该行代码的意思是“把值1赋给变量num”。在执行int num;声明时，编 译器在计算机内存中为变量num预留了空间，然后在执行这行赋值表达式语 句时，把值储存在之前预留的位置。可以给num赋不同的值，这就是num之 所以被称为变量（variable）的原因</p>
<ol start="7">
<li>
<p>printf()函数</p>
</li>
<li>
<p>return语句</p>
</li>
</ol>
<p>该语句以return关键字开始，后面是待返回的值，并以分号结 尾</p>
<hr>
<h2 id="简单的程序结构" tabindex="-1"><a class="header-anchor" href="#简单的程序结构" aria-hidden="true">#</a> 简单的程序结构</h2>
<p>C程序的基本结构。程 序由一个或多个函数组成，必须有 main()函数。函数由函数头和函数体组 成。函数头包括函数名、传入该函数的信息类型和函数的返回类型。通过函 数名后的圆括号可识别出函数，圆括号里可能为空，可能有参数。函数体被 花括号括起来，由一系列语句、声明组成</p>
<hr>
<h2 id="提高程序可读性的技巧" tabindex="-1"><a class="header-anchor" href="#提高程序可读性的技巧" aria-hidden="true">#</a> 提高程序可读性的技巧</h2>
<ul>
<li>选择有意义的函数名</li>
<li>写注释</li>
<li>在函数中用空行分隔概念上的多个部分</li>
</ul>
</div></template>
