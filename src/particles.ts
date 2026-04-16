import type { Particle, RGB } from './types';

const REPEL_RADIUS = 110;
const REPEL_FORCE  = 2.8;
const DAMPING      = 0.96;
const MAX_DIST     = 130;

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function lerpColor(from: RGB, to: RGB, t: number): RGB {
  return {
    r: lerp(from.r, to.r, t),
    g: lerp(from.g, to.g, t),
    b: lerp(from.b, to.b, t),
  };
}

/**
 * Interactive particle network:
 *  • Particles drift slowly and connect when close
 *  • Mouse repels nearby particles
 *  • Color shifts from cyan → mint when scrolled into tuition section
 */
export function initParticles(): void {
  const canvas = document.getElementById('particles-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d')!;

  let W = 0, H = 0;
  let particles: Particle[] = [];
  let mouseX = -9999, mouseY = -9999;

  const CYAN: RGB  = { r: 0,   g: 212, b: 255 };
  const MINT: RGB  = { r: 0,   g: 255, b: 178 };
  let currentColor: RGB = { ...CYAN };
  let targetColor:  RGB = { ...CYAN };

  const resize = (): void => {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  };

  const spawn = (): void => {
    const count = Math.min(Math.floor((W * H) / 13000), 90);
    particles = Array.from({ length: count }, (): Particle => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r:  Math.random() * 1.5 + 0.4,
    }));
  };

  const frame = (): void => {
    ctx.clearRect(0, 0, W, H);

    // Smoothly shift colour
    currentColor = lerpColor(currentColor, targetColor, 0.025);
    const { r, g, b } = currentColor;
    const fill   = `rgba(${r|0},${g|0},${b|0},0.65)`;
    const stroke  = (alpha: number) => `rgba(${r|0},${g|0},${b|0},${alpha.toFixed(2)})`;

    particles.forEach(p => {
      // Mouse repulsion
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const d  = Math.hypot(dx, dy);
      if (d < REPEL_RADIUS && d > 0) {
        const force = ((REPEL_RADIUS - d) / REPEL_RADIUS) * REPEL_FORCE;
        p.vx += (dx / d) * force;
        p.vy += (dy / d) * force;
      }

      p.vx *= DAMPING;
      p.vy *= DAMPING;
      p.x  += p.vx;
      p.y  += p.vy;

      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = fill;
      ctx.fill();
    });

    // Connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.hypot(dx, dy);
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

  window.addEventListener('resize', () => { resize(); spawn(); }, { passive: true });

  // Track mouse relative to canvas
  window.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  }, { passive: true });

  // Ambient colour: cyan in hero/work, mint in tuition section
  const tuitionEl = document.getElementById('tuition');
  const workEl    = document.getElementById('work');

  window.addEventListener('scroll', () => {
    const y         = window.pageYOffset;
    const tuitionY  = tuitionEl?.offsetTop ?? Infinity;
    const workY     = workEl?.offsetTop    ?? Infinity;
    targetColor = (y >= tuitionY - 200 && y < workY - 200) ? { ...MINT } : { ...CYAN };
  }, { passive: true });
}
