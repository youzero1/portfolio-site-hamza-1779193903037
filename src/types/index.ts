export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
  accent: string;
};

export type Skill = {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools';
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};
