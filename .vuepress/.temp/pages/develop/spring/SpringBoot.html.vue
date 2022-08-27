<template><div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>本文介绍了SpringBoot框架，以便日后查阅。</p>
</div>
<p><code v-pre>SpringBoot</code> 是由 <code v-pre>Pivotal</code> 团队提供的全新框架，其设计目的是用来<strong>简化</strong> <code v-pre>Spring</code> 应用的<strong>初始搭建</strong>以及<strong>开发过程</strong>。</p>
<h2 id="springboot快速入门" tabindex="-1"><a class="header-anchor" href="#springboot快速入门" aria-hidden="true">#</a> SpringBoot快速入门</h2>
<h3 id="开发步骤" tabindex="-1"><a class="header-anchor" href="#开发步骤" aria-hidden="true">#</a> 开发步骤</h3>
<p><code v-pre>SpringBoot</code> 开发起来特别简单，分为如下几步：</p>
<ul>
<li>创建新模块，选择Spring初始化，并配置模块相关基础信息</li>
<li>选择当前模块需要使用的技术集</li>
<li>开发控制器类</li>
<li>运行自动生成的Application类</li>
</ul>
<blockquote>
<p>在创建好的工程中不需要创建配置类</p>
</blockquote>
<p><strong>创建 <code v-pre>Controller</code></strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/books"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"id ==> "</span><span class="token operator">+</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"hello , spring boot!"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spring与springboot对比" tabindex="-1"><a class="header-anchor" href="#spring与springboot对比" aria-hidden="true">#</a> Spring与SpringBoot对比</h3>
<p><img src="https://s2.loli.net/2022/08/14/qZoN3Gu9twpidOF.png" alt="1" loading="lazy"></p>
<ul>
<li>
<p><strong>坐标</strong></p>
<p><code v-pre>Spring</code> 程序中的坐标需要自己编写，而且坐标非常多</p>
<p><code v-pre>SpringBoot</code> 程序中的坐标是我们在创建工程时进行勾选自动生成的</p>
</li>
<li>
<p><strong>web3.0配置类</strong></p>
<p><code v-pre>Spring</code> 程序需要自己编写这个配置类。这个配置类大家之前编写过，肯定感觉很复杂</p>
<p><code v-pre>SpringBoot</code> 程序不需要我们自己书写</p>
</li>
<li>
<p><strong>配置类</strong></p>
<p><code v-pre>Spring/SpringMVC</code> 程序的配置类需要自己书写。而 <code v-pre>SpringBoot</code>  程序则不需要书写。</p>
</li>
</ul>
<blockquote>
<p><strong>注意：基于Idea的 <code v-pre>Spring Initializr</code> 快速构建 <code v-pre>SpringBoot</code> 工程时需要联网</strong></p>
</blockquote>
<h3 id="springboot工程快速启动" tabindex="-1"><a class="header-anchor" href="#springboot工程快速启动" aria-hidden="true">#</a> SpringBoot工程快速启动</h3>
<p>后端可以将 <code v-pre>SpringBoot</code> 工程打成 <code v-pre>jar</code> 包，该 <code v-pre>jar</code> 包运行不依赖于 <code v-pre>Tomcat</code> 和 <code v-pre>Idea</code> 这些工具也可以正常运行，只是这个 <code v-pre>jar</code> 包在运行过程中连接和我们自己程序相同的 <code v-pre>Mysql</code> 数据库即可</p>
<h4 id="打包" tabindex="-1"><a class="header-anchor" href="#打包" aria-hidden="true">#</a> 打包</h4>
<p><code v-pre>pom.xml</code> 中配置了如下插件</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们只需要使用 <code v-pre>Maven</code> 的 <code v-pre>package</code> 指令打包就会在 <code v-pre>target</code> 目录下生成对应的 <code v-pre>Jar</code> 包。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>该插件必须配置，不然打好的 <code v-pre>jar</code> 包也是有问题的</p>
</div>
<h4 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h4>
<p>进入 <code v-pre>jar</code> 包所在位置，在 <code v-pre>命令提示符</code> 中输入如下命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>jar -jar springboot_01_quickstart-0.0.1-SNAPSHOT.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行上述命令就可以看到 <code v-pre>SpringBoot</code> 运行的日志信息</p>
<h2 id="springboot概述" tabindex="-1"><a class="header-anchor" href="#springboot概述" aria-hidden="true">#</a> SpringBoot概述</h2>
<p><code v-pre>SpringBoot</code> 是由Pivotal团队提供的全新框架，其设计目的是用来<strong>简化</strong>Spring应用的<strong>初始搭建</strong>以及<strong>开发过程</strong></p>
<p>原始 <code v-pre>Spring</code> 环境搭建和开发存在以下问题：</p>
<ul>
<li>配置繁琐</li>
<li>依赖设置繁琐</li>
</ul>
<p><code v-pre>SpringBoot</code> 程序优点恰巧就是针对 <code v-pre>Spring</code> 的缺点</p>
<ul>
<li>自动配置。这个是用来解决 <code v-pre>Spring</code> 程序配置繁琐的问题</li>
<li>起步依赖。这个是用来解决 <code v-pre>Spring</code> 程序依赖设置繁琐的问题</li>
<li>辅助功能（内置服务器,...）。我们在启动 <code v-pre>SpringBoot</code> 程序时既没有使用本地的 <code v-pre>tomcat</code> 也没有使用 <code v-pre>tomcat</code> 插件，而是使用 <code v-pre>SpringBoot</code> 内置的服务器</li>
</ul>
<h3 id="起步依赖" tabindex="-1"><a class="header-anchor" href="#起步依赖" aria-hidden="true">#</a> 起步依赖</h3>
<p>我们使用 <code v-pre>Spring Initializr</code>  方式创建的 <code v-pre>Maven</code> 工程的的 <code v-pre>pom.xml</code> 配置文件中自动生成了很多包含 <code v-pre>starter</code> 的依赖,这些依赖就是<strong>启动依赖</strong></p>
<p><strong>结论：以后需要使用技术，只需要引入该技术对应的起步依赖即可</strong></p>
<h3 id="程序启动" tabindex="-1"><a class="header-anchor" href="#程序启动" aria-hidden="true">#</a> 程序启动</h3>
<p>创建的每一个 <code v-pre>SpringBoot</code> 程序时都包含一个类似于下面的类，我们将这个类称作引导类</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Springboot01QuickstartApplication</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Springboot01QuickstartApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<ul>
<li>
<p><code v-pre>SpringBoot</code> 在创建项目时，采用jar的打包方式</p>
</li>
<li>
<p><code v-pre>SpringBoot</code> 的引导类是项目的入口，运行 <code v-pre>main</code> 方法就可以启动项目</p>
</li>
</ul>
</div>
<p>因为我们在 <code v-pre>pom.xml</code> 中配置了 <code v-pre>spring-boot-starter-web</code> 依赖，而该依赖通过前面的学习知道它依赖 <code v-pre>tomcat</code> ，所以运行 <code v-pre>main</code> 方法就可以使用 <code v-pre>tomcat</code> 启动咱们的工程</p>
<h3 id="切换web服务器" tabindex="-1"><a class="header-anchor" href="#切换web服务器" aria-hidden="true">#</a> 切换web服务器</h3>
<p>要切换 <code v-pre>web</code> 服务器就需要将默认的 <code v-pre>tomcat</code> 服务器给排除掉，怎么排除呢？使用 <code v-pre>exclusion</code> 标签</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-tomcat<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入 <code v-pre>jetty</code> 服务器</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-jetty<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2>
<h3 id="配置文件格式" tabindex="-1"><a class="header-anchor" href="#配置文件格式" aria-hidden="true">#</a> 配置文件格式</h3>
<p><code v-pre>SpringBoot</code> 程序如何修改端口呢？<code v-pre>SpringBoot</code> 提供了多种属性配置方式</p>
<ul>
<li>
<p><code v-pre>application.properties</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server.port=80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>application.yml</code></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
	<span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">81</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>application.yaml</code></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
	<span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">82</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><code v-pre>SpringBoot</code> 程序的配置文件名必须是 <code v-pre>application</code> ，只是后缀名不同而已</p>
