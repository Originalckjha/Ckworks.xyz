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
