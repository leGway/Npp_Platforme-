import { useState } from 'react';

export default function Navbar() {
    return (
        // Une barre de navigation fixe en haut, transparente avec un léger flou
        <header className="absolute top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center">
            
            {/* Le Logo NEOP+ */}
            <div className="flex items-center cursor-pointer">
                {/* Tu pourras remplacer ce texte par une balise <img src="..." /> plus tard */}
                <span className="text-3xl font-extrabold text-white tracking-wider">
                    NEOP<span className="text-neopTurquoise">+</span>
                </span>
            </div>

            {/* Les liens de navigation (masqués sur mobile pour l'instant) */}
            <nav className="hidden md:flex space-x-8 text-sm font-semibold text-neopGrisClair">
                <a href="#expertises" className="hover:text-neopJaune transition-colors">Expertises</a>
                <a href="#solutions" className="hover:text-neopJaune transition-colors">Solutions</a>
                <a href="#propos" className="hover:text-neopJaune transition-colors">À propos</a>
            </nav>

            {/* Bouton Contact en haut à droite */}
            <div className="hidden md:block">
                <button className="bg-neopJaune text-neopBleuNuit font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors shadow-md">
                    Nous contacter
                </button>
            </div>

            {/* Menu burger pour mobile (visuel uniquement pour l'instant) */}
            <div className="md:hidden text-white text-2xl cursor-pointer">
                <i className="fa-solid fa-bars"></i> ≡
            </div>

        </header>
    );
}