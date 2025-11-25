
import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-serif font-bold mb-4">Essência Psicologia Clínica</h3>
            <p className="text-sm leading-relaxed mb-4">
              Missão: Unir ciência e sensibilidade para guiar cada pessoa em uma jornada de descobertas.<br/>
              (41) 3024-3088
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4">Emergência</h4>
             <p className="text-sm mb-2">Este site não oferece atendimento de emergência.</p>
             <p className="text-sm">Em caso de risco de vida ou crise aguda, ligue para o <strong>CVV 188</strong> ou dirija-se ao hospital mais próximo.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Essência Psicologia Clínica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
