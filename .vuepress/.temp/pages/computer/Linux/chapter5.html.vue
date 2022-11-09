<template><div><h2 id="指定运行级别" tabindex="-1"><a class="header-anchor" href="#指定运行级别" aria-hidden="true">#</a> 指定运行级别</h2>
<h3 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h3>
<p>运行级别说明：</p>
<p>0 ：关机</p>
<p>1 ：单用户【找回丢失密码】</p>
<p>2：多用户状态没有网络服务</p>
<p>3：多用户状态有网络服务</p>
<p>4：系统未使用保留给用户</p>
<p>5：图形界面</p>
<p>6：系统重启</p>
<p>常用运行级别是 3 和 5 ，也可以指定默认运行级别</p>
<h3 id="centos7-后运行级别说明" tabindex="-1"><a class="header-anchor" href="#centos7-后运行级别说明" aria-hidden="true">#</a> CentOS7 后运行级别说明</h3>
<p>在 centos7 以前， /etc/inittab 文件中 .</p>
<p>进行了简化 ，如下:</p>
<p><strong>multi-user.target</strong>: analogous to runlevel 3</p>
<p><strong>graphical.target</strong>: analogous to runlevel 5</p>
<p>To view current default target, run: systemctl get-default</p>
<p>To set a default target, run: systemctl set-default TARGET.target</p>
<h2 id="找回-root-密码" tabindex="-1"><a class="header-anchor" href="#找回-root-密码" aria-hidden="true">#</a> 找回 root 密码</h2>
<p>略</p>
<h2 id="帮助指令" tabindex="-1"><a class="header-anchor" href="#帮助指令" aria-hidden="true">#</a> 帮助指令</h2>
<h3 id="man-获得帮助信息" tabindex="-1"><a class="header-anchor" href="#man-获得帮助信息" aria-hidden="true">#</a> man 获得帮助信息</h3>
<p>基本语法：man [命令或配置文件]（功能描述：获得帮助信息）</p>
<h3 id="help-指令" tabindex="-1"><a class="header-anchor" href="#help-指令" aria-hidden="true">#</a> help 指令</h3>
<p>基本语法：help 命令 （功能描述：获得 shell 内置命令的帮助信息）</p>
<h2 id="文件目录类" tabindex="-1"><a class="header-anchor" href="#文件目录类" aria-hidden="true">#</a> 文件目录类</h2>
<h3 id="pwd-指令" tabindex="-1"><a class="header-anchor" href="#pwd-指令" aria-hidden="true">#</a> pwd 指令</h3>
<p>基本语法 ：pwd (功能描述：显示当前工作目录的绝对路径)</p>
<h3 id="ls-指令" tabindex="-1"><a class="header-anchor" href="#ls-指令" aria-hidden="true">#</a> ls 指令</h3>
<p>基本语法：ls [选项] [目录或是文件]</p>
<p>常用选项</p>
<ul>
<li>
<p>-a ：显示当前目录所有的文件和目录，包括隐藏的。</p>
</li>
<li>
<p>-l ：以列表的方式显示信息</p>
</li>
</ul>
<h3 id="cd-指令" tabindex="-1"><a class="header-anchor" href="#cd-指令" aria-hidden="true">#</a> cd 指令</h3>
<p>基本语法：cd [参数] (功能描述：切换到指定目录)</p>
<h3 id="mkdir-指令" tabindex="-1"><a class="header-anchor" href="#mkdir-指令" aria-hidden="true">#</a> mkdir 指令</h3>
<p>mkdir 指令用于创建目录</p>
<p>基本语法：mkdir [选项] 要创建的目录</p>
<p>常用选项 -p ：创建多级目录</p>
<h3 id="rmdir-指令删除空目录" tabindex="-1"><a class="header-anchor" href="#rmdir-指令删除空目录" aria-hidden="true">#</a> rmdir 指令删除空目录</h3>
<p>基本语法 rmdir [选项] 要删除的空目录</p>
<blockquote>
<p>使用细节</p>
<p>rmdir 删除的是空目录，如果目录下有内容时无法删除的。</p>
<p>提示：如果需要删除非空目录，需要使用 rm -rf 要删除的目录 比如： rm -rf /home/animal</p>
</blockquote>
<h3 id="touch-指令" tabindex="-1"><a class="header-anchor" href="#touch-指令" aria-hidden="true">#</a> touch 指令</h3>
<p>touch 指令创建空文件</p>
<p>基本语法</p>
<p>touch 文件名</p>
<h3 id="cp-指令" tabindex="-1"><a class="header-anchor" href="#cp-指令" aria-hidden="true">#</a> cp 指令</h3>
<p>cp 指令拷贝文件到指定目录</p>
<p>基本语法 cp [选项] source dest</p>
<p>常用选项 -r ：递归复制整个文件夹</p>
<h3 id="rm-指令" tabindex="-1"><a class="header-anchor" href="#rm-指令" aria-hidden="true">#</a> rm 指令</h3>
<p>说明：rm 指令移除文件或目录</p>
<p>基本语法</p>
<p>rm [选项] 要删除的文件或目录</p>
<p>常用选项 -r ：递归删除整个文件夹 -f ： 强制删除不提示</p>
<h3 id="mv-指令" tabindex="-1"><a class="header-anchor" href="#mv-指令" aria-hidden="true">#</a> mv 指令</h3>
<p>mv 移动文件与目录或重命名</p>
<p>基本语法</p>
<p>mv oldNameFile newNameFile   (功能描述：重命名)</p>
<p>mv /temp/movefile /targetFolder (功能描述：移动文件)</p>
<h3 id="cat-指令" tabindex="-1"><a class="header-anchor" href="#cat-指令" aria-hidden="true">#</a> cat 指令</h3>
<p>cat 查看文件内容</p>
<p>cat [选项] 要查看的文件</p>
<p>常用选项 -n ：显示行号</p>
<p>使用细节</p>
<p>cat 只能浏览文件，而不能修改文件，为了浏览方便，一般会带上 管道命令 | more</p>
<p>cat -n /etc/profile | more [进行交互]</p>
<h3 id="more-指令" tabindex="-1"><a class="header-anchor" href="#more-指令" aria-hidden="true">#</a> more 指令</h3>
<p>more 指令是一个基于 VI 编辑器的文本过滤器，它以全屏幕的方式按页显示文本文件的内容。more 指令中内置了若 干快捷键(交互的指令)，详见操作说明</p>
<p>基本语法   more 要查看的文件</p>
<p><img src="https://s2.loli.net/2022/10/11/HmPoFYTSzUwZkhB.png" alt="Snipaste_2022-10-11_14-48-18.png" loading="lazy"></p>
<h3 id="less-指令" tabindex="-1"><a class="header-anchor" href="#less-指令" aria-hidden="true">#</a> less 指令</h3>
<p>less 指令用来分屏查看文件内容，它的功能与 more 指令类似，但是比 more 指令更加强大，支持各种显示终端。less 指令在显示文件内容时，并不是一次将整个文件加载之后才显示，而是根据显示需要加载内容，对于显示大型文件具有较高的效率</p>
<p>基本语法  less 要查看的文件</p>
<p><img src="https://s2.loli.net/2022/10/11/doKHgTNky2CA4LJ.png" alt="Snipaste_2022-10-11_14-49-54.png" loading="lazy"></p>
<h3 id="echo-指令" tabindex="-1"><a class="header-anchor" href="#echo-指令" aria-hidden="true">#</a> echo 指令</h3>
<p>echo 输出内容到控制台</p>
<p>基本语法 echo [选项] [输出内容]</p>
<h3 id="head-指令" tabindex="-1"><a class="header-anchor" href="#head-指令" aria-hidden="true">#</a> head 指令</h3>
<p>head 用于显示文件的开头部分内容，默认情况下 head 指令显示文件的前 10 行内容</p>
<p>基本语法</p>
<p>head 文件 (功能描述：查看文件头 10 行内容)</p>
<p>head -n 5 文件 (功能描述：查看文件头 5 行内容，5可以是任意行数)</p>
<h3 id="tail-指令" tabindex="-1"><a class="header-anchor" href="#tail-指令" aria-hidden="true">#</a> tail 指令</h3>
<p>tail 用于输出文件中尾部的内容，默认情况下 tail 指令显示文件的前 10 行内容。</p>
<p>基本语法</p>
<ul>
<li>tail 文件 （功能描述：查看文件尾 10 行内容）</li>
<li>tail -n 5 文件 （功能描述：查看文件尾 5 行内容，5 可以是任意行数）</li>
<li>tail -f 文件 （功能描述：实时追踪该文档的所有更新）</li>
</ul>
<h3 id="指令-和-指令" tabindex="-1"><a class="header-anchor" href="#指令-和-指令" aria-hidden="true">#</a> &gt; 指令 和 &gt;&gt; 指令</h3>
<p>&gt; 输出重定向和 &gt;&gt; 追加</p>
<p>基本语法</p>
<ul>
<li>ls -l &gt;文件 （功能描述：列表的内容写入文件 a.txt 中（覆盖写））</li>
<li>ls -al &gt;&gt;文件 （功能描述：列表的内容追加到文件 aa.txt 的末尾）</li>
<li>cat 文件 1 &gt; 文件 2 （功能描述：将文件 1 的内容覆盖到文件 2）</li>
<li>echo &quot;内容&quot;&gt;&gt; 文件 (追加)</li>
</ul>
<h3 id="ln-指令" tabindex="-1"><a class="header-anchor" href="#ln-指令" aria-hidden="true">#</a> ln 指令</h3>
<p>软链接也称为符号链接，类似于 windows 里的快捷方式，主要存放了链接其他文件的路径</p>
<p>基本语法 ln -s [原文件或目录] [软链接名] （功能描述：给原文件创建一个软链接)</p>
<blockquote>
<p>细节说明 当我们使用 pwd 指令查看目录时，仍然看到的是软链接所在目录。</p>
</blockquote>
<h3 id="history-指令" tabindex="-1"><a class="header-anchor" href="#history-指令" aria-hidden="true">#</a> history 指令</h3>
<p>查看已经执行过历史命令,也可以执行历史指令</p>
<p>基本语法 history （功能描述：查看已经执行过历史命令）</p>
<p><strong>应用实例</strong></p>
<p>案例 1: 显示所有的历史命令 history</p>
<p>案例 2: 显示最近使用过的 10 个指令。 history 10</p>
<p>案例 3：执行历史编号为 5 的指令 !5</p>
<h2 id="时间日期类" tabindex="-1"><a class="header-anchor" href="#时间日期类" aria-hidden="true">#</a> 时间日期类</h2>
<h3 id="date-指令-显示当前日期" tabindex="-1"><a class="header-anchor" href="#date-指令-显示当前日期" aria-hidden="true">#</a> date 指令-显示当前日期</h3>
<p>基本语法</p>
<ul>
<li>date （功能描述：显示当前时间）</li>
<li>date +%Y（功能描述：显示当前年份）</li>
<li>date +%m（功能描述：显示当前月份）</li>
<li>date +%d （功能描述：显示当前是哪一天）</li>
<li>date &quot;+%Y-%m-%d %H:%M:%S&quot;（功能描述：显示年月日时分秒）</li>
</ul>
<h3 id="date-指令-设置日期" tabindex="-1"><a class="header-anchor" href="#date-指令-设置日期" aria-hidden="true">#</a> date 指令-设置日期</h3>
<p>基本语法 date -s 字符串时间</p>
<h3 id="cal-指令" tabindex="-1"><a class="header-anchor" href="#cal-指令" aria-hidden="true">#</a> cal 指令</h3>
<p>查看日历指令 cal</p>
<p>基本语法 cal [选项] （功能描述：不加选项，显示本月日历）</p>
<p><strong>应用实例</strong></p>
<p>案例 1: 显示当前日历 cal</p>
<p>案例 2: 显示 2020 年日历 : cal 20</p>
<h2 id="搜索查找类" tabindex="-1"><a class="header-anchor" href="#搜索查找类" aria-hidden="true">#</a> 搜索查找类</h2>
<h3 id="find-指令" tabindex="-1"><a class="header-anchor" href="#find-指令" aria-hidden="true">#</a> find 指令</h3>
<p>find 指令将从指定目录向下递归地遍历其各个子目录，将满足条件的文件或者目录显示在终端。</p>
<p>基本语法 find [搜索范围] [选项]</p>
<p><img src="https://s2.loli.net/2022/10/11/Qd3iE67h5CRpleL.png" alt="Snipaste_2022-10-11_15-58-19.png" loading="lazy"></p>
<p>案例 1: 按文件名：根据名称查找/home 目录下的 hello.txt 文件</p>
<p>find /home -name hello.txt</p>
<p>案例 2：按拥有者：查找/opt 目录下，用户名称为 nobody 的文件</p>
<p>find /opt -user nobody</p>
<p>案例 3：查找整个 linux 系统下大于 200M 的文件（+n 大于 -n 小于 n 等于, 单位有 k,M,G）</p>
<p>find / -size +200M</p>
<h3 id="locate-指令" tabindex="-1"><a class="header-anchor" href="#locate-指令" aria-hidden="true">#</a> locate 指令</h3>
<p>locate 指令可以快速定位文件路径。locate 指令利用事先建立的系统中所有文件名称及路径的 locate 数据库实现快速 定位给定的文件。Locate 指令无需遍历整个文件系统，查询速度较快。为了保证查询结果的准确度，管理员必须定期更 新 locate 时刻</p>
<ul>
<li>基本语法</li>
</ul>
<p>locate 搜索文件</p>
<blockquote>
<p>特别说明 由于 locate 指令基于数据库进行查询，所以第一次运行前，必须使用 updatedb 指令创建 locate 数据库。</p>
</blockquote>
<ul>
<li>which 指令，可以查看某个指令在哪个目录下，比如 ls 指令在哪个目录 which ls</li>
</ul>
<h3 id="grep-指令和-管道符号" tabindex="-1"><a class="header-anchor" href="#grep-指令和-管道符号" aria-hidden="true">#</a> grep 指令和 管道符号 |</h3>
<p>grep 过滤查找 ， 管道符，“|”，表示将前一个命令的处理结果输出传递给后面的命令处理。</p>
<ul>
<li>基本语法</li>
</ul>
<p>grep [选项] 查找内容 源文件</p>
<ul>
<li>常用选项</li>
</ul>
<p>-n: 显示匹配行以及行号</p>
<p>-i：忽略字母大小写</p>
<h2 id="压缩和解压类" tabindex="-1"><a class="header-anchor" href="#压缩和解压类" aria-hidden="true">#</a> 压缩和解压类</h2>
<h3 id="gzip-gunzip-指令" tabindex="-1"><a class="header-anchor" href="#gzip-gunzip-指令" aria-hidden="true">#</a> gzip/gunzip 指令</h3>
<blockquote>
<p>gzip 用于压缩文件， gunzip 用于解压</p>
</blockquote>
<ul>
<li>基本语法</li>
</ul>
<p>gzip 文件 （功能描述：压缩文件，只能将文件压缩为*.gz 文件）</p>
<p>gunzip 文件.gz （功能描述：解压缩文件命令）</p>
<h3 id="zip-unzip-指令" tabindex="-1"><a class="header-anchor" href="#zip-unzip-指令" aria-hidden="true">#</a> zip/unzip 指令</h3>
<p>zip 用于压缩文件， unzip 用于解压</p>
<ul>
<li>基本语法</li>
</ul>
<p>zip [选项] XXX.zip 将要压缩的内容（功能描述：压缩文件和目录的命令）</p>
<p>unzip [选项] XXX.zip （功能描述：解压缩文件）</p>
<ul>
<li>zip 常用选项</li>
</ul>
<p>-r：递归压缩，即压缩目录</p>
<ul>
<li>unzip 的常用选项</li>
</ul>
<p>-d&lt;目录&gt; ：指定解压后文件的存放目录</p>
<h3 id="tar-指令" tabindex="-1"><a class="header-anchor" href="#tar-指令" aria-hidden="true">#</a> tar 指令</h3>
<p>tar 指令 是打包指令，最后打包后的文件是 .tar.gz 的文件</p>
<ul>
<li>基本语法</li>
</ul>
<p>tar [选项] XXX.tar.gz 打包的内容 (功能描述：打包目录，压缩后的文件格式.tar.gz)</p>
<ul>
<li>选项说明</li>
</ul>
<p><img src="https://s2.loli.net/2022/10/14/BKcDNgWOHFa9MuE.png" alt="Snipaste_2022-10-14_21-24-52.png" loading="lazy"></p>
</div></template>
