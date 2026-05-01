const SKILLS = [
  { label: 'TypeScript',       brand: true  },
  { label: 'React',            brand: false },
  { label: 'Next.js',          brand: false },
  { label: 'Node.js',          brand: false },
  { label: 'System Design',    brand: true  },
  { label: 'Python',           brand: false },
  { label: 'CKWorks',          brand: true  },
  { label: 'Trade Fabric',     brand: false },
  { label: 'Educator',         brand: true  },
  { label: 'Web Architecture', brand: false },
  { label: 'C / C++',          brand: false },
  { label: 'Open Source',      brand: true  },
  { label: 'Vercel',           brand: false },
  { label: '300+ Students',    brand: false },
  { label: 'Builder',          brand: true  },
  { label: 'Lifelong Learner', brand: true  },
];

const items = (): string =>
  SKILLS.map(s =>
    `<span class="ticker-item${s.brand ? ' ticker-brand' : ''}">${s.label}<span class="ticker-sep">✦</span></span>`
  ).join('');

export function renderTicker(): string {
  return `
<div class="skills-ticker" aria-hidden="true">
  <div class="ticker-track">
    ${items()}${items()}
  </div>
</div>`;
}
