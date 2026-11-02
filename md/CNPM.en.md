# CNPM

CNPM (Chinese National Pentatonic Mode Dataset) covers five modes: Gong, Shang, Jue, Zhi, and Yu. Tasks include music information retrieval, audio classification, and music mode classification.

## Research Background

Chinese national pentatonic modes center on the five tones Gong, Shang, Jue, Zhi, and Yu and are an important part of traditional Chinese music. The modern theory used in the paper was proposed by Chinese musicians in the twentieth century by combining Chinese and Western music theories. It applies to most traditional Chinese music pieces, but not every type of Chinese music.

CNPM was constructed for automatic recognition of Chinese national pentatonic modes from audio. The associated research combines musical domain knowledge with residual convolutional neural networks to identify the Tonggong system, tonic pitch, mode pattern, and scale type from spectrograms, comparing single-task and multi-task models with a template-matching baseline.

### Theoretical Background and Ancient Musical Systems

In ancient China, Sanfen Sunyi Lü was the basis for generating scales, including the common Yayue, Yanyue, and Qingyue scales. Systematic theories such as the twenty-eight modes and eighty-four modes of the Tang and Song dynasties also developed from this tuning system. The modern national pentatonic mode theory did not incorporate these Tang and Song modal systems.

Ancient Lü expressed absolute pitch standards. Ancient records and an excavated Han-dynasty Wuyi pitch pipe indicate a court-music tradition of investigating the absolute pitch of Huangzhong. According to the authors' supplementary notes, this tradition did not continue after the decline of the ancient court, and the court's absolute pitch standards were not applied in folk music.

## Dataset Information

| Item | Content |
| --- | --- |
| Dataset | CNPM |
| Full name | Chinese National Pentatonic Mode Dataset |
| Recordings | 287 |
| Total duration | 51,517.97 seconds, approximately 858.63 minutes |
| Mean duration | 179.51 seconds |
| Minimum / maximum duration | 15.41 seconds / 778.01 seconds |
| Modes | Gong, Shang, Jue, Zhi, Yu |
| Languages | Chinese, English |
| Dataset license | CC BY-NC-ND 4.0 |

## Understanding the Mode Labels

A complete national mode name has three components: tonic pitch, mode pattern, and scale type. The Tonggong system identifies the pitch of Gong within the mode.

- **Tonic pitch (Tonic)**: the pitch of the tonic, expressed with pitch names such as C, D, and E.
- **Mode pattern (Pattern)**: Gong, Shang, Jue, Zhi, or Yu, determined by the step name of the tonic. For example, a Gong mode uses Gong as its tonic, while a Shang mode uses Shang.
- **Scale type (Type)**: pentatonic, hexatonic (Qingjue), hexatonic (Biangong), heptatonic Yayue, heptatonic Qingyue, or heptatonic Yanyue. These six types contain different combinations of scale steps.
- **Tonggong system (Tonggong System)**: two modes belong to the same Tonggong system when their Gong tones have the same pitch.

For example, C Gong and D Gong have the same mode pattern but different tonic pitches. C Gong, D Shang, E Jue, G Zhi, and A Yu all belong to the C Tonggong system. Tonic pitch, mode pattern, and Tonggong system are related: knowing any two allows the third to be inferred.

Combining 12 tonic pitches, 5 mode patterns, and 6 scale types gives 360 theoretically possible modes. This is a theoretical combination, not the number of samples in each dataset category.

## Data Organization and Annotations

| Subset | Content | Splits |
| --- | --- | --- |
| `default` | Full recordings, Mel spectrograms, and mode labels | `train` only |
| `eval` | 20-second audio segments, zero-padded when shorter; Mel, CQT, and chroma spectrograms | `train` / `validation` / `test` |

Labels cover the Tonggong system, tonic, mode pattern, scale type, and Chinese mode name.

### Tonggong System and Tonic

| Pitch | C | ♯C/♭D | D | ♯D/♭E | E | F | ♯F/♭G | G | ♯G/♭A | A | ♯A/♭B | B |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Label | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |

### Mode Pattern

| Pattern | Gong (宫) | Shang (商) | Jue (角) | Zhi (徵) | Yu (羽) |
| --- | --- | --- | --- | --- | --- |
| Label | 0 | 1 | 2 | 3 | 4 |

### Scale Type

| Type | Pentatonic | Hexatonic (Qingjue) | Hexatonic (Biangong) | Heptatonic Yayue | Heptatonic Qingyue | Heptatonic Yanyue |
| --- | --- | --- | --- | --- | --- | --- |
| Label | 0 | 1 | 2 | 3 | 4 | 5 |

## Dataset Examples / Demo

These examples are the shortest complete recordings in the Shang and Jue classes of `default/train`. Source filenames and mode annotations are retained.

