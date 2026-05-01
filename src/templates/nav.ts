import { meta } from '../data/meta';

const LOGO = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ck-g" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#9B7BF7"/>
      <stop offset="100%" stop-color="#6B3FE8"/>
    </linearGradient>
  </defs>
  <rect width="28" height="28" rx="7" fill="url(#ck-g)"/>
  <text x="14" y="19.5" fill="white" font-family="'JetBrains Mono',monospace"
        font-weight="800" font-size="11" text-anchor="middle" letter-spacing="-0.5">CK</text>
</svg>`;

export function renderNav(): string {
  return `
<nav class="nav-bar fixed top-0 w-full z-50 px-6 md:px-16 py-4 flex justify-between items-center">
  <a href="#home" class="flex items-center gap-2.5 group" style="text-decoration:none">
    ${LOGO}
    <span class="font-mono font-bold text-sm tracking-tight text-prithvi group-hover:text-agni transition-colors">
      ${meta.handle}<span class="text-agni">.</span>
    </span>
  </a>
  <div class="hidden md:flex space-x-7 text-xs uppercase tracking-[0.18em] text-vayu font-semibold">
    <a href="#about"      class="nav-link hover:text-agni transition-colors">About</a>
    <a href="#experience" class="nav-link hover:text-agni transition-colors">Experience</a>
    <a href="#skills"     class="nav-link hover:text-agni transition-colors">Skills</a>
    <a href="#projects"   class="nav-link hover:text-agni transition-colors">Projects</a>
    <a href="#teaching"   class="nav-link hover:text-edu  transition-colors">Teaching</a>
    <a href="#contact"    class="nav-link hover:text-agni transition-colors">Contact</a>
  </div>
</nav>`;
}
