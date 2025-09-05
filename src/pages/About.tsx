import SkillsCards from '../components/SkillsCards';

const About = () => {
  return (
    <>
      <h2 className='text-4xl font-bold mb-2'>Chi sono</h2>
      <div className='w-[80px] bg-primary h-1 rounded-full mb-3'></div>

      <p className='mb-4 text-gray-200 leading-7'>
        Ciao, sono Gianluca, un giovane Full-Stack Developer con una forte
        passione per l&apos;informatica e la programmazione, nata fin da piccolo
        e coltivata negli anni con curiosità e dedizione. Il mio percorso mi ha
        portato a scegliere di trasformare questa passione in una professione
        consentendomi di dar vita a progetti e idee con un impatto reale.
      </p>

      <p className='mb-6 text-gray-200 leading-7'>
        Il mio approccio allo sviluppo combina una solida conoscenza tecnica con
        una forte attenzione al design e all'esperienza utente. Credo che il
        successo di un progetto web derivi dall'equilibrio tra funzionalità
        robuste e un'interfaccia utente elegante e intuitiva.
      </p>

      <h3 className='text-3xl font-bold mb-3'>Il mio percorso</h3>
      <p className='mb-6 text-gray-200 leading-7'>
        Il mio background di studi ingegneristici mi ha fornito un approccio
        analitico e metodico al problem solving e tramite un percorso intensivo
        ho acquisito solide competenze in alcune delle principali tecnologie che
        tutt'ora utilizzo nei miei progetti. Tramite questo percorso ho avuto
        modo di lavorare su diversi progetti, sia personali che collaborativi,
        che mi hanno permesso di affinare le mie competenze tecniche
        applicandole a scenari reali e di sviluppare ancora di più le capacità
        di lavorare in squadra puntando ad obiettivi comuni, puntando sulla
        comunicazione efficace e attiva.
      </p>

      <h3 className='text-3xl font-bold mb-3'>Competenze principali</h3>
      <ul className='mb-6'>
        <li className='ms-5 mb-3 list-disc'>
          <p className='text-gray-200 leading-7'>
            <b className='text-primary'>Frontend</b>: HTML, CSS, Bootstrap,
            Tailwind, JavaScript, TypeScript, React. Capacità di creare
            interfacce responsive e moderne, con attenzione al design e
            all'esperienza utente.
          </p>
        </li>
        <li className='ms-5 mb-3 list-disc'>
          <p className='text-gray-200 leading-7'>
            <b className='text-primary'>Backend</b>: C#, ASP.NET, Entity
            Framework, SQL Server. Esperienza nello sviluppo di applicazioni web
            robuste e scalabili, con integrazione di database per la gestione
            dei dati.
          </p>
        </li>
        <li className='ms-5 mb-3 list-disc'>
          <p className='text-gray-200 leading-7'>
            <b className='text-primary'>Cloud</b>: AWS (EC2, S3, RDS, Lambda,
            API Gateway, CloudFront, Route 53, CloudFormation, ...). Utilizzo
            dei servizi cloud per il deploy, la gestione e la scalabilità delle
            applicazioni, con un focus sulla sicurezza e l'efficienza.
          </p>
        </li>
        <li className='ms-5 mb-3 list-disc'>
          <p className='text-gray-200 leading-7'>
            <b className='text-primary'>Controllo di versione</b>: Git, GitHub.
            Abilità nell'uso di sistemi di controllo di versione per la gestione
            del codice e la collaborazione in team.
          </p>
        </li>
        <li className='ms-5 mb-3 list-disc'>
          <p className='text-gray-200 leading-7'>
            <b className='text-primary'>Metodologie di lavoro</b>: Agile, Scrum.
            Esperienza nell'adozione di metodologie agili per la gestione dei
            progetti, con un focus sulla collaborazione e il miglioramento
            continuo.
          </p>
        </li>
      </ul>

      <h3 className='text-3xl font-bold mb-3'>Su di me</h3>
      <p className='mb-4 text-gray-200 leading-7'>
        Il mio obiettivo è quello di crescere continuamente come sviluppatore,
        affrontando nuove sfide e ampliare le mie competenze. Sono entusiasta di
        collaborare con team dinamici e di contribuire a progetti innovativi che
        possano fare la differenza ed essere d'aiuto nella vita quotidiana.
      </p>

      <p className='mb-6 text-gray-200 leading-7'>
        Ho diversi hobby e passioni che mi aiutano a mantenere un equilibrio tra
        lavoro e vita personale. Alcuni di questi sono legati alla tecnologia,
        mentre altri sono più orientati al relax e al benessere, come la lettura
        e il fitness, che mi aiutano a ricaricare le batterie per affrontare
        sempre nuove sfide. Credo che mantenere un equilibrio tra lavoro e vita
        personale sia fondamentale per la creatività e la produttività.
      </p>

      <h3 className='text-3xl font-bold mb-3'>Di cosa mi occupo</h3>

      <SkillsCards />

      <p className='text-gray-300 text-center text-sm'>
        💡 Scorri tra le carte per leggerle o cliccane una per ingrandirla
      </p>
    </>
  );
};

export default About;
