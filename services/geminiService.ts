// import { GoogleGenAI } from "@google/genai";
// import { GeneratedAdCampaign, Language } from "../types";

// // Initialize Gemini Client
// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// const languageNames = {
//   en: 'English',
//   pt: 'Portuguese (Brazil)',
//   es: 'Spanish'
// };

// export const generateAdContent = async (
//   productName: string,
//   productFeatures: string,
//   language: Language
// ): Promise<{ campaign: GeneratedAdCampaign; sources: { title: string; uri: string }[] }> => {

//   const targetLanguage = languageNames[language];

//   const prompt = `
//     You are an expert Senior Copywriter for Meta and Google Ads.

//     Task: Create a structured ad campaign for the following product.

//     Target Language: ${targetLanguage}. 
//     IMPORTANT: All generated content (headlines, body, metadata, keywords) MUST be in ${targetLanguage}.

//     Product Name: ${productName}
//     Features/Context: ${productFeatures}

//     Requirements:
//     1. Research the product category using Google Search to understand competitors and user pain points.
//     2. Meta Ads (Facebook/Instagram): Strict adherence to 25 char headline limit and 90 char body limit.
//     3. Google Ads (Search): Strict adherence to 30 char headline limit and 90 char description limit.
//     4. Tone: High conversion, persuasive, professional.
//     5. OUTPUT FORMAT: Return strictly valid JSON. No markdown code blocks. Just the raw JSON string.

//     Expected JSON Structure:
//     {
//       "meta_ad": {
//         "headline": "string (max 25 chars)",
//         "body": "string (max 90 chars)",
//         "cta": "string",
//         "link_description": "string"
//       },
//       "google_ad": {
//         "headlines": ["string (max 30 chars)", "string (max 30 chars)", "string (max 30 chars)"],
//         "descriptions": ["string (max 90 chars)", "string (max 90 chars)"],
//         "path": "string (e.g. /product)"
//       },
//       "metadata": {
//         "campaign_name_suggestion": "string",
//         "target_audience_inferred": "string",
//         "tone_of_voice": "string",
//         "key_benefit_highlighted": "string",
//         "compliance_check": boolean,
//         "keywords": ["string", "string", "string", "string", "string"]
//       }
//     }
//   `;

//   try {
//     const response = await ai.models.generateContent({
//       model: 'gemini-2.5-flash',
//       contents: prompt,
//       config: {
//         tools: [{ googleSearch: {} }],
//         // responseMimeType and responseSchema removed to compatible with googleSearch
//         temperature: 0.7,
//       },
//     });

//     let text = response.text || "{}";

//     // Robust JSON extraction to handle potential markdown
//     text = text.replace(/```json/g, '').replace(/```/g, '');
//     const start = text.indexOf('{');
//     const end = text.lastIndexOf('}');
//     if (start !== -1 && end !== -1) {
//         text = text.substring(start, end + 1);
//     }

//     const json = JSON.parse(text) as GeneratedAdCampaign;

//     // Extract grounding sources if available
//     const sources: { title: string; uri: string }[] = [];
//     const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;

//     if (chunks) {
//       chunks.forEach((chunk) => {
//         if (chunk.web?.uri && chunk.web?.title) {
//           sources.push({ title: chunk.web.title, uri: chunk.web.uri });
//         }
//       });
//     }

//     return { campaign: json, sources };
//   } catch (error) {
//     console.error("Error generating ad content:", error);
//     throw error;
//   }
// };

// export const generateAdImage = async (
//   productName: string,
//   campaignData: GeneratedAdCampaign
// ): Promise<string | undefined> => {
//   const imagePrompt = `
//     Professional advertising product photography for ${productName}.
//     Context: ${campaignData.metadata.key_benefit_highlighted}.
//     Target Audience: ${campaignData.metadata.target_audience_inferred}.
//     Style: High-end, commercial lighting, photorealistic, 4k, winning product shot on clean background.
//     No text in the image.
//   `;

//   try {
//     const response = await ai.models.generateContent({
//       model: 'gemini-2.5-flash-image',
//       contents: {
//         parts: [
//           { text: imagePrompt }
//         ]
//       },
//     });

