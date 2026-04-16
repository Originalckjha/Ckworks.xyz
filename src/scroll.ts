/**
 * Scroll utilities:
 *  • Progress bar fill
 *  • Scroll-reveal via IntersectionObserver
 *  • Active nav link highlighting
 */

export function initScrollProgress(): void {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener(
    'scroll',
    () => {
      const total = document.body.scrollHeight - window.innerHeight;
      bar.style.width = total > 0
        ? `${(window.pageYOffset / total) * 100}%`
        : '0%';
    },
    { passive: true }
  );
}

export function initScrollReveal(): void {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el    = entry.target as HTMLElement;
        const delay = parseInt(el.dataset.delay ?? '0', 10);
        setTimeout(() => el.classList.add('revealed'), delay);
        io.unobserve(el);
      });
    },
    { threshold: 0.12 }
  );

  els.forEach(el => io.observe(el));
}

export function initNavHighlight(): void {
  const links = document.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]');
  if (!links.length) return;

  window.addEventListener(
    'scroll',
    () => {
      let current = '';
      document.querySelectorAll<HTMLElement>('section[id], footer[id]').forEach(el => {
        if (window.pageYOffset >= el.offsetTop - 200) current = el.id;
      });
      links.forEach(link => {
        link.classList.toggle(
          'nav-active',
          link.getAttribute('href') === `#${current}`
        );
      });
    },
    { passive: true }
  );
}
