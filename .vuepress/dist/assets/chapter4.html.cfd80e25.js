import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as p,a as n,b as s,d as c,e as o,r as l}from"./app.4ae789f9.js";const i={},u=o(`<h2 id="\u901A\u7528\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u679A\u4E3E" aria-hidden="true">#</a> \u901A\u7528\u679A\u4E3E</h2><blockquote><p>\u8868\u4E2D\u7684\u6709\u4E9B\u5B57\u6BB5\u503C\u662F\u56FA\u5B9A\u7684\uFF0C\u4F8B\u5982\u6027\u522B\uFF08\u7537\u6216\u5973\uFF09\uFF0C\u6B64\u65F6\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528MyBatis-Plus\u7684\u901A\u7528\u679A\u4E3E \u6765\u5B9E\u73B0</p></blockquote><h3 id="\u6570\u636E\u5E93\u8868\u6DFB\u52A0\u5B57\u6BB5sex" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u8868\u6DFB\u52A0\u5B57\u6BB5sex" aria-hidden="true">#</a> \u6570\u636E\u5E93\u8868\u6DFB\u52A0\u5B57\u6BB5sex</h3><h3 id="\u521B\u5EFA\u901A\u7528\u679A\u4E3E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u901A\u7528\u679A\u4E3E\u7C7B\u578B" aria-hidden="true">#</a> \u521B\u5EFA\u901A\u7528\u679A\u4E3E\u7C7B\u578B</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>mp<span class="token punctuation">.</span>enums</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">EnumValue</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Getter</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Getter</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">SexEnum</span> <span class="token punctuation">{</span>
	<span class="token function">MALE</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7537&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token function">FEMALE</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5973&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token annotation punctuation">@EnumValue</span>
	<span class="token keyword">private</span> <span class="token class-name">Integer</span> sex<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> sexName<span class="token punctuation">;</span>
	<span class="token class-name">SexEnum</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> sex<span class="token punctuation">,</span> <span class="token class-name">String</span> sexName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>sexName <span class="token operator">=</span> sexName<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u626B\u63CF\u901A\u7528\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u626B\u63CF\u901A\u7528\u679A\u4E3E" aria-hidden="true">#</a> \u914D\u7F6E\u626B\u63CF\u901A\u7528\u679A\u4E3E</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>mybatis-plus:
	configuration:
		# \u914D\u7F6EMyBatis\u65E5\u5FD7
		log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
	global-config:
		db-config:
			# \u914D\u7F6EMyBatis-Plus\u64CD\u4F5C\u8868\u7684\u9ED8\u8BA4\u524D\u7F00
			table-prefix: t_
			# \u914D\u7F6EMyBatis-Plus\u7684\u4E3B\u952E\u7B56\u7565
			id-type: auto
	# \u914D\u7F6E\u626B\u63CF\u901A\u7528\u679A\u4E3E
	type-enums-package: com.atguigu.mybatisplus.enums
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSexEnum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Enum&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//\u8BBE\u7F6E\u6027\u522B\u4FE1\u606F\u4E3A\u679A\u4E3E\u9879\uFF0C\u4F1A\u5C06@EnumValue\u6CE8\u89E3\u6240\u6807\u8BC6\u7684\u5C5E\u6027\u503C\u5B58\u50A8\u5230\u6570\u636E\u5E93</span>
	user<span class="token punctuation">.</span><span class="token function">setSex</span><span class="token punctuation">(</span><span class="token class-name">SexEnum</span><span class="token punctuation">.</span><span class="token constant">MALE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//INSERT INTO t_user ( username, age, sex ) VALUES ( ?, ?, ? )</span>
	<span class="token comment">//Parameters: Enum(String), 20(Integer), 1(Integer)</span>
	userMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EE3\u7801\u751F\u6210\u5668" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u751F\u6210\u5668" aria-hidden="true">#</a> \u4EE3\u7801\u751F\u6210\u5668</h2><h3 id="\u5F15\u5165\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u4F9D\u8D56" aria-hidden="true">#</a> \u5F15\u5165\u4F9D\u8D56</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-generator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.5.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.freemarker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>freemarker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.3.31<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5FEB\u901F\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u751F\u6210" aria-hidden="true">#</a> \u5FEB\u901F\u751F\u6210</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FastAutoGeneratorTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">FastAutoGenerator</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql://127.0.0.1:3306/mybatis_plus?characterEncoding=utf-8&amp;userSSL=false&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">globalConfig</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> <span class="token punctuation">{</span> builder<span class="token punctuation">.</span><span class="token function">author</span><span class="token punctuation">(</span><span class="token string">&quot;atguigu&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u7F6E\u4F5C\u8005</span>
		<span class="token comment">//.enableSwagger() // \u5F00\u542F swagger \u6A21\u5F0F</span>
		<span class="token punctuation">.</span><span class="token function">fileOverride</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u8986\u76D6\u5DF2\u751F\u6210\u6587\u4EF6</span>
		<span class="token punctuation">.</span><span class="token function">outputDir</span><span class="token punctuation">(</span><span class="token string">&quot;D://mybatis_plus&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6307\u5B9A\u8F93\u51FA\u76EE\u5F55</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">packageConfig</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
			builder<span class="token punctuation">.</span><span class="token function">parent</span><span class="token punctuation">(</span><span class="token string">&quot;com.atguigu&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u7F6E\u7236\u5305\u540D</span>
				<span class="token punctuation">.</span><span class="token function">moduleName</span><span class="token punctuation">(</span><span class="token string">&quot;mybatisplus&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u7F6E\u7236\u5305\u6A21\u5757\u540D</span>
		<span class="token punctuation">.</span><span class="token function">pathInfo</span><span class="token punctuation">(</span><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singletonMap</span><span class="token punctuation">(</span><span class="token class-name">OutputFile</span><span class="token punctuation">.</span>mapperXml<span class="token punctuation">,</span> <span class="token string">&quot;D://mybatis_plus&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u8BBE\u7F6EmapperXml\u751F\u6210\u8DEF\u5F84</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">strategyConfig</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
			builder<span class="token punctuation">.</span><span class="token function">addInclude</span><span class="token punctuation">(</span><span class="token string">&quot;t_user&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u7F6E\u9700\u8981\u751F\u6210\u7684\u8868\u540D</span>
			<span class="token punctuation">.</span><span class="token function">addTablePrefix</span><span class="token punctuation">(</span><span class="token string">&quot;t_&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8BBE\u7F6E\u8FC7\u6EE4\u8868\u524D\u7F00</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">templateEngine</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FreemarkerTemplateEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u4F7F\u7528Freemarker</span>
	\u5F15\u64CE\u6A21\u677F\uFF0C\u9ED8\u8BA4\u7684\u662F<span class="token class-name">Velocity</span>\u5F15\u64CE\u6A21\u677F
	<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u591A\u6570\u636E\u6E90" tabindex="-1"><a class="header-anchor" href="#\u591A\u6570\u636E\u6E90" aria-hidden="true">#</a> \u591A\u6570\u636E\u6E90</h2><blockquote><p>\u9002\u7528\u4E8E\u591A\u79CD\u573A\u666F\uFF1A\u7EAF\u7CB9\u591A\u5E93\u3001 \u8BFB\u5199\u5206\u79BB\u3001 \u4E00\u4E3B\u591A\u4ECE\u3001 \u6DF7\u5408\u6A21\u5F0F\u7B49</p><p>\u76EE\u524D\u6211\u4EEC\u5C31\u6765\u6A21\u62DF\u4E00\u4E2A\u7EAF\u7CB9\u591A\u5E93\u7684\u4E00\u4E2A\u573A\u666F\uFF0C\u5176\u4ED6\u573A\u666F\u7C7B\u4F3C</p><p>\u573A\u666F\u8BF4\u660E\uFF1A</p><p>\u6211\u4EEC\u521B\u5EFA\u4E24\u4E2A\u5E93\uFF0C\u5206\u522B\u4E3A\uFF1Amybatis_plus\uFF08\u4EE5\u524D\u7684\u5E93\u4E0D\u52A8\uFF09\u4E0Emybatis_plus_1\uFF08\u65B0\u5EFA\uFF09\uFF0C\u5C06 mybatis_plus\u5E93\u7684product\u8868\u79FB\u52A8\u5230mybatis_plus_1\u5E93\uFF0C\u8FD9\u6837\u6BCF\u4E2A\u5E93\u4E00\u5F20\u8868\uFF0C\u901A\u8FC7\u4E00\u4E2A\u6D4B\u8BD5\u7528\u4F8B\u5206\u522B\u83B7\u53D6\u7528\u6237\u6570\u636E\u4E0E\u5546\u54C1\u6570\u636E\uFF0C\u5982\u679C\u83B7\u53D6\u5230\u8BF4\u660E\u591A\u5E93\u6A21\u62DF\u6210\u529F</p></blockquote><h3 id="\u521B\u5EFA\u6570\u636E\u5E93\u53CA\u8868" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6570\u636E\u5E93\u53CA\u8868" aria-hidden="true">#</a> \u521B\u5EFA\u6570\u636E\u5E93\u53CA\u8868</h3><blockquote><p>\u521B\u5EFA\u6570\u636E\u5E93mybatis_plus_1\u548C\u8868product</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token identifier"><span class="token punctuation">\`</span>mybatis_plus_1<span class="token punctuation">\`</span></span> <span class="token comment">/*!40100 DEFAULT CHARACTER SET utf8mb4 */</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token identifier"><span class="token punctuation">\`</span>mybatis_plus_1<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> product
<span class="token punctuation">(</span>
id <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u4E3B\u952EID&#39;</span><span class="token punctuation">,</span>
name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u5546\u54C1\u540D\u79F0&#39;</span><span class="token punctuation">,</span>
price <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u4EF7\u683C&#39;</span><span class="token punctuation">,</span>
version <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u4E50\u89C2\u9501\u7248\u672C\u53F7&#39;</span><span class="token punctuation">,</span>
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6DFB\u52A0\u6D4B\u8BD5\u6570\u636E</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> product <span class="token punctuation">(</span>id<span class="token punctuation">,</span> NAME<span class="token punctuation">,</span> price<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5916\u661F\u4EBA\u7B14\u8BB0\u672C&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5220\u9664mybatis_plus\u5E93product\u8868</p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">use</span> mybatis_plus<span class="token punctuation">;</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> product<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F15\u5165\u4F9D\u8D56-1" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u4F9D\u8D56-1" aria-hidden="true">#</a> \u5F15\u5165\u4F9D\u8D56</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dynamic-datasource-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.5.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u591A\u6570\u636E\u6E90" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u591A\u6570\u636E\u6E90" aria-hidden="true">#</a> \u914D\u7F6E\u591A\u6570\u636E\u6E90</h3><blockquote><p>\u8BF4\u660E\uFF1A\u6CE8\u91CA\u6389\u4E4B\u524D\u7684\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u6DFB\u52A0\u65B0\u914D\u7F6E</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
	<span class="token comment"># \u914D\u7F6E\u6570\u636E\u6E90\u4FE1\u606F</span>
	<span class="token key atrule">datasource</span><span class="token punctuation">:</span>
		<span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
			<span class="token comment"># \u8BBE\u7F6E\u9ED8\u8BA4\u7684\u6570\u636E\u6E90\u6216\u8005\u6570\u636E\u6E90\u7EC4,\u9ED8\u8BA4\u503C\u5373\u4E3Amaster</span>
			<span class="token key atrule">primary</span><span class="token punctuation">:</span> master
			<span class="token comment"># \u4E25\u683C\u5339\u914D\u6570\u636E\u6E90,\u9ED8\u8BA4false.true\u672A\u5339\u914D\u5230\u6307\u5B9A\u6570\u636E\u6E90\u65F6\u629B\u5F02\u5E38,false\u4F7F\u7528\u9ED8\u8BA4\u6570\u636E\u6E90</span>
			<span class="token key atrule">strict</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
			<span class="token key atrule">datasource</span><span class="token punctuation">:</span>
				<span class="token key atrule">master</span><span class="token punctuation">:</span>
					<span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/mybatis_plus<span class="token punctuation">?</span>characterEncoding=utf<span class="token punctuation">-</span>8<span class="token important">&amp;useSSL=false</span>
					<span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
					<span class="token key atrule">username</span><span class="token punctuation">:</span> root
					<span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
				<span class="token key atrule">slave_1</span><span class="token punctuation">:</span>
					<span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/mybatis_plus_1<span class="token punctuation">?</span>characterEncoding=utf<span class="token punctuation">-</span>8<span class="token important">&amp;useSSL=false</span>
					<span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
					<span class="token key atrule">username</span><span class="token punctuation">:</span> root
					<span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u7528\u6237service" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7528\u6237service" aria-hidden="true">#</a> \u521B\u5EFA\u7528\u6237service</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token keyword">extends</span> <span class="token class-name">IService</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@DS</span><span class="token punctuation">(</span><span class="token string">&quot;master&quot;</span><span class="token punctuation">)</span> <span class="token comment">//\u6307\u5B9A\u6240\u64CD\u4F5C\u7684\u6570\u636E\u6E90</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserMapper</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span>
<span class="token class-name">UserService</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u5546\u54C1service" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5546\u54C1service" aria-hidden="true">#</a> \u521B\u5EFA\u5546\u54C1service</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ProductService</span> <span class="token keyword">extends</span> <span class="token class-name">IService</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Product</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@DS</span><span class="token punctuation">(</span><span class="token string">&quot;slave_1&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProductMapper</span><span class="token punctuation">,</span> <span class="token class-name">Product</span><span class="token punctuation">&gt;</span></span>
<span class="token keyword">implements</span> <span class="token class-name">ProductService</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6D4B\u8BD5-1" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5-1" aria-hidden="true">#</a> \u6D4B\u8BD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>
	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">ProductService</span> productService<span class="token punctuation">;</span>
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDynamicDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>userService<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>productService<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u7ED3\u679C\uFF1A</p><p>1\u3001\u90FD\u80FD\u987A\u5229\u83B7\u53D6\u5BF9\u8C61\uFF0C\u5219\u6D4B\u8BD5\u6210\u529F</p><p>2\u3001\u5982\u679C\u6211\u4EEC\u5B9E\u73B0\u8BFB\u5199\u5206\u79BB\uFF0C\u5C06\u5199\u64CD\u4F5C\u65B9\u6CD5\u52A0\u4E0A\u4E3B\u5E93\u6570\u636E\u6E90\uFF0C\u8BFB\u64CD\u4F5C\u65B9\u6CD5\u52A0\u4E0A\u4ECE\u5E93\u6570\u636E\u6E90\uFF0C\u81EA\u52A8\u5207\u6362\uFF0C\u662F\u4E0D\u662F\u5C31\u80FD\u5B9E\u73B0\u8BFB\u5199\u5206\u79BB\uFF1F</p></blockquote><h2 id="mybatisx\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#mybatisx\u63D2\u4EF6" aria-hidden="true">#</a> MyBatisX\u63D2\u4EF6</h2><blockquote><p>MyBatis-Plus\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684mapper\u548Cservice\u6A21\u677F\uFF0C\u80FD\u591F\u5927\u5927\u7684\u63D0\u9AD8\u5F00\u53D1\u6548\u7387</p><p>\u4F46\u662F\u5728\u771F\u6B63\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0CMyBatis-Plus\u5E76\u4E0D\u80FD\u4E3A\u6211\u4EEC\u89E3\u51B3\u6240\u6709\u95EE\u9898\uFF0C\u4F8B\u5982\u4E00\u4E9B\u590D\u6742\u7684SQL\uFF0C\u591A\u8868\u8054\u67E5\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u81EA\u5DF1\u53BB\u7F16\u5199\u4EE3\u7801\u548CSQL\u8BED\u53E5\uFF0C\u6211\u4EEC\u8BE5\u5982\u4F55\u5FEB\u901F\u7684\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5462\uFF0C\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528MyBatisX\u63D2\u4EF6</p><p>MyBatisX\u4E00\u6B3E\u57FA\u4E8E IDEA \u7684\u5FEB\u901F\u5F00\u53D1\u63D2\u4EF6\uFF0C\u4E3A\u6548\u7387\u800C\u751F</p></blockquote>`,39),k={href:"https://baomidou.com/pages/ba5b24/",target:"_blank",rel:"noopener noreferrer"};function r(d,m){const a=l("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[s("MyBatisX\u63D2\u4EF6\u7528\u6CD5\uFF1A"),n("a",k,[s("https://baomidou.com/pages/ba5b24/"),c(a)])])])}var g=t(i,[["render",r],["__file","chapter4.html.vue"]]);export{g as default};