</div>
<h3 id="三种配合文件的优先级" tabindex="-1"><a class="header-anchor" href="#三种配合文件的优先级" aria-hidden="true">#</a> 三种配合文件的优先级</h3>
<p>三种配置文件的优先级是：</p>
<p><code v-pre>application.properties</code>  &gt;  <code v-pre>application.yml</code>   &gt;  <code v-pre>application.yaml</code></p>
<blockquote>
<p>注意：</p>
<ul>
<li>
<p><code v-pre>SpringBoot</code> 核心配置文件名为 <code v-pre>application</code></p>
</li>
<li>
<p><code v-pre>SpringBoot</code> 内置属性过多，且所有属性集中在一起修改，在使用时，通过提示键+关键字修改属性</p>
<p>例如要设置日志的级别时，可以在配置文件中书写 <code v-pre>logging</code>，就会提示出来。配置内容如下</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span>
    <span class="token key atrule">root</span><span class="token punctuation">:</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</blockquote>
<h3 id="yaml格式" tabindex="-1"><a class="header-anchor" href="#yaml格式" aria-hidden="true">#</a> yaml格式</h3>
<p>**YAML（YAML Ain't Markup Language），一种数据序列化格式。**这种格式的配置文件在近些年已经占有主导地位</p>
<p><strong>优点：</strong></p>
<ul>
<li>
<p>容易阅读</p>
<p><code v-pre>yaml</code> 类型的配置文件比 <code v-pre>xml</code> 类型的配置文件更容易阅读，结构更加清晰</p>
</li>
<li>
<p>容易与脚本语言交互</p>
</li>
<li>
<p>以数据为核心，重数据轻格式</p>
<p><code v-pre>yaml</code> 更注重数据，而 <code v-pre>xml</code> 更注重格式</p>
</li>
</ul>
<p><strong>YAML 文件扩展名：</strong></p>
<ul>
<li><code v-pre>.yml</code> (主流)</li>
<li><code v-pre>.yaml</code></li>
</ul>
<p>上面两种后缀名都可以，以后使用更多的还是 <code v-pre>yml</code> 的</p>
<h4 id="语法规则" tabindex="-1"><a class="header-anchor" href="#语法规则" aria-hidden="true">#</a> 语法规则</h4>
<ul>
<li>
<p>大小写敏感</p>
</li>
<li>
<p>属性层级关系使用多行描述，每行结尾使用冒号结束</p>
</li>
<li>
<p>使用缩进表示层级关系，同层级左侧对齐，只允许使用空格（不允许使用Tab键）</p>
<p>空格的个数并不重要，只要保证同层级的左侧对齐即可。</p>
</li>
<li>
<p>属性值前面添加空格（属性名与属性值之间使用冒号+空格作为分隔）</p>
</li>
<li>
<p># 表示注释</p>
</li>
</ul>
<p>核心规则：数据前面要加空格与冒号隔开</p>
<p>数组数据在数据书写位置的下方使用减号作为数据开始符号，每行书写一个数据，减号与数据间空格分隔，例如</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">enterprise</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> itcast
  <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">16</span>
  <span class="token key atrule">tel</span><span class="token punctuation">:</span> <span class="token number">4006184000</span>
  <span class="token key atrule">subject</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> Java
    <span class="token punctuation">-</span> 前端
    <span class="token punctuation">-</span> 大数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yaml配置文件数据读取" tabindex="-1"><a class="header-anchor" href="#yaml配置文件数据读取" aria-hidden="true">#</a> yaml配置文件数据读取</h3>
