import { useState } from 'react';

export default function Hero() {
    // État React avec la syntaxe standard (virgule)
    const [email, setEmail] = useState("");

    const gererClic = (event) => {
        event.preventDefault();
        console.log("Nouveau lead intéressé :", email);
        alert("Ouverture de la modale de contact !");
    };

    return (
        <section className="relative bg-neopBleuNuit text-white min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-32">
            
            {/* Effet visuel Espace */}
            <div className="absolute top-1/4 left-10 w-32 h-32 bg-neopTurquoise rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-20 w-40 h-40 bg-neopJaune rounded-full opacity-10 blur-3xl"></div>

            <div className="container mx-auto px-6 z-10 text-center relative">
                
                <span className="text-neopJaune font-bold tracking-widest uppercase text-sm mb-4 block">
                    + De Visiteurs • + De Prospects • + De Clients
                </span>

                <h1 className="text-5xl md:text-6xl md:leading-tight font-extrabold mb-6">
                    Partez à la découverte de nos univers <br className="hidden md:block" />
                    <span className="text-neopTurquoise">Web, Data & IA</span>
                </h1>

                <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
                    Embarquez dans la galaxie NEOP+, l'agence digitale capable de booster votre croissance sur l'ensemble de votre parcours de vente.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button onClick={gererClic} className="bg-neopJaune hover:bg-yellow-400 text-neopBleuNuit font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Discuter avec un expert 🚀
                    </button>
                    <button className="border-2 border-neopJaune text-white hover:bg-neopJaune hover:text-neopBleuNuit font-bold py-4 px-8 rounded-full transition-all">
                        En savoir plus sur NEOP+
                    </button>
                </div>
            </div>

            {/* Séparateur Vague */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-1">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] md:h-[150px]">
                    <path 
                        d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V120H0V95.8C59.71 118 130.42 121 194.5 108c56.8-11.5 110.2-30.5 166.4-46.5z" 
                        fill="#f5f5f5"
                    ></path>
                </svg>
            </div>
            
        </section>
    );
}