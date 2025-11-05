// src/pages/api/generate-svg.js
export const prerender = false;

import OpenAI from "openai";
import fs from "fs";
import path from "path";

const BASE_URL = import.meta.env.OPENROUTER_BASE_URL || "https://openrouter.ai/api/v1";
const ACCESS_TOKEN = import.meta.env.OPENROUTER_API_KEY;
const MODEL = import.meta.env.OPENROUTER_MODEL || "openai/gpt-oss-20b:free";

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST = async ({ request }) => {
  try {
    if (!ACCESS_TOKEN)
      return json({ success: false, error: "Missing OPENROUTER_API_KEY" }, 500);

    const { prompt, messages } = await request.json().catch(() => ({}));

    if (!prompt && (!messages || !Array.isArray(messages)))
      return json({ success: false, error: "Missing 'prompt' or 'messages'" }, 400);

    // 🟡 Lire le SVG de base
    const svgPath = path.resolve("src/assets/lunettes.svg");
    const baseSVG = fs.readFileSync(svgPath, "utf8");

    const client = new OpenAI({
      baseURL: BASE_URL,
      apiKey: ACCESS_TOKEN,
      defaultHeaders: {
        "HTTP-Referer": import.meta.env.PUBLIC_SITE_URL || "http://localhost:4321",
        "X-Title": "TaVue IA",
      },
    });

    // 🧠 Message système renforcé
    const systemMessage = {
      role: "system",
      content: `
        Tu es un générateur et modificateur de SVG.
        Tu reçois toujours un SVG de base nommé "lunette.svg".
        Tu dois modifier ce SVG selon la demande utilisateur, sans jamais sortir du format SVG.
        Réponds UNIQUEMENT avec un SVG complet et valide (<svg>...</svg>), sans balise Markdown ni texte externe.
        Les différentes parties doivent conserver ou ajouter les ids : #monture, #branches, #verres.
      `,
    };

    // 🧩 On envoie le SVG de base au modèle
    const messagesToSend = [
      systemMessage,
      {
        role: "user",
        content: `Voici le SVG de base :\n\n${baseSVG}`,
      },
      {
        role: "user",
        content: `Modifie ce SVG selon cette description : ${prompt}`,
      },
    ];

    const chat = await client.chat.completions.create({
      model: MODEL,
      messages: messagesToSend,
      temperature: 0.4,
    });

    const content = chat.choices?.[0]?.message?.content?.trim() || "";
    const svgMatch = content.match(/<svg[\s\S]*<\/svg>/i);
    const svg = svgMatch ? svgMatch[0] : "";

    return json({ success: true, svg, fullResponse: content });
  } catch (error) {
    console.error("Erreur API /api/generate-svg :", error);
    return json({ success: false, error: error.message || String(error) }, 500);
  }
};
