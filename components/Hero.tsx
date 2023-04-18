import headshot from '../public/images/headshot.jpg';
import Image from 'next/image';
import { MdLocationPin } from 'react-icons/md';

import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
} from 'react-icons/si';

function Hero() {
  return (
    <div className='flex min-h-screen w-full max-w-screen-lg flex-col items-center justify-around p-8 md:flex-row 2xl:max-w-screen-xl'>
      <div className='flex max-w-2xl flex-col space-y-4'>
        <h1 className='font-roboto text-5xl font-bold md:text-7xl 2xl:text-8xl'>
          Front-End React Developer
        </h1>
        <p className='flex items-center text-secondary md:text-xl'>
          <MdLocationPin />
          San Francisco Bay Area
        </p>
        <p className='max-w-md text-justify md:text-xl'>
          Known as a creative problem solver and supporting team member, I
          eagerly approach each project with a focus on mobile first design and
          brand image.
        </p>
        <div className='text-secondary'>
          <div className='flex items-center space-x-2 text-2xl'>
            <SiReact />
            <SiTypescript />
            <SiTailwindcss />
            <SiNextdotjs />

            <SiNodedotjs />
            <SiHtml5 />
            <SiCss3 />
            <SiFirebase />
          </div>
        </div>
      </div>
      <Image
        src={headshot}
        alt='Dylan Rotich Business Portrait'
        className='mt-5 rounded-full object-cover object-center md:mt-0'
        height={400}
      />
    </div>
  );
}

export default Hero;
