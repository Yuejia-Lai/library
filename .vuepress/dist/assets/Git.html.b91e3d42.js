import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as d,a as e,b as n,d as i,e as l,r}from"./app.184c68c2.js";const c={},o=e("h3",{id:"git\u73AF\u5883\u914D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git\u73AF\u5883\u914D\u7F6E","aria-hidden":"true"},"#"),i(" Git\u73AF\u5883\u914D\u7F6E")],-1),u=e("ul",null,[e("li",null,"\u4E0B\u8F7D")],-1),g=i("\u94FE\u63A5\uFF1A"),v={href:"https://git-scm.com/download",target:"_blank",rel:"noopener noreferrer"},m=i("https://git-scm.com/download"),h=l(`<p>\u5B89\u88C5\u5B8C\u6210\u540E\u5728\u4EFB\u610F\u76EE\u5F55\u5355\u51FB\u9F20\u6807\u53F3\u952E\uFF0C\u5982\u679C\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u4E24\u4E2A\u9009\u9879\u5373\u5B89\u88C5\u6210\u529F\uFF1A</p><p><img src="https://s2.loli.net/2022/08/06/pqSdjNDHMzv6Qng.png" alt="123" loading="lazy"></p><p>Git GUI\uFF1AGit\u63D0\u4F9B\u7684\u56FE\u5F62\u754C\u9762\u5DE5\u5177</p><p>Git Bash\uFF1AGit\u63D0\u4F9B\u7684\u547D\u4EE4\u884C\u5DE5\u5177</p><ul><li>\u57FA\u672C\u8BBE\u7F6E</li></ul><p>\u6253\u5F00Git Bash\u8F93\u5165</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git config --global user.name \u201C\u4F60\u7684\u540D\u5B57\u201D
git config --global user.email \u201C\u4F60\u7684\u90AE\u7BB1\u201D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u67E5\u770B\u914D\u7F6E\u4FE1\u606F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git config --global user.name
git config --global user.email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u89E3\u51B3Git Bash\u4E71\u7801\u95EE\u9898\uFF1A</li></ul><ol><li>\u6253\u5F00Git Bash\u8F93\u5165\u4E0B\u5217\u6307\u4EE4\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git config --global core.quotepath false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\${git_home}/etc/bash.bashrc \u6587\u4EF6\u6700\u540E\u52A0\u5165\u4E0B\u9762\u4E24\u884C:</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export LANG=&quot;zh_CN.UTF-8&quot;
export LC_ALL=&quot;zh_CN.UTF-8&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6\u672C\u5730\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u672C\u5730\u4ED3\u5E93" aria-hidden="true">#</a> \u83B7\u53D6\u672C\u5730\u4ED3\u5E93</h3><p>\u8981\u4F7F\u7528Git\u5BF9\u6211\u4EEC\u7684\u4EE3\u7801\u8FDB\u884C\u7248\u672C\u63A7\u5236\uFF0C\u9996\u5148\u9700\u8981\u83B7\u5F97\u672C\u5730\u4ED3\u5E93</p><ol><li><p>\u5728\u7535\u8111\u7684\u4EFB\u610F\u4F4D\u7F6E\u521B\u5EFA\u4E00\u4E2A\u7A7A\u76EE\u5F55\uFF08\u4F8B\u5982test\uFF09\u4F5C\u4E3A\u6211\u4EEC\u7684\u672C\u5730Git\u4ED3\u5E93</p></li><li><p>\u8FDB\u5165\u8FD9\u4E2A\u76EE\u5F55\u4E2D\uFF0C\u70B9\u51FB\u53F3\u952E\u6253\u5F00Git bash\u7A97\u53E3</p></li><li><p>\u6267\u884C\u547D\u4EE4git init</p></li><li><p>\u5982\u679C\u521B\u5EFA\u6210\u529F\u540E\u53EF\u5728\u6587\u4EF6\u5939\u4E0B\u770B\u5230\u9690\u85CF\u7684.git\u76EE\u5F55</p></li></ol><h3 id="\u57FA\u7840\u64CD\u4F5C\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u64CD\u4F5C\u6307\u4EE4" aria-hidden="true">#</a> \u57FA\u7840\u64CD\u4F5C\u6307\u4EE4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -rf .git \u64A4\u9500git init
git add //\u5DE5\u4F5C\u533A-\u300B\u6682\u5B58\u533A
git commit //\u6682\u5B58\u533A-\u300B\u672C\u5730\u4ED3\u5E93
git status //\u67E5\u770B\u5DE5\u4F5C\u533A\u6682\u5B58\u533A\u72B6\u6001
git add \u5355\u4E2A\u6587\u4EF6\u540D|\u901A\u914D\u7B26 //\u6DFB\u52A0\u5DE5\u4F5C\u533A\u4E00\u4E2A\u6216\u591A\u4E2A\u6587\u4EF6\u7684\u4FEE\u6539\u5230\u6682\u5B58\u533A
git commit -m &#39;\u6CE8\u91CA\u5185\u5BB9&#39; //\u53EF\u52A0\u6CE8\u91CA\u5185\u5BB9\u7684\u63D0\u4EA4
git log [option] //\u67E5\u770B\u63D0\u4EA4\u65E5\u5FD7 option\u53EF\u586B\uFF1A--all \u663E\u793A\u6240\u6709\u5206\u652F
					--pretty=oneline  \u5C06\u63D0\u4EA4\u4FE1\u606F\u663E\u793A\u4E3A\u4E00\u884C
					--abbrev-commit \u4F7F\u5F97\u8F93\u51FA\u7684commitId\u66F4\u7B80\u77ED
					-graph \u4EE5\u56FE\u7684\u5F62\u5F0F\u663E\u793A
git reset --hard commitID //\u7248\u672C\u56DE\u9000\uFF08commitID \u53EF\u4EE5\u4F7F\u7528 git-log \u6216 git log \u6307\u4EE4\u67E5\u770B\uFF0Cgit reflog \u8FD9\u4E2A\u6307\u4EE4\u53EF\u4EE5\u770B\u5230\u5DF2\u7ECF\u5220\u9664\u7684\u63D0\u4EA4\u8BB0\u5F55\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F" aria-hidden="true">#</a> \u5206\u652F</h3><p>\u51E0\u4E4E\u6240\u6709\u7684\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u90FD\u4EE5\u67D0\u79CD\u5F62\u5F0F\u652F\u6301\u5206\u652F\u3002 \u4F7F\u7528\u5206\u652F\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u628A\u4F60\u7684\u5DE5\u4F5C\u4ECE\u5F00\u53D1\u4E3B\u7EBF\u4E0A\u5206\u79BB\u5F00\u6765\u8FDB\u884C\u91CD\u5927\u7684Bug\u4FEE\u6539\u3001\u5F00\u53D1\u65B0\u7684\u529F\u80FD\uFF0C\u4EE5\u514D\u5F71\u54CD\u5F00\u53D1\u4E3B\u7EBF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git branch  //\u67E5\u770B\u672C\u5730\u5206\u652F
git branch \u5206\u652F\u540D  //\u521B\u5EFA\u672C\u5730\u5206\u652F
git checkout \u5206\u652F\u540D  //\u5207\u6362\u5206\u652F
git checkout -b \u5206\u652F\u540D  //\u76F4\u63A5\u5207\u6362\u5230\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u5206\u652F\uFF08\u521B\u5EFA\u5E76\u5207\u6362\uFF09
git merge \u5206\u652F\u540D\u79F0   //\u4E00\u4E2A\u5206\u652F\u4E0A\u7684\u63D0\u4EA4\u53EF\u4EE5\u5408\u5E76\u5230\u53E6\u4E00\u4E2A\u5206\u652F
git branch -d b1 \u5220\u9664\u5206\u652F\u65F6\uFF0C\u9700\u8981\u505A\u5404\u79CD\u68C0\u67E5
git branch -D b1 \u4E0D\u505A\u4EFB\u4F55\u68C0\u67E5\uFF0C\u5F3A\u5236\u5220\u9664
git branch -m oldname newname \u5206\u652F\u6539\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u4E8E\u5206\u652F\u7684\u51B2\u7A81\u8FD9\u91CC\u4E0D\u8BE6\u7EC6\u5C55\u5F00\u3002</p><h3 id="git\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#git\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a> Git\u8FDC\u7A0B\u4ED3\u5E93</h3>`,24),p=i("\u5E38\u7528\u7684\u6709Gitee\uFF1A"),b={href:"https://gitee.com/",target:"_blank",rel:"noopener noreferrer"},x=i("https://gitee.com/"),_=i("Github\uFF1A"),f={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},G=i("https://github.com/"),k=i("Gitlab\uFF1A"),B={href:"https://about.gitlab.com/",target:"_blank",rel:"noopener noreferrer"},N=i("https://about.gitlab.com/"),S=i(" \uFF09"),q=l(`<p>\u8FD9\u91CC\u4EE5\u7801\u4E91\uFF08Gitee\uFF09\u4E3A\u4F8B\uFF1A</p><ul><li>\u6CE8\u518C\u7801\u4E91\u8D26\u53F7</li><li>\u65B0\u5EFA\u4ED3\u5E93</li></ul><p><img src="https://s2.loli.net/2022/08/06/UPYOHT19gXqN52l.png" alt="12" loading="lazy"></p><p>\u4ED3\u5E93\u5730\u5740\u5982\u4E0B\uFF1A</p><p><img src="https://s2.loli.net/2022/08/06/9UPOn45BKCdwm6H.png" alt="1235" loading="lazy"></p><ul><li>\u914D\u7F6ESSH\u516C\u94A5</li></ul><ol><li>\u751F\u6210SSH\u516C\u94A5\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ssh-keygen -t rsa   //\u4E4B\u540E\u6309\u8981\u6C42\u56DE\u8F66\u6216\u8005\u8F93\u5165y/yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F</strong>\uFF1A\u5982\u679C\u5DF2\u7ECF\u521B\u5EFA\u8FC7\u516C\u94A5\uFF0C\u6B64\u64CD\u4F5C\u4F1A\u5C06\u539F\u6709\u7684\u516C\u94A5\u8986\u76D6\uFF01\uFF01\uFF01</p><ol start="2"><li>Gitee\u8D26\u6237\u914D\u7F6E\u516C\u94A5\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat ~/.ssh/id_rsa.pub //\u83B7\u53D6\u516C\u94A5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Gitee\u4E2D\u52A0\u5165\u516C\u94A5\uFF1A</p><p><img src="https://s2.loli.net/2022/08/06/9WfmpaqKhtFQESi.png" alt="\u4E0B\u8F7D" loading="lazy"></p><p>\u9A8C\u8BC1\u914D\u7F6E\u662F\u5426\u6210\u529F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ssh -T git@gitee.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u64CD\u4F5C\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a> \u64CD\u4F5C\u8FDC\u7A0B\u4ED3\u5E93</h3><ul><li>\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> git remote add &lt;\u8FDC\u7AEF\u540D\u79F0&gt; &lt;\u4ED3\u5E93\u8DEF\u5F84&gt; //\u8FDC\u7AEF\u540D\u79F0\u4E00\u822C\u4E3Aorigin\uFF0C\u4ED3\u5E93\u8DEF\u5F84\u4E3A\u4E0A\u9762\u7684SSH\u5730\u5740
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF08\u65B9\u62EC\u53F7\u91CC\u4E3A\u53EF\u9009\u5185\u5BB9\uFF09</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git push [-f] [--set-upstream] [\u8FDC\u7AEF\u540D\u79F0 [\u672C\u5730\u5206\u652F\u540D][:\u8FDC\u7AEF\u5206\u652F\u540D] ]
git push origin master		//\u4E00\u822C\u7528\u8FD9\u4E2A\uFF08\u8FDC\u7AEF\u5206\u652F\u4E0E\u672C\u5730\u5206\u652F\u540D\u79F0\u76F8\u540C\uFF09
		//-f \u8868\u793A\u5F3A\u5236\u8986\u76D6	
		//--set-upstream \u63A8\u9001\u5230\u8FDC\u7AEF\u7684\u540C\u65F6\u5E76\u4E14\u5EFA\u7ACB\u8D77\u548C\u8FDC\u7AEF\u5206\u652F\u7684\u5173\u8054\u5173\u7CFB\u3002\uFF08\u7B2C\u4E00\u6B21\u7528\uFF09
git push    //\u5DF2\u7ECF\u5173\u8054\u7528\u8FD9\u4E2A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git branch -vv  //\u67E5\u770B\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u7684\u5173\u8054\u5173\u7CFB
git clone &lt;\u4ED3\u5E93\u8DEF\u5F84&gt; [\u672C\u5730\u76EE\u5F55]  //\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u514B\u9686
git fetch [remote name] [branch name] 
//\u6293\u53D6\u6307\u4EE4\u5C31\u662F\u5C06\u4ED3\u5E93\u91CC\u7684\u66F4\u65B0\u90FD\u6293\u53D6\u5230\u672C\u5730\uFF0C\u4E0D\u4F1A\u8FDB\u884C\u5408\u5E76
git pull [remote name] [branch name] 
//\u62C9\u53D6\u6307\u4EE4\u5C31\u662F\u5C06\u8FDC\u7AEF\u4ED3\u5E93\u7684\u4FEE\u6539\u62C9\u5230\u672C\u5730\u5E76\u81EA\u52A8\u8FDB\u884C\u5408\u5E76\uFF0C\u7B49\u540C\u4E8Efetch+merge\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\u8FDC\u7AEF\u540D\u79F0\u548C\u5206\u652F\u540D\uFF0C\u5219\u6293\u53D6\u6240\u6709\u5E76\u66F4\u65B0\u5F53\u524D\u5206\u652F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function y(z,H){const t=r("ExternalLinkIcon");return s(),d("div",null,[o,u,e("p",null,[g,e("a",v,[m,n(t)])]),h,e("p",null,[p,e("a",b,[x,n(t)])]),e("p",null,[_,e("a",f,[G,n(t)])]),e("p",null,[k,e("a",B,[N,n(t)]),S]),q])}var C=a(c,[["render",y],["__file","Git.html.vue"]]);export{C as default};