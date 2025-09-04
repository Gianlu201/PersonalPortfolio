import CertificationCard from '../components/CertificationCard';
import { certifications } from '../utilities/certifications';

const Certifications = () => {
  return (
    <>
      <h2 className='text-4xl font-bold mb-2'>Certificati</h2>
      <div className='w-[80px] bg-primary h-1 rounded-full mb-6'></div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {certifications.map((certificate) => (
          <CertificationCard
            key={certificate.title}
            certificate={certificate}
          />
        ))}
      </div>
    </>
  );
};

export default Certifications;
