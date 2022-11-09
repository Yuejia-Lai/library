import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c,a as n,b as e,d as s,e as t,r as l}from"./app.d822cdf7.js";const i={},u=n("div",{class:"custom-container info"},[n("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F"),n("p",null,"\u5251\u6307offer\uFF08\u7B2C\u4E8C\u7248\uFF09\u7B2C\u4E09\u90E8\u5206\u9898\u89E3 --Java\u5B9E\u73B0")],-1),r={id:"\u5251\u6307-offer-42-\u8FDE\u7EED\u5B50\u6570\u7EC4\u7684\u6700\u5927\u548C",tabindex:"-1"},d=n("a",{class:"header-anchor",href:"#\u5251\u6307-offer-42-\u8FDE\u7EED\u5B50\u6570\u7EC4\u7684\u6700\u5927\u548C","aria-hidden":"true"},"#",-1),k=s(),v={href:"https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/?favorite=xb9nqhhg",target:"_blank",rel:"noopener noreferrer"},m=s("\u5251\u6307 Offer 42. \u8FDE\u7EED\u5B50\u6570\u7EC4\u7684\u6700\u5927\u548C"),b=t(`<p>\u8F93\u5165\u4E00\u4E2A\u6574\u578B\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u4E00\u4E2A\u6216\u8FDE\u7EED\u591A\u4E2A\u6574\u6570\u7EC4\u6210\u4E00\u4E2A\u5B50\u6570\u7EC4\u3002\u6C42\u6240\u6709\u5B50\u6570\u7EC4\u7684\u548C\u7684\u6700\u5927\u503C\u3002</p><p>\u8981\u6C42\u65F6\u95F4\u590D\u6742\u5EA6\u4E3AO(n)\u3002</p><p><strong>\u793A\u4F8B1:</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: nums = [-2,1,-3,4,-1,2,1,-5,4]
\u8F93\u51FA: 6
\u89E3\u91CA: \u8FDE\u7EED\u5B50\u6570\u7EC4 [4,-1,2,1] \u7684\u548C\u6700\u5927\uFF0C\u4E3A 6\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>\u904D\u5386\uFF0C\u5F53\u5F53\u524D\u548C\u5C0F\u4E8E0\u65F6\uFF0C\u4EE5\u5F53\u524D\u7D22\u5F15\u5F00\u59CB\u91CD\u65B0\u53D6\u6570\u7EC4</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,8),h={id:"\u5251\u6307-offer-43-1-n-\u6574\u6570\u4E2D-1-\u51FA\u73B0\u7684\u6B21\u6570",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#\u5251\u6307-offer-43-1-n-\u6574\u6570\u4E2D-1-\u51FA\u73B0\u7684\u6B21\u6570","aria-hidden":"true"},"#",-1),f=s(),_={href:"https://leetcode.cn/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/?favorite=xb9nqhhg",target:"_blank",rel:"noopener noreferrer"},x=s("\u5251\u6307 Offer 43. 1\uFF5En \u6574\u6570\u4E2D 1 \u51FA\u73B0\u7684\u6B21\u6570"),w=t(`<p>\u8F93\u5165\u4E00\u4E2A\u6574\u6570 <code>n</code> \uFF0C\u6C421\uFF5En\u8FD9n\u4E2A\u6574\u6570\u7684\u5341\u8FDB\u5236\u8868\u793A\u4E2D1\u51FA\u73B0\u7684\u6B21\u6570\u3002</p><p>\u4F8B\u5982\uFF0C\u8F93\u516512\uFF0C1\uFF5E12\u8FD9\u4E9B\u6574\u6570\u4E2D\u5305\u542B1 \u7684\u6570\u5B57\u67091\u300110\u300111\u548C12\uFF0C1\u4E00\u5171\u51FA\u73B0\u4E865\u6B21\u3002</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1An = 12
\u8F93\u51FA\uFF1A5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1An = 13
\u8F93\u51FA\uFF1A6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>\u5DE7\u5999\u89E3\u6CD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">countDigitOne</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// mulk \u8868\u793A 10^k</span>
        <span class="token comment">// \u5728\u4E0B\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u53EF\u4EE5\u53D1\u73B0 k \u5E76\u6CA1\u6709\u88AB\u76F4\u63A5\u4F7F\u7528\u5230\uFF08\u90FD\u662F\u4F7F\u7528 10^k\uFF09</span>
        <span class="token comment">// \u4F46\u4E3A\u4E86\u8BA9\u4EE3\u7801\u770B\u8D77\u6765\u66F4\u52A0\u76F4\u89C2\uFF0C\u8FD9\u91CC\u4FDD\u7559\u4E86 k</span>
        <span class="token keyword">long</span> mulk <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> n <span class="token operator">&gt;=</span> mulk<span class="token punctuation">;</span> <span class="token operator">++</span>k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ans <span class="token operator">+=</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token punctuation">(</span>mulk <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> mulk <span class="token operator">+</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token punctuation">(</span>mulk <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">-</span> mulk <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mulk<span class="token punctuation">)</span><span class="token punctuation">;</span>
            mulk <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,10),y={id:"\u5251\u6307-offer-44-\u6570\u5B57\u5E8F\u5217\u4E2D\u67D0\u4E00\u4F4D\u7684\u6570\u5B57",tabindex:"-1"},j=n("a",{class:"header-anchor",href:"#\u5251\u6307-offer-44-\u6570\u5B57\u5E8F\u5217\u4E2D\u67D0\u4E00\u4F4D\u7684\u6570\u5B57","aria-hidden":"true"},"#",-1),z=s(),S={href:"https://leetcode.cn/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/?favorite=xb9nqhhg",target:"_blank",rel:"noopener noreferrer"},N=s("\u5251\u6307 Offer 44. \u6570\u5B57\u5E8F\u5217\u4E2D\u67D0\u4E00\u4F4D\u7684\u6570\u5B57"),O=t(`<p>\u6570\u5B57\u4EE50123456789101112131415\u2026\u7684\u683C\u5F0F\u5E8F\u5217\u5316\u5230\u4E00\u4E2A\u5B57\u7B26\u5E8F\u5217\u4E2D\u3002\u5728\u8FD9\u4E2A\u5E8F\u5217\u4E2D\uFF0C\u7B2C5\u4F4D\uFF08\u4ECE\u4E0B\u68070\u5F00\u59CB\u8BA1\u6570\uFF09\u662F5\uFF0C\u7B2C13\u4F4D\u662F1\uFF0C\u7B2C19\u4F4D\u662F4\uFF0C\u7B49\u7B49\u3002</p><p>\u8BF7\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u6C42\u4EFB\u610F\u7B2Cn\u4F4D\u5BF9\u5E94\u7684\u6570\u5B57\u3002</p><p><strong>\u793A\u4F8B 1\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1An = 3
\u8F93\u51FA\uFF1A3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u793A\u4F8B 2\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1An = 11
\u8F93\u51FA\uFF1A0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>\u627E\u89C4\u5F8B\u6C42\u51FA\u6570\u4F4D\u5373\u53EF</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findNthDigit</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> digit <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> count <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 1.</span>
            n <span class="token operator">-=</span> count<span class="token punctuation">;</span>
            digit <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            start <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">;</span>
            count <span class="token operator">=</span> digit <span class="token operator">*</span> start <span class="token operator">*</span> <span class="token number">9</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">long</span> num <span class="token operator">=</span> start <span class="token operator">+</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> digit<span class="token punctuation">;</span> <span class="token comment">// 2.</span>
        <span class="token keyword">return</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> digit<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 3.</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function V(q,B){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,n("h2",r,[d,k,n("a",v,[m,e(a)])]),b,n("h2",h,[g,f,n("a",_,[x,e(a)])]),w,n("h2",y,[j,z,n("a",S,[N,e(a)])]),O])}var M=p(i,[["render",V],["__file","offer-3.html.vue"]]);export{M as default};
