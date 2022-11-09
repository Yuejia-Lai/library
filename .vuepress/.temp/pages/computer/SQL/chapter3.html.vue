<template><div><p>前提条件：这些一起查询的表之间是有关系的（一对一、一对多），它们之间一定是有关联字段，这个关联字段可能建立了外键，也可能没有建立外键</p>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p>注意笛卡尔积错误</p>
</div>
<p>为了避免笛卡尔积， 可以<strong>在 WHERE 加入有效的连接条件</strong></p>
<h2 id="多表查询分类讲解" tabindex="-1"><a class="header-anchor" href="#多表查询分类讲解" aria-hidden="true">#</a> 多表查询分类讲解</h2>
<h3 id="分类1-等值连接-vs-非等值连接" tabindex="-1"><a class="header-anchor" href="#分类1-等值连接-vs-非等值连接" aria-hidden="true">#</a> 分类1：等值连接 vs 非等值连接</h3>
<h4 id="等值连接" tabindex="-1"><a class="header-anchor" href="#等值连接" aria-hidden="true">#</a> 等值连接</h4>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT employees.employee_id, employees.last_name, 
       employees.department_id, departments.department_id,
       departments.location_id
FROM   employees, departments
WHERE  employees.department_id = departments.department_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>拓展1：多个连接条件与 AND 操作符</strong></p>
<p><strong>拓展2：区分重复的列名</strong></p>
<ul>
<li><strong>多个表中有相同列时，必须在列名之前加上表名前缀。</strong></li>
<li>在不同表中具有相同列名的列可以用<code v-pre>表名</code>加以区分。</li>
</ul>
<p><strong>拓展3：表的别名</strong></p>
<ul>
<li>
<p>使用别名可以简化查询。</p>
</li>
<li>
<p>列名前使用表名前缀可以提高查询效率。</p>
</li>
</ul>
<blockquote>
<p>需要注意的是，如果我们使用了表的别名，在查询字段中、过滤条件中就只能使用别名进行代替，不能使用原有的表名，否则就会报错</p>
</blockquote>
<p><strong>拓展4：连接多个表</strong></p>
<p>**总结：连接 n个表,至少需要n-1个连接条件。**比如，连接三个表，至少需要两个连接条件</p>
<h4 id="非等值连接" tabindex="-1"><a class="header-anchor" href="#非等值连接" aria-hidden="true">#</a> 非等值连接</h4>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT e.last_name, e.salary, j.grade_level
FROM   employees e, job_grades j
WHERE  e.salary BETWEEN j.lowest_sal AND j.highest_sal;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分类2-自连接-vs-非自连接" tabindex="-1"><a class="header-anchor" href="#分类2-自连接-vs-非自连接" aria-hidden="true">#</a> 分类2：自连接 vs 非自连接</h3>
<p>当table1和table2本质上是同一张表，只是用取别名的方式虚拟成两张表以代表不同的意义。然后两个表再进行内连接，外连接等查询</p>
<h3 id="分类3-内连接-vs-外连接" tabindex="-1"><a class="header-anchor" href="#分类3-内连接-vs-外连接" aria-hidden="true">#</a> 分类3：内连接 vs 外连接</h3>
<p>除了查询满足条件的记录以外，外连接还可以查询某一方不满足条件的记录</p>
<ul>
<li>
<p>内连接: 合并具有同一列的两个以上的表的行, <strong>结果集中不包含一个表与另一个表不匹配的行</strong></p>
</li>
<li>
<p>外连接: 两个表在连接过程中除了返回满足连接条件的行以外<strong>还返回左（或右）表中不满足条件的行</strong> <strong>，这种连接称为左（或右） 外连接</strong>。没有匹配的行时, 结果表中相应的列为空(NULL)。</p>
</li>
<li>
<p>如果是左外连接，则连接条件中左边的表也称为<code v-pre>主表</code>，右边的表称为<code v-pre>从表</code>。</p>
<p>如果是右外连接，则连接条件中右边的表也称为<code v-pre>主表</code>，左边的表称为<code v-pre>从表</code></p>
</li>
</ul>
<h2 id="sql99语法实现多表查询" tabindex="-1"><a class="header-anchor" href="#sql99语法实现多表查询" aria-hidden="true">#</a> SQL99语法实现多表查询</h2>
<h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h3>
<ul>
<li>使用JOIN...ON子句创建连接的语法结构：</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT table1.column, table2.column,table3.column
FROM table1
    JOIN table2 ON table1 和 table2 的连接条件
        JOIN table3 ON table2 和 table3 的连接条件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>语法说明：</p>
