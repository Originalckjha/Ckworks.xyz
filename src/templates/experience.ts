import { experience } from '../data/experience';

export function renderExperience(): string {
  const items = experience.map((entry, i) => {
    const tags = entry.tags.map(t => `<span class="exp-tag">${t}</span>`).join('');
    const isCurrent = entry.isCurrent;

    return `
    <div class="exp-row${isCurrent ? ' exp-row-current' : ''}" data-reveal${i ? ` data-delay="${Math.min(i * 50, 200)}"` : ''}>
      <div class="exp-year${isCurrent ? ' exp-year-current' : ''}">${entry.years}</div>
      <div class="exp-body">
        <div class="exp-header">
          <h3 class="exp-role">${entry.role}</h3>
          <span class="exp-org">${entry.orgLabel}</span>
        </div>
        <p class="exp-desc">${entry.description}</p>
        <div class="exp-tags">${tags}</div>
      </div>
    </div>`;
  }).join('');

  return `
<section id="work" class="experience-section">
  <div class="container">

    <div class="section-header" data-reveal>
      <span class="section-label">Experience</span>
      <h2 class="section-title">8 years of building,<br>teaching &amp; growing.</h2>
    </div>

    <div class="exp-list">${items}
    </div>

    <blockquote class="exp-quote" data-reveal>
      "The best engineers never stop being students.<br>
      The best teachers never stop learning."
    </blockquote>

  </div>
</section>`;
}
