<template><div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>本文介绍了SpringMVC，方便以后查阅。</p>
</div>
<p>SpringMVC是隶属于Spring框架的一部分，主要是用来进行Web开发，是对Servlet进行了封装</p>
<p>主要学习如下内容:</p>
<ul>
<li>SpringMVC简介</li>
<li>请求与响应</li>
<li>REST风格</li>
<li>SSM整合(注解版)</li>
<li>拦截器</li>
</ul>
<p>SpringMVC是处于Web层的框架，所以其主要的作用就是用来接收前端发过来的请求和数据然后经过处理并将处理的结果响应给前端</p>
<p>REST是一种软件架构风格，可以降低开发的复杂性，提高系统的可伸缩性，后期的应用也是非常广泛</p>
<p>SSM整合是把学习的SpringMVC+Spring+Mybatis整合在一起来完成业务开发</p>
<h2 id="springmvc概述" tabindex="-1"><a class="header-anchor" href="#springmvc概述" aria-hidden="true">#</a> SpringMVC概述</h2>
<p>将后端服务器Servlet拆分成三层，分别是<code v-pre>web</code>、<code v-pre>service</code>和<code v-pre>dao</code></p>
<ul>
<li>web层主要由servlet来处理，负责页面请求和数据的收集以及响应结果给前端</li>
<li>service层主要负责业务逻辑的处理</li>
<li>dao层主要负责数据的增删改查操作</li>
</ul>
<p>针对web层进行了优化，采用了MVC设计模式，将其设计为<code v-pre>controller</code>、<code v-pre>view</code>和<code v-pre>Model</code></p>
<ul>
<li>controller负责请求和数据的接收，接收后将其转发给service进行业务处理</li>
<li>service根据需要会调用dao对数据进行增删改查</li>
<li>dao把数据处理完后将结果交给service,service再交给controller</li>
<li>controller根据需求组装成Model和View,Model和View组合起来生成页面转发给前端浏览器</li>
<li>这样做的好处就是controller可以处理多个请求，并对请求进行分发，执行不同的业务操作</li>
</ul>
<p>因为异步调用，所以后端不需要返回view视图，将其去除</p>
<p>前端如果通过异步调用的方式进行交互，后台就需要将返回的数据转换成json格式进行返回</p>
<p>SpringMVC主要负责的就是</p>
<ul>
<li>controller如何接收请求和数据</li>
<li>如何将请求和数据转发给业务层</li>
<li>如何将响应数据转换成json发回到前端</li>
</ul>
<h2 id="springmvc入门案例" tabindex="-1"><a class="header-anchor" href="#springmvc入门案例" aria-hidden="true">#</a> SpringMVC入门案例</h2>
<ol>
<li>创建Maven项目</li>
<li>补全目录结构</li>
<li>导入jar包</li>
</ol>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
  <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">></span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.itheima<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>springmvc_01_quickstart<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packaging</span><span class="token punctuation">></span></span>war<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packaging</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>javax.servlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>javax.servlet-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-webmvc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.2.10.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.tomcat.maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>tomcat7-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>port</span><span class="token punctuation">></span></span>80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>port</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span><span class="token punctuation">></span></span>/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>创建配置类</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">"com.itheima.controller"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMvcConfig</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>创建Controller类</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/save"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user save ..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>使用配置类替换web.xml</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServletContainersInitConfig</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractDispatcherServletInitializer</span> <span class="token punctuation">{</span>
    <span class="token comment">//加载springmvc配置类</span>
    <span class="token keyword">protected</span> <span class="token class-name">WebApplicationContext</span> <span class="token function">createServletApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//初始化WebApplicationContext对象</span>
        <span class="token class-name">AnnotationConfigWebApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigWebApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//加载指定配置类</span>
        ctx<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">SpringMvcConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ctx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//设置由springmvc控制器处理的请求映射路径</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletMappings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"/"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//加载spring配置类</span>
    <span class="token keyword">protected</span> <span class="token class-name">WebApplicationContext</span> <span class="token function">createRootApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>
