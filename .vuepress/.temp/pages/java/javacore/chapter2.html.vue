<template><div><h1 id="java程序设计环境" tabindex="-1"><a class="header-anchor" href="#java程序设计环境" aria-hidden="true">#</a> <strong>Java程序设计环境</strong></h1>
<blockquote>
<p>[!tip] 本章节主要介绍如何安装JDK以及编译运行各种程序，包括控制台程序，图形化应用程序以及applet，方式包括命令行和集成开发环境</p>
</blockquote>
<h2 id="安装java开发工具包" tabindex="-1"><a class="header-anchor" href="#安装java开发工具包" aria-hidden="true">#</a> 安装Java开发工具包</h2>
<blockquote>
<p>下载JDK，<a href="http://xn--www-vs9dj4uo57go5o.oracle.com/technetwork/java/javase/downloads" target="_blank" rel="noopener noreferrer">可以访问www.oracle.com/technetwork/java/javase/downloads<ExternalLinkIcon/></a></p>
</blockquote>
<p>先列出Java相关术语：</p>
<table>
<thead>
<tr>
<th style="text-align:center">术语名</th>
<th>缩写</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Java Development Kit（Java开发工具包）</td>
<td>JDK</td>
<td>编写Java程序的程序员使用的软件</td>
</tr>
<tr>
<td style="text-align:center">Java Runtime Environment（Java运行时环境）</td>
<td>JRE</td>
<td>运行Java程序的用户使用的软件</td>
</tr>
<tr>
<td style="text-align:center">Server JRE</td>
<td>----</td>
<td>在服务器上运行Java程序的软件</td>
</tr>
<tr>
<td style="text-align:center">Standard Edition（标准版）</td>
<td>SE</td>
<td>用于桌面或者简单服务器应用的Java平台</td>
</tr>
<tr>
<td style="text-align:center">Enterprise Edition（企业版）</td>
<td>EE</td>
<td>用于复杂服务器应用的Java平台</td>
</tr>
<tr>
<td style="text-align:center">Micro Edition（微型版）</td>
<td>ME</td>
<td>用于小型设备的Java平台</td>
</tr>
<tr>
<td style="text-align:center">Java FX</td>
<td>----</td>
<td>用于图形化用户界面的一个备选工具包</td>
</tr>
<tr>
<td style="text-align:center">OpenJDK</td>
<td>----</td>
<td>Java SE的一个免费开源实现</td>
</tr>
<tr>
<td style="text-align:center">Java 2</td>
<td>J2</td>
<td>过时的术语</td>
</tr>
<tr>
<td style="text-align:center">Software Development Kit（软件开发工具包）</td>
<td>SDK</td>
<td>过时术语</td>
</tr>
<tr>
<td style="text-align:center">Update</td>
<td>u</td>
<td>Java8之前的bug修复版本</td>
</tr>
<tr>
<td style="text-align:center">NetBeans</td>
<td>----</td>
<td>Oracle公司的集成开发环境</td>
</tr>
</tbody>
</table>
<p>下载JDK后安装，然后将jdk/bin加入<strong>环境变量</strong>，打开终端输入<code v-pre>javac --version</code>后出现对应版本号即成功安装</p>
<hr>
<h2 id="jshell" tabindex="-1"><a class="header-anchor" href="#jshell" aria-hidden="true">#</a> JShell</h2>
<p>终端中输入<code v-pre>jshell</code>，可以直接键入java表达式运行</p>
</div></template>
