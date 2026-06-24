# XFID

XFID（Xinjiang Folk Instrument Dataset）是一个面向自动音乐转录任务的新疆民族乐器数据集。数据集覆盖都塔尔、萨塔尔、弹拨尔三种新疆代表性民族乐器，包含约 4 小时无损录音、与音频对齐的 MIDI 标注以及可读乐谱，可用于民族乐器自动音乐转录、低资源乐器建模、跨乐器泛化与传统音乐数字化研究。

## 数据集信息

| 项目 | 内容 |
| --- | --- |
| 数据集名称 | XFID |
| 英文全称 | Xinjiang Folk Instrument Dataset |
| 中文名称 | 用于自动音乐转录的新疆民族乐器数据集 |
| 关联论文 | XFID：用于自动音乐转录的新疆民族乐器数据集 |
| 论文作者 | 王晓伦, 何鹏昊, 杨航, 韦伟兴, 李睿思, 任伟鑫, 杨喾涵, 夏凡, 李伟 |
| 覆盖乐器 | 都塔尔、萨塔尔、弹拨尔 |
| 数据规模 | 约 4 小时无损录音 |
| 分乐器时长 | 都塔尔 97 分钟、萨塔尔 80 分钟、弹拨尔 70 分钟 |
| 标注内容 | 与音频对齐的 MIDI 标注、可读乐谱 |
| 适用任务 | 自动音乐转录、民族乐器转录、低资源乐器建模、跨乐器泛化研究 |

XFID 面向传统民族乐器自动转录中的数据稀缺问题构建。现有高质量自动音乐转录数据资源多集中于钢琴或西方管弦乐器，而新疆民族乐器在音高体系、共振峰、泛音结构以及滑音、颤音等演奏技法上与常见西方乐器存在明显差异，因此需要专门的数据资源支撑模型训练、微调与评测。

数据集中的三种乐器均为新疆民族音乐中具有代表性的弦乐器。都塔尔通常用于配合弹拨尔演奏和音，也常配合人声歌唱；萨塔尔为弓拉演奏乐器；弹拨尔和都塔尔为横抱弹拨演奏乐器。XFID 可作为自动音乐转录任务的民族乐器基准数据，支持目标域民族乐器转录模型训练、低资源混合训练和跨乐器泛化评估。

## 数据集样例

下表中，**实录音频**为原始演奏录音，**自动转谱 MIDI**为模型自动生成的转写结果，**人工校验 MIDI**为在自动转谱基础上经听辨与乐谱信息校正后的对齐标注。

