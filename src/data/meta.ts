import type { StatItem } from '../types';

export const meta = {
  name:         'Chandra Kishor Jha',
  handle:       'CKWorks',
  shortName:    'CK JHA',
  role:         'Software Engineer',
  company:      'Trade Fabric',
  companyStart: 'April 2026',
  location:     'Delhi, India',
  email:        'ckworkss@gmail.com',
  github:       'https://github.com/Originalckjha',
  linkedin:     'https://www.linkedin.com/in/chandra-kishor-jha-276744184',
  twitter:      'https://x.com/originalckjha',
  linktree:     'https://linktr.ee/Ckjhaa',
  typewriter:   'Building systems that work. Teaching minds that grow.',
  tagline:      'Build. Ship. Teach.',
  stats: {
    years:    { value: 8,   suffix: '+', label: 'Yrs in Tech'     } satisfies StatItem,
    projects: { value: 13,  suffix: '+', label: 'Projects Shipped' } satisfies StatItem,
    students: { value: 300, suffix: '+', label: 'Students Taught'  } satisfies StatItem,
  },
} as const;