//     // Iterate to find image part
//     for (const candidate of response.candidates || []) {
//         for (const part of candidate.content.parts) {
//             if (part.inlineData && part.inlineData.mimeType.startsWith('image/')) {
//                 return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
//             }
//         }
//     }

//     return undefined;
//   } catch (error) {
//     console.error("Error generating image:", error);
//     return undefined; 
//   }
// };


// import { GoogleGenAI } from "@google/genai";
// import { GeneratedAdCampaign, Language } from "../types";

// // Initialize Gemini Client
// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// const languageNames = {
//   en: 'English',
//   pt: 'Portuguese (Brazil)',
//   es: 'Spanish'
// };

// export const generateAdContent = async (
//   productName: string,
//   productFeatures: string,
//   language: Language
// ): Promise<{ campaign: GeneratedAdCampaign; sources: { title: string; uri: string }[] }> => {

//   const targetLanguage = languageNames[language];

//   const prompt = `
//     You are an expert Senior Copywriter for Meta and Google Ads.

//     Task: Create a structured ad campaign for the following product.

//     Target Language: ${targetLanguage}. 
//     IMPORTANT: All generated content (headlines, body, metadata, keywords) MUST be in ${targetLanguage}.

//     Product Name: ${productName}
//     Features/Context: ${productFeatures}

//     Requirements:
//     1. COMPREHENSIVE RESEARCH: Use Google Search to find detailed information about this specific product type, competitors, and current visual trends. Find as many relevant sources as possible.
//     2. Meta Ads (Facebook/Instagram): Strict adherence to 25 char headline limit and 90 char body limit.
//     3. Google Ads (Search): Strict adherence to 30 char headline limit and 90 char description limit.
//     4. Tone: High conversion, persuasive, professional.
//     5. OUTPUT FORMAT: Return strictly valid JSON. No markdown code blocks. Just the raw JSON string.

//     Expected JSON Structure:
//     {
//       "meta_ad": {
//         "headline": "string (max 25 chars)",
//         "body": "string (max 90 chars)",
//         "cta": "string",
//         "link_description": "string"
//       },
//       "google_ad": {
//         "headlines": ["string (max 30 chars)", "string (max 30 chars)", "string (max 30 chars)"],
//         "descriptions": ["string (max 90 chars)", "string (max 90 chars)"],
//         "path": "string (e.g. /product)"
//       },
//       "metadata": {
//         "campaign_name_suggestion": "string",
//         "target_audience_inferred": "string",
//         "tone_of_voice": "string",
//         "key_benefit_highlighted": "string",
//         "compliance_check": boolean,
//         "keywords": ["string", "string", "string", "string", "string"]
//       }
//     }
//   `;

//   try {
//     const response = await ai.models.generateContent({
//       model: 'gemini-2.5-flash',
//       contents: prompt,
//       config: {
//         tools: [{ googleSearch: {} }],
//         // responseMimeType and responseSchema removed to compatible with googleSearch
//         temperature: 0.7,
//       },
//     });

//     let text = response.text || "{}";

//     // Robust JSON extraction to handle potential markdown
//     text = text.replace(/```json/g, '').replace(/```/g, '');
//     const start = text.indexOf('{');
//     const end = text.lastIndexOf('}');
//     if (start !== -1 && end !== -1) {
//       text = text.substring(start, end + 1);
//     }

//     const json = JSON.parse(text) as GeneratedAdCampaign;

//     // Extract grounding sources if available
//     const sources: { title: string; uri: string }[] = [];
//     const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;

//     if (chunks) {
//       chunks.forEach((chunk) => {
//         if (chunk.web?.uri && chunk.web?.title) {
//           // Avoid duplicates
//           if (!sources.some(s => s.uri === chunk.web?.uri)) {
//             sources.push({ title: chunk.web.title, uri: chunk.web.uri });
//           }
//         }
//       });
//     }

//     return { campaign: json, sources };
//   } catch (error) {
//     console.error("Error generating ad content:", error);
//     throw error;
//   }
// };

// export const generateAdImage = async (
//   productName: string,
//   productFeatures: string,
//   campaignData: GeneratedAdCampaign
// ): Promise<string | undefined> => {

//   // We use the raw features to ensure the physical description is accurate, 
//   // rather than just the "benefit" which might be abstract.
//   const imagePrompt = `
//     Create a high-end, photorealistic product advertisement image for: "${productName}".

