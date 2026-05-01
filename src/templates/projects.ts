import { projects } from '../data/projects';
import { meta }     from '../data/meta';

export function renderProjects(): string {
  const rows = projects.map((p, i) => {
    const num  = String(i + 1).padStart(2, '0');
    const tags = p.tags.slice(0, 3).map(t => t.label).join(' · ');

    return `
    <div class="work-row" data-reveal${i ? ` data-delay="${i * 60}"` : ''}>
      <span class="work-num">${num}</span>
      <div class="work-body">
        <h3 class="work-title">${p.title}</h3>
        <p class="work-desc">${p.description}</p>
        <span class="work-tags">${tags}</span>
      </div>
      <div class="work-actions">
        <a href="${p.liveUrl}"   target="_blank" rel="noopener" class="work-btn">Live ↗</a>
        <a href="${p.githubUrl}" target="_blank" rel="noopener" class="work-btn ghost">Code</a>
      </div>
    </div>`;
  }).join('');

  return `
<section id="projects" class="projects-section">
  <div class="container">

    <div class="section-header" data-reveal>
      <span class="section-label">Projects</span>
      <div class="section-header-row">
        <h2 class="section-title">Shipped. In production.</h2>
        <a href="${meta.github}" target="_blank" rel="noopener" class="all-repos-link">
          All repositories ↗
        </a>
      </div>
    </div>

    <div class="work-list">${rows}
    </div>

  </div>
</section>`;
}
