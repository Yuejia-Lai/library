---
title: 声明式事务
icon: iconfont icon-bxl-spring-boot
date: 2022-09-24
---

## JdbcTemplate

### 简介

Spring 框架对 JDBC 进行封装，使用 JdbcTemplate 方便实现对数据库操作

### 准备工作

**①加入依赖**

```xml
<dependencies>

    <!-- 基于Maven依赖传递性，导入spring-context依赖即可导入当前所需所有jar包 -->
	<dependency>
		<groupId>org.springframework</groupId>
		<artifactId>spring-context</artifactId>
		<version>5.3.1</version>
	</dependency>

    <!-- Spring 持久化层支持jar包 -->

    <!-- Spring 在执行持久化层操作、与持久化层技术进行整合过程中，需要使用orm、jdbc、tx三个jar包 -->

    <!-- 导入 orm 包就可以通过 Maven 的依赖传递性把其他两个也导入 -->

    <dependency>
		<groupId>org.springframework</groupId>
		<artifactId>spring-orm</artifactId>
		<version>5.3.1</version>
	</dependency>

    <!-- Spring 测试相关 -->
	<dependency>
		<groupId>org.springframework</groupId>
		<artifactId>spring-test</artifactId>
		<version>5.3.1</version>
	</dependency>

    <!-- junit测试 -->
	<dependency>
		<groupId>junit</groupId>
		<artifactId>junit</artifactId>
		<version>4.12</version>
		<scope>test</scope>
	</dependency>

    <!-- MySQL驱动 -->
	<dependency>
		<groupId>mysql</groupId>
		<artifactId>mysql-connector-java</artifactId>
		<version>8.0.16</version>
	</dependency>

    <!-- 数据源 -->
	<dependency>
		<groupId>com.alibaba</groupId>
		<artifactId>druid</artifactId>
		<version>1.0.31</version>
	</dependency>
</dependencies>
```

**②创建jdbc.properties**

```properties
jdbc.user=root
jdbc.password=atguigu
jdbc.url=jdbc:mysql://localhost:3306/ssm
jdbc.driver=com.mysql.cj.jdbc.Driver
```

**③配置Spring的配置文件**

```xml
<!-- 导入外部属性文件 -->
<context:property-placeholder location="classpath:jdbc.properties" />

<!-- 配置数据源 -->
<bean id="druidDataSource" class="com.alibaba.druid.pool.DruidDataSource">
	<property name="url" value="${atguigu.url}"/>
	<property name="driverClassName" value="${atguigu.driver}"/>
	<property name="username" value="${atguigu.username}"/>
	<property name="password" value="${atguigu.password}"/>
</bean>

<!-- 配置 JdbcTemplate -->
<bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">

    <!-- 装配数据源 -->
	<property name="dataSource" ref="druidDataSource"/>
</bean>
```

### 测试

**①在测试类装配 JdbcTemplate**

```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring-jdbc.xml")
public class JDBCTemplateTest {

    @Autowired
	private JdbcTemplate jdbcTemplate;
}
```

**②测试增删改功能**

```java
@Test
//测试增删改功能
public void testUpdate(){
	String sql = "insert into t_emp values(null,?,?,?)";
	int result = jdbcTemplate.update(sql, "张三", 23, "男");
	System.out.println(result);
}
```

**③查询一条数据为实体类对象**

```java
@Test
//查询一条数据为一个实体类对象
public void testSelectEmpById(){
	String sql = "select * from t_emp where id = ?";
	Emp emp = jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(Emp.class), 1);
	System.out.println(emp);
}
```

**④查询多条数据为一个list集合**

```java
@Test
//查询多条数据为一个list集合
public void testSelectList(){
	String sql = "select * from t_emp";
	List<Emp> list = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Emp.class));
	list.forEach(emp -> System.out.println(emp));
}
```

**⑤查询单行单列的值**

```java
@Test
//查询单行单列的值
public void selectCount(){
	String sql = "select count(id) from t_emp";
	Integer count = jdbcTemplate.queryForObject(sql, Integer.class);
	System.out.println(count);
}
```

## 声明式事务概念

### 编程式事务

事务功能的相关操作全部通过自己编写代码来实现：

```java
Connection conn = ...;

try {

    // 开启事务：关闭事务的自动提交
	conn.setAutoCommit(false);
	// 核心操作
	// 提交事务
	conn.commit();
}catch(Exception e){
	// 回滚事务
	conn.rollBack();
}finally{
    // 释放数据库连接
	conn.close();
}
```

