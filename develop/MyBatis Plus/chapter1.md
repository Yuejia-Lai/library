---
title: MyBatis-Plus简介与入门案例
icon: iconfont icon-sharpicons_database-center
date: 2022-09-29
---

## 简介

MyBatis-Plus（简称 MP）是一个 MyBatis的增强工具，在 MyBatis 的基础上只做增强不做改变，为 简化开发、提高效率而生。

![Snipaste_2022-09-29_16-04-35.png](https://s2.loli.net/2022/09/29/icsFPQZpKjJVXvU.png)

## 特性

- 无侵入：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑 
- 损耗小：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作 
- 强大的 CRUD 操作：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求 
- 支持 Lambda 形式调用：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错 
- 支持主键自动生成：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题 
- 支持 ActiveRecord 模式：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强 大的 CRUD 操作 
- 支持自定义全局通用操作：支持全局通用方法注入（ Write once, use anywhere ） 
- 内置代码生成器：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置等您来使用 
- 内置分页插件：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询 
- 分页插件支持多种数据库：支持 MySQL、MariaDB、Oracle、DB2、H2、HSQL、SQLite、 Postgre、SQLServer 等多种数据库 
- 内置性能分析插件：可输出 SQL 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询 
- 内置全局拦截插件：提供全表 delete 、 update 操作智能分析阻断，也可自定义拦截规则，预防误操作

## 支持数据库

> 任何能使用MyBatis进行 CRUD, 并且支持标准 SQL 的数据库，具体支持情况如下

- MySQL，Oracle，DB2，H2，HSQL，SQLite，PostgreSQL，SQLServer，Phoenix，Gauss ， ClickHouse，Sybase，OceanBase，Firebird，Cubrid，Goldilocks，csiidb 
- 达梦数据库，虚谷数据库，人大金仓数据库，南大通用(华库)数据库，南大通用数据库，神通数据库，瀚高数据库

## 框架结构

![Snipaste_2022-09-29_16-07-51.png](https://s2.loli.net/2022/09/29/2MNgzOZxfimHQun.png)

## 代码及文档地址

官方地址: http://mp.baomidou.com 

代码发布地址: 

Github: https://github.com/baomidou/mybatis-plus 

Gitee: https://gitee.com/baomidou/mybatis-plus 

文档发布地址: https://baomidou.com/pages/24112f

---

# 入门案例

## 创建数据库及表

### 创建表

```sql
CREATE DATABASE `mybatis_plus` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
use `mybatis_plus`;
CREATE TABLE `user` (
`id` bigint(20) NOT NULL COMMENT '主键ID',
`name` varchar(30) DEFAULT NULL COMMENT '姓名',
`age` int(11) DEFAULT NULL COMMENT '年龄',
`email` varchar(50) DEFAULT NULL COMMENT '邮箱',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

### 添加数据

```sql
INSERT INTO user (id, name, age, email) VALUES
(1, 'Jone', 18, 'test1@baomidou.com'),
(2, 'Jack', 20, 'test2@baomidou.com'),
(3, 'Tom', 28, 'test3@baomidou.com'),
(4, 'Sandy', 21, 'test4@baomidou.com'),
(5, 'Billie', 24, 'test5@baomidou.com');
```

## 创建Spring Boot工程

### 初始化工程

使用 Spring Initializr 快速初始化一个 Spring Boot 工程

### 引入依赖

```xml
<dependencies>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter</artifactId>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-test</artifactId>
		<scope>test</scope>
	</dependency>
	<dependency>
		<groupId>com.baomidou</groupId>
		<artifactId>mybatis-plus-boot-starter</artifactId>
		<version>3.5.1</version>
	</dependency>
	<dependency>
		<groupId>org.projectlombok</groupId>
		<artifactId>lombok</artifactId>
		<optional>true</optional>
	</dependency>
	<dependency>
		<groupId>mysql</groupId>
		<artifactId>mysql-connector-java</artifactId>
		<scope>runtime</scope>
	</dependency>
</dependencies>
```

### idea中安装lombok插件

## 编写代码

### 配置application.yml

```yml
spring:
	# 配置数据源信息
	datasource:
	# 配置数据源类型
		type: com.zaxxer.hikari.HikariDataSource
		# 配置连接数据库信息
		driver-class-name: com.mysql.cj.jdbc.Driver
		url: jdbc:mysql://localhost:3306/mybatis_plus?		characterEncoding=utf-8&useSSL=false
		username: root
		password: 123456
```

**注意：**

> 1、驱动类driver-class-name 
>
> spring boot 2.0（内置jdbc5驱动），驱动类使用：
>
> driver-class-name: com.mysql.jdbc.Driver 
>
> spring boot 2.1及以上（内置jdbc8驱动），驱动类使用： 
>
> driver-class-name: com.mysql.cj.jdbc.Driver 
>
> 否则运行测试用例的时候会有 WARN 信息 
>
> 2、连接地址url 
>
> MySQL5.7版本的url： 
>
> jdbc:mysql://localhost:3306/mybatis_plus?characterEncoding=utf-8&useSSL=false 
>
> MySQL8.0版本的url： 
>
> jdbc:mysql://localhost:3306/mybatis_plus? serverTimezone=GMT%2B8&characterEncoding=utf-8&useSSL=false 
>
> 否则运行测试用例报告如下错误： 
>
> java.sql.SQLException: The server time zone value 'ÖÐ¹ú±ê×¼Ê±¼ä' is unrecognized or represents more

### 启动类

> 在Spring Boot启动类中添加@MapperScan注解，扫描mapper包

```java
@SpringBootApplication
@MapperScan("com.atguigu.mybatisplus.mapper")
public class MybatisplusApplication {

    public static void main(String[] args) {
		SpringApplication.run(MybatisplusApplication.class, args);
	}
}
```

### 添加实体

```java
@Data //lombok注解
public class User {
	private Long id;
	private String name;
	private Integer age;
	private String email;
}
```

User类编译之后的结果：

![Snipaste_2022-09-29_17-17-50.png](https://s2.loli.net/2022/09/29/CLSwjdNaEVlUMps.png)

### 添加mapper

> BaseMapper是MyBatis-Plus提供的模板mapper，其中包含了基本的CRUD方法，泛型为操作的实体类型

```java
public interface UserMapper extends BaseMapper<User> {
}
```

### 测试

```java
@SpringBootTest
public class MybatisPlusTest {

    @Autowired
	private UserMapper userMapper;

    @Test
	public void testSelectList(){
		//selectList()根据MP内置的条件构造器查询一个list集合，null表示没有条件，即查询所有
		userMapper.selectList(null).forEach(System.out::println);
	}
}
```

**注意：**

> IDEA在 userMapper 处报错，因为找不到注入的对象，因为类是动态创建的，但是程序可以正确的执行。 
>
> 为了避免报错，可以在mapper接口上添加 @Repository 注解

### 添加日志

在application.yml中配置日志输出

```yaml
# 配置MyBatis日志
mybatis-plus:
	configuration:
	log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

