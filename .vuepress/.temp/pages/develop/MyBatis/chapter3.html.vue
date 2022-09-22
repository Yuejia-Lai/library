<template><div><h2 id="新增" tabindex="-1"><a class="header-anchor" href="#新增" aria-hidden="true">#</a> 新增</h2>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--int insertUser();--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>insertUser<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	insert into t_user values(null,'admin','123456',23,'男')
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h2>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--int deleteUser();--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>deleteUser<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	delete from t_user where id = 7
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>delete</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h2>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--int updateUser();--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateUser<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	update t_user set username='ybc',password='123' where id = 6
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询一个实体类对象" tabindex="-1"><a class="header-anchor" href="#查询一个实体类对象" aria-hidden="true">#</a> 查询一个实体类对象</h2>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--User getUserById();--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getUserById<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.atguigu.mybatis.bean.User<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	select * from t_user where id = 2
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询list集合" tabindex="-1"><a class="header-anchor" href="#查询list集合" aria-hidden="true">#</a> 查询list集合</h2>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--List&lt;User> getUserList();--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getUserList<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.atguigu.mybatis.bean.User<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	select * from t_user
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：</p>
<p>1、查询的标签select必须设置属性resultType或resultMap，用于设置实体类和数据库表的映射 关系</p>
<p>resultType：自动映射，用于属性名和表中字段名一致的情况</p>
<p>resultMap：自定义映射，用于一对多或多对一或字段名和属性名不一致的情况</p>
</blockquote>
</div></template>