<h4 id="使用-value注解" tabindex="-1"><a class="header-anchor" href="#使用-value注解" aria-hidden="true">#</a> 使用 @Value注解</h4>
<p>使用 <code v-pre>@Value(&quot;表达式&quot;)</code> 注解可以从配合文件中读取数据，注解中用于读取属性名引用方式是：<code v-pre>${一级属性名.二级属性名……}</code></p>
<p>我们可以在 <code v-pre>BookController</code> 中使用 <code v-pre>@Value</code>  注解读取配合文件数据，如下</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/books"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookController</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${lesson}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> lesson<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${server.port}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> port<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${enterprise.subject[0]}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> subject_00<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>lesson<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>subject_00<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"hello , spring boot!"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="environment对象" tabindex="-1"><a class="header-anchor" href="#environment对象" aria-hidden="true">#</a> Environment对象</h4>
<p>上面方式读取到的数据特别零散，<code v-pre>SpringBoot</code> 还可以使用 <code v-pre>@Autowired</code> 注解注入 <code v-pre>Environment</code> 对象的方式读取数据。这种方式 <code v-pre>SpringBoot</code> 会将配置文件中所有的数据封装到 <code v-pre>Environment</code> 对象中，如果需要使用哪个数据只需要通过调用 <code v-pre>Environment</code> 对象的 <code v-pre>getProperty(String name)</code> 方法获取。具体代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/books"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookController</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">Environment</span> env<span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"lesson"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"enterprise.name"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">"enterprise.subject[0]"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"hello , spring boot!"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：这种方式，框架内容大量数据，而在开发中我们很少使用</p>
<h4 id="自定义对象" tabindex="-1"><a class="header-anchor" href="#自定义对象" aria-hidden="true">#</a> 自定义对象</h4>
<p><code v-pre>SpringBoot</code> 还提供了将配置文件中的数据封装到我们自定义的实体类对象中的方式。具体操作如下：</p>
<ul>
<li>
<p>将实体类 <code v-pre>bean</code> 的创建交给 <code v-pre>Spring</code> 管理。</p>
<p>在类上添加 <code v-pre>@Component</code> 注解</p>
</li>
<li>
<p>使用 <code v-pre>@ConfigurationProperties</code> 注解表示加载配置文件</p>
<p>在该注解中也可以使用 <code v-pre>prefix</code> 属性指定只加载指定前缀的数据</p>
</li>
<li>
<p>在 <code v-pre>BookController</code> 中进行注入</p>
</li>
</ul>
<p><strong>具体代码如下：</strong></p>
<p><code v-pre>Enterprise</code> 实体类内容如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">"enterprise"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Enterprise</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> tel<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> subject<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getTel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> tel<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setTel</span><span class="token punctuation">(</span><span class="token class-name">String</span> tel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tel <span class="token operator">=</span> tel<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> subject<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSubject</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> subject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subject <span class="token operator">=</span> subject<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Enterprise{"</span> <span class="token operator">+</span>
                <span class="token string">"name='"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", age="</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token string">", tel='"</span> <span class="token operator">+</span> tel <span class="token operator">+</span> <span class="token char">'\''</span> <span class="token operator">+</span>
                <span class="token string">", subject="</span> <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>subject<span class="token punctuation">)</span> <span class="token operator">+</span>
                <span class="token char">'}'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>BookController</code> 内容如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/books"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookController</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">Enterprise</span> enterprise<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>enterprise<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>enterprise<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>enterprise<span class="token punctuation">.</span><span class="token function">getSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>enterprise<span class="token punctuation">.</span><span class="token function">getTel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>enterprise<span class="token punctuation">.</span><span class="token function">getSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">"hello , spring boot!"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>使用第三种方式，在实体类上有如下警告提示</p>
