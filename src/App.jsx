import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Univers from './components/Univers'; // 👈 On importe le nouveau composant

function App() {
  return (
    <div className="bg-neopGrisClair min-h-screen font-sans relative">
      <Navbar />
      <Hero />
      <Univers /> {/* 👈 On l'affiche juste en dessous de Hero */}
    </div>
  );
}

export default App;