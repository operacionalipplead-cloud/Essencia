import React from "react";
import { TestimonialsColumn, Testimonial } from "./ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials: Testimonial[] = [
  {
    text: "O Dr. André me ajudou a ver a luz no fim do túnel. Sua abordagem prática mudou minha vida completamente.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Mariana Silva",
    role: "Paciente (Ansiedade)",
  },
  {
    text: "Comecei cético, mas me surpreendi. Sinto-me preparado para lidar com a pressão do meu trabalho corporativo.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Carlos Eduardo",
    role: "Paciente (Burnout)",
  },
  {
    text: "Excelente profissional. O ambiente online funciona perfeitamente e me sinto tão acolhida quanto no consultório.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Fernanda Lima",
    role: "Paciente Online",
  },
  {
    text: "A terapia de casal foi um divisor de águas. Retomamos o diálogo e a confiança que pareciam perdidos.",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    name: "Ricardo Mendes",
    role: "Terapia de Casal",
  },
  {
    text: "Me ajudou a superar um luto muito difícil. Agradeço todos os dias pelo acolhimento e profissionalismo.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Patrícia Alves",
    role: "Paciente (Luto)",
  },
  {
    text: "As técnicas de TCC são incríveis. Hoje consigo identificar meus gatilhos e reagir de forma muito mais saudável.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "João Pedro",
    role: "Paciente (Pânico)",
  },
  {
    text: "Sempre tive dificuldade em me abrir, mas o Dr. André cria um ambiente muito seguro e sem julgamentos.",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    name: "Sofia Costa",
    role: "Autoconhecimento",
  },
  {
    text: "Profissional extremamente ético e pontual. As sessões são o momento mais importante da minha semana.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Lucas Ferreira",
    role: "Paciente Regular",
  },
  {
    text: "Recomendo a todos. A evolução que tive em 6 meses de terapia é algo que eu não imaginava ser possível.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Beatriz Santos",
    role: "Depressão",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="bg-sage-50 py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center mb-16"
        >
          <div className="inline-block py-1 px-4 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6">
            Depoimentos Reais
          </div>

          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
            Histórias de quem transformou sua vida
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nada fala mais alto do que a experiência de quem já passou pelo processo terapêutico. Veja o que meus pacientes dizem.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={40} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={50} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={45} />
        </div>
      </div>
    </section>
  );
};
