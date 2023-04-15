import About from '@/components/About';
import Hero from '@/components/Hero';

function HomePage() {
  return (
    <div className='mt-24 flex flex-col items-center'>
      <Hero />
      <About />
    </div>
  );
}

export default HomePage;
