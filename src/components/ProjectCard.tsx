import { ExternalLink } from 'lucide-react';
import type { Project } from '../types/interfaces';
import { getTechnologiesIcons } from '../utilities/mainFunctions';
import { useNavigate } from 'react-router-dom';

interface Props {
  project: Project;
  isShowcase: boolean;
}

const ProjectCard = ({ project, isShowcase }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className='rounded-xl overflow-hidden border border-gray-500 bg-linear-to-t from-background-light to-background shadow-md shadow-gray-600 hover:shadow-black hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:-translate-y-2 group cursor-pointer'
      onClick={() => navigate(`/progetti/${project.title}`)}
    >
      <div className='w-full  overflow-hidden relative'>
        <img src={project.coverImgUrl} alt={project.title} />
        {/* <div className='hidden group-hover:flex flex-col justify-center items-center gap-2 w-full h-full bg-black/60 absolute top-0 left-0'>
          {isShowcase && (
            <h3 className='text-2xl font-bold mb-1 text-primary line-clamp-1 px-2'>
              {project.title}
            </h3>
          )}
          <a href={project.demoUrl} target='_blank' className='cursor-pointer'>
            <Eye className='w-14 h-14 bg-background-light px-3 py-2 rounded-2xl' />
          </a>
        </div> */}
      </div>

      {!isShowcase && (
        <div className='px-5 pt-3'>
          <h3 className='text-2xl font-bold mb-2 line-clamp-1'>
            {project.title}
          </h3>
          <p className='bg-primary/50 px-3 py-1 pt-1.5 rounded-full w-fit text-xs font-bold capitalize mb-3'>
            {project.category}
          </p>

          <p className='text-gray-300 text-sm leading-5 line-clamp-3 mb-2'>
            {project.description}
          </p>

          {project.technologies.length > 0 && (
            <div className='overflow-hidden relative w-full'>
              <div
                className={`flex justify-end items-center gap-4 mt-4 ${
                  project.technologies.length > 5 && 'animate-marquee'
                }`}
              >
                {getTechnologiesIcons(project.technologies.sort())?.map(
                  (icon, i) => (
                    <img key={`a-${i}`} src={icon} alt='' className='w-6 h-6' />
                  )
                )}
                {project.technologies.length > 5 &&
                  getTechnologiesIcons(project.technologies.sort())?.map(
                    (icon, i) => (
                      <img
                        key={`b-${i}`}
                        src={icon}
                        alt=''
                        className='w-6 h-6'
                      />
                    )
                  )}
              </div>
            </div>
          )}
        </div>
      )}

      <div className='flex justify-center items-center gap-4 my-5 px-5'>
        <a
          href={project.repoUrl}
          className='grow flex justify-center items-center gap-2 text-sm font-semibold border border-gray-500 rounded-xl px-3 py-2 bg-background-lighter hover:bg-gray-600'
          target='_blank'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <img
            src='./illustrations/technologies/githubPrimary.svg'
            className='w-5 h-5 rounded-full'
          />
          GitHub
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            className='grow flex justify-center items-center gap-2 text-sm font-semibold border border-black rounded-xl px-3 py-2 bg-primary text-black hover:brightness-125'
            target='_blank'
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ExternalLink className='w-4 h-4' />
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
