---
title: RESTful
icon: iconfont icon-bxl-spring-boot
date: 2022-09-25
---

## RESTful简介

REST：Representational State Transfer，表现层资源状态转移

**①资源**

资源是一种看待服务器的方式，即，将服务器看作是由很多离散的资源组成。每个资源是服务器上一个可命名的抽象概念。因为资源是一个抽象的概念，所以它不仅仅能代表服务器文件系统中的一个文件、 数据库中的一张表等等具体的东西，可以将资源设计的要多抽象有多抽象，只要想象力允许而且客户端应用开发者能够理解。

与面向对象设计类似，资源是以名词为核心来组织的，首先关注的是名词。一个资源可以由一个或多个URI来标识。URI既是资源的名称，也是资源在Web上的地址。对某个资源感兴趣的客户端应用，可以通过资源的URI与其进行交互

**②资源的表述**

资源的表述是一段对于资源在某个特定时刻的状态的描述。可以在客户端-服务器端之间转移（交 换）。资源的表述可以有多种格式，例如HTML/XML/JSON/纯文本/图片/视频/音频等等。资源的表述格 式可以通过协商机制来确定。请求-响应方向的表述通常使用不同的格式

**③状态转移**

状态转移说的是：在客户端和服务器端之间转移（transfer）代表资源状态的表述。通过转移和操作资源的表述，来间接实现操作资源的目的

## RESTful的实现

具体说，就是 HTTP 协议里面，四个表示操作方式的动词：GET、POST、PUT、DELETE

它们分别对应四种基本操作：GET 用来获取资源，POST 用来新建资源，PUT 用来更新资源，DELETE用来删除资源

REST 风格提倡 URL 地址使用统一的风格设计，从前到后各个单词使用斜杠分开，不使用问号键值对方式携带请求参数，而是将要发送给服务器的数据作为 URL 地址的一部分，以保证整体风格的一致性

| 操作     | 传统方式         | REST风格                |
| -------- | ---------------- | ----------------------- |
| 查询操作 | getUserById?id=1 | user/1-->get请求方式    |
| 保存操作 | saveUser         | user-->post请求方式     |
| 删除操作 | deleteUser?id=1  | user/1-->delete请求方式 |
| 更新操作 | updateUser       | user-->put请求方式      |

## HiddenHttpMethodFilter

由于浏览器只支持发送get和post方式的请求，那么该如何发送put和delete请求呢？ 

SpringMVC 提供了 HiddenHttpMethodFilter 帮助我们**将 POST 请求转换为 DELETE 或 PUT 请求** 

**HiddenHttpMethodFilter** 处理put和delete请求的条件： 

a>当前请求的请求方式必须为post 

b>当前请求必须传输请求参数`_method` 

满足以上条件，HiddenHttpMethodFilter 过滤器就会将当前请求的请求方式转换为请求参数 `_method`的值，因此请求参数`_method`的值才是最终的请求方式 

在web.xml中注册HiddenHttpMethodFilter:

```xml
<filter>
	<filter-name>HiddenHttpMethodFilter</filter-name>
	<filter-class>org.springframework.web.filter.HiddenHttpMethodFilter</filter-class>
</filter>
<filter-mapping>
	<filter-name>HiddenHttpMethodFilter</filter-name>
	<url-pattern>/*</url-pattern>
</filter-mapping>
```

> 注：
>
> 目前为止，SpringMVC中提供了两个过滤器：CharacterEncodingFilter和 HiddenHttpMethodFilter 
>
> 在web.xml中注册时，必须先注册CharacterEncodingFilter，再注册HiddenHttpMethodFilter 
>
> 原因： 
>
> - 在 CharacterEncodingFilter 中通过 request.setCharacterEncoding(encoding) 方法设置字 符集 
>
> - request.setCharacterEncoding(encoding) 方法要求前面不能有任何获取请求参数的操作 而 HiddenHttpMethodFilter 恰恰有一个获取请求方式的操作：
>
> - ```java
>   String paramValue = request.getParameter(this.methodParam);
>   ```

# RESTful案例

## 准备工作