<p>配置Tomcat环境</p>
</li>
<li>
<p>启动运行项目</p>
</li>
<li>
<p>修改Controller返回值解决访问报错问题</p>
</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/save"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user save ..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'info':'springmvc'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意事项</strong></p>
<ul>
<li>SpringMVC是基于Spring的，在pom.xml只导入了<code v-pre>spring-webmvc</code>jar包的原因是它会自动依赖spring相关坐标</li>
<li>AbstractDispatcherServletInitializer类是SpringMVC提供的快速初始化Web3.0容器的抽象类</li>
<li>AbstractDispatcherServletInitializer提供了三个接口方法供用户实现
<ul>
<li>createServletApplicationContext方法，创建Servlet容器时，加载SpringMVC对应的bean并放入WebApplicationContext对象范围中，而WebApplicationContext的作用范围为ServletContext范围，即整个web容器范围</li>
<li>getServletMappings方法，设定SpringMVC对应的请求映射路径，即SpringMVC拦截哪些请求</li>
<li>createRootApplicationContext方法，如果创建Servlet容器时需要加载非SpringMVC对应的bean,使用当前方法进行，使用方式和createServletApplicationContext相同。</li>
<li>createServletApplicationContext用来加载SpringMVC环境</li>
<li>createRootApplicationContext用来加载Spring环境</li>
</ul>
</li>
</ul>
<p>知识点1：@Controller</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>@Controller</th>
</tr>
</thead>
<tbody>
<tr>
<td>类型</td>
<td>类注解</td>
</tr>
<tr>
<td>位置</td>
<td>SpringMVC控制器类定义上方</td>
</tr>
<tr>
<td>作用</td>
<td>设定SpringMVC的核心控制器bean</td>
</tr>
</tbody>
</table>
<p>知识点2：@RequestMapping</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>@RequestMapping</th>
</tr>
</thead>
<tbody>
<tr>
<td>类型</td>
<td>类注解或方法注解</td>
</tr>
<tr>
<td>位置</td>
<td>SpringMVC控制器类或方法定义上方</td>
</tr>
<tr>
<td>作用</td>
<td>设置当前控制器方法请求访问路径</td>
</tr>
<tr>
<td>相关属性</td>
<td>value(默认)，请求访问路径</td>
</tr>
</tbody>
</table>
<p>知识点3：@ResponseBody</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>@ResponseBody</th>
</tr>
</thead>
<tbody>
<tr>
<td>类型</td>
<td>类注解或方法注解</td>
</tr>
<tr>
<td>位置</td>
<td>SpringMVC控制器类或方法定义上方</td>
</tr>
<tr>
<td>作用</td>
<td>设置当前控制器方法响应内容为当前返回值，无需解析</td>
</tr>
</tbody>
</table>
<p><img src="https://s2.loli.net/2022/08/14/W1OlGXvfPjLbH9V.png" alt="1.png" loading="lazy"></p>
<ul>
<li>
<p>config目录存入的是配置类,写过的配置类有:</p>
<ul>
<li>ServletContainersInitConfig</li>
<li>SpringConfig</li>
<li>SpringMvcConfig</li>
<li>JdbcConfig</li>
<li>MybatisConfig</li>
</ul>
</li>
<li>
<p>controller目录存放的是SpringMVC的controller类</p>
</li>
<li>
<p>service目录存放的是service接口和实现类</p>
</li>
<li>
<p>dao目录存放的是dao/Mapper接口</p>
</li>
<li>
<p>SpringMVC加载其相关bean(表现层bean),也就是controller包下的类</p>
</li>
<li>
<p>Spring控制的bean</p>
<ul>
<li>业务bean(Service)</li>
<li>功能bean(DataSource,SqlSessionFactoryBean,MapperScannerConfigurer等)</li>
</ul>
</li>
</ul>
<p>有了Spring的配置类，要想在tomcat服务器启动将其加载，我们需要修改ServletContainersInitConfig</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServletContainersInitConfig</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractDispatcherServletInitializer</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">WebApplicationContext</span> <span class="token function">createServletApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AnnotationConfigWebApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigWebApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">SpringMvcConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ctx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletMappings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"/"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">protected</span> <span class="token class-name">WebApplicationContext</span> <span class="token function">createRootApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">AnnotationConfigWebApplicationContext</span> ctx <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigWebApplicationContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">SpringConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ctx<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上述的配置方式，Spring还提供了一种更简单的配置方式，可以不用再去创建<code v-pre>AnnotationConfigWebApplicationContext</code>对象，不用手动<code v-pre>register</code>对应的配置类:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServletContainersInitConfig</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractAnnotationConfigDispatcherServletInitializer</span> <span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getRootConfigClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">SpringConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletConfigClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">SpringMvcConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletMappings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"/"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>知识点1：@ComponentScan</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>@ComponentScan</th>
</tr>
</thead>
<tbody>
<tr>
<td>类型</td>
<td>类注解</td>
</tr>
<tr>
<td>位置</td>
<td>类定义上方</td>
</tr>
<tr>
<td>作用</td>
<td>设置spring配置类扫描路径，用于加载使用注解格式定义的bean</td>
</tr>
<tr>
<td>相关属性</td>
<td>excludeFilters:排除扫描路径中加载的bean,需要指定类别(type)和具体项(classes)<br/>includeFilters:加载指定的bean，需要指定类别(type)和具体项(classes)</td>
</tr>
</tbody>
</table>
<h2 id="请求与响应" tabindex="-1"><a class="header-anchor" href="#请求与响应" aria-hidden="true">#</a> 请求与响应</h2>
<p>主要会讲解四部分内容:</p>
<ul>
<li>请求映射路径</li>
<li>请求参数</li>
<li>日期类型参数传递</li>
<li>响应json数据</li>
</ul>
<h3 id="优化路径配置" tabindex="-1"><a class="header-anchor" href="#优化路径配置" aria-hidden="true">#</a> 优化路径配置</h3>
<p>优化方案:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/user"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/save"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user save ..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'user save'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/delete"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user delete ..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'user delete'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/book"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/save"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book save ..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book save'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意:</strong></p>
<ul>
<li>当类上和方法上都添加了<code v-pre>@RequestMapping</code>注解，前端发送请求的时候，要和两个注解的value值相加匹配才能访问到。</li>
<li>@RequestMapping注解value属性前面加不加<code v-pre>/</code>都可以</li>
</ul>
<h3 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数" aria-hidden="true">#</a> 请求参数</h3>
<p>关于请求参数的传递与接收是和请求方式有关系的，目前比较常见的两种请求方式为：</p>
<ul>
<li>GET</li>
<li>POST</li>
</ul>
<h4 id="get发送多个参数" tabindex="-1"><a class="header-anchor" href="#get发送多个参数" aria-hidden="true">#</a> GET发送多个参数</h4>
<p>发送请求与参数:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>http://localhost/commonParam?name=itcast&amp;age=15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接收参数：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/commonParam"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">commonParam</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span><span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"普通参数传递 name ==> "</span><span class="token operator">+</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"普通参数传递 age ==> "</span><span class="token operator">+</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'commonParam'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GET请求中文乱码</p>
<p>Tomcat8.5以后的版本已经处理了中文乱码的问题，但是IDEA中的Tomcat插件目前只到Tomcat7，所以需要修改pom.xml来解决GET请求中文乱码问题</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.apache.tomcat.maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>tomcat7-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>port</span><span class="token punctuation">></span></span>80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>port</span><span class="token punctuation">></span></span><span class="token comment">&lt;!--tomcat端口号--></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span><span class="token punctuation">></span></span>/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!--虚拟目录--></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uriEncoding</span><span class="token punctuation">></span></span>UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uriEncoding</span><span class="token punctuation">></span></span><span class="token comment">&lt;!--访问路径编解码字符集--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="post发送参数" tabindex="-1"><a class="header-anchor" href="#post发送参数" aria-hidden="true">#</a> POST发送参数</h4>
<p>接收参数：</p>
<p>和GET一致，不用做任何修改</p>
<p>POST请求中文乱码</p>
<p>解决方案:配置过滤器</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ServletContainersInitConfig</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractAnnotationConfigDispatcherServletInitializer</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getRootConfigClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletConfigClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">SpringMvcConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletMappings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">"/"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//乱码处理</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Filter</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletFilters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">CharacterEncodingFilter</span> filter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CharacterEncodingFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        filter<span class="token punctuation">.</span><span class="token function">setEncoding</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Filter</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>filter<span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五种类型参数传递" tabindex="-1"><a class="header-anchor" href="#五种类型参数传递" aria-hidden="true">#</a> 五种类型参数传递</h3>
<ul>
<li>普通参数</li>
<li>POJO类型参数</li>
<li>嵌套POJO类型参数</li>
<li>数组类型参数</li>
<li>集合类型参数</li>
</ul>
<h4 id="普通参数" tabindex="-1"><a class="header-anchor" href="#普通参数" aria-hidden="true">#</a> 普通参数</h4>
<ul>
<li>普通参数:url地址传参，地址参数名与形参变量名相同，定义形参即可接收参数</li>
</ul>
<p>如果形参与地址参数名不一致使用@RequestParam注解</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/commonParamDifferentName"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">commonParamDifferentName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestPaam</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> userName <span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"普通参数传递 userName ==> "</span><span class="token operator">+</span>userName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"普通参数传递 age ==> "</span><span class="token operator">+</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'common param different name'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意:写上@RequestParam注解框架就不需要自己去解析注入，能提升框架处理性能</strong></p>
<h4 id="pojo数据类型" tabindex="-1"><a class="header-anchor" href="#pojo数据类型" aria-hidden="true">#</a> POJO数据类型</h4>
<ul>
<li>POJO参数：请求参数名与形参对象属性名相同，定义POJO类型形参即可接收参数</li>
</ul>
<p>此时需要使用前面准备好的POJO类，先来看下User</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token comment">//setter...getter...略</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后台接收参数:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//POJO参数：请求参数与形参对象中的属性对应即可完成参数传递</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/pojoParam"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">pojoParam</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"pojo参数传递 user ==> "</span><span class="token operator">+</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'pojo param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意:</strong></p>
<ul>
<li>POJO参数接收，前端GET和POST发送请求数据的方式不变</li>
<li><strong>请求参数key的名称要和POJO中属性的名称一致，否则无法封装</strong></li>
</ul>
<h4 id="嵌套pojo类型参数" tabindex="-1"><a class="header-anchor" href="#嵌套pojo类型参数" aria-hidden="true">#</a> 嵌套POJO类型参数</h4>
<ul>
<li>嵌套POJO参数：请求参数名与形参对象属性名相同，按照对象层次结构关系即可接收嵌套POJO属性参数</li>
</ul>
<p>发送请求和参数:</p>
<p><img src="https://s2.loli.net/2022/07/10/Bywhe1o4PdkaMxV.png" alt="" loading="lazy"></p>
<p>后台接收参数:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//POJO参数：请求参数与形参对象中的属性对应即可完成参数传递</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/pojoParam"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">pojoParam</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"pojo参数传递 user ==> "</span><span class="token operator">+</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'pojo param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意:</strong></p>
<p>请求参数key的名称要和POJO中属性的名称一致，否则无法封装</p>
<h4 id="数组类型参数" tabindex="-1"><a class="header-anchor" href="#数组类型参数" aria-hidden="true">#</a> 数组类型参数</h4>
<ul>
<li>数组参数：请求参数名与形参对象属性名相同且请求参数为多个，定义数组类型即可接收参数</li>
</ul>
<p>后台接收参数:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>  <span class="token comment">//数组参数：同名请求参数可以直接映射到对应名称的形参数组对象中</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/arrayParam"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">arrayParam</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> likes<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"数组参数传递 likes ==> "</span><span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>likes<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'array param'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="集合类型参数" tabindex="-1"><a class="header-anchor" href="#集合类型参数" aria-hidden="true">#</a> 集合类型参数</h4>
<p>SpringMVC将List看做是一个POJO对象来处理，将其创建一个对象并准备把前端的数据封装到对象中，但是List是一个接口无法创建对象，所以报错</p>
<p>解决方案是:使用<code v-pre>@RequestParam</code>注解</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//集合参数：同名请求参数可以使用@RequestParam注解映射到对应名称的集合对象中作为数据</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/listParam"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">listParam</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> likes<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"集合参数传递 likes ==> "</span><span class="token operator">+</span> likes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'list param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>集合保存普通参数：请求参数名与形参集合对象名相同且请求参数为多个，@RequestParam绑定参数关系</li>
<li>对于简单数据类型使用数组会比集合更简单些。</li>
</ul>
<p>知识点1：@RequestParam</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>@RequestParam</th>
</tr>
</thead>
<tbody>
<tr>
<td>类型</td>
<td>形参注解</td>
</tr>
<tr>
<td>位置</td>
<td>SpringMVC控制器方法形参定义前面</td>
</tr>
<tr>
<td>作用</td>
<td>绑定请求参数与处理器方法形参间的关系</td>
</tr>
<tr>
<td>相关参数</td>
<td>required：是否为必传参数 <br/>defaultValue：参数默认值</td>
</tr>
</tbody>
</table>
<h3 id="json数据传输参数" tabindex="-1"><a class="header-anchor" href="#json数据传输参数" aria-hidden="true">#</a> JSON数据传输参数</h3>
<p>对于JSON数据类型，我们常见的有三种:</p>
<ul>
<li>json普通数组（[&quot;value1&quot;,&quot;value2&quot;,&quot;value3&quot;,...]）</li>
<li>json对象（{key1:value1,key2:value2,...}）</li>
<li>json对象数组（[{key1:value1,...},{key2:value2,...}]）</li>
</ul>
<h4 id="json普通数组" tabindex="-1"><a class="header-anchor" href="#json普通数组" aria-hidden="true">#</a> JSON普通数组</h4>
<ol>
<li>pom.xml添加依赖</li>
</ol>
<p>SpringMVC默认使用的是jackson来处理json的转换，所以需要在pom.xml添加jackson依赖</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>jackson-databind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.9.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>
<p>PostMan发送JSON数据</p>
</li>
<li>
<p>开启SpringMVC注解支持</p>
</li>
</ol>
<p>在SpringMVC的配置类中开启SpringMVC的注解支持，这里面就包含了将JSON转换成对象的功能</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">"com.itheima.controller"</span><span class="token punctuation">)</span>
<span class="token comment">//开启json数据类型自动转换</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMvcConfig</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>参数前添加@RequestBody</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//使用@RequestBody注解将外部传递的json数组数据映射到形参的集合对象中作为数据</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/listParamForJson"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">listParamForJson</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> likes<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"list common(json)参数传递 list ==> "</span><span class="token operator">+</span>likes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'list common for json param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>启动运行程序</li>
</ol>
<h4 id="json对象数据" tabindex="-1"><a class="header-anchor" href="#json对象数据" aria-hidden="true">#</a> JSON对象数据</h4>
<p>JSON对象数据</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"itcast"</span><span class="token punctuation">,</span>
	<span class="token property">"age"</span><span class="token operator">:</span><span class="token number">15</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端接收数据：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/pojoParamForJson"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">pojoParamForJson</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"pojo(json)参数传递 user ==> "</span><span class="token operator">+</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'pojo for json param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="json对象数组" tabindex="-1"><a class="header-anchor" href="#json对象数组" aria-hidden="true">#</a> JSON对象数组</h4>
