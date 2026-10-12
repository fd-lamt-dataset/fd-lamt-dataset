# GZVarMSA

GZVarMSA (Guzheng Variation Music Structure Analysis Dataset) is a dataset for music structure analysis and structural complexity research on Chinese guzheng variations. It contains 80 representative traditional zheng pieces in multiple versions from the Chaozhou, Shandong, Shaanxi, and Zhejiang schools, totaling 18,081 seconds. Professional guzheng performers and musicology researchers manually annotated structural information and complexity changes. It can be used for variation structure analysis, music complexity quantification, Chinese traditional instrumental MIR, and downstream tasks such as guzheng music generation and emotion analysis.

## Dataset information

| Item | Description |
| --- | --- |
| Dataset name | GZVarMSA |
| Full English name | Guzheng Variation Music Structure Analysis Dataset |
| Related paper | GZVarMSA: A Chinese Guzheng Variation Dataset for Music Structure Analysis and a Structural Complexity Algorithm |
| Paper authors | Wenwu Meng, Zhiyang Wang, Jing Zhao, Ruisi Li, Fan Xia, Wei Li |
| Data | Chinese guzheng variations / Chinese traditional zheng pieces |
| Number of pieces | 80 pieces |
| Total duration | 18,081 seconds |
| Schools covered | The Chaozhou, Shandong, Shaanxi, and Zhejiang schools |
| Pieces by representative performers | 27 pieces |
| Audio format | WAV, PCM 16-bit, stereo, 48,000 Hz sample rate |
| Annotators | Professional guzheng performers and musicology researchers |
| Annotations | Theme sections, variation sections, timestamps, structural relationships, and complexity change labels |
| Complexity dimensions | Number of measures, meter (time signature), performance tempo, performance techniques / melody and rhythm |
| Complexity labels | Simpler (+1), unchanged (0), more complex (-1) |
| Primary uses | Music structure analysis, variation structure research, structural complexity quantification, Chinese traditional instrumental MIR |

GZVarMSA contains 80 traditional zheng pieces totaling 18,081 seconds, including 27 pieces by representative performers, covering the Chaozhou, Shandong, Shaanxi, and Zhejiang schools. Audio, rather than symbolic files, is the primary data format, preserving details such as timbre, individual performance style, and plucked-instrument techniques. It is suitable for research on musical artistry, coherence, performance techniques, and structural complexity.

Professionals carried out the annotation process by consulting scores while playing the corresponding audio. Annotators first determined whether a piece was a variation piece. If so, they marked the theme section and its timestamps, then annotated subsequent variations in sequence and assessed complexity changes in the number of measures, meter, tempo, melody, and rhythm. The dataset includes time annotations for theme sections and multiple variations of pieces such as Hanya Xishui.

## Dataset examples


