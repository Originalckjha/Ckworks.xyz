/**
 * DOM interactions:
 *  • Glitch burst on h1 hover
 *  • Magnetic email
 *  • 3-D perspective tilt on project rows
 *  • Konami-code easter egg 🎉
 */

// ── Glitch ──────────────────────────────────────────────────────────────────

export function initGlitch(): void {
  const h1 = document.querySelector<HTMLElement>('h1[data-glitch]');
  if (!h1) return;

  let active = false;
  h1.addEventListener('mouseenter', () => {
    if (active) return;
    active = true;
    h1.classList.add('glitch-active');
    setTimeout(() => { h1.classList.remove('glitch-active'); active = false; }, 500);
  });
}

// ── Magnetic email ───────────────────────────────────────────────────────────

export function initMagneticEmail(): void {
  const el = document.querySelector<HTMLElement>('[data-magnetic]');
  if (!el) return;

  el.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left  - rect.width  / 2) * 0.18;
    const y = (e.clientY - rect.top   - rect.height / 2) * 0.35;
    el.style.transform = `translate(${x}px,${y}px)`;
  });

  el.addEventListener('mouseleave', () => { el.style.transform = ''; });
}

// ── Perspective tilt ─────────────────────────────────────────────────────────

export function initProjectTilt(): void {
  document.querySelectorAll<HTMLElement>('.project-row').forEach(row => {
    row.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = row.getBoundingClientRect();
      const x = (e.clientX - rect.left)  / rect.width  - 0.5;
      const y = (e.clientY - rect.top)   / rect.height - 0.5;
      row.style.transform =
        `perspective(800px) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg)`;
    });
    row.addEventListener('mouseleave', () => { row.style.transform = ''; });
  });
}

// ── Konami Code easter egg ────────────────────────────────────────────────────

const KONAMI = [
  'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
  'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
  'b','a',
];

export function initKonami(): void {
  let pos = 0;

  document.addEventListener('keydown', (e: KeyboardEvent) => {
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

function triggerKonami(): void {
  // Burst of coloured rings from the centre of the screen
  const COUNT = 12;
  for (let i = 0; i < COUNT; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'konami-burst';
      el.style.left = `${window.innerWidth  / 2}px`;
      el.style.top  = `${window.innerHeight / 2}px`;
      const hue = (i / COUNT) * 360;
      el.style.setProperty('--hue', `${hue}`);
      document.body.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }, i * 60);
  }

  // Flash message
  const msg = document.createElement('div');
  msg.className = 'konami-msg';
  msg.textContent = '⚡ UNLOCKED ⚡';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2500);
}
