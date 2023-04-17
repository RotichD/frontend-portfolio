import { StaticImageData } from 'next/image';

type projectData = {
  imgSrc: StaticImageData;
  title: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
  tags: string[];
};

type projectDataArray = projectData[];
