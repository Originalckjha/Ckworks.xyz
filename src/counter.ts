/**
 * Animated number counters.
 * Elements with [data-count="N"] [data-suffix="+"] count up from 0 when visible.
 */

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function animateCounter(
  el: HTMLElement,
  from: number,
  to: number,
  suffix: string,
  duration: number
): void {
  const start = performance.now();

  const tick = (now: number): void => {
    const progress = Math.min((now - start) / duration, 1);
    const value    = Math.floor(from + (to - from) * easeOutCubic(progress));
    el.textContent = `${value}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = `${to}${suffix}`;
  };

  requestAnimationFrame(tick);
}

export function initCounters(): void {
  const counters = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!counters.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el     = entry.target as HTMLElement;
        const target = parseInt(el.dataset.count ?? '0', 10);
        const suffix = el.dataset.suffix ?? '';
        animateCounter(el, 0, target, suffix, 1800);
        io.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach(c => {
    const suffix = c.dataset.suffix ?? '';
    c.textContent = `0${suffix}`;
    io.observe(c);
  });
}
