import { projectDataArray } from '@/typings';
import screenshot from '../public/images/photography_portfolio_ss.png';
import yukno from '../public/images/yukno_ss.png';
import spoofy from '../public/images/spoofy_ss.png';
import admin from '../public/images/admin_dark.png';
import store from '../public/images/store_large.png';

const projects: projectDataArray = [
  {
    imgSrc: admin,
    title: 'Admin Dashboard CMS Backend',
    description:
      'Custom made CMS powered by Prisma + MySql managed backend (PlanetScale)',
    liveUrl: 'https://github.com/RotichD/ecommerce-admin',
    repoUrl: 'https://github.com/RotichD/ecommerce-admin',
    tags: [
      'Prisma',
      'Planetscale',
      'TypeScript',
      'Next.js',
      'TailwindCSS',
      'Clerk Auth',
      'Stripe',
    ],
  },
  {
    imgSrc: store,
    title: 'Streetwear E-Commerce Store',
    description: 'Front End Online E-Commerce Store',
    liveUrl: 'https://ecommerce-storefront-ivory.vercel.app/',
    repoUrl: 'https://github.com/RotichD/ecommerce-storefront',
    tags: [
      'TypeScript',
      'React',
      'Next.js',
      'TailwindCSS',
      'Zustand',
      'HeadlessUI',
    ],
    isReversed: true,
  },
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
      'Recoil.js',
      'Spotify Auth',
      'Spotify API',
    ],
  },
];

export default projects;
