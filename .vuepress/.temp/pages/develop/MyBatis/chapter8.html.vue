<template><div><h2 id="mybatis的一级缓存" tabindex="-1"><a class="header-anchor" href="#mybatis的一级缓存" aria-hidden="true">#</a> MyBatis的一级缓存</h2>
<p>一级缓存是SqlSession级别的，通过同一个SqlSession查询的数据会被缓存，下次查询相同的数据，就会从缓存中直接获取，不会从数据库重新访问 使一级缓存失效的四种情况：</p>
<ol>
<li>不同的SqlSession对应不同的一级缓存</li>
<li>同一个SqlSession但是查询条件不同</li>
<li>同一个SqlSession两次查询期间执行了任何一次增删改操作</li>
<li>同一个SqlSession两次查询期间手动清空了缓存</li>
</ol>
<h2 id="mybatis的二级缓存" tabindex="-1"><a class="header-anchor" href="#mybatis的二级缓存" aria-hidden="true">#</a> MyBatis的二级缓存</h2>
<p>二级缓存是SqlSessionFactory级别，通过同一个SqlSessionFactory创建的SqlSession查询的结果会被 缓存；此后若再次执行相同的查询语句，结果就会从缓存中获取</p>
<p>二级缓存开启的条件：</p>
<p>a&gt;在核心配置文件中，设置全局配置属性cacheEnabled=&quot;true&quot;，默认为true，不需要设置</p>
<p>b&gt;在映射文件中设置标签</p>
<p>c&gt;二级缓存必须在SqlSession关闭或提交之后有效</p>
<p>d&gt;查询的数据所转换的实体类类型必须实现序列化的接口</p>
<p>使二级缓存失效的情况：</p>
<ul>
<li>两次查询之间执行了任意的增删改，会使一级和二级缓存同时失效</li>
</ul>
<h2 id="二级缓存的相关配置" tabindex="-1"><a class="header-anchor" href="#二级缓存的相关配置" aria-hidden="true">#</a> 二级缓存的相关配置</h2>
<p>在mapper配置文件中添加的cache标签可以设置一些属性：</p>
<p>①eviction属性：缓存回收策略，默认的是 LRU。</p>
<p>LRU（Least Recently Used） – 最近最少使用的：移除最长时间不被使用的对象。</p>
<p>FIFO（First in First out） – 先进先出：按对象进入缓存的顺序来移除它们。</p>
<p>SOFT – 软引用：移除基于垃圾回收器状态和软引用规则的对象</p>
<p>WEAK – 弱引用：更积极地移除基于垃圾收集器状态和弱引用规则的对象。</p>
<p>②flushInterval属性：刷新间隔，单位毫秒</p>
<p>默认情况是不设置，也就是没有刷新间隔，缓存仅仅调用语句时刷新</p>
<p>③size属性：引用数目，正整数 代表缓存最多可以存储多少个对象，太大容易导致内存溢出</p>
<p>④readOnly属性：只读， true/false</p>
<p>true：只读缓存；会给所有调用者返回缓存对象的相同实例。因此这些对象不能被修改。这提供了 很重 要的性能优势。</p>
<p>false：读写缓存；会返回缓存对象的拷贝（通过序列化）。这会慢一些，但是安全，因此默认是 false。</p>
<h2 id="mybatis缓存查询的顺序" tabindex="-1"><a class="header-anchor" href="#mybatis缓存查询的顺序" aria-hidden="true">#</a> MyBatis缓存查询的顺序</h2>
<p>先查询二级缓存，因为二级缓存中可能会有其他程序已经查出来的数据，可以拿来直接使用。</p>
<p>如果二级缓存没有命中，再查询一级缓存</p>
<p>如果一级缓存也没有命中，则查询数据库</p>
<p>SqlSession关闭之后，一级缓存中的数据会写入二级缓存</p>
<h2 id="整合第三方缓存ehcache" tabindex="-1"><a class="header-anchor" href="#整合第三方缓存ehcache" aria-hidden="true">#</a> 整合第三方缓存EHCache</h2>
<h3 id="添加依赖" tabindex="-1"><a class="header-anchor" href="#添加依赖" aria-hidden="true">#</a> 添加依赖</h3>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- Mybatis EHCache整合包 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.mybatis.caches<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis-ehcache<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.2.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- slf4j日志门面的一个具体实现 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>ch.qos.logback<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>logback-classic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.2.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="各jar包功能" tabindex="-1"><a class="header-anchor" href="#各jar包功能" aria-hidden="true">#</a> 各jar包功能</h3>
<table>
<thead>
<tr>
<th>jar包名称</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>mybatis-ehcache</td>
<td>Mybatis和EHCache的整合包</td>
</tr>
<tr>
<td>ehcache</td>
<td>EHCache核心包</td>
</tr>
<tr>
<td>slf4j-api</td>
<td>SLF4J日志门面包</td>
</tr>
<tr>
<td>logback-classic</td>
<td>支持SLF4J门面接口的一个具体实现</td>
</tr>
</tbody>
</table>
<h3 id="创建ehcache的配置文件ehcache-xml" tabindex="-1"><a class="header-anchor" href="#创建ehcache的配置文件ehcache-xml" aria-hidden="true">#</a> 创建EHCache的配置文件ehcache.xml</h3>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="utf-8" ?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ehcache</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
<span class="token attr-name"><span class="token namespace">xsi:</span>noNamespaceSchemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../config/ehcache.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 磁盘保存路径 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>diskStore</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>D:\laiyuejia\ehcache<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defaultCache</span>
		<span class="token attr-name">maxElementsInMemory</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1000<span class="token punctuation">"</span></span>
		<span class="token attr-name">maxElementsOnDisk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10000000<span class="token punctuation">"</span></span>
		<span class="token attr-name">eternal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
		<span class="token attr-name">overflowToDisk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
		<span class="token attr-name">timeToIdleSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span>
		<span class="token attr-name">timeToLiveSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span>
		<span class="token attr-name">diskExpiryThreadIntervalSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span>
		<span class="token attr-name">memoryStoreEvictionPolicy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LRU<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defaultCache</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ehcache</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置二级缓存的类型" tabindex="-1"><a class="header-anchor" href="#设置二级缓存的类型" aria-hidden="true">#</a> 设置二级缓存的类型</h3>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cache</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.mybatis.caches.ehcache.EhcacheCache<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="加入logback日志" tabindex="-1"><a class="header-anchor" href="#加入logback日志" aria-hidden="true">#</a> 加入logback日志</h3>
