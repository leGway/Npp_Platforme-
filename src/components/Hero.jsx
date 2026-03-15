import { useState } from 'react';
// 1. IMPORT DES ICÔNES LUCIDE
import { Users, Target, Handshake } from 'lucide-react';

export default function Hero() {
    const [email, setEmail] = useState("");

    const gererClic = (event) => {
        event.preventDefault();
        console.log("Nouveau lead intéressé :" , email);
        alert("Ouverture de la modale de contact !");
    };

    return (
        <section className="relative bg-neopBleuNuit text-white min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-32">
            
            <div className="absolute top-1/4 left-10 w-32 h-32 bg-neopTurquoise rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-20 w-40 h-40 bg-neopJaune rounded-full opacity-10 blur-3xl"></div>

            <div className="container mx-auto px-6 z-10 text-center relative">
                
                {/* 2. LA NOUVELLE LIGNE AVEC ICÔNES */}
                <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-neopJaune font-bold tracking-wider uppercase text-xs md:text-sm mb-8">
                    <span className="flex items-center gap-2 bg-neopJaune/10 px-3 py-1.5 rounded-full">
                        <Users className="w-4 h-4" /> + De Visiteurs
                    </span>
                    
                    {/* Le petit point de séparation (caché sur les très petits téléphones) */}
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
                    <span className="text-neopTurquoise">Web; Data & IA</span>
                </h1>

                <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
                    Embarquez dans la galaxie NEOP+; l'agence digitale capable de booster votre croissance sur l'ensemble de votre parcours de vente.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button onClick={gererClic} className="bg-neopJaune hover:bg-yellow-400 text-neopBleuNuit font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Discuter avec un expert
                    </button>
                    <button className="border-2 border-neopJaune text-white hover:bg-neopJaune hover:text-neopBleuNuit font-bold py-4 px-8 rounded-full transition-all">
                        En savoir plus sur NEOP+
                    </button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-4 bg-white/5 py-2 px-6 rounded-full border border-white/10 shadow-sm w-max mx-auto">
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