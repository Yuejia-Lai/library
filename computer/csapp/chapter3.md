---
date: 2022-07-30
---



# 程序的机器级表示

::: tip

 本章主要讲解了**汇编代码**以及计算机中的相关概念，对整个程序的编译过程以及编译器有一个整体的认识，让我们对计算机底层原理有更深入的了解，便于之后进行代码效率优化以及一些令人“困惑”的bug

:::

本章节内容基于x86-64，在不同的机器上可能有细微的差别，从浏览C语言，汇编语言，机器语言之间的关系，了解x86-64的细节。之后是数据的表示以及控制结构，再到过程的实现，然后是数组，结构体等数据结构的实现，最后介绍一些内存越界和系统缓存区溢出攻击的问题，还有一些GDB调试器检查机器级程序的技巧，以及浮点数类型数据的操作代码示例

## 历史观点

Intel处理器系列俗称x86，经历了一个长期的演化过程，列举一些intel处理器模型名称：

|        8086         |        80286         |        i386         |
| :-----------------: | :------------------: | :-----------------: |
|        i486         |       Pentium        |     PentiumPro      |
|     Pentium/MMX     |      Pentium II      |     Pentium III     |
|      Pentium 4      |      Pentium 4E      |       Core 2        |
| Core i7(781M晶体管) | Core i7(1.17G晶体管) | Core i7(1.4G晶体管) |

每个后继者处理器的设计都是向后兼容的，较早版本编译的代码可以在新处理器上运行

> 摩尔定律：芯片上的晶体管数量每年翻一番

---

## 程序编码

一个C程序有两个文件：p1.c和p2.c，用Unix命令编译：

```bash
gcc -Og -o p p1.c p2.c
```

-Og为优化等级，gcc为GCC的C编译器

### 机器级代码

对于机器级编程有两种重要抽象：

- 指令集体系结构/指令集架构
- 使用虚拟地址代替内存地址

**汇编代码的特点是用可读性更改好的文本格式表示**

> 在x86-64机器代码中，隐藏的处理器状态都是可见的：
>
> - 程序计数器：（%rip）表示下一条指令在内存中的地址
> - 整数寄存器文件：16个命名的位置，可以存储64位值，有的存储整数或者地址数据，有的记录程序状态，有些用于保存临时数据
> - 条件码寄存器：保存最近执行的算术或者逻辑指令的状态信息
> - 一组向量寄存器：存放一个或者多个整数或者浮点数值

一般来说，程序内存包含：程序可执行文件机器代码，操作系统需要的信息，管理过程调用和返回时的运行时栈，用户分配的内存块等，**操作系统负责将虚拟地址翻译成实际地址**，一条机器指令只执行一个非常基本的操作

### 代码示例

假设我们写了一个 C 语言代码文件 **mstore.c**，包含如下的函数定义：

```c
long mult2(long, long);
void multstore(long x, long y, long *dest) {
    long t = mult2(x, y);
    *dest = t;
}
```

在命令行上使用 “-S” 选项，就能看到 C 语言编译器产生的汇编代码：

```bash
linux> gcc -Og -S mstore.c
```

这会使 GCC 运行编译器，产生一个汇编文件 mstore.s，但是不做其他进一步的工作。（通常情况下，它还会继续调用汇编器产生目标代码文件）。

汇编代码文件包含各种声明，包括下面几行：

```
multstore:
  pushq   %rbx
  movq    %rdx, %rbx
  call    mult2
  movq    %rax, (%rbx)
  popq    %rbx
  ret     
```

上面代码中每个缩进去的行都对应于一条机器指令。比如，pushq 指令表示应该将寄存器％rbx 的内容压入程序栈中。这段代码中已经除去了所有关于局部变量名或数据类型的信息。

如果我们使用 “-c” 命令行选项，GCC 会编译并汇编该代码：

```bash
linux> gcc -Og -c mstore.c
```

这就会产生目标代码文件 mstore.o，它是二进制格式的，所以无法直接查看。1368 字节的文件 mstore.o 中有一段 14 字节的序列，它的十六进制表示为：

