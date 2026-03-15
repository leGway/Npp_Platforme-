import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Univers from './components/Univers';
import Accompagnement from './components/Accompagnement';
import Temoignages from './components/Temoignages';
import Realisations from './components/Realisations';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-neopGrisClair min-h-screen font-sans relative">
      <Navbar />
      <Hero />
      <Univers />
      <Accompagnement />
      <Temoignages />
      <Realisations />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;