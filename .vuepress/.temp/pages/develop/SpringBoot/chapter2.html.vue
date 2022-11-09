<template><div><h2 id="属性配置" tabindex="-1"><a class="header-anchor" href="#属性配置" aria-hidden="true">#</a> 属性配置</h2>
<p>SpringBoot通过配置文件application.properties就可以修改默认的配置</p>
<p>比如修改tomcat端口：</p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所以：</p>
<ol>
<li>SpringBoot程序可以在application.properties文件中进行属性配置</li>
<li>application.properties文件中只要输入要配置的属性关键字就可以根据提示进行设置</li>
<li>SpringBoot将配置信息集中在一个文件中写，不管你是服务器的配置，还是数据库的配置，总之都写在一起，逃离一个项目十几种配置文件格式的尴尬局面</li>
</ol>
<p><strong>总结</strong></p>
<ol>
<li>SpringBoot默认配置文件是application.properties</li>
</ol>
<p><strong>关闭运行日志图表（banner)</strong></p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">spring.main.banner-mode</span><span class="token punctuation">=</span><span class="token value attr-value">off</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>设置运行日志的显示级别</strong></p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">logging.level.root</span><span class="token punctuation">=</span><span class="token value attr-value">debug</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开SpringBoot的官网，找到SpringBoot官方文档，打开查看附录中的Application Properties就可以获取到对应的配置项了，网址奉上：<a href="https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#application-properties" target="_blank" rel="noopener noreferrer">https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#application-properties<ExternalLinkIcon/></a></p>
<p><b>温馨提示</b></p>
<p>​	所有的starter中都会依赖下面这个starter，叫做spring-boot-starter。这个starter是所有的SpringBoot的starter的基础依赖，里面定义了SpringBoot相关的基础配置</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.5.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>compile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结</strong></p>
<ol>
<li>SpringBoot中导入对应starter后，提供对应配置属性</li>
<li>书写SpringBoot配置采用关键字+提示形式书写</li>
</ol>
<h2 id="配置文件分类" tabindex="-1"><a class="header-anchor" href="#配置文件分类" aria-hidden="true">#</a> 配置文件分类</h2>
<p>SpringBoot除了支持properties格式的配置文件，还支持另外两种格式的配置文件。分别如下:</p>
<ul>
<li>
<p>properties格式</p>
</li>
<li>
<p>yml格式</p>
</li>
<li>
<p>yaml格式</p>
</li>
<li>
<p>application.properties（properties格式）</p>
</li>
</ul>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>application.yml（yml格式）</li>
</ul>
<div class="language-YML ext-YML line-numbers-mode"><pre v-pre class="language-YML"><code>server:
  port: 81
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>application.yaml（yaml格式）</li>
</ul>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">82</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>仔细看会发现yml格式和yaml格式除了文件名后缀不一样，格式完全一样，是这样的，yml和yaml文件格式就是一模一样的，只是文件后缀不同，所以可以合并成一种格式来看。</p>
<p><strong>总结</strong></p>
<ol>
<li>SpringBoot提供了3种配置文件的格式
<ul>
<li>properties（传统格式/默认格式）</li>
<li><strong>yml</strong>（主流格式）</li>
<li>yaml</li>
</ul>
</li>
</ol>
<h3 id="配置文件优先级" tabindex="-1"><a class="header-anchor" href="#配置文件优先级" aria-hidden="true">#</a> 配置文件优先级</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>application.properties  >  application.yml  >  application.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>每个配置文件中的项都会生效，只不过如果多个配置文件中有相同类型的配置会优先级高的文件覆盖优先级的文件中的配置。如果配置项不同的话，那所有的配置项都会生效。</p>
<p><strong>总结</strong></p>
<ol>
<li>配置文件间的加载优先级	properties（最高）&gt;  yml  &gt;  yaml（最低）</li>
<li>不同配置文件中相同配置按照加载优先级相互覆盖，不同配置文件中不同配置全部保留</li>
</ol>
<h3 id="教你一招-自动提示功能消失解决方案" tabindex="-1"><a class="header-anchor" href="#教你一招-自动提示功能消失解决方案" aria-hidden="true">#</a> 教你一招：自动提示功能消失解决方案</h3>
<p><strong>步骤①</strong>：打开设置，【Files】→【Project Structure...】</p>
<p><strong>步骤②</strong>：在弹出窗口中左侧选择【Facets】，右侧选中Spring路径下对应的模块名称，也就是你自动提示功能消失的那个模块</p>
<p><strong>步骤③</strong>：点击Customize Spring Boot按钮，此时可以看到当前模块对应的配置文件是哪些了。如果没有你想要称为配置文件的文件格式，就有可能无法弹出提示</p>
<p><img src="https://s2.loli.net/2022/10/05/3myIAetw4iE1zUD.png" alt="image-20211126160946448.png" loading="lazy"></p>
<p><img src="https://s2.loli.net/2022/10/05/dZ8huND9mQBS4Y3.png" alt="image-20211126160954338.png" loading="lazy"></p>
<p><strong>步骤④</strong>：选择添加配置文件，然后选中要作为配置文件的具体文件就OK了</p>
<p><strong>总结</strong></p>
<ol>
<li>
<p>指定SpringBoot配置文件</p>
<ul>
<li>Setting → Project Structure → Facets</li>
<li>选中对应项目/工程</li>
<li>Customize Spring Boot</li>
<li>选择配置文件</li>
</ul>
</li>
</ol>
<h2 id="yaml文件" tabindex="-1"><a class="header-anchor" href="#yaml文件" aria-hidden="true">#</a> yaml文件</h2>
<p>SpringBoot的配置以后主要使用yml结尾的这种文件格式，并且在书写时可以通过提示的形式加载正确的格式。</p>
<p>YAML（YAML Ain't Markup Language），一种数据序列化格式。具有容易阅读、容易与脚本语言交互、以数据为核心，重数据轻格式的特点。常见的文件扩展名有两种：</p>
<ul>
<li>
<p>.yml格式（主流）</p>
</li>
<li>
<p>.yaml格式</p>
<p>对于文件自身在书写时，具有严格的语法格式要求，具体如下：</p>
</li>
</ul>
<ol>
<li>大小写敏感</li>
<li>属性层级关系使用多行描述，<strong>每行结尾使用冒号结束</strong></li>
<li>使用缩进表示层级关系，同层级左侧对齐，只允许使用空格（不允许使用Tab键）</li>
<li>属性值前面添加空格（属性名与属性值之间使用冒号+空格作为分隔）</li>
<li>#号 表示注释</li>
</ol>
<p>核心的一条规则要记住，<b>数据前面要加空格与冒号隔开</b></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">boolean</span><span class="token punctuation">:</span> <span class="token boolean important">TRUE</span>  						<span class="token comment">#TRUE,true,True,FALSE,false，False均可</span>
<span class="token key atrule">float</span><span class="token punctuation">:</span> <span class="token number">3.14</span>    						<span class="token comment">#6.8523015e+5  #支持科学计数法</span>
<span class="token key atrule">int</span><span class="token punctuation">:</span> <span class="token number">123</span>       						<span class="token comment">#0b1010_0111_0100_1010_1110    #支持二进制、八进制、十六进制</span>
<span class="token key atrule">null</span><span class="token punctuation">:</span> <span class="token null important">~</span>        						<span class="token comment">#使用~表示null</span>
<span class="token key atrule">string</span><span class="token punctuation">:</span> HelloWorld      			<span class="token comment">#字符串可以直接书写</span>
<span class="token key atrule">string2</span><span class="token punctuation">:</span> <span class="token string">"Hello World"</span>  			<span class="token comment">#可以使用双引号包裹特殊字符</span>
<span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2018-02-17</span>        			<span class="token comment">#日期必须使用yyyy-MM-dd格式</span>
<span class="token key atrule">datetime</span><span class="token punctuation">:</span> <span class="token datetime number">2018-02-17T15:02:31+08:00</span>  <span class="token comment">#时间和日期之间使用T连接，最后使用+代表时区</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	此外，yaml格式中也可以表示数组，在属性名书写位置的下方使用减号作为数据开始符号，每行书写一个数据，减号与数据间空格分隔</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">subject</span><span class="token punctuation">:</span>
	<span class="token punctuation">-</span> Java
	<span class="token punctuation">-</span> 前端
	<span class="token punctuation">-</span> 大数据
