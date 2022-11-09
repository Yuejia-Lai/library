---
title: IOC
icon: iconfont icon-bxl-spring-boot
date: 2022-09-21
---

## IOC容器

## IOC容器

### IOC思想

IOC：Inversion of Control，翻译过来是反转控制

**①获取资源的传统方式**

自己做饭：买菜、洗菜、择菜、改刀、炒菜，全过程参与，费时费力，必须清楚了解资源创建整个过程中的全部细节且熟练掌握。 

在应用程序中的组件需要获取资源时，传统的方式是组件主动的从容器中获取所需要的资源，在这样的模式下开发人员往往需要知道在具体容器中特定资源的获取方式，增加了学习成本，同时降低了开发效率。

**②反转控制方式获取资源**

点外卖：下单、等、吃，省时省力，不必关心资源创建过程的所有细节。 

反转控制的思想完全颠覆了应用程序组件获取资源的传统方式：反转了资源的获取方向——改由容器主动的将资源推送给需要的组件，开发人员不需要知道容器是如何创建资源对象的，只需要提供接收资源的方式即可，极大的降低了学习成本，提高了开发的效率。这种行为也称为查找的被动形式

**③DI**

DI：Dependency Injection，翻译过来是依赖注入。 

DI 是 IOC 的另一种表述方式：即组件以一些预先定义好的方式（例如：setter 方法）接受来自于容器的资源注入。相对于IOC而言，这种表述更直接。 

所以结论是：IOC 就是一种反转控制的思想， 而 DI 是对 IOC 的一种具体实现。

### IOC容器在Spring中的实现

Spring 的 IOC 容器就是 IOC 思想的一个落地的产品实现。IOC 容器中管理的组件也叫做 bean。在创建bean之前，首先需要创建 IOC 容器。Spring 提供了 IOC 容器的两种实现方式：

**①BeanFactory**

这是 IOC 容器的基本实现，是 Spring 内部使用的接口。面向 Spring 本身，不提供给开发人员使用

**②ApplicationContext**

BeanFactory 的子接口，提供了更多高级特性。面向 Spring 的使用者，几乎所有场合都使用 ApplicationContext 而不是底层的 BeanFactory

**③ApplicationContext的主要实现类**

| 类型名                          | 简介                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| ClassPathXmlApplicationContext  | 通过读取类路径下的 XML 格式的配置文件创建 IOC 容器对象       |
| FileSystemXmlApplicationContext | 通过文件系统路径读取 XML 格式的配置文件创建 IOC 容器对象     |
| ConfigurableApplicationContext  | ApplicationContext 的子接口，包含一些扩展方法 refresh() 和 close() ，让 ApplicationContext 具有启动、关闭和刷新上下文的能力。 |
| WebApplicationContext           | 专门为 Web 应用准备，基于 Web 环境创建 IOC 容器对 象，并将对象引入存入 ServletContext 域中 |

## 基于XML管理bean

### 入门案例

**①创建Maven Module**

**②引入依赖**

```xml
<dependencies>
	<!-- 基于Maven依赖传递性，导入spring-context依赖即可导入当前所需所有jar包 -->
	<dependency>
		<groupId>org.springframework</groupId>
		<artifactId>spring-context</artifactId>
		<version>5.3.1</version>
	</dependency>
	<!-- junit测试 -->
	<dependency>
		<groupId>junit</groupId>
		<artifactId>junit</artifactId>
        <version>4.12</version>
		<scope>test</scope>
	</dependency>
</dependencies>
```

**③创建类HelloWorld**

```java
public class HelloWorld {
	public void sayHello(){
		System.out.println("helloworld");
	}
}
```

**④创建Spring的配置文件**

**⑤在Spring的配置文件中配置bean**

```xml
<!--
	配置HelloWorld所对应的bean，即将HelloWorld的对象交给Spring的IOC容器管理
	通过bean标签配置IOC容器所管理的bean
	属性：
		id：设置bean的唯一标识
		class：设置bean所对应类型的全类名
-->
<bean id="helloworld" class="cn.laiyuejia.spring.bean.HelloWorld"></bean>

```

**⑥创建测试类测试**

```java
@Test
public void testHelloWorld(){
	ApplicationContext ac = new
ClassPathXmlApplicationContext("applicationContext.xml");
	HelloWorld helloworld = (HelloWorld) ac.getBean("helloworld");
	helloworld.sayHello();
}
```

**⑦思路**