和传统 CRUD 一样，实现对员工信息的增删改查。 

- 搭建环境 
- 准备实体类

```java
package com.atguigu.mvc.bean;

public class Employee {

    private Integer id;

    private String lastName;

    private String email;

    //1 male, 0 female

    private Integer gender;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
		this.id = id;
	}

    public String getLastName() {
		return lastName;
	}

    public void setLastName(String lastName) {
		this.lastName = lastName;
	}

    public String getEmail() {
		return email;
	}

    public void setEmail(String email) {
		this.email = email;
	}

    public Integer getGender() {
		return gender;
    }

    public void setGender(Integer gender) {
		this.gender = gender;
	}

    public Employee(Integer id, String lastName, String email, Integer gender) {
		super();
		this.id = id;
		this.lastName = lastName;
		this.email = email;
		this.gender = gender;
	}

    public Employee() {
	}
}
```

- 准备dao模拟数据

```java
package com.atguigu.mvc.dao;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import com.atguigu.mvc.bean.Employee;
import org.springframework.stereotype.Repository;

@Repository
public class EmployeeDao {

    private static Map<Integer, Employee> employees = null;

    static{
		employees = new HashMap<Integer, Employee>();
		employees.put(1001, new Employee(1001, "E-AA", "aa@163.com", 1));
		employees.put(1002, new Employee(1002, "E-BB", "bb@163.com", 1));
		employees.put(1003, new Employee(1003, "E-CC", "cc@163.com", 0));
		employees.put(1004, new Employee(1004, "E-DD", "dd@163.com", 0));
		employees.put(1005, new Employee(1005, "E-EE", "ee@163.com", 1));
	}

    private static Integer initId = 1006;

    public void save(Employee employee){
		if(employee.getId() == null){
			employee.setId(initId++);
		}
		employees.put(employee.getId(), employee);
	}

    public Collection<Employee> getAll(){
		return employees.values();
	}

    public Employee get(Integer id){
		return employees.get(id);
	}

    public void delete(Integer id){
		employees.remove(id);
	}
}
```

## 功能清单

| 功能                | URL 地址    | 请求方式 |
| ------------------- | ----------- | -------- |
| 访问首页√           | /           | GET      |
| 查询全部数据√       | /employee   | GET      |
| 删除√               | /employee/2 | DELETE   |
| 跳转到添加数据页面√ | /toAdd      | GET      |
| 执行保存√           | /employee   | POST     |
| 跳转到更新数据页面√ | /employee/2 | GET      |
| 执行更新√           | /employee   | PUT      |

## 具体功能：访问首页

**①配置view-controller**

```xml
<mvc:view-controller path="/" view-name="index"/>
```

**②创建页面**

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
	<meta charset="UTF-8" >
	<title>Title</title>
</head>
<body>
	<h1>首页</h1>
	<a th:href="@{/employee}">访问员工信息</a>
</body>
</html>
```

## 具体功能：查询所有员工数据

**①控制器方法**

```java
@RequestMapping(value = "/employee", method = RequestMethod.GET)
public String getEmployeeList(Model model){
	Collection<Employee> employeeList = employeeDao.getAll();
	model.addAttribute("employeeList", employeeList);
	return "employee_list";
}
```

**②创建employee_list.html**

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
	<meta charset="UTF-8">
	<title>Employee Info</title>
	<script type="text/javascript" th:src="@{/static/js/vue.js}"></script>
</head>
<body>
	<table border="1" cellpadding="0" cellspacing="0" style="text-align: center;" id="dataTable">
		<tr>
			<th colspan="5">Employee Info</th>
		</tr>
		<tr>
			<th>id</th>
			<th>lastName</th>
			<th>email</th>
			<th>gender</th>
			<th>options(<a th:href="@{/toAdd}">add</a>)</th>
		</tr>
		<tr th:each="employee : ${employeeList}">
			<td th:text="${employee.id}"></td>
			<td th:text="${employee.lastName}"></td>
			<td th:text="${employee.email}"></td>
			<td th:text="${employee.gender}"></td>
			<td>
				<a class="deleteA" @click="deleteEmployee" th:href="@{'/employee/'+${employee.id}}">delete</a>
				<a th:href="@{'/employee/'+${employee.id}}">update</a>
			</td>
		</tr>
	</table>
</body>
</html>
```

