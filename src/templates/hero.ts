import { meta } from '../data/meta';

export function renderHero(): string {
  const { stats } = meta;

  return `
<main id="home" class="hero-section">

  <div class="hero-eyebrow" data-reveal>
    <span class="hero-status-dot"></span>
    <span class="hero-status-text">${meta.role} @ <strong>${meta.company}</strong> · ${meta.location}</span>
  </div>

  <div class="hero-name-block">
    <h1 class="hero-line1" data-reveal>CK</h1>
    <h1 class="hero-line2" data-reveal data-delay="80">JHA</h1>
  </div>

  <div class="hero-footer-row">

    <div class="hero-desc-col" data-reveal data-delay="160">
      <p class="hero-desc">${meta.typewriter}</p>
      <div class="hero-ctas">
        <a href="#projects" class="btn-primary">View Projects</a>
        <a href="#work"     class="btn-outline">My Journey</a>
      </div>
    </div>

    <div class="hero-stats-col" data-reveal data-delay="200">
      <div class="h-stat">
        <span class="h-stat-num" data-count="${stats.years.value}" data-suffix="${stats.years.suffix}">${stats.years.value}${stats.years.suffix}</span>
        <span class="h-stat-label">${stats.years.label}</span>
      </div>
      <div class="h-stat-div"></div>
      <div class="h-stat">
        <span class="h-stat-num" data-count="${stats.projects.value}" data-suffix="${stats.projects.suffix}">${stats.projects.value}${stats.projects.suffix}</span>
        <span class="h-stat-label">${stats.projects.label}</span>
      </div>
      <div class="h-stat-div"></div>
      <div class="h-stat">
        <span class="h-stat-num" data-count="${stats.students.value}" data-suffix="${stats.students.suffix}">${stats.students.value}${stats.students.suffix}</span>
        <span class="h-stat-label">${stats.students.label}</span>
      </div>
    </div>

  </div>

</main>`;
}
