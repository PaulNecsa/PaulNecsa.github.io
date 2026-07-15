/* Metrology Console — interactions (no dependencies) */
(function () {
  "use strict";

  /* ---------- Theme toggle (dark default, remembered) ---------- */
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) { /* private mode */ }
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }
  function syncIcon() {
    var btns = document.querySelectorAll(".theme-toggle i");
    var dark = root.getAttribute("data-theme") !== "light";
    btns.forEach(function (i) {
      i.className = dark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    });
  }
  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncIcon();
    });
  });
  syncIcon();

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById("navBurger");
  var links = document.getElementById("navLinks");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  /* ---------- Terminal typing effect (respects reduced motion) ---------- */
  var target = document.getElementById("typeTarget");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (target) {
    var phrases = [
      "dim.check — status: PASS ±0.02 mm",
      "loading publications … done",
      "injection molding × 3D metrology",
      "probing surface … 3 pts acquired"
    ];
    if (reduced) {
      target.textContent = phrases[0];
    } else {
      var pi = 0, ci = 0, deleting = false;
      (function type() {
        var p = phrases[pi];
        target.textContent = p.slice(0, ci);
        if (!deleting && ci < p.length) { ci++; setTimeout(type, 42); }
        else if (!deleting) { deleting = true; setTimeout(type, 2600); }
        else if (ci > 0) { ci--; setTimeout(type, 16); }
        else { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 350); }
      })();
    }
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- BibTeX toggle ---------- */
  document.querySelectorAll(".bibtex-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var details = btn.closest(".pub").querySelector("details");
      if (details) { details.open = !details.open; }
    });
  });

  /* ---------- YouTube facade: load player only on click ---------- */
  document.querySelectorAll(".video-facade").forEach(function (box) {
    function load() {
      var id = box.getAttribute("data-video-id");
      if (!id || id.indexOf("VIDEO_ID") === 0) {
        box.querySelector(".play-btn").style.opacity = "0.4";
        return; /* placeholder — nu există încă un ID real */
      }
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1";
      iframe.title = "YouTube video player";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      box.innerHTML = "";
      box.appendChild(iframe);
    }
    box.addEventListener("click", load);
    box.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); load(); }
    });
  });

  /* ---------- Footer year ---------- */
  document.querySelectorAll("#year").forEach(function (y) {
    y.textContent = String(new Date().getFullYear());
  });
})();
