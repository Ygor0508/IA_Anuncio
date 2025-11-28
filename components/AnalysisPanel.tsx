// import React from 'react';
// import { GeneratedAdCampaign } from '../types';

// interface AnalysisPanelProps {
//   data: GeneratedAdCampaign;
//   sources?: { title: string; uri: string }[];
//   t: any;
// }

// export const AnalysisPanel: React.FC<AnalysisPanelProps> = ({ data, sources, t }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-full overflow-y-auto custom-scrollbar">
//       <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//         </svg>
//         {t.analysisTitle}
//       </h3>

//       <div className="space-y-6">

//         {/* RAG Sources */}
//         {sources && sources.length > 0 && (
//             <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
//                 <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2">{t.contextSources}</h4>
//                 <ul className="space-y-2">
//                     {sources.slice(0, 3).map((source, idx) => (
//                         <li key={idx} className="text-sm text-blue-700 truncate hover:underline">
//                             <a href={source.uri} target="_blank" rel="noreferrer" className="flex items-center gap-2">
//                                 <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
//                                 {source.title}
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         )}

//         {/* Inferred Audience */}
//         <div>
//             <h4 className="text-sm font-medium text-gray-500 mb-1">{t.targetPersona}</h4>
//             <div className="bg-gray-100 rounded-md p-3 text-gray-800 text-sm">
//                 {data.metadata.target_audience_inferred}
//             </div>
//         </div>

//         {/* Tone & Key Benefit */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//                 <h4 className="text-sm font-medium text-gray-500 mb-1">{t.toneVoice}</h4>
//                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
//                     {data.metadata.tone_of_voice}
//                 </span>
//             </div>
//             <div>
//                 <h4 className="text-sm font-medium text-gray-500 mb-1">{t.keyBenefit}</h4>
//                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 truncate max-w-full">
//                     {data.metadata.key_benefit_highlighted}
//                 </span>
//             </div>
//         </div>

//         {/* Keywords */}
//         <div>
//             <h4 className="text-sm font-medium text-gray-500 mb-2">{t.keywords}</h4>
//             <div className="flex flex-wrap gap-2">
//                 {data.metadata.keywords.map((kw, i) => (
//                     <span key={i} className="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-1 rounded text-xs">
//                         #{kw}
//                     </span>
//                 ))}
//             </div>
//         </div>

//         {/* Validation Status */}
//         <div className="pt-4 border-t border-gray-100">
//              <div className="flex items-center gap-2">
//                 {data.metadata.compliance_check ? (
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                     </svg>
//                 ) : (
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                     </svg>
//                 )}
//                 <span className="text-sm font-medium text-gray-700">
//                     {data.metadata.compliance_check ? t.compliancePass : t.complianceWarn}
//                 </span>
//              </div>
//         </div>

//       </div>
//     </div>
//   );
// };





import React from 'react';
import { GeneratedAdCampaign } from '../types';

interface AnalysisPanelProps {
    data: GeneratedAdCampaign;
    sources?: { title: string; uri: string }[];
    t: any;
}

export const AnalysisPanel: React.FC<AnalysisPanelProps> = ({ data, sources, t }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-full overflow-y-auto custom-scrollbar">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                {t.analysisTitle}
            </h3>

            <div className="space-y-6">

                {/* RAG Sources */}
                {sources && sources.length > 0 && (
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider">{t.contextSources}</h4>
                            <span className="text-xs text-blue-600 font-mono bg-blue-100 px-2 py-0.5 rounded-full">{sources.length}</span>
                        </div>
                        <ul className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar pr-2">
                            {sources.map((source, idx) => (
                                <li key={idx} className="text-sm text-blue-700 truncate hover:underline">
                                    <a href={source.uri} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                                        {source.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Inferred Audience */}
                <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">{t.targetPersona}</h4>
                    <div className="bg-gray-100 rounded-md p-3 text-gray-800 text-sm">
                        {data.metadata.target_audience_inferred}
                    </div>
                </div>

                {/* Tone & Key Benefit */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">{t.toneVoice}</h4>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            {data.metadata.tone_of_voice}
                        </span>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">{t.keyBenefit}</h4>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 truncate max-w-full">
                            {data.metadata.key_benefit_highlighted}
                        </span>
                    </div>
                </div>

                {/* Keywords */}
                <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">{t.keywords}</h4>
                    <div className="flex flex-wrap gap-2">
                        {data.metadata.keywords.map((kw, i) => (
                            <span key={i} className="bg-gray-100 text-gray-600 border border-gray-200 px-2 py-1 rounded text-xs">
                                #{kw}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Validation Status */}
                <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                        {data.metadata.compliance_check ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        )}
                        <span className="text-sm font-medium text-gray-700">
                            {data.metadata.compliance_check ? t.compliancePass : t.complianceWarn}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};