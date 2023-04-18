import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Spacer from '@/components/Spacer';

function HomePage() {
  return (
    <div className='flex flex-col items-center'>
      <Spacer />
      <Hero />
      <div className='flex w-full flex-col items-center bg-neutral-100/70'>
        <About />
      </div>

      <div className='mb-12'>
        <Projects />
      </div>
      <div className='flex w-full flex-col items-center bg-neutral-100/70'>
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
