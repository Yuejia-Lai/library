---
title: MyBatis的增删改查
icon: iconfont icon-data
date: 2022-09-19
---

## 新增

```xml
<!--int insertUser();-->
<insert id="insertUser">
	insert into t_user values(null,'admin','123456',23,'男')
</insert>
```

## 删除

```xml
<!--int deleteUser();-->
<delete id="deleteUser">
	delete from t_user where id = 7
</delete>
```

## 修改

```xml
<!--int updateUser();-->
<update id="updateUser">
	update t_user set username='ybc',password='123' where id = 6
</update>
```

## 查询一个实体类对象

```xml
<!--User getUserById();-->
<select id="getUserById" resultType="com.atguigu.mybatis.bean.User">
	select * from t_user where id = 2
</select>
```

## 查询list集合

```xml
<!--List<User> getUserList();-->
<select id="getUserList" resultType="com.atguigu.mybatis.bean.User">
	select * from t_user
</select>
```

> 注意： 
>
> 1、查询的标签select必须设置属性resultType或resultMap，用于设置实体类和数据库表的映射 关系 
>
> resultType：自动映射，用于属性名和表中字段名一致的情况 
>
> resultMap：自定义映射，用于一对多或多对一或字段名和属性名不一致的情况
