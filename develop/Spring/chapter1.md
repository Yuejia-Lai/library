---
title: Spring简介
icon: iconfont icon-bxl-spring-boot
date: 2022-09-21
---

## Spring概述

官网地址：https://spring.io/

> Spring 是最受欢迎的企业级 Java 应用程序开发框架，数以百万的来自世界各地的开发人员使用 Spring 框架来创建性能好、易于测试、可重用的代码。 
>
> Spring 框架是一个开源的 Java 平台，它最初是由 Rod Johnson 编写的，并且于 2003 年 6 月首 次在 Apache 2.0 许可下发布。 
>
> Spring 是轻量级的框架，其基础版本只有 2 MB 左右的大小。 
>
> Spring 框架的核心特性是可以用于开发任何 Java 应用程序，但是在 Java EE 平台上构建 web 应 用程序是需要扩展的。 
>
> Spring 框架的目标是使 J2EE 开发变得更容易使用，通过启用基于 POJO 编程模型来促进良好的编程实践

## Spring家族

项目列表：https://spring.io/projects

## Spring Framework

Spring 基础框架，可以视为 Spring 基础设施，基本上任何其他 Spring 项目都是以 Spring Framework 为基础的

### Spring Framework特性

- 非侵入式：使用 Spring Framework 开发应用程序时，Spring 对应用程序本身的结构影响非常小。对领域模型可以做到零污染；对功能性组件也只需要使用几个简单的注解进行标记，完全不会破坏原有结构，反而能将组件结构进一步简化。这就使得基于 Spring Framework 开发应用程序时结构清晰、简洁优雅。 
- 控制反转：IOC——Inversion of Control，翻转资源获取方向。把自己创建资源、向环境索取资源变成环境将资源准备好，我们享受资源注入。 
- 面向切面编程：AOP——Aspect Oriented Programming，在不修改源代码的基础上增强代码功 能。 
- 容器：Spring IOC 是一个容器，因为它包含并且管理组件对象的生命周期。组件享受到了容器化 的管理，替程序员屏蔽了组件创建过程中的大量细节，极大的降低了使用门槛，大幅度提高了开发效率。 
- 组件化：Spring 实现了使用简单的组件配置组合成一个复杂的应用。在 Spring 中可以使用 XML 和 Java 注解组合这些对象。这使得我们可以基于一个个功能明确、边界清晰的组件有条不紊的搭建超大型复杂应用系统。 
- 声明式：很多以前需要编写代码才能实现的功能，现在只需要声明需求即可由框架代为实现。 
- 一站式：在 IOC 和 AOP 的基础上可以整合各种企业应用的开源框架和优秀的第三方类库。而且 Spring 旗下的项目已经覆盖了广泛领域，很多方面的功能性需求可以在 Spring Framework 的基 础上全部使用 Spring 来实现

### Spring Framework五大功能模块

| 功能模块                | 功能介绍                                                  |
| ----------------------- | --------------------------------------------------------- |
| Core Container          | 核心容器，在 Spring 环境下使用任何功能都必须基于 IOC 容器 |
| AOP&Aspects             | 面向切面编程                                              |
| Testing                 | 提供了对 junit 或 TestNG 测试框架的整合                   |
| Data Access/Integration | 提供了对数据访问/集成的功能                               |
| Spring MVC              | 提供了面向Web应用程序的集成功能                           |

