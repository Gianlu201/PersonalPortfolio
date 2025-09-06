import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Background from './components/Background';
import InfosBar from './components/InfosBar';
import Navbar from './components/Navbar';
import About from './pages/About';
import Certifications from './pages/Certifications';
import Contacts from './pages/Contacts';
import BottomNavbar from './components/BottomNavbar';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import { useRef } from 'react';

function App() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <BrowserRouter>
      <ScrollToTop scrollRef={scrollRef} behavior='auto' />
      <div className='relative'>
        <Background />
        <div
          ref={scrollRef}
          className='absolute top-0 left-0 z-20 w-full h-screen overflow-y-auto'
        >
          <div className='grid grid-cols-4 gap-6 md:gap-10 max-w-6xl mx-6 xl:mx-auto md:py-8 py-5 pb-24'>
            {/* Barra sinistra per informazioni di contatto */}
            <InfosBar />

            {/* Barra destra per navigazione pagine */}
            <section className='col-span-4 xl:col-span-3 bg-linear-to-br from-background-light to-background border border-gray-600 rounded-3xl overflow-hidden'>
              <Navbar />
              <div className='px-8 pt-8 md:pt-4 pb-8'>
                <Routes>
                  <Route index element={<Homepage />} />
                  <Route path='/chi-sono' element={<About />} />
                  <Route path='/progetti' element={<Projects />} />
                  <Route
                    path='/progetti/:projectName'
                    element={<ProjectDetails />}
                  />
                  <Route path='/certificati' element={<Certifications />} />
                  <Route path='/contatti' element={<Contacts />} />

                  <Route path='/*' element={<NotFound />} />
                </Routes>
              </div>
            </section>
          </div>

          <BottomNavbar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
