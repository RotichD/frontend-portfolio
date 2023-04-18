'use client';
import { useState } from 'react';
import Link from 'next/link';
import { animateScroll as scroll } from 'react-scroll';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToAbout = () => {
    setIsOpen(false);
    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      scroll.scrollTo(aboutElement.offsetTop);
    }
  };

  const scrollToProjects = () => {
    setIsOpen(false);
    const projectElement = document.getElementById('projects');
    if (projectElement) {
      scroll.scrollTo(projectElement.offsetTop);
    }
  };

  const scrollToContact = () => {
    setIsOpen(false);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      scroll.scrollTo(contactElement.offsetTop);
    }
  };

  const scrollToHome = () => {
    setIsOpen(false);
    const homeElement = document.getElementById('home');
    if (homeElement) {
      scroll.scrollTo(homeElement.offsetTop);
    }
  };

  return (
    <nav className='fixed left-0 top-0 z-20 w-full border-b bg-white font-roboto text-black shadow md:border-none'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <button onClick={scrollToHome} className='flex items-center'>
          <span className='self-center text-2xl font-semibold'>
            Dylan Rotich
          </span>
        </button>

        <div
          className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto md:text-2xl'
          id='navbar-sticky'
        >
          <ul className='mt-4 flex flex-col border border-gray-100 p-4 font-bold md:mt-0 md:flex-row  md:items-center md:space-x-8 md:border-0 md:p-0'>
            <li onClick={scrollToAbout}>
              <Link href='#about' className='navLink'>
                About
              </Link>
            </li>
            <li onClick={scrollToProjects}>
              <Link href='#projects' className='navLink'>
                Projects
              </Link>
            </li>
            <li onClick={scrollToContact}>
              <Link href='#contact' className='navLink'>
                Contact
              </Link>
            </li>
            <li>
              <a
                href='/resume.pdf'
                target='_blank'
                type='button'
                className='hidden items-center rounded-lg bg-secondary px-3 py-1.5 text-center text-base font-medium text-white hover:animate-pulse focus:outline-none focus:ring-2 focus:ring-blue-300 md:mr-0  md:flex'
              >
                Resume
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='ml-2 h-5 w-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className='md:hidden'>
          <button
            type='button'
            className='rounded-lg focus:ring-4 focus:ring-blue-300'
            onClick={toggleMenu}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-10 w-10'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className='flex flex-col items-center space-y-12 py-8 font-roboto text-2xl font-bold'>
          <li onClick={scrollToAbout}>
            <Link href='#about' className='navLink'>
              About
            </Link>
          </li>
          <li onClick={scrollToProjects}>
            <Link href='#projects' className='navLink'>
              Projects
            </Link>
          </li>
          <li onClick={scrollToContact}>
            <Link href='#contact' className='navLink'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
