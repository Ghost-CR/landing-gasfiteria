import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import CoverageSection from './components/sections/CoverageSection.jsx';
import Hero from './components/sections/Hero.jsx';
import ProcessSection from './components/sections/ProcessSection.jsx';
import ServicesSection from './components/sections/ServicesSection.jsx';
import TestimonialSection from './components/sections/TestimonialSection.jsx';
import TrustStrip from './components/sections/TrustStrip.jsx';
import UrgencyBanner from './components/sections/UrgencyBanner.jsx';
import { WhatsAppIcon } from './components/shared/InlineIcons.jsx';

function App() {
  return (
    <>
      <div className="demo-badge">
        Página de demostración — diseño de <b>portafolio</b>, negocio ficticio, no operativo
      </div>

      <Header />

      <main>
        <Hero />
        <TrustStrip />
        <ServicesSection />
        <ProcessSection />
        <CoverageSection />
        <UrgencyBanner />
        <TestimonialSection />
      </main>

      <Footer />

      <a
        className="wa-float"
        href="https://wa.me/56900000000?text=Hola%2C%20necesito%20un%20gasfiter"
        aria-label="Escribir por WhatsApp"
        target="_blank"
        rel="noopener"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}

export default App;
