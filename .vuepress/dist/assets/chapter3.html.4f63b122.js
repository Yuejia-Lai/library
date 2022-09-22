import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as n,e as t}from"./app.7d0f78ef.js";const e={},l=t(`<h2 id="\u65B0\u589E" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E" aria-hidden="true">#</a> \u65B0\u589E</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--int insertUser();--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>insertUser<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	insert into t_user values(null,&#39;admin&#39;,&#39;123456&#39;,23,&#39;\u7537&#39;)
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--int deleteUser();--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deleteUser<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	delete from t_user where id = 7
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>delete</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539" aria-hidden="true">#</a> \u4FEE\u6539</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--int updateUser();--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateUser<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	update t_user set username=&#39;ybc&#39;,password=&#39;123&#39; where id = 6
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u8BE2\u4E00\u4E2A\u5B9E\u4F53\u7C7B\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u4E00\u4E2A\u5B9E\u4F53\u7C7B\u5BF9\u8C61" aria-hidden="true">#</a> \u67E5\u8BE2\u4E00\u4E2A\u5B9E\u4F53\u7C7B\u5BF9\u8C61</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--User getUserById();--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserById<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.atguigu.mybatis.bean.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select * from t_user where id = 2
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u8BE2list\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2list\u96C6\u5408" aria-hidden="true">#</a> \u67E5\u8BE2list\u96C6\u5408</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--List&lt;User&gt; getUserList();--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.atguigu.mybatis.bean.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	select * from t_user
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\uFF1A</p><p>1\u3001\u67E5\u8BE2\u7684\u6807\u7B7Eselect\u5FC5\u987B\u8BBE\u7F6E\u5C5E\u6027resultType\u6216resultMap\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u5B9E\u4F53\u7C7B\u548C\u6570\u636E\u5E93\u8868\u7684\u6620\u5C04 \u5173\u7CFB</p><p>resultType\uFF1A\u81EA\u52A8\u6620\u5C04\uFF0C\u7528\u4E8E\u5C5E\u6027\u540D\u548C\u8868\u4E2D\u5B57\u6BB5\u540D\u4E00\u81F4\u7684\u60C5\u51B5</p><p>resultMap\uFF1A\u81EA\u5B9A\u4E49\u6620\u5C04\uFF0C\u7528\u4E8E\u4E00\u5BF9\u591A\u6216\u591A\u5BF9\u4E00\u6216\u5B57\u6BB5\u540D\u548C\u5C5E\u6027\u540D\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5</p></blockquote>`,11),p=[l];function c(i,u){return a(),n("div",null,p)}var d=s(e,[["render",c],["__file","chapter3.html.vue"]]);export{d as default};
