<template><div><h2 id="拦截器的配置" tabindex="-1"><a class="header-anchor" href="#拦截器的配置" aria-hidden="true">#</a> 拦截器的配置</h2>
<p>SpringMVC中的拦截器用于拦截控制器方法的执行</p>
<p>SpringMVC中的拦截器需要实现HandlerInterceptor</p>
<p>SpringMVC的拦截器必须在SpringMVC的配置文件中进行配置：</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.atguigu.interceptor.FirstInterceptor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ref</span> <span class="token attr-name">bean</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>firstInterceptor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ref</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 以上两种配置方式都是对DispatcherServlet所处理的所有的请求进行拦截 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>interceptor</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>mapping</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/**<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>exclude-mapping</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/testRequestEntity<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ref</span> <span class="token attr-name">bean</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>firstInterceptor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ref</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>interceptor</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--
	以上配置方式可以通过ref或bean标签设置拦截器，通过mvc:mapping设置需要拦截的请求，通过mvc:exclude-mapping设置需要排除的请求，即不需要拦截的请求
--></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拦截器的三个抽象方法" tabindex="-1"><a class="header-anchor" href="#拦截器的三个抽象方法" aria-hidden="true">#</a> 拦截器的三个抽象方法</h2>
<p>SpringMVC中的拦截器有三个抽象方法：</p>
<p>preHandle：控制器方法执行之前执行preHandle()，其boolean类型的返回值表示是否拦截或放行，返 回true为放行，即调用控制器方法；返回false表示拦截，即不调用控制器方法</p>
<p>postHandle：控制器方法执行之后执行postHandle()</p>
<p>afterCompletion：处理完视图和模型数据，渲染视图完毕之后执行afterCompletion()</p>
<h2 id="多个拦截器的执行顺序" tabindex="-1"><a class="header-anchor" href="#多个拦截器的执行顺序" aria-hidden="true">#</a> 多个拦截器的执行顺序</h2>
<p>①若每个拦截器的preHandle()都返回true</p>
<p>此时多个拦截器的执行顺序和拦截器在SpringMVC的配置文件的配置顺序有关：</p>
<p>preHandle()会按照配置的顺序执行，而postHandle()和afterCompletion()会按照配置的反序执行</p>
<p>②若某个拦截器的preHandle()返回了false</p>
<p>preHandle()返回false和它之前的拦截器的preHandle()都会执行，postHandle()都不执行，返回false 的拦截器之前的拦截器的afterCompletion()会执行</p>
<h1 id="异常处理器" tabindex="-1"><a class="header-anchor" href="#异常处理器" aria-hidden="true">#</a> 异常处理器</h1>
<h2 id="基于配置的异常处理" tabindex="-1"><a class="header-anchor" href="#基于配置的异常处理" aria-hidden="true">#</a> 基于配置的异常处理</h2>
<p>SpringMVC提供了一个处理控制器方法执行过程中所出现的异常的接口：HandlerExceptionResolver</p>
<p>HandlerExceptionResolver接口的实现类有：DefaultHandlerExceptionResolver和 SimpleMappingExceptionResolver</p>
<p>SpringMVC提供了自定义的异常处理器SimpleMappingExceptionResolver，使用方式：</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.springframework.web.servlet.handler.SimpleMappingExceptionResolver<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>exceptionMappings<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>props</span><span class="token punctuation">></span></span>
			<span class="token comment">&lt;!--
				properties的键表示处理器方法执行过程中出现的异常
				properties的值表示若出现指定异常时，设置一个新的视图名称，跳转到指定页面
			--></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>prop</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>java.lang.ArithmeticException<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>prop</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>props</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--
		exceptionAttribute属性设置一个属性名，将出现的异常信息在请求域中进行共享
	--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>exceptionAttribute<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于注解的异常处理" tabindex="-1"><a class="header-anchor" href="#基于注解的异常处理" aria-hidden="true">#</a> 基于注解的异常处理</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//@ControllerAdvice将当前类标识为异常处理的组件</span>
<span class="token annotation punctuation">@ControllerAdvice</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExceptionController</span> <span class="token punctuation">{</span>

    <span class="token comment">//@ExceptionHandler用于设置所标识方法处理的异常</span>
	<span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span><span class="token class-name">ArithmeticException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
	<span class="token comment">//ex表示当前请求处理中出现的异常对象</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">handleArithmeticException</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">,</span> <span class="token class-name">Model</span> model<span class="token punctuation">)</span><span class="token punctuation">{</span>
		model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"ex"</span><span class="token punctuation">,</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token string">"error"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
