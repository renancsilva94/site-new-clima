import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function getReviews() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Provide 8 real 5-star reviews for 'New Clima Ar Condicionado' in São Paulo/ABC. Include author name, service (e.g., 'Instalação', 'Manutenção'), and review text. Also provide the overall rating and total number of reviews.",
  });

  console.log(response.text);
}

getReviews();
