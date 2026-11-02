# CNPM listening examples

Source: https://huggingface.co/datasets/ccmusic-database/CNPM
Mirror: https://www.modelscope.cn/datasets/ccmusic-database/CNPM
Dataset license: CC BY-NC-ND 4.0 (https://creativecommons.org/licenses/by-nc-nd/4.0/).
Curators credited by the source dataset card: Weixin Ren, Mingjin Che, Zhaowen Wang, Qinyu Li, Jiaye Hu, Fan Xia, Wei Li.

Selected from the complete local default/train dataset (287 recordings):

| Pattern | Original file | Duration (seconds) | Dataset row (zero-based) |
| --- | --- | ---: | ---: |
| Shang | 商7.wav | 15.436979166666667 | 6 |
| Jue | 角21.wav | 15.413333333333334 | 280 |

Compare exact decoded frame counts divided by sample rate within each pattern; ties use the earlier dataset row. All 45 Shang and 49 Jue recordings were considered. Audio bytes are copied intact from the Arrow dataset, with no trimming, resampling, normalization, or re-encoding. Curated filenames are used for stable URLs; original filenames and checksums are recorded in samples.json.

The source dataset contains third-party recordings; rights in those recordings remain with the respective owners. Refer to the dataset access conditions and license for reuse.
