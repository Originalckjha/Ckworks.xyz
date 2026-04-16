const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%';

/**
 * Scramble: cycles random characters before settling on the real text.
 * Applied to every [data-scramble] element, staggered by index.
 */
export function initTextScramble(): void {
  document.querySelectorAll<HTMLElement>('[data-scramble]').forEach((el, idx) => {
    const original = el.textContent ?? '';
    let   iteration = 0;

    setTimeout(() => {
      const iv = setInterval(() => {
        el.textContent = original
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < iteration)  return original[i]!;
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]!;
          })
          .join('');

        iteration += 0.45;
        if (iteration >= original.length) {
          el.textContent = original;
          clearInterval(iv);
        }
      }, 35);
    }, idx * 280);
  });
}

/**
 * Typewriter: empties [data-typewriter] and types the content of its
 * data-typewriter attribute character-by-character, with a blinking cursor.
 * Starts after scramble has finished (~1.7 s).
 */
export function initTypewriter(): void {
  const el = document.querySelector<HTMLElement>('[data-typewriter]');
  if (!el) return;

  const text = el.dataset.typewriter ?? '';
  el.textContent = '';

  setTimeout(() => {
    let i = 0;
    const iv = setInterval(() => {
      el.textContent = text.slice(0, ++i);
      if (i >= text.length) {
        clearInterval(iv);
        el.dataset.typingDone = 'true';
      }
    }, 38);
  }, 1700);
}
