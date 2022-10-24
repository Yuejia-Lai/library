<template><div><h2 id="linux-组基本介绍" tabindex="-1"><a class="header-anchor" href="#linux-组基本介绍" aria-hidden="true">#</a> Linux 组基本介绍</h2>
<p>在 linux 中的每个用户必须属于一个组，不能独立于组外。</p>
<p>在 linux 中每个文件有所有者、所在组、其它组的概念</p>
<h2 id="文件-目录-所有者" tabindex="-1"><a class="header-anchor" href="#文件-目录-所有者" aria-hidden="true">#</a> 文件/目录 所有者</h2>
<p>一般为文件的创建者,谁创建了该文件，就自然的成为该文件的所有者</p>
<h3 id="查看文件的所有者" tabindex="-1"><a class="header-anchor" href="#查看文件的所有者" aria-hidden="true">#</a> 查看文件的所有者</h3>
<p>指令：ls –ahl</p>
<h3 id="修改文件所有者" tabindex="-1"><a class="header-anchor" href="#修改文件所有者" aria-hidden="true">#</a> 修改文件所有者</h3>
<p>指令：chown 用户名 文件名</p>
<h2 id="组的创建" tabindex="-1"><a class="header-anchor" href="#组的创建" aria-hidden="true">#</a> 组的创建</h2>
<h3 id="基本指令" tabindex="-1"><a class="header-anchor" href="#基本指令" aria-hidden="true">#</a> 基本指令</h3>
<p>groupadd 组名</p>
<blockquote>
<p>创建一个用户 fox ，并放入到 monster 组中</p>
<p>useradd -g monster fo</p>
</blockquote>
<h2 id="文件-目录-所在组" tabindex="-1"><a class="header-anchor" href="#文件-目录-所在组" aria-hidden="true">#</a> 文件/目录 所在组</h2>
<p>当某个用户创建了一个文件后，这个文件的所在组就是该用户所在的组(默认)</p>
<h3 id="查看文件-目录所在组" tabindex="-1"><a class="header-anchor" href="#查看文件-目录所在组" aria-hidden="true">#</a> 查看文件/目录所在组</h3>
<ul>
<li>基本指令</li>
</ul>
<p>ls –ahl</p>
<h3 id="修改文件-目录所在的组" tabindex="-1"><a class="header-anchor" href="#修改文件-目录所在的组" aria-hidden="true">#</a> 修改文件/目录所在的组</h3>
<ul>
<li>基本指令</li>
</ul>
<p>chgrp 组名 文件名</p>
<h2 id="其它组" tabindex="-1"><a class="header-anchor" href="#其它组" aria-hidden="true">#</a> 其它组</h2>
<p>除文件的所有者和所在组的用户外，系统的其它用户都是文件的其它组</p>
<h2 id="改变用户所在组" tabindex="-1"><a class="header-anchor" href="#改变用户所在组" aria-hidden="true">#</a> 改变用户所在组</h2>
<p>在添加用户时，可以指定将该用户添加到哪个组中，同样的用 root 的管理权限可以改变某个用户所在的组</p>
<h3 id="改变用户所在组-1" tabindex="-1"><a class="header-anchor" href="#改变用户所在组-1" aria-hidden="true">#</a> 改变用户所在组</h3>
<p>usermod –g 新组名 用户名</p>
<p>usermod –d 目录名 用户名 改变该用户登陆的初始目录。特别说明：用户需要有进入到新目录的权限</p>
<h2 id="权限的基本介绍" tabindex="-1"><a class="header-anchor" href="#权限的基本介绍" aria-hidden="true">#</a> 权限的基本介绍</h2>
<p>ls -l 中显示的内容如下： -rwxrw-r-- 1 root root 1213 Feb 2 09-39 abc</p>
<p>0-9 位说明</p>
<p>第 0 位确定文件类型(d, - , l , c , b)</p>
<ul>
<li>l 是链接，相当于 windows 的快捷方式</li>
<li>d 是目录，相当于 windows 的文件夹</li>
<li>c 是字符设备文件，鼠标，键盘</li>
<li>b 是块设备，比如硬盘</li>
</ul>
<p>第 1-3 位确定所有者（该文件的所有者）拥有该文件的权限。---User</p>
<p>第 4-6 位确定所属组（同用户组的）拥有该文件的权限，---Group</p>
<p>第 7-9 位确定其他用户拥有该文件的权限 ---Other</p>
<h2 id="rwx-权限详解-难点" tabindex="-1"><a class="header-anchor" href="#rwx-权限详解-难点" aria-hidden="true">#</a> rwx 权限详解，难点</h2>
<h3 id="rwx-作用到文件" tabindex="-1"><a class="header-anchor" href="#rwx-作用到文件" aria-hidden="true">#</a> rwx 作用到文件</h3>
<ul>
<li>[ r ]代表可读(read): 可以读取,查看</li>
<li>[ w ]代表可写(write): 可以修改,但是不代表可以删除该文件,删除一个文件的前提条件是对该文件所在的目录有写权限，才能删除该文件.</li>
<li>[ x ]代表可执行(execute):可以被执行</li>
</ul>
<h3 id="rwx-作用到目录" tabindex="-1"><a class="header-anchor" href="#rwx-作用到目录" aria-hidden="true">#</a> rwx 作用到目录</h3>
<ul>
<li>
<p>[ r ]代表可读(read): 可以读取，ls 查看目录内容</p>
</li>
<li>
<p>[ w ]代表可写(write): 可以修改, 对目录内创建+删除+重命名目录</p>
</li>
<li>
<p>[ x ]代表可执行(execute):可以进入该目录</p>
</li>
</ul>
<h2 id="修改权限-chmod" tabindex="-1"><a class="header-anchor" href="#修改权限-chmod" aria-hidden="true">#</a> 修改权限-chmod</h2>
<h3 id="基本说明" tabindex="-1"><a class="header-anchor" href="#基本说明" aria-hidden="true">#</a> 基本说明：</h3>
<p>通过 chmod 指令，可以修改文件或者目录的权限</p>
<h3 id="第一种方式-、-、-变更权限" tabindex="-1"><a class="header-anchor" href="#第一种方式-、-、-变更权限" aria-hidden="true">#</a> 第一种方式：+ 、-、= 变更权限</h3>
<p>u:所有者 g:所有组 o:其他人 a:所有人(u、g、o 的总和)</p>
<ul>
<li>chmod u=rwx,g=rx,o=x 文件/目录名</li>
<li>chmod o+w 文件/目录名</li>
<li>chmod a-x 文件/目录</li>
</ul>
<h3 id="第二种方式-通过数字变更权限" tabindex="-1"><a class="header-anchor" href="#第二种方式-通过数字变更权限" aria-hidden="true">#</a> 第二种方式：通过数字变更权限</h3>
<p>r=4 w=2 x=1                  rwx=4+2+1=7</p>
<p>chmod u=rwx,g=rx,o=x 文件目录名</p>
<p>相当于 chmod 751 文件/目录名</p>
<h2 id="修改文件所有者-chown" tabindex="-1"><a class="header-anchor" href="#修改文件所有者-chown" aria-hidden="true">#</a> 修改文件所有者-chown</h2>
<h3 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h3>
<p>chown newowner 文件/目录 改变所有者</p>
<p>chown newowner:newgroup 文件/目录 改变所有者和所在组</p>
<p>-R 如果是目录 则使其下所有子文件或目录递归生效</p>
<h2 id="修改文件-目录所在组-chgrp" tabindex="-1"><a class="header-anchor" href="#修改文件-目录所在组-chgrp" aria-hidden="true">#</a> 修改文件/目录所在组-chgrp</h2>
<h3 id="基本介绍-1" tabindex="-1"><a class="header-anchor" href="#基本介绍-1" aria-hidden="true">#</a> 基本介绍</h3>
<p>chgrp newgroup 文件/目录 【 改变所在组】</p>
</div></template>
