import { Link, useLocation } from 'react-router-dom';
import type { menuOption } from '../types/interfaces';
import { Download } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const menuOptions: menuOption[] = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Chi sono',
      link: '/chi-sono',
    },
    {
      label: 'Progetti',
      link: '/progetti',
    },
    {
      label: 'Certificati',
      link: '/certificati',
    },
    {
      label: 'Contatti',
      link: '/contatti',
    },
  ];

  const checkIsCurrentPage = (option: string) => {
    if (option !== '/') {
      if (location.pathname.includes(option)) return true;
    } else {
      if (location.pathname === option) return true;
    }
  };

  return (
    <nav className='hidden w-full md:flex justify-end'>
      <ul className='w-fit flex justify-around items-center gap-7 border-b border-l border-gray-600 rounded-bl-2xl rounded-tr-xl bg-background-light px-10 py-4'>
        {menuOptions.map((option) => (
          <li key={option.label}>
            <Link
              to={option.link}
              className={`font-semibold ${
                checkIsCurrentPage(option.link)
                  ? 'text-primary underline underline-offset-6 decoration-2 decoration-primary'
                  : ''
              }`}
            >
              {option.label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href='/file/CV_DiDiegoGianluca.pdf'
            className='flex items-center gap-1 font-semibold hover:text-primary cursor-pointer'
            download
          >
            <Download className='w-3.5 h-3.5' />
            CV
          </a>
        </li>
        <li>
          <Link
            to={'/contatti'}
            className='text-background font-bold bg-primary px-3 py-1.5 rounded-lg shadow-xs shadow-white hover:brightness-125 hover:shadow-white/60'
          >
            Contattami
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
