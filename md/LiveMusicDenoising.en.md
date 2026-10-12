# Live Music Denoising

This repository provides the metadata for the dataset described in:

> Live Music Denoising with Authentic Live Data and Track-Editing-Guided Semi-Supervised Learning.

The dataset was created for research on live music denoising. It is based on publicly accessible live recordings from [Bilibili](https://www.bilibili.com/) and Archive.org to support training and benchmarking under realistic live-noise conditions.

## Release Scope

To avoid directly redistributing third-party live recordings, this release provides metadata rather than audio. For clean music excerpts, the metadata include the source URL for each live recording, the start and end timestamps for every excerpt, and the excerpt duration. For noise data, the metadata include source URLs for the live recordings used to collect pure audience and environmental noise excerpts.

For the benchmark partition, this release provides benchmark noise generation metadata. The generation metadata records the source noise segments, target clean tracks, placement intervals, sampling gains, and generation presets needed to reproduce the benchmark noise tracks.

## Dataset Summary

| Partition | Source recordings | Clean excerpts | Metadata duration | Reported duration |
|---|---:|---:|---:|---:|
| Train | 100 | 770 | 426.001876 min | 426 min |
| Benchmark | 46 | 308 | 199.515621 min | 200 min |
| Total | 146 | 1,078 | 625.517497 min | 626 min |

## Files

- `metadata/source_urls.csv`: source-level metadata for clean and noise recordings.
- `metadata/clean_excerpts.csv`: excerpt-level metadata for clean music segments.
- `metadata/benchmark_noise_generation_metadata_Normal.csv`: generation metadata for the Normal benchmark noise condition.
- `metadata/benchmark_noise_generation_metadata_Strong.csv`: generation metadata for the Strong benchmark noise condition.
- `metadata/benchmark_noise_generation_metadata_Extreme.csv`: generation metadata for the Extreme benchmark noise condition.

[Download metadata (ZIP)](asset/downloads/live-music-denoising/metadata.zip)

## Metadata Schema

### `metadata/source_urls.csv`

Each row describes one source recording.

| Column | Description |
|---|---|
| `data_role` | `clean` or `noise`. |
| `partition` | `train` or `benchmark`. |
| `source_id` | Bilibili BV identifier or Archive.org item identifier. |
| `source_type` | `bilibili`, `archive.org`, or another source label. |
| `source_reference` | Original source identifier or URL. |
| `source_url` | Public URL for the source recording. |

### `metadata/clean_excerpts.csv`

Each row describes one clean music excerpt.

| Column | Description |
|---|---|
| `source_id` | Bilibili BV identifier or Archive.org item identifier. |
| `source_type` | Source platform type. |
| `source_reference` | Original source identifier or URL. |
| `source_url` | Public URL for the source recording. |
| `partition` | `train` or `benchmark`. |
| `track` | Track index in the source recording when available. |
| `excerpt_index_within_source` | 1-based excerpt index within the same source recording. |
| `start_time_sec` | Excerpt start timestamp in seconds. |
| `end_time_sec` | Excerpt end timestamp in seconds. |
| `duration_sec` | Excerpt duration in seconds. |

### `metadata/benchmark_noise_generation_metadata_<LEVEL>.csv`

Each row describes a noise event used to reconstruct a benchmark noise track for one intensity level.

| Column | Description |
|---|---|
| `preset` | Benchmark noise level: `Normal`, `Strong`, or `Extreme`. |
| `event_id` | Event index in the generated benchmark noise timeline. |
| `target_clean_file` | Clean track filename associated with the generated benchmark noise track. |
| `target_clean_id` | Public clean-track identifier. |
| `target_clean_start_sec` | Start time of the noise placement within the target clean track. |
| `target_clean_end_sec` | End time of the noise placement within the target clean track. |
| `overlap_duration_sec` | Duration of the placed noise event after clipping to the target clean track boundary. |
| `noise_fragment_file` | Intermediate noise fragment selected by the generation procedure. |
| `noise_source_file` | Original local source noise filename before fragmenting. |
| `noise_source_id` | Public identifier of the source noise recording. |
| `noise_source_start_sec` | Start time of the sampled noise interval in the source noise recording. |
| `noise_source_end_sec` | End time of the sampled noise interval in the source noise recording. |
| `fragment_rms` | RMS value of the selected intermediate noise fragment. |
| `gain` | Gain applied to the sampled noise event. |


## Citation
```bibtex
@inproceedings{he2026live,
  title = {Live Music Denoising with Authentic Live Data and Track-Editing-Guided Semi-Supervised Learning},
  author = {He, Penghao and Luo, Xiankexin and Li, Wei},
  booktitle = {Proceedings of the 27th International Society for Music Information Retrieval Conference},
  year = {2026},
  address = {Abu Dhabi, UAE}
}
```
