import { renderApp }                                     from './app';
import { initLoader }                                    from './loader';
import { initCursor }                                    from './cursor';
import { initParticles }                                 from './particles';
import { initScrollProgress, initScrollReveal,
         initNavHighlight }                              from './scroll';
import { initTextScramble, initTypewriter }              from './text';
import { initGlitch, initMagneticEmail,
         initProjectTilt, initKonami }                   from './interactions';
import { initCounters }                                  from './counter';
import { initRipple }                                    from './ripple';

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Render all page content from TypeScript into #app
  renderApp();

  // 2. Show intro loader, await dismissal
  await initLoader();

  // 3. Boot feature modules (DOM is fully populated at this point)
  initCursor();
  initParticles();
  initScrollProgress();
  initScrollReveal();
  initTextScramble();
  initTypewriter();
  initGlitch();
  initMagneticEmail();
  initProjectTilt();
  initCounters();
  initRipple();
  initKonami();
  initNavHighlight();
});
