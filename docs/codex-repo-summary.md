# Codex Repo Summary

This repository is a Jekyll-based lab homepage built on a Beautiful Jekyll variant.

## Purpose

- Manage the CAM Lab homepage locally.
- Update homepage content, people, publications, projects, research pages, and news.
- Validate changes with a Jekyll build or local serve workflow.

## Core Site Structure

- Root pages: `index.md`, `people.md`, `research.md`, `publications.md`, `projects.md`, `news.md`, `contact.md`
- Layouts: `_layouts/`
- Includes/partials: `_includes/`
- Structured content/data: `_data/`
- Collection content: `_news/`, `_research/`
- Assets: `assets/css/`, `assets/js/`, `assets/img/`
- Generated output: `_site/` (do not edit directly)
- Site config: `_config.yml`

## How Content Is Organized

The site is partly page-driven and partly data-driven.

- Home page:
  `index.md` is minimal.
  Most homepage sections are rendered through `_includes/home-sections.html`.
- People page:
  `people.md` renders from `_data/people.yml`.
- Publications page:
  `publications.md` renders from `_data/publications.yml`.
- Research overview page:
  `research.md` renders cards from `_data/research_fields.yml`.
- Research detail pages:
  `_research/*.md` are a Jekyll collection with output enabled.
- News page:
  `news.md` lists items from the `_news/*.md` collection.
- Projects page:
  `projects.md` renders from `_data/projects.yml`.

## Important Data Files

- `_data/people.yml`
  PI, students, and alumni source data.
- `_data/publications.yml`
  Year/month/sort_key-based publication list used on `publications.md`.
- `_data/projects.yml`
  Ongoing/completed project data.
- `_data/research_fields.yml`
  Research overview cards and links to detail pages.
- `_data/home_highlights.yml`
  Homepage highlight cards.

## Collections

Defined in `_config.yml`:

- `research`
  Output enabled.
  Permalink: `/research/:name/`
- `news`
  Output enabled.
  Permalink: `/news/:name/`

Defaults in `_config.yml` also attach:

- `back-to-research.html` before research collection pages
- `back-to-news.html` before news collection pages

## Main Rendering Flow

- `index.md` -> page layout -> `after-content: home-sections.html`
- `people.md` -> loops through `site.data.people`
- `publications.md` -> groups `site.data.publications` by year
- `research.md` -> loops through `site.data.research_fields`
- `news.md` -> loops through `site.news`
- `projects.md` -> loops through `site.data.projects`

## Styling and UI Customization

- Base theme comes from Beautiful Jekyll.
- Most lab-specific styling is in `assets/css/custom-styles.css`.
- This file defines:
  card layouts,
  people/profile styling,
  chip styling,
  CTA styling,
  large header image tuning.
- Navigation active-state behavior is customized in `_includes/nav.html`.

## Navigation

Navbar entries are defined in `_config.yml` under `navbar-links`:

- Home
- Research
- People
- Publications
- Projects
- News
- Contact

## Legacy Redirect-Style Pages

These pages exist mainly to point users to newer consolidated pages:

- `publication.md` -> `publications`
- `professor.md` -> `people`
- `students.md` -> `people`
- `alumni.md` -> `people`

## Build and Run

Preferred validation command:

```bash
bundle exec jekyll build --future
```

Local serve command:

```bash
bundle exec jekyll serve --livereload --force_polling --host 0.0.0.0
```

Docker fallback:

```bash
./run_local.sh
```

`run_local.sh` starts `jekyll/jekyll:4` and runs `bundle install` followed by local serve.

## Current Environment Note

During analysis on 2026-04-01, `bundle exec jekyll build --future` could not be run in the current shell because `bundle` was not installed in the environment.

## Maintenance Guidance

- Do not edit `_site/` directly.
- For content updates, prefer editing `_data/*.yml` or collection Markdown files rather than duplicating content in page files.
- For visible layout changes, inspect `assets/css/custom-styles.css`, relevant include files, and page front matter.
- For homepage changes, check both `index.md` and `_includes/home-sections.html`.
- For page routing or navigation changes, inspect `_config.yml`.

## Good First Places To Check For Future Tasks

- Homepage content issue:
  `index.md`, `_includes/home-sections.html`, `_data/home_highlights.yml`
- People update:
  `people.md`, `_data/people.yml`
- Publication update:
  `publications.md`, `_data/publications.yml`
- Research update:
  `research.md`, `_data/research_fields.yml`, `_research/`
- News update:
  `news.md`, `_news/`
- Visual issue:
  `assets/css/custom-styles.css`, `_layouts/`, `_includes/`
- Navigation/config issue:
  `_config.yml`, `_includes/nav.html`
