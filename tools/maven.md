---
title: Maven
icon: iconfont icon-G-stack-fill
date: 2022-06-20
---



> 本文介绍了Maven相关操作，方便以后查阅。



## 分模块开发

- 将原始模块按照功能拆分成若干个子模块，方便模块间的相互调用，接口共享。

可以将domain层进行拆分，除了domain层，我们也可以将其他的层也拆成一个个对立的模块，如:
![maven_1](https://s2.loli.net/2022/07/10/LUXmMrENcfzQPwv.png)

这样的话，项目中的每一层都可以单独维护，也可以很方便的被别人使用

### 分模块开发实现

#### 抽取domain层

1. 创建新模块

创建一个名称为`maven_03_pojo`的jar项目,为什么项目名是从02到03这样创建，原因后面我们会提到，这块的名称可以任意

2. 项目中创建domain包

在`maven_03_pojo`项目中创建`com.itheima.domain`包，并将`maven_02_ssm`中Book类拷贝到该包中

3. 删除原项目中的domain包

需要在`maven_02_ssm`中添加`maven_03_pojo`的依赖

4. 建立依赖关系

在`maven_02_ssm`项目的pom.xml添加`maven_03_pojo`的依赖

5. 编译`maven_02_ssm`项目

错误信息为：不能解决`maven_02_ssm`项目的依赖问题，找不到`maven_03_pojo`这个jar包。

为什么找不到呢?

原因是Maven会从本地仓库找对应的jar包，但是本地仓库又不存在该jar包所以会报错。

在IDEA中是有`maven_03_pojo`这个项目，所以我们只需要将`maven_03_pojo`项目安装到本地仓库即可

6. 将项目安装本地仓库

将需要被依赖的项目`maven_03_pojo`，使用maven的install命令，把其安装到Maven的本地仓库中

**其他包的抽取类似**

## 依赖管理

* 依赖传递
* 可选依赖
* 排除依赖

依赖指当前项目运行所需的jar，一个项目可以设置多个依赖

### 依赖传递与冲突问题

依赖是具有传递性的:
![maven_2](https://s2.loli.net/2022/07/10/hnGoFLa4TUx9s72.png)

**说明:**A代表自己的项目；B,C,D,E,F,G代表的是项目所依赖的jar包；D1和D2 E1和E2代表是相同jar包的不同版本

(1) A依赖了B和C,B和C有分别依赖了其他jar包，所以在A项目中就可以使用上面所有jar包，这就是所说的依赖传递

(2) 依赖传递有直接依赖和间接依赖

* 相对于A来说，A直接依赖B和C,间接依赖了D1,E1,G，F,D2和E2
* 相对于B来说，B直接依赖了D1和E1,间接依赖了G
* 直接依赖和间接依赖是一个相对的概念

(3)因为有依赖传递的存在，就会导致jar包在依赖的过程中出现冲突问题，具体什么是冲突?Maven是如何解决冲突的?

这里所说的==依赖冲突==是指项目依赖的某一个jar包，有多个不同的版本，因而造成类包版本冲突。

情况一: 在`maven_02_ssm`的pom.xml中添加两个不同版本的Junit依赖:

通过对比，会发现一个结论

* 特殊优先：当同级配置了相同资源的不同版本，后配置的覆盖先配置的。

情况二: 路径优先：当依赖中出现相同的资源时，层级越深，优先级越低，层级越浅，优先级越高

* A通过B间接依赖到E1
* A通过C间接依赖到E2
* A就会间接依赖到E1和E2,Maven会按照层级来选择，E1是2度，E2是3度，所以最终会选择E1

情况三: 声明优先：当资源在相同层级被依赖时，配置顺序靠前的覆盖配置顺序靠后的

* A通过B间接依赖到D1
* A通过C间接依赖到D2
* D1和D2都是两度，这个时候就不能按照层级来选择，需要按照声明来，谁先声明用谁，也就是说B在C之前声明，这个时候使用的是D1，反之则为D2

### 可选依赖和排除依赖

#### 可选依赖

- 可选依赖指对外隐藏当前所依赖的资源---不透明

添加`optional`

```xml
<dependency>
    <groupId>com.itheima</groupId>
    <artifactId>maven_03_pojo</artifactId>
    <version>1.0-SNAPSHOT</version>
    <!--可选依赖是隐藏当前工程所依赖的资源，隐藏后对应资源将不具有依赖传递-->
    <optional>true</optional>
</dependency>
```

#### 排除依赖

- 排除依赖指主动断开依赖的资源，被排除的资源无需指定版本---不需要

```xml
<dependency>
    <groupId>com.itheima</groupId>
    <artifactId>maven_04_dao</artifactId>
    <version>1.0-SNAPSHOT</version>
    <!--排除依赖是隐藏当前资源对应的依赖关系-->
    <exclusions>
        <exclusion>
            <groupId>com.itheima</groupId>
            <artifactId>maven_03_pojo</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

介绍这两种方式后，简单来梳理下，就是

* `A依赖B,B依赖C`,`C`通过依赖传递会被`A`使用到，现在要想办法让`A`不去依赖`C`
* 可选依赖是在B上设置`<optional>`,`A`不知道有`C`的存在，
* 排除依赖是在A上设置`<exclusions>`,`A`知道有`C`的存在，主动将其排除掉。

## 聚合和继承

### 聚合

![maven_3](https://s2.loli.net/2022/07/10/sBrKYhW3ApHUR12.png)
* 所谓聚合:将多个模块组织成一个整体，同时进行项目构建的过程称为聚合
* 聚合工程：通常是一个不具有业务功能的"空"工程（有且仅有一个pom文件）
* 作用：使用聚合工程可以将多个工程编组，通过对聚合工程进行构建，实现对所包含的模块进行同步构建
  * 当工程中某个模块发生更新（变更）时，必须保障工程中与已更新模块关联的模块同步更新，此时可以使用聚合工程来解决批量模块同步构建的问题。

关于聚合具体的实现步骤为:

1. 创建一个空的maven项目
2. 将项目的打包方式改为pom

**说明:**项目的打包方式，我们接触到的有三种，分别是

* jar:默认情况，说明该项目为java项目
* war:说明该项目为web项目
* pom:说明该项目为聚合或继承项目

3. pom.xml添加所要管理的项目

4. 使用聚合统一管理项目

最后总结一句话就是，**聚合工程主要是用来管理项目**

### 继承

多模块开发存在的另外一个问题，`重复配置`的问题

* 所谓继承:描述的是两个工程间的关系，与java中的继承相似，子工程可以继承父工程中的配置信息，常见于依赖关系的继承。
* 作用：
  - 简化配置
  - 减少版本冲突

1. 创建一个空的Maven项目并将其打包方式设置为pom
2. 在子项目中设置其父工程

分别在`maven_02_ssm`,`maven_03_pojo`,`maven_04_dao`的pom.xml中添加其父项目为`maven_01_parent`

```xml
<!--配置当前工程继承自parent工程-->
<parent>
    <groupId>com.itheima</groupId>
    <artifactId>maven_01_parent</artifactId>
    <version>1.0-RELEASE</version>
    <!--设置父项目pom.xml位置路径-->
    <relativePath>../maven_01_parent/pom.xml</relativePath>
</parent>
```

3. 优化子项目共有依赖导入问题

- 将子项目共同使用的jar包都抽取出来，维护在父项目的pom.xml中
- 删除子项目中已经被抽取到父项目的pom.xml中的jar包，如在`maven_02_ssm`的pom.xml中将已经出现在父项目的jar包删除掉
- 将`maven_04_dao`项目的pom.xml中的所有依赖删除，然后添加上`maven_01_parent`的父项目坐标

将子项目中的公共jar包抽取到父工程中进行统一添加依赖，这样做的可以简化配置，并且当父工程中所依赖的jar包版本发生变化，所有子项目中对应的jar包版本也会跟着更新

4. 优化子项目依赖版本问题

那针对于部分项目有的jar包，我们该如何管理优化呢?

1. 在父工程mavne_01_parent的pom.xml来定义依赖管理

```xml
<!--定义依赖管理-->
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

2. 将maven_02_ssm的pom.xml中的junit依赖删除掉，刷新Maven

刷新完会发现，在maven_02_ssm项目中的junit依赖并没有出现，所以我们得到一个结论:

**`<dependencyManagement>`标签不真正引入jar包，而是配置可供子项目选择的jar包依赖**

子项目要想使用它所提供的这些jar包，需要自己添加依赖，并且不需要指定`<version>`

3. 在maven_02_ssm的pom.xml添加junit的依赖

```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <scope>test</scope>
</dependency>
```

总结来说，继承可以帮助做两件事:

* 将所有项目公共的jar包依赖提取到父工程的pom.xml中，子项目就可以不用重复编写，简化开发
* 将所有项目的jar包配置到父工程的dependencyManagement标签下，实现版本管理，方便维护
  * **dependencyManagement标签不真正引入jar包，只是管理jar包的版本**
  * 子项目在引入的时候，只需要指定groupId和artifactId，不需要加version
  * 当dependencyManagement标签中jar包版本发生变化，所有子项目中有用到该jar包的地方对应的版本会自动随之更新

最后总结一句话就是，**父工程主要是用来快速配置依赖jar包和管理项目中所使用的资源**

**小结**

继承的实现步骤:

* 创建Maven模块，设置打包类型为pom

  ```xml
  <packaging>pom</packaging>
  ```

* 在父工程的pom文件中配置依赖关系(子工程将沿用父工程中的依赖关系),一般只抽取子项目中公有的jar包

  ```xml
  <dependencies>
      <dependency>
          <groupId>org.springframework</groupId>
          <artifactId>spring-webmvc</artifactId>
          <version>5.2.10.RELEASE</version>
      </dependency>
      ...
  </dependencies>
  ```

* 在父工程中配置子工程中可选的依赖关系

  ```xml
  <dependencyManagement>
      <dependencies>
          <dependency>
              <groupId>com.alibaba</groupId>
              <artifactId>druid</artifactId>
              <version>1.1.16</version>
          </dependency>
      </dependencies>
      ...
  </dependencyManagement>
  ```

* 在子工程中配置当前工程所继承的父工程

  ```xml
  <!--定义该工程的父工程-->
  <parent>
      <groupId>com.itheima</groupId>
      <artifactId>maven_01_parent</artifactId>
      <version>1.0-RELEASE</version>
      <!--填写父工程的pom文件,可以不写-->
      <relativePath>../maven_01_parent/pom.xml</relativePath>
  </parent>
  ```

* 在子工程中配置使用父工程中可选依赖的坐标

  ```xml
  <dependencies>
      <dependency>
          <groupId>com.alibaba</groupId>
          <artifactId>druid</artifactId>
      </dependency>
  </dependencies>
  ```

  注意事项:

  1.子工程中使用父工程中的可选依赖时，仅需要提供群组id和项目id，无需提供版本，版本由父工程统一提供，避免版本冲突

  2.子工程中还可以定义父工程中没有定义的依赖关系,只不过不能被父工程进行版本统一管理。

### 聚合与继承的区别

两种之间的作用:

* 聚合用于快速构建项目，对项目进行管理
* 继承用于快速配置和管理子项目中所使用jar包的版本

聚合和继承的相同点:

* 聚合与继承的pom.xml文件打包方式均为pom，可以将两种关系制作到同一个pom文件中
* 聚合与继承均属于设计型模块，并无实际的模块内容

聚合和继承的不同点:

* 聚合是在当前模块中配置关系，聚合可以感知到参与聚合的模块有哪些
* 继承是在子模块中配置关系，父模块无法感知哪些子模块继承了自己

## 属性

* 属性
* 版本管理

### 属性

如果我们现在想更新Spring的版本，你会发现我们依然需要更新多个jar包的版本,我们需要解决的话，就可以参考咱们java基础所学习的变量，声明一个变量，在其他地方使用该变量，当变量的值发生变化后，所有使用变量的地方，就会跟着修改，即:

![](https://s2.loli.net/2022/07/10/gkvMTOWCYlFmHE1.png)
1. 父工程中定义属性

```xml
<properties>
    <spring.version>5.2.10.RELEASE</spring.version>
    <junit.version>4.12</junit.version>
    <mybatis-spring.version>1.3.0</mybatis-spring.version>
</properties>
```

2. 修改依赖的version

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>${spring.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>${spring.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>${spring.version}</version>
</dependency>
```

### 配置文件加载属性

1. 父工程定义属性

```xml
<properties>
   <jdbc.url>jdbc:mysql://127.1.1.1:3306/ssm_db</jdbc.url>
</properties>
```

2. jdbc.properties文件中引用属性

在jdbc.properties，将jdbc.url的值直接获取Maven配置的属性

```properties
jdbc.driver=com.mysql.jdbc.Driver
jdbc.url=${jdbc.url}
jdbc.username=root
jdbc.password=root
```

3. 设置maven过滤文件范围

Maven在默认情况下是从当前项目的`src\main\resources`下读取文件进行打包。现在我们需要打包的资源文件是在maven_02_ssm下,需要我们通过配置来指定下具体的资源目录

```xml
<build>
    <resources>
        <!--设置资源目录-->
        <resource>
            <directory>../maven_02_ssm/src/main/resources</directory>
            <!--设置能够解析${}，默认是false -->
            <filtering>true</filtering>
        </resource>
    </resources>
</build>
```

**说明:**directory路径前要添加`../`的原因是maven_02_ssm相对于父工程的pom.xml路径是在其上一层的目录中，所以需要添加

上面的属性管理就已经完成，但是有一个问题没有解决，因为不只是maven_02_ssm项目需要有属性被父工程管理，如果有多个项目需要配置，该如何实现呢?

方式一:

```xml
<build>
    <resources>
        <!--设置资源目录，并设置能够解析${}-->
        <resource>
            <directory>../maven_02_ssm/src/main/resources</directory>
            <filtering>true</filtering>
        </resource>
        <resource>
            <directory>../maven_03_pojo/src/main/resources</directory>
            <filtering>true</filtering>
        </resource>
        ...
    </resources>
</build>
```

方式二:

```xml
<build>
    <resources>
        <!--
			${project.basedir}: 当前项目所在目录,子项目继承了父项目，
			相当于所有的子项目都添加了资源目录的过滤
		-->
        <resource>
            <directory>${project.basedir}/src/main/resources</directory>
            <filtering>true</filtering>
        </resource>
    </resources>
</build>
```

上面我们所使用的都是Maven的自定义属性，除了${project.basedir},它属于Maven的内置系统属性

在Maven中的属性分为:

- 自定义属性（常用）
- 内置属性
- Setting属性
- Java系统属性
- 环境变量属性

![maven_5](https://s2.loli.net/2022/07/10/V4bCKuqHs9MNS3n.png)
### 版本管理

在我们jar包的版本定义中，有两个工程版本用的比较多:

- SNAPSHOT（快照版本）
  - 项目开发过程中临时输出的版本，称为快照版本
  - 快照版本会随着开发的进展不断更新
- RELEASE（发布版本）
  - 项目开发到一定阶段里程碑后，向团队外部发布较为稳定的版本，这种版本所对应的构件文件是稳定的
  - 即便进行功能的后续开发，也不会改变当前发布版本内容，这种版本称为发布版本

除了上面的工程版本，我们还经常能看到一些发布版本:

* alpha版:内测版，bug多不稳定内部版本不断添加新功能
* beta版:公测版，不稳定(比alpha稳定些)，bug相对较多不断添加新功能
* 纯数字版

## 多环境配置与应用

两个内容，分别是`多环境开发`和`跳过测试`

### 多环境开发

具体实现步骤:

1. 父工程配置多个环境,并指定默认激活环境

```xml
<profiles>
    <!--开发环境-->
    <profile>
        <id>env_dep</id>
        <properties>
            <jdbc.url>jdbc:mysql://127.1.1.1:3306/ssm_db</jdbc.url>
        </properties>
        <!--设定是否为默认启动环境-->
        <activation>
            <activeByDefault>true</activeByDefault>
        </activation>
    </profile>
    <!--生产环境-->
    <profile>
        <id>env_pro</id>
        <properties>
            <jdbc.url>jdbc:mysql://127.2.2.2:3306/ssm_db</jdbc.url>
        </properties>
    </profile>
    <!--测试环境-->
    <profile>
        <id>env_test</id>
        <properties>
            <jdbc.url>jdbc:mysql://127.3.3.3:3306/ssm_db</jdbc.url>
        </properties>
    </profile>
</profiles>
```

2. 命令行实现环境切换

![maven_6下载](https://s2.loli.net/2022/07/10/4fWzARVkBUwsolX.png)
所以总结来说，对于多环境切换只需要两步即可:

- 父工程中定义多环境

```xml
<profiles>
	<profile>
    	<id>环境名称</id>
        <properties>
        	<key>value</key>
        </properties>
        <activation>
        	<activeByDefault>true</activeByDefault>
        </activation>
    </profile>
    ...
</profiles>
```

- 使用多环境(构建过程)

```
mvn 指令 -P 环境定义ID[环境定义中获取]
```

### 跳过测试

1. IDEA工具实现跳过测试

![maven_7](https://s2.loli.net/2022/07/10/GXg71IKMD8iR4yA.png)
如果我们想更精细的控制哪些跳过哪些不跳过，就需要使用配置插件的方式

2. 配置插件实现跳过测试

在父工程中的pom.xml中添加测试插件配置

```xml
<build>
    <plugins>
        <plugin>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>2.12.4</version>
            <configuration>
                <skipTests>false</skipTests>
                <!--排除掉不参与测试的内容-->
                <excludes>
                    <exclude>**/BookServiceTest.java</exclude>
                </excludes>
            </configuration>
        </plugin>
    </plugins>
</build>
```

skipTests:如果为true，则跳过所有测试，如果为false，则不跳过测试

excludes：哪些测试类不参与测试，即排除，针对skipTests为false来设置的

includes: 哪些测试类要参与测试，即包含,针对skipTests为true来设置的

3. 命令行跳过测试

![maven_8](https://s2.loli.net/2022/07/10/mvxnPLjVdHeyrqJ.png)
使用Maven的命令行，`mvn 指令 -D skipTests`

注意事项:

* 执行的项目构建指令必须包含测试生命周期，否则无效果。例如执行compile生命周期，不经过test生命周期。
* 该命令可以不借助IDEA，直接使用cmd命令行进行跳过测试，需要注意的是cmd要在pom.xml所在目录下进行执行。

## 私服

* 私服简介
* 私服仓库分类
* 资源上传与下载

### 私服简介

私服:公司内部搭建的用于存储Maven资源的服务器

远程仓库:Maven开发团队维护的用于存储Maven资源的服务器

所以说:

* 私服是一台独立的服务器，用于解决团队内部的资源共享与资源同步问题

搭建Maven私服的方式有很多，我们来介绍其中一种使用量比较大的实现方式:

* Nexus
  * Sonatype公司的一款maven私服产品
  * 下载地址：https://help.sonatype.com/repomanager3/download

#### 私服安装

1. 下载解压

将`资料\latest-win64.zip`解压到一个空目录下

2. 启动Nexus

使用cmd进入到解压目录下的`nexus-3.30.1-01\bin`,执行如下命令:

```
nexus.exe /run nexus
```

3. 浏览器访问

访问地址为:`http://localhost:8081`

如果要想修改一些基础配置信息，可以使用:

- 修改基础配置信息
  - 安装路径下etc目录中nexus-default.properties文件保存有nexus基础配置信息，例如默认访问端口。
- 修改服务器运行配置信息
  - 安装路径下bin目录中nexus.vmoptions文件保存有nexus服务器启动对应的配置信息，例如默认占用内存空间。

### 私服仓库分类

所有私服仓库总共分为三大类:

宿主仓库hosted 

- 保存无法从中央仓库获取的资源
  - 自主研发
  - 第三方非开源项目,比如Oracle,因为是付费产品，所以中央仓库没有

代理仓库proxy 

- 代理远程仓库，通过nexus访问其他公共仓库，例如中央仓库

仓库组group 

- 将若干个仓库组成一个群组，简化配置
- 仓库组不能保存资源，属于设计型仓库

![maven_9](https://s2.loli.net/2022/07/10/bE4BOAp6tNdFume.png)
### 本地仓库访问私服配置

* 我们通过IDEA将开发的模块上传到私服，中间是要经过本地Maven的
* 本地Maven需要知道私服的访问地址以及私服访问的用户名和密码
* 私服中的仓库很多，Maven最终要把资源上传到哪个仓库?
* Maven下载的时候，又需要携带用户名和密码到私服上找对应的仓库组进行下载，然后再给IDEA

需要在本地Maven的配置文件`settings.xml`中进行配置

1. 私服上配置仓库

![](https://s2.loli.net/2022/07/10/YnqsVHEWNCMtbeI.png)
2. 配置本地Maven对私服的访问权限

```xml
<servers>
    <server>
        <id>itheima-snapshot</id>
        <username>admin</username>
        <password>admin</password>
    </server>
    <server>
        <id>itheima-release</id>
        <username>admin</username>
        <password>admin</password>
    </server>
</servers>
```

3. 配置私服的访问路径

```xml
<mirrors>
    <mirror>
        <!--配置仓库组的ID-->
        <id>maven-public</id>
        <!--*代表所有内容都从私服获取-->
        <mirrorOf>*</mirrorOf>
        <!--私服仓库组maven-public的访问路径-->
        <url>http://localhost:8081/repository/maven-public/</url>
    </mirror>
</mirrors>
```

### 私服资源上传与下载

本地仓库与私服已经建立了连接，接下来我们就需要往私服上上传资源和下载资源，具体的实现步骤为:

1. 配置工程上传私服的具体位置

```xml
 <!--配置当前工程保存在私服中的具体位置-->
<distributionManagement>
    <repository>
        <!--和maven/settings.xml中server中的id一致，表示使用该id对应的用户名和密码-->
        <id>itheima-release</id>
         <!--release版本上传仓库的具体地址-->
        <url>http://localhost:8081/repository/itheima-release/</url>
    </repository>
    <snapshotRepository>
        <!--和maven/settings.xml中server中的id一致，表示使用该id对应的用户名和密码-->
        <id>itheima-snapshot</id>
        <!--snapshot版本上传仓库的具体地址-->
        <url>http://localhost:8081/repository/itheima-snapshot/</url>
    </snapshotRepository>
</distributionManagement>
```

2. 发布资源到私服

![maven_11](https://s2.loli.net/2022/07/10/gTha4KbVituCEjM.png)
或者执行Maven命令

```
mvn deploy
```

**注意:**

要发布的项目都需要配置`distributionManagement`标签，要么在自己的pom.xml中配置，要么在其父项目中配置，然后子项目中继承父项目即可
