/* main.js — renders every page from window.SITE (see content.js). */
(function () {
  const S = window.SITE;
  const page = document.body.dataset.page;

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = (sel) => document.querySelector(sel);

  const icons = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    substack: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 8.25H1.46V5.4h21.08v2.85ZM1.46 10.8V24L12 18.11 22.54 24V10.8H1.46ZM22.54 0H1.46v2.84h21.08V0Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 4h6v6M20 4l-9 9M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  };

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem("theme");
    if (saved) root.dataset.theme = saved;
  } catch (e) {}
  const isDark = () =>
    root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;

  /* ---------- Header & footer ---------- */
  const pages = [
    ["index.html", "intro", "About"],
    ["experience.html", "experience", "Experience"],
    ["projects.html", "projects", "Projects"],
    ["coursework.html", "coursework", "Coursework"],
  ];
  $("#site-header").innerHTML = `
    <div class="wrap nav">
      <a class="brand" href="index.html">${esc(S.name)}</a>
      <ul class="nav-links" id="nav-links">
        ${pages.map(([href, key, label]) => `<li><a href="${href}" ${key === page ? 'aria-current="page"' : ""}>${label}</a></li>`).join("")}
      </ul>
      <div class="nav-right">
        <button class="icon-btn" id="theme-btn" aria-label="Toggle dark mode"></button>
        <button class="icon-btn menu-btn" id="menu-btn" aria-label="Open menu" aria-expanded="false">${icons.menu}</button>
      </div>
    </div>`;
  const themeBtn = $("#theme-btn");
  const paintThemeBtn = () => (themeBtn.innerHTML = isDark() ? icons.sun : icons.moon);
  paintThemeBtn();
  themeBtn.addEventListener("click", () => {
    root.dataset.theme = isDark() ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    paintThemeBtn();
  });
  $("#menu-btn").addEventListener("click", (e) => {
    const open = $("#nav-links").classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", open);
  });

  const socialLinks = () =>
    [
      S.socials.github && `<a href="${esc(S.socials.github)}" target="_blank" rel="noopener">GitHub</a>`,
      S.socials.linkedin && `<a href="${esc(S.socials.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,
      S.socials.substack && `<a href="${esc(S.socials.substack)}" target="_blank" rel="noopener">Substack</a>`,
      S.email && `<a href="mailto:${esc(S.email)}">Email</a>`,
    ].filter(Boolean).join("");
  $("#site-footer").innerHTML = `
    <div class="wrap">
      <span>© ${new Date().getFullYear()} ${esc(S.name)}</span>
      <span class="socials">${socialLinks()}</span>
    </div>`;

  /* ---------- Helpers ---------- */
  const photo = (p, label) => `
    <div class="photo">
      <div class="fallback"><div><strong>${esc(S.initials)}</strong>${esc(label || "Add a photo in content.js")}</div></div>
      <img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy" onerror="this.remove()" style="position:relative">
    </div>`;
  const tags = (list) => (list && list.length ? `<div class="tags">${list.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : "");

  function setupFilters(container, items, keyFn, render) {
    const keys = ["All", ...new Set(items.flatMap(keyFn))];
    container.innerHTML = keys.map((k, i) => `<button class="filter${i === 0 ? " active" : ""}" data-key="${esc(k)}">${esc(k)}</button>`).join("");
    container.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter");
      if (!btn) return;
      container.querySelectorAll(".filter").forEach((b) => b.classList.toggle("active", b === btn));
      const k = btn.dataset.key;
      render(k === "All" ? items : items.filter((it) => keyFn(it).includes(k)));
    });
    render(items);
  }

  /* ---------- Page renderers ---------- */
  const renderers = {
    intro() {
      const [hero, side, ...rest] = S.photos;
      const [first, ...last] = S.name.split(" ");
      $("#content").innerHTML = `
        <section class="hero">
          <div>
            <p class="eyebrow">Hello, I'm</p>
            <h1>${esc(first)}${last.length ? ` <span>${esc(last.join(" "))}</span>` : ""}</h1>
            <p class="tagline">${esc(S.tagline)}</p>
            <div class="btn-row">
              <a class="btn primary" href="projects.html">See my work</a>
              ${S.email ? `<a class="btn" href="mailto:${esc(S.email)}">${icons.mail} Get in touch</a>` : ""}
              ${S.resume ? `<a class="btn" href="${esc(S.resume)}" target="_blank">Résumé</a>` : ""}
            </div>
          </div>
          ${hero ? photo(hero, "Add your main photo") : ""}
        </section>

        <h2 class="section-title">About me</h2>
        <div class="about-grid">
          <div>
            ${S.about.map((p) => `<p>${esc(p)}</p>`).join("")}
            ${S.interests?.length ? `<p class="eyebrow" style="margin-top:24px">Interests</p>${tags(S.interests)}` : ""}
          </div>
          <aside class="about-side">
            ${side ? `<figure class="side-photo">${photo(side)}${side.caption ? `<figcaption>${esc(side.caption)}</figcaption>` : ""}</figure>` : ""}
            <div class="card facts">
              <dl>${S.quickFacts.map((f) => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join("")}</dl>
            </div>
          </aside>
        </div>

        ${rest.length ? `
          <h2 class="section-title">A few more photos</h2>
          <div class="gallery">
            ${rest.map((p) => `<figure>${photo(p, p.caption || "Add a photo")}${p.caption ? `<figcaption>${esc(p.caption)}</figcaption>` : ""}</figure>`).join("")}
          </div>` : ""}`;
    },

    experience() {
      $("#content").innerHTML = `
        <div class="timeline">
          ${S.experience.map((j) => `
            <article class="job">
              <div class="card">
                <div class="job-head">
                  <div class="job-title">
                    ${j.logo ? `<div class="logo-tile"><img src="${esc(j.logo)}" alt="${esc(j.company)} logo"></div>` : ""}
                    <div>
                      <h2>${esc(j.role)}</h2>
                      <div class="company">${esc(j.company)}</div>
                    </div>
                  </div>
                  <div class="meta">${[j.start, j.end].filter(Boolean).map(esc).join(" – ")}${j.start || j.end ? "<br>" : ""}${esc(j.location)}</div>
                </div>
                ${j.summary ? `<p class="summary">${esc(j.summary)}</p>` : ""}
                ${j.highlights?.length ? `<ul>${j.highlights.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
                ${j.projects?.length ? `
                  <div class="subprojects">
                    <h3>${j.projects.length} project${j.projects.length > 1 ? "s" : ""}</h3>
                    ${j.projects.map((p) => `
                      <details>
                        <summary>${esc(p.name)}</summary>
                        <ul>${(p.bullets || []).map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
                        ${p.link ? `<a class="btn" href="${esc(p.link.href)}" target="_blank" rel="noopener">${icons.external} ${esc(p.link.label)}</a>` : ""}
                      </details>`).join("")}
                  </div>` : ""}
                ${tags(j.tags)}
              </div>
            </article>`).join("")}
        </div>`;
    },

    projects() {
      $("#content").innerHTML = `<div class="filters" id="filters"></div><div class="project-list" id="grid"></div>`;
      const grid = $("#grid");
      const link = (href, icon, label) =>
        href ? `<a class="btn" href="${esc(href)}" target="_blank" rel="noopener">${icon} ${label}</a>` : "";
      setupFilters($("#filters"), S.projects, (p) => [p.category], (list) => {
        grid.innerHTML = list.length ? list.map((p) => `
          <article class="card project">
            <p class="eyebrow">${esc(p.category)}</p>
            <h2>${esc(p.title)}</h2>
            <p class="lede">${esc(p.description)}</p>
            ${p.bullets?.length ? `<ul>${p.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
            ${tags(p.tags)}
            ${p.github || p.paper || p.demo ? `
              <div class="btn-row">
                ${link(p.github, icons.github, "Code on GitHub")}
                ${link(p.paper, icons.external, "Read the paper")}
                ${link(p.demo, icons.external, "Live demo")}
              </div>` : ""}
            ${p.writing?.length ? `
              <div class="writing">
                <h3>${icons.substack} Writing on Substack</h3>
                <div class="post-links">
                  ${p.writing.map((w) => `
                    <a class="post-link" href="${esc(w.url)}" target="_blank" rel="noopener">
                      <span>${esc(w.title)}</span><span class="arrow">Read →</span>
                    </a>`).join("")}
                </div>
                <details class="embeds">
                  <summary>Show Substack preview${p.writing.length > 1 ? "s" : ""}</summary>
                  <div class="writing-grid">
                    ${p.writing.map((w) => `
                      <div class="substack-post-embed">
                        <p lang="en">${esc(w.title)}</p>
                        <a data-post-link href="${esc(w.url)}">Read on Substack</a>
                      </div>`).join("")}
                  </div>
                </details>
              </div>` : ""}
          </article>`).join("") : `<p class="empty">No projects match that filter.</p>`;
        grid.querySelectorAll("details.embeds").forEach((d) =>
          d.addEventListener("toggle", () => d.open && loadSubstackEmbeds(), { once: true }));
      });
    },

    coursework() {
      const edu = [].concat(S.education || []);
      $("#content").innerHTML = `
        <div class="edu-list">
          ${edu.map((e) => `
            <div class="card edu">
              <div><h2>${esc(e.school)}</h2><p>${esc(e.degree)}</p></div>
              <div class="edu-meta">${e.dates ? `<p>${esc(e.dates)}</p>` : ""}${e.gpa ? `<p>GPA: ${esc(e.gpa)}</p>` : ""}</div>
            </div>`).join("")}
        </div>
        <div class="filters" id="filters"></div>
        <p class="course-count" id="count"></p>
        <div class="grid" id="grid"></div>`;
      const grid = $("#grid");
      setupFilters($("#filters"), S.courses, (c) => [c.category], (list) => {
        $("#count").textContent = `${list.length} course${list.length === 1 ? "" : "s"}`;
        grid.innerHTML = list.map((c) => `
          <article class="card course">
            ${c.code || c.term ? `<div class="course-top"><span class="code">${esc(c.code)}</span><span class="term">${esc(c.term)}</span></div>` : ""}
            <h2>${esc(c.name)}</h2>
            <p>${esc(c.description)}</p>
            ${tags([c.category])}
          </article>`).join("");
      });
    },
  };

  // Substack's official embed script turns .substack-post-embed blocks into post cards.
  function loadSubstackEmbeds() {
    if (!document.querySelector(".substack-post-embed")) return;
    const old = document.getElementById("substack-embed-js");
    if (old) old.remove();
    const s = document.createElement("script");
    s.id = "substack-embed-js";
    s.src = "https://substack.com/embedjs/embed.js";
    s.async = true;
    document.body.appendChild(s);
  }

  renderers[page]?.();
})();