</blockquote>
<p><img src="https://s2.loli.net/2022/08/14/KgikLwJD14H7nCd.png" alt="2" loading="lazy"></p>
<p>这个警告提示解决是在 <code v-pre>pom.xml</code> 中添加如下依赖即可</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-configuration-processor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多环境配置" tabindex="-1"><a class="header-anchor" href="#多环境配置" aria-hidden="true">#</a> 多环境配置</h3>
<p><code v-pre>SpringBoot</code> 给开发者提供了多环境的快捷配置，需要切换环境时只需要改一个配置即可。不同类型的配置文件多环境开发的配置都不相同，接下来对不同类型的配置文件进行说明</p>
<h4 id="yaml文件" tabindex="-1"><a class="header-anchor" href="#yaml文件" aria-hidden="true">#</a> yaml文件</h4>
<p>在 <code v-pre>application.yml</code> 中使用 <code v-pre>---</code> 来分割不同的配置，内容如下</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment">#开发</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> dev <span class="token comment">#给开发环境起的名字</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
<span class="token punctuation">---</span>
<span class="token comment">#生产</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> pro <span class="token comment">#给生产环境起的名字</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">81</span>
<span class="token punctuation">---</span>
<span class="token comment">#测试</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> test <span class="token comment">#给测试环境起的名字</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">82</span>
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面配置中 <code v-pre>spring.profiles</code> 是用来给不同的配置起名字的。而如何告知 <code v-pre>SpringBoot</code> 使用哪段配置呢？可以使用如下配置来启用一段配置</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment">#设置启用的环境</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>  
	<span class="token key atrule">profiles</span><span class="token punctuation">:</span>    
		<span class="token key atrule">active</span><span class="token punctuation">:</span> dev  <span class="token comment">#表示使用的是开发环境的配置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>[!attention]</p>
