docker run --rm -it \
  -p 4000:4000 -p 35729:35729 \
  -v "$PWD:/srv/jekyll" \
  jekyll/jekyll:4 \
  bash -lc "bundle install && bundle exec jekyll serve --livereload --force_polling --host 0.0.0.0"
