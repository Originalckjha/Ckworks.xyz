import { skillGroups } from '../data/skills';

export function renderSkills(): string {
  const groups = skillGroups.map((group, i) => {
    const pills = group.skills.map(s =>
      `<span class="skill-pill${s.featured ? ' featured' : ''}">${s.label}</span>`
    ).join('');

    return `
    <div class="skill-group" data-reveal${i ? ` data-delay="${i * 80}"` : ''}>
      <h3 class="skill-group-label">${group.title}</h3>
      <div class="skill-pills">${pills}</div>
    </div>`;
  }).join('');

  return `
<section id="skills" class="skills-section">
  <div class="container">
    <div class="section-header" data-reveal>
      <span class="section-label">Stack</span>
      <h2 class="section-title">What I build with.</h2>
    </div>
    <div class="skill-grid">${groups}
    </div>
  </div>
</section>`;
}
