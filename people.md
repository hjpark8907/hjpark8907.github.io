---
layout: page
title: People
subtitle: PI, Students, and Alumni
cover-img: /assets/img/main_banner.png
---

## PI
{% assign pi = site.data.people.pi %}
<div class="profile-card">
  <img src="{{ pi.photo | relative_url }}" alt="{{ pi.name }}" loading="lazy" width="180" height="180">
  <div>
    <h3>{{ pi.name }}</h3>
    <p>{{ pi.role }}</p>
    <p>{{ pi.affiliation }}</p>
    <p>Email: <a href="mailto:{{ pi.email }}">{{ pi.email }}</a></p>
    <p>Office: {{ pi.office }}</p>
  </div>
</div>

## Students
<div class="people-grid">
{% for person in site.data.people.students %}
  <article class="person-card">
    <img src="{{ person.photo | relative_url }}" alt="{{ person.name_en | default: person.name }}" loading="lazy" width="150" height="150">
    <h3 class="person-name">
      <span class="name-en">{{ person.name_en | default: person.name }}</span>
      {% if person.name_ko %}<span class="name-ko">({{ person.name_ko }})</span>{% endif %}
    </h3>
    <p>{{ person.program }}</p>
    <p>{{ person.topic }}</p>
    <p><a href="mailto:{{ person.email }}">{{ person.email }}</a></p>
  </article>
{% endfor %}
</div>

## Alumni
<ul>
{% for person in site.data.people.alumni %}
  <li><strong>{{ person.name }}</strong> - {{ person.note }}</li>
{% endfor %}
</ul>
