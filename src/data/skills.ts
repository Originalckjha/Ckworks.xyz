import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: [
      { label: 'TypeScript', featured: true },
      { label: 'JavaScript', featured: true },
      { label: 'Python' },
      { label: 'C / C++' },
      { label: 'HTML5' },
      { label: 'CSS3' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { label: 'React',        featured: true },
      { label: 'Next.js',      featured: true },
      { label: 'Tailwind CSS' },
      { label: 'Node.js' },
      { label: 'Express' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { label: 'Git / GitHub', featured: true },
      { label: 'Vercel',       featured: true },
      { label: 'esbuild' },
      { label: 'VS Code' },
      { label: 'Figma' },
    ],
  },
  {
    title: 'Domains',
    skills: [
      { label: 'System Design',   featured: true },
      { label: 'Web Architecture',featured: true },
      { label: 'API Design' },
      { label: 'AI Integration' },
      { label: 'Performance' },
    ],
  },
];
