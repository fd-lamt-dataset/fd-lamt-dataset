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

Shang and Jue feature the shortest complete recording in each class. Gong, Yu, and Zhi each feature one track with metadata and a public platform page, without original audio or direct audio-stream links. Durations refer to dataset recordings; excerpt timestamps are omitted for now.

| Mode pattern | Track / Source file | Tonggong system | Tonic | Mode annotation | Duration | Listen / Source |
| --- | --- | --- | --- | --- | --- | --- |
| Gong | 仙翁操 / 龚一 | C | C | C Gong, hexatonic (Qingjue) | 57.131 s | [NetEase Cloud Music](https://music.163.com/#/song?id=34033640) |
| Shang | `商7.wav` | G | A | A Shang, heptatonic Qingyue | 15.437 s | <audio controls preload="none" src="asset/samples/cnpm/shang_shortest.wav"></audio> |
| Jue | `角21.wav` | F | A | A Jue, hexatonic (Biangong) | 15.413 s | <audio controls preload="none" src="asset/samples/cnpm/jue_shortest.wav"></audio> |
| Zhi | 满江红 / 胡思琴 | E | B | B Zhi, pentatonic | 123.064 s | [NetEase Cloud Music](https://music.163.com/#/song?id=478236699) |
| Yu | 采茶调 / 龚一 | F | D | D Yu, pentatonic | 60.396 s | [NetEase Cloud Music](https://music.163.com/#/song?id=34033639) |

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
