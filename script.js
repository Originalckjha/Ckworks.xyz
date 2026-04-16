"use strict";
(() => {
  // src/loader.ts
  function initLoader() {
    return new Promise((resolve) => {
      const loader = document.getElementById("loader");
      const loaderText = document.getElementById("loader-text");
      const loaderBar = document.getElementById("loader-bar");
      if (!loader || !loaderText || !loaderBar) {
        resolve();
        return;
      }
      const brand = "CKJ.";
      let i = 0;
      loaderText.textContent = "";
      const typeInterval = setInterval(() => {
        loaderText.textContent += brand[i++];
        if (i >= brand.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            loaderBar.style.width = "100%";
            setTimeout(() => {
              loader.classList.add("loader-exit");
              setTimeout(() => {
                loader.style.display = "none";
                resolve();
              }, 700);
            }, 600);
          }, 200);
        }
      }, 130);
    });
  }

  // src/cursor.ts
  var TRAIL_MAX = 14;
  var SPRING = 0.12;
  var DAMPING = 0.75;
  function initCursor() {
    const dot = document.getElementById("cursor");
    const ring = document.getElementById("cursor-follower");
    if (!dot || !ring) return;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let velX = 0, velY = 0;
    const canvas = document.createElement("canvas");
    canvas.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9997;";
    document.body.prepend(canvas);
    const ctx = canvas.getContext("2d");
    const trail = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
      trail.push({ x: mouseX, y: mouseY, life: 1 });
      if (trail.length > TRAIL_MAX) trail.shift();
    });
    const animate = () => {
      velX += (mouseX - ringX) * SPRING;
      velY += (mouseY - ringY) * SPRING;
      velX *= DAMPING;
      velY *= DAMPING;
      ringX += velX;
      ringY += velY;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      trail.forEach((pt, idx) => {
        const t = idx / trail.length;
        const size = t * 4.5;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${t * 0.35})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
  }

  // src/particles.ts
  var REPEL_RADIUS = 110;
  var REPEL_FORCE = 2.8;
  var DAMPING2 = 0.96;
  var MAX_DIST = 130;
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }
  function lerpColor(from, to, t) {
    return {
      r: lerp(from.r, to.r, t),
      g: lerp(from.g, to.g, t),
      b: lerp(from.b, to.b, t)
    };
  }
  function initParticles() {
    const canvas = document.getElementById("particles-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = 0, H = 0;
    let particles = [];
    let mouseX = -9999, mouseY = -9999;
    const CYAN = { r: 0, g: 212, b: 255 };
    const MINT = { r: 0, g: 255, b: 178 };
    let currentColor = { ...CYAN };
    let targetColor = { ...CYAN };
    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    const spawn = () => {
      const count = Math.min(Math.floor(W * H / 13e3), 90);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.4
      }));
    };
    const frame = () => {
      ctx.clearRect(0, 0, W, H);
      currentColor = lerpColor(currentColor, targetColor, 0.025);
      const { r, g, b } = currentColor;
      const fill = `rgba(${r | 0},${g | 0},${b | 0},0.65)`;
      const stroke = (alpha) => `rgba(${r | 0},${g | 0},${b | 0},${alpha.toFixed(2)})`;
      particles.forEach((p) => {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const d = Math.hypot(dx, dy);
        if (d < REPEL_RADIUS && d > 0) {
          const force = (REPEL_RADIUS - d) / REPEL_RADIUS * REPEL_FORCE;
          p.vx += dx / d * force;
          p.vy += dy / d * force;
        }
        p.vx *= DAMPING2;
        p.vy *= DAMPING2;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = fill;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.hypot(dx, dy);
          if (d < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = stroke(0.18 * (1 - d / MAX_DIST));
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(frame);
    };
    resize();
    spawn();
    frame();
    window.addEventListener("resize", () => {
      resize();
      spawn();
    }, { passive: true });
    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }, { passive: true });
    const tuitionEl = document.getElementById("tuition");
    const workEl = document.getElementById("work");
    window.addEventListener("scroll", () => {
      const y = window.pageYOffset;
      const tuitionY = tuitionEl?.offsetTop ?? Infinity;
      const workY = workEl?.offsetTop ?? Infinity;
      targetColor = y >= tuitionY - 200 && y < workY - 200 ? { ...MINT } : { ...CYAN };
    }, { passive: true });
  }

  // src/scroll.ts
  function initScrollProgress() {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;
    window.addEventListener(
      "scroll",
      () => {
        const total = document.body.scrollHeight - window.innerHeight;
        bar.style.width = total > 0 ? `${window.pageYOffset / total * 100}%` : "0%";
      },
      { passive: true }
    );
  }
  function initScrollReveal() {
    const els = document.querySelectorAll("[data-reveal]");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = parseInt(el.dataset.delay ?? "0", 10);
          setTimeout(() => el.classList.add("revealed"), delay);
          io.unobserve(el);
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  }
  function initNavHighlight() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    if (!links.length) return;
    window.addEventListener(
      "scroll",
      () => {
        let current = "";
        document.querySelectorAll("section[id], footer[id]").forEach((el) => {
          if (window.pageYOffset >= el.offsetTop - 200) current = el.id;
        });
        links.forEach((link) => {
          link.classList.toggle(
            "nav-active",
            link.getAttribute("href") === `#${current}`
          );
        });
      },
      { passive: true }
    );
  }

  // src/text.ts
  var SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";
  function initTextScramble() {
    document.querySelectorAll("[data-scramble]").forEach((el, idx) => {
      const original = el.textContent ?? "";
      let iteration = 0;
      setTimeout(() => {
        const iv = setInterval(() => {
          el.textContent = original.split("").map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return original[i];
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }).join("");
          iteration += 0.45;
          if (iteration >= original.length) {
            el.textContent = original;
            clearInterval(iv);
          }
        }, 35);
      }, idx * 280);
    });
  }
  function initTypewriter() {
    const el = document.querySelector("[data-typewriter]");
    if (!el) return;
    const text = el.dataset.typewriter ?? "";
    el.textContent = "";
    setTimeout(() => {
      let i = 0;
      const iv = setInterval(() => {
        el.textContent = text.slice(0, ++i);
        if (i >= text.length) {
          clearInterval(iv);
          el.dataset.typingDone = "true";
        }
      }, 38);
    }, 1700);
  }

  // src/interactions.ts
  function initGlitch() {
    const h1 = document.querySelector("h1[data-glitch]");
    if (!h1) return;
    let active = false;
    h1.addEventListener("mouseenter", () => {
      if (active) return;
      active = true;
      h1.classList.add("glitch-active");
      setTimeout(() => {
        h1.classList.remove("glitch-active");
        active = false;
      }, 500);
    });
  }
  function initMagneticEmail() {
    const el = document.querySelector("[data-magnetic]");
    if (!el) return;
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
      el.style.transform = `translate(${x}px,${y}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  }
  function initProjectTilt() {
    document.querySelectorAll(".project-row").forEach((row) => {
      row.addEventListener("mousemove", (e) => {
        const rect = row.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        row.style.transform = `perspective(800px) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg)`;
      });
      row.addEventListener("mouseleave", () => {
        row.style.transform = "";
      });
    });
  }
  var KONAMI = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
  ];
  function initKonami() {
    let pos = 0;
    document.addEventListener("keydown", (e) => {
      if (e.key === KONAMI[pos]) {
        pos++;
        if (pos === KONAMI.length) {
          pos = 0;
          triggerKonami();
        }
      } else {
        pos = e.key === KONAMI[0] ? 1 : 0;
      }
    });
  }
  function triggerKonami() {
    const COUNT = 12;
    for (let i = 0; i < COUNT; i++) {
      setTimeout(() => {
        const el = document.createElement("div");
        el.className = "konami-burst";
        el.style.left = `${window.innerWidth / 2}px`;
        el.style.top = `${window.innerHeight / 2}px`;
        const hue = i / COUNT * 360;
        el.style.setProperty("--hue", `${hue}`);
        document.body.appendChild(el);
        el.addEventListener("animationend", () => el.remove());
      }, i * 60);
    }
    const msg = document.createElement("div");
    msg.className = "konami-msg";
    msg.textContent = "\u26A1 UNLOCKED \u26A1";
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 2500);
  }

  // src/counter.ts
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }
  function animateCounter(el, from, to, suffix, duration) {
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(from + (to - from) * easeOutCubic(progress));
      el.textContent = `${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = `${to}${suffix}`;
    };
    requestAnimationFrame(tick);
  }
  function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.count ?? "0", 10);
          const suffix = el.dataset.suffix ?? "";
          animateCounter(el, 0, target, suffix, 1800);
          io.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((c) => {
      const suffix = c.dataset.suffix ?? "";
      c.textContent = `0${suffix}`;
      io.observe(c);
    });
  }

  // src/ripple.ts
  function initRipple() {
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (target.closest("a, button")) return;
      const el = document.createElement("div");
      el.className = "click-ripple";
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      document.body.appendChild(el);
      el.addEventListener("animationend", () => el.remove());
    });
  }

  // src/main.ts
  document.addEventListener("DOMContentLoaded", async () => {
    await initLoader();
    initCursor();
    initParticles();
    initScrollProgress();
    initScrollReveal();
    initTextScramble();
    initTypewriter();
    initGlitch();
    initMagneticEmail();
    initProjectTilt();
    initCounters();
    initRipple();
    initKonami();
    initNavHighlight();
  });
})();
