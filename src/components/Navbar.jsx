import { useState } from 'react';
// On importe nos icônes pour le menu mobile
import { Menu, X } from 'lucide-react'; 
import logoNeop from '../assets/logo-neop.png'; 

export default function Navbar() {
    // 1. LE STATE : On crée une variable pour savoir si le menu est ouvert (true) ou fermé (false)
    const [menuOuvert, setMenuOuvert] = useState(false);

    // 2. LES FONCTIONS : Pour changer l'état du menu
    const basculerMenu = () => {
        setMenuOuvert(!menuOuvert); // Inverse l'état actuel (ouvre si fermé; ferme si ouvert)
    };

    const fermerMenu = () => {
        setMenuOuvert(false); // Force la fermeture (très utile quand on clique sur un lien)
    };

    return (
        // J'ai enlevé le py-4 d'ici pour mieux gérer l'espacement avec le menu déroulant
        <header className="sticky top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300">
            
            {/* Le conteneur principal de la barre (Toujours visible) */}
            <div className="py-4 px-6 md:px-12 flex justify-between items-center">
                
                {/* Le Logo NEOP+ */}
                <div className="flex items-center cursor-pointer">
                    <a href="#" onClick={fermerMenu}>
                        <img 
                            src={logoNeop} 
                            alt="Logo Agence NEOP+" 
                            className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300" 
                        />
                    </a>
                </div>

                {/* Navigation PC (Cachée sur mobile avec 'hidden') */}
                <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-semibold text-neopBleuNuit">
                    <a href="#expertises" className="hover:text-neopTurquoise transition-colors">Expertises</a>
                    <a href="#accompagnement" className="hover:text-neopTurquoise transition-colors">Solutions</a>
                    <a href="#realisations" className="hover:text-neopTurquoise transition-colors">Portfolio</a>
                    <a href="#temoignages" className="hover:text-neopTurquoise transition-colors">Avis Clients</a>
                    <a href="#faq" className="hover:text-neopTurquoise transition-colors">FAQ</a>
                </nav>

                {/* Bouton Contact PC */}
                <div className="hidden md:block">
                    <a href="#contact">
                        <button className="bg-neopJaune text-neopBleuNuit font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors shadow-sm">
                            Nous contacter
                        </button>
                    </a>
                </div>

                {/* 3. LE BOUTON BURGER (Visible uniquement sur mobile) */}
                <div className="md:hidden flex items-center">
                    <button onClick={basculerMenu} className="text-neopBleuNuit focus:outline-none transition-transform hover:scale-110">
                        {/* On affiche la Croix si ouvert; sinon on affiche le Menu Burger */}
                        {menuOuvert ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>

            </div>

            {/* 4. LE MENU DÉROULANT MOBILE (Conditionnel) */}
            {/* Si menuOuvert est 'true'; on affiche ce bloc div */}
            {menuOuvert && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl absolute w-full left-0 origin-top animate-fade-in-down">
                    <nav className="flex flex-col px-6 pt-4 pb-8 space-y-4 text-neopBleuNuit font-semibold text-lg text-center">
                        {/* On ajoute onClick={fermerMenu} sur chaque lien pour que le menu se ferme après avoir cliqué ! */}
                        <a href="#expertises" onClick={fermerMenu} className="hover:text-neopTurquoise py-2">Expertises</a>
                        <a href="#accompagnement" onClick={fermerMenu} className="hover:text-neopTurquoise py-2">Solutions</a>
                        <a href="#realisations" onClick={fermerMenu} className="hover:text-neopTurquoise py-2">Portfolio</a>
                        <a href="#temoignages" onClick={fermerMenu} className="hover:text-neopTurquoise py-2">Avis Clients</a>
                        <a href="#faq" onClick={fermerMenu} className="hover:text-neopTurquoise py-2">FAQ</a>
                        
                        <a href="#contact" onClick={fermerMenu} className="pt-4">
                            <button className="w-full bg-neopJaune text-neopBleuNuit font-bold py-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-md">
                                Démarrer mon projet
                            </button>
                        </a>
                    </nav>
                </div>
            )}

        </header>
    );
}