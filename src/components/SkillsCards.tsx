import { useEffect, useState } from 'react';
import SpadesIcon from '/illustrations/piccheSeem.svg';
import type { SkillCart } from '../types/interfaces';

const SkillsCards = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );

  const skills: SkillCart[] = [
    {
      title: 'Web Development',
      description:
        'Creazione di siti web e applicazioni web utilizzando tecnologie moderne',
      cardValue: 'A',
      rotation: -40,
      traslationX: -70,
      traslationY: 0,
    },
    {
      title: 'Full-Stack Development',
      description:
        'Sviluppo di applicazioni web complete, gestendo sia il frontend che il backend',
      cardValue: 'K',
      rotation: -20,
      traslationX: -30,
      traslationY: 20,
    },
    {
      title: 'API Development',
      description:
        'Progettazione e sviluppo di API RESTful per consentire la comunicazione tra diverse applicazioni e servizi',
      cardValue: 'Q',
      rotation: 0,
      traslationX: 0,
      traslationY: 30,
    },
    {
      title: 'Database Management',
      description:
        'Esperienza nella progettazione e gestione di database relazionali per prestazioni ottimali',
      cardValue: 'J',
      rotation: 20,
      traslationX: 30,
      traslationY: 20,
    },
    {
      title: 'Cloud Computing',
      description:
        'Utilizzo di servizi cloud, in particolare AWS, per il deploy, la gestione e la scalabilità delle applicazioni',
      cardValue: '10',
      rotation: 40,
      traslationX: 70,
      traslationY: 0,
    },
  ];

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(selectedCardIndex === index ? null : index);
  };

  const handleOverlayClick = () => {
    setSelectedCardIndex(null);
  };

  // Event listener per deselezionare la carta quando si scrolla
  useEffect(() => {
    const handleScroll = () => {
      if (selectedCardIndex !== null) {
        setSelectedCardIndex(null);
      }
    };

    if (selectedCardIndex !== null) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      document.addEventListener('wheel', handleScroll, { passive: true });
      document.addEventListener('touchmove', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('wheel', handleScroll);
      document.removeEventListener('touchmove', handleScroll);
    };
  }, [selectedCardIndex]);

  return (
    <>
      <div className='h-[380px] flex justify-center items-center'>
        <div className='relative w-full max-w-4xl h-86'>
          {skills.map((skill, index) => (
            <div
              key={skill.cardValue}
              className={`absolute top-8 left-1/2 cursor-pointer transition-all duration-300 ease-in ${
                selectedCardIndex === index
                  ? 'z-50 transform -translate-x-1/2 -translate-y-4 scale-110'
                  : 'z-10 hover:z-20 hover:-translate-y-4'
              }`}
              style={{
                transform:
                  selectedCardIndex === index
                    ? 'translateX(0) translateY(-20px) scale(1.1)'
                    : `translateX(calc(-50% + ${skill.traslationX}px)) rotate(${skill.rotation}deg) translateY(calc(-${skill.traslationY}px))`,
              }}
              onClick={() => handleCardClick(index)}
            >
              {/* Carta */}
              <div className='w-46 h-69 bg-linear-to-br from-gray-300 to-gray-400 border-2 border-gray-800 rounded-lg shadow-xl relative overflow-hidden'>
                {/* Angolo alto sinistra */}
                <div className='absolute top-2 left-2 flex flex-col items-center text-black w-5'>
                  <span className='text-lg font-bold text-white'>
                    {skill.cardValue}
                  </span>
                  <img src={SpadesIcon} alt='Spades icon' className='w-4 h-4' />
                  {/* Titolo */}
                  <h4 className='text-xs font-bold text-black leading-tight rotate-90 w-[150px] mt-20'>
                    {skill.title}
                  </h4>
                  {/* <div className='absolute top-26 -left-8 '></div> */}
                </div>

                {/* Angolo basso a destra */}
                <div className='absolute bottom-2 right-2 flex flex-col items-center text-black transform rotate-180'>
                  <span className='text-lg font-bold text-white'>
                    {skill.cardValue}
                  </span>
                  <img src={SpadesIcon} alt='Spades icon' className='w-4 h-4' />
                </div>

                {/* Descrizione */}
                <div className='absolute top-16 left-9 right-9 bottom-8'>
                  <p className='text-xs font-medium text-black text-center leading-tight overflow-hidden'>
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* {skills.map((skill) => (
        <div
          key={skill.cardValue}
          className={`absolute top-5 left-1/2 -translate-x-1/2 translate-x-[${skill.traslationX}] w-32 h-48 bg-white border border-gray-500 rounded-lg shadow-md flex flex-col justify-center items-center text-2xl font-bold text-gray-800 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:z-10 perspective`}
        >
          <div className='absolute w-full h-full backface-hidden flex flex-col justify-center items-center'>
            {skill.cardValue}
          </div>
          <div className='absolute w-full h-full backface-hidden rotate-y-180 flex flex-col justify-center items-center p-4 text-sm'>
            <p className='text-center'>{skill.description}</p>
          </div>
        </div>
      ))} */}
      </div>

      {selectedCardIndex !== null && (
        <div
          className='fixed inset-0 z-40'
          onClick={handleOverlayClick}
          onScrollCapture={handleOverlayClick}
        />
      )}
    </>
  );
};

export default SkillsCards;