<p>请求和数据的发送:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"itcast"</span><span class="token punctuation">,</span><span class="token property">"age"</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"itheima"</span><span class="token punctuation">,</span><span class="token property">"age"</span><span class="token operator">:</span><span class="token number">12</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端接收数据:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/listPojoParamForJson"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">listPojoParamForJson</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"list pojo(json)参数传递 list ==> "</span><span class="token operator">+</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'list pojo for json param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>小结</strong></p>
<p>SpringMVC接收JSON数据的实现步骤为:</p>
<p>(1)导入jackson包</p>
<p>(2)使用PostMan发送JSON数据</p>
<p>(3)开启SpringMVC注解驱动，在配置类上添加@EnableWebMvc注解</p>
<p>(4)Controller方法的参数前添加@RequestBody注解</p>
<p>知识点1：@EnableWebMvc</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>@EnableWebMvc</th>
</tr>
</thead>
<tbody>
<tr>
<td>类型</td>
<td>配置类注解</td>
</tr>
<tr>
<td>位置</td>
<td>SpringMVC配置类定义上方</td>
</tr>
<tr>
<td>作用</td>
<td>开启SpringMVC多项辅助功能</td>
</tr>
</tbody>
</table>
<p>知识点2：@RequestBody</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>@RequestBody</th>
</tr>
</thead>
<tbody>
<tr>
<td>类型</td>
<td>形参注解</td>
</tr>
<tr>
<td>位置</td>
<td>SpringMVC控制器方法形参定义前面</td>
</tr>
<tr>
<td>作用</td>
<td>将请求中请求体所包含的数据传递给请求参数，此注解一个处理器方法只能使用一次</td>
</tr>
</tbody>
</table>
<p>@RequestBody与@RequestParam区别</p>
<ul>
<li>
<p>区别</p>
<ul>
<li>@RequestParam用于接收url地址传参，表单传参【application/x-www-form-urlencoded】</li>
<li>@RequestBody用于接收json数据【application/json】</li>
</ul>
</li>
<li>
<p>应用</p>
<ul>
<li>后期开发中，发送json格式数据为主，@RequestBody应用较广</li>
<li>如果发送非json格式数据，选用@RequestParam接收请求参数</li>
</ul>
</li>
</ul>
<h3 id="日期类型参数传递" tabindex="-1"><a class="header-anchor" href="#日期类型参数传递" aria-hidden="true">#</a> 日期类型参数传递</h3>
<ol>
<li>编写方法接收日期数据</li>
</ol>
<p>在UserController类中添加方法，把参数设置为日期类型</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/dataParam"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">dataParam</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">)</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"参数传递 date ==> "</span><span class="token operator">+</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'data param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>
<p>启动Tomcat服务器</p>
</li>
<li>
<p>使用PostMan发送请求</p>
</li>
<li>
<p>查看控制台</p>
</li>
<li>
<p>更换日期格式</p>
</li>
</ol>
<p>需要使用<code v-pre>@DateTimeFormat</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/dataParam"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">dataParam</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">,</span>
                        <span class="token annotation punctuation">@DateTimeFormat</span><span class="token punctuation">(</span>pattern<span class="token operator">=</span><span class="token string">"yyyy-MM-dd"</span><span class="token punctuation">)</span> <span class="token class-name">Date</span> date1<span class="token punctuation">)</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"参数传递 date ==> "</span><span class="token operator">+</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"参数传递 date1(yyyy-MM-dd) ==> "</span><span class="token operator">+</span>date1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'data param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>携带时间的日期</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/dataParam"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">dataParam</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">,</span>
                        <span class="token annotation punctuation">@DateTimeFormat</span><span class="token punctuation">(</span>pattern<span class="token operator">=</span><span class="token string">"yyyy-MM-dd"</span><span class="token punctuation">)</span> <span class="token class-name">Date</span> date1<span class="token punctuation">,</span>
                        <span class="token annotation punctuation">@DateTimeFormat</span><span class="token punctuation">(</span>pattern<span class="token operator">=</span><span class="token string">"yyyy/MM/dd HH:mm:ss"</span><span class="token punctuation">)</span> <span class="token class-name">Date</span> date2<span class="token punctuation">)</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"参数传递 date ==> "</span><span class="token operator">+</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"参数传递 date1(yyyy-MM-dd) ==> "</span><span class="token operator">+</span>date1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"参数传递 date2(yyyy/MM/dd HH:mm:ss) ==> "</span><span class="token operator">+</span>date2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"{'module':'data param'}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>知识点1：@DateTimeFormat</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>@DateTimeFormat</th>
