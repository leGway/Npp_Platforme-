import { useState } from 'react';
import { MonitorSmartphone, BrainCircuit, Workflow, PenTool, ArrowRight } from 'lucide-react';

export default function Expertises() {
  
  // La base de données orientée "Technique et Outils"
  const services = [
    {
      id: 1,
      titre: "Ingénierie Web & Architecture",
      description: "Développement front-end et back-end sur-mesure. Nous concevons des plateformes robustes; scalables et hautement sécurisées pour soutenir votre croissance.",
      icone: MonitorSmartphone,
      tags: ["React", "Next.js", "Node.js", "Tailwind CSS"],
      couleurTheme: "text-neopTurquoise",
      bgCouleur: "bg-neopTurquoise/10",
      bordureHover: "hover:border-neopTurquoise"
    },
    {
      id: 2,
      titre: "Data Engineering & IA",
      description: "Structuration de vos lacs de données (Data Lakes) et déploiement de modèles de Machine Learning pour automatiser l'analyse de vos performances commerciales.",
      icone: BrainCircuit,
      tags: ["Python", "SQL", "Power BI", "TensorFlow"],
      couleurTheme: "text-neopJaune",
      bgCouleur: "bg-neopJaune/10",
      bordureHover: "hover:border-neopJaune"
    },
    {
      id: 3,
      titre: "Déploiement & Automatisation CRM",
      description: "Architecture de vos bases de données clients et création de workflows complexes via API pour synchroniser vos outils marketing et commerciaux en temps réel.",
      icone: Workflow,
      tags: ["HubSpot API", "Salesforce", "Make / Zapier","Webhooks"],
      couleurTheme: "text-blue-500",
      bgCouleur: "bg-blue-500/10",
      bordureHover: "hover:border-blue-500"
    },
    {
      id: 4,
      titre: "Conception UI/UX & Prototypage",
      description: "Audit d'utilisabilité (UX) et création de design systems complets pour garantir une cohérence visuelle parfaite sur l'ensemble de vos interfaces digitales.",
      icone: PenTool,
      tags: ["Figma", "Design System", "Wireframing", "A/B Testing"],
      couleurTheme: "text-purple-500",
      bgCouleur: "bg-purple-500/10",
      bordureHover: "hover:border-purple-500"
    }
  ];

  return (
    // Fond très clair pour marquer une pause visuelle avant le footer
    <section className="py-24 bg-gray-50 text-neopBleuNuit relative" id="stack-technique">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* L'En-tête orienté "Expertise Dure" */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-neopTurquoise font-bold tracking-widest uppercase text-sm mb-3 block">
            L'envers du décor
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Notre <span className="text-neopJaune bg-neopBleuNuit px-4 py-1 rounded-xl">Stack Technique</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Les technologies de pointe et les méthodologies agiles que nous déployons pour garantir la performance et la sécurité de vos projets.
          </p>
        </div>

        {/* La grille des expertises */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {services.map((service, index) => {
            const IconeService = service.icone;

            return (
              <div 
                key={service.id} 
                className={`group bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent ${service.bordureHover} flex flex-col h-full`}
              >
                
                <div className="flex items-center gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.bgCouleur} ${service.couleurTheme} group-hover:scale-110 transition-transform duration-300`}>
                    <IconeService className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.titre}</h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Le bloc des Tags Techniques */}
                <div className="mb-8">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Technologies & Outils</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-1 rounded-md border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="#contact" className={`mt-auto inline-flex items-center gap-2 font-bold ${service.couleurTheme} hover:opacity-70 transition-opacity`}>
                  Discuter de l'architecture <ArrowRight className="w-4 h-4" />
                </a>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}