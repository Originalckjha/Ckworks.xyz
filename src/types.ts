// ── Canvas / animation primitives ─────────────────────────────────

export interface Vec2 {
  x: number;
  y: number;
}

export interface Particle extends Vec2 {
  vx: number;
  vy: number;
  r: number;
}

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface TrailPoint extends Vec2 {
  life: number; // 0..1
}

// ── Content types ──────────────────────────────────────────────────

export interface StatItem {
  value:  number;
  suffix: string;
  label:  string;
}

export interface Project {
  number:      string;
  title:       string;
  description: string;
  liveUrl:     string;
  githubUrl:   string;
  tags:        Array<{ label: string; featured?: boolean }>;
}

export type DotStyle  = 'default' | 'edu' | 'current';
export type CardStyle = 'default' | 'highlight' | 'current';
export type YearStyle = 'default' | 'current';

export interface TimelineEntry {
  years:       string;
  yearsNote?:  string;
  yearStyle?:  YearStyle;
  role:        string;
  org:         string;
  orgLabel:    string;
  description: string;
  tags:        string[];
  dotStyle?:   DotStyle;
  cardStyle?:  CardStyle;
  isCurrent?:  boolean;
}

export interface Skill {
  label:     string;
  featured?: boolean;
}

export interface SkillGroup {
  title:  string;
  skills: Skill[];
}

export interface Principle {
  sanskrit:    string;
  title:       string;
  description: string;
  style?:      'default' | 'jigyasa';
}

export interface SubjectCard {
  icon:        string;
  title:       string;
  description: string;
  tag:         string;
}
