<template><div><h2 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h2>
<blockquote>
<p>MySQL不同版本的注意事项</p>
<p>1、驱动类driver-class-name</p>
<p>MySQL 5版本使用jdbc5驱动，驱动类使用：com.mysql.jdbc.Driver</p>
<p>MySQL 8版本使用jdbc8驱动，驱动类使用：com.mysql.cj.jdbc.Driver</p>
<p>2、连接地址url</p>
<p>MySQL 5版本的url： jdbc:mysql://localhost:3306/ssm</p>
<p>MySQL 8版本的url： jdbc:mysql://localhost:3306/ssm?serverTimezone=UTC</p>
<p>否则运行测试用例报告如下错误：</p>
<p>java.sql.SQLException: The server time zone value 'ÖÐ¹ú±ê×¼Ê±¼ä' is unrecognized or represents more</p>
</blockquote>
<h2 id="创建maven工程" tabindex="-1"><a class="header-anchor" href="#创建maven工程" aria-hidden="true">#</a> 创建maven工程</h2>
<p><strong>①打包方式：jar</strong></p>
<p><strong>②引入依赖</strong></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- Mybatis核心 --></span>
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
	<span class="token comment">&lt;!-- MySQL驱动 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>8.0.16<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建mybatis的核心配置文件" tabindex="-1"><a class="header-anchor" href="#创建mybatis的核心配置文件" aria-hidden="true">#</a> 创建MyBatis的核心配置文件</h2>
<blockquote>
<p>习惯上命名为mybatis-config.xml，这个文件名仅仅只是建议，并非强制要求。</p>
<p>将来整合Spring 之后，这个配置文件可以省略，所以操作时可以直接复制、粘贴。</p>
<p>核心配置文件主要用于配置连接数据库的环境以及MyBatis的全局配置信息</p>
<p>核心配置文件存放的位置是src/main/resources目录下</p>
</blockquote>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">configuration</span>
		<span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Config 3.0//EN"</span>
		<span class="token string">"http://mybatis.org/dtd/mybatis-3-config.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--设置连接数据库的环境--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environments</span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>development<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environment</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>development<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transactionManager</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>JDBC<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataSource</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>POOLED<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>driver<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mysql.cj.jdbc.Driver<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jdbc:mysql://localhost:3306/ssm?serverTimezone=UTC<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>123456<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataSource</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environment</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environments</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--引入映射文件--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mappers</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>package</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mappers/UserMapper.xml<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mappers</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建mapper接口" tabindex="-1"><a class="header-anchor" href="#创建mapper接口" aria-hidden="true">#</a> 创建mapper接口</h2>
