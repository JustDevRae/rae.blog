export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ImplementItem {
  title: string;
  detail: string;
}

export interface TroubleShooting {
  title: string;
  trouble: string;
  cause: string;
  solution: string;
}

export interface Project {
  title: string;
  period: string;
  summary: string;
  skill: string[];
  githubUrl: string;
  deployUrl: string;
  description: string[];
  implements: ImplementItem[];
  projectFunctions: string[];
  troubleShooting: TroubleShooting[];
  images: ProjectImage[];
}
