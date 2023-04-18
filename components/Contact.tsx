import { SiGithub, SiLinkedin, SiAngellist } from 'react-icons/si';
import { MdMailOutline } from 'react-icons/md';

function Contact() {
  return (
    <>
      <div className='flex w-full max-w-screen-lg flex-col px-8 md:px-0 2xl:max-w-screen-xl'>
        <h2 className='mt-12  font-roboto text-5xl font-bold'>Contact</h2>
        <p className='font-roboto text-3xl text-secondary'>
          Don't hesitate to connect with me
        </p>
        <div className='rounded-xlpy-8 mb-24 mt-12 flex w-full flex-col space-y-8 md:flex-row  md:items-center md:justify-between 2xl:max-w-screen-xl'>
          <div>
            <h3 className='mb-4 font-roboto text-3xl font-bold'>
              Social Links
            </h3>
            <div className='flex items-center space-x-4 text-7xl text-secondary'>
              <a
                href='https://github.com/RotichD'
                target='_blank'
                className='transition duration-200 hover:text-primary'
              >
                <SiGithub className='drop-shadow' />
              </a>
              <a
                href='https://linkedin.com/in/dylanrotich/'
                target='_blank'
                className='transition duration-200 hover:text-primary'
              >
                <SiLinkedin className='drop-shadow' />
              </a>
              <a
                href='https://wellfound.com/u/dylan-rotich'
                target='_blank'
                className='transition duration-200 hover:text-primary'
              >
                <SiAngellist className='drop-shadow' />
              </a>
            </div>
          </div>

          <div>
            <h3 className='mb-4 font-roboto text-3xl font-bold'>Email</h3>
            <div className='group flex items-center space-x-4'>
              <MdMailOutline className='text-7xl text-secondary drop-shadow group-hover:text-primary' />
              <a
                href='mailto:hello@dylanrotich.dev'
                className=' text-lg text-neutral-600 group-hover:text-primary md:text-2xl'
              >
                hello@dylanrotich.dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
