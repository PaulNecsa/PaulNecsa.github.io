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

  /* ---------- Digital twin: particle assembly (hero) ---------- */
  var tc = document.getElementById("twinCanvas");
  if (tc && tc.getContext) {
    var tctx = tc.getContext("2d");
    var TW = tc.width, TH = tc.height;
    var statusEl = document.getElementById("twinStatus");
    var NAME = "Paul Necsa", TOTAL_PTS = 0;

    function cssColor(name, fallback) {
      var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      return v || fallback;
    }
    var colTeal = cssColor("--accent", "#2fb9a9");
    var colGold = cssColor("--accent-2", "#c9a96a");

    var off = document.createElement("canvas");
    off.width = TW; off.height = TH;
    var octx = off.getContext("2d");
    octx.fillStyle = "#ffffff";
    octx.font = "700 84px ui-monospace, Consolas, 'Cascadia Code', monospace";
    octx.textBaseline = "middle";
    octx.fillText(NAME, 8, TH / 2);
    var data = octx.getImageData(0, 0, TW, TH).data;
    var targets = [];
    for (var py = 0; py < TH; py += 5) {
      for (var px = 0; px < TW; px += 5) {
        if (data[(py * TW + px) * 4 + 3] > 128) targets.push([px, py]);
      }
    }
    TOTAL_PTS = targets.length;
    var parts = targets.map(function (t) {
      return { x: Math.random() * TW, y: Math.random() * TH,
               tx: t[0], ty: t[1], g: Math.random() < 0.12 };
    });

    function drawFinal() {
      tctx.clearRect(0, 0, TW, TH);
      parts.forEach(function (q) {
        tctx.fillStyle = q.g ? colGold : colTeal;
        tctx.fillRect(q.tx, q.ty, 3, 3);
      });
      if (statusEl) statusEl.textContent = "twin.sync — live · " + TOTAL_PTS.toLocaleString("en-US") + " pts · Δ 0.02 mm";
    }

    if (reduced) {
      drawFinal();
    } else {
      var DUR = 3200, HOLD = 2800, t0 = null;
      var frame = function (ts) {
        if (t0 === null) t0 = ts;
        var el = (ts - t0) % (DUR + HOLD);
        var p = Math.min(el / DUR, 1);
        var e = 1 - Math.pow(1 - p, 3);
        if (el < 40 && ts - t0 > DUR) {
          colTeal = cssColor("--accent", "#2fb9a9");
          colGold = cssColor("--accent-2", "#c9a96a");
          parts.forEach(function (q) { q.x = Math.random() * TW; q.y = Math.random() * TH; });
        }
        tctx.clearRect(0, 0, TW, TH);
        parts.forEach(function (q) {
          var x = q.x + (q.tx - q.x) * e, y = q.y + (q.ty - q.y) * e;
          tctx.fillStyle = q.g ? colGold : colTeal;
          tctx.globalAlpha = 0.35 + 0.65 * e;
          tctx.fillRect(x, y, 3, 3);
        });
        tctx.globalAlpha = 1;
        if (statusEl) {
          statusEl.textContent = p < 1
            ? "twin.assemble — " + Math.round(p * 100) + "% · " + Math.round(e * TOTAL_PTS).toLocaleString("en-US") + " pts"
            : "twin.sync — live · " + TOTAL_PTS.toLocaleString("en-US") + " pts · Δ 0.02 mm";
        }
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }
  }

  /* ---------- Visitor telemetry (GoatCounter) ---------- */
  var gcEl = document.getElementById("gcCount");
  if (gcEl && window.fetch) {
    fetch("https://paulnecsa.goatcounter.com/counter/TOTAL.json")
      .then(function (r) { if (!r.ok) { throw new Error(String(r.status)); } return r.json(); })
      .then(function (d) { gcEl.textContent = d.count; })
      .catch(function () {
        var p = gcEl.closest(".telemetry");
        if (p) { p.innerHTML = '<span class="dt-dot" aria-hidden="true"></span>twin.telemetry — online · cookie-free'; }
      });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("#year").forEach(function (y) {
    y.textContent = String(new Date().getFullYear());
  });
})();