53 48 89 d3 e8 00 00 00 00 48 89 03 5b c3

这就是上面列出的汇编指令对应的目标代码。从中得到一个重要信息，即机器执行的程序只是一个字节序列，它是对一系列指令的编码。机器对产生这些指令的源代码几乎一无所知

要査看机器代码文件的内容，有一类称为反汇编器（disassembler）的程序非常有用。这些程序根据机器代码产生一种类似于汇编代码的格式。在 Linux 系统中，带 ‘-d’ 命令行标志的程序 OBJDUMP（表示 “object dump”）可以充当这个角色：

```bash
linux> objdump -d mstore.o
```

结果如下（这里，我们在左边增加了行号，在右边增加了斜体表示的注解）：

```
# Disassembly of function sum in binary file mstore.o
0000000000000000 <multstore>:
----------------------------------------------------------
Offset   Bytes                Equivalent assembly language
----------------------------------------------------------
    0:   53                   push   %rbx
    1:   48 89 d3             mov    %rdx,%rbx
    4:   e8 00 00 00 00       callq  9 <multstore+0x9>
    9:   48 89 03             mov    %rax,(%rbx)
    c:   5b                   pop    %rbx
    d:   c3                   retq
```

在左边，我们看到按照前面给出的字节顺序排列的 14 个十六进制字节值，它们分成了若干组，每组有 1 ~ 5 个字节。每组都是一条指令，右边是等价的汇编语言。

其中一些关于机器代码和它的反汇编表示的特性值得注意：

- x86-64 的指令长度从 1 到 15 个字节不等。常用的指令以及操作数较少的指令所需的字节数少，而那些不太常用或操作数较多的指令所需字节数较多。
- 设计指令格式的方式是，从某个给定位置开始，可以将字节唯一地解码成机器指令。例如，只有指令 **pushq %rbx** 是以字节值 53 开头的。
- 反汇编器只是基于机器代码文件中的字节序列来确定汇编代码。它不需要访问该程序的源代码或汇编代码。
- 反汇编器使用的指令命名规则与 GCC 生成的汇编代码使用的有些细微的差别。在我们的示例中，它省略了很多指令结尾的 ‘q’。这些后缀是大小指示符，在大多数情况中可以省略。相反，反汇编器给 call 和 ret 指令添加了 ‘q’ 后缀，同样，省略这些后缀也没有问题。

生成实际可执行的代码需要对一组目标代码文件运行链接器，而这一组目标代码文件中必须含有一个 main 函数。假设在文件 main.c 中有下面这样的函数：

```c
#include <stdio.h>

void multstore(long, long, long *);

int main() {
    long d;
    multstore(2, 3, &d);
    printf("2 * 3 --> %ld\n", d);
    return 0;
}

long mult2(long a, long b) {
    long s = a * b;
    return s;
}
```

然后，我们用如下方法生成可执行文件 prog：

```bash
linux> gcc -Og -o prog main.c mstore.c
```

文件 prog 变成了 8655 个字节，因为它不仅包含了两个过程的代码，还包含了用来启动和终止程序的代码，以及用来与操作系统交互的代码。我们也可以反汇编 prog 文件：

```bash
linux> objdump -d prog
```

反汇编器会抽取出各种代码序列，包括下面这段：

```
# Disassembly of function sum in binary file prog
----------------------------------------------------------
Offset    Bytes                 Equivalent assembly language
----------------------------------------------------------
0000000000400540 <multstore>:
400540:   53                    push   %rbx
400541:   48 89 d3              mov    %rdx,%rbx
400544:   e8 42 00 00 00        callq  40058b <mult2>
400549:   48 89 03              mov    %rax,(%rbx)
40054c:   5b                    pop    %rbx
40054d:   c3                    retq
40054e:   90                    nop
40054f:   90                    nop
```

