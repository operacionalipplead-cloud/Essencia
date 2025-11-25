
import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-32">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sage-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-sage-300/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight mb-6">
              Cuidando da sua mente com <span className="text-sage-600">acolhimento e profissionalismo</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Um espaço criado para proporcionar conforto e segurança. 
              Oferecemos atendimento humanizado e baseado na ciência para você conquistar equilíbrio emocional em todas as fases da vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
                Agendar Consulta
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}>
                Conheça a Clínica <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                Atendimento Online
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                Presencial em Curitiba
              </div>
              <div className="flex items-center font-bold text-sage-700">
                +80 mil atendimentos realizados
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-full">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2070&auto=format&fit=crop" 
                alt="Essência Psicologia Clínica - Ambiente Acolhedor" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-sage-900/10"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs hidden sm:block">
              <p className="text-gray-800 font-serif italic">"Unimos ciência e sensibilidade para guiar cada pessoa em uma jornada de descobertas."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