</tr>
</thead>
<tbody>
<tr>
<td>类型</td>
<td>形参注解</td>
</tr>
<tr>
<td>位置</td>
<td>SpringMVC控制器方法形参前面</td>
</tr>
<tr>
<td>作用</td>
<td>设定日期时间型数据格式</td>
</tr>
<tr>
<td>相关属性</td>
<td>pattern：指定日期时间格式字符串</td>
</tr>
</tbody>
</table>
<h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3>
<p>对于响应，主要就包含两部分内容：</p>
<ul>
<li>响应页面</li>
<li>响应数据
<ul>
<li>文本数据</li>
<li>json数据</li>
</ul>
</li>
</ul>
<h4 id="响应页面" tabindex="-1"><a class="header-anchor" href="#响应页面" aria-hidden="true">#</a> 响应页面</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/toJumpPage"</span><span class="token punctuation">)</span>
    <span class="token comment">//注意</span>
    <span class="token comment">//1.此处不能添加@ResponseBody,如果加了该注入，会直接将page.jsp当字符串返回前端</span>
    <span class="token comment">//2.方法需要返回String</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toJumpPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"跳转页面"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"page.jsp"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="返回文本数据" tabindex="-1"><a class="header-anchor" href="#返回文本数据" aria-hidden="true">#</a> 返回文本数据</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    
   	<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/toText"</span><span class="token punctuation">)</span>
	<span class="token comment">//注意此处该注解就不能省略，如果省略了,会把response text当前页面名称去查找，如果没有回报404错误</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"返回纯文本数据"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"response text"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="响应json数据" tabindex="-1"><a class="header-anchor" href="#响应json数据" aria-hidden="true">#</a> 响应JSON数据</h4>
<h5 id="响应pojo对象" tabindex="-1"><a class="header-anchor" href="#响应pojo对象" aria-hidden="true">#</a> 响应POJO对象</h5>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/toJsonPOJO"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">toJsonPOJO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"返回json对象数据"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"itcast"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回值为实体类对象，设置返回值为实体类类型，即可实现返回对应对象的json数据，需要依赖@ResponseBody注解和@EnableWebMvc注解</p>
<h5 id="响应pojo集合对象" tabindex="-1"><a class="header-anchor" href="#响应pojo集合对象" aria-hidden="true">#</a> 响应POJO集合对象</h5>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/toJsonList"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">toJsonList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"返回json集合数据"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">User</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"传智播客"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user1<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">User</span> user2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"黑马程序员"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        user2<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> userList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        userList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        userList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>user2<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> userList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>知识点1：@ResponseBody</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>@ResponseBody</th>
</tr>
</thead>
<tbody>
<tr>
<td>类型</td>
<td>方法\类注解</td>
</tr>
<tr>
<td>位置</td>
<td>SpringMVC控制器方法定义上方和控制类上</td>
</tr>
<tr>
<td>作用</td>
<td>设置当前控制器返回值作为响应体,<br/>写在类上，该类的所有方法都有该注解功能</td>
</tr>
<tr>
<td>相关属性</td>
<td>pattern：指定日期时间格式字符串</td>
</tr>
</tbody>
</table>
<p><strong>说明:</strong></p>
<ul>
<li>该注解可以写在类上或者方法上</li>
<li>写在类上就是该类下的所有方法都有@ReponseBody功能</li>
<li>当方法上有@ReponseBody注解后
<ul>
<li>方法的返回值为字符串，会将其作为文本内容直接响应给前端</li>
<li>方法的返回值为对象，会将对象转换成JSON响应给前端</li>
</ul>
</li>
</ul>
<p>此处又使用到了类型转换，内部还是通过Converter接口的实现类完成的，所以Converter除了前面所说的功能外，它还可以实现:</p>
<ul>
<li>对象转Json数据(POJO -&gt; json)</li>
<li>集合转Json数据(Collection -&gt; json)</li>
</ul>
<h2 id="rest风格" tabindex="-1"><a class="header-anchor" href="#rest风格" aria-hidden="true">#</a> Rest风格</h2>
<p>REST（Representational State Transfer），表现形式状态转换,它是一种软件架构风格</p>
<p>当我们想表示一个网络资源的时候，可以使用两种方式:</p>
<ul>
<li>传统风格资源描述形式
<ul>
<li><code v-pre>http://localhost/user/getById?id=1</code> 查询id为1的用户信息</li>
<li><code v-pre>http://localhost/user/saveUser</code> 保存用户信息</li>
</ul>
</li>
<li>REST风格描述形式
<ul>
<li><code v-pre>http://localhost/user/1</code></li>
<li><code v-pre>http://localhost/user</code></li>
</ul>
</li>
</ul>
<ul>
<li>
<p>按照REST风格访问资源时使用行为动作区分对资源进行了何种操作</p>
<ul>
<li>
<p><code v-pre>http://localhost/users</code>	查询全部用户信息 GET（查询）</p>
</li>
<li>
<p><code v-pre>http://localhost/users/1</code>  查询指定用户信息 GET（查询）</p>
</li>
<li>
<p><code v-pre>http://localhost/users</code>    添加用户信息    POST（新增/保存）</p>
</li>
<li>
<p><code v-pre>http://localhost/users</code>    修改用户信息    PUT（修改/更新）</p>
</li>
<li>
<p><code v-pre>http://localhost/users/1</code>  删除用户信息    DELETE（删除）</p>
</li>
</ul>
</li>
</ul>
<p>请求的方式比较多，但是比较常用的就4种，分别是<code v-pre>GET</code>,<code v-pre>POST</code>,<code v-pre>PUT</code>,<code v-pre>DELETE</code>。</p>
<p>按照不同的请求方式代表不同的操作类型。</p>
<ul>
<li>发送GET请求是用来做查询</li>
<li>发送POST请求是用来做新增</li>
<li>发送PUT请求是用来做修改</li>
<li>发送DELETE请求是用来做删除</li>
</ul>
<p>根据REST风格对资源进行访问称为RESTful</p>
<h3 id="修改restful风格" tabindex="-1"><a class="header-anchor" href="#修改restful风格" aria-hidden="true">#</a> 修改RESTful风格</h3>
<h4 id="新增" tabindex="-1"><a class="header-anchor" href="#新增" aria-hidden="true">#</a> 新增</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
	<span class="token comment">//设置当前请求方法为POST，表示REST风格中的添加操作</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/users"</span><span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span>POST<span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user save..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'user save'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>将请求路径更改为<code v-pre>/users</code></p>
<ul>
<li>访问该方法使用 POST: <code v-pre>http://localhost/users</code></li>
</ul>
</li>
<li>
<p>使用method属性限定该方法的访问方式为<code v-pre>POST</code></p>
<ul>
<li>如果发送的不是POST请求，比如发送GET请求，则会报错</li>
</ul>
</li>
</ul>
<h4 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token comment">//设置当前请求方法为DELETE，表示REST风格中的删除操作</span>
	<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/users"</span><span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span>DELETE<span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user delete..."</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'user delete'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将请求路径更改为<code v-pre>/users</code></p>
