import { Link, useLocation } from 'react-router-dom';
import type { menuOption } from '../types/interfaces';
import {
  Download,
  FolderCode,
  GraduationCap,
  Home,
  Send,
  User,
} from 'lucide-react';

const BottomNavbar = () => {
  const location = useLocation();

  const menuOptions: menuOption[] = [
    {
      label: 'Home',
      link: '/',
      icon: <Home className='w-4.5 h-4.5' />,
    },
    {
      label: 'Chi sono',
      link: '/chi-sono',
      icon: <User className='w-4.5 h-4.5' />,
    },
    {
      label: 'Progetti',
      link: '/progetti',
      icon: <FolderCode className='w-4.5 h-4.5' />,
    },
    {
      label: 'Certificati',
      link: '/certificati',
      icon: <GraduationCap className='w-4.5 h-4.5' />,
    },
    {
      label: 'Contatti',
      link: '/contatti',
      icon: <Send className='w-4.5 h-4.5' />,
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
    <div className='sticky md:hidden -bottom-0.5 left-0 right-0 z-50 w-full bg-background pb-3'>
      <ul className='flex justify-around items-center px-2'>
        {menuOptions.map((option) => (
          <li key={option.label}>
            <div
              className={`h-1 rounded-bl-sm rounded-br-sm mb-2 ${
                checkIsCurrentPage(option.link) ? 'bg-primary' : ''
              }`}
            ></div>
            <Link
              to={option.link}
              className={`flex flex-col justify-center items-center gap-1 p-2 ${
                checkIsCurrentPage(option.link)
                  ? 'bg-linear-to-br from-blue-400 to-blue-800 rounded-xl'
                  : ''
              }`}
            >
              {option.icon}
              <span className='text-xs font-semibold'>{option.label}</span>
            </Link>
          </li>
        ))}
        <li>
          <a
            href='/file/CV_DiDiegoGianluca.pdf'
            className='flex flex-col justify-center items-center gap-1 font-semibold pt-5 pb-2'
            download
          >
            <Download className='w-4.5 h-4.5' />
            <span className='text-xs'>CV</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavbar;
