<template><div><h2 id="添加用户" tabindex="-1"><a class="header-anchor" href="#添加用户" aria-hidden="true">#</a> 添加用户</h2>
<h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h3>
<p>useradd  用户名</p>
<h3 id="细节说明" tabindex="-1"><a class="header-anchor" href="#细节说明" aria-hidden="true">#</a> 细节说明</h3>
<ul>
<li>当创建用户成功后，会自动的创建和用户同名的家目录</li>
<li>也可以通过 useradd -d 指定目录 新的用户名，给新创建的用户指定家目录</li>
</ul>
<h2 id="指定-修改密码" tabindex="-1"><a class="header-anchor" href="#指定-修改密码" aria-hidden="true">#</a> 指定/修改密码</h2>
<h3 id="基本语法-1" tabindex="-1"><a class="header-anchor" href="#基本语法-1" aria-hidden="true">#</a> 基本语法</h3>
<p>passwd 用户名</p>
<blockquote>
<p>显示当前用户所在的目录 pwd</p>
</blockquote>
<h2 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户" aria-hidden="true">#</a> 删除用户</h2>
<h3 id="基本语法-2" tabindex="-1"><a class="header-anchor" href="#基本语法-2" aria-hidden="true">#</a> 基本语法</h3>
<p>userdel 用户名</p>
<blockquote>
<p>删除用户以及用户主目录, 比如 tom, userdel -r tom</p>
</blockquote>
<h2 id="查询用户信息指令" tabindex="-1"><a class="header-anchor" href="#查询用户信息指令" aria-hidden="true">#</a> 查询用户信息指令</h2>
<h3 id="基本语法-3" tabindex="-1"><a class="header-anchor" href="#基本语法-3" aria-hidden="true">#</a> 基本语法</h3>
<p>id  用户名</p>
<blockquote>
<p>当用户不存在时，返回无此用户</p>
</blockquote>
<h2 id="切换用户" tabindex="-1"><a class="header-anchor" href="#切换用户" aria-hidden="true">#</a> 切换用户</h2>
<h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3>
<p>在操作 Linux 中，如果当前用户的权限不够，可以通过 su - 指令，切换到高权限用户</p>
<h3 id="基本语法-4" tabindex="-1"><a class="header-anchor" href="#基本语法-4" aria-hidden="true">#</a> 基本语法</h3>
<p>su - 切换用户名</p>
<blockquote>
<p>从权限高的用户切换到权限低的用户，不需要输入密码，反之需要。</p>
<p>当需要返回到原来用户时，使用 exit/logout 指令</p>
</blockquote>
<h2 id="查看当前用户-登录用户" tabindex="-1"><a class="header-anchor" href="#查看当前用户-登录用户" aria-hidden="true">#</a> 查看当前用户/登录用户</h2>
<h3 id="基本语法-5" tabindex="-1"><a class="header-anchor" href="#基本语法-5" aria-hidden="true">#</a> 基本语法</h3>
<p>whoami/ who am I</p>
<h2 id="用户组" tabindex="-1"><a class="header-anchor" href="#用户组" aria-hidden="true">#</a> 用户组</h2>
<h3 id="新增组" tabindex="-1"><a class="header-anchor" href="#新增组" aria-hidden="true">#</a> 新增组</h3>
<p>指令 : groupadd  组名</p>
<h3 id="删除组" tabindex="-1"><a class="header-anchor" href="#删除组" aria-hidden="true">#</a> 删除组</h3>
<p>指令(基本语法)： groupdel  组名</p>
<blockquote>
<p>增加用户时直接加上组: 指令(基本语法) : useradd –g 用户组 用户名</p>
</blockquote>
<h3 id="修改用户的组" tabindex="-1"><a class="header-anchor" href="#修改用户的组" aria-hidden="true">#</a> 修改用户的组</h3>
<p>指令(基本语法)：usermod –g 用户组 用户名</p>
<h2 id="用户和组相关文件" tabindex="-1"><a class="header-anchor" href="#用户和组相关文件" aria-hidden="true">#</a> 用户和组相关文件</h2>
<h3 id="etc-passwd-文件" tabindex="-1"><a class="header-anchor" href="#etc-passwd-文件" aria-hidden="true">#</a> /etc/passwd 文件</h3>
<p>用户（user）的配置文件，记录用户的各种信息</p>
<p>每行的含义：用户名:口令:用户标识号:组标识号:注释性描述:主目录:登录 Shell</p>
<h3 id="etc-shadow-文件" tabindex="-1"><a class="header-anchor" href="#etc-shadow-文件" aria-hidden="true">#</a> /etc/shadow 文件</h3>
<p>口令的配置文件</p>
<p>每行的含义：登录名:加密口令:最后一次修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:标志</p>
<h3 id="etc-group-文件" tabindex="-1"><a class="header-anchor" href="#etc-group-文件" aria-hidden="true">#</a> /etc/group 文件</h3>
<p>组(group)的配置文件，记录 Linux 包含的组的信息</p>
<p>每行含义：组名:口令:组标识号:组内用户列表</p>
</div></template>
