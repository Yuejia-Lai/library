---
title: 基本CRUD与常用注解
icon: iconfont icon-sharpicons_database-center
date: 2022-09-29
---

## BaseMapper

MyBatis-Plus中的基本CRUD在内置的BaseMapper中都已得到了实现，我们可以直接使用，接口如 下：

```java
package com.baomidou.mybatisplus.core.mapper;
public interface BaseMapper<T> extends Mapper<T> {
    /**
    * 插入一条记录
    * @param entity 实体对象
    */
    int insert(T entity);
    /**
    * 根据 ID 删除
    * @param id 主键ID
    */
    int deleteById(Serializable id);
    /**
    * 根据实体(ID)删除
    * @param entity 实体对象
    * @since 3.4.4
    */
    int deleteById(T entity);
    /**
    * 根据 columnMap 条件，删除记录
    * @param columnMap 表字段 map 对象
    */
    int deleteByMap(@Param(Constants.COLUMN_MAP) Map<String, Object> columnMap);
    /**
    * 根据 entity 条件，删除记录
    * @param queryWrapper 实体对象封装操作类（可以为 null,里面的 entity 用于生成 where
    语句）
    */
    int delete(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
    /**
    * 删除（根据ID 批量删除）
    * @param idList 主键ID列表(不能为 null 以及 empty)
    */
    int deleteBatchIds(@Param(Constants.COLLECTION) Collection<? extends
    Serializable> idList);
    /**
    * 根据 ID 修改
    * @param entity 实体对象
    */
    int updateById(@Param(Constants.ENTITY) T entity);
    /**
    * 根据 whereEntity 条件，更新记录
    * @param entity 实体对象 (set 条件值,可以为 null)
    * @param updateWrapper 实体对象封装操作类（可以为 null,里面的 entity 用于生成
    where 语句）
    */
    int update(@Param(Constants.ENTITY) T entity, @Param(Constants.WRAPPER) Wrapper<T> updateWrapper);
    /**
    * 根据 ID 查询
    * @param id 主键ID
    */
    T selectById(Serializable id);
    /**
    * 查询（根据ID 批量查询）
    * @param idList 主键ID列表(不能为 null 以及 empty)
    */
    List<T> selectBatchIds(@Param(Constants.COLLECTION) Collection<? extends Serializable> idList);
    /**
    * 查询（根据 columnMap 条件）
    * @param columnMap 表字段 map 对象
    */
    List<T> selectByMap(@Param(Constants.COLUMN_MAP) Map<String, Object> columnMap);
    /**
    * 根据 entity 条件，查询一条记录
    * <p>查询一条记录，例如 qw.last("limit 1") 限制取一条记录, 注意：多条数据会报异常
    </p>
    * @param queryWrapper 实体对象封装操作类（可以为 null）
    */
    default T selectOne(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper) {
    List<T> ts = this.selectList(queryWrapper);
    if (CollectionUtils.isNotEmpty(ts)) {
    if (ts.size() != 1) {
    throw ExceptionUtils.mpe("One record is expected, but the query result is multiple records");
    }
    return ts.get(0);
    }
    return null;
    }
    /**
    * 根据 Wrapper 条件，查询总记录数
    * @param queryWrapper 实体对象封装操作类（可以为 null）
    */
    Long selectCount(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
    /**
    * 根据 entity 条件，查询全部记录
    * @param queryWrapper 实体对象封装操作类（可以为 null）
    */
    List<T> selectList(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
    /**
    * 根据 Wrapper 条件，查询全部记录
    * @param queryWrapper 实体对象封装操作类（可以为 null）
    */
    List<Map<String, Object>> selectMaps(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
    /**
    * 根据 Wrapper 条件，查询全部记录
    * <p>注意： 只返回第一个字段的值</p>
    * @param queryWrapper 实体对象封装操作类（可以为 null）
    */
    List<Object> selectObjs(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
    /**
    * 根据 entity 条件，查询全部记录（并翻页）
    * @param page 分页查询条件（可以为 RowBounds.DEFAULT）
    * @param queryWrapper 实体对象封装操作类（可以为 null）
    */
    <P extends IPage<T>> P selectPage(P page, @Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
    /**
    * 根据 Wrapper 条件，查询全部记录（并翻页）
    * @param page 分页查询条件
    * @param queryWrapper 实体对象封装操作类
    */
    <P extends IPage<Map<String, Object>>> P selectMapsPage(P page, @Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
                         }
```

## 插入

```java
@Test
public void testInsert(){
	User user = new User(null, "张三", 23, "zhangsan@atguigu.com");
	//INSERT INTO user ( id, name, age, email ) VALUES ( ?, ?, ?, ? )
	int result = userMapper.insert(user);
	System.out.println("受影响行数："+result);
	//1475754982694199298
	System.out.println("id自动获取："+user.getId());
}
```

