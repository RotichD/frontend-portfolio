import { SiGithub, SiLinkedin } from 'react-icons/si';

function Footer() {
  return (
    <footer className='bg-offBlack'>
      <div className='mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between md:py-12'>
        <span className='text-sm text-white sm:text-center'>
          © 2023 Dylan Rotich. All Rights Reserved.
        </span>
        <div className='mt-4 flex items-center space-x-2 text-xl text-white md:mt-0'>
          <a
            className='cursor-pointer hover:text-blue-600'
            href='https://github.com/RotichD'
            target='_blank'
          >
            <SiGithub />
          </a>
          <a
            className='cursor-pointer hover:text-blue-600'
            href='https://www.linkedin.com/in/dylanrotich/'
            target='_blank'
          >
            <SiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