//     Physical Visual Details based on these features: ${productFeatures}.

//     Context/Vibe: ${campaignData.metadata.key_benefit_highlighted}.
//     Target Audience Style: ${campaignData.metadata.target_audience_inferred}.

//     Directives:
//     - The product MUST be the central focus.
//     - Professional studio lighting, 4k resolution.
//     - Clean, aesthetic background suitable for social media ads.
//     - DO NOT include any text, words, or logos on the image.
//     - If the product is a physical object (like a chair, bottle, gadget), show it clearly.
//     - If the product is digital/service, show a metaphorical representation or a person using a device in a professional setting.
//   `;

//   try {
//     const response = await ai.models.generateContent({
//       model: 'gemini-2.5-flash-image',
//       contents: {
//         parts: [
//           { text: imagePrompt }
//         ]
//       },
//     });

//     // Iterate to find image part
//     for (const candidate of response.candidates || []) {
//       for (const part of candidate.content.parts) {
//         if (part.inlineData && part.inlineData.mimeType.startsWith('image/')) {
//           return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
//         }
//       }
//     }

//     return undefined;
//   } catch (error) {
//     console.error("Error generating image:", error);
//     return undefined;
//   }
// };


// import { GoogleGenAI } from "@google/genai";
// import { GeneratedAdCampaign, Language } from "../types";

// // Initialize Gemini Client
// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// const languageNames = {
//   en: 'English',
//   pt: 'Portuguese (Brazil)',
//   es: 'Spanish'
// };

// export const generateAdContent = async (
//   productName: string,
//   productFeatures: string,
//   language: Language
// ): Promise<{ campaign: GeneratedAdCampaign; sources: { title: string; uri: string }[] }> => {

//   const targetLanguage = languageNames[language];

//   const prompt = `
//     You are an expert Senior Copywriter for Meta and Google Ads.

//     Task: Create a structured ad campaign for the following product.

//     Target Language: ${targetLanguage}. 
//     IMPORTANT: All generated content (headlines, body, metadata, keywords) MUST be in ${targetLanguage}.

//     Product Name: ${productName}
//     Features/Context: ${productFeatures}

//     Requirements:
//     1. COMPREHENSIVE RESEARCH: Use Google Search to find detailed information about this specific product type, competitors, and visual appearance. Find at least 5-10 distinct and relevant sources.
//     2. Meta Ads (Facebook/Instagram): Strict adherence to 25 char headline limit and 90 char body limit.
//     3. Google Ads (Search): Strict adherence to 30 char headline limit and 90 char description limit.
//     4. Tone: High conversion, persuasive, professional.
//     5. OUTPUT FORMAT: Return strictly valid JSON. No markdown code blocks. Just the raw JSON string.

//     Expected JSON Structure:
//     {
//       "meta_ad": {
//         "headline": "string (max 25 chars)",
//         "body": "string (max 90 chars)",
//         "cta": "string",
//         "link_description": "string"
//       },
//       "google_ad": {
//         "headlines": ["string (max 30 chars)", "string (max 30 chars)", "string (max 30 chars)"],
//         "descriptions": ["string (max 90 chars)", "string (max 90 chars)"],
//         "path": "string (e.g. /product)"
//       },
//       "metadata": {
//         "campaign_name_suggestion": "string",
//         "target_audience_inferred": "string",
//         "tone_of_voice": "string",
//         "key_benefit_highlighted": "string",
//         "image_prompt": "A strictly physical description of the product for an AI image generator. Describe material, color, shape, and setting. NO abstract concepts.",
//         "compliance_check": boolean,
//         "keywords": ["string", "string", "string", "string", "string"]
//       }
//     }
//   `;

//   try {
//     const response = await ai.models.generateContent({
//       model: 'gemini-2.5-flash',
//       contents: prompt,
//       config: {
//         tools: [{ googleSearch: {} }],
//         // responseMimeType and responseSchema removed to compatible with googleSearch
//         temperature: 0.7,
//       },
//     });

//     let text = response.text || "{}";

//     // Robust JSON extraction to handle potential markdown
//     text = text.replace(/```json/g, '').replace(/```/g, '');
//     const start = text.indexOf('{');
//     const end = text.lastIndexOf('}');
//     if (start !== -1 && end !== -1) {
//       text = text.substring(start, end + 1);
//     }

