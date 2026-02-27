---
layout: page
title: Projects
subtitle: Ongoing and Completed Research Projects
cover-img: /assets/img/main_banner.png
---

## Ongoing
<div class="card-grid">
{% for project in site.data.projects %}
  {% if project.status == "ongoing" %}
  <article class="info-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.summary }}</p>
    <p><strong>Period:</strong> {{ project.period }}</p>
    <p><strong>Sponsor:</strong> {{ project.sponsor }}</p>
  </article>
  {% endif %}
{% endfor %}
</div>

## Completed
<div class="card-grid">
{% for project in site.data.projects %}
  {% if project.status == "completed" %}
  <article class="info-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.summary }}</p>
    <p><strong>Period:</strong> {{ project.period }}</p>
    <p><strong>Sponsor:</strong> {{ project.sponsor }}</p>
  </article>
  {% endif %}
{% endfor %}
</div>
