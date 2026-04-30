import { meta } from '../data/meta';

export function renderNav(): string {
  return `
<nav class="fixed top-0 w-full z-50 mix-blend-difference px-8 py-5 flex justify-between items-center">
  <span class="font-mono font-bold tracking-tighter text-lg">${meta.handle}<span class="text-agni">.</span></span>
  <div class="hidden md:flex space-x-8 text-xs uppercase tracking-[0.18em] text-vayu font-semibold">
    <a href="#about"      class="hover:text-agni transition-colors">About</a>
    <a href="#experience" class="hover:text-agni transition-colors">Experience</a>
    <a href="#skills"     class="hover:text-agni transition-colors">Skills</a>
    <a href="#projects"   class="hover:text-agni transition-colors">Projects</a>
    <a href="#teaching"   class="hover:text-edu  transition-colors">Teaching</a>
    <a href="#contact"    class="hover:text-agni transition-colors">Contact</a>
  </div>
</nav>`;
}
