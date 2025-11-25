
import React, { useState } from 'react';
import { Button } from './Button';
import { Phone, Mail, MapPin, Calendar, Briefcase } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 bg-sage-50 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info */}
          <div className="lg:w-2/5 bg-sage-800 p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Fale Conosco</h2>
              <p className="text-sage-200 mb-8">
                Estamos aqui para ouvir você! Entre em contato e agende seu atendimento em um ambiente acolhedor, com profissionais qualificados.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-sage-400 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold">Telefone / WhatsApp</h4>
                    <p className="text-sage-200">(41) 3024-3088</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-sage-400 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-sage-200">contato@essenciapsicologia.com.br</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-sage-400 mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold">Consultório</h4>
                    <p className="text-sage-200">Curitiba, PR</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-4">
               <div className="flex items-center gap-2 text-sm text-sage-300">
                  <Calendar className="h-4 w-4" />
                  <span>Segunda a Sexta, 08h às 19h</span>
               </div>
               <div className="flex items-center gap-2 text-sm text-sage-300 pt-4 border-t border-sage-700">
                  <Briefcase className="h-4 w-4" />
                  <span>Psicólogo? Junte-se à nossa equipe.</span>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-3/5 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-shadow"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-shadow"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-shadow"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-shadow resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Enviar Mensagem
                </Button>
                {status === 'success' && (
                  <span className="text-green-600 font-medium animate-pulse">Mensagem enviada com sucesso!</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
