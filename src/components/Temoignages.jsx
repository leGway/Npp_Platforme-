import { Star, Quote } from 'lucide-react';

export default function Temoignages() {
  
  const avisClients = [
    {
      id: 1,
      nom: "Sophie Laurent",
      poste: "Directrice Marketing",
      entreprise: "E-commerce Beauté",
      texte: "Depuis la refonte de notre site par NEOP+, notre taux de conversion a bondi de 40% en seulement 3 mois. Une équipe à l'écoute et ultra-réactive.",
      note: 5
    },
    {
      id: 2,
      nom: "Marc Dubois",
      poste: "Fondateur",
      entreprise: "Cabinet Conseil MD",
      texte: "L'intégration de notre nouveau CRM a littéralement transformé notre façon de prospecter. L'expertise Data de l'agence est un vrai game changer.",
      note: 5
    },
    {
      id: 3,
      nom: "Julie Vidal",
      poste: "CEO",
      entreprise: "Startup Tech-Innov",
      texte: "Un accompagnement sur-mesure. Le pôle Studio a su cerner notre ADN pour créer une identité visuelle qui nous démarque vraiment de la concurrence.",
      note: 5
    }
  ];

  const afficherEtoiles = (note) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 ${index < note ? "text-neopJaune fill-neopJaune" : "text-gray-300 fill-transparent"}`} 
      />
    ));
  };

  return (
    <section className="py-24 bg-neopGrisClair text-neopBleuNuit relative overflow-hidden" id="temoignages">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <span className="text-neopTurquoise font-bold tracking-widest uppercase text-sm mb-3 block">
            Preuve sociale
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ils ont propulsé leur <span className="text-neopJaune bg-neopBleuNuit px-4 py-1 rounded-xl">croissance</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ne nous croyez pas sur parole, écoutez plutôt ce que nos clients disent de notre collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {avisClients.map((avis) => (
            <div 
              key={avis.id} 
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 relative border border-gray-100 group flex flex-col h-full"
            >
              {/* L'icône guillemet en arrière-plan (lucide-react) */}
              <Quote className="absolute top-8 right-8 w-16 h-16 text-gray-100 rotate-180 z-0 transition-transform duration-500 group-hover:scale-110" />
              
              <div className="flex gap-1 mb-8 relative z-10">
                {afficherEtoiles(avis.note)}
              </div>
              
              {/* flex-grow pousse les infos client vers le bas si le texte est court */}
              <p className="text-gray-700 italic mb-10 relative z-10 leading-relaxed text-lg flex-grow">
                "{avis.texte}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-auto relative z-10">
                <div className="w-14 h-14 rounded-full bg-neopBleuNuit text-white flex items-center justify-center font-bold text-xl shadow-inner">
                  {avis.nom.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-neopBleuNuit text-lg">{avis.nom}</h4>
                  <p className="text-sm text-gray-500">{avis.poste} • <span className="text-neopTurquoise font-semibold">{avis.entreprise}</span></p>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}