> 最终执行的结果，所获取的id为1475754982694199298 
>
> 这是因为MyBatis-Plus在实现插入数据时，会默认基于雪花算法的策略生成id

## 删除

### 通过id删除记录

```java
@Test
public void testDeleteById(){
	//通过id删除用户信息
	//DELETE FROM user WHERE id=?
	int result = userMapper.deleteById(1475754982694199298L);
	System.out.println("受影响行数："+result);
}
```

## 通过id批量删除记录

```java
@Test
public void testDeleteBatchIds(){
	//通过多个id批量删除
	//DELETE FROM user WHERE id IN ( ? , ? , ? )
	List<Long> idList = Arrays.asList(1L, 2L, 3L);
	int result = userMapper.deleteBatchIds(idList);
	System.out.println("受影响行数："+result);
}
```

### 通过map条件删除记录

```java
@Test
public void testDeleteByMap(){
	//根据map集合中所设置的条件删除记录
	//DELETE FROM user WHERE name = ? AND age = ?
	Map<String, Object> map = new HashMap<>();
	map.put("age", 23);
	map.put("name", "张三");
	int result = userMapper.deleteByMap(map);
	System.out.println("受影响行数："+result);
}
```

## 修改

```java
@Test
public void testUpdateById(){
	User user = new User(4L, "admin", 22, null);
	//UPDATE user SET name=?, age=? WHERE id=?
	int result = userMapper.updateById(user);
	System.out.println("受影响行数："+result);
}
```

## 查询

### 根据id查询用户信息

```java
@Test
public void testSelectById(){
	//根据id查询用户信息
	//SELECT id,name,age,email FROM user WHERE id=?
	User user = userMapper.selectById(4L);
	System.out.println(user);
}
```

### 根据多个id查询多个用户信息

```java
@Test
public void testSelectBatchIds(){
	//根据多个id查询多个用户信息
	//SELECT id,name,age,email FROM user WHERE id IN ( ? , ? )
	List<Long> idList = Arrays.asList(4L, 5L);
	List<User> list = userMapper.selectBatchIds(idList);
	list.forEach(System.out::println);
}
```

### 通过map条件查询用户信息

```java
@Test
public void testSelectByMap(){
	//通过map条件查询用户信息
	//SELECT id,name,age,email FROM user WHERE name = ? AND age = ?
	Map<String, Object> map = new HashMap<>();
	map.put("age", 22);
	map.put("name", "admin");
	List<User> list = userMapper.selectByMap(map);
	list.forEach(System.out::println);
}
```

### 查询所有数据

```java
@Test
public void testSelectList(){
	//查询所有用户信息
	//SELECT id,name,age,email FROM user
	List<User> list = userMapper.selectList(null);
	list.forEach(System.out::println);
}
```

> 通过观察BaseMapper中的方法，大多方法中都有Wrapper类型的形参，此为条件构造器，可针对于SQL语句设置不同的条件，若没有条件，则可以为该形参赋值null，即查询（删除/修改）所有数据

## 通用Service

> 说明: 
>
> - 通用 Service CRUD 封装IService接口，进一步封装 CRUD 采用 get 查询单行 remove 删 除 list 查询集合 page 分页 前缀命名方式区分 Mapper 层避免混淆， 
> - 泛型 T 为任意实体对象 
> - 建议如果存在自定义通用 Service 方法的可能，请创建自己的 IBaseService 继承 Mybatis-Plus 提供的基类 
> - 官网地址：https://baomidou.com/pages/49cc81/#service-crud-%E6%8E%A5%E5%8F% A3

### IService

MyBatis-Plus中有一个接口 IService和其实现类 ServiceImpl，封装了常见的业务层逻辑 

详情查看源码IService和ServiceImpl

### 创建Service接口和实现类

```java
/**
* UserService继承IService模板提供的基础功能
*/
public interface UserService extends IService<User> {
}
/**
* ServiceImpl实现了IService，提供了IService中基础功能的实现
* 若ServiceImpl无法满足业务需求，则可以使用自定的UserService定义方法，并在实现类中实现
*/
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {
}
```

### 测试查询记录数

```java
@Autowired
private UserService userService;
@Test
public void testGetCount(){
	long count = userService.count();
	System.out.println("总记录数：" + count);
}
```

### 测试批量插入

```java
@Test
public void testSaveBatch(){
	// SQL长度有限制，海量数据插入单条SQL无法实行，
	// 因此MP将批量插入放在了通用Service中实现，而不是通用Mapper
	ArrayList<User> users = new ArrayList<>();
	for (int i = 0; i < 5; i++) {
		User user = new User();
		user.setName("ybc" + i);
		user.setAge(20 + i);
		users.add(user);
	}
	//SQL:INSERT INTO t_user ( username, age ) VALUES ( ?, ? )
	userService.saveBatch(users);
}
```

