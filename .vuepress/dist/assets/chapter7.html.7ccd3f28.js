import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as e,e as i}from"./app.d822cdf7.js";const n={},r=i('<h2 id="\u5B9A\u65F6\u4EFB\u52A1\u8C03\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u65F6\u4EFB\u52A1\u8C03\u5EA6" aria-hidden="true">#</a> \u5B9A\u65F6\u4EFB\u52A1\u8C03\u5EA6</h2><h2 id="crond-\u4EFB\u52A1\u8C03\u5EA6" tabindex="-1"><a class="header-anchor" href="#crond-\u4EFB\u52A1\u8C03\u5EA6" aria-hidden="true">#</a> crond \u4EFB\u52A1\u8C03\u5EA6</h2><blockquote><p>crontab \u8FDB\u884C \u5B9A\u65F6\u4EFB\u52A1\u7684\u8BBE\u7F6E</p></blockquote><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u4EFB\u52A1\u8C03\u5EA6\uFF1A\u662F\u6307\u7CFB\u7EDF\u5728\u67D0\u4E2A\u65F6\u95F4\u6267\u884C\u7684\u7279\u5B9A\u7684\u547D\u4EE4\u6216\u7A0B\u5E8F\u3002</p><p>\u4EFB\u52A1\u8C03\u5EA6\u5206\u7C7B\uFF1A</p><ol><li><p>\u7CFB\u7EDF\u5DE5\u4F5C\uFF1A\u6709\u4E9B\u91CD\u8981\u7684\u5DE5\u4F5C\u5FC5\u987B\u5468\u800C\u590D\u59CB\u5730\u6267\u884C\u3002\u5982\u75C5\u6BD2\u626B\u63CF\u7B49</p></li><li><p>\u4E2A\u522B\u7528\u6237\u5DE5\u4F5C\uFF1A\u4E2A\u522B\u7528\u6237\u53EF\u80FD\u5E0C\u671B\u6267\u884C\u67D0\u4E9B\u7A0B\u5E8F\uFF0C\u6BD4\u5982\u5BF9 mysql \u6570\u636E\u5E93\u7684\u5907\u4EFD</p></li></ol><p><img src="https://s2.loli.net/2022/10/14/1r6wVM4W7Py3oAv.png" alt="Snipaste_2022-10-14_22-31-35.png" loading="lazy"></p><h3 id="\u57FA\u672C\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u8BED\u6CD5</h3><p>crontab [\u9009\u9879]</p><h3 id="\u5E38\u7528\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u9009\u9879" aria-hidden="true">#</a> \u5E38\u7528\u9009\u9879</h3><p><img src="https://s2.loli.net/2022/10/14/i6NIeJnQCVBhscZ.png" alt="Snipaste_2022-10-14_22-31-47.png" loading="lazy"></p><h3 id="\u5FEB\u901F\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5165\u95E8" aria-hidden="true">#</a> \u5FEB\u901F\u5165\u95E8</h3><p>\u8BBE\u7F6E\u4EFB\u52A1\u8C03\u5EA6\u6587\u4EF6\uFF1A/etc/crontab</p><p>\u8BBE\u7F6E\u4E2A\u4EBA\u4EFB\u52A1\u8C03\u5EA6\u3002\u6267\u884C crontab \u2013e \u547D\u4EE4\u3002</p><p>\u63A5\u7740\u8F93\u5165\u4EFB\u52A1\u5230\u8C03\u5EA6\u6587\u4EF6</p><p>\u5982\uFF1A*/1 * * * * ls \u2013l /etc/ &gt; /tmp/to.txt</p><p>\u610F\u601D\u8BF4\u6BCF\u5C0F\u65F6\u7684\u6BCF\u5206\u949F\u6267\u884C ls \u2013l /etc/ &gt; /tmp/to.txt \u547D\u4EE4</p><ul><li>\u53C2\u6570\u7EC6\u8282\u8BF4\u660E</li></ul><p>5 \u4E2A\u5360\u4F4D\u7B26\u7684\u8BF4\u660E</p><p><img src="https://s2.loli.net/2022/10/14/8WQ56cGaY93gPfV.png" alt="Snipaste_2022-10-14_22-35-08.png" loading="lazy"></p><p>\u7279\u6B8A\u7B26\u53F7\u7684\u8BF4\u660E</p><p><img src="https://s2.loli.net/2022/10/14/tuOLzxDXjZAG2yN.png" alt="Snipaste_2022-10-14_22-35-29.png" loading="lazy"></p><p>\u7279\u6B8A\u65F6\u95F4\u6267\u884C\u6848\u4F8B</p><p><img src="https://s2.loli.net/2022/10/14/lGCQHXmcwZpSz6a.png" alt="Snipaste_2022-10-14_22-39-21.png" loading="lazy"></p><h2 id="crond-\u76F8\u5173\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#crond-\u76F8\u5173\u6307\u4EE4" aria-hidden="true">#</a> crond \u76F8\u5173\u6307\u4EE4</h2><p>conrtab \u2013r\uFF1A\u7EC8\u6B62\u4EFB\u52A1\u8C03\u5EA6\u3002</p><p>crontab \u2013l\uFF1A\u5217\u51FA\u5F53\u524D\u6709\u90A3\u4E9B\u4EFB\u52A1\u8C03\u5EA6</p><p>service crond restart [\u91CD\u542F\u4EFB\u52A1\u8C03\u5EA6]</p><h2 id="at-\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#at-\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a> at \u5B9A\u65F6\u4EFB\u52A1</h2><h3 id="\u57FA\u672C\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4ECB\u7ECD" aria-hidden="true">#</a> \u57FA\u672C\u4ECB\u7ECD</h3><ul><li>at \u547D\u4EE4\u662F\u4E00\u6B21\u6027\u5B9A\u65F6\u8BA1\u5212\u4EFB\u52A1\uFF0Cat \u7684\u5B88\u62A4\u8FDB\u7A0B atd \u4F1A\u4EE5\u540E\u53F0\u6A21\u5F0F\u8FD0\u884C\uFF0C\u68C0\u67E5\u4F5C\u4E1A\u961F\u5217\u6765\u8FD0\u884C\u3002</li><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Catd \u5B88\u62A4\u8FDB\u7A0B\u6BCF 60 \u79D2\u68C0\u67E5\u4F5C\u4E1A\u961F\u5217\uFF0C\u6709\u4F5C\u4E1A\u65F6\uFF0C\u4F1A\u68C0\u67E5\u4F5C\u4E1A\u8FD0\u884C\u65F6\u95F4\uFF0C\u5982\u679C\u65F6\u95F4\u4E0E\u5F53\u524D\u65F6\u95F4\u5339\u914D\uFF0C\u5219\u8FD0\u884C\u6B64\u4F5C\u4E1A\u3002</li><li>at \u547D\u4EE4\u662F\u4E00\u6B21\u6027\u5B9A\u65F6\u8BA1\u5212\u4EFB\u52A1\uFF0C\u6267\u884C\u5B8C\u4E00\u4E2A\u4EFB\u52A1\u540E\u4E0D\u518D\u6267\u884C\u6B64\u4EFB\u52A1\u4E86</li><li>\u5728\u4F7F\u7528 at \u547D\u4EE4\u7684\u65F6\u5019\uFF0C\u4E00\u5B9A\u8981\u4FDD\u8BC1 atd \u8FDB\u7A0B\u7684\u542F\u52A8 , \u53EF\u4EE5\u4F7F\u7528\u76F8\u5173\u6307\u4EE4\u6765\u67E5\u770B ps -ef | grep atd //\u53EF\u4EE5\u68C0\u6D4B atd \u662F\u5426\u5728\u8FD0\u884C</li></ul><h3 id="at-\u547D\u4EE4\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#at-\u547D\u4EE4\u683C\u5F0F" aria-hidden="true">#</a> at \u547D\u4EE4\u683C\u5F0F</h3><p>at [\u9009\u9879] [\u65F6\u95F4]</p><p>Ctrl + D \u7ED3\u675F at \u547D\u4EE4\u7684\u8F93\u5165\uFF0C \u8F93\u51FA\u4E24\u6B21</p><h3 id="at-\u547D\u4EE4\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#at-\u547D\u4EE4\u9009\u9879" aria-hidden="true">#</a> at \u547D\u4EE4\u9009\u9879</h3><p><img src="https://s2.loli.net/2022/10/14/jbFp5nGX3clIqOt.png" alt="Snipaste_2022-10-14_22-43-23.png" loading="lazy"></p><h3 id="at-\u65F6\u95F4\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#at-\u65F6\u95F4\u5B9A\u4E49" aria-hidden="true">#</a> at \u65F6\u95F4\u5B9A\u4E49</h3><ul><li>\u63A5\u53D7\u5728\u5F53\u5929\u7684 hh:mm\uFF08\u5C0F\u65F6:\u5206\u949F\uFF09\u5F0F\u7684\u65F6\u95F4\u6307\u5B9A\u3002\u5047\u5982\u8BE5\u65F6\u95F4\u5DF2\u8FC7\u53BB\uFF0C\u90A3\u4E48\u5C31\u653E\u5728\u7B2C\u4E8C\u5929\u6267\u884C\u3002 \u4F8B\u5982\uFF1A04:00</li><li>\u4F7F\u7528 midnight\uFF08\u6DF1\u591C\uFF09\uFF0Cnoon\uFF08\u4E2D\u5348\uFF09\uFF0Cteatime\uFF08\u996E\u8336\u65F6\u95F4\uFF0C\u4E00\u822C\u662F\u4E0B\u5348 4 \u70B9\uFF09\u7B49\u6BD4\u8F83\u6A21\u7CCA\u7684\u8BCD\u8BED\u6765\u6307\u5B9A\u65F6\u95F4\u3002</li><li>\u91C7\u7528 12 \u5C0F\u65F6\u8BA1\u65F6\u5236\uFF0C\u5373\u5728\u65F6\u95F4\u540E\u9762\u52A0\u4E0A AM\uFF08\u4E0A\u5348\uFF09\u6216 PM\uFF08\u4E0B\u5348\uFF09\u6765\u8BF4\u660E\u662F\u4E0A\u5348\u8FD8\u662F\u4E0B\u5348\u3002 \u4F8B\u5982\uFF1A12pm</li><li>\u6307\u5B9A\u547D\u4EE4\u6267\u884C\u7684\u5177\u4F53\u65E5\u671F\uFF0C\u6307\u5B9A\u683C\u5F0F\u4E3A month day\uFF08\u6708 \u65E5\uFF09\u6216 mm/dd/yy\uFF08\u6708/\u65E5/\u5E74\uFF09\u6216 dd.mm.yy\uFF08\u65E5.\u6708.\u5E74\uFF09\uFF0C\u6307\u5B9A\u7684\u65E5\u671F\u5FC5\u987B\u8DDF\u5728\u6307\u5B9A\u65F6\u95F4\u7684\u540E\u9762\u3002 \u4F8B\u5982\uFF1A04:00 2021-03-1</li><li>\u4F7F\u7528\u76F8\u5BF9\u8BA1\u65F6\u6CD5\u3002\u6307\u5B9A\u683C\u5F0F\u4E3A\uFF1Anow + count time-units \uFF0Cnow \u5C31\u662F\u5F53\u524D\u65F6\u95F4\uFF0Ctime-units \u662F\u65F6\u95F4\u5355\u4F4D\uFF0C\u8FD9\u91CC\u80FD\u591F\u662F minutes \uFF08\u5206\u949F\uFF09\u3001hours\uFF08\u5C0F\u65F6\uFF09\u3001days\uFF08\u5929\uFF09\u3001weeks\uFF08\u661F\u671F\uFF09\u3002count \u662F\u65F6\u95F4\u7684\u6570\u91CF\uFF0C\u51E0\u5929\uFF0C\u51E0\u5C0F\u65F6\u3002 \u4F8B\u5982\uFF1Anow + 5 minutes</li><li>\u76F4\u63A5\u4F7F\u7528 today\uFF08\u4ECA\u5929\uFF09\u3001tomorrow\uFF08\u660E\u5929\uFF09\u6765\u6307\u5B9A\u5B8C\u6210\u547D\u4EE4\u7684\u65F6\u95F4\u3002</li></ul>',39),l=[r];function d(h,p){return t(),e("div",null,l)}var c=a(n,[["render",d],["__file","chapter7.html.vue"]]);export{c as default};