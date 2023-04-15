import Link from 'next/link';

function NavBar() {
  return (
    <nav className='bg-white fixed w-full z-20 top-0 left-0 border-b text-black font-roboto md:border-none'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href='#home' className='flex items-center'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap ml-3'>
            Dylan Rotich
          </span>
        </Link>

        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:text-2xl'
          id='navbar-sticky'
        >
          <ul className='flex flex-col md:items-center p-4 md:p-0 mt-4 border font-bold border-gray-100  md:flex-row md:space-x-8 md:mt-0 md:border-0'>
            <li>
              <a href='#' className='navLink'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='navLink'>
                Projects
              </a>
            </li>
            <li>
              <a href='#' className='navLink'>
                Contact
              </a>
            </li>
            <li>
              <button
                type='button'
                className='hidden md:flex items-center bg-secondary hover:animate-pulse focus:ring-2 focus:outline-none md:mr-0 focus:ring-blue-300 font-medium rounded-lg text-base px-3 py-1.5 text-center  text-white'
              >
                Resume
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5 ml-2'
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
            className='w-10 h-10'
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
