import React, { useState } from 'react';
import { GeneratedAdCampaign } from '../types';

interface JsonOutputProps {
  data: GeneratedAdCampaign;
  t: any;
}

export const JsonOutput: React.FC<JsonOutputProps> = ({ data, t }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#1e1e1e] rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="bg-[#2d2d2d] px-4 py-3 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-2 text-gray-400 text-xs font-mono">assets.json</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded transition-colors flex items-center gap-1.5"
        >
          {copied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {t.copied}
            </>
          ) : (
             <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              {t.copyJson}
            </>
          )}
        </button>
      </div>
      
      <div className="flex-grow overflow-hidden relative">
        <pre className="custom-scrollbar h-full w-full p-4 overflow-auto text-sm font-mono text-blue-300 leading-relaxed">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
      
      <div className="bg-[#2d2d2d] px-4 py-2 border-t border-gray-700 flex gap-4 text-xs text-gray-400 font-mono">
        <span>Ln {JSON.stringify(data, null, 2).split('\n').length}, Col 1</span>
        <span>UTF-8</span>
        <span>JSON</span>
      </div>
    </div>
  );
};