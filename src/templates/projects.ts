import { projects } from '../data/projects';
import { meta }     from '../data/meta';

const CARD_DELAYS = [0, 120, 80, 200];

export function renderProjects(): string {
  const cards = projects.map((p, i) => {
    const delay = CARD_DELAYS[i] ?? 0;
    const tags  = p.tags.map(t =>
      `<span class="tech-tag${t.featured ? ' featured' : ''}">${t.label}</span>`
    ).join('');

    return `
    <article class="project-card" data-reveal${delay ? ` data-delay="${delay}"` : ''}>
      <div class="project-card-inner">
        <div class="flex items-start justify-between mb-4">
          <span class="project-number">${p.number}</span>
          <div class="flex gap-2">
            <a href="${p.liveUrl}"   target="_blank" rel="noopener" class="project-link-btn">Live ↗</a>
            <a href="${p.githubUrl}" target="_blank" rel="noopener" class="project-link-btn ghost">GitHub</a>
          </div>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="tech-tags">${tags}</div>
      </div>
    </article>`;
  }).join('');

  return `
<section id="projects" class="py-28 px-8 md:px-24">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16" data-reveal>
      <div>
        <p class="font-mono text-xs uppercase tracking-[0.4em] text-agni mb-3">// Live Projects</p>
        <h2 class="text-4xl font-bold kerning-tight">Shipped. In production.</h2>
      </div>
      <a href="${meta.github}" target="_blank" rel="noopener"
         class="font-mono text-xs text-vayu hover:text-prithvi border-b border-vayu/40 pb-0.5 transition-colors self-start md:self-auto">
        View all repositories ↗
      </a>
    </div>
    <div class="grid md:grid-cols-2 gap-6">${cards}
    </div>
  </div>
</section>`;
}
