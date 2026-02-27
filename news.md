---
layout: page
title: News
subtitle: Announcements, Awards, and Events
cover-img: /assets/img/main_banner.png
---

{% assign items = site.news | sort: "date" | reverse %}
{% for item in items %}
<article class="news-item">
  <p class="news-meta">{{ item.date | date: "%Y-%m-%d" }} · {{ item.category }}</p>
  <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
  <p>{{ item.excerpt | strip_html | truncatewords: 35 }}</p>
</article>
{% endfor %}
