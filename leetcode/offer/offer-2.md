---
title: 剑指offer(第二版)-II
icon: iconfont icon-leetcode1
date: 2022-10-01
---

::: info

剑指offer（第二版）第二部分题解  --Java实现

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

---

## [剑指 Offer 33. 二叉搜索树的后序遍历序列](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/)

输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 `true`，否则返回 `false`。假设输入的数组的任意两个数字都互不相同。

 

参考以下这颗二叉搜索树：

```
     5
    / \
   2   6
  / \
 1   3
```

**示例 1：**

```
输入: [1,6,3,2,5]
输出: false
```

**示例 2：**

```
输入: [1,3,2,6,5]
输出: true
```

---

从后向前遍历判断，每次将数组分成两部分

```java
class Solution {
    public boolean verifyPostorder(int[] postorder) {
        int len=postorder.length;
        if(len==0) return true;
        
        boolean[] flag=new boolean[1];
        flag[0]=true;
        search(postorder,0,len-1,flag);
        return flag[0];
    }
    public void search(int[] postorder,int left,int right,boolean[] flag){
        if(right-left<=1) return;
        int i;
        int min=postorder[right];
        for( i=right-1;i>=left;--i){
            min=Math.min(min,postorder[i]);
            if(min<postorder[right]){
                break;
            }
        }
        for(int j=i;j>=left;--j){
            if(postorder[j]>postorder[right]) {flag[0]=false;return;}
        }
        if(flag[0]){
            search(postorder,left,i,flag);
            search(postorder,i+1,right-1,flag);
        }
    }
}
```

---

## [剑指 Offer 34. 二叉树中和为某一值的路径](https://leetcode.cn/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)

给你二叉树的根节点 `root` 和一个整数目标和 `targetSum` ，找出所有 **从根节点到叶子节点** 路径总和等于给定目标和的路径。

**叶子节点** 是指没有子节点的节点。

 

**示例 1：**

![img](https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg)

```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
```

**示例 2：**

![img](https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg)

```
输入：root = [1,2,3], targetSum = 5
输出：[]
```

**示例 3：**

```
输入：root = [1,2], targetSum = 0
输出：[]
```

---

回溯法遍历即可

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        List<List<Integer>> list=new LinkedList<>();
        List<Integer> path=new LinkedList<>();
        int[] sum=new int[1];
       
        if(root==null) return list;
        sum[0]=root.val;
        path.add(root.val);
        sum(list,path,root,targetSum,sum);
        return list;
    }
    public void sum(List<List<Integer>> list,List<Integer> path,TreeNode node,int targetSum,int[] sum){
        if(node.left==null&&node.right==null){
            if(sum[0]==targetSum){
                list.add(new ArrayList<>(path));
            }
            return;
        }
        if(node.left!=null){
            path.add(node.left.val);
            sum[0]+=node.left.val;
            sum(list,path,node.left,targetSum,sum);
            sum[0]-=node.left.val;
            path.remove(path.size()-1);
        }
        if(node.right!=null){
            path.add(node.right.val);
            sum[0]+=node.right.val;
            sum(list,path,node.right,targetSum,sum);
            sum[0]-=node.right.val;
            path.remove(path.size()-1);
        }
    }
}
```

---

## [剑指 Offer 35. 复杂链表的复制](https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof/)

请实现 `copyRandomList` 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 `next` 指针指向下一个节点，还有一个 `random` 指针指向链表中的任意节点或者 `null`。

 

**示例 1：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e1.png)

```
输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
```

**示例 2：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e2.png)

```
输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]
```

**示例 3：**

**![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/09/e3.png)**

```
输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
```

**示例 4：**

```
输入：head = []
输出：[]
解释：给定的链表为空（空指针），因此返回 null。
```

---

递归加哈希

```java
class Solution {
    Map<Node, Node> cachedNode = new HashMap<Node, Node>();

