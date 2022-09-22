<template><div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2>
<p>在MySQL数据库的存储过程和函数中，可以使用变量来存储查询或计算的中间结果数据，或者输出最终的结果数据。</p>
<p>在 MySQL 数据库中，变量分为<code v-pre>系统变量</code>以及<code v-pre>用户自定义变量</code>。</p>
<h3 id="系统变量" tabindex="-1"><a class="header-anchor" href="#系统变量" aria-hidden="true">#</a> 系统变量</h3>
<h4 id="系统变量分类" tabindex="-1"><a class="header-anchor" href="#系统变量分类" aria-hidden="true">#</a> 系统变量分类</h4>
<p>变量由系统定义，不是用户定义，属于<code v-pre>服务器</code>层面。启动MySQL服务，生成MySQL服务实例期间，MySQL将为MySQL服务器内存中的系统变量赋值，这些系统变量定义了当前MySQL服务实例的属性、特征。这些系统变量的值要么是<code v-pre>编译MySQL时参数</code>的默认值，要么是<code v-pre>配置文件</code>（例如my.ini等）中的参数值。大家可以通过网址 <code v-pre>https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html</code> 查看MySQL文档的系统变量。</p>
<p>系统变量分为全局系统变量（需要添加<code v-pre>global</code> 关键字）以及会话系统变量（需要添加 <code v-pre>session</code> 关键字），有时也把全局系统变量简称为全局变量，有时也把会话系统变量称为local变量。**如果不写，默认会话级别。**静态变量（在 MySQL 服务实例运行期间它们的值不能使用 set 动态修改）属于特殊的全局系统变量。</p>
<p>每一个MySQL客户机成功连接MySQL服务器后，都会产生与之对应的会话。会话期间，MySQL服务实例会在MySQL服务器内存中生成与该会话对应的会话系统变量，这些会话系统变量的初始值是全局系统变量值的复制。如下图：</p>
<p><img src="https://s2.loli.net/2022/09/16/Dl9KjM7Fr2ZLdoJ.png" alt="image-20211108114846634.png" loading="lazy"></p>
<ul>
<li>全局系统变量针对于所有会话（连接）有效，但<code v-pre>不能跨重启</code></li>
<li>会话系统变量仅针对于当前会话（连接）有效。会话期间，当前会话对某个会话系统变量值的修改，不会影响其他会话同一个会话系统变量的值。</li>
<li>会话1对某个全局系统变量值的修改会导致会话2中同一个全局系统变量值的修改。</li>
</ul>
<p>在MySQL中有些系统变量只能是全局的，例如 max_connections 用于限制服务器的最大连接数；有些系统变量作用域既可以是全局又可以是会话，例如 character_set_client 用于设置客户端的字符集；有些系统变量的作用域只能是当前会话，例如 pseudo_thread_id 用于标记当前会话的 MySQL 连接 ID。</p>
<h4 id="查看系统变量" tabindex="-1"><a class="header-anchor" href="#查看系统变量" aria-hidden="true">#</a> 查看系统变量</h4>
<ul>
<li><strong>查看所有或部分系统变量</strong></li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#查看所有全局变量
SHOW GLOBAL VARIABLES;

#查看所有会话变量
SHOW SESSION VARIABLES;
或
SHOW VARIABLES;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#查看满足条件的部分系统变量。
SHOW GLOBAL VARIABLES LIKE '%标识符%';

#查看满足条件的部分会话变量
SHOW SESSION VARIABLES LIKE '%标识符%';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SHOW GLOBAL VARIABLES LIKE 'admin_%';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>查看指定系统变量</strong></li>
</ul>
<p>作为 MySQL 编码规范，MySQL 中的系统变量以<code v-pre>两个“@”</code>开头，其中“@@global”仅用于标记全局系统变量，“@@session”仅用于标记会话系统变量。“@@”首先标记会话系统变量，如果会话系统变量不存在，则标记全局系统变量。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#查看指定的系统变量的值
SELECT @@global.变量名;

