---
title: MyBatis的缓存与逆向工程
icon: iconfont icon-data
date: 2022-09-20
---

## MyBatis的一级缓存

一级缓存是SqlSession级别的，通过同一个SqlSession查询的数据会被缓存，下次查询相同的数据，就会从缓存中直接获取，不会从数据库重新访问 使一级缓存失效的四种情况：

1) 不同的SqlSession对应不同的一级缓存 
2) 同一个SqlSession但是查询条件不同 
3) 同一个SqlSession两次查询期间执行了任何一次增删改操作 
4) 同一个SqlSession两次查询期间手动清空了缓存

## MyBatis的二级缓存

二级缓存是SqlSessionFactory级别，通过同一个SqlSessionFactory创建的SqlSession查询的结果会被 缓存；此后若再次执行相同的查询语句，结果就会从缓存中获取 

二级缓存开启的条件： 

a>在核心配置文件中，设置全局配置属性cacheEnabled="true"，默认为true，不需要设置 

b>在映射文件中设置标签 

c>二级缓存必须在SqlSession关闭或提交之后有效 

d>查询的数据所转换的实体类类型必须实现序列化的接口 

使二级缓存失效的情况： 

- 两次查询之间执行了任意的增删改，会使一级和二级缓存同时失效

## 二级缓存的相关配置

在mapper配置文件中添加的cache标签可以设置一些属性： 

①eviction属性：缓存回收策略，默认的是 LRU。 

LRU（Least Recently Used） – 最近最少使用的：移除最长时间不被使用的对象。 

FIFO（First in First out） – 先进先出：按对象进入缓存的顺序来移除它们。 

SOFT – 软引用：移除基于垃圾回收器状态和软引用规则的对象

WEAK – 弱引用：更积极地移除基于垃圾收集器状态和弱引用规则的对象。 

②flushInterval属性：刷新间隔，单位毫秒 

默认情况是不设置，也就是没有刷新间隔，缓存仅仅调用语句时刷新 

③size属性：引用数目，正整数 代表缓存最多可以存储多少个对象，太大容易导致内存溢出 

④readOnly属性：只读， true/false 

true：只读缓存；会给所有调用者返回缓存对象的相同实例。因此这些对象不能被修改。这提供了 很重 要的性能优势。 

false：读写缓存；会返回缓存对象的拷贝（通过序列化）。这会慢一些，但是安全，因此默认是 false。

## MyBatis缓存查询的顺序

先查询二级缓存，因为二级缓存中可能会有其他程序已经查出来的数据，可以拿来直接使用。 

如果二级缓存没有命中，再查询一级缓存 

如果一级缓存也没有命中，则查询数据库 

SqlSession关闭之后，一级缓存中的数据会写入二级缓存

## 整合第三方缓存EHCache

### 添加依赖

```xml
<!-- Mybatis EHCache整合包 -->
<dependency>
	<groupId>org.mybatis.caches</groupId>
	<artifactId>mybatis-ehcache</artifactId>
	<version>1.2.1</version>
</dependency>
<!-- slf4j日志门面的一个具体实现 -->
<dependency>
	<groupId>ch.qos.logback</groupId>
	<artifactId>logback-classic</artifactId>
	<version>1.2.3</version>
</dependency>
```

### 各jar包功能

| jar包名称       | 作用                            |
| --------------- | ------------------------------- |
| mybatis-ehcache | Mybatis和EHCache的整合包        |
| ehcache         | EHCache核心包                   |
| slf4j-api       | SLF4J日志门面包                 |
| logback-classic | 支持SLF4J门面接口的一个具体实现 |

### 创建EHCache的配置文件ehcache.xml

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ehcache xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:noNamespaceSchemaLocation="../config/ehcache.xsd">
	<!-- 磁盘保存路径 -->
	<diskStore path="D:\laiyuejia\ehcache"/>
	<defaultCache
		maxElementsInMemory="1000"
		maxElementsOnDisk="10000000"
		eternal="false"
		overflowToDisk="true"
		timeToIdleSeconds="120"
		timeToLiveSeconds="120"
		diskExpiryThreadIntervalSeconds="120"
		memoryStoreEvictionPolicy="LRU">
	</defaultCache>
