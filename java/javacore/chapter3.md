# **Java的基本程序设计结构**

> [!tip] 本章节主要介绍了Java程序的基本概念（如数据类型，分支以及循环等）在Java中的实现方式

## 一个简单的Java程序

```java
public class hello{
    public static void main(String[] args){
        System.out.println("Hello World!");
    }
}
```

> 程序虽然简单，但还是有很多注意点：
>
> - Java区分大小写
> - 名称以字母开头，后面跟数字或者字母，长度基本没有限制
> - 建议遵循骆驼命名法（驼峰命名）：类名大写字母开头，多单词则每个单词开头大写，变量方法小写
> - 源代码文件名必须与公共类名称相同
> - JVM总是从指定类main方法开始执行（main方法必须声明为public）

> [!note] Java中所有函数都是某个类的方法，且Java中的main方法必须为静态方法，一般来说，如果正常退出，则有退出码0，如果要返回其他退出码，应使用System.exit

> [!warning] 每个语句需要用分号结束，回车不表示结束，Java对缩进要求不严格，若果有需要可以将一个语句写在多行

---

## 注释

- //表示注释到本行末尾
- /* */之间的内容注释（可多行）
- /** */之间的内容注释，且可以生成文档（javadoc），在之后的章节有详细介绍

---

## 数据类型

Java是**强类型**语言，每个变量必须指定类型

有八种基本类型：四种整型，两种浮点型，一种字符类型，一种布尔（boolean）类型

> Java中的大数算术包，bignumber类型不是基本类型，而是一个Java对象，类似的，Integer，Double，Character等是包装类型（之后章节有详细说明），也不是基本类型

### 整型

| 类型  | 存储需求 | 取值范围                  |
| ----- | -------- | ------------------------- |
| int   | 4字节    | $$ [-2^{31} , 2^{31}-1]$$ |
| short | 2字节    | $$[-2^{15},2^{15}-1]$$    |
| long  | 8字节    | $$[-2^{63},2^{63}-1]$$    |
| byte  | 1字节    | $$[-2^{7},2^{7}-1]$$      |

> [!note] Java中，整型的范围与运行机器无关
>
> 长整型数值有一个后缀L或者l，十六进制有一个前缀0x或者0X，八进制有前缀0，八进制表示法容易混淆，应减少使用
>
> 二进制数有前缀0b或者0B
>
> 还可以为数字字面量加下划线，如：100_000_000，Java编译器会去除下划线

> [!warning] Java没有无符号（unsigned）型的int，long，byte，short等类型

> Java提供了无符号数运算的相关方法，比如：Byte.toUnsignedInt()来获得0~255之间的值，同时，Integer和Long都有相关方法

### 浮点类型

| 类型   | 存储需求 | 范围                                             |
| ------ | -------- | ------------------------------------------------ |
| float  | 4        | $$\pm 3.402 823 47E+38F （约6，7位有效位）$$     |
| double | 8        | $$\pm 1.797 693 134 862 315 70E+308 （约15位）$$ |

> - float类型有后缀f或者F，没有则默认为double类型
>
> - 可以采用十六进制表示浮点类型，0.125 -> 0x1.0p-3，尾数十六进制，指数十进制，指数基数为2
>
> - 根据IEEE 754规范，浮点数有三个特殊值：正无穷，负无穷，NaN（参考[csapp第二章](/computer/csapp/chapter2.md)），这三个数很少用到，可以用Double.POSITIVE_INFINTITY,Double.NEGTIVE_INFINITY,Double.NaN来得到
> - 所有“非数值”的数认为不相等（不可用NaN==NaN），但可以使用Double.NaN来判断

> [!attention] 计算机中浮点数表示不精确！！！（参考[csapp第二章](/computer/csapp/chapter2.md)），容易产生舍入误差，如果要精确表示，应采用BigDecimal类

### char类型

> char原本用于表示单个字符，但现在可以表示某些Unicode字符，某些Unicode字符需要两个char来表示

char类型的字面量值要用单引号括起来，所有的转义序列都可以出现在加括号的字符常量和字符串中，特别的，\u可以出现在字符串外部（当心一些隐式错误！！！）

**Java中建议少用char类型，除非必须对UTF-16代码单元做一些操作，建议用字符串类型**

### boolean类型

有true和false两个值，**整数布尔型之间不能进行相互转换**

---

## 变量与常量

1. **声明变量**

- 先指定类型，再写出变量名：int len；double salary；等
- 声明以分号结束
- 变量名遵循Java取名规范
- 不能使用Java保留字作为变量名

