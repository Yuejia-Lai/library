import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,e as t}from"./app.ffa24d81.js";const p={},e=t(`<h2 id="\u62E6\u622A\u5668\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u62E6\u622A\u5668\u7684\u914D\u7F6E" aria-hidden="true">#</a> \u62E6\u622A\u5668\u7684\u914D\u7F6E</h2><p>SpringMVC\u4E2D\u7684\u62E6\u622A\u5668\u7528\u4E8E\u62E6\u622A\u63A7\u5236\u5668\u65B9\u6CD5\u7684\u6267\u884C</p><p>SpringMVC\u4E2D\u7684\u62E6\u622A\u5668\u9700\u8981\u5B9E\u73B0HandlerInterceptor</p><p>SpringMVC\u7684\u62E6\u622A\u5668\u5FC5\u987B\u5728SpringMVC\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u8FDB\u884C\u914D\u7F6E\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.atguigu.interceptor.FirstInterceptor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ref</span> <span class="token attr-name">bean</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>firstInterceptor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ref</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \u4EE5\u4E0A\u4E24\u79CD\u914D\u7F6E\u65B9\u5F0F\u90FD\u662F\u5BF9DispatcherServlet\u6240\u5904\u7406\u7684\u6240\u6709\u7684\u8BF7\u6C42\u8FDB\u884C\u62E6\u622A --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>interceptor</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>mapping</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/**<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>exclude-mapping</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/testRequestEntity<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ref</span> <span class="token attr-name">bean</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>firstInterceptor<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ref</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">mvc:</span>interceptor</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--
	\u4EE5\u4E0A\u914D\u7F6E\u65B9\u5F0F\u53EF\u4EE5\u901A\u8FC7ref\u6216bean\u6807\u7B7E\u8BBE\u7F6E\u62E6\u622A\u5668\uFF0C\u901A\u8FC7mvc:mapping\u8BBE\u7F6E\u9700\u8981\u62E6\u622A\u7684\u8BF7\u6C42\uFF0C\u901A\u8FC7mvc:exclude-mapping\u8BBE\u7F6E\u9700\u8981\u6392\u9664\u7684\u8BF7\u6C42\uFF0C\u5373\u4E0D\u9700\u8981\u62E6\u622A\u7684\u8BF7\u6C42
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u62E6\u622A\u5668\u7684\u4E09\u4E2A\u62BD\u8C61\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u62E6\u622A\u5668\u7684\u4E09\u4E2A\u62BD\u8C61\u65B9\u6CD5" aria-hidden="true">#</a> \u62E6\u622A\u5668\u7684\u4E09\u4E2A\u62BD\u8C61\u65B9\u6CD5</h2><p>SpringMVC\u4E2D\u7684\u62E6\u622A\u5668\u6709\u4E09\u4E2A\u62BD\u8C61\u65B9\u6CD5\uFF1A</p><p>preHandle\uFF1A\u63A7\u5236\u5668\u65B9\u6CD5\u6267\u884C\u4E4B\u524D\u6267\u884CpreHandle()\uFF0C\u5176boolean\u7C7B\u578B\u7684\u8FD4\u56DE\u503C\u8868\u793A\u662F\u5426\u62E6\u622A\u6216\u653E\u884C\uFF0C\u8FD4 \u56DEtrue\u4E3A\u653E\u884C\uFF0C\u5373\u8C03\u7528\u63A7\u5236\u5668\u65B9\u6CD5\uFF1B\u8FD4\u56DEfalse\u8868\u793A\u62E6\u622A\uFF0C\u5373\u4E0D\u8C03\u7528\u63A7\u5236\u5668\u65B9\u6CD5</p><p>postHandle\uFF1A\u63A7\u5236\u5668\u65B9\u6CD5\u6267\u884C\u4E4B\u540E\u6267\u884CpostHandle()</p><p>afterCompletion\uFF1A\u5904\u7406\u5B8C\u89C6\u56FE\u548C\u6A21\u578B\u6570\u636E\uFF0C\u6E32\u67D3\u89C6\u56FE\u5B8C\u6BD5\u4E4B\u540E\u6267\u884CafterCompletion()</p><h2 id="\u591A\u4E2A\u62E6\u622A\u5668\u7684\u6267\u884C\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u62E6\u622A\u5668\u7684\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a> \u591A\u4E2A\u62E6\u622A\u5668\u7684\u6267\u884C\u987A\u5E8F</h2><p>\u2460\u82E5\u6BCF\u4E2A\u62E6\u622A\u5668\u7684preHandle()\u90FD\u8FD4\u56DEtrue</p><p>\u6B64\u65F6\u591A\u4E2A\u62E6\u622A\u5668\u7684\u6267\u884C\u987A\u5E8F\u548C\u62E6\u622A\u5668\u5728SpringMVC\u7684\u914D\u7F6E\u6587\u4EF6\u7684\u914D\u7F6E\u987A\u5E8F\u6709\u5173\uFF1A</p><p>preHandle()\u4F1A\u6309\u7167\u914D\u7F6E\u7684\u987A\u5E8F\u6267\u884C\uFF0C\u800CpostHandle()\u548CafterCompletion()\u4F1A\u6309\u7167\u914D\u7F6E\u7684\u53CD\u5E8F\u6267\u884C</p><p>\u2461\u82E5\u67D0\u4E2A\u62E6\u622A\u5668\u7684preHandle()\u8FD4\u56DE\u4E86false</p><p>preHandle()\u8FD4\u56DEfalse\u548C\u5B83\u4E4B\u524D\u7684\u62E6\u622A\u5668\u7684preHandle()\u90FD\u4F1A\u6267\u884C\uFF0CpostHandle()\u90FD\u4E0D\u6267\u884C\uFF0C\u8FD4\u56DEfalse \u7684\u62E6\u622A\u5668\u4E4B\u524D\u7684\u62E6\u622A\u5668\u7684afterCompletion()\u4F1A\u6267\u884C</p><h1 id="\u5F02\u5E38\u5904\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u5904\u7406\u5668" aria-hidden="true">#</a> \u5F02\u5E38\u5904\u7406\u5668</h1><h2 id="\u57FA\u4E8E\u914D\u7F6E\u7684\u5F02\u5E38\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E\u914D\u7F6E\u7684\u5F02\u5E38\u5904\u7406" aria-hidden="true">#</a> \u57FA\u4E8E\u914D\u7F6E\u7684\u5F02\u5E38\u5904\u7406</h2><p>SpringMVC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5904\u7406\u63A7\u5236\u5668\u65B9\u6CD5\u6267\u884C\u8FC7\u7A0B\u4E2D\u6240\u51FA\u73B0\u7684\u5F02\u5E38\u7684\u63A5\u53E3\uFF1AHandlerExceptionResolver</p><p>HandlerExceptionResolver\u63A5\u53E3\u7684\u5B9E\u73B0\u7C7B\u6709\uFF1ADefaultHandlerExceptionResolver\u548C SimpleMappingExceptionResolver</p><p>SpringMVC\u63D0\u4F9B\u4E86\u81EA\u5B9A\u4E49\u7684\u5F02\u5E38\u5904\u7406\u5668SimpleMappingExceptionResolver\uFF0C\u4F7F\u7528\u65B9\u5F0F\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.springframework.web.servlet.handler.SimpleMappingExceptionResolver<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exceptionMappings<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>props</span><span class="token punctuation">&gt;</span></span>
			<span class="token comment">&lt;!--
				properties\u7684\u952E\u8868\u793A\u5904\u7406\u5668\u65B9\u6CD5\u6267\u884C\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u7684\u5F02\u5E38
				properties\u7684\u503C\u8868\u793A\u82E5\u51FA\u73B0\u6307\u5B9A\u5F02\u5E38\u65F6\uFF0C\u8BBE\u7F6E\u4E00\u4E2A\u65B0\u7684\u89C6\u56FE\u540D\u79F0\uFF0C\u8DF3\u8F6C\u5230\u6307\u5B9A\u9875\u9762
			--&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>prop</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.lang.ArithmeticException<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>prop</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>props</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!--
		exceptionAttribute\u5C5E\u6027\u8BBE\u7F6E\u4E00\u4E2A\u5C5E\u6027\u540D\uFF0C\u5C06\u51FA\u73B0\u7684\u5F02\u5E38\u4FE1\u606F\u5728\u8BF7\u6C42\u57DF\u4E2D\u8FDB\u884C\u5171\u4EAB
	--&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exceptionAttribute<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u57FA\u4E8E\u6CE8\u89E3\u7684\u5F02\u5E38\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E\u6CE8\u89E3\u7684\u5F02\u5E38\u5904\u7406" aria-hidden="true">#</a> \u57FA\u4E8E\u6CE8\u89E3\u7684\u5F02\u5E38\u5904\u7406</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//@ControllerAdvice\u5C06\u5F53\u524D\u7C7B\u6807\u8BC6\u4E3A\u5F02\u5E38\u5904\u7406\u7684\u7EC4\u4EF6</span>
<span class="token annotation punctuation">@ControllerAdvice</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExceptionController</span> <span class="token punctuation">{</span>

    <span class="token comment">//@ExceptionHandler\u7528\u4E8E\u8BBE\u7F6E\u6240\u6807\u8BC6\u65B9\u6CD5\u5904\u7406\u7684\u5F02\u5E38</span>
	<span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span><span class="token class-name">ArithmeticException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
	<span class="token comment">//ex\u8868\u793A\u5F53\u524D\u8BF7\u6C42\u5904\u7406\u4E2D\u51FA\u73B0\u7684\u5F02\u5E38\u5BF9\u8C61</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">handleArithmeticException</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">,</span> <span class="token class-name">Model</span> model<span class="token punctuation">)</span><span class="token punctuation">{</span>
		model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;ex&quot;</span><span class="token punctuation">,</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),c=[e];function o(l,i){return a(),s("div",null,c)}var k=n(p,[["render",o],["__file","chapter6.html.vue"]]);export{k as default};