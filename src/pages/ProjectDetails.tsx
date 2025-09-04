import {
  ChevronLeft,
  CircleCheckBig,
  ExternalLink,
  MonitorPlay,
  Swords,
  Tally1,
  Tally2,
  Tally3,
  Tally4,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { Project } from '../types/interfaces';
import { projects } from '../utilities/projects';
import InfiniteCarousel from '../components/InfiniteCarousel';
import { getTechnology } from '../utilities/mainFunctions';

const ProjectDetails = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [projectImages, setProjectImages] = useState<string[]>([]);

  const params = useParams();

  const getTechnicalDetailsIcon = (number: number) => {
    switch (number) {
      case 0:
        return <Tally1 className='w-5 h-5 text-primary mt-1' />;
      case 1:
        return <Tally2 className='w-5 h-5 text-primary mt-1' />;
      case 2:
        return <Tally3 className='w-5 h-5 text-primary mt-1' />;
      case 3:
        return <Tally4 className='w-5 h-5 text-primary mt-1' />;
    }
  };

  useEffect(() => {
    const currentProject = projects.find(
      (proj) => proj.title === params.projectName
    );

    if (currentProject) {
      setProject(currentProject);

      const imagesList: string[] = [];

      if (currentProject.img1url) imagesList.push(currentProject.img1url);
      if (currentProject.img2url) imagesList.push(currentProject.img2url);
      if (currentProject.img3url) imagesList.push(currentProject.img3url);
      if (currentProject.img4url) imagesList.push(currentProject.img4url);

      setProjectImages(imagesList);
    }
  }, []);

  return (
    <>
      <div className='md:flex justify-between items-start'>
        <div>
          <h2 className='text-4xl font-bold mb-2'>{params.projectName}</h2>
          <div className='w-[80px] bg-primary h-1 rounded-full mb-4'></div>
        </div>

        {project && (
          <div className='flex items-center gap-3 max-md:mb-4'>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target='_blank'
                className='flex justify-center items-center gap-2 text-sm font-semibold border border-gray-500 rounded-xl px-3 py-2 bg-background-lighter hover:bg-gray-600'
              >
                <img
                  src='/illustrations/technologies/githubPrimary.svg'
                  className='w-5 h-5 rounded-full'
                />
                GitHub
              </a>
            )}
            {project.videoDemoUrl && (
              <a
                href='#videoDemo'
                className='flex justify-center items-center gap-2 text-sm font-semibold border border-gray-500 rounded-xl px-3 py-2 bg-background-lighter hover:bg-gray-600'
              >
                <MonitorPlay className='w-4 h-4' />
                Dimostrazione
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target='_blank'
                className='flex justify-center items-center gap-2 text-sm font-semibold border border-black rounded-xl px-3 py-2 bg-primary text-black hover:brightness-125'
              >
                <ExternalLink className='w-4 h-4' />
                Demo
              </a>
            )}
          </div>
        )}
      </div>

      <Link
        to={'/progetti'}
        className='w-fit text-gray-400 flex justify-start items-center gap-1 transition-all duration-500 ease-in-out hover:gap-3 hover:underline hover:text-white mb-4'
      >
        <ChevronLeft className='w-5 h-5' /> Torna ai progetti
      </Link>

      {project && (
        <>
          <p className='text-gray-300 leading-7 mb-6'>{project.overview}</p>

          <h4 className='text-xl font-bold mb-2'>Tecnologie utilizzate:</h4>
          <div className='flex justify-start items-center gap-3 flex-wrap mb-8'>
            {project.technologies.map((technology) => (
              <div
                key={technology}
                className='flex justify-start items-center gap-2 border border-gray-500 w-fit rounded-full px-3 pe-4 py-1 bg-background-lighter'
              >
                <img
                  src={getTechnology(technology, 'icon')}
                  alt={`${technology} icon`}
                  className='w-5 h-5'
                />
                <span className='capitalize'>
                  {getTechnology(technology, 'name')}
                </span>
              </div>
            ))}
          </div>

          {projectImages.length > 0 && (
            <div className='mb-8'>
              <InfiniteCarousel
                images={projectImages}
                speed={50}
                imageWidth={440}
                imageHeight={250}
                gap={24}
                full={true}
              />
            </div>
          )}

          <h3 className='text-3xl font-bold mb-3'>Sfide</h3>
          <ul className='mb-8'>
            {project.challenges.map((challenge, index) => (
              <li
                key={`challenge-${index + 1}`}
                className='flex justify-start items-start gap-2 ms-4 mb-3 text-gray-200'
              >
                <Swords className='w-4 h-4 text-red-500 brightness-125 shrink-0 mt-1.5' />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>

          <h3 className='text-3xl font-bold mb-3'>Soluzioni adottate</h3>
          <ul className='mb-8'>
            {project.solutions.map((solution, index) => (
              <li
                key={`solution-${index + 1}`}
                className='flex justify-start items-start gap-2 ms-4 mb-3 text-gray-200'
              >
                <CircleCheckBig className='w-4 :h-4 text-green-500 brightness-125 shrink-0' />
                <span>{solution}</span>
              </li>
            ))}
          </ul>

          <h3 className='text-3xl font-bold mb-4'>Dettagli del progetto</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {project.technicalDetails.map((detail, index) => (
              <div
                key={detail.type}
                className='flex justify-start items-start gap-2 border border-gray-500 rounded-2xl px-4 py-3 shadow-sm shadow-white bg-linear-to-b from-background-lighter to-background-light'
              >
                <span>{getTechnicalDetailsIcon(index)}</span>
                <div>
                  <h4 className='font-semibold text-primary mb-2 text-lg'>
                    {detail.type}
                  </h4>
                  <p className='text-sm mb-1 leading-7'>{detail.description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ProjectDetails;
