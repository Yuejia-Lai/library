<template><div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>MyBatis-Plus（简称 MP）是一个 MyBatis的增强工具，在 MyBatis 的基础上只做增强不做改变，为 简化开发、提高效率而生。</p>
<p><img src="https://s2.loli.net/2022/09/29/icsFPQZpKjJVXvU.png" alt="Snipaste_2022-09-29_16-04-35.png" loading="lazy"></p>
<h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2>
<ul>
<li>无侵入：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑</li>
<li>损耗小：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作</li>
<li>强大的 CRUD 操作：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求</li>
<li>支持 Lambda 形式调用：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错</li>
<li>支持主键自动生成：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题</li>
<li>支持 ActiveRecord 模式：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强 大的 CRUD 操作</li>
<li>支持自定义全局通用操作：支持全局通用方法注入（ Write once, use anywhere ）</li>
<li>内置代码生成器：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置等您来使用</li>
<li>内置分页插件：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询</li>
<li>分页插件支持多种数据库：支持 MySQL、MariaDB、Oracle、DB2、H2、HSQL、SQLite、 Postgre、SQLServer 等多种数据库</li>
<li>内置性能分析插件：可输出 SQL 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询</li>
<li>内置全局拦截插件：提供全表 delete 、 update 操作智能分析阻断，也可自定义拦截规则，预防误操作</li>
</ul>
<h2 id="支持数据库" tabindex="-1"><a class="header-anchor" href="#支持数据库" aria-hidden="true">#</a> 支持数据库</h2>
<blockquote>
<p>任何能使用MyBatis进行 CRUD, 并且支持标准 SQL 的数据库，具体支持情况如下</p>
</blockquote>
<ul>
<li>MySQL，Oracle，DB2，H2，HSQL，SQLite，PostgreSQL，SQLServer，Phoenix，Gauss ， ClickHouse，Sybase，OceanBase，Firebird，Cubrid，Goldilocks，csiidb</li>
<li>达梦数据库，虚谷数据库，人大金仓数据库，南大通用(华库)数据库，南大通用数据库，神通数据库，瀚高数据库</li>
</ul>
<h2 id="框架结构" tabindex="-1"><a class="header-anchor" href="#框架结构" aria-hidden="true">#</a> 框架结构</h2>
<p><img src="https://s2.loli.net/2022/09/29/2MNgzOZxfimHQun.png" alt="Snipaste_2022-09-29_16-07-51.png" loading="lazy"></p>
<h2 id="代码及文档地址" tabindex="-1"><a class="header-anchor" href="#代码及文档地址" aria-hidden="true">#</a> 代码及文档地址</h2>
<p>官方地址: <a href="http://mp.baomidou.com" target="_blank" rel="noopener noreferrer">http://mp.baomidou.com<ExternalLinkIcon/></a></p>
<p>代码发布地址:</p>
<p>Github: <a href="https://github.com/baomidou/mybatis-plus" target="_blank" rel="noopener noreferrer">https://github.com/baomidou/mybatis-plus<ExternalLinkIcon/></a></p>
<p>Gitee: <a href="https://gitee.com/baomidou/mybatis-plus" target="_blank" rel="noopener noreferrer">https://gitee.com/baomidou/mybatis-plus<ExternalLinkIcon/></a></p>
<p>文档发布地址: <a href="https://baomidou.com/pages/24112f" target="_blank" rel="noopener noreferrer">https://baomidou.com/pages/24112f<ExternalLinkIcon/></a></p>
<hr>
<h1 id="入门案例" tabindex="-1"><a class="header-anchor" href="#入门案例" aria-hidden="true">#</a> 入门案例</h1>
<h2 id="创建数据库及表" tabindex="-1"><a class="header-anchor" href="#创建数据库及表" aria-hidden="true">#</a> 创建数据库及表</h2>
<h3 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表</h3>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token identifier"><span class="token punctuation">`</span>mybatis_plus<span class="token punctuation">`</span></span> <span class="token comment">/*!40100 DEFAULT CHARACTER SET utf8mb4 */</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token identifier"><span class="token punctuation">`</span>mybatis_plus<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>user<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'主键ID'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'姓名'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>age<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'年龄'</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>email<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'邮箱'</span><span class="token punctuation">,</span>
<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加数据" tabindex="-1"><a class="header-anchor" href="#添加数据" aria-hidden="true">#</a> 添加数据</h3>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token keyword">user</span> <span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> email<span class="token punctuation">)</span> <span class="token keyword">VALUES</span>
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'Jone'</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">'test1@baomidou.com'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">'test2@baomidou.com'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'Tom'</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token string">'test3@baomidou.com'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">'Sandy'</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">'test4@baomidou.com'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">'Billie'</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token string">'test5@baomidou.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建spring-boot工程" tabindex="-1"><a class="header-anchor" href="#创建spring-boot工程" aria-hidden="true">#</a> 创建Spring Boot工程</h2>
<h3 id="初始化工程" tabindex="-1"><a class="header-anchor" href="#初始化工程" aria-hidden="true">#</a> 初始化工程</h3>
<p>使用 Spring Initializr 快速初始化一个 Spring Boot 工程</p>
<h3 id="引入依赖" tabindex="-1"><a class="header-anchor" href="#引入依赖" aria-hidden="true">#</a> 引入依赖</h3>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.5.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="idea中安装lombok插件" tabindex="-1"><a class="header-anchor" href="#idea中安装lombok插件" aria-hidden="true">#</a> idea中安装lombok插件</h3>
<h2 id="编写代码" tabindex="-1"><a class="header-anchor" href="#编写代码" aria-hidden="true">#</a> 编写代码</h2>
<h3 id="配置application-yml" tabindex="-1"><a class="header-anchor" href="#配置application-yml" aria-hidden="true">#</a> 配置application.yml</h3>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
	<span class="token comment"># 配置数据源信息</span>
	<span class="token key atrule">datasource</span><span class="token punctuation">:</span>
	<span class="token comment"># 配置数据源类型</span>
		<span class="token key atrule">type</span><span class="token punctuation">:</span> com.zaxxer.hikari.HikariDataSource
		<span class="token comment"># 配置连接数据库信息</span>
		<span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
		<span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/mybatis_plus<span class="token punctuation">?</span>		characterEncoding=utf<span class="token punctuation">-</span>8<span class="token important">&amp;useSSL=false</span>
		<span class="token key atrule">username</span><span class="token punctuation">:</span> root
		<span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p>
<blockquote>
<p>1、驱动类driver-class-name</p>
<p>spring boot 2.0（内置jdbc5驱动），驱动类使用：</p>
<p>driver-class-name: com.mysql.jdbc.Driver</p>
<p>spring boot 2.1及以上（内置jdbc8驱动），驱动类使用：</p>
<p>driver-class-name: com.mysql.cj.jdbc.Driver</p>
<p>否则运行测试用例的时候会有 WARN 信息</p>
<p>2、连接地址url</p>
<p>MySQL5.7版本的url：</p>
<p>jdbc:mysql://localhost:3306/mybatis_plus?characterEncoding=utf-8&amp;useSSL=false</p>
<p>MySQL8.0版本的url：</p>
<p>jdbc:mysql://localhost:3306/mybatis_plus? serverTimezone=GMT%2B8&amp;characterEncoding=utf-8&amp;useSSL=false</p>
<p>否则运行测试用例报告如下错误：</p>
<p>java.sql.SQLException: The server time zone value 'ÖÐ¹ú±ê×¼Ê±¼ä' is unrecognized or represents more</p>
</blockquote>
<h3 id="启动类" tabindex="-1"><a class="header-anchor" href="#启动类" aria-hidden="true">#</a> 启动类</h3>
<blockquote>
<p>在Spring Boot启动类中添加@MapperScan注解，扫描mapper包</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">"com.atguigu.mybatisplus.mapper"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisplusApplication</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">MybatisplusApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加实体" tabindex="-1"><a class="header-anchor" href="#添加实体" aria-hidden="true">#</a> 添加实体</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span> <span class="token comment">//lombok注解</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>User类编译之后的结果：</p>
<p><img src="https://s2.loli.net/2022/09/29/CLSwjdNaEVlUMps.png" alt="Snipaste_2022-09-29_17-17-50.png" loading="lazy"></p>
<h3 id="添加mapper" tabindex="-1"><a class="header-anchor" href="#添加mapper" aria-hidden="true">#</a> 添加mapper</h3>
<blockquote>
<p>BaseMapper是MyBatis-Plus提供的模板mapper，其中包含了基本的CRUD方法，泛型为操作的实体类型</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelectList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//selectList()根据MP内置的条件构造器查询一个list集合，null表示没有条件，即查询所有</span>
		userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p>
<blockquote>
<p>IDEA在 userMapper 处报错，因为找不到注入的对象，因为类是动态创建的，但是程序可以正确的执行。</p>
<p>为了避免报错，可以在mapper接口上添加 @Repository 注解</p>
</blockquote>
<h3 id="添加日志" tabindex="-1"><a class="header-anchor" href="#添加日志" aria-hidden="true">#</a> 添加日志</h3>
<p>在application.yml中配置日志输出</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># 配置MyBatis日志</span>
<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
	<span class="token key atrule">configuration</span><span class="token punctuation">:</span>
	<span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