<p>在上面配置中给不同配置起名字的 <code v-pre>spring.profiles</code> 配置项已经过时。最新用来起名字的配置项是</p>
</blockquote>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment">#开发</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">config</span><span class="token punctuation">:</span>
    <span class="token key atrule">activate</span><span class="token punctuation">:</span>
      <span class="token key atrule">on-profile</span><span class="token punctuation">:</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="properties文件" tabindex="-1"><a class="header-anchor" href="#properties文件" aria-hidden="true">#</a> properties文件</h4>
<p><code v-pre>properties</code> 类型的配置文件配置多环境需要定义不同的配置文件</p>
<ul>
<li>
<p><code v-pre>application-dev.properties</code> 是开发环境的配置文件。我们在该文件中配置端口号为 <code v-pre>80</code></p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>application-test.properties</code> 是测试环境的配置文件。我们在该文件中配置端口号为 <code v-pre>81</code></p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">81</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>application-pro.properties</code> 是生产环境的配置文件。我们在该文件中配置端口号为 <code v-pre>82</code></p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">82</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<p><code v-pre>SpringBoot</code> 只会默认加载名为 <code v-pre>application.properties</code> 的配置文件，所以需要在 <code v-pre>application.properties</code> 配置文件中设置启用哪个配置文件，配置如下:</p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">spring.profiles.active</span><span class="token punctuation">=</span><span class="token value attr-value">pro</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="命令行启动参数设置" tabindex="-1"><a class="header-anchor" href="#命令行启动参数设置" aria-hidden="true">#</a> 命令行启动参数设置</h4>
<p><code v-pre>SpringBoot</code> 提供了在运行 <code v-pre>jar</code> 时设置开启指定的环境的方式，如下</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>java –jar xxx.jar –-spring.profiles.active<span class="token operator">=</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么这种方式能不能临时修改端口号呢？也是可以的，可以通过如下方式</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>java –jar xxx.jar –-server.port<span class="token operator">=</span><span class="token number">88</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然也可以同时设置多个配置，比如即指定启用哪个环境配置，又临时指定端口，如下</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>java –jar springboot.jar –-server.port<span class="token operator">=</span><span class="token number">88</span> –-spring.profiles.active<span class="token operator">=</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>大家进行测试后就会发现命令行设置的端口号优先级高（也就是使用的是命令行设置的端口号），配置的优先级其实 <code v-pre>SpringBoot</code> 官网已经进行了说明，参见 :</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置文件分类" tabindex="-1"><a class="header-anchor" href="#配置文件分类" aria-hidden="true">#</a> 配置文件分类</h3>
<p><code v-pre>SpringBoot</code> 定义了配置文件不同的放置的位置；而放在不同位置的优先级时不同的。</p>
<p><code v-pre>SpringBoot</code> 中4级配置文件放置位置：</p>
<ul>
<li>1级：classpath：application.yml</li>
<li>2级：classpath：config/application.yml</li>
<li>3级：file ：application.yml</li>
<li>4级：file ：config/application.yml</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>级别越高优先级越高</p>
</div>
<h2 id="springboot整合junit" tabindex="-1"><a class="header-anchor" href="#springboot整合junit" aria-hidden="true">#</a> SpringBoot整合junit</h2>
<p><code v-pre>SpringBoot</code> 整合 <code v-pre>junit</code> 特别简单，分为以下三步完成</p>
<ul>
<li>在测试类上添加 <code v-pre>SpringBootTest</code> 注解</li>
<li>使用 <code v-pre>@Autowired</code> 注入要测试的资源</li>
<li>定义测试方法进行测试</li>
</ul>
<p>在 <code v-pre>test/java</code> 下创建 <code v-pre>com.itheima</code> 包，在该包下创建测试类，将 <code v-pre>BookService</code> 注入到该测试类中</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">Springboot07TestApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">BookService</span> bookService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        bookService<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：这里的引导类所在包必须是测试类所在包及其子包！</p>
<p>例如：</p>
<ul>
<li>引导类所在包是 <code v-pre>com.itheima</code></li>
<li>测试类所在包是 <code v-pre>com.itheima</code></li>
</ul>
<p>如果不满足这个要求的话，就需要在使用 <code v-pre>@SpringBootTest</code> 注解时，使用 <code v-pre>classes</code> 属性指定引导类的字节码对象。如 <code v-pre>@SpringBootTest(classes = Springboot07TestApplication.class)</code></p>
</blockquote>
<h2 id="springboot整合mybatis" tabindex="-1"><a class="header-anchor" href="#springboot整合mybatis" aria-hidden="true">#</a> SpringBoot整合mybatis</h2>
<h3 id="创建模块" tabindex="-1"><a class="header-anchor" href="#创建模块" aria-hidden="true">#</a> 创建模块</h3>
<ul>
<li>创建新模块，选择 <code v-pre>Spring Initializr</code>，并配置模块相关基础信息</li>
<li>选择当前模块需要使用的技术集（MyBatis、MySQL）</li>
</ul>
<h3 id="定义实体类" tabindex="-1"><a class="header-anchor" href="#定义实体类" aria-hidden="true">#</a> 定义实体类</h3>
<p>在 <code v-pre>com.itheima.domain</code> 包下定义实体类 <code v-pre>Book</code>，内容如下</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> type<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> description<span class="token punctuation">;</span>
    
    <span class="token comment">//setter and  getter</span>
    
    <span class="token comment">//toString</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义dao接口" tabindex="-1"><a class="header-anchor" href="#定义dao接口" aria-hidden="true">#</a> 定义dao接口</h3>