</ehcache>
```

### 设置二级缓存的类型

```xml
<cache type="org.mybatis.caches.ehcache.EhcacheCache"/>
```

### 加入logback日志

> 存在SLF4J时，作为简易日志的log4j将失效，此时我们需要借助SLF4J的具体实现logback来打印日志。 创建logback的配置文件logback.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="true">
	<!-- 指定日志输出的位置 -->
	<appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
		<encoder>
			<!-- 日志输出的格式 -->
			<!-- 按照顺序分别是： 时间、日志级别、线程名称、打印日志的类、日志主体内容、换行-->
			<pattern>[%d{HH:mm:ss.SSS}] [%-5level] [%thread] [%logger]
[%msg]%n</pattern>
		</encoder>
	</appender>
	<!-- 设置全局日志级别。日志级别按顺序分别是： DEBUG、INFO、WARN、ERROR -->
	<!-- 指定任何一个日志级别都只打印当前级别和后面级别的日志。 -->
	<root level="DEBUG">
		<!-- 指定打印日志的appender，这里通过“STDOUT”引用了前面配置的appender -->
		<appender-ref ref="STDOUT" />
	</root>
	<!-- 根据特殊需求指定局部日志级别 -->
	<logger name="com.atguigu.crowd.mapper" level="DEBUG"/>
</configuration>
```

### EHCache配置文件说明

| 属性名                          | 是 否 必 须 | 作用                                                         |
| ------------------------------- | ----------- | ------------------------------------------------------------ |
| maxElementsInMemory             | 是          | 在内存中缓存的element的最大数目                              |
| maxElementsOnDisk               | 是          | 在磁盘上缓存的element的最大数目，若是0表示无 穷大            |
| eternal                         | 是          | 设定缓存的elements是否永远不过期。 如果为 true，则缓存的数据始终有效， 如果为false那么还 要根据timeToIdleSeconds、timeToLiveSeconds 判断 |
| overflowToDisk                  | 是          | 设定当内存缓存溢出的时候是否将过期的element 缓存到磁盘上     |
| timeToIdleSeconds               | 否          | 当缓存在EhCache中的数据前后两次访问的时间超 过timeToIdleSeconds的属性取值时， 这些数据便 会删除，默认值是0,也就是可闲置时间无穷大 |
| timeToLiveSeconds               | 否          | 缓存element的有效生命期，默认是0.,也就是 element存活时间无穷大 |
| diskSpoolBufferSizeMB           | 否          | DiskStore(磁盘缓存)的缓存区大小。默认是 30MB。每个Cache都应该有自己的一个缓冲区 |
| diskPersistent                  | 否          | 在VM重启的时候是否启用磁盘保存EhCache中的数 据，默认是false。 |
| diskExpiryThreadIntervalSeconds | 否          | 磁盘缓存的清理线程运行间隔，默认是120秒。每 个120s， 相应的线程会进行一次EhCache中数据的 清理工作 |
| memoryStoreEvictionPolicy       | 否          | 当内存缓存达到最大，有新的element加入的时 候， 移除缓存中element的策略。 默认是LRU （最 近最少使用），可选的有LFU （最不常使用）和 FIFO （先进先出） |

---

> 正向工程：先创建Java实体类，由框架负责根据实体类生成数据库表。 Hibernate是支持正向工 程的。 
>
> 逆向工程：先创建数据库表，由框架负责根据数据库表，反向生成如下资源： 
>
> - Java实体类 
> - Mapper接口 
> - Mapper映射文件

## 创建逆向工程的步骤

**①添加依赖和插件**

