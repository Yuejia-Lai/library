---
title: 定时任务调度
icon: iconfont icon-linux
date: 2022-10-13
---

## 定时任务调度

## crond 任务调度

>  crontab 进行 定时任务的设置

## 概述

任务调度：是指系统在某个时间执行的特定的命令或程序。 

任务调度分类：

1. 系统工作：有些重要的工作必须周而复始地执行。如病毒扫描等 

2. 个别用户工作：个别用户可能希望执行某些程序，比如对 mysql 数据库的备份

![Snipaste_2022-10-14_22-31-35.png](https://s2.loli.net/2022/10/14/1r6wVM4W7Py3oAv.png)

### 基本语法

crontab [选项]

### 常用选项

![Snipaste_2022-10-14_22-31-47.png](https://s2.loli.net/2022/10/14/i6NIeJnQCVBhscZ.png)

### 快速入门

设置任务调度文件：/etc/crontab 

设置个人任务调度。执行 crontab –e 命令。 

接着输入任务到调度文件 

如：*/1 * * * * ls –l /etc/ > /tmp/to.txt 

意思说每小时的每分钟执行 ls –l /etc/ > /tmp/to.txt 命令

- 参数细节说明

5 个占位符的说明

![Snipaste_2022-10-14_22-35-08.png](https://s2.loli.net/2022/10/14/8WQ56cGaY93gPfV.png)

特殊符号的说明

![Snipaste_2022-10-14_22-35-29.png](https://s2.loli.net/2022/10/14/tuOLzxDXjZAG2yN.png)

特殊时间执行案例

![Snipaste_2022-10-14_22-39-21.png](https://s2.loli.net/2022/10/14/lGCQHXmcwZpSz6a.png)

## crond 相关指令

conrtab –r：终止任务调度。 

crontab –l：列出当前有那些任务调度 

service crond restart [重启任务调度]

## at 定时任务

### 基本介绍

- at 命令是一次性定时计划任务，at 的守护进程 atd 会以后台模式运行，检查作业队列来运行。 
- 默认情况下，atd 守护进程每 60 秒检查作业队列，有作业时，会检查作业运行时间，如果时间与当前时间匹配，则运行此作业。 
- at 命令是一次性定时计划任务，执行完一个任务后不再执行此任务了 
- 在使用 at 命令的时候，一定要保证 atd 进程的启动 , 可以使用相关指令来查看 ps -ef | grep atd //可以检测 atd 是否在运行

### at 命令格式

at [选项] [时间] 

Ctrl + D 结束 at 命令的输入， 输出两次

### at 命令选项

![Snipaste_2022-10-14_22-43-23.png](https://s2.loli.net/2022/10/14/jbFp5nGX3clIqOt.png)

### at 时间定义

- 接受在当天的 hh:mm（小时:分钟）式的时间指定。假如该时间已过去，那么就放在第二天执行。 例如：04:00 
- 使用 midnight（深夜），noon（中午），teatime（饮茶时间，一般是下午 4 点）等比较模糊的词语来指定时间。 
- 采用 12 小时计时制，即在时间后面加上 AM（上午）或 PM（下午）来说明是上午还是下午。 例如：12pm 
- 指定命令执行的具体日期，指定格式为 month day（月 日）或 mm/dd/yy（月/日/年）或 dd.mm.yy（日.月.年），指定的日期必须跟在指定时间的后面。 例如：04:00 2021-03-1
- 使用相对计时法。指定格式为：now + count time-units ，now 就是当前时间，time-units 是时间单位，这里能够是 minutes （分钟）、hours（小时）、days（天）、weeks（星期）。count 是时间的数量，几天，几小时。 例如：now + 5 minutes 
- 直接使用 today（今天）、tomorrow（明天）来指定完成命令的时间。

