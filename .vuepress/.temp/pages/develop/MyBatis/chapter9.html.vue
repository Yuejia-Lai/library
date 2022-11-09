<template><div><p><img src="https://s2.loli.net/2022/09/20/BvmgWTqQyLonU6z.png" alt="Snipaste_2022-09-20_18-16-27.png" loading="lazy"></p>
<h2 id="分页插件的使用步骤" tabindex="-1"><a class="header-anchor" href="#分页插件的使用步骤" aria-hidden="true">#</a> 分页插件的使用步骤</h2>
<p><strong>①添加依赖</strong></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.github.pagehelper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>pagehelper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>②配置分页插件</strong></p>
<p>在MyBatis的核心配置文件中配置插件</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--设置分页插件--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span> <span class="token attr-name">interceptor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.github.pagehelper.PageInterceptor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分页插件的使用" tabindex="-1"><a class="header-anchor" href="#分页插件的使用" aria-hidden="true">#</a> 分页插件的使用</h2>
<ul>
<li>在查询功能之前使用PageHelper.startPage(int pageNum, int pageSize)开启分页功能</li>
</ul>
<blockquote>
<p>pageNum：当前页的页码</p>
<p>pageSize：每页显示的条数</p>
</blockquote>
<ul>
<li>在查询获取list集合之后，使用PageInfo pageInfo = new PageInfo&lt;&gt;(List list, int navigatePages)获取分页相关数据</li>
</ul>
<blockquote>
<p>list：分页之后的数据</p>
<p>navigatePages：导航分页的页码数</p>
</blockquote>
<ul>
<li>分页相关数据</li>
</ul>
<blockquote>
<p>PageInfo{</p>
<p>pageNum=8, pageSize=4, size=2, startRow=29, endRow=30, total=30, pages=8,</p>
<p>list=Page{count=true, pageNum=8, pageSize=4, startRow=28, endRow=32, total=30,</p>
<p>pages=8, reasonable=false, pageSizeZero=false},</p>
<p>prePage=7, nextPage=0, isFirstPage=false, isLastPage=true, hasPreviousPage=true,</p>
<p>hasNextPage=false, navigatePages=5, navigateFirstPage4, navigateLastPage8,</p>
<p>navigatepageNums=[4, 5, 6, 7, 8]</p>
<p>}</p>
<p>pageNum：当前页的页码</p>
<p>pageSize：每页显示的条数</p>
<p>size：当前页显示的真实条数</p>
<p>total：总记录数</p>
<p>pages：总页数</p>
<p>prePage：上一页的页码</p>
<p>nextPage：下一页的页码</p>
<p>isFirstPage/isLastPage：是否为第一页/最后一页</p>
<p>hasPreviousPage/hasNextPage：是否存在上一页/下一页</p>
<p>navigatePages：导航分页的页码数</p>
<p>navigatepageNums：导航分页的页码，[1,2,3,4,5]</p>
</blockquote>
</div></template>
