// import React, { useState } from 'react';
// import { InputForm } from './components/InputForm';
// import { AdPreview } from './components/AdPreview';
// import { JsonOutput } from './components/JsonOutput';
// import { AnalysisPanel } from './components/AnalysisPanel';
// import { generateAdContent, generateAdImage } from './services/geminiService';
// import { GeneratedAdCampaign, GenerationStatus, Language } from './types';

// // Translations Dictionary
// const translations = {
//   en: {
//     title: "AdGenius",
//     subtitle: "AI Asset Generator",
//     geminiModel: "Gemini 2.5 Flash",
//     inputTitle: "Input Data",
//     productNameLabel: "Product Name",
//     productNamePlaceholder: "e.g., Ergonomic Office Chair",
//     featuresLabel: "Key Features & Characteristics",
//     featuresPlaceholder: "List the benefits, specs, or unique selling points...",
//     submitBtnIdle: "Generate Campaign Assets",
//     submitBtnLoading: "Generating Assets...",
//     statusSearching: "Searching market trends...",
//     statusWriting: "Drafting high-conversion copy...",
//     statusDesigning: "Generating creative assets...",
//     errorPrefix: "Error:",
//     metaTab: "Meta (Facebook/IG)",
//     googleTab: "Google Search",
//     previewSponsored: "Sponsored",
//     previewBrand: "Brand Name",
//     copyJson: "Copy JSON",
//     copied: "Copied!",
//     analysisTitle: "Strategy & RAG Analysis",
//     contextSources: "Context Sources (Search Grounding)",
//     targetPersona: "Inferred Target Persona",
//     toneVoice: "Tone of Voice",
//     keyBenefit: "Key Benefit",
//     keywords: "Suggested Keywords",
//     compliancePass: "Platform Compliance Check: Passed",
//     complianceWarn: "Platform Compliance Check: Warnings",
//     emptyStateTitle: "Ready to generate assets",
//     emptyStateSubtitle: "Enter product details to begin",
//     defaultProduct: "Smart Thermal Coffee Maker",
//     defaultFeatures: "Keeps coffee hot for 4 hours, eco-friendly filter, app controlled, stainless steel finish.",
//   },
//   pt: {
//     title: "AdGenius",
//     subtitle: "Gerador de Ativos IA",
//     geminiModel: "Gemini 2.5 Flash",
//     inputTitle: "Dados de Entrada",
//     productNameLabel: "Nome do Produto",
//     productNamePlaceholder: "ex: Cadeira de Escritório Ergonômica",
//     featuresLabel: "Características Principais",
//     featuresPlaceholder: "Liste os benefícios, especificações ou diferenciais...",
//     submitBtnIdle: "Gerar Ativos da Campanha",
//     submitBtnLoading: "Gerando Ativos...",
//     statusSearching: "Pesquisando tendências de mercado...",
//     statusWriting: "Criando textos de alta conversão...",
//     statusDesigning: "Gerando ativos criativos...",
//     errorPrefix: "Erro:",
//     metaTab: "Meta (Facebook/IG)",
//     googleTab: "Google Search",
//     previewSponsored: "Patrocinado",
//     previewBrand: "Nome da Marca",
//     copyJson: "Copiar JSON",
//     copied: "Copiado!",
//     analysisTitle: "Estratégia e Análise RAG",
//     contextSources: "Fontes de Contexto (Pesquisa)",
//     targetPersona: "Persona Inferida",
//     toneVoice: "Tom de Voz",
//     keyBenefit: "Benefício Chave",
//     keywords: "Palavras-chave Sugeridas",
//     compliancePass: "Verificação de Conformidade: Aprovado",
//     complianceWarn: "Verificação de Conformidade: Avisos",
//     emptyStateTitle: "Pronto para gerar ativos",
//     emptyStateSubtitle: "Insira os detalhes do produto para começar",
//     defaultProduct: "Cafeteira Térmica Inteligente",
//     defaultFeatures: "Mantém o café quente por 4 horas, filtro ecológico, controlado por app, acabamento em aço inoxidável.",
//   },
//   es: {
//     title: "AdGenius",
//     subtitle: "Generador de Activos IA",
//     geminiModel: "Gemini 2.5 Flash",
//     inputTitle: "Datos de Entrada",
//     productNameLabel: "Nombre del Producto",
//     productNamePlaceholder: "ej: Silla de Oficina Ergonómica",
//     featuresLabel: "Características Principales",
//     featuresPlaceholder: "Enumere los beneficios, especificaciones o puntos únicos...",
//     submitBtnIdle: "Generar Activos de Campaña",
//     submitBtnLoading: "Generando Activos...",
//     statusSearching: "Buscando tendencias del mercado...",
//     statusWriting: "Redactando textos de alta conversión...",
//     statusDesigning: "Generando activos creativos...",
//     errorPrefix: "Error:",
//     metaTab: "Meta (Facebook/IG)",
//     googleTab: "Búsqueda de Google",
//     previewSponsored: "Patrocinado",
//     previewBrand: "Nombre de la Marca",
//     copyJson: "Copiar JSON",
//     copied: "¡Copiado!",
//     analysisTitle: "Estrategia y Análisis RAG",
//     contextSources: "Fuentes de Contexto (Búsqueda)",
//     targetPersona: "Persona Inferida",
//     toneVoice: "Tono de Voz",
//     keyBenefit: "Beneficio Clave",
//     keywords: "Palabras Clave Sugeridas",
//     compliancePass: "Verificación de Cumplimiento: Aprobado",
//     complianceWarn: "Verificación de Cumplimiento: Advertencias",
//     emptyStateTitle: "Listo para generar activos",
//     emptyStateSubtitle: "Ingrese detalles del producto para comenzar",
//     defaultProduct: "Cafetera Térmica Inteligente",
//     defaultFeatures: "Mantiene el café caliente por 4 horas, filtro ecológico, control por app, acabado en acero inoxidable.",
//   }
// };