这段代码与 mstore.c 反汇编产生的代码几乎完全一样。其中一个主要的区别是左边列出的地址不同一链接器将这段代码的地址移到了一段不同的地址范围中。第二个不同之处在于链接器填上了 callq 指令调用函数 mult2 需要使用的地址（反汇编代码第 4 行）。链接器的任务之一就是为函数调用找到匹配的函数的可执行代码的位置。最后一个区别是多了两行代码（第 8 和 9 行）。这两条指令对程序没有影响，因为它们出现在返回指令后面（第 7 行）。插入这些指令是为了使函数代码变为 16 字节，使得就存储器系统性能而言，能更好地放置下一个代码块。

### 关于格式的注解

GCC 产生的汇编代码对我们来说有点儿难读。一方面，它包含一些我们不需要关心的信息，另一方面，它不提供任何程序的描述或它是如何工作的描述。例如，假设我们用如下命令生成文件 mstore.s

```
        .file   "010-mstore.c"
        .text
        .globl  multstore
        .type   multstore, @function
multstore:
        pushq   %rbx
        movq    %rdx, %rbx
        call    mult2
        movq    %rax, (%rbx)
        popq    %rbx
        ret
        .size   multstore, .-multstore
        .ident  "GCC: (Ubuntu 4.8.1-2ubuntu1~12.04) 4.8.1"
        .section        .note.GNU-stack,"",@progbits
```

所有以 ‘**.**’ 开头的行都是指导汇编器和链接器工作的伪指令。我们通常可以忽略这些行。另一方面，也没有关于指令的用途以及它们与源代码之间关系的解释说明。

为了更清楚地说明汇编代码，我们用这样一种格式来表示汇编代码，它省略了大部分伪指令，但包括行号和解释性说明。对于我们的示例，带解释的汇编代码如下：

```
# void multstore(long x, long y, long *dest)
# x in %rdi, y in %rsi, dest in %rdx
multstore:
  pushq     %rbx                # Save %rbx
  movq      %rdx, %rbx          # Copy dest to %rbx
  call      mult2               # Call mult2(x, y)
  movq      %rax, (%rbx)        # Store result at *dest
  popq      %rbx                # Restore %rbx
  ret                           # Return
```

---



## 访问信息

一个 x86-64 的中央处理单元（CPU）包含一组 16 个存储 64 位值的通用目的寄存器。这些寄存器用来存储整数数据和指针