<span class="token key atrule">enterprise</span><span class="token punctuation">:</span>
	<span class="token key atrule">name</span><span class="token punctuation">:</span> itcast
    <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">16</span>
    <span class="token key atrule">subject</span><span class="token punctuation">:</span>
    	<span class="token punctuation">-</span> Java
        <span class="token punctuation">-</span> 前端
        <span class="token punctuation">-</span> 大数据
<span class="token key atrule">likes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>王者荣耀<span class="token punctuation">,</span>刺激战场<span class="token punctuation">]</span>			<span class="token comment">#数组书写缩略格式</span>
<span class="token key atrule">users</span><span class="token punctuation">:</span>							 <span class="token comment">#对象数组格式一</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Tom
   	<span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">4</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Jerry
    <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">5</span>
<span class="token key atrule">users</span><span class="token punctuation">:</span>							 <span class="token comment">#对象数组格式二</span>
  <span class="token punctuation">-</span>  
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Tom
    <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">4</span>
  <span class="token punctuation">-</span>   
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Jerry
    <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">5</span>			    
<span class="token key atrule">users2</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span>Tom <span class="token punctuation">,</span> age<span class="token punctuation">:</span><span class="token number">4</span> <span class="token punctuation">}</span> <span class="token punctuation">,</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span>Jerry <span class="token punctuation">,</span> age<span class="token punctuation">:</span><span class="token number">5</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span>	<span class="token comment">#对象数组缩略格式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结</strong></p>
<ol>
<li>yaml语法规则
<ul>
<li>大小写敏感</li>
<li>属性层级关系使用多行描述，每行结尾使用冒号结束</li>
<li>使用缩进表示层级关系，同层级左侧对齐，只允许使用空格（不允许使用Tab键）</li>
<li>属性值前面添加空格（属性名与属性值之间使用冒号+空格作为分隔）</li>
<li>#号 表示注释</li>
</ul>
</li>
<li>注意属性名冒号后面与数据之间有一个<strong>空格</strong></li>
<li>字面值、对象数据格式、数组数据格式</li>
</ol>
<h2 id="yaml数据读取" tabindex="-1"><a class="header-anchor" href="#yaml数据读取" aria-hidden="true">#</a> yaml数据读取</h2>
<p>对于yaml文件中的数据，其实你就可以想象成这就是一个小型的数据库，里面保存有若干数据，每个数据都有一个独立的名字，如果你想读取里面的数据，肯定是支持的，下面就介绍3种读取数据的方式</p>
<h3 id="读取单一数据" tabindex="-1"><a class="header-anchor" href="#读取单一数据" aria-hidden="true">#</a> 读取单一数据</h3>
<p>yaml中保存的单个数据，可以使用Spring中的注解直接读取，使用@Value可以读取单个数据，属性名引用方式：<b>${一级属性名.二级属性名……}</b></p>
<p><img src="https://s2.loli.net/2022/10/05/F7tKxpyugbmeAnZ.png" alt="image-20211126180433356.png" loading="lazy"></p>
<p>记得使用@Value注解时，要将该注入写在某一个指定的Spring管控的bean的属性名上方。现在就可以读取到对应的单一数据行了</p>
<p><strong>总结</strong></p>
<ol>
<li>使用@Value配合SpEL读取单个数据</li>
<li>如果数据存在多层级，依次书写层级名称即可</li>
</ol>
<h3 id="读取全部数据" tabindex="-1"><a class="header-anchor" href="#读取全部数据" aria-hidden="true">#</a> 读取全部数据</h3>
<p>SpringBoot提供了一个对象，能够把所有的数据都封装到这一个对象中，这个对象叫做Environment，使用自动装配注解可以将所有的yaml数据封装到这个对象中</p>
<p><img src="https://s2.loli.net/2022/10/05/VrspH2FeXfyYz57.png" alt="image-20211126180738569.png" loading="lazy"></p>
<p>数据封装到了Environment对象中，获取属性时，通过Environment的接口操作进行，具体方法时getProperties（String），参数填写属性名即可</p>
<p><strong>总结</strong></p>
<ol>
<li>使用Environment对象封装全部配置信息</li>
<li>使用@Autowired自动装配数据到Environment对象中</li>
</ol>
<h3 id="读取对象数据" tabindex="-1"><a class="header-anchor" href="#读取对象数据" aria-hidden="true">#</a> 读取对象数据</h3>
<p>SpringBoot也提供了可以将一组yaml对象数据封装一个Java对象的操作</p>
<p>​	首先定义一个对象，并将该对象纳入Spring管控的范围，也就是定义成一个bean，然后使用注解@ConfigurationProperties指定该对象加载哪一组yaml中配置的信息。</p>
<p><img src="https://s2.loli.net/2022/10/05/h3mZg8vM6In9F1Q.png" alt="image-20211126181126382.png" loading="lazy"></p>
<p>这个@ConfigurationProperties必须告诉他加载的数据前缀是什么，这样当前前缀下的所有属性就封装到这个对象中。记得数据属性名要与对象的变量名一一对应啊，不然没法封装。其实以后如果你要定义一组数据自己使用，就可以先写一个对象，然后定义好属性，下面到配置中根据这个格式书写即可。</p>
<p><img src="https://s2.loli.net/2022/10/05/tKjXUCLGJWyTZs2.png" alt="image-20211126181423432.png" loading="lazy"></p>
<p><strong>总结</strong></p>
<ol>
<li>使用@ConfigurationProperties注解绑定配置信息到封装类中</li>
<li>封装类需要定义为Spring管理的bean，否则无法进行属性注入</li>
</ol>
<h3 id="yaml文件中的数据引用" tabindex="-1"><a class="header-anchor" href="#yaml文件中的数据引用" aria-hidden="true">#</a> yaml文件中的数据引用</h3>
<p>如果你在书写yaml数据时，经常出现如下现象，比如很多个文件都具有相同的目录前缀</p>
<div class="language-YAML ext-YAML line-numbers-mode"><pre v-pre class="language-YAML"><code>center:
	dataDir: /usr/local/fire/data
    tmpDir: /usr/local/fire/tmp
    logDir: /usr/local/fire/log
    msgDir: /usr/local/fire/msgDir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p>
<div class="language-YAML ext-YAML line-numbers-mode"><pre v-pre class="language-YAML"><code>center:
	dataDir: D:/usr/local/fire/data
    tmpDir: D:/usr/local/fire/tmp
    logDir: D:/usr/local/fire/log
    msgDir: D:/usr/local/fire/msgDir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	这个时候你可以使用引用格式来定义数据，其实就是搞了个变量名，然后引用变量了，格式如下：</p>
<div class="language-YAML ext-YAML line-numbers-mode"><pre v-pre class="language-YAML"><code>baseDir: /usr/local/fire
center:
    dataDir: ${baseDir}/data
    tmpDir: ${baseDir}/tmp
    logDir: ${baseDir}/log
    msgDir: ${baseDir}/msgDir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	还有一个注意事项，在书写字符串时，如果需要使用转义字符，需要将数据字符串使用双引号包裹起来</p>
<div class="language-YAML ext-YAML line-numbers-mode"><pre v-pre class="language-YAML"><code>lesson: &quot;Spring\tboot\nlesson&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>总结</strong></p>
<ol>
<li>在配置文件中可以使用${属性名}方式引用属性值</li>
<li>如果属性中出现特殊字符，可以使用双引号包裹起来作为字符解析</li>
</ol>
</div></template>
