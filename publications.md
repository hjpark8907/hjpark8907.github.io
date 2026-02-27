---
layout: page
title: Publications
subtitle: Journal, Conference, and Preprint Outputs
cover-img: /assets/img/main_banner.png
---

{% assign grouped = site.data.publications | group_by: "year" | sort: "name" | reverse %}
{% for year_group in grouped %}
## {{ year_group.name }}

{% assign year_pubs = year_group.items | sort: "month" | reverse %}
<ol>
{% for pub in year_pubs %}
  <li>
    {{ pub.authors }}. <strong>{{ pub.title }}</strong>. {{ pub.venue }}{% if pub.note %}, {{ pub.note }}{% endif %}{% if pub.rank %}, Rank {{ pub.rank }}{% endif %}.
    {% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener">DOI</a>{% endif %}
  </li>
{% endfor %}
</ol>
{% endfor %}

## Preprints & In Preparation
- Designing Bimodal Particle Distributions for Battery Electrode Calendaring via DEM and Surrogate Optimization

## International Conference Proceedings
- Kim HJ, Park HJ, Kim J. Learning Non-Newtonian Free Surface Flow Dynamics: A Graph Neural Network Trained with Smoothed Particle Hydrodynamics. ACFM2025, Sep 2025.
- Park HJ, Kim J. Insights into granular material flow modeling: DEM vs. SPH perspectives. ICTAM 2024, Daegu, Korea. Aug 2024.
- Park HJ, Seo HD, Lee PS. A new boundary treatment scheme to simulate two-dimensional free surface flows in SPH. PARTICLES 2019, Madrid, Spain. Oct 2019.
- Seo HD, Park HJ, Lee PS. SPH Simulation of 2D Free Surface Flow using a New Density Correction Method. PARTICLES 2019, Madrid, Spain. Oct 2019.
- Lee PS, Park HJ, Seo HD. Density correction and boundary treatment in SPH. The Sixth KAIST-SJTU-U.Tokyo symposium, Shanghai, China. Oct 2019.
- Park HJ, Choi H, Shin S, Lee PS. Numerical simulation of explosive gas bubbles using BEM. The fifth KAIST-SJTU-U.Tokyo symposium, Sep 2018.

## Domestic Conference Proceedings
- Park HJ. 배터리 제조 공정의 시뮬레이션 기반 최적설계: 전극 캘린더링과 분리막 압출 공정 적용 연구, 2025 한국유변학회 추계학술발표회, Nov 2025.
- Kim HJ, Park HJ, Seo S. 개인화된 디지털 헬스케어를 위한 수치해석 시뮬레이션. 한국 CDE 2023 하계학술대회, Aug 2023.
- Seo HD, Park HJ, Lee PS. 입자 완화 유체 동역학의 밀도 추정 오차에 관한 연구. KSME 2019 춘계학술대회, Apr 2019.
- Park HJ, Seo HD, An CW, Lee PS. Simulation of explosive gas bubbles under zero gravity using boundary element method (경계요소법을 이용한 무중력 하에서의 폭발 가스버블의 거동모사). Naval ship technology & weapon systems seminar (함정기술세미나), Oct 2017.
- Seo HD, Park HJ, Lee PS. 구조물의 탄성 효과를 고려한 2차원 댐 붕괴 문제의 SPH-FEM 연동해석 기법에 대한 연구. KSME 2017 춘추학술대회, May 2017.
- Seo HD, Park HJ, Lee PS. SPH 기법을 이용한 2 차원 댐 붕괴 문제의 압력 추정에 관한 연구. 한국시뮬레이션학회 2017 춘계학술대회, Apr 2017.
- Park HJ, Seo HD, Lee PS. 2 차원 기포상승 시뮬레이션을 위한 이동최소자승법 기반 SPH 모델의 개발. 한국시뮬레이션학회 2017 춘계학술대회, Apr 2017.
- Park HJ, Kim HJ, Lee PS, Chung H. 수중폭발로 인한 유체응답의 수치적·실험적 거동 비교. Naval ship technology & weapon systems seminar (함정기술세미나), Oct 2016.