<ul>
<li>访问该方法使用 DELETE: <code v-pre>http://localhost/users</code></li>
</ul>
<p>传递路径参数</p>
<p>后端获取参数，需要做如下修改:</p>
<ul>
<li>修改@RequestMapping的value属性，将其中修改为<code v-pre>/users/{id}</code>，目的是和路径匹配</li>
<li>在方法的形参前添加@PathVariable注解</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token comment">//设置当前请求方法为DELETE，表示REST风格中的删除操作</span>
	<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/users/{id}"</span><span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span>DELETE<span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user delete..."</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'user delete'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(1)如果方法形参的名称和路径<code v-pre>{}</code>中的值不一致，该怎么办?</p>
<p><img src="https://s2.loli.net/2022/07/10/z82LFaCNqIH5gAY.png" alt="12" loading="lazy"></p>
<p>(2)如果有多个参数需要传递该如何编写?</p>
<p>前端发送请求的时候使用:<code v-pre>http://localhost/users/1/tom</code>,路径中的<code v-pre>1</code>和<code v-pre>tom</code>就是我们想要传递的两个参数。</p>
<p>后端获取参数，需要做如下修改:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token comment">//设置当前请求方法为DELETE，表示REST风格中的删除操作</span>
	<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/users/{id}/{name}"</span><span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span>DELETE<span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">,</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user delete..."</span> <span class="token operator">+</span> id<span class="token operator">+</span><span class="token string">","</span><span class="token operator">+</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'user delete'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token comment">//设置当前请求方法为PUT，表示REST风格中的修改操作</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/users"</span><span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span>PUT<span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user update..."</span> <span class="token operator">+</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'user update'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>将请求路径更改为<code v-pre>/users</code></p>
