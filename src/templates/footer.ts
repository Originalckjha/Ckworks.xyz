import { meta } from '../data/meta';

export function renderFooter(): string {
  return `
<footer id="contact" class="py-28 px-8 md:px-24 bg-akasha border-t border-jala text-center">
  <p class="font-mono text-xs uppercase tracking-[0.4em] text-vayu mb-6" data-reveal>// Let's Connect</p>
  <h2 class="text-3xl md:text-5xl font-bold kerning-tight mb-4" data-reveal data-delay="80">
    Building at ${meta.company}.<br>
    <span class="text-agni">Always open to ideas.</span>
  </h2>
  <p class="text-vayu mb-12 max-w-md mx-auto" data-reveal data-delay="160">
    Collaborations, open source, student consulting, or just a good engineering conversation — reach out.
  </p>

  <div data-reveal data-delay="200">
    <a href="mailto:${meta.email}" data-magnetic
       class="text-2xl md:text-4xl font-light hover:text-agni transition-colors duration-500 underline underline-offset-8 decoration-1">
      ${meta.email}
    </a>
  </div>

  <div class="mt-16 flex flex-wrap justify-center gap-8 text-xs uppercase tracking-widest font-semibold" data-reveal data-delay="300">
    <a href="${meta.linkedin}" target="_blank" rel="noopener" class="hover:text-agni transition-colors">LinkedIn</a>
    <a href="${meta.twitter}"  target="_blank" rel="noopener" class="hover:text-agni transition-colors">Twitter / X</a>
    <a href="${meta.github}"   target="_blank" rel="noopener" class="hover:text-agni transition-colors">GitHub</a>
    <a href="${meta.linktree}" target="_blank" rel="noopener" class="hover:text-agni transition-colors">Linktree</a>
  </div>

  <div class="mt-16 text-[10px] text-vayu/25 font-mono uppercase tracking-[0.3em]" data-reveal data-delay="400">
    &copy; 2026 ${meta.name} &nbsp;·&nbsp; ${meta.location} &nbsp;·&nbsp; Built with TypeScript.
  </div>
</footer>`;
}