![Snipaste_2022-09-22_15-48-54.png](https://s2.loli.net/2022/09/22/9fQc1pkHzKGvuda.png)

**⑧注意**

Spring 底层默认通过反射技术调用组件类的无参构造器来创建组件对象，这一点需要注意。如果在需要无参构造器时，没有无参构造器，则会抛出下面的异常：

> org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'helloworld' defined in class path resource [applicationContext.xml]: Instantiation of bean failed; nested exception is org.springframework.beans.BeanInstantiationException: Failed to instantiate [com.atguigu.spring.bean.HelloWorld]: No default constructor found; nested exception is java.lang.NoSuchMethodException: com.atguigu.spring.bean.HelloWorld. ()

### 获取bean

**①方式一：根据id获取**

由于 id 属性指定了 bean 的唯一标识，所以根据 bean 标签的 id 属性可以精确获取到一个组件对象。上个实验中我们使用的就是这种方式

**②方式二：根据类型获取**

```java
@Test
public void testHelloWorld(){
	ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
	HelloWorld bean = ac.getBean(HelloWorld.class);
	bean.sayHello();
}
```

**③方式三：根据id和类型**

```java
@Test
public void testHelloWorld(){
	ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
	HelloWorld bean = ac.getBean("helloworld", HelloWorld.class);
	bean.sayHello();
}
```

**④注意**

当根据类型获取bean时，要求IOC容器中指定类型的bean有且只能有一个 

当IOC容器中一共配置了两个：

```xml
<bean id="helloworldOne" class="com.atguigu.spring.bean.HelloWorld"></bean>
<bean id="helloworldTwo" class="com.atguigu.spring.bean.HelloWorld"></bean>
```

根据类型获取时会抛出异常：

> org.springframework.beans.factory.NoUniqueBeanDefinitionException: No qualifying bean of type 'com.atguigu.spring.bean.HelloWorld' available: expected single matching bean but found 2: helloworldOne,helloworldTwo

**⑤扩展**

如果组件类实现了接口，根据接口类型可以获取 bean 吗？

> 可以，前提是bean唯一

如果一个接口有多个实现类，这些实现类都配置了 bean，根据接口类型可以获取 bean 吗？

> 不行，因为bean不唯一

**⑥结论**

根据类型来获取bean时，在满足bean唯一性的前提下，其实只是看：『对象 instanceof 指定的类 型』的返回结果，只要返回的是true就可以认定为和类型匹配，能够获取到

### 依赖注入之setter注入

**①创建学生类Student**

```java
public class Student {
	private Integer id;
    
	private String name;
    
	private Integer age;
    
	private String sex;
    
	public Student() {
	}
    
	public Integer getId() {
		return id;
	}
    
	public void setId(Integer id) {
		this.id = id;
	}
    
	public String getName() {
		return name;
	}
    
	public void setName(String name) {
		this.name = name;
	}
    
	public Integer getAge() {
		return age;
	}
    
	public void setAge(Integer age) {
		this.age = age;
	}
    
	public String getSex() {
		return sex;
	}
    
	public void setSex(String sex) {
		this.sex = sex;
	}
    
	@Override
	public String toString() {
        return "Student{" +
			"id=" + id +
			", name='" + name + '\'' +
            ", age=" + age +
			", sex='" + sex + '\'' +
			'}';
    }
}
```

**②配置bean时为属性赋值**

```xml
<bean id="studentOne" class="com.atguigu.spring.bean.Student">
	<!-- property标签：通过组件类的setXxx()方法给组件对象设置属性 -->
	<!-- name属性：指定属性名（这个属性名是getXxx()、setXxx()方法定义的，和成员变量无关）
-->
	<!-- value属性：指定属性值 -->
	<property name="id" value="1001"></property>
	<property name="name" value="张三"></property>
	<property name="age" value="23"></property>
	<property name="sex" value="男"></property>
</bean>
```

**③测试**

```java
@Test
public void testDIBySet(){
	ApplicationContext ac = new ClassPathXmlApplicationContext("spring-di.xml");
	Student studentOne = ac.getBean("studentOne", Student.class);
	System.out.println(studentOne);
}
```

### 依赖注入之构造器注入

**①在Student类中添加有参构造**

```java
public Student(Integer id, String name, Integer age, String sex) {
	this.id = id;
	this.name = name;
	this.age = age;
	this.sex = sex;
}
```

**②配置bean**

```xml
<bean id="studentTwo" class="com.atguigu.spring.bean.Student">
	<constructor-arg value="1002"></constructor-arg>
	<constructor-arg value="李四"></constructor-arg>
	<constructor-arg value="33"></constructor-arg>
	<constructor-arg value="女"></constructor-arg>
</bean>
```

> 注意： 
>
> constructor-arg标签还有两个属性可以进一步描述构造器参数： 
>
> - index属性：指定参数所在位置的索引（从0开始） 
> - name属性：指定参数名

**③测试**

```java
@Test
public void testDIBySet(){
	ApplicationContext ac = new ClassPathXmlApplicationContext("spring-di.xml");
	Student studentOne = ac.getBean("studentTwo", Student.class);
	System.out.println(studentOne);
}
```

### 特殊值处理

**①字面量赋值**

> 什么是字面量？ 
>
> int a = 10; 
>
> 声明一个变量a，初始化为10，此时a就不代表字母a了，而是作为一个变量的名字。当我们引用a 的时候，我们实际上拿到的值是10。 
>
> 而如果a是带引号的：'a'，那么它现在不是一个变量，它就是代表a这个字母本身，这就是字面 量。所以字面量没有引申含义，就是我们看到的这个数据本身。

```xml
<!-- 使用value属性给bean的属性赋值时，Spring会把value属性的值看做字面量 -->
<property name="name" value="张三"/>
```

**②null值**

```xml
<property name="name">
	<null />
</property>
```

> 注意： 
>
> ```xml
> <property name="name" value="null"></property>
> ```
>
> 以上写法，为name所赋的值是字符串null

**③xml实体**

```xml
<!-- 小于号在XML文档中用来定义标签的开始，不能随便使用 -->
<!-- 解决方案一：使用XML实体来代替 -->
<property name="expression" value="a &lt; b"/>
```

**④CDATA节**

```xml
<property name="expression">
	<!-- 解决方案二：使用CDATA节 -->
	<!-- CDATA中的C代表Character，是文本、字符的含义，CDATA就表示纯文本数据 -->
	<!-- XML解析器看到CDATA节就知道这里是纯文本，就不会当作XML标签或属性来解析 -->
	<!-- 所以CDATA节中写什么符号都随意 -->
	<value><![CDATA[a < b]]></value>
</property>
```

### 为类类型属性赋值

**①创建班级类Clazz**

```java
public class Clazz {

    private Integer clazzId;

    private String clazzName;

    public Integer getClazzId() {
		return clazzId;
	}

    public void setClazzId(Integer clazzId) {
		this.clazzId = clazzId;
	}

    public String getClazzName() {
		return clazzName;
	}

    public void setClazzName(String clazzName) {
		this.clazzName = clazzName;
	}

    @Override
	public String toString() {
		return "Clazz{" +
				"clazzId=" + clazzId +
				", clazzName='" + clazzName + '\'' +
				'}';
	}

    public Clazz() {
	}

    public Clazz(Integer clazzId, String clazzName) {
		this.clazzId = clazzId;
		this.clazzName = clazzName;
	}
}
```

**②修改Student类**

在Student类中添加以下代码：

```java
private Clazz clazz;

public Clazz getClazz() {
	return clazz;
}

public void setClazz(Clazz clazz) {
	this.clazz = clazz;
}
```

**③方式一：引用外部已声明的bean**

配置Clazz类型的bean：

```xml
<bean id="clazzOne" class="com.atguigu.spring.bean.Clazz">
	<property name="clazzId" value="1111"></property>
	<property name="clazzName" value="财源滚滚班"></property>
</bean>
```

为Student中的clazz属性赋值：

```xml
<bean id="studentFour" class="com.atguigu.spring.bean.Student">
	<property name="id" value="1004"></property>
	<property name="name" value="赵六"></property>
	<property name="age" value="26"></property>
	<property name="sex" value="女"></property>
	<!-- ref属性：引用IOC容器中某个bean的id，将所对应的bean为属性赋值 -->
	<property name="clazz" ref="clazzOne"></property>
</bean>
```

::: danger

错误演示：

```xml
<bean id="studentFour" class="com.atguigu.spring.bean.Student">
	<property name="id" value="1004"></property>
	<property name="name" value="赵六"></property>
	<property name="age" value="26"></property>
	<property name="sex" value="女"></property>
	<property name="clazz" value="clazzOne"></property>
</bean>
```

:::

> 如果错把ref属性写成了value属性，会抛出异常： Caused by: java.lang.IllegalStateException: Cannot convert value of type 'java.lang.String' to required type 'com.atguigu.spring.bean.Clazz' for property 'clazz': no matching editors or conversion strategy found 
>
> 意思是不能把String类型转换成我们要的Clazz类型，说明我们使用value属性时，Spring只把这个 属性看做一个普通的字符串，不会认为这是一个bean的id，更不会根据它去找到bean来赋值

**④方式二：内部bean**

```xml
<bean id="studentFour" class="com.atguigu.spring.bean.Student">
	<property name="id" value="1004"></property>
	<property name="name" value="赵六"></property>
	<property name="age" value="26"></property>
	<property name="sex" value="女"></property>
	<property name="clazz">
	<!-- 在一个bean中再声明一个bean就是内部bean -->
	<!-- 内部bean只能用于给属性赋值，不能在外部通过IOC容器获取，因此可以省略id属性 -->
	<bean id="clazzInner" class="com.atguigu.spring.bean.Clazz">
		<property name="clazzId" value="2222"></property>
		<property name="clazzName" value="远大前程班"></property>
	</bean>
	</property>
</bean>

```

**③方式三：级联属性赋值**

```xml
<bean id="studentFour" class="com.atguigu.spring.bean.Student">
	<property name="id" value="1004"></property>
	<property name="name" value="赵六"></property>
	<property name="age" value="26"></property>
	<property name="sex" value="女"></property>
	<!-- 一定先引用某个bean为属性赋值，才可以使用级联方式更新属性 -->
	<property name="clazz" ref="clazzOne"></property>
	<property name="clazz.clazzId" value="3333"></property>
	<property name="clazz.clazzName" value="最强王者班"></property>
</bean>
```

### 为数组类型属性赋值

**①修改Student类**

在Student类中添加以下代码：

```java
private String[] hobbies;

public String[] getHobbies() {
	return hobbies;
}

public void setHobbies(String[] hobbies) {
	this.hobbies = hobbies;
}
```

**②配置bean**

```xml
<bean id="studentFour" class="com.atguigu.spring.bean.Student">
	<property name="id" value="1004"></property>
	<property name="name" value="赵六"></property>
	<property name="age" value="26"></property>
	<property name="sex" value="女"></property>
	<!-- ref属性：引用IOC容器中某个bean的id，将所对应的bean为属性赋值 -->
	<property name="clazz" ref="clazzOne"></property>
	<property name="hobbies">
		<array>
			<value>抽烟</value>
			<value>喝酒</value>
			<value>烫头</value>
		</array>
	</property>
</bean>
```

### 为集合类型属性赋值

**①为List集合类型属性赋值**

在Clazz类中添加以下代码：

```java
private List<Student> students;

public List<Student> getStudents() {
	return students;
}

public void setStudents(List<Student> students) {
	this.students = students;
}
```

配置bean：

```xml
<bean id="clazzTwo" class="com.atguigu.spring.bean.Clazz">
	<property name="clazzId" value="4444"></property>
	<property name="clazzName" value="Javaee0222"></property>
	<property name="students">
		<list>
			<ref bean="studentOne"></ref>
			<ref bean="studentTwo"></ref>
			<ref bean="studentThree"></ref>
		</list>
	</property>
</bean>
```

> 若为Set集合类型属性赋值，只需要将其中的list标签改为set标签即可

**②为Map集合类型属性赋值**

创建教师类Teacher：

```java
public class Teacher {

    private Integer teacherId;

    private String teacherName;

    public Integer getTeacherId() {
		return teacherId;
	}

    public void setTeacherId(Integer teacherId) {
		this.teacherId = teacherId;
	}

    public String getTeacherName() {
		return teacherName;
	}

    public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}

    public Teacher(Integer teacherId, String teacherName) {
		this.teacherId = teacherId;
		this.teacherName = teacherName;
	}
	
    public Teacher() {
	}

    @Override
	public String toString() {
		return "Teacher{" +
			"teacherId=" + teacherId +
			", teacherName='" + teacherName + '\'' +
			'}';
	}
}
```

在Student类中添加以下代码：

```java
private Map<String, Teacher> teacherMap;

public Map<String, Teacher> getTeacherMap() {
	return teacherMap;
}

public void setTeacherMap(Map<String, Teacher> teacherMap) {
	this.teacherMap = teacherMap;
}
```

配置bean：

```xml
<bean id="teacherOne" class="com.atguigu.spring.bean.Teacher">
	<property name="teacherId" value="10010"></property>
	<property name="teacherName" value="大宝"></property>
</bean>
<bean id="teacherTwo" class="com.atguigu.spring.bean.Teacher">
	<property name="teacherId" value="10086"></property>
	<property name="teacherName" value="二宝"></property>
</bean>
<bean id="studentFour" class="com.atguigu.spring.bean.Student">
	<property name="id" value="1004"></property>
	<property name="name" value="赵六"></property>
	<property name="age" value="26"></property>
	<property name="sex" value="女"></property>
	<!-- ref属性：引用IOC容器中某个bean的id，将所对应的bean为属性赋值 -->
	<property name="clazz" ref="clazzOne"></property>
	<property name="hobbies">
	<array>
		<value>抽烟</value>
		<value>喝酒</value>
		<value>烫头</value>
	</array>
	</property>
	<property name="teacherMap">
		<map>
			<entry>
				<key>
                    <value>10010</value>
				</key>
				<ref bean="teacherOne"></ref>
			</entry>
			<entry>
				<key>
					<value>10086</value>
				</key>
				<ref bean="teacherTwo"></ref>
			</entry>
		</map>
	</property>
</bean>
```

**③引用集合类型的bean**

```xml
<!--list集合类型的bean-->
<util:list id="students">
	<ref bean="studentOne"></ref>
	<ref bean="studentTwo"></ref>
	<ref bean="studentThree"></ref>
</util:list>
<!--map集合类型的bean-->
<util:map id="teacherMap">
	<entry>
		<key>
			<value>10010</value>
		</key>
		<ref bean="teacherOne"></ref>
	</entry>
	<entry>
		<key>
			<value>10086</value>
		</key>
		<ref bean="teacherTwo"></ref>
	</entry>
</util:map>
<bean id="clazzTwo" class="com.atguigu.spring.bean.Clazz">
	<property name="clazzId" value="4444"></property>
	<property name="clazzName" value="Javaee0222"></property>
	<property name="students" ref="students"></property>
</bean>
<bean id="studentFour" class="com.atguigu.spring.bean.Student">
	<property name="id" value="1004"></property>
	<property name="name" value="赵六"></property>
	<property name="age" value="26"></property>
	<property name="sex" value="女"></property>
	<!-- ref属性：引用IOC容器中某个bean的id，将所对应的bean为属性赋值 -->
	<property name="clazz" ref="clazzOne"></property>
	<property name="hobbies">
		<array>
			<value>抽烟</value>
			<value>喝酒</value>
			<value>烫头</value>
		</array>
	</property>
	<property name="teacherMap" ref="teacherMap"></property>
</bean>
```

> 使用util:list、util:map标签必须引入相应的命名空间，可以通过idea的提示功能选择

### p命名空间

引入p命名空间后，可以通过以下方式为bean的各个属性赋值

```xml
<bean id="studentSix" class="com.atguigu.spring.bean.Student"
	p:id="1006" p:name="小明" p:clazz-ref="clazzOne" p:teacherMap-ref="teacherMap"></bean>
```

### 引入外部属性文件

**①加入依赖**

```xml
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
```

**②创建外部属性文件**

```properties
jdbc.user=root
jdbc.password=atguigu
jdbc.url=jdbc:mysql://localhost:3306/ssm?serverTimezone=UTC
jdbc.driver=com.mysql.cj.jdbc.Driver
```

**③引入属性文件**

```xml
<!-- 引入外部属性文件 -->
<context:property-placeholder location="classpath:jdbc.properties"/>
```

**④配置bean**

```xml
<bean id="druidDataSource" class="com.alibaba.druid.pool.DruidDataSource">
	<property name="url" value="${jdbc.url}"/>
	<property name="driverClassName" value="${jdbc.driver}"/>
	<property name="username" value="${jdbc.user}"/>
	<property name="password" value="${jdbc.password}"/>
</bean>
```

**⑤测试**

```java
@Test
public void testDataSource() throws SQLException {
	ApplicationContext ac = new ClassPathXmlApplicationContext("springdatasource.xml");
	DataSource dataSource = ac.getBean(DataSource.class);
	Connection connection = dataSource.getConnection();
	System.out.println(connection);
}
```

### bean的作用域

**①概念**

在Spring中可以通过配置bean标签的scope属性来指定bean的作用域范围，各取值含义参加下表：

| 取值              | 含义                                    | 创建对象的时机  |
| ----------------- | --------------------------------------- | --------------- |
| singleton（默认） | 在IOC容器中，这个bean的对象始终为单实例 | IOC容器初始化时 |
| prototype         | 这个bean在IOC容器中有多个实例           | 获取bean时      |

如果是在WebApplicationContext环境下还会有另外两个作用域（但不常用）：

| 取值    | 含义                 |
| ------- | -------------------- |
| request | 在一个请求范围内有效 |
| session | 在一个会话范围内有效 |

**②创建类User**

```java
public class User {

    private Integer id;

    private String username;

    private String password;

    private Integer age;

    public User() {
	}

    public User(Integer id, String username, String password, Integer age){

        this.id = id;

        this.username = username;

        this.password = password;

        this.age = age;
}

    public Integer getId() {
		return id;
	}

    public void setId(Integer id) {
		this.id = id;
	}

    public String getUsername() {
		return username;
	}

    public void setUsername(String username) {
		this.username = username;
	}

    public String getPassword() {
		return password;
	}

    public void setPassword(String password) {
		this.password = password;
	}

    public Integer getAge() {
		return age;
	}

    public void setAge(Integer age) {
		this.age = age;
	}

    @Override
	public String toString() {
		return "User{" +
				"id=" + id +
				", username='" + username + '\'' +
				", password='" + password + '\'' +
				", age=" + age +
                '}';
	}
}
```

**③配置bean**

```xml
<!-- scope属性：取值singleton（默认值），bean在IOC容器中只有一个实例，IOC容器初始化时创建
对象 -->
<!-- scope属性：取值prototype，bean在IOC容器中可以有多个实例，getBean()时创建对象 -->
<bean class="com.atguigu.bean.User" scope="prototype"></bean>
```

**④测试**

```java
@Test
public void testBeanScope(){
	ApplicationContext ac = new ClassPathXmlApplicationContext("springscope.xml");
	User user1 = ac.getBean(User.class);
	User user2 = ac.getBean(User.class);
	System.out.println(user1==user2);
}
```

### bean的生命周期

**①具体的生命周期过程**

- bean对象创建（调用无参构造器） 
- 给bean对象设置属性 
- bean对象初始化之前操作（由bean的后置处理器负责） 
- bean对象初始化（需在配置bean时指定初始化方法） 
- bean对象初始化之后操作（由bean的后置处理器负责） 
- bean对象就绪可以使用 
- bean对象销毁（需在配置bean时指定销毁方法） 
- IOC容器关闭

**②修改类User**

```java
public class User {

    private Integer id;

    private String username;

    private String password;

    private Integer age;

    public User() {
		System.out.println("生命周期：1、创建对象");
	}

    public User(Integer id, String username, String password, Integer age) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.age = age;
}

    public Integer getId() {
		return id;
}

    public void setId(Integer id) {
		System.out.println("生命周期：2、依赖注入");
		this.id = id;
}

    public String getUsername() {
		return username;
}

    public void setUsername(String username) {
		this.username = username;
}

    public String getPassword() {
		return password;
}

    public void setPassword(String password) {
		this.password = password;
}

    public Integer getAge() {
		return age;
}

    public void setAge(Integer age) {
		this.age = age;
}

    public void initMethod(){
		System.out.println("生命周期：3、初始化");
}

    public void destroyMethod(){
		System.out.println("生命周期：5、销毁");
}

    @Override
	public String toString() {
		return "User{" +
			"id=" + id +
			", username='" + username + '\'' +
			", password='" + password + '\'' +
			", age=" + age +
            '}';
	}
}
```

> 注意其中的initMethod()和destroyMethod()，可以通过配置bean指定为初始化和销毁的方法

**③配置bean**

```xml
<!-- 使用init-method属性指定初始化方法 -->
<!-- 使用destroy-method属性指定销毁方法 -->
<bean class="com.atguigu.bean.User" scope="prototype" init-method="initMethod" destroy-method="destroyMethod">
	<property name="id" value="1001"></property>
	<property name="username" value="admin"></property>
	<property name="password" value="123456"></property>
	<property name="age" value="23"></property>
</bean>
```

**④测试**

```java
@Test
public void testLife(){
	ClassPathXmlApplicationContext ac = new ClassPathXmlApplicationContext("spring-lifecycle.xml");
	User bean = ac.getBean(User.class);
	System.out.println("生命周期：4、通过IOC容器获取bean并使用");
	ac.close();
}
```

**⑤bean的后置处理器**

bean的后置处理器会在生命周期的初始化前后添加额外的操作，需要实现BeanPostProcessor接口， 且配置到IOC容器中，需要注意的是，bean后置处理器不是单独针对某一个bean生效，而是针对IOC容 器中所有bean都会执行 创建bean的后置处理器：

```java
package com.atguigu.spring.process;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;

public class MyBeanProcessor implements BeanPostProcessor {

    @Override
	public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
		System.out.println("☆☆☆" + beanName + " = " + bean);
		return bean;
	}

    @Override
	public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
		System.out.println("★★★" + beanName + " = " + bean);
		return bean;
	}
}
```

在IOC容器中配置后置处理器：

```xml
<!-- bean的后置处理器要放入IOC容器才能生效 -->
<bean id="myBeanProcessor" class="com.atguigu.spring.process.MyBeanProcessor"/>
```

### FactoryBean

**①简介**

FactoryBean是Spring提供的一种整合第三方框架的常用机制。和普通的bean不同，配置一个 FactoryBean类型的bean，在获取bean的时候得到的并不是class属性中配置的这个类的对象，而是 getObject()方法的返回值。通过这种机制，Spring可以帮我们把复杂组件创建的详细过程和繁琐细节都 屏蔽起来，只把最简洁的使用界面展示给我们。 

将来我们整合Mybatis时，Spring就是通过FactoryBean机制来帮我们创建SqlSessionFactory对象的

```java
/*
* Copyright 2002-2020 the original author or authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* https://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
package org.springframework.beans.factory;
import org.springframework.lang.Nullable;
/**
* Interface to be implemented by objects used within a {@link BeanFactory}
which
* are themselves factories for individual objects. If a bean implements this
* interface, it is used as a factory for an object to expose, not directly as a
* bean instance that will be exposed itself.
*
* <p><b>NB: A bean that implements this interface cannot be used as a normal
bean.</b>
* A FactoryBean is defined in a bean style, but the object exposed for bean
* references ({@link #getObject()}) is always the object that it creates.
*
* <p>FactoryBeans can support singletons and prototypes, and can either create
* objects lazily on demand or eagerly on startup. The {@link SmartFactoryBean}
* interface allows for exposing more fine-grained behavioral metadata.
*
* <p>This interface is heavily used within the framework itself, for example
for
* the AOP {@link org.springframework.aop.framework.ProxyFactoryBean} or the
* {@link org.springframework.jndi.JndiObjectFactoryBean}. It can be used for
* custom components as well; however, this is only common for infrastructure
code.
*
* <p><b>{@code FactoryBean} is a programmatic contract. Implementations are not
* supposed to rely on annotation-driven injection or other reflective
facilities.</b>
* {@link #getObjectType()} {@link #getObject()} invocations may arrive early in
the
* bootstrap process, even ahead of any post-processor setup. If you need access
to
* other beans, implement {@link BeanFactoryAware} and obtain them
programmatically.
*
* <p><b>The container is only responsible for managing the lifecycle of the
FactoryBean
* instance, not the lifecycle of the objects created by the FactoryBean.</b>
Therefore,
* a destroy method on an exposed bean object (such as {@link
java.io.Closeable#close()}
* will <i>not</i> be called automatically. Instead, a FactoryBean should
implement
* {@link DisposableBean} and delegate any such close call to the underlying
object.
*
* <p>Finally, FactoryBean objects participate in the containing BeanFactory's
* synchronization of bean creation. There is usually no need for internal
* synchronization other than for purposes of lazy initialization within the
* FactoryBean itself (or the like).
*
* @author Rod Johnson
* @author Juergen Hoeller
* @since 08.03.2003
* @param <T> the bean type
* @see org.springframework.beans.factory.BeanFactory
* @see org.springframework.aop.framework.ProxyFactoryBean
* @see org.springframework.jndi.JndiObjectFactoryBean
*/
public interface FactoryBean<T> {
/**
* The name of an attribute that can be
* {@link org.springframework.core.AttributeAccessor#setAttribute set} on a
* {@link org.springframework.beans.factory.config.BeanDefinition} so that
* factory beans can signal their object type when it can't be deduced from
* the factory bean class.
* @since 5.2
*/
String OBJECT_TYPE_ATTRIBUTE = "factoryBeanObjectType";
/**
* Return an instance (possibly shared or independent) of the object
* managed by this factory.
* <p>As with a {@link BeanFactory}, this allows support for both the
* Singleton and Prototype design pattern.
* <p>If this FactoryBean is not fully initialized yet at the time of
* the call (for example because it is involved in a circular reference),
* throw a corresponding {@link FactoryBeanNotInitializedException}.
* <p>As of Spring 2.0, FactoryBeans are allowed to return {@code null}
* objects. The factory will consider this as normal value to be used; it
* will not throw a FactoryBeanNotInitializedException in this case anymore.
* FactoryBean implementations are encouraged to throw
* FactoryBeanNotInitializedException themselves now, as appropriate.
* @return an instance of the bean (can be {@code null})
* @throws Exception in case of creation errors
* @see FactoryBeanNotInitializedException
*/
@Nullable
T getObject() throws Exception;
/**
* Return the type of object that this FactoryBean creates,
* or {@code null} if not known in advance.
* <p>This allows one to check for specific types of beans without
* instantiating objects, for example on autowiring.
* <p>In the case of implementations that are creating a singleton object,
* this method should try to avoid singleton creation as far as possible;
* it should rather estimate the type in advance.
* For prototypes, returning a meaningful type here is advisable too.
* <p>This method can be called <i>before</i> this FactoryBean has
* been fully initialized. It must not rely on state created during
* initialization; of course, it can still use such state if available.
* <p><b>NOTE:</b> Autowiring will simply ignore FactoryBeans that return
* {@code null} here. Therefore it is highly recommended to implement
* this method properly, using the current state of the FactoryBean.
* @return the type of object that this FactoryBean creates,
* or {@code null} if not known at the time of the call
* @see ListableBeanFactory#getBeansOfType
*/
@Nullable
Class<?> getObjectType();
/**
* Is the object managed by this factory a singleton? That is,
* will {@link #getObject()} always return the same object
* (a reference that can be cached)?
* <p><b>NOTE:</b> If a FactoryBean indicates to hold a singleton object,
* the object returned from {@code getObject()} might get cached
* by the owning BeanFactory. Hence, do not return {@code true}
* unless the FactoryBean always exposes the same reference.
* <p>The singleton status of the FactoryBean itself will generally
* be provided by the owning BeanFactory; usually, it has to be
* defined as singleton there.
* <p><b>NOTE:</b> This method returning {@code false} does not
* necessarily indicate that returned objects are independent instances.
* An implementation of the extended {@link SmartFactoryBean} interface
* may explicitly indicate independent instances through its
* {@link SmartFactoryBean#isPrototype()} method. Plain {@link FactoryBean}
* implementations which do not implement this extended interface are
* simply assumed to always return independent instances if the
* {@code isSingleton()} implementation returns {@code false}.
* <p>The default implementation returns {@code true}, since a
* {@code FactoryBean} typically manages a singleton instance.
* @return whether the exposed object is a singleton
* @see #getObject()
* @see SmartFactoryBean#isPrototype()
*/
default boolean isSingleton() {
return true;
}
}
```

**②创建类UserFactoryBean**

```java
public class UserFactoryBean implements FactoryBean<User> {

    @Override
	public User getObject() throws Exception {
		return new User();
	}

    @Override
	public Class<?> getObjectType() {
		return User.class;
	}
}
```

**③配置bean**

```xml
<bean id="user" class="com.atguigu.bean.UserFactoryBean"></bean>
```

**④测试**

```java
@Test
public void testUserFactoryBean(){
	//获取IOC容器
	ApplicationContext ac = new ClassPathXmlApplicationContext("springfactorybean.xml");
	User user = (User) ac.getBean("user");
	System.out.println(user);
}
```

### 基于xml的自动装配

> 自动装配： 根据指定的策略，在IOC容器中匹配某一个bean，自动为指定的bean中所依赖的类类型或接口类型属性赋值

**①场景模拟**

创建类UserController

```java
public class UserController {

    private UserService userService;

    public void setUserService(UserService userService) {
		this.userService = userService;
	}

    public void saveUser(){
		userService.saveUser();
	}
}
```

创建接口UserService

```java
public interface UserService {
	void saveUser();
}
```

创建类UserServiceImpl实现接口UserService

```java
public class UserServiceImpl implements UserService {

    private UserDao userDao;

    public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

    @Override
	public void saveUser() {
		userDao.saveUser();
	}
}
```

创建接口UserDao

```java
public interface UserDao {
	void saveUser();
}
```

创建类UserDaoImpl实现接口UserDao

```java
public class UserDaoImpl implements UserDao {

    @Override
	public void saveUser() {
	System.out.println("保存成功");
	}
}
```

**②配置bean**

> 使用bean标签的autowire属性设置自动装配效果 
>
> 自动装配方式：byType 
>
> byType：根据类型匹配IOC容器中的某个兼容类型的bean，为属性自动赋值 若在IOC中，没有任何一个兼容类型的bean能够为属性赋值，则该属性不装配，即值为默认值 null 
>
> 若在IOC中，有多个兼容类型的bean能够为属性赋值，则抛出异常 NoUniqueBeanDefinitionException

```xml
<bean id="userController"
class="com.atguigu.autowire.xml.controller.UserController" autowire="byType">
</bean>
<bean id="userService"
class="com.atguigu.autowire.xml.service.impl.UserServiceImpl" autowire="byType">
</bean>
<bean id="userDao" class="com.atguigu.autowire.xml.dao.impl.UserDaoImpl"></bean>
```

> 自动装配方式：byName 
>
> byName：将自动装配的属性的属性名，作为bean的id在IOC容器中匹配相对应的bean进行赋值

```xml
<bean id="userController"
class="com.atguigu.autowire.xml.controller.UserController" autowire="byName">
</bean>
<bean id="userService"
class="com.atguigu.autowire.xml.service.impl.UserServiceImpl" autowire="byName">
</bean>
<bean id="userServiceImpl"
class="com.atguigu.autowire.xml.service.impl.UserServiceImpl" autowire="byName">
</bean>
<bean id="userDao" class="com.atguigu.autowire.xml.dao.impl.UserDaoImpl"></bean>
<bean id="userDaoImpl" class="com.atguigu.autowire.xml.dao.impl.UserDaoImpl">
</bean>
```

**③测试**

```java
@Test
public void testAutoWireByXML(){
	ApplicationContext ac = new ClassPathXmlApplicationContext("autowire-xml.xml");
	UserController userController = ac.getBean(UserController.class);
	userController.saveUser();
}
```

## 基于注解管理bean

### 标记与扫描

**①注解**

和 XML 配置文件一样，注解本身并不能执行，注解本身仅仅只是做一个标记，具体的功能是框架检测 到注解标记的位置，然后针对这个位置按照注解标记的功能来执行具体操作。 

本质上：所有一切的操作都是Java代码来完成的，XML和注解只是告诉框架中的Java代码如何执行

**②扫描**

Spring 为了知道程序员在哪些地方标记了什么注解，就需要通过扫描的方式，来进行检测。然后根据注解进行后续操作

**③新建Maven Module**

```xml
<dependencies>
	<!-- 基于Maven依赖传递性，导入spring-context依赖即可导入当前所需所有jar包 -->
	<dependency>
		<groupId>org.springframework</groupId>
		<artifactId>spring-context</artifactId>
		<version>5.3.1</version>
	</dependency>
	<!-- junit测试 -->
	<dependency>
		<groupId>junit</groupId>
		<artifactId>junit</artifactId>
		<version>4.12</version>
		<scope>test</scope>
	</dependency>
</dependencies>
```

**④创建Spring配置文件**

**⑤标识组件的常用注解**

> @Component：将类标识为普通组件 
>
> @Controller：将类标识为控制层组件 
>
> @Service：将类标 识为业务层组件 
>
> @Repository：将类标识为持久层组件

通过查看源码我们得知，@Controller、@Service、@Repository这三个注解只是在@Component注解 的基础上起了三个新的名字。 

对于Spring使用IOC容器管理这些组件来说没有区别。所以@Controller、@Service、@Repository这 三个注解只是给开发人员看的，让我们能够便于分辨组件的作用。

注意：虽然它们本质上一样，但是为了代码的可读性，为了程序结构严谨我们肯定不能随便胡乱标记

**⑥创建组件**

创建控制层组件

```java
@Controller
public class UserController {
}
```

创建接口UserService

```java
public interface UserService {
}
```

创建业务层组件UserServiceImpl

```java
@Service
public class UserServiceImpl implements UserService {
}
```

创建接口UserDao

```java
public interface UserDao {
}
```

创建持久层组件UserDaoImpl

```java
@Repository
public class UserDaoImpl implements UserDao {
}
```

**⑦扫描组件**

情况一：最基本的扫描方式

```xml
<context:component-scan base-package="com.atguigu">
</context:component-scan>
```

情况二：指定要排除的组件

```xml
<context:component-scan base-package="com.atguigu">
	<!-- context:exclude-filter标签：指定排除规则 -->
	<!--
		type：设置排除或包含的依据
		type="annotation"，根据注解排除，expression中设置要排除的注解的全类名
		type="assignable"，根据类型排除，expression中设置要排除的类型的全类名
	-->
	<context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
		<!--<context:exclude-filter type="assignable" expression="com.atguigu.controller.UserController"/>-->
</context:component-scan>
```

情况三：仅扫描指定组件

```xml
<context:component-scan base-package="com.atguigu" use-default-filters="false">
<!-- context:include-filter标签：指定在原有扫描规则的基础上追加的规则 -->
<!-- use-default-filters属性：取值false表示关闭默认扫描规则 -->
<!-- 此时必须设置use-default-filters="false"，因为默认规则即扫描指定包下所有类 -->
<!--
type：设置排除或包含的依据
type="annotation"，根据注解排除，expression中设置要排除的注解的全类名
type="assignable"，根据类型排除，expression中设置要排除的类型的全类名
-->
<context:include-filter type="annotation"
expression="org.springframework.stereotype.Controller"/>
<!--<context:include-filter type="assignable"
expression="com.atguigu.controller.UserController"/>-->
</context:component-scan>
```

**⑧测试**

```java
@Test
public void testAutowireByAnnotation(){
	ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
	UserController userController = ac.getBean(UserController.class);
	System.out.println(userController);
	UserService userService = ac.getBean(UserService.class);
	System.out.println(userService);
	UserDao userDao = ac.getBean(UserDao.class);
	System.out.println(userDao);
}
```

**⑨组件所对应的bean的id**

在我们使用XML方式管理bean的时候，每个bean都有一个唯一标识，便于在其他地方引用。现在使用 注解后，每个组件仍然应该有一个唯一标识

> 默认情况 
>
> 类名首字母小写就是bean的id。例如：UserController类对应的bean的id就是userController。 
>
> 自定义bean的id 
>
> 可通过标识组件的注解的value属性设置自定义的bean的id @Service("userService")//默认为userServiceImpl public class UserServiceImpl implements UserService {}

### 基于注解的自动装配

**①场景模拟**

> 参考基于xml的自动装配 
>
> 在UserController中声明UserService对象 
>
> 在UserServiceImpl中声明UserDao对象

**②@Autowired注解**

在成员变量上直接标记@Autowired注解即可完成自动装配，不需要提供setXxx()方法。以后我们在项目中的正式用法就是这样

```java
@Controller
public class UserController {

    @Autowired
	private UserService userService;

    public void saveUser(){
		userService.saveUser();
	}
}
```

```java
public interface UserService {
	void saveUser();
}
```

```java
@Service
public class UserServiceImpl implements UserService {

    @Autowired
	private UserDao userDao;

    @Override
	public void saveUser() {
		userDao.saveUser();
	}
}
```

```java
public interface UserDao {
	void saveUser();
}
```

```java
@Repository
public class UserDaoImpl implements UserDao {

    @Override
	public void saveUser() {
		System.out.println("保存成功");
	}
}
```

**③@Autowired注解其他细节**

> @Autowired注解可以标记在构造器和set方法上

```java
@Controller
public class UserController {

    private UserService userService;

    @Autowired
	public UserController(UserService userService){
		this.userService = userService;
	}

    public void saveUser(){
		userService.saveUser();
	}
}
```

```java
@Controller
public class UserController {

    private UserService userService;

    @Autowired
	public void setUserService(UserService userService){
		this.userService = userService;
	}
    
	public void saveUser(){
        userService.saveUser();
	}
}
```

**④@Autowired工作流程**

![Snipaste_2022-09-22_17-38-14.png](https://s2.loli.net/2022/09/22/7MnN3aURWGwycVI.png)

- 首先根据所需要的组件类型到IOC容器中查找 

  - 能够找到唯一的bean：直接执行装配 

  - 如果完全找不到匹配这个类型的bean：装配失败 

  - 和所需类型匹配的bean不止一个 

    - 没有@Qualifier注解：根据@Autowired标记位置成员变量的变量名作为bean的id进行 匹配 
      - 能够找到：执行装配 
      - 找不到：装配失败 

    - 使用@Qualifier注解：根据@Qualifier注解中指定的名称作为bean的id进行匹配 
      - 能够找到：执行装配 
      - 找不到：装配失败

```java
@Controller
public class UserController {

    @Autowired
	@Qualifier("userServiceImpl")
	private UserService userService;
		public void saveUser(){
		userService.saveUser();
	}
}
```

> @Autowired中有属性required，默认值为true，因此在自动装配无法找到相应的bean时，会装配失败 
>
> 可以将属性required的值设置为true，则表示能装就装，装不上就不装，此时自动装配的属性为默认值 
>
> 但是实际开发时，基本上所有需要装配组件的地方都是必须装配的，用不上这个属性。
