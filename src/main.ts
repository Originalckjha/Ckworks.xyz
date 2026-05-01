import { renderApp }                        from './app';
import { initLoader }                        from './loader';
import { initScrollProgress, initScrollReveal,
         initNavHighlight }                  from './scroll';
import { initCounters }                      from './counter';
import { initRipple }                        from './ripple';

document.addEventListener('DOMContentLoaded', async () => {
  renderApp();
  await initLoader();
  initScrollProgress();
  initScrollReveal();
  initCounters();
  initRipple();
  initNavHighlight();
});
