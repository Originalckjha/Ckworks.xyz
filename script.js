document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initCursor();
    initScrollProgress();
    initScrollReveal();
    initTextScramble();
    initTypewriter();
    initGlitch();
    initMagneticEmail();
    initProjectTilt();
    initNavHighlight();
});

/* ---- Particle Network Canvas ---- */
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles;

    function resize() {
        W = canvas.width  = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
    }

    function spawn() {
        const count = Math.floor((W * H) / 14000);
        particles = Array.from({ length: Math.min(count, 90) }, () => ({
            x:  Math.random() * W,
            y:  Math.random() * H,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r:  Math.random() * 1.4 + 0.4,
        }));
    }

    function frame() {
        ctx.clearRect(0, 0, W, H);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 212, 255, 0.55)';
            ctx.fill();
        });

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const d  = Math.hypot(dx, dy);
                if (d < 130) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 212, 255, ${0.18 * (1 - d / 130)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(frame);
    }

    resize();
    spawn();
    frame();

    window.addEventListener('resize', () => { resize(); spawn(); }, { passive: true });
}

/* ---- Custom Cursor ---- */
function initCursor() {
    const cursor   = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top  = mouseY + 'px';
    });

    (function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.left = followerX + 'px';
        follower.style.top  = followerY + 'px';
        requestAnimationFrame(animateFollower);
    })();

    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
}

/* ---- Scroll Progress Bar ---- */
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const total = document.body.scrollHeight - window.innerHeight;
        bar.style.width = (total > 0 ? (window.pageYOffset / total) * 100 : 0) + '%';
    }, { passive: true });
}

/* ---- Scroll Reveal ---- */
function initScrollReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.dataset.delay || 0, 10);
                setTimeout(() => entry.target.classList.add('revealed'), delay);
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
}

/* ---- Text Scramble on Hero Name ---- */
function initTextScramble() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    document.querySelectorAll('[data-scramble]').forEach((el, idx) => {
        const original = el.textContent;
        let iteration  = 0;
        setTimeout(() => {
            const iv = setInterval(() => {
                el.textContent = original.split('').map((char, i) => {
                    if (char === ' ') return ' ';
                    if (i < iteration)  return original[i];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join('');
                iteration += 0.45;
                if (iteration >= original.length) {
                    el.textContent = original;
                    clearInterval(iv);
                }
            }, 35);
        }, idx * 280);
    });
}

/* ---- Typewriter on Hero Quote ---- */
function initTypewriter() {
    const el = document.querySelector('[data-typewriter]');
    if (!el) return;
    const text = el.dataset.typewriter;
    el.textContent = '';
    let i = 0;
    // Start after scramble finishes (~1.6s)
    setTimeout(() => {
        const iv = setInterval(() => {
            el.textContent = text.slice(0, ++i);
            if (i >= text.length) {
                clearInterval(iv);
                el.dataset.typingDone = 'true';
            }
        }, 38);
    }, 1700);
}

/* ---- Glitch on H1 Hover ---- */
function initGlitch() {
    const h1 = document.querySelector('h1[data-glitch]');
    if (!h1) return;
    let active = false;
    h1.addEventListener('mouseenter', () => {
        if (active) return;
        active = true;
        h1.classList.add('glitch-active');
        setTimeout(() => {
            h1.classList.remove('glitch-active');
            active = false;
        }, 500);
    });
}

/* ---- Magnetic Email ---- */
function initMagneticEmail() {
    const el = document.querySelector('[data-magnetic]');
    if (!el) return;
    el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width  / 2) * 0.18;
        const y = (e.clientY - rect.top  - rect.height / 2) * 0.35;
        el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
}

/* ---- Project Row 3-D Tilt ---- */
function initProjectTilt() {
    document.querySelectorAll('.project-row').forEach(row => {
        row.addEventListener('mousemove', e => {
            const rect = row.getBoundingClientRect();
            const x = (e.clientX - rect.left)  / rect.width  - 0.5;
            const y = (e.clientY - rect.top)   / rect.height - 0.5;
            row.style.transform = `perspective(800px) rotateX(${-y * 3}deg) rotateY(${x * 4}deg)`;
        });
        row.addEventListener('mouseleave', () => { row.style.transform = ''; });
    });
}

/* ---- Active Nav Highlight ---- */
function initNavHighlight() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    if (!links.length) return;
    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section[id], footer[id]').forEach(el => {
            if (window.pageYOffset >= el.offsetTop - 200) current = el.id;
        });
        links.forEach(link => {
            link.classList.toggle('nav-active', link.getAttribute('href') === `#${current}`);
        });
    }, { passive: true });
}