#查看指定的会话变量的值
SELECT @@session.变量名;
#或者
SELECT @@变量名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>修改系统变量的值</strong></li>
</ul>
<p>有些时候，数据库管理员需要修改系统变量的默认值，以便修改当前会话或者MySQL服务实例的属性、特征。具体方法：</p>
<p>方式1：修改MySQL<code v-pre>配置文件</code>，继而修改MySQL系统变量的值（该方法需要重启MySQL服务）</p>
<p>方式2：在MySQL服务运行期间，使用“set”命令重新设置系统变量的值</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#为某个系统变量赋值
#方式1：
SET @@global.变量名=变量值;
#方式2：
SET GLOBAL 变量名=变量值;


#为某个会话变量赋值
#方式1：
SET @@session.变量名=变量值;
#方式2：
SET SESSION 变量名=变量值;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT @@global.autocommit;
SET GLOBAL autocommit=0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT @@session.tx_isolation;
SET @@session.tx_isolation='read-uncommitted';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SET GLOBAL max_connections = 1000;
SELECT @@global.max_connections;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户变量" tabindex="-1"><a class="header-anchor" href="#用户变量" aria-hidden="true">#</a> 用户变量</h3>
<h4 id="用户变量分类" tabindex="-1"><a class="header-anchor" href="#用户变量分类" aria-hidden="true">#</a> 用户变量分类</h4>
<p>用户变量是用户自己定义的，作为 MySQL 编码规范，MySQL 中的用户变量以<code v-pre>一个“@”</code>开头。根据作用范围不同，又分为<code v-pre>会话用户变量</code>和<code v-pre>局部变量</code>。</p>
<ul>
<li>
<p>会话用户变量：作用域和会话变量一样，只对<code v-pre>当前连接</code>会话有效。</p>
</li>
<li>
<p>局部变量：只在 BEGIN 和 END 语句块中有效。局部变量只能在<code v-pre>存储过程和函数</code>中使用。</p>
</li>
</ul>
<h4 id="会话用户变量" tabindex="-1"><a class="header-anchor" href="#会话用户变量" aria-hidden="true">#</a> 会话用户变量</h4>
<ul>
<li>变量的定义</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#方式1：“=”或“:=”
SET @用户变量 = 值;
SET @用户变量 := 值;

#方式2：“:=” 或 INTO关键字
SELECT @用户变量 := 表达式 [FROM 等子句];
SELECT 表达式 INTO @用户变量  [FROM 等子句];

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>查看用户变量的值 （查看、比较、运算等）</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT @用户变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-2-3-局部变量" tabindex="-1"><a class="header-anchor" href="#_1-2-3-局部变量" aria-hidden="true">#</a> 1.2.3 局部变量</h4>
<p>定义：可以使用<code v-pre>DECLARE</code>语句定义一个局部变量</p>
<p>作用域：仅仅在定义它的 BEGIN ... END 中有效</p>
<p>位置：只能放在 BEGIN ... END 中，而且只能放在第一句</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>BEGIN
	#声明局部变量
	DECLARE 变量名1 变量数据类型 [DEFAULT 变量默认值];
	DECLARE 变量名2,变量名3,... 变量数据类型 [DEFAULT 变量默认值];

	#为局部变量赋值
	SET 变量名1 = 值;
	SELECT 值 INTO 变量名2 [FROM 子句];

	#查看局部变量的值
	SELECT 变量1,变量2,变量3;
