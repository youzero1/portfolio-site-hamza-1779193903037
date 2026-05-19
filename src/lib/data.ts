import type { Project, Skill, Experience } from '@/types';

export const projects: Project[] = [
  {
    id: 'nimbus',
    title: 'Nimbus Analytics',
    description: 'A real-time analytics dashboard with custom charting, alerting and team workspaces.',
    tags: ['React', 'TypeScript', 'D3', 'WebSockets'],
    url: '#',
    repo: '#',
    accent: 'linear-gradient(135deg, #7c5cff, #22d3ee)',
  },
  {
    id: 'kanban',
    title: 'Drift Kanban',
    description: 'Collaborative Kanban board with offline-first sync, drag-and-drop and rich text cards.',
    tags: ['React', 'IndexedDB', 'CRDT'],
    url: '#',
    repo: '#',
    accent: 'linear-gradient(135deg, #f97316, #ef4444)',
  },
  {
    id: 'pulse',
    title: 'Pulse Music',
    description: 'A minimalist music player with audio visualization and personalized playlists.',
    tags: ['React', 'Web Audio', 'Canvas'],
    url: '#',
    accent: 'linear-gradient(135deg, #22c55e, #14b8a6)',
  },
  {
    id: 'orbit',
    title: 'Orbit CMS',
    description: 'Headless CMS focused on developer experience, with a block-based editor and Git sync.',
    tags: ['Node.js', 'GraphQL', 'Postgres'],
    repo: '#',
    accent: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
  },
  {
    id: 'lumen',
    title: 'Lumen Docs',
    description: 'Beautiful documentation site generator with full-text search and theming.',
    tags: ['Vite', 'MDX', 'Search'],
    url: '#',
    repo: '#',
    accent: 'linear-gradient(135deg, #facc15, #f97316)',
  },
  {
    id: 'voyage',
    title: 'Voyage Travel',
    description: 'Trip planner with map-based itineraries, packing lists and shared travel journals.',
    tags: ['React', 'Mapbox', 'PWA'],
    url: '#',
    accent: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
  },
];

export const skills: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 92, category: 'Frontend' },
  { name: 'CSS / Animations', level: 88, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'PostgreSQL', level: 78, category: 'Backend' },
  { name: 'GraphQL', level: 80, category: 'Backend' },
  { name: 'Figma', level: 82, category: 'Tools' },
  { name: 'Docker', level: 70, category: 'Tools' },
  { name: 'Git / CI', level: 90, category: 'Tools' },
];

export const experiences: Experience[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Northwind Labs',
    period: '2022 — Present',
    description: 'Leading the design system team, building accessible component libraries used across 12 products.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Cobalt Studio',
    period: '2019 — 2022',
    description: 'Shipped client products end-to-end: React frontends, Node APIs, Postgres data models and CI/CD.',
  },
  {
    role: 'Frontend Developer',
    company: 'Pixelforge',
    period: '2017 — 2019',
    description: 'Built marketing sites and interactive web experiences with a focus on motion and performance.',
  },
];
