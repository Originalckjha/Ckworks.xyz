/**
 * Click ripple — expands a translucent ring from wherever the user clicks.
 * Skipped on links/buttons to avoid clashing with cursor-hover state.
 */
export function initRipple(): void {
  document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('a, button')) return;

    const el = document.createElement('div');
    el.className = 'click-ripple';
    el.style.left = `${e.clientX}px`;
    el.style.top  = `${e.clientY}px`;
    document.body.appendChild(el);

    // Remove after animation completes
    el.addEventListener('animationend', () => el.remove());
  });
}
