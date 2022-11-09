<template><div><h1 id="信息的表示和处理" tabindex="-1"><a class="header-anchor" href="#信息的表示和处理" aria-hidden="true">#</a> <strong>信息的表示和处理</strong></h1>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>本章节讲述了计算机存储数字与字符的方法（包括各种整型，无符号数，浮点数等），也讲述推导了相关运算以及其满足的性质</p>
</div>
<p>现代计算机用二进制来表示存储信息，称为位（bit），本章节主要介绍三种数字表示：无符号编码，补码编码，浮点数编码</p>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p>计算机表示法是用有限的位来表示一个数字，这样会导致一些“溢出”和“精确度”的问题，就算是这样，整数运算以及其他数字运算仍然满足某些数学定理，浮点数是其中比较特殊的一类，和整数不同，整数范围比较小但是精确，浮点数范围大但是不精确</p>
</div>
<blockquote>
<p>Java语言创造了一套新的数字运算和表示标准，C/C++在数字表示和运算上有多种形式（具体取决于机器类型），但是Java对其有严格的标准</p>
</blockquote>
<hr>
<h2 id="信息存储" tabindex="-1"><a class="header-anchor" href="#信息存储" aria-hidden="true">#</a> 信息存储</h2>
<ul>
<li>计算机大多使用八位的“块”，称为“字节”，来作为最小的可寻址的内存单位</li>
<li>机器程序将内存视为一个巨大的字节数组，称为“虚拟内存”，每个字节有唯一的内存地址，它们构成了“虚拟地址空间”</li>
<li>每个字节对象可以简单地视为一个字节块，而程序本身就是一个字节序列</li>
</ul>
<h3 id="十六进制表示法" tabindex="-1"><a class="header-anchor" href="#十六进制表示法" aria-hidden="true">#</a> 十六进制表示法</h3>
<p>一个字节由八位组成，二进制表示冗长，十进制与二进制转换麻烦，所以可以使用十六进制数来表示位模式，由‘0’-‘9’以及‘A’-‘F’来表示。</p>
<blockquote>
<p>十六进制二进制转化：</p>
<ul>
<li>二进制数据拆成四个一组，最高位组不足四个则用0补齐</li>
<li>将每一组转换为十六进制数</li>
<li>十六进制转换二进制同理</li>
</ul>
</blockquote>
<h3 id="字数据大小" tabindex="-1"><a class="header-anchor" href="#字数据大小" aria-hidden="true">#</a> 字数据大小</h3>
<p>每台计算机都有<strong>字长</strong>，标明指针数据的大小，也是虚拟地址的取值范围（现在的64位机器，32位机器），虚拟地址范围为：$$[0，2^w-1(w为字长)]$$</p>
<blockquote>
<p>事实上，大多数64位机器也可以兼容32位程序，这是一种向后兼容，而且现在很多编译器也可以指定以哪种字长编译</p>
<p>从基本数据类型来看，这两种字长最大的区别在于long类型是4字节还是8字节（以及char*类型）</p>
</blockquote>
<h3 id="寻址和字节顺序" tabindex="-1"><a class="header-anchor" href="#寻址和字节顺序" aria-hidden="true">#</a> 寻址和字节顺序</h3>
<ul>
<li>几乎在所有机器中，多字节对象被存储为连续的字节序列，对象地址为所使用的字节中最小的地址</li>
<li>某些机器在内存中按照从最低有效字节到最高有效字节进行存储，称为“小端法”，而另一种反过来的表示方法称为“大端法”</li>
<li>大多数Intel兼容机使用小端法，许多新的微处理器是“双端法”，但是一旦选择了特定操作系统，字节顺序也就固定了</li>
<li>对于大多数应用程序员，字节顺序不可见，特别的是，在网络应用程序的代码方面必须遵守已建立的关于字节顺序的规则</li>
</ul>
<h3 id="表示字符串" tabindex="-1"><a class="header-anchor" href="#表示字符串" aria-hidden="true">#</a> 表示字符串</h3>
<p>C语言中字符串被表示成一个以null结尾的字符数组，Java语言使用Unicode编码字符串</p>
<h3 id="表示代码" tabindex="-1"><a class="header-anchor" href="#表示代码" aria-hidden="true">#</a> 表示代码</h3>
<p>相同的代码，在不同的机器（操作系统）上编译结果是不一样的，由于指令不兼容，编码方式不同，导致二进制代码不兼容</p>
<h3 id="布尔代数简介" tabindex="-1"><a class="header-anchor" href="#布尔代数简介" aria-hidden="true">#</a> 布尔代数简介</h3>
<p>其中位向量一个很有用的应用就是表示有限集合，|和&amp;对应于并和交，所以可以用来对集合编码</p>
<h3 id="c语言中的位级运算" tabindex="-1"><a class="header-anchor" href="#c语言中的位级运算" aria-hidden="true">#</a> C语言中的位级运算</h3>
<p>&amp;（and），|（or），^（异或），~（not）</p>
<p>一个常见用法是实现掩码运算</p>
<h3 id="c语言中的逻辑运算" tabindex="-1"><a class="header-anchor" href="#c语言中的逻辑运算" aria-hidden="true">#</a> C语言中的逻辑运算</h3>
<p>&amp;&amp;，||，！</p>
<blockquote>
<p>注意与按位运算区分</p>
</blockquote>
<h3 id="c语言中的移位运算" tabindex="-1"><a class="header-anchor" href="#c语言中的移位运算" aria-hidden="true">#</a> C语言中的移位运算</h3>
<p>注意区分逻辑右移和算术右移，左移只有一种，C/C++里面大部分用算术右移，Java中可以由程序员指定</p>
<hr>
<h2 id="整数表示" tabindex="-1"><a class="header-anchor" href="#整数表示" aria-hidden="true">#</a> 整数表示</h2>
<p>整数编码有两种方式：无符号和有符号</p>
<h3 id="整型数据类型" tabindex="-1"><a class="header-anchor" href="#整型数据类型" aria-hidden="true">#</a> 整型数据类型</h3>
<p>32位程序：</p>
<p><img src="https://s2.loli.net/2022/07/19/jzQxvi6DTuaNILE.jpg" alt="20180326064340173" loading="lazy"></p>
<p>64位程序：</p>
<p><img src="https://s2.loli.net/2022/07/19/cByjCoYXgEzt5Wh.jpg" alt="v2-e03fde0d3ab0c4b360ca7647878a7f80_r" loading="lazy"></p>
<p>可以看到，主要区别在于long类型（当然还有指针类型）大小范围不一样</p>
<p>C语言整型数据类型的保证的取值范围，C语言标准要求这些数据类型必须至少具有这样的取值范围：</p>
<p><img src="https://s2.loli.net/2022/07/19/OqQFpLDVwyr8Tm5.jpg" alt="2018032606472465" loading="lazy"></p>
<p>除了固定大小的数据类型，可以看出来，C语言要求正数与负数范围对称</p>
<blockquote>
<p>C/C++都支持有符号数和无符号数，Java不支持无符号数</p>
</blockquote>
<h3 id="无符号数的编码" tabindex="-1"><a class="header-anchor" href="#无符号数的编码" aria-hidden="true">#</a> 无符号数的编码</h3>
<p>假设有w位，将其看作是一个二进制数，就得到了无符号表示</p>
<p>所以无符号数的范围是：$$[0 - 2^w-1]$$</p>
<p><strong>无符号数编码具有唯一性</strong></p>
<h3 id="补码编码" tabindex="-1"><a class="header-anchor" href="#补码编码" aria-hidden="true">#</a> 补码编码</h3>
<p><strong>计算机表示有符号数最常见的形式</strong></p>
<blockquote>
<p>在补码定义中，字的最高位解释为负权值，同时最高位也被称为符号位，为1的时候是负数，为0时是正数</p>
</blockquote>
<p>所以，w位补码表示有符号数的范围是：$$[-2<sup w-1="">{w-1},2</sup>-1]$$</p>
<p>同时，与无符号数一样，<strong>补码编码具有唯一性</strong></p>
<div class="custom-container danger"><p class="custom-container-title">警告</p>
<p>补码表示的正负数范围不一致，这是导致程序出bug的一大原因，平时应注意</p>
</div>
<blockquote>
<p>Java语言中的标准很明确，对整数采用补码表示，这是为了Java的跨平台特性和可移植性</p>
</blockquote>
<p>关于“原码和反码”，由于这两种表示方式会导致有+0与-0之分，现在大多数机器都采用补码表示整数，反码唯一不同点是最高位权值比补码少一</p>
<h3 id="有符号数与无符号数之间的转换" tabindex="-1"><a class="header-anchor" href="#有符号数与无符号数之间的转换" aria-hidden="true">#</a> 有符号数与无符号数之间的转换</h3>
<p>原则是：数值可能改变，但是位值不变（位模式不变），下面的图表示了转换中数值的变化：</p>
<p><img src="https://s2.loli.net/2022/07/19/jC1UWf9GMcDqXgb.png" alt="12" loading="lazy"></p>
<h3 id="c语言中的有符号数与无符号数" tabindex="-1"><a class="header-anchor" href="#c语言中的有符号数与无符号数" aria-hidden="true">#</a> C语言中的有符号数与无符号数</h3>
<p>当C语言执行一个运算时，一个数是有符号，另一个是无符号数，那么会隐式地将有符号数转换为无符号数（在进行&lt;和&gt;比较时，可能会产生问题）</p>
<h3 id="拓展一个数字的位表示" tabindex="-1"><a class="header-anchor" href="#拓展一个数字的位表示" aria-hidden="true">#</a> 拓展一个数字的位表示</h3>
<ul>
<li>无符号数的零拓展：在表示的开头添加零即可</li>
<li>补码数的符号拓展：在表示的开头添加原数最高有效位的值（这样会让补码数保持原有的数值）</li>
</ul>
<h3 id="截断数字" tabindex="-1"><a class="header-anchor" href="#截断数字" aria-hidden="true">#</a> 截断数字</h3>
<p>当计算机将w位数字截断为k位数字时，会直接丢弃高w-k位，截断一个数很可能会改变它的值，在这个例子中表现为对2的k次方取模</p>
<h3 id="有符号数与无符号数的建议" tabindex="-1"><a class="header-anchor" href="#有符号数与无符号数的建议" aria-hidden="true">#</a> 有符号数与无符号数的建议</h3>
<p><strong>建议不使用或者减少使用无符号数！！！</strong></p>
<hr>
<h2 id="整数运算" tabindex="-1"><a class="header-anchor" href="#整数运算" aria-hidden="true">#</a> 整数运算</h2>
<h3 id="无符号加法" tabindex="-1"><a class="header-anchor" href="#无符号加法" aria-hidden="true">#</a> 无符号加法</h3>
<p>数字相加可能会导致字长增长，某些语言支持无限精度运算，但是一般情况下，大部分语言支持<strong>固定精度</strong>运算</p>
<blockquote>
<p>无符号数加法会将操作数超过字长的部分截断丢弃</p>
</blockquote>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>加法溢出检测：假设0&lt;=x,y&lt;=UMax,令s=x+y，当且仅当s&lt;x(或者s&lt;y)时溢出</p>
</div>
<p>对于无符号数的逆元：当x=0时，逆元为0，x&gt;0时，逆元：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>w</mi></msup><mo>−</mo><mi>x</mi><mtext>（</mtext><mi>w</mi><mtext>为字长）</mtext></mrow><annotation encoding="application/x-tex">2^w-x（w为字长）</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7477em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">x</span><span class="mord cjk_fallback">（</span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mord cjk_fallback">为字长）</span></span></span></span></p>
<h3 id="补码加法" tabindex="-1"><a class="header-anchor" href="#补码加法" aria-hidden="true">#</a> 补码加法</h3>
<p>对于<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>−</mo><msup><mn>2</mn><mrow><mi>w</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>&lt;</mo><mo>=</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo>&lt;</mo><mo>=</mo><msup><mn>2</mn><mrow><mi>w</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">-2^{w-1}&lt;=x,y&lt;=2^{w-1}-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>其和表示为：</p>
<table>
<thead>
<tr>
<th>和</th>
<th>范围</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><msup><mn>2</mn><mi>w</mi></msup></mrow><annotation encoding="application/x-tex">x+y-2^w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6644em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span></span></span></span></span></span></span></span></span></span></span></td>
<td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mrow><mi>w</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>&lt;</mo><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow><annotation encoding="application/x-tex">2^{w-1}&lt;=x+y</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8532em;vertical-align:-0.0391em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span></span></span></span></td>
<td>正溢出</td>
</tr>
<tr>
<td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow><annotation encoding="application/x-tex">x+y</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span></span></span></span></td>
<td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>−</mo><msup><mn>2</mn><mrow><mi>w</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>&lt;</mo><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>&lt;</mo><mo>=</mo><msup><mn>2</mn><mrow><mi>w</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding="application/x-tex">-2^{w-1}&lt;=x+y&lt;=2^{w-1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span></span></td>
<td>正常</td>
</tr>
<tr>
<td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><msup><mn>2</mn><mi>w</mi></msup></mrow><annotation encoding="application/x-tex">x+y+2^{w}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6644em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span></span></span></span></span></span></span></span></span></span></span></span></td>
<td><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>&lt;</mo><mo>−</mo><msup><mn>2</mn><mrow><mi>w</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding="application/x-tex">x+y&lt;-2^{w-1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span></span></td>
<td>负溢出</td>
</tr>
</tbody>
</table>
<p>两个数的补码之和与无符号之和有相同的位级表示</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>检测补码加法溢出：假设TMin&lt;=x,y&lt;=TMax,令s=x+y，当且仅当x&gt;0,y&gt;0但s&lt;=0时，发生了正溢出，当且仅当x&lt;0,y&lt;0,s&gt;=0时，发生了负溢出</p>
</div>
<h3 id="补码的非" tabindex="-1"><a class="header-anchor" href="#补码的非" aria-hidden="true">#</a> 补码的非</h3>
<p>补码表示下，每个数字都有其加法逆元，仅当x为TMin时，逆元也为TMin，其他情况下，逆元为-x</p>
<h3 id="无符号乘法" tabindex="-1"><a class="header-anchor" href="#无符号乘法" aria-hidden="true">#</a> 无符号乘法</h3>
<p>同加法一样，如果结果太大，会导致积被截断（效果上等同于%<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>w</mi></msup></mrow><annotation encoding="application/x-tex">2^w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6644em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span></span></span></span></span></span></span></span></span></span></span>）</p>
<h3 id="补码乘法" tabindex="-1"><a class="header-anchor" href="#补码乘法" aria-hidden="true">#</a> 补码乘法</h3>
<p>补码乘法与无符号乘法在位级表示上是一样的，可以理解为将乘积转换为无符号数，然后对<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mi>w</mi></msup></mrow><annotation encoding="application/x-tex">2^w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6644em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02691em;">w</span></span></span></span></span></span></span></span></span></span></span>取模，再转换为有符号数</p>
<h3 id="乘以常数" tabindex="-1"><a class="header-anchor" href="#乘以常数" aria-hidden="true">#</a> 乘以常数</h3>
<p>在大多数机器上，乘法运算相当慢，编译器会试图使用移位和加法来代替乘法，实现程序的优化</p>
<ul>
<li>对于乘以2的幂：将原操作数左移得到结果（不管是无符号数还是补码，结果都一样）</li>
<li>对于其他乘法：比如x乘以14，利用<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>14</mn><mo>=</mo><msup><mn>2</mn><mn>3</mn></msup><mo>+</mo><msup><mn>2</mn><mn>2</mn></msup><mo>+</mo><msup><mn>2</mn><mn>1</mn></msup></mrow><annotation encoding="application/x-tex">14=2^3+2^2+2^1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">14</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span>,编译器会将其优化为(x&lt;&lt;3)+(x&lt;&lt;2)+(x&lt;&lt;1),但是实际上也可能分解为很多组移位，编译器一般在只需要少量移位，加减法的时候才会考虑这种优化</li>
</ul>
<h3 id="除以2的幂" tabindex="-1"><a class="header-anchor" href="#除以2的幂" aria-hidden="true">#</a> 除以2的幂</h3>
<ul>
<li>
<p>在大多数机器上，整数除法比整数乘法更慢</p>
</li>
<li>
<p>通常采用右移来实现，无符号数采用逻辑右移，有符号数采用算术右移</p>
</li>
<li>
<p>整数除法总是舍入到零</p>
</li>
<li>
<p>对于除以2的幂的补码除法，为了使负数向上舍入，需要在算术右移之前加上适当的偏置：通过<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>x</mi><mo>+</mo><mo stretchy="false">(</mo><mn>1</mn><mo>&lt;</mo><mo>&lt;</mo><mi>k</mi><mo stretchy="false">)</mo><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mo>&gt;</mo><mo>&gt;</mo><mi>k</mi><mtext>来得到</mtext><mi>x</mi><mi mathvariant="normal">/</mi><msup><mn>2</mn><mi>k</mi></msup></mrow><annotation encoding="application/x-tex">(x+(1&lt;&lt;k)-1)&gt;&gt;k来得到x/2^k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0991em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord cjk_fallback">来得到</span><span class="mord mathnormal">x</span><span class="mord">/</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span></span></span></span></span></span></span>,</p>
</li>
</ul>
<h3 id="关于整数运算的最后思考" tabindex="-1"><a class="header-anchor" href="#关于整数运算的最后思考" aria-hidden="true">#</a> 关于整数运算的最后思考</h3>
<p>计算机执行的“整数”运算实际上是一种模运算形式，无符号数与补码在某些方面的不一致导致了程序的很多bug，当然，因为计算机表示整数都有精度限制，所以一些溢出也可能导致令人困惑的bug</p>
<hr>
<h2 id="浮点数" tabindex="-1"><a class="header-anchor" href="#浮点数" aria-hidden="true">#</a> 浮点数</h2>
<p>计算机对浮点数编码方式形如：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi><mo>=</mo><mi>x</mi><mo>∗</mo><msup><mn>2</mn><mi>y</mi></msup></mrow><annotation encoding="application/x-tex">V=x*2^y</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4653em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6644em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">y</span></span></span></span></span></span></span></span></span></span></span>,IEEE推出了浮点数标准</p>
<h3 id="二进制小数" tabindex="-1"><a class="header-anchor" href="#二进制小数" aria-hidden="true">#</a> 二进制小数</h3>
<p>表示方法如下：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mo>−</mo><mi>n</mi></mrow><mi>m</mi></msubsup><msup><mn>2</mn><mi>i</mi></msup><mo>∗</mo><msub><mi>b</mi><mi>i</mi></msub></mrow><annotation encoding="application/x-tex">\sum_{i=-n}^m2^i*b_i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1827em;vertical-align:-0.358em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8043em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">−</span><span class="mord mathnormal mtight">n</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.358em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">b</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></p>
<p>当然，在考虑有限长度的编码条件下，并不能精确地表示所有有理数，增加长度可以提升精度</p>
<h3 id="ieee浮点数表示" tabindex="-1"><a class="header-anchor" href="#ieee浮点数表示" aria-hidden="true">#</a> IEEE浮点数表示</h3>
<p>IEEE浮点数标准采用<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy="false">)</mo><mi>s</mi></msup><mo>∗</mo><mi>M</mi><mo>∗</mo><msup><mn>2</mn><mi>E</mi></msup></mrow><annotation encoding="application/x-tex">V=(-1)^s*M*2^E</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">−</span><span class="mord">1</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8413em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8413em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05764em;">E</span></span></span></span></span></span></span></span></span></span></span>来表示一个数</p>
<ul>
<li>符号：s决定数值的正负（s=1，负；s=0，正）</li>
<li>尾数：M为一个二进制小数，范围是[1,2),或者[0,1)</li>
<li>阶码：E用于对浮点数加权，将浮点数位划分为三个字段：
<ul>
<li>一个单独的符号位s</li>
<li>k位的阶码字段<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>e</mi><mi>x</mi><mi>p</mi><mo>=</mo><msub><mi>e</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mo separator="true">⋅</mo><mo separator="true">⋅</mo><mo separator="true">⋅</mo><msub><mi>e</mi><mn>1</mn></msub><msub><mi>e</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">exp=e_{k-1}···e_1e_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">e</span><span class="mord mathnormal">x</span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6528em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mpunct">⋅⋅⋅</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>编码阶码E</li>
<li>n位小数字段<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mi>r</mi><mi>a</mi><mi>c</mi><mo>=</mo><msub><mi>f</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo separator="true">⋅</mo><mo separator="true">⋅</mo><mo separator="true">⋅</mo><msub><mi>f</mi><mn>1</mn></msub><msub><mi>f</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">frac=f_{n-1}···f_1f_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">a</span><span class="mord mathnormal">c</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.9028em;vertical-align:-0.2083em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1076em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2083em;"><span></span></span></span></span></span></span><span class="mpunct">⋅⋅⋅</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1076em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1076em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>编码尾数M，依赖于阶码是否为零</li>
</ul>
</li>
</ul>
<p>在两种浮点数类型中，三个字段分配的长度不一：</p>
<p><img src="https://s2.loli.net/2022/07/21/VxX3voe5yhfDLCr.png" alt="20200609094239801" loading="lazy"></p>
<p>给定位表示后，根据exp值，浮点数可以分为三种情况四个值（其实是五个值）：</p>
<p><img src="https://s2.loli.net/2022/07/21/ThsSbgvI4F27Xqd.png" alt="20210629160426828" loading="lazy"></p>
<ol>
<li>规格化的值：</li>
</ol>
<p>当exp数值不全为零而且不全为1时，这种情况下，阶码字段被解释为偏置形式表示有符号整数，即<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mo>=</mo><mi>e</mi><mo>−</mo><mi>b</mi><mi>i</mi><mi>a</mi><mi>s</mi></mrow><annotation encoding="application/x-tex">E=e-bias</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">e</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">bia</span><span class="mord mathnormal">s</span></span></span></span>,bias等于<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">2^{k-1}-1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9324em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8491em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mbin mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>(单精度为127，双精度为1023)</p>
<p>小数字段frac被解释为小数值f(0&lt;=f&lt;1),二进制小数点在最高位的左边，尾数定义为M=1+f</p>
<ol start="2">
<li>非规格化的值</li>
</ol>
<p>阶码全为0时，这种情况下，阶码值E=1-bias，而尾数值是M=f，不包含开头的1</p>
<p>非规格化数值可以表示数值0，虽然有正负0之分</p>
<p>非规格化数值也可以表示非常接近0的数，它提供了一种属性：逐渐溢出，让数值均匀地接近0.0</p>
<ol start="3">
<li>特殊值</li>
</ol>
<p>阶码全为1时，当小数域为0时，表示的数为无穷，符号由s决定，无穷用来表示溢出的结果，当小数域非0时，表示NaN</p>
<h3 id="数字示例" tabindex="-1"><a class="header-anchor" href="#数字示例" aria-hidden="true">#</a> 数字示例</h3>
<p><img src="https://s2.loli.net/2022/07/21/MkURpi87n6wDjlB.jpg" alt="v2-2e5f1cad621f85df33d1cc0ac9f60f4f_r" loading="lazy"></p>
<p><img src="https://s2.loli.net/2022/07/21/XySaKbZ52hOsjIw.gif" alt="floating_point_number_float8_example" loading="lazy"></p>
<p>最大非规格化数7/512与最小规格化数8/512的平滑转变归功于E的定义</p>
<p><img src="https://s2.loli.net/2022/07/21/wHDmxWbhXO7ksCc.png" alt="12859527-739f31e94fc73c7b" loading="lazy"></p>
<h3 id="舍入" tabindex="-1"><a class="header-anchor" href="#舍入" aria-hidden="true">#</a> 舍入</h3>
<p>表示方法限制了浮点数的范围和精度，所以浮点数只能近似的表示实数运算</p>
<p>一般有四种舍入方式：向偶数舍入是默认方式：</p>
<p><img src="https://s2.loli.net/2022/07/21/8sBaSfjUTuqWQAo.png" alt="12859527-af37f27e78ac23a9" loading="lazy"></p>
<p>向偶数舍入避免了产生平均值的统计误差</p>
<h3 id="浮点运算" tabindex="-1"><a class="header-anchor" href="#浮点运算" aria-hidden="true">#</a> 浮点运算</h3>
<p>IEEE标准指定将浮点数x，y看作实数，计算结果取某个精度的舍入结果，实数加法也可以形成阿贝尔群，事实上，对于x和y，运算可交换，但是运算不可以结合，原因是浮点数是不精确的表示，运算也是不精确的运算！</p>
<p>但是，浮点数加法满足单调性属性，这是无符号或者补码加法不满足的性质</p>
<p>同时，浮点数也不满足乘法分配律</p>
<h3 id="c语言中的浮点数" tabindex="-1"><a class="header-anchor" href="#c语言中的浮点数" aria-hidden="true">#</a> C语言中的浮点数</h3>
<p>C标准并未规定使用IEEE浮点数标准，这些机器大多使用两种浮点数类型，运用向偶数舍入的方式，所以机器无法使用标准的方法改变舍入规则或者得到特殊值</p>
<hr>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2>
<ul>
<li>计算机将信息编码为比特，通常组织成字节序列</li>
<li>大多数机器对整数使用补码编码，对浮点数使用IEEE标准754编码</li>
<li>无符号数与有符号数进行类型转换时，遵循底层位模式不变</li>
<li>由于编码长度有限，整数运算超出范围会导致溢出，同时，浮点数非常接近0时，直到转换成0，也会下溢</li>
<li>无符号数和补码的运算都遵循整数运算的很多性质，包括结合律，交换律，分配律，从而允许编译器做出很多优化</li>
<li>使用浮点数运算必须非常小心，因为浮点数只有有限范围和精度，并且不遵循某些运算规律，比如结合性</li>
</ul>
</div></template>
