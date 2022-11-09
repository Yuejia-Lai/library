import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,e as t}from"./app.d822cdf7.js";const p={},e=t(`<blockquote><p>Mybatis\u6846\u67B6\u7684\u52A8\u6001SQL\u6280\u672F\u662F\u4E00\u79CD\u6839\u636E\u7279\u5B9A\u6761\u4EF6\u52A8\u6001\u62FC\u88C5SQL\u8BED\u53E5\u7684\u529F\u80FD\uFF0C\u5B83\u5B58\u5728\u7684\u610F\u4E49\u662F\u4E3A\u4E86 \u89E3\u51B3 \u62FC\u63A5SQL\u8BED\u53E5\u5B57\u7B26\u4E32\u65F6\u7684\u75DB\u70B9\u95EE\u9898</p></blockquote><h2 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h2><blockquote><p>if\u6807\u7B7E\u53EF\u901A\u8FC7test\u5C5E\u6027\u7684\u8868\u8FBE\u5F0F\u8FDB\u884C\u5224\u65AD\uFF0C\u82E5\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u4E3Atrue\uFF0C\u5219\u6807\u7B7E\u4E2D\u7684\u5185\u5BB9\u4F1A\u6267\u884C\uFF1B\u53CD\u4E4B \u6807\u7B7E\u4E2D\u7684\u5185\u5BB9\u4E0D\u4F1A\u6267\u884C</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--List&lt;Emp&gt; getEmpListByCondition(Emp emp);--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getEmpListByMoreTJ<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Emp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select * from t_emp where 1=1
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ename != <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> and ename != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		and ename = #{ename}
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age != <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> and age != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		and age = #{age}
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex != <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> and sex != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		and sex = #{sex}
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="where" tabindex="-1"><a class="header-anchor" href="#where" aria-hidden="true">#</a> where</h2><blockquote><p>where\u548Cif\u4E00\u822C\u7ED3\u5408\u4F7F\u7528\uFF1A</p><p>a&gt;\u82E5where\u6807\u7B7E\u4E2D\u7684if\u6761\u4EF6\u90FD\u4E0D\u6EE1\u8DB3\uFF0C\u5219where\u6807\u7B7E\u6CA1\u6709\u4EFB\u4F55\u529F\u80FD\uFF0C\u5373\u4E0D\u4F1A\u6DFB\u52A0where\u5173\u952E\u5B57</p><p>b&gt;\u82E5where\u6807\u7B7E\u4E2D\u7684if\u6761\u4EF6\u6EE1\u8DB3\uFF0C\u5219where\u6807\u7B7E\u4F1A\u81EA\u52A8\u6DFB\u52A0where\u5173\u952E\u5B57\uFF0C\u5E76\u5C06\u6761\u4EF6\u6700\u524D\u65B9\u591A\u4F59\u7684 and\u53BB\u6389</p><p>\u6CE8\u610F\uFF1Awhere\u6807\u7B7E\u4E0D\u80FD\u53BB\u6389\u6761\u4EF6\u6700\u540E\u591A\u4F59\u7684and</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getEmpListByMoreTJ2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Emp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select * from t_emp
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>where</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ename != <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> and ename != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			ename = #{ename}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age != <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> and age != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			and age = #{age}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex != <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> and sex != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			and sex = #{sex}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>where</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trim" tabindex="-1"><a class="header-anchor" href="#trim" aria-hidden="true">#</a> trim</h2><blockquote><p>trim\u7528\u4E8E\u53BB\u6389\u6216\u6DFB\u52A0\u6807\u7B7E\u4E2D\u7684\u5185\u5BB9</p><p>\u5E38\u7528\u5C5E\u6027\uFF1A prefix\uFF1A\u5728trim\u6807\u7B7E\u4E2D\u7684\u5185\u5BB9\u7684\u524D\u9762\u6DFB\u52A0\u67D0\u4E9B\u5185\u5BB9</p><p>prefixOverrides\uFF1A\u5728trim\u6807\u7B7E\u4E2D\u7684\u5185\u5BB9\u7684\u524D\u9762\u53BB\u6389\u67D0\u4E9B\u5185\u5BB9</p><p>suffix\uFF1A\u5728trim\u6807\u7B7E\u4E2D\u7684\u5185\u5BB9\u7684\u540E\u9762\u6DFB\u52A0\u67D0\u4E9B\u5185\u5BB9</p><p>suffixOverrides\uFF1A\u5728trim\u6807\u7B7E\u4E2D\u7684\u5185\u5BB9\u7684\u540E\u9762\u53BB\u6389\u67D0\u4E9B\u5185\u5BB9</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getEmpListByMoreTJ<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Emp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select * from t_emp
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>trim</span> <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>where<span class="token punctuation">&quot;</span></span> <span class="token attr-name">suffixOverrides</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>and<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ename != <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> and ename != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        	ename = #{ename} and
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age != <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> and age != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			age = #{age} and
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex != <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> and sex != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			sex = #{sex}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>trim</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="choose\u3001when\u3001otherwise" tabindex="-1"><a class="header-anchor" href="#choose\u3001when\u3001otherwise" aria-hidden="true">#</a> choose\u3001when\u3001otherwise</h2><blockquote><p>choose\u3001when\u3001 otherwise\u76F8\u5F53\u4E8Eif...else if..else</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--List&lt;Emp&gt; getEmpListByChoose(Emp emp);--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getEmpListByChoose<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Emp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">refid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empColumns<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span> from t_emp
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>where</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>choose</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ename != <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> and ename != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				ename = #{ename}
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age != <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> and age != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				age = #{age}
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sex != <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> and sex != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				sex = #{sex}
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email != <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> and email != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				email = #{email}
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>choose</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>where</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> foreach</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--int insertMoreEmp(List&lt;Emp&gt; emps);--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>insertMoreEmp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	insert into t_emp values
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>emps<span class="token punctuation">&quot;</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>emp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>,<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		(null,#{emp.ename},#{emp.age},#{emp.sex},#{emp.email},null)
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--int deleteMoreByArray(int[] eids);--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deleteMoreByArray<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	delete from t_emp where
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>eids<span class="token punctuation">&quot;</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>eid<span class="token punctuation">&quot;</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>or<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		eid = #{eid}
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>delete</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--int deleteMoreByArray(int[] eids);--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deleteMoreByArray<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	delete from t_emp where eid in
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>eids<span class="token punctuation">&quot;</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>eid<span class="token punctuation">&quot;</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>,<span class="token punctuation">&quot;</span></span> <span class="token attr-name">open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(<span class="token punctuation">&quot;</span></span> <span class="token attr-name">close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        #{eid}
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>delete</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#sql\u7247\u6BB5" aria-hidden="true">#</a> SQL\u7247\u6BB5</h2><blockquote><p>sql\u7247\u6BB5\uFF0C\u53EF\u4EE5\u8BB0\u5F55\u4E00\u6BB5\u516C\u5171sql\u7247\u6BB5\uFF0C\u5728\u4F7F\u7528\u7684\u5730\u65B9\u901A\u8FC7include\u6807\u7B7E\u8FDB\u884C\u5F15\u5165</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sql</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empColumns<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	eid,ename,age,sex,did
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sql</span><span class="token punctuation">&gt;</span></span>
select <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">refid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>empColumns<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span> from t_emp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[e];function o(c,u){return a(),s("div",null,l)}var r=n(p,[["render",o],["__file","chapter7.html.vue"]]);export{r as default};