// const App: React.FC = () => {
//   const [language, setLanguage] = useState<Language>('pt');
//   const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);
//   const [result, setResult] = useState<GeneratedAdCampaign | null>(null);
//   const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
//   const [searchSources, setSearchSources] = useState<{ title: string; uri: string }[] | undefined>(undefined);
//   const [error, setError] = useState<string | null>(null);

//   const t = translations[language];

//   const handleGenerate = async (productName: string, features: string) => {
//     setStatus(GenerationStatus.SEARCHING);
//     setError(null);
//     setResult(null);
//     setImageUrl(undefined);
//     setSearchSources(undefined);

//     try {
//       // Step 1: Generate Text Content (with RAG)
//       setStatus(GenerationStatus.WRITING);
//       const { campaign, sources } = await generateAdContent(productName, features, language);
//       setResult(campaign);
//       setSearchSources(sources);

//       // Step 2: Generate Image
//       setStatus(GenerationStatus.DESIGNING);
//       const imageBase64 = await generateAdImage(productName, campaign);
//       setImageUrl(imageBase64);

//       setStatus(GenerationStatus.COMPLETED);
//     } catch (err: any) {
//       console.error(err);
//       setError(err.message || "An error occurred while generating assets. Please check your API key.");
//       setStatus(GenerationStatus.ERROR);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
//       {/* Header */}
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//              <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white p-1.5 rounded-lg">
//                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                </svg>
//              </div>
//              <div>
//                 <h1 className="text-xl font-bold tracking-tight text-gray-900">{t.title}</h1>
//                 <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold leading-none">{t.subtitle}</p>
//              </div>
//           </div>
//           <div className="flex items-center gap-4">
//              {/* Language Selector */}
//              <select 
//                value={language} 
//                onChange={(e) => setLanguage(e.target.value as Language)}
//                className="text-sm border-gray-300 border rounded-md px-2 py-1 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//              >
//                <option value="pt">🇧🇷 PT</option>
//                <option value="en">🇺🇸 EN</option>
//                <option value="es">🇪🇸 ES</option>
//              </select>

//              <span className="hidden sm:inline-block text-xs font-medium px-2.5 py-1 bg-green-100 text-green-700 rounded-full border border-green-200">
//                {t.geminiModel}
//              </span>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-6">

