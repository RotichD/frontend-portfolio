import About from '@/components/About';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

function HomePage() {
  return (
    <div className='mt-24 flex flex-col items-center'>
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default HomePage;
