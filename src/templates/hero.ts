import { meta } from '../data/meta';

export function renderHero(): string {
  const { stats } = meta;

  const stat = (s: typeof stats[keyof typeof stats]) =>
    `<div class="stat-chip">
      <span class="shimmer-text font-bold text-xl" data-count="${s.value}" data-suffix="${s.suffix}">${s.value}${s.suffix}</span>
      <span class="stat-label">${s.label}</span>
    </div>`;

  return `
<main id="home" class="relative min-h-screen flex flex-col justify-center px-8 md:px-24 overflow-hidden">
  <canvas id="particles-canvas" class="absolute inset-0 w-full h-full" style="z-index:0"></canvas>
  <div class="mesh-blob mesh-blob-1" style="z-index:0"></div>
  <div class="mesh-blob mesh-blob-2" style="z-index:0"></div>
  <div class="hero-bg-text" style="z-index:0" aria-hidden="true">CKWorks</div>

  <div class="fade-in relative grid md:grid-cols-2 gap-16 items-center" style="z-index:1">

    <div class="space-y-7">

      <div class="hero-status-badge">
        <span class="status-pulse"></span>
        <span>${meta.role} @ <strong>${meta.company}</strong></span>
        <span class="status-div">·</span>
        <span>${meta.companyStart}</span>
      </div>

      <div>
        <p class="font-mono text-vayu text-xs mb-3 tracking-[0.3em] uppercase">// Hello, I'm</p>
        <h1 data-glitch class="text-5xl md:text-7xl font-bold kerning-tight leading-[1.0]">
          <span data-scramble>${meta.shortName}</span>
        </h1>
        <div class="hero-brand-row mt-3">
          <span class="hero-brand-name">CKWorks</span>
          <span class="hero-brand-div"></span>
          <span class="hero-brand-tag">${meta.tagline}</span>
        </div>
      </div>

      <div class="code-window">
        <div class="code-win-bar">
          <span class="cdot cdot-r"></span>
          <span class="cdot cdot-y"></span>
          <span class="cdot cdot-g"></span>
          <span class="code-win-file">about.ts</span>
        </div>
        <div class="code-win-body font-mono space-y-1">
          <p><span class="kw">const</span> role     = <span class="str">"${meta.role}"</span>;</p>
          <p><span class="kw">const</span> company  = <span class="num">"${meta.company}"</span>;</p>
          <p><span class="kw">const</span> location = <span class="str">"${meta.location}"</span>;</p>
          <p><span class="kw">const</span> years    = <span class="num">${stats.years.value}</span> + <span class="str">" years · builder · educator"</span>;</p>
          <p class="cmt">// lifelong learner ∞</p>
        </div>
      </div>

      <p data-typewriter='"${meta.typewriter}"'
         class="text-base font-serif italic text-vayu max-w-md leading-relaxed"></p>

      <div class="flex flex-wrap gap-6 pt-2 border-t border-vayu/10">
        ${stat(stats.years)}
        ${stat(stats.projects)}
        ${stat(stats.students)}
      </div>

      <div class="flex flex-wrap gap-3 pt-1">
        <a href="#projects"   class="cta-primary">View Projects</a>
        <a href="#experience" class="cta-secondary">My Journey</a>
        <a href="${meta.github}" target="_blank" rel="noopener" class="cta-ghost">GitHub ↗</a>
      </div>
    </div>

    <div class="flex justify-center md:justify-end order-first md:order-last">
      <div class="avatar-wrapper">
        <img src="avatar.jpg" alt="${meta.name} — ${meta.role}" class="avatar-img">
        <div class="avatar-badge-tech">SWE</div>
        <div class="avatar-badge-edu">EDU</div>
      </div>
    </div>

  </div>

  <div class="absolute bottom-12 left-8 md:left-24 scroll-indicator" style="z-index:1"></div>
</main>`;
}
