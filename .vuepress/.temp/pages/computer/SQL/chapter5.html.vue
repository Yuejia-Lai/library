<template><div><blockquote>
<p>子查询指一个查询语句嵌套在另一个查询语句内部的查询，这个特性从MySQL 4.1开始引入。</p>
<p>SQL 中子查询的使用大大增强了 SELECT 查询的能力，因为很多时候查询需要从结果集中获取数据，或者需要从同一个表中先计算得出一个数据结果，然后与这个数据结果（可能是某个标量，也可能是某个集合）进行比较</p>
</blockquote>
<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2>
<h3 id="子查询的基本使用" tabindex="-1"><a class="header-anchor" href="#子查询的基本使用" aria-hidden="true">#</a> 子查询的基本使用</h3>
<p><img src="https://s2.loli.net/2022/09/14/KcsvArEJtBL8Ta1.png" alt="1554991054388.png" loading="lazy"></p>
<ul>
<li>子查询（内查询）在主查询之前一次执行完成。</li>
<li>子查询的结果被主查询（外查询）使用 。</li>
<li><strong>注意事项</strong>
<ul>
<li>子查询要包含在括号内</li>
<li>将子查询放在比较条件的右侧</li>
<li>单行操作符对应单行子查询，多行操作符对应多行子查询</li>
</ul>
</li>
</ul>
<h3 id="子查询的分类" tabindex="-1"><a class="header-anchor" href="#子查询的分类" aria-hidden="true">#</a> 子查询的分类</h3>
<p><strong>分类方式1：</strong></p>
<p>我们按内查询的结果返回一条还是多条记录，将子查询分为<code v-pre>单行子查询</code>、<code v-pre>多行子查询</code>。</p>
<ul>
<li>单行子查询</li>
</ul>
<p>​	<img src="https://s2.loli.net/2022/09/14/qdvafUjFXh5OyLZ.png" alt="1554991538719.png" loading="lazy"></p>
<ul>
<li>多行子查询</li>
</ul>
<p>​	<img src="https://s2.loli.net/2022/09/14/dSplWg3Ybzwe146.png" alt="1554991555669.png" loading="lazy"></p>
<p><strong>分类方式2：</strong></p>
<p>我们按内查询是否被执行多次，将子查询划分为<code v-pre>相关(或关联)子查询</code>和<code v-pre>不相关(或非关联)子查询</code></p>
<p>子查询从数据表中查询了数据结果，如果这个数据结果只执行一次，然后这个数据结果作为主查询的条件进行执行，那么这样的子查询叫做不相关子查询</p>
<p>同样，如果子查询需要执行多次，即采用循环的方式，先从外部查询开始，每次都传入子查询进行查询，然后再将结果反馈给外部，这种嵌套的执行方式就称为相关子查询</p>
<h2 id="单行子查询" tabindex="-1"><a class="header-anchor" href="#单行子查询" aria-hidden="true">#</a> 单行子查询</h2>
<h3 id="单行比较操作符" tabindex="-1"><a class="header-anchor" href="#单行比较操作符" aria-hidden="true">#</a> 单行比较操作符</h3>
<table>
<thead>
<tr>
<th>操作符</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>=</td>
<td>equal to</td>
</tr>
<tr>
<td>&gt;</td>
<td>greater than</td>
</tr>
<tr>
<td>&gt;=</td>
<td>greater than or equal to</td>
</tr>
<tr>
<td>&lt;</td>
<td>less than</td>
</tr>
<tr>
<td>&lt;=</td>
<td>less than or equal to</td>
</tr>
<tr>
<td>&lt;&gt; 或者 !=</td>
<td>not equal to</td>
</tr>
</tbody>
</table>
<h3 id="having-中的子查询" tabindex="-1"><a class="header-anchor" href="#having-中的子查询" aria-hidden="true">#</a> HAVING 中的子查询</h3>
<ul>
<li>首先执行子查询。</li>
<li>向主查询中的HAVING 子句返回结果</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT   department_id, MIN(salary)
FROM     employees
GROUP BY department_id
HAVING   MIN(salary) &gt;
                       (SELECT MIN(salary)
                        FROM   employees
                        WHERE  department_id = 50);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="case中的子查询" tabindex="-1"><a class="header-anchor" href="#case中的子查询" aria-hidden="true">#</a> CASE中的子查询</h3>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT employee_id, last_name,
       (CASE department_id
        WHEN
             (SELECT department_id FROM departments
	      WHERE location_id = 1800)           
        THEN 'Canada' ELSE 'USA' END) location
