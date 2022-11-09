---
title: Git
icon: iconfont icon-git
date: 2022-06-30
---





### Git环境配置

- 下载

链接：https://git-scm.com/download

安装完成后在任意目录单击鼠标右键，如果可以看到如下两个选项即安装成功：

![123](https://s2.loli.net/2022/08/06/pqSdjNDHMzv6Qng.png)

Git GUI：Git提供的图形界面工具 

Git Bash：Git提供的命令行工具

- 基本设置

打开Git Bash输入

```
git config --global user.name “你的名字”
git config --global user.email “你的邮箱”
```

可以查看配置信息：

```
git config --global user.name
git config --global user.email
```

- 解决Git Bash乱码问题：

1. 打开Git Bash输入下列指令：

```
git config --global core.quotepath false
```

2. ${git_home}/etc/bash.bashrc 文件最后加入下面两行:

```
export LANG="zh_CN.UTF-8"
export LC_ALL="zh_CN.UTF-8"
```

### 获取本地仓库

要使用Git对我们的代码进行版本控制，首先需要获得本地仓库 

1. 在电脑的任意位置创建一个空目录（例如test）作为我们的本地Git仓库 

2. 进入这个目录中，点击右键打开Git bash窗口 

3. 执行命令git init 

4. 如果创建成功后可在文件夹下看到隐藏的.git目录

### 基础操作指令

```
rm -rf .git 撤销git init
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
```

### 分支

几乎所有的版本控制系统都以某种形式支持分支。 使用分支意味着你可以把你的工作从开发主线上分离开来进行重大的Bug修改、开发新的功能，以免影响开发主线。

```
git branch  //查看本地分支
git branch 分支名  //创建本地分支
git checkout 分支名  //切换分支
git checkout -b 分支名  //直接切换到一个不存在的分支（创建并切换）
git merge 分支名称   //一个分支上的提交可以合并到另一个分支
git branch -d b1 删除分支时，需要做各种检查
git branch -D b1 不做任何检查，强制删除
git branch -m oldname newname 分支改名
```

关于分支的冲突这里不详细展开。

### Git远程仓库

常用的有Gitee：https://gitee.com/  

Github：https://github.com/  

Gitlab：https://about.gitlab.com/ ）

这里以码云（Gitee）为例：

- 注册码云账号
- 新建仓库

![12](https://s2.loli.net/2022/08/06/UPYOHT19gXqN52l.png)

仓库地址如下：

![1235](https://s2.loli.net/2022/08/06/9UPOn45BKCdwm6H.png)

- 配置SSH公钥

1. 生成SSH公钥：

```
ssh-keygen -t rsa   //之后按要求回车或者输入y/yes
```

**注意**：如果已经创建过公钥，此操作会将原有的公钥覆盖！！！

2. Gitee账户配置公钥：

```
cat ~/.ssh/id_rsa.pub //获取公钥
```

Gitee中加入公钥：

![下载](https://s2.loli.net/2022/08/06/9WfmpaqKhtFQESi.png)

验证配置是否成功：

```
ssh -T git@gitee.com
```

### 操作远程仓库

- 添加远程仓库

```
 git remote add <远端名称> <仓库路径> //远端名称一般为origin，仓库路径为上面的SSH地址
```

- 查看远程仓库

```
git remote
```

- 推送到远程仓库（方括号里为可选内容）

```
git push [-f] [--set-upstream] [远端名称 [本地分支名][:远端分支名] ]
git push origin master		//一般用这个（远端分支与本地分支名称相同）
		//-f 表示强制覆盖	
		//--set-upstream 推送到远端的同时并且建立起和远端分支的关联关系。（第一次用）
git push    //已经关联用这个
```

```
git branch -vv  //查看本地分支与远程分支的关联关系
git clone <仓库路径> [本地目录]  //从远程仓库克隆
git fetch [remote name] [branch name] 
//抓取指令就是将仓库里的更新都抓取到本地，不会进行合并
git pull [remote name] [branch name] 
//拉取指令就是将远端仓库的修改拉到本地并自动进行合并，等同于fetch+merge，如果不指定远端名称和分支名，则抓取所有并更新当前分支。
```

