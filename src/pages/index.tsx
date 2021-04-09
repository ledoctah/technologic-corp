import Head from 'next/head';

import { AboutUs } from '../components/AboutUs';
import { ContactsSection } from '../components/ContactsSection';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ScrollTop } from '../components/ScrollTop';
import { ServicesSection } from '../components/ServicesSection';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Home | Techno Logic</title>
      </Head>

      <Header />

      <Hero />

      <ServicesSection />

      <AboutUs />

      <ContactsSection />

      <Footer />

      <ScrollTop />
    </>
  );
}
