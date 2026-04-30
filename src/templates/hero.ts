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

  <div class="fade-in relative grid md:grid-cols-2 gap-16 items-center" style="z-index:1">

    <div class="space-y-6">
      <div class="flex items-center gap-3">
        <div class="w-2 h-2 rounded-full bg-edu animate-pulse"></div>
        <span class="font-mono text-edu text-xs tracking-widest uppercase">
          ${meta.role} @ ${meta.company} · ${meta.companyStart}
        </span>
      </div>

      <div>
        <p class="font-mono text-vayu text-sm mb-2">Hi, I'm</p>
        <h1 data-glitch class="text-5xl md:text-7xl font-bold kerning-tight leading-[1.05]">
          <span data-scramble>Chandra</span><br>
          <span data-scramble class="text-agni">Kishor Jha</span>
        </h1>
      </div>

      <div class="font-mono text-vayu text-sm md:text-base space-y-1">
        <p><span class="text-agni">const</span> role     = <span class="text-prithvi">"${meta.role}"</span>;</p>
        <p><span class="text-agni">const</span> company  = <span class="text-edu">"${meta.company}"</span>;</p>
        <p><span class="text-agni">const</span> location = <span class="text-prithvi">"${meta.location}"</span>;</p>
        <p><span class="text-agni">const</span> experience = <span class="text-edu">${stats.years.value}</span> + <span class="text-prithvi">" years · builder · educator"</span>;</p>
      </div>

      <p data-typewriter='"${meta.typewriter}"'
         class="text-lg font-serif italic text-vayu max-w-md leading-relaxed"></p>

      <div class="flex flex-wrap gap-6 pt-2 border-t border-vayu/10">
        ${stat(stats.years)}
        ${stat(stats.projects)}
        ${stat(stats.students)}
      </div>

      <div class="flex flex-wrap gap-4 pt-2">
        <a href="#projects"   class="cta-primary">View Projects</a>
        <a href="#experience" class="cta-secondary">My Journey</a>
        <a href="${meta.github}" target="_blank" rel="noopener" class="cta-ghost">GitHub ↗</a>
      </div>
    </div>

    <div class="flex justify-center md:justify-end order-first md:order-last">
      <div class="avatar-wrapper">
        <img src="avatar.jpg" alt="${meta.name} — ${meta.role} Delhi" class="avatar-img">
        <div class="avatar-badge-tech">SWE</div>
        <div class="avatar-badge-edu">EDU</div>
      </div>
    </div>

  </div>

  <div class="absolute bottom-12 left-8 md:left-24 scroll-indicator" style="z-index:1"></div>
</main>`;
}
