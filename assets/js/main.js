/* YayCommerce — interactions */
(function () {
  "use strict";

  /* Sticky header shadow */
  const header = document.querySelector(".site-header");
  const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile nav */
  const toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => document.body.classList.toggle("nav-open"));
    document.querySelectorAll(".nav-links a").forEach((a) =>
      a.addEventListener("click", () => document.body.classList.remove("nav-open"))
    );
  }

  /* Scroll reveal */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = e.target.getAttribute("data-delay") || 0;
            e.target.style.transitionDelay = delay + "ms";
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* Animated counters */
  const counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    const fmt = (n, el) =>
      (el.dataset.prefix || "") + Math.round(n).toLocaleString() + (el.dataset.suffix || "");
    const co = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.count);
        const dur = 1600;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = fmt(target * eased, el);
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = fmt(target, el);
        };
        requestAnimationFrame(tick);
        co.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach((el) => co.observe(el));
  }

  /* Pricing toggle */
  const sw = document.querySelector("[data-switch]");
  if (sw) {
    sw.addEventListener("click", () => {
      const on = sw.classList.toggle("is-on");
      sw.setAttribute("aria-checked", on);
      document.querySelectorAll("[data-monthly]").forEach((m) => (m.hidden = on));
      document.querySelectorAll("[data-yearly]").forEach((y) => (y.hidden = !on));
    });
  }

  /* FAQ accordion */
  document.querySelectorAll(".faq-q").forEach((q) => {
    q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      const ans = item.querySelector(".faq-a");
      const open = item.classList.contains("is-open");
      document.querySelectorAll(".faq-item.is-open").forEach((o) => {
        if (o !== item) { o.classList.remove("is-open"); o.querySelector(".faq-a").style.maxHeight = null; o.querySelector(".faq-q").setAttribute("aria-expanded", "false"); }
      });
      item.classList.toggle("is-open", !open);
      q.setAttribute("aria-expanded", String(!open));
      ans.style.maxHeight = open ? null : ans.scrollHeight + "px";
    });
  });

  /* Footer year */
  const yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();

  /* Newsletter / contact form (demo) */
  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = form.querySelector("[data-form-note]");
      const btn = form.querySelector("button[type=submit]");
      if (btn) { btn.disabled = true; btn.textContent = "Sent ✓"; }
      if (note) { note.hidden = false; }
      form.reset();
      setTimeout(() => { if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label || "Submit"; } }, 2500);
    });
  });
})();
