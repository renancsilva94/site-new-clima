import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function getReviews() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Search for 'New Clima - Instalação e Manutenção de Ar Condicionado' on Google Maps and find 5 real 5-star reviews. Return them as a JSON array of objects with 'name', 'service' (infer from review text), and 'content' fields. Be very specific to this company in São Paulo/ABC.",
    config: {
      tools: [{ googleSearch: {} }],
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