| Mode pattern | Source file | Tonggong system | Tonic | Mode annotation | Duration | Recorded audio |
| --- | --- | --- | --- | --- | --- | --- |
| Shang | `商7.wav` | G | A | A Shang, heptatonic Qingyue | 15.437 s | <audio controls preload="none" src="asset/samples/cnpm/shang_shortest.wav"></audio> |
| Jue | `角21.wav` | F | A | A Jue, hexatonic (Biangong) | 15.413 s | <audio controls preload="none" src="asset/samples/cnpm/jue_shortest.wav"></audio> |

## Public Tracks and Source Metadata

For Gong, Yu, and Zhi, this site provides metadata and public platform pages only, without original audio or direct audio-stream links. Excerpt timestamps are omitted for now; section labels are absent from the available annotations and are not filled in.

Metadata cover 193 recordings. Public NetEase Cloud Music song pages have been matched to 24 entries by title and artist; other source links remain pending. These matches do not verify that the current platform version is identical to the dataset recording. Durations below refer to dataset recordings, not excerpt boundaries.

<p><a class="metadata-download" href="asset/downloads/cnpm/recordings.csv" download><i class="fa-solid fa-download" aria-hidden="true"></i> Download track metadata (CSV)</a></p>

### Statistics

| Mode pattern | Recordings | Total recording duration (minutes) | Source pages matched |
| --- | ---: | ---: | ---: |
| Gong | 82 | 290.60 | 8 |
| Yu | 59 | 227.70 | 10 |
| Zhi | 52 | 192.23 | 6 |
| Total | 193 | 710.53 | 24 |

### Matched Public Sources

<details class="cnpm-source-group" open><summary>Gong · 8 recordings</summary>
<table class="cnpm-source-table">
<thead><tr><th>Track / Artist</th><th>Platform source</th><th>Mode annotation</th><th>Recording duration</th></tr></thead>
<tbody>
<tr><td><strong>梅花三弄 (古筝独奏)</strong><br><span class="cnpm-source-artist">项斯华</span></td><td><a href="https://music.163.com/#/song?id=520568427" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>D宫五声调式</td><td>05:53.506</td></tr>
<tr><td><strong>长门怨</strong><br><span class="cnpm-source-artist">龚一</span></td><td><a href="https://music.163.com/#/song?id=34033650" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>F宫清乐</td><td>05:45.836</td></tr>
<tr><td><strong>关山月</strong><br><span class="cnpm-source-artist">赵晓霞古琴</span></td><td><a href="https://music.163.com/#/song?id=393671" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>F宫五声调式</td><td>02:16.047</td></tr>
<tr><td><strong>小白杨</strong><br><span class="cnpm-source-artist">阎维文</span></td><td><a href="https://music.163.com/#/song?id=5271259" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>F宫五声调式</td><td>02:51.547</td></tr>
<tr><td><strong>风雷引</strong><br><span class="cnpm-source-artist">龚一</span></td><td><a href="https://music.163.com/#/song?id=34033644" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>C宫五声调式</td><td>03:02.649</td></tr>
<tr><td><strong>竹楼情歌</strong><br><span class="cnpm-source-artist">哏德全</span></td><td><a href="https://music.163.com/#/song?id=88875" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>F宫五声</td><td>04:15.270</td></tr>
<tr><td><strong>沧海一声笑</strong><br><span class="cnpm-source-artist">张晓红</span></td><td><a href="https://music.163.com/#/song?id=340868" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>A宫五声调式</td><td>03:49.373</td></tr>
<tr><td><strong>仙翁操</strong><br><span class="cnpm-source-artist">龚一</span></td><td><a href="https://music.163.com/#/song?id=34033640" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>C宫六声加清角</td><td>00:57.131</td></tr>
</tbody></table>
</details>

<details class="cnpm-source-group"><summary>Yu · 10 recordings</summary>
<table class="cnpm-source-table">
<thead><tr><th>Track / Artist</th><th>Platform source</th><th>Mode annotation</th><th>Recording duration</th></tr></thead>
<tbody>
<tr><td><strong>映山红</strong><br><span class="cnpm-source-artist">龚一</span></td><td><a href="https://music.163.com/#/song?id=34033638" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>D羽五声</td><td>01:35.008</td></tr>
<tr><td><strong>闲趣</strong><br><span class="cnpm-source-artist">龚一</span></td><td><a href="https://music.163.com/#/song?id=34033636" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>D羽六声加清角</td><td>01:51.988</td></tr>
<tr><td><strong>平沙落雁</strong><br><span class="cnpm-source-artist">管平湖</span></td><td><a href="https://music.163.com/#/song?id=88137" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>bE羽五声</td><td>06:49.209</td></tr>
<tr><td><strong>睡莲(中阮独奏)</strong><br><span class="cnpm-source-artist">徐阳</span></td><td><a href="https://music.163.com/#/song?id=315687" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>D羽六声加变宫</td><td>06:07.048</td></tr>
<tr><td><strong>采茶调</strong><br><span class="cnpm-source-artist">龚一</span></td><td><a href="https://music.163.com/#/song?id=34033639" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>D羽五声调式</td><td>01:00.396</td></tr>
<tr><td><strong>极乐吟</strong><br><span class="cnpm-source-artist">陈雷激</span></td><td><a href="https://music.163.com/#/song?id=73409" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>G羽五声</td><td>02:17.510</td></tr>
<tr><td><strong>春晓吟</strong><br><span class="cnpm-source-artist">龚一</span></td><td><a href="https://music.163.com/#/song?id=34033647" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>D羽五声调式</td><td>04:21.069</td></tr>
<tr><td><strong>枉凝眉</strong><br><span class="cnpm-source-artist">刘宽忍</span></td><td><a href="https://music.163.com/#/song?id=131524" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>D羽七声清乐</td><td>05:31.234</td></tr>
<tr><td><strong>拉纤歌</strong><br><span class="cnpm-source-artist">龚一</span></td><td><a href="https://music.163.com/#/song?id=34033635" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>D羽五声</td><td>01:51.021</td></tr>
<tr><td><strong>北京的金山上</strong><br><span class="cnpm-source-artist">群星</span></td><td><a href="https://music.163.com/#/song?id=5234215" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>E羽五声调式</td><td>02:44.625</td></tr>
</tbody></table>
</details>

