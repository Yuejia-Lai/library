<template><div><h2 id="为什么要使用数据库" tabindex="-1"><a class="header-anchor" href="#为什么要使用数据库" aria-hidden="true">#</a> 为什么要使用数据库</h2>
<ul>
<li>持久化(persistence)：<strong>把数据保存到可掉电式存储设备中以供之后使用</strong>。大多数情况下，特别是企业级应用，<strong>数据持久化意味着将内存中的数据保存到硬盘上加以”固化”</strong>，而持久化的实现过程大多通过各种关系数据库来完成</li>
<li>持久化的主要作用是<strong>将内存中的数据存储在关系型数据库中</strong>，当然也可以存储在磁盘文件、XML数据文件中</li>
</ul>
<p><img src="https://s2.loli.net/2022/08/26/VJbj6pIrNHuh2WQ.png" alt="image-20211020202152071.png" loading="lazy"></p>
<h2 id="数据库与数据库管理系统" tabindex="-1"><a class="header-anchor" href="#数据库与数据库管理系统" aria-hidden="true">#</a> 数据库与数据库管理系统</h2>
<h3 id="数据库的相关概念" tabindex="-1"><a class="header-anchor" href="#数据库的相关概念" aria-hidden="true">#</a> 数据库的相关概念</h3>
<table>
<thead>
<tr>
<th><strong>DB：数据库（Database）</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>即存储数据的“仓库”，其本质是一个文件系统。它保存了一系列有组织的数据。</td>
</tr>
<tr>
<td><strong>DBMS：数据库管理系统（Database Management System）</strong></td>
</tr>
<tr>
<td>是一种操纵和管理数据库的大型软件，用于建立、使用和维护数据库，对数据库进行统一管理和控制。用户通过数据库管理系统访问数据库中表内的数据。</td>
</tr>
<tr>
<td><strong>SQL：结构化查询语言（Structured Query Language）</strong></td>
</tr>
<tr>
<td>专门用来与数据库通信的语言。</td>
</tr>
</tbody>
</table>
<h3 id="数据库与数据库管理系统的关系" tabindex="-1"><a class="header-anchor" href="#数据库与数据库管理系统的关系" aria-hidden="true">#</a> 数据库与数据库管理系统的关系</h3>
<p>数据库管理系统(DBMS)可以管理多个数据库，一般开发人员会针对每一个应用创建一个数据库。为保存应用中实体的数据，一般会在数据库创建多个表，以保存程序中实体用户的数据。</p>
<p>数据库管理</p>
<p>系统、数据库和表的关系如图所示：</p>
<p><img src="https://s2.loli.net/2022/08/26/eyzirGPQFH1sW78.png" alt="image-20211013202511233.png" loading="lazy"></p>
<h3 id="常见的数据库管理系统排名-dbms" tabindex="-1"><a class="header-anchor" href="#常见的数据库管理系统排名-dbms" aria-hidden="true">#</a> 常见的数据库管理系统排名(DBMS)</h3>
<p>目前互联网上常见的数据库管理软件有Oracle、MySQL、MS SQL Server、DB2、PostgreSQL、Access、Sybase、Informix这几种。以下是2021年<strong>DB-Engines Ranking</strong> 对各数据库受欢迎程度进行调查后的统计结果：（查看数据库最新排名:<a href="https://db-engines.com/en/ranking%EF%BC%89" target="_blank" rel="noopener noreferrer">https://db-engines.com/en/ranking）<ExternalLinkIcon/></a></p>
<p><img src="https://s2.loli.net/2022/08/26/GrugLpy1ePWjKwH.png" alt="image-20211013202815851.png" loading="lazy"></p>
<h3 id="常见的数据库介绍" tabindex="-1"><a class="header-anchor" href="#常见的数据库介绍" aria-hidden="true">#</a> 常见的数据库介绍</h3>
<p><strong>Oracle</strong></p>
<p>1979 年，Oracle 2 诞生，它是第一个商用的 RDBMS（关系型数据库管理系统）。随着 Oracle 软件的名气越来越大，公司也改名叫 Oracle 公司。</p>
<p>2007年，总计85亿美金收购BEA Systems。</p>
<p>2009年，总计74亿美金收购SUN。此前的2008年，SUN以10亿美金收购MySQL。意味着Oracle 同时拥有了 MySQL 的管理权，至此 Oracle 在数据库领域中成为绝对的领导者。</p>
<p>2013年，甲骨文超越IBM，成为继Microsoft后全球第二大软件公司。</p>
<p>如今 Oracle 的年收入达到了 400 亿美金，足以证明商用（收费）数据库软件的价值。</p>
<p><strong>SQL Server</strong></p>
<p>SQL Server 是微软开发的大型商业数据库，诞生于 1989 年。C#、.net等语言常使用，与WinNT完全集成，也可以很好地与Microsoft BackOffice产品集成。</p>
<p><strong>DB2</strong></p>
<p>IBM公司的数据库产品,收费的。常应用在银行系统中。</p>
<p><strong>PostgreSQL</strong></p>
<p>PostgreSQL 的稳定性极强，最符合SQL标准，开放源码，具备商业级DBMS质量。PG对数据量大的文本以及SQL处理较快。</p>
<p><strong>SyBase</strong></p>
<p>已经淡出历史舞台。提供了一个非常专业数据建模的工具PowerDesigner。</p>
<p><strong>SQLite</strong></p>
<p>嵌入式的小型数据库，应用在手机端。 零配置，SQlite3不用安装，不用配置，不用启动，关闭或者配置数据库实例。当系统崩溃后不用做任何恢复操作，再下次使用数据库的时候自动恢复。</p>
<p><strong>informix</strong></p>
<p>IBM公司出品，取自Information 和Unix的结合，它是第一个被移植到Linux上的商业数据库产品。仅运行于unix/linux平台，命令行操作。 性能较高，支持集群，适应于安全性要求极高的系统，尤其是银行，证券系统的应用</p>
<h2 id="mysql介绍" tabindex="-1"><a class="header-anchor" href="#mysql介绍" aria-hidden="true">#</a> MySQL介绍</h2>
<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3>
<ul>
<li>MySQL是一个<code v-pre>开放源代码的关系型数据库管理系统</code>，由瑞典MySQL AB（创始人Michael Widenius）公司1995年开发，迅速成为开源数据库的 No.1</li>
<li>2008被<code v-pre>Sun</code>收购（10亿美金），2009年Sun被<code v-pre>Oracle</code>收购。<code v-pre>MariaDB</code>应运而生。（MySQL 的创造者担心 MySQL 有闭源的风险，因此创建了 MySQL 的分支项目 MariaDB）</li>
<li>MySQL6.x 版本之后分为<code v-pre>社区版</code>和<code v-pre>商业版</code></li>
<li>MySQL是一种关联数据库管理系统，将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性</li>
<li>MySQL是开源的，所以你不需要支付额外的费用</li>
<li>MySQL是可以定制的，采用了<code v-pre>GPL（GNU General Public License）</code>协议，你可以修改源码来开发自己的MySQL系统</li>
<li>MySQL支持大型的数据库。可以处理拥有上千万条记录的大型数据库。</li>
<li>MySQL支持大型数据库，支持5000万条记录的数据仓库，32位系统表文件最大可支持<code v-pre>4GB</code>，64位系统支持最大的表文件为<code v-pre>8TB</code></li>
<li>MySQL使用<code v-pre>标准的SQL数据语言</code>形式</li>
<li>MySQL可以允许运行于多个系统上，并且支持多种语言。这些编程语言包括C、C++、Python、Java、Perl、PHP和Ruby等</li>
</ul>
<h3 id="mysql发展史重大事件" tabindex="-1"><a class="header-anchor" href="#mysql发展史重大事件" aria-hidden="true">#</a> MySQL发展史重大事件</h3>
<p><img src="https://s2.loli.net/2022/08/26/urdKhFwtBsIAnLa.png" alt="image-20210730161043856.png" loading="lazy"></p>
<h3 id="oracle-vs-mysql" tabindex="-1"><a class="header-anchor" href="#oracle-vs-mysql" aria-hidden="true">#</a> Oracle vs MySQL</h3>
<p>Oracle 更适合大型跨国企业的使用，因为他们对费用不敏感，但是对性能要求以及安全性有更高的要求。</p>
<p>MySQL 由于其<strong>体积小、速度快、总体拥有成本低，可处理上千万条记录的大型数据库，尤其是开放源码这一特点，使得很多互联网公司、中小型网站选择了MySQL作为网站数据库</strong>（Facebook，Twitter，YouTube，阿里巴巴/蚂蚁金服，去哪儿，美团外卖，腾讯）</p>
<h2 id="rdbms-与-非rdbms" tabindex="-1"><a class="header-anchor" href="#rdbms-与-非rdbms" aria-hidden="true">#</a> RDBMS 与 非RDBMS</h2>
<p>从排名中我们能看出来，关系型数据库绝对是 DBMS 的主流，其中使用最多的 DBMS 分别是 Oracle、MySQL 和 SQL Server。这些都是关系型数据库（RDBMS）</p>
<h3 id="关系型数据库-rdbms" tabindex="-1"><a class="header-anchor" href="#关系型数据库-rdbms" aria-hidden="true">#</a> 关系型数据库(RDBMS)</h3>
<h4 id="实质" tabindex="-1"><a class="header-anchor" href="#实质" aria-hidden="true">#</a> 实质</h4>
<ul>
<li>
<p>这种类型的数据库是<code v-pre>最古老</code>的数据库类型，关系型数据库模型是把复杂的数据结构归结为简单的<code v-pre>二元关系</code>（即二维表格形式）。</p>
</li>
<li>
<p>关系型数据库以<code v-pre>行(row)</code>和<code v-pre>列(column)</code>的形式存储数据，以便于用户理解。这一系列的行和列被称为<code v-pre>表(table)</code>，一组表组成了一个库(database)。</p>
</li>
<li>
<p>表与表之间的数据记录有关系(relationship)。现实世界中的各种实体以及实体之间的各种联系均用<code v-pre>关系模型</code>来表示。关系型数据库，就是建立在<code v-pre>关系模型</code>基础上的数据库。</p>
</li>
<li>
<p>SQL 就是关系型数据库的查询语言。</p>
</li>
</ul>
<h4 id="优势" tabindex="-1"><a class="header-anchor" href="#优势" aria-hidden="true">#</a> 优势</h4>
<ul>
<li><strong>复杂查询</strong>
可以用SQL语句方便的在一个表以及多个表之间做非常复杂的数据查询。</li>
<li><strong>事务支持</strong>
使得对于安全性能很高的数据访问要求得以实现</li>
</ul>
<h3 id="非关系型数据库-非rdbms" tabindex="-1"><a class="header-anchor" href="#非关系型数据库-非rdbms" aria-hidden="true">#</a> 非关系型数据库(非RDBMS)</h3>
<h4 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h4>
<p><strong>非关系型数据库</strong>，可看成传统关系型数据库的功能<code v-pre>阉割版本</code>，基于键值对存储数据，不需要经过SQL层的解析，<code v-pre>性能非常高</code>。同时，通过减少不常用的功能，进一步提高性能。</p>
<p>目前基本上大部分主流的非关系型数据库都是免费的。</p>
<h4 id="有哪些非关系型数据库" tabindex="-1"><a class="header-anchor" href="#有哪些非关系型数据库" aria-hidden="true">#</a> 有哪些非关系型数据库</h4>
<p>相比于 SQL，NoSQL 泛指非关系型数据库，包括了榜单上的键值型数据库、文档型数据库、搜索引擎和列存储等，除此以外还包括图形数据库。也只有用 NoSQL 一词才能将这些技术囊括进来。</p>
<p><strong>键值型数据库</strong></p>
<p>键值型数据库通过 Key-Value 键值的方式来存储数据，其中 Key 和 Value 可以是简单的对象，也可以是复杂的对象。Key 作为唯一的标识符，优点是查找速度快，在这方面明显优于关系型数据库，缺点是无法像关系型数据库一样使用条件过滤（比如 WHERE），如果你不知道去哪里找数据，就要遍历所有的键，这就会消耗大量的计算。</p>
<p>键值型数据库典型的使用场景是作为<code v-pre>内存缓存</code>。<code v-pre>Redis </code>是最流行的键值型数据库</p>
<p><img src="https://s2.loli.net/2022/08/26/bXNl6YUfdMyu7Sc.png" alt="image-20211020172958427.png" loading="lazy"></p>
<p><strong>文档型数据库</strong></p>
<p>此类数据库可存放并获取文档，可以是XML、JSON等格式。在数据库中文档作为处理信息的基本单位，一个文档就相当于一条记录。文档数据库所存放的文档，就相当于键值数据库所存放的“值”。MongoDB 是最流行的文档型数据库。此外，还有CouchDB等。</p>
<p><strong>搜索引擎数据库</strong></p>
<p>虽然关系型数据库采用了索引提升检索效率，但是针对全文索引效率却较低。搜索引擎数据库是应用在搜索引擎领域的数据存储形式，由于搜索引擎会爬取大量的数据，并以特定的格式进行存储，这样在检索的时候才能保证性能最优。核心原理是“倒排索引”。</p>
<p>典型产品：Solr、Elasticsearch、Splunk 等。</p>
<p><strong>列式数据库</strong></p>
<p>列式数据库是相对于行式存储的数据库，Oracle、MySQL、SQL Server 等数据库都是采用的行式存储（Row-based），而列式数据库是将数据按照列存储到数据库中，这样做的好处是可以大量降低系统的 I/O，适合于分布式文件系统，不足在于功能相对有限。典型产品：HBase等</p>
<p><img src="https://s2.loli.net/2022/08/26/EVcnlbh1AzfXt3g.png" alt="image-20211020173921726.png" loading="lazy"></p>
<p><strong>图形数据库</strong></p>
<p>图形数据库，利用了图这种数据结构存储了实体（对象）之间的关系。图形数据库最典型的例子就是社交网络中人与人的关系，数据模型主要是以节点和边（关系）来实现，特点在于能高效地解决复杂的关系问题。</p>
<p>图形数据库顾名思义，就是一种存储图形关系的数据库。它利用了图这种数据结构存储了实体（对象）之间的关系。关系型数据用于存储明确关系的数据，但对于复杂关系的数据存储却有些力不从心。如社交网络中人物之间的关系，如果用关系型数据库则非常复杂，用图形数据库将非常简单。典型产品：Neo4J、InfoGrid等</p>
<h4 id="nosql的演变" tabindex="-1"><a class="header-anchor" href="#nosql的演变" aria-hidden="true">#</a> NoSQL的演变</h4>
<p>由于 SQL 一直称霸 DBMS，因此许多人在思考是否有一种数据库技术能远离 SQL，于是 NoSQL 诞生了，但是随着发展却发现越来越离不开 SQL。到目前为止 NoSQL 阵营中的 DBMS 都会有实现类似 SQL 的功能。下面是“NoSQL”这个名词在不同时期的诠释，从这些释义的变化中可以看出 <code v-pre>NoSQL 功能的演变</code>：</p>
<p>1970：NoSQL = We have no SQL</p>
<p>1980：NoSQL = Know SQL</p>
<p>2000：NoSQL = No SQL!</p>
<p>2005：NoSQL = Not only SQL</p>
<p>2013：NoSQL = No, SQL!</p>
<p>NoSQL 对 SQL 做出了很好的补充，比如实际开发中，有很多业务需求，其实并不需要完整的关系型数据库功能，非关系型数据库的功能就足够使用了。这种情况下，使用<code v-pre>性能更高</code>、<code v-pre>成本更低</code>的非关系型数据库当然是更明智的选择。比如：日志收集、排行榜、定时器等</p>
<h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3>
<p>NoSQL 的分类很多，即便如此，在 DBMS 排名中，还是 SQL 阵营的比重更大，影响力前 5 的 DBMS 中有 4 个是关系型数据库，而排名前 20 的 DBMS 中也有 12 个是关系型数据库。所以说，掌握 SQL 是非常有必要的。整套课程将围绕 SQL 展开</p>
<h2 id="关系型数据库设计规则" tabindex="-1"><a class="header-anchor" href="#关系型数据库设计规则" aria-hidden="true">#</a> 关系型数据库设计规则</h2>
<h3 id="表、记录、字段" tabindex="-1"><a class="header-anchor" href="#表、记录、字段" aria-hidden="true">#</a> 表、记录、字段</h3>
<ul>
<li>
<p>E-R（entity-relationship，实体-联系）模型中有三个主要概念是：<code v-pre>实体集</code>、<code v-pre>属性</code>、<code v-pre>联系集</code>。</p>
</li>
<li>
<p>一个实体集（class）对应于数据库中的一个表（table），一个实体（instance）则对应于数据库表中的一行（row），也称为一条记录（record）。一个属性（attribute）对应于数据库表中的一列（column），也称为一个字段（field）</p>
</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ORM思想 (Object Relational Mapping)体现：
数据库中的一个表  &lt;---> Java或Python中的一个类
表中的一条数据  &lt;---> 类中的一个对象（或实体）
表中的一个列  &lt;----> 类中的一个字段、属性(field)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表的关联关系" tabindex="-1"><a class="header-anchor" href="#表的关联关系" aria-hidden="true">#</a> 表的关联关系</h3>
<ul>
<li>
<p>表与表之间的数据记录有关系(relationship)。现实世界中的各种实体以及实体之间的各种联系均用关系模型来表示。</p>
</li>
<li>
<p>四种：一对一关联、一对多关联、多对多关联、自我引用</p>
</li>
</ul>
<h4 id="一对一关联-one-to-one" tabindex="-1"><a class="header-anchor" href="#一对一关联-one-to-one" aria-hidden="true">#</a> 一对一关联（one-to-one）</h4>
<p>在实际的开发中应用不多</p>
<p><img src="https://s2.loli.net/2022/08/26/9bw7h1vjlKNXeC6.png" alt="image-20210914235534452.png" loading="lazy"></p>
<h4 id="一对多关系-one-to-many" tabindex="-1"><a class="header-anchor" href="#一对多关系-one-to-many" aria-hidden="true">#</a> 一对多关系（one-to-many）</h4>
<ul>
<li>常见实例场景：<code v-pre>客户表和订单表</code>，<code v-pre>分类表和商品表</code>，<code v-pre>部门表和员工表</code>。</li>
<li>举例：
<ul>
<li>
<p>员工表：编号、姓名、...、所属部门</p>
</li>
<li>
<p>部门表：编号、名称、简介</p>
</li>
</ul>
</li>
<li>一对多建表原则：在从表(多方)创建一个字段，字段作为外键指向主表(一方)的主键</li>
</ul>
<p><img src="https://s2.loli.net/2022/08/26/qpAbemuoR5WFtfV.png" alt="image-20210915001013524.png" loading="lazy"></p>
<h4 id="多对多-many-to-many" tabindex="-1"><a class="header-anchor" href="#多对多-many-to-many" aria-hidden="true">#</a> 多对多（many-to-many）</h4>
<p>要表示多对多关系，必须创建第三个表，该表通常称为<code v-pre>联接表</code>，它将多对多关系划分为两个一对多关系。将这两个表的主键都插入到第三个表中</p>
<p><img src="https://s2.loli.net/2022/08/26/wq8N9dUjJIL6T1Y.png" alt="image-20210915001048215.png" loading="lazy"></p>
<h4 id="自我引用-self-reference" tabindex="-1"><a class="header-anchor" href="#自我引用-self-reference" aria-hidden="true">#</a> 自我引用(Self reference)</h4>
<p><img src="https://s2.loli.net/2022/08/26/ZfuEHdOFQjn1XVx.png" alt="image-20210914235651997.png" loading="lazy"></p>
<h2 id="mysql的卸载" tabindex="-1"><a class="header-anchor" href="#mysql的卸载" aria-hidden="true">#</a> MySQL的卸载</h2>
<h3 id="步骤1-停止mysql服务" tabindex="-1"><a class="header-anchor" href="#步骤1-停止mysql服务" aria-hidden="true">#</a> 步骤1：停止MySQL服务</h3>
<p>在卸载之前，先停止MySQL8.0的服务。按键盘上的“Ctrl + Alt + Delete”组合键，打开“任务管理器”对话框，可以在“服务”列表找到“MySQL8.0”的服务，如果现在“正在运行”状态，可以右键单击服务，选择“停止”选项停止MySQL8.0的服务</p>
<h3 id="步骤2-软件的卸载" tabindex="-1"><a class="header-anchor" href="#步骤2-软件的卸载" aria-hidden="true">#</a> 步骤2：软件的卸载</h3>
<p><strong>方式1：通过控制面板方式</strong></p>
<p>卸载MySQL8.0的程序可以和其他桌面应用程序一样直接在“控制面板”选择“卸载程序”，并在程序列表中找到MySQL8.0服务器程序，直接双击卸载即可，如图所示。这种方式删除，数据目录下的数据不会跟着删除</p>
<p><strong>方式2：通过360或电脑管家等软件卸载</strong></p>
<p>略</p>
<p><strong>方式3：通过安装包提供的卸载功能卸载</strong></p>
<p>你也可以通过安装向导程序进行MySQL8.0服务器程序的卸载</p>
<p>① 再次双击下载的mysql-installer-community-8.0.26.0.msi文件，打开安装向导。安装向导会自动检测已安装的MySQL服务器程序</p>
<p>② 选择要卸载的MySQL服务器程序，单击“Remove”（移除），即可进行卸载</p>
<p>③ 单击“Next”（下一步）按钮，确认卸载</p>
<p>④ 弹出是否同时移除数据目录选择窗口。如果想要同时删除MySQL服务器中的数据，则勾选“Remove the data directory”</p>
<p>⑤ 执行卸载。单击“Execute”（执行）按钮进行卸载</p>
<p>⑥ 完成卸载。单击“Finish”（完成）按钮即可。如果想要同时卸载MySQL8.0的安装向导程序，勾选“Yes，Uninstall MySQL Installer”即可</p>
<h3 id="步骤3-残余文件的清理" tabindex="-1"><a class="header-anchor" href="#步骤3-残余文件的清理" aria-hidden="true">#</a> 步骤3：残余文件的清理</h3>
<p>如果再次安装不成功，可以卸载后对残余文件进行清理后再安装。</p>
<p>（1）服务目录：mysql服务的安装目录</p>
<p>（2）数据目录：默认在C:\ProgramData\MySQL</p>
<p>如果自己单独指定过数据目录，就找到自己的数据目录进行删除即可。</p>
<blockquote>
<p>注意：请在卸载前做好数据备份</p>
<p>在操作完以后，需要重启计算机，然后进行安装即可。<strong>如果仍然安装失败，需要继续操作如下步骤4。</strong></p>
</blockquote>
<h3 id="步骤4-清理注册表-选做" tabindex="-1"><a class="header-anchor" href="#步骤4-清理注册表-选做" aria-hidden="true">#</a> 步骤4：清理注册表（选做）</h3>
<p>如果前几步做了，再次安装还是失败，那么可以清理注册表。</p>
<p>如何打开注册表编辑器：在系统的搜索框中输入<code v-pre>regedit</code></p>
<blockquote>
<p>注册表中的ControlSet001,ControlSet002,不一定是001和002,可能是ControlSet005、006之类</p>
</blockquote>
<h3 id="步骤5-删除环境变量配置" tabindex="-1"><a class="header-anchor" href="#步骤5-删除环境变量配置" aria-hidden="true">#</a> 步骤5：删除环境变量配置</h3>
<p>找到path环境变量，将其中关于mysql的环境变量删除，<strong>切记不要全部删除。</strong></p>
<p>例如：删除  D:\develop_tools\mysql\MySQLServer8.0.26\bin;  这个部分</p>
<h2 id="mysql的下载、安装、配置" tabindex="-1"><a class="header-anchor" href="#mysql的下载、安装、配置" aria-hidden="true">#</a> MySQL的下载、安装、配置</h2>
<h3 id="mysql的4大版本" tabindex="-1"><a class="header-anchor" href="#mysql的4大版本" aria-hidden="true">#</a> MySQL的4大版本</h3>
<blockquote>
<ul>
<li>
<p><strong>MySQL Community Server 社区版本</strong>，开源免费，自由下载，但不提供官方技术支持，适用于大多数普通用户。</p>
</li>
<li>
<p><strong>MySQL Enterprise Edition 企业版本</strong>，需付费，不能在线下载，可以试用30天。提供了更多的功能和更完备的技术支持，更适合于对数据库的功能和可靠性要求较高的企业客户。</p>
</li>
<li>
<p><strong>MySQL Cluster 集群版</strong>，开源免费。用于架设集群服务器，可将几个MySQL Server封装成一个Server。需要在社区版或企业版的基础上使用。</p>
</li>
<li>
<p><strong>MySQL Cluster CGE 高级集群版</strong>，需付费。</p>
</li>
</ul>
</blockquote>
<ul>
<li>目前最新版本为<code v-pre>8.0.27</code>，发布时间<code v-pre>2021年10月</code>。此前，8.0.0 在 2016.9.12日就发布了</li>
</ul>
<p>此外，官方还提供了<code v-pre>MySQL Workbench</code>（GUITOOL）一款专为MySQL设计的<code v-pre>图形界面管理工具</code>。MySQLWorkbench又分为两个版本，分别是<code v-pre>社区版</code>（MySQL Workbench OSS）、<code v-pre>商用版</code>（MySQL WorkbenchSE）</p>
<h3 id="软件的下载" tabindex="-1"><a class="header-anchor" href="#软件的下载" aria-hidden="true">#</a> 软件的下载</h3>
<p><strong>1. 下载地址</strong></p>
<p>官网：<a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">https://www.mysql.com<ExternalLinkIcon/></a></p>
<p><strong>2. 打开官网，点击DOWNLOADS</strong></p>
<p>然后，点击<code v-pre>MySQL Community(GPL) Downloads</code></p>
<p><strong>3. 点击 MySQL Community Server</strong></p>
<p><strong>4. 在General Availability(GA) Releases中选择适合的版本</strong></p>
<p>Windows平台下提供两种安装文件：MySQL二进制分发版（.msi安装文件）和免安装版（.zip压缩文件）。一般来讲，应当使用二进制分发版，因为该版本提供了图形化的安装向导过程，比其他的分发版使用起来要简单，不再需要其他工具启动就可以运行MySQL。</p>
<ul>
<li>
<p>这里在Windows 系统下推荐下载<code v-pre>MSI安装程序</code>；点击<code v-pre>Go to Download Page</code>进行下载即可</p>
</li>
<li>
<p>Windows下的MySQL8.0安装有两种安装程序</p>
<ul>
<li><code v-pre>mysql-installer-web-community-8.0.26.0.msi</code> 下载程序大小：2.4M；安装时需要联网安装组件。</li>
<li><code v-pre>mysql-installer-community-8.0.26.0.msi</code> 下载程序大小：450.7M；安装时离线安装即可。<strong>推荐。</strong></li>
</ul>
</li>
<li>
<p>如果安装MySQL5.7版本的话，选择<code v-pre>Archives</code>，接着选择MySQL5.7的相应版本即可。这里下载最近期的MySQL5.7.34版本</p>
</li>
</ul>
<h3 id="mysql8-0-版本的安装" tabindex="-1"><a class="header-anchor" href="#mysql8-0-版本的安装" aria-hidden="true">#</a> MySQL8.0 版本的安装</h3>
<p>MySQL下载完成后，找到下载文件，双击进行安装，具体操作步骤如下。</p>
<p>步骤1：双击下载的mysql-installer-community-8.0.26.0.msi文件，打开安装向导。</p>
<p>步骤2：打开“Choosing a Setup Type”（选择安装类型）窗口，在其中列出了5种安装类型，分别是Developer Default（默认安装类型）、Server only（仅作为服务器）、Client only（仅作为客户端）、Full（完全安装）、Custom（自定义安装）。这里选择“Custom（自定义安装）”类型按钮，单击“Next(下一步)”按钮。</p>
<p>步骤3：打开“Select Products” （选择产品）窗口，可以定制需要安装的产品清单。例如，选择“MySQL Server 8.0.26-X64”后，单击“→”添加按钮，即可选择安装MySQL服务器，如图所示。采用通用的方法，可以添加其他你需要安装的产品。</p>
<p>此时如果直接“Next”（下一步），则产品的安装路径是默认的。如果想要自定义安装目录，则可以选中对应的产品，然后在下面会出现“Advanced Options”（高级选项）的超链接。</p>
<p>单击“Advanced Options”（高级选项）则会弹出安装目录的选择窗口，如图所示，此时你可以分别设置MySQL的服务程序安装目录和数据存储目录。如果不设置，默认分别在C盘的Program Files目录和ProgramData目录（这是一个隐藏目录）。如果自定义安装目录，请避免“中文”目录。另外，建议服务目录和数据目录分开存放。</p>
<p>步骤4：在上一步选择好要安装的产品之后，单击“Next”（下一步）进入确认窗口，如图所示。单击“Execute”（执行）按钮开始安装。</p>
<p>步骤5：安装完成后在“Status”（状态）列表下将显示“Complete”（安装完成），如图所示。</p>
<h3 id="_2-4-配置mysql8-0" tabindex="-1"><a class="header-anchor" href="#_2-4-配置mysql8-0" aria-hidden="true">#</a> 2.4 配置MySQL8.0</h3>
<p>MySQL安装之后，需要对服务器进行配置。具体的配置步骤如下。</p>
<p>步骤1：在上一个小节的最后一步，单击“Next”（下一步）按钮，就可以进入产品配置窗口。</p>
<p>步骤2：单击“Next”（下一步）按钮，进入MySQL服务器类型配置窗口，如图所示。端口号一般选择默认端口号3306。</p>
<p>其中，“Config Type”选项用于设置服务器的类型。单击该选项右侧的下三角按钮，即可查看3个选项，如图所示。</p>
<ul>
<li>
<p><code v-pre>Development Machine（开发机器）</code>：该选项代表典型个人用桌面工作站。此时机器上需要运行多个应用程序，那么MySQL服务器将占用最少的系统资源。</p>
</li>
<li>
<p><code v-pre>Server Machine（服务器）</code>：该选项代表服务器，MySQL服务器可以同其他服务器应用程序一起运行，例如Web服务器等。MySQL服务器配置成适当比例的系统资源。</p>
</li>
<li>
<p><code v-pre>Dedicated Machine（专用服务器）</code>：该选项代表只运行MySQL服务的服务器。MySQL服务器配置成使用所有可用系统资源。</p>
</li>
</ul>
<p>步骤3：单击“Next”（下一步）按钮，打开设置授权方式窗口。其中，上面的选项是MySQL8.0提供的新的授权方式，采用SHA256基础的密码加密方法；下面的选项是传统授权方法（保留5.x版本兼容性）。</p>
<p>步骤4：单击“Next”（下一步）按钮，打开设置服务器root超级管理员的密码窗口，如图所示，需要输入两次同样的登录密码。也可以通过“Add User”添加其他用户，添加其他用户时，需要指定用户名、允许该用户名在哪台/哪些主机上登录，还可以指定用户角色等。此处暂不添加用户，用户管理在MySQL高级特性篇中讲解。</p>
<p>步骤5：单击“Next”（下一步）按钮，打开设置服务器名称窗口，如图所示。该服务名会出现在Windows服务列表中，也可以在命令行窗口中使用该服务名进行启动和停止服务。本书将服务名设置为“MySQL80”。如果希望开机自启动服务，也可以勾选“Start the MySQL Server at System Startup”选项（推荐）。</p>
<p>下面是选择以什么方式运行服务？可以选择“Standard System Account”(标准系统用户)或者“Custom User”(自定义用户)中的一个。这里推荐前者。</p>
<p>步骤6：单击“Next”（下一步）按钮，打开确认设置服务器窗口，单击“Execute”（执行）按钮。</p>
<p>步骤7：完成配置，如图所示。单击“Finish”（完成）按钮，即可完成服务器的配置。</p>
<p>步骤8：如果还有其他产品需要配置，可以选择其他产品，然后继续配置。如果没有，直接选择“Next”（下一步），直接完成整个安装和配置过程。</p>
<p>步骤9：结束安装和配置</p>
<h3 id="配置mysql8-0-环境变量" tabindex="-1"><a class="header-anchor" href="#配置mysql8-0-环境变量" aria-hidden="true">#</a> 配置MySQL8.0 环境变量</h3>
<blockquote>
<p>如果不配置MySQL环境变量，就不能在命令行直接输入MySQL登录命令。下面说如何配置MySQL的环境变量：</p>
<p>步骤1：在桌面上右击【此电脑】图标，在弹出的快捷菜单中选择【属性】菜单命令。
步骤2：打开【系统】窗口，单击【高级系统设置】链接。
步骤3：打开【系统属性】对话框，选择【高级】选项卡，然后单击【环境变量】按钮。
步骤4：打开【环境变量】对话框，在系统变量列表中选择path变量。
步骤5：单击【编辑】按钮，在【编辑环境变量】对话框中，将MySQL应用程序的bin目录（C:\Program Files\MySQL\MySQL Server 8.0\bin）添加到变量值中，用分号将其与其他路径分隔开。
步骤6：添加完成之后，单击【确定】按钮，这样就完成了配置path变量的操作，然后就可以直接输入MySQL命令来登录数据库了</p>
</blockquote>
<h3 id="mysql5-7-版本的安装、配置" tabindex="-1"><a class="header-anchor" href="#mysql5-7-版本的安装、配置" aria-hidden="true">#</a> MySQL5.7 版本的安装、配置</h3>
<ul>
<li><strong>安装</strong></li>
</ul>
<p>此版本的安装过程与上述过程除了版本号不同之外，其它环节都是相同的</p>
<ul>
<li><strong>配置</strong></li>
</ul>
<p>配置环节与MySQL8.0版本确有细微不同。大部分情况下直接选择“Next”即可，不影响整理使用。</p>
<p>这里配置MySQL5.7时，重点强调：**与前面安装好的MySQL8.0不能使用相同的端口号</p>
<h2 id="mysql的登录" tabindex="-1"><a class="header-anchor" href="#mysql的登录" aria-hidden="true">#</a> MySQL的登录</h2>
<h3 id="服务的启动与停止" tabindex="-1"><a class="header-anchor" href="#服务的启动与停止" aria-hidden="true">#</a> 服务的启动与停止</h3>
<p>MySQL安装完毕之后，需要启动服务器进程，不然客户端无法连接数据库。</p>
<p>在前面的配置过程中，已经将MySQL安装为Windows服务，并且勾选当Windows启动、停止时，MySQL也自动启动、停止。</p>
<h4 id="方式1-使用图形界面工具" tabindex="-1"><a class="header-anchor" href="#方式1-使用图形界面工具" aria-hidden="true">#</a> 方式1：使用图形界面工具</h4>
<ul>
<li>
<p>步骤1：打开windows服务</p>
<ul>
<li>方式1：计算机（点击鼠标右键）→ 管理（点击）→ 服务和应用程序（点击）→ 服务（点击）</li>
<li>方式2：控制面板（点击）→ 系统和安全（点击）→ 管理工具（点击）→ 服务（点击）</li>
<li>方式3：任务栏（点击鼠标右键）→ 启动任务管理器（点击）→ 服务（点击）</li>
<li>方式4：单击【开始】菜单，在搜索框中输入“services.msc”，按Enter键确认</li>
</ul>
</li>
<li>
<p>步骤2：找到MySQL80（点击鼠标右键）→ 启动或停止（点击）</p>
</li>
</ul>
<h4 id="方式2-使用命令行工具" tabindex="-1"><a class="header-anchor" href="#方式2-使用命令行工具" aria-hidden="true">#</a> 方式2：使用命令行工具</h4>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code># 启动 MySQL 服务命令：
net start MySQL服务名

