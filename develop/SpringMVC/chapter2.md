---
title: RequestMapping注解与请求参数获取
icon: iconfont icon-bxl-spring-boot
date: 2022-09-25
---

## @RequestMapping注解的功能

从注解名称上我们可以看到，@RequestMapping注解的作用就是将请求和处理请求的控制器方法关联 起来，建立映射关系

SpringMVC 接收到指定的请求，就会来找到在映射关系中对应的控制器方法来处理这个请求

## @RequestMapping注解的位置

@RequestMapping标识一个类：设置映射请求的请求路径的初始信息 

@RequestMapping标识一个方法：设置映射请求请求路径的具体信息

```java
@Controller
@RequestMapping("/test")
public class RequestMappingController {

    //此时请求映射所映射的请求的请求路径为：/test/testRequestMapping
	@RequestMapping("/testRequestMapping")
	public String testRequestMapping(){
		return "success";
	}
}
```

## @RequestMapping注解的value属性

@RequestMapping注解的value属性通过请求的请求地址匹配请求映射 

@RequestMapping注解的value属性是一个字符串类型的数组，表示该请求映射能够匹配多个请求地址所对应的请求 

@RequestMapping注解的value属性必须设置，至少通过请求地址匹配请求映射

```xml
<a th:href="@{/testRequestMapping}">测试@RequestMapping的value属性-->/testRequestMapping</a><br>
<a th:href="@{/test}">测试@RequestMapping的value属性-->/test</a><br>
```

```java
@RequestMapping( value = {"/testRequestMapping", "/test"} )
public String testRequestMapping(){
	return "success";
}
```

## @RequestMapping注解的method属性

@RequestMapping注解的method属性通过请求的请求方式（get或post）匹配请求映射

@RequestMapping注解的method属性是一个RequestMethod类型的数组，表示该请求映射能够匹配多种请求方式的请求 

若当前请求的请求地址满足请求映射的value属性，但是请求方式不满足method属性，则浏览器报错 405：Request method 'POST' not supported

```xml
<a th:href="@{/test}">测试@RequestMapping的value属性-->/test</a><br>
<form th:action="@{/test}" method="post">
	<input type="submit">
</form>
```

```java
@RequestMapping(
	value = {"/testRequestMapping", "/test"},
	method = {RequestMethod.GET, RequestMethod.POST}
)
public String testRequestMapping(){
	return "success";
}
```

> 注： 
>
> 1、对于处理指定请求方式的控制器方法，SpringMVC中提供了@RequestMapping的派生注解 
>
> 处理get请求的映射-->@GetMapping 
>
> 处理post请求的映射-->@PostMapping 
>
> 处理put请求的映射-->@PutMapping 
>
> 处理delete请求的映射-->@DeleteMapping 
>
> 2、常用的请求方式有get，post，put，delete 
>
> 但是目前浏览器只支持get和post，若在form表单提交时，为method设置了其他请求方式的字符 串（put或delete），则按照默认的请求方式get处理 
>
> 若要发送put和delete请求，则需要通过spring提供的过滤器HiddenHttpMethodFilter，在 RESTful部分会讲到

## @RequestMapping注解的params属性

@RequestMapping注解的params属性通过请求的请求参数匹配请求映射 

@RequestMapping注解的params属性是一个字符串类型的数组，可以通过四种表达式设置请求参数 和请求映射的匹配关系 

"param"：要求请求映射所匹配的请求必须携带param请求参数

"!param"：要求请求映射所匹配的请求必须不能携带param请求参数 

"param=value"：要求请求映射所匹配的请求必须携带param请求参数且param=value 

"param!=value"：要求请求映射所匹配的请求必须携带param请求参数但是param!=value

```xml
<a th:href="@{/test(username='admin',password=123456)">测试@RequestMapping的params属性-->/test</a><br>
```

```java
@RequestMapping(
	value = {"/testRequestMapping", "/test"}
	,method = {RequestMethod.GET, RequestMethod.POST}
	,params = {"username","password!=123456"}
)
public String testRequestMapping(){
	return "success";
}
```

> 注： 
>
> 若当前请求满足@RequestMapping注解的value和method属性，但是不满足params属性，此时 页面回报错400：Parameter conditions "username, password!=123456" not met for actual request parameters: username={admin}, password={123456}

## @RequestMapping注解的headers属性

@RequestMapping注解的headers属性通过请求的请求头信息匹配请求映射 

@RequestMapping注解的headers属性是一个字符串类型的数组，可以通过四种表达式设置请求头信息和请求映射的匹配关系 

"header"：要求请求映射所匹配的请求必须携带header请求头信息 

"!header"：要求请求映射所匹配的请求必须不能携带header请求头信息 

"header=value"：要求请求映射所匹配的请求必须携带header请求头信息且header=value 

"header!=value"：要求请求映射所匹配的请求必须携带header请求头信息且header!=value 

若当前请求满足@RequestMapping注解的value和method属性，但是不满足headers属性，此时页面 显示404错误，即资源未找到

## SpringMVC支持ant风格的路径

`？`：表示任意的单个字符 