<blockquote>
<p>存在SLF4J时，作为简易日志的log4j将失效，此时我们需要借助SLF4J的具体实现logback来打印日志。 创建logback的配置文件logback.xml</p>
</blockquote>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span> <span class="token attr-name">debug</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 指定日志输出的位置 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>STDOUT<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ch.qos.logback.core.ConsoleAppender<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoder</span><span class="token punctuation">></span></span>
			<span class="token comment">&lt;!-- 日志输出的格式 --></span>
			<span class="token comment">&lt;!-- 按照顺序分别是： 时间、日志级别、线程名称、打印日志的类、日志主体内容、换行--></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span><span class="token punctuation">></span></span>[%d{HH:mm:ss.SSS}] [%-5level] [%thread] [%logger]
[%msg]%n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoder</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 设置全局日志级别。日志级别按顺序分别是： DEBUG、INFO、WARN、ERROR --></span>
	<span class="token comment">&lt;!-- 指定任何一个日志级别都只打印当前级别和后面级别的日志。 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DEBUG<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token comment">&lt;!-- 指定打印日志的appender，这里通过“STDOUT”引用了前面配置的appender --></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>STDOUT<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 根据特殊需求指定局部日志级别 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logger</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.atguigu.crowd.mapper<span class="token punctuation">"</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DEBUG<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ehcache配置文件说明" tabindex="-1"><a class="header-anchor" href="#ehcache配置文件说明" aria-hidden="true">#</a> EHCache配置文件说明</h3>