<table class="gzvarmsa-sample-table">
  <thead>
    <tr>
      <th>Piece</th>
      <th>Mode</th>
      <th>Performer</th>
      <th>Audio excerpt</th>
      <th>Label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4" class="track-cell"><div class="sample-track-title">Hanya Xishui</div></td>
      <td rowspan="4" class="mode-cell">Zhongliu</td>
      <td rowspan="4" class="performer-cell">Maogen Lin</td>
      <td><audio controls preload="none" src="asset/samples/gzvarmsa/hyxs_01_A.wav"></audio></td>
      <td class="label-cell">Theme A</td>
    </tr>
    <tr>
      <td><audio controls preload="none" src="asset/samples/gzvarmsa/hyxs_02_A1.wav"></audio></td>
      <td class="label-cell">Variation A1</td>
    </tr>
    <tr>
      <td><audio controls preload="none" src="asset/samples/gzvarmsa/hyxs_03_A2.wav"></audio></td>
      <td class="label-cell">Variation A2</td>
    </tr>
    <tr>
      <td><audio controls preload="none" src="asset/samples/gzvarmsa/hyxs_04_A3.wav"></audio></td>
      <td class="label-cell">Variation A3</td>
    </tr>
    <tr>
      <td rowspan="3" class="track-cell"><div class="sample-track-title">Xijiang Yue</div></td>
      <td rowspan="3" class="mode-cell">Qingliu</td>
      <td rowspan="3" class="performer-cell">Ping Sun</td>
      <td><audio controls preload="none" src="asset/samples/gzvarmsa/xjy_01_A.wav"></audio></td>
      <td class="label-cell">Theme A</td>
    </tr>
    <tr>
      <td><audio controls preload="none" src="asset/samples/gzvarmsa/xjy_02_A1.wav"></audio></td>
      <td class="label-cell">Variation A1</td>
    </tr>
    <tr>
      <td><audio controls preload="none" src="asset/samples/gzvarmsa/xjy_03_A2.wav"></audio></td>
      <td class="label-cell">Variation A2</td>
    </tr>
    <tr>
      <td rowspan="2" class="track-cell"><div class="sample-track-title">Kai Shan Chuang</div></td>
      <td rowspan="2" class="mode-cell">Qingliu</td>
      <td rowspan="2" class="performer-cell">Yaran Zhang</td>
      <td><audio controls preload="none" src="asset/samples/gzvarmsa/ksc_01_A.wav"></audio></td>
      <td class="label-cell">Theme A</td>
    </tr>
    <tr>
      <td><audio controls preload="none" src="asset/samples/gzvarmsa/ksc_02_A1.wav"></audio></td>
      <td class="label-cell">Variation A1</td>
    </tr>
    <tr>
      <td rowspan="6" class="track-cell"><div class="sample-track-title">Liu Qing Niang</div></td>
      <td rowspan="6" class="mode-cell">Huowu</td>
      <td rowspan="6" class="performer-cell">Sha Yuan</td>
      <td><audio controls preload="none" src="asset/samples/gzvarmsa/lqn_01_A.wav"></audio></td>
      <td class="label-cell">Theme A</td>
    </tr>
    <tr>
      <td><audio controls preload="none" src="asset/samples/gzvarmsa/lqn_02_A1.wav"></audio></td>
      <td class="label-cell">Variation A1</td>
    </tr>
    <tr>
      <td><audio controls preload="none" src="asset/samples/gzvarmsa/lqn_03_A2.wav"></audio></td>
      <td class="label-cell">Variation A2</td>
    </tr>
    <tr>
      <td><audio controls preload="none" src="asset/samples/gzvarmsa/lqn_04_A3.wav"></audio></td>
      <td class="label-cell">Variation A3</td>
    </tr>
    <tr>
      <td><audio controls preload="none" src="asset/samples/gzvarmsa/lqn_05_A4.wav"></audio></td>
      <td class="label-cell">Variation A4</td>
    </tr>
    <tr>
      <td><audio controls preload="none" src="asset/samples/gzvarmsa/lqn_06_A5.wav"></audio></td>
      <td class="label-cell">Variation A5</td>
    </tr>
  </tbody>
</table>

## Access

To obtain GZVarMSA, please apply by emailing the maintenance team and describe your research purpose, affiliation, and intended use.

- Application email: [xiafan@zjcm.edu.cn](mailto:xiafan@zjcm.edu.cn)
- Suggested email subject: `Dataset application - GZVarMSA - Applicant name/affiliation`
- Suggested email contents: applicant name, affiliation and contact information, research purpose or project description, intended scope of data use, whether sample data are needed, and whether citation or redistribution instructions are needed.

Upon receiving an application, the maintenance team will respond according to the dataset license, scope of use, and sharing conditions.

## License and use

GZVarMSA is restricted to academic research, model evaluation, teaching, and non-commercial use. Users must comply with the licensing requirements of the data providers and maintenance team, acknowledge the data source in papers, reports, presentations, or project descriptions, and must not redistribute, upload to third-party platforms, or commercially use audio, annotation files, or related materials without authorization.

<!--
## Citation format and links

If you use GZVarMSA in research, please cite the related paper. Volume, issue, pages, DOI, and the paper link will be added once the publication details are confirmed.

- Paper file: `paper/GZVarMSA：一个用于音乐结构分析的中国古筝变奏曲数据集及结构复杂度算法.docx`
- Dataset website: https://fd-lamt-dataset.github.io/fd-lamt-dataset
- Paper link: To be added

```bibtex
@article{gzvarmsa,
  title   = {GZVarMSA：一个用于音乐结构分析的中国古筝变奏曲数据集及结构复杂度算法},
  author  = {孟文武 and 汪志阳 and 赵晶 and 李睿思 and 夏凡 and 李伟},
  journal = {待补充},
  year    = {待补充}
}
```
-->
