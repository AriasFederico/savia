import './App.css';
import {
  AboutSection,
  CoverageSection,
  CtaSection,
  FooterSection,
  Header,
  HeroSection,
  LocationSection,
  ModalitiesSection,
  OfficeSection,
  ServicesSection,
  TestimonialsSection,
} from './components/layout';

const phone_number = '1234567890';

const buildWaLink = (message) =>
  `https://wa.me/${phone_number}?text=${encodeURIComponent(message)}`;

function App() {
  return (
    <>
      <Header buildWaLink={buildWaLink} />
      <HeroSection buildWaLink={buildWaLink} />
      <AboutSection />
      <ServicesSection buildWaLink={buildWaLink} />
      <ModalitiesSection />
      <CoverageSection />
      <OfficeSection />
      <LocationSection />
      <TestimonialsSection />
      <CtaSection buildWaLink={buildWaLink} />
      <FooterSection />
    </>
  );
}

export default App;
