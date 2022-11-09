---
title: 域对象共享数据与视图
icon: iconfont icon-bxl-spring-boot
date: 2022-09-25
---

## 使用ServletAPI向request域对象共享数据

```java
@RequestMapping("/testServletAPI")
public String testServletAPI(HttpServletRequest request){
	request.setAttribute("testScope", "hello,servletAPI");
	return "success";
}
```

## 使用ModelAndView向request域对象共享数据

```java
@RequestMapping("/testModelAndView")
public ModelAndView testModelAndView(){
	/**
		* ModelAndView有Model和View的功能
		* Model主要用于向请求域共享数据
		* View主要用于设置视图，实现页面跳转
	*/
	ModelAndView mav = new ModelAndView();
	//向请求域共享数据
	mav.addObject("testScope", "hello,ModelAndView");
	//设置视图，实现页面跳转
	mav.setViewName("success");
	return mav;
}
```

## 使用Model向request域对象共享数据

```java
@RequestMapping("/testModel")
public String testModel(Model model){
	model.addAttribute("testScope", "hello,Model");
	return "success";
}
```

## 使用map向request域对象共享数据

```java
@RequestMapping("/testMap")
public String testMap(Map<String, Object> map){
	map.put("testScope", "hello,Map");
	return "success";
}
```

## 使用ModelMap向request域对象共享数据

```java
@RequestMapping("/testModelMap")
public String testModelMap(ModelMap modelMap){
	modelMap.addAttribute("testScope", "hello,ModelMap");
	return "success";
}
```

## Model、ModelMap、Map的关系

Model、ModelMap、Map类型的参数其实本质上都是 BindingAwareModelMap 类型的

```java
public interface Model{}
public class ModelMap extends LinkedHashMap<String, Object> {}
public class ExtendedModelMap extends ModelMap implements Model {}
public class BindingAwareModelMap extends ExtendedModelMap {}
```

## 向session域共享数据

```java
@RequestMapping("/testSession")
public String testSession(HttpSession session){
	session.setAttribute("testSessionScope", "hello,session");
	return "success";
}
```

## 向application域共享数据

```java
@RequestMapping("/testApplication")
public String testApplication(HttpSession session){
	ServletContext application = session.getServletContext();
	application.setAttribute("testApplicationScope", "hello,application");
	return "success";
}
```

---

# SpringMVC的视图

SpringMVC中的视图是View接口，视图的作用渲染数据，将模型Model中的数据展示给用户

SpringMVC视图的种类很多，默认有转发视图和重定向视图 

当工程引入jstl的依赖，转发视图会自动转换为JstlView 

若使用的视图技术为Thymeleaf，在SpringMVC的配置文件中配置了Thymeleaf的视图解析器，由此视图解析器解析之后所得到的是ThymeleafView

## ThymeleafView

当控制器方法中所设置的视图名称没有任何前缀时，此时的视图名称会被SpringMVC配置文件中所配置 的视图解析器解析，视图名称拼接视图前缀和视图 

后缀所得到的最终路径，会通过转发的方式实现跳转

```java
@RequestMapping("/testHello")
public String testHello(){
	return "hello";
}
```

## 转发视图

SpringMVC中默认的转发视图是InternalResourceView 

SpringMVC中创建转发视图的情况： 当控制器方法中所设置的视图名称以"forward:"为前缀时，创建InternalResourceView视图，此时的视图名称不会被SpringMVC配置文件中所配置的视图解析器解析，而是会将前缀"forward:"去掉，剩余部 分作为最终路径通过转发的方式实现跳转 

例如"forward:/"，"forward:/employee"

```java
@RequestMapping("/testForward")
public String testForward(){
	return "forward:/testHello";
}
```

## 重定向视图

SpringMVC中默认的重定向视图是RedirectView

当控制器方法中所设置的视图名称以"redirect:"为前缀时，创建RedirectView视图，此时的视图名称不会被SpringMVC配置文件中所配置的视图解析器解析，而是会将前缀"redirect:"去掉，剩余部分作为最终路径通过重定向的方式实现跳转

```java
@RequestMapping("/testRedirect")
public String testRedirect(){
	return "redirect:/testHello";
}
```

> 注： 重定向视图在解析时，会先将redirect:前缀去掉，然后会判断剩余部分是否以/开头，若是则会自 动拼接上下文路径

## 视图控制器view-controller

当控制器方法中，仅仅用来实现页面跳转，即只需要设置视图名称时，可以将处理器方法使用viewcontroller标签进行表示

```xml
<!--
	path：设置处理的请求地址
	view-name：设置请求地址所对应的视图名称
-->
<mvc:view-controller path="/testView" view-name="success"></mvc:view-controller>
```

> 注： 当SpringMVC中设置任何一个view-controller时，其他控制器中的请求映射将全部失效，此时需 要在SpringMVC的核心配置文件中设置开启mvc注解驱动的标签：`<mvc:annotation-driven />`