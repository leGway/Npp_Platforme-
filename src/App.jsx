// Importation de tous nos composants (Le point-virgule est de rigueur !)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Univers from './components/Univers';
import Realisations from './components/Realisations';
import Expertises from './components/Expertises';
import Temoignages from './components/Temoignages';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Si tu as créé un composant Contact; n'oublie pas de l'importer aussi !
// import Contact from './components/Contact';

function App() {
  return (
    // La classe 'scroll-smooth' est MAGIQUE pour une architecture One-Page
    <div className="font-sans antialiased text-neopBleuNuit bg-neopGrisClair scroll-smooth relative">
      
      {/* 1. La Navigation (Fixée en haut) */}
      <Navbar />
      
      {/* 2. L'Accroche (Le "Hook" visuel) */}
      <Hero />
      
      {/* 3. La Vision (Storytelling & Services de haut niveau) */}
      <Univers />
      
      {/* 4. La Preuve par l'Exemple (Le Portfolio dynamique) */}
      <Realisations />
      
      {/* 5. La Preuve Technique (Pour rassurer les profils plus Tech/CTO) */}
      <Expertises />
      
      {/* 6. La Preuve Sociale (Les avis qui font chuter les barrières psychologiques) */}
      <Temoignages />
      
      {/* 7. La Levée des Objections (Les questions fréquentes) */}
      <FAQ />

      {/* 8. L'Action Finale (Formulaire) */}
      { <Contact /> }
      
      {/* 9. Le Pied de Page (Réseaux; Mentions légales et Ultime relance) */}
      <Footer />

    </div>
  );
}

export default App;