<blockquote>
<p>MyBatis中的mapper接口相当于以前的dao。但是区别在于，mapper仅仅是接口，我们不需要 提供实现类</p>
</blockquote>
<h2 id="创建mybatis的映射文件" tabindex="-1"><a class="header-anchor" href="#创建mybatis的映射文件" aria-hidden="true">#</a> 创建MyBatis的映射文件</h2>
<p>相关概念：ORM（Object Relationship Mapping）对象关系映射。</p>
<ul>
<li>对象：Java的实体类对象</li>
<li>关系：关系型数据库</li>
<li>映射：二者之间的对应关系</li>
</ul>
<table>
<thead>
<tr>
<th>Java概念</th>
<th>数据库概念</th>
</tr>
</thead>
<tbody>
<tr>
<td>类</td>
<td>表</td>
</tr>
<tr>
<td>属性</td>
<td>字段/列</td>
</tr>
<tr>
<td>对象</td>
<td>记录/行</td>
</tr>
</tbody>
</table>
<blockquote>
<p>1、映射文件的命名规则：</p>
<p>表所对应的实体类的类名+Mapper.xml</p>
<p>例如：表t_user，映射的实体类为User，所对应的映射文件为UserMapper.xml</p>
<p>因此一个映射文件对应一个实体类，对应一张表的操作</p>
<p>MyBatis映射文件用于编写SQL，访问以及操作表中的数据</p>
<p>MyBatis映射文件存放的位置是src/main/resources/mappers目录下</p>
<p>2、 MyBatis中可以面向接口操作数据，要保证两个一致：</p>
<p>a&gt;mapper接口的全类名和映射文件的命名空间（namespace）保持一致</p>
<p>b&gt;mapper接口中方法的方法名和映射文件中编写SQL的标签的id属性保持一致</p>
</blockquote>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
		<span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span>
		<span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.atguigu.mybatis.mapper.UserMapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--int insertUser();--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>insertUser<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		insert into t_user values(null,'admin','123456',23,'男','12345@qq.com')
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过junit测试功能" tabindex="-1"><a class="header-anchor" href="#通过junit测试功能" aria-hidden="true">#</a> 通过junit测试功能</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//读取MyBatis的核心配置文件</span>
<span class="token class-name">InputStream</span> is <span class="token operator">=</span> <span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"mybatis-config.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建SqlSessionFactoryBuilder对象</span>
<span class="token class-name">SqlSessionFactoryBuilder</span> sqlSessionFactoryBuilder <span class="token operator">=</span> <span class="token keyword">new</span>
<span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//通过核心配置文件所对应的字节输入流创建工厂类SqlSessionFactory，生产SqlSession对象</span>
<span class="token class-name">SqlSessionFactory</span> sqlSessionFactory <span class="token operator">=</span> sqlSessionFactoryBuilder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>is<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建SqlSession对象，此时通过SqlSession对象所操作的sql都必须手动提交或回滚事务</span>
<span class="token comment">//SqlSession sqlSession = sqlSessionFactory.openSession();</span>
<span class="token comment">//创建SqlSession对象，此时通过SqlSession对象所操作的sql都会自动提交</span>
<span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> sqlSessionFactory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//通过代理模式创建UserMapper接口的代理实现类对象</span>
<span class="token class-name">UserMapper</span> userMapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//调用UserMapper接口中的方法，就可以根据UserMapper的全类名匹配元素文件，通过调用的方法名匹配</span>
映射文件中的SQL标签，并执行标签中的SQL语句
<span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">insertUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//sqlSession.commit();</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"结果："</span><span class="token operator">+</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>SqlSession：代表Java程序和数据库之间的会话。（HttpSession是Java程序和浏览器之间的 会话）</p>
<p>SqlSessionFactory：是“生产”SqlSession的“工厂”</p>
<p>工厂模式：如果创建某一个对象，使用的过程基本固定，那么我们就可以把创建这个对象的 相关代码封装到一个“工厂类”中，以后都使用这个工厂类来“生产”我们需要的对象</p>
</blockquote>
<h2 id="加入log4j日志功能" tabindex="-1"><a class="header-anchor" href="#加入log4j日志功能" aria-hidden="true">#</a> 加入log4j日志功能</h2>
<p><strong>①加入依赖</strong></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- log4j日志 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.2.17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>②加入log4j的配置文件</strong></p>
<blockquote>
<p>log4j的配置文件名为log4j.xml，存放的位置是src/main/resources目录下</p>
</blockquote>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">log4j:configuration</span> <span class="token name">SYSTEM</span> <span class="token string">"log4j.dtd"</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">log4j:</span>configuration</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>log4j</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://jakarta.apache.org/log4j/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>STDOUT<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.apache.log4j.ConsoleAppender<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Encoding<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>layout</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.apache.log4j.PatternLayout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ConversionPattern<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>%-5p %d{MM-dd HH:mm:ss,SSS}
%m (%F:%L) \n<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>layout</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logger</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>java.sql<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>level</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>debug<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>logger</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logger</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.apache.ibatis<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>level</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>logger</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>level</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>debug<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>STDOUT<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">log4j:</span>configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>日志的级别</p>
<p>FATAL(致命)&gt;ERROR(错误)&gt;WARN(警告)&gt;INFO(信息)&gt;DEBUG(调试)</p>
<p>从左到右打印的内容越来越详细</p>
</blockquote>
<h2 id="核心配置文件详解" tabindex="-1"><a class="header-anchor" href="#核心配置文件详解" aria-hidden="true">#</a> 核心配置文件详解</h2>
<blockquote>
<p>核心配置文件中的标签必须按照固定的顺序： properties?,settings?,typeAliases?,typeHandlers?,objectFactory?,objectWrapperFactory?,refl ectorFactory?,plugins?,environments?,databaseIdProvider?,mappers?</p>
</blockquote>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">configuration</span>
		<span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Config 3.0//EN"</span>
		<span class="token string">"http://mybatis.org/dtd/mybatis-3-config.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--
		MyBatis核心配置文件中，标签的顺序：
		properties?,settings?,typeAliases?,typeHandlers?,
		objectFactory?,objectWrapperFactory?,reflectorFactory?,
		plugins?,environments?,databaseIdProvider?,mappers?
	--></span>
	<span class="token comment">&lt;!--引入properties文件--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jdbc.properties<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    
	<span class="token comment">&lt;!--设置类型别名--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>typeAliases</span><span class="token punctuation">></span></span>
		<span class="token comment">&lt;!--
			typeAlias：设置某个类型的别名
			属性：
				type：设置需要设置别名的类型
				alias：设置某个类型的别名，若不设置该属性，那么该类型拥有默认的别名，即类名且不区分大小写
		--></span>
		<span class="token comment">&lt;!--&lt;typeAlias type="com.atguigu.mybatis.pojo.User">&lt;/typeAlias>--></span>
		<span class="token comment">&lt;!--以包为单位，将包下所有的类型设置默认的类型别名，即类名且不区分大小写--></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>package</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.atguigu.mybatis.pojo<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>typeAliases</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--
		environments：配置多个连接数据库的环境
		属性：
			default：设置默认使用的环境的id
	--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environments</span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>development<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--
		environment：配置某个具体的环境
		属性：
			id：表示连接数据库的环境的唯一标识，不能重复
	--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environment</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>development<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token comment">&lt;!--
			transactionManager：设置事务管理方式
			属性：
				type="JDBC|MANAGED"
				JDBC：表示当前环境中，执行SQL时，使用的是JDBC中原生的事务管理方式，事务的提交或回滚需要手动处理
				MANAGED：被管理，例如Spring
		--></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transactionManager</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>JDBC<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
		<span class="token comment">&lt;!--
			dataSource：配置数据源
			属性：
				type：设置数据源的类型
				type="POOLED|UNPOOLED|JNDI"
				POOLED：表示使用数据库连接池缓存数据库连接
				UNPOOLED：表示不使用数据库连接池
				JNDI：表示使用上下文中的数据源
		--></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataSource</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>POOLED<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			<span class="token comment">&lt;!--设置连接数据库的驱动--></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>driver<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${jdbc.driver}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
			<span class="token comment">&lt;!--设置连接数据库的连接地址--></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${jdbc.url}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
			<span class="token comment">&lt;!--设置连接数据库的用户名--></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${jdbc.username}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
			<span class="token comment">&lt;!--设置连接数据库的密码--></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${jdbc.password}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataSource</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environment</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environment</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transactionManager</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>JDBC<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataSource</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>POOLED<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>driver<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mysql.cj.jdbc.Driver<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span>
				<span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jdbc:mysql://localhost:3306/ssmserverTimezone=UTC<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>123456<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataSource</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environment</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environments</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--引入映射文件--></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mappers</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!--&lt;mapper resource="mappers/UserMapper.xml"/>--></span>
	<span class="token comment">&lt;!--
		以包为单位引入映射文件
		要求：
		1、mapper接口所在的包要和映射文件所在的包一致
		2、mapper接口要和映射文件的名字一致
--></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>package</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.atguigu.mybatis.mapper<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mappers</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
