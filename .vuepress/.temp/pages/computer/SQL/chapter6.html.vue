<template><div><h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h2>
<h3 id="一条数据存储的过程" tabindex="-1"><a class="header-anchor" href="#一条数据存储的过程" aria-hidden="true">#</a> 一条数据存储的过程</h3>
<p>从系统架构的层次上看，MySQL 数据库系统从大到小依次是<code v-pre>数据库服务器</code>、<code v-pre>数据库</code>、<code v-pre>数据表</code>、数据表的<code v-pre>行与列</code></p>
<p><img src="https://s2.loli.net/2022/09/14/9rKjmuOzWXEA2Jl.png" alt="image-20211007155810920.png" loading="lazy"></p>
<h3 id="标识符命名规则" tabindex="-1"><a class="header-anchor" href="#标识符命名规则" aria-hidden="true">#</a> 标识符命名规则</h3>
<ul>
<li>数据库名、表名不得超过30个字符，变量名限制为29个</li>
<li>必须只能包含 A–Z, a–z, 0–9, _共63个字符</li>
<li>数据库名、表名、字段名等对象名中间不要包含空格</li>
<li>同一个MySQL软件中，数据库不能同名；同一个库中，表不能重名；同一个表中，字段不能重名</li>
<li>必须保证你的字段没有和保留字、数据库系统或常用方法冲突。如果坚持使用，请在SQL语句中使用`（着重号）引起来</li>
<li>保持字段名和类型的一致性：在命名字段并为其指定数据类型的时候一定要保证一致性，假如数据类型在一个表里是整数，那在另一个表里可就别变成字符型了</li>
</ul>
<h3 id="mysql中的数据类型" tabindex="-1"><a class="header-anchor" href="#mysql中的数据类型" aria-hidden="true">#</a> MySQL中的数据类型</h3>
<table>
<thead>
<tr>
<th>类型</th>
<th>类型举例</th>
</tr>
</thead>
<tbody>
<tr>
<td>整数类型</td>
<td>TINYINT、SMALLINT、MEDIUMINT、<strong>INT(或INTEGER)</strong>、BIGINT</td>
</tr>
<tr>
<td>浮点类型</td>
<td>FLOAT、DOUBLE</td>
</tr>
<tr>
<td>定点数类型</td>
<td><strong>DECIMAL</strong></td>
</tr>
<tr>
<td>位类型</td>
<td>BIT</td>
</tr>
<tr>
<td>日期时间类型</td>
<td>YEAR、TIME、<strong>DATE</strong>、DATETIME、TIMESTAMP</td>
</tr>
<tr>
<td>文本字符串类型</td>
<td>CHAR、<strong>VARCHAR</strong>、TINYTEXT、TEXT、MEDIUMTEXT、LONGTEXT</td>
</tr>
<tr>
<td>枚举类型</td>
<td>ENUM</td>
</tr>
<tr>
<td>集合类型</td>
<td>SET</td>
</tr>
<tr>
<td>二进制字符串类型</td>
<td>BINARY、VARBINARY、TINYBLOB、BLOB、MEDIUMBLOB、LONGBLOB</td>
</tr>
<tr>
<td>JSON类型</td>
<td>JSON对象、JSON数组</td>
</tr>
<tr>
<td>空间数据类型</td>
<td>单值：GEOMETRY、POINT、LINESTRING、POLYGON；<br/>集合：MULTIPOINT、MULTILINESTRING、MULTIPOLYGON、GEOMETRYCOLLECTION</td>
</tr>
</tbody>
</table>
<p>其中，常用的几类类型介绍如下：</p>
<table>
<thead>
<tr>
<th>数据类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>INT</td>
<td>从-2<sup>31到2</sup>31-1的整型数据。存储大小为 4个字节</td>
</tr>
<tr>
<td>CHAR(size)</td>
<td>定长字符数据。若未指定，默认为1个字符，最大长度255</td>
</tr>
<tr>
<td>VARCHAR(size)</td>
<td>可变长字符数据，根据字符串实际长度保存，<strong>必须指定长度</strong></td>
</tr>
<tr>
<td>FLOAT(M,D)</td>
<td>单精度，占用4个字节，M=整数位+小数位，D=小数位。 D&lt;=M&lt;=255,0&lt;=D&lt;=30，默认M+D&lt;=6</td>
</tr>
<tr>
<td>DOUBLE(M,D)</td>
<td>双精度，占用8个字节，D&lt;=M&lt;=255,0&lt;=D&lt;=30，默认M+D&lt;=15</td>
</tr>
<tr>
<td>DECIMAL(M,D)</td>
<td>高精度小数，占用M+2个字节，D&lt;=M&lt;=65，0&lt;=D&lt;=30，最大取值范围与DOUBLE相同。</td>
</tr>
<tr>
<td>DATE</td>
<td>日期型数据，格式'YYYY-MM-DD'</td>
</tr>
<tr>
<td>BLOB</td>
<td>二进制形式的长文本数据，最大可达4G</td>
</tr>
<tr>
<td>TEXT</td>
<td>长文本数据，最大可达4G</td>
</tr>
</tbody>
</table>
<h2 id="创建和管理数据库" tabindex="-1"><a class="header-anchor" href="#创建和管理数据库" aria-hidden="true">#</a> 创建和管理数据库</h2>
<h3 id="创建数据库" tabindex="-1"><a class="header-anchor" href="#创建数据库" aria-hidden="true">#</a> 创建数据库</h3>
<ul>
<li>方式1：创建数据库</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CREATE DATABASE 数据库名; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>方式2：创建数据库并指定字符集</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CREATE DATABASE 数据库名 CHARACTER SET 字符集;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>方式3：判断数据库是否已经存在，不存在则创建数据库（<code v-pre>推荐</code>）</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CREATE DATABASE IF NOT EXISTS 数据库名; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果MySQL中已经存在相关的数据库，则忽略创建语句，不再创建数据库。</p>
<blockquote>
<p>注意：DATABASE 不能改名。一些可视化工具可以改名，它是建新库，把所有表复制到新库，再删旧库完成的</p>
</blockquote>
<h3 id="使用数据库" tabindex="-1"><a class="header-anchor" href="#使用数据库" aria-hidden="true">#</a> 使用数据库</h3>
<ul>
<li>查看当前所有的数据库</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SHOW DATABASES; #有一个S，代表多个数据库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>查看当前正在使用的数据库</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT DATABASE();  #使用的一个 mysql 中的全局函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>查看指定库下所有的表</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SHOW TABLES FROM 数据库名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>查看数据库的创建信息</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SHOW CREATE DATABASE 数据库名;
或者：
SHOW CREATE DATABASE 数据库名\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用/切换数据库</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>USE 数据库名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>注意：要操作表格和数据之前必须先说明是对哪个数据库进行操作，否则就要对所有对象加上“数据库名.”</p>
</blockquote>
<h3 id="修改数据库" tabindex="-1"><a class="header-anchor" href="#修改数据库" aria-hidden="true">#</a> 修改数据库</h3>
<ul>
<li>更改数据库字符集</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>ALTER DATABASE 数据库名 CHARACTER SET 字符集;  #比如：gbk、utf8等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除数据库" tabindex="-1"><a class="header-anchor" href="#删除数据库" aria-hidden="true">#</a> 删除数据库</h3>
<ul>
<li>方式1：删除指定的数据库</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DROP DATABASE 数据库名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>方式2：删除指定的数据库（<code v-pre>推荐</code>）</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DROP DATABASE IF EXISTS 数据库名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表</h2>
<h3 id="创建方式1" tabindex="-1"><a class="header-anchor" href="#创建方式1" aria-hidden="true">#</a> 创建方式1</h3>
<ul>
<li><strong>必须具备：</strong>
<ul>
<li>CREATE TABLE权限</li>
<li>存储空间</li>
</ul>
</li>
<li><strong>语法格式：</strong></li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CREATE TABLE [IF NOT EXISTS] 表名(
	字段1, 数据类型 [约束条件] [默认值],
	字段2, 数据类型 [约束条件] [默认值],
	字段3, 数据类型 [约束条件] [默认值],
	……
	[表约束条件]
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>加上了IF NOT EXISTS关键字，则表示：如果当前数据库中不存在要创建的数据表，则创建数据表；如果当前数据库中已经存在要创建的数据表，则忽略建表语句，不再创建数据表。</p>
</blockquote>
<ul>
<li><strong>必须指定：</strong>
<ul>
<li>表名</li>
<li>列名(或字段名)，数据类型，<strong>长度</strong></li>
</ul>
</li>
<li><strong>可选指定：</strong>
<ul>
<li>约束条件</li>
<li>默认值</li>
</ul>
</li>
</ul>
<h3 id="创建方式2" tabindex="-1"><a class="header-anchor" href="#创建方式2" aria-hidden="true">#</a> 创建方式2</h3>
<ul>
<li>
<p>使用 AS subquery 选项，<strong>将创建表和插入数据结合起来</strong></p>
<p><img src="https://s2.loli.net/2022/09/14/EeBI7JPhWiVMlYz.png" alt="1554997882872.png" loading="lazy"></p>
</li>
<li>
<p>指定的列和子查询中的列要一一对应</p>
</li>
<li>
<p>通过列名和默认值定义列</p>
</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CREATE TABLE dept80
AS 
SELECT  employee_id, last_name, salary*12 ANNSAL, hire_date
FROM    employees
WHERE   department_id = 80;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看数据表结构" tabindex="-1"><a class="header-anchor" href="#查看数据表结构" aria-hidden="true">#</a> 查看数据表结构</h3>
<p>在MySQL中创建好数据表之后，可以查看数据表的结构。MySQL支持使用<code v-pre>DESCRIBE/DESC</code>语句查看数据表结构，也支持使用<code v-pre>SHOW CREATE TABLE</code>语句查看数据表结构。</p>
<p>语法格式如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SHOW CREATE TABLE 表名\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用SHOW CREATE TABLE语句不仅可以查看表创建时的详细语句，还可以查看存储引擎和字符编码</p>
<h2 id="修改表" tabindex="-1"><a class="header-anchor" href="#修改表" aria-hidden="true">#</a> 修改表</h2>
<p><strong>使用 ALTER TABLE 语句可以实现：</strong></p>
<ul>
<li>
<p>向已有的表中添加列</p>
</li>
<li>
<p>修改现有表中的列</p>
</li>
<li>
<p>删除现有表中的列</p>
</li>
<li>
<p>重命名现有表中的列</p>
</li>
</ul>
<h3 id="追加一个列" tabindex="-1"><a class="header-anchor" href="#追加一个列" aria-hidden="true">#</a> 追加一个列</h3>
<p>语法格式如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>ALTER TABLE 表名 ADD 【COLUMN】 字段名 字段类型 【FIRST|AFTER 字段名】;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>ALTER TABLE dept80 
ADD job_id varchar(15);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改一个列" tabindex="-1"><a class="header-anchor" href="#修改一个列" aria-hidden="true">#</a> 修改一个列</h3>
<ul>
<li>
<p>可以修改列的数据类型，长度、默认值和位置</p>
</li>
<li>
<p>修改字段数据类型、长度、默认值、位置的语法格式如下：</p>
</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>ALTER TABLE 表名 MODIFY 【COLUMN】 字段名1 字段类型 【DEFAULT 默认值】【FIRST|AFTER 字段名2】;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>ALTER TABLE	dept80
MODIFY salary double(9,2) default 1000;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>对默认值的修改只影响今后对表的修改</li>
<li>此外，还可以通过此种方式修改列的约束</li>
</ul>
<h3 id="重命名一个列" tabindex="-1"><a class="header-anchor" href="#重命名一个列" aria-hidden="true">#</a> 重命名一个列</h3>
<p>使用 CHANGE old_column  new_column  dataType子句重命名列。语法格式如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>ALTER TABLE 表名 CHANGE 【column】 列名 新列名 新数据类型;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除一个列" tabindex="-1"><a class="header-anchor" href="#删除一个列" aria-hidden="true">#</a> 删除一个列</h3>
<p>删除表中某个字段的语法格式如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>ALTER TABLE 表名 DROP 【COLUMN】字段名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="重命名表" tabindex="-1"><a class="header-anchor" href="#重命名表" aria-hidden="true">#</a> 重命名表</h2>
<ul>
<li>方式一：使用RENAME</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>RENAME TABLE emp
TO myemp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>方式二：</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>ALTER table dept
RENAME [TO] detail_dept;  -- [TO]可以省略
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>必须是对象的拥有者</li>
</ul>
<h2 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表" aria-hidden="true">#</a> 删除表</h2>
<ul>
<li>
<p>在MySQL中，当一张数据表<code v-pre>没有与其他任何数据表形成关联关系</code>时，可以将当前数据表直接删除。</p>
</li>
<li>
<p>数据和结构都被删除</p>
</li>
<li>
<p>所有正在运行的相关事务被提交</p>
</li>
<li>
<p>所有相关索引被删除</p>
</li>
<li>
<p>语法格式：</p>
</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DROP TABLE [IF EXISTS] 数据表1 [, 数据表2, …, 数据表n];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>IF EXISTS</code>的含义为：如果当前数据库中存在相应的数据表，则删除数据表；如果当前数据库中不存在相应的数据表，则忽略删除语句，不再执行删除数据表的操作。</p>
<blockquote>
<p>DROP TABLE 语句不能回滚</p>
</blockquote>
<h2 id="清空表" tabindex="-1"><a class="header-anchor" href="#清空表" aria-hidden="true">#</a> 清空表</h2>
<p>TRUNCATE TABLE语句：</p>
<ul>
<li>
<p>删除表中所有的数据</p>
</li>
<li>
<p>释放表的存储空间</p>
</li>
<li>
<p>TRUNCATE语句<strong>不能回滚</strong>，而使用 DELETE 语句删除数据，可以回滚</p>
</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>TRUNCATE TABLE detail_dept;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="插入数据" tabindex="-1"><a class="header-anchor" href="#插入数据" aria-hidden="true">#</a> 插入数据</h2>
<h3 id="方式1-values的方式添加" tabindex="-1"><a class="header-anchor" href="#方式1-values的方式添加" aria-hidden="true">#</a> 方式1：VALUES的方式添加</h3>
<p>使用这种语法一次只能向表中插入<strong>一条</strong>数据。</p>
<p><strong>情况1：为表的所有字段按默认顺序插入数据</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>INSERT INTO 表名
VALUES (value1,value2,....);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>值列表中需要为表的每一个字段指定值，并且值的顺序必须和数据表中字段定义时的顺序相同</p>
<p><strong>情况2：为表的指定字段插入数据</strong></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>INSERT INTO 表名(column1 [, column2, …, columnn]) 
VALUES (value1 [,value2, …, valuen]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为表的指定字段插入数据，就是在INSERT语句中只向部分字段中插入值，而其他字段的值为表定义时的默认值。</p>
<p>在 INSERT 子句中随意列出列名，但是一旦列出，VALUES中要插入的value1,....valuen需要与column1,...columnn列一一对应。如果类型不同，将无法插入，并且MySQL会产生错误</p>
<p><strong>情况3：同时插入多条记录</strong></p>
<p>INSERT语句可以同时向数据表中插入多条记录，插入时指定多个值列表，每个值列表之间用逗号分隔开，基本语法格式如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>INSERT INTO table_name 
VALUES 
(value1 [,value2, …, valuen]),
(value1 [,value2, …, valuen]),
……
(value1 [,value2, …, valuen]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>INSERT INTO table_name(column1 [, column2, …, columnn]) 
VALUES 
(value1 [,value2, …, valuen]),
(value1 [,value2, …, valuen]),
……
(value1 [,value2, …, valuen]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用INSERT同时插入多条记录时，MySQL会返回一些在执行单行插入时没有的额外信息，这些信息的含义如下：
●　Records：表明插入的记录条数。
●　Duplicates：表明插入时被忽略的记录，原因可能是这些记录包含了重复的主键值。
●　Warnings：表明有问题的数据值，例如发生数据类型转换。</p>
<blockquote>
<p>一个同时插入多行记录的INSERT语句等同于多个单行插入的INSERT语句，但是多行的INSERT语句在处理过程中<code v-pre>效率更高</code>。因为MySQL执行单条INSERT语句插入多行数据比使用多条INSERT语句快，所以在插入多条记录时最好选择使用单条INSERT语句的方式插入</p>
</blockquote>
<p><strong>小结：</strong></p>
<ul>
<li>
<p><code v-pre>VALUES</code>也可以写成<code v-pre>VALUE</code>，但是VALUES是标准写法。</p>
</li>
<li>
<p>字符和日期型数据应包含在单引号中</p>
</li>
</ul>
<h3 id="方式2-将查询结果插入到表中" tabindex="-1"><a class="header-anchor" href="#方式2-将查询结果插入到表中" aria-hidden="true">#</a> 方式2：将查询结果插入到表中</h3>
<p>INSERT还可以将SELECT语句查询的结果插入到表中，此时不需要把每一条记录的值一个一个输入，只需要使用一条INSERT语句和一条SELECT语句组成的组合语句即可快速地从一个或多个表中向一个表中插入多行</p>
<p>基本语法格式如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>INSERT INTO 目标表名
(tar_column1 [, tar_column2, …, tar_columnn])
SELECT
(src_column1 [, src_column2, …, src_columnn])
FROM 源表名
[WHERE condition]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>在 INSERT 语句中加入子查询。</li>
<li><strong>不必书写</strong> <strong>VALUES</strong> <strong>子句。</strong></li>
<li>子查询中的值列表应与 INSERT 子句中的列名对应</li>
</ul>
<p>举例：</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> emp2 
<span class="token keyword">SELECT</span> <span class="token operator">*</span> 
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token number">90</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> sales_reps<span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> salary<span class="token punctuation">,</span> commission_pct<span class="token punctuation">)</span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> salary<span class="token punctuation">,</span> commission_pct
<span class="token keyword">FROM</span>   employees
<span class="token keyword">WHERE</span>  job_id <span class="token operator">LIKE</span> <span class="token string">'%REP%'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新数据" tabindex="-1"><a class="header-anchor" href="#更新数据" aria-hidden="true">#</a> 更新数据</h2>
<ul>
<li>使用 UPDATE 语句更新数据。语法如下：</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>UPDATE table_name
SET column1=value1, column2=value2, … , column=valuen
[WHERE condition]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>可以一次更新<strong>多条</strong>数据。</p>
</li>
<li>
<p>如果需要回滚数据，需要保证在DML前，进行设置：<strong>SET AUTOCOMMIT = FALSE;</strong></p>
</li>
</ul>
<hr>
<ul>
<li>使用 <strong>WHERE</strong> 子句指定需要更新的数据。</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">UPDATE</span> employees
<span class="token keyword">SET</span>    department_id <span class="token operator">=</span> <span class="token number">70</span>
<span class="token keyword">WHERE</span>  employee_id <span class="token operator">=</span> <span class="token number">113</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如果省略 WHERE 子句，则表中的所有数据都将被更新。</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">UPDATE</span> 	copy_emp
<span class="token keyword">SET</span>    	department_id <span class="token operator">=</span> <span class="token number">110</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>更新中的数据完整性错误</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">UPDATE</span> employees
<span class="token keyword">SET</span>    department_id <span class="token operator">=</span> <span class="token number">55</span>
<span class="token keyword">WHERE</span>  department_id <span class="token operator">=</span> <span class="token number">110</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>说明：不存在 55 号部门</p>
</blockquote>
<h2 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据" aria-hidden="true">#</a> 删除数据</h2>
<ul>
<li>使用 DELETE 语句从表中删除数据</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DELETE FROM table_name [WHERE &lt;condition&gt;];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>table_name指定要执行删除操作的表；“[WHERE <code v-pre>&lt;condition&gt;</code>]”为可选参数，指定删除条件，如果没有WHERE子句，DELETE语句将删除表中的所有记录</p>
<ul>
<li><strong>删除中的数据完整性错误</strong></li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DELETE FROM departments
WHERE       department_id = 60;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>说明：You cannot delete a row that contains a primary key that is used as a foreign key in another table.</p>
</blockquote>
</div></template>