//         {/* Input Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//            <div className="lg:col-span-1">
//              <InputForm 
//                onSubmit={handleGenerate} 
//                isLoading={status !== GenerationStatus.IDLE && status !== GenerationStatus.COMPLETED && status !== GenerationStatus.ERROR} 
//                t={t}
//                key={language} // Reset form defaults when language changes
//              />

//              {/* Status Indicator */}
//              {status !== GenerationStatus.IDLE && status !== GenerationStatus.ERROR && status !== GenerationStatus.COMPLETED && (
//                <div className="mt-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm animate-pulse">
//                   <div className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
//                     <span className="text-sm font-medium text-blue-700">
//                       {status === GenerationStatus.SEARCHING && t.statusSearching}
//                       {status === GenerationStatus.WRITING && t.statusWriting}
//                       {status === GenerationStatus.DESIGNING && t.statusDesigning}
//                     </span>
//                   </div>
//                </div>
//              )}

//              {error && (
//                <div className="mt-4 bg-red-50 p-4 rounded-xl border border-red-200 text-red-700 text-sm">
//                  <strong>{t.errorPrefix}</strong> {error}
//                </div>
//              )}
//            </div>

//            {/* Results Section */}
//            <div className="lg:col-span-2 space-y-6">
//               {result ? (
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
//                    {/* Left Column: Preview */}
//                    <div className="flex flex-col gap-6 h-full">
//                       <div className="flex-1 min-h-0">
//                         <AdPreview campaign={result} imageUrl={imageUrl} t={t} />
//                       </div>
//                    </div>

//                    {/* Right Column: JSON & Analysis */}
//                    <div className="flex flex-col gap-6 h-full">
//                       <div className="flex-1 min-h-0">
//                          <AnalysisPanel data={result} sources={searchSources} t={t} />
//                       </div>
//                       <div className="flex-1 min-h-0">
//                          <JsonOutput data={result} t={t} />
//                       </div>
//                    </div>
//                 </div>
//               ) : (
//                 <div className="h-full min-h-[400px] bg-white rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
//                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                    </svg>
//                    <p className="text-lg font-medium">{t.emptyStateTitle}</p>
//                    <p className="text-sm">{t.emptyStateSubtitle}</p>
//                 </div>
//               )}
//            </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;



// import React, { useState } from 'react';
// import { InputForm } from './components/InputForm';
// import { AdPreview } from './components/AdPreview';
// import { JsonOutput } from './components/JsonOutput';
// import { AnalysisPanel } from './components/AnalysisPanel';
// import { generateAdContent, generateAdImage } from './services/geminiService';
// import { GeneratedAdCampaign, GenerationStatus, Language } from './types';

