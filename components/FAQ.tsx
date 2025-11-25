import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "Como funcionam as sessões online?",
    answer: "As sessões online são realizadas através de videochamada segura (Google Meet ou Zoom). Elas têm a mesma duração (50 minutos) e eficácia das presenciais, oferecendo mais flexibilidade e conforto para você."
  },
  {
    question: "Aceita convênios?",
    answer: "Atendo apenas na modalidade particular. No entanto, forneço recibo para que você possa solicitar o reembolso junto ao seu plano de saúde, caso seu convênio ofereça essa modalidade."
  },
  {
    question: "Qual a duração do tratamento?",
    answer: "A duração varia muito de pessoa para pessoa e depende das questões trabalhadas. A TCC é focada em objetivos, então tendemos a buscar autonomia do paciente. Algumas pessoas ficam alguns meses, outras preferem um acompanhamento de longo prazo."
  },
  {
    question: "O que acontece na primeira sessão?",
    answer: "A primeira sessão é um momento de conhecimento mútuo. Vamos conversar sobre o que trouxe você à terapia, sua história e seus objetivos. É também o momento para você ver se sente confortável comigo."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
          Dúvidas Frequentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-sage-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-sage-50 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};