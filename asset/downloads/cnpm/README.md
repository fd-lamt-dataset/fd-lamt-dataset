# CNPM recording metadata

Source dataset: https://huggingface.co/datasets/ccmusic-database/CNPM
Dataset license: CC BY-NC-ND 4.0.

`recordings.csv` (UTF-8 BOM) and `recordings.json` describe the 193 Gong, Yu, and Zhi recordings in default/train. No audio, streaming URLs, excerpt timestamps, or section annotations are included. Source links point to public song pages only. Missing source fields are empty, not inferred. No playlist names or owner information are included.

Matching uses song title and artist against dataset filenames, ignoring punctuation and spacing. This does not verify that the current platform version is identical to the dataset recording. `recording_duration_seconds` is the dataset recording's duration; `platform_display_duration` is shown separately when available. Original mode annotations are retained, including any uncertainty markers.

Coverage checked on 2026-11-02: 27 publicly visible songs across the supplied playlists; 24 match dataset titles/artists, 3 do not. The Gong playlist reports 21 entries but exposes only 10 on the webpage; no client-only entries are reconstructed. The JSON records coverage and unmatched public titles without assigning dataset labels to them.

The two separately published Shang/Jue demo recordings are outside this metadata-only scope.
