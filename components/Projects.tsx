import ProjectCard from './ProjectCard';
import projects from '@/lib/projects';

function Projects() {
  return (
    <>
      <h2 className='ml-8 mt-12 font-roboto text-5xl font-bold'>Projects</h2>
      <p className='ml-8 font-roboto text-xl text-secondary md:text-3xl'>
        Developer Portfolio
      </p>
      <div className='px-8'>
        {projects.map((project) => (
          <ProjectCard cardInfo={project} key={project.title} />
        ))}
      </div>
    </>
  );
}

export default Projects;
