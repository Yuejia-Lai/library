<template><div><p>使用配置类和注解代替web.xml和SpringMVC配置文件的功能</p>
<h2 id="创建初始化类-代替web-xml" tabindex="-1"><a class="header-anchor" href="#创建初始化类-代替web-xml" aria-hidden="true">#</a> 创建初始化类，代替web.xml</h2>
<p>在Servlet3.0环境中，容器会在类路径中查找实现javax.servlet.ServletContainerInitializer接口的类， 如果找到的话就用它来配置Servlet容器。</p>
<p>Spring提供了这个接口的实现，名为 SpringServletContainerInitializer，这个类反过来又会查找实现WebApplicationInitializer的类并将配置的任务交给它们来完成。</p>
<p>Spring3.2引入了一个便利的WebApplicationInitializer基础实现，名为 AbstractAnnotationConfigDispatcherServletInitializer，当我们的类扩展了 AbstractAnnotationConfigDispatcherServletInitializer并将其部署到Servlet3.0容器的时候，容器会自动发现它，并用它来配置Servlet上下文</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebInit</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractAnnotationConfigDispatcherServletInitializer</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
		* 指定spring的配置类
		* <span class="token keyword">@return</span>
	*/</span>

    <span class="token annotation punctuation">@Override</span>
	<span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getRootConfigClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">SpringConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
		* 指定SpringMVC的配置类
		* <span class="token keyword">@return</span>
	*/</span>

    <span class="token annotation punctuation">@Override</span>
	<span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletConfigClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">WebConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
		* 指定DispatcherServlet的映射规则，即url-pattern
		* <span class="token keyword">@return</span>
	*/</span>

    <span class="token annotation punctuation">@Override</span>
	<span class="token keyword">protected</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletMappings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"/"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
		* 添加过滤器
		* <span class="token keyword">@return</span>
	*/</span>

    <span class="token annotation punctuation">@Override</span>
	<span class="token keyword">protected</span> <span class="token class-name">Filter</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletFilters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">CharacterEncodingFilter</span> encodingFilter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CharacterEncodingFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		encodingFilter<span class="token punctuation">.</span><span class="token function">setEncoding</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		encodingFilter<span class="token punctuation">.</span><span class="token function">setForceRequestEncoding</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">HiddenHttpMethodFilter</span> hiddenHttpMethodFilter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HiddenHttpMethodFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Filter</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>encodingFilter<span class="token punctuation">,</span> hiddenHttpMethodFilter<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建springconfig配置类-代替spring的配置文件" tabindex="-1"><a class="header-anchor" href="#创建springconfig配置类-代替spring的配置文件" aria-hidden="true">#</a> 创建SpringConfig配置类，代替spring的配置文件</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringConfig</span> <span class="token punctuation">{</span>
	<span class="token comment">//ssm整合之后，spring的配置信息写在此类中</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建webconfig配置类-代替springmvc的配置文件" tabindex="-1"><a class="header-anchor" href="#创建webconfig配置类-代替springmvc的配置文件" aria-hidden="true">#</a> 创建WebConfig配置类，代替SpringMVC的配置文件</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token comment">//扫描组件</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">"com.atguigu.mvc.controller"</span><span class="token punctuation">)</span>
