<template><div><div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p>剑指offer（第二版）第三部分题解  --Java实现</p>
</div>
<h2 id="剑指-offer-42-连续子数组的最大和" tabindex="-1"><a class="header-anchor" href="#剑指-offer-42-连续子数组的最大和" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/?favorite=xb9nqhhg" target="_blank" rel="noopener noreferrer">剑指 Offer 42. 连续子数组的最大和<ExternalLinkIcon/></a></h2>
<p>输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。</p>
<p>要求时间复杂度为O(n)。</p>
<p><strong>示例1:</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>遍历，当当前和小于0时，以当前索引开始重新取数组</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">maxSubArray</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> len<span class="token operator">=</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span> right<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> max<span class="token operator">=</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> current<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span>right<span class="token operator">&lt;</span>len<span class="token punctuation">;</span><span class="token operator">++</span>right<span class="token punctuation">)</span><span class="token punctuation">{</span>
            current<span class="token operator">+=</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
            max<span class="token operator">=</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>current<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                current<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> max<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="剑指-offer-43-1-n-整数中-1-出现的次数" tabindex="-1"><a class="header-anchor" href="#剑指-offer-43-1-n-整数中-1-出现的次数" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/?favorite=xb9nqhhg" target="_blank" rel="noopener noreferrer">剑指 Offer 43. 1～n 整数中 1 出现的次数<ExternalLinkIcon/></a></h2>
<p>输入一个整数 <code v-pre>n</code> ，求1～n这n个整数的十进制表示中1出现的次数。</p>
<p>例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。</p>
<p><strong>示例 1：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：n = 12
输出：5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：n = 13
输出：6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>巧妙解法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">countDigitOne</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// mulk 表示 10^k</span>
        <span class="token comment">// 在下面的代码中，可以发现 k 并没有被直接使用到（都是使用 10^k）</span>
        <span class="token comment">// 但为了让代码看起来更加直观，这里保留了 k</span>
        <span class="token keyword">long</span> mulk <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">>=</span> mulk<span class="token punctuation">;</span> <span class="token operator">++</span>k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans <span class="token operator">+=</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token punctuation">(</span>mulk <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> mulk <span class="token operator">+</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token punctuation">(</span>mulk <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">-</span> mulk <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mulk<span class="token punctuation">)</span><span class="token punctuation">;</span>
            mulk <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="剑指-offer-44-数字序列中某一位的数字" tabindex="-1"><a class="header-anchor" href="#剑指-offer-44-数字序列中某一位的数字" aria-hidden="true">#</a> <a href="https://leetcode.cn/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/?favorite=xb9nqhhg" target="_blank" rel="noopener noreferrer">剑指 Offer 44. 数字序列中某一位的数字<ExternalLinkIcon/></a></h2>
<p>数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。</p>
<p>请写一个函数，求任意第n位对应的数字。</p>
<p><strong>示例 1：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：n = 3
输出：3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：n = 11
输出：0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>找规律求出数位即可</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findNthDigit</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> digit <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> count <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">></span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 1.</span>
            n <span class="token operator">-=</span> count<span class="token punctuation">;</span>
            digit <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            start <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">;</span>
            count <span class="token operator">=</span> digit <span class="token operator">*</span> start <span class="token operator">*</span> <span class="token number">9</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">long</span> num <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> digit<span class="token punctuation">;</span> <span class="token comment">// 2.</span>
        <span class="token keyword">return</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> digit<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">'0'</span><span class="token punctuation">;</span> <span class="token comment">// 3.</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
