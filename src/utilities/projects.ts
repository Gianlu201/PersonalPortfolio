import type { Project } from '../types/interfaces';

export const projects: Project[] = [
  // LumenFly
  {
    title: 'LumenFly',
    category: 'applicazione web',
    description: `LumenFly è una web app minimalista che aiuta i piloti di droni a calcolare e ottimizzare i parametri di esposizione (EV, ISO, ND, shutter, FPS) per ottenere foto e video correttamente bilanciati in qualsiasi condizione di luce.`,
    overview: `LumenFly è una web application pensata per i videomaker e fotografi che utilizzano droni e desiderano ottimizzare la resa visiva delle proprie riprese.
    
    L'app permette di calcolare l'Exposure Value (EV) a partire da apertura e tempo di otturazione, tenendo conto di ISO e filtri ND, restituendo un'analisi precisa dello stato di esposizione: corretta, sottoesposta o sovraesposta.
    
    Grazie a formule ottimizzate e all'applicazione della regola dei 180° per i video, LumenFly suggerisce le impostazioni ideali per mantenere un look cinematografico naturale.
    
    L'interfaccia è intuitiva, veloce e ottimizzata per l'uso pratico sul campo, con drag-to-scroll per la selezione dei filtri ND, tema scuro e icone pulite per una user experience fluida.`,
    technicalDetails: [
      {
        type: `Obiettivo`,
        description: `Supportare i dronisti nel trovare i settaggi ottimali per foto e video`,
      },
      {
        type: `Funzioni principali`,
        description: `Calcolo automatico EV, compensazione ISO/ND, analisi esposizione e suggerimenti mirati`,
      },
      {
        type: `UX(UI)`,
        description: `Interfaccia minimal, tema scuro, controlli drag-to-scroll e icone vettoriali leggere`,
      },
      {
        type: `Target utenti`,
        description: `Videomaker, fotografi e piloti di droni amatoriali e professionali`,
      },
    ],
    challenges: [
      `Integrare correttamente le formule matematiche per il calcolo dell'EV e riportarle sempre a EV100`,
      `Applicare la regola dei 180° in modo dinamico per i video con FPS variabili`,
      `Bilanciare precisione dei calcoli e semplicità d'uso per non confondere l'utente`,
      `Creare un'interfaccia pulita e intuitiva evitando overload di informazioni tecniche`,
    ],
    solutions: [
      `Implementazione step-by-step delle formule EV con test manuali per verificarne la correttezza`,
      `Introduzione di suggerimenti visivi chiari (es. esposizione corretta/sotto/sovra) con range di tolleranza`,
      `Utilizzo della regola dei 180° tradotta in funzioni automatiche che propongono filtri ND adatti`,
      `UI minimale con selettori drag-to-scroll e dark theme per migliorare la leggibilità outdoor`,
      `Ottimizzazione tramite Vite e modularizzazione del codice per garantire scalabilità futura`,
    ],
    releaseDate: '2025/08',
    highlighted: true,
    technologies: ['vite', 'react', 'typescript', 'tailwind'],
    repoUrl: 'https://github.com/Gianlu201/LumenFly',
    demoUrl: 'https://lumenfly.vercel.app/',
    videoDemoUrl: '',
    coverImgUrl: '/images/projects/lumenFly/coverLumenFly.png',
    img1url: '/images/projects/lumenFly/lumenFly1.jpg',
    img2url: '/images/projects/lumenFly/lumenFly2.jpg',
    img3url: '/images/projects/lumenFly/lumenFly3.jpg',
    img4url: '/images/projects/lumenFly/lumenFly4.jpg',
  },

  // PokeTeamBuilder
  {
    title: `PokeTeamBuilder`,
    category: `applicazione web`,
    description: `Poké Team Builder è un'applicazione web interattiva che permette agli allenatori Pokémon di creare, gestire e ottimizzare squadre competitive, testarle in battaglie simulate e approfondire le conoscenze sul mondo Pokémon attraverso quiz e Pokédex interattivo.`,
    overview: `Poké Team Builder offre un'esperienza completa per tutti gli appassionati di Pokémon. L'app consente di costruire squadre bilanciate e strategiche, visualizzarne statistiche, punti di forza e vulnerabilità contro altri tipi, e salvarle localmente per un rapido recupero.

    L'utente può emulare battaglie tra la propria squadra e squadre avversarie generate dall'app, ricevendo suggerimenti sui Pokémon da aggiungere per ottenere vantaggi strategici. Inoltre, la modalità PokéQuiz permette di testare e ampliare le conoscenze sull'universo Pokémon, mentre la funzione “Pokémon casuale” permette di esplorare informazioni dettagliate e catene evolutive direttamente dal Pokédex interattivo.
    
    L'interfaccia moderna e reattiva, sviluppata con React e Tailwind CSS, garantisce una navigazione intuitiva, perfetta sia per utenti esperti che per neofiti del mondo competitivo.`,
    technicalDetails: [
      {
        type: `Obiettivo`,
        description: `Aiutare gli allenatori Pokémon nella creazione, gestione e ottimizzazione di squadre competitive`,
      },
      {
        type: `Funzionalità chiave`,
        description: `Costruzione squadre, salvataggio in locale, gestione sqaudra avversaria, simulazione di battaglia, analisi statistica dei tipi e quiz interattivi`,
      },
      {
        type: `Interfaccia utente`,
        description: `Interfaccia moderna, intuitiva e reattiva, con modali informative, tabelle di efficacia dei tipi e strumenti di navigazione rapida del Pokédex`,
      },
      {
        type: `Integrazione API`,
        description: `Uso della PokéAPI GraphQL per recuperare dati accurati e aggiornati dei Pokémon`,
      },
    ],
    challenges: [
      `Gestire e sincronizzare le squadre attuali con quelle salvate, evitando conflitti di nomi`,
      `Mostrare informazioni complesse (statistiche, vulnerabilità, forza dei tipi) in modo chiaro e leggibile`,
      `Simulare battaglie Pokémon con logica di danni e mosse bilanciata e coerente`,
      `Integrare la PokéAPI GraphQL garantendo fetch rapidi senza rallentare l'esperienza utente`,
      `Creare un sistema di quiz dinamico e casuale senza errori di logica o ripetizioni`,
    ],
    solutions: [
      `Validazione lato client dei nomi squadre, con conferma per la sovrascrittura e minimo di 3 caratteri richiesti`,
      `UI modulare e componentizzata per visualizzare statistiche, tabelle di efficacia e informazioni Pokémon in modo chiaro`,
      `Algoritmi per calcolo danni e simulazioni di battaglia semplificati, ma fedeli alle logiche di gioco`,
      `Ottimizzazione dei fetch API con GraphQL per ridurre i tempi di caricamento`,
      `Sistema di quiz basato su generazione casuale e controllo duplicati per domande uniche`,
      `Uso di LocalStorage per salvare squadre in modo persistente, con caricamento e gestione intuitiva dall'interfaccia.`,
    ],
    releaseDate: `2020/07`,
    highlighted: true,
    technologies: [
      'vite',
      'react',
      'typescript',
      'tailwind',
      'redux',
      'api',
      'reactTesting',
    ],
    repoUrl: `https://github.com/Gianlu201/PokeTeam_Builder`,
    demoUrl: `https://poke-team-builder-eight.vercel.app/`,
    videoDemoUrl: ``,
    coverImgUrl: `/images/projects/pokeTeamBuilder/coverPokeTeamBuilder.png`,
    img1url: `/images/projects/pokeTeamBuilder/pokeTeamBuilder1.jpg`,
    img2url: `/images/projects/pokeTeamBuilder/pokeTeamBuilder2.jpg`,
    img3url: `/images/projects/pokeTeamBuilder/pokeTeamBuilder3.jpg`,
    img4url: `/images/projects/pokeTeamBuilder/pokeTeamBuilder4.jpg`,
  },

  // Klicko
  {
    title: `Klicko`,
    category: `e-commerce`,
    description: `Klicko è una piattaforma e-commerce full stack che consente agli utenti di esplorare, prenotare e acquistare esperienze e avventure uniche, offrendo un'interfaccia moderna e funzionalità complete per visitatori, utenti registrati, venditori e amministratori.`,
    overview: `Klicko è un'applicazione e-commerce progettata per offrire un'esperienza completa e sicura agli utenti interessati a vivere esperienze uniche. Il frontend reattivo e intuitivo, sviluppato con React e Tailwind CSS, permette di navigare facilmente tra le esperienze, aggiungerle al carrello e completare acquisti tramite pagamenti sicuri con Stripe.

    Il backend robusto, sviluppato in ASP.NET Core con SQL Server, gestisce la logica di business, le prenotazioni, le transazioni e le notifiche email tramite SendGrid. La piattaforma supporta diversi ruoli utente: visitatori, utenti registrati, venditori e amministratori, ciascuno con funzionalità dedicate, come la gestione delle esperienze, la dashboard degli ordini, il programma fedeltà e le statistiche globali.

    Klicko unisce usabilità, sicurezza e performance, garantendo agli utenti un'esperienza fluida nella scoperta, prenotazione e gestione delle proprie avventure.`,
    technicalDetails: [
      {
        type: `Obiettivo`,
        description: `Offrire una piattaforma e-commerce per esperienze e avventure, con gestione completa per utenti, venditori e amministratori`,
      },
      {
        type: `Funzionalità chiave`,
        description: `Esplorazione esperienze, gestione carrello, prenotazioni, pagamenti sicuri, newsletter, programma fedeltà, dashboard venditori e admin, simulazione coupon e voucher`,
      },
      {
        type: `Ruoli`,
        description: `Visitatore, utente registrato, venditore autorizzato e amministratore`,
      },
      {
        type: `Deploy`,
        description: `Deploy front-end su Vercel e deploy back-end su Azure`,
      },
    ],
    challenges: [
      `Integrare un sistema completo di ruoli utenti con permessi diversi`,
      `Garantire la sicurezza dei pagamenti e delle transazioni online`,
      `Gestire prenotazioni, voucher e coupon con logica coerente e sicura`,
      `Creare dashboard intuitive per venditori e amministratori`,
      `Implementare notifiche email transazionali e conferme ordini affidabili`,
      `Coordinare frontend e backend in un flusso fluido, con dati aggiornati e reattivi`,
      `Gestire il carrello anche per utenti non loggati, con sincronizzazione tramite LocalStorage.`,
    ],
    solutions: [
      `Architettura modulare con chiara separazione frontend/backend e API RESTful`,
      `Integrazione Stripe per pagamenti sicuri e SendGrid per notifiche email`,
      `Dashboard dedicate e UI intuitive per ogni ruolo utente, con controlli di accesso`,
      `Validazioni lato server e frontend per prenotazioni, coupon e gestione voucher`,
      `LocalStorage per carrello visitatori, con sincronizzazione automatica al login`,
      `Ottimizzazione SEO e performance per una navigazione veloce e indicizzazione efficiente`,
      `Deployment su Vercel (frontend) e Azure (backend + database) per scalabilità e affidabilità.`,
    ],
    releaseDate: `2025/05`,
    highlighted: true,
    technologies: [
      'vite',
      'react',
      'javascript',
      'tailwind',
      'redux',
      'dotnet',
      'csharp',
      'microsoftSQLserver',
      'stripe',
      'sendgrid',
    ],
    repoUrl: `https://github.com/Gianlu201/Klicko`,
    demoUrl: undefined,
    videoDemoUrl: ``,
    coverImgUrl: `/images/projects/klicko/coverKlicko.png`,
    img1url: `/images/projects/klicko/klicko1.jpg`,
    img2url: `/images/projects/klicko/klicko2.jpg`,
    img3url: `/images/projects/klicko/klicko3.jpg`,
    img4url: `/images/projects/klicko/klicko4.jpg`,
  },

  // BeviSano
  {
    title: `BeviSano`,
    category: `e-commerce`,
    description: `BeviSano è un e-commerce dedicato ai prodotti alcolici dall'ottima qualità, che unisce semplicità d'uso, gestione intuitiva e funzionalità avanzate sia per gli utenti che per gli amministratori.`,
    overview: `BeviSano è una piattaforma di e-commerce progettata per offrire un'esperienza d'acquisto fluida e moderna nel settore dei prodotti alcolici.
    
    Gli utenti possono navigare facilmente tra le diverse sezioni: esplorare i prodotti con descrizioni dettagliate, usufruire di sconti e promozioni, gestire il proprio carrello con calcolo automatico delle spese di spedizione e approfittare di vantaggi aggiuntivi grazie alla Fidelity Card.

    La piattaforma include inoltre una sezione Recensioni, utile per garantire trasparenza e supportare decisioni di acquisto consapevoli.
    
    Sul lato gestionale, l'area Admin permette agli amministratori di monitorare e gestire in modo rapido i prodotti tramite strumenti di inserimento, modifica ed eliminazione.

    BeviSano è quindi pensato per garantire un equilibrio tra un'interfaccia accessibile al cliente e strumenti di gestione potenti e pratici per l'amministratore.`,
    technicalDetails: [
      {
        type: `Sicurezza`,
        description: `Logica di registrazione e login tramite JWT`,
      },
      {
        type: `Carrello`,
        description: `Riepilogo ordini con gestione quantità, rimozione articoli, calcolo spese di spedizione e applicazione carta fedeltà`,
      },
      {
        type: `Area Admin`,
        description: `Gestione completa del catalogo prodotti in un'area dedicata e riservata`,
      },
      {
        type: `Gestione dati`,
        description: `Visualizzazione prodotti dinamica con quantità, sconti e prezzi aggiornati`,
      },
    ],
    challenges: [
      `Gestire il pattern Model, View, Control acquisendo le best practices`,
      `Gestire in modo coerente il calcolo dei prezzi con sconti, Fidelity Card e costi di spedizione`,
      `Creare un flusso d'acquisto chiaro senza appesantire l'interfaccia utente`,
      `Organizzare le sezioni per distinguere chiaramente funzionalità utente e funzionalità admin`,
      `Strutturare il progetto in modo scalabile mantenendo un design coerente`,
    ],
    solutions: [
      `Implementazione di funzioni modulari per il calcolo dinamico dei prezzi e delle promozioni`,
      `Interfaccia semplice e intuitiva con Bootstrap per migliorare la UX`,
      `Separazione logica delle aree utente e admin con interfacce dedicate`,
      `Gestione CRUD semplificata per garantire agli admin un controllo rapido sui prodotti`,
      `Utilizzo di componenti riutilizzabili e responsive per mantenere coerenza grafica e usabilità.`,
    ],
    releaseDate: `2025/03`,
    highlighted: false,
    technologies: [
      'csharp',
      'dotnet',
      'microsoftSQLserver',
      'html',
      'css',
      'bootstrap',
      'javascript',
    ],
    repoUrl: `https://github.com/Gianlu201/BeviSano_ecommerce`,
    demoUrl: undefined,
    videoDemoUrl: ``,
    coverImgUrl: `/images/projects/beviSano/coverBeviSano.png`,
    img1url: `/images/projects/beviSano/beviSano1.jpg`,
    img2url: `/images/projects/beviSano/beviSano2.jpg`,
    img3url: `/images/projects/beviSano/beviSano3.jpg`,
    img4url: `/images/projects/beviSano/beviSano4.jpg`,
  },

  // HomeChef
  {
    title: `HomeChef`,
    category: `Applicazione Web`,
    description: `HomeChef è una web app di ricette sviluppata in React, che consente di esplorare, cercare e consultare ricette culinarie complete di ingredienti, istruzioni e video tutorial.`,
    overview: `HomeChef è una web application moderna e intuitiva progettata per semplificare la ricerca e la consultazione di ricette. Grazie a un dataset JSON utilizzato come API, l'app mette a disposizione un catalogo di ricette facilmente navigabile, con la possibilità di effettuare ricerche rapide per nome o filtrare i risultati in base a diversi criteri. Ogni ricetta include ingredienti, procedura dettagliata e un frame integrato con video tutorial da YouTube, offrendo all'utente un'esperienza completa e interattiva. L'interfaccia, sviluppata con Tailwind CSS, garantisce un design responsive, pulito e user-friendly.`,
    technicalDetails: [
      {
        type: `Web app`,
        description: `Applicazione React single-page che consente il suo utilizzo in una sola pagina`,
      },
      {
        type: `Obiettivo`,
        description: `Offrire uno strumento semplice e veloce per scoprire e preparare ricette`,
      },
      {
        type: `Emulazione API`,
        description: `I dati vengono recuperati da un file JSON disponibile online`,
      },
      {
        type: `Routing dinamico`,
        description: `La navigazione interna è gestita tramite rotte dinamiche che montano e smontano componenti`,
      },
    ],
    challenges: [
      `Gestione dei dati da un file JSON remoto come se fosse un'API`,
      `Ottimizzazione della ricerca e dei filtri senza compromettere le performance`,
      `Integrazione dei video YouTube in modo che risultassero responsive e sempre disponibili`,
      `Responsive design per adattarsi a desktop, tablet e mobile`,
      `Strutturazione del progetto con React e Vite mantenendo il codice modulare e scalabile`,
    ],
    solutions: [
      `Utilizzo del fetch su file JSON remoto per simulare una vera e propria API REST`,
      `Implementazione di funzioni di ricerca e filtro lato client, ottimizzate per non appesantire il rendering`,
      `Uso di iframe responsive per l'integrazione sicura dei video da YouTube`,
      `Adozione di Tailwind CSS per garantire un layout coerente e facilmente adattabile a diversi dispositivi`,
      `Organizzazione del codice in componenti React riutilizzabili, favorendo la leggibilità e la manutenzione futura`,
    ],
    releaseDate: `2025/05`,
    highlighted: false,
    technologies: ['vite', 'react', 'typescript', 'tailwind', 'api'],
    repoUrl: `https://github.com/Gianlu201/HomeChef`,
    demoUrl: `https://home-chef-navy.vercel.app/`,
    videoDemoUrl: undefined,
    coverImgUrl: `/images/projects/homeChef/coverHomeChef.png`,
    img1url: `/images/projects/homeChef/homeChef1.jpg`,
    img2url: `/images/projects/homeChef/homeChef2.jpg`,
    img3url: `/images/projects/homeChef/homeChef2.jpg`,
    img4url: `/images/projects/homeChef/homeChef2.jpg`,
  },

  // TicketsAPI
  {
    title: `TicketsAPI`,
    category: `API REST`,
    description: `TicketAPI è un'API REST sviluppata in .NET 8 che gestisce utenti, artisti, eventi e biglietti. Integra autenticazione sicura tramite JWT con refresh token, supporta operazioni CRUD e consente agli utenti autenticati di acquistare biglietti e consultarne lo storico.`,
    overview: `TicketAPI è una web application lato backend progettata per fornire un sistema completo di gestione eventi e biglietteria digitale. L'applicazione consente la registrazione e l'autenticazione sicura degli utenti tramite token JWT, garantendo protezione e scalabilità nel tempo.
    
    Gli amministratori possono creare e gestire artisti ed eventi, mentre gli utenti autenticati hanno la possibilità di acquistare biglietti e recuperarne la cronologia in modo rapido e sicuro.
    
    La documentazione interattiva via Swagger semplifica l'esplorazione e il test delle API, rendendo il progetto adatto sia a scopi didattici sia come base per soluzioni reali di ticketing digitale.
    
    TicketAPI implementa un'architettura a più livelli con Controllers, Services e Repositories, separando responsabilità e migliorando la manutenibilità del codice. La persistenza dei dati è affidata a Entity Framework Core, mentre l'autenticazione è gestita tramite JWT Bearer Authentication, con la possibilità di rigenerare access token scaduti tramite refresh token. Il database relazionale è strutturato per gestire utenti, artisti, eventi e biglietti, garantendo consistenza e integrità dei dati.`,
    technicalDetails: [
      {
        type: `Gestione dati`,
        description: `Gestione e conservazione dattramite migrazioni per prevenire perdite di dati`,
      },
      {
        type: `Pattern API`,
        description: `Utilizzo del best practices per garantire un la creazione di un'API robusta e solida`,
      },
      {
        type: `Validazione ichieste`,
        description: `Controlli lato server per garantire robustezza nelle risposte e gestire richieste non valide`,
      },
      {
        type: `Modelli DTO`,
        description: `Utilizzo di appositi modelli per aiutare la corretta richiesta di dati e delle risposte coerenti`,
      },
    ],
    challenges: [
      `Implementare un sistema di autenticazione sicura con gestione completa di access token e refresh token`,
      `Garantire la consistenza dei dati tra utenti, eventi e biglietti`,
      `Definire un'architettura pulita e modulare facilmente manutenibile ed estendibile`,
      `Gestire migrazioni e aggiornamenti DB senza perdita di dati`,
      `Validare gli input e proteggere l'applicazione da richieste malformate o non autorizzate`,
      `Evitare l'esposizione di dati sensibili (chiavi JWT, credenziali DB)`,
    ],
    solutions: [
      `Utilizzo di JWT + refresh token per garantire sicurezza e sessioni rinnovabili senza compromettere l'esperienza utente`,
      `Creazione di DTO e utilizzo di AutoMapper per ridurre la complessità nella gestione delle risposte API`,
      `Configurazione di EF Core Migrations per versionare e aggiornare lo schema del database`,
      `Integrazione di FluentValidation per centralizzare la validazione dei dati`,
      `Utilizzo di Swagger per testare e documentare in modo chiaro l'API`,
      `Adozione di best practice di sicurezza: HTTPS, validazione input, revoca refresh token`,
    ],
    releaseDate: `2025/03`,
    highlighted: false,
    technologies: [
      'aspnet',
      'dotnet',
      'microsoftSQLserver',
      'api',
      'swagger',
      'csharp',
    ],
    repoUrl: `https://github.com/Gianlu201/TicketsAPI`,
    demoUrl: undefined,
    videoDemoUrl: ``,
    coverImgUrl: `/images/projects/ticketsAPI/coverTicketsAPI.png`,
    img1url: `/images/projects/ticketsAPI/ticketsAPI1.jpg`,
    img2url: `/images/projects/ticketsAPI/ticketsAPI2.jpg`,
    img3url: `/images/projects/ticketsAPI/ticketsAPI3.jpg`,
    img4url: `/images/projects/ticketsAPI/ticketsAPI4.jpg`,
  },

  // ClientManager
  {
    title: `ClientManager`,
    category: `MVC`,
    description: `ClientManager è un'applicazione ASP.NET MVC per la gestione clienti e prenotazioni alberghiere. Permette di registrare nuovi clienti, creare prenotazioni assegnando le stanze tramite operatori autenticati e include un'area admin riservata per la gestione dei profili degli operatori.`,
    overview: `ClientManager è una web application sviluppata in ASP.NET MVC con Entity Framework Core e SQL Server come database relazionale.
    
    L'applicazione consente di gestire in modo completo il ciclo di vita di clienti e prenotazioni in una struttura alberghiera: gli utenti (clienti) possono essere creati, modificati ed eliminati tramite CRUD; gli operatori, dopo essersi autenticati, possono registrare nuove prenotazioni per i clienti, con tracciamento automatico di quale operatore ha eseguito l'operazione; l'area amministrativa riservata agli account con ruolo Admin consente la gestione dei profili degli operatori, assicurando controllo e sicurezza nell'accesso alle funzionalità più delicate.
    
    Grazie a un'architettura chiara e modulare, con separazione tra Controllers, Models, Views e un layer di accesso ai dati via EF Core, ClientManager garantisce estendibilità, sicurezza e manutenibilità.`,
    technicalDetails: [
      {
        type: `Applicazione MVC`,
        description: `Model-View-Controller per una gestione intuitiva di clienti, operatori e prenotazioni`,
      },
      {
        type: `Autenticazione e Autorizzazione`,
        description: `Basate su ASP.NET Identity, con ruoli e controlli su azioni e aree riservate`,
      },
      {
        type: `Prenotazioni tracciate`,
        description: `Ogni prenotazione contiene il riferimento al GUID dell'operatore che l'ha registrata`,
      },
      {
        type: `UI`,
        description: `Basata su Razor e Bootstrap, per un'interfaccia chiara e responsiva`,
      },
    ],
    challenges: [
      `Strutturare correttamente l'architettura MVC mantenendo la separazione delle responsabilità`,
      `Integrare l'autenticazione con Identity e gestire i ruoli in modo sicuro`,
      `Tracciare correttamente l'operatore che registra ogni prenotazione`,
      `Gestire le relazioni tra entità (User, Operator, Reservation) senza introdurre incoerenze`,
      `Implementare migrazioni EF Core mantenendo l'integrità dei dati`,
      `Progettare un'area admin sicura e accessibile solo ai ruoli autorizzati`,
    ],
    solutions: [
      `Utilizzo di ASP.NET Identity con autenticazione cookie e ruoli differenziati`,
      `Definizione chiara delle entità e delle relazioni nel DbContext per garantire consistenza referenziale`,
      `Inserimento dell'OperatorId (utente autenticato) nella creazione di ogni prenotazione per garantire tracciabilità`,
      `Applicazione di migrazioni EF Core per gestire in sicurezza gli aggiornamenti del database`,
      `Implementazione di un seeder iniziale per creare automaticamente account admin e ruoli al primo avvio`,
      `Protezione delle aree riservate e validazione lato server di ogni input`,
      `Adozione di Bootstrap + Razor Views per un'interfaccia user-friendly e facilmente estensibile.`,
    ],
    releaseDate: `2025/03`,
    highlighted: false,
    technologies: ['aspnet', 'microsoftSQLserver', 'bootstrap', 'csharp'],
    repoUrl: `https://github.com/Gianlu201/ClientManager`,
    demoUrl: undefined,
    videoDemoUrl: ``,
    coverImgUrl: `/images/projects/clientManager/coverClientManager.png`,
    img1url: `/images/projects/clientManager/clientManager1.jpg`,
    img2url: `/images/projects/clientManager/clientManager2.jpg`,
    img3url: `/images/projects/clientManager/clientManager3.jpg`,
    img4url: `/images/projects/clientManager/clientManager4.jpg`,
  },

  // DatabaseVerbali
  {
    title: `DatabaseVerbali`,
    category: `MVC`,
    description: `DatabaseVerbali è un'applicazione web sviluppata in ASP.NET MVC (C#) che gestisce l'assegnazione e la registrazione di verbali per persone che hanno commesso violazioni. Il progetto nasce come esercitazione didattica per consolidare l'uso del pattern MVC e l'integrazione di query SQL complesse su un database relazionale in SQL Server.`,
    overview: `L'applicazione DatabaseVerbali consente di registrare anagrafiche di soggetti e di assegnare loro i relativi verbali in caso di infrazioni. L'obiettivo principale è stato quello di realizzare un sistema che permetta di sperimentare in maniera pratica l'architettura Model-View-Controller, la manipolazione di query SQL avanzate (con join multipli, filtri e subquery) e la loro presentazione all'interno di viste Razor.
    
    Ogni query è progettata per restituire insiemi di dati mirati, in grado di evidenziare correlazioni tra soggetti, tipologie di violazione, date e severità delle infrazioni. La logica applicativa si concentra dunque sia sulla gestione dei dati (inserimento, ricerca, filtraggio) sia sulla visualizzazione leggibile e strutturata nelle interfacce web.`,
    technicalDetails: [
      {
        type: `Query parametrizzate`,
        description: `Utilizzo di query parametrizzate tramite ADO.NET`,
      },
      {
        type: `Gestione dati`,
        description: `Gestione dati tramite appositi ViewModel tipizzati, per separare i record del database dalla logica di presentazione`,
      },
      {
        type: `Esecuzione di query avanzate`,
        description: `Esecuzione di query JOIN, WHERE restrittivi, GROUP BY e HAVING per filtrare e analizzare i dati in maniera mirata`,
      },
      {
        type: `UI`,
        description: `Basata su Razor e Bootstrap, per un'interfaccia chiara e responsiva`,
      },
    ],
    challenges: [
      `Scrivere query complesse in grado di restituire dati utili e significativi senza compromettere le performance`,
      `Trasformare i record SQL in modelli tipizzati e ViewModel utilizzabili nelle view Razor`,
      `Separazione delle responsabilità mantenendo il corretto bilanciamento tra Controller, Model e View`,
      `Necessità di proteggere le query da SQL Injection e garantire input validi`,
    ],
    solutions: [
      `Query parametrizzate per eliminare rischi di SQL Injection`,
      `ViewModel tipizzati per separare la logica dei dati da quella della presentazione, aumentando la chiarezza e la manutenibilità`,
      `Test progressivi delle query con dataset di esempio per validare correttezza e performance delle interrogazioni`,
      `Struttura MVC rigorosa rispettata in tutte le parti del progetto, così da consolidare l'esperienza pratica e replicare un'architettura standard utilizzata in produzione.`,
    ],
    releaseDate: `2025/03`,
    highlighted: false,
    technologies: ['aspnet', 'csharp', 'microsoftSQLserver', 'bootstrap'],
    repoUrl: `https://github.com/Gianlu201/DatabaseVerbali`,
    demoUrl: undefined,
    videoDemoUrl: ``,
    coverImgUrl: `/images/projects/databaseVerbali/coverDatabaseVerbali.png`,
    img1url: `/images/projects/databaseVerbali/databaseVerbali1.jpg`,
    img2url: `/images/projects/databaseVerbali/databaseVerbali2.jpg`,
    img3url: `/images/projects/databaseVerbali/databaseVerbali3.jpg`,
    img4url: `/images/projects/databaseVerbali/databaseVerbali4.jpg`,
  },

  // Scarpe&Co
  {
    title: `Scarpe&Co`,
    category: `MVC`,
    description: `Scarpe&Co è una web application sviluppata in ASP.NET Core MVC che funge da vetrina per scarpe, con funzionalità di catalogo prodotti, galleria immagini interattiva e gestione CRUD (creazione, modifica ed eliminazione).`,
    overview: `Scarpe&Co è un progetto didattico costruito per mettere in pratica il pattern MVC con ASP.NET Core e approfondire le principali pratiche di sviluppo web su .NET. L'applicazione consente di gestire un catalogo di scarpe: ogni prodotto è presentato con nome, prezzo e immagine di copertina, mentre una pagina di dettaglio permette di esplorare ulteriori informazioni attraverso una galleria immagini con anteprima dinamica (hover preview).
    
    Gli utenti hanno inoltre a disposizione un'area di amministrazione semplice, tramite la quale possono aggiungere nuove scarpe, modificarne i dettagli oppure eliminarle. La validazione dei dati è garantita tramite Data Annotations, mentre l'interfaccia è resa moderna e responsive grazie a Bootstrap. Un piccolo script JavaScript completa l'esperienza utente con un'interazione fluida sulla pagina di dettaglio.`,
    technicalDetails: [
      {
        type: `Pattern MVC`,
        description: `Utilizzo dell'architettura Model-View-Controllers`,
      },
      {
        type: `Gestione dati`,
        description: `Gestione dati semplificata con aggiunta immagini prodotti tramite link a immagini esterne`,
      },
      {
        type: `Validazione dati`,
        description: `Validazione lato server basata su Data Annotations`,
      },
      {
        type: `UI`,
        description: `Basata su Razor e Bootstrap, per un'interfaccia chiara e responsiva`,
      },
    ],
    challenges: [
      `Gestione della persistenza senza database, i dati andavano persi ad ogni riavvio dell'app`,
      `Validazione lato server e lato client garantendo consistenti e robusti dei dati inseriti`,
      `Interazione dinamica della galleria immagini`,
      `Strutturazione MVC pulita separando correttamente logica, modelli e viste`,
      `Design responsivo garantendo una corretta visualizzazione su diversi dispositivi`,
    ],
    solutions: [
      `Persistenza in-memory implementando una lista statica per gestire i prodotti`,
      `Data Annotations utilizzate per vincolare i dati e gestire errori di validazione in modo centralizzato`,
      `Script JS dedicato per gestire l'hover preview, rendendo il codice riutilizzabile e ordinato`,
      `ViewModel dedicati introdotti per migliorare chiarezza e separazione delle responsabilità`,
      `Bootstrap 5 adottato per assicurare un layout moderno e responsive senza dover scrivere molto CSS personalizzato`,
    ],
    releaseDate: `2025/02`,
    highlighted: false,
    technologies: [
      'dotnet',
      'aspnet',
      'csharp',
      'css',
      'bootstrap',
      'javascript',
    ],
    repoUrl: `https://github.com/Gianlu201/Scarpe-Co`,
    demoUrl: undefined,
    videoDemoUrl: ``,
    coverImgUrl: `/images/projects/scarpeCo/coverScarpeCo.png`,
    img1url: `/images/projects/scarpeCo/scarpeCo1.jpg`,
    img2url: `/images/projects/scarpeCo/scarpeCo2.jpg`,
    img3url: `/images/projects/scarpeCo/scarpeCo3.jpg`,
    img4url: `/images/projects/scarpeCo/scarpeCo4.jpg`,
  },

  // LinkedIn clone
  {
    title: `LinkedIn clone`,
    category: `Applicazione Web`,
    description: `LinkedIn Clone è una web application sviluppata in React che replica le principali funzionalità di LinkedIn: gestione del profilo personale, pubblicazione di post, ricerca di annunci di lavoro e interazione con altri utenti, sfruttando le API di Strive School.`,
    overview: `Il progetto LinkedIn Clone è una riproduzione fedele del social network professionale LinkedIn, sviluppato in React con Vite per esercitare lo sviluppo frontend moderno con state management avanzato e integrazione di API reali.
    
    L'app consente di autenticarsi e recuperare i propri dati tramite le API di Strive School, interagire con un feed dinamico di post (lettura, creazione, aggiornamento e condivisione), gestire le proprie esperienze lavorative con operazioni CRUD e persino effettuare ricerche di annunci di lavoro provenienti da un'API esterna.
    
    Dal punto di vista architetturale, il progetto è stato strutturato in componenti riutilizzabili, context per la gestione dello stato dell'autenticazione, servizi centralizzati per le chiamate API e pagine modulari. Lo styling è affidato a Bootstrap e CSS globali, mentre il deploy è stato effettuato su Vercel, rendendo il progetto accessibile online.`,
    technicalDetails: [
      {
        type: `Autenticazione token`,
        description: `Autenticazione basata su Bearer token per API Strive`,
      },
      {
        type: `Routing`,
        description: `Navigazione dinamica e ottimizzata per visitare vari profili utenti e diversi annunci di lavoro`,
      },
      {
        type: `Feed autentico`,
        description: `Possibilità di creare e scambiare reali post con altri utenti tramite API esterne d'appoggio`,
      },
      {
        type: `UI/UX`,
        description: `Esperienza utente fedele a quella della piattaforma originale`,
      },
    ],
    challenges: [
      `Gestione token e autenticazione tramite token Strive API`,
      `Integrazione CRUD completa con  aggiunta, modifica e cancellazione delle esperienze utente senza compromettere lo stato globale`,
      `Gestione stato complesso tramite Redux, context e chiamate asincrone senza introdurre inconsistenze`,
      `UI e UX fedele a LinkedIn per un'interfaccia realistica, responsiva e coerente con l'esperienza d'uso del portale originale`,
    ],
    solutions: [
      `Utilizzo di Redux per la gestione dei dati globali tra cui l'autenticazione`,
      `Componenti riutilizzabili per evitare duplicazioni e facilitare la manutenzione`,
      `Bootstrap e responsive design adottati per mantenere un'interfaccia pulita e coerente, riducendo la necessità di scrivere CSS custom complesso`,
    ],
    releaseDate: `2025/01`,
    highlighted: false,
    technologies: [
      'vite',
      'react',
      'javascript',
      'api',
      'css',
      'html',
      'redux',
      'bootstrap',
    ],
    repoUrl: `https://github.com/Gianlu201/LinkedIn-Clone`,
    demoUrl: `https://likedin-clone-pi.vercel.app/`,
    videoDemoUrl: ``,
    coverImgUrl: `/images/projects/linkedinClone/coverLinkedinClone.png`,
    img1url: `/images/projects/linkedinClone/linkedinClone1.jpg`,
    img2url: `/images/projects/linkedinClone/linkedinClone2.jpg`,
    img3url: `/images/projects/linkedinClone/linkedinClone3.jpg`,
    img4url: `/images/projects/linkedinClone/linkedinClone4.jpg`,
  },

  // AppleMusic Clone
  {
    title: `AppleMusic Clone`,
    category: `Web Design`,
    description: `Apple Music Clone è una web app sviluppata con React + TypeScript + Bootstrap che replica l'interfaccia di Apple Music. Recupera brani e dati da un'API Deezer (via Strive) e li combina con elementi statici per ricreare la pagina di ascolto con player, album e playlist.`,
    overview: `Il progetto Apple Music Clone nasce come esercizio pratico per consolidare le competenze acquisite nello sviluppo frontend con React e TypeScript, approfondendo il flusso dati client-side e la strutturazione di componenti modulari.
    
    L'applicazione emula la grafica della piattaforma Apple Music, riproducendo fedelmente la sezione “Now Playing/Listen” includendo: un player statico con controlli di base, una lista di brani e una galleria di album con artwork, una UI responsive moderna e pulita.
    
    La musica e le immagini degli album vengono caricate da due fonti: API Deezer (tramite Strive School) per brani reali, cartella statica per risorse grafiche.
    
    Il progetto non implementa lo streaming audio completo, ma fornisce una solida base didattica per lavorare con dati tipizzati in TypeScript, componibilità React e chiamate API reali.`,
    technicalDetails: [
      {
        type: `Tipizzazione dei dati`,
        description: `Dati tipizzati tramite l'utilizzo di interfacce TypeScript`,
      },
      {
        type: `Struttura modulare`,
        description: `Interfaccia realizzata tramite l'utilizzo di componenti riutilizzabili`,
      },
      {
        type: `API esterne`,
        description: `Recupero dati da API esterne (Deezer da Strive) per la presentazione dei dati`,
      },
      {
        type: `UI/UX`,
        description: `Esperienza utente fedele a quella della piattaforma originale`,
      },
    ],
    challenges: [
      `Mantenere un design coerente e simile all'originale`,
      `Definizione di tipi precisi per album, tracce e stato del player tramite TypeScript`,
      `Adattare il formato dei dati provenienti dall'API Deezer al modello interno`,
      `Garantire una corretta resa dell'interfaccia su dispositivi diversi`,
      `Separare logica e presentazione in componenti riutilizzabili`,
    ],
    solutions: [
      `Utilizzo di Bootstrap per velocizzare la creazione di layout responsive e simili all'originale`,
      `TypeScript interfaces per tipizzare album, tracce e player, prevenendo errori di runtime`,
      `Fetch per gestire le chiamate API e adattare i dati al formato richiesto dai componenti`,
      `Suddivisione della UI in piccoli componenti riutilizzabili e facilmente estendibili`,
      `Assets statici + API reali per una combinazione di immagini statiche e contenuti dinamici in un prototipo realistico e stabile`,
    ],
    releaseDate: `2025/01`,
    highlighted: false,
    technologies: ['vite', 'react', 'css', 'bootstrap', 'typescript'],
    repoUrl: `https://github.com/Gianlu201/AppleMusicClone`,
    demoUrl: `https://apple-music-clone-nine.vercel.app/`,
    videoDemoUrl: undefined,
    coverImgUrl: `/images/projects/appleMusicClone/coverAppleMusicClone.png`,
    img1url: `/images/projects/appleMusicClone/appleMusicClone1.jpg`,
    img2url: `/images/projects/appleMusicClone/appleMusicClone2.jpg`,
    img3url: `/images/projects/appleMusicClone/appleMusicClone3.jpg`,
    img4url: undefined,
  },

  // EpiMeteo
  {
    title: `EpiMeteo`,
    category: `Applicazione Web`,
    description: `EpiMeteo è un'applicazione web sviluppata in React che fornisce previsioni meteo aggiornate per qualsiasi città, mostrando sia il meteo corrente sia le previsioni ora per ora, sfruttando l'API di OpenWeather.`,
    overview: `EpiMeteo è un progetto didattico creato per consolidare le competenze su React e Vite, con particolare attenzione a componentizzazione, hooks e gestione dei dati da API esterne.
    
    L'app permette di selezionare o cercare una città e visualizzarne le condizioni meteo attuali, integrando anche le previsioni ora per ora. L'interfaccia è stata progettata per essere intuitiva e modulare: ogni elemento (scheda meteo, lista oraria, barra di ricerca) è un componente React autonomo, pronto per essere esteso o riutilizzato in altri progetti.
    
    EpiMeteo fornisce agli utenti informazioni meteo complete e aggiornate su varie città selezionabili nella barra di ricerca o tra alcune suggerite.`,
    technicalDetails: [
      {
        type: `Ricerca città`,
        description: `Ricerca informazioni meteo su diverse città tramite barra di ricerca`,
      },
      {
        type: `Chiamate API`,
        description: `Recupero dati da API ufficiale di una piattaforma meteo`,
      },
      {
        type: `Interfaccia modulare`,
        description: `Pagina realizzata mediante componenti riutilizzabili e adattabili a seconda dei dati`,
      },
      {
        type: `Responsive UI`,
        description: `Visualizzazione adattabile su diversi dispositivi`,
      },
    ],
    challenges: [
      `Sincronizzare la ricerca della città con le chiamate API e aggiornamento del componente meteo`,
      `Adattare i dati restituiti da OpenWeather al formato richiesto dai componenti`,
      `Visualizzare correttamente previsioni ora-per-ora e schede meteo su diverse dimensioni di schermo`,
      `Mantenere logica e presentazione separate, evitando duplicazioni di codice`,
    ],
    solutions: [
      `Centralizzare la logica di fetch e stato meteo, semplificando i componenti`,
      `Wrapper per chiamate API, gestione errori e parsing dei dati`,
      `Separazione chiara tra scheda meteo, lista oraria e barra di ricerca tramite componenti modulari`,
      `Gestione UI dinamica per aggiornamenti in tempo reale e rendering condizionale`,
      `Layout flessibile tramite CSS standard e griglie per lista ora-per-ora`,
    ],
    releaseDate: `2025/01`,
    highlighted: false,
    technologies: [
      'react',
      'vite',
      'javascript',
      'html',
      'css',
      'bootstrap',
      'api',
    ],
    repoUrl: `https://github.com/Gianlu201/EpiMeteo`,
    demoUrl: `https://epi-meteo.vercel.app/`,
    videoDemoUrl: undefined,
    coverImgUrl: `/images/projects/epiMeteo/coverEpiMeteo.png`,
    img1url: `/images/projects/epiMeteo/epiMeteo1.jpg`,
    img2url: `/images/projects/epiMeteo/epiMeteo2.jpg`,
    img3url: `/images/projects/epiMeteo/epiMeteo3.jpg`,
    img4url: `/images/projects/epiMeteo/epiMeteo4.jpg`,
  },

  // EpiFlix
  {
    title: `EpiFlix`,
    category: `Web Design`,
    description: `EpiFlix è un progetto didattico sviluppato in React che propone all'utente una raccolta di film da poter vedere in stile Netflix, includendo le pagine Home, Profilo e Impostazioni, con contenuti dinamici recuperati dall'API OMDb (Open Movie Database).`,
    overview: `Il progetto EpiFlix è stato realizzato come esercizio per consolidare le competenze nello sviluppo frontend con React e Vite, sperimentando la gestione dello stato tramite hooks e l'integrazione con API REST.
    
    La piattaforma offre: una homepage con righe tematiche di film e card poster; una pagina profilo per la gestione dell'utente; una pagina impostazioni per simulare le configurazioni personalizzabili.
    
    I dati vengono recuperati in tempo reale dall'API OMDb, consentendo all'utente di cercare film tramite titolo, visualizzare i dettagli completi (anno, trama, cast, poster, valutazione IMDB) e sfogliare i risultati tramite paginazione.

    L'obiettivo principale è didattico: sperimentare la componentizzazione, la gestione degli stati di caricamento/errore, l'uso di custom hooks (per esempio il debounce nella ricerca) e la creazione di un'interfaccia responsive e riutilizzabile.`,
    technicalDetails: [
      {
        type: `Routing`,
        description: `Navigazione dinamica tramite React Router`,
      },
      {
        type: `Chiamate API`,
        description: `Recupero dati da API ufficiale di una piattaforma meteo`,
      },
      {
        type: `Interfaccia modulare`,
        description: `Pagina realizzata mediante componenti riutilizzabili e adattabili a seconda dei dati`,
      },
      {
        type: `Responsive UI`,
        description: `Visualizzazione adattabile su diversi dispositivi`,
      },
    ],
    challenges: [
      `Gestione chiamate API dell'API OMDb (massimo 10 risultati per pagina)`,
      `Coordinare loading, errori e risultati vuoti senza compromettere l'esperienza utente`,
      `Ricreare un layout coerente e responsivo, con righe tematiche e card accattivanti`,
      `Separare logica, servizi e presentazione per mantenere il codice scalabile.`,
    ],
    solutions: [
      `Centralizzazione delle chiamate API, gestione degli endpoint e degli errori`,
      `Riduzione delle richieste API durante la digitazione nella search bar`,
      `UI che mostra loader, error message o empty state in base ai dati disponibili`,
      `Componenti riutilizzabili per facilitare estensioni future`,
      `Bootstrap + CSS custom per una combinazione di velocità nello sviluppo e flessibilità`,
    ],
    releaseDate: `2025/01`,
    highlighted: false,
    technologies: ['react', 'vite', 'css', 'javascript', 'bootstrap'],
    repoUrl: `https://github.com/Gianlu201/EpiFlix`,
    demoUrl: undefined,
    videoDemoUrl: undefined,
    coverImgUrl: `/images/projects/epiflix/coverEpiflix.png`,
    img1url: `/images/projects/epiflix/epiflix1.jpg`,
    img2url: `/images/projects/epiflix/epiflix2.jpg`,
    img3url: `/images/projects/epiflix/epiflix3.jpg`,
    img4url: `/images/projects/epiflix/epiflix4.jpg`,
  },

  // Pokédex
  {
    title: `Pokédex`,
    category: `Applicazione Web`,
    description: `Un Pokédex interattivo sviluppato in HTML, CSS, Bootstrap e JavaScript, che permette di esplorare l'intero mondo dei Pokémon, filtrarli, ricercarli per nome e visualizzarne i dettagli, incluse statistiche e catena evolutiva.`,
    overview: `Il progetto è una web app che riproduce un Pokédex digitale, pensato per offrire un'esperienza di consultazione chiara e immediata a tutti gli appassionati di Pokémon. Grazie all'integrazione con le API, l'app consente di visualizzare l'elenco completo dei Pokémon e di accedere, per ciascuno di essi, a una scheda dettagliata con caratteristiche principali, tipologia e catena evolutiva.

    Gli utenti possono personalizzare la propria esplorazione attraverso ricerche testuali e filtri avanzati (tipo, generazione, leggendario o meno). L'interfaccia, sviluppata con Bootstrap, è completamente responsive, garantendo un'esperienza ottimale sia da desktop che da mobile.`,
    technicalDetails: [
      {
        type: `API Pokémon`,
        description: `Dati recuperati da API ufficiale Pokémon`,
      },
      {
        type: `Sistema di filtri multipli`,
        description: `Possibilità di filtrare i Pokémon per generazione, tipo e leggendari`,
      },
      {
        type: `Catena evolutiva`,
        description: `Visualizzazione della catena evolutiva del Pokémon selezionato`,
      },
      {
        type: `Responsive UI`,
        description: `Responsività per adattare l'applicazione su diversi dispositivi`,
      },
    ],
    challenges: [
      `Gestione delle chiamate API con gestione strutture annidate e complesse`,
      `Aggiornare la UI senza ricaricare la pagina con gestione accurata del DOM`,
      `Organizzazione dei dati forniti dalle API per essere presentati in modo chiaro`,
      `Adattabilità mobile per visualizzazione corretta delle card e dei dettagli su schermi ridotti`,
      `Ottimizzare i tempi di caricamento evitando richieste ridondanti alle API`,
    ],
    solutions: [
      `Utilizzo di funzioni asincrone (async/await) per gestire in maniera pulita le chiamate API`,
      `Creazione di funzioni di parsing per estrarre solo i dati rilevanti e presentarli in modo ordinato`,
      `Implementazione di un rendering condizionale del DOM per evitare refresh completi della pagina`,
      `Uso di Bootstrap e classi responsive per migliorare la fruibilità mobile`,
      `Introduzione di una cache locale temporanea dei dati per ridurre il numero di richieste ripetute.`,
    ],
    releaseDate: `2025/01`,
    highlighted: false,
    technologies: ['html', 'css', 'javascript', 'bootstrap', 'api'],
    repoUrl: `https://github.com/Gianlu201/Pokedex`,
    demoUrl: `https://pokedex-blue-ten.vercel.app/`,
    videoDemoUrl: undefined,
    coverImgUrl: `/images/projects/pokedex/coverPokedex.png`,
    img1url: `/images/projects/pokedex/pokedex1.jpg`,
    img2url: `/images/projects/pokedex/pokedex2.jpg`,
    img3url: `/images/projects/pokedex/pokedex3.jpg`,
    img4url: `/images/projects/pokedex/pokedex4.jpg`,
  },

  // NetflixClone
  {
    title: `NetflixClone`,
    category: `Web Design`,
    description: `Un clone grafico della piattaforma Netflix, sviluppato con HTML, CSS, Sass e JavaScript per esercitarmi nella realizzazione di interfacce responsive e dinamiche, con particolare attenzione all'uso di Sass per una gestione modulare e scalabile degli stili.`,
    overview: `Netflix Clone è un progetto front-end che riproduce fedelmente l'interfaccia utente della nota piattaforma di streaming. L'obiettivo principale non è la funzionalità back-end o la gestione reale di contenuti multimediali, ma la ricostruzione accurata della UI attraverso tecniche avanzate di styling e componentizzazione con Sass.
    
    Il progetto comprende: header e navigazione ispirati a Netflix; caroselli scorrevoli con immagini statiche di copertina; struttura responsive ottimizzata per diversi dispositivi; layout organizzato in maniera modulare per facilitare la manutenzione e la scalabilità.
    
    Grazie all'uso di Sass, l'applicazione implementa: variabili per colori e spaziature, semplificando il mantenimento della coerenza visiva; nesting per rendere il codice più leggibile e vicino alla logica dei componenti; mixin per gestire media query e rendere il progetto completamente responsive.

    Il risultato è un'app statica che emula l'esperienza visiva e di navigazione della piattaforma Netflix, rappresentando un esercizio di stile e un passo concreto verso progetti di front-end più complessi.`,
    technicalDetails: [
      {
        type: `Struttura semantica`,
        description: `Utilizzo mirato dei tag HTML per una struttura semanticamente ben realizzata`,
      },
      {
        type: `Stile elaborato`,
        description: `Utilizzo di Sass (SCSS) per uno stile solido e coerente`,
      },
      {
        type: `Immagini statiche`,
        description: `Immagini di copertina statiche come placeholder`,
      },
      {
        type: `Responsive UI`,
        description: `Visualizzazione adattabile su diversi dispositivi`,
      },
    ],
    challenges: [
      `Replica fedele dell'interfaccia originale, trovando un equilibrio tra estetica e semplificazione`,
      `Implementare uno scorrimento fluido e naturale solo con JS vanilla per i caroselli`,
      `Adattare un layout nato per il desktop anche al mobile`,
      `Organizzazione del codice Sass, mantenere ordine e coerenza sfruttando al meglio nesting e mixin.`,
    ],
    solutions: [
      `Utilizzo di Sass modularizzato per dividere gli stili in sezioni (header, caroselli, layout)`,
      `Implementazione di funzioni JavaScript semplici ma riutilizzabili per la gestione degli slider`,
      `Adozione di mixin responsive per ottimizzare il design su vari device`,
      `Strutturazione di variabili globali (palette colori, font-size, spacing) per un look coerente`,
      `Scelte di design adattive che mantengono la fedeltà all'originale pur semplificando dove necessario.`,
    ],
    releaseDate: `2024/12`,
    highlighted: false,
    technologies: ['html', 'css', 'javascript', 'sass'],
    repoUrl: `https://github.com/Gianlu201/NetflixClone`,
    demoUrl: 'https://netflix-clone-omega-sable.vercel.app/',
    videoDemoUrl: undefined,
    coverImgUrl: `/images/projects/netflixClone/coverNetflixClone.png`,
    img1url: `/images/projects/netflixClone/netflixClone1.jpg`,
    img2url: `/images/projects/netflixClone/netflixClone2.jpg`,
    img3url: `/images/projects/netflixClone/netflixClone3.jpg`,
    img4url: `/images/projects/netflixClone/netflixClone4.jpg`,
  },

  // MediumClone
  {
    title: `MediumClone`,
    category: `Web Design`,
    description: `Clone puramente grafico della homepage di Medium, sviluppato in HTML, CSS e JavaScript come esercizio didattico per consolidare le competenze nella costruzione di interfacce web e nelle animazioni SVG.`,
    overview: `Medium UI Clone è un progetto frontend realizzato con lo scopo di replicare in maniera fedele il layout della homepage di Medium. L'applicazione non include logiche di backend o funzionalità dinamiche di pubblicazione: si tratta di una riproduzione statica e dimostrativa.

    Il progetto si concentra sulla cura dei dettagli grafici — tipografia, struttura del layout, gestione delle card degli articoli, header e sidebar — e integra un'animazione SVG realizzata e gestita via JavaScript per rendere l'esperienza più interattiva e realistica.

    Oltre alla componente estetica, è stato ottimizzato per la responsività, garantendo una visualizzazione fluida sia su desktop che su dispositivi mobili. Questo approccio permette di mettere in pratica tecniche moderne di frontend e di acquisire padronanza nell'uso combinato di HTML, CSS e JavaScript.`,
    technicalDetails: [
      {
        type: `UI`,
        description: `Replica grafica fedele al mockup`,
      },
      {
        type: `Responsive UI`,
        description: `Layout responsive adattabile su diversi dispositivi`,
      },
      {
        type: `Animazioni SVG`,
        description: `Animazione SVG integrata e controllata tramite JavaScript`,
      },
      {
        type: `Ricerca stile`,
        description: `Cura dei dettagli grafici e tipografici`,
      },
    ],
    challenges: [
      `Riprodurre fedelmente il layout complesso della homepage di Medium (tipografia, griglie e spaziature)`,
      `Gestire la responsività mantenendo proporzioni e leggibilità su diversi device`,
      `Implementare un'animazione SVG fluida senza incidere negativamente sulle performance`,
      `Bilanciare semplicità del codice con la fedeltà grafica della replica`,
      `Integrare asset statici (icone, immagini, SVG) in maniera coerente e leggera`,
    ],
    solutions: [
      `Utilizzo di flexbox e CSS grid per riprodurre in modo preciso le griglie di Medium`,
      `Definizione di breakpoint responsive per adattare il design a desktop, tablet e smartphone`,
      `Organizzazione modulare del codice per separare logica (JS), stili (CSS) e contenuti (HTML)`,
      `Creazione di un design system semplificato con variabili CSS per colori e font`,
    ],
    releaseDate: `2024/11`,
    highlighted: false,
    technologies: ['html', 'css', 'javascript'],
    repoUrl: `https://github.com/Gianlu201/MediumClone`,
    demoUrl: `https://medium-clone-indol-eta.vercel.app/`,
    videoDemoUrl: undefined,
    coverImgUrl: `/images/projects/mediumClone/coverMediumClone.png`,
    img1url: `/images/projects/mediumClone/mediumClone1.jpg`,
    img2url: `/images/projects/mediumClone/mediumClone2.jpg`,
    img3url: `/images/projects/mediumClone/mediumClone3.jpg`,
    img4url: `/images/projects/mediumClone/mediumClone4.jpg`,
  },

  // SpotifyClone
  {
    title: `Spotify Clone`,
    category: `Applicazione Web`,
    description: `Un clone funzionale di Spotify, sviluppato con HTML, CSS e JavaScript, che permette di cercare artisti, album e brani tramite API esterne, ascoltare demo da 29 secondi e creare playlist personalizzate salvate su una MockAPI.`,
    overview: `Spotify Clone è una web application che replica in modo fedele l'esperienza di utilizzo della celebre piattaforma musicale. L'app consente all'utente di navigare tra artisti, album e brani tramite un'interfaccia semplice e intuitiva, completamente responsive e accessibile sia da desktop che da mobile.
    
    Grazie all'integrazione con l'API Striveschool, l'applicazione recupera in tempo reale dati musicali aggiornati, permettendo di ascoltare estratti di 29 secondi dei brani. Inoltre, gli utenti possono aggiungere i propri preferiti a una playlist personale, che viene gestita e salvata tramite una MockAPI esterna.

    Il progetto non si limita alla sola riproduzione musicale, ma integra anche cronologia degli ascolti, navigazione tra pagine dedicate ad artisti e album, suggerimenti dinamici e un player musicale interattivo con controlli avanzati.
    
    Il progetto è stato concepito come esercizio pratico di sviluppo front-end e consumo di API. La web app si articola in cinque pagine principali (Homepage, Artista, Album, Ricerca e Preferiti) connesse tra loro da una navigazione fluida e coerente.

    Ogni pagina include un player musicale sempre visibile, con controlli per la riproduzione e informazioni contestuali sul brano in ascolto. L'applicazione offre un'esperienza d'uso vicina a quella di Spotify, combinando design responsive, interazione con API e gestione dello stato lato client tramite Local Storage e MockAPI.`,
    technicalDetails: [
      {
        type: `API esterne`,
        description: `Dati recuperati da API Striveschool e brani preferiti salvati su mockAPI`,
      },
      {
        type: `Cronologia degli ascolti`,
        description: `Cronologia dei brani ascoltati persistente grazie al LocalStorage`,
      },
      {
        type: `UI`,
        description: `Replica grafica fedele al mockup`,
      },
      {
        type: `Responsive UI`,
        description: `Layout responsive adattabile su diversi dispositivi`,
      },
    ],
    challenges: [
      `Gestione asincrona delle API: sincronizzare chiamate multiple e garantire caricamenti fluidi`,
      `Player musicale universale: mantenerlo sempre visibile e funzionante in ogni pagina`,
      `Persistenza dei dati utente: salvare i preferiti e la cronologia tra sessioni diverse`,
      `Responsive design: adattare la UI a schermi molto diversi senza rompere il layout`,
      `Organizzazione del codice: mantenere pulita e scalabile la struttura in più file JS`,
    ],
    solutions: [
      `Utilizzo di async/await e gestione delle promesse per coordinare le chiamate API`,
      `Integrazione di Local Storage e MockAPI per garantire salvataggi persistenti`,
      `Adozione del mobile-first design e test su vari dispositivi per ottimizzare la responsività`,
      `Strutturazione del codice in moduli separati per pagina e utilizzo di funzioni riutilizzabili`,
    ],
    releaseDate: `2024/12`,
    highlighted: false,
    technologies: ['html', 'css', 'bootstrap', 'javascript', 'api'],
    repoUrl: `https://github.com/Gianlu201/SpotifyClone`,
    demoUrl: `https://spotify-clone-psi-lac.vercel.app/`,
    videoDemoUrl: undefined,
    coverImgUrl: `/images/projects/spotifyClone/coverSpotifyClone.png`,
    img1url: `/images/projects/spotifyClone/spotifyClone1.jpg`,
    img2url: `/images/projects/spotifyClone/spotifyClone2.jpg`,
    img3url: `/images/projects/spotifyClone/spotifyClone3.jpg`,
    img4url: `/images/projects/spotifyClone/spotifyClone4.jpg`,
  },

  // GuessTheWord
  {
    title: `Guess The Word`,
    category: `Applicazione Web`,
    description: `Guess The Word è un semplice gioco dell'impiccato realizzato in HTML, CSS e JavaScript, dove l'utente deve indovinare una parola segreta scegliendo tra lettere proposte sullo schermo, evitando di completare la figura dell'impiccato.`,
    overview: `Il progetto Guess The Word rappresenta una versione digitale del classico gioco dell'impiccato, sviluppata con tecnologie front-end di base. L'applicazione seleziona casualmente una parola da una lista interna e ne mostra la rappresentazione con underscore. L'utente può tentare di indovinarla cliccando sulle lettere disponibili a schermo: se la lettera è presente, viene rivelata nella parola, mentre se la lettera è sbagliata, viene aggiunta una parte della figura stilizzata dell'impiccato.

    Il gioco termina con la vittoria se l'utente completa la parola, oppure con la sconfitta quando l'intero disegno viene mostrato.

    Sono presenti messaggi di feedback e la possibilità di ricominciare una nuova partita. Questo progetto, nato come esercizio pratico, consolida le basi di programmazione client-side e manipolazione del DOM.`,
    technicalDetails: [
      {
        type: `Gioco da browser`,
        description: `Gioco da browser single-page`,
      },
      {
        type: `Obiettivo`,
        description: `Esercitazione personale sui fondamenti dello sviluppo`,
      },
      {
        type: `Randomicità`,
        description: `Parola segreta e lettere disponibili selezionate in modo casuale`,
      },
      {
        type: `Visualizzazione progressiva`,
        description: `Manipolazione del DOM in risposta alle proprie scelte`,
      },
    ],
    challenges: [
      `Gestione degli eventi sulle lettere per evitare che l'utente possa selezionare più volte la stessa`,
      `Rendering dinamico della parola segreta, mantenendo la corretta posizione delle lettere scoperte`,
      `Disegno progressivo dell'impiccato, bilanciando numero di errori e step della figura`,
      `Messaggi di vittoria/sconfitta, garantendo che vengano mostrati al momento giusto`,
    ],
    solutions: [
      `Disattivazione delle lettere cliccate tramite classi CSS e logica JS per evitare selezioni ripetute`,
      `Utilizzo di array e cicli per aggiornare dinamicamente gli underscore della parola segreta`,
      `Creazione di un sistema a step incrementali per mostrare la figura dell'impiccato`,
      `Implementazione di funzioni modulari per verificare condizioni di vittoria/sconfitta`,
    ],
    releaseDate: `2024/12`,
    highlighted: false,
    technologies: ['html', 'css', 'javascript', 'bootstrap'],
    repoUrl: `https://github.com/Gianlu201/GuessTheWord`,
    demoUrl: `https://guess-the-word-indol.vercel.app/`,
    videoDemoUrl: undefined,
    coverImgUrl: `/images/projects/guessTheWord/coverGuessTheWord.png`,
    img1url: `/images/projects/guessTheWord/guessTheWord1.jpg`,
    img2url: `/images/projects/guessTheWord/guessTheWord2.jpg`,
    img3url: `/images/projects/guessTheWord/guessTheWord3.jpg`,
    img4url: undefined,
  },

  // Memory
  {
    title: `Memory`,
    category: `Applicazione Web`,
    description: `Memory è un gioco da browser in cui l'utente deve trovare e accoppiare tutte le carte uguali scoperte a coppie, gestendo tempo e errori, sviluppato con HTML, CSS, Bootstrap e JavaScript.`,
    overview: `Il progetto Memory riproduce il classico gioco di carte a coppie in versione digitale. Le carte sono disposte di dorso in su su una griglia e il giocatore può scoprire due carte alla volta.

    Se le carte corrispondono, rimangono scoperte; in caso contrario, vengono girate di nuovo.

    Il gioco integra un timer per imporre un limite di tempo e un contatore di errori per limitare i tentativi sbagliati. La partita termina con la vittoria quando tutte le coppie vengono trovate, oppure con il game over al superamento dei limiti.

    Questo progetto è nato come esercizio didattico per consolidare le competenze di base nello sviluppo web, sperimentando manipolazione del DOM, gestione eventi, layout responsive e logica di gioco interattiva.`,
    technicalDetails: [
      {
        type: `Gioco da browser`,
        description: `Gioco da browser single-page`,
      },
      {
        type: `Obiettivo`,
        description: `Esercitazione personale sui fondamenti dello sviluppo`,
      },
      {
        type: `Randomicità`,
        description: `Carte rimescolate e disposte casualmente ad ogni partita`,
      },
      {
        type: `Responsive UI`,
        description: `Layout responsive grazie a Bootstrap`,
      },
    ],
    challenges: [
      `Sincronizzare la scoperta delle carte con il controllo della corrispondenza, evitando che l'utente clicchi troppo rapidamente causando conflitti`,
      `Implementare il timer e il limite di errori in modo chiaro e visibile al giocatore`,
      `Mantenere lo stato del gioco coerente su più tentativi e reset della partita`,
      `Rendere la griglia e le carte responsive su diversi dispositivi`,
      `Gestire animazioni fluide e feedback visivi senza l'uso di librerie esterne`,
    ],
    solutions: [
      `Blocco temporaneo dei clic durante la fase di verifica delle carte per evitare conflitti`,
      `Aggiornamento dinamico di timer e contatore errori con messaggi in tempo reale`,
      `Funzione di reset partita che reinizializza le carte, gli errori e il timer`,
      `Utilizzo di Bootstrap per rendere il layout responsive`,
      `Applicazione di classi CSS dinamiche per animare carte scoperte/coperte, migliorando la UX senza librerie esterne`,
    ],
    releaseDate: `2024/11`,
    highlighted: false,
    technologies: ['html', 'css', 'javascript', 'bootstrap'],
    repoUrl: `https://github.com/Gianlu201/Memory`,
    demoUrl: `https://memory-tawny-seven.vercel.app/`,
    videoDemoUrl: undefined,
    coverImgUrl: `/images/projects/memory/coverMemory.png`,
    img1url: `/images/projects/memory/memory1.jpg`,
    img2url: `/images/projects/memory/memory2.jpg`,
    img3url: `/images/projects/memory/memory3.jpg`,
    img4url: `/images/projects/memory/memory4.jpg`,
  },

  // TicTacToe
  {
    title: `TicTacToe`,
    category: `Applicazione Web`,
    description: `Un'applicazione web sviluppata in React che permette a due giocatori di sfidarsi al classico gioco del tris sullo stesso dispositivo, con nomi personalizzabili, storico delle partite e contatore delle vittorie.`,
    overview: `TicTacToe è una web app moderna e intuitiva che ripropone il celebre gioco del tris in versione digitale. Pensata per due giocatori sullo stesso dispositivo, l'app permette di personalizzare i nomi dei partecipanti e gestisce automaticamente i turni di gioco. Oltre al semplice gameplay, è stata integrata una tabella che mostra i risultati delle vittorie accumulate da ciascun giocatore e uno storico delle partite che viene aggiornato dinamicamente al termine di ogni sfida. Grazie a un'interfaccia minimal ma funzionale, l'esperienza risulta fluida e coinvolgente, rendendo il progetto un ottimo esercizio pratico di sviluppo front-end con React.
    
    L'applicazione è stata sviluppata per esercitarsi con lo stack moderno del front-end, in particolare React e Vite, con un'attenzione particolare alla gestione dello stato e all'aggiornamento dell'interfaccia in tempo reale.

    La struttura del progetto è pensata per essere semplice, scalabile e facilmente estendibile con funzionalità future (es. modalità giocatore vs computer). L'interfaccia unisce componenti React riutilizzabili con uno stile pulito basato su CSS e Bootstrap, garantendo un approccio sia didattico che professionale.`,
    technicalDetails: [
      {
        type: `Gestione stato`,
        description: `Utilizzo di React per la gestione dinamica dello stato e dei componenti`,
      },
      {
        type: `Alternanza del turno`,
        description: `Alternarsi della fase di gioco tra i due giocatori`,
      },
      {
        type: `Tabella punteggi`,
        description: `Tabella punteggi persistente durante la sessione`,
      },
      {
        type: `Cronologia dinamica`,
        description: `Presenza di una cronologia dinamica e aggiornata delle partite`,
      },
    ],
    challenges: [
      `Definizione di una logica chiara per la gestione dei turni e la verifica delle condizioni di vittoria`,
      `Aggiornamento dello stato globale senza errori o conflitti tra componenti`,
      `Creazione e aggiornamento in tempo reale dello storico delle partite`,
      `Mantenere l'interfaccia pulita e intuitiva, evitando sovraccarichi visivi`,
      `Garantire che il contatore vittorie si aggiornasse correttamente al termine di ogni partita`,
    ],
    solutions: [
      `Utilizzo degli hook di React (useState, useEffect) per gestire lo stato e aggiornare l'interfaccia al variare delle mosse`,
      `Separazione della logica di gioco in funzioni dedicate per mantenere il codice leggibile e manutenibile`,
      `Aggiornamento dello storico partite tramite array gestiti nello stato e renderizzati dinamicamente`,
      `Strutturazione dei componenti React in modo modulare, migliorando la chiarezza del progetto`,
      `Adozione di uno stile minimale con CSS e Bootstrap per favorire la chiarezza visiva e l'usabilità`,
    ],
    releaseDate: `2024/11`,
    highlighted: false,
    technologies: ['react', 'vite', 'html', 'css', 'javascript', 'bootstrap'],
    repoUrl: `https://github.com/Gianlu201/TicTacToe`,
    demoUrl: `https://tic-tac-toe-phi.vercel.app/`,
    videoDemoUrl: undefined,
    coverImgUrl: `/images/projects/ticTacToe/coverTicTacToe.png`,
    img1url: `/images/projects/ticTacToe/ticTacToe1.jpg`,
    img2url: `/images/projects/ticTacToe/ticTacToe2.jpg`,
    img3url: `/images/projects/ticTacToe/ticTacToe3.jpg`,
    img4url: `/images/projects/ticTacToe/ticTacToe4.jpg`,
  },

  // Tombolone
  {
    title: `Tombolone`,
    category: `Applicazione Web`,
    description: `Tombolone è una web app interattiva che porta la tradizione della tombola direttamente nel browser. Permette di estrarre numeri casuali, visualizzare in tempo reale la cronologia delle estrazioni e seguire l'avanzamento sul classico tabellone digitale.`,
    overview: `Tombolone nasce come versione digitale della classica tombola, con l'obiettivo di rendere il gioco più accessibile e immediato senza bisogno di cartelle cartacee o estrazioni manuali.
    
    La web app consente di effettuare estrazioni completamente randomiche e tiene traccia dei numeri già usciti, mostrandoli evidenziati su un tabellone interattivo che riproduce la griglia tradizionale.

    Un elemento distintivo è la cronologia degli ultimi tre numeri estratti, che aiuta i giocatori a seguire il flusso delle estrazioni in tempo reale. Il progetto è stato pensato per essere semplice da usare, responsive e fruibile da qualsiasi dispositivo, rendendo la tombola più immediata e moderna.`,
    technicalDetails: [
      {
        type: `Estrazione casuale`,
        description: `Estrazione casuale dei numeri del gioco della tombola`,
      },
      {
        type: `Tabellone digitale`,
        description: `I numeri estratti vengono mostrati graficamente sul tabellone`,
      },
      {
        type: `Storico delle estrazioni`,
        description: `Cronologia ordinata delle estrazioni che mostra gli ultimi numeri usciti`,
      },
      {
        type: `UX semplice`,
        description: `Applicazione progettata per essere intuitiva e immediata nel suo utilizzo`,
      },
    ],
    challenges: [
      `Garantire l'estrazione casuale senza ripetizioni`,
      `Aggiornare in tempo reale sia la cronologia che il tabellone senza rallentamenti`,
      `Mantenere la chiarezza visiva della griglia, evitando sovraccarichi grafici`,
      `Assicurare la corretta responsività del tabellone su dispositivi con schermi diversi`,
      `Organizzare il codice JS in modo leggibile e scalabile per futuri miglioramenti`,
    ],
    solutions: [
      `Implementazione di un array di controllo per monitorare i numeri già estratti ed evitare duplicati`,
      `Utilizzo di funzioni modulari in JavaScript per separare logica di estrazione, aggiornamento cronologia e aggiornamento del tabellone`,
      `Applicazione di classi CSS dinamiche per evidenziare i numeri già usciti senza ridisegnare l'intera griglia`,
      `Ottimizzazione del layout con un approccio mobile-first per mantenere la leggibilità anche su schermi ridotti`,
      `Struttura del codice predisposta per integrare facilmente nuove feature come la generazione delle cartelle e i temi grafici personalizzati`,
    ],
    releaseDate: `2024/11`,
    highlighted: false,
    technologies: ['html', 'css', 'javascript', 'bootstrap'],
    repoUrl: `https://github.com/Gianlu201/Tombolone`,
    demoUrl: `https://tombolone.vercel.app/`,
    videoDemoUrl: undefined,
    coverImgUrl: `/images/projects/tombolone/coverTombolone.png`,
    img1url: `/images/projects/tombolone/tombolone1.jpg`,
    img2url: `/images/projects/tombolone/tombolone2.jpg`,
    img3url: undefined,
    img4url: undefined,
  },

  // SimpleToDoList
  {
    title: `Simple ToDoList`,
    category: `Applicazione Web`,
    description: `Una To-Do List semplice e intuitiva, sviluppata con HTML, CSS e JavaScript, che permette di gestire attività quotidiane con un'interfaccia pulita e responsiva.`,
    overview: `La Simple To-Do List è una web app minimalista pensata per esercitarsi con lo stack base dello sviluppo frontend (HTML, CSS e JavaScript) e allo stesso tempo offrire un piccolo strumento utile.

    L'applicazione consente di inserire nuove attività, segnarle come completate o riattivarle con un semplice clic, nonché eliminarle definitivamente. Ogni modifica aggiorna dinamicamente l'interfaccia, mantenendo un design lineare e intuitivo. È stata posta particolare attenzione alla responsività e alla user experience, così da garantire un utilizzo fluido sia su desktop che su dispositivi mobili.`,
    technicalDetails: [
      {
        type: `Manipolazione del DOM`,
        description: `Lista aggiornata tramite la manipolazione degli elementi del DOM`,
      },
      {
        type: `Feedback visivo`,
        description: `Sistema di feedback visivo per completamento/riattivazione delle attività`,
      },
      {
        type: `Contatore dinamico`,
        description: `Contatore dinamico legato al numero di task totali e completate`,
      },
      {
        type: `UX semplice`,
        description: `Applicazione progettata per essere intuitiva e immediata nel suo utilizzo`,
      },
    ],
    challenges: [
      `Gestione della sincronizzazione dello stato dei task tra completati, riattivati e rimossi`,
      `Creazione di una UI chiara e reattiva, che non risultasse confusa anche con molte attività`,
      `Implementazione di un contatore dinamico sempre aggiornato in base alle azioni dell'utente`,
      `Progettazione di un sistema di feedback immediato`,
      `Ottimizzazione della manipolazione del DOM per evitare ridondanze di codice`,
    ],
    solutions: [
      `Introduzione di funzioni modulari in JavaScript per separare le varie logiche (aggiunta, completamento, rimozione, contatore)`,
      `Utilizzo di classi CSS dinamiche per gestire lo stato grafico delle attività`,
      `Implementazione di un controllo condizionale che mostra o nasconde il messaggio di avviso`,
      `Adozione di un approccio mobile-first nella stesura del CSS per garantire la responsività`,
    ],
    releaseDate: `2024/11`,
    highlighted: false,
    technologies: ['html', 'css', 'javascript', 'bootstrap'],
    repoUrl: `https://github.com/Gianlu201/Simple_ToDoList`,
    demoUrl: `https://simple-to-do-list-chi.vercel.app/`,
    videoDemoUrl: undefined,
    coverImgUrl: `/images/projects/simpleToDoList/coverToDoList.png`,
    img1url: `/images/projects/simpleToDoList/simpleToDoList1.jpg`,
    img2url: `/images/projects/simpleToDoList/simpleToDoList2.jpg`,
    img3url: `/images/projects/simpleToDoList/simpleToDoList3.jpg`,
    img4url: `/images/projects/simpleToDoList/simpleToDoList4.jpg`,
  },

  // ProjectName
  // {
  //   title: ``,
  //   category: ``,
  //   description: ``,
  //   overview: ``,
  //   technicalDetails: [],
  //   challenges: [],
  //   solutions: [],
  //   releaseDate: ``,
  //   highlighted: false,
  //   technologies: [],
  //   repoUrl: ``,
  //   demoUrl: ``,
  //   videoDemoUrl: ``,
  //   coverImgUrl: ``,
  //   img1url: ``,
  //   img2url: ``,
  //   img3url: ``,
  //   img4url: ``,
  // },
];
