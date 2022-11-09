---
title: 剑指offer(第二版)-I
icon: iconfont icon-leetcode1
date: 2022-10-01
---

::: info

剑指offer（第二版）第一部分题解  --Java实现

:::

## [剑指 Offer 03. 数组中重复的数字](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)

**题目描述：**

找出数组中重复的数字

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字

**示例 1：**

```
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
```

---

**排序后遍历或者哈希表**

**题解：**

```java
class Solution {
    public int findRepeatNumber(int[] nums) {
        int len=nums.length;
        Arrays.sort(nums);//先排序，后遍历
        for(int i=1;i<len;++i){
            if(nums[i]==nums[i-1]) return nums[i];
        }
        return 0;
    }
}
```

```java
class Solution {
    public int findRepeatNumber(int[] nums) {
        HashSet<Integer> set=new HashSet<>(); //哈希表
        for(int i=0;i<nums.length;++i){
            if(set.contains(nums[i])){
                return nums[i];
            }
            set.add(nums[i]);
        }
        return 0;
    }
}
```

---



## [剑指 Offer 04. 二维数组中的查找](https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

**题目描述：**

在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数

**示例:**

现有矩阵 matrix 如下：

```
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
```

给定 target = `5`，返回 `true`。

给定 target = `20`，返回 `false`

---

从右上开始寻找，目标数大于当前数，指针向下移一位，小于当前数，指针向左移一位

**题解：**

```java
class Solution {
    public boolean findNumberIn2DArray(int[][] matrix, int target) {
        int m=matrix.length;
        if(m==0) return false;
        int n=matrix[0].length;
        int i=0;
        int j=n-1;
        while(i<m&&j>=0){
            if(matrix[i][j]==target) return true;
            if(matrix[i][j]>target) j--;
            else i++;
        }
        return false;
    }
}
```

---



## [剑指 Offer 05. 替换空格](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/)

**题目描述：**

请实现一个函数，把字符串 `s` 中的每个空格替换成"%20"

**示例 1：**

```
输入：s = "We are happy."
输出："We%20are%20happy."
```

---

遍历替换即可

**题解：**

```java
class Solution {
    public String replaceSpace(String s) {
        int len=s.length();
        int num=0;
        char[] list1=s.toCharArray();
        for(int i=0;i<len;++i){
            if(list1[i]==' ') num+=1;
        }
        if(num==0) return s;
        char[] list=new char[len+num*2];
        int left=len-1;
        int right=len+2*num-1;
        while(left<right&&left>=0){
            if(list1[left]!=' '){
                list[right]=list1[left];
                right--;
                left--;
            }
            else{
                list[right--]='0';
                list[right--]='2';
                list[right--]='%';
                left--;
            }
        }
        while(left>=0){
            list[left]=list1[left];
            left--;
        }
        String result="";
        for(int i=0;i<len+2*num;++i){
            result+=list[i];
        }
        return result;
    }
}
```

---

## [剑指 Offer 06. 从尾到头打印链表](https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/)

**题目描述：**

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

 

**示例 1：**

```
输入：head = [1,3,2]
输出：[2,3,1]
```

---

正序遍历存入数组或者栈中，再取出即可

```java
class Solution {
    public int[] reversePrint(ListNode head) {
        List<Integer> list=new ArrayList<>();
        ListNode p=head;
        if(p==null) return new int[0];
        while(p!=null){
            list.add(p.val);
            p=p.next;
        }
        int len=list.size();
        int[] result=new int[len];
        for(int i=0;i<len;++i){
            result[i]=list.get(len-1-i);
        }
        return result;
    }
}
```

递归函数遍历也可

```java
class Solution {
    ArrayList<Integer> tmp = new ArrayList<Integer>();
    public int[] reversePrint(ListNode head) {
        recur(head);
        int[] res = new int[tmp.size()];
        for(int i = 0; i < res.length; i++)
            res[i] = tmp.get(i);
        return res;
    }
    void recur(ListNode head) {
        if(head == null) return;
        recur(head.next);
        tmp.add(head.val);
    }
}
```



---

## [剑指 Offer 07. 重建二叉树](https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof/)

**题目描述：**

输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。

假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

 

**示例 1:**

![img](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)

```
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
```

**示例 2:**

```
Input: preorder = [-1], inorder = [-1]
Output: [-1]
```

---

**题解：**

递归加指针