END

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>1.定义变量</strong></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DECLARE 变量名 类型 [default 值];  # 如果没有DEFAULT子句，初始值为NULL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>举例：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DECLARE　myparam　INT　DEFAULT 100;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.变量赋值</strong></p>
<p>方式1：一般用于赋简单的值</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SET 变量名=值;
SET 变量名:=值;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>方式2：一般用于赋表中的字段值</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT 字段名或表达式 INTO 变量名 FROM 表;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3.使用变量</strong>（查看、比较、运算等）</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT 局部变量名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="对比会话用户变量与局部变量" tabindex="-1"><a class="header-anchor" href="#对比会话用户变量与局部变量" aria-hidden="true">#</a> 对比会话用户变量与局部变量</h4>
<table>
<thead>
<tr>
<th></th>
<th>作用域</th>
<th>定义位置</th>
<th>语法</th>
</tr>
</thead>
<tbody>
<tr>
<td>会话用户变量</td>
<td>当前会话</td>
<td>会话的任何地方</td>
<td>加@符号，不用指定类型</td>
</tr>
<tr>
<td>局部变量</td>
<td>定义它的BEGIN END中</td>
<td>BEGIN END的第一句话</td>
<td>一般不用加@,需要指定类型</td>
</tr>
</tbody>
</table>
<h2 id="定义条件与处理程序" tabindex="-1"><a class="header-anchor" href="#定义条件与处理程序" aria-hidden="true">#</a> 定义条件与处理程序</h2>
<p><code v-pre>定义条件</code>是事先定义程序执行过程中可能遇到的问题，<code v-pre>处理程序</code>定义了在遇到问题时应当采取的处理方式，并且保证存储过程或函数在遇到警告或错误时能继续执行。这样可以增强存储程序处理问题的能力，避免程序异常停止运行。</p>
<p>说明：定义条件和处理程序在存储过程、存储函数中都是支持的。</p>
<h3 id="定义条件" tabindex="-1"><a class="header-anchor" href="#定义条件" aria-hidden="true">#</a> 定义条件</h3>
<p>定义条件就是给MySQL中的错误码命名，这有助于存储的程序代码更清晰。它将一个<code v-pre>错误名字</code>和<code v-pre>指定的错误条件</code>关联起来。这个名字可以随后被用在定义处理程序的<code v-pre>DECLARE HANDLER</code>语句中。</p>
<p>定义条件使用DECLARE语句，语法格式如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DECLARE 错误名称 CONDITION FOR 错误码（或错误条件）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>错误码的说明：</p>
<ul>
<li><code v-pre>MySQL_error_code</code>和<code v-pre>sqlstate_value</code>都可以表示MySQL的错误。
<ul>
<li>MySQL_error_code是数值类型错误代码。</li>
<li>sqlstate_value是长度为5的字符串类型错误代码。</li>
</ul>
</li>
<li>例如，在ERROR 1418 (HY000)中，1418是MySQL_error_code，'HY000'是sqlstate_value。</li>
<li>例如，在ERROR 1142（42000）中，1142是MySQL_error_code，'42000'是sqlstate_value。</li>
</ul>
<h3 id="定义处理程序" tabindex="-1"><a class="header-anchor" href="#定义处理程序" aria-hidden="true">#</a> 定义处理程序</h3>
<p>可以为SQL执行过程中发生的某种类型的错误定义特殊的处理程序。定义处理程序时，使用DECLARE语句的语法如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DECLARE 处理方式 HANDLER FOR 错误类型 处理语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>处理方式</strong>：处理方式有3个取值：CONTINUE、EXIT、UNDO。
<ul>
<li><code v-pre>CONTINUE</code>：表示遇到错误不处理，继续执行。</li>
<li><code v-pre>EXIT</code>：表示遇到错误马上退出。</li>
<li><code v-pre>UNDO</code>：表示遇到错误后撤回之前的操作。MySQL中暂时不支持这样的操作。</li>
</ul>
</li>
<li><strong>错误类型</strong>（即条件）可以有如下取值：
<ul>
<li><code v-pre>SQLSTATE '字符串错误码'</code>：表示长度为5的sqlstate_value类型的错误代码；</li>
<li><code v-pre>MySQL_error_code</code>：匹配数值类型错误代码；</li>
<li><code v-pre>错误名称</code>：表示DECLARE ... CONDITION定义的错误条件名称。</li>
<li><code v-pre>SQLWARNING</code>：匹配所有以01开头的SQLSTATE错误代码；</li>
<li><code v-pre>NOT FOUND</code>：匹配所有以02开头的SQLSTATE错误代码；</li>
<li><code v-pre>SQLEXCEPTION</code>：匹配所有没有被SQLWARNING或NOT FOUND捕获的SQLSTATE错误代码；</li>
</ul>
</li>
<li><strong>处理语句</strong>：如果出现上述条件之一，则采用对应的处理方式，并执行指定的处理语句。语句可以是像“<code v-pre>SET 变量 = 值</code>”这样的简单语句，也可以是使用<code v-pre>BEGIN ... END</code>编写的复合语句。</li>
</ul>
<p>定义处理程序的几种方式，代码如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#方法1：捕获sqlstate_value
DECLARE CONTINUE HANDLER FOR SQLSTATE '42S02' SET @info = 'NO_SUCH_TABLE';

