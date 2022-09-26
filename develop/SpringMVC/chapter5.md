---
title: ajax请求与文件上传和下载
icon: iconfont icon-bxl-spring-boot
date: 2022-09-26
---

## @RequestBody

@RequestBody可以获取请求体信息，使用@RequestBody注解标识控制器方法的形参，当前请求的请求体就会为当前注解所标识的形参赋值

```xml
<!--此时必须使用post请求方式，因为get请求没有请求体-->
<form th:action="@{/test/RequestBody}" method="post">
	用户名：<input type="text" name="username"><br>
	密码：<input type="password" name="password"><br>
	<input type="submit">
</form>
```

```java
@RequestMapping("/test/RequestBody")
public String testRequestBody(@RequestBody String requestBody){
	System.out.println("requestBody:"+requestBody);
	return "success";
}
```

输出结果： requestBody:username=admin&password=123456

## @RequestBody获取json格式的请求参数

> 在使用了axios发送ajax请求之后，浏览器发送到服务器的请求参数有两种格式： 
>
> 1、name=value&name=value...，此时的请求参数可以通过request.getParameter()获取，对应 SpringMVC中，可以直接通过控制器方法的形参获取此类请求参数
>
> 2、{key:value,key:value,...}，此时无法通过request.getParameter()获取，之前我们使用操作 json的相关jar包gson或jackson处理此类请求参数，可以将其转换为指定的实体类对象或map集 合。在SpringMVC中，直接使用@RequestBody注解标识控制器方法的形参即可将此类请求参数 转换为java对象

使用@RequestBody获取json格式的请求参数的条件：

1、导入jackson的依赖

```xml
<dependency>
	<groupId>com.fasterxml.jackson.core</groupId>
	<artifactId>jackson-databind</artifactId>
	<version>2.12.1</version>
</dependency>
```

2、SpringMVC的配置文件中设置开启mvc的注解驱动

```xml
<!--开启mvc的注解驱动-->
<mvc:annotation-driven />
```

3、在控制器方法的形参位置，设置json格式的请求参数要转换成的java类型（实体类或map）的参 数，并使用@RequestBody注解标识

```html
<input type="button" value="测试@RequestBody获取json格式的请求参数" @click="testRequestBody()"><br>

<script type="text/javascript" th:src="@{/js/vue.js}"></script>
<script type="text/javascript" th:src="@{/js/axios.min.js}"></script>
<script type="text/javascript">
	var vue = new Vue({
		el:"#app",
		methods:{
			testRequestBody(){
				axios.post(
					"/SpringMVC/test/RequestBody/json",
					{username:"admin",password:"123456"}
					).then(response=>{
						console.log(response.data);
					});
				}
			}
		});
</script>
```

```java
//将json格式的数据转换为map集合
@RequestMapping("/test/RequestBody/json")
public void testRequestBody(@RequestBody Map<String, Object> map, HttpServletResponse response) throws IOException {
	System.out.println(map);
	//{username=admin, password=123456}
	response.getWriter().print("hello,axios");
}
//将json格式的数据转换为实体类对象
@RequestMapping("/test/RequestBody/json")
public void testRequestBody(@RequestBody User user, HttpServletResponse response) throws IOException {
	System.out.println(user);
	//User{id=null, username='admin', password='123456', age=null, gender='null'}
	response.getWriter().print("hello,axios");
}
```

## @ResponseBody

@ResponseBody用于标识一个控制器方法，可以将该方法的返回值直接作为响应报文的响应体响应到浏览器

```java
@RequestMapping("/testResponseBody")
public String testResponseBody(){
	//此时会跳转到逻辑视图success所对应的页面
	return "success";
}

@RequestMapping("/testResponseBody")
@ResponseBody
public String testResponseBody(){
	//此时响应浏览器数据success
	return "success";
}
```

## @ResponseBody响应浏览器json数据

服务器处理ajax请求之后，大多数情况都需要向浏览器响应一个java对象，此时必须将java对象转换为json字符串才可以响应到浏览器，之前我们使用操作json数据的jar包gson或jackson将java对象转换为json字符串。在SpringMVC中，我们可以直接使用@ResponseBody注解实现此功能

@ResponseBody响应浏览器json数据的条件：

1、导入jackson的依赖

```xml
<dependency>
	<groupId>com.fasterxml.jackson.core</groupId>
	<artifactId>jackson-databind</artifactId>
	<version>2.12.1</version>
</dependency>
```

2、SpringMVC的配置文件中设置开启mvc的注解驱动

```xml
<!--开启mvc的注解驱动-->
<mvc:annotation-driven />
```

