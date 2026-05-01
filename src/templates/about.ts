import { meta } from '../data/meta';

export function renderAbout(): string {
  return `
<section id="about" class="about-section">
  <div class="container">

    <div class="about-grid">

      <div class="about-label-col" data-reveal>
        <span class="section-label">About</span>
      </div>

      <div class="about-content-col">

        <h2 class="about-title" data-reveal>
          Engineer. Educator.<br>Lifelong Learner.
        </h2>

        <div class="about-body" data-reveal data-delay="80">
          <p>
            I build web systems end-to-end — from database schema to deployed UI. Currently engineering at
            <strong>${meta.company}</strong>, where I apply 8 years of freelance, teaching, and open-source
            experience to real production challenges.
          </p>
          <p>
            Rooted in first-principles thinking: every component must justify its existence.
            No bloat. No unnecessary abstraction. Just systems that work.
          </p>
          <p>
            I've worn many hats — freelancer, CS teacher, student consultant, Clapingo moderator — and every
            role made me a sharper engineer. I am, above all, a <strong>lifelong learner</strong>.
            The day I stop learning is the day I stop building.
          </p>
        </div>

        <div class="about-links" data-reveal data-delay="160">
          <a href="${meta.github}"   target="_blank" rel="noopener" class="about-link">GitHub ↗</a>
          <a href="${meta.linkedin}" target="_blank" rel="noopener" class="about-link">LinkedIn ↗</a>
          <a href="${meta.linktree}" target="_blank" rel="noopener" class="about-link">Linktree ↗</a>
        </div>

      </div>

    </div>

  </div>
</section>`;
}