2. **变量初始化**

建议在声明变量时初始化，不允许直接使用未初始化的变量

> Java10开始，如果可以推断出变量类型，则可以在声明时使用var关键字

3. **常量**

- 利用final指示常量，表示只能被赋值一次
- 习惯上，常量名全大写
- 类常量：static final 声明，类中的所有方法可以使用

4. **枚举类型**

枚举类型包括有限个命名的值，如：`enum Size{S,M,L,XL,XXL};`,

声明枚举：`Size s=Size.M;`,枚举类型变量只能储存给定的枚举值，或者null（表示没有设定任何值），关于枚举之后章节有详细介绍

---

## 运算符

1. 算术运算符：+-*/%等，两个运算数都是整数为整数运算，否则为浮点数运算
2. 数学函数与常量：Math类中，定义了很多数学函数，如sqrt,pow,sin,atan,exp,log10,PI,E等，如果对结果精度要求较高，可以使用StrictMath类
3. 数值类型相互转换：

![1](https://s2.loli.net/2022/07/15/R2GdaHJrn1YSeil.png)

> 实线箭头表示无损失转换，虚线箭头表示有精度损失

当运算符两个操作数类型不同时：

- 有一个为double，另一个转换为double
- 有一个是float，另一个转换为float
- 有一个是long，另一个转换为long
- 否则，两个数转换为int

4. 强制类型转换：

```java
double d=1.0;
int k=(int) d;
```

> [!tip] 浮点数转为整型会丢失小数点以及后面的数，如果要进行舍入操作，应该用Math.round()

5. 结合赋值和运算符：如`int x=0;x+=1;`,左右操作数不同则会发生类型转换
6. 自增与自减运算符：如`i++;--i;`
7. 关系和boolean运算符：与cpp类似，&&，||，！=，？：等
8. 位运算符：&(and),|(or),^(xor),~(not)

> [!note] >>:算术右移，>>>:逻辑右移，<<:左移

9. 括号与运算符级别：

| 运算符                                                  | 结合性 |
| ------------------------------------------------------- | ------ |
| [] ()(方法调用)                                         | 左     |
| ! ~ ++ -- +(一元运算) -（一元运算）()(强制类型转换) new | 右     |
| * / %                                                   | 左     |
| + -                                                     | 左     |
| << >> >>>                                               | 左     |
| < <= >= > instanceof                                    | 左     |
| == !=                                                   | 左     |
| &                                                       | 左     |
| ^                                                       | 左     |
| \|                                                      | 左     |
| &&                                                      | 左     |
| \|\|                                                    | 左     |
| ?:                                                      | 右     |
| = += -= *= /= %= &= \|= ^= <<= >>= >>>=                 | 右     |

---

## 字符串

Java字符串就是一个Unicode字符序列

定义String类实例：`String s="";`(空字符串)

- substring方法可以提取子串：

```java
String s="hello";
String tem=s.substring(0,3); //s="hel"
```

- Java中可以用“+”拼接字符串，如果是字符串与非字符串拼接，会自动转换成字符串，多个字符串拼接，可以使用join方法：

```java
String all=String.join("/","s","m","l");
// all="s/m/l"
```

- Java中String类不可修改，但是可以提取字串后替换：

```java
String s="hello world";
s=s.substring(0,5)+"!"; //s="hello!"
```

> [!tip] 不可变字符串有一个优点：可以让编译器实现字符串共享，复制一个字符串变量将与原始字符串共享相同的字符

> 从概念上来看，Java字符串类似于C/C++中的char*

- 应该使用equals方法判断字符串是否相等，如果不区分大小写，则使用equalsIgnoreCase方法：

```java
s.equals(t);
s.equalsIgnoreCase(t);
```

> [!warning] 虚拟机的字符串共享，只是“字面量”共享，经过+，substring操作的字符串不共享，哪怕他们看起来“一样”，所以字符串比较应使用equals方法

- 空串“”是长度为零的字符串，而null是一个空对象（不可以用其调用任何方法和属性）
- 调用length方法返回代码单元数量，而实际长度（码点数量）可以用codePointCount来得到，特别的，charAt将返回某个指定索引的代码单元，但是Java中某些特殊字符是由两个代码单元构成，有时会出现bug，应尽量避免使用char类型
- String API：

```java
char charAt(int index);
int codePointAt(int index);
int offsetByCodePoints(int startIndex,int cpCount);
int compareTo(String other);
IntStream codePoints();
...
```

- 构建字符串

使用+拼接字符串费时且效率低，使用StringBuilder类可以避免这个问题

```java
StringBuilder builder=new StringBuilder();
builder.append(ch);
builder.append(str);
···
```

---

## 输入与输出

现代的程序使用GUI来收集用户的输入输出，之后会有详细说明

现在使用基本的控制台来实现输入输出

1. 读取输入

```java
Scanner in=new Scanner(System.in);
System.out.print("输入名字");
String name=in.nextLine(); //读取一整行
String name=in.next(); //读取一个单词
```

类似的，读取int用nextInt，double用nextDouble

> [!note] Scanner输入是可见的，所以不适合输入密码
>
> 输入密码应该用Console

```java
Console cons=System.Console();
String username=cons.readLine("User name:");
char[] passwd=cons.readPassword("Password:");
```

2. 格式化输出

沿用了C语言函数库中的printf方法：

```java
System.out.printf("%8.2f",x); //打印八个字符，精度为小数点后2位
```

详情参考C语言相关教程

![attachments-2020-06-ILzp1riQ5ed8a440c252a](https://s2.loli.net/2022/07/20/gO9GNoMuhKqUtw1.jpg)

![2018072010214586](https://s2.loli.net/2022/07/20/6WnTfPDi3vaHwJB.png)

可以使用静态的String.format方法创建格式化的字符串而不打印输出：

```java
String msg=String.format("hello,%s. Next year,you'll be %d",name,age);
```

3. 文件的输入与输出

读取文件使用Scanner对象：

```java
Scanner in =new Scanner(Path.of("myfile.txt"),StandardCharsets.UTF-8);
```

> 文件路径包含`\`，需要转义：`\\`

写入文件使用PrintWriter对象：

```java
PrintWriter out=new PrintWriter("myfile.txt",StandardCharsets.UTF_8);
```

## 控制流程

Java中没有goto语句，但是break语句可以带标签

1. 块作用域

{}包裹的部分称为一个”块“

2. 条件语句

```java
if(condition1) do something1;
else if(condition2) do something2;
else if ······
else do something;
```

3. 循环

```java
while(condition) do something;
do do something while (condition);
```

4. 确定循环

```java
for(int i=0;i<len;++i) do something;
```

> [!attention] 注意循环变量的统一性，循环结束的条件，变量的作用域

5. 多重选择：switch语句

```java
switch(choice){
    case 1:
        do something;
        break;
    case 2:
        do something;
        break;
    ······
    default:
    	do ...
        break;
}
```

> [!warning] 注意break语句

6. 中断控制流程的语句

Java虽然有goto保留字，但是不建议使用，代替的有带标签的break语句,可以用于跳出多重嵌套的循环：

```java
read_data:
while(...){
    ...
    for(...){
        ....
        if(...) break read_data;
        ....
    }
}
....
```

> [!note] break的标签必须放在希望跳出的最外层循环之前，而且紧跟一个冒号

**注意：只能跳出语句块，不能跳入！**

同样，有一种带标签的continue语句，可以跳到与标签匹配的循环的首部

---



## 大数

- BigInteger可以实现任意精度的整数运算

- BigDecimal可以实现任意精度的浮点数运算

- 在使用构造器时，可以用字符串参数，如：“999999999999999999”

- 大数的运算需要调用对应的方法，不能用+，*

---

## 数组

- 数组是存储相同类型值的序列

- 一旦创建了数组，就不能改变长度

> 如果需要经常改变长度，应该用数组列表（array list）

- Java中，允许有长度为零的数组，**但是其和null不相同**

### 访问数组元素

创建数组时，所有元素初始化为0，boolean类型初始化为false，对象则初始化为null

### for each 循环

```java
for (变量：集合) do something;
```

集合必须是数组或者实现了Iterable接口的类对象

### 数组拷贝

允许数组变量赋值给另一个数组变量,这时两个变量将引用同一个数组对象

> [!tip] 数组拷贝可以使用Array.copyOf()

### 命令行参数

即main函数中的args[],从零开始

### 数组排序

使用`Array.sort`方法，这个方法使用了优化的快速排序算法

### 多维数组

使用两个下标来访问二维数组元素

> [!note] for each循环不能自动处理多维数组，只能处理第一个维度

要打印二维数组，可以使用`deepToString()`

### 不规则数组

从原理上讲，Java没有多维数组，只有数组的数组，即数组存储数组的引用

所以在一个数组中不同的元素可以代表不同长度的数组，形成类似于”三角阵“的构造
