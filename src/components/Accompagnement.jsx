// 1. IMPORTATION DES ICÔNES PRO
import { Handshake, Bot, Zap } from 'lucide-react';

export default function Accompagnement() {
  
  // Notre base de données locale mise à jour avec les icônes pro
  const avantages = [
    { 
      id: 1, 
      titre: "Gagnant - Gagnant", 
      description: "Notre succès dépend du vôtre. Nous nous engageons sur des résultats concrets pour bâtir une collaboration pérenne et rentable.", 
      // 2. MODIFICATION ICI : On stocke le composant d'icône, pas du texte
      icone: Handshake 
    },
    { 
      id: 2, 
      titre: "Votre commercial 3.0", 
      description: "Nous ne créons pas de simples sites vitrines, nous concevons des machines à générer des prospects qualifiés qui travaillent pour vous 24h/24.", 
      icone: Bot 
    },
    { 
      id: 3, 
      titre: "Réactivité et expérience", 
      description: "Une équipe dédiée, experte et agile. Nous nous adaptons à vos enjeux avec une rapidité d'exécution et un suivi sans faille.", 
      icone: Zap 
    }
  ];

  return (
    // Section sur fond Bleu Nuit
    <section className="py-24 bg-neopBleuNuit text-white relative overflow-hidden" id="accompagnement">
        
      {/* Éléments de design en arrière-plan */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neopTurquoise rounded-full opacity-5 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neopJaune rounded-full opacity-5 blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* En-tête de la section */}
        <div className="text-center mb-16">
          <span className="text-neopTurquoise font-bold tracking-widest uppercase text-sm mb-2 block">
            Pourquoi nous choisir
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Notre mode d'<span className="text-neopJaune">accompagnement</span>
          </h2>
        </div>

        {/* La Grille Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* La boucle magique de React */}
          {avantages.map((item) => {
            // 3. ASTUCE DE DÉVELOPPEUR : 
            // Pour afficher un composant stocké dans une variable, 
            // il faut créer une variable qui commence par une MAJUSCULE.
            const IconeComposant = item.icone;

            return (
              <div 
                key={item.id} 
                className="bg-white text-neopBleuNuit rounded-3xl p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 border-b-4 border-neopTurquoise group cursor-pointer"
              >
                {/* Conteneur de l'icône */}
                {/* J'ai enlevé 'text-3xl' qui ne sert plus à rien pour des SVGs */}
                <div className="w-16 h-16 bg-neopGrisClair rounded-2xl flex items-center justify-center mb-8 group-hover:bg-neopJaune transition-colors duration-300">
                  {/* 4. AFFICHAGE DE L'ICÔNE PRO ICI */}
                  {/* On lui donne une taille fixe (w-8 h-8) et la couleur de ton Bleu Nuit */}
                  <IconeComposant className="w-8 h-8 text-neopBleuNuit" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{item.titre}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}