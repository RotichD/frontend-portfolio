import Image from 'next/image';
import photography from '../public/images/photography_portfolio_ss.png';
import { SiGithub } from 'react-icons/si';
import { FaGlobe } from 'react-icons/fa';
import { projectData } from '@/typings';

type Props = {
  cardInfo: projectData;
};

function ProjectCard({ cardInfo }: Props) {
  return (
    <div className='max-w-screen-lg 2xl:max-w-screen-xl grid grid-cols-1 md:grid-cols-2 w-full border mt-12 p-4 md:p-8 pb-0 rounded-xl shadow min-h-72'>
      <div className='relative h-72 rounded p-8 md:py-0'>
        <a href={cardInfo.liveUrl} target='_blank'>
          <Image
            alt='Project Screenshot'
            src={cardInfo.imgSrc}
            height={500}
            className='absolute inset-0 w-full h-full object-cover object-top hover:opacity-70'
          />
        </a>
      </div>
      <div className='flex flex-col space-y-4 p-8 md:py-0 md:border-l border-t md:border-t-0'>
        <h4 className='text-3xl sm:text-4xl font-roboto font-bold text-secondary'>
          {cardInfo.title}
        </h4>
        <p className='md:text-lg text-justify'>{cardInfo.description}</p>
        <div className='flex items-center space-x-3'>
          <a
            href={cardInfo.liveUrl}
            target='_blank'
            className='flex items-center border border-black py-1 px-2 rounded-lg shadow font-roboto'
          >
            <FaGlobe className='mr-2' />
            Live Site
          </a>
          <a
            href={cardInfo.repoUrl}
            target='_blank'
            className='flex items-center border border-black py-1 px-2 rounded-lg shadow font-roboto'
          >
            <SiGithub className='mr-2' />
            Repo
          </a>
        </div>
        <div className='flex flex-wrap space-x-2'>
          {cardInfo.tags.map((tag) => (
            <p className='techTag'>{tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
