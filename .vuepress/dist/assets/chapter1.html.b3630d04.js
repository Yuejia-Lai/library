import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,e as s}from"./app.d822cdf7.js";const l={},i=s(`<h1 id="\u8BA1\u7B97\u673A\u7CFB\u7EDF\u6F2B\u6E38" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u673A\u7CFB\u7EDF\u6F2B\u6E38" aria-hidden="true">#</a> <strong>\u8BA1\u7B97\u673A\u7CFB\u7EDF\u6F2B\u6E38</strong></h1><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4F5C\u4E3A\u6574\u672C\u4E66\u7684<strong>\u6982\u8FF0</strong>\uFF0C\u7B2C\u4E00\u7AE0\u663E\u5F97\u5C24\u5176\u91CD\u8981\uFF0C\u65E2\u8981\u8BA9\u6211\u4EEC\u4E86\u89E3\u4E66\u7C4D\u5404\u7AE0\u8282\u7684\u5185\u5BB9\uFF0C\u53C8\u8981\u6709\u8DA3\u751F\u52A8\uFF0C\u80FD\u5438\u5F15\u4EBA\u8BFB\u4E0B\u53BB</p></div><hr><h2 id="hello-c" tabindex="-1"><a class="header-anchor" href="#hello-c" aria-hidden="true">#</a> hello.c</h2><p>\u4E00\u5207\u90FD\u4ECE<strong>hello.c\u7A0B\u5E8F</strong>\u5F00\u59CB\uFF1A</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B22\u8FCE\u6765\u5230\u8BA1\u7B97\u673A\u7684\u4E16\u754C\uFF01</p><hr><h2 id="\u4FE1\u606F\u5C31\u662F\u4F4D-\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u4FE1\u606F\u5C31\u662F\u4F4D-\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u4FE1\u606F\u5C31\u662F\u4F4D+\u4E0A\u4E0B\u6587</h2><ol><li>hello.c\uFF08\u6E90\u6587\u4EF6\uFF09\u662F0\uFF0C1\u5E8F\u5217\uFF0C\u516B\u4E2A\u4F4D\u662F\u4E00\u4E2A\u5B57\u8282\uFF0C\u7531ASCII\u5B57\u7B26\u6784\u6210\uFF0C\u4E5F\u6210\u4E3A\u6587\u672C\u6587\u4EF6</li><li>\u901A\u8FC7\u7FFB\u8BD1\u4E3A\u4F4E\u7EA7\u673A\u5668\u8BED\u8A00\u6307\u4EE4\u5E76\u6253\u5305\uFF0C\u6210\u4E3A\u53EF\u6267\u884C\u76EE\u6807\u6587\u4EF6</li></ol><blockquote><p>\u7F16\u8BD1\u5668\u9A71\u52A8\u7A0B\u5E8F\uFF1A</p><p>linux&gt; gcc -o hello hello.c</p></blockquote><p><img src="https://s2.loli.net/2022/07/11/WxAVUmyMvS24s7K.png" alt="01-03 compilation systems" loading="lazy"></p><ul><li>\u9884\u5904\u7406\u9636\u6BB5\uFF1A\u5904\u7406\u5934\u6587\u4EF6</li><li>\u7F16\u8BD1\u9636\u6BB5\uFF1Ahello.i -&gt; hello.s,\u6C47\u7F16\u8BED\u8A00\u7A0B\u5E8F</li><li>\u6C47\u7F16\u9636\u6BB5\uFF1Ahello.s -&gt; hello.o\uFF0C\u53EF\u91CD\u5B9A\u4F4D\u76EE\u6807\u7A0B\u5E8F</li><li>\u94FE\u63A5\u9636\u6BB5\uFF1A\u5408\u5E76c\u6807\u51C6\u5E93\u4E2D\u7684\u51FD\u6570</li></ul><hr><h2 id="\u7406\u89E3\u7F16\u8BD1\u5668\u7684\u5DE5\u4F5C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7406\u89E3\u7F16\u8BD1\u5668\u7684\u5DE5\u4F5C\u6D41\u7A0B" aria-hidden="true">#</a> \u7406\u89E3\u7F16\u8BD1\u5668\u7684\u5DE5\u4F5C\u6D41\u7A0B\uFF1A</h2><blockquote><ul><li>\u4F18\u5316\u7A0B\u5E8F\u6027\u80FD</li><li>\u7406\u89E3\u94FE\u63A5\u51FA\u73B0\u7684\u9519\u8BEF</li><li>\u907F\u514D\u5B89\u5168\u6F0F\u6D1E</li></ul></blockquote><hr><h2 id="\u5904\u7406\u5668\u8BFB\u4E0E\u89E3\u91CA\u5185\u5B58\u4E2D\u7684\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u5668\u8BFB\u4E0E\u89E3\u91CA\u5185\u5B58\u4E2D\u7684\u6307\u4EE4" aria-hidden="true">#</a> \u5904\u7406\u5668\u8BFB\u4E0E\u89E3\u91CA\u5185\u5B58\u4E2D\u7684\u6307\u4EE4</h2><p>\u9996\u5148\u4E86\u89E3\u7CFB\u7EDF\u786C\u4EF6\u6784\u6210\uFF1A</p><blockquote><ul><li>\u603B\u7EBF</li><li>I/O\u8BBE\u5907</li><li>\u4E3B\u5B58</li><li>\u5904\u7406\u5668\uFF08CPU\uFF09</li></ul></blockquote><p><img src="https://s2.loli.net/2022/07/11/Iv74mus9PigFTRG.png" alt="01-04 system hardwares" loading="lazy"></p><hr><h2 id="\u9AD8\u901F\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u901F\u7F13\u5B58" aria-hidden="true">#</a> \u9AD8\u901F\u7F13\u5B58</h2><p>\u80FD\u63D0\u5347\u7A0B\u5E8F\u6027\u80FD\uFF0C\u5904\u7406\u5668\u4E0E\u4E3B\u5B58\u4E4B\u95F4\u7684\u8BFB\u53D6\u901F\u5EA6\u5DEE\u8DDD\u5F88\u5927</p><hr><h2 id="\u5B58\u50A8\u8BBE\u5907\u5C42\u6B21\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u5B58\u50A8\u8BBE\u5907\u5C42\u6B21\u7ED3\u6784" aria-hidden="true">#</a> \u5B58\u50A8\u8BBE\u5907\u5C42\u6B21\u7ED3\u6784</h2><p><img src="https://s2.loli.net/2022/07/11/SCrXVgABMbqPJND.png" alt="01-09 \u4E00\u4E2A\u5B58\u50A8\u5668\u5C42\u6B21\u7ED3\u6784\u7684\u793A\u4F8B" loading="lazy"></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4E3B\u8981\u601D\u60F3\u662F\u4E0A\u4E00\u5C42\u5B58\u50A8\u5668\u4F5C\u4E3A\u7B2C\u4E00\u5C42\u5B58\u50A8\u5668\u7684\u9AD8\u901F\u7F13\u5B58</p></div><hr><h2 id="\u64CD\u4F5C\u7CFB\u7EDF\u7BA1\u7406\u786C\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u7CFB\u7EDF\u7BA1\u7406\u786C\u4EF6" aria-hidden="true">#</a> \u64CD\u4F5C\u7CFB\u7EDF\u7BA1\u7406\u786C\u4EF6</h2><p>\u64CD\u4F5C\u7CFB\u7EDF\u4E24\u4E2A\u57FA\u672C\u529F\u80FD\uFF1A</p><ul><li>\u9632\u6B62\u786C\u4EF6\u88AB\u5931\u63A7\u7A0B\u5E8F\u6EE5\u7528</li><li>\u5411\u5E94\u7528\u7A0B\u5E8F\u63D0\u4F9B\u7B80\u5355\u4E00\u81F4\u7684\u673A\u5236\u6765\u63A7\u5236\u590D\u6742\u7E41\u591A\u7684\u786C\u4EF6</li></ul><p>\u4E00\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u6709\u591A\u4E2A\u7EBF\u7A0B\uFF0C\u4E4B\u95F4\u53EF\u4EE5\u6570\u636E\u5171\u4EAB\uFF0C\u6BCF\u4E2A\u8FDB\u7A0B\u7528\u4E00\u4E2A\u865A\u62DF\u5185\u5B58\uFF1A</p><p><img src="https://s2.loli.net/2022/07/11/v4dzTqb8rX97nKt.png" alt="01-13 \u8FDB\u7A0B\u7684\u865A\u62DF\u5730\u5740\u7A7A\u95F4" loading="lazy"></p><p>\u6587\u4EF6\u662F\u5B57\u8282\u5E8F\u5217\uFF0C\u6240\u6709I/O\u8BBE\u5907\u90FD\u53EF\u4EE5\u770B\u6210\u6587\u4EF6</p><hr><h2 id="\u7CFB\u7EDF\u4E4B\u95F4\u8FDB\u884C\u7F51\u7EDC\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u4E4B\u95F4\u8FDB\u884C\u7F51\u7EDC\u901A\u4FE1" aria-hidden="true">#</a> \u7CFB\u7EDF\u4E4B\u95F4\u8FDB\u884C\u7F51\u7EDC\u901A\u4FE1</h2><p>\u7F51\u7EDC\u4E5F\u53EF\u89C6\u4E3AI/O\u8BBE\u5907</p><hr><h2 id="\u5E76\u53D1\u5E76\u884C" tabindex="-1"><a class="header-anchor" href="#\u5E76\u53D1\u5E76\u884C" aria-hidden="true">#</a> \u5E76\u53D1\u5E76\u884C</h2><blockquote><p>\u5E76\u53D1\uFF1A\u7CFB\u7EDF\u540C\u65F6\u8FDB\u884C\u591A\u4E2A\u6D3B\u52A8</p><p>\u5E76\u884C\uFF1A\u7528\u5E76\u53D1\u6765\u52A0\u5FEB\u7CFB\u7EDF\u8FD0\u884C</p></blockquote><p>\u53EF\u4EE5\u5728\u7CFB\u7EDF\u591A\u4E2A\u6982\u5FF5\u5C42\u6B21\u4E0A\u5E94\u7528\uFF1A</p><ul><li>\u7EBF\u7A0B\u7EA7\u5E76\u53D1\uFF1A\u4E00\u4E2A\u8FDB\u7A0B\u6267\u884C\u591A\u4E2A\u63A7\u5236\u6D41\uFF08\u591A\u5904\u7406\u5668\u7CFB\u7EDF\uFF0C\u8D85\u7EBF\u7A0B\uFF09</li><li>\u6307\u4EE4\u7EA7\u5E76\u884C\uFF1A\u540C\u65F6\u6267\u884C\u591A\u6761\u6307\u4EE4\uFF08\u6D41\u6C34\u7EBF\uFF09</li><li>\u5355\u6307\u4EE4\uFF0C\u591A\u6570\u636E\u5E76\u884C\uFF1A\u5141\u8BB8\u4E00\u6761\u6307\u4EE4\u4EA7\u751F\u591A\u4E2A\u53EF\u4EE5\u5E76\u884C\u6267\u884C\u7684\u64CD\u4F5C</li></ul><p>\u62BD\u8C61\u662F\u8BA1\u7B97\u673A\u5F88\u91CD\u8981\u7684\u6982\u5FF5\uFF0C\u5E94\u7528\u5F88\u5E7F\u3002</p>`,44),t=[i];function o(r,c){return n(),e("div",null,t)}var d=a(l,[["render",o],["__file","chapter1.html.vue"]]);export{d as default};
