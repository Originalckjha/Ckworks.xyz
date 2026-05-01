import { principles } from '../data/principles';

export function renderPrinciples(): string {
  const cards = principles.map((p, i) => `
    <div class="principle-row" data-reveal${i ? ` data-delay="${i * 80}"` : ''}>
      <span class="principle-sanskrit">${p.sanskrit}</span>
      <div class="principle-body">
        <h4 class="principle-title">${p.title}</h4>
        <p class="principle-desc">${p.description}</p>
      </div>
    </div>`
  ).join('');

  return `
<section class="principles-section">
  <div class="container">
    <div class="section-header" data-reveal>
      <span class="section-label">Values</span>
      <h2 class="section-title">How I work.</h2>
    </div>
    <div class="principles-list">${cards}
    </div>
  </div>
</section>`;
}
