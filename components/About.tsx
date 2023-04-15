function About() {
  return (
    <>
      <h2 className='font-roboto font-bold text-5xl mt-24'>About Me</h2>
      <div className='max-w-screen-lg 2xl:max-w-screen-xl grid grid-cols-1 md:grid-cols-2 w-full p-4 md:p-8 mt-8'>
        <div></div>
        <div className='space-y-2'>
          <h3 className='font-roboto font-bold text-2xl text-secondary'>
            Background
          </h3>
          <p className='text-offBlack text-lg text-justify'>
            I'm a{' '}
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
            and maintining delightful and mobile friendly websites. When I'm not
            coding I spend my free time practicing photography 📸 and producing
            music 🎵.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