FROM   employees;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子查询中的空值问题" tabindex="-1"><a class="header-anchor" href="#子查询中的空值问题" aria-hidden="true">#</a> 子查询中的空值问题</h3>
<p><img src="https://s2.loli.net/2022/09/14/ozTiSHr3gZKP8xL.png" alt="1554992067381.png" loading="lazy"></p>
<blockquote>
<p><strong>子查询不返回任何行</strong></p>
</blockquote>
<h3 id="非法使用子查询" tabindex="-1"><a class="header-anchor" href="#非法使用子查询" aria-hidden="true">#</a> 非法使用子查询</h3>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT employee_id, last_name
FROM   employees
WHERE  salary =
                (SELECT   MIN(salary)
                 FROM     employees
                 GROUP BY department_id);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://s2.loli.net/2022/09/14/TUYwkHeX4urm2M1.png" alt="1554992135819.png" loading="lazy"></p>
<blockquote>
<p><strong>多行子查询使用单行比较符</strong></p>
</blockquote>
<h2 id="多行子查询" tabindex="-1"><a class="header-anchor" href="#多行子查询" aria-hidden="true">#</a> 多行子查询</h2>
<ul>
<li>也称为集合比较子查询</li>
<li>内查询返回多行</li>
<li>使用多行比较操作符</li>
</ul>
<h3 id="多行比较操作符" tabindex="-1"><a class="header-anchor" href="#多行比较操作符" aria-hidden="true">#</a> 多行比较操作符</h3>
<table>
<thead>
<tr>
<th>操作符</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>IN</td>
<td>等于列表中的<strong>任意一个</strong></td>
</tr>
<tr>
<td>ANY</td>
<td>需要和单行比较操作符一起使用，和子查询返回的<strong>某一个</strong>值比较</td>
</tr>
<tr>
<td>ALL</td>
<td>需要和单行比较操作符一起使用，和子查询返回的<strong>所有</strong>值比较</td>
</tr>
<tr>
<td>SOME</td>
<td>实际上是ANY的别名，作用相同，一般常使用ANY</td>
</tr>
</tbody>
</table>
<blockquote>
<p>体会 ANY 和 ALL 的区别</p>
</blockquote>
<h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h3>
<p><strong>查询平均工资最低的部门id</strong></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#方式1：
SELECT department_id
FROM employees
GROUP BY department_id
HAVING AVG(salary) = (
			SELECT MIN(avg_sal)
			FROM (
				SELECT AVG(salary) avg_sal
				FROM employees
				GROUP BY department_id
				) dept_avg_sal
			)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#方式2：