```xml
<!-- 依赖MyBatis核心包 -->
<dependencies>
	<dependency>
		<groupId>org.mybatis</groupId>
		<artifactId>mybatis</artifactId>
		<version>3.5.7</version>
	</dependency>
	<!-- junit测试 -->
	<dependency>
		<groupId>junit</groupId>
		<artifactId>junit</artifactId>
		<version>4.12</version>
		<scope>test</scope>
	</dependency>
	<!-- log4j日志 -->
	<dependency>
		<groupId>log4j</groupId>
		<artifactId>log4j</artifactId>
		<version>1.2.17</version>
	</dependency>
	<dependency>
		<groupId>mysql</groupId>
		<artifactId>mysql-connector-java</artifactId>
		<version>8.0.16</version>
	</dependency>
</dependencies>
<!-- 控制Maven在构建过程中相关配置 -->
<build>
<!-- 构建过程中用到的插件 -->
	<plugins>
<!-- 具体插件，逆向工程的操作是以构建过程中插件形式出现的 -->
		<plugin>
			<groupId>org.mybatis.generator</groupId>
			<artifactId>mybatis-generator-maven-plugin</artifactId>
			<version>1.3.0</version>
<!-- 插件的依赖 -->
<dependencies>
<!-- 逆向工程的核心依赖 -->
	<dependency>
		<groupId>org.mybatis.generator</groupId>
		<artifactId>mybatis-generator-core</artifactId>
		<version>1.3.2</version>
	</dependency>
<!-- MySQL驱动 -->
	<dependency>
		<groupId>mysql</groupId>
		<artifactId>mysql-connector-java</artifactId>
		<version>8.0.16</version>
	</dependency>
</dependencies>
</plugin>
</plugins>
</build>
```

**②创建MyBatis的核心配置文件**

**③创建逆向工程的配置文件**

> 文件名必须是：generatorConfig.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
		PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
		"http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
<generatorConfiguration>
	<!--
			targetRuntime: 执行生成的逆向工程的版本
				MyBatis3Simple: 生成基本的CRUD（清新简洁版）
				MyBatis3: 生成带条件的CRUD（奢华尊享版）
	-->
	<context id="DB2Tables" targetRuntime="MyBatis3">
		<!-- 数据库的连接信息 -->
		<jdbcConnection driverClass="com.mysql.cj.jdbc.Driver"
				connectionURL="jdbc:mysql://localhost:3306/mybatis?serverTimezone=UTC"
				userId="root"
				password="123456">
		</jdbcConnection>
		<!-- javaBean的生成策略-->
		<javaModelGenerator targetPackage="cn.laiyuejia.mybatis.pojo"
			targetProject=".\src\main\java">
			<property name="enableSubPackages" value="true" />
			<property name="trimStrings" value="true" />
		</javaModelGenerator>
		<!-- SQL映射文件的生成策略 -->
		<sqlMapGenerator targetPackage="com.atguigu.mybatis.mapper"
			targetProject=".\src\main\resources">
			<property name="enableSubPackages" value="true" />
		</sqlMapGenerator>
		<!-- Mapper接口的生成策略 -->
		<javaClientGenerator type="XMLMAPPER"
			targetPackage="com.atguigu.mybatis.mapper" 					
            targetProject=".\src\main\java">
			<property name="enableSubPackages" value="true" />
		</javaClientGenerator>
		<!-- 逆向分析的表 -->
		<!-- tableName设置为*号，可以对应所有表，此时不写domainObjectName -->
		<!-- domainObjectName属性指定生成出来的实体类的类名 -->
		<table tableName="t_emp" domainObjectName="Emp"/>
		<table tableName="t_dept" domainObjectName="Dept"/>
	</context>
</generatorConfiguration>
```

**④执行MBG插件的generate目标**

## QBC查询

```java
@Test
public void testMBG(){
	try {
		InputStream is = Resources.getResourceAsStream("mybatis-config.xml");
		SqlSessionFactory sqlSessionFactory = new
		SqlSessionFactoryBuilder().build(is);
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		EmpMapper mapper = sqlSession.getMapper(EmpMapper.class);
		//查询所有数据
		/*List<Emp> list = mapper.selectByExample(null);
		list.forEach(emp -> System.out.println(emp));*/
		//根据条件查询
		/*EmpExample example = new EmpExample();
		example.createCriteria().andEmpNameEqualTo("张
		三").andAgeGreaterThanOrEqualTo(20);
		example.or().andDidIsNotNull();
		List<Emp> list = mapper.selectByExample(example);
		list.forEach(emp -> System.out.println(emp));*/
		mapper.updateByPrimaryKeySelective(new
		Emp(1,"admin",22,null,"456@qq.com",3));
		} catch (IOException e) {
			e.printStackTrace();
			}
	}
```