#方法2：捕获mysql_error_value
DECLARE CONTINUE HANDLER FOR 1146 SET @info = 'NO_SUCH_TABLE';

#方法3：先定义条件，再调用
DECLARE no_such_table CONDITION FOR 1146;
DECLARE CONTINUE HANDLER FOR NO_SUCH_TABLE SET @info = 'NO_SUCH_TABLE';

#方法4：使用SQLWARNING
DECLARE EXIT HANDLER FOR SQLWARNING SET @info = 'ERROR';

#方法5：使用NOT FOUND
DECLARE EXIT HANDLER FOR NOT FOUND SET @info = 'NO_SUCH_TABLE';

#方法6：使用SQLEXCEPTION
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET @info = 'ERROR';
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h2>
<p>解决复杂问题不可能通过一个 SQL 语句完成，我们需要执行多个 SQL 操作。流程控制语句的作用就是控制存储过程中 SQL 语句的执行顺序，是我们完成复杂操作必不可少的一部分。只要是执行的程序，流程就分为三大类：</p>
<ul>
<li><code v-pre>顺序结构</code>：程序从上往下依次执行</li>
<li><code v-pre>分支结构</code>：程序按条件进行选择执行，从两条或多条路径中选择一条执行</li>
<li><code v-pre>循环结构</code>：程序满足一定条件下，重复执行一组语句</li>
</ul>
<p>针对于MySQL 的流程控制语句主要有 3 类。注意：只能用于存储程序。</p>
<ul>
<li><code v-pre>条件判断语句</code>：IF 语句和 CASE 语句</li>
<li><code v-pre>循环语句</code>：LOOP、WHILE 和 REPEAT 语句</li>
<li><code v-pre>跳转语句</code>：ITERATE 和 LEAVE 语句</li>
</ul>
<h3 id="分支结构之-if" tabindex="-1"><a class="header-anchor" href="#分支结构之-if" aria-hidden="true">#</a> 分支结构之 IF</h3>
<ul>
<li>IF 语句的语法结构是：</li>
</ul>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>IF 表达式1 THEN 操作1
[ELSEIF 表达式2 THEN 操作2]……
[ELSE 操作N]
END IF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据表达式的结果为TRUE或FALSE执行相应的语句。这里“[]”中的内容是可选的。</p>
<ul>
<li>特点：① 不同的表达式对应不同的操作 ② 使用在begin end中</li>
</ul>
<h3 id="分支结构之-case" tabindex="-1"><a class="header-anchor" href="#分支结构之-case" aria-hidden="true">#</a> 分支结构之 CASE</h3>
<p>CASE 语句的语法结构1：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#情况一：类似于switch
CASE 表达式
WHEN 值1 THEN 结果1或语句1(如果是语句，需要加分号) 
WHEN 值2 THEN 结果2或语句2(如果是语句，需要加分号)
...
ELSE 结果n或语句n(如果是语句，需要加分号)
END [case]（如果是放在begin end中需要加上case，如果放在select后面不需要）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CASE 语句的语法结构2：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>#情况二：类似于多重if
CASE 
WHEN 条件1 THEN 结果1或语句1(如果是语句，需要加分号) 
WHEN 条件2 THEN 结果2或语句2(如果是语句，需要加分号)
...
ELSE 结果n或语句n(如果是语句，需要加分号)
END [case]（如果是放在begin end中需要加上case，如果放在select后面不需要）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环结构之loop" tabindex="-1"><a class="header-anchor" href="#循环结构之loop" aria-hidden="true">#</a> 循环结构之LOOP</h3>
<p>LOOP循环语句用来重复执行某些语句。LOOP内的语句一直重复执行直到循环被退出（使用LEAVE子句），跳出循环过程。</p>
<p>LOOP语句的基本格式如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>[loop_label:] LOOP
	循环执行的语句
END LOOP [loop_label]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，loop_label表示LOOP语句的标注名称，该参数可以省略。</p>
<h3 id="循环结构之while" tabindex="-1"><a class="header-anchor" href="#循环结构之while" aria-hidden="true">#</a> 循环结构之WHILE</h3>
<p>WHILE语句创建一个带条件判断的循环过程。WHILE在执行语句执行时，先对指定的表达式进行判断，如果为真，就执行循环内的语句，否则退出循环。WHILE语句的基本格式如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>[while_label:] WHILE 循环条件  DO
	循环体