<ul>
<li>访问该方法使用 PUT: <code v-pre>http://localhost/users</code></li>
</ul>
</li>
<li>
<p>访问并携带参数</p>
</li>
</ul>
<h4 id="根据id查询" tabindex="-1"><a class="header-anchor" href="#根据id查询" aria-hidden="true">#</a> 根据ID查询</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token comment">//设置当前请求方法为GET，表示REST风格中的查询操作</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/users/{id}"</span> <span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span>GET<span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user getById..."</span><span class="token operator">+</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'user getById'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将请求路径更改为<code v-pre>/users</code></p>
<ul>
<li>访问该方法使用 GET: <code v-pre>http://localhost/users/666</code></li>
</ul>
<h4 id="查询所有" tabindex="-1"><a class="header-anchor" href="#查询所有" aria-hidden="true">#</a> 查询所有</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token comment">//设置当前请求方法为GET，表示REST风格中的查询操作</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/users"</span> <span class="token punctuation">,</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span>GET<span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"user getAll..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'user getAll'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将请求路径更改为<code v-pre>/users</code></p>
<ul>
<li>访问该方法使用 GET: <code v-pre>http://localhost/users</code></li>
</ul>
<p>知识点1：@PathVariable</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>@PathVariable</th>
</tr>
</thead>
<tbody>
<tr>
<td>类型</td>
<td>形参注解</td>
</tr>
<tr>
<td>位置</td>
<td>SpringMVC控制器方法形参定义前面</td>
</tr>
<tr>
<td>作用</td>
<td>绑定路径参数与处理器方法形参间的关系，要求路径参数名与形参名一一对应</td>
</tr>
</tbody>
</table>
<p>关于接收参数，我们学过三个注解<code v-pre>@RequestBody</code>、<code v-pre>@RequestParam</code>、<code v-pre>@PathVariable</code>,这三个注解之间的区别和应用分别是什么?</p>
<ul>
<li>区别
<ul>
<li>@RequestParam用于接收url地址传参或表单传参</li>
<li>@RequestBody用于接收json数据</li>
<li>@PathVariable用于接收路径参数，使用{参数名称}描述路径参数</li>
</ul>
</li>
<li>应用
<ul>
<li>后期开发中，发送请求参数超过1个时，以json格式为主，@RequestBody应用较广</li>
<li>如果发送非json格式数据，选用@RequestParam接收请求参数</li>
<li>采用RESTful进行开发，当参数数量较少时，例如1个，可以采用@PathVariable接收请求路径变量，通常用于传递id值</li>
</ul>
</li>
</ul>
<p>问题1：每个方法的@RequestMapping注解中都定义了访问路径/books，重复性太高。</p>
<p>问题2：每个方法的@RequestMapping注解中都要使用method属性定义请求方式，重复性太高。</p>
<p>问题3：每个方法响应json都需要加上@ResponseBody注解，重复性太高。</p>
<p>对于上面所提的这三个问题，具体该如何解决?</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span> <span class="token comment">//@Controller + ReponseBody</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/books"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookController</span> <span class="token punctuation">{</span>
    
	<span class="token comment">//@RequestMapping(method = RequestMethod.POST)</span>
    <span class="token annotation punctuation">@PostMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Book</span> book<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book save..."</span> <span class="token operator">+</span> book<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book save'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//@RequestMapping(value = "/{id}",method = RequestMethod.DELETE)</span>
    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">"/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book delete..."</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book delete'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//@RequestMapping(method = RequestMethod.PUT)</span>
    <span class="token annotation punctuation">@PutMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Book</span> book<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book update..."</span> <span class="token operator">+</span> book<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book update'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//@RequestMapping(value = "/{id}",method = RequestMethod.GET)</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book getById..."</span> <span class="token operator">+</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book getById'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//@RequestMapping(method = RequestMethod.GET)</span>
    <span class="token annotation punctuation">@GetMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"book getAll..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"{'module':'book getAll'}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题1：每个方法的@RequestMapping注解中都定义了访问路径/books，重复性太高。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>将@RequestMapping提到类上面，用来定义所有方法共同的访问路径。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>问题2：每个方法的@RequestMapping注解中都要使用method属性定义请求方式，重复性太高。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>使用@GetMapping  @PostMapping  @PutMapping  @DeleteMapping代替
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>问题3：每个方法响应json都需要加上@ResponseBody注解，重复性太高。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1.将ResponseBody提到类上面，让所有的方法都有@ResponseBody的功能
2.使用@RestController注解替换@Controller与@ResponseBody注解，简化书写
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>知识点1：@RestController</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>@RestController</th>
</tr>
</thead>
<tbody>
<tr>
<td>类型</td>
<td><mark>类注解</mark></td>
</tr>
<tr>
<td>位置</td>
<td>基于SpringMVC的RESTful开发控制器类定义上方</td>
</tr>
<tr>
<td>作用</td>
<td>设置当前控制器类为RESTful风格，<br/>等同于@Controller与@ResponseBody两个注解组合功能</td>
</tr>
</tbody>
</table>
<p>知识点2：@GetMapping @PostMapping @PutMapping @DeleteMapping</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>@GetMapping @PostMapping @PutMapping @DeleteMapping</th>
</tr>
</thead>
<tbody>
<tr>
<td>类型</td>
<td>方法注解</td>
</tr>
<tr>
<td>位置</td>
<td>基于SpringMVC的RESTful开发控制器方法定义上方</td>
</tr>
<tr>
<td>作用</td>
<td>设置当前控制器方法请求访问路径与请求动作，每种对应一个请求动作，<br/>例如@GetMapping对应GET请求</td>
</tr>
<tr>
<td>相关属性</td>
<td>value（默认）：请求访问路径</td>
</tr>
</tbody>
</table>
<ul>
<li>SpringMVC需要将静态资源进行放行</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMvcSupport</span> <span class="token keyword">extends</span> <span class="token class-name">WebMvcConfigurationSupport</span> <span class="token punctuation">{</span>
    <span class="token comment">//设置静态资源访问过滤，当前类需要设置为配置类，并被扫描加载</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">addResourceHandlers</span><span class="token punctuation">(</span><span class="token class-name">ResourceHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//当访问/pages/????时候，从/pages目录下查找内容</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">"/pages/**"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">"/pages/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">"/js/**"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">"/js/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">"/css/**"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">"/css/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">"/plugins/**"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">"/plugins/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>该配置类是在config目录下，SpringMVC扫描的是controller包，所以该配置类还未生效，要想生效需要将SpringMvcConfig配置类进行修改</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"com.itheima.controller"</span><span class="token punctuation">,</span><span class="token string">"com.itheima.config"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMvcConfig</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

或者

<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">"com.itheima"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMvcConfig</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssm整合" tabindex="-1"><a class="header-anchor" href="#ssm整合" aria-hidden="true">#</a> SSM整合</h2>
<h3 id="流程分析" tabindex="-1"><a class="header-anchor" href="#流程分析" aria-hidden="true">#</a> 流程分析</h3>
<p>(1) 创建工程</p>
<ul>
<li>创建一个Maven的web工程</li>
<li>pom.xml添加SSM需要的依赖jar包</li>
<li>编写Web项目的入口配置类，实现<code v-pre>AbstractAnnotationConfigDispatcherServletInitializer</code>重写以下方法
<ul>
<li>getRootConfigClasses()	：返回Spring的配置类-&gt;需要SpringConfig配置类</li>
<li>getServletConfigClasses() ：返回SpringMVC的配置类-&gt;需要SpringMvcConfig配置类</li>
<li>getServletMappings()      : 设置SpringMVC请求拦截路径规则</li>
<li>getServletFilters()       ：设置过滤器，解决POST请求中文乱码问题</li>
</ul>
</li>
</ul>
<p>(2)SSM整合[<strong>重点是各个配置的编写</strong>]</p>
<ul>
<li>SpringConfig
<ul>
<li>标识该类为配置类 @Configuration</li>
<li>扫描Service所在的包 @ComponentScan</li>
<li>在Service层要管理事务 @EnableTransactionManagement</li>
<li>读取外部的properties配置文件 @PropertySource</li>
<li>整合Mybatis需要引入Mybatis相关配置类 @Import
<ul>
<li>第三方数据源配置类 JdbcConfig
<ul>
<li>构建DataSource数据源，DruidDataSouroce,需要注入数据库连接四要素， @Bean @Value</li>
<li>构建平台事务管理器，DataSourceTransactionManager,@Bean</li>
</ul>
</li>
<li>Mybatis配置类 MybatisConfig
<ul>
<li>构建SqlSessionFactoryBean并设置别名扫描与数据源，@Bean</li>
<li>构建MapperScannerConfigurer并设置DAO层的包扫描</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>SpringMvcConfig
<ul>
<li>标识该类为配置类 @Configuration</li>
<li>扫描Controller所在的包 @ComponentScan</li>
<li>开启SpringMVC注解支持 @EnableWebMvc</li>
</ul>
</li>
</ul>
<p>(3)功能模块[与具体的业务模块有关]</p>
<ul>
<li>创建数据库表</li>
<li>根据数据库表创建对应的模型类</li>
<li>通过Dao层完成数据库表的增删改查(接口+自动代理)</li>
<li>编写Service层[Service接口+实现类]
<ul>
<li>@Service</li>
<li>@Transactional</li>
<li>整合Junit对业务层进行单元测试
<ul>
<li>@RunWith</li>
<li>@ContextConfiguration</li>
<li>@Test</li>
</ul>
</li>
</ul>
</li>
<li>编写Controller层
<ul>
<li>接收请求 @RequestMapping @GetMapping @PostMapping @PutMapping @DeleteMapping</li>
<li>接收数据 简单、POJO、嵌套POJO、集合、数组、JSON数据类型
<ul>
<li>@RequestParam</li>
<li>@PathVariable</li>
<li>@RequestBody</li>
</ul>
</li>
<li>转发业务层
<ul>
<li>@Autowired</li>
</ul>
</li>
<li>响应结果
<ul>
<li>@ResponseBody</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="统一结果封装" tabindex="-1"><a class="header-anchor" href="#统一结果封装" aria-hidden="true">#</a> 统一结果封装</h2>
<h3 id="表现层与前端数据传输协议定义" tabindex="-1"><a class="header-anchor" href="#表现层与前端数据传输协议定义" aria-hidden="true">#</a> 表现层与前端数据传输协议定义</h3>
<p>大体的思路为:</p>
<ul>
<li>为了封装返回的结果数据:<strong>创建结果模型类，封装数据到data属性中</strong></li>
<li>为了封装返回的数据是何种操作及是否操作成功:<strong>封装操作结果到code属性中</strong></li>
<li>操作失败后为了封装返回的错误信息:<strong>封装特殊消息到message(msg)属性中</strong></li>
</ul>
<h2 id="统一异常处理" tabindex="-1"><a class="header-anchor" href="#统一异常处理" aria-hidden="true">#</a> 统一异常处理</h2>
<p>异常的种类及出现异常的原因:</p>
<ul>
<li>框架内部抛出的异常：因使用不合规导致</li>
<li>数据层抛出的异常：因外部服务器故障导致（例如：服务器访问超时）</li>
<li>业务层抛出的异常：因业务逻辑书写错误导致（例如：遍历业务书写操作，导致索引异常等）</li>
<li>表现层抛出的异常：因数据收集、校验等规则导致（例如：不匹配的数据类型间导致异常）</li>
<li>工具类抛出的异常：因工具类书写不严谨不够健壮导致（例如：必要释放的连接长期未释放等）</li>
</ul>
<p><strong>思考</strong></p>
<ol>
<li>
<p>各个层级均出现异常，异常处理代码书写在哪一层?</p>
<p><strong>所有的异常均抛出到表现层进行处理</strong></p>
</li>
<li>
<p>异常的种类很多，表现层如何将所有的异常都处理到呢?</p>
<p><strong>异常分类</strong></p>
</li>
<li>
<p>表现层处理异常，每个方法中单独书写，代码书写量巨大且意义不强，如何解决?</p>
<p><strong>AOP</strong></p>
</li>
</ol>
<h3 id="异常处理器的使用" tabindex="-1"><a class="header-anchor" href="#异常处理器的使用" aria-hidden="true">#</a> 异常处理器的使用</h3>
<ol>
<li>创建异常处理器类</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//@RestControllerAdvice用于标识当前类为REST风格对应的异常处理器</span>
<span class="token annotation punctuation">@RestControllerAdvice</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProjectExceptionAdvice</span> <span class="token punctuation">{</span>
    <span class="token comment">//除了自定义的异常处理器，保留对Exception类型的异常处理，用于处理非预期的异常</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doException</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
      	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"嘿嘿,异常你哪里跑！"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>[!note] 确保SpringMvcConfig能够扫描到异常处理器类</p>
</blockquote>
<ol start="2">
<li>异常处理器类返回结果给前端</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//@RestControllerAdvice用于标识当前类为REST风格对应的异常处理器</span>
<span class="token annotation punctuation">@RestControllerAdvice</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProjectExceptionAdvice</span> <span class="token punctuation">{</span>
    <span class="token comment">//除了自定义的异常处理器，保留对Exception类型的异常处理，用于处理非预期的异常</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">doException</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
      	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"嘿嘿,异常你哪里跑！"</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token punctuation">(</span><span class="token number">666</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">"嘿嘿,异常你哪里跑！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>知识点1：@RestControllerAdvice</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>@RestControllerAdvice</th>
</tr>
</thead>
<tbody>
<tr>
<td>类型</td>
<td>类注解</td>
</tr>
<tr>
<td>位置</td>
<td>Rest风格开发的控制器增强类定义上方</td>
</tr>
<tr>
<td>作用</td>
<td>为Rest风格开发的控制器类做增强</td>
</tr>
</tbody>
</table>
<p>**说明:**此注解自带@ResponseBody注解与@Component注解，具备对应的功能</p>
<p>知识点2：@ExceptionHandler</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>@ExceptionHandler</th>
</tr>
</thead>
<tbody>
<tr>
<td>类型</td>
<td>方法注解</td>
</tr>
<tr>
<td>位置</td>
<td>专用于异常处理的控制器方法上方</td>
</tr>
<tr>
<td>作用</td>
<td>设置指定异常的处理方案，功能等同于控制器方法，<br/>出现异常后终止原始控制器执行,并转入当前方法执行</td>
</tr>
</tbody>
</table>
<p>**说明：**此类方法可以根据处理的异常不同，制作多个方法分别处理对应的异常</p>
<h3 id="项目异常处理方案" tabindex="-1"><a class="header-anchor" href="#项目异常处理方案" aria-hidden="true">#</a> 项目异常处理方案</h3>
<ul>
<li>
<p>业务异常（BusinessException）</p>
<ul>
<li>
<p>规范的用户行为产生的异常</p>
<ul>
<li>用户在页面输入内容的时候未按照指定格式进行数据填写，如在年龄框输入的是字符串</li>
</ul>
</li>
<li>
<p>不规范的用户行为操作产生的异常</p>
<ul>
<li>如用户故意传递错误数据</li>
</ul>
</li>
</ul>
</li>
<li>
<p>系统异常（SystemException）</p>
<ul>
<li>项目运行过程中可预计但无法避免的异常
<ul>
<li>比如数据库或服务器宕机</li>
</ul>
</li>
</ul>
</li>
<li>
<p>其他异常（Exception）</p>
<ul>
<li>编程人员未预期到的异常，如:用到的文件不存在</li>
</ul>
</li>
</ul>
<h4 id="异常解决方案" tabindex="-1"><a class="header-anchor" href="#异常解决方案" aria-hidden="true">#</a> 异常解决方案</h4>
<ul>
<li>业务异常（BusinessException）
<ul>
<li>发送对应消息传递给用户，提醒规范操作
<ul>
<li>大家常见的就是提示用户名已存在或密码格式不正确等</li>
</ul>
</li>
</ul>
</li>
<li>系统异常（SystemException）
<ul>
<li>发送固定消息传递给用户，安抚用户
<ul>
<li>系统繁忙，请稍后再试</li>
<li>系统正在维护升级，请稍后再试</li>
<li>系统出问题，请联系系统管理员等</li>
</ul>
</li>
<li>发送特定消息给运维人员，提醒维护
<ul>
<li>可以发送短信、邮箱或者是公司内部通信软件</li>
</ul>
</li>
<li>记录日志
<ul>
<li>发消息和记录日志对用户来说是不可见的，属于后台程序</li>
</ul>
</li>
</ul>
</li>
<li>其他异常（Exception）
<ul>
<li>发送固定消息传递给用户，安抚用户</li>
<li>发送特定消息给编程人员，提醒维护（纳入预期范围内）
<ul>
<li>一般是程序没有考虑全，比如未做非空校验等</li>
</ul>
</li>
<li>记录日志</li>
</ul>
</li>
</ul>
<h4 id="异常解决方案的具体实现" tabindex="-1"><a class="header-anchor" href="#异常解决方案的具体实现" aria-hidden="true">#</a> 异常解决方案的具体实现</h4>
<ol>
<li>自定义异常类</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//自定义异常处理器，用于封装异常信息，对异常进行分类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SystemException</span> <span class="token keyword">extends</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> code<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCode</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">SystemException</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> code<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">SystemException</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> code<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> cause<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> cause<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">//自定义异常处理器，用于封装异常信息，对异常进行分类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BusinessException</span> <span class="token keyword">extends</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> code<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCode</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">BusinessException</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> code<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">BusinessException</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> code<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> cause<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> cause<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>code <span class="token operator">=</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明:</strong></p>
<ul>
<li>让自定义异常类继承<code v-pre>RuntimeException</code>的好处是，后期在抛出这两个异常的时候，就不用在try...catch...或throws了</li>
<li>自定义异常类中添加<code v-pre>code</code>属性的原因是为了更好的区分异常是来自哪个业务的</li>
</ul>
<ol start="2">
<li>将其他异常包成自定义异常</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Book</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//模拟业务异常，包装成自定义异常</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>id <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">BusinessException</span><span class="token punctuation">(</span><span class="token class-name">Code</span><span class="token punctuation">.</span>BUSINESS_ERR<span class="token punctuation">,</span><span class="token string">"请不要使用你的技术挑战我的耐性!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//模拟系统异常，将可能出现的异常进行包装，转换成自定义异常</span>
    <span class="token keyword">try</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SystemException</span><span class="token punctuation">(</span><span class="token class-name">Code</span><span class="token punctuation">.</span>SYSTEM_TIMEOUT_ERR<span class="token punctuation">,</span><span class="token string">"服务器访问超时，请重试!"</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> bookDao<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体的包装方式有：</p>
<ul>
<li>方式一:<code v-pre>try{}catch(){}</code>在catch中重新throw我们自定义异常即可。</li>
<li>方式二:直接throw自定义异常即可</li>
</ul>
<ol start="3">
<li>处理器类中处理自定义异常</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//@RestControllerAdvice用于标识当前类为REST风格对应的异常处理器</span>
<span class="token annotation punctuation">@RestControllerAdvice</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProjectExceptionAdvice</span> <span class="token punctuation">{</span>
    <span class="token comment">//@ExceptionHandler用于设置当前处理器类对应的异常类型</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span><span class="token class-name">SystemException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">doSystemException</span><span class="token punctuation">(</span><span class="token class-name">SystemException</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//记录日志</span>
        <span class="token comment">//发送消息给运维</span>
        <span class="token comment">//发送邮件给开发人员,ex对象发送给开发人员</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token punctuation">(</span>ex<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span>ex<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span><span class="token class-name">BusinessException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">doBusinessException</span><span class="token punctuation">(</span><span class="token class-name">BusinessException</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token punctuation">(</span>ex<span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span>ex<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//除了自定义的异常处理器，保留对Exception类型的异常处理，用于处理非预期的异常</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span><span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">doOtherException</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//记录日志</span>
        <span class="token comment">//发送消息给运维</span>
        <span class="token comment">//发送邮件给开发人员,ex对象发送给开发人员</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Result</span><span class="token punctuation">(</span><span class="token class-name">Code</span><span class="token punctuation">.</span>SYSTEM_UNKNOW_ERR<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">"系统繁忙，请稍后再试！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>运行程序</li>
</ol>
<p><strong>小结</strong></p>
<p>以后项目中的异常处理方式为:</p>
<p><img src="https://s2.loli.net/2022/07/10/XkMYFlvOzirbyfW.png" alt="123" loading="lazy"></p>
<h2 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h2>
<ul>
<li>拦截器概念</li>
<li>入门案例</li>
<li>拦截器参数</li>
<li>拦截器工作流程分析</li>
</ul>
<h3 id="拦截器概念" tabindex="-1"><a class="header-anchor" href="#拦截器概念" aria-hidden="true">#</a> 拦截器概念</h3>
<p><img src="https://s2.loli.net/2022/07/10/G8wbHXezqVgypWJ.png" alt="1234" loading="lazy"></p>
<p>(1)浏览器发送一个请求会先到Tomcat的web服务器</p>
<p>(2)Tomcat服务器接收到请求以后，会去判断请求的是静态资源还是动态资源</p>
<p>(3)如果是静态资源，会直接到Tomcat的项目部署目录下去直接访问</p>
<p>(4)如果是动态资源，就需要交给项目的后台代码进行处理</p>
<p>(5)在找到具体的方法之前，我们可以去配置过滤器(可以配置多个)，按照顺序进行执行</p>
<p>(6)然后进入到到中央处理器(SpringMVC中的内容)，SpringMVC会根据配置的规则进行拦截</p>
<p>(7)如果满足规则，则进行处理，找到其对应的controller类中的方法进行执行,完成后返回结果</p>
<p>(8)如果不满足规则，则不进行处理</p>
<p>(9)这个时候，如果我们需要在每个Controller方法执行的前后添加业务，具体该如何来实现?</p>
<p>这个就是拦截器要做的事。</p>
<ul>
<li>
<p>拦截器（Interceptor）是一种动态拦截方法调用的机制，在SpringMVC中动态拦截控制器方法的执行</p>
</li>
<li>
<p>作用:</p>
<ul>
<li>在指定的方法调用前后执行预先设定的代码</li>
<li>阻止原始方法的执行</li>
<li>总结：拦截器就是用来做增强</li>
</ul>
</li>
<li>
<p>拦截器和过滤器在作用和执行顺序上也很相似</p>
</li>
</ul>
<p>所以这个时候，就有一个问题需要思考:拦截器和过滤器之间的区别是什么?</p>
<ul>
<li>归属不同：Filter属于Servlet技术，Interceptor属于SpringMVC技术</li>
<li>拦截内容不同：Filter对所有访问进行增强，Interceptor仅针对SpringMVC的访问进行增强</li>
</ul>
<h3 id="拦截器开发" tabindex="-1"><a class="header-anchor" href="#拦截器开发" aria-hidden="true">#</a> 拦截器开发</h3>
<ol>
<li>创建拦截器类</li>
</ol>
<p>让类实现HandlerInterceptor接口，重写接口中的三个方法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token comment">//定义拦截器类，实现HandlerInterceptor接口</span>
<span class="token comment">//注意当前类必须受Spring容器控制</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProjectInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">HandlerInterceptor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token comment">//原始方法调用前执行的内容</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"preHandle..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token comment">//原始方法调用后执行的内容</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token class-name">ModelAndView</span> modelAndView<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"postHandle..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token comment">//原始方法调用完成后执行的内容</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterCompletion</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"afterCompletion..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**注意:**拦截器类要被SpringMVC容器扫描到</p>
<ol start="2">
<li>配置拦截器类</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMvcSupport</span> <span class="token keyword">extends</span> <span class="token class-name">WebMvcConfigurationSupport</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ProjectInterceptor</span> projectInterceptor<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">addResourceHandlers</span><span class="token punctuation">(</span><span class="token class-name">ResourceHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">"/pages/**"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">"/pages/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//配置拦截器</span>
        registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span>projectInterceptor<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">"/books"</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>SpringMVC添加SpringMvcSupport包扫描</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"com.itheima.controller"</span><span class="token punctuation">,</span><span class="token string">"com.itheima.config"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMvcConfig</span><span class="token punctuation">{</span>
   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>
<p>运行程序测试</p>
</li>
<li>
<p>修改拦截器拦截规则</p>
</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMvcSupport</span> <span class="token keyword">extends</span> <span class="token class-name">WebMvcConfigurationSupport</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ProjectInterceptor</span> projectInterceptor<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">addResourceHandlers</span><span class="token punctuation">(</span><span class="token class-name">ResourceHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">"/pages/**"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">"/pages/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//配置拦截器</span>
        registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span>projectInterceptor<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">"/books"</span><span class="token punctuation">,</span><span class="token string">"/books/*"</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拦截器中的<code v-pre>preHandler</code>方法，如果返回true,则代表放行，会执行原始Controller类中要请求的方法，如果返回false，则代表拦截，后面的就不会再执行了</p>
<ol start="6">
<li>简化SpringMvcSupport的编写</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"com.itheima.controller"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token comment">//实现WebMvcConfigurer接口可以简化开发，但具有一定的侵入性</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMvcConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ProjectInterceptor</span> projectInterceptor<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//配置多拦截器</span>
        registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span>projectInterceptor<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">"/books"</span><span class="token punctuation">,</span><span class="token string">"/books/*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拦截器参数" tabindex="-1"><a class="header-anchor" href="#拦截器参数" aria-hidden="true">#</a> 拦截器参数</h3>
<h4 id="前置处理方法" tabindex="-1"><a class="header-anchor" href="#前置处理方法" aria-hidden="true">#</a> 前置处理方法</h4>
<p>原始方法之前运行preHandle</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span>
                         <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span>
                         <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"preHandle"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>request:请求对象</li>
<li>response:响应对象</li>
<li>handler:被调用的处理器对象，本质上是一个方法对象，对反射中的Method对象进行了再包装</li>
</ul>
<p>使用request对象可以获取请求数据中的内容，如获取请求头的<code v-pre>Content-Type</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> contentType <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">"Content-Type"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"preHandle..."</span><span class="token operator">+</span>contentType<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用handler参数，可以获取方法的相关信息</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">HandlerMethod</span> hm <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HandlerMethod</span><span class="token punctuation">)</span>handler<span class="token punctuation">;</span>
    <span class="token class-name">String</span> methodName <span class="token operator">=</span> hm<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//可以获取方法的名称</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"preHandle..."</span><span class="token operator">+</span>methodName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="后置处理方法" tabindex="-1"><a class="header-anchor" href="#后置处理方法" aria-hidden="true">#</a> 后置处理方法</h4>
<p>原始方法运行后运行，如果原始方法被拦截，则不执行</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span>
                       <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span>
                       <span class="token class-name">Object</span> handler<span class="token punctuation">,</span>
                       <span class="token class-name">ModelAndView</span> modelAndView<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"postHandle"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>modelAndView:如果处理器执行完成具有返回结果，可以读取到对应数据与页面信息，并进行调整</p>
<p>因为咱们现在都是返回json数据，所以该参数的使用率不高</p>
<h4 id="完成处理方法" tabindex="-1"><a class="header-anchor" href="#完成处理方法" aria-hidden="true">#</a> 完成处理方法</h4>
<p>拦截器最后执行的方法，无论原始方法是否执行</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterCompletion</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span>
                            <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span>
                            <span class="token class-name">Object</span> handler<span class="token punctuation">,</span>
                            <span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"afterCompletion"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这三个方法中，最常用的是<strong>preHandle</strong>,在这个方法中可以通过返回值来决定是否要进行放行，我们可以把业务逻辑放在该方法中，如果满足业务则返回true放行，不满足则返回false拦截</p>
<h3 id="拦截器链配置" tabindex="-1"><a class="header-anchor" href="#拦截器链配置" aria-hidden="true">#</a> 拦截器链配置</h3>
<ol>
<li>创建拦截器类</li>
</ol>
<p>实现接口，并重写接口中的方法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProjectInterceptor2</span> <span class="token keyword">implements</span> <span class="token class-name">HandlerInterceptor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"preHandle...222"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token class-name">ModelAndView</span> modelAndView<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"postHandle...222"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterCompletion</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span> <span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"afterCompletion...222"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>配置拦截器类</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"com.itheima.controller"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token comment">//实现WebMvcConfigurer接口可以简化开发，但具有一定的侵入性</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringMvcConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ProjectInterceptor</span> projectInterceptor<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ProjectInterceptor2</span> projectInterceptor2<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//配置多拦截器</span>
        registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span>projectInterceptor<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">"/books"</span><span class="token punctuation">,</span><span class="token string">"/books/*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span>projectInterceptor2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">"/books"</span><span class="token punctuation">,</span><span class="token string">"/books/*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>运行程序，观察顺序</li>
</ol>
<p>拦截器执行的顺序是和配置顺序有关。就和前面所提到的运维人员进入机房的案例，先进后出。</p>
<ul>
<li>当配置多个拦截器时，形成拦截器链</li>
<li>拦截器链的运行顺序参照拦截器添加顺序为准</li>
<li>当拦截器中出现对原始处理器的拦截，后面的拦截器均终止运行</li>
<li>当拦截器运行中断，仅运行配置在前面的拦截器的afterCompletion操作</li>
</ul>
</div></template>
