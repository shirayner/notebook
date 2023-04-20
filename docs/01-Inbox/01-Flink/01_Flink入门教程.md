---
sidebar_label: Flink 入门教程
tags:
  - Flink
---


# Flink 入门教程

## 推荐阅读

精选资料：

> - [heibaiying/BigData-Notes](https://github.com/heibaiying/BigData-Notes)

推荐阅读：

> - [基于 DataStream API 实现欺诈检测](https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/try-flink/datastream/)
> - [不一样的Flink入门教程](https://segmentfault.com/a/1190000038292061)

其他：

> - [Flink——原理与实战：AggregateFunction](https://blog.csdn.net/duxu24/article/details/105746110)
> - [Flink学习笔记-WindowsFunction（篇二）](https://blog.51cto.com/u_12270378/2809636)
> - [Flink Window那些事——ProcessWindowFunction/ProcessAllWindowFunction](https://www.cnblogs.com/linjiqin/p/12591729.html)
> - [Storm 1.1.0 中文文档](https://storm.apachecn.org/#/docs/2)
> - [storm group 的介绍与使用](https://www.cnblogs.com/MrRightZhao/p/11066077.html)

## 一、Flink基本概念

Flink 的AggregateFunction是一个基于中间计算结果状态进行增量计算的函数。由于是迭代计算方式，所以，在窗口处理过程中，不用缓存整个窗口的数据，所以效率执行比较高。

该函数会将给定的聚合函数应用于每个窗口和键。 对每个元素调用聚合函数，以递增方式聚合值，并将每个键和窗口的状态保持在一个累加器中。

Flink dataStream api

Flink dataSet api

Flink table api
