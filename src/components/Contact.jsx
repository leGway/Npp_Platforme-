import { useState } from 'react';
// 1. IMPORTATION DES ICÔNES PRO
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nouveau Lead reçu :" , formData);
    alert("Merci ! Votre message a bien été envoyé. Notre équipe d'experts vous recontacte sous 24h.");
  };

  return (
    <section className="py-24 bg-neopGrisClair relative" id="contact">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-neopTurquoise font-bold tracking-widest uppercase text-sm mb-2 block">
            Passez à l'action
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neopBleuNuit mb-4">
            Prêt à booster votre <span className="text-neopJaune">croissance</span> ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Laissez-nous un message avec les détails de votre projet. Un expert NEOP+ vous recontactera très rapidement pour un premier audit gratuit.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* BLOC GAUCHE */}
          <div className="lg:w-2/5 bg-neopBleuNuit text-white p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-neopTurquoise rounded-full opacity-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-neopJaune rounded-full opacity-10 -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Contactez-nous</h3>
              <p className="text-gray-300 mb-12 leading-relaxed">
                Que ce soit pour une refonte web, une stratégie Data ou l'intégration d'un CRM, notre équipe est prête à relever le défi.
              </p>
              
              <div className="space-y-6">
                
                {/* 2. UTILISATION DES ICÔNES ICI */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-neopJaune">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Téléphone</p>
                    <p className="font-semibold">+33 1 00 00 00 00</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-neopTurquoise">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold">contact@neop-plus.fr</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Agence</p>
                    <p className="font-semibold">Paris & Île-de-France</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* BLOC DROITE : Le Formulaire */}
          <div className="lg:w-3/5 p-10 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                  <input type="text" id="nom" name="nom" required value={formData.nom} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-neopTurquoise outline-none" placeholder="Jean Dupont" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Adresse Email *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-neopTurquoise outline-none" placeholder="jean@entreprise.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-neopTurquoise outline-none" placeholder="06 12 34 56 78" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Sujet de votre demande *</label>
                  <select id="service" name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-neopTurquoise outline-none bg-white">
                    <option value="" disabled>Sélectionnez un univers</option>
                    <option value="Web">Création / Refonte Web</option>
                    <option value="Data">Data & Intelligence Artificielle</option>
                    <option value="CRM">Intégration CRM</option>
                    <option value="Studio">Studio (Design / Vidéo)</option>
                    <option value="Autre">Autre demande</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Parlez-nous de votre projet *</label>
                <textarea id="message" name="message" required rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-neopTurquoise outline-none resize-none" placeholder="Décrivez brièvement vos objectifs..."></textarea>
              </div>

              <button type="submit" className="w-full bg-neopJaune text-neopBleuNuit font-bold text-lg py-4 rounded-xl hover:bg-yellow-400 transition-all shadow-md flex items-center justify-center gap-3">
                Envoyer ma demande <Send className="w-5 h-5" />
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Vos données sont sécurisées et ne seront jamais partagées à des tiers.
              </p>

            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}