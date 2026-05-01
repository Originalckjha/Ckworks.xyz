import type { Project } from '../types';

export const projects: Project[] = [
  {
    number:      '01',
    title:       'CBSE Educator Dashboard',
    description: 'A full-featured MVP dashboard for CBSE educators to manage curriculum, track student progress, and streamline classroom workflows. Built production-ready from day one.',
    liveUrl:     'https://cbse-educator-dashboard-mvp.vercel.app',
    githubUrl:   'https://github.com/Originalckjha/CBSE-EDUCATOR-DASHBOARD-MVP-',
    tags: [
      { label: 'TypeScript', featured: true },
      { label: 'React' },
      { label: 'Tailwind CSS' },
      { label: 'Vercel' },
    ],
  },
  {
    number:      '02',
    title:       'WeakToStrong',
    description: 'A technical growth engine that visualises and accelerates skill acquisition. Built end-to-end in 8 hours straight — proving that focused execution beats prolonged planning.',
    liveUrl:     'https://weaktostrong.vercel.app',
    githubUrl:   'https://github.com/Originalckjha/Weaktostrong',
    tags: [
      { label: 'TypeScript', featured: true },
      { label: 'Next.js' },
      { label: 'Tailwind CSS' },
      { label: 'Vercel' },
    ],
  },
  {
    number:      '03',
    title:       'FinVeda',
    description: 'Dynamic financial literacy platform featuring Arthsathi — an AI chatbot for personal finance. Includes market trend dashboards, SIP calculator, finance blogs, and an interactive quiz engine.',
    liveUrl:     'https://finveda.vercel.app/',
    githubUrl:   'https://github.com/Originalckjha/FinVeda',
    tags: [
      { label: 'AI Integration', featured: true },
      { label: 'JavaScript' },
      { label: 'HTML / CSS' },
      { label: 'Vercel' },
    ],
  },
  {
    number:      '04',
    title:       'CodeArcade GitHub Scorecard',
    description: 'A GitHub account analytics tool that generates a ranked scorecard from your contribution data. Gamifies developer activity to surface coding patterns and consistency metrics.',
    liveUrl:     'https://codearcade-git-hub-account-scorecar.vercel.app',
    githubUrl:   'https://github.com/Originalckjha/Codearcade-GitHub.account.scorecard',
    tags: [
      { label: 'JavaScript', featured: true },
      { label: 'GitHub API' },
      { label: 'Data Viz' },
      { label: 'Vercel' },
    ],
  },
];
