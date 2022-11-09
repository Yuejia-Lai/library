<template><div><h2 id="sql概述" tabindex="-1"><a class="header-anchor" href="#sql概述" aria-hidden="true">#</a> SQL概述</h2>
<h3 id="sql-分类" tabindex="-1"><a class="header-anchor" href="#sql-分类" aria-hidden="true">#</a> SQL 分类</h3>
<p>SQL语言在功能上主要分为如下3大类：</p>
<ul>
<li>
<p><strong>DDL（Data Definition Languages、数据定义语言）</strong>，这些语句定义了不同的数据库、表、视图、索引等数据库对象，还可以用来创建、删除、修改数据库和数据表的结构。</p>
<ul>
<li>主要的语句关键字包括<code v-pre>CREATE</code>、<code v-pre>DROP</code>、<code v-pre>ALTER</code>等。</li>
</ul>
</li>
<li>
<p><strong>DML（Data Manipulation Language、数据操作语言）</strong>，用于添加、删除、更新和查询数据库记录，并检查数据完整性。</p>
<ul>
<li>主要的语句关键字包括<code v-pre>INSERT</code>、<code v-pre>DELETE</code>、<code v-pre>UPDATE</code>、<code v-pre>SELECT</code>等。</li>
<li><strong>SELECT是SQL语言的基础，最为重要。</strong></li>
</ul>
</li>
<li>
<p><strong>DCL（Data Control Language、数据控制语言）</strong>，用于定义数据库、表、字段、用户的访问权限和安全级别。</p>
<ul>
<li>主要的语句关键字包括<code v-pre>GRANT</code>、<code v-pre>REVOKE</code>、<code v-pre>COMMIT</code>、<code v-pre>ROLLBACK</code>、<code v-pre>SAVEPOINT</code>等。</li>
</ul>
</li>
</ul>
<blockquote>
<p>因为查询语句使用的非常的频繁，所以很多人把查询语句单拎出来一类：DQL（数据查询语言）。</p>
<p>还有单独将<code v-pre>COMMIT</code>、<code v-pre>ROLLBACK</code> 取出来称为TCL （Transaction Control Language，事务控制语言）</p>
</blockquote>
<h2 id="sql语言的规则与规范" tabindex="-1"><a class="header-anchor" href="#sql语言的规则与规范" aria-hidden="true">#</a> SQL语言的规则与规范</h2>
<h3 id="基本规则" tabindex="-1"><a class="header-anchor" href="#基本规则" aria-hidden="true">#</a> 基本规则</h3>
<ul>
<li>SQL 可以写在一行或者多行。为了提高可读性，各子句分行写，必要时使用缩进</li>
<li>每条命令以 ; 或 \g 或 \G 结束</li>
<li>关键字不能被缩写也不能分行</li>
<li>关于标点符号
<ul>
<li>必须保证所有的()、单引号、双引号是成对结束的</li>
<li>必须使用英文状态下的半角输入方式</li>
<li>字符串型和日期时间类型的数据可以使用单引号（' '）表示</li>
<li>列的别名，尽量使用双引号（&quot; &quot;），而且不建议省略as</li>
</ul>
</li>
</ul>
<h3 id="sql大小写规范-建议遵守" tabindex="-1"><a class="header-anchor" href="#sql大小写规范-建议遵守" aria-hidden="true">#</a> SQL大小写规范 （建议遵守）</h3>
<ul>
<li><strong>MySQL 在 Windows 环境下是大小写不敏感的</strong></li>
<li><strong>MySQL 在 Linux 环境下是大小写敏感的</strong>
<ul>
<li>数据库名、表名、表的别名、变量名是严格区分大小写的</li>
<li>关键字、函数名、列名(或字段名)、列的别名(字段的别名) 是忽略大小写的。</li>
</ul>
</li>
<li><strong>推荐采用统一的书写规范：</strong>
<ul>
<li>数据库名、表名、表别名、字段名、字段别名等都小写</li>
<li>SQL 关键字、函数名、绑定变量等都大写</li>
</ul>
</li>
</ul>
<h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3>
<p>可以使用如下格式的注释结构</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>单行注释：#注释文字(MySQL特有的方式)
单行注释：-- 注释文字(--后面必须包含一个空格。)
多行注释：/* 注释文字  */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名规则" tabindex="-1"><a class="header-anchor" href="#命名规则" aria-hidden="true">#</a> 命名规则</h3>
<ul>
<li>数据库、表名不得超过30个字符，变量名限制为29个</li>
<li>必须只能包含 A–Z, a–z, 0–9, _共63个字符</li>
<li>数据库名、表名、字段名等对象名中间不要包含空格</li>
<li>同一个MySQL软件中，数据库不能同名；同一个库中，表不能重名；同一个表中，字段不能重名</li>
<li>必须保证你的字段没有和保留字、数据库系统或常用方法冲突。如果坚持使用，请在SQL语句中使用`（着重号）引起来</li>
<li>保持字段名和类型的一致性，在命名字段并为其指定数据类型的时候一定要保证一致性。假如数据类型在一个表里是整数，那在另一个表里可就别变成字符型了</li>
</ul>
<p>举例：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#以下两句是一样的，不区分大小写
show databases;
SHOW DATABASES;

#创建表格
#create table student info(...); #表名错误，因为表名有空格
create table student_info(...); 

#其中order使用``飘号，因为order和系统关键字或系统函数名等预定义标识符重名了
CREATE TABLE `order`(
    id INT,
    lname VARCHAR(20)
);

select id as &quot;编号&quot;, `name` as &quot;姓名&quot; from t_stu; #起别名时，as都可以省略
select id as 编号, `name` as 姓名 from t_stu; #如果字段别名中没有空格，那么可以省略&quot;&quot;
select id as 编 号, `name` as 姓 名 from t_stu; #错误，如果字段别名中有空格，那么不能省略&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据导入指令" tabindex="-1"><a class="header-anchor" href="#数据导入指令" aria-hidden="true">#</a> 数据导入指令</h3>
<p>在命令行客户端登录mysql，使用source指令导入</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; source d:\mysqldb.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; desc employees;
+----------------+-------------+------+-----+---------+-------+
| Field          | Type        | Null | Key | Default | Extra |
+----------------+-------------+------+-----+---------+-------+
| employee_id    | int(6)      | NO   | PRI | 0       |       |
| first_name     | varchar(20) | YES  |     | NULL    |       |
| last_name      | varchar(25) | NO   |     | NULL    |       |
| email          | varchar(25) | NO   | UNI | NULL    |       |
| phone_number   | varchar(20) | YES  |     | NULL    |       |
| hire_date      | date        | NO   |     | NULL    |       |
| job_id         | varchar(10) | NO   | MUL | NULL    |       |
| salary         | double(8,2) | YES  |     | NULL    |       |
| commission_pct | double(2,2) | YES  |     | NULL    |       |
| manager_id     | int(6)      | YES  | MUL | NULL    |       |
| department_id  | int(4)      | YES  | MUL | NULL    |       |
+----------------+-------------+------+-----+---------+-------+
11 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本的select语句" tabindex="-1"><a class="header-anchor" href="#基本的select语句" aria-hidden="true">#</a> 基本的SELECT语句</h2>
<h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> SELECT...</h3>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT 1; #没有任何子句
SELECT 9/2; #没有任何子句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="select-from" tabindex="-1"><a class="header-anchor" href="#select-from" aria-hidden="true">#</a> SELECT ... FROM</h3>
<ul>
<li>语法：</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span>   标识选择哪些列
<span class="token keyword">FROM</span>     标识从哪个表中选择
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>选择全部列：</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span>
<span class="token keyword">FROM</span>   departments<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一般情况下，除非需要使用表中所有的字段数据，最好不要使用通配符‘*’。使用通配符虽然可以节省输入查询语句的时间，但是获取不需要的列数据通常会降低查询和所使用的应用程序的效率。通配符的优势是，当不知道所需要的列的名称时，可以通过它获取它们。</p>
<p>在生产环境下，不推荐你直接使用<code v-pre>SELECT *</code>进行查询</p>
<ul>
<li>选择特定的列：</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span> location_id
<span class="token keyword">FROM</span>   departments<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>MySQL中的SQL语句是不区分大小写的，因此SELECT和select的作用是相同的，但是，许多开发人员习惯将关键字大写、数据列和表名小写，读者也应该养成一个良好的编程习惯，这样写出来的代码更容易阅读和维护</p>
</blockquote>
<h3 id="列的别名" tabindex="-1"><a class="header-anchor" href="#列的别名" aria-hidden="true">#</a> 列的别名</h3>
<ul>
<li>
<p>重命名一个列</p>
</li>
<li>
<p>便于计算</p>
</li>
<li>
<p>紧跟列名，也可以<strong>在列名和别名之间加入关键字AS，别名使用双引号</strong>，以便在别名中包含空格或特殊的字符并区分大小写。</p>
</li>
<li>
<p>AS 可以省略</p>
</li>
<li>
<p>建议别名简短，见名知意</p>
</li>
<li>
<p>举例</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT last_name AS name, commission_pct comm
FROM   employees;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT last_name &quot;Name&quot;, salary*12 &quot;Annual Salary&quot;
FROM   employees;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="去除重复行" tabindex="-1"><a class="header-anchor" href="#去除重复行" aria-hidden="true">#</a> 去除重复行</h3>
<p>默认情况下，查询会返回全部行，包括重复行。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> department_id
<span class="token keyword">FROM</span>   employees<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在SELECT语句中使用关键字DISTINCT去除重复行</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> department_id
<span class="token keyword">FROM</span>   employees<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>针对于：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT DISTINCT department_id,salary 
FROM employees;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有两点需要注意：</p>
<ol>
<li>DISTINCT 需要放到所有列名的前面，如果写成<code v-pre>SELECT salary, DISTINCT department_id FROM employees</code>会报错。</li>
<li>DISTINCT 其实是对后面所有列名的组合进行去重，你能看到最后的结果是 74 条，因为这 74 个部门id不同，都有 salary 这个属性值。如果你想要看都有哪些不同的部门（department_id），只需要写<code v-pre>DISTINCT department_id</code>即可，后面不需要再加其他的列名了。</li>
</ol>
<h3 id="空值参与运算" tabindex="-1"><a class="header-anchor" href="#空值参与运算" aria-hidden="true">#</a> 空值参与运算</h3>
<ul>
<li>所有运算符或列值遇到null值，运算的结果都为null</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>salary<span class="token punctuation">,</span>commission_pct<span class="token punctuation">,</span>
<span class="token number">12</span> <span class="token operator">*</span> salary <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> commission_pct<span class="token punctuation">)</span> <span class="token string">"annual_sal"</span>
<span class="token keyword">FROM</span> employees<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里你一定要注意，在 MySQL 里面， 空值不等于空字符串。一个空字符串的长度是 0，而一个空值的长度是空。而且，在 MySQL 里面，空值是占用空间的。</p>
<h3 id="着重号" tabindex="-1"><a class="header-anchor" href="#着重号" aria-hidden="true">#</a> 着重号</h3>
<ul>
<li>错误的</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT * FROM ORDER;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'ORDER' at line 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>正确的</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT * FROM `ORDER`;
+----------+------------+
| order_id | order_name |
+----------+------------+
|        1 | shkstart   |
|        2 | tomcat     |
|        3 | dubbo      |
+----------+------------+
3 rows in set (0.00 sec)

mysql&gt; SELECT * FROM `order`;
+----------+------------+
| order_id | order_name |
+----------+------------+
|        1 | shkstart   |
|        2 | tomcat     |
|        3 | dubbo      |
+----------+------------+
3 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>结论</li>
</ul>
<p>我们需要保证表中的字段、表名等没有和保留字、数据库系统或常用方法冲突。如果真的相同，请在SQL语句中使用一对``（着重号）引起来</p>
<h3 id="查询常数" tabindex="-1"><a class="header-anchor" href="#查询常数" aria-hidden="true">#</a> 查询常数</h3>
<p>SELECT 查询还可以对常数进行查询。对的，就是在 SELECT 查询结果中增加一列固定的常数列。这列的取值是我们指定的，而不是从数据表中动态取出的。</p>
<p>你可能会问为什么我们还要对常数进行查询呢？</p>
<p>SQL 中的 SELECT 语法的确提供了这个功能，一般来说我们只从一个表中查询数据，通常不需要增加一个固定的常数列，但如果我们想整合不同的数据源，用常数列作为这个表的标记，就需要查询常数。</p>
<p>比如说，我们想对 employees 数据表中的员工姓名进行查询，同时增加一列字段<code v-pre>corporation</code>，这个字段固定值为“baidu”，可以这样写：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT 'baidu' as corporation, last_name FROM employees;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="显示表结构" tabindex="-1"><a class="header-anchor" href="#显示表结构" aria-hidden="true">#</a> 显示表结构</h2>
<p>使用DESCRIBE 或 DESC 命令，表示表结构。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DESCRIBE employees;
或
DESC employees;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; desc employees;
+----------------+-------------+------+-----+---------+-------+
| Field          | Type        | Null | Key | Default | Extra |
+----------------+-------------+------+-----+---------+-------+
| employee_id    | int(6)      | NO   | PRI | 0       |       |
| first_name     | varchar(20) | YES  |     | NULL    |       |
| last_name      | varchar(25) | NO   |     | NULL    |       |
| email          | varchar(25) | NO   | UNI | NULL    |       |
| phone_number   | varchar(20) | YES  |     | NULL    |       |
| hire_date      | date        | NO   |     | NULL    |       |
| job_id         | varchar(10) | NO   | MUL | NULL    |       |
| salary         | double(8,2) | YES  |     | NULL    |       |
| commission_pct | double(2,2) | YES  |     | NULL    |       |
| manager_id     | int(6)      | YES  | MUL | NULL    |       |
| department_id  | int(4)      | YES  | MUL | NULL    |       |
+----------------+-------------+------+-----+---------+-------+
11 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，各个字段的含义分别解释如下：</p>
<ul>
<li>Field：表示字段名称</li>
<li>Type：表示字段类型，这里 barcode、goodsname 是文本型的，price 是整数类型的。</li>
<li>Null：表示该列是否可以存储NULL值</li>
<li>Key：表示该列是否已编制索引。PRI表示该列是表主键的一部分；UNI表示该列是UNIQUE索引的一部分；MUL表示在列中某个给定值允许出现多次</li>
<li>Default：表示该列是否有默认值，如果有，那么值是多少</li>
<li>Extra：表示可以获取的与给定列有关的附加信息，例如AUTO_INCREMENT等</li>
</ul>
<h2 id="过滤数据" tabindex="-1"><a class="header-anchor" href="#过滤数据" aria-hidden="true">#</a> 过滤数据</h2>
<ul>
<li>
<p>语法：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT 字段1,字段2
FROM 表名
WHERE 过滤条件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用WHERE 子句，将不满足条件的行过滤掉</li>
<li><strong>WHERE子句紧随 FROM子句</strong></li>
</ul>
</li>
<li>
<p>举例</p>
</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> department_id
<span class="token keyword">FROM</span>   employees
<span class="token keyword">WHERE</span>  department_id <span class="token operator">=</span> <span class="token number">90</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h2>
<p>算术运算符主要用于数学运算，其可以连接运算符前后的两个数值或表达式，对数值或表达式进行加（+）、减（-）、乘（*）、除（/）和取模（%）运算</p>
<p><img src="https://s2.loli.net/2022/08/27/KVPDpMwJkNyeutg.png" alt="image-20211012100749193.png" loading="lazy"></p>
<p><strong>加法与减法运算符</strong></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT 100, 100 + 0, 100 - 0, 100 + 50, 100 + 50 -30, 100 + 35.5, 100 - 35.5 FROM dual;
+-----+---------+---------+----------+--------------+------------+------------+
| 100 | 100 + 0 | 100 - 0 | 100 + 50 | 100 + 50 -30 | 100 + 35.5 | 100 - 35.5 |
+-----+---------+---------+----------+--------------+------------+------------+
| 100 |     100 |     100 |      150 |          120 |      135.5 |       64.5 |
+-----+---------+---------+----------+--------------+------------+------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由运算结果可以得出如下结论：</p>
<blockquote>
<ul>
<li>一个整数类型的值对整数进行加法和减法操作，结果还是一个整数；</li>
<li>一个整数类型的值对浮点数进行加法和减法操作，结果是一个浮点数；</li>
<li>加法和减法的优先级相同，进行先加后减操作与进行先减后加操作的结果是一样的；</li>
<li>在Java中，+的左右两边如果有字符串，那么表示字符串的拼接。但是在MySQL中+只表示数值相加。如果遇到非数值类型，先尝试转成数值，如果转失败，就按0计算。（补充：MySQL中字符串拼接要使用字符串函数CONCAT()实现）</li>
</ul>
</blockquote>
<p><strong>乘法与除法运算符</strong></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT 100, 100 * 1, 100 * 1.0, 100 / 1.0, 100 / 2,100 + 2 * 5 / 2,100 /3, 100 DIV 0 FROM dual;
+-----+---------+-----------+-----------+---------+-----------------+---------+-----------+
| 100 | 100 * 1 | 100 * 1.0 | 100 / 1.0 | 100 / 2 | 100 + 2 * 5 / 2 | 100 /3  | 100 DIV 0 |
+-----+---------+-----------+-----------+---------+-----------------+---------+-----------+
| 100 |     100 |     100.0 |  100.0000 | 50.0000 |        105.0000 | 33.3333 |      NULL |
+-----+---------+-----------+-----------+---------+-----------------+---------+-----------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#计算出员工的年基本工资
SELECT employee_id,salary,salary * 12 annual_sal 
FROM employees;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由运算结果可以得出如下结论：</p>
<blockquote>
<ul>
<li>一个数乘以整数1和除以整数1后仍得原数；</li>
<li>一个数乘以浮点数1和除以浮点数1后变成浮点数，数值与原数相等；</li>
<li>一个数除以整数后，不管是否能除尽，结果都为一个浮点数；</li>
<li>一个数除以另一个数，除不尽时，结果为一个浮点数，并保留到小数点后4位；</li>
<li>乘法和除法的优先级相同，进行先乘后除操作与先除后乘操作，得出的结果相同。</li>
<li>在数学运算中，0不能用作除数，在MySQL中，一个数除以0为NULL。</li>
</ul>
</blockquote>
<p><strong>求模（求余）运算符</strong>
将t22表中的字段i对3和5进行求模（求余）运算。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT 12 % 3, 12 MOD 5 FROM dual;
+--------+----------+
| 12 % 3 | 12 MOD 5 |
+--------+----------+
|      0 |        2 |
+--------+----------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#筛选出employee_id是偶数的员工
SELECT * FROM employees
WHERE employee_id MOD 2 = 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，100对3求模后的结果为3，对5求模后的结果为0</p>
<h2 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h2>
<p>比较运算符用来对表达式左边的操作数和右边的操作数进行比较，比较的结果为真则返回1，比较的结果为假则返回0，其他情况则返回NULL。</p>
<p>比较运算符经常被用来作为SELECT查询语句的条件来使用，返回符合条件的结果记录</p>
<p><img src="https://s2.loli.net/2022/08/27/ux7JjcXYSafIPH9.png" alt="image-20211012101110021.png" loading="lazy"></p>
<p><img src="https://s2.loli.net/2022/08/27/9KBWSaNGAndMQYT.png" alt="image-20211012104955094.png" loading="lazy"></p>
<p><strong>1．等号运算符</strong></p>
<ul>
<li>
<p>等号运算符（=）判断等号两边的值、字符串或表达式是否相等，如果相等则返回1，不相等则返回0。</p>
</li>
<li>
<p>在使用等号运算符时，遵循如下规则：</p>
<ul>
<li>如果等号两边的值、字符串或表达式都为字符串，则MySQL会按照字符串进行比较，其比较的是每个字符串中字符的ANSI编码是否相等。</li>
<li>如果等号两边的值都是整数，则MySQL会按照整数来比较两个值的大小。</li>
<li>如果等号两边的值一个是整数，另一个是字符串，则MySQL会将字符串转化为数字进行比较。</li>
<li>如果等号两边的值、字符串或表达式中有一个为NULL，则比较结果为NULL。</li>
</ul>
</li>
<li>
<p>对比：SQL中赋值符号使用 :=</p>
</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT 1 = 1, 1 = '1', 1 = 0, 'a' = 'a', (5 + 3) = (2 + 6), '' = NULL , NULL = NULL; 
+-------+---------+-------+-----------+-------------------+-----------+-------------+
| 1 = 1 | 1 = '1' | 1 = 0 | 'a' = 'a' | (5 + 3) = (2 + 6) | '' = NULL | NULL = NULL |
+-------+---------+-------+-----------+-------------------+-----------+-------------+
|    1  |     1   |   0   |      1    |             1     |    NULL   |        NULL  |
+-------+---------+-------+-----------+-------------------+-----------+-------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT 1 = 2, 0 = 'abc', 1 = 'abc' FROM dual;
+-------+-----------+-----------+
| 1 = 2 | 0 = 'abc' | 1 = 'abc' |
+-------+-----------+-----------+
|     0 |         1 |         0 |
+-------+-----------+-----------+
1 row in set, 2 warnings (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#查询salary=10000，注意在Java中比较是==
SELECT employee_id,salary FROM employees WHERE salary = 10000;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2．安全等于运算符</strong>
安全等于运算符（&lt;=&gt;）与等于运算符（=）的作用是相似的，<code v-pre>唯一的区别</code>是‘&lt;=&gt;’可以用来对NULL进行判断。在两个操作数均为NULL时，其返回值为1，而不为NULL；当一个操作数为NULL时，其返回值为0，而不为NULL。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT 1 &lt;=&gt; '1', 1 &lt;=&gt; 0, 'a' &lt;=&gt; 'a', (5 + 3) &lt;=&gt; (2 + 6), '' &lt;=&gt; NULL,NULL &lt;=&gt; NULL FROM dual;
+-----------+---------+-------------+---------------------+-------------+---------------+
| 1 &lt;=&gt; '1' | 1 &lt;=&gt; 0 | 'a' &lt;=&gt; 'a' | (5 + 3) &lt;=&gt; (2 + 6) | '' &lt;=&gt; NULL | NULL &lt;=&gt; NULL |
+-----------+---------+-------------+---------------------+-------------+---------------+
|         1 |       0 |           1 |                   1 |           0 |             1 |
+-----------+---------+-------------+---------------------+-------------+---------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#查询commission_pct等于0.40
SELECT employee_id,commission_pct FROM employees WHERE commission_pct = 0.40;

SELECT employee_id,commission_pct FROM employees WHERE commission_pct &lt;=&gt; 0.40;

#如果把0.40改成 NULL 呢？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，使用安全等于运算符时，两边的操作数的值都为NULL时，返回的结果为1而不是NULL，其他返回结果与等于运算符相同。</p>
<p><strong>3．不等于运算符</strong>
不等于运算符（&lt;&gt;和!=）用于判断两边的数字、字符串或者表达式的值是否不相等，如果不相等则返回1，相等则返回0。不等于运算符不能判断NULL值。如果两边的值有任意一个为NULL，或两边都为NULL，则结果为NULL。
SQL语句示例如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT 1 &lt;&gt; 1, 1 != 2, 'a' != 'b', (3+4) &lt;&gt; (2+6), 'a' != NULL, NULL &lt;&gt; NULL; 
+--------+--------+------------+----------------+-------------+--------------+
| 1 &lt;&gt; 1 | 1 != 2 | 'a' != 'b' | (3+4) &lt;&gt; (2+6) | 'a' != NULL | NULL &lt;&gt; NULL |
+--------+--------+------------+----------------+-------------+--------------+
|      0 |   1    |       1    |            1   |     NULL    |         NULL |
+--------+--------+------------+----------------+-------------+--------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，还有非符号类型的运算符:</p>
<p><img src="https://s2.loli.net/2022/08/27/53QIMnNZDAUhSVj.png" alt="image-20211012105303219.png" loading="lazy"></p>
<p><img src="https://s2.loli.net/2022/08/27/5n29aNUQ7yKgZjc.png" alt="image-20211012105030527.png" loading="lazy"></p>
<p><strong>4. 空运算符</strong>
空运算符（IS NULL或者ISNULL）判断一个值是否为NULL，如果为NULL则返回1，否则返回0。
SQL语句示例如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT NULL IS NULL, ISNULL(NULL), ISNULL('a'), 1 IS NULL;
+--------------+--------------+-------------+-----------+
| NULL IS NULL | ISNULL(NULL) | ISNULL('a') | 1 IS NULL |
+--------------+--------------+-------------+-----------+
|            1 |            1 |           0 |         0 |
+--------------+--------------+-------------+-----------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#查询commission_pct等于NULL。比较如下的四种写法
SELECT employee_id,commission_pct FROM employees WHERE commission_pct IS NULL;
SELECT employee_id,commission_pct FROM employees WHERE commission_pct &lt;=&gt; NULL;
SELECT employee_id,commission_pct FROM employees WHERE ISNULL(commission_pct);
SELECT employee_id,commission_pct FROM employees WHERE commission_pct = NULL;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT last_name, manager_id
FROM   employees
WHERE  manager_id IS NULL;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. 非空运算符</strong>
非空运算符（IS NOT NULL）判断一个值是否不为NULL，如果不为NULL则返回1，否则返回0。
SQL语句示例如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT NULL IS NOT NULL, 'a' IS NOT NULL,  1 IS NOT NULL; 
+------------------+-----------------+---------------+
| NULL IS NOT NULL | 'a' IS NOT NULL | 1 IS NOT NULL |
+------------------+-----------------+---------------+
|                0 |               1 |             1 |
+------------------+-----------------+---------------+
1 row in set (0.01 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#查询commission_pct不等于NULL
SELECT employee_id,commission_pct FROM employees WHERE commission_pct IS NOT NULL;
SELECT employee_id,commission_pct FROM employees WHERE NOT commission_pct &lt;=&gt; NULL;
SELECT employee_id,commission_pct FROM employees WHERE NOT ISNULL(commission_pct);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. 最小值运算符</strong>
语法格式为：LEAST(值1，值2，...，值n)。其中，“值n”表示参数列表中有n个值。在有两个或多个参数的情况下，返回最小值。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT LEAST (1,0,2), LEAST('b','a','c'), LEAST(1,NULL,2);
+---------------+--------------------+-----------------+
| LEAST (1,0,2) | LEAST('b','a','c') | LEAST(1,NULL,2) |
+---------------+--------------------+-----------------+
|       0       |        a           |      NULL       |
+---------------+--------------------+-----------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由结果可以看到，当参数是整数或者浮点数时，LEAST将返回其中最小的值；当参数为字符串时，返回字母表中顺序最靠前的字符；当比较值列表中有NULL时，不能判断大小，返回值为NULL。</p>
<p><strong>7. 最大值运算符</strong>
语法格式为：GREATEST(值1，值2，...，值n)。其中，n表示参数列表中有n个值。当有两个或多个参数时，返回值为最大值。假如任意一个自变量为NULL，则GREATEST()的返回值为NULL。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT GREATEST(1,0,2), GREATEST('b','a','c'), GREATEST(1,NULL,2);
+-----------------+-----------------------+--------------------+
| GREATEST(1,0,2) | GREATEST('b','a','c') | GREATEST(1,NULL,2) |
+-----------------+-----------------------+--------------------+
|               2 | c                     |               NULL |
+-----------------+-----------------------+--------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由结果可以看到，当参数中是整数或者浮点数时，GREATEST将返回其中最大的值；当参数为字符串时，返回字母表中顺序最靠后的字符；当比较值列表中有NULL时，不能判断大小，返回值为NULL。</p>
<p><strong>8. BETWEEN AND运算符</strong>
BETWEEN运算符使用的格式通常为SELECT D FROM TABLE WHERE C BETWEEN A AND B，此时，当C大于或等于A，并且C小于或等于B时，结果为1，否则结果为0。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT 1 BETWEEN 0 AND 1, 10 BETWEEN 11 AND 12, 'b' BETWEEN 'a' AND 'c';
+-------------------+----------------------+-------------------------+
| 1 BETWEEN 0 AND 1 | 10 BETWEEN 11 AND 12 | 'b' BETWEEN 'a' AND 'c' |
+-------------------+----------------------+-------------------------+
|                 1 |                    0 |                       1 |
+-------------------+----------------------+-------------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT last_name, salary
FROM   employees
WHERE  salary BETWEEN 2500 AND 3500;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>9. IN运算符</strong>
IN运算符用于判断给定的值是否是IN列表中的一个值，如果是则返回1，否则返回0。如果给定的值为NULL，或者IN列表中存在NULL，则结果为NULL。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT 'a' IN ('a','b','c'), 1 IN (2,3), NULL IN ('a','b'), 'a' IN ('a', NULL);
+----------------------+------------+-------------------+--------------------+
| 'a' IN ('a','b','c') | 1 IN (2,3) | NULL IN ('a','b') | 'a' IN ('a', NULL) |
+----------------------+------------+-------------------+--------------------+
|            1         |        0   |         NULL      |         1          |
+----------------------+------------+-------------------+--------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT employee_id, last_name, salary, manager_id
FROM   employees
WHERE  manager_id IN (100, 101, 201);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>10. NOT IN运算符</strong>
NOT IN运算符用于判断给定的值是否不是IN列表中的一个值，如果不是IN列表中的一个值，则返回1，否则返回0。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT 'a' NOT IN ('a','b','c'), 1 NOT IN (2,3);
+--------------------------+----------------+
| 'a' NOT IN ('a','b','c') | 1 NOT IN (2,3) |
+--------------------------+----------------+
|                 0        |            1   |
+--------------------------+----------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>11. LIKE运算符</strong>
LIKE运算符主要用来匹配字符串，通常用于模糊匹配，如果满足条件则返回1，否则返回0。如果给定的值或者匹配条件为NULL，则返回结果为NULL。</p>
<p>LIKE运算符通常使用如下通配符：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>“%”：匹配0个或多个字符。
“_”：只能匹配一个字符。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL语句示例如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT NULL LIKE 'abc', 'abc' LIKE NULL;  
+-----------------+-----------------+
| NULL LIKE 'abc' | 'abc' LIKE NULL |
+-----------------+-----------------+
|          NULL   |          NULL   |
+-----------------+-----------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT	first_name
FROM 	employees
WHERE	first_name LIKE 'S%';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT last_name
FROM   employees
WHERE  last_name LIKE '_o%';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ESCAPE</strong></p>
<ul>
<li>回避特殊符号的：<strong>使用转义符</strong>。例如：将[%]转为[<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow></mrow><annotation encoding="application/x-tex">%]、[]转为[</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"></span></span>]，然后再加上[ESCAPE‘$’]即可。</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT job_id
FROM   jobs
WHERE  job_id LIKE ‘IT\_%‘;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如果使用\表示转义，要省略ESCAPE。如果不是\，则要加上ESCAPE。</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT job_id
FROM   jobs
WHERE  job_id LIKE ‘IT$_%‘ escape ‘$‘;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>12. REGEXP运算符</strong></p>
<p>REGEXP运算符用来匹配字符串，语法格式为：<code v-pre>expr REGEXP 匹配条件</code>。如果expr满足匹配条件，返回1；如果不满足，则返回0。若expr或匹配条件任意一个为NULL，则结果为NULL。</p>
<p>REGEXP运算符在进行匹配时，常用的有下面几种通配符：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>（1）‘^’匹配以该字符后面的字符开头的字符串。
（2）‘$’匹配以该字符前面的字符结尾的字符串。
（3）‘.’匹配任何一个单字符。
（4）“[...]”匹配在方括号内的任何字符。例如，“[abc]”匹配“a”或“b”或“c”。为了命名字符的范围，使用一个‘-’。“[a-z]”匹配任何字母，而“[0-9]”匹配任何数字。
（5）‘*’匹配零个或多个在它前面的字符。例如，“x*”匹配任何数量的‘x’字符，“[0-9]*”匹配任何数量的数字，而“*”匹配任何数量的任何字符。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL语句示例如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT 'shkstart' REGEXP '^s', 'shkstart' REGEXP 't$', 'shkstart' REGEXP 'hk';
+------------------------+------------------------+-------------------------+
| 'shkstart' REGEXP '^s' | 'shkstart' REGEXP 't$' | 'shkstart' REGEXP 'hk'  |
+------------------------+------------------------+-------------------------+
|                      1 |                      1 |                       1 |
+------------------------+------------------------+-------------------------+
1 row in set (0.01 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT 'atguigu' REGEXP 'gu.gu', 'atguigu' REGEXP '[ab]';
+--------------------------+-------------------------+
| 'atguigu' REGEXP 'gu.gu' | 'atguigu' REGEXP '[ab]' |
+--------------------------+-------------------------+
|                        1 |                       1 |
+--------------------------+-------------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h2>
<p>逻辑运算符主要用来判断表达式的真假，在MySQL中，逻辑运算符的返回结果为1、0或者NULL。</p>
<p>MySQL中支持4种逻辑运算符如下：</p>
<p><img src="https://s2.loli.net/2022/08/27/hgqEC3daj2bYp4X.png" alt="image-20211012110241418.png" loading="lazy"></p>
<p><strong>1．逻辑非运算符</strong>
逻辑非（NOT或!）运算符表示当给定的值为0时返回1；当给定的值为非0值时返回0；当给定的值为NULL时，返回NULL</p>
<p><strong>2．逻辑与运算符</strong>
逻辑与（AND或&amp;&amp;）运算符是当给定的所有值均为非0值，并且都不为NULL时，返回1；当给定的一个值或者多个值为0时则返回0；否则返回NULL</p>
<p><strong>3．逻辑或运算符</strong>
逻辑或（OR或||）运算符是当给定的值都不为NULL，并且任何一个值为非0值时，则返回1，否则返回0；当一个值为NULL，并且另一个值为非0值时，返回1，否则返回NULL；当两个值都为NULL时，返回NULL</p>
<blockquote>
<p>注意：</p>
<p>OR可以和AND一起使用，但是在使用时要注意两者的优先级，由于AND的优先级高于OR，因此先对AND两边的操作数进行操作，再与OR中的操作数结合</p>
</blockquote>
<p><strong>4．逻辑异或运算符</strong>
逻辑异或（XOR）运算符是当给定的值中任意一个值为NULL时，则返回NULL；如果两个非NULL的值都是0或者都不等于0时，则返回0；如果一个值为0，另一个值不为0时，则返回1</p>
<h2 id="位运算符" tabindex="-1"><a class="header-anchor" href="#位运算符" aria-hidden="true">#</a> 位运算符</h2>
<p>位运算符是在二进制数上进行计算的运算符。位运算符会先将操作数变成二进制数，然后进行位运算，最后将计算结果从二进制变回十进制数。</p>
<p>MySQL支持的位运算符如下：</p>
<p><img src="https://s2.loli.net/2022/08/27/YkRyxwlWaBZAjzq.png" alt="image-20211012110511223.png" loading="lazy"></p>
<p><strong>1．按位与运算符</strong>
按位与（&amp;）运算符将给定值对应的二进制数逐位进行逻辑与运算。当给定值对应的二进制位的数值都为1时，则该位返回1，否则返回0</p>
<p>1的二进制数为0001，10的二进制数为1010，所以1 &amp; 10的结果为0000，对应的十进制数为0。20的二进制数为10100，30的二进制数为11110，所以20 &amp; 30的结果为10100，对应的十进制数为20</p>
<p><strong>2. 按位或运算符</strong>
按位或（|）运算符将给定的值对应的二进制数逐位进行逻辑或运算。当给定值对应的二进制位的数值有一个或两个为1时，则该位返回1，否则返回0</p>
<p>1的二进制数为0001，10的二进制数为1010，所以1 | 10的结果为1011，对应的十进制数为11。20的二进制数为10100，30的二进制数为11110，所以20 | 30的结果为11110，对应的十进制数为30</p>
<p><strong>3. 按位异或运算符</strong>
按位异或（^）运算符将给定的值对应的二进制数逐位进行逻辑异或运算。当给定值对应的二进制位的数值不同时，则该位返回1，否则返回0</p>
<p>1的二进制数为0001，10的二进制数为1010，所以1 ^ 10的结果为1011，对应的十进制数为11。20的二进制数为10100，30的二进制数为11110，所以20 ^ 30的结果为01010，对应的十进制数为10</p>
<p><strong>4. 按位取反运算符</strong>
按位取反（~）运算符将给定的值的二进制数逐位进行取反操作，即将1变为0，将0变为1</p>
<p>由于按位取反（~）运算符的优先级高于按位与（&amp;）运算符的优先级，所以10 &amp; ~1，首先，对数字1进行按位取反操作，结果除了最低位为0，其他位都为1，然后与10进行按位与操作，结果为10</p>
<p><strong>5. 按位右移运算符</strong>
按位右移（&gt;&gt;）运算符将给定的值的二进制数的所有位右移指定的位数。右移指定的位数后，右边低位的数值被移出并丢弃，左边高位空出的位置用0补齐</p>
<p>1的二进制数为0000 0001，右移2位为0000 0000，对应的十进制数为0。4的二进制数为0000 0100，右移2位为0000 0001，对应的十进制数为1</p>
<p><strong>6. 按位左移运算符</strong>
按位左移（&lt;&lt;）运算符将给定的值的二进制数的所有位左移指定的位数。左移指定的位数后，左边高位的数值被移出并丢弃，右边低位空出的位置用0补齐</p>
<p>1的二进制数为0000 0001，左移两位为0000 0100，对应的十进制数为4。4的二进制数为0000 0100，左移两位为0001 0000，对应的十进制数为16</p>
<h2 id="运算符的优先级" tabindex="-1"><a class="header-anchor" href="#运算符的优先级" aria-hidden="true">#</a> 运算符的优先级</h2>
<p><img src="https://s2.loli.net/2022/08/27/TioBCKv6NkQ8js1.png" alt="image-20211012111042395.png" loading="lazy"></p>
<p><img src="https://s2.loli.net/2022/08/27/NnLY3feAqI7Fvrl.png" alt="image-20211012110731059.png" loading="lazy"></p>
<p>数字编号越大，优先级越高，优先级高的运算符先进行计算。可以看到，赋值运算符的优先级最低，使用“()”括起来的表达式的优先级最高</p>
<h2 id="使用正则表达式查询" tabindex="-1"><a class="header-anchor" href="#使用正则表达式查询" aria-hidden="true">#</a> 使用正则表达式查询</h2>
<p>正则表达式通常被用来检索或替换那些符合某个模式的文本内容，根据指定的匹配模式匹配文本中符合要求的特殊字符串。例如，从一个文本文件中提取电话号码，查找一篇文章中重复的单词或者替换用户输入的某些敏感词语等，这些地方都可以使用正则表达式。正则表达式强大而且灵活，可以应用于非常复杂的查询。</p>
<p>MySQL中使用REGEXP关键字指定正则表达式的字符匹配模式。下表列出了REGEXP操作符中常用字符匹配列表:</p>
<p><img src="https://s2.loli.net/2022/08/27/X6T7EmoAJynkVFY.png" alt="image-20210926151249943.png" loading="lazy"></p>
<p><strong>1. 查询以特定字符或字符串开头的记录</strong>
字符‘^’匹配以特定字符或者字符串开头的文本。</p>
<p>在fruits表中，查询f_name字段以字母‘b’开头的记录，SQL语句如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP '^b';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. 查询以特定字符或字符串结尾的记录</strong>
字符‘$’匹配以特定字符或者字符串结尾的文本。</p>
<p>在fruits表中，查询f_name字段以字母‘y’结尾的记录，SQL语句如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP 'y$';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3. 用符号&quot;.&quot;来替代字符串中的任意一个字符</strong>
字符‘.’匹配任意一个字符。
在fruits表中，查询f_name字段值包含字母‘a’与‘g’且两个字母之间只有一个字母的记录，SQL语句如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP 'a.g';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4. 使用&quot;*&quot;和&quot;+&quot;来匹配多个字符</strong>
星号‘*’匹配前面的字符任意多次，包括0次。加号‘+’匹配前面的字符至少一次。</p>
<p>在fruits表中，查询f_name字段值以字母‘b’开头且‘b’后面出现字母‘a’的记录，SQL语句如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP '^ba*';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在fruits表中，查询f_name字段值以字母‘b’开头且‘b’后面出现字母‘a’至少一次的记录，SQL语句如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP '^ba+';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>5. 匹配指定字符串</strong>
正则表达式可以匹配指定字符串，只要这个字符串在查询文本中即可，如要匹配多个字符串，多个字符串之间使用分隔符‘|’隔开。</p>
<p>在fruits表中，查询f_name字段值包含字符串“on”的记录，SQL语句如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP 'on';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在fruits表中，查询f_name字段值包含字符串“on”或者“ap”的记录，SQL语句如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP 'on|ap';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之前介绍过，LIKE运算符也可以匹配指定的字符串，但与REGEXP不同，LIKE匹配的字符串如果在文本中间出现，则找不到它，相应的行也不会返回。REGEXP在文本内进行匹配，如果被匹配的字符串在文本中出现，REGEXP将会找到它，相应的行也会被返回。对比结果如下所示。</p>
<p>在fruits表中，使用LIKE运算符查询f_name字段值为“on”的记录，SQL语句如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name like 'on';
Empty set(0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. 匹配指定字符中的任意一个</strong>
方括号“[]”指定一个字符集合，只匹配其中任何一个字符，即为所查找的文本。</p>
<p>在fruits表中，查找f_name字段中包含字母‘o’或者‘t’的记录，SQL语句如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP '[ot]';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在fruits表中，查询s_id字段中包含4、5或者6的记录，SQL语句如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE s_id REGEXP '[456]';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>7. 匹配指定字符以外的字符</strong>
<code v-pre>“[^字符集合]”</code>匹配不在指定集合中的任何字符。</p>
<p>在fruits表中，查询f_id字段中包含字母a<sub>e和数字1</sub>2以外字符的记录，SQL语句如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_id REGEXP '[^a-e1-2]';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>8. 使用{n,}或者{n,m}来指定字符串连续出现的次数</strong>
“字符串{n,}”表示至少匹配n次前面的字符；“字符串{n,m}”表示匹配前面的字符串不少于n次，不多于m次。例如，a{2,}表示字母a连续出现至少2次，也可以大于2次；a{2,4}表示字母a连续出现最少2次，最多不能超过4次。</p>
<p>在fruits表中，查询f_name字段值出现字母‘x’至少2次的记录，SQL语句如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP 'x{2,}';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在fruits表中，查询f_name字段值出现字符串“ba”最少1次、最多3次的记录，SQL语句如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP 'ba{1,3}';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="排序数据" tabindex="-1"><a class="header-anchor" href="#排序数据" aria-hidden="true">#</a> 排序数据</h2>
<h3 id="排序规则" tabindex="-1"><a class="header-anchor" href="#排序规则" aria-hidden="true">#</a> 排序规则</h3>
<ul>
<li>使用 ORDER BY 子句排序
<ul>
<li><strong>ASC（ascend）: 升序</strong></li>
<li><strong>DESC（descend）:降序</strong></li>
</ul>
</li>
<li><strong>ORDER BY 子句在SELECT语句的结尾。</strong></li>
</ul>
<h3 id="单列排序" tabindex="-1"><a class="header-anchor" href="#单列排序" aria-hidden="true">#</a> 单列排序</h3>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT   last_name, job_id, department_id, hire_date
FROM     employees
ORDER BY hire_date ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多列排序" tabindex="-1"><a class="header-anchor" href="#多列排序" aria-hidden="true">#</a> 多列排序</h3>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT last_name, department_id, salary
FROM   employees
ORDER BY department_id, salary DESC;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>可以使用不在SELECT列表中的列排序。</li>
<li>在对多列进行排序的时候，首先排序的第一列必须有相同的列值，才会对第二列进行排序。如果第一列数据中所有值都是唯一的，将不再对第二列进行排序。</li>
</ul>
<h2 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h2>
<h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h3>
<p>背景1：查询返回的记录太多了，查看起来很不方便，怎么样能够实现分页查询呢？</p>
<p>背景2：表里有 4 条数据，我们只想要显示第 2、3 条数据怎么办呢？</p>
<h3 id="实现规则" tabindex="-1"><a class="header-anchor" href="#实现规则" aria-hidden="true">#</a> 实现规则</h3>
<ul>
<li>
<p>分页原理</p>
<p>所谓分页显示，就是将数据库中的结果集，一段一段显示出来需要的条件。</p>
</li>
<li>
<p><strong>MySQL中使用 LIMIT 实现分页</strong></p>
</li>
<li>
<p>格式：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>LIMIT [位置偏移量,] 行数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第一个“位置偏移量”参数指示MySQL从哪一行开始显示，是一个可选参数，如果不指定“位置偏移量”，将会从表中的第一条记录开始（第一条记录的位置偏移量是0，第二条记录的位置偏移量是1，以此类推）；第二个参数“行数”指示返回的记录条数。</p>
</li>
<li>
<p>举例</p>
</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>--前10条记录：
SELECT * FROM 表名 LIMIT 0,10;
或者
SELECT * FROM 表名 LIMIT 10;

--第11至20条记录：
SELECT * FROM 表名 LIMIT 10,10;

--第21至30条记录： 
SELECT * FROM 表名 LIMIT 20,10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>MySQL 8.0中可以使用“LIMIT 3 OFFSET 4”，意思是获取从第5条记录开始后面的3条记录，和“LIMIT 4,3;”返回的结果相同。</p>
</blockquote>
<ul>
<li>分页显式公式**：（当前页数-1）<em>每页条数，每页条数</em>*</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT * FROM table 
LIMIT(PageNo - 1)*PageSize,PageSize;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>注意：LIMIT 子句必须放在整个SELECT语句的最后！</strong></li>
<li>使用 LIMIT 的好处</li>
</ul>
<p>约束返回结果的数量可以<code v-pre>减少数据表的网络传输量</code>，也可以<code v-pre>提升查询效率</code>。如果我们知道返回结果只有 1 条，就可以使用<code v-pre>LIMIT 1</code>，告诉 SELECT 语句只需要返回一条记录即可。这样的好处就是 SELECT 不需要扫描完整的表，只需要检索到一条符合条件的记录即可返回。</p>
<h3 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展" aria-hidden="true">#</a> 拓展</h3>
<p>在不同的 DBMS 中使用的关键字可能不同。在 MySQL、PostgreSQL、MariaDB 和 SQLite 中使用 LIMIT 关键字，而且需要放到 SELECT 语句的最后面。</p>
<ul>
<li>如果是 SQL Server 和 Access，需要使用 <code v-pre>TOP</code> 关键字，比如：</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT TOP 5 name, hp_max FROM heros ORDER BY hp_max DESC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>如果是 DB2，使用<code v-pre>FETCH FIRST 5 ROWS ONLY</code>这样的关键字：</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT name, hp_max FROM heros ORDER BY hp_max DESC FETCH FIRST 5 ROWS ONLY
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>如果是 Oracle，你需要基于 <code v-pre>ROWNUM</code> 来统计行数：</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT rownum,last_name,salary FROM employees WHERE rownum &lt; 5 ORDER BY salary DESC;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要说明的是，这条语句是先取出来前 5 条数据行，然后再按照 hp_max 从高到低的顺序进行排序。但这样产生的结果和上述方法的并不一样。我会在后面讲到子查询，你可以使用</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT rownum, last_name,salary
FROM (
    SELECT last_name,salary
    FROM employees
    ORDER BY salary DESC)
WHERE rownum &lt; 10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到与上述方法一致的结果。</p>
</div></template>
