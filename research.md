---
layout: page
title: Research
subtitle: Focus Areas and Methods
cover-img: /assets/img/main_banner.png
---

<div class="card-grid">
{% for field in site.data.research_fields %}
  <article class="info-card">
    <h3>{{ field.title }}</h3>
    <p>{{ field.summary }}</p>
    <p><strong>Keywords:</strong> {{ field.keywords | join: ", " }}</p>
    {% if field.detail_page %}
      <a class="btn btn-primary btn-sm" href="{{ field.detail_page | relative_url }}">View Details</a>
    {% endif %}
  </article>
{% endfor %}
</div>
