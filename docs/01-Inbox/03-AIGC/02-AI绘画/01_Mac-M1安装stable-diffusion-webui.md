---
sidebar_label: Mac M1安装stable-diffusion-webui
tags:
  - AI绘画
---

# Mac M1安装stable-diffusion-webui

## 推荐阅读

- [官方GitHub仓库](https://github.com/AUTOMATIC1111/stable-diffusion-webui)
- [mac m1安装stable-diffusion-webui](https://www.cnblogs.com/m-bianbian/p/17298753.html)
- [【AI绘画】Mac安装stable-diffusion-webui绘制AI妹子保姆级教程](https://longbig.github.io/2023/02/26/AI%E7%BB%98%E7%94%BB-MAC%E5%AE%89%E8%A3%85Stable-Diffusion-webUI%E4%BF%9D%E5%A7%86%E7%BA%A7%E6%95%99%E7%A8%8B/)

## 一、Mac M1安装stable-diffusion-webui

### 1. 环境准备

#### 1.1 安装Git

进入 [git官网](https://git-scm.com/download/mac), 下载并安装最新版本git。

![image-20230421112526384](./images/01_Mac-M1安装stable-diffusion-webui/image-20230421112526384.png)

 

#### 1.2 安装 HomeBrew

参考：

- [cunkai/HomebrewCN](https://gitee.com/cunkai/HomebrewCN)
- [Homebrew国内如何自动安装（国内地址）（Mac & Linux）](https://zhuanlan.zhihu.com/p/111014448)

直接执行如下脚本安装 HomeBrew

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```



#### 1.3 安装运行环境

执行如下命令，来安装 stable diffusion 运行所需的环境

```bash
brew update
brew install cmake protobuf rust python@3.10 git wget
```

在这一步，如果出现提示 `Warning: No remote 'origin' in /opt/homebrew/Library/Taps/homebrew/homebrew-cask`



```bash
git config --global --add safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-cask
git config --global --add safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-core
git config --global --add safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-services
```





### 2. 下载stable-diffusion-webui

```bash
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
```

### 3. 下载模型

可以从[Hugging Face](https://huggingface.co/models?pipeline_tag=text-to-image&sort=downloads)下载 Stable Diffusion 模型.

```bash
## 1. 以stable-diffusion-v1-5为例，点击下面链接去往模型首页
https://huggingface.co/runwayml/stable-diffusion-v1-5/tree/main

## 2. 单击标题 Files and versions
Files and versions

## 3. 下载扩展名为“.ckpt”或“.safetensors”的文件
v1-5-pruned.ckpt
```

![image-20230420001947207](./images/01_Mac-M1安装stable-diffusion-webui/image-20230420001947207.png)

### 4. 将下载的模型放入指定目录

模型目录：stable-diffusion-webui/models/Stable-diffusion/

如下图所示，将下载的模型放入模型目录

![image-20230420022105716](./images/01_Mac-M1安装stable-diffusion-webui/image-20230420022105716.png)

### 5. 运行

运行如下命令，即可启动 stable-diffusion

```bash
./webui.sh
```

![image-20230420022233950](./images/01_Mac-M1安装stable-diffusion-webui/image-20230420022233950.png)

### 6. 打开浏览器

启动成功后，日志中会打印前端页面的访问地址：

![image-20230420023425945](./images/01_Mac-M1安装stable-diffusion-webui/image-20230420023425945.png)

将此地址输入到浏览器中进行访问

> [http://127.0.0.1:7860/](http://127.0.0.1:7860/)

出现下图页面，然后就可以输入提示词进行图片生成了

![image-20230420024732416](./images/01_Mac-M1安装stable-diffusion-webui/image-20230420024732416.png)