// // Translations Dictionary
// const translations = {
//   en: {
//     title: "AdGenius",
//     subtitle: "AI Asset Generator",
//     geminiModel: "Gemini 2.5 Flash",
//     inputTitle: "Input Data",
//     productNameLabel: "Product Name",
//     productNamePlaceholder: "e.g., Ergonomic Office Chair",
//     featuresLabel: "Key Features & Characteristics",
//     featuresPlaceholder: "List the benefits, specs, or unique selling points...",
//     submitBtnIdle: "Generate Campaign Assets",
//     submitBtnLoading: "Generating Assets...",
//     statusSearching: "Searching market trends...",
//     statusWriting: "Drafting high-conversion copy...",
//     statusDesigning: "Generating creative assets...",
//     errorPrefix: "Error:",
//     metaTab: "Meta (Facebook/IG)",
//     googleTab: "Google Search",
//     previewSponsored: "Sponsored",
//     previewBrand: "Brand Name",
//     copyJson: "Copy JSON",
//     copied: "Copied!",
//     analysisTitle: "Strategy & RAG Analysis",
//     contextSources: "Context Sources (Search Grounding)",
//     targetPersona: "Inferred Target Persona",
//     toneVoice: "Tone of Voice",
//     keyBenefit: "Key Benefit",
//     keywords: "Suggested Keywords",
//     compliancePass: "Platform Compliance Check: Passed",
//     complianceWarn: "Platform Compliance Check: Warnings",
//     emptyStateTitle: "Ready to generate assets",
//     emptyStateSubtitle: "Enter product details to begin",
//     defaultProduct: "Smart Thermal Coffee Maker",
//     defaultFeatures: "Keeps coffee hot for 4 hours, eco-friendly filter, app controlled, stainless steel finish.",
//   },
//   pt: {
//     title: "AdGenius",
//     subtitle: "Gerador de Ativos IA",
//     geminiModel: "Gemini 2.5 Flash",
//     inputTitle: "Dados de Entrada",
//     productNameLabel: "Nome do Produto",
//     productNamePlaceholder: "ex: Cadeira de Escritório Ergonômica",
//     featuresLabel: "Características Principais",
//     featuresPlaceholder: "Liste os benefícios, especificações ou diferenciais...",
//     submitBtnIdle: "Gerar Ativos da Campanha",
//     submitBtnLoading: "Gerando Ativos...",
//     statusSearching: "Pesquisando tendências de mercado...",
//     statusWriting: "Criando textos de alta conversão...",
//     statusDesigning: "Gerando ativos criativos...",
//     errorPrefix: "Erro:",
//     metaTab: "Meta (Facebook/IG)",
//     googleTab: "Google Search",
//     previewSponsored: "Patrocinado",
//     previewBrand: "Nome da Marca",
//     copyJson: "Copiar JSON",
//     copied: "Copiado!",
//     analysisTitle: "Estratégia e Análise RAG",
//     contextSources: "Fontes de Contexto (Pesquisa)",
//     targetPersona: "Persona Inferida",
//     toneVoice: "Tom de Voz",
//     keyBenefit: "Benefício Chave",
//     keywords: "Palavras-chave Sugeridas",
//     compliancePass: "Verificação de Conformidade: Aprovado",
//     complianceWarn: "Verificação de Conformidade: Avisos",
//     emptyStateTitle: "Pronto para gerar ativos",
//     emptyStateSubtitle: "Insira os detalhes do produto para começar",
//     defaultProduct: "Cafeteira Térmica Inteligente",
//     defaultFeatures: "Mantém o café quente por 4 horas, filtro ecológico, controlado por app, acabamento em aço inoxidável.",
//   },
//   es: {
//     title: "AdGenius",
//     subtitle: "Generador de Activos IA",
//     geminiModel: "Gemini 2.5 Flash",
//     inputTitle: "Datos de Entrada",
//     productNameLabel: "Nombre del Producto",
//     productNamePlaceholder: "ej: Silla de Oficina Ergonómica",
//     featuresLabel: "Características Principales",
//     featuresPlaceholder: "Enumere los beneficios, especificaciones o puntos únicos...",
//     submitBtnIdle: "Generar Activos de Campaña",
//     submitBtnLoading: "Generando Activos...",
//     statusSearching: "Buscando tendencias del mercado...",
//     statusWriting: "Redactando textos de alta conversión...",
//     statusDesigning: "Generando activos creativos...",
//     errorPrefix: "Error:",
//     metaTab: "Meta (Facebook/IG)",
//     googleTab: "Búsqueda de Google",
//     previewSponsored: "Patrocinado",
//     previewBrand: "Nombre de la Marca",
//     copyJson: "Copiar JSON",
//     copied: "¡Copiado!",
//     analysisTitle: "Estrategia y Análisis RAG",
//     contextSources: "Fuentes de Contexto (Búsqueda)",
//     targetPersona: "Persona Inferida",
//     toneVoice: "Tono de Voz",
//     keyBenefit: "Beneficio Clave",
//     keywords: "Palabras Clave Sugeridas",
//     compliancePass: "Verificación de Cumplimiento: Aprobado",
//     complianceWarn: "Verificación de Cumplimiento: Advertencias",
//     emptyStateTitle: "Listo para generar activos",
//     emptyStateSubtitle: "Ingrese detalles del producto para comenzar",
//     defaultProduct: "Cafetera Térmica Inteligente",
//     defaultFeatures: "Mantiene el café caliente por 4 horas, filtro ecológico, control por app, acabado en acero inoxidable.",
//   }
// };

