# XFID

XFID (Xinjiang Folk Instrument Dataset) is a Xinjiang folk instrument dataset for automatic music transcription. It covers three representative Xinjiang folk instruments—dutar, satar, and tanbur—and contains approximately four hours of lossless recordings, audio-aligned MIDI annotations, and readable scores. It can be used for automatic transcription of folk instruments, low-resource instrument modeling, cross-instrument generalization, and research on the digitization of traditional music.

## Dataset information

| Item | Description |
| --- | --- |
| Dataset name | XFID |
| Full English name | Xinjiang Folk Instrument Dataset |
| Chinese name | A Xinjiang Folk Instrument Dataset for Automatic Music Transcription |
| Related paper | XFID：A Xinjiang Folk Instrument Dataset for Automatic Music Transcription |
| Paper authors | Xiaolun Wang, Penghao He, Hang Yang, Weixing Wei, Ruisi Li, Weixin Ren, Kuhan Yang, Fan Xia, Wei Li |
| Instruments covered | Dutar, satar, tanbur |
| Dataset size | Approximately four hours of lossless recordings |
| Duration by instrument | Dutar: 97 minutes; satar: 80 minutes; tanbur: 70 minutes |
| Annotations | Audio-aligned MIDI annotations and readable scores |
| Applicable tasks | Automatic music transcription, folk instrument transcription, low-resource instrument modeling, cross-instrument generalization research |

XFID was constructed to address data scarcity in automatic transcription of traditional folk instruments. Existing high-quality automatic music transcription resources primarily focus on piano or Western orchestral instruments. Xinjiang folk instruments differ significantly from common Western instruments in pitch systems, formants, overtone structure, and performance techniques such as glissando and vibrato, requiring dedicated data resources for model training, fine-tuning, and evaluation.

All three instruments in the dataset are representative string instruments in Xinjiang folk music. The dutar is commonly used to provide harmony alongside the tanbur and to accompany singing; the satar is bowed; the tanbur and dutar are held horizontally and plucked. XFID can serve as a folk instrument benchmark for automatic music transcription, supporting target-domain folk instrument transcription model training, low-resource mixed training, and cross-instrument generalization evaluation.

## Dataset examples

In the table below, **Recorded audio** is the original performance recording, **Automatic transcription MIDI** is the transcription generated automatically by a model, and **Manually verified MIDI** is the aligned annotation corrected from the automatic transcription through listening and score information.

| Instrument | Performer | Piece | Recorded audio | Automatic transcription MIDI | Manually verified MIDI |
| --- | --- | --- | --- | --- | --- |
| Tanbur | Abulimiti | Excerpt from Kalatiegen | <audio controls preload="none" src="asset/samples/xfid/kltg.wav"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>kltg_auto.mid</span></span>](asset/samples/xfid/kltg_auto.mid)<br><audio controls preload="none" src="asset/samples/xfid/kltg_auto_piano.mp3"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>kltg_manual.mid</span></span>](asset/samples/xfid/kltg_manual.mid)<br><audio controls preload="none" src="asset/samples/xfid/kltg_manual_piano.mp3"></audio> |
| Tanbur | Abuduwaili Shataer | Excerpt from Wuxiake Muqam Dastan Interlude | <audio controls preload="none" src="asset/samples/xfid/wshk.wav"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>wshk_auto.mid</span></span>](asset/samples/xfid/wshk_auto.mid)<br><audio controls preload="none" src="asset/samples/xfid/wshk_auto_piano.mp3"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>wshk_manual.mid</span></span>](asset/samples/xfid/wshk_manual.mid)<br><audio controls preload="none" src="asset/samples/xfid/wshk_manual_piano.mp3"></audio> |
| Satar | Alafate Anniwaer | Excerpt from the First Interlude of Lake Muqam Dastan | <audio controls preload="none" src="asset/samples/xfid/lkmkm.wav"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>lkmkm_auto.mid</span></span>](asset/samples/xfid/lkmkm_auto.mid)<br><audio controls preload="none" src="asset/samples/xfid/lkmkm_auto_piano.mp3"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>lkmkm_manual.mid</span></span>](asset/samples/xfid/lkmkm_manual.mid)<br><audio controls preload="none" src="asset/samples/xfid/lkmkm_manual_piano.mp3"></audio> |
| Satar | Abulimiti | Excerpt from Atush Folk Song | <audio controls preload="none" src="asset/samples/xfid/atsmg.wav"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>atsmg_auto.mid</span></span>](asset/samples/xfid/atsmg_auto.mid)<br><audio controls preload="none" src="asset/samples/xfid/atsmg_auto_piano.mp3"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>atsmg_manual.mid</span></span>](asset/samples/xfid/atsmg_manual.mid)<br><audio controls preload="none" src="asset/samples/xfid/atsmg_manual_piano.mp3"></audio> |
| Dutar | Maihaiti Abudureyimu | Excerpt from Muqam | <audio controls preload="none" src="asset/samples/xfid/mkmpd.wav"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>mkmpd_auto.mid</span></span>](asset/samples/xfid/mkmpd_auto.mid)<br><audio controls preload="none" src="asset/samples/xfid/mkmpd_auto_piano.mp3"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>mkmpd_manual.mid</span></span>](asset/samples/xfid/mkmpd_manual.mid)<br><audio controls preload="none" src="asset/samples/xfid/mkmpd_manual_piano.mp3"></audio> |
| Dutar | Alafate Anniwaer | Excerpt from Xin Yue (dil kvgi) | <audio controls preload="none" src="asset/samples/xfid/dilkvgi.wav"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>dilkvgi_auto.mid</span></span>](asset/samples/xfid/dilkvgi_auto.mid)<br><audio controls preload="none" src="asset/samples/xfid/dilkvgi_auto_piano.mp3"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>dilkvgi_manual.mid</span></span>](asset/samples/xfid/dilkvgi_manual.mid)<br><audio controls preload="none" src="asset/samples/xfid/dilkvgi_manual_piano.mp3"></audio> |

## Access

To obtain XFID, please apply by emailing the maintenance team and describe your research purpose, affiliation, and intended use.

- Application email: [xiafan@zjcm.edu.cn](mailto:xiafan@zjcm.edu.cn)
- Suggested email subject: `Dataset application - XFID - Applicant name/affiliation`
- Suggested email contents: applicant name, affiliation and contact information, research purpose or project description, intended scope of data use, whether sample data are needed, and whether citation or redistribution instructions are needed.

Upon receiving an application, the maintenance team will respond according to the dataset license, scope of use, and sharing conditions.

## License and use

XFID is recommended for academic research, model evaluation, teaching, and non-commercial use only. Users should comply with the licensing requirements of the data providers and maintenance team, acknowledge the data source in papers, reports, presentations, or project descriptions, and avoid unauthorized redistribution, uploading to third-party platforms, or commercial use of audio, annotation files, scores, or related materials.

<!--
## Citation format and links

If you use XFID in research, please cite the related paper. Volume, issue, pages, DOI, and the paper link will be added once the publication details are confirmed.

- Paper file: To be added
- Paper link: To be added

```bibtex
@article{xfid_amt,
  title   = {XFID：用于自动音乐转录的新疆民族乐器数据集},
  author  = {王晓伦 and 何鹏昊 and 杨航 and 韦伟兴 and 李睿思 and 任伟鑫 and 杨喾涵 and 夏凡 and 李伟},
  journal = {待补充},
  year    = {2026}
}
```
-->
