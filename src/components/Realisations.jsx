import { useState } from 'react';

// 1. Importation de tes vraies images (depuis le dossier assets)
import imgWeb from '../assets/projet-web.jpg';
import imgData from '../assets/projet-data.jpg';
import imgCrm from '../assets/projet-crm.jpg';
import imgStudio from '../assets/projet-studio.jpg';

export default function Realisations() {
  const [filtreActif, setFiltreActif] = useState('Tous');

  const categories = ['Tous', 'Web', 'Data', 'CRM', 'Studio'];

  const projets = [
    {
      id: 1,
      titre: "Refonte E-commerce Beauté",
      categorie: "Web",
      description: "Augmentation de 45% du taux de conversion.",
      imageSrc: imgWeb // 👈 On lie la variable importée ici
    },
    {
      id: 2,
      titre: "Dashboard BI Temps Réel",
      categorie: "Data",
      description: "Centralisation des KPIs pour un grand groupe.",
      imageSrc: imgData
    },
    {
      id: 3,
      titre: "Intégration HubSpot",
      categorie: "CRM",
      description: "Automatisation de la prospection B2B.",
      imageSrc: imgCrm
    },
    {
      id: 4,
      titre: "Identité Visuelle Startup",
      categorie: "Studio",
      description: "Création logo, charte et UI/UX de l'application.",
      imageSrc: imgStudio
    }
  ];

  const projetsAffiches = filtreActif === 'Tous' 
    ? projets 
    : projets.filter(projet => projet.categorie === filtreActif);

  return (
    <section className="py-24 bg-neopBleuNuit text-white" id="realisations">
      <div className="container mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center mb-12">
          <span className="text-neopJaune font-bold tracking-widest uppercase text-sm mb-2 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Nos dernières <span className="text-neopTurquoise">réalisations</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Découvrez comment nous avons transformé les défis de nos clients en succès digitaux.
          </p>
        </div>

        {/* Les boutons de filtre */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setFiltreActif(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filtreActif === cat 
                  ? 'bg-neopJaune text-neopBleuNuit shadow-lg scale-105' 
                  : 'bg-neopGrisFonce text-gray-300 hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* La grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {projetsAffiches.map((projet) => (
            <div 
              key={projet.id} 
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl"
            >
              
              {/* 2. LA NOUVEAUTÉ EST ICI : On affiche la vraie image */}
              <div className="w-full h-80 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center bg-neopGrisFonce overflow-hidden">
                 <img 
                    src={projet.imageSrc} 
                    alt={projet.titre} 
                    className="w-full h-full object-cover" 
                 />
              </div>
              
              {/* L'overlay sombre au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="inline-block bg-neopTurquoise text-white text-xs font-bold px-3 py-1 rounded-full mb-3 w-max">
                  {projet.categorie}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {projet.titre}
                </h3>
                <p className="text-gray-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {projet.description}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Bouton Voir tout */}
        <div className="text-center mt-16">
          <button className="border-2 border-white text-white hover:bg-white hover:text-neopBleuNuit font-bold py-4 px-10 rounded-full transition-all">
            Voir tous nos projets &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}