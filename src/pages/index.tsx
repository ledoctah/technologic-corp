import { AboutUs } from '../components/AboutUs';
import { ContactsSection } from '../components/ContactsSection';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />

      <Hero />

      <ServicesSection />

      <AboutUs />

      <ContactsSection />

      <Footer />
    </>
  );
}
