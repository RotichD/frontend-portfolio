import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Spacer from '@/components/Spacer';

function HomePage() {
  return (
    <div className='flex flex-col items-center' id='home'>
      <Spacer />
      <Hero />
      <div
        id='about'
        className='flex w-full flex-col items-center bg-neutral-100/70 py-12'
      >
        <About />
      </div>

      <div className='mb-12 py-12' id='projects'>
        <Projects />
      </div>
      <div
        className='flex w-full flex-col items-center bg-neutral-100/70 py-12'
        id='contact'
      >
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