# 停止 MySQL 服务命令：
net stop MySQL服务名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p>
<ol>
<li>
<p>start和stop后面的服务名应与之前配置时指定的服务名一致。</p>
</li>
<li>
<p>如果当你输入命令后，提示“拒绝服务”，请以<code v-pre>系统管理员身份</code>打开命令提示符界面重新尝试。</p>
</li>
</ol>
<h3 id="_3-2-自带客户端的登录与退出" tabindex="-1"><a class="header-anchor" href="#_3-2-自带客户端的登录与退出" aria-hidden="true">#</a> 3.2 自带客户端的登录与退出</h3>
<p>当MySQL服务启动完成后，便可以通过客户端来登录MySQL数据库。注意：确认服务是开启的。</p>
<h4 id="登录方式1-mysql自带客户端" tabindex="-1"><a class="header-anchor" href="#登录方式1-mysql自带客户端" aria-hidden="true">#</a> 登录方式1：MySQL自带客户端</h4>
<p>开始菜单 → 所有程序 → MySQL → MySQL 8.0 Command Line Client</p>
<blockquote>
<p>说明：仅限于root用户</p>
</blockquote>
<h4 id="登录方式2-windows命令行" tabindex="-1"><a class="header-anchor" href="#登录方式2-windows命令行" aria-hidden="true">#</a> 登录方式2：windows命令行</h4>
<ul>
<li>格式：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql -h 主机名 -P 端口号 -u 用户名 -p密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>举例：</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql -h localhost -P 3306 -u root -pabc123  # 这里我设置的root用户的密码是abc123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：</p>
<p>（1）-p与密码之间不能有空格，其他参数名与参数值之间可以有空格也可以没有空格。如：</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>mysql <span class="token operator">-</span>hlocalhost <span class="token operator">-</span>P3306 <span class="token operator">-</span>uroot <span class="token operator">-</span>pabc123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）密码建议在下一行输入，保证安全</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>mysql <span class="token operator">-</span>h localhost <span class="token operator">-</span>P <span class="token number">3306</span> <span class="token operator">-</span>u root <span class="token operator">-</span>p
Enter password:<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）客户端和服务器在同一台机器上，所以输入localhost或者IP地址127.0.0.1。同时，因为是连接本机：
-hlocalhost就可以省略，如果端口号没有修改：-P3306也可以省略</p>
<p>简写成：</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>mysql <span class="token operator">-</span>u root <span class="token operator">-</span>p
Enter password:<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>连接成功后，有关于MySQL Server服务版本的信息，还有第几次连接的id标识。</p>
<p>也可以在命令行通过以下方式获取MySQL Server服务版本的信息：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>c:\> mysql -V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>c:\> mysql --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或<strong>登录</strong>后，通过以下方式查看当前版本信息：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql> select version();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="退出登录" tabindex="-1"><a class="header-anchor" href="#退出登录" aria-hidden="true">#</a> 退出登录</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>exit
或
quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql演示使用" tabindex="-1"><a class="header-anchor" href="#mysql演示使用" aria-hidden="true">#</a> MySQL演示使用</h2>
<h3 id="mysql的使用演示" tabindex="-1"><a class="header-anchor" href="#mysql的使用演示" aria-hidden="true">#</a> MySQL的使用演示</h3>
<p>1、查看所有的数据库</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>show databases;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>“information_schema”是 MySQL 系统自带的数据库，主要保存 MySQL 数据库服务器的系统信息，比如数据库的名称、数据表的名称、字段名称、存取权限、数据文件 所在的文件夹和系统使用的文件夹，等等</p>
<p>“performance_schema”是 MySQL 系统自带的数据库，可以用来监控 MySQL 的各类性能指标。</p>
<p>“sys”数据库是 MySQL 系统自带的数据库，主要作用是以一种更容易被理解的方式展示 MySQL 数据库服务器的各类性能指标，帮助系统管理员和开发人员监控 MySQL 的技术性能。</p>
<p>“mysql”数据库保存了 MySQL 数据库服务器运行时需要的系统信息，比如数据文件夹、当前使用的字符集、约束检查信息，等等</p>
</blockquote>
<p>为什么 Workbench 里面我们只能看到“demo”和“sys”这 2 个数据库呢？</p>
<p>这是因为，Workbench 是图形化的管理工具，主要面向开发人 员，“demo”和“sys”这 2 个数据库已经够用了。如果有特殊需求，比如，需要监控 MySQL 数据库各项性能指标、直接操作 MySQL 数据库系统文件等，可以由 DBA 通过 SQL 语句，查看其它的系统数据库。</p>
<p>2、创建自己的数据库</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>create database 数据库名;

