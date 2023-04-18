import Image from 'next/image';

import { SiGithub } from 'react-icons/si';
import { FaGlobe } from 'react-icons/fa';
import { projectData } from '@/typings';

type Props = {
  cardInfo: projectData;
};

function ProjectCard({ cardInfo }: Props) {
  return (
    <div className='min-h-72 mt-12 grid w-full max-w-screen-lg grid-cols-1 rounded-xl border bg-white p-4 pb-0 shadow md:grid-cols-2 md:p-8 2xl:max-w-screen-xl'>
      <div
        className={`relative h-72 rounded ${
          cardInfo.isReversed && 'md:order-2'
        }`}
      >
        <a href={cardInfo.liveUrl} target='_blank'>
          <Image
            alt='Project Screenshot'
            src={cardInfo.imgSrc}
            height={500}
            className='absolute inset-0 h-full w-full rounded-lg object-cover object-top shadow-md hover:opacity-70'
          />
        </a>
      </div>
      <div className='flex flex-col space-y-4 border-t p-8 md:border-t-0 md:py-0'>
        <h4 className='text-center font-roboto text-3xl font-bold text-secondary sm:text-4xl'>
          {cardInfo.title}
        </h4>
        <p className='text-center md:text-lg'>{cardInfo.description}</p>
        <div className='flex items-center justify-center space-x-3'>
          <a
            href={cardInfo.liveUrl}
            target='_blank'
            className='flex items-center rounded-lg border border-black px-2 py-1 font-roboto shadow transition duration-200 hover:scale-105 hover:border-blue-600 hover:text-blue-600'
          >
            <FaGlobe className='mr-2' />
            Live Site
          </a>
          <a
            href={cardInfo.repoUrl}
            target='_blank'
            className='flex items-center rounded-lg border border-black px-2 py-1 font-roboto shadow transition duration-200 hover:scale-105 hover:border-blue-600 hover:text-blue-600'
          >
            <SiGithub className='mr-2' />
            Repo
          </a>
        </div>
        <div className='flex flex-wrap justify-center space-x-2'>
          {cardInfo.tags.map((tag) => (
            <p className='techTag' key={tag}>
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