`*`：表示任意的0个或多个字符 

`**`：表示任意层数的任意目录

注意：在使用`**`时，只能使用`/**/xxx`的方式

## SpringMVC支持路径中的占位符

原始方式：/deleteUser?id=1 

rest方式：/user/delete/1

SpringMVC路径中的占位符常用于RESTful风格中，当请求路径中将某些数据通过路径的方式传输到服务器中，就可以在相应的@RequestMapping注解的value属性中通过占位符{xxx}表示传输的数据，在通过@PathVariable注解，将占位符所表示的数据赋值给控制器方法的形参

```xml
<a th:href="@{/testRest/1/admin}">测试路径中的占位符-->/testRest</a><br>
```

```java
@RequestMapping("/testRest/{id}/{username}")
public String testRest(@PathVariable("id") String id, @PathVariable("username") String username){
	System.out.println("id:"+id+",username:"+username);
	return "success";
}
//最终输出的内容为-->id:1,username:admin
```

---

# SpringMVC获取请求参数

## 通过ServletAPI获取

将HttpServletRequest作为控制器方法的形参，此时HttpServletRequest类型的参数表示封装了当前请求的请求报文的对象

```java
@RequestMapping("/testParam")
public String testParam(HttpServletRequest request){
	String username = request.getParameter("username");
	String password = request.getParameter("password");
	System.out.println("username:"+username+",password:"+password);
	return "success";
}
```

## 通过控制器方法的形参获取请求参数

在控制器方法的形参位置，设置和请求参数同名的形参，当浏览器发送请求，匹配到请求映射时，在 DispatcherServlet中就会将请求参数赋值给相应的形参

```xml
<a th:href="@{/testParam(username='admin',password=123456)}">测试获取请求参数-->/testParam</a><br>
```

```java
@RequestMapping("/testParam")
public String testParam(String username, String password){
	System.out.println("username:"+username+",password:"+password);
	return "success";
}
```

> 注： 
>
> 若请求所传输的请求参数中有多个同名的请求参数，此时可以在控制器方法的形参中设置字符串 数组或者字符串类型的形参接收此请求参数 
>
> 若使用字符串数组类型的形参，此参数的数组中包含了每一个数据 
>
> 若使用字符串类型的形参，此参数的值为每个数据中间使用逗号拼接的结果

## @RequestParam

@RequestParam是将请求参数和控制器方法的形参创建映射关系 

@RequestParam注解一共有三个属性： 

value：指定为形参赋值的请求参数的参数名 

required：设置是否必须传输此请求参数，默认值为true 若设置为true时，则当前请求必须传输value所指定的请求参数，若没有传输该请求参数，且没有设置 defaultValue属性，则页面报错400：Required String parameter 'xxx' is not present；若设置为 false，则当前请求不是必须传输value所指定的请求参数，若没有传输，则注解所标识的形参的值为 null 

defaultValue：不管required属性值为true或false，当value所指定的请求参数没有传输或传输的值 为""时，则使用默认值为形参赋值

## @RequestHeader

@RequestHeader是将请求头信息和控制器方法的形参创建映射关系 

@RequestHeader注解一共有三个属性：value、required、defaultValue，用法同@RequestParam

## @CookieValue

@CookieValue是将cookie数据和控制器方法的形参创建映射关系 

@CookieValue注解一共有三个属性：value、required、defaultValue，用法同@RequestParam

## 通过POJO获取请求参数

可以在控制器方法的形参位置设置一个实体类类型的形参，此时若浏览器传输的请求参数的参数名和实体类中的属性名一致，那么请求参数就会为此属性赋值

````xml
<form th:action="@{/testpojo}" method="post">
	用户名：<input type="text" name="username"><br>
	密码：<input type="password" name="password"><br>
	性别：<input type="radio" name="sex" value="男">男<input type="radio" name="sex" value="女">女<br>
	年龄：<input type="text" name="age"><br>
	邮箱：<input type="text" name="email"><br>
	<input type="submit">
</form>
````

```java
@RequestMapping("/testpojo")
public String testPOJO(User user){
	System.out.println(user);
	return "success";
}
//最终结果-->User{id=null, username='张三', password='123', age=23, sex='男', email='123@qq.com'}
```

## 解决获取请求参数的乱码问题

解决获取请求参数的乱码问题，可以使用SpringMVC提供的编码过滤器CharacterEncodingFilter，但是必须在web.xml中进行注册

```xml
<!--配置springMVC的编码过滤器-->
<filter>
	<filter-name>CharacterEncodingFilter</filter-name>
	<filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
	<init-param>
		<param-name>encoding</param-name>
		<param-value>UTF-8</param-value>
	</init-param>
	<init-param>
		<param-name>forceEncoding</param-name>
		<param-value>true</param-value>
	</init-param>
	</filter>
<filter-mapping>
	<filter-name>CharacterEncodingFilter</filter-name>
	<url-pattern>/*</url-pattern>
</filter-mapping>
```

> 注： SpringMVC中处理编码的过滤器一定要配置到其他过滤器之前，否则无效
