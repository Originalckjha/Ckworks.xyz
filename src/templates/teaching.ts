import { subjectCards } from '../data/teaching';
import { meta }         from '../data/meta';

const CARD_DELAYS = [0, 80, 160, 80, 160];

export function renderTeaching(): string {
  const cards = subjectCards.map((card, i) => {
    const delay = CARD_DELAYS[i] ?? 0;
    return `
      <article class="subject-card" data-reveal${delay ? ` data-delay="${delay}"` : ''}>
        <div class="subject-icon">${card.icon}</div>
        <h3 class="subject-title">${card.title}</h3>
        <p class="subject-desc">${card.description}</p>
        <span class="subject-tag">${card.tag}</span>
      </article>`;
  }).join('');

  return `
<section id="teaching" class="teaching-section py-28 px-8 md:px-24">
  <div class="max-w-7xl mx-auto">

    <div class="teaching-header mb-16" data-reveal>
      <div class="teaching-mode-badge">📚 EDUCATOR MODE</div>
      <h2 class="text-4xl md:text-5xl font-bold kerning-tight mt-6">
        I also teach.<br>
        <span class="edu-shimmer">8 years. 300+ students.</span>
      </h2>
      <p class="text-vayu text-lg mt-6 max-w-2xl leading-relaxed">
        Parallel to my engineering career, I've been a dedicated home tutor and institute teacher in
        <strong class="text-edu">Rohini, Delhi</strong> — translating complex concepts into lasting
        understanding for school and college students. Teaching made me a better engineer.
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" data-reveal data-delay="100">
      <div class="edu-stat-card">
        <span class="edu-stat-number" data-count="8"   data-suffix="+">8+</span>
        <span class="edu-stat-label">Years Teaching</span>
      </div>
      <div class="edu-stat-card">
        <span class="edu-stat-number" data-count="300" data-suffix="+">300+</span>
        <span class="edu-stat-label">Students Taught</span>
      </div>
      <div class="edu-stat-card">
        <span class="edu-stat-number" data-count="5"   data-suffix=" Subjects">5 Subjects</span>
        <span class="edu-stat-label">Covered</span>
      </div>
      <div class="edu-stat-card">
        <span class="edu-stat-number" style="-webkit-text-fill-color:#F4A028;color:#F4A028;">Rohini</span>
        <span class="edu-stat-label">Delhi + Nearby</span>
      </div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
      ${cards}
      <article class="subject-card cta-card" data-reveal data-delay="240">
        <div class="subject-icon">📍</div>
        <h3 class="subject-title">Covers Rohini &amp; Beyond</h3>
        <p class="subject-desc">Available across Rohini, Pitampura, Prashant Vihar, Shalimar Bagh, Ashok Vihar and Netaji Subhash Place.</p>
        <a href="mailto:${meta.email}" class="edu-cta-btn">Book a Session →</a>
      </article>
    </div>

  </div>
</section>`;
}
