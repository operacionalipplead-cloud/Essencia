import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual do site da Essência Psicologia Clínica.
Somos uma clínica com 7 anos de história, fundada por Roselaine, Josiane e Cristiane.
Seu objetivo é acolher os visitantes, tirar dúvidas sobre nossos serviços e incentivar o contato.

NOSSOS SERVIÇOS:
1. Psicoterapia: Online e Presencial (Curitiba/PR). Abordagens: TCC, Psicanálise, Sistêmica, Comportamental. Para crianças, adultos, casais e famílias.
2. Avaliação Psicológica: Concursos, Cirurgia Bariátrica, Pré-Vasectomia, Psicossocial.
3. Essência RH: Avaliações admissionais e periódicas para empresas.
4. Sublocação de Salas: Consultórios equipados para profissionais de saúde.
5. Supervisão Clínica: Para psicólogos.

INFORMAÇÕES DE CONTATO:
- Telefone/WhatsApp: (41) 3024-3088
- Localização: Curitiba.

IMPORTANTE:
- Seja empático, acolhedor e profissional.
- Use a analogia de "Corpo, Mente e Coração" se for pertinente (nossa filosofia).
- NÃO faça diagnósticos.
- Em caso de risco de vida, indique o CVV (188).
- Respostas curtas e objetivas.
`;

export const sendMessageToGemini = async (message: string, history: { role: string; text: string }[]): Promise<string> => {
  try {
    const chatHistory = history.map(h => `${h.role === 'user' ? 'Visitante' : 'Assistente'}: ${h.text}`).join('\n');
    const prompt = `${chatHistory}\nVisitante: ${message}\nAssistente:`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Desculpe, não consegui entender. Poderia reformular?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Ocorreu um erro momentâneo. Por favor, tente novamente mais tarde.";
  }
};