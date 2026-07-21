import useReveal from './hooks/useReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CallBar from './components/CallBar';
import About from './components/About';
import Wholesome from './components/Wholesome';
import Featured from './components/Featured';
import Menu from './components/Menu';
import Why from './components/Why';
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
      <Menu />
      <CallBar />
      <Wholesome />
      <Featured />
      <Why />
      <Quote />
      <About />
      <Contact />
      <Footer />
      <FloatingWA />
    </>
  );
}
