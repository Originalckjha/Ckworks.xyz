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

    loaderBar.style.width = '0%';

    // Fill bar over 700ms then fade out
    setTimeout(() => {
      loaderBar.style.width = '100%';

      setTimeout(() => {
        loader.classList.add('hidden');

        setTimeout(() => {
          loader.style.display = 'none';
          resolve();
        }, 650);
      }, 500);
    }, 300);
  });
}
