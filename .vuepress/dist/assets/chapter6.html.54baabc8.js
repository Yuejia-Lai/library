import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as s,e as a}from"./app.d6224ea7.js";const n={},i=a(`<h2 id="\u57FA\u7840\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u77E5\u8BC6" aria-hidden="true">#</a> \u57FA\u7840\u77E5\u8BC6</h2><h3 id="\u4E00\u6761\u6570\u636E\u5B58\u50A8\u7684\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4E00\u6761\u6570\u636E\u5B58\u50A8\u7684\u8FC7\u7A0B" aria-hidden="true">#</a> \u4E00\u6761\u6570\u636E\u5B58\u50A8\u7684\u8FC7\u7A0B</h3><p>\u4ECE\u7CFB\u7EDF\u67B6\u6784\u7684\u5C42\u6B21\u4E0A\u770B\uFF0CMySQL \u6570\u636E\u5E93\u7CFB\u7EDF\u4ECE\u5927\u5230\u5C0F\u4F9D\u6B21\u662F<code>\u6570\u636E\u5E93\u670D\u52A1\u5668</code>\u3001<code>\u6570\u636E\u5E93</code>\u3001<code>\u6570\u636E\u8868</code>\u3001\u6570\u636E\u8868\u7684<code>\u884C\u4E0E\u5217</code></p><p><img src="https://s2.loli.net/2022/09/14/9rKjmuOzWXEA2Jl.png" alt="image-20211007155810920.png" loading="lazy"></p><h3 id="\u6807\u8BC6\u7B26\u547D\u540D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u6807\u8BC6\u7B26\u547D\u540D\u89C4\u5219" aria-hidden="true">#</a> \u6807\u8BC6\u7B26\u547D\u540D\u89C4\u5219</h3><ul><li>\u6570\u636E\u5E93\u540D\u3001\u8868\u540D\u4E0D\u5F97\u8D85\u8FC730\u4E2A\u5B57\u7B26\uFF0C\u53D8\u91CF\u540D\u9650\u5236\u4E3A29\u4E2A</li><li>\u5FC5\u987B\u53EA\u80FD\u5305\u542B A\u2013Z, a\u2013z, 0\u20139, _\u517163\u4E2A\u5B57\u7B26</li><li>\u6570\u636E\u5E93\u540D\u3001\u8868\u540D\u3001\u5B57\u6BB5\u540D\u7B49\u5BF9\u8C61\u540D\u4E2D\u95F4\u4E0D\u8981\u5305\u542B\u7A7A\u683C</li><li>\u540C\u4E00\u4E2AMySQL\u8F6F\u4EF6\u4E2D\uFF0C\u6570\u636E\u5E93\u4E0D\u80FD\u540C\u540D\uFF1B\u540C\u4E00\u4E2A\u5E93\u4E2D\uFF0C\u8868\u4E0D\u80FD\u91CD\u540D\uFF1B\u540C\u4E00\u4E2A\u8868\u4E2D\uFF0C\u5B57\u6BB5\u4E0D\u80FD\u91CD\u540D</li><li>\u5FC5\u987B\u4FDD\u8BC1\u4F60\u7684\u5B57\u6BB5\u6CA1\u6709\u548C\u4FDD\u7559\u5B57\u3001\u6570\u636E\u5E93\u7CFB\u7EDF\u6216\u5E38\u7528\u65B9\u6CD5\u51B2\u7A81\u3002\u5982\u679C\u575A\u6301\u4F7F\u7528\uFF0C\u8BF7\u5728SQL\u8BED\u53E5\u4E2D\u4F7F\u7528\`\uFF08\u7740\u91CD\u53F7\uFF09\u5F15\u8D77\u6765</li><li>\u4FDD\u6301\u5B57\u6BB5\u540D\u548C\u7C7B\u578B\u7684\u4E00\u81F4\u6027\uFF1A\u5728\u547D\u540D\u5B57\u6BB5\u5E76\u4E3A\u5176\u6307\u5B9A\u6570\u636E\u7C7B\u578B\u7684\u65F6\u5019\u4E00\u5B9A\u8981\u4FDD\u8BC1\u4E00\u81F4\u6027\uFF0C\u5047\u5982\u6570\u636E\u7C7B\u578B\u5728\u4E00\u4E2A\u8868\u91CC\u662F\u6574\u6570\uFF0C\u90A3\u5728\u53E6\u4E00\u4E2A\u8868\u91CC\u53EF\u5C31\u522B\u53D8\u6210\u5B57\u7B26\u578B\u4E86</li></ul><h3 id="mysql\u4E2D\u7684\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#mysql\u4E2D\u7684\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> MySQL\u4E2D\u7684\u6570\u636E\u7C7B\u578B</h3><table><thead><tr><th>\u7C7B\u578B</th><th>\u7C7B\u578B\u4E3E\u4F8B</th></tr></thead><tbody><tr><td>\u6574\u6570\u7C7B\u578B</td><td>TINYINT\u3001SMALLINT\u3001MEDIUMINT\u3001<strong>INT(\u6216INTEGER)</strong>\u3001BIGINT</td></tr><tr><td>\u6D6E\u70B9\u7C7B\u578B</td><td>FLOAT\u3001DOUBLE</td></tr><tr><td>\u5B9A\u70B9\u6570\u7C7B\u578B</td><td><strong>DECIMAL</strong></td></tr><tr><td>\u4F4D\u7C7B\u578B</td><td>BIT</td></tr><tr><td>\u65E5\u671F\u65F6\u95F4\u7C7B\u578B</td><td>YEAR\u3001TIME\u3001<strong>DATE</strong>\u3001DATETIME\u3001TIMESTAMP</td></tr><tr><td>\u6587\u672C\u5B57\u7B26\u4E32\u7C7B\u578B</td><td>CHAR\u3001<strong>VARCHAR</strong>\u3001TINYTEXT\u3001TEXT\u3001MEDIUMTEXT\u3001LONGTEXT</td></tr><tr><td>\u679A\u4E3E\u7C7B\u578B</td><td>ENUM</td></tr><tr><td>\u96C6\u5408\u7C7B\u578B</td><td>SET</td></tr><tr><td>\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\u7C7B\u578B</td><td>BINARY\u3001VARBINARY\u3001TINYBLOB\u3001BLOB\u3001MEDIUMBLOB\u3001LONGBLOB</td></tr><tr><td>JSON\u7C7B\u578B</td><td>JSON\u5BF9\u8C61\u3001JSON\u6570\u7EC4</td></tr><tr><td>\u7A7A\u95F4\u6570\u636E\u7C7B\u578B</td><td>\u5355\u503C\uFF1AGEOMETRY\u3001POINT\u3001LINESTRING\u3001POLYGON\uFF1B<br>\u96C6\u5408\uFF1AMULTIPOINT\u3001MULTILINESTRING\u3001MULTIPOLYGON\u3001GEOMETRYCOLLECTION</td></tr></tbody></table><p>\u5176\u4E2D\uFF0C\u5E38\u7528\u7684\u51E0\u7C7B\u7C7B\u578B\u4ECB\u7ECD\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u6570\u636E\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>INT</td><td>\u4ECE-2<sup>31\u52302</sup>31-1\u7684\u6574\u578B\u6570\u636E\u3002\u5B58\u50A8\u5927\u5C0F\u4E3A 4\u4E2A\u5B57\u8282</td></tr><tr><td>CHAR(size)</td><td>\u5B9A\u957F\u5B57\u7B26\u6570\u636E\u3002\u82E5\u672A\u6307\u5B9A\uFF0C\u9ED8\u8BA4\u4E3A1\u4E2A\u5B57\u7B26\uFF0C\u6700\u5927\u957F\u5EA6255</td></tr><tr><td>VARCHAR(size)</td><td>\u53EF\u53D8\u957F\u5B57\u7B26\u6570\u636E\uFF0C\u6839\u636E\u5B57\u7B26\u4E32\u5B9E\u9645\u957F\u5EA6\u4FDD\u5B58\uFF0C<strong>\u5FC5\u987B\u6307\u5B9A\u957F\u5EA6</strong></td></tr><tr><td>FLOAT(M,D)</td><td>\u5355\u7CBE\u5EA6\uFF0C\u5360\u75284\u4E2A\u5B57\u8282\uFF0CM=\u6574\u6570\u4F4D+\u5C0F\u6570\u4F4D\uFF0CD=\u5C0F\u6570\u4F4D\u3002 D&lt;=M&lt;=255,0&lt;=D&lt;=30\uFF0C\u9ED8\u8BA4M+D&lt;=6</td></tr><tr><td>DOUBLE(M,D)</td><td>\u53CC\u7CBE\u5EA6\uFF0C\u5360\u75288\u4E2A\u5B57\u8282\uFF0CD&lt;=M&lt;=255,0&lt;=D&lt;=30\uFF0C\u9ED8\u8BA4M+D&lt;=15</td></tr><tr><td>DECIMAL(M,D)</td><td>\u9AD8\u7CBE\u5EA6\u5C0F\u6570\uFF0C\u5360\u7528M+2\u4E2A\u5B57\u8282\uFF0CD&lt;=M&lt;=65\uFF0C0&lt;=D&lt;=30\uFF0C\u6700\u5927\u53D6\u503C\u8303\u56F4\u4E0EDOUBLE\u76F8\u540C\u3002</td></tr><tr><td>DATE</td><td>\u65E5\u671F\u578B\u6570\u636E\uFF0C\u683C\u5F0F&#39;YYYY-MM-DD&#39;</td></tr><tr><td>BLOB</td><td>\u4E8C\u8FDB\u5236\u5F62\u5F0F\u7684\u957F\u6587\u672C\u6570\u636E\uFF0C\u6700\u5927\u53EF\u8FBE4G</td></tr><tr><td>TEXT</td><td>\u957F\u6587\u672C\u6570\u636E\uFF0C\u6700\u5927\u53EF\u8FBE4G</td></tr></tbody></table><h2 id="\u521B\u5EFA\u548C\u7BA1\u7406\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u548C\u7BA1\u7406\u6570\u636E\u5E93" aria-hidden="true">#</a> \u521B\u5EFA\u548C\u7BA1\u7406\u6570\u636E\u5E93</h2><h3 id="\u521B\u5EFA\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6570\u636E\u5E93" aria-hidden="true">#</a> \u521B\u5EFA\u6570\u636E\u5E93</h3><ul><li>\u65B9\u5F0F1\uFF1A\u521B\u5EFA\u6570\u636E\u5E93</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE DATABASE \u6570\u636E\u5E93\u540D; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u65B9\u5F0F2\uFF1A\u521B\u5EFA\u6570\u636E\u5E93\u5E76\u6307\u5B9A\u5B57\u7B26\u96C6</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE DATABASE \u6570\u636E\u5E93\u540D CHARACTER SET \u5B57\u7B26\u96C6;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u65B9\u5F0F3\uFF1A\u5224\u65AD\u6570\u636E\u5E93\u662F\u5426\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u6570\u636E\u5E93\uFF08<code>\u63A8\u8350</code>\uFF09</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE DATABASE IF NOT EXISTS \u6570\u636E\u5E93\u540D; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679CMySQL\u4E2D\u5DF2\u7ECF\u5B58\u5728\u76F8\u5173\u7684\u6570\u636E\u5E93\uFF0C\u5219\u5FFD\u7565\u521B\u5EFA\u8BED\u53E5\uFF0C\u4E0D\u518D\u521B\u5EFA\u6570\u636E\u5E93\u3002</p><blockquote><p>\u6CE8\u610F\uFF1ADATABASE \u4E0D\u80FD\u6539\u540D\u3002\u4E00\u4E9B\u53EF\u89C6\u5316\u5DE5\u5177\u53EF\u4EE5\u6539\u540D\uFF0C\u5B83\u662F\u5EFA\u65B0\u5E93\uFF0C\u628A\u6240\u6709\u8868\u590D\u5236\u5230\u65B0\u5E93\uFF0C\u518D\u5220\u65E7\u5E93\u5B8C\u6210\u7684</p></blockquote><h3 id="\u4F7F\u7528\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6570\u636E\u5E93" aria-hidden="true">#</a> \u4F7F\u7528\u6570\u636E\u5E93</h3><ul><li>\u67E5\u770B\u5F53\u524D\u6240\u6709\u7684\u6570\u636E\u5E93</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SHOW DATABASES; #\u6709\u4E00\u4E2AS\uFF0C\u4EE3\u8868\u591A\u4E2A\u6570\u636E\u5E93
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u67E5\u770B\u5F53\u524D\u6B63\u5728\u4F7F\u7528\u7684\u6570\u636E\u5E93</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SELECT DATABASE();  #\u4F7F\u7528\u7684\u4E00\u4E2A mysql \u4E2D\u7684\u5168\u5C40\u51FD\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u67E5\u770B\u6307\u5B9A\u5E93\u4E0B\u6240\u6709\u7684\u8868</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SHOW TABLES FROM \u6570\u636E\u5E93\u540D;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u67E5\u770B\u6570\u636E\u5E93\u7684\u521B\u5EFA\u4FE1\u606F</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SHOW CREATE DATABASE \u6570\u636E\u5E93\u540D;
\u6216\u8005\uFF1A
SHOW CREATE DATABASE \u6570\u636E\u5E93\u540D\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528/\u5207\u6362\u6570\u636E\u5E93</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>USE \u6570\u636E\u5E93\u540D;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\uFF1A\u8981\u64CD\u4F5C\u8868\u683C\u548C\u6570\u636E\u4E4B\u524D\u5FC5\u987B\u5148\u8BF4\u660E\u662F\u5BF9\u54EA\u4E2A\u6570\u636E\u5E93\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5426\u5219\u5C31\u8981\u5BF9\u6240\u6709\u5BF9\u8C61\u52A0\u4E0A\u201C\u6570\u636E\u5E93\u540D.\u201D</p></blockquote><h3 id="\u4FEE\u6539\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u6570\u636E\u5E93" aria-hidden="true">#</a> \u4FEE\u6539\u6570\u636E\u5E93</h3><ul><li>\u66F4\u6539\u6570\u636E\u5E93\u5B57\u7B26\u96C6</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER DATABASE \u6570\u636E\u5E93\u540D CHARACTER SET \u5B57\u7B26\u96C6;  #\u6BD4\u5982\uFF1Agbk\u3001utf8\u7B49
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5220\u9664\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6570\u636E\u5E93" aria-hidden="true">#</a> \u5220\u9664\u6570\u636E\u5E93</h3><ul><li>\u65B9\u5F0F1\uFF1A\u5220\u9664\u6307\u5B9A\u7684\u6570\u636E\u5E93</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>DROP DATABASE \u6570\u636E\u5E93\u540D;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u65B9\u5F0F2\uFF1A\u5220\u9664\u6307\u5B9A\u7684\u6570\u636E\u5E93\uFF08<code>\u63A8\u8350</code>\uFF09</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>DROP DATABASE IF EXISTS \u6570\u636E\u5E93\u540D;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u8868" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u8868" aria-hidden="true">#</a> \u521B\u5EFA\u8868</h2><h3 id="\u521B\u5EFA\u65B9\u5F0F1" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u65B9\u5F0F1" aria-hidden="true">#</a> \u521B\u5EFA\u65B9\u5F0F1</h3><ul><li><strong>\u5FC5\u987B\u5177\u5907\uFF1A</strong><ul><li>CREATE TABLE\u6743\u9650</li><li>\u5B58\u50A8\u7A7A\u95F4</li></ul></li><li><strong>\u8BED\u6CD5\u683C\u5F0F\uFF1A</strong></li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TABLE [IF NOT EXISTS] \u8868\u540D(
	\u5B57\u6BB51, \u6570\u636E\u7C7B\u578B [\u7EA6\u675F\u6761\u4EF6] [\u9ED8\u8BA4\u503C],
	\u5B57\u6BB52, \u6570\u636E\u7C7B\u578B [\u7EA6\u675F\u6761\u4EF6] [\u9ED8\u8BA4\u503C],
	\u5B57\u6BB53, \u6570\u636E\u7C7B\u578B [\u7EA6\u675F\u6761\u4EF6] [\u9ED8\u8BA4\u503C],
	\u2026\u2026
	[\u8868\u7EA6\u675F\u6761\u4EF6]
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u52A0\u4E0A\u4E86IF NOT EXISTS\u5173\u952E\u5B57\uFF0C\u5219\u8868\u793A\uFF1A\u5982\u679C\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u4E0D\u5B58\u5728\u8981\u521B\u5EFA\u7684\u6570\u636E\u8868\uFF0C\u5219\u521B\u5EFA\u6570\u636E\u8868\uFF1B\u5982\u679C\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u5DF2\u7ECF\u5B58\u5728\u8981\u521B\u5EFA\u7684\u6570\u636E\u8868\uFF0C\u5219\u5FFD\u7565\u5EFA\u8868\u8BED\u53E5\uFF0C\u4E0D\u518D\u521B\u5EFA\u6570\u636E\u8868\u3002</p></blockquote><ul><li><strong>\u5FC5\u987B\u6307\u5B9A\uFF1A</strong><ul><li>\u8868\u540D</li><li>\u5217\u540D(\u6216\u5B57\u6BB5\u540D)\uFF0C\u6570\u636E\u7C7B\u578B\uFF0C<strong>\u957F\u5EA6</strong></li></ul></li><li><strong>\u53EF\u9009\u6307\u5B9A\uFF1A</strong><ul><li>\u7EA6\u675F\u6761\u4EF6</li><li>\u9ED8\u8BA4\u503C</li></ul></li></ul><h3 id="\u521B\u5EFA\u65B9\u5F0F2" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u65B9\u5F0F2" aria-hidden="true">#</a> \u521B\u5EFA\u65B9\u5F0F2</h3><ul><li><p>\u4F7F\u7528 AS subquery \u9009\u9879\uFF0C<strong>\u5C06\u521B\u5EFA\u8868\u548C\u63D2\u5165\u6570\u636E\u7ED3\u5408\u8D77\u6765</strong></p><p><img src="https://s2.loli.net/2022/09/14/EeBI7JPhWiVMlYz.png" alt="1554997882872.png" loading="lazy"></p></li><li><p>\u6307\u5B9A\u7684\u5217\u548C\u5B50\u67E5\u8BE2\u4E2D\u7684\u5217\u8981\u4E00\u4E00\u5BF9\u5E94</p></li><li><p>\u901A\u8FC7\u5217\u540D\u548C\u9ED8\u8BA4\u503C\u5B9A\u4E49\u5217</p></li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TABLE dept80
AS 
SELECT  employee_id, last_name, salary*12 ANNSAL, hire_date
FROM    employees
WHERE   department_id = 80;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u6570\u636E\u8868\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6570\u636E\u8868\u7ED3\u6784" aria-hidden="true">#</a> \u67E5\u770B\u6570\u636E\u8868\u7ED3\u6784</h3><p>\u5728MySQL\u4E2D\u521B\u5EFA\u597D\u6570\u636E\u8868\u4E4B\u540E\uFF0C\u53EF\u4EE5\u67E5\u770B\u6570\u636E\u8868\u7684\u7ED3\u6784\u3002MySQL\u652F\u6301\u4F7F\u7528<code>DESCRIBE/DESC</code>\u8BED\u53E5\u67E5\u770B\u6570\u636E\u8868\u7ED3\u6784\uFF0C\u4E5F\u652F\u6301\u4F7F\u7528<code>SHOW CREATE TABLE</code>\u8BED\u53E5\u67E5\u770B\u6570\u636E\u8868\u7ED3\u6784\u3002</p><p>\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>SHOW CREATE TABLE \u8868\u540D\\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528SHOW CREATE TABLE\u8BED\u53E5\u4E0D\u4EC5\u53EF\u4EE5\u67E5\u770B\u8868\u521B\u5EFA\u65F6\u7684\u8BE6\u7EC6\u8BED\u53E5\uFF0C\u8FD8\u53EF\u4EE5\u67E5\u770B\u5B58\u50A8\u5F15\u64CE\u548C\u5B57\u7B26\u7F16\u7801</p><h2 id="\u4FEE\u6539\u8868" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u8868" aria-hidden="true">#</a> \u4FEE\u6539\u8868</h2><p><strong>\u4F7F\u7528 ALTER TABLE \u8BED\u53E5\u53EF\u4EE5\u5B9E\u73B0\uFF1A</strong></p><ul><li><p>\u5411\u5DF2\u6709\u7684\u8868\u4E2D\u6DFB\u52A0\u5217</p></li><li><p>\u4FEE\u6539\u73B0\u6709\u8868\u4E2D\u7684\u5217</p></li><li><p>\u5220\u9664\u73B0\u6709\u8868\u4E2D\u7684\u5217</p></li><li><p>\u91CD\u547D\u540D\u73B0\u6709\u8868\u4E2D\u7684\u5217</p></li></ul><h3 id="\u8FFD\u52A0\u4E00\u4E2A\u5217" tabindex="-1"><a class="header-anchor" href="#\u8FFD\u52A0\u4E00\u4E2A\u5217" aria-hidden="true">#</a> \u8FFD\u52A0\u4E00\u4E2A\u5217</h3><p>\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER TABLE \u8868\u540D ADD \u3010COLUMN\u3011 \u5B57\u6BB5\u540D \u5B57\u6BB5\u7C7B\u578B \u3010FIRST|AFTER \u5B57\u6BB5\u540D\u3011;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER TABLE dept80 
ADD job_id varchar(15);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539\u4E00\u4E2A\u5217" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u4E00\u4E2A\u5217" aria-hidden="true">#</a> \u4FEE\u6539\u4E00\u4E2A\u5217</h3><ul><li><p>\u53EF\u4EE5\u4FEE\u6539\u5217\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u957F\u5EA6\u3001\u9ED8\u8BA4\u503C\u548C\u4F4D\u7F6E</p></li><li><p>\u4FEE\u6539\u5B57\u6BB5\u6570\u636E\u7C7B\u578B\u3001\u957F\u5EA6\u3001\u9ED8\u8BA4\u503C\u3001\u4F4D\u7F6E\u7684\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</p></li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER TABLE \u8868\u540D MODIFY \u3010COLUMN\u3011 \u5B57\u6BB5\u540D1 \u5B57\u6BB5\u7C7B\u578B \u3010DEFAULT \u9ED8\u8BA4\u503C\u3011\u3010FIRST|AFTER \u5B57\u6BB5\u540D2\u3011;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER TABLE	dept80
MODIFY salary double(9,2) default 1000;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5BF9\u9ED8\u8BA4\u503C\u7684\u4FEE\u6539\u53EA\u5F71\u54CD\u4ECA\u540E\u5BF9\u8868\u7684\u4FEE\u6539</li><li>\u6B64\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u6B64\u79CD\u65B9\u5F0F\u4FEE\u6539\u5217\u7684\u7EA6\u675F</li></ul><h3 id="\u91CD\u547D\u540D\u4E00\u4E2A\u5217" tabindex="-1"><a class="header-anchor" href="#\u91CD\u547D\u540D\u4E00\u4E2A\u5217" aria-hidden="true">#</a> \u91CD\u547D\u540D\u4E00\u4E2A\u5217</h3><p>\u4F7F\u7528 CHANGE old_column new_column dataType\u5B50\u53E5\u91CD\u547D\u540D\u5217\u3002\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER TABLE \u8868\u540D CHANGE \u3010column\u3011 \u5217\u540D \u65B0\u5217\u540D \u65B0\u6570\u636E\u7C7B\u578B;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5220\u9664\u4E00\u4E2A\u5217" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u4E00\u4E2A\u5217" aria-hidden="true">#</a> \u5220\u9664\u4E00\u4E2A\u5217</h3><p>\u5220\u9664\u8868\u4E2D\u67D0\u4E2A\u5B57\u6BB5\u7684\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER TABLE \u8868\u540D DROP \u3010COLUMN\u3011\u5B57\u6BB5\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u91CD\u547D\u540D\u8868" tabindex="-1"><a class="header-anchor" href="#\u91CD\u547D\u540D\u8868" aria-hidden="true">#</a> \u91CD\u547D\u540D\u8868</h2><ul><li>\u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528RENAME</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>RENAME TABLE emp
TO myemp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u65B9\u5F0F\u4E8C\uFF1A</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>ALTER table dept
RENAME [TO] detail_dept;  -- [TO]\u53EF\u4EE5\u7701\u7565
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5FC5\u987B\u662F\u5BF9\u8C61\u7684\u62E5\u6709\u8005</li></ul><h2 id="\u5220\u9664\u8868" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8868" aria-hidden="true">#</a> \u5220\u9664\u8868</h2><ul><li><p>\u5728MySQL\u4E2D\uFF0C\u5F53\u4E00\u5F20\u6570\u636E\u8868<code>\u6CA1\u6709\u4E0E\u5176\u4ED6\u4EFB\u4F55\u6570\u636E\u8868\u5F62\u6210\u5173\u8054\u5173\u7CFB</code>\u65F6\uFF0C\u53EF\u4EE5\u5C06\u5F53\u524D\u6570\u636E\u8868\u76F4\u63A5\u5220\u9664\u3002</p></li><li><p>\u6570\u636E\u548C\u7ED3\u6784\u90FD\u88AB\u5220\u9664</p></li><li><p>\u6240\u6709\u6B63\u5728\u8FD0\u884C\u7684\u76F8\u5173\u4E8B\u52A1\u88AB\u63D0\u4EA4</p></li><li><p>\u6240\u6709\u76F8\u5173\u7D22\u5F15\u88AB\u5220\u9664</p></li><li><p>\u8BED\u6CD5\u683C\u5F0F\uFF1A</p></li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>DROP TABLE [IF EXISTS] \u6570\u636E\u88681 [, \u6570\u636E\u88682, \u2026, \u6570\u636E\u8868n];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>IF EXISTS</code>\u7684\u542B\u4E49\u4E3A\uFF1A\u5982\u679C\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u5B58\u5728\u76F8\u5E94\u7684\u6570\u636E\u8868\uFF0C\u5219\u5220\u9664\u6570\u636E\u8868\uFF1B\u5982\u679C\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u4E0D\u5B58\u5728\u76F8\u5E94\u7684\u6570\u636E\u8868\uFF0C\u5219\u5FFD\u7565\u5220\u9664\u8BED\u53E5\uFF0C\u4E0D\u518D\u6267\u884C\u5220\u9664\u6570\u636E\u8868\u7684\u64CD\u4F5C\u3002</p><blockquote><p>DROP TABLE \u8BED\u53E5\u4E0D\u80FD\u56DE\u6EDA</p></blockquote><h2 id="\u6E05\u7A7A\u8868" tabindex="-1"><a class="header-anchor" href="#\u6E05\u7A7A\u8868" aria-hidden="true">#</a> \u6E05\u7A7A\u8868</h2><p>TRUNCATE TABLE\u8BED\u53E5\uFF1A</p><ul><li><p>\u5220\u9664\u8868\u4E2D\u6240\u6709\u7684\u6570\u636E</p></li><li><p>\u91CA\u653E\u8868\u7684\u5B58\u50A8\u7A7A\u95F4</p></li><li><p>TRUNCATE\u8BED\u53E5<strong>\u4E0D\u80FD\u56DE\u6EDA</strong>\uFF0C\u800C\u4F7F\u7528 DELETE \u8BED\u53E5\u5220\u9664\u6570\u636E\uFF0C\u53EF\u4EE5\u56DE\u6EDA</p></li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>TRUNCATE TABLE detail_dept;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u63D2\u5165\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u6570\u636E" aria-hidden="true">#</a> \u63D2\u5165\u6570\u636E</h2><h3 id="\u65B9\u5F0F1-values\u7684\u65B9\u5F0F\u6DFB\u52A0" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F1-values\u7684\u65B9\u5F0F\u6DFB\u52A0" aria-hidden="true">#</a> \u65B9\u5F0F1\uFF1AVALUES\u7684\u65B9\u5F0F\u6DFB\u52A0</h3><p>\u4F7F\u7528\u8FD9\u79CD\u8BED\u6CD5\u4E00\u6B21\u53EA\u80FD\u5411\u8868\u4E2D\u63D2\u5165<strong>\u4E00\u6761</strong>\u6570\u636E\u3002</p><p><strong>\u60C5\u51B51\uFF1A\u4E3A\u8868\u7684\u6240\u6709\u5B57\u6BB5\u6309\u9ED8\u8BA4\u987A\u5E8F\u63D2\u5165\u6570\u636E</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>INSERT INTO \u8868\u540D
VALUES (value1,value2,....);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u503C\u5217\u8868\u4E2D\u9700\u8981\u4E3A\u8868\u7684\u6BCF\u4E00\u4E2A\u5B57\u6BB5\u6307\u5B9A\u503C\uFF0C\u5E76\u4E14\u503C\u7684\u987A\u5E8F\u5FC5\u987B\u548C\u6570\u636E\u8868\u4E2D\u5B57\u6BB5\u5B9A\u4E49\u65F6\u7684\u987A\u5E8F\u76F8\u540C</p><p><strong>\u60C5\u51B52\uFF1A\u4E3A\u8868\u7684\u6307\u5B9A\u5B57\u6BB5\u63D2\u5165\u6570\u636E</strong></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>INSERT INTO \u8868\u540D(column1 [, column2, \u2026, columnn]) 
VALUES (value1 [,value2, \u2026, valuen]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u8868\u7684\u6307\u5B9A\u5B57\u6BB5\u63D2\u5165\u6570\u636E\uFF0C\u5C31\u662F\u5728INSERT\u8BED\u53E5\u4E2D\u53EA\u5411\u90E8\u5206\u5B57\u6BB5\u4E2D\u63D2\u5165\u503C\uFF0C\u800C\u5176\u4ED6\u5B57\u6BB5\u7684\u503C\u4E3A\u8868\u5B9A\u4E49\u65F6\u7684\u9ED8\u8BA4\u503C\u3002</p><p>\u5728 INSERT \u5B50\u53E5\u4E2D\u968F\u610F\u5217\u51FA\u5217\u540D\uFF0C\u4F46\u662F\u4E00\u65E6\u5217\u51FA\uFF0CVALUES\u4E2D\u8981\u63D2\u5165\u7684value1,....valuen\u9700\u8981\u4E0Ecolumn1,...columnn\u5217\u4E00\u4E00\u5BF9\u5E94\u3002\u5982\u679C\u7C7B\u578B\u4E0D\u540C\uFF0C\u5C06\u65E0\u6CD5\u63D2\u5165\uFF0C\u5E76\u4E14MySQL\u4F1A\u4EA7\u751F\u9519\u8BEF</p><p><strong>\u60C5\u51B53\uFF1A\u540C\u65F6\u63D2\u5165\u591A\u6761\u8BB0\u5F55</strong></p><p>INSERT\u8BED\u53E5\u53EF\u4EE5\u540C\u65F6\u5411\u6570\u636E\u8868\u4E2D\u63D2\u5165\u591A\u6761\u8BB0\u5F55\uFF0C\u63D2\u5165\u65F6\u6307\u5B9A\u591A\u4E2A\u503C\u5217\u8868\uFF0C\u6BCF\u4E2A\u503C\u5217\u8868\u4E4B\u95F4\u7528\u9017\u53F7\u5206\u9694\u5F00\uFF0C\u57FA\u672C\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>INSERT INTO table_name 
VALUES 
(value1 [,value2, \u2026, valuen]),
(value1 [,value2, \u2026, valuen]),
\u2026\u2026
(value1 [,value2, \u2026, valuen]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>INSERT INTO table_name(column1 [, column2, \u2026, columnn]) 
VALUES 
(value1 [,value2, \u2026, valuen]),
(value1 [,value2, \u2026, valuen]),
\u2026\u2026
(value1 [,value2, \u2026, valuen]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528INSERT\u540C\u65F6\u63D2\u5165\u591A\u6761\u8BB0\u5F55\u65F6\uFF0CMySQL\u4F1A\u8FD4\u56DE\u4E00\u4E9B\u5728\u6267\u884C\u5355\u884C\u63D2\u5165\u65F6\u6CA1\u6709\u7684\u989D\u5916\u4FE1\u606F\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u7684\u542B\u4E49\u5982\u4E0B\uFF1A \u25CF\u3000Records\uFF1A\u8868\u660E\u63D2\u5165\u7684\u8BB0\u5F55\u6761\u6570\u3002 \u25CF\u3000Duplicates\uFF1A\u8868\u660E\u63D2\u5165\u65F6\u88AB\u5FFD\u7565\u7684\u8BB0\u5F55\uFF0C\u539F\u56E0\u53EF\u80FD\u662F\u8FD9\u4E9B\u8BB0\u5F55\u5305\u542B\u4E86\u91CD\u590D\u7684\u4E3B\u952E\u503C\u3002 \u25CF\u3000Warnings\uFF1A\u8868\u660E\u6709\u95EE\u9898\u7684\u6570\u636E\u503C\uFF0C\u4F8B\u5982\u53D1\u751F\u6570\u636E\u7C7B\u578B\u8F6C\u6362\u3002</p><blockquote><p>\u4E00\u4E2A\u540C\u65F6\u63D2\u5165\u591A\u884C\u8BB0\u5F55\u7684INSERT\u8BED\u53E5\u7B49\u540C\u4E8E\u591A\u4E2A\u5355\u884C\u63D2\u5165\u7684INSERT\u8BED\u53E5\uFF0C\u4F46\u662F\u591A\u884C\u7684INSERT\u8BED\u53E5\u5728\u5904\u7406\u8FC7\u7A0B\u4E2D<code>\u6548\u7387\u66F4\u9AD8</code>\u3002\u56E0\u4E3AMySQL\u6267\u884C\u5355\u6761INSERT\u8BED\u53E5\u63D2\u5165\u591A\u884C\u6570\u636E\u6BD4\u4F7F\u7528\u591A\u6761INSERT\u8BED\u53E5\u5FEB\uFF0C\u6240\u4EE5\u5728\u63D2\u5165\u591A\u6761\u8BB0\u5F55\u65F6\u6700\u597D\u9009\u62E9\u4F7F\u7528\u5355\u6761INSERT\u8BED\u53E5\u7684\u65B9\u5F0F\u63D2\u5165</p></blockquote><p><strong>\u5C0F\u7ED3\uFF1A</strong></p><ul><li><p><code>VALUES</code>\u4E5F\u53EF\u4EE5\u5199\u6210<code>VALUE</code>\uFF0C\u4F46\u662FVALUES\u662F\u6807\u51C6\u5199\u6CD5\u3002</p></li><li><p>\u5B57\u7B26\u548C\u65E5\u671F\u578B\u6570\u636E\u5E94\u5305\u542B\u5728\u5355\u5F15\u53F7\u4E2D</p></li></ul><h3 id="\u65B9\u5F0F2-\u5C06\u67E5\u8BE2\u7ED3\u679C\u63D2\u5165\u5230\u8868\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F2-\u5C06\u67E5\u8BE2\u7ED3\u679C\u63D2\u5165\u5230\u8868\u4E2D" aria-hidden="true">#</a> \u65B9\u5F0F2\uFF1A\u5C06\u67E5\u8BE2\u7ED3\u679C\u63D2\u5165\u5230\u8868\u4E2D</h3><p>INSERT\u8FD8\u53EF\u4EE5\u5C06SELECT\u8BED\u53E5\u67E5\u8BE2\u7684\u7ED3\u679C\u63D2\u5165\u5230\u8868\u4E2D\uFF0C\u6B64\u65F6\u4E0D\u9700\u8981\u628A\u6BCF\u4E00\u6761\u8BB0\u5F55\u7684\u503C\u4E00\u4E2A\u4E00\u4E2A\u8F93\u5165\uFF0C\u53EA\u9700\u8981\u4F7F\u7528\u4E00\u6761INSERT\u8BED\u53E5\u548C\u4E00\u6761SELECT\u8BED\u53E5\u7EC4\u6210\u7684\u7EC4\u5408\u8BED\u53E5\u5373\u53EF\u5FEB\u901F\u5730\u4ECE\u4E00\u4E2A\u6216\u591A\u4E2A\u8868\u4E2D\u5411\u4E00\u4E2A\u8868\u4E2D\u63D2\u5165\u591A\u884C</p><p>\u57FA\u672C\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>INSERT INTO \u76EE\u6807\u8868\u540D
(tar_column1 [, tar_column2, \u2026, tar_columnn])
SELECT
(src_column1 [, src_column2, \u2026, src_columnn])
FROM \u6E90\u8868\u540D
[WHERE condition]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728 INSERT \u8BED\u53E5\u4E2D\u52A0\u5165\u5B50\u67E5\u8BE2\u3002</li><li><strong>\u4E0D\u5FC5\u4E66\u5199</strong> <strong>VALUES</strong> <strong>\u5B50\u53E5\u3002</strong></li><li>\u5B50\u67E5\u8BE2\u4E2D\u7684\u503C\u5217\u8868\u5E94\u4E0E INSERT \u5B50\u53E5\u4E2D\u7684\u5217\u540D\u5BF9\u5E94</li></ul><p>\u4E3E\u4F8B\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> emp2 
<span class="token keyword">SELECT</span> <span class="token operator">*</span> 
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token number">90</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> sales_reps<span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> salary<span class="token punctuation">,</span> commission_pct<span class="token punctuation">)</span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> salary<span class="token punctuation">,</span> commission_pct
<span class="token keyword">FROM</span>   employees
<span class="token keyword">WHERE</span>  job_id <span class="token operator">LIKE</span> <span class="token string">&#39;%REP%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u66F4\u65B0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a> \u66F4\u65B0\u6570\u636E</h2><ul><li>\u4F7F\u7528 UPDATE \u8BED\u53E5\u66F4\u65B0\u6570\u636E\u3002\u8BED\u6CD5\u5982\u4E0B\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>UPDATE table_name
SET column1=value1, column2=value2, \u2026 , column=valuen
[WHERE condition]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u53EF\u4EE5\u4E00\u6B21\u66F4\u65B0<strong>\u591A\u6761</strong>\u6570\u636E\u3002</p></li><li><p>\u5982\u679C\u9700\u8981\u56DE\u6EDA\u6570\u636E\uFF0C\u9700\u8981\u4FDD\u8BC1\u5728DML\u524D\uFF0C\u8FDB\u884C\u8BBE\u7F6E\uFF1A<strong>SET AUTOCOMMIT = FALSE;</strong></p></li></ul><hr><ul><li>\u4F7F\u7528 <strong>WHERE</strong> \u5B50\u53E5\u6307\u5B9A\u9700\u8981\u66F4\u65B0\u7684\u6570\u636E\u3002</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> employees
<span class="token keyword">SET</span>    department_id <span class="token operator">=</span> <span class="token number">70</span>
<span class="token keyword">WHERE</span>  employee_id <span class="token operator">=</span> <span class="token number">113</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5982\u679C\u7701\u7565 WHERE \u5B50\u53E5\uFF0C\u5219\u8868\u4E2D\u7684\u6240\u6709\u6570\u636E\u90FD\u5C06\u88AB\u66F4\u65B0\u3002</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> 	copy_emp
<span class="token keyword">SET</span>    	department_id <span class="token operator">=</span> <span class="token number">110</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u66F4\u65B0\u4E2D\u7684\u6570\u636E\u5B8C\u6574\u6027\u9519\u8BEF</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> employees
<span class="token keyword">SET</span>    department_id <span class="token operator">=</span> <span class="token number">55</span>
<span class="token keyword">WHERE</span>  department_id <span class="token operator">=</span> <span class="token number">110</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8BF4\u660E\uFF1A\u4E0D\u5B58\u5728 55 \u53F7\u90E8\u95E8</p></blockquote><h2 id="\u5220\u9664\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6570\u636E" aria-hidden="true">#</a> \u5220\u9664\u6570\u636E</h2><ul><li>\u4F7F\u7528 DELETE \u8BED\u53E5\u4ECE\u8868\u4E2D\u5220\u9664\u6570\u636E</li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>DELETE FROM table_name [WHERE &lt;condition&gt;];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>table_name\u6307\u5B9A\u8981\u6267\u884C\u5220\u9664\u64CD\u4F5C\u7684\u8868\uFF1B\u201C[WHERE <code>&lt;condition&gt;</code>]\u201D\u4E3A\u53EF\u9009\u53C2\u6570\uFF0C\u6307\u5B9A\u5220\u9664\u6761\u4EF6\uFF0C\u5982\u679C\u6CA1\u6709WHERE\u5B50\u53E5\uFF0CDELETE\u8BED\u53E5\u5C06\u5220\u9664\u8868\u4E2D\u7684\u6240\u6709\u8BB0\u5F55</p><ul><li><strong>\u5220\u9664\u4E2D\u7684\u6570\u636E\u5B8C\u6574\u6027\u9519\u8BEF</strong></li></ul><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>DELETE FROM departments
WHERE       department_id = 60;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8BF4\u660E\uFF1AYou cannot delete a row that contains a primary key that is used as a foreign key in another table.</p></blockquote>`,133),d=[i];function r(t,c){return l(),s("div",null,d)}var m=e(n,[["render",r],["__file","chapter6.html.vue"]]);export{m as default};