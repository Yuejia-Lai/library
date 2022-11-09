<template><div><h2 id="常见的数据库对象" tabindex="-1"><a class="header-anchor" href="#常见的数据库对象" aria-hidden="true">#</a> 常见的数据库对象</h2>
<table>
<thead>
<tr>
<th>对象</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>表(TABLE)</td>
<td>表是存储数据的逻辑单元，以行和列的形式存在，列就是字段，行就是记录</td>
</tr>
<tr>
<td>数据字典</td>
<td>就是系统表，存放数据库相关信息的表。系统表的数据通常由数据库系统维护，程序员通常不应该修改，只可查看</td>
</tr>
<tr>
<td>约束(CONSTRAINT)</td>
<td>执行数据校验的规则，用于保证数据完整性的规则</td>
</tr>
<tr>
<td>视图(VIEW)</td>
<td>一个或者多个数据表里的数据的逻辑显示，视图并不存储数据</td>
</tr>
<tr>
<td>索引(INDEX)</td>
<td>用于提高查询性能，相当于书的目录</td>
</tr>
<tr>
<td>存储过程(PROCEDURE)</td>
<td>用于完成一次完整的业务处理，没有返回值，但可通过传出参数将多个值传给调用环境</td>
</tr>
<tr>
<td>存储函数(FUNCTION)</td>
<td>用于完成一次特定的计算，具有一个返回值</td>
</tr>
<tr>
<td>触发器(TRIGGER)</td>
<td>相当于一个事件监听器，当数据库发生特定事件后，触发器被触发，完成相应的处理</td>
</tr>
</tbody>
</table>
<h2 id="视图概述" tabindex="-1"><a class="header-anchor" href="#视图概述" aria-hidden="true">#</a> 视图概述</h2>
<h3 id="为什么使用视图" tabindex="-1"><a class="header-anchor" href="#为什么使用视图" aria-hidden="true">#</a> 为什么使用视图？</h3>
<p>视图一方面可以帮我们使用表的一部分而不是所有的表，另一方面也可以针对不同的用户制定不同的查询视图。比如，针对一个公司的销售人员，我们只想给他看部分数据，而某些特殊的数据，比如采购的价格，则不会提供给他。再比如，人员薪酬是个敏感的字段，那么只给某个级别以上的人员开放，其他人的查询视图中则不提供这个字段。</p>
<p>刚才讲的只是视图的一个使用场景，实际上视图还有很多作用。最后，我们总结视图的优点。</p>
<h3 id="视图的理解" tabindex="-1"><a class="header-anchor" href="#视图的理解" aria-hidden="true">#</a> 视图的理解</h3>
<ul>
<li>
<p>视图是一种<code v-pre>虚拟表</code>，本身是<code v-pre>不具有数据</code>的，占用很少的内存空间，它是 SQL 中的一个重要概念。</p>
</li>
<li>
<p><strong>视图建立在已有表的基础上</strong>, 视图赖以建立的这些表称为<strong>基表</strong>。</p>
<p><img src="https://s2.loli.net/2022/09/15/ZzsvKBlTYa247ic.png" alt="image-20211006211206990.png" loading="lazy"></p>
</li>
<li>
<p>视图的创建和删除只影响视图本身，不影响对应的基表。但是当对视图中的数据进行增加、删除和修改操作时，数据表中的数据会相应地发生变化，反之亦然。</p>
</li>
<li>
<p>向视图提供数据内容的语句为 SELECT 语句, 可以将视图理解为<strong>存储起来的</strong> <strong>SELECT</strong> <strong>语句</strong></p>
<ul>
<li>在数据库中，视图不会保存数据，数据真正保存在数据表中。当对视图中的数据进行增加、删除和修改操作时，数据表中的数据会相应地发生变化；反之亦然。</li>
</ul>
</li>
<li>
<p>视图，是向用户提供基表数据的另一种表现形式。通常情况下，小型项目的数据库可以不使用视图，但是在大型项目中，以及数据表比较复杂的情况下，视图的价值就凸显出来了，它可以帮助我们把经常查询的结果集放到虚拟表中，提升使用效率。理解和使用起来都非常方便。</p>
</li>
</ul>
<h2 id="创建视图" tabindex="-1"><a class="header-anchor" href="#创建视图" aria-hidden="true">#</a> 创建视图</h2>
<ul>
<li><strong>在</strong> <strong>CREATE VIEW</strong> <strong>语句中嵌入子查询</strong></li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CREATE [OR REPLACE] 
[ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}] 
VIEW 视图名称 [(字段列表)]
AS 查询语句
[WITH [CASCADED|LOCAL] CHECK OPTION]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>精简版</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CREATE VIEW 视图名称 
AS 查询语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建单表视图" tabindex="-1"><a class="header-anchor" href="#创建单表视图" aria-hidden="true">#</a> 创建单表视图</h3>
<p>举例：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CREATE VIEW empvu80
AS 
SELECT  employee_id, last_name, salary
FROM    employees
WHERE   department_id = 80;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询视图：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>SELECT *
FROM	salvu80;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>说明1：实际上就是我们在 SQL 查询语句的基础上封装了视图 VIEW，这样就会基于 SQL 语句的结果集形成一张虚拟表</p>
<p>说明2：在创建视图时，没有在视图名后面指定字段列表，则视图中字段列表默认和SELECT语句中的字段列表一致。如果SELECT语句中给字段取了别名，那么视图中的字段名和别名相同</p>
<h3 id="创建多表联合视图" tabindex="-1"><a class="header-anchor" href="#创建多表联合视图" aria-hidden="true">#</a> 创建多表联合视图</h3>
<p>举例：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CREATE VIEW empview 
AS 
SELECT employee_id emp_id,last_name NAME,department_name
FROM employees e,departments d
WHERE e.department_id = d.department_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基于视图创建视图" tabindex="-1"><a class="header-anchor" href="#基于视图创建视图" aria-hidden="true">#</a> 基于视图创建视图</h3>
<p>当我们创建好一张视图之后，还可以在它的基础上继续创建视图</p>
<h2 id="查看视图" tabindex="-1"><a class="header-anchor" href="#查看视图" aria-hidden="true">#</a> 查看视图</h2>
<p>语法1：查看数据库的表对象、视图对象</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SHOW TABLES;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>语法2：查看视图的结构</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DESC / DESCRIBE 视图名称;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>语法3：查看视图的属性信息</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code># 查看视图信息（显示数据表的存储引擎、版本、数据行数和数据大小等）
SHOW TABLE STATUS LIKE '视图名称'\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果显示，注释Comment为VIEW，说明该表为视图，其他的信息为NULL，说明这是一个虚表。</p>
<p>语法4：查看视图的详细定义信息</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SHOW CREATE VIEW 视图名称;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="更新视图的数据" tabindex="-1"><a class="header-anchor" href="#更新视图的数据" aria-hidden="true">#</a> 更新视图的数据</h2>
<h3 id="一般情况" tabindex="-1"><a class="header-anchor" href="#一般情况" aria-hidden="true">#</a> 一般情况</h3>
<p>MySQL支持使用INSERT、UPDATE和DELETE语句对视图中的数据进行插入、更新和删除操作。当视图中的数据发生变化时，数据表中的数据也会发生变化，反之亦然</p>
<h3 id="不可更新的视图" tabindex="-1"><a class="header-anchor" href="#不可更新的视图" aria-hidden="true">#</a> 不可更新的视图</h3>
<p>要使视图可更新，视图中的行和底层基本表中的行之间必须存在<code v-pre>一对一</code>的关系。另外当视图定义出现如下情况时，视图不支持更新操作：</p>
<ul>
<li>在定义视图的时候指定了“ALGORITHM = TEMPTABLE”，视图将不支持INSERT和DELETE操作；</li>
<li>视图中不包含基表中所有被定义为非空又未指定默认值的列，视图将不支持INSERT操作；</li>
<li>在定义视图的SELECT语句中使用了<code v-pre>JOIN联合查询</code>，视图将不支持INSERT和DELETE操作；</li>
<li>在定义视图的SELECT语句后的字段列表中使用了<code v-pre>数学表达式</code>或<code v-pre>子查询</code>，视图将不支持INSERT，也不支持UPDATE使用了数学表达式、子查询的字段值；</li>
<li>在定义视图的SELECT语句后的字段列表中使用<code v-pre>DISTINCT</code>、<code v-pre>聚合函数</code>、<code v-pre>GROUP BY</code>、<code v-pre>HAVING</code>、<code v-pre>UNION</code>等，视图将不支持INSERT、UPDATE、DELETE；</li>
<li>在定义视图的SELECT语句中包含了子查询，而子查询中引用了FROM后面的表，视图将不支持INSERT、UPDATE、DELETE；</li>
<li>视图定义基于一个<code v-pre>不可更新视图</code>；</li>
<li>常量视图。</li>
</ul>
<blockquote>
<p>虽然可以更新视图数据，但总的来说，视图作为<code v-pre>虚拟表</code>，主要用于<code v-pre>方便查询</code>，不建议更新视图的数据。<strong>对视图数据的更改，都是通过对实际数据表里数据的操作来完成的。</strong></p>
</blockquote>
<h2 id="修改、删除视图" tabindex="-1"><a class="header-anchor" href="#修改、删除视图" aria-hidden="true">#</a> 修改、删除视图</h2>
<h3 id="_6-1-修改视图" tabindex="-1"><a class="header-anchor" href="#_6-1-修改视图" aria-hidden="true">#</a> 6.1 修改视图</h3>
<p>方式1：使用CREATE <strong>OR REPLACE</strong> VIEW 子句<strong>修改视图</strong></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CREATE OR REPLACE VIEW empvu80
(id_number, name, sal, department_id)
AS 
SELECT  employee_id, first_name || ' ' || last_name, salary, department_id
FROM employees
WHERE department_id = 80;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>说明：CREATE VIEW 子句中各列的别名应和子查询中各列相对应。</p>
</blockquote>
<p>方式2：ALTER VIEW</p>
<p>修改视图的语法是：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>ALTER VIEW 视图名称 
AS
查询语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除视图" tabindex="-1"><a class="header-anchor" href="#删除视图" aria-hidden="true">#</a> 删除视图</h3>
<ul>
<li>
<p>删除视图只是删除视图的定义，并不会删除基表的数据。</p>
</li>
<li>
<p>删除视图的语法是：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DROP VIEW IF EXISTS 视图名称;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DROP VIEW IF EXISTS 视图名称1,视图名称2,视图名称3,...;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>举例：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DROP VIEW empvu80;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>说明：基于视图a、b创建了新的视图c，如果将视图a或者视图b删除，会导致视图c的查询失败。这样的视图c需要手动删除或修改，否则影响使用</p>
</li>
</ul>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<h3 id="视图优点" tabindex="-1"><a class="header-anchor" href="#视图优点" aria-hidden="true">#</a> 视图优点</h3>
<p><strong>1. 操作简单</strong></p>
<p>将经常使用的查询操作定义为视图，可以使开发人员不需要关心视图对应的数据表的结构、表与表之间的关联关系，也不需要关心数据表之间的业务逻辑和查询条件，而只需要简单地操作视图即可，极大简化了开发人员对数据库的操作。</p>
<p><strong>2. 减少数据冗余</strong></p>
<p>视图跟实际数据表不一样，它存储的是查询语句。所以，在使用的时候，我们要通过定义视图的查询语句来获取结果集。而视图本身不存储数据，不占用数据存储的资源，减少了数据冗余。</p>
<p><strong>3. 数据安全</strong></p>
<p>MySQL将用户对数据的<code v-pre>访问限制</code>在某些数据的结果集上，而这些数据的结果集可以使用视图来实现。用户不必直接查询或操作数据表。这也可以理解为视图具有<code v-pre>隔离性</code>。视图相当于在用户和实际的数据表之间加了一层虚拟表。</p>
<p><img src="https://s2.loli.net/2022/09/15/lz5OCYegVn6LG3A.png" alt="image-20211010211744459.png" loading="lazy"></p>
<p>同时，MySQL可以根据权限将用户对数据的访问限制在某些视图上，<strong>用户不需要查询数据表，可以直接通过视图获取数据表中的信息</strong>。这在一定程度上保障了数据表中数据的安全性。</p>
<p><strong>4. 适应灵活多变的需求</strong>
当业务系统的需求发生变化后，如果需要改动数据表的结构，则工作量相对较大，可以使用视图来减少改动的工作量。这种方式在实际工作中使用得比较多。</p>
<p><strong>5. 能够分解复杂的查询逻辑</strong>
数据库中如果存在复杂的查询逻辑，则可以将问题进行分解，创建多个视图获取数据，再将创建的多个视图结合起来，完成复杂的查询逻辑</p>
<h3 id="视图不足" tabindex="-1"><a class="header-anchor" href="#视图不足" aria-hidden="true">#</a> 视图不足</h3>
<p>如果我们在实际数据表的基础上创建了视图，那么，<strong>如果实际数据表的结构变更了，我们就需要及时对相关的视图进行相应的维护</strong>。特别是嵌套的视图（就是在视图的基础上创建视图），维护会变得比较复杂，<code v-pre>可读性不好</code>，容易变成系统的潜在隐患。因为创建视图的 SQL 查询可能会对字段重命名，也可能包含复杂的逻辑，这些都会增加维护的成本。</p>
<p>实际项目中，如果视图过多，会导致数据库维护成本的问题。</p>
<p>所以，在创建视图的时候，你要结合实际项目需求，综合考虑视图的优点和不足，这样才能正确使用视图，使系统整体达到最优。</p>
<hr>
<p>MySQL从5.0版本开始支持存储过程和函数。存储过程和函数能够将复杂的SQL逻辑封装在一起，应用程序无须关注存储过程和函数内部复杂的SQL逻辑，而只需要简单地调用存储过程和函数即可。</p>
<h2 id="存储过程概述" tabindex="-1"><a class="header-anchor" href="#存储过程概述" aria-hidden="true">#</a> 存储过程概述</h2>
<h3 id="理解" tabindex="-1"><a class="header-anchor" href="#理解" aria-hidden="true">#</a> 理解</h3>
<p><strong>含义</strong>：存储过程的英文是 <code v-pre>Stored Procedure</code>。它的思想很简单，就是一组经过<code v-pre>预先编译</code>的 SQL 语句的封装。</p>
<p>执行过程：存储过程预先存储在 MySQL 服务器上，需要执行的时候，客户端只需要向服务器端发出调用存储过程的命令，服务器端就可以把预先存储好的这一系列 SQL 语句全部执行。</p>
<p><strong>好处</strong>：</p>
<p>1、简化操作，提高了sql语句的重用性，减少了开发程序员的压力
2、减少操作过程中的失误，提高效率
3、减少网络传输量（客户端不需要把所有的 SQL 语句通过网络发给服务器）
4、减少了 SQL 语句暴露在网上的风险，也提高了数据查询的安全性</p>
<p><strong>和视图、函数的对比</strong>：</p>
<p>它和视图有着同样的优点，清晰、安全，还可以减少网络传输量。不过它和视图不同，视图是<code v-pre>虚拟表</code>，通常不对底层数据表直接操作，而存储过程是程序化的 SQL，可以<code v-pre>直接操作底层数据表</code>，相比于面向集合的操作方式，能够实现一些更复杂的数据处理。</p>
<p>一旦存储过程被创建出来，使用它就像使用函数一样简单，我们直接通过调用存储过程名即可。相较于函数，存储过程是<code v-pre>没有返回值</code>的。</p>
<h3 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h3>
<p>存储过程的参数类型可以是IN、OUT和INOUT。根据这点分类如下：</p>
<p>1、没有参数（无参数无返回）
2、仅仅带 IN 类型（有参数无返回）
3、仅仅带 OUT 类型（无参数有返回）
4、既带 IN 又带 OUT（有参数有返回）
5、带 INOUT（有参数有返回）</p>
<p>注意：IN、OUT、INOUT 都可以在一个存储过程中带多个。</p>
<h2 id="创建存储过程" tabindex="-1"><a class="header-anchor" href="#创建存储过程" aria-hidden="true">#</a> 创建存储过程</h2>
<h3 id="语法分析" tabindex="-1"><a class="header-anchor" href="#语法分析" aria-hidden="true">#</a> 语法分析</h3>
<p>语法：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CREATE PROCEDURE 存储过程名(IN|OUT|INOUT 参数名 参数类型,...)
[characteristics ...]
BEGIN
	存储过程体