#创建lai数据库，该名称不能与已经存在的数据库重名。
create database lai;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、使用自己的数据库</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>use 数据库名;

#使用lai数据库
use lai;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：如果没有使用use语句，后面针对数据库的操作也没有加“数据名”的限定，那么会报“ERROR 1046 (3D000): No database selected”（没有选择数据库）</p>
<p>使用完use语句之后，如果接下来的SQL都是针对一个数据库操作的，那就不用重复use了，如果要针对另一个数据库操作，那么要重新use。</p>
<p>4、查看某个库的所有表格</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>show tables;  #要求前面有use语句

show tables from 数据库名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、创建新的表格</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>create table 表名称(
	字段名  数据类型,
	字段名 数据类型
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：如果是最后一个字段，后面就用加逗号，因为逗号的作用是分割每个字段。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#创建学生表
create table student(
	id int,
    name varchar(20)  #说名字最长不超过20个字符
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、查看一个表的数据</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>select * from 数据库表名称;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#查看学生表的数据
select * from student;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>7、添加一条记录</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>insert into 表名称 values(值列表);

#添加两条记录到student表中
insert into student values(1,'张三');
insert into student values(2,'李四');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; insert into student values(1,'张三');
ERROR 1366 (HY000): Incorrect string value: '\xD5\xC5\xC8\xFD' for column 'name' at row 1
mysql&gt; insert into student values(2,'李四');
ERROR 1366 (HY000): Incorrect string value: '\xC0\xEE\xCB\xC4' for column 'name' at row 1
mysql&gt; show create table student;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字符集的问题。</p>
<p>8、查看表的创建信息</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>show create table 表名称\G


#查看student表的详细创建信息
show create table student\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#结果如下
*************************** 1. row ***************************
       Table: student
Create Table: CREATE TABLE `student` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的结果显示student的表格的默认字符集是“latin1”不支持中文。</p>
<p>9、查看数据库的创建信息</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>show create database 数据库名\G

#查看atguigudb数据库的详细创建信息
show create database lai\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#结果如下
*************************** 1. row ***************************
       Database: lai
Create Database: CREATE DATABASE `lai` /*!40100 DEFAULT CHARACTER SET latin1 */
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的结果显示atguigudb数据库也不支持中文，字符集默认是latin1。</p>
<p>10、删除表格</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>drop table 表名称;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#删除学生表
drop table student;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>11、删除数据库</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>drop database 数据库名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#删除lai数据库
drop database lai;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql的编码设置" tabindex="-1"><a class="header-anchor" href="#mysql的编码设置" aria-hidden="true">#</a> MySQL的编码设置</h3>
<h4 id="mysql5-7中" tabindex="-1"><a class="header-anchor" href="#mysql5-7中" aria-hidden="true">#</a> MySQL5.7中</h4>
<p><strong>问题再现：命令行操作sql乱码问题</strong></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; INSERT INTO t_stu VALUES(1,'张三','男');
ERROR 1366 (HY000): Incorrect string value: '\xD5\xC5\xC8\xFD' for column 'sname' at row 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>问题解决</strong></p>
<p>步骤1：查看编码命令</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>show variables like 'character_%';
show variables like 'collation_%';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤2：修改mysql的数据目录下的my.ini配置文件</p>
<div class="language-ini ext-ini line-numbers-mode"><pre v-pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysql</span><span class="token punctuation">]</span></span>  #大概在63行左右，在其下添加
... 
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8  #默认字符集</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>  # 大概在76行左右，在其下添加
...
<span class="token key attr-name">character-set-server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>
<span class="token key attr-name">collation-server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8_general_ci</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：建议修改配置文件使用notepad++等高级文本编辑器，使用记事本等软件打开修改后可能会导致文件编码修改为“含BOM头”的编码，从而服务重启失败。</p>
</blockquote>
<p>步骤3：重启服务</p>
<p>步骤4：查看编码命令</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">'character_%'</span><span class="token punctuation">;</span>
<span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">'collation_%'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如果是以上配置就说明对了。接着我们就可以新创建数据库、新创建数据表，接着添加包含中文的数据了。</li>
</ul>
<h4 id="mysql8-0中" tabindex="-1"><a class="header-anchor" href="#mysql8-0中" aria-hidden="true">#</a> MySQL8.0中</h4>
<p>在MySQL 8.0版本之前，默认字符集为latin1，utf8字符集指向的是utf8mb3。网站开发人员在数据库设计的时候往往会将编码修改为utf8字符集。如果遗忘修改默认的编码，就会出现乱码的问题。从MySQL 8.0开始，数据库的默认编码改为<code v-pre>utf8mb4</code>，从而避免了上述的乱码问题</p>
<h2 id="mysql图形化管理工具" tabindex="-1"><a class="header-anchor" href="#mysql图形化管理工具" aria-hidden="true">#</a> MySQL图形化管理工具</h2>
<p>MySQL图形化管理工具极大地方便了数据库的操作与管理，常用的图形化管理工具有：MySQL Workbench、phpMyAdmin、Navicat Preminum、MySQLDumper、SQLyog、dbeaver、MySQL ODBC Connector</p>
<h3 id="可能出现连接问题" tabindex="-1"><a class="header-anchor" href="#可能出现连接问题" aria-hidden="true">#</a> 可能出现连接问题：</h3>
<p>有些图形界面工具，特别是旧版本的图形界面工具，在连接MySQL8时出现“Authentication plugin 'caching_sha2_password' cannot be loaded”错误</p>
<p>出现这个原因是MySQL8之前的版本中加密规则是mysql_native_password，而在MySQL8之后，加密规则是caching_sha2_password。解决问题方法有两种，第一种是升级图形界面工具版本，第二种是把MySQL8用户登录密码加密规则还原成mysql_native_password。</p>
<p>第二种解决方案如下，用命令行登录MySQL数据库之后，执行如下命令修改用户密码加密规则并更新用户密码，这里修改用户名为“root@localhost”的用户密码规则为“mysql_native_password”，密码值为“123456”</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#使用mysql数据库
USE mysql; 

#修改'root'@'localhost'用户的密码规则和密码
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'abc123'; 

#刷新权限
FLUSH PRIVILEGES;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql目录结构与源码" tabindex="-1"><a class="header-anchor" href="#mysql目录结构与源码" aria-hidden="true">#</a> MySQL目录结构与源码</h2>
<h3 id="主要目录结构" tabindex="-1"><a class="header-anchor" href="#主要目录结构" aria-hidden="true">#</a> 主要目录结构</h3>
<table>
<thead>
<tr>
<th>MySQL的目录结构</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>bin目录</td>
<td>所有MySQL的可执行文件。如：mysql.exe</td>
</tr>
<tr>
<td>MySQLInstanceConfig.exe</td>
<td>数据库的配置向导，在安装时出现的内容</td>
</tr>
<tr>
<td>data目录</td>
<td>系统数据库所在的目录</td>
</tr>
<tr>
<td>my.ini文件</td>
<td>MySQL的主要配置文件</td>
</tr>
<tr>
<td>c:\ProgramData\MySQL\MySQL Server 8.0\data\</td>
<td>用户创建的数据库所在的目录</td>
</tr>
</tbody>
</table>
<h3 id="mysql-源代码获取" tabindex="-1"><a class="header-anchor" href="#mysql-源代码获取" aria-hidden="true">#</a> MySQL 源代码获取</h3>
<p>首先，你要进入 MySQL下载界面。 这里你不要选择用默认的“Microsoft Windows”，而是要通过下拉栏，找到“Source Code”，在下面的操作系统版本里面， 选择 Windows（Architecture Independent），然后点击下载。</p>
<p>接下来，把下载下来的压缩文件解压，我们就得到了 MySQL 的源代码。</p>
<p>MySQL 是用 C++ 开发而成的，我简单介绍一下源代码的组成。</p>
<p>mysql-8.0.22 目录下的各个子目录，包含了 MySQL 各部分组件的源代码：</p>
<ul>
<li>
<p>sql 子目录是 MySQL 核心代码；</p>
</li>
<li>
<p>libmysql 子目录是客户端程序 API；</p>
</li>
<li>
<p>mysql-test 子目录是测试工具；</p>
</li>
<li>
<p>mysys 子目录是操作系统相关函数和辅助函数；</p>
</li>
</ul>
<p>源代码可以用记事本打开查看，如果你有 C++ 的开发环境，也可以在开发环境中打开查看。</p>
<p>如上图所示，源代码并不神秘，就是普通的 C++ 代码，跟你熟悉的一样，而且有很多注释，可以帮助你理解。阅读源代码就像在跟 MySQL 的开发人员对话一样，十分有趣</p>
<h2 id="常见问题的解决" tabindex="-1"><a class="header-anchor" href="#常见问题的解决" aria-hidden="true">#</a> 常见问题的解决</h2>
<h3 id="问题1-root用户密码忘记-重置的操作" tabindex="-1"><a class="header-anchor" href="#问题1-root用户密码忘记-重置的操作" aria-hidden="true">#</a> 问题1：root用户密码忘记，重置的操作</h3>
<p>1: 通过任务管理器或者服务管理，关掉mysqld(服务进程)
2: 通过命令行+特殊参数开启mysqld
mysqld --defaults-file=&quot;D:\ProgramFiles\mysql\MySQLServer5.7Data\my.ini&quot; --skip-grant-tables</p>
<p>3: 此时，mysqld服务进程已经打开。并且不需要权限检查
4: mysql -uroot 无密码登陆服务器。另启动一个客户端进行
5: 修改权限表
（1） use mysql;
（2）update user set authentication_string=password('新密码') where user='root' and Host='localhost';
（3）flush privileges;
6: 通过任务管理器，关掉mysqld服务进程。
7: 再次通过服务管理，打开mysql服务。
8: 即可用修改后的新密码登陆。</p>
<h3 id="问题2-mysql命令报-不是内部或外部命令" tabindex="-1"><a class="header-anchor" href="#问题2-mysql命令报-不是内部或外部命令" aria-hidden="true">#</a> 问题2：mysql命令报“不是内部或外部命令”</h3>
<p>如果输入mysql命令报“不是内部或外部命令”，把mysql安装目录的bin目录配置到环境变量path中。如下：</p>
<h3 id="问题3-错误error-没有选择数据库就操作表格和数据" tabindex="-1"><a class="header-anchor" href="#问题3-错误error-没有选择数据库就操作表格和数据" aria-hidden="true">#</a> 问题3：错误ERROR ：没有选择数据库就操作表格和数据</h3>
<table>
<thead>
<tr>
<th>ERROR 1046 (3D000): No database selected</th>
</tr>
</thead>
<tbody>
<tr>
<td>解决方案一：就是使用“USE 数据库名;”语句，这样接下来的语句就默认针对这个数据库进行操作</td>
</tr>
<tr>
<td>解决方案二：就是所有的表对象前面都加上“数据库.”</td>
</tr>
</tbody>
</table>
<h3 id="问题4-命令行客户端的字符集问题" tabindex="-1"><a class="header-anchor" href="#问题4-命令行客户端的字符集问题" aria-hidden="true">#</a> 问题4：命令行客户端的字符集问题</h3>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; INSERT INTO t_stu VALUES(1,'张三','男');
ERROR 1366 (HY000): Incorrect string value: '\xD5\xC5\xC8\xFD' for column 'sname' at row 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>原因：服务器端认为你的客户端的字符集是utf-8，而实际上你的客户端的字符集是GBK。</p>
<p>查看所有字符集：<strong>SHOW VARIABLES LIKE 'character_set_%';</strong></p>
<p>解决方案，设置当前连接的客户端字符集 <strong>“SET NAMES GBK;”</strong></p>
<h3 id="问题5-修改数据库和表的字符编码" tabindex="-1"><a class="header-anchor" href="#问题5-修改数据库和表的字符编码" aria-hidden="true">#</a> 问题5：修改数据库和表的字符编码</h3>
<p>修改编码：</p>
<p>（1)先停止服务，（2）修改my.ini文件（3）重新启动服务</p>
<p>说明：</p>
<p>如果是在修改my.ini之前建的库和表，那么库和表的编码还是原来的Latin1，要么删了重建，要么使用alter语句修改编码。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create database 0728db charset Latin1;
Query OK, 1 row affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql> use 0728db;
Database changed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; create table student (id int , name varchar(20)) charset Latin1;
Query OK, 0 rows affected (0.02 sec)