![整数寄存器-d065d9434921462faf17f0810aa9e885](https://s2.loli.net/2022/07/25/CraQh9kZpVl1iKR.png)

指令可以对这 16 个寄存器的低位字节中存放的不同大小的数据进行操作

字节级操作可以访问最低的字节，16 位操作可以访问最低的 2 个字节，32 位操作可以访问最低的 4 个字节，而 64 位操作可以访问整个寄存器

对于生成小于 8 字节结果的指令，寄存器中剩下的字节会怎么样，对此有两条规则：生成 1 字节和 2 字节数字的指令会保持剩下的字节不变；生成 4 字节数字的指令会把高位 4 个字节置为 0

其中最特别的是栈指针 %rsp，用来指明运行时栈的结束位置

### 操作数指示符

各种不同的操作数的可能性被分为三种类型：

- 第一种类型是**立即数**（immediate），用来表示常数值。在 ATT 格式的汇编代码中，立即数的书写方式是 ‘$’ 后面跟一个用标准 C 表示法表示的整数，比如，$-577 或 $0x1F。不同的指令允许的立即数值范围不同，汇编器会自动选择最紧凑的方式进行数值编码。
- 第二种类型是**寄存器**（register），它表示某个寄存器的内容，16 个寄存器的低位 1 字节、2 字节、4 字节或 8 字节中的一个作为操作数，这些字节数分别对应于 8 位、16 位、32 位或 64 位。在图 3-3 中，我们用符号 ra\rm r_ara 来表示任意寄存器 a，用引用R[ra]\rm R[r_a]R[ra]来表示它的值，这是将寄存器集合看成一个数组 R，用寄存器标识符作为索引。
- 第三类操作数是**内存引用**，它会根据计算出来的地址（通常称为有效地址）访问某个内存位置。因为将内存看成一个很大的字节数组，我们用符号$M_b[Addr]$表示对存储在内存中从地址 Addr 开始的 b 个字节值的引用。为了简便，我们通常省去下标 b。

有多种不同的**寻址模式**，允许不同形式的内存引用。表中底部用语法 $Imm(r_b,r_i,s)$表示的是最常用的形式。这样的引用有四个组成部分：一个立即数偏移 Imm，一个基址寄存器$r_b$，一个变址寄存器$r_i$，和一个比例因子 s，这里 s 必须是 1、2、4 或者 8. 基址和变址寄存器都必须是 64 位寄存器。有效地址被计算为$Imm  +R[r_b]+R[r_i] \cdot s$。引用数组元素时，会用到这种通用形式。其他形式都是这种通用形式的特殊情况

![24](https://s2.loli.net/2022/07/25/d1EsUBAH9a4IZvq.png)

### 数据传送指令

最频繁使用的指令是将数据从一个位置复制到另一个位置的指令

在我们的讲述中，把许多不同的指令划分成**指令类**，每一类中的指令执行相同的操作，只不过操作数大小不同

![25](https://s2.loli.net/2022/07/25/3jY1RXSVzBkOKEi.png)

源操作数指定的值是一个立即数，存储在寄存器中或者内存中。目的操作数指定一个位置，要么是一个寄存器或者，要么是一个内存地址

**X86-64 加了一条限制，传送指令的两个操作数不能都指向内存位置**

::: info

 大多数情况中，MOV 指令只会更新目的操作数指定的那些寄存器字节或内存位置。唯一的例外是 movl 指令以寄存器作为目的时，它会把该寄存器的高位 4 字节设置为 0

:::

movabsq 指令能够以任意 64 位立即数值作为源操作数，并且只能以寄存器作为目的

下图记录的是两类数据移动指令，在将较小的源值复制到较大的目的时使用。所有这些指令都把数据从源（在寄存器或内存中）复制到目的寄存器。MOVZ 类中的指令把目的中剩余的字节填充为 0，而 MOVS 类中的指令通过符号扩展来填充，把源操作的最高位进行复制。可以观察到，每条指令名字的最后两个字符都是大小指示符：第一个字符指定源的大小，而第二个指明目的的大小。正如看到的那样，这两个类中每个都有三条指令，包括了所有的源大小为 1 个和 2 个字节、目的大小为 2 个和 4 个的情况，当然只考虑目的大于源的情况

![Snipaste_2022-07-25_21-42-41](https://s2.loli.net/2022/07/25/fh9LT24t7JawbVC.png)

![sign-extand](https://s2.loli.net/2022/07/25/V3XKxM9pCThut2Z.png)

### 数据传送示例

略

### 压入与弹出栈数据

![26](https://s2.loli.net/2022/07/25/Ji2Hd4cUgbYqpRV.png)

- 栈向低地址方向增长（一般减8）；
- `push` 和 `pop` 可以由相应的移动和算数指令来实现，但前者的编码仅需要**一个字节**；
- `pop` 只会影响 %rsp 的值，而不会实际清除栈中存放的数据（后续会被覆盖）

## 算术和逻辑操作

![27](https://s2.loli.net/2022/07/25/7YG3ZkLWQHJArOm.png)

- 除加载有效地址指令 `leaq` 外的其他指令均**有对应不同操作数大小的变种**，如 `addb`、`addw` 等；

### 加载有效地址

`leaq` 也可被用于与“加载有效地址”无关的操作，比如“**简单算数操作**”，但不会改变 rflags 寄存器的状态；

本来是用于将有效地址写入目的操作数，而且目标操作数必须是寄存器，也可以执行简单的加法和有限形式的乘法

### 一元和二元操作

一元操作只有一个操作数，既是源又是目的，这个操作数可以是寄存器或者内存位置

二元操作的第一个操作数可以是立即数、寄存器或内存位置。第二个操作数可以是寄存器或内存位置，第二个操作数既是源又是目的

### 移位操作

移位操作的移位量可以是一个立即数，或者放在单字节寄存器 **%cl** 中。后者的有效移位量是由其低 m 位决定的，而 $2^m = w$（w 为数据位长，比如 `salb` 对应的 8 位，`salw` 对应的 16 位等）

右移指令有算术右移和逻辑右移

### 特殊的算数操作

![28](https://s2.loli.net/2022/07/25/XYMhJjLr8Vf4GKI.png)

- `imulq` 指令有两种不同的形式。第一种为**双**操作数，**不区分符号**，用于从两个 64 位操作数中产生一个 64 位的乘积（阶段后位模式相同）；另一种为**单**操作数，**区分符号**，用于计算两个 64 位值的“**全 128 位乘积**”，要求一个参数必须在 **%rax** 中，结果分别放置在 **%rdx**（高位）与 **%rax**（低位）中；
- 类似单操作数乘法，有符号除法指令 `idivq` 将寄存器 **%rdx**（高 64 位）与 **%rax**（低 64 位）联合组成的 128 位数作为**被除数**。除数作为操作数给出，结果的商存放在 %rax 中，余数存储在 %rdx 中。指令 `cqto` 可用于将 %rdx 填充为 %rax 的符号位（当仅需要 64 位被除数时）。无符号除法使用 `divq` 指令，寄存器 %rdx 会被事先设置为 0。注：其他的单操作数除法指令还有 `idiv` \ `idivl`。

---

## 控制

机器代码使用两种基本的低级机制来实现有条件的行为：测试数据集，然后根据结果改变控制流或者数据流

> jump指令可以改变一组机器代码实现的顺序

### 条件码

除了整数寄存器，CPU还维护着一组单个位的条件码寄存器，常用条件码有：

- CF：进位标志
- ZF：零标志
- SF：符号标志
- OF：溢出标志

除了leaq指令外，几乎所有的指令都会设置条件码，其中，比较和测试指令只设置条件码不改变其他寄存器：

![24](https://s2.loli.net/2022/07/26/APdnMeaVc4byJOT.png)

### 访问条件码

常用访问条件码方式有三种：

- 根据条件码某种组合，将某字节设置为0/1
- 条件跳转
- 有条件的传输数据

> 第一种情况被称为set指令：

![29](https://s2.loli.net/2022/07/26/1UnitGWISqfe2Bd.png)

### 跳转指令

![30](https://s2.loli.net/2022/07/26/zDCMAbomdapTxPU.png)

jmp为无条件跳转，其他都为有条件跳转

条件跳转只能是直接跳转

### 跳转指令的编码

一种形式是PC相对的：将目标地址与紧跟在跳转指令后面的指令之差作为编码

另一种形式是”绝对寻址“，用四字节直接指定目标

### 条件控制实现条件分支

最常见的方式是同时使用无条件与有条件跳转

### 条件传送实现条件分支

传统方法是使用控制的条件转移，但是这种方法在现代的处理器上，效率很低

一种代替的策略是使用数据的条件转移

>  条件数据传送优于条件控制转移的原因：
>
> - 处理器采用流水线方式获得高性能
>
> - 处理器采用精密的分支逻辑预测来猜测每条指令是否会执行
> - 但是一个错误的预测会让处理器浪费大约15-30个周期
> - 但是，无论测试的数据是什么，采用条件传送编译出来的代码所需的时间都是大约8个周期，这使得控制流不依赖于数据，是的处理器的流水线是满的

![31](https://s2.loli.net/2022/07/26/GIMkNBgLFs8CO42.png)

::: danger

 条件数据传送提供了一种用条件控制转移来实现条件操作的替代策略，但是它只能用于非常受限制的情况，万幸的是，这些情况虽然限制多但很常见

:::

### 循环

while 语句的两种实现方式（for 循环可以用类似的方式实现）：

- **jump-to-middle**：通过无条件跳转跳到循环结尾处的测试，来首先执行初始的测试

```assembly
; long fact_while(long n)
; n in %rdi.
fact_while:
  movl $1, %eax     ; Set result = 1.
  jmp .L5           ; Goto test.
.L6:              ; loop:
  imulq %rdi, %rax  ; Compute result *= n.
  subq $1, %rdi     ; Decrement n.
.L5:              ; test:
  cmpq $1, %rdi     ; Compare n:1
  jg .L6            ; If >, goto loop.
  rep; ret          ; Return.
```

- **guarded-do**（高优化等级使用的策略）：首先用条件分支，如果初始条件不成立就跳过循环，否则再把代码变换成 do-while 循环（有两次条件判断过程）

```assembly
; long fact_while(long n)
; n in %rdi.
fact_while:
  cmpq $1, %rdi     ; Compare n:1.
  jle .L7           ; If <=, goto done.
  movl $1, %eax     ; Set result = 1.
.L6:              ; loop:
  imulq %rdi, %rax  ; Compute result *= n.
  subq $1, %rdi     ; Decrement n.
  cmpq $1, %rdi     ; Compare n:1.
  jne .L6           ; If !=, goto loop.
  rep; ret          ; Return.
.L7:              ; done:
  movl $1, %eax     ; Compute result = 1.
  ret               ; Return.
```

### switch语句

Switch 语句可以使用“**跳转表**”（Jump Table）来实现。跳转表是一个数组，表项 i 是一个代码段的地址，这个代码段实现当开关索引值等于 i 时程序应该采取的动作。**当 case 子句大于 4 且值的范围跨度较小时，就会使用跳转表**

![32](https://s2.loli.net/2022/07/26/Z9ElvWS1Y6CFhaA.png)

---

## 过程

过程提供了一种封装代码的方式，用指定参数和可选的返回值实现某种功能

过程有多种形式：函数，方法，子例程，处理函数等

他们有一些共性：

- 传递控制
- 传递数据
- 分配和释放内存

### 运行时栈

C语言调用机制（大多数语言也一样）使用了栈结构先进后出的内存管理原则

当机器指令需要的空间超出寄存器能存放的大小时，就会在栈上分配空间，这称为**过程的栈帧**

> 当前执行的过程的栈帧总是在栈顶

对于一个过程，最多可以传递**六个整数参数**（包括整数和指针），如果需要传递更多参数，会将多余的参数存放在栈帧里

### 转移控制

将控制从P过程转移到Q过程很简单：只需要把程序计数器（PC）的值设置为Q的代码起始位置即可，但是从Q返回的时候，处理器必须记录好需要继续执行P的位置

一般使用**call指令和ret指令**实现控制转移

### 数据传送

过程间的数据传送大多是通过寄存器实现的

但是如果一个函数有超过六个参数，超出的部分需要用**栈**来传递

通过栈传递参数时，所有数据大小都向8对齐

### 栈上的局部存储

在有些情况下，局部数据必须放在内存，比如：

- 寄存器不能存放所有本地数据
- 对一个局部变量使用‘&’运算符产生地址
- 某些局部变量是数组或者结构

### 寄存器中的局部存储空间

**寄存器是唯一被所有过程共享的资源**

根据惯例：

- 寄存器%rbx，%rbp和%r12-%r15被划分为**被调用者保存**寄存器
- 其他寄存器，除了栈指针%rsp，都是**调用者保存寄存器**

### 递归过程

递归调用一个函数本身和调用其他函数是一样的，栈规则提供了一种机制，每次函数调用都有它自己私有的状态信息，所以各个调用被调用之间不会相互干扰

---

## 数组分配和访问

C语言中一个不寻常的特点是可以对指向数组元素的指针进行操作，在机器代码中，这些指针被翻译成地址计算

### 基本原则

数组的名字（指针）指向数组开头的元素（指针）

### 指针运算

- C语言对指针运算后的值根据数组数据类型进行伸缩

- 操作符‘*’和‘&’可以间接引用指针和产生指针

- 数组引用：A[i]等于*（A+i）

### 嵌套的数组

创建数组的数组时，数组分配和引用的一般规则也是成立的

### 定长数组

![34](https://s2.loli.net/2022/07/29/gfjdFIeVi1uwGpq.png)

- 数组元素在内存中按照“**行优先**”的顺序排列。即在内存中首先排列着索引 “0” 对应的一行元素，接下来是索引 “1”，以此类推；
- 编译器对于**定长数组之间的计算**，可以通过优化来减少局部变量的使用（去掉局部索引变量、将数组引用替换为指针间接引用等）；
- 对于 C99 中的“动态数组（VLA）”，编译器需要使用“**乘法指令**”而非“移位”和“加法”来对引用的数组地址进行伸缩（性能稍低）。而在循环结构中使用时，编译器常常可以利用访问模式的规律性来优化索引的计算，比如直接识别出访问多维数组的步长，从而避免使用乘法指令进行计算的过程，以提高性能

### 变长数组

C99引入了一种功能，允许数组的维度是表达式，在数组分配的时候才算出来

如果允许优化，GCC能识别出程序访问多维数组需要的步长，然后生成的代码会避免直接使用乘法

---

## 异质的数据结构

C语言提供了两种将不同类型对象组合到一起创建数据类型的机制：

- **结构**：用struct来声明，将多个对象集合到一个单位中
- **联合**：用union来声明，允许几种不同的类型来引用一个对象

### 结构

结构的所有组成部分都存放在内存中一段连续的区域内，指向结构的指针就是结构第一个字节的地址

编译器维护关于每个结构的信息，指示每个字段的字节偏移

> 结构的各个字段的选取完全是在编译时处理的，机器代码不包含关于字段声明或者字段名字的信息

### 联合

对于以下联合：

```c
union U3 {
    char c;
    int i[2];
    doouble v;
}
```

对于类型U3*的指针：p，p->c, p-> i[0], p->v都是引用联合的起始位置

所以：**一个联合总的大小等于最大子段的大小**

**如果我们知道某个数据结构中对于两个不同字段的使用是互斥的，就可以用联合**

联合中字节顺序很重要，这时，大端法和小端法机器的差异就体现出来了

### 数据对齐

>  许多计算机对基本数据类型的合法地址做出了一些限制，要求某种对象的地址必须是某个值K的整数倍（2，4，8等）

这种对齐限制简化了形成处理器和内存系统之间接口的硬件设计，其实，无论是否对齐，硬件都能正常工作，但是对齐后能提升内存系统的性能

对于包含结构的代码，编译器可能需要在字段之间插入间隙，保证每个结构元素都满足对齐要求，而且，对于结构本身的起始地址也有一定的要求

---

## 在机器级程序中将控制与数据结合起来

### 理解指针

- 每个指针都对应一种类型，void*类型代表通用指针
- 每个指针都有一个值，是某个指定类型对象的地址
- 指针用&运算符创建
- 指针与数组联系密切
- 将指针从一种类型转换成另一种类型，只改变类型，不改变值
- 指针可以指向函数

> 函数指针的值是函数机器代码表示中第一条指令的值

### 内存越界引用和缓冲区溢出

C对数组引用不进行任何边界检查

还有一种常见的错误：缓冲区溢出，字符串长度超过了数组分配的空间

> 缓冲区溢出的一个更加致命的错误是会让程序执行本来不执行的函数

### 对抗缓冲区溢出攻击

- 栈随机化：使栈的位置在每次程序运行时都发生变化

> 在Linux系统中，栈随机化属于名叫地址空间布局随机化的技术

- 栈破坏检测：能够检测栈何时遭到破坏，核心思想是在栈帧中任何局部缓冲区与栈状态之间存储特殊的**金丝雀**值

- 限制可执行代码区域：可以限制存放可执行代码的内存区域，或者引入‘不执行’位

### 支持变长栈帧

管理变长栈帧，x86-64需要使用寄存器%rbp作为帧指针（或者基指针），%rbp在程序执行过程中始终指向栈的位置

>  在较早版本x86代码中，每个函数调用都使用帧指针，现在只在栈帧长可变的情况下使用，所有的函数把%rbp当作被调用者保存
