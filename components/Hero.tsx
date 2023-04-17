import React from 'react';
import headshot from '../public/images/headshot.jpg';
import Image from 'next/image';

import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
} from 'react-icons/si';

function Hero() {
  return (
    <div
      id='home'
      className='max-w-screen-lg 2xl:max-w-screen-xl w-full flex flex-col items-center justify-around md:flex-row p-4 md:p-8'
    >
      <div className='flex flex-col space-y-4 max-w-2xl'>
        <h1 className='font-roboto font-bold text-5xl md:text-7xl 2xl:text-8xl'>
          Front-End React Developer
        </h1>
        <p className='text-secondary md:text-xl'>San Francisco Bay Area</p>
        <p className='md:text-xl max-w-md text-justify'>
          Known as a creative problem solver and supporting team member, I
          eagerly approach each project with a focus on mobile first design and
          brand image.
        </p>
        <div className='text-secondary'>
          <div className='flex items-center text-2xl space-x-2'>
            <SiReact />
            <SiTypescript />
            <SiTailwindcss />
            <SiNextdotjs />
            <SiMongodb />
            <SiExpress />
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
        className='rounded-full object-cover object-center mt-5 md:mt-0'
        height={400}
      />
    </div>
  );
}

export default Hero;
