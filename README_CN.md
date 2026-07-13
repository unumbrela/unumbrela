<div align="right">
  <a href="./README.md">🇬🇧 English</a>
</div>

## 研究定位

| 研究主线 | 本科阶段基础 | 计算化学延伸方向 |
|:--|:--|:--|
| **Mamba 结构建模** | 状态空间建模、频域/小波增强、长程视觉结构 | 原子体系中长程相互作用的线性复杂度建模 |
| **神经符号方法** | Extract-Then-Compile、确定性约束求解、可靠 LLM 规划 | 具有证据、适用域与未知边界的可验证科学智能体 |

---

## 科研成果（论文）

### 1. FWMamba-UNet: Frequency-Wavelet Enhanced Mamba UNet for Medical Image Segmentation

**第一作者** · ICIC 2026（**Oral**，CCF-C）

从理论上揭示 Mamba 状态空间模型“结构上看不见图像高频细节（即物体边界）”这一缺陷，并用并联小波（DWT）分支加以修复；仅增加约 10% 参数，即在三个医学图像分割基准上达到 SOTA。

### 2. Extract-Then-Compile: Reliable Neuro-Symbolic Planning for Large Language Models

**第一作者** · ICIC 2026（**Oral**，CCF-C）· 已申请发明专利 1 项

提出“抽取—编译”范式：大模型只把需求抽取成结构化表格，满足硬约束的搜索交由确定性符号系统完成。在三个规划基准上大幅领先（ChinaTravel 全约束通过率 +31.82 分），且少用约 90% token；7B 小模型借此可超越更大规模的模型。

### 3. MambaGuard: A CLIP-Mamba Approach for OOD Generated Image Detection

**共同一作** · PRCV 2025（CCF-C）

用 CLIP-Mamba 骨干与 FFT 频谱解耦，检测训练时从未见过的新模型所生成的图像。在 15 个生成模型上验证有效，对 DALL·E 2、Midjourney 等难例尤为突出。

### 4. RA-Det: Towards Universal Detection of AI-Generated Images via Robustness Asymmetry

**第五作者** · ICML 2026（CCF-A）

提出“鲁棒性不对称”这一通用信号：真实图像受轻微扰动后语义几乎不变，生成图像则明显漂移；据此实现不依赖生成器指纹的通用检测，在 14 个生成模型上平均提升 7.81%。

---

## 科研项目

### AMP-Forge · iGEM 2025 国际金奖

**干实验（计算机组）负责人 · 2025.03–2025.11 · 巴黎线下答辩**

团队以酿酒酵母量产人源抗菌肽 LL-37 对抗抗生素耐药。我独立搭建抗菌肽从头设计平台 **AMP-Forge**：

`蛋白质语言模型 → VAE 压至 64 维潜空间 → 潜在扩散 → 非自回归解码`

- 构建跨 **6 个数据库、共 25,622 条**的抗菌肽语料。
- 配套活性预测器（**PCC = 0.90**）完成闭环筛选。
- 多条生成变体经**湿实验验证活性优于原始序列**。

---

## 研究规划

### Chem-Mamba

面向机器学习原子间势的长程建模，提出线性复杂度的 **EuclideanMamba**，将三维原子体系中的电荷转移、电子离域与周期响应统一为“**源—传播—响应**”状态动力学，并在同协议对照中于三类非局域任务上进一步降低能量误差。

### Chem-Agent

面向科学智能体“程序能运行、但科学上可能错误”的静默风险，提出 **Verified Repair Contracts（VRC）**认知控制层，将科学知识编译为带适用域、证据与未知边界的可执行契约，在工具调用前完成验证、安全修复与全量重验，使 Agent 从“能运行”走向“有依据地行动”。

<div align="center">
  <br />
  <i>“If you don't believe you will win, then why bother training and grinding.”</i>
  <br />
  — Anonymous
  <br /><br />
  <a href="https://unumbrela.github.io/"><b>Academic Homepage →</b></a>
</div>
