/**
 * CKWorks.xyz — main entry point (TypeScript)
 *
 * Build:  npm run build
 * Watch:  npm run watch
 * Output: script.js (bundled by esbuild)
 */

import { initLoader }                               from './loader';
import { initCursor }                               from './cursor';
import { initParticles }                            from './particles';
import { initScrollProgress, initScrollReveal,
         initNavHighlight }                         from './scroll';
import { initTextScramble, initTypewriter }         from './text';
import { initGlitch, initMagneticEmail,
         initProjectTilt, initKonami }              from './interactions';
import { initCounters }                             from './counter';
import { initRipple }                               from './ripple';

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Show intro loader, await dismissal
  await initLoader();

  // 2. Boot all features
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
