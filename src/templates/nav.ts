import { meta } from '../data/meta';

export function renderNav(): string {
  return `
<nav class="nav-bar">
  <a href="#home" class="nav-logo">${meta.handle}</a>
  <div class="nav-links">
    <a href="#about"      class="nav-link">About</a>
    <a href="#work"       class="nav-link">Work</a>
    <a href="#projects"   class="nav-link">Projects</a>
    <a href="#teaching"   class="nav-link">Teaching</a>
    <a href="#contact"    class="nav-link">Contact</a>
  </div>
  <a href="mailto:${meta.email}" class="nav-cta">Hire Me</a>
</nav>`;
}
