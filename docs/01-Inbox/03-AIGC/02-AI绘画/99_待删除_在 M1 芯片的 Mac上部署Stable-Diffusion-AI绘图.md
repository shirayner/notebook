---
sidebar_label: 【待删除】在 M1 芯片的 Mac 上部署 Stable Diffusion AI 绘图
tags:
  - Flink
---

# 在 M1 芯片的 Mac 上部署 Stable Diffusion AI 绘图

## 推荐阅读

- [在 M1 芯片的 Mac 上部署 Stable Diffusion AI 绘图｜小骏不抬杠](https://www.bilibili.com/video/BV1qP4y1i7BQ/?spm_id_from=333.788.recommend_more_video.0&vd_source=d66f3e43ed42fd49ea4048c161e94c53)
- [如何在mac电脑本地运行stable diffusion做AI绘画](https://zhuanlan.zhihu.com/p/577586684)
- [如何在你的 M1/M2 Mac 本地运行 Stable Diffusion？](https://sspai.com/post/75682)

## 一、环境准备

### 1.安装Git

进入 [git官网](https://git-scm.com/download/mac), 下载最新版本git。

### 2.安装conda

参考：

- [Conda 是什么？干嘛用的？](https://www.quanxiaoha.com/conda/what-is-conda.html)
- [.condarc（conda 配置文件）、换国内源](https://www.cnblogs.com/sddai/p/10234075.html)

（1）下载并安装conda
参考：[Conda 安装（MacOS 系统）](https://www.quanxiaoha.com/conda/mac-install-conda.html)

打开如下地址，进入官网，然后下载 `Miniconda3 macOS Apple M1 64-bit pkg` 安装程序, 然后运行安装程序，一路Next即可。
> [https://docs.conda.io/en/latest/miniconda.html](https://docs.conda.io/en/latest/miniconda.html)

运行如下命令，如果输出版本号，则说明安装成功

```bash
conda --version
```

（2）设置国内软件源
参考：[Conda 换源（国内清华源）](https://www.quanxiaoha.com/conda/conda-update-channel.html)

(3) conda 常用命令

```bash
# 显示本地虚拟环境列表
conda info -e

# 删除名称为 EnvName 的这个环境
conda remove -n EnvName --all
```

(4) pip 设置国内软件源

参考：[pip 使用国内镜像源](https://www.runoob.com/w3cnote/pip-cn-mirror.html)

升级pip

```bash
pip install --upgrade pip
```

(5) 安装rust

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

刷新环境变量

```bash
source "$HOME/.cargo/env"
```

## 二、在 M1 芯片的 Mac 上部署 Stable Diffusion AI 绘图

参考：

- [在 M1 芯片的 Mac 上部署 Stable Diffusion AI 绘图](https://www.bilibili.com/read/cv20728510)

### 1. 下载 Stable Diffusion

前往 Stable Diffusion 的代码仓库 [https://github.com/bfirsh/stable-diffusion](https://github.com/bfirsh/stable-diffusion)，克隆到本地，并切换到 apple-silicon-mps-support 这个分支。

```bash
# 克隆仓库
git clone https://github.com/bfirsh/stable-diffusion
# 切换分支
git checkout apple-silicon-mps-support
```

### 2. 创建并激活虚拟环境

```bash
# 创建虚拟环境  
# 一定要在 stable-diffusion 目录下面执行
conda env create -f environment-mac.yaml
# 激活虚拟环境
conda activate ldm
```

conda remove -n ldm --all