# Repository Guidelines

## Project Structure & Module Organization
This repository is a Jekyll site (Beautiful Jekyll variant) for a lab homepage.

- Root pages: `index.md`, `aboutme.md`, `research.md`, `publication.md`, `students.md`, etc.
- Blog posts: `_posts/` (filename format: `YYYY-MM-DD-title.md`).
- Layout templates: `_layouts/`.
- Reusable partials: `_includes/`.
- Site data: `_data/` (for small structured YAML content).
- Static assets: `assets/css/`, `assets/js/`, `assets/img/`.
- Build output: `_site/` (generated; do not hand-edit).
- Site-wide config: `_config.yml`.

## Build, Test, and Development Commands
- `bundle install`: install Ruby/Jekyll dependencies.
- `bundle exec jekyll serve --livereload --force_polling --host 0.0.0.0`: run local dev server.
- `bundle exec jekyll build --future`: production-style build check (also mirrors CI intent).
- `./run_local.sh`: run the project in Docker (`jekyll/jekyll:4`) with live reload on port `4000`.

Use Docker if local Ruby versions conflict; otherwise native `bundle exec` is faster for iteration.

## Coding Style & Naming Conventions
- Use Markdown for content pages when possible; keep YAML front matter at the top of every rendered page.
- Prefer 2-space indentation in YAML (`_config.yml`, `_data/*.yml`).
- Keep include/layout names lowercase with hyphens (for example, `_includes/footer-scripts.html`).
- Keep asset names descriptive and stable (`assets/img/lab-logo.png`, `assets/css/custom-styles.css`).
- Avoid editing `_site/` directly; edit source files and rebuild.

## Testing Guidelines
There is no unit-test framework in this repository. Treat a clean Jekyll build as the primary validation:

- Run `bundle exec jekyll build --future` before opening a PR.
- Manually review key pages (home, members, publications) in local serve mode.
- For post/page changes, verify front matter renders and links/images resolve.

## Commit & Pull Request Guidelines
Recent history favors short, imperative commit titles (for example, `Update publication.md`, `Delete assets/img/SMPark.jpg`).

- Keep commit subjects concise and action-first (`Update`, `Add`, `Fix`, `Refactor`).
- Group related content changes in one commit.
- PRs should include: summary of changed pages/sections, screenshots for visible UI/layout changes, and any config impacts (`_config.yml`, comments/analytics, navigation).
- Link related issues when applicable and confirm local/CI build success.