// const App: React.FC = () => {
//   const [language, setLanguage] = useState<Language>('pt');
//   const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);
//   const [result, setResult] = useState<GeneratedAdCampaign | null>(null);
//   const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
//   const [searchSources, setSearchSources] = useState<{ title: string; uri: string }[] | undefined>(undefined);
//   const [error, setError] = useState<string | null>(null);

//   const t = translations[language];

//   const handleGenerate = async (productName: string, features: string) => {
//     setStatus(GenerationStatus.SEARCHING);
//     setError(null);
//     setResult(null);
//     setImageUrl(undefined);
//     setSearchSources(undefined);

//     try {
//       // Step 1: Generate Text Content (with RAG)
//       setStatus(GenerationStatus.WRITING);
//       const { campaign, sources } = await generateAdContent(productName, features, language);
//       setResult(campaign);
//       setSearchSources(sources);

//       // Step 2: Generate Image
//       setStatus(GenerationStatus.DESIGNING);
//       // We now pass features directly to the image generator for better accuracy
//       const imageBase64 = await generateAdImage(productName, features, campaign);
//       setImageUrl(imageBase64);

//       setStatus(GenerationStatus.COMPLETED);
//     } catch (err: any) {
//       console.error(err);
//       setError(err.message || "An error occurred while generating assets. Please check your API key.");
//       setStatus(GenerationStatus.ERROR);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
//       {/* Header */}
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white p-1.5 rounded-lg">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//             </div>
//             <div>
//               <h1 className="text-xl font-bold tracking-tight text-gray-900">{t.title}</h1>
//               <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold leading-none">{t.subtitle}</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             {/* Language Selector */}
//             <select
//               value={language}
//               onChange={(e) => setLanguage(e.target.value as Language)}
//               className="text-sm border-gray-300 border rounded-md px-2 py-1 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="pt">🇧🇷 PT</option>
//               <option value="en">🇺🇸 EN</option>
//               <option value="es">🇪🇸 ES</option>
//             </select>

//             <span className="hidden sm:inline-block text-xs font-medium px-2.5 py-1 bg-green-100 text-green-700 rounded-full border border-green-200">
//               {t.geminiModel}
//             </span>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-6">

//         {/* Input Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-1">
//             <InputForm
//               onSubmit={handleGenerate}
//               isLoading={status !== GenerationStatus.IDLE && status !== GenerationStatus.COMPLETED && status !== GenerationStatus.ERROR}
//               t={t}
//               key={language} // Reset form defaults when language changes
//             />

//             {/* Status Indicator */}
//             {status !== GenerationStatus.IDLE && status !== GenerationStatus.ERROR && status !== GenerationStatus.COMPLETED && (
//               <div className="mt-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm animate-pulse">
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
//                   <span className="text-sm font-medium text-blue-700">
//                     {status === GenerationStatus.SEARCHING && t.statusSearching}
//                     {status === GenerationStatus.WRITING && t.statusWriting}
//                     {status === GenerationStatus.DESIGNING && t.statusDesigning}
//                   </span>
//                 </div>
//               </div>
//             )}

//             {error && (
//               <div className="mt-4 bg-red-50 p-4 rounded-xl border border-red-200 text-red-700 text-sm">
//                 <strong>{t.errorPrefix}</strong> {error}
//               </div>
//             )}
//           </div>

//           {/* Results Section */}
//           <div className="lg:col-span-2 space-y-6">
//             {result ? (
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
//                 {/* Left Column: Preview */}
//                 <div className="flex flex-col gap-6 h-full">
//                   <div className="flex-1 min-h-0">
//                     <AdPreview campaign={result} imageUrl={imageUrl} t={t} />
//                   </div>
//                 </div>

//                 {/* Right Column: JSON & Analysis */}
//                 <div className="flex flex-col gap-6 h-full">
//                   <div className="flex-1 min-h-0">
//                     <AnalysisPanel data={result} sources={searchSources} t={t} />
//                   </div>
//                   <div className="flex-1 min-h-0">
//                     <JsonOutput data={result} t={t} />
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="h-full min-h-[400px] bg-white rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//                 <p className="text-lg font-medium">{t.emptyStateTitle}</p>
//                 <p className="text-sm">{t.emptyStateSubtitle}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;






