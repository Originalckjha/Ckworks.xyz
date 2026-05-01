import { principles } from '../data/principles';

export function renderPrinciples(): string {
  const cards = principles.map((p, i) => {
    const delay = i * 100;

    const spanAttrs = p.style === 'jigyasa'
      ? `class="font-serif italic text-xl" style="background:linear-gradient(90deg,#F4A028,#7C5CED,#F4A028);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 3s linear infinite"`
      : `class="shimmer-text font-serif italic text-xl"`;

    const borderStyle = p.style === 'jigyasa'
      ? ' style="border-color:rgba(244,160,40,0.14)"'
      : '';

    return `
    <div class="principle-card space-y-3 p-8 border border-vayu/10" data-reveal${delay ? ` data-delay="${delay}"` : ''}${borderStyle}>
      <span ${spanAttrs}>${p.sanskrit}</span>
      <h4 class="font-bold">${p.title}</h4>
      <p class="text-vayu text-sm leading-relaxed">${p.description}</p>
    </div>`;
  }).join('');

  return `
<section class="py-20 px-8 md:px-24 bg-jala/20">
  <div class="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">${cards}
  </div>
</section>`;
}