编程式的实现方式存在缺陷： 

- 细节没有被屏蔽：具体操作过程中，所有细节都需要程序员自己来完成，比较繁琐。 
- 代码复用性不高：如果没有有效抽取出来，每次实现功能都需要自己编写代码，代码就没有得到复用。

### 声明式事务

既然事务控制的代码有规律可循，代码的结构基本是确定的，所以框架就可以将固定模式的代码抽取出来，进行相关的封装

封装起来后，我们只需要在配置文件中进行简单的配置即可完成操作

- 好处1：提高开发效率 
- 好处2：消除了冗余的代码 
- 好处3：框架会综合考虑相关领域中在实际开发环境下有可能遇到的各种问题，进行了健壮性、性能等各个方面的优化

所以，我们可以总结下面两个概念： 

- 编程式：自己写代码实现功能 
- 声明式：通过配置让框架实现功能

## 基于注解的声明式事务

### 准备工作

**①加入依赖**

```xml
<dependencies>
	<!-- 基于Maven依赖传递性，导入spring-context依赖即可导入当前所需所有jar包 -->
	<dependency>
		<groupId>org.springframework</groupId>
		<artifactId>spring-context</artifactId>
		<version>5.3.1</version>
	</dependency>
	<!-- Spring 持久化层支持jar包 -->
	<!-- Spring 在执行持久化层操作、与持久化层技术进行整合过程中，需要使用orm、jdbc、tx三个
jar包 -->
	<!-- 导入 orm 包就可以通过 Maven 的依赖传递性把其他两个也导入 -->
	<dependency>
		<groupId>org.springframework</groupId>
		<artifactId>spring-orm</artifactId>
		<version>5.3.1</version>
	</dependency>
	<!-- Spring 测试相关 -->
	<dependency>
		<groupId>org.springframework</groupId>
		<artifactId>spring-test</artifactId>
		<version>5.3.1</version>
    </dependency>
	<!-- junit测试 -->
	<dependency>
		<groupId>junit</groupId>
		<artifactId>junit</artifactId>
		<version>4.12</version>
		<scope>test</scope>
	</dependency>
	<!-- MySQL驱动 -->
	<dependency>
		<groupId>mysql</groupId>
		<artifactId>mysql-connector-java</artifactId>
		<version>8.0.16</version>
	</dependency>
	<!-- 数据源 -->
	<dependency>
		<groupId>com.alibaba</groupId>
		<artifactId>druid</artifactId>
		<version>1.0.31</version>
	</dependency>
</dependencies>
```

**②创建jdbc.properties**

```properties
jdbc.user=root
jdbc.password=atguigu
jdbc.url=jdbc:mysql://localhost:3306/ssm?serverTimezone=UTC
jdbc.driver=com.mysql.cj.jdbc.Driver
```

**③配置Spring的配置文件**

```xml
<!--扫描组件-->
<context:component-scan base-package="com.atguigu.spring.tx.annotation"></context:component-scan>

<!-- 导入外部属性文件 -->
<context:property-placeholder location="classpath:jdbc.properties" />
<!-- 配置数据源 -->
<bean id="druidDataSource" class="com.alibaba.druid.pool.DruidDataSource">
	<property name="url" value="${jdbc.url}"/>
	<property name="driverClassName" value="${jdbc.driver}"/>
	<property name="username" value="${jdbc.username}"/>
	<property name="password" value="${jdbc.password}"/>
</bean>
<!-- 配置 JdbcTemplate -->
<bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
<!-- 装配数据源 -->
	<property name="dataSource" ref="druidDataSource"/>
</bean>
```

**④创建表**

