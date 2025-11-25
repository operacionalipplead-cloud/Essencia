
import React from 'react';
import { Brain, FileText, Briefcase, Key, GraduationCap, Users } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const services = [
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "Psicoterapia",
    description: "Atendimentos individuais para crianças, adolescentes, adultos, idosos, casais e famílias. Abordagens como TCC, Psicanálise e Sistêmica."
  },
  {
    icon: <FileText className="h-6 w-6 text-white" />,
    title: "Avaliação Psicológica",
    description: "Para concursos públicos, cirurgia bariátrica, pré-vasectomia e avaliação psicossocial. Laudos técnicos com rigor ético."
  },
  {
    icon: <Briefcase className="h-6 w-6 text-white" />,
    title: "Essência RH",
    description: "Suporte especializado para empresas: avaliações admissionais e periódicas, contribuindo para seleções assertivas."
  },
  {
    icon: <Key className="h-6 w-6 text-white" />,
    title: "Sublocação de Salas",
    description: "Consultórios equipados e bem localizados para profissionais de saúde que buscam infraestrutura completa e sem burocracia."
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-white" />,
    title: "Supervisão Clínica",
    description: "Suporte técnico para psicólogos aprimorarem sua atuação clínica com segurança e feedbacks construtivos."
  },
  {
    icon: <Brain className="h-6 w-6 text-white" />,
    title: "Saúde Mental & Bem-estar",
    description: "Tratamento personalizado para ansiedade, depressão, estresse e autoconhecimento, focado na sua qualidade de vida."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="especialidades" className="py-20 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">Cuidado Completo para Você</h2>
          <p className="text-lg text-gray-600">
            Oferecemos um leque de serviços integrados para pacientes, empresas e profissionais da área da saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative h-full min-h-[14rem] list-none rounded-[1.25rem] border-[0.75px] border-sage-200 p-2 md:rounded-[1.5rem] md:p-3 bg-white/50">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-sage-100 bg-white p-6 shadow-sm">
                <div className="relative flex flex-1 flex-col justify-start gap-3">
                  <div className="w-fit rounded-lg border-[0.75px] border-sage-200 bg-sage-600 p-3 shadow-md">
                    {service.icon}
                  </div>
                  <div className="space-y-3 mt-2">
                    <h3 className="pt-0.5 text-xl font-bold font-serif text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