    public Node copyRandomList(Node head) {
        if (head == null) {
            return null;
        }
        if (!cachedNode.containsKey(head)) {
            Node headNew = new Node(head.val);
            cachedNode.put(head, headNew);
            headNew.next = copyRandomList(head.next);
            headNew.random = copyRandomList(head.random);
        }
        return cachedNode.get(head);
    }
}
```

---

## [剑指 Offer 36. 二叉搜索树与双向链表](https://leetcode.cn/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/)

输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。

 

为了让您更好地理解问题，以下面的二叉搜索树为例：

 

![img](https://assets.leetcode.com/uploads/2018/10/12/bstdlloriginalbst.png)

 

我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。

下图展示了上面的二叉搜索树转化成的链表。“head” 表示指向链表中有最小元素的节点。

 

![img](https://assets.leetcode.com/uploads/2018/10/12/bstdllreturndll.png)

 

特别地，我们希望可以就地完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中的第一个节点的指针。

---

中序遍历

```java
/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val,Node _left,Node _right) {
        val = _val;
        left = _left;
        right = _right;
    }
};
*/
class Solution {
    public Node treeToDoublyList(Node root) {
        Node head=new Node();
        if(root==null) return root;
        Node[] flag=new Node[1];
        flag[0]=head;
        inorder(root,flag);
        flag[0].right=head.right;
        head.right.left=flag[0];
        return head.right;
    }
    public void inorder(Node node,Node[] flag){
        if(node==null) return;
        inorder(node.left,flag);
        flag[0].right=node;
        node.left=flag[0];
        flag[0]=node;
        inorder(node.right,flag);
    }
}
```

---

## [剑指 Offer 37. 序列化二叉树](https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof/)

请实现两个函数，分别用来序列化和反序列化二叉树。

你需要设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

**提示：**输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 [LeetCode 序列化二叉树的格式](https://support.leetcode-cn.com/hc/kb/article/1567641/)。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

**示例：**

![img](https://assets.leetcode.com/uploads/2020/09/15/serdeser.jpg)

```
输入：root = [1,2,3,null,null,4,5]
输出：[1,2,3,null,null,4,5]
```

---

层次遍历，null代表空节点

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
public class Codec {

    public String serialize(TreeNode root) {
        return rserialize(root, "");
    }
  
    public TreeNode deserialize(String data) {
        String[] dataArray = data.split(",");
        List<String> dataList = new LinkedList<String>(Arrays.asList(dataArray));
        return rdeserialize(dataList);
    }

    public String rserialize(TreeNode root, String str) {
        if (root == null) {
            str += "None,";
        } else {
            str += str.valueOf(root.val) + ",";
            str = rserialize(root.left, str);
            str = rserialize(root.right, str);
        }
        return str;
    }
  
    public TreeNode rdeserialize(List<String> dataList) {
        if (dataList.get(0).equals("None")) {
            dataList.remove(0);
            return null;
        }
  
        TreeNode root = new TreeNode(Integer.valueOf(dataList.get(0)));
        dataList.remove(0);
        root.left = rdeserialize(dataList);
        root.right = rdeserialize(dataList);
    
        return root;
    }


}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
```

---

## [剑指 Offer 38. 字符串的排列](https://leetcode.cn/problems/zi-fu-chuan-de-pai-lie-lcof/)

输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。 

**示例:**

```
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
```

---

回溯法暴力搜索

```java
class Solution {
    public String[] permutation(String s) {
        char[] list=s.toCharArray();
        int len=list.length;
        List<String> result=new LinkedList<>();
        List<Character> path=new ArrayList<>();
        boolean[] flag=new boolean[len];
        dp(result,path,len,list,flag);
        len=result.size();
        String[] result2=new String[len];
        for(int i=0;i<len;++i){
            result2[i]=result.get(i);
        }
        return result2;
    }
    public void dp(List<String> result,List<Character> path,int len,char[] list,boolean[] flag){
        if(path.size()==len){
            String s="";
            for(int i=0;i<len;++i){
                s+=path.get(i);
            }
            result.add(s);
            return;
        }
        for(int i=0;i<len;++i){
            if(!flag[i]&&search(i,list,flag)){
                path.add(list[i]);
                flag[i]=true;
                dp(result,path,len,list,flag);
                flag[i]=false;
                path.remove(path.size()-1);
            }
        }
    }
    public boolean search(int index,char[] list,boolean[] flag){
        for(int i=0;i<index;++i){
            if(list[i]==list[index]&&flag[i]) return false;
        }
        return true;
    }
}
```

