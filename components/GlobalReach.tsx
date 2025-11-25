import React from 'react';
import { WorldMap } from "./ui/map";
import { Button } from './Button';
import { Calendar, Globe } from 'lucide-react';

export const GlobalReach: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-sage-50 text-sage-700 text-sm font-medium mb-6">
            <Globe className="h-4 w-4" />
            <span>Terapia Online Sem Fronteiras</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
            Atendimento psicológico <br/>
            <span className="text-sage-600">onde quer que você esteja</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
             Conecte-se com sua saúde mental, não importa onde você esteja. 
             A terapia online permite continuidade e excelência no tratamento, 
             trazendo o consultório até você.
          </p>
        </div>

        {/* Map Visualization */}
        <div className="mb-12">
          <WorldMap
            lineColor="#568474"
            dots={[
              {
                start: { lat: -23.5505, lng: -46.6333, label: "São Paulo" }, // Base
                end: { lat: 38.7223, lng: -9.1393, label: "Lisboa" },
              },
              {
                start: { lat: -23.5505, lng: -46.6333, label: "São Paulo" },
                end: { lat: 40.7128, lng: -74.0060, label: "Nova York" },
              },
              {
                start: { lat: -23.5505, lng: -46.6333, label: "São Paulo" },
                end: { lat: 51.5074, lng: -0.1278, label: "Londres" },
              },
              {
                start: { lat: -23.5505, lng: -46.6333, label: "São Paulo" },
                end: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
           <div className="inline-block p-1 rounded-2xl bg-sage-50 border border-sage-100 shadow-sm">
             <div className="flex flex-col sm:flex-row items-center gap-6 px-8 py-6">
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-lg">Mora fora ou viaja muito?</h4>
                  <p className="text-gray-600 text-sm">Agende sua sessão online no fuso horário que for melhor para você.</p>
                </div>
                <Button onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Agendar Online
                </Button>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};