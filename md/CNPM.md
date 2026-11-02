# CNPM

CNPM（Chinese National Pentatonic Mode Dataset）是中国民族五声调式数据集，覆盖宫、商、角、徵、羽五类调式，用于音乐信息检索、音频分类和音乐调式分类。

## 研究背景

中国民族五声调式以宫、商、角、徵、羽五个音为核心，是中国传统音乐的重要组成部分。论文采用的现代民族五声调式理论由 20 世纪的中国音乐家结合中西方音乐理论提出，可用于分析大部分传统中国音乐，但并非适用于所有中国音乐类型。

CNPM 面向音频中的中国民族五声调式自动识别任务构建。相关研究将音乐领域知识与残差卷积神经网络结合，从频谱图中识别同宫系统、主音音高、调式类别和音阶类型，并比较单任务、多任务模型与模板匹配基线。

### 理论背景与古代音乐体系

在中国古代，三分损益律是生成音阶的基础，常见的雅乐、燕乐和清乐音阶均在此基础上产生。唐宋时期的二十八调、八十四调等系统调式理论也以三分损益律为基础；现代民族五声调式理论没有吸收这些唐宋音乐调式体系。

古代的“律”用于表达音的绝对音高标准。古代文献和出土的汉代无射律管表明，中国宫廷音乐曾有探索黄钟绝对音高的传统；根据作者的补充说明，这一传统在古代宫廷衰落后未能延续，宫廷音乐的绝对音高标准也未在民间应用。

## 数据集信息

| 项目 | 内容 |
| --- | --- |
| 数据集名称 | CNPM |
| 英文全称 | Chinese National Pentatonic Mode Dataset |
| 录音数量 | 287 条 |
| 总时长 | 51,517.97 秒，约 858.63 分钟 |
| 平均时长 | 179.51 秒 |
| 最短 / 最长录音 | 15.41 秒 / 778.01 秒 |
| 调式 | 宫、商、角、徵、羽 |
| 语言 | 中文、英文 |
| 数据集许可证 | CC BY-NC-ND 4.0 |

## 如何理解调式标签

一个完整的民族调式名称可以分为主音音高、调式类别和音阶类型三个部分；同宫系统则表示该调式中“宫”音所在的音高。

- **主音音高（Tonic）**：调式主音的音高，用 C、D、E 等音名表示。
- **调式类别（Pattern）**：按主音的阶名区分为宫、商、角、徵、羽。例如，宫调式以宫音为主音，商调式以商音为主音。
- **音阶类型（Type）**：五声、六声（清角）、六声（变宫）、七声雅乐、七声清乐、七声燕乐，共六类。不同类型包含的音级组合不同。
- **同宫系统（Tonggong System）**：两个调式的宫音音高相同时，它们属于同一个同宫系统。

例如，C 宫调式和 D 宫调式具有相同的调式类别，但主音音高不同；C 宫调式、D 商调式、E 角调式、G 徵调式和 A 羽调式都属于 C 同宫系统。主音音高、调式类别和同宫系统相互关联，已知其中两项可以推得第三项。

将 12 个主音音高、5 种调式类别和 6 种音阶类型组合，理论上可得到 360 种调式；这里描述的是理论组合，并非数据集中各类别的样本数量。

## 数据组织与标注

| 子集 | 内容 | 数据划分 |
| --- | --- | --- |
| `default` | 整段录音、Mel 频谱图及调式标签 | 仅 `train` |
| `eval` | 20 秒音频切片，不足 20 秒的片段补零；Mel、CQT、Chroma 频谱图 | `train` / `validation` / `test` |

标签包括同宫系统、调式主音、调式类别、音阶类型和调式中文名称。

### 同宫系统与主音

| 音高 | C | ♯C/♭D | D | ♯D/♭E | E | F | ♯F/♭G | G | ♯G/♭A | A | ♯A/♭B | B |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 标签 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |

### 调式类别

| 调式 | 宫（Gong） | 商（Shang） | 角（Jue） | 徵（Zhi） | 羽（Yu） |
| --- | --- | --- | --- | --- | --- |
| 标签 | 0 | 1 | 2 | 3 | 4 |

### 音阶类型

| 类型 | 五声 | 六声（清角） | 六声（变宫） | 七声雅乐 | 七声清乐 | 七声燕乐 |
| --- | --- | --- | --- | --- | --- | --- |
| 标签 | 0 | 1 | 2 | 3 | 4 | 5 |

## 数据集样例 / Demo

| 调式类别 | 曲目 / 来源文件 | 同宫系统 | 主音 | 调式标注 | 时长 | 试听 / 来源 |
| --- | --- | --- | --- | --- | --- | --- |
| 宫 | 仙翁操 / 龚一 | C | C | C宫六声加清角 | 57.131 秒 | [网易云音乐](https://music.163.com/#/song?id=34033640) |
| 商 | `商7.wav` | G | A | A商七声清乐 | 15.437 秒 | <audio controls preload="none" src="asset/samples/cnpm/shang_shortest.wav"></audio> |
| 角 | `角21.wav` | F | A | A角六声加变宫 | 15.413 秒 | <audio controls preload="none" src="asset/samples/cnpm/jue_shortest.wav"></audio> |
| 徵 | 满江红 / 胡思琴 | E | B | B徵五声 | 123.064 秒 | [网易云音乐](https://music.163.com/#/song?id=478236699) |
| 羽 | 采茶调 / 龚一 | F | D | D羽五声调式 | 60.396 秒 | [网易云音乐](https://music.163.com/#/song?id=34033639) |

## 数据获取与使用

<p><a class="metadata-download" href="https://huggingface.co/datasets/ccmusic-database/CNPM" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Hugging Face 数据集主页</a></p>

访问数据文件需在 Hugging Face 登录并接受数据集访问条件。国内镜像：[ModelScope](https://www.modelscope.cn/datasets/ccmusic-database/CNPM)。

```python
from datasets import load_dataset

ds = load_dataset(
    "ccmusic-database/CNPM",
    name="default",  # default / eval
    split="train",  # default 仅包含 train
    token="Your_Access_Token",
)
```

## 相关论文与引用

- [Automatic Chinese National Pentatonic Modes Recognition Using Convolutional Neural Network](https://archives.ismir.net/ismir2022/paper/000041.pdf)（ISMIR 2022）
- [CNPM Database: A Chinese National Pentatonic Modulation Database for Computational Musicology](https://kns.cnki.net/kcms2/article/abstract?v=lD5CuVSaeOtw0E2oWliKSMrLiLDt9iwvkwoTgSclPspwUECyt4uNZ6T7DCLlfwMqohXCQXkFzf_XjAUOQ3CAkhPqNj20H8eG9UfUVuHEey0x7Kqp32fMlJiM9xuPtdVMvC1PB2qW0qI=&uniplatform=NZKPT&src=copy)（2022）

```bibtex
@inproceedings{WangCYMLX022,
  author    = {Zhaowen Wang and Mingjin Che and Yue Yang and Wenwu Meng and Qinyu Li and Fan Xia and Wei Li},
  title     = {Automatic Chinese National Pentatonic Modes Recognition Using Convolutional Neural Network},
  booktitle = {Proceedings of the 23rd International Society for Music Information Retrieval Conference, ISMIR 2022, Bengaluru, India, December 4-8, 2022},
  pages     = {345-352},
  year      = {2022}
}
```
