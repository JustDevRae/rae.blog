export interface PostMetaData {
  title: string;
  description: string;
  tags: string[];
  date: string;
}

export interface Post {
  slug: string;
  postMetaData: {
    title: string;
    description: string;
    tags: string[];
    date: string;
  };
}

export interface TOCSubSection {
  slug: string;
  text: string;
}

export interface TOCSection extends TOCSubSection {
  subSections: TOCSubSection[];
}
