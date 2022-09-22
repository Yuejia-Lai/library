<template><div><div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p><strong>DBMS 之间的差异性很大，远大于同一个语言不同版本之间的差异。<strong>实际上，只有很少的函数是被 DBMS 同时支持的。比如，大多数 DBMS 使用（||）或者（+）来做拼接符，而在 MySQL 中的字符串拼接函数为concat()。大部分 DBMS 会有自己特定的函数，这就意味着</strong>采用 SQL 函数的代码可移植性是很差的</strong>，因此在使用函数的时候需要特别注意</p>
</div>
<p>MySQL提供的内置函数从<code v-pre>实现的功能角度</code>可以分为数值函数、字符串函数、日期和时间函数、流程控制函数、加密与解密函数、获取MySQL信息函数、聚合函数等。这里，我将这些丰富的内置函数再分为两类：<code v-pre>单行函数</code>、<code v-pre>聚合函数（或分组函数）</code></p>
<h2 id="数值函数" tabindex="-1"><a class="header-anchor" href="#数值函数" aria-hidden="true">#</a> 数值函数</h2>
<h3 id="基本函数" tabindex="-1"><a class="header-anchor" href="#基本函数" aria-hidden="true">#</a> 基本函数</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>ABS(x)</td>
<td>返回x的绝对值</td>
</tr>
<tr>
<td>SIGN(X)</td>
<td>返回X的符号。正数返回1，负数返回-1，0返回0</td>
</tr>
<tr>
<td>PI()</td>
<td>返回圆周率的值</td>
</tr>
<tr>
<td>CEIL(x)，CEILING(x)</td>
<td>返回大于或等于某个值的最小整数</td>
</tr>
<tr>
<td>FLOOR(x)</td>
<td>返回小于或等于某个值的最大整数</td>
</tr>
<tr>
<td>LEAST(e1,e2,e3…)</td>
<td>返回列表中的最小值</td>
</tr>
<tr>
<td>GREATEST(e1,e2,e3…)</td>
<td>返回列表中的最大值</td>
</tr>
<tr>
<td>MOD(x,y)</td>
<td>返回X除以Y后的余数</td>
</tr>
<tr>
<td>RAND()</td>
<td>返回0~1的随机值</td>
</tr>
<tr>
<td>RAND(x)</td>
<td>返回0~1的随机值，其中x的值用作种子值，相同的X值会产生相同的随机数</td>
</tr>
<tr>
<td>ROUND(x)</td>
<td>返回一个对x的值进行四舍五入后，最接近于X的整数</td>
</tr>
<tr>
<td>ROUND(x,y)</td>
<td>返回一个对x的值进行四舍五入后最接近X的值，并保留到小数点后面Y位</td>
</tr>
<tr>
<td>TRUNCATE(x,y)</td>
<td>返回数字x截断为y位小数的结果</td>
</tr>
<tr>
<td>SQRT(x)</td>
<td>返回x的平方根。当X的值为负数时，返回NULL</td>
</tr>
</tbody>
</table>
<h3 id="角度与弧度互换函数" tabindex="-1"><a class="header-anchor" href="#角度与弧度互换函数" aria-hidden="true">#</a> 角度与弧度互换函数</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>RADIANS(x)</td>
<td>将角度转化为弧度，其中，参数x为角度值</td>
</tr>
<tr>
<td>DEGREES(x)</td>
<td>将弧度转化为角度，其中，参数x为弧度值</td>
</tr>
</tbody>
</table>
<h3 id="三角函数" tabindex="-1"><a class="header-anchor" href="#三角函数" aria-hidden="true">#</a> 三角函数</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>SIN(x)</td>
<td>返回x的正弦值，其中，参数x为弧度值</td>
</tr>
<tr>
<td>ASIN(x)</td>
<td>返回x的反正弦值，即获取正弦为x的值。如果x的值不在-1到1之间，则返回NULL</td>
</tr>
<tr>
<td>COS(x)</td>
<td>返回x的余弦值，其中，参数x为弧度值</td>
</tr>
<tr>
<td>ACOS(x)</td>
<td>返回x的反余弦值，即获取余弦为x的值。如果x的值不在-1到1之间，则返回NULL</td>
</tr>
<tr>
<td>TAN(x)</td>
<td>返回x的正切值，其中，参数x为弧度值</td>
</tr>
<tr>
<td>ATAN(x)</td>
<td>返回x的反正切值，即返回正切值为x的值</td>
</tr>
<tr>
<td>ATAN2(m,n)</td>
<td>返回两个参数的反正切值</td>
</tr>
<tr>
<td>COT(x)</td>
<td>返回x的余切值，其中，X为弧度值</td>
</tr>
</tbody>
</table>
<h3 id="指数与对数" tabindex="-1"><a class="header-anchor" href="#指数与对数" aria-hidden="true">#</a> 指数与对数</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>POW(x,y)，POWER(X,Y)</td>
<td>返回x的y次方</td>
</tr>
<tr>
<td>EXP(X)</td>
<td>返回e的X次方，其中e是一个常数，2.718281828459045</td>
</tr>
<tr>
<td>LN(X)，LOG(X)</td>
<td>返回以e为底的X的对数，当X &lt;= 0 时，返回的结果为NULL</td>
</tr>
<tr>
<td>LOG10(X)</td>
<td>返回以10为底的X的对数，当X &lt;= 0 时，返回的结果为NULL</td>
</tr>
<tr>
<td>LOG2(X)</td>
<td>返回以2为底的X的对数，当X &lt;= 0 时，返回NULL</td>
</tr>
</tbody>
</table>
<h3 id="进制间的转换" tabindex="-1"><a class="header-anchor" href="#进制间的转换" aria-hidden="true">#</a> 进制间的转换</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>BIN(x)</td>
<td>返回x的二进制编码</td>
</tr>
<tr>
<td>HEX(x)</td>
<td>返回x的十六进制编码</td>
</tr>
<tr>
<td>OCT(x)</td>
<td>返回x的八进制编码</td>
</tr>
<tr>
<td>CONV(x,f1,f2)</td>
<td>返回f1进制数变成f2进制数</td>
</tr>
</tbody>
</table>
<h2 id="字符串函数" tabindex="-1"><a class="header-anchor" href="#字符串函数" aria-hidden="true">#</a> 字符串函数</h2>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>ASCII(S)</td>
<td>返回字符串S中的第一个字符的ASCII码值</td>
</tr>
<tr>
<td>CHAR_LENGTH(s)</td>
<td>返回字符串s的字符数。作用与CHARACTER_LENGTH(s)相同</td>
</tr>
<tr>
<td>LENGTH(s)</td>
<td>返回字符串s的字节数，和字符集有关</td>
</tr>
<tr>
<td>CONCAT(s1,s2,......,sn)</td>
<td>连接s1,s2,......,sn为一个字符串</td>
</tr>
<tr>
<td>CONCAT_WS(x, s1,s2,......,sn)</td>
<td>同CONCAT(s1,s2,...)函数，但是每个字符串之间要加上x</td>
</tr>
<tr>
<td>INSERT(str, idx, len, replacestr)</td>
<td>将字符串str从第idx位置开始，len个字符长的子串替换为字符串replacestr</td>
</tr>
<tr>
<td>REPLACE(str, a, b)</td>
<td>用字符串b替换字符串str中所有出现的字符串a</td>
</tr>
<tr>
<td>UPPER(s) 或 UCASE(s)</td>
<td>将字符串s的所有字母转成大写字母</td>
</tr>
<tr>
<td>LOWER(s)  或LCASE(s)</td>
<td>将字符串s的所有字母转成小写字母</td>
</tr>
<tr>
<td>LEFT(str,n)</td>
<td>返回字符串str最左边的n个字符</td>
</tr>
<tr>
<td>RIGHT(str,n)</td>
<td>返回字符串str最右边的n个字符</td>
</tr>
<tr>
<td>LPAD(str, len, pad)</td>
<td>用字符串pad对str最左边进行填充，直到str的长度为len个字符</td>
</tr>
<tr>
<td>RPAD(str ,len, pad)</td>
<td>用字符串pad对str最右边进行填充，直到str的长度为len个字符</td>
</tr>
<tr>
<td>LTRIM(s)</td>
<td>去掉字符串s左侧的空格</td>
</tr>
<tr>
<td>RTRIM(s)</td>
<td>去掉字符串s右侧的空格</td>
</tr>
<tr>
<td>TRIM(s)</td>
<td>去掉字符串s开始与结尾的空格</td>
</tr>
<tr>
<td>TRIM(s1 FROM s)</td>
<td>去掉字符串s开始与结尾的s1</td>
</tr>
<tr>
<td>TRIM(LEADING s1 FROM s)</td>
<td>去掉字符串s开始处的s1</td>
</tr>
<tr>
<td>TRIM(TRAILING s1 FROM s)</td>
<td>去掉字符串s结尾处的s1</td>
</tr>
<tr>
<td>REPEAT(str, n)</td>
<td>返回str重复n次的结果</td>
</tr>
<tr>
<td>SPACE(n)</td>
<td>返回n个空格</td>
</tr>
<tr>
<td>STRCMP(s1,s2)</td>
<td>比较字符串s1,s2的ASCII码值的大小</td>
</tr>
<tr>
<td>SUBSTR(s,index,len)</td>
<td>返回从字符串s的index位置其len个字符，作用与SUBSTRING(s,n,len)、MID(s,n,len)相同</td>
</tr>
<tr>
<td>LOCATE(substr,str)</td>
<td>返回字符串substr在字符串str中首次出现的位置，作用于POSITION(substr IN str)、INSTR(str,substr)相同。未找到，返回0</td>
</tr>
<tr>
<td>ELT(m,s1,s2,…,sn)</td>
<td>返回指定位置的字符串，如果m=1，则返回s1，如果m=2，则返回s2，如果m=n，则返回sn</td>
</tr>
<tr>
<td>FIELD(s,s1,s2,…,sn)</td>
<td>返回字符串s在字符串列表中第一次出现的位置</td>
</tr>
<tr>
<td>FIND_IN_SET(s1,s2)</td>
<td>返回字符串s1在字符串s2中出现的位置。其中，字符串s2是一个以逗号分隔的字符串</td>
</tr>
<tr>
<td>REVERSE(s)</td>
<td>返回s反转后的字符串</td>
</tr>
<tr>
<td>NULLIF(value1,value2)</td>
<td>比较两个字符串，如果value1与value2相等，则返回NULL，否则返回value1</td>
</tr>
</tbody>
</table>
<blockquote>
<p>注意：MySQL中，字符串的位置是从1开始的</p>
</blockquote>
<h2 id="日期和时间函数" tabindex="-1"><a class="header-anchor" href="#日期和时间函数" aria-hidden="true">#</a> 日期和时间函数</h2>
<h3 id="获取日期、时间" tabindex="-1"><a class="header-anchor" href="#获取日期、时间" aria-hidden="true">#</a> 获取日期、时间</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>CURDATE()</strong> ，CURRENT_DATE()</td>
<td>返回当前日期，只包含年、月、日</td>
</tr>
<tr>
<td><strong>CURTIME()</strong> ， CURRENT_TIME()</td>
<td>返回当前时间，只包含时、分、秒</td>
</tr>
<tr>
<td><strong>NOW()</strong> / SYSDATE() / CURRENT_TIMESTAMP() / LOCALTIME() / LOCALTIMESTAMP()</td>
<td>返回当前系统日期和时间</td>
</tr>
<tr>
<td>UTC_DATE()</td>
<td>返回UTC（世界标准时间）日期</td>
</tr>
<tr>
<td>UTC_TIME()</td>
<td>返回UTC（世界标准时间）时间</td>
</tr>
</tbody>
</table>
<h3 id="日期与时间戳的转换" tabindex="-1"><a class="header-anchor" href="#日期与时间戳的转换" aria-hidden="true">#</a> 日期与时间戳的转换</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>UNIX_TIMESTAMP()</td>
<td>以UNIX时间戳的形式返回当前时间。SELECT UNIX_TIMESTAMP() -&gt;1634348884</td>
</tr>
<tr>
<td>UNIX_TIMESTAMP(date)</td>
<td>将时间date以UNIX时间戳的形式返回。</td>
</tr>
<tr>
<td>FROM_UNIXTIME(timestamp)</td>
<td>将UNIX时间戳的时间转换为普通格式的时间</td>
</tr>
</tbody>
</table>
<h3 id="获取月份、星期、星期数、天数等函数" tabindex="-1"><a class="header-anchor" href="#获取月份、星期、星期数、天数等函数" aria-hidden="true">#</a> 获取月份、星期、星期数、天数等函数</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>YEAR(date) / MONTH(date) / DAY(date)</td>
<td>返回具体的日期值</td>
</tr>
<tr>
<td>HOUR(time) / MINUTE(time) / SECOND(time)</td>
<td>返回具体的时间值</td>
</tr>
<tr>
<td>MONTHNAME(date)</td>
<td>返回月份：January，...</td>
</tr>
<tr>
<td>DAYNAME(date)</td>
<td>返回星期几：MONDAY，TUESDAY.....SUNDAY</td>
</tr>
<tr>
<td>WEEKDAY(date)</td>
<td>返回周几，注意，周1是0，周2是1，。。。周日是6</td>
</tr>
<tr>
<td>QUARTER(date)</td>
<td>返回日期对应的季度，范围为1～4</td>
</tr>
<tr>
<td>WEEK(date) ， WEEKOFYEAR(date)</td>
<td>返回一年中的第几周</td>
</tr>
<tr>
<td>DAYOFYEAR(date)</td>
<td>返回日期是一年中的第几天</td>
</tr>
<tr>
<td>DAYOFMONTH(date)</td>
<td>返回日期位于所在月份的第几天</td>
</tr>
<tr>
<td>DAYOFWEEK(date)</td>
<td>返回周几，注意：周日是1，周一是2，。。。周六是7</td>
</tr>
</tbody>
</table>
<h3 id="日期的操作函数" tabindex="-1"><a class="header-anchor" href="#日期的操作函数" aria-hidden="true">#</a> 日期的操作函数</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>EXTRACT(type FROM date)</td>
<td>返回指定日期中特定的部分，type指定返回的值</td>
</tr>
</tbody>
</table>
<p>EXTRACT(type FROM date)函数中type的取值与含义：</p>
<p><img src="https://s2.loli.net/2022/09/13/KSQMo6FVNBpHcLR.png" alt="image-20211012142639469.png" loading="lazy"></p>
<p><img src="https://s2.loli.net/2022/09/13/t2UVne65ZIwfLCK.png" alt="image-20211012142746444.png" loading="lazy"></p>
<h3 id="时间和秒钟转换的函数" tabindex="-1"><a class="header-anchor" href="#时间和秒钟转换的函数" aria-hidden="true">#</a> 时间和秒钟转换的函数</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>TIME_TO_SEC(time)</td>
<td>将 time 转化为秒并返回结果值。转化的公式为：<code v-pre>小时*3600+分钟*60+秒</code></td>
</tr>
<tr>
<td>SEC_TO_TIME(seconds)</td>
<td>将 seconds 描述转化为包含小时、分钟和秒的时间</td>
</tr>
</tbody>
</table>
<h3 id="计算日期和时间的函数" tabindex="-1"><a class="header-anchor" href="#计算日期和时间的函数" aria-hidden="true">#</a> 计算日期和时间的函数</h3>
<p><strong>第1组：</strong></p>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>DATE_ADD(datetime, INTERVAL  expr type)，ADDDATE(date,INTERVAL expr type)</td>
<td>返回与给定日期时间相差INTERVAL时间段的日期时间</td>
</tr>
<tr>
<td>DATE_SUB(date,INTERVAL expr type)，SUBDATE(date,INTERVAL expr type)</td>
<td>返回与date相差INTERVAL时间间隔的日期</td>
</tr>
</tbody>
</table>
<p>上述函数中type的取值：</p>
<p><img src="https://s2.loli.net/2022/09/13/yCjaFUTG62LdqeV.png" alt="image-20211012143203355.png" loading="lazy"></p>
<p><strong>第2组：</strong></p>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>ADDTIME(time1,time2)</td>
<td>返回time1加上time2的时间。当time2为一个数字时，代表的是<code v-pre>秒</code>，可以为负数</td>
</tr>
<tr>
<td>SUBTIME(time1,time2)</td>
<td>返回time1减去time2后的时间。当time2为一个数字时，代表的是<code v-pre>秒</code>，可以为负数</td>
</tr>
<tr>
<td>DATEDIFF(date1,date2)</td>
<td>返回date1 - date2的日期间隔天数</td>
</tr>
<tr>
<td>TIMEDIFF(time1, time2)</td>
<td>返回time1 - time2的时间间隔</td>
</tr>
<tr>
<td>FROM_DAYS(N)</td>
<td>返回从0000年1月1日起，N天以后的日期</td>
</tr>
<tr>
<td>TO_DAYS(date)</td>
<td>返回日期date距离0000年1月1日的天数</td>
</tr>
<tr>
<td>LAST_DAY(date)</td>
<td>返回date所在月份的最后一天的日期</td>
</tr>
<tr>
<td>MAKEDATE(year,n)</td>
<td>针对给定年份与所在年份中的天数返回一个日期</td>
</tr>
<tr>
<td>MAKETIME(hour,minute,second)</td>
<td>将给定的小时、分钟和秒组合成时间并返回</td>
</tr>
<tr>
<td>PERIOD_ADD(time,n)</td>
<td>返回time加上n后的时间</td>
</tr>
</tbody>
</table>
<h3 id="日期的格式化与解析" tabindex="-1"><a class="header-anchor" href="#日期的格式化与解析" aria-hidden="true">#</a> 日期的格式化与解析</h3>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>DATE_FORMAT(date,fmt)</td>
<td>按照字符串fmt格式化日期date值</td>
</tr>
<tr>
<td>TIME_FORMAT(time,fmt)</td>
<td>按照字符串fmt格式化时间time值</td>
</tr>
<tr>
<td>GET_FORMAT(date_type,format_type)</td>
<td>返回日期字符串的显示格式</td>
</tr>
<tr>
<td>STR_TO_DATE(str, fmt)</td>
<td>按照字符串fmt对str进行解析，解析为一个日期</td>
</tr>
</tbody>
</table>
<p>上述<code v-pre>非GET_FORMAT</code>函数中fmt参数常用的格式符：</p>
<table>
<thead>
<tr>
<th>格式符</th>
<th>说明</th>
<th>格式符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>%Y</td>
<td>4位数字表示年份</td>
<td>%y</td>
<td>表示两位数字表示年份</td>
</tr>
<tr>
<td>%M</td>
<td>月名表示月份（January,....）</td>
<td>%m</td>
<td>两位数字表示月份（01,02,03。。。）</td>
</tr>
<tr>
<td>%b</td>
<td>缩写的月名（Jan.，Feb.，....）</td>
<td>%c</td>
<td>数字表示月份（1,2,3,...）</td>
</tr>
<tr>
<td>%D</td>
<td>英文后缀表示月中的天数（1st,2nd,3rd,...）</td>
<td>%d</td>
<td>两位数字表示月中的天数(01,02...)</td>
</tr>
<tr>
<td>%e</td>
<td>数字形式表示月中的天数（1,2,3,4,5.....）</td>
<td></td>
<td></td>
</tr>
<tr>
<td>%H</td>
<td>两位数字表示小数，24小时制（01,02..）</td>
<td>%h和%I</td>
<td>两位数字表示小时，12小时制（01,02..）</td>
</tr>
<tr>
<td>%k</td>
<td>数字形式的小时，24小时制(1,2,3)</td>
<td>%l</td>
<td>数字形式表示小时，12小时制（1,2,3,4....）</td>
</tr>
<tr>
<td>%i</td>
<td>两位数字表示分钟（00,01,02）</td>
<td>%S和%s</td>
<td>两位数字表示秒(00,01,02...)</td>
</tr>
<tr>
<td>%W</td>
<td>一周中的星期名称（Sunday...）</td>
<td>%a</td>
<td>一周中的星期缩写（Sun.，Mon.,Tues.，..）</td>
</tr>
<tr>
<td>%w</td>
<td>以数字表示周中的天数(0=Sunday,1=Monday....)</td>
<td></td>
<td></td>
</tr>
<tr>
<td>%j</td>
<td>以3位数字表示年中的天数(001,002...)</td>
<td>%U</td>
<td>以数字表示年中的第几周，（1,2,3。。）其中Sunday为周中第一天</td>
</tr>
<tr>
<td>%u</td>
<td>以数字表示年中的第几周，（1,2,3。。）其中Monday为周中第一天</td>
<td></td>
<td></td>
</tr>
<tr>
<td>%T</td>
<td>24小时制</td>
<td>%r</td>
<td>12小时制</td>
</tr>
<tr>
<td>%p</td>
<td>AM或PM</td>
<td>%%</td>
<td>表示%</td>
</tr>
</tbody>
</table>
<p>GET_FORMAT函数中date_type和format_type参数取值如下：</p>
<p><img src="https://s2.loli.net/2022/09/13/1wYrzOsTiC4BbPI.png" alt="image-20211012145231321.png" loading="lazy"></p>
<h2 id="流程控制函数" tabindex="-1"><a class="header-anchor" href="#流程控制函数" aria-hidden="true">#</a> 流程控制函数</h2>
<p>流程处理函数可以根据不同的条件，执行不同的处理流程，可以在SQL语句中实现不同的条件选择。MySQL中的流程处理函数主要包括IF()、IFNULL()和CASE()函数</p>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>IF(value,value1,value2)</td>
<td>如果value的值为TRUE，返回value1，否则返回value2</td>
</tr>
<tr>
<td>IFNULL(value1, value2)</td>
<td>如果value1不为NULL，返回value1，否则返回value2</td>
</tr>
<tr>
<td>CASE WHEN 条件1 THEN 结果1 WHEN 条件2 THEN 结果2 .... [ELSE resultn] END</td>
<td>相当于Java的if...else if...else...</td>
</tr>
<tr>
<td>CASE  expr WHEN 常量值1 THEN 值1 WHEN 常量值1 THEN 值1 .... [ELSE 值n] END</td>
<td>相当于Java的switch...case...</td>
</tr>
</tbody>
</table>
<h2 id="加密与解密函数" tabindex="-1"><a class="header-anchor" href="#加密与解密函数" aria-hidden="true">#</a> 加密与解密函数</h2>
<p>加密与解密函数主要用于对数据库中的数据进行加密和解密处理，以防止数据被他人窃取。这些函数在保证数据库安全时非常有用</p>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>PASSWORD(str)</td>
<td>返回字符串str的加密版本，41位长的字符串。加密结果<code v-pre>不可逆</code>，常用于用户的密码加密</td>
</tr>
<tr>
<td>MD5(str)</td>
<td>返回字符串str的md5加密后的值，也是一种加密方式。若参数为NULL，则会返回NULL</td>
</tr>
<tr>
<td>SHA(str)</td>
<td>从原明文密码str计算并返回加密后的密码字符串，当参数为NULL时，返回NULL。<code v-pre>SHA加密算法比MD5更加安全</code>。</td>
</tr>
<tr>
<td>ENCODE(value,password_seed)</td>
<td>返回使用password_seed作为加密密码加密value</td>
</tr>
<tr>
<td>DECODE(value,password_seed)</td>
<td>返回使用password_seed作为加密密码解密value</td>
</tr>
</tbody>
</table>
<h2 id="mysql信息函数" tabindex="-1"><a class="header-anchor" href="#mysql信息函数" aria-hidden="true">#</a> MySQL信息函数</h2>
<p>MySQL中内置了一些可以查询MySQL信息的函数，这些函数主要用于帮助数据库开发或运维人员更好地对数据库进行维护工作</p>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>VERSION()</td>
<td>返回当前MySQL的版本号</td>
</tr>
<tr>
<td>CONNECTION_ID()</td>
<td>返回当前MySQL服务器的连接数</td>
</tr>
<tr>
<td>DATABASE()，SCHEMA()</td>
<td>返回MySQL命令行当前所在的数据库</td>
</tr>
<tr>
<td>USER()，CURRENT_USER()、SYSTEM_USER()，SESSION_USER()</td>
<td>返回当前连接MySQL的用户名，返回结果格式为“主机名@用户名”</td>
</tr>
<tr>
<td>CHARSET(value)</td>
<td>返回字符串value自变量的字符集</td>
</tr>
<tr>
<td>COLLATION(value)</td>
<td>返回字符串value的比较规则</td>
</tr>
</tbody>
</table>
<h2 id="其他函数" tabindex="-1"><a class="header-anchor" href="#其他函数" aria-hidden="true">#</a> 其他函数</h2>
<p>MySQL中有些函数无法对其进行具体的分类，但是这些函数在MySQL的开发和运维过程中也是不容忽视的</p>
<table>
<thead>
<tr>
<th>函数</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>FORMAT(value,n)</td>
<td>返回对数字value进行格式化后的结果数据。n表示<code v-pre>四舍五入</code>后保留到小数点后n位</td>
</tr>
<tr>
<td>CONV(value,from,to)</td>
<td>将value的值进行不同进制之间的转换</td>
</tr>
<tr>
<td>INET_ATON(ipvalue)</td>
<td>将以点分隔的IP地址转化为一个数字</td>
</tr>
<tr>
<td>INET_NTOA(value)</td>
<td>将数字形式的IP地址转化为以点分隔的IP地址</td>
</tr>
<tr>
<td>BENCHMARK(n,expr)</td>
<td>将表达式expr重复执行n次。用于测试MySQL处理expr表达式所耗费的时间</td>
</tr>
<tr>
<td>CONVERT(value USING char_code)</td>
<td>将value所使用的字符编码修改为char_code</td>
</tr>
</tbody>
</table>
<h2 id="聚合函数介绍" tabindex="-1"><a class="header-anchor" href="#聚合函数介绍" aria-hidden="true">#</a> 聚合函数介绍</h2>
<ul>
<li><strong>什么是聚合函数</strong></li>
</ul>
<p>聚合函数作用于一组数据，并对一组数据返回一个值</p>
<ul>
<li>
<p><strong>聚合函数类型</strong></p>
<ul>
<li><strong>AVG()</strong></li>
<li><strong>SUM()</strong></li>
<li><strong>MAX()</strong></li>
<li><strong>MIN()</strong></li>
<li>**COUNT() **</li>
</ul>
</li>
<li>
<p>聚合函数语法</p>
</li>
</ul>
<p><img src="https://s2.loli.net/2022/09/14/QSEnLq6Vl53vzFH.png" alt="1554981029920.png" loading="lazy"></p>
<ul>
<li>聚合函数不能嵌套调用。比如不能出现类似“AVG(SUM(字段名称))”形式的调用</li>
</ul>
<h3 id="avg和sum函数" tabindex="-1"><a class="header-anchor" href="#avg和sum函数" aria-hidden="true">#</a> AVG和SUM函数</h3>
<p>可以对<strong>数值型数据</strong>使用AVG 和 SUM 函数</p>
<h3 id="min和max函数" tabindex="-1"><a class="header-anchor" href="#min和max函数" aria-hidden="true">#</a> MIN和MAX函数</h3>
<p>可以对<strong>任意数据类型</strong>的数据使用 MIN 和 MAX 函数</p>
<h3 id="count函数" tabindex="-1"><a class="header-anchor" href="#count函数" aria-hidden="true">#</a> COUNT函数</h3>
<ul>
<li>
<p>COUNT(*)返回表中记录总数，适用于<strong>任意数据类型</strong></p>
</li>
<li>
<p><strong>问题：用count(*)，count(1)，count(列名)谁好呢?</strong></p>
<p>其实，对于MyISAM引擎的表是没有区别的。这种引擎内部有一计数器在维护着行数。</p>
<p>Innodb引擎的表用count(*),count(1)直接读行数，复杂度是O(n)，因为innodb真的要去数一遍。但好于具体的count(列名)。</p>
</li>
<li>
<p><strong>问题：能不能使用count(列名)替换count(*)?</strong></p>
<p>不要使用 count(列名)来替代 <code v-pre>count(*)</code>，<code v-pre>count(*)</code>是 SQL92 定义的标准统计行数的语法，跟数据库无关，跟 NULL 和非 NULL 无关。</p>
<p>说明：count(*)会统计值为 NULL 的行，而 count(列名)不会统计此列为 NULL 值的行</p>
</li>
</ul>
<h2 id="group-by" tabindex="-1"><a class="header-anchor" href="#group-by" aria-hidden="true">#</a> GROUP BY</h2>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<p><img src="https://s2.loli.net/2022/09/14/Js3qrXWOjYpV5hg.png" alt="1554981374920.png" loading="lazy"></p>
<p><strong>可以使用GROUP BY子句将表中的数据分成若干组</strong></p>
<blockquote>
<p><strong>明确：WHERE一定放在FROM后面</strong></p>
</blockquote>
<p><strong>在SELECT列表中所有未包含在组函数中的列都应该包含在 GROUP BY子句中</strong></p>
<p>包含在 GROUP BY 子句中的列不必包含在SELECT 列表中</p>
<h3 id="使用多个列分组" tabindex="-1"><a class="header-anchor" href="#使用多个列分组" aria-hidden="true">#</a> 使用多个列分组</h3>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT   department_id dept_id, job_id, SUM(salary)
FROM     employees
GROUP BY department_id, job_id ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="group-by中使用with-rollup" tabindex="-1"><a class="header-anchor" href="#group-by中使用with-rollup" aria-hidden="true">#</a> GROUP BY中使用WITH ROLLUP</h3>
<p>使用<code v-pre>WITH ROLLUP</code>关键字之后，在所有查询出的分组记录之后增加一条记录，该记录计算查询出的所有记录的总和，即统计记录数量</p>
<div class="language-mysql ext-mysql line-numbers-mode"><pre v-pre class="language-mysql"><code>SELECT department_id,AVG(salary)
FROM employees
WHERE department_id &gt; 80
GROUP BY department_id WITH ROLLUP;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：</p>
<p>当使用ROLLUP时，不能同时使用ORDER BY子句进行结果排序，即ROLLUP和ORDER BY是互相排斥的</p>
</blockquote>
<h2 id="having" tabindex="-1"><a class="header-anchor" href="#having" aria-hidden="true">#</a> HAVING</h2>
<h3 id="基本使用-1" tabindex="-1"><a class="header-anchor" href="#基本使用-1" aria-hidden="true">#</a> 基本使用</h3>
<p><strong>过滤分组：HAVING子句</strong></p>
<ol>
<li>行已经被分组。</li>
<li>使用了聚合函数。</li>
<li>满足HAVING 子句中条件的分组将被显示。</li>
<li>HAVING 不能单独使用，必须要跟 GROUP BY 一起使用</li>
</ol>
<blockquote>
<p>非法使用聚合函数 ： 不能在 WHERE 子句中使用聚合函数</p>
</blockquote>
<h3 id="where和having的对比" tabindex="-1"><a class="header-anchor" href="#where和having的对比" aria-hidden="true">#</a> WHERE和HAVING的对比</h3>
<p><strong>区别1：WHERE 可以直接使用表中的字段作为筛选条件，但不能使用分组中的计算函数作为筛选条件；HAVING 必须要与 GROUP BY 配合使用，可以把分组计算的函数和分组字段作为筛选条件。</strong></p>
<p>这决定了，在需要对数据进行分组统计的时候，HAVING 可以完成 WHERE 不能完成的任务。这是因为，在查询语法结构中，WHERE 在 GROUP BY 之前，所以无法对分组结果进行筛选。HAVING 在 GROUP BY 之后，可以使用分组字段和分组中的计算函数，对分组的结果集进行筛选，这个功能是 WHERE 无法完成的。另外，WHERE排除的记录不再包括在分组中。</p>
<p><strong>区别2：如果需要通过连接从关联表中获取需要的数据，WHERE 是先筛选后连接，而 HAVING 是先连接后筛选。</strong> 这一点，就决定了在关联查询中，WHERE 比 HAVING 更高效。因为 WHERE 可以先筛选，用一个筛选后的较小数据集和关联表进行连接，这样占用的资源比较少，执行效率也比较高。HAVING 则需要先把结果集准备好，也就是用未被筛选的数据集进行关联，然后对这个大的数据集进行筛选，这样占用的资源就比较多，执行效率也较低。</p>
<p>小结如下：</p>
<table>
<thead>
<tr>
<th></th>
<th>优点</th>
<th>缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td>WHERE</td>
<td>先筛选数据再关联，执行效率高</td>
<td>不能使用分组中的计算函数进行筛选</td>
</tr>
<tr>
<td>HAVING</td>
<td>可以使用分组中的计算函数</td>
<td>在最后的结果集中进行筛选，执行效率较低</td>
</tr>
</tbody>
</table>
<p><strong>开发中的选择：</strong></p>
<p>WHERE 和 HAVING 也不是互相排斥的，我们可以在一个查询里面同时使用 WHERE 和 HAVING。包含分组统计函数的条件用 HAVING，普通条件用 WHERE。这样，我们就既利用了 WHERE 条件的高效快速，又发挥了 HAVING 可以使用包含分组统计函数的查询条件的优点。当数据量特别大的时候，运行效率会有很大的差别</p>
<h2 id="select的执行过程" tabindex="-1"><a class="header-anchor" href="#select的执行过程" aria-hidden="true">#</a> SELECT的执行过程</h2>
<h3 id="select执行顺序" tabindex="-1"><a class="header-anchor" href="#select执行顺序" aria-hidden="true">#</a> SELECT执行顺序</h3>
<p>你需要记住 SELECT 查询时的两个顺序：</p>
<p><strong>1. 关键字的顺序是不能颠倒的：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>SELECT ... FROM ... WHERE ... GROUP BY ... HAVING ... ORDER BY ... LIMIT...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.SELECT 语句的执行顺序</strong>（在 MySQL 和 Oracle 中，SELECT 执行顺序基本相同）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>FROM -> WHERE -> GROUP BY -> HAVING -> SELECT 的字段 -> DISTINCT -> ORDER BY -> LIMIT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>在 SELECT 语句执行这些步骤的时候，每个步骤都会产生一个<code v-pre>虚拟表</code>，然后将这个虚拟表传入下一个步骤中作为输入。需要注意的是，这些步骤隐含在 SQL 的执行过程中，对于我们来说是不可见的</p>
</blockquote>
<h3 id="sql-的执行原理" tabindex="-1"><a class="header-anchor" href="#sql-的执行原理" aria-hidden="true">#</a> SQL 的执行原理</h3>
<p>SELECT 是先执行 FROM 这一步的。在这个阶段，如果是多张表联查，还会经历下面的几个步骤：</p>
<ol>
<li>首先先通过 CROSS JOIN 求笛卡尔积，相当于得到虚拟表 vt（virtual table）1-1；</li>
<li>通过 ON 进行筛选，在虚拟表 vt1-1 的基础上进行筛选，得到虚拟表 vt1-2；</li>
<li>添加外部行。如果我们使用的是左连接、右链接或者全连接，就会涉及到外部行，也就是在虚拟表 vt1-2 的基础上增加外部行，得到虚拟表 vt1-3。</li>
</ol>
<p>当然如果我们操作的是两张以上的表，还会重复上面的步骤，直到所有表都被处理完为止。这个过程得到是我们的原始数据。</p>
<p>当我们拿到了查询数据表的原始数据，也就是最终的虚拟表 <code v-pre>vt1</code>，就可以在此基础上再进行 <code v-pre>WHERE 阶段</code>。在这个阶段中，会根据 vt1 表的结果进行筛选过滤，得到虚拟表 <code v-pre>vt2</code>。</p>
<p>然后进入第三步和第四步，也就是 <code v-pre>GROUP 和 HAVING 阶段</code>。在这个阶段中，实际上是在虚拟表 vt2 的基础上进行分组和分组过滤，得到中间的虚拟表 <code v-pre>vt3</code> 和 <code v-pre>vt4</code>。</p>
<p>当我们完成了条件筛选部分之后，就可以筛选表中提取的字段，也就是进入到 <code v-pre>SELECT 和 DISTINCT 阶段</code>。</p>
<p>首先在 SELECT 阶段会提取想要的字段，然后在 DISTINCT 阶段过滤掉重复的行，分别得到中间的虚拟表 <code v-pre>vt5-1</code> 和 <code v-pre>vt5-2</code>。</p>
<p>当我们提取了想要的字段数据之后，就可以按照指定的字段进行排序，也就是 <code v-pre>ORDER BY 阶段</code>，得到虚拟表 <code v-pre>vt6</code>。</p>
<p>最后在 vt6 的基础上，取出指定行的记录，也就是 <code v-pre>LIMIT 阶段</code>，得到最终的结果，对应的是虚拟表 <code v-pre>vt7</code>。</p>
<p>当然我们在写 SELECT 语句的时候，不一定存在所有的关键字，相应的阶段就会省略。</p>
<p>同时因为 SQL 是一门类似英语的结构化查询语言，所以我们在写 SELECT 语句的时候，还要注意相应的关键字顺序，<strong>所谓底层运行的原理，就是我们刚才讲到的执行顺序</strong></p>
</div></template>
