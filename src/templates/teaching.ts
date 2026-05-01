import { subjectCards } from '../data/teaching';
import { meta }         from '../data/meta';

export function renderTeaching(): string {
  const cards = subjectCards.map((card, i) => `
    <div class="subject-card" data-reveal${i ? ` data-delay="${i * 60}"` : ''}>
      <span class="subject-icon">${card.icon}</span>
      <h3 class="subject-title">${card.title}</h3>
      <p class="subject-desc">${card.description}</p>
      <span class="subject-tag">${card.tag}</span>
    </div>`
  ).join('');

  return `
<section id="teaching" class="teaching-section">
  <div class="container">

    <div class="teaching-grid">

      <div class="teaching-label-col" data-reveal>
        <span class="section-label edu">Teaching</span>
        <div class="teaching-stats">
          <div class="t-stat">
            <span class="t-stat-num">8+</span>
            <span class="t-stat-label">Years</span>
          </div>
          <div class="t-stat">
            <span class="t-stat-num">300+</span>
            <span class="t-stat-label">Students</span>
          </div>
        </div>
        <p class="teaching-location">
          Rohini, Pitampura, Prashant Vihar,<br>
          Shalimar Bagh, Ashok Vihar, Delhi
        </p>
        <a href="mailto:${meta.email}" class="btn-edu">Book a Session →</a>
      </div>

      <div class="teaching-content-col">
        <h2 class="teaching-title" data-reveal>
          I also teach.<br>
          <span class="teaching-accent">8 years. 300+ students.</span>
        </h2>
        <p class="teaching-desc" data-reveal data-delay="80">
          Parallel to my engineering career, I've been a dedicated home tutor and institute teacher in
          Rohini, Delhi — translating complex concepts into lasting understanding for school and college
          students. Teaching made me a better engineer.
        </p>
        <div class="subject-grid">${cards}
        </div>
      </div>

    </div>

  </div>
</section>`;
}
