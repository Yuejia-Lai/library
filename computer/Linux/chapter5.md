---
title: 实用指令
icon: iconfont icon-linux
date: 2022-10-09
---

## 指定运行级别

### 基本介绍

运行级别说明： 

0 ：关机 

1 ：单用户【找回丢失密码】 

2：多用户状态没有网络服务 

3：多用户状态有网络服务 

4：系统未使用保留给用户 

5：图形界面 

6：系统重启 

常用运行级别是 3 和 5 ，也可以指定默认运行级别

### CentOS7 后运行级别说明

在 centos7 以前， /etc/inittab 文件中 . 

进行了简化 ，如下: 

**multi-user.target**: analogous to runlevel 3 

**graphical.target**: analogous to runlevel 5 

To view current default target, run: systemctl get-default  

To set a default target, run: systemctl set-default TARGET.target

## 找回 root 密码

略

## 帮助指令

### man 获得帮助信息

基本语法：man [命令或配置文件]（功能描述：获得帮助信息）

### help 指令

基本语法：help 命令 （功能描述：获得 shell 内置命令的帮助信息）

## 文件目录类

### pwd 指令

基本语法 ：pwd (功能描述：显示当前工作目录的绝对路径)

### ls 指令

基本语法：ls [选项] [目录或是文件] 

常用选项 

- -a ：显示当前目录所有的文件和目录，包括隐藏的。

-  -l ：以列表的方式显示信息

### cd 指令

基本语法：cd [参数] (功能描述：切换到指定目录)

### mkdir 指令

mkdir 指令用于创建目录 

基本语法：mkdir [选项] 要创建的目录 

 常用选项 -p ：创建多级目录

### rmdir 指令删除空目录

基本语法 rmdir [选项] 要删除的空目录

> 使用细节 
>
> rmdir 删除的是空目录，如果目录下有内容时无法删除的。 
>
> 提示：如果需要删除非空目录，需要使用 rm -rf 要删除的目录 比如： rm -rf /home/animal

### touch 指令

touch 指令创建空文件 

基本语法

touch 文件名

### cp 指令

cp 指令拷贝文件到指定目录

基本语法 cp [选项] source dest  

常用选项 -r ：递归复制整个文件夹

### rm 指令

说明：rm 指令移除文件或目录  

基本语法

rm [选项] 要删除的文件或目录  

常用选项 -r ：递归删除整个文件夹 -f ： 强制删除不提示

### mv 指令

mv 移动文件与目录或重命名

基本语法 

mv oldNameFile newNameFile   (功能描述：重命名) 

mv /temp/movefile /targetFolder (功能描述：移动文件)

### cat 指令

cat 查看文件内容

cat [选项] 要查看的文件

常用选项 -n ：显示行号

使用细节 

cat 只能浏览文件，而不能修改文件，为了浏览方便，一般会带上 管道命令 | more 

cat -n /etc/profile | more [进行交互]

### more 指令

more 指令是一个基于 VI 编辑器的文本过滤器，它以全屏幕的方式按页显示文本文件的内容。more 指令中内置了若 干快捷键(交互的指令)，详见操作说明

基本语法   more 要查看的文件