SELECT department_id
FROM employees
GROUP BY department_id
HAVING AVG(salary) &lt;= ALL (
				SELECT AVG(salary) avg_sal
				FROM employees
				GROUP BY department_id
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="空值问题" tabindex="-1"><a class="header-anchor" href="#空值问题" aria-hidden="true">#</a> 空值问题</h3>
<p><img src="https://s2.loli.net/2022/09/14/IXWJCOqBMrfjzbQ.png" alt="image-20211027195906773.png" loading="lazy"></p>
<h2 id="相关子查询" tabindex="-1"><a class="header-anchor" href="#相关子查询" aria-hidden="true">#</a> 相关子查询</h2>
<h3 id="相关子查询执行流程" tabindex="-1"><a class="header-anchor" href="#相关子查询执行流程" aria-hidden="true">#</a> 相关子查询执行流程</h3>
<p>如果子查询的执行依赖于外部查询，通常情况下都是因为子查询中的表用到了外部的表，并进行了条件关联，因此每执行一次外部查询，子查询都要重新计算一次，这样的子查询就称之为<code v-pre>关联子查询</code>。</p>
<p>相关子查询按照一行接一行的顺序执行，主查询的每一行都执行一次子查询</p>
<p><img src="https://s2.loli.net/2022/09/14/mTrI5PAotqBH1QL.png" alt="1554992898234.png" loading="lazy"></p>
<p>说明：<strong>子查询中使用主查询中的列</strong></p>
<h3 id="代码示例-1" tabindex="-1"><a class="header-anchor" href="#代码示例-1" aria-hidden="true">#</a> 代码示例</h3>
<p><strong>题目：查询员工中工资大于本部门平均工资的员工的last_name,salary和其department_id</strong></p>
<p><strong>方式一：相关子查询</strong></p>
<p><img src="https://s2.loli.net/2022/09/14/f6x1vKaANrt7P4H.png" alt="1554992986225.png" loading="lazy"></p>
<p><strong>方式二：在 FROM 中使用子查询</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>salary<span class="token punctuation">,</span>e1<span class="token punctuation">.</span>department_id
<span class="token keyword">FROM</span> employees e1<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span><span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> dept_avg_sal <span class="token keyword">FROM</span> employees <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id<span class="token punctuation">)</span> e2
<span class="token keyword">WHERE</span> e1<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span> <span class="token operator">=</span> e2<span class="token punctuation">.</span>department_id
<span class="token operator">AND</span> e2<span class="token punctuation">.</span>dept_avg_sal <span class="token operator">&lt;</span> e1<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>salary<span class="token punctuation">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>from型的子查询：子查询是作为from的一部分，子查询要用()引起来，并且要给这个子查询取别名，
把它当成一张“临时的虚拟的表”来使用。</p>
</blockquote>
<p>在ORDER BY 中使用子查询：</p>
<p><strong>题目：查询员工的id,salary,按照department_name 排序</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>salary
<span class="token keyword">FROM</span> employees e
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> <span class="token punctuation">(</span>
	  <span class="token keyword">SELECT</span> department_name
	  <span class="token keyword">FROM</span> departments d
	  <span class="token keyword">WHERE</span> e<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span> <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>department_id<span class="token punctuation">`</span></span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exists-与-not-exists关键字" tabindex="-1"><a class="header-anchor" href="#exists-与-not-exists关键字" aria-hidden="true">#</a> EXISTS 与 NOT EXISTS关键字</h3>
<ul>
<li>关联子查询通常也会和 EXISTS操作符一起来使用，用来检查在子查询中是否存在满足条件的行。</li>
<li><strong>如果在子查询中不存在满足条件的行：</strong>
<ul>
<li>条件返回 FALSE</li>
<li>继续在子查询中查找</li>
</ul>
</li>
<li><strong>如果在子查询中存在满足条件的行：</strong>
<ul>
<li>不在子查询中继续查找</li>
<li>条件返回 TRUE</li>
</ul>
</li>
<li>NOT EXISTS关键字表示如果不存在某种条件，则返回TRUE，否则返回FALSE</li>
</ul>
<p><strong>题目：查询公司管理者的employee_id，last_name，job_id，department_id信息</strong></p>
<p>方式一：</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name<span class="token punctuation">,</span> job_id<span class="token punctuation">,</span> department_id
<span class="token keyword">FROM</span>   employees e1
<span class="token keyword">WHERE</span>  <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span>
                 <span class="token keyword">FROM</span>   employees e2
                 <span class="token keyword">WHERE</span>  e2<span class="token punctuation">.</span>manager_id <span class="token operator">=</span> 
                        e1<span class="token punctuation">.</span>employee_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二：自连接</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> e1<span class="token punctuation">.</span>employee_id<span class="token punctuation">,</span> e1<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span> e1<span class="token punctuation">.</span>job_id<span class="token punctuation">,</span> e1<span class="token punctuation">.</span>department_id
<span class="token keyword">FROM</span>   employees e1 <span class="token keyword">JOIN</span> employees e2
<span class="token keyword">WHERE</span> e1<span class="token punctuation">.</span>employee_id <span class="token operator">=</span> e2<span class="token punctuation">.</span>manager_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式三：</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>last_name<span class="token punctuation">,</span>job_id<span class="token punctuation">,</span>department_id
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> employee_id <span class="token operator">IN</span> <span class="token punctuation">(</span>
		     <span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> manager_id
		     <span class="token keyword">FROM</span> employees
		     
		     <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>题目中可以使用子查询，也可以使用自连接。一般情况建议你使用自连接，因为在许多 DBMS 的处理过程中，对于自连接的处理速度要比子查询快得多。</p>
<p>可以这样理解：子查询实际上是通过未知表进行查询后的条件判断，而自连接是通过已知的自身数据表进行条件判断，因此在大部分 DBMS 中都对自连接处理进行了优化</p>
</blockquote>
</div></template>