# 常用注解

## @TableName

> 经过以上的测试，在使用MyBatis-Plus实现基本的CRUD时，我们并没有指定要操作的表，只是在 Mapper接口继承BaseMapper时，设置了泛型User，而操作的表为user表 
>
> 由此得出结论，MyBatis-Plus在确定操作的表时，由BaseMapper的泛型决定，即实体类型决 定，且默认操作的表名和实体类型的类名一致

### 问题

> 若实体类类型的类名和要操作的表的表名不一致，会出现什么问题？
>
> 我们将表user更名为t_user，测试查询功能 程序抛出异常，Table 'mybatis_plus.user' doesn't exist，因为现在的表名为t_user，而默认操作 的表名和实体类型的类名一致，即user表

### 通过@TableName解决问题

> 在实体类类型上添加@TableName("t_user")，标识实体类对应的表，即可成功执行SQL语句

### 通过全局配置解决问题

> 在开发的过程中，我们经常遇到以上的问题，即实体类所对应的表都有固定的前缀，例如`t_`或`tbl_ `
>
> 此时，可以使用MyBatis-Plus提供的全局配置，为实体类所对应的表名设置默认的前缀，那么就不需要在每个实体类上通过@TableName标识实体类对应的表

```yaml
mybatis-plus:
	configuration:
		# 配置MyBatis日志
		log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
	global-config:
		db-config:
		# 配置MyBatis-Plus操作表的默认前缀
			table-prefix: t_
```

## @TableId

> 经过以上的测试，MyBatis-Plus在实现CRUD时，会默认将id作为主键列，并在插入数据时，默认基于雪花算法的策略生成id

### 问题

> 若实体类和表中表示主键的不是id，而是其他字段，例如uid，MyBatis-Plus会自动识别uid为主 键列吗？ 
>
> 我们实体类中的属性id改为uid，将表中的字段id也改为uid，测试添加功能
>
> 程序抛出异常，Field 'uid' doesn't have a default value，说明MyBatis-Plus没有将uid作为主键赋值

### 通过@TableId解决问题

> 在实体类中uid属性上通过@TableId将其标识为主键，即可成功执行SQL语句

### @TableId的value属性

> 若实体类中主键对应的属性为id，而表中表示主键的字段为uid，此时若只在属性id上添加注解 @TableId，则抛出异常Unknown column 'id' in 'field list'，即MyBatis-Plus仍然会将id作为表的主键操作，而表中表示主键的是字段uid 
>
> 此时需要通过@TableId注解的value属性，指定表中的主键字段，@TableId("uid")或 @TableId(value="uid")

### @TableId的type属性

> type属性用来定义主键策略

**常用的主键策略：**

| 值                        | 描述                                                         |
| ------------------------- | ------------------------------------------------------------ |
| IdType.ASSIGN_ID（默 认） | 基于雪花算法的策略生成数据id，与数据库id是否设置自增无关     |
| IdType.AUTO               | 使用数据库的自增策略，注意，该类型请确保数据库设置了id自增， 否则无效 |

**配置全局主键策略：**

```yaml
mybatis-plus:
	configuration:
		# 配置MyBatis日志
		log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
	global-config:
		db-config:
		# 配置MyBatis-Plus操作表的默认前缀
			table-prefix: t_
			# 配置MyBatis-Plus的主键策略
			id-type: auto
```

### 雪花算法

- 背景

需要选择合适的方案去应对数据规模的增长，以应对逐渐增长的访问压力和数据量。 

数据库的扩展方式主要包括：业务分库、主从复制，数据库分表

- 数据库分表

将不同业务数据分散存储到不同的数据库服务器，能够支撑百万甚至千万用户规模的业务，但如果业务 继续发展，同一业务的单表数据也会达到单台数据库服务器的处理瓶颈。例如，淘宝的几亿用户数据， 如果全部存放在一台数据库服务器的一张表中，肯定是无法满足性能要求的，此时就需要对单表数据进行拆分。 

单表数据拆分有两种方式：垂直分表和水平分表。示意图如下：

