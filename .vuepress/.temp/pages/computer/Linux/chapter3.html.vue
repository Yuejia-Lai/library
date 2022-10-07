<template><div><h2 id="关机-重启命令" tabindex="-1"><a class="header-anchor" href="#关机-重启命令" aria-hidden="true">#</a> 关机&amp;重启命令</h2>
<h3 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h3>
<ul>
<li>shutdown –h now              立刻关机</li>
<li>shudown -h 1                     1 分钟后关机</li>
<li>shutdown –r now              现在重新启动计算机</li>
<li>halt                                      关机，作用和上面一样.</li>
<li>reboot                                 现在重新启动计算机</li>
<li>sync                                     把内存的数据同步到磁盘</li>
</ul>
<h3 id="注意细节" tabindex="-1"><a class="header-anchor" href="#注意细节" aria-hidden="true">#</a> 注意细节</h3>
<p>不管是重启系统还是关闭系统，首先要运行 sync 命令，把内存中的数据写到磁盘中</p>
<p>目前的 shutdown/reboot/halt 等命令均已经在关机前进行了 sync</p>
<h2 id="用户登录和注销" tabindex="-1"><a class="header-anchor" href="#用户登录和注销" aria-hidden="true">#</a> 用户登录和注销</h2>
<h3 id="基本介绍-1" tabindex="-1"><a class="header-anchor" href="#基本介绍-1" aria-hidden="true">#</a> 基本介绍</h3>
<ul>
<li>登录时尽量少用 root 帐号登录，因为它是系统管理员，最大的权限，避免操作失误。</li>
<li>可以利用普通用户登录，登录后再用”su - 用户名’命令来切换成系统管理员身份.</li>
<li>在提示符下输入 logout 即可注销用户</li>
</ul>
<h3 id="使用细节" tabindex="-1"><a class="header-anchor" href="#使用细节" aria-hidden="true">#</a> 使用细节</h3>
<p>logout 注销指令在图形运行级别无效，在运行级别 3 下有效</p>
</div></template>
