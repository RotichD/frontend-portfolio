import Link from 'next/link';

function NavBar() {
  return (
    <nav className='fixed left-0 top-0 z-20 w-full border-b bg-white font-roboto text-black shadow md:border-none'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <Link href='#' className='flex items-center'>
          <span className='self-center text-2xl font-semibold'>
            Dylan Rotich
          </span>
        </Link>

        <div
          className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto md:text-2xl'
          id='navbar-sticky'
        >
          <ul className='mt-4 flex flex-col border border-gray-100 p-4 font-bold md:mt-0 md:flex-row  md:items-center md:space-x-8 md:border-0 md:p-0'>
            <li>
              <a href='#about' className='navLink'>
                About
              </a>
            </li>
            <li>
              <a href='#projects' className='navLink'>
                Projects
              </a>
            </li>
            <li>
              <a href='#contact' className='navLink'>
                Contact
              </a>
            </li>
            <li>
              <button
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
              </button>
            </li>
          </ul>
        </div>

        <div className='md:hidden'>
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
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
