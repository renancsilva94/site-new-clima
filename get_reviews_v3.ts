import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function getReviews() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Provide 5 real 5-star reviews for 'New Clima - Instalação e Manutenção de Ar Condicionado' in São Paulo/ABC. Return them as a JSON array of objects with 'name', 'service' (infer from review text if possible), and 'content' fields.",
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            service: { type: Type.STRING },
            content: { type: Type.STRING }
          },
          required: ["name", "service", "content"]
        }
      }
    },
  });

  console.log(response.text);
}

getReviews();