<table>
<thead>
<tr>
<th>属性名</th>
<th>是 否 必 须</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>maxElementsInMemory</td>
<td>是</td>
<td>在内存中缓存的element的最大数目</td>
</tr>
<tr>
<td>maxElementsOnDisk</td>
<td>是</td>
<td>在磁盘上缓存的element的最大数目，若是0表示无 穷大</td>
</tr>
<tr>
<td>eternal</td>
<td>是</td>
<td>设定缓存的elements是否永远不过期。 如果为 true，则缓存的数据始终有效， 如果为false那么还 要根据timeToIdleSeconds、timeToLiveSeconds 判断</td>
</tr>
<tr>
<td>overflowToDisk</td>
<td>是</td>
<td>设定当内存缓存溢出的时候是否将过期的element 缓存到磁盘上</td>
</tr>
<tr>
<td>timeToIdleSeconds</td>
<td>否</td>
<td>当缓存在EhCache中的数据前后两次访问的时间超 过timeToIdleSeconds的属性取值时， 这些数据便 会删除，默认值是0,也就是可闲置时间无穷大</td>
</tr>
<tr>
<td>timeToLiveSeconds</td>
<td>否</td>
<td>缓存element的有效生命期，默认是0.,也就是 element存活时间无穷大</td>
</tr>
<tr>
<td>diskSpoolBufferSizeMB</td>
<td>否</td>
<td>DiskStore(磁盘缓存)的缓存区大小。默认是 30MB。每个Cache都应该有自己的一个缓冲区</td>
</tr>
<tr>
<td>diskPersistent</td>
<td>否</td>
<td>在VM重启的时候是否启用磁盘保存EhCache中的数 据，默认是false。</td>
</tr>
<tr>
<td>diskExpiryThreadIntervalSeconds</td>
<td>否</td>
<td>磁盘缓存的清理线程运行间隔，默认是120秒。每 个120s， 相应的线程会进行一次EhCache中数据的 清理工作</td>
</tr>
<tr>
<td>memoryStoreEvictionPolicy</td>
<td>否</td>
<td>当内存缓存达到最大，有新的element加入的时 候， 移除缓存中element的策略。 默认是LRU （最 近最少使用），可选的有LFU （最不常使用）和 FIFO （先进先出）</td>
</tr>
</tbody>
</table>
<hr>
<blockquote>
<p>正向工程：先创建Java实体类，由框架负责根据实体类生成数据库表。 Hibernate是支持正向工 程的。</p>
<p>逆向工程：先创建数据库表，由框架负责根据数据库表，反向生成如下资源：</p>
<ul>
<li>Java实体类</li>
<li>Mapper接口</li>
<li>Mapper映射文件</li>
</ul>
</blockquote>
<h2 id="创建逆向工程的步骤" tabindex="-1"><a class="header-anchor" href="#创建逆向工程的步骤" aria-hidden="true">#</a> 创建逆向工程的步骤</h2>
<p><strong>①添加依赖和插件</strong></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- 依赖MyBatis核心包 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.5.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- junit测试 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>4.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- log4j日志 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.2.17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>8.0.16<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 控制Maven在构建过程中相关配置 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 构建过程中用到的插件 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 具体插件，逆向工程的操作是以构建过程中插件形式出现的 --></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.mybatis.generator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis-generator-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 插件的依赖 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 逆向工程的核心依赖 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.mybatis.generator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis-generator-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.3.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- MySQL驱动 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>8.0.16<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>②创建MyBatis的核心配置文件</strong></p>
<p><strong>③创建逆向工程的配置文件</strong></p>
<blockquote>
<p>文件名必须是：generatorConfig.xml</p>
</blockquote>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">generatorConfiguration</span>
		<span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"</span>
		<span class="token string">"http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>generatorConfiguration</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--
			targetRuntime: 执行生成的逆向工程的版本
				MyBatis3Simple: 生成基本的CRUD（清新简洁版）
				MyBatis3: 生成带条件的CRUD（奢华尊享版）
	--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>context</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DB2Tables<span class="token punctuation">"</span></span> <span class="token attr-name">targetRuntime</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MyBatis3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token comment">&lt;!-- 数据库的连接信息 --></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jdbcConnection</span> <span class="token attr-name">driverClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mysql.cj.jdbc.Driver<span class="token punctuation">"</span></span>
				<span class="token attr-name">connectionURL</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jdbc:mysql://localhost:3306/mybatis?serverTimezone=UTC<span class="token punctuation">"</span></span>
				<span class="token attr-name">userId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span>
				<span class="token attr-name">password</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>123456<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jdbcConnection</span><span class="token punctuation">></span></span>
		<span class="token comment">&lt;!-- javaBean的生成策略--></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>javaModelGenerator</span> <span class="token attr-name">targetPackage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.laiyuejia.mybatis.pojo<span class="token punctuation">"</span></span>
			<span class="token attr-name">targetProject</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.\src\main\java<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>enableSubPackages<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>trimStrings<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>javaModelGenerator</span><span class="token punctuation">></span></span>
		<span class="token comment">&lt;!-- SQL映射文件的生成策略 --></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sqlMapGenerator</span> <span class="token attr-name">targetPackage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.atguigu.mybatis.mapper<span class="token punctuation">"</span></span>
			<span class="token attr-name">targetProject</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.\src\main\resources<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>enableSubPackages<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sqlMapGenerator</span><span class="token punctuation">></span></span>
		<span class="token comment">&lt;!-- Mapper接口的生成策略 --></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>javaClientGenerator</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>XMLMAPPER<span class="token punctuation">"</span></span>
			<span class="token attr-name">targetPackage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.atguigu.mybatis.mapper<span class="token punctuation">"</span></span> 					
            <span class="token attr-name">targetProject</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.\src\main\java<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>enableSubPackages<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>javaClientGenerator</span><span class="token punctuation">></span></span>
		<span class="token comment">&lt;!-- 逆向分析的表 --></span>
		<span class="token comment">&lt;!-- tableName设置为*号，可以对应所有表，此时不写domainObjectName --></span>
		<span class="token comment">&lt;!-- domainObjectName属性指定生成出来的实体类的类名 --></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">tableName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>t_emp<span class="token punctuation">"</span></span> <span class="token attr-name">domainObjectName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Emp<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">tableName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>t_dept<span class="token punctuation">"</span></span> <span class="token attr-name">domainObjectName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Dept<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>context</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>generatorConfiguration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>④执行MBG插件的generate目标</strong></p>
<h2 id="qbc查询" tabindex="-1"><a class="header-anchor" href="#qbc查询" aria-hidden="true">#</a> QBC查询</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testMBG</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"mybatis-config.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">SqlSessionFactory</span> sqlSessionFactory <span class="token operator">=</span> <span class="token keyword">new</span>
		<span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> sqlSessionFactory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">EmpMapper</span> mapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">EmpMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//查询所有数据</span>
		<span class="token comment">/*List&lt;Emp> list = mapper.selectByExample(null);
		list.forEach(emp -> System.out.println(emp));*/</span>
		<span class="token comment">//根据条件查询</span>
		<span class="token comment">/*EmpExample example = new EmpExample();
		example.createCriteria().andEmpNameEqualTo("张
		三").andAgeGreaterThanOrEqualTo(20);
		example.or().andDidIsNotNull();
		List&lt;Emp> list = mapper.selectByExample(example);
		list.forEach(emp -> System.out.println(emp));*/</span>
		mapper<span class="token punctuation">.</span><span class="token function">updateByPrimaryKeySelective</span><span class="token punctuation">(</span><span class="token keyword">new</span>
		<span class="token class-name">Emp</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">"admin"</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">"456@qq.com"</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
