import Image from 'next/image';
import devCoding from '../public/images/developer_coding.svg';

function About() {
  return (
    <>
      <div className='ml-8 flex w-full max-w-screen-lg flex-col px-4 2xl:max-w-screen-xl'>
        <h2 className='mt-12 font-roboto text-5xl font-bold'>About Me</h2>
        <p className='font-roboto text-xl text-secondary md:text-3xl'>
          Front-End Dev w/ Full-Stack Training
        </p>
      </div>

      <div className='my-8 grid w-full max-w-screen-lg grid-cols-1 px-8 py-4 md:grid-cols-2 2xl:max-w-screen-xl'>
        <div className='flex justify-center p-4'>
          <Image
            src={devCoding}
            alt='coding illustration'
            className=' overflow-hiddenmax-w-sm'
            height={400}
          />
        </div>
        <div className='flex items-center space-y-2 p-4 text-center'>
          <div>
            <h3 className='font-roboto text-2xl font-bold text-secondary lg:text-3xl'>
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
              quickly gravitated towards the front-end where I excel in creating
              and maintaining delightful and mobile friendly websites. When
              I&apos;m not coding I spend my free time practicing photography 📸
              and producing music 🎵.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
