# GuzhengTech99

GuzhengTech99 is a dataset for frame-level guzheng playing technique detection. Overlapping or mixed techniques can occur in solo performances, so the associated research formulates detection as frame-level multi-label classification.

## Dataset Information

| Item | Content |
| --- | --- |
| Recordings | 99 guzheng solos |
| Recording setup | Professional musicians recorded in a studio |
| Total duration | 9,064.6 seconds, approximately 151.08 minutes |
| Sample rate | 44,100 Hz |
| Technique classes | 7 |
| Training / validation / test | 79 / 10 / 10 pieces |
| Dataset license | CC BY-NC-ND 4.0 |

## Playing Techniques and Annotations

Each note has an onset (`onset_time`), offset (`offset_time`), playing technique (`IPT`), and pitch (`note`). The table lists class IDs in the Hugging Face integrated version.

| ID | Technique in Chinese | English label |
| --- | --- | --- |
| 0 | 颤音 | Vibrato |
| 1 | 拨弦 | Plucks |
| 2 | 上滑 | Upward Portamento |
| 3 | 下滑 | Downward Portamento |
| 4 | 花指 / 刮奏 / 连抹 / 连托 | Glissando |
| 5 | 摇指 | Tremolo |
| 6 | 点音 | Point Note |

## Dataset Examples / Demo

| Source file | Split | Duration | Listen | Annotations |
| --- | --- | --- | --- | --- |
| `104.flac` | train | 32.888 s | <audio controls preload="none" src="asset/samples/guzhengtech99/104.flac"></audio> | <a href="asset/samples/guzhengtech99/104.csv" download>Download CSV</a> |
| `16.flac` | validation | 50.387 s | <audio controls preload="none" src="asset/samples/guzhengtech99/16.flac"></audio> | <a href="asset/samples/guzhengtech99/16.csv" download>Download CSV</a> |
| `58.flac` | test | 45.268 s | <audio controls preload="none" src="asset/samples/guzhengtech99/58.flac"></audio> | <a href="asset/samples/guzhengtech99/58.csv" download>Download CSV</a> |

## Data Access

<p><a class="metadata-download" href="https://huggingface.co/datasets/ccmusic-database/Guzheng_Tech99" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Hugging Face dataset page</a></p>

China mirror: [ModelScope](https://www.modelscope.cn/datasets/ccmusic-database/Guzheng_Tech99). [Project page](https://lidcc.github.io/GuzhengTech99/) · [Code repository](https://github.com/LiDCC/GuzhengTech99)

## Related Paper and Citation

[Frame-Level Multi-Label Playing Technique Detection Using Multi-Scale Network and Self-Attention Mechanism](https://arxiv.org/abs/2303.13272) (ICASSP 2023)

```bibtex
@inproceedings{LiCMWYXL23,
  author = {Dichucheng Li and Mingjin Che and Wenwu Meng and Yulun Wu and Yi Yu and Fan Xia and Wei Li},
  title = {Frame-Level Multi-Label Playing Technique Detection Using Multi-Scale Network and Self-Attention Mechanism},
  booktitle = {IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  pages = {1-5},
  year = {2023}
}
```
