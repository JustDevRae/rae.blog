export interface ProjectImage {
  src: string;
  alt: string;
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
  description: string;
  implements: string[];
  troubleShooting: TroubleShooting;
  images: ProjectImage[];
}