END WHILE [while_label];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>while_label为WHILE语句的标注名称；如果循环条件结果为真，WHILE语句内的语句或语句群被执行，直至循环条件为假，退出循环。</p>
<h3 id="循环结构之repeat" tabindex="-1"><a class="header-anchor" href="#循环结构之repeat" aria-hidden="true">#</a> 循环结构之REPEAT</h3>
<p>REPEAT语句创建一个带条件判断的循环过程。与WHILE循环不同的是，REPEAT 循环首先会执行一次循环，然后在 UNTIL 中进行表达式的判断，如果满足条件就退出，即 END REPEAT；如果条件不满足，则会就继续执行循环，直到满足退出条件为止。</p>
<p>REPEAT语句的基本格式如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>[repeat_label:] REPEAT
　　　　循环体的语句
UNTIL 结束循环的条件表达式
END REPEAT [repeat_label]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>repeat_label为REPEAT语句的标注名称，该参数可以省略；REPEAT语句内的语句或语句群被重复，直至expr_condition为真。</p>
<p><strong>对比三种循环结构：</strong></p>
<p>1、这三种循环都可以省略名称，但如果循环中添加了循环控制语句（LEAVE或ITERATE）则必须添加名称。
2、
LOOP：一般用于实现简单的&quot;死&quot;循环
WHILE：先判断后执行
REPEAT：先执行后判断，无条件至少执行一次</p>
<h3 id="跳转语句之leave语句" tabindex="-1"><a class="header-anchor" href="#跳转语句之leave语句" aria-hidden="true">#</a> 跳转语句之LEAVE语句</h3>
<p>LEAVE语句：可以用在循环语句内，或者以 BEGIN 和 END 包裹起来的程序体内，表示跳出循环或者跳出程序体的操作。如果你有面向过程的编程语言的使用经验，你可以把 LEAVE 理解为 break。</p>
<p>基本格式如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>LEAVE 标记名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，label参数表示循环的标志。LEAVE和BEGIN ... END或循环一起被使用</p>
<h2 id="游标" tabindex="-1"><a class="header-anchor" href="#游标" aria-hidden="true">#</a> 游标</h2>
<h3 id="什么是游标-或光标" tabindex="-1"><a class="header-anchor" href="#什么是游标-或光标" aria-hidden="true">#</a> 什么是游标（或光标）</h3>
<p>虽然我们也可以通过筛选条件 WHERE 和 HAVING，或者是限定返回记录的关键字 LIMIT 返回一条记录，但是，却无法在结果集中像指针一样，向前定位一条记录、向后定位一条记录，或者是<code v-pre>随意定位到某一条记录</code>，并对记录的数据进行处理。</p>
<p>这个时候，就可以用到游标。游标，提供了一种灵活的操作方式，让我们能够对结果集中的每一条记录进行定位，并对指向的记录中的数据进行操作的数据结构。<strong>游标让 SQL 这种面向集合的语言有了面向过程开发的能力。</strong></p>
<p>在 SQL 中，游标是一种临时的数据库对象，可以指向存储在数据库表中的数据行指针。这里游标<code v-pre>充当了指针的作用</code>，我们可以通过操作游标来对数据行进行操作。</p>
<p>MySQL中游标可以在存储过程和函数中使用。</p>
<h3 id="使用游标步骤" tabindex="-1"><a class="header-anchor" href="#使用游标步骤" aria-hidden="true">#</a> 使用游标步骤</h3>
<p>游标必须在声明处理程序之前被声明，并且变量和条件还必须在声明游标或处理程序之前被声明。</p>
<p>如果我们想要使用游标，一般需要经历四个步骤。不同的 DBMS 中，使用游标的语法可能略有不同。</p>
<p><strong>第一步，声明游标</strong></p>
<p>在MySQL中，使用DECLARE关键字来声明游标，其语法的基本形式如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DECLARE cursor_name CURSOR FOR select_statement; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个语法适用于 MySQL，SQL Server，DB2 和 MariaDB。如果是用 Oracle 或者 PostgreSQL，需要写成：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DECLARE cursor_name CURSOR IS select_statement;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要使用 SELECT 语句来获取数据结果集，而此时还没有开始遍历数据，这里 select_statement 代表的是 SELECT 语句，返回一个用于创建游标的结果集。</p>
<p><strong>第二步，打开游标</strong></p>
<p>打开游标的语法如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>OPEN cursor_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当我们定义好游标之后，如果想要使用游标，必须先打开游标。打开游标的时候 SELECT 语句的查询结果集就会送到游标工作区，为后面游标的<code v-pre>逐条读取</code>结果集中的记录做准备。</p>
<p><strong>第三步，使用游标（从游标中取得数据）</strong></p>
<p>语法如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>FETCH cursor_name INTO var_name [, var_name] ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这句的作用是使用 cursor_name 这个游标来读取当前行，并且将数据保存到 var_name 这个变量中，游标指针指到下一行。如果游标读取的数据行有多个列名，则在 INTO 关键字后面赋值给多个变量名即可。</p>
<p>注意：var_name必须在声明游标之前就定义好。</p>
<blockquote>
<p>注意：<strong>游标的查询结果集中的字段数，必须跟 INTO 后面的变量数一致</strong>，否则，在存储过程执行的时候，MySQL 会提示错误</p>
</blockquote>
<p><strong>第四步，关闭游标</strong></p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CLOSE cursor_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有 OPEN 就会有 CLOSE，也就是打开和关闭游标。当我们使用完游标后需要关闭掉该游标。因为游标会<code v-pre>占用系统资源</code>，如果不及时关闭，<strong>游标会一直保持到存储过程结束</strong>，影响系统运行的效率。而关闭游标的操作，会释放游标占用的系统资源。</p>
<p>关闭游标之后，我们就不能再检索查询结果中的数据行，如果需要检索只能再次打开游标</p>
<h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3>
<p>游标是 MySQL 的一个重要的功能，为<code v-pre>逐条读取</code>结果集中的数据，提供了完美的解决方案。跟在应用层面实现相同的功能相比，游标可以在存储程序中使用，效率高，程序也更加简洁。</p>
<p>但同时也会带来一些性能问题，比如在使用游标的过程中，会对数据行进行<code v-pre>加锁</code>，这样在业务并发量大的时候，不仅会影响业务之间的效率，还会<code v-pre>消耗系统资源</code>，造成内存不足，这是因为游标是在内存中进行的处理。</p>
<p>建议：养成用完之后就关闭的习惯，这样才能提高系统的整体效率</p>
<h2 id="补充-mysql-8-0的新特性—全局变量的持久化" tabindex="-1"><a class="header-anchor" href="#补充-mysql-8-0的新特性—全局变量的持久化" aria-hidden="true">#</a> 补充：MySQL 8.0的新特性—全局变量的持久化</h2>
<p>在MySQL数据库中，全局变量可以通过SET GLOBAL语句来设置。例如，设置服务器语句超时的限制，可以通过设置系统变量max_execution_time来实现：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SET GLOBAL MAX_EXECUTION_TIME=2000;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用SET GLOBAL语句设置的变量值只会<code v-pre>临时生效</code>。<code v-pre>数据库重启</code>后，服务器又会从MySQL配置文件中读取变量的默认值。
MySQL 8.0版本新增了<code v-pre>SET PERSIST</code>命令。例如，设置服务器的最大连接数为1000：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SET PERSIST global max_connections = 1000;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MySQL会将该命令的配置保存到数据目录下的<code v-pre>mysqld-auto.cnf</code>文件中，下次启动时会读取该文件，用其中的配置来覆盖默认的配置文件。</p>
<hr>
<p>在实际开发中，我们经常会遇到这样的情况：有 2 个或者多个相互关联的表，如<code v-pre>商品信息</code>和<code v-pre>库存信息</code>分别存放在 2 个不同的数据表中，我们在添加一条新商品记录的时候，为了保证数据的完整性，必须同时在库存表中添加一条库存记录。</p>
<p>这样一来，我们就必须把这两个关联的操作步骤写到程序里面，而且要用<code v-pre>事务</code>包裹起来，确保这两个操作成为一个<code v-pre>原子操作</code>，要么全部执行，要么全部不执行。要是遇到特殊情况，可能还需要对数据进行手动维护，这样就很<code v-pre>容易忘记其中的一步</code>，导致数据缺失。</p>
<p>这个时候，咱们可以使用触发器。**你可以创建一个触发器，让商品信息数据的插入操作自动触发库存数据的插入操作。**这样一来，就不用担心因为忘记添加库存数据而导致的数据缺失了</p>
<h2 id="触发器概述" tabindex="-1"><a class="header-anchor" href="#触发器概述" aria-hidden="true">#</a> 触发器概述</h2>
<p>MySQL从<code v-pre>5.0.2</code>版本开始支持触发器。MySQL的触发器和存储过程一样，都是嵌入到MySQL服务器的一段程序。</p>
<p>触发器是由<code v-pre>事件来触发</code>某个操作，这些事件包括<code v-pre>INSERT</code>、<code v-pre>UPDATE</code>、<code v-pre>DELETE</code>事件。所谓事件就是指用户的动作或者触发某项行为。如果定义了触发程序，当数据库执行这些语句时候，就相当于事件发生了，就会<code v-pre>自动</code>激发触发器执行相应的操作。</p>
<p>当对数据表中的数据执行插入、更新和删除操作，需要自动执行一些数据库逻辑时，可以使用触发器来实现。</p>
<h2 id="触发器的创建" tabindex="-1"><a class="header-anchor" href="#触发器的创建" aria-hidden="true">#</a> 触发器的创建</h2>
<h3 id="创建触发器语法" tabindex="-1"><a class="header-anchor" href="#创建触发器语法" aria-hidden="true">#</a> 创建触发器语法</h3>
<p>创建触发器的语法结构是：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>CREATE TRIGGER 触发器名称 
{BEFORE|AFTER} {INSERT|UPDATE|DELETE} ON 表名 
FOR EACH ROW 
触发器执行的语句块;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p>
<ul>
<li>
<p><code v-pre>表名</code>：表示触发器监控的对象。</p>
</li>
<li>
<p><code v-pre>BEFORE|AFTER</code>：表示触发的时间。BEFORE 表示在事件之前触发；AFTER 表示在事件之后触发。</p>
</li>
<li>
<p><code v-pre>INSERT|UPDATE|DELETE</code>：表示触发的事件。</p>
<ul>
<li>INSERT 表示插入记录时触发；</li>
<li>UPDATE 表示更新记录时触发；</li>
<li>DELETE 表示删除记录时触发。</li>
</ul>
</li>
<li>
<p><code v-pre>触发器执行的语句块</code>：可以是单条SQL语句，也可以是由BEGIN…END结构组成的复合语句块。</p>
</li>
</ul>
<h2 id="查看、删除触发器" tabindex="-1"><a class="header-anchor" href="#查看、删除触发器" aria-hidden="true">#</a> 查看、删除触发器</h2>
<h3 id="查看触发器" tabindex="-1"><a class="header-anchor" href="#查看触发器" aria-hidden="true">#</a> 查看触发器</h3>
<p>查看触发器是查看数据库中已经存在的触发器的定义、状态和语法信息等。</p>
<p>方式1：查看当前数据库的所有触发器的定义</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SHOW TRIGGERS\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>方式2：查看当前数据库中某个触发器的定义</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SHOW CREATE TRIGGER 触发器名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>方式3：从系统库information_schema的TRIGGERS表中查询“salary_check_trigger”触发器的信息。</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT * FROM information_schema.TRIGGERS;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除触发器" tabindex="-1"><a class="header-anchor" href="#删除触发器" aria-hidden="true">#</a> 删除触发器</h3>
<p>触发器也是数据库对象，删除触发器也用DROP语句，语法格式如下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>DROP TRIGGER  IF EXISTS 触发器名称;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="触发器的优缺点" tabindex="-1"><a class="header-anchor" href="#触发器的优缺点" aria-hidden="true">#</a> 触发器的优缺点</h2>
<h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3>
<p><strong>1、触发器可以确保数据的完整性</strong>。</p>
<p>假设我们用<code v-pre>进货单头表</code>（demo.importhead）来保存进货单的总体信息，包括进货单编号、供货商编号、仓库编号、总计进货数量、总计进货金额和验收日期。</p>
<p><img src="https://s2.loli.net/2022/09/16/ICaiLwlZRHKYtJV.png" alt="image-20211010233336012.png" loading="lazy"></p>
<p>用<code v-pre>进货单明细表</code>（demo.importdetails）来保存进货商品的明细，包括进货单编号、商品编号、进货数量、进货价格和进货金额</p>
<p><img src="https://s2.loli.net/2022/09/16/2pxvlQqHbOcR1Tz.png" alt="image-20211010233344125.png" loading="lazy"></p>
<p>每当我们录入、删除和修改一条进货单明细数据的时候，进货单明细表里的数据就会发生变动。这个时候，在进货单头表中的总计数量和总计金额就必须重新计算，否则，进货单头表中的总计数量和总计金额就不等于进货单明细表中数量合计和金额合计了，这就是数据不一致。</p>
<p>为了解决这个问题，我们就可以使用触发器，<strong>规定每当进货单明细表有数据插入、修改和删除的操作时，自动触发 2 步操作：</strong></p>
<p>1）重新计算进货单明细表中的数量合计和金额合计；</p>
<p>2）用第一步中计算出来的值更新进货单头表中的合计数量与合计金额。</p>
<p>这样一来，进货单头表中的合计数量与合计金额的值，就始终与进货单明细表中计算出来的合计数量与合计金额的值相同，数据就是一致的，不会互相矛盾。</p>
<p><strong>2、触发器可以帮助我们记录操作日志。</strong></p>
<p>利用触发器，可以具体记录什么时间发生了什么。比如，记录修改会员储值金额的触发器，就是一个很好的例子。这对我们还原操作执行时的具体场景，更好地定位问题原因很有帮助。</p>
<p><strong>3、触发器还可以用在操作数据前，对数据进行合法性检查。</strong></p>
<p>比如，超市进货的时候，需要库管录入进货价格。但是，人为操作很容易犯错误，比如说在录入数量的时候，把条形码扫进去了；录入金额的时候，看串了行，录入的价格远超售价，导致账面上的巨亏……这些都可以通过触发器，在实际插入或者更新操作之前，对相应的数据进行检查，及时提示错误，防止错误数据进入系统。</p>
<h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3>
<p><strong>1、触发器最大的一个问题就是可读性差。</strong></p>
<p>因为触发器存储在数据库中，并且由事件驱动，这就意味着触发器有可能<code v-pre>不受应用层的控制</code>。这对系统维护是非常有挑战的。</p>
<p>比如，创建触发器用于修改会员储值操作。如果触发器中的操作出了问题，会导致会员储值金额更新失败。我用下面的代码演示一下：</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>mysql&gt; update demo.membermaster set memberdeposit=20 where memberid = 2;
ERROR 1054 (42S22): Unknown column 'aa' in 'field list'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果显示，系统提示错误，字段“aa”不存在。</p>
<p>这是因为，触发器中的数据插入操作多了一个字段，系统提示错误。可是，如果你不了解这个触发器，很可能会认为是更新语句本身的问题，或者是会员信息表的结构出了问题。说不定你还会给会员信息表添加一个叫“aa”的字段，试图解决这个问题，结果只能是白费力。</p>
<p><strong>2、相关数据的变更，可能会导致触发器出错。</strong></p>
<p>特别是数据表结构的变更，都可能会导致触发器出错，进而影响数据操作的正常运行。这些都会由于触发器本身的隐蔽性，影响到应用中错误原因排查的效率。</p>
<h3 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h3>
<p>注意，如果在子表中定义了外键约束，并且外键指定了ON UPDATE/DELETE CASCADE/SET NULL子句，此时修改父表被引用的键值或删除父表被引用的记录行时，也会引起子表的修改和删除操作，此时基于子表的UPDATE和DELETE语句定义的触发器并不会被激活。</p>
<p>例如：基于子表员工表（t_employee）的DELETE语句定义了触发器t1，而子表的部门编号（did）字段定义了外键约束引用了父表部门表（t_department）的主键列部门编号（did），并且该外键加了“ON DELETE SET NULL”子句，那么如果此时删除父表部门表（t_department）在子表员工表（t_employee）有匹配记录的部门记录时，会引起子表员工表（t_employee）匹配记录的部门编号（did）修改为NULL，但是此时不会激活触发器t1。只有直接对子表员工表（t_employee）执行DELETE语句时才会激活触发器t1。</p>
</div></template>
