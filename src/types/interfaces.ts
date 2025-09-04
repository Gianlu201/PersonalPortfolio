import type { ReactElement } from 'react';

export interface menuOption {
  label: string;
  link: string;
  icon?: ReactElement;
}

export interface Contact {
  type: string;
  link: string;
  displayText: string;
}

export interface CoreSkill {
  area: string;
  description: string;
  icon: string; // URL or path to the icon image
}

export interface SkillCart {
  title: string;
  description: string;
  cardValue: string; // e.g., '10', 'J', 'Q', 'K', 'A'
  rotation: number; // gradi rotazione della carta
  traslationX: number; // traslazione orizzontale della carta
  traslationY: number; // traslazione verticale della carta
}

export interface Certification {
  title: string;
  description: string;
  category: string;
  authority: string;
  imgUrl: string;
  date: string;
  relevance: number;
  certificationUrl: string;
}

export interface Project {
  title: string;
  coverImgUrl: string;
  category: string;
  description: string;
  overview: string;
  technicalDetails: TechnicalDetail[];
  challenges: string[];
  solutions: string[];
  releaseDate: string;
  highlighted: boolean;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
  videoDemoUrl?: string;
  img1url?: string;
  img2url?: string;
  img3url?: string;
  img4url?: string;
}

export interface TechnicalDetail {
  type: string;
  description: string;
}