```java
class Solution {
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if(preorder.length==0) return null;
        TreeNode root=new TreeNode(preorder[0]);
        tree(root,preorder,inorder,0, preorder.length-1,0,inorder.length-1);
        return root;
    }
    public TreeNode tree(TreeNode node,int[] pre,int[] in,int pleft,int pright,int ileft,int iright){
        if(pleft>pright||ileft>iright) return null;
        int index=pleft;
        for(int i=ileft;i<=iright;++i){
            if(in[i]==pre[pleft]){
                index=i;
                break;
            }
        }
        node.val=pre[pleft];
        node.left=new TreeNode(pre[pleft]);
        node.right=new TreeNode(pre[pleft]);
        node.left=tree(node.left,pre,in,pleft+1,index-ileft+pleft,ileft,index-1);
        node.right=tree(node.right,pre,in,index-ileft+1+pleft,pright,index+1,iright);
        return node;
    }
}
```

---

## [剑指 Offer 09. 用两个栈实现队列](https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/)

**题目描述：**

用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 `appendTail` 和 `deleteHead` ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，`deleteHead` 操作返回 -1 )

 

**示例 1：**

```
输入：
["CQueue","appendTail","deleteHead","deleteHead","deleteHead"]
[[],[3],[],[],[]]
输出：[null,null,3,-1,-1]
```

**示例 2：**

```
输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
```

---

**题解：**

```java
class Solution {
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if(preorder.length==0) return null;
        TreeNode root=new TreeNode(preorder[0]);
        tree(root,preorder,inorder,0, preorder.length-1,0,inorder.length-1);
        return root;
    }
    public TreeNode tree(TreeNode node,int[] pre,int[] in,int pleft,int pright,int ileft,int iright){
        if(pleft>pright||ileft>iright) return null;
        int index=pleft;
        for(int i=ileft;i<=iright;++i){
            if(in[i]==pre[pleft]){
                index=i;
                break;
            }
        }
        node.val=pre[pleft];
        node.left=new TreeNode(pre[pleft]);
        node.right=new TreeNode(pre[pleft]);
        node.left=tree(node.left,pre,in,pleft+1,index-ileft+pleft,ileft,index-1);
        node.right=tree(node.right,pre,in,index-ileft+1+pleft,pright,index+1,iright);
        return node;
    }
}
```

---

## [剑指 Offer 10- I. 斐波那契数列](https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/)

**题目描述：**

写一个函数，输入 `n` ，求斐波那契（Fibonacci）数列的第 `n` 项（即 `F(N)`）。斐波那契数列的定义如下：

```
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
```

斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

 

**示例 1：**

```
输入：n = 2
输出：1
```

**示例 2：**

```
输入：n = 5
输出：5
```

---

递归

```java
class Solution {
    public int fib(int n) {
        if(n==1||n==2) return 1;
        long [] dp=new long[101];
        dp[1]=1;
        dp[2]=1;
        for(int i=3;i<=n;++i){
            dp[i]=(dp[i-1]+dp[i-2])%1000000007;
        }
        return (int)dp[n]%1000000007;
    }
}
```

---

## [剑指 Offer 10- II. 青蛙跳台阶问题](https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/)

**题目描述：**

一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 `n` 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

**示例 1：**

```
输入：n = 2
输出：2
```

**示例 2：**

```
输入：n = 7
输出：21
```

**示例 3：**

```
输入：n = 0
输出：1
```

---

**题解：**

递归即可

```java
class Solution {
    public int numWays(int n) {
        if(n==0||n==1) return 1;
        int[] dp=new int[n+1];
        dp[0]=1;
        dp[1]=1;
        for(int i=2;i<=n;++i){
            dp[i]=(dp[i-1]+dp[i-2])%1000000007;
        }
        return dp[n];
    }
}
```

---

## [剑指 Offer 11. 旋转数组的最小数字](https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/)

**题目描述：**

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

给你一个可能存在 **重复** 元素值的数组 `numbers` ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的**最小元素**。例如，数组 `[3,4,5,1,2]` 为 `[1,2,3,4,5]` 的一次旋转，该数组的最小值为 1。 

注意，数组 `[a[0], a[1], a[2], ..., a[n-1]]` 旋转一次 的结果为数组 `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]` 。

 

**示例 1：**

```
输入：numbers = [3,4,5,1,2]
输出：1
```

**示例 2：**

```
输入：numbers = [2,2,2,0,1]
输出：0
```

---

二分查找

**题解：**

```java
class Solution {
    public int minArray(int[] numbers) {
        int low = 0;
        int high = numbers.length - 1;
        while (low < high) {
            int pivot = low + (high - low) / 2;
            if (numbers[pivot] < numbers[high]) {
                high = pivot;
            } else if (numbers[pivot] > numbers[high]) {
                low = pivot + 1;
            } else {
                high -= 1;
            }
        }
        return numbers[low];
    }

}
```

