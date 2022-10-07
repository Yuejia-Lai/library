---
title: 剑指offer(第二版)-I
icon: iconfont icon-leetcode1
date: 2022-10-01
---

::: info

剑指offer（第二版）第一部分题解  --Java实现

:::

## [剑指 Offer 21. 调整数组顺序使奇数位于偶数前面](https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/)

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。

**示例：**

```
输入：nums = [1,2,3,4]
输出：[1,3,2,4] 
注：[3,1,2,4] 也是正确的答案之一。
```

---

遍历即可

```java
class Solution {
    public int[] exchange(int[] nums) {
        int len=nums.length;
        if(len==0) return nums;
        int[] result=new int[len];
        int left=0;
        int right=len-1;
        for(int i=0;i<len;++i){
            if(nums[i]%2==0){
                result[right]=nums[i];
                right--;
            }
            else{
                result[left]=nums[i];
                left++;
            }
        }
        return result;
    }
}
```

---

## [剑指 Offer 22. 链表中倒数第k个节点](https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)

输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

例如，一个链表有 `6` 个节点，从头节点开始，它们的值依次是 `1、2、3、4、5、6`。这个链表的倒数第 `3` 个节点是值为 `4` 的节点。

 

**示例：**

```
给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.
```

---

双指针，先让一个指针走k步即可

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
    public ListNode getKthFromEnd(ListNode head, int k) {
        if(head==null) return null;
        ListNode p=head;
        ListNode q=head;
        for(int i=0;i<k-1;++i){
            if(p!=null) p=p.next;
        }
        while(p!=null&&p.next!=null){
            p=p.next;
            q=q.next;
        }
        return q;
    }
}
```

---

## [剑指 Offer 24. 反转链表](https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/)

定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

 

**示例:**

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

---

可以用指针遍历然后更改next属性，这里用数组保存然后反转

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
    public ListNode reverseList(ListNode head) {
        int[] num=new int[5000];
        int len=0;
        ListNode p=head;
        while(p!=null){
            num[len]=p.val;
            len++;
            p=p.next;
        }
        p=head;
        for(int i=len-1;i>=0;--i){
            p.val=num[i];
            p=p.next;
        }
        return head;
    }
}
```

---

## [剑指 Offer 25. 合并两个排序的链表](https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/)

输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

**示例1：**

```
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

---

遍历比较即可

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
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if(l1==null&&l2==null) return null;
        ListNode head=new ListNode(0);
        ListNode p=head;
        while(l1!=null||l2!=null){
            if(l1!=null&&l2!=null){
                if(l1.val<=l2.val){
                    p.next=new ListNode(l1.val);
                    l1=l1.next;
                }
                else {p.next=new ListNode(l2.val);
                        l2=l2.next;
                }
            }
            else if(l1==null){
                p.next=new ListNode(l2.val);
                l2=l2.next;
            }
            else {
                p.next=new ListNode(l1.val);
                l1=l1.next;
            }
            p=p.next;
        }
        return head.next;
    }
}
```

---

## [剑指 Offer 26. 树的子结构](https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/)

输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:
给定的树 A:

   3  

   / \  

 4    5 

 / \ 

1  2
给定的树 B：

   4  

  / 

1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

**示例 1：**

```
输入：A = [1,2,3], B = [3,1]
输出：false
```

**示例 2：**

```
输入：A = [3,4,5,1,2], B = [4,1]
输出：true
```

---

分别比较左右子树，递归即可

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isSubStructure(TreeNode A, TreeNode B) {
        if(A==null||B==null) return false;
        return search(A,B);
    }
    public boolean search(TreeNode a,TreeNode b){
        if(a==null&&b!=null) return false;
        if(b==null) return true;
        if(a.val== b.val){
             return forcesearch(a,b)||search(a.left,b)||search(a.right,b);
        }
        return search(a.left,b)||search(a.right,b);
    }
    public boolean forcesearch(TreeNode a,TreeNode b){
        if(a==null&&b!=null) return false;
        if(b==null) return true;
        if(a.val!= b.val) return false;
        return forcesearch(a.left,b.left)&&forcesearch(a.right,b.right);
    }
}
```

---

## [剑指 Offer 27. 二叉树的镜像](https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/)

请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

   4  

   /  \ 

  2     7 

 / \    / \

1  3 6  9`
镜像输出：