![Snipaste_2022-09-29_17-59-20.png](https://s2.loli.net/2022/09/29/W7vJGN3beoHF6qg.png)

- 垂直分表

垂直分表适合将表中某些不常用且占了大量空间的列拆分出去。 

例如，前面示意图中的 nickname 和 description 字段，假设我们是一个婚恋网站，用户在筛选其他用户的时候，主要是用 age 和 sex 两个字段进行查询，而 nickname 和 description 两个字段主要用于展示，一般不会在业务查询中用到。description 本身又比较长，因此我们可以将这两个字段独立到另外 一张表中，这样在查询 age 和 sex 时，就能带来一定的性能提升

- 水平分表

水平分表适合表行数特别大的表，有的公司要求单表行数超过 5000 万就必须进行分表，这个数字可以作为参考，但并不是绝对标准，关键还是要看表的访问性能。对于一些比较复杂的表，可能超过 1000 万就要分表了；而对于一些简单的表，即使存储数据超过 1 亿行，也可以不分表。 

但不管怎样，当看到表的数据量达到千万级别时，作为架构师就要警觉起来，因为这很可能是架构的性能瓶颈或者隐患。 

水平分表相比垂直分表，会引入更多的复杂性，例如要求全局唯一的数据id该如何处理

> 主键自增

①以最常见的用户 ID 为例，可以按照 1000000 的范围大小进行分段，1 ~ 999999 放到表 1中， 1000000 ~ 1999999 放到表2中，以此类推。 

②复杂点：分段大小的选取。分段太小会导致切分后子表数量过多，增加维护复杂度；分段太大可能会导致单表依然存在性能问题，一般建议分段大小在 100 万至 2000 万之间，具体需要根据业务选取合适 的分段大小。 

③优点：可以随着数据的增加平滑地扩充新的表。例如，现在的用户是 100 万，如果增加到 1000 万，只需要增加新的表就可以了，原有的数据不需要动。 

④缺点：分布不均匀。假如按照 1000 万来进行分表，有可能某个分段实际存储的数据量只有 1 条，而另外一个分段实际存储的数据量有 1000 万条

> 取模

①同样以用户 ID 为例，假如我们一开始就规划了 10 个数据库表，可以简单地用 user_id % 10 的值来表示数据所属的数据库表编号，ID 为 985 的用户放到编号为 5 的子表中，ID 为 10086 的用户放到编号为 6 的子表中。 

②复杂点：初始表数量的确定。表数量太多维护比较麻烦，表数量太少又可能导致单表性能存在问题。 

③优点：表分布比较均匀。 

④缺点：扩充新的表很麻烦，所有数据都要重分布

> 雪花算法

雪花算法是由Twitter公布的分布式主键生成算法，它能够保证不同表的主键的不重复性，以及相同表的 主键的有序性。 

①核心思想： 

长度共64bit（一个long型）。 

首先是一个符号位，1bit标识，由于long基本类型在Java中是带符号的，最高位是符号位，正数是0，负数是1，所以id一般是正数，最高位是0。 

41bit时间截(毫秒级)，存储的是时间截的差值（当前时间截 - 开始时间截)，结果约等于69.73年。 

10bit作为机器的ID（5个bit是数据中心，5个bit的机器ID，可以部署在1024个节点）。 

12bit作为毫秒内的流水号（意味着每个节点在每毫秒可以产生 4096 个 ID）

![Snipaste_2022-09-29_18-03-18.png](https://s2.loli.net/2022/09/29/1cwoj5uZf97JlYg.png)

②优点：整体上按照时间自增排序，并且整个分布式系统内不会产生ID碰撞，并且效率较高。

## @TableField

> 经过以上的测试，我们可以发现，MyBatis-Plus在执行SQL语句时，要保证实体类中的属性名和 表中的字段名一致 
>
> 如果实体类中的属性名和字段名不一致的情况，会出现什么问题呢？

### 情况1

> 若实体类中的属性使用的是驼峰命名风格，而表中的字段使用的是下划线命名风格 
>
> 例如实体类属性userName，表中字段user_name 此时MyBatis-Plus会自动将下划线命名风格转化为驼峰命名风格 
>
> 相当于在MyBatis中配置

### 情况2

> 若实体类中的属性和表中的字段不满足情况1 
>
> 例如实体类属性name，表中字段username 
>
> 此时需要在实体类属性上使用@TableField("username")设置属性所对应的字段名

## @TableLogic

### 逻辑删除

- 物理删除：真实删除，将对应数据从数据库中删除，之后查询不到此条被删除的数据 
- 逻辑删除：假删除，将对应数据中代表是否被删除字段的状态修改为“被删除状态”，之后在数据库中仍旧能看到此条数据记录 
- 使用场景：可以进行数据恢复

### 实现逻辑删除

> step1：数据库中创建逻辑删除状态列，设置默认值为0

> step2：实体类中添加逻辑删除属性@TableLogic

> step3：测试 
>
> 测试删除功能，真正执行的是修改 
>
> UPDATE t_user SET is_deleted=1 WHERE id=? AND is_deleted=0 
>
> 测试查询功能，被逻辑删除的数据默认不会被查询 
>
> SELECT id,username AS name,age,email,is_deleted FROM t_user WHERE is_deleted=0