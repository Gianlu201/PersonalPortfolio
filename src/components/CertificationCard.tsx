import type { Certification } from '../types/interfaces';

interface Props {
  certificate: Certification;
}

const CertificationCard = ({ certificate }: Props) => {
  const getDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('it-IT', {
      month: 'short',
      year: 'numeric',
    })
      .format(date)
      .replace('.', '');
  };

  return (
    <a
      href={certificate.certificationUrl}
      target='_blank'
      className='rounded-xl overflow-hidden border border-gray-500 bg-background-lighter shadow-md hover:shadow-gray-900 shadow-gray-600 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 group'
    >
      <div className='w-full aspect-16/9 flex justify-center items-center overflow-hidden'>
        <img
          src={certificate.imgUrl}
          alt={certificate.title}
          className='block card-image transform transition-transform duration-300 ease-in-out group-hover:scale-110'
        />
      </div>

      <div className='px-5 pt-3 pb-6'>
        <p className='mb-2'>
          <span>{certificate.category}</span>
          <span className='font-bold px-1.5'>·</span>
          <span className='text-gray-300'>{getDate(certificate.date)}</span>
        </p>
        <h3 className='text-2xl font-bold mb-2 line-clamp-1'>
          {certificate.title}
        </h3>
        <p className='text-gray-300 line-clamp-3'>{certificate.description}</p>
      </div>
    </a>
  );
};

export default CertificationCard;