<span class="token comment">//开启MVC注解驱动</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

    <span class="token comment">//使用默认的servlet处理静态资源</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configureDefaultServletHandling</span><span class="token punctuation">(</span><span class="token class-name">DefaultServletHandlerConfigurer</span> configurer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		configurer<span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
    <span class="token comment">//配置文件上传解析器</span>
	<span class="token annotation punctuation">@Bean</span>
	<span class="token keyword">public</span> <span class="token class-name">CommonsMultipartResolver</span> <span class="token function">multipartResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonsMultipartResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token comment">//配置拦截器</span>
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">FirstInterceptor</span> firstInterceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FirstInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span>firstInterceptor<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">"/**"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token comment">//配置视图控制</span>
	<span class="token comment">/*@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("index");
	}*/</span>

    <span class="token comment">//配置异常映射</span>
	<span class="token comment">/*@Override
	public void configureHandlerExceptionResolvers(List&lt;HandlerExceptionResolver> resolvers) {
		SimpleMappingExceptionResolver exceptionResolver = new SimpleMappingExceptionResolver();
		Properties prop = new Properties();
		prop.setProperty("java.lang.ArithmeticException", "error");
		//设置异常映射
		exceptionResolver.setExceptionMappings(prop);
		//设置共享异常信息的键
		exceptionResolver.setExceptionAttribute("ex");
		resolvers.add(exceptionResolver);
	}*/</span>

    <span class="token comment">//配置生成模板解析器</span>
	<span class="token annotation punctuation">@Bean</span>
	<span class="token keyword">public</span> <span class="token class-name">ITemplateResolver</span> <span class="token function">templateResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">WebApplicationContext</span> webApplicationContext <span class="token operator">=</span>
		<span class="token class-name">ContextLoader</span><span class="token punctuation">.</span><span class="token function">getCurrentWebApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// ServletContextTemplateResolver需要一个ServletContext作为构造参数，可通过WebApplicationContext 的方法获得</span>
		<span class="token class-name">ServletContextTemplateResolver</span> templateResolver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletContextTemplateResolver</span><span class="token punctuation">(</span>
		webApplicationContext<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		templateResolver<span class="token punctuation">.</span><span class="token function">setPrefix</span><span class="token punctuation">(</span><span class="token string">"/WEB-INF/templates/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		templateResolver<span class="token punctuation">.</span><span class="token function">setSuffix</span><span class="token punctuation">(</span><span class="token string">".html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		templateResolver<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		templateResolver<span class="token punctuation">.</span><span class="token function">setTemplateMode</span><span class="token punctuation">(</span><span class="token class-name">TemplateMode</span><span class="token punctuation">.</span><span class="token constant">HTML</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> templateResolver<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token comment">//生成模板引擎并为模板引擎注入模板解析器</span>
	<span class="token annotation punctuation">@Bean</span>
	<span class="token keyword">public</span> <span class="token class-name">SpringTemplateEngine</span> <span class="token function">templateEngine</span><span class="token punctuation">(</span><span class="token class-name">ITemplateResolver</span>
		templateResolver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SpringTemplateEngine</span> templateEngine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpringTemplateEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		templateEngine<span class="token punctuation">.</span><span class="token function">setTemplateResolver</span><span class="token punctuation">(</span>templateResolver<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> templateEngine<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token comment">//生成视图解析器并未解析器注入模板引擎</span>
	<span class="token annotation punctuation">@Bean</span>
	<span class="token keyword">public</span> <span class="token class-name">ViewResolver</span> <span class="token function">viewResolver</span><span class="token punctuation">(</span><span class="token class-name">SpringTemplateEngine</span> templateEngine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ThymeleafViewResolver</span> viewResolver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThymeleafViewResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		viewResolver<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		viewResolver<span class="token punctuation">.</span><span class="token function">setTemplateEngine</span><span class="token punctuation">(</span>templateEngine<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> viewResolver<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试功能" tabindex="-1"><a class="header-anchor" href="#测试功能" aria-hidden="true">#</a> 测试功能</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string">"index"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="springmvc常用组件" tabindex="-1"><a class="header-anchor" href="#springmvc常用组件" aria-hidden="true">#</a> SpringMVC常用组件</h2>
<ul>
<li>DispatcherServlet：<strong>前端控制器</strong>，不需要工程师开发，由框架提供</li>
</ul>
<p>作用：统一处理请求和响应，整个流程控制的中心，由它调用其它组件处理用户的请求</p>
<ul>
<li>HandlerMapping：<strong>处理器映射器</strong>，不需要工程师开发，由框架提供</li>
</ul>
<p>作用：根据请求的url、method等信息查找Handler，即控制器方法</p>
<ul>
<li>Handler：<strong>处理器</strong>，需要工程师开发</li>
</ul>
<p>作用：在DispatcherServlet的控制下Handler对具体的用户请求进行处理</p>
<ul>
<li>HandlerAdapter：<strong>处理器适配器</strong>，不需要工程师开发，由框架提供</li>
</ul>
<p>作用：通过HandlerAdapter对处理器（控制器方法）进行执行</p>
<ul>
<li>ViewResolver：<strong>视图解析器</strong>，不需要工程师开发，由框架提供</li>
</ul>
<p>作用：进行视图解析，得到相应的视图，例如：ThymeleafView、InternalResourceView、 RedirectView</p>
<ul>
<li>View：<strong>视图</strong></li>
</ul>
<p>作用：将模型数据通过页面展示给用户</p>
<h2 id="dispatcherservlet初始化过程" tabindex="-1"><a class="header-anchor" href="#dispatcherservlet初始化过程" aria-hidden="true">#</a> DispatcherServlet初始化过程</h2>
<p>DispatcherServlet 本质上是一个 Servlet，所以天然的遵循 Servlet 的生命周期。所以宏观上是 Servlet 生命周期来进行调度</p>
<p><strong>①初始化WebApplicationContext</strong></p>
<p>所在类：org.springframework.web.servlet.FrameworkServlet</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">WebApplicationContext</span> <span class="token function">initWebApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">WebApplicationContext</span> rootContext <span class="token operator">=</span> <span class="token class-name">WebApplicationContextUtils</span><span class="token punctuation">.</span><span class="token function">getWebApplicationContext</span><span class="token punctuation">(</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">WebApplicationContext</span> wac <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>webApplicationContext <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// A context instance was injected at construction time -> use it</span>
		wac <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>webApplicationContext<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>wac <span class="token keyword">instanceof</span> <span class="token class-name">ConfigurableWebApplicationContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ConfigurableWebApplicationContext</span> cwac <span class="token operator">=</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableWebApplicationContext</span><span class="token punctuation">)</span> wac<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cwac<span class="token punctuation">.</span><span class="token function">isActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// The context has not yet been refreshed -> provide services such as</span>
		<span class="token comment">// setting the parent context, setting the application context id, etc</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>cwac<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// The context instance was injected without an explicit parent -> set</span>
		<span class="token comment">// the root application context (if any; may be null) as the parent</span>
		cwac<span class="token punctuation">.</span><span class="token function">setParent</span><span class="token punctuation">(</span>rootContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

        <span class="token function">configureAndRefreshWebApplicationContext</span><span class="token punctuation">(</span>cwac<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>wac <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// No context instance was injected at construction time -> see if one</span>
	<span class="token comment">// has been registered in the servlet context. If one exists, it is assumed</span>
	<span class="token comment">// that the parent context (if any) has already been set and that the</span>
	<span class="token comment">// user has performed any initialization such as setting the context id</span>
	wac <span class="token operator">=</span> <span class="token function">findWebApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>wac <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// No context instance is defined for this servlet -> create a local one</span>
	<span class="token comment">// 创建WebApplicationContext</span>
	wac <span class="token operator">=</span> <span class="token function">createWebApplicationContext</span><span class="token punctuation">(</span>rootContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>refreshEventReceived<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// Either the context is not a ConfigurableApplicationContext with refresh</span>
		<span class="token comment">// support or the context injected at construction time had already been</span>
		<span class="token comment">// refreshed -> trigger initial onRefresh manually here.</span>
		<span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>onRefreshMonitor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 刷新WebApplicationContext</span>
		<span class="token function">onRefresh</span><span class="token punctuation">(</span>wac<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>publishContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// Publish the context as a servlet context attribute.</span>
		<span class="token comment">// 将IOC容器在应用域共享</span>
		<span class="token class-name">String</span> attrName <span class="token operator">=</span> <span class="token function">getServletContextAttributeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>attrName<span class="token punctuation">,</span> wac<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> wac<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>②创建WebApplicationContext</strong></p>
<p>所在类：org.springframework.web.servlet.FrameworkServlet</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">WebApplicationContext</span> <span class="token function">createWebApplicationContext</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span>
<span class="token class-name">ApplicationContext</span> parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> contextClass <span class="token operator">=</span> <span class="token function">getContextClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">ConfigurableWebApplicationContext</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">isAssignableFrom</span><span class="token punctuation">(</span>contextClass<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ApplicationContextException</span><span class="token punctuation">(</span>
		<span class="token string">"Fatal initialization error in servlet with name '"</span> <span class="token operator">+</span> <span class="token function">getServletName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"': custom WebApplicationContext class ["</span> <span class="token operator">+</span> contextClass<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"] is not of type ConfigurableWebApplicationContext"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 通过反射创建 IOC 容器对象</span>
	<span class="token class-name">ConfigurableWebApplicationContext</span> wac <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ConfigurableWebApplicationContext</span><span class="token punctuation">)</span>
	<span class="token class-name">BeanUtils</span><span class="token punctuation">.</span><span class="token function">instantiateClass</span><span class="token punctuation">(</span>contextClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
	wac<span class="token punctuation">.</span><span class="token function">setEnvironment</span><span class="token punctuation">(</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 设置父容器</span>
	wac<span class="token punctuation">.</span><span class="token function">setParent</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span> configLocation <span class="token operator">=</span> <span class="token function">getContextConfigLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>configLocation <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		wac<span class="token punctuation">.</span><span class="token function">setConfigLocation</span><span class="token punctuation">(</span>configLocation<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">configureAndRefreshWebApplicationContext</span><span class="token punctuation">(</span>wac<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> wac<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>③DispatcherServlet初始化策略</strong></p>
<p>FrameworkServlet创建WebApplicationContext后，刷新容器，调用onRefresh(wac)，此方法在 DispatcherServlet中进行了重写，调用了initStrategies(context)方法，初始化策略，即初始化 DispatcherServlet的各个组件</p>
<p>所在类：org.springframework.web.servlet.DispatcherServlet</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">initStrategies</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">initMultipartResolver</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">initLocaleResolver</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">initThemeResolver</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">initHandlerMappings</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">initHandlerAdapters</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">initHandlerExceptionResolvers</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">initRequestToViewNameTranslator</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">initViewResolvers</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">initFlashMapManager</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dispatcherservlet调用组件处理请求" tabindex="-1"><a class="header-anchor" href="#dispatcherservlet调用组件处理请求" aria-hidden="true">#</a> DispatcherServlet调用组件处理请求</h2>
<p><strong>①processRequest()</strong></p>
<p>FrameworkServlet重写HttpServlet中的service()和doXxx()，这些方法中调用了 processRequest(request, response)</p>
<p>所在类：org.springframework.web.servlet.FrameworkServlet</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">processRequest</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span>
<span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
	<span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Throwable</span> failureCause <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token class-name">LocaleContext</span> previousLocaleContext <span class="token operator">=</span> <span class="token class-name">LocaleContextHolder</span><span class="token punctuation">.</span><span class="token function">getLocaleContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">LocaleContext</span> localeContext <span class="token operator">=</span> <span class="token function">buildLocaleContext</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">RequestAttributes</span> previousAttributes <span class="token operator">=</span> <span class="token class-name">RequestContextHolder</span><span class="token punctuation">.</span><span class="token function">getRequestAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">ServletRequestAttributes</span> requestAttributes <span class="token operator">=</span> <span class="token function">buildRequestAttributes</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> previousAttributes<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">WebAsyncManager</span> asyncManager <span class="token operator">=</span> <span class="token class-name">WebAsyncUtils</span><span class="token punctuation">.</span><span class="token function">getAsyncManager</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
	asyncManager<span class="token punctuation">.</span><span class="token function">registerCallableInterceptor</span><span class="token punctuation">(</span><span class="token class-name">FrameworkServlet</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">RequestBindingInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">initContextHolders</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> localeContext<span class="token punctuation">,</span> requestAttributes<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token comment">// 执行服务，doService()是一个抽象方法，在DispatcherServlet中进行了重写</span>
		<span class="token function">doService</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ServletException</span> <span class="token operator">|</span> <span class="token class-name">IOException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		failureCause <span class="token operator">=</span> ex<span class="token punctuation">;</span>
		<span class="token keyword">throw</span> ex<span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		failureCause <span class="token operator">=</span> ex<span class="token punctuation">;</span>
		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NestedServletException</span><span class="token punctuation">(</span><span class="token string">"Request processing failed"</span><span class="token punctuation">,</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
		<span class="token function">resetContextHolders</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> previousLocaleContext<span class="token punctuation">,</span> previousAttributes<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>requestAttributes <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	requestAttributes<span class="token punctuation">.</span><span class="token function">requestCompleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">logResult</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> failureCause<span class="token punctuation">,</span> asyncManager<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">publishRequestHandledEvent</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">,</span> startTime<span class="token punctuation">,</span> failureCause<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>②doService()</strong></p>
<p>所在类：org.springframework.web.servlet.DispatcherServlet</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doService</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
	<span class="token function">logRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// Keep a snapshot of the request attributes in case of an include,</span>
	<span class="token comment">// to be able to restore the original attributes after the include.</span>
	<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> attributesSnapshot <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">WebUtils</span><span class="token punctuation">.</span><span class="token function">isIncludeRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		attributesSnapshot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> attrNames <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getAttributeNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>attrNames<span class="token punctuation">.</span><span class="token function">hasMoreElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">String</span> attrName <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> attrNames<span class="token punctuation">.</span><span class="token function">nextElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cleanupAfterInclude <span class="token operator">||</span> attrName<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_STRATEGIES_PREFIX</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				attributesSnapshot<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>attrName<span class="token punctuation">,</span>
				request<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span>attrName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token comment">// Make framework objects available to handlers and view objects.</span>
	request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token constant">WEB_APPLICATION_CONTEXT_ATTRIBUTE</span><span class="token punctuation">,</span> <span class="token function">getWebApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token constant">LOCALE_RESOLVER_ATTRIBUTE</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>localeResolver<span class="token punctuation">)</span><span class="token punctuation">;</span>
	request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token constant">THEME_RESOLVER_ATTRIBUTE</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>themeResolver<span class="token punctuation">)</span><span class="token punctuation">;</span>
	request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token constant">THEME_SOURCE_ATTRIBUTE</span><span class="token punctuation">,</span> <span class="token function">getThemeSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>flashMapManager <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">FlashMap</span> inputFlashMap <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>flashMapManager<span class="token punctuation">.</span><span class="token function">retrieveAndUpdate</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>inputFlashMap <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token constant">INPUT_FLASH_MAP_ATTRIBUTE</span><span class="token punctuation">,</span>
		<span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">unmodifiableMap</span><span class="token punctuation">(</span>inputFlashMap<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
		request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token constant">OUTPUT_FLASH_MAP_ATTRIBUTE</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">FlashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token constant">FLASH_MAP_MANAGER_ATTRIBUTE</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>flashMapManager<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token class-name">RequestPath</span> requestPath <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>parseRequestPath <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token class-name">ServletRequestPathUtils</span><span class="token punctuation">.</span><span class="token function">hasParsedRequestPath</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		requestPath <span class="token operator">=</span> <span class="token class-name">ServletRequestPathUtils</span><span class="token punctuation">.</span><span class="token function">parseAndCache</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
	<span class="token comment">// 处理请求和响应</span>
		<span class="token function">doDispatch</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">finally</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">WebAsyncUtils</span><span class="token punctuation">.</span><span class="token function">getAsyncManager</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isConcurrentHandlingStarted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Restore the original attribute snapshot, in case of an include.</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>attributesSnapshot <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">restoreAttributesAfterInclude</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> attributesSnapshot<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>requestPath <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ServletRequestPathUtils</span><span class="token punctuation">.</span><span class="token function">clearParsedRequestPath</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>③doDispatch()</strong></p>
<p>所在类：org.springframework.web.servlet.DispatcherServlet</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doDispatch</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
	<span class="token class-name">HttpServletRequest</span> processedRequest <span class="token operator">=</span> request<span class="token punctuation">;</span>
	<span class="token class-name">HandlerExecutionChain</span> mappedHandler <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">boolean</span> multipartRequestParsed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token class-name">WebAsyncManager</span> asyncManager <span class="token operator">=</span> <span class="token class-name">WebAsyncUtils</span><span class="token punctuation">.</span><span class="token function">getAsyncManager</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token class-name">ModelAndView</span> mv <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token class-name">Exception</span> dispatchException <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			processedRequest <span class="token operator">=</span> <span class="token function">checkMultipart</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
			multipartRequestParsed <span class="token operator">=</span> <span class="token punctuation">(</span>processedRequest <span class="token operator">!=</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// Determine handler for the current request.</span>
			<span class="token comment">/*
				mappedHandler：调用链
				包含handler、interceptorList、interceptorIndex
				handler：浏览器发送的请求所匹配的控制器方法
				interceptorList：处理控制器方法的所有拦截器集合
				interceptorIndex：拦截器索引，控制拦截器afterCompletion()的执行
			*/</span>
			mappedHandler <span class="token operator">=</span> <span class="token function">getHandler</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>mappedHandler <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">noHandlerFound</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
            <span class="token comment">// Determine handler adapter for the current request.</span>
			<span class="token comment">// 通过控制器方法创建相应的处理器适配器，调用所对应的控制器方法</span>
			<span class="token class-name">HandlerAdapter</span> ha <span class="token operator">=</span> <span class="token function">getHandlerAdapter</span><span class="token punctuation">(</span>mappedHandler<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// Process last-modified header, if supported by the handler.</span>
			<span class="token class-name">String</span> method <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">boolean</span> isGet <span class="token operator">=</span> <span class="token string">"GET"</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>isGet <span class="token operator">||</span> <span class="token string">"HEAD"</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">long</span> lastModified <span class="token operator">=</span> ha<span class="token punctuation">.</span><span class="token function">getLastModified</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span>
				mappedHandler<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ServletWebRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">checkNotModified</span><span class="token punctuation">(</span>lastModified<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> isGet<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 调用拦截器的preHandle()</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>mappedHandler<span class="token punctuation">.</span><span class="token function">applyPreHandle</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
   	 	<span class="token comment">// Actually invoke the handler.</span>
		<span class="token comment">// 由处理器适配器调用具体的控制器方法，最终获得ModelAndView对象</span>
		mv <span class="token operator">=</span> ha<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">,</span>
		mappedHandler<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>asyncManager<span class="token punctuation">.</span><span class="token function">isConcurrentHandlingStarted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token function">applyDefaultViewName</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> mv<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 调用拦截器的postHandle()</span>
		mappedHandler<span class="token punctuation">.</span><span class="token function">applyPostHandle</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">,</span> mv<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		dispatchException <span class="token operator">=</span> ex<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// As of 4.3, we're processing Errors thrown from handler methods as well,</span>
			<span class="token comment">// making them available for @ExceptionHandler methods and other scenarios.</span>
		dispatchException <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NestedServletException</span><span class="token punctuation">(</span><span class="token string">"Handler dispatch failed"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token comment">// 后续处理：处理模型数据和渲染视图</span>
		<span class="token function">processDispatchResult</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">,</span> mappedHandler<span class="token punctuation">,</span> mv<span class="token punctuation">,</span> dispatchException<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">triggerAfterCompletion</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">,</span> mappedHandler<span class="token punctuation">,</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">triggerAfterCompletion</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">,</span> mappedHandler<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">NestedServletException</span><span class="token punctuation">(</span><span class="token string">"Handler processing failed"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>asyncManager<span class="token punctuation">.</span><span class="token function">isConcurrentHandlingStarted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// Instead of postHandle and afterCompletion</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>mappedHandler <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mappedHandler<span class="token punctuation">.</span><span class="token function">applyAfterConcurrentHandlingStarted</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>
	<span class="token comment">// Clean up any resources used by a multipart request.</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>multipartRequestParsed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">cleanupMultipart</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="springmvc的执行流程" tabindex="-1"><a class="header-anchor" href="#springmvc的执行流程" aria-hidden="true">#</a> SpringMVC的执行流程</h2>
<ul>
<li>
<p>用户向服务器发送请求，请求被SpringMVC 前端控制器 DispatcherServlet捕获。</p>
</li>
<li>
<p>DispatcherServlet对请求URL进行解析，得到请求资源标识符（URI），判断请求URI对应的映射：</p>
<ul>
<li>不存在
<ul>
<li>再判断是否配置了mvc:default-servlet-handler</li>
<li>如果没配置，则控制台报映射查找不到，客户端展示404错误</li>
<li>如果有配置，则访问目标资源（一般为静态资源，如：JS,CSS,HTML），找不到客户端也会展示404 错误</li>
</ul>
</li>
<li>存在则执行下面的流程</li>
</ul>
</li>
<li>
<p>根据该URI，调用HandlerMapping获得该Handler配置的所有相关的对象（包括Handler对象以及 Handler对象对应的拦截器），最后以HandlerExecutionChain执行链对象的形式返回</p>
</li>
<li>
<p>DispatcherServlet 根据获得的Handler，选择一个合适的HandlerAdapter</p>
</li>
<li>
<p>如果成功获得HandlerAdapter，此时将开始执行拦截器的preHandler(…)方法【正向】</p>
</li>
<li>
<p>提取Request中的模型数据，填充Handler入参，开始执行Handler（Controller)方法，处理请求。在填充Handler的入参过程中，根据你的配置，Spring将帮你做一些额外的工作：</p>
<ul>
<li>HttpMessageConveter： 将请求消息（如Json、xml等数据）转换成一个对象，将对象转换为指定的响应信息</li>
<li>数据转换：对请求消息进行数据转换。如String转换成Integer、Double等</li>
<li>数据格式化：对请求消息进行数据格式化。 如将字符串转换成格式化数字或格式化日期等</li>
<li>数据验证： 验证数据的有效性（长度、格式等），验证结果存储到BindingResult或Error中</li>
<li>Handler执行完成后，向DispatcherServlet 返回一个ModelAndView对象</li>
<li>此时将开始执行拦截器的postHandle(...)方法【逆向】</li>
<li>根据返回的ModelAndView（此时会判断是否存在异常：如果存在异常，则执行 HandlerExceptionResolver进行异常处理）选择一个适合的ViewResolver进行视图解析，根据Model 和View，来渲染视图</li>
<li>渲染视图完毕执行拦截器的afterCompletion(…)方法【逆向】</li>
<li>将渲染结果返回给客户端</li>
</ul>
</li>
</ul>
</div></template>
