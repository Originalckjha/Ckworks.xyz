import { meta } from '../data/meta';

export function renderAbout(): string {
  return `
<section id="about" class="py-28 px-8 md:px-24 max-w-7xl mx-auto">
  <div class="grid md:grid-cols-5 gap-16 items-start">

    <div class="md:col-span-2 space-y-6" data-reveal>
      <p class="font-mono text-xs uppercase tracking-[0.4em] text-agni">// About</p>
      <h2 class="text-4xl font-bold kerning-tight">Engineer.<br>Educator.<br>Learner.</h2>
      <div class="w-12 h-px bg-agni"></div>
      <p class="text-vayu text-sm font-mono">Based in <span class="text-prithvi">${meta.location}</span></p>
      <p class="font-mono text-xs text-edu/80 border border-edu/20 rounded-lg px-3 py-2 bg-edu/5">
        ↳ ${meta.role} @ <span class="text-edu font-bold">${meta.company}</span><br>
        <span class="text-vayu">Since ${meta.companyStart}</span>
      </p>
    </div>

    <div class="md:col-span-3 space-y-5 text-vayu text-lg leading-relaxed" data-reveal data-delay="150">
      <p>
        I build web systems end-to-end — from database schema to deployed UI. Currently engineering at
        <strong class="text-edu">${meta.company}</strong>, where I apply 8 years of freelance, teaching, and
        open-source experience to real production challenges.
      </p>
      <p>
        Rooted in <strong class="text-agni">First Principles</strong> thinking: every component must justify
        its existence. No bloat. No unnecessary abstraction. Just systems that work.
      </p>
      <p>
        I've worn many hats — freelancer, CS teacher, student consultant, Clapingo moderator — and every role
        made me a sharper engineer. I am, above all, a <strong class="text-prithvi">lifelong learner</strong>.
        The day I stop learning is the day I stop building.
      </p>
      <div class="flex flex-wrap gap-3 pt-2">
        <a href="${meta.github}"   target="_blank" rel="noopener" class="inline-chip">GitHub ↗</a>
        <a href="${meta.linkedin}" target="_blank" rel="noopener" class="inline-chip">LinkedIn ↗</a>
        <a href="${meta.linktree}" target="_blank" rel="noopener" class="inline-chip">Linktree ↗</a>
      </div>
    </div>

  </div>
</section>`;
}
