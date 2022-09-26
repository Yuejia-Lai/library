<template><div><h2 id="使用servletapi向request域对象共享数据" tabindex="-1"><a class="header-anchor" href="#使用servletapi向request域对象共享数据" aria-hidden="true">#</a> 使用ServletAPI向request域对象共享数据</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/testServletAPI"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">testServletAPI</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span><span class="token punctuation">{</span>
	request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"testScope"</span><span class="token punctuation">,</span> <span class="token string">"hello,servletAPI"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token string">"success"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用modelandview向request域对象共享数据" tabindex="-1"><a class="header-anchor" href="#使用modelandview向request域对象共享数据" aria-hidden="true">#</a> 使用ModelAndView向request域对象共享数据</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/testModelAndView"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">testModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token doc-comment comment">/**
		* ModelAndView有Model和View的功能
		* Model主要用于向请求域共享数据
		* View主要用于设置视图，实现页面跳转
	*/</span>
	<span class="token class-name">ModelAndView</span> mav <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModelAndView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//向请求域共享数据</span>
	mav<span class="token punctuation">.</span><span class="token function">addObject</span><span class="token punctuation">(</span><span class="token string">"testScope"</span><span class="token punctuation">,</span> <span class="token string">"hello,ModelAndView"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//设置视图，实现页面跳转</span>
	mav<span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">"success"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> mav<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用model向request域对象共享数据" tabindex="-1"><a class="header-anchor" href="#使用model向request域对象共享数据" aria-hidden="true">#</a> 使用Model向request域对象共享数据</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/testModel"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">testModel</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span><span class="token punctuation">{</span>
	model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"testScope"</span><span class="token punctuation">,</span> <span class="token string">"hello,Model"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token string">"success"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用map向request域对象共享数据" tabindex="-1"><a class="header-anchor" href="#使用map向request域对象共享数据" aria-hidden="true">#</a> 使用map向request域对象共享数据</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/testMap"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">testMap</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> map<span class="token punctuation">)</span><span class="token punctuation">{</span>
	map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"testScope"</span><span class="token punctuation">,</span> <span class="token string">"hello,Map"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token string">"success"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用modelmap向request域对象共享数据" tabindex="-1"><a class="header-anchor" href="#使用modelmap向request域对象共享数据" aria-hidden="true">#</a> 使用ModelMap向request域对象共享数据</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/testModelMap"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">testModelMap</span><span class="token punctuation">(</span><span class="token class-name">ModelMap</span> modelMap<span class="token punctuation">)</span><span class="token punctuation">{</span>
	modelMap<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"testScope"</span><span class="token punctuation">,</span> <span class="token string">"hello,ModelMap"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token string">"success"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="model、modelmap、map的关系" tabindex="-1"><a class="header-anchor" href="#model、modelmap、map的关系" aria-hidden="true">#</a> Model、ModelMap、Map的关系</h2>
<p>Model、ModelMap、Map类型的参数其实本质上都是 BindingAwareModelMap 类型的</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Model</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ModelMap</span> <span class="token keyword">extends</span> <span class="token class-name">LinkedHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExtendedModelMap</span> <span class="token keyword">extends</span> <span class="token class-name">ModelMap</span> <span class="token keyword">implements</span> <span class="token class-name">Model</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BindingAwareModelMap</span> <span class="token keyword">extends</span> <span class="token class-name">ExtendedModelMap</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="向session域共享数据" tabindex="-1"><a class="header-anchor" href="#向session域共享数据" aria-hidden="true">#</a> 向session域共享数据</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/testSession"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">testSession</span><span class="token punctuation">(</span><span class="token class-name">HttpSession</span> session<span class="token punctuation">)</span><span class="token punctuation">{</span>
	session<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"testSessionScope"</span><span class="token punctuation">,</span> <span class="token string">"hello,session"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token string">"success"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="向application域共享数据" tabindex="-1"><a class="header-anchor" href="#向application域共享数据" aria-hidden="true">#</a> 向application域共享数据</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/testApplication"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">testApplication</span><span class="token punctuation">(</span><span class="token class-name">HttpSession</span> session<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">ServletContext</span> application <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	application<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">"testApplicationScope"</span><span class="token punctuation">,</span> <span class="token string">"hello,application"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token string">"success"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h1 id="springmvc的视图" tabindex="-1"><a class="header-anchor" href="#springmvc的视图" aria-hidden="true">#</a> SpringMVC的视图</h1>
<p>SpringMVC中的视图是View接口，视图的作用渲染数据，将模型Model中的数据展示给用户</p>
<p>SpringMVC视图的种类很多，默认有转发视图和重定向视图</p>
<p>当工程引入jstl的依赖，转发视图会自动转换为JstlView</p>
<p>若使用的视图技术为Thymeleaf，在SpringMVC的配置文件中配置了Thymeleaf的视图解析器，由此视图解析器解析之后所得到的是ThymeleafView</p>
<h2 id="thymeleafview" tabindex="-1"><a class="header-anchor" href="#thymeleafview" aria-hidden="true">#</a> ThymeleafView</h2>
<p>当控制器方法中所设置的视图名称没有任何前缀时，此时的视图名称会被SpringMVC配置文件中所配置 的视图解析器解析，视图名称拼接视图前缀和视图</p>
<p>后缀所得到的最终路径，会通过转发的方式实现跳转</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/testHello"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">testHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="转发视图" tabindex="-1"><a class="header-anchor" href="#转发视图" aria-hidden="true">#</a> 转发视图</h2>
<p>SpringMVC中默认的转发视图是InternalResourceView</p>
<p>SpringMVC中创建转发视图的情况： 当控制器方法中所设置的视图名称以&quot;forward:&quot;为前缀时，创建InternalResourceView视图，此时的视图名称不会被SpringMVC配置文件中所配置的视图解析器解析，而是会将前缀&quot;forward:&quot;去掉，剩余部 分作为最终路径通过转发的方式实现跳转</p>
<p>例如&quot;forward:/&quot;，&quot;forward:/employee&quot;</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/testForward"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">testForward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string">"forward:/testHello"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重定向视图" tabindex="-1"><a class="header-anchor" href="#重定向视图" aria-hidden="true">#</a> 重定向视图</h2>
<p>SpringMVC中默认的重定向视图是RedirectView</p>
<p>当控制器方法中所设置的视图名称以&quot;redirect:&quot;为前缀时，创建RedirectView视图，此时的视图名称不会被SpringMVC配置文件中所配置的视图解析器解析，而是会将前缀&quot;redirect:&quot;去掉，剩余部分作为最终路径通过重定向的方式实现跳转</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/testRedirect"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">testRedirect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string">"redirect:/testHello"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注： 重定向视图在解析时，会先将redirect:前缀去掉，然后会判断剩余部分是否以/开头，若是则会自 动拼接上下文路径</p>
</blockquote>
<h2 id="视图控制器view-controller" tabindex="-1"><a class="header-anchor" href="#视图控制器view-controller" aria-hidden="true">#</a> 视图控制器view-controller</h2>
<p>当控制器方法中，仅仅用来实现页面跳转，即只需要设置视图名称时，可以将处理器方法使用viewcontroller标签进行表示</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--
	path：设置处理的请求地址
	view-name：设置请求地址所对应的视图名称
--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>view-controller</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/testView<span class="token punctuation">"</span></span> <span class="token attr-name">view-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>view-controller</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注： 当SpringMVC中设置任何一个view-controller时，其他控制器中的请求映射将全部失效，此时需 要在SpringMVC的核心配置文件中设置开启mvc注解驱动的标签：<code v-pre>&lt;mvc:annotation-driven /&gt;</code></p>
</blockquote>
</div></template>
