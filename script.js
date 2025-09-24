/* =========  INITIALISATION  ========= */
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSmoothScroll();
    initCounters();
    initSkillBars();
    initObservers();
    initTyping();
});


function initNavigation() {
    const toggle  = document.getElementById('nav-toggle');
    const menu    = document.getElementById('mobile-menu');
    const links   = document.querySelectorAll('.nav-link, .mobile-link');
    const navBar  = document.querySelector('.nav-container');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });

    links.forEach(l => l.addEventListener('click', () => {
        toggle.classList.remove('active');
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }));

    /* highlight section */
    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section').forEach(sec => {
            if (pageYOffset >= sec.offsetTop - 200) current = sec.id;
        });
        links.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href').includes(current));
        });

        /* nav background */
        navBar.style.background = pageYOffset > 100
            ? 'rgba(10,25,47,0.95)'
            : 'rgba(10,25,47,0.85)';
    });
}

/* ---------- Smooth scroll ---------- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({top: target.offsetTop - 70, behavior: 'smooth'});
            }
        });
    });
}

/* ---------- Counters ---------- */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.done) {
                animateCounter(entry.target, +entry.target.dataset.count);
                entry.target.dataset.done = 'true';
            }
        });
    }, {threshold: 0.6});
    counters.forEach(c => {c.textContent = '0'; io.observe(c);});
}
function animateCounter(el, target) {
    const duration = 2000, step = target / (duration / 16);
    let current = 0;
    (function update() {
        current += step;
        if (current < target) { el.textContent = Math.floor(current); requestAnimationFrame(update);}
        else { el.textContent = target; }
    })();
}

/* ---------- Skill Bars ---------- */
function initSkillBars() {
    const bars = document.querySelectorAll('.skill-progress');
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting && !e.target.dataset.done) {
                e.target.style.width = e.target.dataset.width;
                e.target.dataset.done = 'true';
            }
        });
    }, {threshold: 0.5});
    bars.forEach(b => {b.style.width = '0'; io.observe(b);});
}

/* ---------- Fade-in Animations ---------- */
function initObservers() {
    const fadeItems = document.querySelectorAll(
        '.project-card, .resource-item, .stat-card, .skill-category, .social-link-item'
    );
    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('animate-in');
                io.unobserve(e.target);
            }
        });
    }, {threshold: 0.15});
    fadeItems.forEach(el => io.observe(el));
}

/* ---------- Typing Effect ---------- */
function initTyping() {
    const el = document.querySelector('.typing-text');
    if (!el) return;
    const txt = 'echo "Hello World"';
    let i = 0;
    function type() {
        el.textContent = txt.slice(0, i++);
        if (i <= txt.length) setTimeout(type, 100);
        else { i = 0; el.textContent=''; setTimeout(type, 1200);}
    }
    setTimeout(type, 600);
}

/* ---------- Parallax Hero Visual ---------- */
window.addEventListener('scroll', () => {
    const v = document.querySelector('.hero-visual');
    if (v && pageYOffset < innerHeight) {
        v.style.transform = `translateY(${pageYOffset * -0.3}px)`;
    }
});
