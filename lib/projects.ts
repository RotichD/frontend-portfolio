import { projectDataArray } from '@/typings';
import screenshot from '../public/images/photography_portfolio_ss.png';
import yukno from '../public/images/yukno_ss.png';
import spoofy from '../public/images/spoofy_ss.png';

const projects: projectDataArray = [
  {
    imgSrc: screenshot,
    title: 'Photographer Portfolio',
    description:
      'Photography Portfolio to showcase photographic works. Includes Blog powered by Sanity CMS, SSR + ISR, and Stripe Payment integration for accepting donations.',
    liveUrl: 'https://www.dylanrotich.art',
    repoUrl: 'https://github.com/RotichD/photography-personal',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Sanity', 'Stripe'],
  },
  {
    imgSrc: yukno,
    title: 'Yu-Kno | AI Messenger',
    description:
      'AI Assistant/Messenger powered by OpenAI ChatGPT. Utilizes Next/Auth with Google Authentication. Users can select and change the AI models. Uses Firebase backend.',
    liveUrl: 'https://yu-kno.vercel.app',
    repoUrl: 'https://github.com/RotichD/yu-kno',
    tags: [
      'Next.js',
      'TypeScript',
      'Firebase',
      'TailwindCSS',
      'OpenAI',
      'Google Auth',
    ],
    isReversed: true,
  },
  {
    imgSrc: spoofy,
    title: 'Spoofy | Spotify Clone',
    description:
      'This Web App Controls any instance of Spotify Player running on another app or device. (example: TV, Amazon Echo, Web App, Desktop App, Mobile App)',
    liveUrl: 'https://spoofy.vercel.app',
    repoUrl: 'https://github.com/RotichD/spotify-clone',
    tags: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Spotify Auth',
      'Spotify API',
    ],
  },
];

export default projects;
