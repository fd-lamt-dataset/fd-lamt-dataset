# GuzhengTech99

GuzhengTech99 是用于帧级古筝演奏技法检测的数据集。古筝独奏中可能同时出现重叠或混合技法，因此相关研究将检测任务建模为帧级多标签分类。

## 数据集信息

| 项目 | 内容 |
| --- | --- |
| 录音数量 | 99 首古筝独奏 |
| 录制方式 | 专业演奏者在录音室录制 |
| 总时长 | 9,064.6 秒，约 151.08 分钟 |
| 采样率 | 44,100 Hz |
| 技法类别 | 7 类 |
| 训练 / 验证 / 测试 | 79 / 10 / 10 首 |
| 数据集许可证 | CC BY-NC-ND 4.0 |

## 演奏技法与标注

每个音符提供起始时间（`onset_time`）、结束时间（`offset_time`）、演奏技法（`IPT`）和音高（`note`）。下表为 Hugging Face 整合版本的类别编号。

| 编号 | 技法 | 英文标签 |
| --- | --- | --- |
| 0 | 颤音 | Vibrato |
| 1 | 拨弦 | Plucks |
| 2 | 上滑 | Upward Portamento |
| 3 | 下滑 | Downward Portamento |
| 4 | 花指 / 刮奏 / 连抹 / 连托 | Glissando |
| 5 | 摇指 | Tremolo |
| 6 | 点音 | Point Note |

## 数据集样例 / Demo

| 来源文件 | 数据划分 | 时长 | 试听 | 标注 |
| --- | --- | --- | --- | --- |
| `104.flac` | 训练集 | 32.888 秒 | <audio controls preload="none" src="asset/samples/guzhengtech99/104.flac"></audio> | <a href="asset/samples/guzhengtech99/104.csv" download>下载 CSV</a> |
| `16.flac` | 验证集 | 50.387 秒 | <audio controls preload="none" src="asset/samples/guzhengtech99/16.flac"></audio> | <a href="asset/samples/guzhengtech99/16.csv" download>下载 CSV</a> |
| `58.flac` | 测试集 | 45.268 秒 | <audio controls preload="none" src="asset/samples/guzhengtech99/58.flac"></audio> | <a href="asset/samples/guzhengtech99/58.csv" download>下载 CSV</a> |

## 数据获取

<p><a class="metadata-download" href="https://huggingface.co/datasets/ccmusic-database/Guzheng_Tech99" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Hugging Face 数据集主页</a></p>

国内镜像：[ModelScope](https://www.modelscope.cn/datasets/ccmusic-database/Guzheng_Tech99)。[项目主页](https://lidcc.github.io/GuzhengTech99/) · [代码仓库](https://github.com/LiDCC/GuzhengTech99)

## 相关论文与引用

[Frame-Level Multi-Label Playing Technique Detection Using Multi-Scale Network and Self-Attention Mechanism](https://arxiv.org/abs/2303.13272)（ICASSP 2023）

```bibtex
@inproceedings{LiCMWYXL23,
  author = {Dichucheng Li and Mingjin Che and Wenwu Meng and Yulun Wu and Yi Yu and Fan Xia and Wei Li},
  title = {Frame-Level Multi-Label Playing Technique Detection Using Multi-Scale Network and Self-Attention Mechanism},
  booktitle = {IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  pages = {1-5},
  year = {2023}
}
```
