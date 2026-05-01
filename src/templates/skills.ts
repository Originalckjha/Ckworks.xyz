import { skillGroups } from '../data/skills';

export function renderSkills(): string {
  const groups = skillGroups.map((group, i) => {
    const delay = i * 100;
    const pills = group.skills.map(s =>
      `<span class="skill-pill${s.featured ? ' primary' : ''}">${s.label}</span>`
    ).join('');

    return `
    <div class="skill-group" data-reveal${delay ? ` data-delay="${delay}"` : ''}>
      <h3 class="skill-group-label">${group.title}</h3>
      <div class="skill-pills">${pills}</div>
    </div>`;
  }).join('');

  return `
<section id="skills" class="py-28 px-8 md:px-24 bg-jala/40">
  <div class="max-w-7xl mx-auto">
    <div class="mb-14" data-reveal>
      <p class="font-mono text-xs uppercase tracking-[0.4em] text-agni mb-3">// Tech Stack</p>
      <h2 class="text-4xl font-bold kerning-tight">What I build with.</h2>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">${groups}
    </div>
  </div>
</section>`;
}