---

## [剑指 Offer 39. 数组中出现次数超过一半的数字](https://leetcode.cn/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/)

数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

**示例 1:**

```
输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2
```

---

```java
class Solution {
    public int majorityElement(int[] nums) {
        int len=nums.length;
        int current=nums[0];
        int time=0;
        for(int i=0;2*i<len;++i){
            if(nums[i]==nums[len-1-i]){
                if(time==0){
                    time+=2;
                    current=nums[i];
                }
                else if(current==nums[i]) time+=2;
                else time-=2;
            }
        }
        return current;
    }
}
```

---

## [剑指 Offer 40. 最小的k个数](https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/)

输入整数数组 `arr` ，找出其中最小的 `k` 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

 

**示例 1：**

```
输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
```

**示例 2：**

```
输入：arr = [0,1,2,1], k = 1
输出：[0]
```

---

基于快排

```java
class Solution {
    public int[] getLeastNumbers(int[] arr, int k) {
        randomizedSelected(arr, 0, arr.length - 1, k);
        int[] vec = new int[k];
        for (int i = 0; i < k; ++i) {
            vec[i] = arr[i];
        }
        return vec;
    }

    private void randomizedSelected(int[] arr, int l, int r, int k) {
        if (l >= r) {
            return;
        }
        int pos = randomizedPartition(arr, l, r);
        int num = pos - l + 1;
        if (k == num) {
            return;
        } else if (k < num) {
            randomizedSelected(arr, l, pos - 1, k);
        } else {
            randomizedSelected(arr, pos + 1, r, k - num);
        }
    }

    // 基于随机的划分
    private int randomizedPartition(int[] nums, int l, int r) {
        int i = new Random().nextInt(r - l + 1) + l;
        swap(nums, r, i);
        return partition(nums, l, r);
    }

    private int partition(int[] nums, int l, int r) {
        int pivot = nums[r];
        int i = l - 1;
        for (int j = l; j <= r - 1; ++j) {
            if (nums[j] <= pivot) {
                i = i + 1;
                swap(nums, i, j);
            }
        }
        swap(nums, i + 1, r);
        return i + 1;
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
```

---

## [剑指 Offer 41. 数据流中的中位数](https://leetcode.cn/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof/)

如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

- void addNum(int num) - 从数据流中添加一个整数到数据结构中。
- double findMedian() - 返回目前所有元素的中位数。

**示例 1：**

```
输入：
["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
输出：[null,null,null,1.50000,null,2.00000]
```

**示例 2：**

```
输入：
["MedianFinder","addNum","findMedian","addNum","findMedian"]
[[],[2],[],[3],[]]
输出：[null,null,2.00000,null,2.50000]
```

---

两个优先级队列

```java
class MedianFinder {
    PriorityQueue<Integer> queMin;
    PriorityQueue<Integer> queMax;

    public MedianFinder() {
        queMin = new PriorityQueue<Integer>((a, b) -> (b - a));
        queMax = new PriorityQueue<Integer>((a, b) -> (a - b));
    }
    
    public void addNum(int num) {
        if (queMin.isEmpty() || num <= queMin.peek()) {
            queMin.offer(num);
            if (queMax.size() + 1 < queMin.size()) {
                queMax.offer(queMin.poll());
            }
        } else {
            queMax.offer(num);
            if (queMax.size() > queMin.size()) {
                queMin.offer(queMax.poll());
            }
        }
    }
    
    public double findMedian() {
        if (queMin.size() > queMax.size()) {
            return queMin.peek();
        }
        return (queMin.peek() + queMax.peek()) / 2.0;
    }
}
```

---

