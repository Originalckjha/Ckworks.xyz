/**
 * Intro loading screen.
 * Types "CKJ." char-by-char → fills progress bar → slides up to reveal site.
 */
export function initLoader(): Promise<void> {
  return new Promise<void>(resolve => {
    const loader     = document.getElementById('loader');
    const loaderText = document.getElementById('loader-text');
    const loaderBar  = document.getElementById('loader-bar');

    if (!loader || !loaderText || !loaderBar) {
      resolve();
      return;
    }

    const brand = 'CKJ.';
    let i = 0;
    loaderText.textContent = '';

    const typeInterval = setInterval(() => {
      loaderText.textContent += brand[i++];
      if (i >= brand.length) {
        clearInterval(typeInterval);

        // Brief pause → fill bar
        setTimeout(() => {
          loaderBar.style.width = '100%';

          // Bar fills in 600ms → exit animation
          setTimeout(() => {
            loader.classList.add('loader-exit');

            // Slide-up completes → hide + resolve
            setTimeout(() => {
              loader.style.display = 'none';
              resolve();
            }, 700);
          }, 600);
        }, 200);
      }
    }, 130);
  });
}
