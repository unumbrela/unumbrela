<div align="right">
  <a href="./README_CN.md">🇨🇳 中文</a>
</div>

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=700&size=26&duration=3200&pause=900&color=4600AF&center=true&vCenter=true&width=800&height=70&lines=Hi%2C+I'm+Zihao+Guo+%F0%9F%91%8B;Computational+Chemistry+%C2%B7+AI4Chem;Mamba+%2F+State+Space+Models+%C2%B7+Neuro-Symbolic+AI" alt="Typing SVG" />
</div>

<div align="center">
  <a href="https://unumbrela.github.io"><img src="https://img.shields.io/badge/Academic_Homepage-4600AF?style=flat-square&logo=githubpages&logoColor=white" /></a>
  <a href="mailto:1191230418@jiangnan.edu.cn"><img src="https://img.shields.io/badge/Email-EA4335?style=flat-square&logo=gmail&logoColor=white" /></a>
  <a href="https://scholar.google.com/"><img src="https://img.shields.io/badge/Google_Scholar-4285F4?style=flat-square&logo=google-scholar&logoColor=white" /></a>
  <img src="https://komarev.com/ghpvc/?username=unumbrela&style=flat-square&color=4600af" alt="Profile Views" />
</div>

---

## About Me

I am an undergraduate researcher at **Jiangnan University**, School of AI & Computer Science, pursuing a B.Eng. in Digital Media Technology (Class of 2027).

My research focuses on **Computational Chemistry and AI4Chem**. During my undergraduate studies, I have followed two methodological threads—**Mamba-based structural modeling** and **neuro-symbolic methods**—and am now bringing them together in computational chemistry to build closed-loop scientific workflows spanning representation, reasoning, verification, and discovery.

- **4 papers**: ICML 2026 · ICIC 2026 ×2 Oral · PRCV 2025
- **iGEM 2025 Gold Medal**: dry-lab (computational) lead · in-person presentation in Paris
- **1 invention patent filed** on reliable neuro-symbolic planning

I welcome conversations about research collaboration, internships, and graduate study in **Computational Chemistry, AI4Chem, and AI for Science**.

---

## Research Focus

| Thread | Undergraduate foundation | Direction in computational chemistry |
|:--|:--|:--|
| **Mamba Structural Modeling** | State-space modeling, frequency/wavelet enhancement, long-range visual structure | Linear-complexity modeling of long-range interactions in atomistic systems |
| **Neuro-Symbolic AI** | Extract-Then-Compile, deterministic constraint solving, reliable LLM planning | Verifiable scientific agents with explicit evidence, applicability domains, and unknown boundaries |

The two threads converge on a single goal: **scientific AI systems that model long-range physical structure and act through verifiable reasoning**.

---

## Publications

### 1. FWMamba-UNet: Frequency-Wavelet Enhanced Mamba UNet for Medical Image Segmentation

**First Author** · ICIC 2026 (**Oral**, CCF-C)

Reveals that the Mamba state-space structure is intrinsically insensitive to high-frequency image details such as object boundaries, and repairs this limitation with a parallel discrete-wavelet-transform branch. With only about 10% more parameters, the model achieves state-of-the-art results on three medical-image-segmentation benchmarks.

### 2. Extract-Then-Compile: Reliable Neuro-Symbolic Planning for Large Language Models

**First Author** · ICIC 2026 (**Oral**, CCF-C) · 1 invention patent filed

Introduces an Extract-Then-Compile paradigm: the LLM only extracts user requirements into a structured table, while a deterministic symbolic system performs hard-constraint search. It improves the all-constraint pass rate on ChinaTravel by 31.82 points while using about 90% fewer tokens, enabling a 7B model to outperform larger models.

### 3. MambaGuard: A CLIP-Mamba Approach for OOD Generated Image Detection

**Co-First Author** · PRCV 2025 (CCF-C)

Combines a CLIP-Mamba backbone with FFT-based spectral decoupling to detect images produced by generators unseen during training. Evaluated across 15 generative models, with particularly strong results on difficult cases including DALL·E 2 and Midjourney.

### 4. RA-Det: Towards Universal Detection of AI-Generated Images via Robustness Asymmetry

**Fifth Author** · ICML 2026 (CCF-A)

Identifies robustness asymmetry as a generator-agnostic signal: small perturbations preserve the semantics of real images but cause larger drift in generated images. The resulting detector improves average performance by 7.81% across 14 generative models without relying on generator fingerprints.

---

## Research Project

### AMP-Forge · iGEM 2025 Gold Medal

**Dry-Lab Lead · Mar–Nov 2025 · In-person presentation in Paris**

Our team engineered *Saccharomyces cerevisiae* to produce the human antimicrobial peptide LL-37 against antibiotic resistance. I independently built **AMP-Forge**, a de-novo antimicrobial-peptide design platform:

`Protein Language Model → VAE (64-D Latent Space) → Latent Diffusion → Non-Autoregressive Decoder`

- Built a corpus of **25,622 antimicrobial peptides from six databases**.
- Added an activity predictor with **PCC = 0.90** for closed-loop screening.
- Generated multiple variants whose antimicrobial activity was **validated in wet-lab experiments to outperform the original sequence**.

---

## Research Agenda

### Chem-Mamba

For long-range modeling in machine-learning interatomic potentials, I plan to develop **EuclideanMamba**, a linear-complexity framework that unifies charge transfer, electron delocalization, and periodic response in three-dimensional atomic systems as **source–propagation–response** state dynamics, targeting lower energy errors on three classes of nonlocal tasks under matched protocols.

### Chem-Agent

To address the silent failure mode in which a scientific agent's program runs but its science is wrong, I plan to develop **Verified Repair Contracts (VRC)**: a cognitive control layer that compiles scientific knowledge into executable contracts with applicability domains, evidence, and explicit unknown boundaries. VRC verifies tool calls, performs safe repairs, and reruns all checks before execution—moving agents from merely running to acting with evidence.

---

## Tools & Methods

`Python` · `PyTorch` · `Mamba / SSM` · `Transformer` · `Diffusion Models` · `Protein Language Models` · `LLM Agents` · `Neuro-Symbolic AI` · `Constraint Solving` · `Scientific Machine Learning`

---

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=unumbrela&show_icons=true&theme=transparent&hide_border=true&title_color=4600AF&icon_color=4600AF" height="160" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=unumbrela&layout=compact&theme=transparent&hide_border=true&title_color=4600AF" height="160" />
</div>

<div align="center">
  <br />
  <i>"We must know — we will know." — David Hilbert</i>
  <br /><br />
  <a href="https://unumbrela.github.io"><b>Visit my academic homepage →</b></a>
</div>
