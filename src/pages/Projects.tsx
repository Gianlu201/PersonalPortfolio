import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import SkeletonProjectCard from '../components/SkeletonProjectCard';
import { projects } from '../utilities/projects';
import type { Project } from '../types/interfaces';

const Projects = () => {
  const [projectsList, setProjectsList] = useState<Project[]>([]);

  useEffect(() => {
    setProjectsList(projects);
  }, []);

  return (
    <>
      <h2 className='text-4xl font-bold mb-2'>Progetti</h2>
      <div className='w-[80px] bg-primary h-1 rounded-full mb-6'></div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projectsList.length === 0 && (
          <>
            <SkeletonProjectCard isShowcase={false} />
            <SkeletonProjectCard isShowcase={false} />
            <SkeletonProjectCard isShowcase={false} />
            <SkeletonProjectCard isShowcase={false} />
            <SkeletonProjectCard isShowcase={false} />
            <SkeletonProjectCard isShowcase={false} />
          </>
        )}
        {projectsList.length > 0 &&
          projectsList.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              isShowcase={false}
            />
          ))}
      </div>
    </>
  );
};

export default Projects;
