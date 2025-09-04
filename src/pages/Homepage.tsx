import feIllustration from '/illustrations/tree-fe.svg';
import beIllustration from '/illustrations/tree-be.svg';
import cloudIllustration from '/illustrations/weather-cloud.svg';
import type { CoreSkill } from '../types/interfaces';
import InfiniteCarousel from '../components/InfiniteCarousel';
import { myTechonologies } from '../utilities/myTechnologies';
import { projects } from '../utilities/projects';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Homepage = () => {
  const coreSkills: CoreSkill[] = [
    {
      area: 'Frontend',
      description: `Realizzo interfacce responsive e moderne con HTML5, CSS3, JavaScript e React, combinando funzionalità e design per un'esperienza utente fluida`,
      icon: feIllustration,
    },
    {
      area: 'Backend',
      description: `Sviluppo applicazioni robuste e API con C# e ASP.NET, integrando database per la gestione e l'ottimizzazione dei dati`,
      icon: beIllustration,
    },
    {
      area: 'Cloud AWS',
      description: `Utilizzo i servizi AWS per il deploy, la gestione e la scalabilità delle applicazioni, con un approccio orientato alla sicurezza e all'efficienza`,
      icon: cloudIllustration,
    },
  ];

  const technologiesLogos = myTechonologies.map((t) => t.imageUrl);

  return (
    <>
      <h2 className='text-4xl font-bold mb-2'>Benvenuto</h2>
      <div className='w-[80px] bg-primary h-1 rounded-full mb-3'></div>

      <div className='grid grid-cols-12 justify-between items-start gap-6 mb-18'>
        <div className='col-span-12 md:col-span-8'>
          <p className='mb-4 leading-7 text-gray-200'>
            Sono un Full-Stack Developer curioso e appassionato, sempre alla
            ricerca di nuove sfide. Amo dare vita a idee e trasformarle in
            applicazioni dinamiche, intuitive e ben strutturate, curando sia la
            logica dietro le quinte che l&apos;esperienza dell&apos;utente.
          </p>
          <p className='leading-7 text-gray-200'>
            Per me il codice non è solo lavoro, ma un modo di creare,
            sperimentare e innovare.
          </p>
        </div>

        <div className='col-span-12 md:col-span-4 select-none relative'>
          <img
            src='./images/me_cartoon.png'
            alt='foto a fumetto'
            className='w-7/8 md:absolute -top-20 left-4 pointer-events-none select-none'
            draggable='false'
          />
        </div>
      </div>

      <h3 className='text-2xl font-bold mb-3'>Competenze principali</h3>
      <div className='md:flex md:flex-wrap justify-around items-stretch gap-3 mb-10'>
        {coreSkills.map((skill) => (
          <div
            key={skill.area}
            className='flex justify-between items-start gap-4 md:w-[calc(50%-1rem)] my-6 md:my-1.5 px-4 py-3 bg-linear-to-br from-background-lighter to-background-light border border-gray-600 rounded-xl'
          >
            <div className='flex items-center h-full'>
              <img
                src={skill.icon}
                alt={`${skill.area} rapresentation`}
                className='w-40  bg-sky-200 rounded-full p-1'
              />
            </div>
            <div>
              <h4 className='font-bold text-lg mb-1.5'>{skill.area}</h4>
              <p className='text-sm text-gray-200 leading-7'>
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <InfiniteCarousel
        images={technologiesLogos}
        speed={50}
        imageWidth={100}
        imageHeight={100}
        gap={24}
        full={false}
      />

      <div className='md:flex justify-between items-center mt-10 mb-5'>
        <h3 className='text-2xl font-bold'>Progetti in evidenza</h3>
        <Link
          to={'/progetti'}
          className='flex justify-end md:justify-center items-center gap-0.5 transition-all duration-500 ease-in-out font-medium hover:gap-3 text-sm text-gray-200 hover:text-white hover:underline group max-md:mt-3'
        >
          Scopri di più
          <ChevronRight className='w-4.5 h-4.5 animate-pulse group-hover:animate-none' />
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-2'>
        {projects
          .filter((project) => project.highlighted)
          .map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              isShowcase={true}
            />
          ))}
      </div>
    </>
  );
};

export default Homepage;
