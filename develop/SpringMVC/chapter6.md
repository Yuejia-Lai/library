---
title: 拦截器与异常处理器
icon: iconfont icon-bxl-spring-boot
date: 2022-09-26
---

## 拦截器的配置

SpringMVC中的拦截器用于拦截控制器方法的执行 

SpringMVC中的拦截器需要实现HandlerInterceptor 

SpringMVC的拦截器必须在SpringMVC的配置文件中进行配置：

```xml
<bean class="com.atguigu.interceptor.FirstInterceptor"></bean>
<ref bean="firstInterceptor"></ref>
<!-- 以上两种配置方式都是对DispatcherServlet所处理的所有的请求进行拦截 -->
<mvc:interceptor>
	<mvc:mapping path="/**"/>
	<mvc:exclude-mapping path="/testRequestEntity"/>
	<ref bean="firstInterceptor"></ref>
</mvc:interceptor>
<!--
	以上配置方式可以通过ref或bean标签设置拦截器，通过mvc:mapping设置需要拦截的请求，通过mvc:exclude-mapping设置需要排除的请求，即不需要拦截的请求
-->
```

## 拦截器的三个抽象方法

SpringMVC中的拦截器有三个抽象方法： 

preHandle：控制器方法执行之前执行preHandle()，其boolean类型的返回值表示是否拦截或放行，返 回true为放行，即调用控制器方法；返回false表示拦截，即不调用控制器方法 

postHandle：控制器方法执行之后执行postHandle() 

afterCompletion：处理完视图和模型数据，渲染视图完毕之后执行afterCompletion()

## 多个拦截器的执行顺序

①若每个拦截器的preHandle()都返回true 

此时多个拦截器的执行顺序和拦截器在SpringMVC的配置文件的配置顺序有关： 

preHandle()会按照配置的顺序执行，而postHandle()和afterCompletion()会按照配置的反序执行 

②若某个拦截器的preHandle()返回了false 

preHandle()返回false和它之前的拦截器的preHandle()都会执行，postHandle()都不执行，返回false 的拦截器之前的拦截器的afterCompletion()会执行

# 异常处理器

## 基于配置的异常处理

SpringMVC提供了一个处理控制器方法执行过程中所出现的异常的接口：HandlerExceptionResolver 

HandlerExceptionResolver接口的实现类有：DefaultHandlerExceptionResolver和 SimpleMappingExceptionResolver 

SpringMVC提供了自定义的异常处理器SimpleMappingExceptionResolver，使用方式：

```xml
<bean class="org.springframework.web.servlet.handler.SimpleMappingExceptionResolver">
	<property name="exceptionMappings">
		<props>
			<!--
				properties的键表示处理器方法执行过程中出现的异常
				properties的值表示若出现指定异常时，设置一个新的视图名称，跳转到指定页面
			-->
			<prop key="java.lang.ArithmeticException">error</prop>
		</props>
	</property>
	<!--
		exceptionAttribute属性设置一个属性名，将出现的异常信息在请求域中进行共享
	-->
	<property name="exceptionAttribute" value="ex"></property>
</bean>
```

## 基于注解的异常处理

```java
//@ControllerAdvice将当前类标识为异常处理的组件
@ControllerAdvice
public class ExceptionController {

    //@ExceptionHandler用于设置所标识方法处理的异常
	@ExceptionHandler(ArithmeticException.class)
	//ex表示当前请求处理中出现的异常对象
	public String handleArithmeticException(Exception ex, Model model){
		model.addAttribute("ex", ex);
	return "error";
}
}
```

