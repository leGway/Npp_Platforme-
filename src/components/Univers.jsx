import { useState } from 'react';
import imageAstronaute from '../assets/astronaute.png';
import { ArrowRight } from 'lucide-react';

export default function Univers() {
  // Syntaxe avec point-virgule pour la déstructuration
  const [ongletActif, setOngletActif] = useState(0);

  const services = [
    { id: 0, titre: "Univers Web", description: "Création de sites internet vitrines et e-commerce ultra-performants, optimisés pour la conversion et le SEO naturel." },
    { id: 1, titre: "Univers Data & IA", description: "Exploitez la puissance de vos données avec nos agents IA et nos solutions d'intégration sur-mesure." },
    { id: 2, titre: "Univers CRM", description: "NEOP+ vous accompagne dans l'intégration et l'optimisation de votre CRM pour booster vos ventes." },
    { id: 3, titre: "Univers Studio", description: "Design UI/UX, création de contenu visuel et production vidéo pour sublimer votre image de marque." }
  ];

  return (
    <section className="py-24 bg-neopGrisClair text-neopBleuNuit overflow-x-hidden relative" id="univers">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <span className="text-neopTurquoise font-bold tracking-widest uppercase text-sm mb-2 block">
            Votre parcours
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Nos Domaines d'Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour accompagner votre transformation digitale de A à Z.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* BLOC GAUCHE : L'Astronaute */}
          <div className="w-full lg:w-1/2 flex justify-center relative lg:sticky top-24">
            <div className="relative w-full max-w-md aspect-square bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-neopTurquoise z-10 overflow-hidden">
              <img 
                src={imageAstronaute} 
                alt="Illustration des univers NEOP+" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="absolute top-10 right-10 w-16 h-16 bg-neopJaune rounded-full shadow-lg z-20 animate-bounce"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-neopBleuNuit rounded-full shadow-lg z-0"></div>
          </div>

          {/* BLOC DROITE : L'Accordéon */}
          <div className="w-full lg:w-1/2 space-y-4">
            
            {/* Utilisation du point-virgule pour les arguments de la fonction map */}
            {services.map((service, index) => {
              const estOuvert = ongletActif === service.id;

              return (
                <div 
                  key={service.id} 
                  onClick={() => setOngletActif(service.id)}
                  className={`relative transition-all duration-300 cursor-pointer border-l-4 z-10
                    ${estOuvert ? 'border-neopJaune' : 'bg-gray-200 border-transparent hover:bg-gray-300 rounded-2xl'}`}
                >
                  
                  {estOuvert && (
                    <div className="absolute top-0 bottom-0 left-0 w-[100vw] bg-white -z-10 rounded-l-2xl shadow-xl"></div>
                  )}
                  
                  <div className="relative z-20 px-8 py-6">
                    <div className="flex justify-between items-center">
                      <h3 className={`text-xl font-bold ${estOuvert ? 'text-neopTurquoise' : 'text-neopBleuNuit'}`}>
                        {service.titre}
                      </h3>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${estOuvert ? 'rotate-180 bg-neopTurquoise text-white' : 'bg-white text-neopBleuNuit'}`}>
                        ↓
                      </div>
                    </div>
                    
                    {estOuvert && (
                      <div className="pt-6 animate-fade-in-up">
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* LE BOUTON MAGIQUE QUI DESCEND VERS LA STACK TECHNIQUE */}
                        <a 
                          href="#stack-technique" 
                          className="inline-flex items-center gap-2 bg-neopJaune text-neopBleuNuit font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-max"
                        >
                          Découvrir en détail <ArrowRight className="w-5 h-5" />
                        </a>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}