![Snipaste_2022-10-11_14-48-18.png](https://s2.loli.net/2022/10/11/HmPoFYTSzUwZkhB.png)

### less 指令

less 指令用来分屏查看文件内容，它的功能与 more 指令类似，但是比 more 指令更加强大，支持各种显示终端。less 指令在显示文件内容时，并不是一次将整个文件加载之后才显示，而是根据显示需要加载内容，对于显示大型文件具有较高的效率

基本语法  less 要查看的文件 

![Snipaste_2022-10-11_14-49-54.png](https://s2.loli.net/2022/10/11/doKHgTNky2CA4LJ.png)

### echo 指令

echo 输出内容到控制台  

基本语法 echo [选项] [输出内容]

### head 指令

head 用于显示文件的开头部分内容，默认情况下 head 指令显示文件的前 10 行内容

基本语法 

head 文件 (功能描述：查看文件头 10 行内容) 

head -n 5 文件 (功能描述：查看文件头 5 行内容，5可以是任意行数)

### tail 指令

tail 用于输出文件中尾部的内容，默认情况下 tail 指令显示文件的前 10 行内容。

基本语法 

- tail 文件 （功能描述：查看文件尾 10 行内容） 
- tail -n 5 文件 （功能描述：查看文件尾 5 行内容，5 可以是任意行数） 
- tail -f 文件 （功能描述：实时追踪该文档的所有更新）

### \> 指令 和 >> 指令

\> 输出重定向和 >> 追加

基本语法 

- ls -l >文件 （功能描述：列表的内容写入文件 a.txt 中（覆盖写）） 
- ls -al >>文件 （功能描述：列表的内容追加到文件 aa.txt 的末尾） 
- cat 文件 1 > 文件 2 （功能描述：将文件 1 的内容覆盖到文件 2） 
- echo "内容">> 文件 (追加)

### ln 指令

软链接也称为符号链接，类似于 windows 里的快捷方式，主要存放了链接其他文件的路径

基本语法 ln -s [原文件或目录] [软链接名] （功能描述：给原文件创建一个软链接)

>  细节说明 当我们使用 pwd 指令查看目录时，仍然看到的是软链接所在目录。

### history 指令

查看已经执行过历史命令,也可以执行历史指令 

基本语法 history （功能描述：查看已经执行过历史命令）

**应用实例** 

案例 1: 显示所有的历史命令 history 

案例 2: 显示最近使用过的 10 个指令。 history 10 

案例 3：执行历史编号为 5 的指令 !5

## 时间日期类

### date 指令-显示当前日期

基本语法 

- date （功能描述：显示当前时间） 
- date +%Y（功能描述：显示当前年份） 
- date +%m（功能描述：显示当前月份） 
- date +%d （功能描述：显示当前是哪一天） 
- date "+%Y-%m-%d %H:%M:%S"（功能描述：显示年月日时分秒）

### date 指令-设置日期

基本语法 date -s 字符串时间

### cal 指令

查看日历指令 cal  

基本语法 cal [选项] （功能描述：不加选项，显示本月日历）

**应用实例** 

案例 1: 显示当前日历 cal 

案例 2: 显示 2020 年日历 : cal 20

## 搜索查找类

### find 指令

find 指令将从指定目录向下递归地遍历其各个子目录，将满足条件的文件或者目录显示在终端。

基本语法 find [搜索范围] [选项]

![Snipaste_2022-10-11_15-58-19.png](https://s2.loli.net/2022/10/11/Qd3iE67h5CRpleL.png)

案例 1: 按文件名：根据名称查找/home 目录下的 hello.txt 文件 

find /home -name hello.txt 

案例 2：按拥有者：查找/opt 目录下，用户名称为 nobody 的文件 

find /opt -user nobody 

案例 3：查找整个 linux 系统下大于 200M 的文件（+n 大于 -n 小于 n 等于, 单位有 k,M,G） 

find / -size +200M

### locate 指令

locate 指令可以快速定位文件路径。locate 指令利用事先建立的系统中所有文件名称及路径的 locate 数据库实现快速 定位给定的文件。Locate 指令无需遍历整个文件系统，查询速度较快。为了保证查询结果的准确度，管理员必须定期更 新 locate 时刻

- 基本语法 

locate 搜索文件 

>  特别说明 由于 locate 指令基于数据库进行查询，所以第一次运行前，必须使用 updatedb 指令创建 locate 数据库。 

- which 指令，可以查看某个指令在哪个目录下，比如 ls 指令在哪个目录 which ls

### grep 指令和 管道符号 |

grep 过滤查找 ， 管道符，“|”，表示将前一个命令的处理结果输出传递给后面的命令处理。

- 基本语法

grep [选项] 查找内容 源文件

- 常用选项

-n: 显示匹配行以及行号

-i：忽略字母大小写

## 压缩和解压类

### gzip/gunzip 指令

> gzip 用于压缩文件， gunzip 用于解压

- 基本语法

gzip 文件 （功能描述：压缩文件，只能将文件压缩为*.gz 文件） 

gunzip 文件.gz （功能描述：解压缩文件命令）

### zip/unzip 指令

zip 用于压缩文件， unzip 用于解压

- 基本语法

zip [选项] XXX.zip 将要压缩的内容（功能描述：压缩文件和目录的命令）

unzip [选项] XXX.zip （功能描述：解压缩文件）

- zip 常用选项

-r：递归压缩，即压缩目录

- unzip 的常用选项

-d<目录> ：指定解压后文件的存放目录

### tar 指令

tar 指令 是打包指令，最后打包后的文件是 .tar.gz 的文件

- 基本语法

tar [选项] XXX.tar.gz 打包的内容 (功能描述：打包目录，压缩后的文件格式.tar.gz)

- 选项说明

![Snipaste_2022-10-14_21-24-52.png](https://s2.loli.net/2022/10/14/BKcDNgWOHFa9MuE.png)