3、使用@ResponseBody注解标识控制器方法，在方法中，将需要转换为json字符串并响应到浏览器的java对象作为控制器方法的返回值，此时SpringMVC就可以将此对象直接转换为json字符串并响应到浏览器

```html
<input type="button" value="测试@ResponseBody响应浏览器json格式的数据"
@click="testResponseBody()"><br>

<script type="text/javascript" th:src="@{/js/vue.js}"></script>
<script type="text/javascript" th:src="@{/js/axios.min.js}"></script>
<script type="text/javascript">
	var vue = new Vue({
		el:"#app",
		methods:{
			testResponseBody(){
			axios.post("/SpringMVC/test/ResponseBody/json").then(response=>{
				console.log(response.data);
				});
			}
		}
	});
</script>
```

```java
//响应浏览器list集合
@RequestMapping("/test/ResponseBody/json")
@ResponseBody
public List<User> testResponseBody(){
	User user1 = new User(1001,"admin1","123456",23,"男");
	User user2 = new User(1002,"admin2","123456",23,"男");
	User user3 = new User(1003,"admin3","123456",23,"男");
	List<User> list = Arrays.asList(user1, user2, user3);
	return list;
}
//响应浏览器map集合
@RequestMapping("/test/ResponseBody/json")
@ResponseBody
public Map<String, Object> testResponseBody(){
	User user1 = new User(1001,"admin1","123456",23,"男");
	User user2 = new User(1002,"admin2","123456",23,"男");
	User user3 = new User(1003,"admin3","123456",23,"男");
	Map<String, Object> map = new HashMap<>();
	map.put("1001", user1);
	map.put("1002", user2);
	map.put("1003", user3);
	return map;
}
//响应浏览器实体类对象
@RequestMapping("/test/ResponseBody/json")
@ResponseBody
public User testResponseBody(){
	return user;
}
```

## @RestController注解

@RestController注解是springMVC提供的一个复合注解，标识在控制器的类上，就相当于为类添加了 @Controller注解，并且为其中的每个方法添加了@ResponseBody注解

# 文件上传和下载

## 文件下载

ResponseEntity用于控制器方法的返回值类型，该控制器方法的返回值就是响应到浏览器的响应报文

使用ResponseEntity实现下载文件的功能

```java
@RequestMapping("/testDown")
public ResponseEntity<byte[]> testResponseEntity(HttpSession session) throws IOException {
	//获取ServletContext对象
	ServletContext servletContext = session.getServletContext();
	//获取服务器中文件的真实路径
	String realPath = servletContext.getRealPath("/static/img/1.jpg");
	//创建输入流
	InputStream is = new FileInputStream(realPath);
	//创建字节数组
	byte[] bytes = new byte[is.available()];
	//将流读到字节数组中
	is.read(bytes);
	//创建HttpHeaders对象设置响应头信息
	MultiValueMap<String, String> headers = new HttpHeaders();
	//设置要下载方式以及下载文件的名字
	headers.add("Content-Disposition", "attachment;filename=1.jpg");
	//设置响应状态码
	HttpStatus statusCode = HttpStatus.OK;
	//创建ResponseEntity对象
	ResponseEntity<byte[]> responseEntity = new ResponseEntity<>(bytes, headers, statusCode);
	//关闭输入流
	is.close();
	return responseEntity;
}
```

## 文件上传

文件上传要求form表单的请求方式必须为post，并且添加属性enctype="multipart/form-data" 

SpringMVC中将上传的文件封装到MultipartFile对象中，通过此对象可以获取文件相关信息 

上传步骤： 

**①添加依赖：**

```xml
<!-- https://mvnrepository.com/artifact/commons-fileupload/commons-fileupload -->
<dependency>
	<groupId>commons-fileupload</groupId>
	<artifactId>commons-fileupload</artifactId>
	<version>1.3.1</version>
</dependency>
```

**②在SpringMVC的配置文件中添加配置：**

```xml
<!--必须通过文件解析器的解析才能将文件转换为MultipartFile对象-->
<bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
</bean>
```

**③控制器方法：**

```java
@RequestMapping("/testUp")
public String testUp(MultipartFile photo, HttpSession session) throws IOException {
	//获取上传的文件的文件名
	String fileName = photo.getOriginalFilename();
	//处理文件重名问题
	String hzName = fileName.substring(fileName.lastIndexOf("."));
	fileName = UUID.randomUUID().toString() + hzName;
	//获取服务器中photo目录的路径
	ServletContext servletContext = session.getServletContext();
	String photoPath = servletContext.getRealPath("photo");
	File file = new File(photoPath);
	if(!file.exists()){
		file.mkdir();
	}
	String finalPath = photoPath + File.separator + fileName;
	//实现上传功能
photo.transferTo(new File(finalPath));
return "success";
}
```

