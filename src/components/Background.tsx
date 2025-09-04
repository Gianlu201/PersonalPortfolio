import { useCallback } from 'react';
// import { motion } from "framer-motion"; // libreria animazioni
import Particles from 'react-tsparticles'; // componente per particelle animate
import { loadSlim } from 'tsparticles-slim'; // Versione ottimizzata del motore particellare
import particlesConfig from '../particles-config'; // Configuratore custom per le particelle
import type { Engine, IOptions, RecursivePartial } from 'tsparticles-engine';

const Background = () => {
  // Funzione per inizializzare il motore delle particelle
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine); // Carica la versione slim
  }, []);

  return (
    <div className={`absolute top-0 left-0 z-10 w-full h-screen`}>
      {/* Componente Particelle per lo sfondo animato */}
      <Particles
        id='tsparticles'
        init={particlesInit} // inizializzazione del motore
        options={particlesConfig as RecursivePartial<IOptions>}
        className={`absolute top-0 left-0 z-10 w-full h-screen`}
      />
    </div>
  );
};

export default Background;
