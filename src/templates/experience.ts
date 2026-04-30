import { experience } from '../data/experience';
import type { TimelineEntry } from '../types';

function dot(entry: TimelineEntry): string {
  if (entry.dotStyle === 'current') return '<div class="tl-dot tl-dot-current"></div>';
  if (entry.dotStyle === 'edu')     return '<div class="tl-dot tl-dot-edu"></div>';
  return '<div class="tl-dot"></div>';
}

function year(entry: TimelineEntry): string {
  if (entry.yearStyle === 'current') {
    return `<div class="tl-year tl-year-current">${entry.years} <span>${entry.yearsNote ?? ''}</span></div>`;
  }
  return `<div class="tl-year">${entry.years}</div>`;
}

function card(entry: TimelineEntry): string {
  const cardClass =
    entry.cardStyle === 'current'   ? 'tl-card tl-card-current'   :
    entry.cardStyle === 'highlight' ? 'tl-card tl-card-highlight'  : 'tl-card';

  const badgeClass =
    entry.cardStyle === 'current' ? 'tl-badge tl-badge-current' :
    entry.dotStyle  === 'edu'     ? 'tl-badge tl-badge-edu'     : 'tl-badge';

  const tags = entry.tags.map(t => `<span>${t}</span>`).join('');

  return `<div class="${cardClass}">
      <div class="tl-card-header">
        <h3 class="tl-role">${entry.role}</h3>
        <span class="${badgeClass}">${entry.orgLabel}</span>
      </div>
      <p class="tl-desc">${entry.description}</p>
      <div class="tl-tags">${tags}</div>
    </div>`;
}

export function renderExperience(): string {
  const items = experience.map(entry => `
    <div class="tl-item${entry.isCurrent ? ' tl-item-current' : ''}">
      ${year(entry)}
      ${dot(entry)}
      ${card(entry)}
    </div>`).join('');

  return `
<section id="experience" class="py-28 px-8 md:px-24 bg-jala/20">
  <div class="max-w-5xl mx-auto">

    <div class="mb-16" data-reveal>
      <p class="font-mono text-xs uppercase tracking-[0.4em] text-agni mb-3">// Journey</p>
      <h2 class="text-4xl font-bold kerning-tight">8 years of building,<br>teaching &amp; growing.</h2>
      <p class="text-vayu text-lg mt-5 max-w-2xl leading-relaxed">
        Freelancer. Educator. Consultant. Now Engineer.
        <span class="text-agni font-semibold">A lifelong learner</span> who never stopped.
      </p>
    </div>

    <div class="timeline-container" data-reveal data-delay="100">${items}
    </div>

    <div class="mt-16 text-center border-t border-vayu/10 pt-12" data-reveal data-delay="250">
      <p class="font-serif italic text-vayu text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
        "The best engineers never stop being students.<br>The best teachers never stop learning."
      </p>
      <p class="font-mono text-agni text-xs mt-4 tracking-[0.3em] uppercase">— A lifelong learner</p>
    </div>

  </div>
</section>`;
}