//     const json = JSON.parse(text) as GeneratedAdCampaign;

//     // Extract grounding sources if available
//     const sources: { title: string; uri: string }[] = [];
//     const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;

//     if (chunks) {
//       chunks.forEach((chunk) => {
//         if (chunk.web?.uri && chunk.web?.title) {
//           // Avoid duplicates
//           if (!sources.some(s => s.uri === chunk.web?.uri)) {
//             sources.push({ title: chunk.web.title, uri: chunk.web.uri });
//           }
//         }
//       });
//     }

//     return { campaign: json, sources };
//   } catch (error) {
//     console.error("Error generating ad content:", error);
//     throw error;
//   }
// };

// export const generateAdImage = async (
//   productName: string,
//   productFeatures: string,
//   campaignData: GeneratedAdCampaign
// ): Promise<string | undefined> => {

//   // Use the specific image_prompt generated by the text model if available,
//   // otherwise fall back to features.
//   const visualDescription = campaignData.metadata.image_prompt || productFeatures;

//   const imagePrompt = `
//     Create a professional product photography shot.

//     Subject: "${productName}"
//     Visual Description: ${visualDescription}

//     Style: ${campaignData.metadata.tone_of_voice} aesthetic, high-end commercial photography, 4k resolution, studio lighting.

//     NEGATIVE PROMPT (Do NOT include):
//     - Text, words, letters, watermarks, logos.
//     - Distorted hands, distorted objects.
//     - Abstract conceptual art (e.g., floating brains, glowing auras).
//     - People (unless specifically asked for in description).

//     Composition:
//     - Center the product.
//     - Clean, complimentary background.
//   `;

//   try {
//     const response = await ai.models.generateContent({
//       model: 'gemini-2.5-flash-image',
//       contents: {
//         parts: [
//           { text: imagePrompt }
//         ]
//       },
//     });

//     // Iterate to find image part
//     for (const candidate of response.candidates || []) {
//       for (const part of candidate.content.parts) {
//         if (part.inlineData && part.inlineData.mimeType.startsWith('image/')) {
//           return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
//         }
//       }
//     }

//     return undefined;
//   } catch (error) {
//     console.error("Error generating image:", error);
//     return undefined;
//   }
// };









import { GoogleGenAI } from "@google/genai";
import { GeneratedAdCampaign, Language } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const languageNames = {
  en: 'English',
  pt: 'Portuguese (Brazil)',
  es: 'Spanish'
};

