import Image from "next/image";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="site-content" id="content">
        <Hero />
        <Services />
        <Resume />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
