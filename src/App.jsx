import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import MobileStickyBar from './components/layout/MobileStickyBar.jsx';
import Hero from './components/sections/Hero.jsx';
import TrustStrip from './components/sections/TrustStrip.jsx';
import ServicesSection from './components/sections/ServicesSection.jsx';
import GuaranteeSection from './components/sections/GuaranteeSection.jsx';
import ProcessSection from './components/sections/ProcessSection.jsx';
import CoverageSection from './components/sections/CoverageSection.jsx';
import TestimonialSection from './components/sections/TestimonialSection.jsx';
import FaqSection from './components/sections/FaqSection.jsx';
import UrgencyBanner from './components/sections/UrgencyBanner.jsx';
import { WhatsAppIcon } from './components/shared/InlineIcons.jsx';
import { brandConfig } from './data/content.js';

function App() {
  const cleanPhone = brandConfig.phoneCall.replace(/\D/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hola ${brandConfig.name}, necesito consultar por un servicio de gasfitería.`)}`;

  return (
    <>
      <div className="demo-badge">
        <span className="demo-pill">Plantilla Demo</span>
        <span>Sitio web modelo para <b>{brandConfig.name}</b> · Teléfonos, zonas y textos 100% personalizables</span>
      </div>

      <Header />

      <main>
        <Hero />
        <TrustStrip />
        <ServicesSection />
        <GuaranteeSection />
        <ProcessSection />
        <CoverageSection />
        <TestimonialSection />
        <FaqSection />
        <UrgencyBanner />
      </main>

      <Footer />

      <MobileStickyBar />

      <a
        className="wa-float"
        href={waUrl}
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
