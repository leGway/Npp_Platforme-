import { useState } from 'react';
import logoNeop from '../assets/logo-neop.png'; 

export default function Navbar() {
    return (
        <header className="sticky top-0 left-0 w-full z-50 bg-white shadow-md py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
            
            {/* Le Logo NEOP+ */}
            <div className="flex items-center cursor-pointer">
                {/* On ajoute un lien sur le logo pour remonter tout en haut du site */}
                <a href="#">
                    <img 
                        src={logoNeop} 
                        alt="Logo Agence NEOP+" 
                        className="h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300" 
                    />
                </a>
            </div>

            {/* Menu PC (Nouvelles sections ajoutées !) */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-semibold text-neopBleuNuit">
                <a href="#expertises" className="hover:text-neopTurquoise transition-colors">Expertises</a>
                <a href="#accompagnement" className="hover:text-neopTurquoise transition-colors">Solutions</a>
                <a href="#realisations" className="hover:text-neopTurquoise transition-colors">Portfolio</a>
                <a href="#temoignages" className="hover:text-neopTurquoise transition-colors">Avis Clients</a>
                <a href="#faq" className="hover:text-neopTurquoise transition-colors">FAQ</a>
            </nav>

            {/* Bouton Contact (Maintenant fonctionnel !) */}
            <div className="hidden md:block">
                <a href="#contact">
                    <button className="bg-neopJaune text-neopBleuNuit font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors shadow-sm">
                        Nous contacter
                    </button>
                </a>
            </div>

            {/* Menu burger pour mobile */}
            <div className="md:hidden text-neopBleuNuit text-2xl cursor-pointer">
                <i className="fa-solid fa-bars"></i> ≡
            </div>

        </header>
    );
}