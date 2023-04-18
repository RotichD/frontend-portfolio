import Image from 'next/image';
import devCoding from '../public/images/developer_coding.svg';

function About() {
  return (
    <>
      <div className='flex w-full max-w-screen-lg flex-col px-8 md:px-0 2xl:max-w-screen-xl'>
        <h2 className='mt-12 font-roboto text-5xl font-bold'>About Me</h2>
        <p className='font-roboto text-3xl text-secondary'>
          Front-End Dev w/ Full-Stack Training
        </p>
      </div>

      <div className='my-8 grid w-full max-w-screen-lg grid-cols-1 p-4 md:grid-cols-2 md:p-8 2xl:max-w-screen-xl'>
        <div className='flex justify-center'>
          <Image
            src={devCoding}
            alt='coding illustration'
            className=' max-w-sm'
          />
        </div>
        <div className='space-y-2 p-4'>
          <h3 className='font-roboto text-2xl font-bold text-secondary'>
            Background
          </h3>
          <p className=' text-offBlack md:text-xl'>
            I&apos;m a{' '}
            <a
              href='https://www.parchment.com/u/award/736ee44d1db73c2713dcb0a7b6f90921'
              target='_blank'
              className='text-secondary underline'
            >
              Certified Front-End Developer
            </a>{' '}
            with a well rounded training in the Full-Stack (MERN) from the UC
            Berkeley Extension Coding Bootcamp. During my first internship, I
            quickly gravitated towards the front-end where I excell in creating
            and maintining delightful and mobile friendly websites. When
            I&apos;m not coding I spend my free time practicing photography 📸
            and producing music 🎵.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
