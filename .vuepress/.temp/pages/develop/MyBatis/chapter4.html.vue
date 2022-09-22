<template><div><blockquote>
<p>MyBatis获取参数值的两种方式：${}和#{}</p>
<p>${}的本质就是字符串拼接，#{}的本质就是占位符赋值</p>
<p>${}使用字符串拼接的方式拼接sql，若为字符串类型或日期类型的字段进行赋值时，需要手动加单引号；</p>
<p>#{}使用占位符赋值的方式拼接sql，此时为字符串类型或日期类型的字段进行赋值时， 可以自动添加单引号</p>
</blockquote>
<h2 id="单个字面量类型的参数" tabindex="-1"><a class="header-anchor" href="#单个字面量类型的参数" aria-hidden="true">#</a> 单个字面量类型的参数</h2>
<blockquote>
<p>若mapper接口中的方法参数为单个的字面量类型</p>
<p>此时可以使用<span class='katex-error' title='ParseError: KaTeX parse error: Expected &#039;EOF&#039;, got &#039;#&#039; at position 4: {}和#̲{}以任意的名称获取参数的值，…'>{}和#{}以任意的名称获取参数的值，注意</span>{}需要手动加单引号</p>
</blockquote>
<h2 id="多个字面量类型的参数" tabindex="-1"><a class="header-anchor" href="#多个字面量类型的参数" aria-hidden="true">#</a> 多个字面量类型的参数</h2>
<blockquote>
<p>若mapper接口中的方法参数为多个时</p>
<p>此时MyBatis会自动将这些参数放在一个map集合中，以arg0,arg1...为键，以参数为值；以 param1,param2...为键，以参数为值；</p>
<p>因此只需要通过<span class='katex-error' title='ParseError: KaTeX parse error: Expected &#039;EOF&#039;, got &#039;#&#039; at position 4: {}和#̲{}访问map集合的键就可以获…'>{}和#{}访问map集合的键就可以获取相 对应的 值，注意</span>{}需要手动加单引号</p>
</blockquote>
<h2 id="map集合类型的参数" tabindex="-1"><a class="header-anchor" href="#map集合类型的参数" aria-hidden="true">#</a> map集合类型的参数</h2>
<blockquote>
<p>若mapper接口中的方法需要的参数为多个时，此时可以手动创建map集合，将这些数据放在 map中</p>
<p>只需要通过<span class='katex-error' title='ParseError: KaTeX parse error: Expected &#039;EOF&#039;, got &#039;#&#039; at position 4: {}和#̲{}访问map集合的键就可以获…'>{}和#{}访问map集合的键就可以获取相对应的值，注意</span>{}需要手动加单引号</p>
</blockquote>
<h2 id="实体类类型的参数" tabindex="-1"><a class="header-anchor" href="#实体类类型的参数" aria-hidden="true">#</a> 实体类类型的参数</h2>
<blockquote>
<p>若mapper接口中的方法参数为实体类对象时</p>
<p>此时可以使用<span class='katex-error' title='ParseError: KaTeX parse error: Expected &#039;EOF&#039;, got &#039;#&#039; at position 4: {}和#̲{}，通过访问实体类对象中的属…'>{}和#{}，通过访问实体类对象中的属性名获取属性值，注意</span>{}需要手动加单引号</p>
</blockquote>
<h2 id="使用-param标识参数" tabindex="-1"><a class="header-anchor" href="#使用-param标识参数" aria-hidden="true">#</a> 使用@Param标识参数</h2>
<blockquote>
<p>可以通过@Param注解标识mapper接口中的方法参数</p>
<p>此时，会将这些参数放在map集合中，以@Param注解的value属性值为键，以参数为值；以 param1,param2...为键，以参数为值；只需要通过${}和#{}访问map集合的键就可以获取相对应的值</p>
<p>注意${}需要手动加单引号</p>
</blockquote>
</div></template>
