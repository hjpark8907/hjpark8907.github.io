(function () {
  function slugify(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  function buildSectionNav() {
    var contentRoot = document.querySelector("main .col-xl-8, main .col-lg-10, main .col");
    if (!contentRoot) return;

    var headings = Array.prototype.slice.call(contentRoot.querySelectorAll("h2"));
    if (headings.length < 2) return;

    var nav = document.createElement("nav");
    nav.className = "section-nav";
    nav.setAttribute("aria-label", "Page sections");

    var list = document.createElement("div");
    list.className = "section-nav-list";

    var usedIds = {};
    headings.forEach(function (heading, idx) {
      var rawText = (heading.textContent || "").trim();
      if (!rawText) return;

      if (!heading.id) {
        var base = slugify(rawText) || "section-" + (idx + 1);
        var nextId = base;
        var seq = 2;
        while (usedIds[nextId] || document.getElementById(nextId)) {
          nextId = base + "-" + seq;
          seq += 1;
        }
        heading.id = nextId;
      }
      usedIds[heading.id] = true;

      var link = document.createElement("a");
      link.className = "section-nav-link";
      link.href = "#" + heading.id;
      link.textContent = rawText;
      list.appendChild(link);
    });

    if (!list.children.length) return;

    nav.appendChild(list);
    var anchor = headings[0];
    contentRoot.insertBefore(nav, anchor);

    list.addEventListener("click", function (evt) {
      var target = evt.target;
      if (!target.classList.contains("section-nav-link")) return;
      evt.preventDefault();

      var id = target.getAttribute("href").slice(1);
      var section = document.getElementById(id);
      if (!section) return;

      var navOffset = 92;
      var top = section.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: top, behavior: "smooth" });
      history.replaceState(null, "", "#" + id);
    });

    var links = Array.prototype.slice.call(list.querySelectorAll(".section-nav-link"));
    function setActive(id) {
      links.forEach(function (link) {
        var active = link.getAttribute("href") === "#" + id;
        link.classList.toggle("active", active);
      });
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0.01,
      }
    );

    headings.forEach(function (heading) {
      observer.observe(heading);
    });

    if (headings[0] && headings[0].id) {
      setActive(headings[0].id);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildSectionNav);
  } else {
    buildSectionNav();
  }
})();