## 具体功能：删除

**①创建处理delete请求方式的表单**

```xml
<!-- 作用：通过超链接控制表单的提交，将post请求转换为delete请求 -->
<form id="delete_form" method="post">
	<!-- HiddenHttpMethodFilter要求：必须传输_method请求参数，并且值为最终的请求方式 -->
	<input type="hidden" name="_method" value="delete"/>
</form>
```

**②删除超链接绑定点击事件**

引入vue.js

```xml
<script type="text/javascript" th:src="@{/static/js/vue.js}"></script>
```

删除超链接

```html
<a class="deleteA" @click="deleteEmployee" th:href="@{'/employee/'+${employee.id}}">delete</a>
```

通过vue处理点击事件

```html
<script type="text/javascript">
	var vue = new Vue({
		el:"#dataTable",
		methods:{
			//event表示当前事件
			deleteEmployee:function (event) {
				//通过id获取表单标签
				var delete_form = document.getElementById("delete_form");
				//将触发事件的超链接的href属性为表单的action属性赋值
				delete_form.action = event.target.href;
				//提交表单
				delete_form.submit();
				//阻止超链接的默认跳转行为
				event.preventDefault();
			}
		}
	});
</script>
```

**③控制器方法**

```java
@RequestMapping(value = "/employee/{id}", method = RequestMethod.DELETE)
public String deleteEmployee(@PathVariable("id") Integer id){
	employeeDao.delete(id);
	return "redirect:/employee";
}
```

## 具体功能：跳转到添加数据页面

**①配置view-controller**

```xml
<mvc:view-controller path="/toAdd" view-name="employee_add"></mvc:view-controller>
```

**②创建employee_add.html**

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
	<meta charset="UTF-8">
	<title>Add Employee</title>
</head>
<body>
<form th:action="@{/employee}" method="post">
	lastName:<input type="text" name="lastName"><br>
	email:<input type="text" name="email"><br>
	gender:<input type="radio" name="gender" value="1">male
	<input type="radio" name="gender" value="0">female<br>
	<input type="submit" value="add"><br>
</form>
</body>
</html>    
```

## 具体功能：执行保存

**①控制器方法**

```java
@RequestMapping(value = "/employee", method = RequestMethod.POST)
public String addEmployee(Employee employee){
	employeeDao.save(employee);
	return "redirect:/employee";
}
```

## 具体功能：跳转到更新数据页面

**①修改超链接**

```html
<a th:href="@{'/employee/'+${employee.id}}">update</a>
```

**②控制器方法**

```java
@RequestMapping(value = "/employee/{id}", method = RequestMethod.GET)
public String getEmployeeById(@PathVariable("id") Integer id, Model model){
	Employee employee = employeeDao.get(id);
	model.addAttribute("employee", employee);
	return "employee_update";
}
```

**③创建employee_update.html**

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
	<meta charset="UTF-8">
	<title>Update Employee</title>
</head>
<body>
<form th:action="@{/employee}" method="post">
	<input type="hidden" name="_method" value="put">
	<input type="hidden" name="id" th:value="${employee.id}">
	lastName:<input type="text" name="lastName" th:value="${employee.lastName}">
<br>
	email:<input type="text" name="email" th:value="${employee.email}"><br>
	<!--
		th:field="${employee.gender}"可用于单选框或复选框的回显
		若单选框的value和employee.gender的值一致，则添加checked="checked"属性
	-->
	gender:<input type="radio" name="gender" value="1" th:field="${employee.gender}">male
	<input type="radio" name="gender" value="0" th:field="${employee.gender}">female<br>
	<input type="submit" value="update"><br>
</form>
</body>
</html>
```

## 具体功能：执行更新

**①控制器方法**

```java
@RequestMapping(value = "/employee", method = RequestMethod.PUT)
public String updateEmployee(Employee employee){
	employeeDao.save(employee);
	return "redirect:/employee";
}
```

