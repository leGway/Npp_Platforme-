import { useState } from 'react';
// On ajoute MessageCircle et ChevronDown pour nos boutons
import { Users, Target, Handshake, MessageCircle, ChevronDown } from 'lucide-react';

export default function Hero() {
    const [email, setEmail] = useState("");

    const gererClic = (event) => {
        // Optionnel: On peut garder cette fonction si on veut déclencher une modale plus tard, 
        // mais pour l'instant le lien <a> fera le travail de navigation.
        console.log("Nouveau lead intéressé :" , email);
    };

    return (
        <section className="relative bg-neopBleuNuit text-white min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-32">
            
            <div className="absolute top-1/4 left-10 w-32 h-32 bg-neopTurquoise rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-20 w-40 h-40 bg-neopJaune rounded-full opacity-10 blur-3xl"></div>

            <div className="container mx-auto px-6 z-10 text-center relative">
                
                <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-neopJaune font-bold tracking-wider uppercase text-xs md:text-sm mb-8">
                    <span className="flex items-center gap-2 bg-neopJaune/10 px-3 py-1.5 rounded-full">
                        <Users className="w-4 h-4" /> + De Visiteurs
                    </span>
                    <span className="text-neopTurquoise opacity-50 hidden sm:block">•</span>
                    <span className="flex items-center gap-2 bg-neopJaune/10 px-3 py-1.5 rounded-full">
                        <Target className="w-4 h-4" /> + De Prospects
                    </span>
                    <span className="text-neopTurquoise opacity-50 hidden sm:block">•</span>
                    <span className="flex items-center gap-2 bg-neopJaune/10 px-3 py-1.5 rounded-full">
                        <Handshake className="w-4 h-4" /> + De Clients
                    </span>
                </div>

                <h1 className="text-5xl md:text-6xl md:leading-tight font-extrabold mb-6">
                    Partez à la découverte de nos univers <br className="hidden md:block" />
                    <span className="text-neopTurquoise">Web - Data - IA</span>
                </h1>

                <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
                    Embarquez dans la galaxie NEOP+; l'agence digitale capable de booster votre croissance sur l'ensemble de votre parcours de vente.
                </p>

                {/* LA NOUVELLE ZONE DES BOUTONS */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 w-full max-w-2xl mx-auto">
                    
                    {/* BOUTON PRIMAIRE : Massif; Jaune; avec icône de message */}
                    <a 
                        href="#contact" 
                        onClick={gererClic} 
                        className="w-full sm:w-auto bg-neopJaune text-neopBleuNuit font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:-translate-y-1 hover:bg-yellow-400"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Discuter avec un expert
                    </a>

                    {/* BOUTON SECONDAIRE : Transparent (Ghost); bordure subtile; icône vers le bas */}
                    <a 
                        href="#expertises" 
                        className="w-full sm:w-auto border-2 border-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm hover:bg-white/10 hover:border-white/50"
                    >
                        En savoir plus sur NEOP+
                        <ChevronDown className="w-5 h-5" />
                    </a>

                </div>

                <div className="mt-10 flex items-center justify-center gap-4 bg-white/5 py-2 px-6 rounded-full border border-white/10 shadow-sm w-max mx-auto">
                    <div className="flex -space-x-3">
                        <div className="w-8 h-8 rounded-full bg-neopTurquoise border-2 border-neopBleuNuit flex items-center justify-center text-xs font-bold text-white">S</div>
                        <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-neopBleuNuit flex items-center justify-center text-xs font-bold text-white">M</div>
                        <div className="w-8 h-8 rounded-full bg-neopJaune border-2 border-neopBleuNuit flex items-center justify-center text-xs font-bold text-neopBleuNuit">J</div>
                    </div>
                    <p className="text-sm text-gray-300">
                        <span className="font-bold text-white">+50 entreprises</span> auditées ce mois-ci
                    </p>
                </div>

            </div>

            {/* Le SVG gardé intact avec ses virgules graphiques */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-1">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] md:h-[150px]">
                    <path 
                        d="M0,120 L0,80 C300,80 400,10 600,10 C800,10 900,80 1200,80 L1200,120 Z" 
                        fill="#f5f5f5"
                    ></path>
                </svg>
            </div>
            
        </section>
    );
}