​    4  

   /  \ 

 7     2 

/ \    / \

9  6 3  1

**示例 1：**

```
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```

---

递归后进行反转

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode mirrorTree(TreeNode root) {
        return  mirror(root);
    }
    public TreeNode mirror(TreeNode node){
        if(node==null) return null;
        TreeNode node1=node.left;
        node.left=node.right;
        node.right=node1;
        mirror(node.right);
        mirror(node.left);
        return node;
    }
}
```

---

## [剑指 Offer 28. 对称的二叉树](https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof/)

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

​     1  

​     / \ 

​    2  2 

   / \ / \

3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

  1  

  / \ 

 2  2  

   \  \  

​     3   3

 

**示例 1：**

```
输入：root = [1,2,2,3,4,4,3]
输出：true
```

**示例 2：**

```
输入：root = [1,2,2,null,3,null,3]
输出：false
```

---

递归判断二叉树是否相等

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isSymmetric(TreeNode root) {
        boolean[] flag=new boolean[1];
        flag[0]=true;
        if(root==null ) return true;
        is(root.left,root.right,flag);
        return flag[0];
    }
    public void is(TreeNode node1,TreeNode node2,boolean[] flag){
        if(node1==null&&node2==null) return;
        if(node1==null&&node2!=null) {
            flag[0]=false;
            return;
        }
        if(node2==null&&node1!=null) {
            flag[0]=false;
            return;
        }
        if(node1.val!=node2.val){
            flag[0]=false;
            return;
        }
        is(node1.left,node2.right,flag);
        is(node1.right,node2.left,flag);
    }
}
```

---

## [剑指 Offer 29. 顺时针打印矩阵](https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/)

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

 

**示例 1：**

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

**示例 2：**

```
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
```

---

注意循环统一性（含头不含尾/含尾不含头）

```java
class Solution {
    public int[] spiralOrder(int[][] matrix) {
        int m=matrix.length;
        if(m==0) return new int[0];
        int n=matrix[0].length;
        
        int [] list=new int[m*n];
        int count=0;
        int num=((m>n)?n:m)/2;
        int startx=0;
        int starty=0;
        int offset=1;
        for(int l=0;l<num;++l){
            int i=startx;
            int j=starty;
            for(;j<starty+n-offset;++j){
                list[count++]=matrix[i][j];
            }
            for(;i<startx+m-offset;++i){
                list[count++]=matrix[i][j];
            }
            for(;j>starty;--j){
                list[count++]=matrix[i][j];
            }
            for(;i>startx;--i){
                list[count++]=matrix[i][j];
            }
            startx+=1;
            starty+=1;
            offset+=2;
        }

        if(m<n&&m%2==1){
            for(int i=0;i<n-num*2;++i){
                list[count++]=matrix[startx][starty+i];
            }
        }
        if(m>n&&n%2==1){
            for(int i=0;i<m-num*2;++i){
                list[count++]=matrix[startx+i][starty];
            }
        }
        if(m==n&&m%2==1){
            list[count++]=matrix[m/2][n/2];
        }
        return list;
    }
}
```

---

## [剑指 Offer 30. 包含min函数的栈](https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof/)

定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。

**示例:**

```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.min();   --> 返回 -2.
```

---

单调栈加栈结构即可

```java
class MinStack {

    /** initialize your data structure here. */
    Deque<Integer> xStack;
    Deque<Integer> minStack;

    public MinStack() {
        xStack = new LinkedList<Integer>();
        minStack = new LinkedList<Integer>();
        minStack.push(Integer.MAX_VALUE);
    }
    
    public void push(int x) {
        xStack.push(x);
        minStack.push(Math.min(minStack.peek(), x));
    }
    
    public void pop() {
        xStack.pop();
        minStack.pop();
    }
    
    public int top() {
        return xStack.peek();
    }
    
    public int min() {
        return minStack.peek();
    }

}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.min();
 */
```

---

