<template><div><h3 id="git环境配置" tabindex="-1"><a class="header-anchor" href="#git环境配置" aria-hidden="true">#</a> Git环境配置</h3>
<ul>
<li>下载</li>
</ul>
<p>链接：<a href="https://git-scm.com/download" target="_blank" rel="noopener noreferrer">https://git-scm.com/download<ExternalLinkIcon/></a></p>
<p>安装完成后在任意目录单击鼠标右键，如果可以看到如下两个选项即安装成功：</p>
<p><img src="https://s2.loli.net/2022/08/06/pqSdjNDHMzv6Qng.png" alt="123" loading="lazy"></p>
<p>Git GUI：Git提供的图形界面工具</p>
<p>Git Bash：Git提供的命令行工具</p>
<ul>
<li>基本设置</li>
</ul>
<p>打开Git Bash输入</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git config --global user.name “你的名字”
git config --global user.email “你的邮箱”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以查看配置信息：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git config --global user.name
git config --global user.email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>解决Git Bash乱码问题：</li>
</ul>
<ol>
<li>打开Git Bash输入下列指令：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git config --global core.quotepath false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>${git_home}/etc/bash.bashrc 文件最后加入下面两行:</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>export LANG="zh_CN.UTF-8"
export LC_ALL="zh_CN.UTF-8"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取本地仓库" tabindex="-1"><a class="header-anchor" href="#获取本地仓库" aria-hidden="true">#</a> 获取本地仓库</h3>
<p>要使用Git对我们的代码进行版本控制，首先需要获得本地仓库</p>
<ol>
<li>
<p>在电脑的任意位置创建一个空目录（例如test）作为我们的本地Git仓库</p>
</li>
<li>
<p>进入这个目录中，点击右键打开Git bash窗口</p>
</li>
<li>
<p>执行命令git init</p>
</li>
<li>
<p>如果创建成功后可在文件夹下看到隐藏的.git目录</p>
</li>
</ol>
<h3 id="基础操作指令" tabindex="-1"><a class="header-anchor" href="#基础操作指令" aria-hidden="true">#</a> 基础操作指令</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rm -rf .git 撤销git init
git add //工作区-》暂存区
git commit //暂存区-》本地仓库
git status //查看工作区暂存区状态
git add 单个文件名|通配符 //添加工作区一个或多个文件的修改到暂存区
git commit -m '注释内容' //可加注释内容的提交
git log [option] //查看提交日志 option可填：--all 显示所有分支
					--pretty=oneline  将提交信息显示为一行
					--abbrev-commit 使得输出的commitId更简短
					-graph 以图的形式显示
git reset --hard commitID //版本回退（commitID 可以使用 git-log 或 git log 指令查看，git reflog 这个指令可以看到已经删除的提交记录）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h3>
<p>几乎所有的版本控制系统都以某种形式支持分支。 使用分支意味着你可以把你的工作从开发主线上分离开来进行重大的Bug修改、开发新的功能，以免影响开发主线。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git branch  //查看本地分支
git branch 分支名  //创建本地分支
git checkout 分支名  //切换分支
git checkout -b 分支名  //直接切换到一个不存在的分支（创建并切换）
git merge 分支名称   //一个分支上的提交可以合并到另一个分支
git branch -d b1 删除分支时，需要做各种检查
git branch -D b1 不做任何检查，强制删除
git branch -m oldname newname 分支改名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于分支的冲突这里不详细展开。</p>
<h3 id="git远程仓库" tabindex="-1"><a class="header-anchor" href="#git远程仓库" aria-hidden="true">#</a> Git远程仓库</h3>
<p>常用的有Gitee：<a href="https://gitee.com/" target="_blank" rel="noopener noreferrer">https://gitee.com/<ExternalLinkIcon/></a></p>
<p>Github：<a href="https://github.com/" target="_blank" rel="noopener noreferrer">https://github.com/<ExternalLinkIcon/></a></p>
<p>Gitlab：<a href="https://about.gitlab.com/" target="_blank" rel="noopener noreferrer">https://about.gitlab.com/<ExternalLinkIcon/></a> ）</p>
<p>这里以码云（Gitee）为例：</p>
<ul>
<li>注册码云账号</li>
<li>新建仓库</li>
</ul>
<p><img src="https://s2.loli.net/2022/08/06/UPYOHT19gXqN52l.png" alt="12" loading="lazy"></p>
<p>仓库地址如下：</p>
<p><img src="https://s2.loli.net/2022/08/06/9UPOn45BKCdwm6H.png" alt="1235" loading="lazy"></p>
<ul>
<li>配置SSH公钥</li>
</ul>
<ol>
<li>生成SSH公钥：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ssh-keygen -t rsa   //之后按要求回车或者输入y/yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意</strong>：如果已经创建过公钥，此操作会将原有的公钥覆盖！！！</p>
<ol start="2">
<li>Gitee账户配置公钥：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cat ~/.ssh/id_rsa.pub //获取公钥
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Gitee中加入公钥：</p>
<p><img src="https://s2.loli.net/2022/08/06/9WfmpaqKhtFQESi.png" alt="下载" loading="lazy"></p>
<p>验证配置是否成功：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ssh -T git@gitee.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="操作远程仓库" tabindex="-1"><a class="header-anchor" href="#操作远程仓库" aria-hidden="true">#</a> 操作远程仓库</h3>
<ul>
<li>添加远程仓库</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> git remote add &lt;远端名称> &lt;仓库路径> //远端名称一般为origin，仓库路径为上面的SSH地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>查看远程仓库</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>推送到远程仓库（方括号里为可选内容）</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git push [-f] [--set-upstream] [远端名称 [本地分支名][:远端分支名] ]
git push origin master		//一般用这个（远端分支与本地分支名称相同）
		//-f 表示强制覆盖	
		//--set-upstream 推送到远端的同时并且建立起和远端分支的关联关系。（第一次用）
git push    //已经关联用这个
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git branch -vv  //查看本地分支与远程分支的关联关系
git clone &lt;仓库路径> [本地目录]  //从远程仓库克隆
git fetch [remote name] [branch name] 
//抓取指令就是将仓库里的更新都抓取到本地，不会进行合并
git pull [remote name] [branch name] 
//拉取指令就是将远端仓库的修改拉到本地并自动进行合并，等同于fetch+merge，如果不指定远端名称和分支名，则抓取所有并更新当前分支。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
