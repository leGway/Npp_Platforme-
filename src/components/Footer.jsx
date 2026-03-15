// On importe nos icônes professionnelles
import { ArrowRight, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-neopBleuNuit text-gray-300 relative z-10 border-t-4 border-neopTurquoise">
        
        {/* 1. LE PRÉ-FOOTER (Call to Action final) */}
        <div className="bg-neopGrisFonce py-12 border-b border-gray-800">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-3xl font-extrabold text-white mb-2">Prêt à dominer votre marché ?</h3>
              <p className="text-gray-400">Ne laissez plus vos concurrents prendre vos parts de marché.</p>
            </div>
            <a href="#contact" className="bg-neopJaune text-neopBleuNuit font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-lg flex items-center gap-3 transform hover:scale-105">
              Démarrer mon projet <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* 2. LE FOOTER PRINCIPAL (La Grille) */}
        <div className="container mx-auto px-6 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Colonne 1 : La Marque */}
            <div>
              <span className="text-3xl font-extrabold text-white tracking-wider mb-6 block">
                NEOP<span className="text-neopTurquoise">+</span>
              </span>
              <p className="leading-relaxed mb-6 text-gray-400 text-sm">
                L'agence digitale experte en Web; Data & IA. Nous transformons votre présence en ligne en une machine à générer des prospects qualifiés.
              </p>
              {/* Réseaux Sociaux Pro */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-neopTurquoise hover:border-neopTurquoise hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-neopTurquoise hover:border-neopTurquoise hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-neopTurquoise hover:border-neopTurquoise hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Colonne 2 : Nos Expertises (Optimisé SEO) */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Nos Expertises</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#expertises" className="hover:text-neopJaune transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Création Site Web</a></li>
                <li><a href="#expertises" className="hover:text-neopJaune transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Stratégie Data & IA</a></li>
                <li><a href="#expertises" className="hover:text-neopJaune transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Intégration CRM</a></li>
                <li><a href="#expertises" className="hover:text-neopJaune transition-colors flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Studio Design & UI</a></li>
              </ul>
            </div>

            {/* Colonne 3 : Contact Rapide */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-neopTurquoise shrink-0" />
                  <span>Paris & Île-de-France<br/>Intervention France entière</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-neopTurquoise shrink-0" />
                  <a href="mailto:contact@neop-plus.fr" className="hover:text-white transition-colors">contact@neop-plus.fr</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-neopTurquoise shrink-0" />
                  <a href="tel:+33100000000" className="hover:text-white transition-colors">01 00 00 00 00</a>
                </li>
              </ul>
            </div>

            {/* Colonne 4 : Newsletter / Lead Magnet */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Restez informé</h4>
              <p className="text-sm text-gray-400 mb-4">Recevez nos meilleures astuces digitales une fois par mois.</p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-neopTurquoise transition-colors"
                />
                <button type="submit" className="bg-neopTurquoise text-white font-bold py-3 rounded-lg hover:bg-teal-500 transition-colors text-sm">
                  S'abonner
                </button>
              </form>
            </div>
            
          </div>

          {/* 3. LIGNE LÉGALE (Bottom Bar) */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} NEOP+. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">CGV</a>
            </div>
          </div>
          
        </div>
      </footer>

      {/* LE BOUTON WHATSAPP FLOTTANT (Inchangé car c'est un standard absolu) */}
      <a
        href="https://wa.me/33600000000" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 group"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
          Discutons de votre projet ! 👋
        </span>
        <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </>
  );
}