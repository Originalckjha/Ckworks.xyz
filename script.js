document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initScrollProgress();
    initScrollReveal();
    initTextScramble();
    initMagneticEmail();
    initProjectTilt();
    initNavHighlight();
});

/* ---- Custom Cursor ---- */
function initCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    let rafId;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    (function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        rafId = requestAnimationFrame(animateFollower);
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
        const scrolled = window.pageYOffset;
        const total = document.body.scrollHeight - window.innerHeight;
        bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
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
        let iteration = 0;

        setTimeout(() => {
            const interval = setInterval(() => {
                el.textContent = original.split('').map((char, i) => {
                    if (char === ' ') return ' ';
                    if (i < iteration) return original[i];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join('');

                iteration += 0.45;
                if (iteration >= original.length) {
                    el.textContent = original;
                    clearInterval(interval);
                }
            }, 35);
        }, idx * 250);
    });
}

/* ---- Magnetic Email ---- */
function initMagneticEmail() {
    const el = document.querySelector('[data-magnetic]');
    if (!el) return;

    el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
        el.style.transform = `translate(${x}px, ${y}px)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = '';
    });
}

/* ---- Project Row Tilt on Hover ---- */
function initProjectTilt() {
    document.querySelectorAll('.project-row').forEach(row => {
        row.addEventListener('mousemove', e => {
            const rect = row.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            row.style.transform = `perspective(800px) rotateX(${-y * 3}deg) rotateY(${x * 4}deg)`;
            row.style.background = 'rgba(18, 20, 29, 0.5)';
        });

        row.addEventListener('mouseleave', () => {
            row.style.transform = '';
            row.style.background = '';
        });
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