<details class="cnpm-source-group"><summary>Zhi · 6 recordings</summary>
<table class="cnpm-source-table">
<thead><tr><th>Track / Artist</th><th>Platform source</th><th>Mode annotation</th><th>Recording duration</th></tr></thead>
<tbody>
<tr><td><strong>洞庭秋思</strong><br><span class="cnpm-source-artist">成公亮</span></td><td><a href="https://music.163.com/#/song?id=5244619" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>G徵清乐七声调式</td><td>03:21.588</td></tr>
<tr><td><strong>西厢词</strong><br><span class="cnpm-source-artist">于秋璇</span></td><td><a href="https://music.163.com/#/song?id=393657" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>D徵六声调式?变宫</td><td>01:51.988</td></tr>
<tr><td><strong>孟姜女 (江苏民歌)</strong><br><span class="cnpm-source-artist">鞠秀芳</span></td><td><a href="https://music.163.com/#/song?id=5272293" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>D徵五声调式</td><td>03:15.528</td></tr>
<tr><td><strong>满江红</strong><br><span class="cnpm-source-artist">胡思琴</span></td><td><a href="https://music.163.com/#/song?id=478236699" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>B徵五声</td><td>02:03.064</td></tr>
<tr><td><strong>玉楼春晓</strong><br><span class="cnpm-source-artist">龚一</span></td><td><a href="https://music.163.com/#/song?id=34033646" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>F徵加变宫六声</td><td>02:55.309</td></tr>
<tr><td><strong>醉渔唱晚</strong><br><span class="cnpm-source-artist">龚一</span></td><td><a href="https://music.163.com/#/song?id=88492" target="_blank" rel="noopener noreferrer">NetEase Cloud Music</a></td><td>G徵清乐七声调式</td><td>04:42.855</td></tr>
</tbody></table>
</details>

The NetEase webpages exposed 27 tracks at the time of review; 3 were not matched to existing dataset records. A further 11 entries in the original Gong source list were not exposed on the webpage and have not been reconstructed. Original mode annotations, including uncertainty markers, are retained.

## Data Access and Usage

<p><a class="metadata-download" href="https://huggingface.co/datasets/ccmusic-database/CNPM" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Hugging Face dataset page</a></p>

Sign in to Hugging Face and accept the dataset access conditions to access files. China mirror: [ModelScope](https://www.modelscope.cn/datasets/ccmusic-database/CNPM).

```python
from datasets import load_dataset

ds = load_dataset(
    "ccmusic-database/CNPM",
    name="default",  # default / eval
    split="train",  # default only has train
    token="Your_Access_Token",
)
```

## Related Papers and Citation

- [Automatic Chinese National Pentatonic Modes Recognition Using Convolutional Neural Network](https://archives.ismir.net/ismir2022/paper/000041.pdf) (ISMIR 2022)
- [CNPM Database: A Chinese National Pentatonic Modulation Database for Computational Musicology](https://kns.cnki.net/kcms2/article/abstract?v=lD5CuVSaeOtw0E2oWliKSMrLiLDt9iwvkwoTgSclPspwUECyt4uNZ6T7DCLlfwMqohXCQXkFzf_XjAUOQ3CAkhPqNj20H8eG9UfUVuHEey0x7Kqp32fMlJiM9xuPtdVMvC1PB2qW0qI=&uniplatform=NZKPT&src=copy) (2022)

```bibtex
@inproceedings{WangCYMLX022,
  author    = {Zhaowen Wang and Mingjin Che and Yue Yang and Wenwu Meng and Qinyu Li and Fan Xia and Wei Li},
  title     = {Automatic Chinese National Pentatonic Modes Recognition Using Convolutional Neural Network},
  booktitle = {Proceedings of the 23rd International Society for Music Information Retrieval Conference, ISMIR 2022, Bengaluru, India, December 4-8, 2022},
  pages     = {345-352},
  year      = {2022}
}
```