```sql
CREATE TABLE `t_book` (
`book_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
`book_name` varchar(20) DEFAULT NULL COMMENT '图书名称',
`price` int(11) DEFAULT NULL COMMENT '价格',
`stock` int(10) unsigned DEFAULT NULL COMMENT '库存（无符号）',
PRIMARY KEY (`book_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
insert into `t_book`(`book_id`,`book_name`,`price`,`stock`) values (1,'斗破苍
穹',80,100),(2,'斗罗大陆',50,100);
CREATE TABLE `t_user` (
`user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
`username` varchar(20) DEFAULT NULL COMMENT '用户名',
`balance` int(10) unsigned DEFAULT NULL COMMENT '余额（无符号）',
PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
insert into `t_user`(`user_id`,`username`,`balance`) values (1,'admin',50);
```

**⑤创建组件**

创建BookController：

```java
@Controller
public class BookController {

    @Autowired
	private BookService bookService;

    public void buyBook(Integer bookId, Integer userId){
		bookService.buyBook(bookId, userId);
	}
}
```

创建接口BookService：

```java
public interface BookService {
	void buyBook(Integer bookId, Integer userId);
}
```

创建实现类BookServiceImpl：

```java
@Service
public class BookServiceImpl implements BookService {

    @Autowired
	private BookDao bookDao;

    @Override
	public void buyBook(Integer bookId, Integer userId) {
		//查询图书的价格
		Integer price = bookDao.getPriceByBookId(bookId);
		//更新图书的库存
		bookDao.updateStock(bookId);
		//更新用户的余额
		bookDao.updateBalance(userId, price);
	}
}
```

创建接口BookDao：

```java
public interface BookDao {

    Integer getPriceByBookId(Integer bookId);

    void updateStock(Integer bookId);

    void updateBalance(Integer userId, Integer price);
}
```

创建实现类BookDaoImpl：

```java
@Repository
public class BookDaoImpl implements BookDao {

    @Autowired
	private JdbcTemplate jdbcTemplate;

    @Override
	public Integer getPriceByBookId(Integer bookId) {
		String sql = "select price from t_book where book_id = ?";
		return jdbcTemplate.queryForObject(sql, Integer.class, bookId);
	}

    @Override
	public void updateStock(Integer bookId) {
		String sql = "update t_book set stock = stock - 1 where book_id = ?";
		jdbcTemplate.update(sql, bookId);
}

    @Override
	public void updateBalance(Integer userId, Integer price) {
		String sql = "update t_user set balance = balance - ? where user_id = ?";
		jdbcTemplate.update(sql, price, userId);
	}
}
```

### 测试无事务情况

**①创建测试类**

```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:tx-annotation.xml")
public class TxByAnnotationTest {

    @Autowired
	private BookController bookController;

    @Test
	public void testBuyBook(){
		bookController.buyBook(1, 1);
	}
}
```

**②模拟场景**

用户购买图书，先查询图书的价格，再更新图书的库存和用户的余额 

假设用户id为1的用户，购买id为1的图书 

用户余额为50，而图书价格为80 

购买图书之后，用户的余额为-30，数据库中余额字段设置了无符号，因此无法将-30插入到余额字段 

此时执行sql语句会抛出SQLException

**③观察结果**

因为没有添加事务，图书的库存更新了，但是用户的余额没有更新 

显然这样的结果是错误的，购买图书是一个完整的功能，更新库存和更新余额要么都成功要么都失败

### 加入事务

**①添加事务配置**

在Spring的配置文件中添加配置：

```xml
<bean id="transactionManager"
class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
	<property name="dataSource" ref="dataSource"></property>
</bean>
<!--
	开启事务的注解驱动
	通过注解@Transactional所标识的方法或标识的类中所有的方法，都会被事务管理器管理事务
-->
<!-- transaction-manager属性的默认值是transactionManager，如果事务管理器bean的id正好就
是这个默认值，则可以省略这个属性 -->
<tx:annotation-driven transaction-manager="transactionManager" />
```

**②添加事务注解**

因为service层表示业务逻辑层，一个方法表示一个完成的功能，因此处理事务一般在service层处理 

在BookServiceImpl的buybook()添加注解@Transactional

**③观察结果**

由于使用了Spring的声明式事务，更新库存和更新余额都没有执行

### @Transactional注解标识的位置

@Transactional标识在方法上，咋只会影响该方法 

@Transactional标识的类上，咋会影响类中所有的方法

### 事务属性：只读

**①介绍**

对一个查询操作来说，如果我们把它设置成只读，就能够明确告诉数据库，这个操作不涉及写操作。这样数据库就能够针对查询操作来进行优化。

**②使用方式**

```java
@Transactional(readOnly = true)
public void buyBook(Integer bookId, Integer userId) {
	//查询图书的价格
	Integer price = bookDao.getPriceByBookId(bookId);
	//更新图书的库存
	bookDao.updateStock(bookId);
	//更新用户的余额
	bookDao.updateBalance(userId, price);
	//System.out.println(1/0);
}
```

**③注意**

对增删改操作设置只读会抛出下面异常： 

Caused by: java.sql.SQLException: Connection is read-only. Queries leading to data modification are not allowed

### 事务属性：超时

**①介绍**

事务在执行过程中，有可能因为遇到某些问题，导致程序卡住，从而长时间占用数据库资源。而长时间占用资源，大概率是因为程序运行出现了问题（可能是Java程序或MySQL数据库或网络连接等等）。 

此时这个很可能出问题的程序应该被回滚，撤销它已做的操作，事务结束，把资源让出来，让其他正常程序可以执行。

概括来说就是一句话：超时回滚，释放资源。

**②使用方式**

```java
@Transactional(timeout = 3)
public void buyBook(Integer bookId, Integer userId) {
	try {
		TimeUnit.SECONDS.sleep(5);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
	//查询图书的价格
	Integer price = bookDao.getPriceByBookId(bookId);
	//更新图书的库存
	bookDao.updateStock(bookId);
	//更新用户的余额
	bookDao.updateBalance(userId, price);
	//System.out.println(1/0);
}
```

**③观察结果**

执行过程中抛出异常： 

org.springframework.transaction.TransactionTimedOutException: Transaction timed out: deadline was Fri Jun 04 16:25:39 CST 2022

### 事务属性：回滚策略

**①介绍**

声明式事务默认只针对运行时异常回滚，编译时异常不回滚。 

可以通过@Transactional中相关属性设置回滚策略 

- rollbackFor属性：需要设置一个Class类型的对象 
- rollbackForClassName属性：需要设置一个字符串类型的全类名 
- noRollbackFor属性：需要设置一个Class类型的对象 
- rollbackFor属性：需要设置一个字符串类型的全类名

**②使用方式**

```java
@Transactional(noRollbackFor = ArithmeticException.class)
//@Transactional(noRollbackForClassName = "java.lang.ArithmeticException")
public void buyBook(Integer bookId, Integer userId) {
	//查询图书的价格
	Integer price = bookDao.getPriceByBookId(bookId);
	//更新图书的库存
	bookDao.updateStock(bookId);
	//更新用户的余额
	bookDao.updateBalance(userId, price);
	System.out.println(1/0);
}
```

**③观察结果**

虽然购买图书功能中出现了数学运算异常（ArithmeticException），但是我们设置的回滚策略是，当出现ArithmeticException不发生回滚，因此购买图书的操作正常执行

### 事务属性：事务隔离级别

**①介绍**

数据库系统必须具有隔离并发运行各个事务的能力，使它们不会相互影响，避免各种并发问题。一个事务与其他事务隔离的程度称为隔离级别。SQL标准中规定了多种事务隔离级别，不同隔离级别对应不同的干扰程度，隔离级别越高，数据一致性就越好，但并发性越弱

隔离级别一共有四种： 

- 读未提交：READ UNCOMMITTED 允许Transaction01读取Transaction02未提交的修改。 
- 读已提交：READ COMMITTED、 要求Transaction01只能读取Transaction02已提交的修改。 
- 可重复读：REPEATABLE READ 确保Transaction01可以多次从一个字段中读取到相同的值，即Transaction01执行期间禁止其它 事务对这个字段进行更新。 
- 串行化：SERIALIZABLE 确保Transaction01可以多次从一个表中读取到相同的行，在Transaction01执行期间，禁止其它 事务对这个表进行添加、更新、删除操作。可以避免任何并发问题，但性能十分低下

各个隔离级别解决并发问题的能力见下表：

| 隔离级别         | 脏读 | 不可重复读 | 幻读 |
| ---------------- | ---- | ---------- | ---- |
| READ UNCOMMITTED | 有   | 有         | 有   |
| READ COMMITTED   | 无   | 有         | 有   |
| REPEATABLE READ  | 无   | 无         | 有   |
| SERIALIZABLE     | 无   | 无         | 无   |

各种数据库产品对事务隔离级别的支持程度：

| 隔离级别         | Oracle  | MySQL   |
| ---------------- | ------- | ------- |
| READ UNCOMMITTED | ×       | √       |
| READ COMMITTED   | √(默认) | √       |
| REPEATABLE READ  | ×       | √(默认) |
| SERIALIZABLE     | √       | √       |

**②使用方式**

```java
@Transactional(isolation = Isolation.DEFAULT)//使用数据库默认的隔离级别
@Transactional(isolation = Isolation.READ_UNCOMMITTED)//读未提交
@Transactional(isolation = Isolation.READ_COMMITTED)//读已提交
@Transactional(isolation = Isolation.REPEATABLE_READ)//可重复读
@Transactional(isolation = Isolation.SERIALIZABLE)//串行化
```

### 事务属性：事务传播行为

**①介绍**

当事务方法被另一个事务方法调用时，必须指定事务应该如何传播。例如：方法可能继续在现有事务中运行，也可能开启一个新事务，并在自己的事务中运行

**②测试**

创建接口CheckoutService：

```java
public interface CheckoutService {
	void checkout(Integer[] bookIds, Integer userId);
}
```

创建实现类CheckoutServiceImpl：

```java
@Service
public class CheckoutServiceImpl implements CheckoutService {

    @Autowired
	private BookService bookService;
	@Override
	@Transactional
	//一次购买多本图书
	public void checkout(Integer[] bookIds, Integer userId) {
		for (Integer bookId : bookIds) {
			bookService.buyBook(bookId, userId);
		}
	}
}
```

在BookController中添加方法：

```java
@Autowired
private CheckoutService checkoutService;

public void checkout(Integer[] bookIds, Integer userId){
checkoutService.checkout(bookIds, userId);
}
```

在数据库中将用户的余额修改为100元

**③观察结果**

可以通过@Transactional中的propagation属性设置事务传播行为 

修改BookServiceImpl中buyBook()上，注解@Transactional的propagation属性 

@Transactional(propagation = Propagation.REQUIRED)，默认情况，表示如果当前线程上有已经开启的事务可用，那么就在这个事务中运行。经过观察，购买图书的方法buyBook()在checkout()中被调用，checkout()上有事务注解，因此在此事务中执行。所购买的两本图书的价格为80和50，而用户的余 额为100，因此在购买第二本图书时余额不足失败，导致整个checkout()回滚，即只要有一本书买不了，就都买不了

@Transactional(propagation = Propagation.REQUIRES_NEW)，表示不管当前线程上是否有已经开启的事务，都要开启新事务。同样的场景，每次购买图书都是在buyBook()的事务中执行，因此第一本图书购买成功，事务结束，第二本图书购买失败，只在第二次的buyBook()中回滚，购买第一本图书不受影响，即能买几本就买几本

## 基于XML的声明式事务

### 场景模拟

参考基于注解的声明式事务

### 修改Spring配置文件

将Spring配置文件中去掉tx:annotation-driven 标签，并添加配置：

```xml
<aop:config>
	<!-- 配置事务通知和切入点表达式 -->
	<aop:advisor advice-ref="txAdvice" pointcut="execution(* com.atguigu.spring.tx.xml.service.impl.*.*(..))"></aop:advisor>
</aop:config>
<!-- tx:advice标签：配置事务通知 -->
<!-- id属性：给事务通知标签设置唯一标识，便于引用 -->
<!-- transaction-manager属性：关联事务管理器 -->
<tx:advice id="txAdvice" transaction-manager="transactionManager">
	<tx:attributes>
		<!-- tx:method标签：配置具体的事务方法 -->
		<!-- name属性：指定方法名，可以使用星号代表多个字符 -->
		<tx:method name="get*" read-only="true"/>
		<tx:method name="query*" read-only="true"/>
		<tx:method name="find*" read-only="true"/>

        <!-- read-only属性：设置只读属性 -->
		<!-- rollback-for属性：设置回滚的异常 -->
		<!-- no-rollback-for属性：设置不回滚的异常 -->
		<!-- isolation属性：设置事务的隔离级别 -->
		<!-- timeout属性：设置事务的超时属性 -->
		<!-- propagation属性：设置事务的传播行为 -->
		<tx:method name="save*" read-only="false" rollback-for="java.lang.Exception" propagation="REQUIRES_NEW"/>
		<tx:method name="update*" read-only="false" rollback-for="java.lang.Exception" propagation="REQUIRES_NEW"/>
		<tx:method name="delete*" read-only="false" rollback-for="java.lang.Exception" propagation="REQUIRES_NEW"/>
	</tx:attributes>
</tx:advice>
```

> 注意：基于xml实现的声明式事务，必须引入aspectJ的依赖
>
> ```xml
> <dependency>
> 	<groupId>org.springframework</groupId>
> 	<artifactId>spring-aspects</artifactId>
> 	<version>5.3.1</version>
> </dependency>
> ```
