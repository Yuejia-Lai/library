<template><div><blockquote>
<p>本文介绍了Maven相关操作，方便以后查阅。</p>
</blockquote>
<h2 id="分模块开发" tabindex="-1"><a class="header-anchor" href="#分模块开发" aria-hidden="true">#</a> 分模块开发</h2>
<ul>
<li>将原始模块按照功能拆分成若干个子模块，方便模块间的相互调用，接口共享。</li>
</ul>
<p>可以将domain层进行拆分，除了domain层，我们也可以将其他的层也拆成一个个对立的模块，如:
<img src="https://s2.loli.net/2022/07/10/LUXmMrENcfzQPwv.png" alt="maven_1" loading="lazy"></p>
<p>这样的话，项目中的每一层都可以单独维护，也可以很方便的被别人使用</p>
<h3 id="分模块开发实现" tabindex="-1"><a class="header-anchor" href="#分模块开发实现" aria-hidden="true">#</a> 分模块开发实现</h3>
<h4 id="抽取domain层" tabindex="-1"><a class="header-anchor" href="#抽取domain层" aria-hidden="true">#</a> 抽取domain层</h4>
<ol>
<li>创建新模块</li>
</ol>
<p>创建一个名称为<code v-pre>maven_03_pojo</code>的jar项目,为什么项目名是从02到03这样创建，原因后面我们会提到，这块的名称可以任意</p>
<ol start="2">
<li>项目中创建domain包</li>
</ol>
<p>在<code v-pre>maven_03_pojo</code>项目中创建<code v-pre>com.itheima.domain</code>包，并将<code v-pre>maven_02_ssm</code>中Book类拷贝到该包中</p>
<ol start="3">
<li>删除原项目中的domain包</li>
</ol>
<p>需要在<code v-pre>maven_02_ssm</code>中添加<code v-pre>maven_03_pojo</code>的依赖</p>
<ol start="4">
<li>建立依赖关系</li>
</ol>
<p>在<code v-pre>maven_02_ssm</code>项目的pom.xml添加<code v-pre>maven_03_pojo</code>的依赖</p>
<ol start="5">
<li>编译<code v-pre>maven_02_ssm</code>项目</li>
</ol>
<p>错误信息为：不能解决<code v-pre>maven_02_ssm</code>项目的依赖问题，找不到<code v-pre>maven_03_pojo</code>这个jar包。</p>
<p>为什么找不到呢?</p>
<p>原因是Maven会从本地仓库找对应的jar包，但是本地仓库又不存在该jar包所以会报错。</p>
<p>在IDEA中是有<code v-pre>maven_03_pojo</code>这个项目，所以我们只需要将<code v-pre>maven_03_pojo</code>项目安装到本地仓库即可</p>
<ol start="6">
<li>将项目安装本地仓库</li>
</ol>
<p>将需要被依赖的项目<code v-pre>maven_03_pojo</code>，使用maven的install命令，把其安装到Maven的本地仓库中</p>
<p><strong>其他包的抽取类似</strong></p>
<h2 id="依赖管理" tabindex="-1"><a class="header-anchor" href="#依赖管理" aria-hidden="true">#</a> 依赖管理</h2>
<ul>
<li>依赖传递</li>
<li>可选依赖</li>
<li>排除依赖</li>
</ul>
<p>依赖指当前项目运行所需的jar，一个项目可以设置多个依赖</p>
<h3 id="依赖传递与冲突问题" tabindex="-1"><a class="header-anchor" href="#依赖传递与冲突问题" aria-hidden="true">#</a> 依赖传递与冲突问题</h3>
<p>依赖是具有传递性的:
<img src="https://s2.loli.net/2022/07/10/hnGoFLa4TUx9s72.png" alt="maven_2" loading="lazy"></p>
<p>**说明:**A代表自己的项目；B,C,D,E,F,G代表的是项目所依赖的jar包；D1和D2 E1和E2代表是相同jar包的不同版本</p>
<p>(1) A依赖了B和C,B和C有分别依赖了其他jar包，所以在A项目中就可以使用上面所有jar包，这就是所说的依赖传递</p>
<p>(2) 依赖传递有直接依赖和间接依赖</p>
<ul>
<li>相对于A来说，A直接依赖B和C,间接依赖了D1,E1,G，F,D2和E2</li>
<li>相对于B来说，B直接依赖了D1和E1,间接依赖了G</li>
<li>直接依赖和间接依赖是一个相对的概念</li>
</ul>
<p>(3)因为有依赖传递的存在，就会导致jar包在依赖的过程中出现冲突问题，具体什么是冲突?Maven是如何解决冲突的?</p>
<p>这里所说的<mark>依赖冲突</mark>是指项目依赖的某一个jar包，有多个不同的版本，因而造成类包版本冲突。</p>
<p>情况一: 在<code v-pre>maven_02_ssm</code>的pom.xml中添加两个不同版本的Junit依赖:</p>
<p>通过对比，会发现一个结论</p>
<ul>
<li>特殊优先：当同级配置了相同资源的不同版本，后配置的覆盖先配置的。</li>
</ul>
<p>情况二: 路径优先：当依赖中出现相同的资源时，层级越深，优先级越低，层级越浅，优先级越高</p>
<ul>
<li>A通过B间接依赖到E1</li>
<li>A通过C间接依赖到E2</li>
<li>A就会间接依赖到E1和E2,Maven会按照层级来选择，E1是2度，E2是3度，所以最终会选择E1</li>
</ul>
<p>情况三: 声明优先：当资源在相同层级被依赖时，配置顺序靠前的覆盖配置顺序靠后的</p>
<ul>
<li>A通过B间接依赖到D1</li>
<li>A通过C间接依赖到D2</li>
<li>D1和D2都是两度，这个时候就不能按照层级来选择，需要按照声明来，谁先声明用谁，也就是说B在C之前声明，这个时候使用的是D1，反之则为D2</li>
</ul>
<h3 id="可选依赖和排除依赖" tabindex="-1"><a class="header-anchor" href="#可选依赖和排除依赖" aria-hidden="true">#</a> 可选依赖和排除依赖</h3>
<h4 id="可选依赖" tabindex="-1"><a class="header-anchor" href="#可选依赖" aria-hidden="true">#</a> 可选依赖</h4>
<ul>
<li>可选依赖指对外隐藏当前所依赖的资源---不透明</li>
</ul>
<p>添加<code v-pre>optional</code></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.itheima<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>maven_03_pojo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--可选依赖是隐藏当前工程所依赖的资源，隐藏后对应资源将不具有依赖传递--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="排除依赖" tabindex="-1"><a class="header-anchor" href="#排除依赖" aria-hidden="true">#</a> 排除依赖</h4>
<ul>
<li>排除依赖指主动断开依赖的资源，被排除的资源无需指定版本---不需要</li>
</ul>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.itheima<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>maven_04_dao<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--排除依赖是隐藏当前资源对应的依赖关系--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.itheima<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>maven_03_pojo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>介绍这两种方式后，简单来梳理下，就是</p>
<ul>
<li><code v-pre>A依赖B,B依赖C</code>,<code v-pre>C</code>通过依赖传递会被<code v-pre>A</code>使用到，现在要想办法让<code v-pre>A</code>不去依赖<code v-pre>C</code></li>
<li>可选依赖是在B上设置<code v-pre>&lt;optional&gt;</code>,<code v-pre>A</code>不知道有<code v-pre>C</code>的存在，</li>
<li>排除依赖是在A上设置<code v-pre>&lt;exclusions&gt;</code>,<code v-pre>A</code>知道有<code v-pre>C</code>的存在，主动将其排除掉。</li>
</ul>
<h2 id="聚合和继承" tabindex="-1"><a class="header-anchor" href="#聚合和继承" aria-hidden="true">#</a> 聚合和继承</h2>
<h3 id="聚合" tabindex="-1"><a class="header-anchor" href="#聚合" aria-hidden="true">#</a> 聚合</h3>
<p><img src="https://s2.loli.net/2022/07/10/sBrKYhW3ApHUR12.png" alt="maven_3" loading="lazy"></p>
<ul>
<li>所谓聚合:将多个模块组织成一个整体，同时进行项目构建的过程称为聚合</li>
<li>聚合工程：通常是一个不具有业务功能的&quot;空&quot;工程（有且仅有一个pom文件）</li>
<li>作用：使用聚合工程可以将多个工程编组，通过对聚合工程进行构建，实现对所包含的模块进行同步构建
<ul>
<li>当工程中某个模块发生更新（变更）时，必须保障工程中与已更新模块关联的模块同步更新，此时可以使用聚合工程来解决批量模块同步构建的问题。</li>
</ul>
</li>
</ul>
<p>关于聚合具体的实现步骤为:</p>
<ol>
<li>创建一个空的maven项目</li>
<li>将项目的打包方式改为pom</li>
</ol>
<p>**说明:**项目的打包方式，我们接触到的有三种，分别是</p>
<ul>
<li>jar:默认情况，说明该项目为java项目</li>
<li>war:说明该项目为web项目</li>
<li>pom:说明该项目为聚合或继承项目</li>
</ul>
<ol start="3">
<li>
<p>pom.xml添加所要管理的项目</p>
</li>
<li>
<p>使用聚合统一管理项目</p>
</li>
</ol>
<p>最后总结一句话就是，<strong>聚合工程主要是用来管理项目</strong></p>
<h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3>
<p>多模块开发存在的另外一个问题，<code v-pre>重复配置</code>的问题</p>
<ul>
<li>所谓继承:描述的是两个工程间的关系，与java中的继承相似，子工程可以继承父工程中的配置信息，常见于依赖关系的继承。</li>
<li>作用：
<ul>
<li>简化配置</li>
<li>减少版本冲突</li>
</ul>
</li>
</ul>
<ol>
<li>创建一个空的Maven项目并将其打包方式设置为pom</li>
<li>在子项目中设置其父工程</li>
</ol>
<p>分别在<code v-pre>maven_02_ssm</code>,<code v-pre>maven_03_pojo</code>,<code v-pre>maven_04_dao</code>的pom.xml中添加其父项目为<code v-pre>maven_01_parent</code></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--配置当前工程继承自parent工程--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.itheima<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>maven_01_parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.0-RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--设置父项目pom.xml位置路径--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">></span></span>../maven_01_parent/pom.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>relativePath</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>优化子项目共有依赖导入问题</li>
</ol>
<ul>
<li>将子项目共同使用的jar包都抽取出来，维护在父项目的pom.xml中</li>
<li>删除子项目中已经被抽取到父项目的pom.xml中的jar包，如在<code v-pre>maven_02_ssm</code>的pom.xml中将已经出现在父项目的jar包删除掉</li>
<li>将<code v-pre>maven_04_dao</code>项目的pom.xml中的所有依赖删除，然后添加上<code v-pre>maven_01_parent</code>的父项目坐标</li>
</ul>
<p>将子项目中的公共jar包抽取到父工程中进行统一添加依赖，这样做的可以简化配置，并且当父工程中所依赖的jar包版本发生变化，所有子项目中对应的jar包版本也会跟着更新</p>
<ol start="4">
<li>优化子项目依赖版本问题</li>
</ol>
<p>那针对于部分项目有的jar包，我们该如何管理优化呢?</p>
<ol>
<li>在父工程mavne_01_parent的pom.xml来定义依赖管理</li>
</ol>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--定义依赖管理--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencyManagement</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>4.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencyManagement</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>将maven_02_ssm的pom.xml中的junit依赖删除掉，刷新Maven</li>
</ol>
<p>刷新完会发现，在maven_02_ssm项目中的junit依赖并没有出现，所以我们得到一个结论:</p>
<p><strong><code v-pre>&lt;dependencyManagement&gt;</code>标签不真正引入jar包，而是配置可供子项目选择的jar包依赖</strong></p>
<p>子项目要想使用它所提供的这些jar包，需要自己添加依赖，并且不需要指定<code v-pre>&lt;version&gt;</code></p>
<ol start="3">
<li>在maven_02_ssm的pom.xml添加junit的依赖</li>
</ol>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结来说，继承可以帮助做两件事:</p>
<ul>
<li>将所有项目公共的jar包依赖提取到父工程的pom.xml中，子项目就可以不用重复编写，简化开发</li>
<li>将所有项目的jar包配置到父工程的dependencyManagement标签下，实现版本管理，方便维护
<ul>
<li><strong>dependencyManagement标签不真正引入jar包，只是管理jar包的版本</strong></li>
<li>子项目在引入的时候，只需要指定groupId和artifactId，不需要加version</li>
<li>当dependencyManagement标签中jar包版本发生变化，所有子项目中有用到该jar包的地方对应的版本会自动随之更新</li>
</ul>
</li>
</ul>
<p>最后总结一句话就是，<strong>父工程主要是用来快速配置依赖jar包和管理项目中所使用的资源</strong></p>
<p><strong>小结</strong></p>
<p>继承的实现步骤:</p>
<ul>
<li>
<p>创建Maven模块，设置打包类型为pom</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packaging</span><span class="token punctuation">></span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packaging</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>在父工程的pom文件中配置依赖关系(子工程将沿用父工程中的依赖关系),一般只抽取子项目中公有的jar包</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-webmvc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.2.10.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在父工程中配置子工程中可选的依赖关系</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencyManagement</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.1.16<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencyManagement</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在子工程中配置当前工程所继承的父工程</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--定义该工程的父工程--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.itheima<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>maven_01_parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.0-RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--填写父工程的pom文件,可以不写--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">></span></span>../maven_01_parent/pom.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>relativePath</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在子工程中配置使用父工程中可选依赖的坐标</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项:</p>
<p>1.子工程中使用父工程中的可选依赖时，仅需要提供群组id和项目id，无需提供版本，版本由父工程统一提供，避免版本冲突</p>
<p>2.子工程中还可以定义父工程中没有定义的依赖关系,只不过不能被父工程进行版本统一管理。</p>
</li>
</ul>
<h3 id="聚合与继承的区别" tabindex="-1"><a class="header-anchor" href="#聚合与继承的区别" aria-hidden="true">#</a> 聚合与继承的区别</h3>
<p>两种之间的作用:</p>
<ul>
<li>聚合用于快速构建项目，对项目进行管理</li>
<li>继承用于快速配置和管理子项目中所使用jar包的版本</li>
</ul>
<p>聚合和继承的相同点:</p>
<ul>
<li>聚合与继承的pom.xml文件打包方式均为pom，可以将两种关系制作到同一个pom文件中</li>
<li>聚合与继承均属于设计型模块，并无实际的模块内容</li>
</ul>
<p>聚合和继承的不同点:</p>
<ul>
<li>聚合是在当前模块中配置关系，聚合可以感知到参与聚合的模块有哪些</li>
<li>继承是在子模块中配置关系，父模块无法感知哪些子模块继承了自己</li>
</ul>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<ul>
<li>属性</li>
<li>版本管理</li>
</ul>
<h3 id="属性-1" tabindex="-1"><a class="header-anchor" href="#属性-1" aria-hidden="true">#</a> 属性</h3>
<p>如果我们现在想更新Spring的版本，你会发现我们依然需要更新多个jar包的版本,我们需要解决的话，就可以参考咱们java基础所学习的变量，声明一个变量，在其他地方使用该变量，当变量的值发生变化后，所有使用变量的地方，就会跟着修改，即:</p>
<p><img src="https://s2.loli.net/2022/07/10/gkvMTOWCYlFmHE1.png" alt="" loading="lazy"></p>
<ol>
<li>父工程中定义属性</li>
</ol>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>spring.version</span><span class="token punctuation">></span></span>5.2.10.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>spring.version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>junit.version</span><span class="token punctuation">></span></span>4.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>junit.version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mybatis-spring.version</span><span class="token punctuation">></span></span>1.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mybatis-spring.version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>修改依赖的version</li>
</ol>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${spring.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-webmvc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${spring.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${spring.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件加载属性" tabindex="-1"><a class="header-anchor" href="#配置文件加载属性" aria-hidden="true">#</a> 配置文件加载属性</h3>
<ol>
<li>父工程定义属性</li>
</ol>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jdbc.url</span><span class="token punctuation">></span></span>jdbc:mysql://127.1.1.1:3306/ssm_db<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jdbc.url</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>jdbc.properties文件中引用属性</li>
</ol>
<p>在jdbc.properties，将jdbc.url的值直接获取Maven配置的属性</p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">jdbc.driver</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token key attr-name">jdbc.url</span><span class="token punctuation">=</span><span class="token value attr-value">${jdbc.url}</span>
<span class="token key attr-name">jdbc.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">jdbc.password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>设置maven过滤文件范围</li>
</ol>
<p>Maven在默认情况下是从当前项目的<code v-pre>src\main\resources</code>下读取文件进行打包。现在我们需要打包的资源文件是在maven_02_ssm下,需要我们通过配置来指定下具体的资源目录</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--设置资源目录--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">></span></span>../maven_02_ssm/src/main/resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">></span></span>
            <span class="token comment">&lt;!--设置能够解析${}，默认是false --></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtering</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filtering</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**说明:**directory路径前要添加<code v-pre>../</code>的原因是maven_02_ssm相对于父工程的pom.xml路径是在其上一层的目录中，所以需要添加</p>
<p>上面的属性管理就已经完成，但是有一个问题没有解决，因为不只是maven_02_ssm项目需要有属性被父工程管理，如果有多个项目需要配置，该如何实现呢?</p>
<p>方式一:</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--设置资源目录，并设置能够解析${}--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">></span></span>../maven_02_ssm/src/main/resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtering</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filtering</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">></span></span>../maven_03_pojo/src/main/resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtering</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filtering</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">></span></span>
        ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二:</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--
			${project.basedir}: 当前项目所在目录,子项目继承了父项目，
			相当于所有的子项目都添加了资源目录的过滤
		--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">></span></span>${project.basedir}/src/main/resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtering</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filtering</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面我们所使用的都是Maven的自定义属性，除了${project.basedir},它属于Maven的内置系统属性</p>
<p>在Maven中的属性分为:</p>
<ul>
<li>自定义属性（常用）</li>
<li>内置属性</li>
<li>Setting属性</li>
<li>Java系统属性</li>
<li>环境变量属性</li>
</ul>
<p><img src="https://s2.loli.net/2022/07/10/V4bCKuqHs9MNS3n.png" alt="maven_5" loading="lazy"></p>
<h3 id="版本管理" tabindex="-1"><a class="header-anchor" href="#版本管理" aria-hidden="true">#</a> 版本管理</h3>
<p>在我们jar包的版本定义中，有两个工程版本用的比较多:</p>
<ul>
<li>SNAPSHOT（快照版本）
<ul>
<li>项目开发过程中临时输出的版本，称为快照版本</li>
<li>快照版本会随着开发的进展不断更新</li>
</ul>
</li>
<li>RELEASE（发布版本）
<ul>
<li>项目开发到一定阶段里程碑后，向团队外部发布较为稳定的版本，这种版本所对应的构件文件是稳定的</li>
<li>即便进行功能的后续开发，也不会改变当前发布版本内容，这种版本称为发布版本</li>
</ul>
</li>
</ul>
<p>除了上面的工程版本，我们还经常能看到一些发布版本:</p>
<ul>
<li>alpha版:内测版，bug多不稳定内部版本不断添加新功能</li>
<li>beta版:公测版，不稳定(比alpha稳定些)，bug相对较多不断添加新功能</li>
<li>纯数字版</li>
</ul>
<h2 id="多环境配置与应用" tabindex="-1"><a class="header-anchor" href="#多环境配置与应用" aria-hidden="true">#</a> 多环境配置与应用</h2>
<p>两个内容，分别是<code v-pre>多环境开发</code>和<code v-pre>跳过测试</code></p>
<h3 id="多环境开发" tabindex="-1"><a class="header-anchor" href="#多环境开发" aria-hidden="true">#</a> 多环境开发</h3>
<p>具体实现步骤:</p>
<ol>
<li>父工程配置多个环境,并指定默认激活环境</li>
</ol>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--开发环境--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>env_dep<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jdbc.url</span><span class="token punctuation">></span></span>jdbc:mysql://127.1.1.1:3306/ssm_db<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jdbc.url</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--设定是否为默认启动环境--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activation</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeByDefault</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeByDefault</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activation</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--生产环境--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>env_pro<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jdbc.url</span><span class="token punctuation">></span></span>jdbc:mysql://127.2.2.2:3306/ssm_db<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jdbc.url</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--测试环境--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>env_test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jdbc.url</span><span class="token punctuation">></span></span>jdbc:mysql://127.3.3.3:3306/ssm_db<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jdbc.url</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>命令行实现环境切换</li>
</ol>
<p><img src="https://s2.loli.net/2022/07/10/4fWzARVkBUwsolX.png" alt="maven_6下载" loading="lazy">
所以总结来说，对于多环境切换只需要两步即可:</p>
<ul>
<li>父工程中定义多环境</li>
</ul>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>环境名称<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
        	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>key</span><span class="token punctuation">></span></span>value<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>key</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activation</span><span class="token punctuation">></span></span>
        	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeByDefault</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeByDefault</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activation</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">></span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用多环境(构建过程)</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mvn 指令 -P 环境定义ID[环境定义中获取]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="跳过测试" tabindex="-1"><a class="header-anchor" href="#跳过测试" aria-hidden="true">#</a> 跳过测试</h3>
<ol>
<li>IDEA工具实现跳过测试</li>
</ol>
<p><img src="https://s2.loli.net/2022/07/10/GXg71IKMD8iR4yA.png" alt="maven_7" loading="lazy">
如果我们想更精细的控制哪些跳过哪些不跳过，就需要使用配置插件的方式</p>
<ol start="2">
<li>配置插件实现跳过测试</li>
</ol>
<p>在父工程中的pom.xml中添加测试插件配置</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>maven-surefire-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.12.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>skipTests</span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>skipTests</span><span class="token punctuation">></span></span>
                <span class="token comment">&lt;!--排除掉不参与测试的内容--></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>excludes</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclude</span><span class="token punctuation">></span></span>**/BookServiceTest.java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclude</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>excludes</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>skipTests:如果为true，则跳过所有测试，如果为false，则不跳过测试</p>
<p>excludes：哪些测试类不参与测试，即排除，针对skipTests为false来设置的</p>
<p>includes: 哪些测试类要参与测试，即包含,针对skipTests为true来设置的</p>
<ol start="3">
<li>命令行跳过测试</li>
</ol>
<p><img src="https://s2.loli.net/2022/07/10/mvxnPLjVdHeyrqJ.png" alt="maven_8" loading="lazy">
使用Maven的命令行，<code v-pre>mvn 指令 -D skipTests</code></p>
<p>注意事项:</p>
<ul>
<li>执行的项目构建指令必须包含测试生命周期，否则无效果。例如执行compile生命周期，不经过test生命周期。</li>
<li>该命令可以不借助IDEA，直接使用cmd命令行进行跳过测试，需要注意的是cmd要在pom.xml所在目录下进行执行。</li>
</ul>
<h2 id="私服" tabindex="-1"><a class="header-anchor" href="#私服" aria-hidden="true">#</a> 私服</h2>
<ul>
<li>私服简介</li>
<li>私服仓库分类</li>
<li>资源上传与下载</li>
</ul>
<h3 id="私服简介" tabindex="-1"><a class="header-anchor" href="#私服简介" aria-hidden="true">#</a> 私服简介</h3>
<p>私服:公司内部搭建的用于存储Maven资源的服务器</p>
<p>远程仓库:Maven开发团队维护的用于存储Maven资源的服务器</p>
<p>所以说:</p>
<ul>
<li>私服是一台独立的服务器，用于解决团队内部的资源共享与资源同步问题</li>
</ul>
<p>搭建Maven私服的方式有很多，我们来介绍其中一种使用量比较大的实现方式:</p>
<ul>
<li>Nexus
<ul>
<li>Sonatype公司的一款maven私服产品</li>
<li>下载地址：<a href="https://help.sonatype.com/repomanager3/download" target="_blank" rel="noopener noreferrer">https://help.sonatype.com/repomanager3/download<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h4 id="私服安装" tabindex="-1"><a class="header-anchor" href="#私服安装" aria-hidden="true">#</a> 私服安装</h4>
<ol>
<li>下载解压</li>
</ol>
<p>将<code v-pre>资料\latest-win64.zip</code>解压到一个空目录下</p>
<ol start="2">
<li>启动Nexus</li>
</ol>
<p>使用cmd进入到解压目录下的<code v-pre>nexus-3.30.1-01\bin</code>,执行如下命令:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>nexus.exe /run nexus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>浏览器访问</li>
</ol>
<p>访问地址为:<code v-pre>http://localhost:8081</code></p>
<p>如果要想修改一些基础配置信息，可以使用:</p>
<ul>
<li>修改基础配置信息
<ul>
<li>安装路径下etc目录中nexus-default.properties文件保存有nexus基础配置信息，例如默认访问端口。</li>
</ul>
</li>
<li>修改服务器运行配置信息
<ul>
<li>安装路径下bin目录中nexus.vmoptions文件保存有nexus服务器启动对应的配置信息，例如默认占用内存空间。</li>
</ul>
</li>
</ul>
<h3 id="私服仓库分类" tabindex="-1"><a class="header-anchor" href="#私服仓库分类" aria-hidden="true">#</a> 私服仓库分类</h3>
<p>所有私服仓库总共分为三大类:</p>
<p>宿主仓库hosted</p>
<ul>
<li>保存无法从中央仓库获取的资源
<ul>
<li>自主研发</li>
<li>第三方非开源项目,比如Oracle,因为是付费产品，所以中央仓库没有</li>
</ul>
</li>
</ul>
<p>代理仓库proxy</p>
<ul>
<li>代理远程仓库，通过nexus访问其他公共仓库，例如中央仓库</li>
</ul>
<p>仓库组group</p>
<ul>
<li>将若干个仓库组成一个群组，简化配置</li>
<li>仓库组不能保存资源，属于设计型仓库</li>
</ul>
<p><img src="https://s2.loli.net/2022/07/10/bE4BOAp6tNdFume.png" alt="maven_9" loading="lazy"></p>
<h3 id="本地仓库访问私服配置" tabindex="-1"><a class="header-anchor" href="#本地仓库访问私服配置" aria-hidden="true">#</a> 本地仓库访问私服配置</h3>
<ul>
<li>我们通过IDEA将开发的模块上传到私服，中间是要经过本地Maven的</li>
<li>本地Maven需要知道私服的访问地址以及私服访问的用户名和密码</li>
<li>私服中的仓库很多，Maven最终要把资源上传到哪个仓库?</li>
<li>Maven下载的时候，又需要携带用户名和密码到私服上找对应的仓库组进行下载，然后再给IDEA</li>
</ul>
<p>需要在本地Maven的配置文件<code v-pre>settings.xml</code>中进行配置</p>
<ol>
<li>私服上配置仓库</li>
</ol>
<p><img src="https://s2.loli.net/2022/07/10/YnqsVHEWNCMtbeI.png" alt="" loading="lazy">
2. 配置本地Maven对私服的访问权限</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servers</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>server</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>itheima-snapshot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">></span></span>admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>username</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>password</span><span class="token punctuation">></span></span>admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>password</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>server</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>server</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>itheima-release<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">></span></span>admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>username</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>password</span><span class="token punctuation">></span></span>admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>password</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>server</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servers</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>配置私服的访问路径</li>
</ol>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrors</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--配置仓库组的ID--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>maven-public<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--*代表所有内容都从私服获取--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">></span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--私服仓库组maven-public的访问路径--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">></span></span>http://localhost:8081/repository/maven-public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrors</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="私服资源上传与下载" tabindex="-1"><a class="header-anchor" href="#私服资源上传与下载" aria-hidden="true">#</a> 私服资源上传与下载</h3>
<p>本地仓库与私服已经建立了连接，接下来我们就需要往私服上上传资源和下载资源，具体的实现步骤为:</p>
<ol>
<li>配置工程上传私服的具体位置</li>
</ol>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code> <span class="token comment">&lt;!--配置当前工程保存在私服中的具体位置--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>distributionManagement</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--和maven/settings.xml中server中的id一致，表示使用该id对应的用户名和密码--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>itheima-release<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
         <span class="token comment">&lt;!--release版本上传仓库的具体地址--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">></span></span>http://localhost:8081/repository/itheima-release/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshotRepository</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--和maven/settings.xml中server中的id一致，表示使用该id对应的用户名和密码--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>itheima-snapshot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--snapshot版本上传仓库的具体地址--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">></span></span>http://localhost:8081/repository/itheima-snapshot/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshotRepository</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>distributionManagement</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>发布资源到私服</li>
</ol>
<p><img src="https://s2.loli.net/2022/07/10/gTha4KbVituCEjM.png" alt="maven_11" loading="lazy">
或者执行Maven命令</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mvn deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意:</strong></p>
<p>要发布的项目都需要配置<code v-pre>distributionManagement</code>标签，要么在自己的pom.xml中配置，要么在其父项目中配置，然后子项目中继承父项目即可</p>
</div></template>