## [剑指 Offer 31. 栈的压入、弹出序列](https://leetcode.cn/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/)

输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。

 

**示例 1：**

```
输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
```

**示例 2：**

```
输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
输出：false
解释：1 不能在 2 之前弹出。
```

---

模拟

```java
class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        int len1=pushed.length;
        int len2=popped.length;
        Stack<Integer> stack=new Stack<>();
        int index=0;
        for(int i=0;i<len1;++i){
            stack.push(pushed[i]);
            while(!stack.isEmpty()&&stack.peek()==popped[index]){
                stack.pop();
                index++;
            }
        }
        return index==len2;
    }
}
```

---

## [剑指 Offer 32 - I. 从上到下打印二叉树](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/)

从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

 

例如:
给定二叉树: `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

返回：

```
[3,9,20,15,7]
```

---

层次遍历

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public int[] levelOrder(TreeNode root) {
        LinkedList<TreeNode> list=new LinkedList<>();
        LinkedList<Integer> result=new LinkedList<>();
        if(root==null) return new int[0];
        list.add(root);
        order(list,result);
        while(!list.isEmpty()){
            result.add(list.getFirst().val);
            list.removeFirst();
        }
        int len=result.size();
        int[] results=new int[len];
        for(int i=0;i<len;++i){
            results[i]=result.getFirst();
            result.removeFirst();
        }
        return results;
    }
    public void order(LinkedList<TreeNode> list,LinkedList<Integer> result){
        if(list.isEmpty()) return;
        TreeNode node=list.getFirst();

        result.add(node.val);
        list.removeFirst();
        if(node.left==null&&node.right==null)return;
        if(node.left!=null){
            list.add(node.left);

        }
        if(node.right!=null){
            list.add(node.right);
        }

        order(list,result);
        order(list,result);
    }
}
```

---

## [剑指 Offer 32 - II. 从上到下打印二叉树 II](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/)

从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

 

例如:
给定二叉树: `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其层次遍历结果：

```
[
  [3],
  [9,20],
  [15,7]
]
```

---

与上一题基本一致

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> list=new ArrayList<>();
        List<Integer> path=new ArrayList<>();
        List<TreeNode> stack=new ArrayList<>();
        int count=1;
        int current=0;
        if(root==null) return list;
        stack.add(root);
        while(count!=0){
            for(int i=0;i<count;++i){
                TreeNode node=stack.remove(0);
                if(node.left!=null){
                    stack.add(node.left);
                    current++;
                }
                if(node.right!=null){
                    stack.add(node.right);
                    current++;
                }
                path.add(node.val);
            }
            list.add(new ArrayList<>(path));
            path.clear();
            count=current;
            current=0;
        }
        return list;
    }
}
```

---

## [剑指 Offer 32 - III. 从上到下打印二叉树 III](https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/)

请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

 

例如:
给定二叉树: `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

返回其层次遍历结果：

```
[
  [3],
  [20,9],
  [15,7]
]
```

---

层序遍历遍历两次即可

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> list=new LinkedList<>();
        List<Integer> path=new LinkedList<>();
        Stack<TreeNode> stack1=new Stack<>();
        Stack<TreeNode> stack2=new Stack<>();
        if(root==null) return list;
        int count1=1;
        int count2=0;
        stack1.push(root);
        while(!stack1.isEmpty()){
            for(int i=0;i<count1;++i){
                TreeNode node=stack1.pop();
                if(node.left!=null){
                    stack2.push(node.left);
                    count2++;
                }
                if(node.right!=null){
                    stack2.push(node.right);
                    count2++;
                }
                path.add(node.val);
            }
            if(path.isEmpty()) break;
            list.add(new ArrayList<>(path));
            path.clear();
            count1=0;
            for(int i=0;i<count2;++i){
                TreeNode node=stack2.pop();
                if(node.right!=null){
                    stack1.push(node.right);
                    count1++;
                }
                if(node.left!=null){
                    stack1.push(node.left);
                    count1++;
                }
                path.add(node.val);
            }
            if(path.isEmpty()) break;
            list.add(new ArrayList<>(path));
            path.clear();
            count2=0;
        }
        return list;
    }
}
```