END
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类似于Java中的方法：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>修饰符 返回类型 方法名(参数类型 参数名,...){

	方法体;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p>
<p>1、参数前面的符号的意思</p>
<ul>
<li>
<p><code v-pre>IN</code>：当前参数为输入参数，也就是表示入参；</p>
<p>存储过程只是读取这个参数的值。如果没有定义参数种类，<code v-pre>默认就是 IN</code>，表示输入参数。</p>
</li>
<li>
<p><code v-pre>OUT</code>：当前参数为输出参数，也就是表示出参；</p>
<p>执行完成之后，调用这个存储过程的客户端或者应用程序就可以读取这个参数返回的值了。</p>
</li>
<li>
<p><code v-pre>INOUT</code>：当前参数既可以为输入参数，也可以为输出参数。</p>
</li>
</ul>
<p>2、形参类型可以是 MySQL数据库中的任意类型。</p>
<p>3、<code v-pre>characteristics</code> 表示创建存储过程时指定的对存储过程的约束条件，其取值信息如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>LANGUAGE SQL
| [NOT] DETERMINISTIC
| { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
| SQL SECURITY { DEFINER | INVOKER }
| COMMENT 'string'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>LANGUAGE SQL</code>：说明存储过程执行体是由SQL语句组成的，当前系统支持的语言为SQL。</li>
<li><code v-pre>[NOT] DETERMINISTIC</code>：指明存储过程执行的结果是否确定。DETERMINISTIC表示结果是确定的。每次执行存储过程时，相同的输入会得到相同的输出。NOT DETERMINISTIC表示结果是不确定的，相同的输入可能得到不同的输出。如果没有指定任意一个值，默认为NOT DETERMINISTIC。</li>
<li><code v-pre>{ CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }</code>：指明子程序使用SQL语句的限制。
<ul>
<li>CONTAINS SQL表示当前存储过程的子程序包含SQL语句，但是并不包含读写数据的SQL语句；</li>
<li>NO SQL表示当前存储过程的子程序中不包含任何SQL语句；</li>
<li>READS SQL DATA表示当前存储过程的子程序中包含读数据的SQL语句；</li>
<li>MODIFIES SQL DATA表示当前存储过程的子程序中包含写数据的SQL语句。</li>
<li>默认情况下，系统会指定为CONTAINS SQL。</li>
</ul>
</li>
<li><code v-pre>SQL SECURITY { DEFINER | INVOKER }</code>：执行当前存储过程的权限，即指明哪些用户能够执行当前存储过程。
<ul>
<li><code v-pre>DEFINER</code>表示只有当前存储过程的创建者或者定义者才能执行当前存储过程；</li>
<li><code v-pre>INVOKER</code>表示拥有当前存储过程的访问权限的用户能够执行当前存储过程。</li>
<li>如果没有设置相关的值，则MySQL默认指定值为DEFINER。</li>
</ul>
</li>
<li><code v-pre>COMMENT 'string'</code>：注释信息，可以用来描述存储过程。</li>
</ul>
<p>4、存储过程体中可以有多条 SQL 语句，如果仅仅一条SQL 语句，则可以省略 BEGIN 和 END</p>
<p>编写存储过程并不是一件简单的事情，可能存储过程中需要复杂的 SQL 语句。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>1. BEGIN…END：BEGIN…END 中间包含了多个语句，每个语句都以（;）号为结束符。
2. DECLARE：DECLARE 用来声明变量，使用的位置在于 BEGIN…END 语句中间，而且需要在其他语句使用之前进行变量的声明。
3. SET：赋值语句，用于对变量进行赋值。
4. SELECT… INTO：把从数据表中查询的结果存放到变量中，也就是为变量赋值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、需要设置新的结束标记</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DELIMITER 新的结束标记
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为MySQL默认的语句结束符号为分号‘;’。为了避免与存储过程中SQL语句结束符相冲突，需要使用DELIMITER改变存储过程的结束符。</p>
<p>比如：“DELIMITER //”语句的作用是将MySQL的结束符设置为//，并以“END //”结束存储过程。存储过程定义完毕之后再使用“DELIMITER ;”恢复默认结束符。DELIMITER也可以指定其他符号作为结束符。</p>
<p>当使用DELIMITER命令时，应该避免使用反斜杠（‘\’）字符，因为反斜线是MySQL的转义字符。</p>
<p>示例：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DELIMITER $

CREATE PROCEDURE 存储过程名(IN|OUT|INOUT 参数名  参数类型,...)
[characteristics ...]
BEGIN
	sql语句1;
	sql语句2;

END $
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调用存储过程" tabindex="-1"><a class="header-anchor" href="#调用存储过程" aria-hidden="true">#</a> 调用存储过程</h2>
<h3 id="调用格式" tabindex="-1"><a class="header-anchor" href="#调用格式" aria-hidden="true">#</a> 调用格式</h3>
<p>存储过程有多种调用方法。存储过程必须使用CALL语句调用，并且存储过程和数据库相关，如果要执行其他数据库中的存储过程，需要指定数据库名称，例如CALL dbname.procname。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CALL 存储过程名(实参列表)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>格式：</strong></p>
<p>1、调用in模式的参数：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CALL sp1('值');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、调用out模式的参数：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SET @name;
CALL sp1(@name);
SELECT @name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、调用inout模式的参数：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SET @name=值;
CALL sp1(@name);
SELECT @name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何调试" tabindex="-1"><a class="header-anchor" href="#如何调试" aria-hidden="true">#</a> 如何调试</h3>
<p>在 MySQL 中，存储过程不像普通的编程语言（比如 VC++、Java 等）那样有专门的集成开发环境。因此，你可以通过 SELECT 语句，把程序执行的中间结果查询出来，来调试一个 SQL 语句的正确性。调试成功之后，把 SELECT 语句后移到下一个 SQL 语句之后，再调试下一个 SQL 语句。这样<code v-pre>逐步推进</code>，就可以完成对存储过程中所有操作的调试了。当然，你也可以把存储过程中的 SQL 语句复制出来，逐段单独调试。</p>
<h2 id="存储函数的使用" tabindex="-1"><a class="header-anchor" href="#存储函数的使用" aria-hidden="true">#</a> 存储函数的使用</h2>
<p>前面学习了很多函数，使用这些函数可以对数据进行的各种处理操作，极大地提高用户对数据库的管理效率。MySQL支持自定义函数，定义好之后，调用方式与调用MySQL预定义的系统函数一样。</p>
<h3 id="语法分析-1" tabindex="-1"><a class="header-anchor" href="#语法分析-1" aria-hidden="true">#</a> 语法分析</h3>
<p>学过的函数：LENGTH、SUBSTR、CONCAT等</p>
<p>语法格式：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CREATE FUNCTION 函数名(参数名 参数类型,...) 
RETURNS 返回值类型
[characteristics ...]
BEGIN
	函数体   #函数体中肯定有 RETURN 语句

END
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p>
<p>1、参数列表：指定参数为IN、OUT或INOUT只对PROCEDURE是合法的，FUNCTION中总是默认为IN参数。</p>
<p>2、RETURNS type 语句表示函数返回数据的类型；</p>
<p>RETURNS子句只能对FUNCTION做指定，对函数而言这是<code v-pre>强制</code>的。它用来指定函数的返回类型，而且函数体必须包含一个<code v-pre>RETURN value</code>语句。</p>
<p>3、characteristic 创建函数时指定的对函数的约束。取值与创建存储过程时相同，这里不再赘述。</p>
<p>4、函数体也可以用BEGIN…END来表示SQL代码的开始和结束。如果函数体只有一条语句，也可以省略BEGIN…END。</p>
<h3 id="调用存储函数" tabindex="-1"><a class="header-anchor" href="#调用存储函数" aria-hidden="true">#</a> 调用存储函数</h3>
<p>在MySQL中，存储函数的使用方法与MySQL内部函数的使用方法是一样的。换言之，用户自己定义的存储函数与MySQL内部函数是一个性质的。区别在于，存储函数是<code v-pre>用户自己定义</code>的，而内部函数是MySQL的<code v-pre>开发者定义</code>的。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT 函数名(实参列表)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意：</strong></p>
<p>若在创建存储函数中报错“<code v-pre>you might want to use the less safe log_bin_trust_function_creators variable</code>”，有两种处理方法：</p>
<ul>
<li>
<p>方式1：加上必要的函数特性“[NOT] DETERMINISTIC”和“{CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA}”</p>
</li>
<li>
<p>方式2：</p>
</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SET GLOBAL log_bin_trust_function_creators = 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="对比存储函数和存储过程" tabindex="-1"><a class="header-anchor" href="#对比存储函数和存储过程" aria-hidden="true">#</a> 对比存储函数和存储过程</h3>
<table>
<thead>
<tr>
<th></th>
<th>关键字</th>
<th>调用语法</th>
<th>返回值</th>
<th>应用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td>存储过程</td>
<td>PROCEDURE</td>
<td>CALL 存储过程()</td>
<td>理解为有0个或多个</td>
<td>一般用于更新</td>
</tr>
<tr>
<td>存储函数</td>
<td>FUNCTION</td>
<td>SELECT 函数()</td>
<td>只能是一个</td>
<td>一般用于查询结果为一个值并返回时</td>
</tr>
</tbody>
</table>
<p>此外，<strong>存储函数可以放在查询语句中使用，存储过程不行</strong>。反之，存储过程的功能更加强大，包括能够执行对表的操作（比如创建表，删除表等）和事务操作，这些功能是存储函数不具备的。</p>
<h2 id="存储过程和函数的查看、修改、删除" tabindex="-1"><a class="header-anchor" href="#存储过程和函数的查看、修改、删除" aria-hidden="true">#</a> 存储过程和函数的查看、修改、删除</h2>
<h3 id="查看" tabindex="-1"><a class="header-anchor" href="#查看" aria-hidden="true">#</a> 查看</h3>
<p>创建完之后，怎么知道我们创建的存储过程、存储函数是否成功了呢？</p>
<p>MySQL存储了存储过程和函数的状态信息，用户可以使用SHOW STATUS语句或SHOW CREATE语句来查看，也可直接从系统的information_schema数据库中查询。这里介绍3种方法。</p>
<p><strong>1. 使用SHOW CREATE语句查看存储过程和函数的创建信息</strong></p>
<p>基本语法结构如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SHOW CREATE {PROCEDURE | FUNCTION} 存储过程名或函数名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>举例：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SHOW CREATE FUNCTION test_db.CountProc \G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. 使用SHOW STATUS语句查看存储过程和函数的状态信息</strong></p>
<p>基本语法结构如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SHOW {PROCEDURE | FUNCTION} STATUS [LIKE 'pattern']
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个语句返回子程序的特征，如数据库、名字、类型、创建者及创建和修改日期。</p>
<p>[LIKE 'pattern']：匹配存储过程或函数的名称，可以省略。当省略不写时，会列出MySQL数据库中存在的所有存储过程或函数的信息。
举例：SHOW STATUS语句示例，代码如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; SHOW PROCEDURE STATUS LIKE 'SELECT%' \G 
*************************** 1. row ***************************
                  Db: test_db
                Name: SelectAllData
                Type: PROCEDURE
             Definer: root@localhost
            Modified: 2021-10-16 15:55:07
             Created: 2021-10-16 15:55:07
       Security_type: DEFINER
             Comment: 
character_set_client: utf8mb4
collation_connection: utf8mb4_general_ci
  Database Collation: utf8mb4_general_ci
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 从information_schema.Routines表中查看存储过程和函数的信息</strong></p>
<p>MySQL中存储过程和函数的信息存储在information_schema数据库下的Routines表中。可以通过查询该表的记录来查询存储过程和函数的信息。其基本语法形式如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT * FROM information_schema.Routines
WHERE ROUTINE_NAME='存储过程或函数的名' [AND ROUTINE_TYPE = {'PROCEDURE|FUNCTION'}];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：如果在MySQL数据库中存在存储过程和函数名称相同的情况，最好指定ROUTINE_TYPE查询条件来指明查询的是存储过程还是函数。</p>
<p>举例：从Routines表中查询名称为CountProc的存储函数的信息，代码如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT * FROM information_schema.Routines
WHERE ROUTINE_NAME='count_by_id'　AND　ROUTINE_TYPE = 'FUNCTION' \G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h3>
<p>修改存储过程或函数，不影响存储过程或函数功能，只是修改相关特性。使用ALTER语句实现。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>ALTER {PROCEDURE | FUNCTION} 存储过程或函数的名 [characteristic ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，characteristic指定存储过程或函数的特性，其取值信息与创建存储过程、函数时的取值信息略有不同。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>{ CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
| SQL SECURITY { DEFINER | INVOKER }
| COMMENT 'string'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>CONTAINS SQL</code>，表示子程序包含SQL语句，但不包含读或写数据的语句。</li>
<li><code v-pre>NO SQL</code>，表示子程序中不包含SQL语句。</li>
<li><code v-pre>READS SQL DATA</code>，表示子程序中包含读数据的语句。</li>
<li><code v-pre>MODIFIES SQL DATA</code>，表示子程序中包含写数据的语句。</li>
<li><code v-pre>SQL SECURITY { DEFINER | INVOKER }</code>，指明谁有权限来执行。
<ul>
<li><code v-pre>DEFINER</code>，表示只有定义者自己才能够执行。</li>
<li><code v-pre>INVOKER</code>，表示调用者可以执行。</li>
</ul>
</li>
<li><code v-pre>COMMENT 'string'</code>，表示注释信息。</li>
</ul>
<blockquote>
<p>修改存储过程使用ALTER PROCEDURE语句，修改存储函数使用ALTER FUNCTION语句。但是，这两个语句的结构是一样的，语句中的所有参数也是一样的。</p>
</blockquote>
<h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3>
<p>删除存储过程和函数，可以使用DROP语句，其语法结构如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DROP {PROCEDURE | FUNCTION} [IF EXISTS] 存储过程或函数的名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>IF EXISTS：如果程序或函数不存储，它可以防止发生错误，产生一个用SHOW WARNINGS查看的警告。</p>
<p>举例：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DROP PROCEDURE CountProc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DROP FUNCTION CountProc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="关于存储过程使用的争议" tabindex="-1"><a class="header-anchor" href="#关于存储过程使用的争议" aria-hidden="true">#</a> 关于存储过程使用的争议</h2>
<p>尽管存储过程有诸多优点，但是对于存储过程的使用，<strong>一直都存在着很多争议</strong>，比如有些公司对于大型项目要求使用存储过程，而有些公司在手册中明确禁止使用存储过程，为什么这些公司对存储过程的使用需求差别这么大呢？</p>
<h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3>
<p>**1、存储过程可以一次编译多次使用。**存储过程只在创建时进行编译，之后的使用都不需要重新编译，这就提升了 SQL 的执行效率。</p>
<p>**2、可以减少开发工作量。**将代码<code v-pre>封装</code>成模块，实际上是编程的核心思想之一，这样可以把复杂的问题拆解成不同的模块，然后模块之间可以<code v-pre>重复使用</code>，在减少开发工作量的同时，还能保证代码的结构清晰。</p>
<p>**3、存储过程的安全性强。**我们在设定存储过程的时候可以<code v-pre>设置对用户的使用权限</code>，这样就和视图一样具有较强的安全性。</p>
<p>**4、可以减少网络传输量。**因为代码封装到存储过程中，每次使用只需要调用存储过程即可，这样就减少了网络传输量。</p>
<p>**5、良好的封装性。**在进行相对复杂的数据库操作时，原本需要使用一条一条的 SQL 语句，可能要连接多次数据库才能完成的操作，现在变成了一次存储过程，只需要<code v-pre>连接一次即可</code>。</p>
<h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3>
<p>基于上面这些优点，不少大公司都要求大型项目使用存储过程，比如微软、IBM 等公司。但是国内的阿里并不推荐开发人员使用存储过程，这是为什么呢？</p>
<blockquote>
<h4 id="阿里开发规范" tabindex="-1"><a class="header-anchor" href="#阿里开发规范" aria-hidden="true">#</a> 阿里开发规范</h4>
<p>【强制】禁止使用存储过程，存储过程难以调试和扩展，更没有移植性。</p>
</blockquote>
<p>存储过程虽然有诸如上面的好处，但缺点也是很明显的。</p>
<p>**1、可移植性差。**存储过程不能跨数据库移植，比如在 MySQL、Oracle 和 SQL Server 里编写的存储过程，在换成其他数据库时都需要重新编写。</p>
<p>**2、调试困难。**只有少数 DBMS 支持存储过程的调试。对于复杂的存储过程来说，开发和维护都不容易。虽然也有一些第三方工具可以对存储过程进行调试，但要收费。</p>
<p>**3、存储过程的版本管理很困难。**比如数据表索引发生变化了，可能会导致存储过程失效。我们在开发软件的时候往往需要进行版本管理，但是存储过程本身没有版本控制，版本迭代更新的时候很麻烦。</p>
<p>**4、它不适合高并发的场景。**高并发的场景需要减少数据库的压力，有时数据库会采用分库分表的方式，而且对可扩展性要求很高，在这种情况下，存储过程会变得难以维护，<code v-pre>增加数据库的压力</code>，显然就不适用了。</p>
<p>小结：</p>
<p>存储过程既方便，又有局限性。尽管不同的公司对存储过程的态度不一，但是对于我们开发人员来说，不论怎样，掌握存储过程都是必备的技能之一。</p>
</div></template>
