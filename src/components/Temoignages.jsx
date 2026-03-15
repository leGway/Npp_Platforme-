export default function Temoignages() {
  
  // Base de données des avis clients
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

  // Fonction pour générer les étoiles facilement
  const afficherEtoiles = (note) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < note ? "text-neopJaune" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    // On repasse sur un fond clair pour contraster avec la section précédente
    <section className="py-24 bg-neopGrisClair text-neopBleuNuit" id="temoignages">
      <div className="container mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="text-neopTurquoise font-bold tracking-widest uppercase text-sm mb-2 block">
            Preuve sociale
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Ils ont propulsé leur <span className="text-neopBleuNuit border-b-4 border-neopJaune">croissance</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
            Ne nous croyez pas sur parole, écoutez plutôt ce que nos clients disent de notre collaboration.
          </p>
        </div>

        {/* Grille des témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {avisClients.map((avis) => (
            <div 
              key={avis.id} 
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative border border-gray-100"
            >
              {/* Le petit style "guillemet" en haut à gauche pour le design */}
              <div className="absolute top-6 right-8 text-6xl text-gray-200 font-serif leading-none">
                "
              </div>
              
              {/* Les étoiles */}
              <div className="text-xl mb-6">
                {afficherEtoiles(avis.note)}
              </div>
              
              {/* Le texte de l'avis */}
              <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed">
                "{avis.texte}"
              </p>
              
              {/* Informations du client */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                {/* Avatar généré avec les initiales */}
                <div className="w-12 h-12 rounded-full bg-neopBleuNuit text-white flex items-center justify-center font-bold text-lg">
                  {avis.nom.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-neopBleuNuit">{avis.nom}</h4>
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