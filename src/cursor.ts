import type { TrailPoint } from './types';

const TRAIL_MAX  = 14;
const SPRING     = 0.12;
const DAMPING    = 0.75;

/**
 * Physics-based cursor:
 *  • Dot snaps to mouse instantly
 *  • Ring follows with spring + damping (elastic feel)
 *  • Canvas trail of fading dots behind the cursor
 */
export function initCursor(): void {
  const dot      = document.getElementById('cursor');
  const ring     = document.getElementById('cursor-follower');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;
  let velX   = 0, velY   = 0;

  // Dedicated fixed canvas for the mouse trail
  const canvas = document.createElement('canvas');
  canvas.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9997;';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d')!;

  const trail: TrailPoint[] = [];

  const resize = (): void => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize, { passive: true });

  document.addEventListener('mousemove', (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top  = `${mouseY}px`;
    trail.push({ x: mouseX, y: mouseY, life: 1 });
    if (trail.length > TRAIL_MAX) trail.shift();
  });

  const animate = (): void => {
    // Spring physics for ring
    velX += (mouseX - ringX) * SPRING;
    velY += (mouseY - ringY) * SPRING;
    velX *= DAMPING;
    velY *= DAMPING;
    ringX += velX;
    ringY += velY;
    ring.style.left = `${ringX}px`;
    ring.style.top  = `${ringY}px`;

    // Draw trail
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    trail.forEach((pt, idx) => {
      const t    = idx / trail.length;         // 0 → 1
      const size = t * 4.5;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,212,255,${t * 0.35})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  };
  animate();

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}