<ul>
<li>
<p><strong>可以使用</strong> <strong>ON</strong> <strong>子句指定额外的连接条件</strong>。</p>
</li>
<li>
<p>这个连接条件是与其它条件分开的。</p>
</li>
<li>
<p><strong>ON</strong> <strong>子句使语句具有更高的易读性</strong>。</p>
</li>
<li>
<p>关键字 JOIN、INNER JOIN、CROSS JOIN 的含义是一样的，都表示内连接</p>
</li>
</ul>
</li>
</ul>
<h3 id="内连接-inner-join-的实现" tabindex="-1"><a class="header-anchor" href="#内连接-inner-join-的实现" aria-hidden="true">#</a> 内连接(INNER JOIN)的实现</h3>
<ul>
<li>语法：</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT 字段列表
FROM A表 INNER JOIN B表
ON 关联条件
WHERE 等其他子句;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外连接-outer-join-的实现" tabindex="-1"><a class="header-anchor" href="#外连接-outer-join-的实现" aria-hidden="true">#</a> 外连接(OUTER JOIN)的实现</h3>
<h4 id="左外连接-left-outer-join" tabindex="-1"><a class="header-anchor" href="#左外连接-left-outer-join" aria-hidden="true">#</a> 左外连接(LEFT OUTER JOIN)</h4>
<ul>
<li>语法：</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#实现查询结果是A
SELECT 字段列表
FROM A表 LEFT JOIN B表
ON 关联条件
WHERE 等其他子句;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="右外连接-right-outer-join" tabindex="-1"><a class="header-anchor" href="#右外连接-right-outer-join" aria-hidden="true">#</a> 右外连接(RIGHT OUTER JOIN)</h4>
<ul>
<li>语法：</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#实现查询结果是B
SELECT 字段列表
FROM A表 RIGHT JOIN B表
ON 关联条件
WHERE 等其他子句;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>需要注意的是，LEFT JOIN 和 RIGHT JOIN 只存在于 SQL99 及以后的标准中，在 SQL92 中不存在，只能用 (+) 表示</p>
</blockquote>
<h4 id="满外连接-full-outer-join" tabindex="-1"><a class="header-anchor" href="#满外连接-full-outer-join" aria-hidden="true">#</a> 满外连接(FULL OUTER JOIN)</h4>
<ul>
<li>满外连接的结果 = 左右表匹配的数据 + 左表没有匹配到的数据 + 右表没有匹配到的数据。</li>
<li>SQL99是支持满外连接的。使用FULL JOIN 或 FULL OUTER JOIN来实现。</li>
<li>需要注意的是，MySQL不支持FULL JOIN，但是可以用 LEFT JOIN <strong>UNION</strong> RIGHT join代替</li>
</ul>
<h2 id="union的使用" tabindex="-1"><a class="header-anchor" href="#union的使用" aria-hidden="true">#</a> UNION的使用</h2>
<p><strong>合并查询结果</strong>
利用UNION关键字，可以给出多条SELECT语句，并将它们的结果组合成单个结果集。合并时，两个表对应的列数和数据类型必须相同，并且相互对应。各个SELECT语句之间使用UNION或UNION ALL关键字分隔</p>
<p>语法格式：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT column,... FROM table1
UNION [ALL]
SELECT column,... FROM table2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>UNION操作符</strong></p>
<p>UNION 操作符返回两个查询的结果集的并集，去除重复记录</p>
<p><strong>UNION ALL操作符</strong></p>
<p>UNION ALL操作符返回两个查询的结果集的并集。对于两个结果集的重复部分，不去重</p>
<blockquote>
<p>注意：执行UNION ALL语句时所需要的资源比UNION语句少。如果明确知道合并数据后的结果数据不存在重复数据，或者不需要去除重复的数据，则尽量使用UNION ALL语句，以提高数据查询的效率</p>
</blockquote>
<h2 id="sql99语法新特性" tabindex="-1"><a class="header-anchor" href="#sql99语法新特性" aria-hidden="true">#</a> SQL99语法新特性</h2>
<h3 id="自然连接" tabindex="-1"><a class="header-anchor" href="#自然连接" aria-hidden="true">#</a> 自然连接</h3>
<p>SQL99 在 SQL92 的基础上提供了一些特殊语法，比如 <code v-pre>NATURAL JOIN</code> 用来表示自然连接。我们可以把自然连接理解为 SQL92 中的等值连接。它会帮你自动查询两张连接表中<code v-pre>所有相同的字段</code>，然后进行<code v-pre>等值连接</code></p>
<h3 id="using连接" tabindex="-1"><a class="header-anchor" href="#using连接" aria-hidden="true">#</a> USING连接</h3>
<p>当我们进行连接的时候，SQL99还支持使用 USING 指定数据表里的<code v-pre>同名字段</code>进行等值连接。但是只能配合JOIN一起使用。比如：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT employee_id,last_name,department_name
FROM employees e JOIN departments d
USING (department_id);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你能看出与自然连接 NATURAL JOIN 不同的是，USING 指定了具体的相同的字段名称，你需要在 USING 的括号 () 中填入要指定的同名字段。同时使用 <code v-pre>JOIN...USING</code> 可以简化 JOIN ON 的等值连接。它与下面的 SQL 查询结果是相同的：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT employee_id,last_name,department_name
FROM employees e ,departments d
WHERE e.department_id = d.department_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="章节小结" tabindex="-1"><a class="header-anchor" href="#章节小结" aria-hidden="true">#</a> 章节小结</h2>
<p>表连接的约束条件可以有三种方式：WHERE, ON, USING</p>
<ul>
<li>
<p>WHERE：适用于所有关联查询</p>
</li>
<li>
<p><code v-pre>ON</code>：只能和JOIN一起使用，只能写关联条件。虽然关联条件可以并到WHERE中和其他条件一起写，但分开写可读性更好。</p>
</li>
<li>
<p>USING：只能和JOIN一起使用，而且要求<strong>两个</strong>关联字段在关联表中名称一致，而且只能表示关联字段值相等</p>
</li>
</ul>
<p><strong>注意：</strong></p>
<p>我们要<code v-pre>控制连接表的数量</code>。多表连接就相当于嵌套 for 循环一样，非常消耗资源，会让 SQL 查询性能下降得很严重，因此不要连接不必要的表。在许多 DBMS 中，也都会有最大连接表的限制</p>
</div></template>
