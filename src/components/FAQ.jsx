import { useState } from 'react';
import { ChevronDown, ArrowRight, MessageCircleQuestion } from 'lucide-react';

export default function FAQ() {
  const [questionActive, setQuestionActive] = useState(null);

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

  const gererClic = (id) => {
    setQuestionActive(questionActive === id ? null : id);
  };

  return (
    <section className="py-24 bg-white text-neopBleuNuit relative" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16 md:mb-20">
          <span className="text-neopTurquoise font-bold tracking-widest uppercase text-sm mb-3 block">
            Des questions ?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Foire Aux <span className="text-neopJaune">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Tout ce que vous devez savoir avant de décoller avec NEOP+.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq) => {
            const estOuvert = questionActive === faq.id;

            return (
              <div 
                key={faq.id} 
                className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${estOuvert ? 'border-neopTurquoise bg-neopTurquoise/5 shadow-md' : 'border-gray-100 hover:border-gray-300 bg-white'}`}
              >
                <button 
                  onClick={() => gererClic(faq.id)}
                  className="w-full px-6 py-6 md:px-8 flex justify-between items-center text-left focus:outline-none"
                >
                  <h3 className={`font-bold text-lg pr-8 transition-colors ${estOuvert ? 'text-neopTurquoise' : 'text-neopBleuNuit'}`}>
                    {faq.question}
                  </h3>
                  
                  {/* Icône Chevron avec rotation fluide */}
                  <div className={`flex-shrink-0 transition-transform duration-300 ${estOuvert ? 'text-neopTurquoise rotate-180' : 'text-gray-400 rotate-0'}`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>

                {/* Le bloc de réponse */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${estOuvert ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0">
                    <p className="text-gray-600 leading-relaxed border-t border-gray-200/50 pt-6">
                      {faq.reponse}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloc CTA (Appel à l'action) optimisé en lien */}
        <div className="mt-16 text-center bg-gray-50 rounded-3xl p-10 border border-gray-100 shadow-sm relative overflow-hidden group">
          <MessageCircleQuestion className="absolute -bottom-6 -right-6 w-32 h-32 text-gray-200 opacity-50 group-hover:scale-110 transition-transform duration-500" />
          
          <div className="relative z-10">
            <h4 className="text-2xl font-bold mb-3">Vous avez un projet spécifique ?</h4>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Notre équipe d'experts est disponible pour analyser vos besoins et vous proposer une stratégie sur-mesure.
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-neopBleuNuit text-white font-bold py-4 px-10 rounded-full hover:bg-neopTurquoise transition-all duration-300 shadow-lg transform hover:-translate-y-1"
            >
              Poser ma question <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}