export const generateAdContent = async (
  productName: string,
  productFeatures: string,
  language: Language
): Promise<{ campaign: GeneratedAdCampaign; sources: { title: string; uri: string }[] }> => {

  const targetLanguage = languageNames[language];

  const prompt = `
    You are an expert Senior Copywriter for Meta and Google Ads.
    
    Task: Create a structured ad campaign for the following product.
    
    Target Language: ${targetLanguage}. 
    IMPORTANT: All generated content (headlines, body, metadata, keywords) MUST be in ${targetLanguage}.

    Product Name: ${productName}
    Features/Context: ${productFeatures}
    
    Requirements:
    1. COMPREHENSIVE RESEARCH: Use Google Search to find detailed information about this specific product type, competitors, and visual appearance. Find at least 5-10 distinct and relevant sources.
    2. Meta Ads (Facebook/Instagram): Strict adherence to 25 char headline limit and 90 char body limit.
    3. Google Ads (Search): Strict adherence to 30 char headline limit and 90 char description limit.
    4. Tone: High conversion, persuasive, professional.
    5. OUTPUT FORMAT: Return strictly valid JSON. No markdown code blocks. Just the raw JSON string.
    
    Expected JSON Structure:
    {
      "campaign_config": {
        "status": "PAUSED",
        "daily_budget": 50.00,
        "currency": "BRL",
        "final_url": "https://example.com"
      },
      "assets": {
        "image_url": ""
      },
      "meta_ad_payload": {
        "headline": "string (max 25 chars)",
        "body": "string (max 90 chars)",
        "call_to_action_type": "string (e.g. SHOP_NOW, LEARN_MORE)",
        "link_description": "string",
        "targeting": {
          "age_min": 18,
          "age_max": 65,
          "geo_locations": { "countries": ["BR"] },
          "interests": ["string", "string"]
        }
      },
      "google_ad_payload": {
        "headlines": [
          { "text": "string (max 30 chars)", "pinned_field": "HEADLINE_1" },
          { "text": "string (max 30 chars)" },
          { "text": "string (max 30 chars)" }
        ],
        "descriptions": [
          { "text": "string (max 90 chars)" },
          { "text": "string (max 90 chars)" }
        ],
        "path": "string (max 15 chars, e.g. /product)",
        "keywords": [
          { "text": "string", "match_type": "PHRASE" },
          { "text": "string", "match_type": "BROAD" }
        ]
      },
      "metadata": {
        "campaign_name_suggestion": "string",
        "target_audience_inferred": "string",
        "tone_of_voice": "string",
        "key_benefit_highlighted": "string",
        "image_prompt": "A detailed visual description for an AI image generator. If physical product: describe materials, colors, shape. If service: describe the scene, action, or outcome (e.g. sparkling clean pool with blue water). NO text, NO abstract concepts.",
        "compliance_check": boolean,
        "keywords": ["string", "string", "string", "string", "string"]
      }
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        // responseMimeType and responseSchema removed to compatible with googleSearch
        temperature: 0.7,
      },
    });

    let text = response.text || "{}";

    // Robust JSON extraction to handle potential markdown
    text = text.replace(/```json/g, '').replace(/```/g, '');
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    if (start !== -1 && end !== -1) {
      text = text.substring(start, end + 1);
    }

    const json = JSON.parse(text) as GeneratedAdCampaign;

    // Extract grounding sources if available
    const sources: { title: string; uri: string }[] = [];
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;

    if (chunks) {
      chunks.forEach((chunk) => {
        if (chunk.web?.uri && chunk.web?.title) {
          // Avoid duplicates
          if (!sources.some(s => s.uri === chunk.web?.uri)) {
            sources.push({ title: chunk.web.title, uri: chunk.web.uri });
          }
        }
      });
    }

    return { campaign: json, sources };
  } catch (error) {
    console.error("Error generating ad content:", error);
    throw error;
  }
};

export const generateAdImage = async (
  productName: string,
  productFeatures: string,
  campaignData: GeneratedAdCampaign,
  uploadedImageBase64?: string | null,
  useAiGeneration: boolean = true
): Promise<string | undefined> => {

  // CASE 1: User uploaded an image and wants to use it directly (NO AI)
  if (uploadedImageBase64 && !useAiGeneration) {
    return uploadedImageBase64;
  }

  // Use the specific image_prompt generated by the text model if available,
  // otherwise fall back to features.
  const visualDescription = campaignData.metadata.image_prompt || productFeatures;

  const imagePrompt = `
    Create a high-quality advertising image for: "${productName}".
    
    Visual Scene Description: ${visualDescription}
    
    Style: ${campaignData.metadata.tone_of_voice}, professional, high resolution, 4k, photorealistic.
    
    IMPORTANT GUIDELINES:
    - If this is a service (e.g., cleaning, consulting), show the outcome or a professional setting representing the service.
    - If this is a physical product, show it clearly with studio lighting.
    - NO TEXT, NO WORDS, NO LOGOS, NO WATERMARKS.
    - Avoid distorted objects or hands.
  `;

  // CASE 2 & 3: AI Generation (either from text or from image reference)
  try {
    const contentsPart: any[] = [
      { text: imagePrompt }
    ];

    // If there is an uploaded image and we want to use it as reference (Edit/Variation)
    if (uploadedImageBase64 && useAiGeneration) {
      const base64Data = uploadedImageBase64.split(',')[1]; // Remove data:image/png;base64, prefix
      contentsPart.unshift({
        inlineData: {
          mimeType: 'image/jpeg', // Assuming jpeg/png compatibility, simpler to generalize
          data: base64Data
        }
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: contentsPart
      },
    });

    // Iterate to find image part
    for (const candidate of response.candidates || []) {
      for (const part of candidate.content.parts) {
        if (part.inlineData && part.inlineData.mimeType.startsWith('image/')) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }

    return undefined;
  } catch (error) {
    console.error("Error generating image:", error);
    return undefined;
  }
};