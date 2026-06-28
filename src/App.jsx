import useReveal from './hooks/useReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Strip from './components/Strip';
import About from './components/About';
import Menu from './components/Menu';
import Why from './components/Why';
import Gallery from './components/Gallery';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <Strip />
      <About />
      <Menu />
      <Why />
      <Gallery />
      <Quote />
      <Contact />
      <Footer />
      <FloatingWA />
    </>
  );
}
