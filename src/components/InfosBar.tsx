import { Github, Linkedin, Mail } from 'lucide-react';
import type { Contact } from '../types/interfaces';

const InfosBar = () => {
  const contacts: Contact[] = [
    {
      type: 'email',
      link: 'mailto:gianlucadidiego2001@gmail.com',
      displayText: 'gianlucadidiego2001@gmail.com',
    },
    {
      type: 'linkdein',
      link: 'https://www.linkedin.com/in/gianluca-di-diego/',
      displayText: 'Gianluca Di Diego',
    },
    {
      type: 'github',
      link: 'https://github.com/Gianlu201',
      displayText: 'Gianlu201',
    },
  ];

  const getContactIcon = (type: string) => {
    switch (type) {
      case 'email':
        return <Mail className='w-5 h-5 text-primary' />;
      case 'linkdein':
        return <Linkedin className='w-5 h-5 text-primary' />;
      case 'github':
        return <Github className='w-5 h-5 text-primary' />;
      default:
        return '';
    }
  };

  return (
    <section className='col-span-4 md:hidden xl:block xl:col-span-1 relative'>
      <div className='sticky top-8 left-0 bg-linear-to-br from-background-light to-background border border-gray-600 rounded-3xl px-8 py-4 max-md:pb-6 overflow-hidden'>
        <div className='max-md:flex justify-between items-center gap-6'>
          <div className='max-w-[150px] mx-auto mt-6 mb-3'>
            <img
              src='/images/me.jpg'
              alt='my photo'
              className='block w-full rounded-3xl border-2 border-gray-600'
            />
          </div>

          <div>
            <h1 className='text-2xl md:text-3xl font-medium text-center leading-snug mb-4'>
              Gianluca <br />
              Di Diego
            </h1>

            <h2 className='text-center text-sm bg-background-light w-fit mx-auto md:mb-6.5 px-3 py-1 rounded-full border border-gray-600'>
              Full Stack Developer
            </h2>
          </div>
        </div>

        <hr className='text-gray-600 mb-2 hidden md:block' />

        <div className='mb-3 md:block hidden'>
          {contacts.map((contact) => (
            <div
              key={contact.type}
              className='grid grid-cols-4 justify-start items-center gap-4 mb-2 py-2'
            >
              <a
                className='col-span-1 bg-gradient-to-br from-background-light to-black shadow-sm shadow-gray-600 rounded-xl border border-gray-600 cursor-pointer hover:to-gray-900 hover:from-gray-500 transition py-2 flex justify-center items-center'
                href={contact.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {getContactIcon(contact.type)}
              </a>

              <div className='col-span-3 grow max-w-full'>
                <h3 className='uppercase text-xs font-medium mb-1'>
                  {contact.type}
                </h3>
                <a
                  href={contact.link}
                  target='_blank'
                  className='block w-full break-all text-sm text-gray-300 hover:text-primary transition'
                  rel='noopener noreferrer'
                >
                  {contact.displayText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <hr className='text-gray-600 mb-3 hidden md:block' />

        <p className='text-gray-300 text-sm text-center hidden md:block'>
          &copy; 2025 Gianluca Di Diego
        </p>
      </div>
    </section>
  );
};

export default InfosBar;
