
import React from 'react';
import { ContainerScroll, CardSticky } from "./blocks/cards-stack";

const PROCESS_PHASES = [
  {
    id: "step-1",
    title: "Contato Inicial",
    description:
      "Ao entrar em contato via WhatsApp ou formulário, nossa equipe de atendimento responderá prontamente para entender sua demanda e direcioná-lo ao profissional mais adequado para sua necessidade e disponibilidade.",
  },
  {
    id: "step-2",
    title: "A Primeira Sessão",
    description:
      "Este é um encontro de acolhimento. Em um ambiente seguro e livre de julgamentos, você terá espaço para compartilhar sua história. Nossos especialistas estão prontos para ouvir com ética e empatia.",
  },
  {
    id: "step-3",
    title: "Plano Terapêutico",
    description:
      "Baseado na ciência e na abordagem específica do profissional (TCC, Psicanálise, Sistêmica, etc.), desenhamos um caminho personalizado. Definimos objetivos claros para lidar com suas questões e aliviar o sofrimento.",
  },
  {
    id: "step-4",
    title: "O Processo (A Jornada)",
    description:
      "Nas sessões regulares, trabalharemos ativamente. É uma jornada de autodescoberta, aprendizado e fortalecimento emocional, onde você é parte essencial do processo, como uma célula desse organismo vivo que é a terapia.",
  },
  {
    id: "step-5",
    title: "Autonomia e Alta",
    description:
      "O objetivo final é que você desenvolva novas habilidades e atinja seus objetivos. A alta terapêutica celebra sua autonomia e capacidade de lidar com os desafios da vida, mantendo o equilíbrio conquistado.",
  },
];

export const Process: React.FC = () => {
  return (
    <section id="processo" className="bg-sage-50/50 py-24 relative z-10">
      <div className="container mx-auto px-6 text-gray-900 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Sticky Header Section */}
          <div className="lg:sticky lg:top-32 lg:h-auto lg:self-start lg:py-12 flex flex-col justify-center mb-12 lg:mb-0">
            <h5 className="text-sm font-bold uppercase tracking-widest text-sage-500 mb-2">
              Jornada Terapêutica
            </h5>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Como funciona o <span className="text-sage-600">atendimento</span>?
            </h2>
            <p className="max-w-prose text-lg text-gray-600 leading-relaxed">
              Entender o processo tira o peso da incerteza. A terapia é estruturada para ser um caminho seguro do início ao fim, focado na sua evolução e bem-estar.
            </p>
            
            <div className="mt-8 p-6 bg-white rounded-xl border border-sage-100 shadow-sm inline-block">
               <p className="text-sage-800 font-medium italic">
                 "O autoconhecimento é o começo da sabedoria."
               </p>
            </div>
          </div>

          {/* Scrolling Cards Section */}
          <ContainerScroll className="min-h-[150vh] pb-24 space-y-8">
            {PROCESS_PHASES.map((phase, index) => (
              <CardSticky
                key={phase.id}
                index={index}
                incrementY={20}
                className="rounded-3xl border border-sage-200 bg-white p-8 md:p-10 shadow-2xl shadow-sage-900/10"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between border-b border-sage-50 pb-4">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-800">
                      {phase.title}
                    </h3>
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-sage-100 text-sage-700 font-serif font-bold text-lg md:text-xl shrink-0">
                      {index + 1}
                    </div>
                  </div>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </CardSticky>
            ))}
          </ContainerScroll>
          
        </div>
      </div>
    </section>
  );
};
