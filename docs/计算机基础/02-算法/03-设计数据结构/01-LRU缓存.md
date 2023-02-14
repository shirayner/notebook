---
tags:
  - 算法
  - LRU
---


# LRU缓存机制



#### [【146】 LRU 缓存机制](https://leetcode-cn.com/problems/lru-cache/)

方法：哈希链表 = 哈希表 + 双向链表

思路：

题解：

> - [层层拆解，带你手写 LRU 算法_labuladong](https://github.com/labuladong/fucking-algorithm/blob/master/%E9%AB%98%E9%A2%91%E9%9D%A2%E8%AF%95%E7%B3%BB%E5%88%97/LRU%E7%AE%97%E6%B3%95.md)
> - [LRU缓存机制_官方题解](https://leetcode-cn.com/problems/lru-cache/solution/lruhuan-cun-ji-zhi-by-leetcode-solution/)

拓展： LRU-k

> - [LRU算法及其优化策略——算法篇](https://juejin.cn/post/6844904049263771662)
> - [LRU算法及其优化策略——Redis篇](https://juejin.cn/post/6844903574099476494)
> - [LRU原理和Redis实现——一个今日头条的面试题](https://zhuanlan.zhihu.com/p/34133067)
> - [由浅入深介绍Redis LRU 策略的具体实现](http://www.redis.cn/articles/20161114002.html)
> - [LRU算法及其优化策略——Mysql篇](https://juejin.cn/post/6844904051012796424)
> - [LRU LFU FIFO](https://www.jianshu.com/p/b0ecc4fdb747)



```java
/**
 * title: 146. LRU 缓存机制
 * <p>
 * 设计一个LRU (最近最少使用) 缓存数据结构
 * <p>
 * 思路：
 *
 * @author shira 2019/07/09 22:57
 */
class LRUCache {

    /**
     * 双向链表结点
     */
    static class Node {
        int key;
        int value;
        Node prev;
        Node next;

        public Node() {
        }

        public Node(int k, int v) {
            key = k;
            value = v;
        }
    }

    /**
     * 双向链表
     */
    static class DoubleLinkedList {
        /**
         * 虚拟头结点
         */
        Node head;

        /**
         * 虚拟尾结点
         */
        Node tail;
        int size;

        public DoubleLinkedList() {
            // 初始化双向链表的数据
            head = new Node(0, 0);
            tail = new Node(0, 0);
            head.next = tail;
            tail.prev = head;
            size = 0;
        }

        /**
         * 在链表尾部添加节点 node，时间 O(1)  1 - 1- 1
         *
         * @param e 待添加结点
         */
        public void addLast(Node e) {
            e.next = tail;
            e.prev = tail.prev;
            tail.prev.next = e;
            tail.prev = e;
            size++;
        }

        /**
         * 删除链表中的 e 节点（e 一定存在）, 由于是双链表且给的是目标 Node 节点，时间 O(1)
         *
         * @param e 待删除的目标结点
         */
        public void remove(Node e) {
            e.prev.next = e.next;
            e.next.prev = e.prev;
            size--;
        }

        /**
         * 删除链表中第一个节点，并返回该节点，时间 O(1)
         *
         * @return 已被删除的第一个节点
         */
        public Node removeFirst() {
            if (head.next == tail) {
                return null;
            }
            Node first = head.next;
            remove(first);
            return first;
        }

        /**
         * 返回链表长度，时间 O(1)
         *
         * @return 链表长度
         */
        public int size() {
            return size;
        }
    }

    /**
     * 根据key索引到双向链表结点
     */
    Map<Integer, Node> indexMap;

    /**
     * 使用双向链表来缓存具体数据
     */
    DoubleLinkedList cache;

    /**
     * 最大容量
     */
    int capacity;

    /**
     * 以正整数作为容量 capacity 初始化 LRU 缓存
     *
     * @param capacity 容量
     */
    public LRUCache(int capacity) {
        indexMap = new HashMap<>();
        cache = new DoubleLinkedList();
        this.capacity = capacity;
    }

    /**
     * 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
     *
     * @param key 关键字
     * @return 关键字的值
     */
    public int get(int key) {
        if (!indexMap.containsKey(key)) {
            return -1;
        }
        makeRecently(key);
        return indexMap.get(key).value;
    }

    /**
     * @param key
     * @param value
     */
    public void put(int key, int value) {
        if (indexMap.containsKey(key)) {
            // 若key已存在，则先删除旧数据，然后插入新数据作为最近使用的数据
            delete(key);
            addRecently(key, value);
            return;
        }

        if (capacity == cache.size()) {
            // 若已达最大容量，则需先删除最久未使用的元素
            removeLeastRecently();
        }
        addRecently(key, value);
    }


    /**
     * 将某个 key 提升为最近使用的
     *
     * @param key 关键字
     */
    private void makeRecently(int key) {
        Node e = indexMap.get(key);
        // 先刪除节点，再重新插入到队尾
        cache.remove(e);
        cache.addLast(e);
    }

    /**
     * 添加最近使用的元素
     *
     * @param key 关键字
     * @param val 值
     */
    private void addRecently(int key, int val) {
        Node e = new Node(key, val);
        // 将元素添加到表尾，然后在map中维护索引
        cache.addLast(e);
        indexMap.put(key, e);
    }

    /**
     * 删除某一个 key
     *
     * @param key 关键字
     */
    private void delete(int key) {
        Node e = indexMap.get(key);
        // 先从链表中删除，再从map中删除
        cache.remove(e);
        indexMap.remove(key);
    }

    /**
     * 删除最久未使用的元素
     */
    private void removeLeastRecently() {
        // 链表头部的第一个元素就是最久未使用的
        // 从链表中删除最久未使用的节点，然后从索引map中移除索引
        Node deletedNode = cache.removeFirst();
        indexMap.remove(deletedNode.key);
    }
}

```