---

## [剑指 Offer 12. 矩阵中的路径](https://leetcode.cn/problems/ju-zhen-zhong-de-lu-jing-lcof/)

**题目描述：**

给定一个 `m x n` 二维字符网格 `board` 和一个字符串单词 `word` 。如果 `word` 存在于网格中，返回 `true` ；否则，返回 `false` 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。

![img](https://assets.leetcode.com/uploads/2020/11/04/word2.jpg)

 

**示例 1：**

```
输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
```

**示例 2：**

```
输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false
```

---

**回溯法**

**题解：**

```java
class Solution {
    public boolean exist(char[][] board, String word) {
        int m=board.length;
        int n=board[0].length;
        int[][]  path=new int[m][n];
        boolean[] flag = new boolean[1];
        for(int i=0;i<m;++i){
            for(int j=0;j<n;++j){
                search(board,path,flag,word,0,i,j,m,n);
            }
        }
        return flag[0];
    }
    public void search(char[][] board,int[][]  path,boolean[] flag,String word,int index,int i,int j,int m,int n){
        if(index==word.length()){
            flag[0]=true;
            return;
        }
        if(i<m&&i>=0&&j<n&&j>=0&&path[i][j]==0){
            if(word.charAt(index)==board[i][j]){
                path[i][j]=1;
                search(board, path, flag, word, index+1, i+1, j, m, n);
                search(board, path, flag, word, index+1, i, j+1, m, n);
                search(board, path, flag, word, index+1, i-1, j, m, n);
                search(board, path, flag, word, index+1, i, j-1, m, n);
                path[i][j]=0;
            }
        }
    }
}
```

---

## [剑指 Offer 14- I. 剪绳子](https://leetcode.cn/problems/jian-sheng-zi-lcof/)

**题目描述：**

给你一根长度为 `n` 的绳子，请把绳子剪成整数长度的 `m` 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 `k[0],k[1]...k[m-1]` 。请问 `k[0]*k[1]*...*k[m-1]` 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

**示例 1：**

```
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
```

**示例 2:**

```
输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
```

---

**动态规划**

**题解：**

```java
class Solution {
    public int cuttingRope(int n) {
        int[] dp = new int[n + 1];
        // 初始化
        dp[1] = 1;  // 指长度为1的单独乘积为1
        // 遍历[2,n]的每个状态
        for(int i = 2; i <= n; i++) {
            for(int j = 1; j <= i - 1; j++) {
                // 求出两种转移情况(乘积个数为2和2以上)的最大值
                int tmp = Math.max(dp[j] * (i - j), j * (i - j));
                dp[i] = Math.max(tmp, dp[i]);
            }
        }
        return dp[n];
    }
}
```

---

## [剑指 Offer 14- II. 剪绳子 II](https://leetcode.cn/problems/jian-sheng-zi-ii-lcof/)

**题目描述：**

给你一根长度为 `n` 的绳子，请把绳子剪成整数长度的 `m` 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 `k[0],k[1]...k[m - 1]` 。请问 `k[0]*k[1]*...*k[m - 1]` 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

 

**示例 1：**

```
输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
```

**示例 2:**

```
输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
```

 

---

**动态规划**

**题解：**

```java
class Solution {
    public int cuttingRope(int n) {
        if(n <= 3) 
            return n - 1;
        int b = n % 3, p = 1000000007;
        long ret = 1;
        int lineNums=n/3;           //线段被我们分成以3为大小的小线段个数
        for(int i=1;i<lineNums;i++) //从第一段线段开始验算，3的ret次方是否越界。注意是验算lineNums-1次。
            ret = 3*ret % p;
        if(b == 0) 
            return (int)(ret * 3 % p);   //刚好被3整数的，要算上前一段
        if(b == 1) 
            return (int)(ret * 4 % p);   //被3整数余1的，要算上前一段

        return (int)(ret * 6 % p);       //被3整数余2的，要算上前一段
    }
}
```

## [剑指 Offer 15. 二进制中1的个数](https://leetcode.cn/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/)

**题目描述：**

编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 [汉明重量](http://en.wikipedia.org/wiki/Hamming_weight)).）。

 

**提示：**

- 请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
- 在 Java 中，编译器使用 [二进制补码](https://baike.baidu.com/item/二进制补码/5295284) 记法来表示有符号整数。因此，在上面的 **示例 3** 中，输入表示有符号整数 `-3`。

 

**示例 1：**

```
输入：n = 11 (控制台输入 00000000000000000000000000001011)
输出：3
解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。
```

**示例 2：**

```
输入：n = 128 (控制台输入 00000000000000000000000010000000)
输出：1
解释：输入的二进制串 00000000000000000000000010000000 中，共有一位为 '1'。
```

**示例 3：**

```
输入：n = 4294967293 (控制台输入 11111111111111111111111111111101，部分语言中 n = -3）
输出：31
解释：输入的二进制串 11111111111111111111111111111101 中，共有 31 位为 '1'。
```

---

循环即可

**题解：**

```java
public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int sum=0;
        while(n!=0){
            sum+=n&1;
            n=n>>>1;
        }
        return sum;
    }
}
```

---

## [剑指 Offer 16. 数值的整数次方](https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/)

**题目描述：**

实现 [pow(*x*, *n*)](https://www.cplusplus.com/reference/valarray/pow/) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。

 

**示例 1：**

```
输入：x = 2.00000, n = 10
输出：1024.00000
```

**示例 2：**

```
输入：x = 2.10000, n = 3
输出：9.26100
```

**示例 3：**

```
输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25
```

---

递归

**题解：**

```java
class Solution {
    public double myPow(double x, int n) {
        if(n==0) return 1;
        if(n<0&&-1*n<0) return 1/(dp(x,-1*(n+1))*x);
        if(n<0) return 1/dp(x,-1*n);
        return dp(x,n);
    }
    public double dp(double x,int n){
        if(n==1) return x;
        double tmp=dp(x,n/2);
        if(n%2==1){
            return tmp*tmp*x;
        }
        else return tmp*tmp;
    }
}
```

---

## [剑指 Offer 17. 打印从1到最大的n位数](https://leetcode.cn/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/)

**题目描述：**

输入数字 `n`，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

**示例 1:**

```
输入: n = 1
输出: [1,2,3,4,5,6,7,8,9]
```

---

确定数组容量，依次存放即可

**题解：**

```java
class Solution {
    public int[] printNumbers(int n) {
        int end=1;
        for(int i=0;i<n;++i){
            end*=10;
        }
        int[] result=new int[end-1];
        for(int i=1;i<end;++i){
            result[i-1]=i;
        }
        return result;
    }
}
```

---

## [剑指 Offer 18. 删除链表的节点](https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/)

给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

**注意：**此题对比原题有改动

**示例 1:**

```
输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
```

**示例 2:**

```
输入: head = [4,5,1,9], val = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
```

---

前后指针遍历即可

**题解：**

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode deleteNode(ListNode head, int val) {
        if(head==null) return head;
        if(head.val==val) return head.next;
        ListNode p=head;
        ListNode q=head.next;
        while(q!=null){
            if(q.val==val){
                p.next=q.next;
                return head;
            }
            p=p.next;
            q=q.next;
        }
        return head;
    }
}
```

---

## [剑指 Offer 19. 正则表达式匹配](https://leetcode.cn/problems/zheng-ze-biao-da-shi-pi-pei-lcof/)

请实现一个函数用来匹配包含`'. '`和`'*'`的正则表达式。模式中的字符`'.'`表示任意一个字符，而`'*'`表示它前面的字符可以出现任意次（含0次）。在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串`"aaa"`与模式`"a.a"`和`"ab*ac*a"`匹配，但与`"aa.a"`和`"ab*a"`均不匹配。

**示例 1:**

```
输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
```

**示例 2:**

```
输入:
s = "aa"
p = "a*"
输出: true
解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
```

**示例 3:**

```
输入:
s = "ab"
p = ".*"
输出: true
解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
```

**示例 4:**

```
输入:
s = "aab"
p = "c*a*b"
输出: true
解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
```

**示例 5:**

```
输入:
s = "mississippi"
p = "mis*is*p*."
输出: false
```

- `s` 可能为空，且只包含从 `a-z` 的小写字母。
- `p` 可能为空，且只包含从 `a-z` 的小写字母以及字符 `.` 和 `*`，无连续的 `'*'`。

---

动态规划

**题解：**

```java
class Solution {
    public boolean isMatch(String s, String p) {
        int lens=s.length();
        int lenp=p.length();
        boolean[][] dp=new boolean[lens+1][lenp+1];
        char[] lists=s.toCharArray();
        char[] listp=p.toCharArray();
        dp[0][0]=true;
        for(int j=0;j<lenp;++j){
            if(listp[j]=='*'&&dp[0][j-1]){
                dp[0][j+1]=true;
            }
        }
        for(int i=1;i<lens+1;++i){
            for(int j=1;j<lenp+1;++j){
                if(listp[j-1]=='*'){
                    if(listp[j-2]=='.'){
                        dp[i][j]=dp[i-1][j-1]||dp[i][j-1]||dp[i-1][j]||dp[i][j-2];
                    }
                    else if(lists[i-1]==listp[j-2]){
                        dp[i][j]=dp[i-1][j-1]||dp[i][j-1]||dp[i-1][j]||dp[i][j-2];
                    }
                    else{
                        dp[i][j]=dp[i][j-2];
                    }
                }
                else{
                    if(listp[j-1]=='.'){
                        dp[i][j]=dp[i-1][j-1];
                    }
                    else if(listp[j-1]==lists[i-1]){
                        dp[i][j]=dp[i-1][j-1];
                    }
                    else{
                        dp[i][j]=false;
                    }
                }
            }
        }
        return dp[lens][lenp];
    }
}
```

---

## [剑指 Offer 20. 表示数值的字符串](https://leetcode.cn/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/)

请实现一个函数用来判断字符串是否表示**数值**（包括整数和小数）。

**数值**（按顺序）可以分成以下几个部分：

1. 若干空格
2. 一个 **小数** 或者 **整数**
3. （可选）一个 `'e'` 或 `'E'` ，后面跟着一个 **整数**
4. 若干空格

**小数**（按顺序）可以分成以下几个部分：

1. （可选）一个符号字符（`'+'` 或 `'-'`）
2. 下述格式之一：
   1. 至少一位数字，后面跟着一个点 `'.'`
   2. 至少一位数字，后面跟着一个点 `'.'` ，后面再跟着至少一位数字
   3. 一个点 `'.'` ，后面跟着至少一位数字

**整数**（按顺序）可以分成以下几个部分：

1. （可选）一个符号字符（`'+'` 或 `'-'`）
2. 至少一位数字

部分**数值**列举如下：

- `["+100", "5e2", "-123", "3.1416", "-1E-16", "0123"]`

部分**非数值**列举如下：

- `["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]`

 

**示例 1：**

```
输入：s = "0"
输出：true
```

**示例 2：**

```
输入：s = "e"
输出：false
```

**示例 3：**

```
输入：s = "."
输出：false
```

**示例 4：**

```
输入：s = "    .1  "
输出：true
```

---

垃圾题目，纯恶心人，无脑各种判断即可

**题解：**

```java
class Solution {
    public static boolean isNumber(String s) {
        int len=s.length();
        char[] list=s.toCharArray();
        int index=0;
        for(;index<len;++index){
            if(list[index]!=' '){
                if(list[index]=='+'||list[index]=='-'||(list[index]<='9'&&list[index]>='0')||list[index]=='.'){
                    break;
                }
                else return false;
            }
        }
        if(index==len) return false;
        int index2=index;
        for(;index2<len;++index2){
            if(list[index2]=='e'||list[index2]=='E'||list[index2]==' ') break;
        }
        boolean pointflag=false;
        for(int i=index;i<index2;++i){
            if(list[i]=='+'||list[i]=='-'){
                 if(i!=index) return false;
            }
            else if(list[i]=='.'){
                if(pointflag) return false;
                if(i>0&&list[i-1]<='9'&&list[i-1]>='0') pointflag=true;
                if(i<len-1&&list[i+1]<='9'&&list[i+1]>='0') pointflag=true;
                if(!pointflag) return false;
            }
            else if(list[i]<='9'&&list[i]>='0'){
                continue;
            }
            else{
                return false;
            }
        }

        for(index=index2;index<len;++index){
            if(list[index]==' ') break;
        }
        for(int i=index2;i<index;++i){
            if(list[i]=='e'||list[i]=='E'){
                if(i!=index2) return false;
                if(i<len-1&&(list[i+1]=='+'||list[i+1]=='-')){
                    if(i<len-2&&list[i+2]>='0'&&list[i+2]<='9') ;
                    else return false;
                }
                else if(i<len-1){
                    if(list[i+1]>='0'&&list[i+1]<='9') ;
                    else return false;
                }

                else if(i==len-1) return false;
                if(i>0&&list[i-1]=='.'){
                    if(i>1&&list[i-2]>='0'&&list[i-2]<='9') continue;
                    return false;
                }
                else if(i>0){
                    if(list[i-1]<='9'&&list[i-1]>='0') continue;
                    return false;
                }
                else if(i==0) return false;
            }
            else if(list[i]=='+'||list[i]=='-'){
                if((list[index2]!='e'&&list[index2]!='E')&&i!=index) return false;
                else if((list[index2]=='e'||list[index2]=='E')&&i!=index2+1) return false;
            }
            else if(list[i]<='9'&&list[i]>='0');
            else return false;
        }
        for(int i=index;i<len;++i){
            if(list[i]!=' '){
                return false;
            }
        }
        return true;
    }
}
```

