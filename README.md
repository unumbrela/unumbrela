<div align="right">
  <a href="./README_CN.md">🇨🇳 中文</a>
</div>

## Research Focus

| Thread | Undergraduate foundation | Direction in computational chemistry |
|:--|:--|:--|
| **Mamba Structural Modeling** | State-space modeling, frequency/wavelet enhancement, long-range visual structure | Linear-complexity modeling of long-range interactions in atomistic systems |
| **Neuro-Symbolic AI** | Extract-Then-Compile, deterministic constraint solving, reliable LLM planning | Verifiable scientific agents with explicit evidence, applicability domains, and unknown boundaries |

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

<div align="center">
  <br />
  <i>“If you don't believe you will win, then why bother training and grinding.”</i>
  <br />
  — Anonymous
  <br /><br />
  <a href="https://unumbrela.github.io"><b>Academic Homepage →</b></a>
</div>
