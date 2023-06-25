---
sidebar_label: 开源LLM调研
tags:
  - ChatGpt
  - AIGC
---
# 开源LLM调研

## 推荐阅读



| 模型名称       | 模型架构                                                     | 参数量         | 训练/微调框架                                             | 训练细节                                                     | 微调代码是否开源(SFT或RLHF) | 应用场景(如有)                                               | 参考资料                                                     | 备注                                                         |
| -------------- | ------------------------------------------------------------ | -------------- | --------------------------------------------------------- | ------------------------------------------------------------ | --------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| LLaMa          | Transformer+Pre-Normalization+SwiGLU Activation+Rotary Positional Embedding | 7B/13B/33B/65B | torch+fairscale                                           | 数据量：1.4 Trillion Tokens运算量：2048 A100*21天            | 否                          |                                                              | - https://github.com/facebookresearch/llama - https://arxiv.org/pdf/2302.13971.pdf | 模型权重见 https://huggingface.co/decapoda-research          |
| Alpaca         | 同LLaMa                                                      | 7B             | torch                                                     | 数据量：52K self-instruct data by text-davinci-003运算量：8 A100*3小时 | 是，SFT                     |                                                              | https://github.com/tatsu-lab/stanford_alpaca                 | Instruct Following数据也开源                                 |
| Alpaca-Lora    | 同LLaMa                                                      | 7B             | torch+LoRA                                                | 数据量：同Alpaca运算量：1 RTX4090*24小时                     | 是，SFT                     | 自动生成论文标题：https://github.com/WangRongsheng/ChatGenTitle | https://github.com/tloen/alpaca-lora                         |                                                              |
| Vicuna         | 同LLaMa                                                      | 7B/13B         | torch+FlashAttention+`FSDP`                               | 数据量：70K conversation gathered by ShareGPT.com运算量：8 A 100*1天 | 是，SFT                     | 基于私域数据的问答/自动生成SQL语句：https://github.com/csunny/DB-GPT | https://github.com/lm-sys/FastChat                           | 提供了基于Uvicorn的前端交互界面，但Instruct Following数据不开源评估方法采用GPT-4，https://lmsys.org/vicuna_eval/提供了分布式模型部署架构AlpaServehttps://huggingface.co/datasets/anon8231489123/ShareGPT_Vicuna_unfiltered/tree/main/HTML_cleaned_raw_dataset |
| Vicuna         | 同LLaMa                                                      | 7B/13B         | torch+FlashAttention+`FSDP`                               | 数据量：70K conversation gathered by ShareGPT.com运算量：8 A 100*1天 | 是，SFT                     | 基于私域数据的问答/自动生成SQL语句：https://github.com/csunny/DB-GPT | https://github.com/lm-sys/FastChat                           | 提供了基于Uvicorn的前端交互界面，但Instruct Following数据不开源评估方法采用GPT-4，https://lmsys.org/vicuna_eval/提供了分布式模型部署架构AlpaServehttps://huggingface.co/datasets/anon8231489123/ShareGPT_Vicuna_unfiltered/tree/main/HTML_cleaned_raw_dataset |
| Vicuna         | 同LLaMa                                                      | 7B/13B         | torch+FlashAttention+`FSDP`                               | 数据量：70K conversation gathered by ShareGPT.com运算量：8 A 100*1天 | 是，SFT                     | 基于私域数据的问答/自动生成SQL语句：https://github.com/csunny/DB-GPT | https://github.com/lm-sys/FastChat                           | 提供了基于Uvicorn的前端交互界面，但Instruct Following数据不开源评估方法采用GPT-4，https://lmsys.org/vicuna_eval/提供了分布式模型部署架构AlpaServehttps://huggingface.co/datasets/anon8231489123/ShareGPT_Vicuna_unfiltered/tree/main/HTML_cleaned_raw_dataset |
| Open Assistant | Pythia / LLaMa                                               | 7B/12B/30B     | torch+deepspeed+flash_att+triton+trlx                     | 数据量：/运算量：/                                           | 是，SFT+RLHF                |                                                              | https://github.com/LAION-AI/Open-Assistant                   | 开源1w+个多语言的多轮对话数据，https://huggingface.co/datasets/OpenAssistant/oasst1开源完整的SFT、RW、RL三阶段代码开源基于DeBERTa的Reward模型和多个经过RLHF的模型，https://huggingface.co/OpenAssistant |
| BLOOM          | BLOOM（Megatron-LM+ALiBi Position Embedding+Embedding LN）   | 176B           | torch+apex+deepspeed                                      | 数据量：1.6TB运算量：384 A100*105天                          | 否                          |                                                              | https://huggingface.co/bigscience/bloomhttps://arxiv.org/pdf/2211.05100.pdf | BLOOM为基础模型，BLOOMZ为指令微调模型，支持59个语言开源各任务的prompt，https://github.com/bigscience-workshop/promptsource/tree/eval-hackathon开源llm评测工具，https://github.com/bigscience-workshop/lm-evaluation-harness |
| BLOOMZ         | BLOOM                                                        | 3B/7B/176B     | torch+apex+deepspeed                                      | 数据量：2.1B的token运算量：384 A100                          | 是，SFT                     |                                                              | https://github.com/bigscience-workshop/xmtf#bloomzhttps://arxiv.org/pdf/2211.01786.pdf | 开源46种语言13种任务的指令集xP3详细比较了三种场景，EN prompt+EN task，EN prompt+Multilingual task, Multilingual prompt+Multilingual taskpaper中提供了大量NLU任务的prompt，具有参考意义 |
| chatGLM        | GLM（Transformer+LayerNorm&Residual Rearrange+GeLU ）        | 6B/130B        | torch+accelerate（P-Tuning）/ torch+deepspeed（Finetune） | 数据量：1 trillion tokens运算量：/                           | 否，只有继续微调的代码      | 中文LangChain知识库问答：https://github.com/yanqiangmiffy/Chinese-LangChain基于ChatGLM+StableDifussion的图片生成：https://github.com/LemonQu-GIT/ChatGLM-6B-Engineering学术助手：https://github.com/binary-husky/gpt_academic | https://github.com/THUDM/ChatGLM-6Bhttps://chatglm.cn/blog   | 130B的基础模型开源，SFT模型已商用但不开源支持多轮对话的能力，通过history进行传递官方称开源模型有RLHF的加持，但未开源该部分代码和数据另有开源的多模态模型，https://github.com/THUDM/VisualGLM-6B |
|                |                                                              |                |                                                           |                                                              |                             |                                                              |                                                              |                                                              |



参考资料：

1、https://medium.com/geekculture/list-of-open-sourced-fine-tuned-large-language-models-llm-8d95a2e0dc76

2、https://github.com/chenking2020/FindTheChatGPTer

3、https://github.com/shm007g/LLaMA-Cult-and-More/blob/main/chart.md

4、https://github.com/Hannibal046/Awesome-LLM
