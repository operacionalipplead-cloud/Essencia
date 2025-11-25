
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white overflow-hidden scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h5 className="text-sm font-bold uppercase tracking-widest text-sage-500 mb-2">Quem Somos</h5>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
              Essência Psicologia Clínica
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                A Essência nasceu muito antes de sua existência física – começou como um sonho, nos corredores da faculdade, entre três amigas que compartilhavam um propósito comum: oferecer um espaço de acolhimento, ética e transformação.
              </p>
              <p>
                Somos <strong>Roselaine, Josiane e Cristiane</strong>. Diferentes em muitos aspectos, mas complementares, como um organismo vivo que funciona em perfeita harmonia:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-sage-500">
                <li><strong>Cris é o coração:</strong> sonhadora e criativa, enxergando possibilidades onde ninguém mais vê.</li>
                <li><strong>Josi é a mente:</strong> analítica e estratégica, traçando os caminhos para tornar sonhos em realidade.</li>
                <li><strong>Nani é o corpo:</strong> a força que faz acontecer e encontra soluções para tornar tudo possível.</li>
              </ul>
              <p>
                Há 7 anos, seguimos crescendo e nos reinventando, sempre com o mesmo propósito: transformar vidas por meio da escuta ativa, do conhecimento e da psicologia baseada na ciência.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <h4 className="text-4xl font-bold text-sage-600 font-serif">7+</h4>
                <p className="text-gray-500 text-sm">Anos de história</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-sage-600 font-serif">80k+</h4>
                <p className="text-gray-500 text-sm">Consultas realizadas</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-4xl font-bold text-sage-600 font-serif">15+</h4>
                <p className="text-gray-500 text-sm">Psicólogos parceiros</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-sage-200 rounded-3xl transform -rotate-3 scale-105 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop" 
                alt="Equipe Essência Psicologia" 
                className="relative rounded-3xl shadow-lg z-10 w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
