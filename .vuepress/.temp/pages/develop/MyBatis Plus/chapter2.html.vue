<template><div><h2 id="basemapper" tabindex="-1"><a class="header-anchor" href="#basemapper" aria-hidden="true">#</a> BaseMapper</h2>
<p>MyBatis-Plus中的基本CRUD在内置的BaseMapper中都已得到了实现，我们可以直接使用，接口如 下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>core<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">Mapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
    * 插入一条记录
    * <span class="token keyword">@param</span> <span class="token parameter">entity</span> 实体对象
    */</span>
    <span class="token keyword">int</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">T</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * 根据 ID 删除
    * <span class="token keyword">@param</span> <span class="token parameter">id</span> 主键ID
    */</span>
    <span class="token keyword">int</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token class-name">Serializable</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * 根据实体(ID)删除
    * <span class="token keyword">@param</span> <span class="token parameter">entity</span> 实体对象
    * <span class="token keyword">@since</span> 3.4.4
    */</span>
    <span class="token keyword">int</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token class-name">T</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * 根据 columnMap 条件，删除记录
    * <span class="token keyword">@param</span> <span class="token parameter">columnMap</span> 表字段 map 对象
    */</span>
    <span class="token keyword">int</span> <span class="token function">deleteByMap</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">COLUMN_MAP</span><span class="token punctuation">)</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> columnMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * 根据 entity 条件，删除记录
    * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类（可以为 null,里面的 entity 用于生成 where
    语句）
    */</span>
    <span class="token keyword">int</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * 删除（根据ID 批量删除）
    * <span class="token keyword">@param</span> <span class="token parameter">idList</span> 主键ID列表(不能为 null 以及 empty)
    */</span>
    <span class="token keyword">int</span> <span class="token function">deleteBatchIds</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">COLLECTION</span><span class="token punctuation">)</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span>
    <span class="token class-name">Serializable</span><span class="token punctuation">></span></span> idList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * 根据 ID 修改
    * <span class="token keyword">@param</span> <span class="token parameter">entity</span> 实体对象
    */</span>
    <span class="token keyword">int</span> <span class="token function">updateById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">ENTITY</span><span class="token punctuation">)</span> <span class="token class-name">T</span> entity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * 根据 whereEntity 条件，更新记录
    * <span class="token keyword">@param</span> <span class="token parameter">entity</span> 实体对象 (set 条件值,可以为 null)
    * <span class="token keyword">@param</span> <span class="token parameter">updateWrapper</span> 实体对象封装操作类（可以为 null,里面的 entity 用于生成
    where 语句）
    */</span>
    <span class="token keyword">int</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">ENTITY</span><span class="token punctuation">)</span> <span class="token class-name">T</span> entity<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> updateWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * 根据 ID 查询
    * <span class="token keyword">@param</span> <span class="token parameter">id</span> 主键ID
    */</span>
    <span class="token class-name">T</span> <span class="token function">selectById</span><span class="token punctuation">(</span><span class="token class-name">Serializable</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * 查询（根据ID 批量查询）
    * <span class="token keyword">@param</span> <span class="token parameter">idList</span> 主键ID列表(不能为 null 以及 empty)
    */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">selectBatchIds</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">COLLECTION</span><span class="token punctuation">)</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Serializable</span><span class="token punctuation">></span></span> idList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * 查询（根据 columnMap 条件）
    * <span class="token keyword">@param</span> <span class="token parameter">columnMap</span> 表字段 map 对象
    */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">selectByMap</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">COLUMN_MAP</span><span class="token punctuation">)</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> columnMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * 根据 entity 条件，查询一条记录
    * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>查询一条记录，例如 qw.last("limit 1") 限制取一条记录, 注意：多条数据会报异常
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类（可以为 null）
    */</span>
    <span class="token keyword">default</span> <span class="token class-name">T</span> <span class="token function">selectOne</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> ts <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span>queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>ts<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ts<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token class-name">ExceptionUtils</span><span class="token punctuation">.</span><span class="token function">mpe</span><span class="token punctuation">(</span><span class="token string">"One record is expected, but the query result is multiple records"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ts<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
    * 根据 Wrapper 条件，查询总记录数
    * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类（可以为 null）
    */</span>
    <span class="token class-name">Long</span> <span class="token function">selectCount</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * 根据 entity 条件，查询全部记录
    * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类（可以为 null）
    */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">selectList</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * 根据 Wrapper 条件，查询全部记录
    * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类（可以为 null）
    */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">selectMaps</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * 根据 Wrapper 条件，查询全部记录
    * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>注意： 只返回第一个字段的值<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类（可以为 null）
    */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> <span class="token function">selectObjs</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * 根据 entity 条件，查询全部记录（并翻页）
    * <span class="token keyword">@param</span> <span class="token parameter">page</span> 分页查询条件（可以为 RowBounds.DEFAULT）
    * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类（可以为 null）
    */</span>
    <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">P</span> <span class="token keyword">extends</span> <span class="token class-name">IPage</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token class-name">P</span> <span class="token function">selectPage</span><span class="token punctuation">(</span><span class="token class-name">P</span> page<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
    * 根据 Wrapper 条件，查询全部记录（并翻页）
    * <span class="token keyword">@param</span> <span class="token parameter">page</span> 分页查询条件
    * <span class="token keyword">@param</span> <span class="token parameter">queryWrapper</span> 实体对象封装操作类
    */</span>
    <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">P</span> <span class="token keyword">extends</span> <span class="token class-name">IPage</span><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token class-name">P</span> <span class="token function">selectMapsPage</span><span class="token punctuation">(</span><span class="token class-name">P</span> page<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token class-name">Constants</span><span class="token punctuation">.</span><span class="token constant">WRAPPER</span><span class="token punctuation">)</span> <span class="token class-name">Wrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
                         <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插入" tabindex="-1"><a class="header-anchor" href="#插入" aria-hidden="true">#</a> 插入</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testInsert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token string">"zhangsan@atguigu.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//INSERT INTO user ( id, name, age, email ) VALUES ( ?, ?, ?, ? )</span>
	<span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"受影响行数："</span><span class="token operator">+</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//1475754982694199298</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"id自动获取："</span><span class="token operator">+</span>user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>最终执行的结果，所获取的id为1475754982694199298</p>
<p>这是因为MyBatis-Plus在实现插入数据时，会默认基于雪花算法的策略生成id</p>
</blockquote>
<h2 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h2>
<h3 id="通过id删除记录" tabindex="-1"><a class="header-anchor" href="#通过id删除记录" aria-hidden="true">#</a> 通过id删除记录</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDeleteById</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//通过id删除用户信息</span>
	<span class="token comment">//DELETE FROM user WHERE id=?</span>
	<span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token number">1475754982694199298L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"受影响行数："</span><span class="token operator">+</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过id批量删除记录" tabindex="-1"><a class="header-anchor" href="#通过id批量删除记录" aria-hidden="true">#</a> 通过id批量删除记录</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDeleteBatchIds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//通过多个id批量删除</span>
	<span class="token comment">//DELETE FROM user WHERE id IN ( ? , ? , ? )</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">></span></span> idList <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> <span class="token number">2L</span><span class="token punctuation">,</span> <span class="token number">3L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">deleteBatchIds</span><span class="token punctuation">(</span>idList<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"受影响行数："</span><span class="token operator">+</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过map条件删除记录" tabindex="-1"><a class="header-anchor" href="#通过map条件删除记录" aria-hidden="true">#</a> 通过map条件删除记录</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDeleteByMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//根据map集合中所设置的条件删除记录</span>
	<span class="token comment">//DELETE FROM user WHERE name = ? AND age = ?</span>
	<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"张三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">deleteByMap</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"受影响行数："</span><span class="token operator">+</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testUpdateById</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">4L</span><span class="token punctuation">,</span> <span class="token string">"admin"</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//UPDATE user SET name=?, age=? WHERE id=?</span>
	<span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"受影响行数："</span><span class="token operator">+</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h2>
<h3 id="根据id查询用户信息" tabindex="-1"><a class="header-anchor" href="#根据id查询用户信息" aria-hidden="true">#</a> 根据id查询用户信息</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelectById</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//根据id查询用户信息</span>
	<span class="token comment">//SELECT id,name,age,email FROM user WHERE id=?</span>
	<span class="token class-name">User</span> user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectById</span><span class="token punctuation">(</span><span class="token number">4L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="根据多个id查询多个用户信息" tabindex="-1"><a class="header-anchor" href="#根据多个id查询多个用户信息" aria-hidden="true">#</a> 根据多个id查询多个用户信息</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelectBatchIds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//根据多个id查询多个用户信息</span>
	<span class="token comment">//SELECT id,name,age,email FROM user WHERE id IN ( ? , ? )</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">></span></span> idList <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">4L</span><span class="token punctuation">,</span> <span class="token number">5L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectBatchIds</span><span class="token punctuation">(</span>idList<span class="token punctuation">)</span><span class="token punctuation">;</span>
	list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过map条件查询用户信息" tabindex="-1"><a class="header-anchor" href="#通过map条件查询用户信息" aria-hidden="true">#</a> 通过map条件查询用户信息</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelectByMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//通过map条件查询用户信息</span>
	<span class="token comment">//SELECT id,name,age,email FROM user WHERE name = ? AND age = ?</span>
	<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"admin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectByMap</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
	list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询所有数据" tabindex="-1"><a class="header-anchor" href="#查询所有数据" aria-hidden="true">#</a> 查询所有数据</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSelectList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//查询所有用户信息</span>
	<span class="token comment">//SELECT id,name,age,email FROM user</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>通过观察BaseMapper中的方法，大多方法中都有Wrapper类型的形参，此为条件构造器，可针对于SQL语句设置不同的条件，若没有条件，则可以为该形参赋值null，即查询（删除/修改）所有数据</p>
</blockquote>
<h2 id="通用service" tabindex="-1"><a class="header-anchor" href="#通用service" aria-hidden="true">#</a> 通用Service</h2>
<blockquote>
<p>说明:</p>
<ul>
<li>通用 Service CRUD 封装IService接口，进一步封装 CRUD 采用 get 查询单行 remove 删 除 list 查询集合 page 分页 前缀命名方式区分 Mapper 层避免混淆，</li>
<li>泛型 T 为任意实体对象</li>
<li>建议如果存在自定义通用 Service 方法的可能，请创建自己的 IBaseService 继承 Mybatis-Plus 提供的基类</li>
<li>官网地址：<a href="https://baomidou.com/pages/49cc81/#service-crud-%E6%8E%A5%E5%8F%25" target="_blank" rel="noopener noreferrer">https://baomidou.com/pages/49cc81/#service-crud-接��%<ExternalLinkIcon/></a> A3</li>
</ul>
</blockquote>
<h3 id="iservice" tabindex="-1"><a class="header-anchor" href="#iservice" aria-hidden="true">#</a> IService</h3>
<p>MyBatis-Plus中有一个接口 IService和其实现类 ServiceImpl，封装了常见的业务层逻辑</p>
<p>详情查看源码IService和ServiceImpl</p>
<h3 id="创建service接口和实现类" tabindex="-1"><a class="header-anchor" href="#创建service接口和实现类" aria-hidden="true">#</a> 创建Service接口和实现类</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
* UserService继承IService模板提供的基础功能
*/</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token keyword">extends</span> <span class="token class-name">IService</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
* ServiceImpl实现了IService，提供了IService中基础功能的实现
* 若ServiceImpl无法满足业务需求，则可以使用自定的UserService定义方法，并在实现类中实现
*/</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserMapper</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试查询记录数" tabindex="-1"><a class="header-anchor" href="#测试查询记录数" aria-hidden="true">#</a> 测试查询记录数</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testGetCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">long</span> count <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"总记录数："</span> <span class="token operator">+</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试批量插入" tabindex="-1"><a class="header-anchor" href="#测试批量插入" aria-hidden="true">#</a> 测试批量插入</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSaveBatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">// SQL长度有限制，海量数据插入单条SQL无法实行，</span>
	<span class="token comment">// 因此MP将批量插入放在了通用Service中实现，而不是通用Mapper</span>
	<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> users <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">"ybc"</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">20</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		users<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//SQL:INSERT INTO t_user ( username, age ) VALUES ( ?, ? )</span>
	userService<span class="token punctuation">.</span><span class="token function">saveBatch</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="常用注解" tabindex="-1"><a class="header-anchor" href="#常用注解" aria-hidden="true">#</a> 常用注解</h1>
<h2 id="tablename" tabindex="-1"><a class="header-anchor" href="#tablename" aria-hidden="true">#</a> @TableName</h2>
<blockquote>
<p>经过以上的测试，在使用MyBatis-Plus实现基本的CRUD时，我们并没有指定要操作的表，只是在 Mapper接口继承BaseMapper时，设置了泛型User，而操作的表为user表</p>
<p>由此得出结论，MyBatis-Plus在确定操作的表时，由BaseMapper的泛型决定，即实体类型决 定，且默认操作的表名和实体类型的类名一致</p>
</blockquote>
<h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3>
<blockquote>
<p>若实体类类型的类名和要操作的表的表名不一致，会出现什么问题？</p>
<p>我们将表user更名为t_user，测试查询功能 程序抛出异常，Table 'mybatis_plus.user' doesn't exist，因为现在的表名为t_user，而默认操作 的表名和实体类型的类名一致，即user表</p>
</blockquote>
<h3 id="通过-tablename解决问题" tabindex="-1"><a class="header-anchor" href="#通过-tablename解决问题" aria-hidden="true">#</a> 通过@TableName解决问题</h3>
<blockquote>
<p>在实体类类型上添加@TableName(&quot;t_user&quot;)，标识实体类对应的表，即可成功执行SQL语句</p>
</blockquote>
<h3 id="通过全局配置解决问题" tabindex="-1"><a class="header-anchor" href="#通过全局配置解决问题" aria-hidden="true">#</a> 通过全局配置解决问题</h3>
<blockquote>
<p>在开发的过程中，我们经常遇到以上的问题，即实体类所对应的表都有固定的前缀，例如<code v-pre>t_</code>或<code v-pre>tbl_ </code></p>
<p>此时，可以使用MyBatis-Plus提供的全局配置，为实体类所对应的表名设置默认的前缀，那么就不需要在每个实体类上通过@TableName标识实体类对应的表</p>
</blockquote>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
	<span class="token key atrule">configuration</span><span class="token punctuation">:</span>
		<span class="token comment"># 配置MyBatis日志</span>
		<span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl
	<span class="token key atrule">global-config</span><span class="token punctuation">:</span>
		<span class="token key atrule">db-config</span><span class="token punctuation">:</span>
		<span class="token comment"># 配置MyBatis-Plus操作表的默认前缀</span>
			<span class="token key atrule">table-prefix</span><span class="token punctuation">:</span> t_
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tableid" tabindex="-1"><a class="header-anchor" href="#tableid" aria-hidden="true">#</a> @TableId</h2>
<blockquote>
<p>经过以上的测试，MyBatis-Plus在实现CRUD时，会默认将id作为主键列，并在插入数据时，默认基于雪花算法的策略生成id</p>
</blockquote>
<h3 id="问题-1" tabindex="-1"><a class="header-anchor" href="#问题-1" aria-hidden="true">#</a> 问题</h3>
<blockquote>
<p>若实体类和表中表示主键的不是id，而是其他字段，例如uid，MyBatis-Plus会自动识别uid为主 键列吗？</p>
<p>我们实体类中的属性id改为uid，将表中的字段id也改为uid，测试添加功能</p>
<p>程序抛出异常，Field 'uid' doesn't have a default value，说明MyBatis-Plus没有将uid作为主键赋值</p>
</blockquote>
<h3 id="通过-tableid解决问题" tabindex="-1"><a class="header-anchor" href="#通过-tableid解决问题" aria-hidden="true">#</a> 通过@TableId解决问题</h3>
<blockquote>
<p>在实体类中uid属性上通过@TableId将其标识为主键，即可成功执行SQL语句</p>
</blockquote>
<h3 id="tableid的value属性" tabindex="-1"><a class="header-anchor" href="#tableid的value属性" aria-hidden="true">#</a> @TableId的value属性</h3>
<blockquote>
<p>若实体类中主键对应的属性为id，而表中表示主键的字段为uid，此时若只在属性id上添加注解 @TableId，则抛出异常Unknown column 'id' in 'field list'，即MyBatis-Plus仍然会将id作为表的主键操作，而表中表示主键的是字段uid</p>
<p>此时需要通过@TableId注解的value属性，指定表中的主键字段，@TableId(&quot;uid&quot;)或 @TableId(value=&quot;uid&quot;)</p>
</blockquote>
<h3 id="tableid的type属性" tabindex="-1"><a class="header-anchor" href="#tableid的type属性" aria-hidden="true">#</a> @TableId的type属性</h3>
<blockquote>
<p>type属性用来定义主键策略</p>
</blockquote>
<p><strong>常用的主键策略：</strong></p>
<table>
<thead>
<tr>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>IdType.ASSIGN_ID（默 认）</td>
<td>基于雪花算法的策略生成数据id，与数据库id是否设置自增无关</td>
</tr>
<tr>
<td>IdType.AUTO</td>
<td>使用数据库的自增策略，注意，该类型请确保数据库设置了id自增， 否则无效</td>
</tr>
</tbody>
</table>
<p><strong>配置全局主键策略：</strong></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
	<span class="token key atrule">configuration</span><span class="token punctuation">:</span>
		<span class="token comment"># 配置MyBatis日志</span>
		<span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl
	<span class="token key atrule">global-config</span><span class="token punctuation">:</span>
		<span class="token key atrule">db-config</span><span class="token punctuation">:</span>
		<span class="token comment"># 配置MyBatis-Plus操作表的默认前缀</span>
			<span class="token key atrule">table-prefix</span><span class="token punctuation">:</span> t_
			<span class="token comment"># 配置MyBatis-Plus的主键策略</span>
			<span class="token key atrule">id-type</span><span class="token punctuation">:</span> auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="雪花算法" tabindex="-1"><a class="header-anchor" href="#雪花算法" aria-hidden="true">#</a> 雪花算法</h3>
<ul>
<li>背景</li>
</ul>
<p>需要选择合适的方案去应对数据规模的增长，以应对逐渐增长的访问压力和数据量。</p>
<p>数据库的扩展方式主要包括：业务分库、主从复制，数据库分表</p>
<ul>
<li>数据库分表</li>
</ul>
<p>将不同业务数据分散存储到不同的数据库服务器，能够支撑百万甚至千万用户规模的业务，但如果业务 继续发展，同一业务的单表数据也会达到单台数据库服务器的处理瓶颈。例如，淘宝的几亿用户数据， 如果全部存放在一台数据库服务器的一张表中，肯定是无法满足性能要求的，此时就需要对单表数据进行拆分。</p>
<p>单表数据拆分有两种方式：垂直分表和水平分表。示意图如下：</p>
<p><img src="https://s2.loli.net/2022/09/29/W7vJGN3beoHF6qg.png" alt="Snipaste_2022-09-29_17-59-20.png" loading="lazy"></p>
<ul>
<li>垂直分表</li>
</ul>
<p>垂直分表适合将表中某些不常用且占了大量空间的列拆分出去。</p>
<p>例如，前面示意图中的 nickname 和 description 字段，假设我们是一个婚恋网站，用户在筛选其他用户的时候，主要是用 age 和 sex 两个字段进行查询，而 nickname 和 description 两个字段主要用于展示，一般不会在业务查询中用到。description 本身又比较长，因此我们可以将这两个字段独立到另外 一张表中，这样在查询 age 和 sex 时，就能带来一定的性能提升</p>
<ul>
<li>水平分表</li>
</ul>
<p>水平分表适合表行数特别大的表，有的公司要求单表行数超过 5000 万就必须进行分表，这个数字可以作为参考，但并不是绝对标准，关键还是要看表的访问性能。对于一些比较复杂的表，可能超过 1000 万就要分表了；而对于一些简单的表，即使存储数据超过 1 亿行，也可以不分表。</p>
<p>但不管怎样，当看到表的数据量达到千万级别时，作为架构师就要警觉起来，因为这很可能是架构的性能瓶颈或者隐患。</p>
<p>水平分表相比垂直分表，会引入更多的复杂性，例如要求全局唯一的数据id该如何处理</p>
<blockquote>
<p>主键自增</p>
</blockquote>
<p>①以最常见的用户 ID 为例，可以按照 1000000 的范围大小进行分段，1 ~ 999999 放到表 1中， 1000000 ~ 1999999 放到表2中，以此类推。</p>
<p>②复杂点：分段大小的选取。分段太小会导致切分后子表数量过多，增加维护复杂度；分段太大可能会导致单表依然存在性能问题，一般建议分段大小在 100 万至 2000 万之间，具体需要根据业务选取合适 的分段大小。</p>
<p>③优点：可以随着数据的增加平滑地扩充新的表。例如，现在的用户是 100 万，如果增加到 1000 万，只需要增加新的表就可以了，原有的数据不需要动。</p>
<p>④缺点：分布不均匀。假如按照 1000 万来进行分表，有可能某个分段实际存储的数据量只有 1 条，而另外一个分段实际存储的数据量有 1000 万条</p>
<blockquote>
<p>取模</p>
</blockquote>
<p>①同样以用户 ID 为例，假如我们一开始就规划了 10 个数据库表，可以简单地用 user_id % 10 的值来表示数据所属的数据库表编号，ID 为 985 的用户放到编号为 5 的子表中，ID 为 10086 的用户放到编号为 6 的子表中。</p>
<p>②复杂点：初始表数量的确定。表数量太多维护比较麻烦，表数量太少又可能导致单表性能存在问题。</p>
<p>③优点：表分布比较均匀。</p>
<p>④缺点：扩充新的表很麻烦，所有数据都要重分布</p>
<blockquote>
<p>雪花算法</p>
</blockquote>
<p>雪花算法是由Twitter公布的分布式主键生成算法，它能够保证不同表的主键的不重复性，以及相同表的 主键的有序性。</p>
<p>①核心思想：</p>
<p>长度共64bit（一个long型）。</p>
<p>首先是一个符号位，1bit标识，由于long基本类型在Java中是带符号的，最高位是符号位，正数是0，负数是1，所以id一般是正数，最高位是0。</p>
<p>41bit时间截(毫秒级)，存储的是时间截的差值（当前时间截 - 开始时间截)，结果约等于69.73年。</p>
<p>10bit作为机器的ID（5个bit是数据中心，5个bit的机器ID，可以部署在1024个节点）。</p>
<p>12bit作为毫秒内的流水号（意味着每个节点在每毫秒可以产生 4096 个 ID）</p>
<p><img src="https://s2.loli.net/2022/09/29/1cwoj5uZf97JlYg.png" alt="Snipaste_2022-09-29_18-03-18.png" loading="lazy"></p>
<p>②优点：整体上按照时间自增排序，并且整个分布式系统内不会产生ID碰撞，并且效率较高。</p>
<h2 id="tablefield" tabindex="-1"><a class="header-anchor" href="#tablefield" aria-hidden="true">#</a> @TableField</h2>
<blockquote>
<p>经过以上的测试，我们可以发现，MyBatis-Plus在执行SQL语句时，要保证实体类中的属性名和 表中的字段名一致</p>
<p>如果实体类中的属性名和字段名不一致的情况，会出现什么问题呢？</p>
</blockquote>
<h3 id="情况1" tabindex="-1"><a class="header-anchor" href="#情况1" aria-hidden="true">#</a> 情况1</h3>
<blockquote>
<p>若实体类中的属性使用的是驼峰命名风格，而表中的字段使用的是下划线命名风格</p>
<p>例如实体类属性userName，表中字段user_name 此时MyBatis-Plus会自动将下划线命名风格转化为驼峰命名风格</p>
<p>相当于在MyBatis中配置</p>
</blockquote>
<h3 id="情况2" tabindex="-1"><a class="header-anchor" href="#情况2" aria-hidden="true">#</a> 情况2</h3>
<blockquote>
<p>若实体类中的属性和表中的字段不满足情况1</p>
<p>例如实体类属性name，表中字段username</p>
<p>此时需要在实体类属性上使用@TableField(&quot;username&quot;)设置属性所对应的字段名</p>
</blockquote>
<h2 id="tablelogic" tabindex="-1"><a class="header-anchor" href="#tablelogic" aria-hidden="true">#</a> @TableLogic</h2>
<h3 id="逻辑删除" tabindex="-1"><a class="header-anchor" href="#逻辑删除" aria-hidden="true">#</a> 逻辑删除</h3>
<ul>
<li>物理删除：真实删除，将对应数据从数据库中删除，之后查询不到此条被删除的数据</li>
<li>逻辑删除：假删除，将对应数据中代表是否被删除字段的状态修改为“被删除状态”，之后在数据库中仍旧能看到此条数据记录</li>
<li>使用场景：可以进行数据恢复</li>
</ul>
<h3 id="实现逻辑删除" tabindex="-1"><a class="header-anchor" href="#实现逻辑删除" aria-hidden="true">#</a> 实现逻辑删除</h3>
<blockquote>
<p>step1：数据库中创建逻辑删除状态列，设置默认值为0</p>
</blockquote>
<blockquote>
<p>step2：实体类中添加逻辑删除属性@TableLogic</p>
</blockquote>
<blockquote>
<p>step3：测试</p>
<p>测试删除功能，真正执行的是修改</p>
<p>UPDATE t_user SET is_deleted=1 WHERE id=? AND is_deleted=0</p>
<p>测试查询功能，被逻辑删除的数据默认不会被查询</p>
<p>SELECT id,username AS name,age,email,is_deleted FROM t_user WHERE is_deleted=0</p>
</blockquote>
</div></template>