mysql&gt; show create table student\G
*************************** 1. row ***************************
       Table: student
Create Table: CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; alter table student charset utf8; #修改表字符编码为UTF8
Query OK, 0 rows affected (0.01 sec)
Records: 0  Duplicates: 0  Warnings: 0


mysql&gt; show create table student\G
*************************** 1. row ***************************
       Table: student
Create Table: CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `name` varchar(20) CHARACTER SET latin1 DEFAULT NULL,  #字段仍然是latin1编码
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
1 row in set (0.00 sec)


mysql&gt; alter table student modify name varchar(20) charset utf8; #修改字段字符编码为UTF8
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0


mysql&gt; show create table student\G
*************************** 1. row ***************************
       Table: student
Create Table: CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; show create database 0728db;;
+--------+-----------------------------------------------------------------+
|Database| Create Database                                                 |
+------+-------------------------------------------------------------------+
|0728db| CREATE DATABASE `0728db` /*!40100 DEFAULT CHARACTER SET latin1 */ |
+------+-------------------------------------------------------------------+
1 row in set (0.00 sec)


mysql&gt; alter database 0728db charset utf8; #修改数据库的字符编码为utf8
Query OK, 1 row affected (0.00 sec)


mysql&gt; show create database 0728db;
+--------+-----------------------------------------------------------------+
|Database| Create Database                                                 |
+--------+-----------------------------------------------------------------+
| 0728db | CREATE DATABASE `0728db` /*!40100 DEFAULT CHARACTER SET utf8 */ |
+--------+-----------------------------------------------------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
