---
sidebar_label: 提示词工程师指南
tags:
  - ChatGpt
  - AIGC
---
# 提示词工程师指南

## 推荐阅读

其他：

- [ChatGPT是什么?](https://www.w3cschool.cn/openai_doc/openai_doc-5r4o3rob.html)
- [ChatGPT 提示的艺术：制作清晰有效咒语](https://github.com/wikieden/Awesome-ChatGPT-Prompts-CN/blob/main/ChatGpt-receipt.md)
- [【ChatGPT】一文教你怎么编写清晰有效的（Prompt）提示词~](https://juejin.cn/post/7215536461478707258)
- [【2023】猫娘方法持续讨论更新](https://github.com/PlexPt/awesome-chatgpt-prompts-zh/issues/12)
- [解除封印咒语](https://github.com/PlexPt/awesome-chatgpt-prompts-zh/blob/main/cat.md)
- [写好ChatGPT提示词的10个技巧](https://www.niaogebiji.com/article-553890-1.html)
- [在 ChatGPT 中构建虚拟机](https://www.w3cschool.cn/openai_doc/openai_doc-gr643rkm.html)

## 提示词参考

提示词网站：

> - [rockbenben/ChatGPT-Shortcut](https://github.com/rockbenben/ChatGPT-Shortcut)：Maximize your efficiency and productivity. 让生产力加倍的 ChatGPT 快捷指令，按照领域和功能分区，可对提示词进行标签筛选、关键词搜索和一键复制。

提示词开源项目：

> * [f/awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts)

## 提示词教程

> * [datawhalechina/prompt-engineering-for-developers](https://github.com/datawhalechina/prompt-engineering-for-developers)
> * [AIGC - ChatGPT从入门到应用](https://datawhaler.feishu.cn/docx/MNHBdr7hqoEdNexMoi2cbYpcnTe)
> * [dair-ai/Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide)

## 一、提示词概述

## 二、提示原则

### 1.清晰明确的指令

#### 1.1 使用分隔符

> - 你可以使用任何明显的标点符号将特定的文本部分与提示的其余部分分开。这可以是任何可以使模型明确知道这是一个单独部分的标记。
> - 使用分隔符是一种可以避免提示注入的有用技术。

#### 1.2 结构化的输出

> * 要求生成一个结构化的输出，这可以使模型的输出更可读，或更容易被我们解析。
> * Json、表格等

#### 1.3 **要求模型检查是否满足条件**

如果任务做出的假设不一定满足，我们可以告诉模型先检查这些假设，如果不满足，指示并停止执行。你还可以考虑潜在的边缘情况以及模型应该如何处理它们，以避免意外的错误或结果。

#### 1.4 提供少量示例

即在要求模型执行实际任务之前，提供给它少量成功执行任务的示例。

### 2.给模型时间去思考

如果模型匆忙地得出了错误的结论，您应该尝试重新构思查询，请求模型在提供最终答案之前进行一系列相关的推理。换句话说，如果您给模型一个在短时间或用少量文字无法完成的任务，它可能会猜测错误。

#### 2.1 **指定完成任务所需的步骤**

将复杂任务拆分成多个多个步骤

#### **2.2 指导模型在下结论之前找出一个自己的解法**







## 二、如何写好提示词

提示词的基本原则

提示词基本公式：时间、地点、人物、背景、目标、任务
