import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as n,e}from"./app.ed3a2d6c.js";const l={},o=e(`<h2 id="\u7528\u6237\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u7BA1\u7406" aria-hidden="true">#</a> \u7528\u6237\u7BA1\u7406</h2><h3 id="\u767B\u5F55mysql\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55mysql\u670D\u52A1\u5668" aria-hidden="true">#</a> \u767B\u5F55MySQL\u670D\u52A1\u5668</h3><p>\u542F\u52A8MySQL\u670D\u52A1\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7mysql\u547D\u4EE4\u6765\u767B\u5F55MySQL\u670D\u52A1\u5668\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql \u2013h hostname|hostIP \u2013P port \u2013u username \u2013p DatabaseName \u2013e &quot;SQL\u8BED\u53E5&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>-h\u53C2\u6570</code>\u540E\u9762\u63A5\u4E3B\u673A\u540D\u6216\u8005\u4E3B\u673AIP\uFF0Chostname\u4E3A\u4E3B\u673A\uFF0ChostIP\u4E3A\u4E3B\u673AIP\u3002</li><li><code>-P\u53C2\u6570</code>\u540E\u9762\u63A5MySQL\u670D\u52A1\u7684\u7AEF\u53E3\uFF0C\u901A\u8FC7\u8BE5\u53C2\u6570\u8FDE\u63A5\u5230\u6307\u5B9A\u7684\u7AEF\u53E3\u3002MySQL\u670D\u52A1\u7684\u9ED8\u8BA4\u7AEF\u53E3\u662F3306\uFF0C\u4E0D\u4F7F\u7528\u8BE5\u53C2\u6570\u65F6\u81EA\u52A8\u8FDE\u63A5\u52303306\u7AEF\u53E3\uFF0Cport\u4E3A\u8FDE\u63A5\u7684\u7AEF\u53E3\u53F7\u3002</li><li><code>-u\u53C2\u6570</code>\u540E\u9762\u63A5\u7528\u6237\u540D\uFF0Cusername\u4E3A\u7528\u6237\u540D\u3002</li><li><code>-p\u53C2\u6570</code>\u4F1A\u63D0\u793A\u8F93\u5165\u5BC6\u7801\u3002</li><li><code>DatabaseName\u53C2\u6570</code>\u6307\u660E\u767B\u5F55\u5230\u54EA\u4E00\u4E2A\u6570\u636E\u5E93\u4E2D\u3002\u5982\u679C\u6CA1\u6709\u8BE5\u53C2\u6570\uFF0C\u5C31\u4F1A\u76F4\u63A5\u767B\u5F55\u5230MySQL\u6570\u636E\u5E93\u4E2D\uFF0C\u7136\u540E\u53EF\u4EE5\u4F7F\u7528USE\u547D\u4EE4\u6765\u9009\u62E9\u6570\u636E\u5E93\u3002</li><li><code>-e\u53C2\u6570</code>\u540E\u9762\u53EF\u4EE5\u76F4\u63A5\u52A0SQL\u8BED\u53E5\u3002\u767B\u5F55MySQL\u670D\u52A1\u5668\u4EE5\u540E\u5373\u53EF\u6267\u884C\u8FD9\u4E2ASQL\u8BED\u53E5\uFF0C\u7136\u540E\u9000\u51FAMySQL\u670D\u52A1\u5668\u3002</li></ul><h3 id="\u521B\u5EFA\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7528\u6237" aria-hidden="true">#</a> \u521B\u5EFA\u7528\u6237</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">USER</span> \u7528\u6237\u540D <span class="token punctuation">[</span>IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;\u5BC6\u7801&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">,</span>\u7528\u6237\u540D <span class="token punctuation">[</span>IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;\u5BC6\u7801&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u7528\u6237" aria-hidden="true">#</a> \u4FEE\u6539\u7528\u6237</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> mysql<span class="token punctuation">.</span><span class="token keyword">user</span> <span class="token keyword">SET</span> <span class="token keyword">USER</span><span class="token operator">=</span><span class="token string">&#39;li4&#39;</span> <span class="token keyword">WHERE</span> <span class="token keyword">USER</span><span class="token operator">=</span><span class="token string">&#39;wang5&#39;</span><span class="token punctuation">;</span> 
FLUSH <span class="token keyword">PRIVILEGES</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5220\u9664\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u7528\u6237" aria-hidden="true">#</a> \u5220\u9664\u7528\u6237</h3><ul><li>\u4F7F\u7528DROP\u65B9\u5F0F\u5220\u9664</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">USER</span> <span class="token keyword">user</span><span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token keyword">user</span><span class="token punctuation">]</span>\u2026<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528DELETE\u65B9\u5F0F\u5220\u9664\uFF08\u4E0D\u63A8\u8350\uFF0C\u6709\u6B8B\u7559\u4FE1\u606F\uFF09</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> mysql<span class="token punctuation">.</span><span class="token keyword">user</span> <span class="token keyword">WHERE</span> Host<span class="token operator">=</span>\u2019hostname\u2019 <span class="token operator">AND</span> <span class="token keyword">User</span><span class="token operator">=</span>\u2019username\u2019<span class="token punctuation">;</span>
FLUSH <span class="token keyword">PRIVILEGES</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BBE\u7F6E\u5F53\u524D\u7528\u6237\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u5F53\u524D\u7528\u6237\u5BC6\u7801" aria-hidden="true">#</a> \u8BBE\u7F6E\u5F53\u524D\u7528\u6237\u5BC6\u7801</h3><ul><li>\u4F7F\u7528ALTER USER\u547D\u4EE4\u6765\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token keyword">USER</span><span class="token punctuation">(</span><span class="token punctuation">)</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;new_password&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528SET\u8BED\u53E5\u6765\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SET</span> PASSWORD<span class="token operator">=</span><span class="token string">&#39;new_password&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539\u5176\u4ED6\u7528\u6237\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5176\u4ED6\u7528\u6237\u5BC6\u7801" aria-hidden="true">#</a> \u4FEE\u6539\u5176\u4ED6\u7528\u6237\u5BC6\u7801</h3><ul><li>\u4F7F\u7528ALTER\u8BED\u53E5\u6765\u4FEE\u6539\u666E\u901A\u7528\u6237\u7684\u5BC6\u7801</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">USER</span> <span class="token keyword">user</span> <span class="token punctuation">[</span>IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;\u65B0\u5BC6\u7801&#39;</span><span class="token punctuation">]</span> 
<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token keyword">user</span><span class="token punctuation">[</span>IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;\u65B0\u5BC6\u7801&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>\u2026<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528SET\u547D\u4EE4\u6765\u4FEE\u6539\u666E\u901A\u7528\u6237\u7684\u5BC6\u7801</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SET</span> PASSWORD <span class="token keyword">FOR</span> <span class="token string">&#39;username&#39;</span><span class="token variable">@&#39;hostname&#39;</span><span class="token operator">=</span><span class="token string">&#39;new_password&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6743\u9650\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650\u7BA1\u7406" aria-hidden="true">#</a> \u6743\u9650\u7BA1\u7406</h2><h3 id="\u6743\u9650\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650\u5217\u8868" aria-hidden="true">#</a> \u6743\u9650\u5217\u8868</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">show</span> <span class="token keyword">privileges</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>CREATE\u548CDROP\u6743\u9650</code>\uFF0C\u53EF\u4EE5\u521B\u5EFA\u65B0\u7684\u6570\u636E\u5E93\u548C\u8868\uFF0C\u6216\u5220\u9664\uFF08\u79FB\u6389\uFF09\u5DF2\u6709\u7684\u6570\u636E\u5E93\u548C\u8868\u3002\u5982\u679C\u5C06MySQL\u6570\u636E\u5E93\u4E2D\u7684DROP\u6743\u9650\u6388\u4E88\u67D0\u7528\u6237\uFF0C\u7528\u6237\u5C31\u53EF\u4EE5\u5220\u9664MySQL\u8BBF\u95EE\u6743\u9650\u4FDD\u5B58\u7684\u6570\u636E\u5E93\u3002</li><li><code>SELECT\u3001INSERT\u3001UPDATE\u548CDELETE\u6743\u9650</code>\u5141\u8BB8\u5728\u4E00\u4E2A\u6570\u636E\u5E93\u73B0\u6709\u7684\u8868\u4E0A\u5B9E\u65BD\u64CD\u4F5C\u3002</li><li><code>SELECT\u6743\u9650</code>\u53EA\u6709\u5728\u5B83\u4EEC\u771F\u6B63\u4ECE\u4E00\u4E2A\u8868\u4E2D\u68C0\u7D22\u884C\u65F6\u624D\u88AB\u7528\u5230\u3002</li><li><code>INDEX\u6743\u9650</code>\u5141\u8BB8\u521B\u5EFA\u6216\u5220\u9664\u7D22\u5F15\uFF0CINDEX\u9002\u7528\u4E8E\u5DF2\u6709\u7684\u8868\u3002\u5982\u679C\u5177\u6709\u67D0\u4E2A\u8868\u7684CREATE\u6743\u9650\uFF0C\u5C31\u53EF\u4EE5\u5728CREATE TABLE\u8BED\u53E5\u4E2D\u5305\u62EC\u7D22\u5F15\u5B9A\u4E49\u3002</li><li><code>ALTER\u6743\u9650</code>\u53EF\u4EE5\u4F7F\u7528ALTER TABLE\u6765\u66F4\u6539\u8868\u7684\u7ED3\u6784\u548C\u91CD\u65B0\u547D\u540D\u8868\u3002</li><li><code>CREATE ROUTINE\u6743\u9650</code>\u7528\u6765\u521B\u5EFA\u4FDD\u5B58\u7684\u7A0B\u5E8F\uFF08\u51FD\u6570\u548C\u7A0B\u5E8F\uFF09\uFF0C<code>ALTER ROUTINE\u6743\u9650</code>\u7528\u6765\u66F4\u6539\u548C\u5220\u9664\u4FDD\u5B58\u7684\u7A0B\u5E8F\uFF0C<code>EXECUTE\u6743\u9650</code>\u7528\u6765\u6267\u884C\u4FDD\u5B58\u7684\u7A0B\u5E8F\u3002</li><li><code>GRANT\u6743\u9650</code>\u5141\u8BB8\u6388\u6743\u7ED9\u5176\u4ED6\u7528\u6237\uFF0C\u53EF\u7528\u4E8E\u6570\u636E\u5E93\u3001\u8868\u548C\u4FDD\u5B58\u7684\u7A0B\u5E8F\u3002</li><li><code>FILE\u6743\u9650</code>\u4F7F\u7528\u6237\u53EF\u4EE5\u4F7F\u7528LOAD DATA INFILE\u548CSELECT ... INTO OUTFILE\u8BED\u53E5\u8BFB\u6216\u5199\u670D\u52A1\u5668\u4E0A\u7684\u6587\u4EF6\uFF0C\u4EFB\u4F55\u88AB\u6388\u4E88FILE\u6743\u9650\u7684\u7528\u6237\u90FD\u80FD\u8BFB\u6216\u5199MySQL\u670D\u52A1\u5668\u4E0A\u7684\u4EFB\u4F55\u6587\u4EF6\uFF08\u8BF4\u660E\u7528\u6237\u53EF\u4EE5\u8BFB\u4EFB\u4F55\u6570\u636E\u5E93\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\uFF0C\u56E0\u4E3A\u670D\u52A1\u5668\u53EF\u4EE5\u8BBF\u95EE\u8FD9\u4E9B\u6587\u4EF6\uFF09\u3002</li></ul><h3 id="\u6388\u4E88\u6743\u9650\u7684\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u6388\u4E88\u6743\u9650\u7684\u89C4\u5219" aria-hidden="true">#</a> \u6388\u4E88\u6743\u9650\u7684\u89C4\u5219</h3><p>\u6743\u9650\u63A7\u5236\u4E3B\u8981\u662F\u51FA\u4E8E\u5B89\u5168\u56E0\u7D20\uFF0C\u56E0\u6B64\u9700\u8981\u9075\u5FAA\u4EE5\u4E0B\u51E0\u4E2A<code>\u7ECF\u9A8C\u539F\u5219</code>\uFF1A</p><p>1\u3001\u53EA\u6388\u4E88\u80FD<code>\u6EE1\u8DB3\u9700\u8981\u7684\u6700\u5C0F\u6743\u9650</code>\uFF0C\u9632\u6B62\u7528\u6237\u5E72\u574F\u4E8B\u3002\u6BD4\u5982\u7528\u6237\u53EA\u662F\u9700\u8981\u67E5\u8BE2\uFF0C\u90A3\u5C31\u53EA\u7ED9select\u6743\u9650\u5C31\u53EF\u4EE5\u4E86\uFF0C\u4E0D\u8981\u7ED9\u7528\u6237\u8D4B\u4E88update\u3001insert\u6216\u8005delete\u6743\u9650\u3002</p><p>2\u3001\u521B\u5EFA\u7528\u6237\u7684\u65F6\u5019<code>\u9650\u5236\u7528\u6237\u7684\u767B\u5F55\u4E3B\u673A</code>\uFF0C\u4E00\u822C\u662F\u9650\u5236\u6210\u6307\u5B9AIP\u6216\u8005\u5185\u7F51IP\u6BB5\u3002</p><p>3\u3001\u4E3A\u6BCF\u4E2A\u7528\u6237<code>\u8BBE\u7F6E\u6EE1\u8DB3\u5BC6\u7801\u590D\u6742\u5EA6\u7684\u5BC6\u7801</code>\u3002</p><p>4\u3001<code>\u5B9A\u671F\u6E05\u7406\u4E0D\u9700\u8981\u7684\u7528\u6237</code>\uFF0C\u56DE\u6536\u6743\u9650\u6216\u8005\u5220\u9664\u7528\u6237\u3002</p><h3 id="\u6388\u4E88\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6388\u4E88\u6743\u9650" aria-hidden="true">#</a> \u6388\u4E88\u6743\u9650</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">GRANT</span> \u6743\u9650<span class="token number">1</span><span class="token punctuation">,</span>\u6743\u9650<span class="token number">2</span><span class="token punctuation">,</span>\u2026\u6743\u9650n <span class="token keyword">ON</span> \u6570\u636E\u5E93\u540D\u79F0<span class="token punctuation">.</span>\u8868\u540D\u79F0 <span class="token keyword">TO</span> \u7528\u6237\u540D@\u7528\u6237\u5730\u5740 <span class="token punctuation">[</span>IDENTIFIED <span class="token keyword">BY</span> \u2018\u5BC6\u7801\u53E3\u4EE4\u2019<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8BE5\u6743\u9650\u5982\u679C\u53D1\u73B0\u6CA1\u6709\u8BE5\u7528\u6237\uFF0C\u5219\u4F1A\u76F4\u63A5\u65B0\u5EFA\u4E00\u4E2A\u7528\u6237\u3002</li><li>\u7ED9li4\u7528\u6237\u7528\u672C\u5730\u547D\u4EE4\u884C\u65B9\u5F0F\uFF0C\u6388\u4E88atguigudb\u8FD9\u4E2A\u5E93\u4E0B\u7684\u6240\u6709\u8868\u7684\u63D2\u5220\u6539\u67E5\u7684\u6743\u9650</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">GRANT</span> <span class="token keyword">SELECT</span><span class="token punctuation">,</span><span class="token keyword">INSERT</span><span class="token punctuation">,</span><span class="token keyword">DELETE</span><span class="token punctuation">,</span><span class="token keyword">UPDATE</span> <span class="token keyword">ON</span> atguigudb<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> li4<span class="token variable">@localhost</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u6388\u4E88\u901A\u8FC7\u7F51\u7EDC\u65B9\u5F0F\u767B\u5F55\u7684joe\u7528\u6237 \uFF0C\u5BF9\u6240\u6709\u5E93\u6240\u6709\u8868\u7684\u5168\u90E8\u6743\u9650\uFF0C\u5BC6\u7801\u8BBE\u4E3A123\u3002<strong>\u6CE8\u610F\u8FD9\u91CC\u552F\u72EC\u4E0D\u5305\u62ECgrant\u7684\u6743\u9650</strong></li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">GRANT</span> <span class="token keyword">ALL</span> <span class="token keyword">PRIVILEGES</span> <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> joe<span class="token variable">@&#39;%&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6743\u9650" aria-hidden="true">#</a> \u67E5\u770B\u6743\u9650</h3><ul><li>\u67E5\u770B\u5F53\u524D\u7528\u6237\u6743\u9650</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SHOW</span> GRANTS<span class="token punctuation">;</span> 
<span class="token comment"># \u6216 </span>
<span class="token keyword">SHOW</span> GRANTS <span class="token keyword">FOR</span> <span class="token keyword">CURRENT_USER</span><span class="token punctuation">;</span> 
<span class="token comment"># \u6216 </span>
<span class="token keyword">SHOW</span> GRANTS <span class="token keyword">FOR</span> <span class="token keyword">CURRENT_USER</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u67E5\u770B\u67D0\u7528\u6237\u7684\u5168\u5C40\u6743\u9650</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SHOW</span> GRANTS <span class="token keyword">FOR</span> <span class="token string">&#39;user&#39;</span><span class="token variable">@&#39;\u4E3B\u673A\u5730\u5740&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6536\u56DE\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6536\u56DE\u6743\u9650" aria-hidden="true">#</a> \u6536\u56DE\u6743\u9650</h3><p><strong>\u6CE8\u610F\uFF1A\u5728\u5C06\u7528\u6237\u8D26\u6237\u4ECEuser\u8868\u5220\u9664\u4E4B\u524D\uFF0C\u5E94\u8BE5\u6536\u56DE\u76F8\u5E94\u7528\u6237\u7684\u6240\u6709\u6743\u9650</strong></p><ul><li>\u6536\u56DE\u6743\u9650\u547D\u4EE4</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">REVOKE</span> \u6743\u9650<span class="token number">1</span><span class="token punctuation">,</span>\u6743\u9650<span class="token number">2</span><span class="token punctuation">,</span>\u2026\u6743\u9650n <span class="token keyword">ON</span> \u6570\u636E\u5E93\u540D\u79F0<span class="token punctuation">.</span>\u8868\u540D\u79F0 <span class="token keyword">FROM</span> \u7528\u6237\u540D@\u7528\u6237\u5730\u5740<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u6CE8\u610F\uFF1A<code>\u987B\u7528\u6237\u91CD\u65B0\u767B\u5F55\u540E\u624D\u80FD\u751F\u6548</code></li></ul><h2 id="\u89D2\u8272\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u89D2\u8272\u7BA1\u7406" aria-hidden="true">#</a> \u89D2\u8272\u7BA1\u7406</h2><h3 id="\u521B\u5EFA\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u89D2\u8272" aria-hidden="true">#</a> \u521B\u5EFA\u89D2\u8272</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> ROLE <span class="token string">&#39;role_name&#39;</span><span class="token punctuation">[</span><span class="token variable">@&#39;host_name&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token string">&#39;role_name&#39;</span><span class="token punctuation">[</span><span class="token variable">@&#39;host_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u89D2\u8272\u540D\u79F0\u7684\u547D\u540D\u89C4\u5219\u548C\u7528\u6237\u540D\u7C7B\u4F3C\u3002\u5982\u679C<code>host_name\u7701\u7565\uFF0C\u9ED8\u8BA4\u4E3A%</code>\uFF0C<code>role_name\u4E0D\u53EF\u7701\u7565</code>\uFF0C\u4E0D\u53EF\u4E3A\u7A7A\u3002</p><h3 id="\u7ED9\u89D2\u8272\u8D4B\u4E88\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u89D2\u8272\u8D4B\u4E88\u6743\u9650" aria-hidden="true">#</a> \u7ED9\u89D2\u8272\u8D4B\u4E88\u6743\u9650</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">GRANT</span> <span class="token keyword">privileges</span> <span class="token keyword">ON</span> table_name <span class="token keyword">TO</span> <span class="token string">&#39;role_name&#39;</span><span class="token punctuation">[</span><span class="token variable">@&#39;host_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u8BED\u53E5\u4E2Dprivileges\u4EE3\u8868\u6743\u9650\u7684\u540D\u79F0\uFF0C\u591A\u4E2A\u6743\u9650\u4EE5\u9017\u53F7\u9694\u5F00\u3002\u53EF\u4F7F\u7528SHOW\u8BED\u53E5\u67E5\u8BE2\u6743\u9650\u540D\u79F0</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">PRIVILEGES</span>\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u89D2\u8272\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u89D2\u8272\u6743\u9650" aria-hidden="true">#</a> \u67E5\u770B\u89D2\u8272\u6743\u9650</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SHOW</span> GRANTS <span class="token keyword">FOR</span> <span class="token string">&#39;role_name&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EA\u8981\u4F60\u521B\u5EFA\u4E86\u4E00\u4E2A\u89D2\u8272\uFF0C\u7CFB\u7EDF\u5C31\u4F1A\u81EA\u52A8\u7ED9\u4F60\u4E00\u4E2A\u201C<code>USAGE</code>\u201D\u6743\u9650\uFF0C\u610F\u601D\u662F<code>\u8FDE\u63A5\u767B\u5F55\u6570\u636E\u5E93\u7684\u6743\u9650</code>\u3002</p><h3 id="\u56DE\u6536\u89D2\u8272\u7684\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u56DE\u6536\u89D2\u8272\u7684\u6743\u9650" aria-hidden="true">#</a> \u56DE\u6536\u89D2\u8272\u7684\u6743\u9650</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">REVOKE</span> <span class="token keyword">privileges</span> <span class="token keyword">ON</span> tablename <span class="token keyword">FROM</span> <span class="token string">&#39;rolename&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5220\u9664\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u89D2\u8272" aria-hidden="true">#</a> \u5220\u9664\u89D2\u8272</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">DROP</span> ROLE role <span class="token punctuation">[</span><span class="token punctuation">,</span>role2<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C<code>\u5982\u679C\u4F60\u5220\u9664\u4E86\u89D2\u8272\uFF0C\u90A3\u4E48\u7528\u6237\u4E5F\u5C31\u5931\u53BB\u4E86\u901A\u8FC7\u8FD9\u4E2A\u89D2\u8272\u6240\u83B7\u5F97\u7684\u6240\u6709\u6743\u9650</code>\u3002</p><h3 id="\u7528\u6237\u8D4B\u4E88\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u8D4B\u4E88\u89D2\u8272" aria-hidden="true">#</a> \u7528\u6237\u8D4B\u4E88\u89D2\u8272</h3><p>\u89D2\u8272\u521B\u5EFA\u5E76\u6388\u6743\u540E\uFF0C\u8981\u8D4B\u7ED9\u7528\u6237\u5E76\u5904\u4E8E<code>\u6FC0\u6D3B\u72B6\u6001</code>\u624D\u80FD\u53D1\u6325\u4F5C\u7528\u3002</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">GRANT</span> role <span class="token punctuation">[</span><span class="token punctuation">,</span>role2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span> <span class="token keyword">TO</span> <span class="token keyword">user</span> <span class="token punctuation">[</span><span class="token punctuation">,</span>user2<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u5F53\u524D\u5DF2\u6FC0\u6D3B\u7684\u89D2\u8272</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SELECT</span> CURRENT_ROLE<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6FC0\u6D3B\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#\u6FC0\u6D3B\u89D2\u8272" aria-hidden="true">#</a> \u6FC0\u6D3B\u89D2\u8272</h3><ul><li>\u4F7F\u7528set default role \u547D\u4EE4\u6FC0\u6D3B\u89D2\u8272</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token keyword">DEFAULT</span> ROLE <span class="token keyword">ALL</span> <span class="token keyword">TO</span> <span class="token string">&#39;kangshifu&#39;</span><span class="token variable">@&#39;localhost&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5C06activate_all_roles_on_login\u8BBE\u7F6E\u4E3AON</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> activate_all_roles_on_login<span class="token operator">=</span><span class="token keyword">ON</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5BF9<code>\u6240\u6709\u89D2\u8272\u6C38\u4E45\u6FC0\u6D3B</code></p><h3 id="\u64A4\u9500\u7528\u6237\u7684\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500\u7528\u6237\u7684\u89D2\u8272" aria-hidden="true">#</a> \u64A4\u9500\u7528\u6237\u7684\u89D2\u8272</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">REVOKE</span> role <span class="token keyword">FROM</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8BBE\u7F6E\u5F3A\u5236\u89D2\u8272-mandatory-role" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u5F3A\u5236\u89D2\u8272-mandatory-role" aria-hidden="true">#</a> \u8BBE\u7F6E\u5F3A\u5236\u89D2\u8272(mandatory role)</h3><ul><li>\u670D\u52A1\u542F\u52A8\u524D\u8BBE\u7F6E</li></ul><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span> 
<span class="token key attr-name">mandatory_roles</span><span class="token punctuation">=</span><span class="token value attr-value">&#39;<span class="token inner-value">role1,role2@localhost,r3@%.atguigu.com</span>&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD0\u884C\u65F6\u8BBE\u7F6E</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SET</span> PERSIST mandatory_roles <span class="token operator">=</span> <span class="token string">&#39;role1,role2@localhost,r3@%.example.com&#39;</span><span class="token punctuation">;</span> <span class="token comment">#\u7CFB\u7EDF\u91CD\u542F\u540E\u4ECD\u7136\u6709\u6548</span>
<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> mandatory_roles <span class="token operator">=</span> <span class="token string">&#39;role1,role2@localhost,r3@%.example.com&#39;</span><span class="token punctuation">;</span> <span class="token comment">#\u7CFB\u7EDF\u91CD\u542F\u540E\u5931\u6548</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,84),p=[o];function c(t,i){return a(),n("div",null,p)}var u=s(l,[["render",c],["__file","chapter3.html.vue"]]);export{u as default};