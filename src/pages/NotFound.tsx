import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center h-full px-4'>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className='relative w-1/2 h-1/2 max-w-80 max-h-80 mt-16 mb-6'
      >
        <img
          src='/images/meNotFound.png'
          alt='Mascotte'
          className='w-full h-full object-contain'
        />

        {/* Fascio di luce animato */}
        <motion.div
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className='absolute top-8 left-16 w-32 h-30 bg-cyan-400/30 blur-2xl rotate-12 rounded-lg'
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className='text-gray-300 mt-6 text-lg mb-2'
      >
        Oops! La pagina che cerchi non esiste.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className='mt-6'
      >
        <Link
          to='/'
          className='px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-cyan-400 transition-all duration-300'
        >
          ← Torna alla Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