| 乐器 | 艺人 | 曲目 | 实录音频 | 自动转谱 MIDI | 人工校验 MIDI |
| --- | --- | --- | --- | --- | --- |
| 弹拨尔 | 阿不力米提 | 《卡拉铁根》片段 | <audio controls preload="none" src="asset/samples/xfid/kltg.wav"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>kltg_auto.mid</span></span>](asset/samples/xfid/kltg_auto.mid)<br><audio controls preload="none" src="asset/samples/xfid/kltg_auto_piano.mp3"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>kltg_manual.mid</span></span>](asset/samples/xfid/kltg_manual.mid)<br><audio controls preload="none" src="asset/samples/xfid/kltg_manual_piano.mp3"></audio> |
| 弹拨尔 | 阿布都外力·沙它尔 | 《乌夏克木卡姆达斯坦间奏曲》片段 | <audio controls preload="none" src="asset/samples/xfid/wshk.wav"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>wshk_auto.mid</span></span>](asset/samples/xfid/wshk_auto.mid)<br><audio controls preload="none" src="asset/samples/xfid/wshk_auto_piano.mp3"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>wshk_manual.mid</span></span>](asset/samples/xfid/wshk_manual.mid)<br><audio controls preload="none" src="asset/samples/xfid/wshk_manual_piano.mp3"></audio> |
| 萨塔尔 | 阿拉法特·安尼瓦尔 | 《拉克木卡姆达斯坦第一间奏曲》片段 | <audio controls preload="none" src="asset/samples/xfid/lkmkm.wav"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>lkmkm_auto.mid</span></span>](asset/samples/xfid/lkmkm_auto.mid)<br><audio controls preload="none" src="asset/samples/xfid/lkmkm_auto_piano.mp3"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>lkmkm_manual.mid</span></span>](asset/samples/xfid/lkmkm_manual.mid)<br><audio controls preload="none" src="asset/samples/xfid/lkmkm_manual_piano.mp3"></audio> |
| 萨塔尔 | 阿不力米提 | 《阿图什民歌》片段 | <audio controls preload="none" src="asset/samples/xfid/atsmg.wav"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>atsmg_auto.mid</span></span>](asset/samples/xfid/atsmg_auto.mid)<br><audio controls preload="none" src="asset/samples/xfid/atsmg_auto_piano.mp3"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>atsmg_manual.mid</span></span>](asset/samples/xfid/atsmg_manual.mid)<br><audio controls preload="none" src="asset/samples/xfid/atsmg_manual_piano.mp3"></audio> |
| 都塔尔 | 买海提·阿布都热依木 | 《木卡姆》片段 | <audio controls preload="none" src="asset/samples/xfid/mkmpd.wav"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>mkmpd_auto.mid</span></span>](asset/samples/xfid/mkmpd_auto.mid)<br><audio controls preload="none" src="asset/samples/xfid/mkmpd_auto_piano.mp3"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>mkmpd_manual.mid</span></span>](asset/samples/xfid/mkmpd_manual.mid)<br><audio controls preload="none" src="asset/samples/xfid/mkmpd_manual_piano.mp3"></audio> |
| 都塔尔 | 阿拉法特·安尼瓦尔 | 《心乐》（dil kvgi）片段 | <audio controls preload="none" src="asset/samples/xfid/dilkvgi.wav"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>dilkvgi_auto.mid</span></span>](asset/samples/xfid/dilkvgi_auto.mid)<br><audio controls preload="none" src="asset/samples/xfid/dilkvgi_auto_piano.mp3"></audio> | [<span class="midi-file-link"><span class="midi-file-icon"><i class="fa-regular fa-file midi-file-base"></i><i class="fa-solid fa-music midi-file-note"></i></span><span>dilkvgi_manual.mid</span></span>](asset/samples/xfid/dilkvgi_manual.mid)<br><audio controls preload="none" src="asset/samples/xfid/dilkvgi_manual_piano.mp3"></audio> |

## 获取方法

如需获取 XFID 数据集，请通过邮件联系维护团队申请，并在邮件中说明研究用途、所属单位和计划使用方式。

- 申请邮箱：[xiafan@zjcm.edu.cn](mailto:xiafan@zjcm.edu.cn)
- 邮件标题建议：`数据集申请 - XFID - 申请人姓名/单位`
- 邮件内容建议包含：申请人姓名、单位与联系方式、研究目的或项目简介、拟使用的数据范围、是否需要样例数据、是否需要引用或再分发说明。

维护团队将在收到申请后，根据数据集许可、使用范围和共享条件进行回复。

## 使用许可说明

XFID 数据集建议仅用于学术研究、模型评测、教学与非商业用途。使用者应遵守数据提供方和维护团队的许可要求，在论文、报告、演示或项目说明中注明数据来源，并避免对音频、标注文件、乐谱或相关资料进行未经授权的再分发、上传至第三方平台或商业化使用。

<!--
## 参考文献引用格式及链接

如在研究中使用 XFID 数据集，请引用关联论文。正式出版信息确认后，将补充卷期、页码、DOI 和论文链接。

- 论文文件：待补充
- 论文链接：待补充

```bibtex
@article{xfid_amt,
  title   = {XFID：用于自动音乐转录的新疆民族乐器数据集},
  author  = {王晓伦 and 何鹏昊 and 杨航 and 韦伟兴 and 李睿思 and 任伟鑫 and 杨喾涵 and 夏凡 and 李伟},
  journal = {待补充},
  year    = {2026}
}
```
-->
