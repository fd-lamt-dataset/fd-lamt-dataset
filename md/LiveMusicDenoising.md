# 现场音乐降噪数据集元数据

本仓库提供以下论文所述数据集的元数据：

> Live Music Denoising with Authentic Live Data and Track-Editing-Guided Semi-Supervised Learning.

该数据集为现场音乐降噪研究而构建。它基于 [Bilibili](https://www.bilibili.com/) 和 Archive.org 上可公开访问的现场录音，以支持真实现场噪声条件下的训练与基准评测。

## 发布范围

为避免直接再分发第三方现场录音，本次发布提供元数据而非音频。对于干净音乐片段，元数据包含每个现场录音的来源 URL、每个片段的起止时间戳以及片段时长。对于噪声数据，元数据包含用于采集纯观众噪声和环境噪声片段的现场录音来源 URL。

对于基准测试分区，本次发布提供基准噪声生成元数据。生成元数据记录复现基准噪声音轨所需的源噪声片段、目标干净音轨、放置区间、采样增益和生成预设。

## 数据集概览

| 分区 | 源录音 | 干净片段 | 元数据时长 | 报告时长 |
|---|---:|---:|---:|---:|
| 训练集 | 100 | 770 | 426.001876 分钟 | 426 分钟 |
| 基准测试集 | 46 | 308 | 199.515621 分钟 | 200 分钟 |
| 总计 | 146 | 1,078 | 625.517497 分钟 | 626 分钟 |

## 文件

- `metadata/source_urls.csv`：干净录音与噪声录音的来源级元数据。
- `metadata/clean_excerpts.csv`：干净音乐片段的片段级元数据。
- `metadata/benchmark_noise_generation_metadata_Normal.csv`：Normal 基准噪声条件的生成元数据。
- `metadata/benchmark_noise_generation_metadata_Strong.csv`：Strong 基准噪声条件的生成元数据。
- `metadata/benchmark_noise_generation_metadata_Extreme.csv`：Extreme 基准噪声条件的生成元数据。

[下载元数据（ZIP）](asset/downloads/live-music-denoising/metadata.zip)

## 元数据结构

### `metadata/source_urls.csv`

每行描述一个源录音。

| 列 | 说明 |
|---|---|
| `data_role` | `clean` 或 `noise`。 |
| `partition` | `train` 或 `benchmark`。 |
| `source_id` | Bilibili BV 标识符或 Archive.org 条目标识符。 |
| `source_type` | `bilibili`、`archive.org` 或其他来源标签。 |
| `source_reference` | 原始来源标识符或 URL。 |
| `source_url` | 源录音的公开 URL。 |

### `metadata/clean_excerpts.csv`

每行描述一个干净音乐片段。

| 列 | 说明 |
|---|---|
| `source_id` | Bilibili BV 标识符或 Archive.org 条目标识符。 |
| `source_type` | 来源平台类型。 |
| `source_reference` | 原始来源标识符或 URL。 |
| `source_url` | 源录音的公开 URL。 |
| `partition` | `train` 或 `benchmark`。 |
| `track` | 源录音中的音轨索引（如有）。 |
| `excerpt_index_within_source` | 同一源录音内从 1 开始的片段索引。 |
| `start_time_sec` | 片段起始时间戳，单位为秒。 |
| `end_time_sec` | 片段结束时间戳，单位为秒。 |
| `duration_sec` | 片段时长，单位为秒。 |

### `metadata/benchmark_noise_generation_metadata_<LEVEL>.csv`

每行描述一个噪声事件，用于重建某一强度级别的基准噪声音轨。

| 列 | 说明 |
|---|---|
| `preset` | 基准噪声级别：`Normal`、`Strong` 或 `Extreme`。 |
| `event_id` | 生成的基准噪声时间线中的事件索引。 |
| `target_clean_file` | 与生成的基准噪声音轨关联的干净音轨文件名。 |
| `target_clean_id` | 公开的干净音轨标识符。 |
| `target_clean_start_sec` | 噪声在目标干净音轨内的放置起始时间。 |
| `target_clean_end_sec` | 噪声在目标干净音轨内的放置结束时间。 |
| `overlap_duration_sec` | 按目标干净音轨边界裁剪后，放置的噪声事件时长。 |
| `noise_fragment_file` | 生成过程所选的中间噪声片段。 |
| `noise_source_file` | 分片前的原始本地源噪声文件名。 |
| `noise_source_id` | 源噪声录音的公开标识符。 |
| `noise_source_start_sec` | 在源噪声录音中采样的噪声区间起始时间。 |
| `noise_source_end_sec` | 在源噪声录音中采样的噪声区间结束时间。 |
| `fragment_rms` | 所选中间噪声片段的 RMS 值。 |
| `gain` | 应用于采样噪声事件的增益。 |

## 引用
```bibtex
@inproceedings{he2026live,
  title = {Live Music Denoising with Authentic Live Data and Track-Editing-Guided Semi-Supervised Learning},
  author = {He, Penghao and Luo, Xiankexin and Li, Wei},
  booktitle = {Proceedings of the 27th International Society for Music Information Retrieval Conference},
  year = {2026},
  address = {Abu Dhabi, UAE}
}
```
