---
title: 通用枚举，代码生成器与多数据源配置
icon: iconfont icon-sharpicons_database-center
date: 2022-10-01
---

## 通用枚举

> 表中的有些字段值是固定的，例如性别（男或女），此时我们可以使用MyBatis-Plus的通用枚举 来实现

### 数据库表添加字段sex

### 创建通用枚举类型

```java
package com.atguigu.mp.enums;

import com.baomidou.mybatisplus.annotation.EnumValue;
import lombok.Getter;

@Getter
public enum SexEnum {
	MALE(1, "男"),
	FEMALE(2, "女");
	@EnumValue
	private Integer sex;
	private String sexName;
	SexEnum(Integer sex, String sexName) {
		this.sex = sex;
		this.sexName = sexName;
	}
}
```

### 配置扫描通用枚举

```xml
mybatis-plus:
	configuration:
		# 配置MyBatis日志
		log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
	global-config:
		db-config:
			# 配置MyBatis-Plus操作表的默认前缀
			table-prefix: t_
			# 配置MyBatis-Plus的主键策略
			id-type: auto
	# 配置扫描通用枚举
	type-enums-package: com.atguigu.mybatisplus.enums
```

### 测试

```java
@Test
public void testSexEnum(){
	User user = new User();
	user.setName("Enum");
	user.setAge(20);
	//设置性别信息为枚举项，会将@EnumValue注解所标识的属性值存储到数据库
	user.setSex(SexEnum.MALE);
	//INSERT INTO t_user ( username, age, sex ) VALUES ( ?, ?, ? )
	//Parameters: Enum(String), 20(Integer), 1(Integer)
	userMapper.insert(user);
}
```

## 代码生成器

### 引入依赖

```xml
<dependency>
	<groupId>com.baomidou</groupId>
	<artifactId>mybatis-plus-generator</artifactId>
	<version>3.5.1</version>
</dependency>
<dependency>
	<groupId>org.freemarker</groupId>
	<artifactId>freemarker</artifactId>
	<version>2.3.31</version>
</dependency>
```

### 快速生成

```java
public class FastAutoGeneratorTest {
    public static void main(String[] args) {
	FastAutoGenerator.create("jdbc:mysql://127.0.0.1:3306/mybatis_plus?characterEncoding=utf-8&userSSL=false", "root", "123456").globalConfig(builder -> { builder.author("atguigu") // 设置作者
		//.enableSwagger() // 开启 swagger 模式
		.fileOverride() // 覆盖已生成文件
		.outputDir("D://mybatis_plus"); // 指定输出目录
		})
		.packageConfig(builder -> {
			builder.parent("com.atguigu") // 设置父包名
				.moduleName("mybatisplus") // 设置父包模块名
		.pathInfo(Collections.singletonMap(OutputFile.mapperXml, "D://mybatis_plus"));
// 设置mapperXml生成路径
			})
			.strategyConfig(builder -> {
			builder.addInclude("t_user") // 设置需要生成的表名
			.addTablePrefix("t_", "c_"); // 设置过滤表前缀
		})
	.templateEngine(new FreemarkerTemplateEngine()) // 使用Freemarker
	引擎模板，默认的是Velocity引擎模板
	.execute();
	}
}
```

## 多数据源

> 适用于多种场景：纯粹多库、 读写分离、 一主多从、 混合模式等 
>
> 目前我们就来模拟一个纯粹多库的一个场景，其他场景类似 
>
> 场景说明： 
>
> 我们创建两个库，分别为：mybatis_plus（以前的库不动）与mybatis_plus_1（新建），将 mybatis_plus库的product表移动到mybatis_plus_1库，这样每个库一张表，通过一个测试用例分别获取用户数据与商品数据，如果获取到说明多库模拟成功

### 创建数据库及表

> 创建数据库mybatis_plus_1和表product

```sql
CREATE DATABASE `mybatis_plus_1` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
use `mybatis_plus_1`;
CREATE TABLE product
(
id BIGINT(20) NOT NULL COMMENT '主键ID',
name VARCHAR(30) NULL DEFAULT NULL COMMENT '商品名称',
price INT(11) DEFAULT 0 COMMENT '价格',
version INT(11) DEFAULT 0 COMMENT '乐观锁版本号',
PRIMARY KEY (id)
);
```

> 添加测试数据

```sql
INSERT INTO product (id, NAME, price) VALUES (1, '外星人笔记本', 100);
```

> 删除mybatis_plus库product表

```sql
use mybatis_plus;
DROP TABLE IF EXISTS product;
```

### 引入依赖

```xml
<dependency>
	<groupId>com.baomidou</groupId>
	<artifactId>dynamic-datasource-spring-boot-starter</artifactId>
	<version>3.5.0</version>
</dependency>
```

### 配置多数据源

> 说明：注释掉之前的数据库连接，添加新配置

```yaml
spring:
	# 配置数据源信息
	datasource:
		dynamic:
			# 设置默认的数据源或者数据源组,默认值即为master
			primary: master
			# 严格匹配数据源,默认false.true未匹配到指定数据源时抛异常,false使用默认数据源
			strict: false
			datasource:
				master:
					url: jdbc:mysql://localhost:3306/mybatis_plus?characterEncoding=utf-8&useSSL=false
					driver-class-name: com.mysql.cj.jdbc.Driver
					username: root
					password: 123456
				slave_1:
					url: jdbc:mysql://localhost:3306/mybatis_plus_1?characterEncoding=utf-8&useSSL=false
					driver-class-name: com.mysql.cj.jdbc.Driver
					username: root
					password: 123456
```

### 创建用户service

```java
public interface UserService extends IService<User> {
}
```

```java
@DS("master") //指定所操作的数据源
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements
UserService {
}
```

### 创建商品service

```java
public interface ProductService extends IService<Product> {
}
```

```java
@DS("slave_1")
@Service
public class ProductServiceImpl extends ServiceImpl<ProductMapper, Product>
implements ProductService {
}
```

### 测试

```java
@Autowired
private UserService userService;
	@Autowired
	private ProductService productService;
	@Test
	public void testDynamicDataSource(){
		System.out.println(userService.getById(1L));
		System.out.println(productService.getById(1L));
	}
```

> 结果： 
>
> 1、都能顺利获取对象，则测试成功 
>
> 2、如果我们实现读写分离，将写操作方法加上主库数据源，读操作方法加上从库数据源，自动切换，是不是就能实现读写分离？

## MyBatisX插件

> MyBatis-Plus为我们提供了强大的mapper和service模板，能够大大的提高开发效率 
>
> 但是在真正开发过程中，MyBatis-Plus并不能为我们解决所有问题，例如一些复杂的SQL，多表联查，我们就需要自己去编写代码和SQL语句，我们该如何快速的解决这个问题呢，这个时候可以使用MyBatisX插件
>
> MyBatisX一款基于 IDEA 的快速开发插件，为效率而生

MyBatisX插件用法：https://baomidou.com/pages/ba5b24/