import React, { useState, useRef } from 'react';
import { InputForm } from './components/InputForm';
import { AdPreview } from './components/AdPreview';
import { JsonOutput } from './components/JsonOutput';
import { AnalysisPanel } from './components/AnalysisPanel';
import { generateAdContent, generateAdImage } from './services/geminiService';
import { GeneratedAdCampaign, GenerationStatus, Language } from './types';

// Translations Dictionary
const translations = {
  en: {
    title: "AdGenius",
    subtitle: "AI Asset Generator",
    geminiModel: "Gemini 2.5 Flash",
    inputTitle: "Input Data",
    brandLabel: "Brand Name (Optional)",
    brandPlaceholder: "e.g., CoffeeMaster",
    siteLabel: "Website URL (Optional)",
    sitePlaceholder: "e.g., coffeemaster.com",
    productNameLabel: "Product Name",
    productNamePlaceholder: "e.g., Smart Thermal Coffee Maker",
    featuresLabel: "Key Features & Characteristics",
    featuresPlaceholder: "List the benefits, specs, or unique selling points...",
    photoLabel: "Product Photo (Optional)",
    photoHelp: "Upload a photo to use directly or as a reference for AI.",
    useAiForImage: "Use AI to generate/enhance image based on upload",
    useOriginalImage: "Use original uploaded image",
    removePhoto: "Remove",
    submitBtnIdle: "Generate Campaign Assets",
    submitBtnLoading: "Generating Assets...",
    statusSearching: "Searching market trends...",
    statusWriting: "Drafting high-conversion copy...",
    statusDesigning: "Generating creative assets...",
    errorPrefix: "Error:",
    metaTab: "Meta (Facebook/IG)",
    googleTab: "Google Search",
    previewSponsored: "Sponsored",
    previewBrand: "Brand Name",
    copyJson: "Copy JSON",
    copied: "Copied!",
    analysisTitle: "Strategy & RAG Analysis",
    contextSources: "Context Sources (Search Grounding)",
    targetPersona: "Inferred Target Persona",
    toneVoice: "Tone of Voice",
    keyBenefit: "Key Benefit",
    keywords: "Suggested Keywords",
    compliancePass: "Platform Compliance Check: Passed",
    complianceWarn: "Platform Compliance Check: Warnings",
    emptyStateTitle: "Ready to generate assets",
    emptyStateSubtitle: "Enter product details to begin",
    defaultProduct: "Smart Thermal Coffee Maker",
    defaultFeatures: "Keeps coffee hot for 4 hours, eco-friendly filter, app controlled, stainless steel finish.",
  },
  pt: {
    title: "AdGenius",
    subtitle: "Gerador de Ativos IA",
    geminiModel: "Gemini 2.5 Flash",
    inputTitle: "Dados de Entrada",
    brandLabel: "Nome da Marca (Opcional)",
    brandPlaceholder: "ex: CaféMaster",
    siteLabel: "Site (Opcional)",
    sitePlaceholder: "ex: cafemaster.com.br",
    productNameLabel: "Nome do Produto",
    productNamePlaceholder: "ex: Cafeteira Térmica Inteligente",
    featuresLabel: "Características Principais",
    featuresPlaceholder: "Liste os benefícios, especificações ou diferenciais...",
    photoLabel: "Foto do Produto (Opcional)",
    photoHelp: "Carregue uma foto para usar diretamente ou como referência para IA.",
    useAiForImage: "Usar IA para gerar/melhorar baseada na foto",
    useOriginalImage: "Usar foto original carregada",
    removePhoto: "Remover",
    submitBtnIdle: "Gerar Ativos da Campanha",
    submitBtnLoading: "Gerando Ativos...",
    statusSearching: "Pesquisando tendências de mercado...",
    statusWriting: "Criando textos de alta conversão...",
    statusDesigning: "Gerando ativos criativos...",
    errorPrefix: "Erro:",
    metaTab: "Meta (Facebook/IG)",
    googleTab: "Google Search",
    previewSponsored: "Patrocinado",
    previewBrand: "Nome da Marca",
    copyJson: "Copiar JSON",
    copied: "Copiado!",
    analysisTitle: "Estratégia e Análise RAG",
    contextSources: "Fontes de Contexto (Pesquisa)",
    targetPersona: "Persona Inferida",
    toneVoice: "Tom de Voz",
    keyBenefit: "Benefício Chave",
    keywords: "Palavras-chave Sugeridas",
    compliancePass: "Verificação de Conformidade: Aprovado",
    complianceWarn: "Verificação de Conformidade: Avisos",
    emptyStateTitle: "Pronto para gerar ativos",
    emptyStateSubtitle: "Insira os detalhes do produto para começar",
    defaultProduct: "Cafeteira Térmica Inteligente",
    defaultFeatures: "Mantém o café quente por 4 horas, filtro ecológico, controlado por app, acabamento em aço inoxidável.",
  },
  es: {
    title: "AdGenius",
    subtitle: "Generador de Activos IA",
    geminiModel: "Gemini 2.5 Flash",
    inputTitle: "Datos de Entrada",
    brandLabel: "Nombre de la Marca (Opcional)",
    brandPlaceholder: "ej: CaféMaster",
    siteLabel: "Sitio Web (Opcional)",
    sitePlaceholder: "ej: cafemaster.com",
    productNameLabel: "Nombre del Producto",
    productNamePlaceholder: "ej: Cafetera Térmica Inteligente",
    featuresLabel: "Características Principales",
    featuresPlaceholder: "Enumere los beneficios, especificaciones o puntos únicos...",
    photoLabel: "Foto del Producto (Opcional)",
    photoHelp: "Sube una foto para usarla directamente o como referencia.",
    useAiForImage: "Usar IA para generar/mejorar basada en foto",
    useOriginalImage: "Usar foto original subida",
    removePhoto: "Eliminar",
    submitBtnIdle: "Generar Activos de Campaña",
    submitBtnLoading: "Generando Activos...",
    statusSearching: "Buscando tendencias del mercado...",
    statusWriting: "Redactando textos de alta conversión...",
    statusDesigning: "Generando activos creativos...",
    errorPrefix: "Error:",
    metaTab: "Meta (Facebook/IG)",
    googleTab: "Búsqueda de Google",
    previewSponsored: "Patrocinado",
    previewBrand: "Nombre de la Marca",
    copyJson: "Copiar JSON",
    copied: "¡Copiado!",
    analysisTitle: "Estrategia y Análisis RAG",
    contextSources: "Fuentes de Contexto (Búsqueda)",
    targetPersona: "Persona Inferida",
    toneVoice: "Tono de Voz",
    keyBenefit: "Beneficio Clave",
    keywords: "Palabras Clave Sugeridas",
    compliancePass: "Verificación de Cumplimiento: Aprobado",
    complianceWarn: "Verificación de Cumplimiento: Advertencias",
    emptyStateTitle: "Listo para generar activos",
    emptyStateSubtitle: "Ingrese detalles del producto para comenzar",
    defaultProduct: "Cafetera Térmica Inteligente",
    defaultFeatures: "Mantiene el café caliente por 4 horas, filtro ecológico, control por app, acabado en acero inoxidable.",
  }
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('pt');
  const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);

  // Input State
  const [brandName, setBrandName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [productName, setProductName] = useState('');
  const [features, setFeatures] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [useAiGeneration, setUseAiGeneration] = useState(true);

  // Result State
  const [result, setResult] = useState<GeneratedAdCampaign | null>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [searchSources, setSearchSources] = useState<{ title: string; uri: string }[] | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  const resultsRef = useRef<HTMLDivElement>(null);

  const t = translations[language];

  const handleGenerate = async () => {
    setStatus(GenerationStatus.SEARCHING);
    setError(null);
    setResult(null);
    setImageUrl(undefined);
    setSearchSources(undefined);

    try {
      // Step 1: Generate Text Content (with RAG)
      setStatus(GenerationStatus.WRITING);
      const { campaign, sources } = await generateAdContent(productName, features, language);
      
      // Inject user-provided URL if available
      if (websiteUrl) {
        campaign.campaign_config.final_url = websiteUrl;
      }

      setResult(campaign);
      setSearchSources(sources);

      // Step 2: Generate Image
      setStatus(GenerationStatus.DESIGNING);

      const imageResult = await generateAdImage(
        productName,
        features,
        campaign,
        uploadedImage,
        useAiGeneration
      );

      setImageUrl(imageResult);
      
      // Inject Image URL into JSON result
      if (imageResult) {
          // If it's a base64 string, we might want to simulate a hosted URL or just put the base64 (though large)
          // For this demo, we'll put a placeholder or the base64 if needed. 
          // Ideally, in a real app, we'd upload this to S3/Cloudinary and put the link here.
          campaign.assets.image_url = "https://your-cdn.com/generated-image.jpg"; // Placeholder for clean JSON
      }

      setStatus(GenerationStatus.COMPLETED);

      // Scroll to results on mobile/if needed
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);

    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred while generating assets. Please check your API key.");
      setStatus(GenerationStatus.ERROR);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white p-1.5 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900">{t.title}</h1>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold leading-none">{t.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value as Language);
                // Reset defaults when language changes if fields are empty/default
                if (!productName) setProductName(translations[e.target.value as Language].defaultProduct);
                if (!features) setFeatures(translations[e.target.value as Language].defaultFeatures);
              }}
              className="text-sm border-gray-300 border rounded-md px-2 py-1 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="pt">🇧🇷 PT</option>
              <option value="en">🇺🇸 EN</option>
              <option value="es">🇪🇸 ES</option>
            </select>

            <span className="hidden sm:inline-block text-xs font-medium px-2.5 py-1 bg-green-100 text-green-700 rounded-full border border-green-200">
              {t.geminiModel}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-6">

        {/* Input Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          <div className="lg:col-span-1">
            <InputForm
              onSubmit={handleGenerate}
              isLoading={status !== GenerationStatus.IDLE && status !== GenerationStatus.COMPLETED && status !== GenerationStatus.ERROR}
              t={t}
              brandName={brandName}
              setBrandName={setBrandName}
              websiteUrl={websiteUrl}
              setWebsiteUrl={setWebsiteUrl}
              productName={productName}
              setProductName={setProductName}
              features={features}
              setFeatures={setFeatures}
              uploadedImage={uploadedImage}
              setUploadedImage={setUploadedImage}
              useAiGeneration={useAiGeneration}
              setUseAiGeneration={setUseAiGeneration}
            />

            {/* Status Indicator */}
            {status !== GenerationStatus.IDLE && status !== GenerationStatus.ERROR && status !== GenerationStatus.COMPLETED && (
              <div className="mt-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                  <span className="text-sm font-medium text-blue-700">
                    {status === GenerationStatus.SEARCHING && t.statusSearching}
                    {status === GenerationStatus.WRITING && t.statusWriting}
                    {status === GenerationStatus.DESIGNING && t.statusDesigning}
                  </span>
                </div>
              </div>
            )}

            {error && (
              <div className="mt-4 bg-red-50 p-4 rounded-xl border border-red-200 text-red-700 text-sm">
                <strong>{t.errorPrefix}</strong> {error}
              </div>
            )}
          </div>

          {/* Results Section */}
          <div ref={resultsRef} className="lg:col-span-2 space-y-6 lg:sticky lg:top-24 h-fit">
            {result ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
                {/* Left Column: Preview */}
                <div className="flex flex-col gap-6 h-full">
                  <div className="flex-1 min-h-0">
                    <AdPreview
                      campaign={result}
                      imageUrl={imageUrl}
                      brandName={brandName}
                      websiteUrl={websiteUrl}
                      t={t}
                    />
                  </div>
                </div>

                {/* Right Column: JSON & Analysis */}
                <div className="flex flex-col gap-6 h-full">
                  <div className="flex-1 min-h-0">
                    <AnalysisPanel data={result} sources={searchSources} t={t} />
                  </div>
                  <div className="flex-1 min-h-0">
                    <JsonOutput data={result} t={t} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[400px] bg-white rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-lg font-medium">{t.emptyStateTitle}</p>
                <p className="text-sm">{t.emptyStateSubtitle}</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;