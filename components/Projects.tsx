import ProjectCard from './ProjectCard';
import Spacer from './Spacer';
import projects from '@/lib/projects';

function Projects() {
  return (
    <>
      <Spacer />
      <h2 id='projects' className='font-roboto font-bold text-5xl mt-12'>
        Projects
      </h2>
      <div className='px-8'>
        {projects.map((project) => (
          <ProjectCard cardInfo={project} />
        ))}
      </div>
      <div className='mb-24'></div>
    </>
  );
}

export default Projects;
