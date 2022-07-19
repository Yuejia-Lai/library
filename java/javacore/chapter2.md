# **Java程序设计环境**

> [!tip] 本章节主要介绍如何安装JDK以及编译运行各种程序，包括控制台程序，图形化应用程序以及applet，方式包括命令行和集成开发环境

## 安装Java开发工具包

> 下载JDK，可以访问www.oracle.com/technetwork/java/javase/downloads

先列出Java相关术语：

|                   术语名                   | 缩写 | 解释                                 |
| :----------------------------------------: | ---- | ------------------------------------ |
|   Java Development Kit（Java开发工具包）   | JDK  | 编写Java程序的程序员使用的软件       |
| Java Runtime Environment（Java运行时环境） | JRE  | 运行Java程序的用户使用的软件         |
|                 Server JRE                 | ---- | 在服务器上运行Java程序的软件         |
|         Standard Edition（标准版）         | SE   | 用于桌面或者简单服务器应用的Java平台 |
|        Enterprise Edition（企业版）        | EE   | 用于复杂服务器应用的Java平台         |
|          Micro Edition（微型版）           | ME   | 用于小型设备的Java平台               |
|                  Java FX                   | ---- | 用于图形化用户界面的一个备选工具包   |
|                  OpenJDK                   | ---- | Java SE的一个免费开源实现            |
|                   Java 2                   | J2   | 过时的术语                           |
| Software Development Kit（软件开发工具包） | SDK  | 过时术语                             |
|                   Update                   | u    | Java8之前的bug修复版本               |
|                  NetBeans                  | ---- | Oracle公司的集成开发环境             |

下载JDK后安装，然后将jdk/bin加入**环境变量**，打开终端输入`javac --version`后出现对应版本号即成功安装

---

## JShell

终端中输入`jshell`，可以直接键入java表达式运行