import { Github, Linkedin, Mail } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import type { Contact } from '../types/interfaces';

const Contacts = () => {
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
        return <Mail className='w-5 h-5 text-primary mx-3.5 my-2' />;
      case 'linkdein':
        return <Linkedin className='w-5 h-5 text-primary mx-3.5 my-2' />;
      case 'github':
        return <Github className='w-5 h-5 text-primary mx-3.5 my-2' />;
      default:
        return '';
    }
  };

  return (
    <>
      <h2 className='text-4xl font-bold mb-2'>Contatti</h2>
      <div className='w-[80px] bg-primary h-1 rounded-full mb-3'></div>

      <p className='text-gray-300 leading-7 mb-8'>
        Hai domande, proposte di collaborazione o semplicemente vuoi salutarmi?
        Sono sempre felice di sentire nuove idee e connettermi con persone
        interessate alla tecnologia e allo sviluppo web.
      </p>

      <h3 className='text-2xl font-bold mb-3'>I miei contatti:</h3>
      <div className='mb-3'>
        {contacts.map((contact) => (
          <div
            key={contact.type}
            className='flex justify-start items-center gap-4 mb-2 py-2'
          >
            <a
              className='bg-gradient-to-br from-background-light to-black shadow-sm shadow-gray-600 rounded-xl border border-gray-600 cursor-pointer hover:to-gray-900 hover:from-gray-500 transition py-2 flex justify-center items-center'
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
                className='block w-fit break-all text-sm text-gray-300 hover:text-primary transition'
                rel='noopener noreferrer'
              >
                {contact.displayText}
              </a>
            </div>
          </div>
        ))}
      </div>

      <ContactForm />
    </>
  );
};

export default Contacts;