<p>在 <code v-pre>com.itheima.dao</code> 包下定义 <code v-pre>BookDao</code> 接口，内容如下</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BookDao</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">"select * from tbl_book where id = #{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Book</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义测试类" tabindex="-1"><a class="header-anchor" href="#定义测试类" aria-hidden="true">#</a> 定义测试类</h3>
<p>在 <code v-pre>test/java</code> 下定义包 <code v-pre>com.itheima</code> ，在该包下测试类，内容如下</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">Springboot08MybatisApplicationTests</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">BookDao</span> bookDao<span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">void</span> <span class="token function">testGetById</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Book</span> book <span class="token operator">=</span> bookDao<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>book<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编写配置" tabindex="-1"><a class="header-anchor" href="#编写配置" aria-hidden="true">#</a> 编写配置</h3>
<p>在 <code v-pre>application.yml</code> 配置文件中配置如下内容</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/ssm_db
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3>
<blockquote>
<p><code v-pre>SpringBoot</code> 版本低于2.4.3(不含)，Mysql驱动版本大于8.0时，需要在url连接串中配置时区 <code v-pre>jdbc:mysql://localhost:3306/ssm_db?serverTimezone=UTC</code>，或在MySQL数据库端配置时区解决此问题</p>
</blockquote>
<h3 id="使用druid数据源" tabindex="-1"><a class="header-anchor" href="#使用druid数据源" aria-hidden="true">#</a> 使用Druid数据源</h3>
<p>现在我们并没有指定数据源，<code v-pre>SpringBoot</code> 有默认的数据源，我们也可以指定使用 <code v-pre>Druid</code> 数据源，按照以下步骤实现</p>
<ul>
<li>
<p>导入 <code v-pre>Druid</code> 依赖</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.16<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在 <code v-pre>application.yml</code> 配置文件配置</p>
<p>可以通过 <code v-pre>spring.datasource.type</code> 来配置使用什么数据源。配置文件内容可以改进为</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/ssm_db<span class="token punctuation">?</span>serverTimezone=UTC
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> root
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2>
<p>主要从以下几部分完成</p>
<ol>
<li>
<p>pom.xml</p>
<p>配置起步依赖，必要的资源坐标(druid)</p>
</li>
<li>
<p>application.yml</p>
<p>设置数据源、端口等</p>
</li>
<li>
<p>配置类</p>
<p>全部删除</p>
</li>
<li>
<p>dao</p>
<p>设置@Mapper</p>
</li>
<li>
<p>测试类</p>
</li>
<li>
<p>页面</p>
<p>放置在resources目录下的static目录中</p>
</li>
</ol>
<h3 id="配置文件-1" tabindex="-1"><a class="header-anchor" href="#配置文件-1" aria-hidden="true">#</a> 配置文件</h3>
<p>在 <code v-pre>application.yml</code> 配置文件中需要配置如下内容</p>
<ul>
<li>服务的端口号</li>
<li>连接数据库的信息</li>
<li>数据源</li>
</ul>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>

<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/ssm_db <span class="token comment">#?servierTimezone=UTC</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h3>
<p>静态资源需要放在 <code v-pre>resources</code> 下的 <code v-pre>static</code> 下</p>
</div></template>
