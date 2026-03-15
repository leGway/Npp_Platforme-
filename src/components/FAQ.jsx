import { useState } from 'react';

export default function FAQ() {
  // On gère l'état pour savoir quelle question est ouverte (null = aucune)
  const [questionActive, setQuestionActive] = useState(null);

  // Les questions fréquentes (Tu pourras les adapter à ton offre exacte)
  const faqs = [
    {
      id: 1,
      question: "Combien de temps faut-il pour créer un site internet ?",
      reponse: "Cela dépend de la complexité du projet. Un site vitrine classique prend généralement entre 3 et 4 semaines, tandis qu'une plateforme e-commerce ou sur-mesure peut demander 2 à 3 mois. Nous définissons un planning précis dès le premier rendez-vous."
    },
    {
      id: 2,
      question: "Vais-je être propriétaire de mon site web ?",
      reponse: "Absolument. Contrairement à certaines agences qui vous lient avec des abonnements complexes, chez NEOP+, une fois le site livré et facturé, vous en êtes l'unique propriétaire (code source, nom de domaine, hébergement)."
    },
    {
      id: 3,
      question: "Faites-vous aussi la maintenance et les mises à jour ?",
      reponse: "Oui ! Nous proposons des forfaits de maintenance évolutive et préventive pour assurer la sécurité de votre site, faire les mises à jour techniques et vous accompagner sur les petites modifications du quotidien."
    },
    {
      id: 4,
      question: "Comment garantissez-vous des résultats sur le trafic ?",
      reponse: "Nous basons notre approche sur la Data et le SEO (référencement naturel). Avant de coder, nous auditons votre marché et vos concurrents pour structurer le site de manière à plaire aux algorithmes de Google et à vos futurs clients."
    }
  ];

  // Fonction pour ouvrir/fermer une question
  const gererClic = (id) => {
    // Si on clique sur la question déjà ouverte, on la ferme (null), sinon on l'ouvre
    setQuestionActive(questionActive === id ? null : id);
  };

  return (
    // Fond blanc pur pour un style très propre et lisible
    <section className="py-24 bg-white text-neopBleuNuit" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* En-tête de la FAQ */}
        <div className="text-center mb-16">
          <span className="text-neopTurquoise font-bold tracking-widest uppercase text-sm mb-2 block">
            Des questions ?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Foire Aux <span className="text-neopJaune">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Tout ce que vous devez savoir avant de décoller avec NEOP+.
          </p>
        </div>

        {/* Liste des questions */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const estOuvert = questionActive === faq.id;

            return (
              <div 
                key={faq.id} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${estOuvert ? 'border-neopTurquoise shadow-md' : 'border-gray-200 hover:border-neopTurquoise'}`}
              >
                {/* Le bouton de la question */}
                <button 
                  onClick={() => gererClic(faq.id)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none bg-white"
                >
                  <h3 className={`font-bold text-lg pr-4 transition-colors ${estOuvert ? 'text-neopTurquoise' : 'text-neopBleuNuit'}`}>
                    {faq.question}
                  </h3>
                  
                  {/* L'icône + ou - */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${estOuvert ? 'border-neopTurquoise bg-neopTurquoise text-white rotate-180' : 'border-gray-300 text-gray-500'}`}>
                    {estOuvert ? '−' : '+'}
                  </div>
                </button>

                {/* La réponse (qui se déroule) */}
                <div 
                  className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${estOuvert ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="w-full h-px bg-gray-100 mb-6"></div> {/* Petite ligne de séparation */}
                  <p className="text-gray-600 leading-relaxed">
                    {faq.reponse}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Petit bloc de réassurance en bas de la FAQ */}
        <div className="mt-12 text-center bg-neopGrisClair rounded-2xl p-8 border border-gray-200">
          <p className="text-lg font-semibold mb-2">Vous avez une autre question ?</p>
          <p className="text-gray-600 mb-6">Notre équipe est là pour vous répondre rapidement.</p>
          <button className="bg-neopBleuNuit text-white font-bold py-3 px-8 rounded-full hover:bg-neopTurquoise transition-colors shadow-lg">
            Poser ma question
          </button>
        </div>

      </div>
    </section>
  );
}