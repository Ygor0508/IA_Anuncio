// import React, { useState } from 'react';
// import { GeneratedAdCampaign } from '../types';

// interface AdPreviewProps {
//   campaign: GeneratedAdCampaign;
//   imageUrl?: string;
//   t: any;
// }

// export const AdPreview: React.FC<AdPreviewProps> = ({ campaign, imageUrl, t }) => {
//   const [activeTab, setActiveTab] = useState<'meta' | 'google'>('meta');

//   // Fallback image if generation fails or hasn't run
//   const displayImage = imageUrl || `https://picsum.photos/600/600?random=${Math.random()}`;

//   return (
//     <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
//       <div className="border-b border-gray-200 flex">
//         <button
//           onClick={() => setActiveTab('meta')}
//           className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${
//             activeTab === 'meta' 
//               ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' 
//               : 'text-gray-500 hover:text-gray-700'
//           }`}
//         >
//           {t.metaTab}
//         </button>
//         <button
//           onClick={() => setActiveTab('google')}
//           className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${
//             activeTab === 'google' 
//               ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' 
//               : 'text-gray-500 hover:text-gray-700'
//           }`}
//         >
//           {t.googleTab}
//         </button>
//       </div>

//       <div className="p-6 bg-gray-50 flex-grow flex flex-col justify-center items-center">
//         {activeTab === 'meta' ? (
//           /* Meta Ad Preview Card */
//           <div className="w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//             {/* Header */}
//             <div className="p-3 flex items-center gap-2 border-b border-gray-100">
//               <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
//                 L
//               </div>
//               <div className="flex-1">
//                 <h4 className="text-sm font-semibold text-gray-900">{t.previewBrand}</h4>
//                 <p className="text-xs text-gray-500">{t.previewSponsored}</p>
//               </div>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
//               </svg>
//             </div>

//             {/* Ad Body Text */}
//             <div className="px-3 py-2">
//                <p className="text-sm text-gray-800 whitespace-pre-wrap">{campaign.meta_ad.body}</p>
//             </div>

//             {/* Image */}
//             <div className="w-full aspect-square bg-gray-200 relative">
//               <img 
//                 src={displayImage} 
//                 alt="Ad Creative" 
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Footer / CTA */}
//             <div className="p-3 bg-gray-50 flex justify-between items-center border-t border-gray-100">
//               <div className="flex-1 pr-2">
//                  <p className="text-xs text-gray-500 uppercase font-medium tracking-wide">brand.com</p>
//                  <h3 className="text-sm font-bold text-gray-900 leading-tight mt-0.5">{campaign.meta_ad.headline}</h3>
//               </div>
//               <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold py-1.5 px-3 rounded border border-gray-300 transition-colors whitespace-nowrap">
//                 {campaign.meta_ad.cta}
//               </button>
//             </div>
//           </div>
//         ) : (
//           /* Google Ad Preview Card */
//           <div className="w-full max-w-xl bg-white p-4 rounded shadow-sm border border-gray-100">
//             <div className="mb-1 flex items-center gap-2">
//                <span className="text-xs font-bold text-gray-900">{t.previewSponsored}</span>
//                <div className="w-0.5 h-0.5 bg-gray-500 rounded-full"></div>
//                <span className="text-xs text-gray-600 truncate">brand.com{campaign.google_ad.path}</span>
//                <div className="w-0.5 h-0.5 bg-gray-500 rounded-full"></div>
//                <div className="flex text-xs text-blue-700 hover:underline cursor-pointer">
//                   {t.previewBrand}
//                </div>
//             </div>
//             <a href="#" className="block group">
//               <h3 className="text-xl text-blue-800 group-hover:underline leading-snug">
//                 {campaign.google_ad.headlines[0]} | {campaign.google_ad.headlines[1]}
//               </h3>
//             </a>
//             <p className="text-sm text-gray-600 mt-1 leading-relaxed">
//               {campaign.google_ad.descriptions[0]} {campaign.google_ad.descriptions[1]}
//             </p>

//             <div className="mt-3 flex gap-2">
//               {/* Sitelink extensions mockup */}
//               {['Features', 'Pricing', 'Reviews', 'Contact'].map((link, i) => (
//                 <span key={i} className="text-xs text-blue-800 hover:underline cursor-pointer border-r border-gray-300 pr-2 last:border-0">
//                   {link}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };







// import React, { useState } from 'react';
// import { GeneratedAdCampaign } from '../types';

// interface AdPreviewProps {
//   campaign: GeneratedAdCampaign;
//   imageUrl?: string;
//   brandName?: string;
//   websiteUrl?: string;
//   t: any;
// }

// export const AdPreview: React.FC<AdPreviewProps> = ({ campaign, imageUrl, brandName, websiteUrl, t }) => {
//   const [activeTab, setActiveTab] = useState<'meta' | 'google'>('meta');

//   // Fallback image if generation fails or hasn't run
//   const displayImage = imageUrl || `https://picsum.photos/600/600?random=${Math.random()}`;

//   // Display logic
//   const displayBrand = brandName && brandName.trim() !== '' ? brandName : t.previewBrand;
//   const displaySite = websiteUrl && websiteUrl.trim() !== '' ? websiteUrl : 'brand.com';

//   // Clean URL for display (remove https://)
//   const cleanUrl = displaySite.replace(/^https?:\/\//, '').replace(/\/$/, '');

//   return (
//     <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
//       <div className="border-b border-gray-200 flex">
//         <button
//           onClick={() => setActiveTab('meta')}
//           className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${activeTab === 'meta'
//             ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
//             : 'text-gray-500 hover:text-gray-700'
//             }`}
//         >
//           {t.metaTab}
//         </button>
//         <button
//           onClick={() => setActiveTab('google')}
//           className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${activeTab === 'google'
//             ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
//             : 'text-gray-500 hover:text-gray-700'
//             }`}
//         >
//           {t.googleTab}
//         </button>
//       </div>

//       <div className="p-6 bg-gray-50 flex-grow flex flex-col justify-center items-center">
//         {activeTab === 'meta' ? (
//           /* Meta Ad Preview Card */
//           <div className="w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//             {/* Header */}
//             <div className="p-3 flex items-center gap-2 border-b border-gray-100">
//               <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs uppercase">
//                 {displayBrand.substring(0, 1)}
//               </div>
//               <div className="flex-1">
//                 <h4 className="text-sm font-semibold text-gray-900">{displayBrand}</h4>
//                 <p className="text-xs text-gray-500">{t.previewSponsored}</p>
//               </div>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
//               </svg>
//             </div>

//             {/* Ad Body Text */}
//             <div className="px-3 py-2">
//               <p className="text-sm text-gray-800 whitespace-pre-wrap">{campaign.meta_ad.body}</p>
//             </div>

//             {/* Image */}
//             <div className="w-full aspect-square bg-gray-200 relative">
//               <img
//                 src={displayImage}
//                 alt="Ad Creative"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Footer / CTA */}
//             <div className="p-3 bg-gray-50 flex justify-between items-center border-t border-gray-100">
//               <div className="flex-1 pr-2">
//                 <p className="text-xs text-gray-500 uppercase font-medium tracking-wide truncate">{cleanUrl}</p>
//                 <h3 className="text-sm font-bold text-gray-900 leading-tight mt-0.5">{campaign.meta_ad.headline}</h3>
//               </div>
//               <a
//                 href={websiteUrl || '#'}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold py-1.5 px-3 rounded border border-gray-300 transition-colors whitespace-nowrap text-decoration-none"
//               >
//                 {campaign.meta_ad.cta}
//               </a>
//             </div>
//           </div>
//         ) : (
//           /* Google Ad Preview Card */
//           <div className="w-full max-w-xl bg-white p-4 rounded shadow-sm border border-gray-100">
//             <div className="mb-1 flex items-center gap-2">
//               <span className="text-xs font-bold text-gray-900">{t.previewSponsored}</span>
//               <div className="w-0.5 h-0.5 bg-gray-500 rounded-full"></div>
//               <span className="text-xs text-gray-600 truncate">{cleanUrl}{campaign.google_ad.path}</span>
//               <div className="w-0.5 h-0.5 bg-gray-500 rounded-full"></div>
//               <div className="flex text-xs text-blue-700 hover:underline cursor-pointer">
//                 {displayBrand}
//               </div>
//             </div>
//             <a href={websiteUrl || '#'} target="_blank" rel="noreferrer" className="block group">
//               <h3 className="text-xl text-blue-800 group-hover:underline leading-snug">
//                 {campaign.google_ad.headlines[0]} | {campaign.google_ad.headlines[1]}
//               </h3>
//             </a>
//             <p className="text-sm text-gray-600 mt-1 leading-relaxed">
//               {campaign.google_ad.descriptions[0]} {campaign.google_ad.descriptions[1]}
//             </p>

//             <div className="mt-3 flex gap-2">
//               {/* Sitelink extensions mockup */}
//               {['Features', 'Pricing', 'Reviews', 'Contact'].map((link, i) => (
//                 <span key={i} className="text-xs text-blue-800 hover:underline cursor-pointer border-r border-gray-300 pr-2 last:border-0">
//                   {link}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };




import React, { useState } from 'react';
import { GeneratedAdCampaign } from '../types';

interface AdPreviewProps {
  campaign: GeneratedAdCampaign;
  imageUrl?: string;
  brandName?: string;
  websiteUrl?: string;
  t: any;
}

export const AdPreview: React.FC<AdPreviewProps> = ({ campaign, imageUrl, brandName, websiteUrl, t }) => {
  const [activeTab, setActiveTab] = useState<'meta' | 'google'>('meta');

  // Fallback image if generation fails or hasn't run
  const displayImage = imageUrl || `https://picsum.photos/600/600?random=${Math.random()}`;

  // Display logic
  const displayBrand = brandName && brandName.trim() !== '' ? brandName : t.previewBrand;
  const displaySite = websiteUrl && websiteUrl.trim() !== '' ? websiteUrl : 'brand.com';

  // Clean URL for display (remove https://)
  const cleanUrl = displaySite.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full">
      <div className="border-b border-gray-200 flex">
        <button
          onClick={() => setActiveTab('meta')}
          className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${activeTab === 'meta'
            ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
            : 'text-gray-500 hover:text-gray-700'
            }`}
        >
          {t.metaTab}
        </button>
        <button
          onClick={() => setActiveTab('google')}
          className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${activeTab === 'google'
            ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
            : 'text-gray-500 hover:text-gray-700'
            }`}
        >
          {t.googleTab}
        </button>
      </div>

      <div className="p-6 bg-gray-50 flex-grow flex flex-col justify-center items-center">
        {activeTab === 'meta' ? (
          /* Meta Ad Preview Card */
          <div className="w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-3 flex items-center gap-2 border-b border-gray-100 flex-shrink-0">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs uppercase flex-shrink-0">
                {displayBrand.substring(0, 1)}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-900 truncate">{displayBrand}</h4>
                <p className="text-xs text-gray-500 truncate">{t.previewSponsored}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>

            {/* Ad Body Text */}
            <div className="px-3 py-2 flex-shrink-0">
              <p className="text-sm text-gray-800 whitespace-pre-wrap break-words line-clamp-4">{campaign.meta_ad.body}</p>
            </div>

            {/* Image */}
            <div className="w-full aspect-square bg-gray-200 relative flex-shrink-0">
              <img
                src={displayImage}
                alt="Ad Creative"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Footer / CTA - Fixed Layout */}
            <div className="p-3 bg-gray-50 flex items-center gap-3 border-t border-gray-100 mt-auto">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 uppercase font-medium tracking-wide truncate block" title={cleanUrl}>
                  {cleanUrl}
                </p>
                <h3 className="text-sm font-bold text-gray-900 leading-tight mt-0.5 truncate">
                  {campaign.meta_ad.headline}
                </h3>
              </div>
              <a
                href={websiteUrl || '#'}
                target="_blank"
                rel="noreferrer"
                className="flex-shrink-0 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold py-1.5 px-3 rounded border border-gray-300 transition-colors whitespace-nowrap text-decoration-none"
              >
                {campaign.meta_ad.cta}
              </a>
            </div>
          </div>
        ) : (
          /* Google Ad Preview Card */
          <div className="w-full max-w-xl bg-white p-4 rounded shadow-sm border border-gray-100">
            <div className="mb-1 flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-gray-900">{t.previewSponsored}</span>
              <div className="w-0.5 h-0.5 bg-gray-500 rounded-full"></div>
              <span className="text-xs text-gray-600 truncate max-w-[200px]">{cleanUrl}{campaign.google_ad.path}</span>
              <div className="w-0.5 h-0.5 bg-gray-500 rounded-full"></div>
              <div className="flex text-xs text-blue-700 hover:underline cursor-pointer">
                {displayBrand}
              </div>
            </div>
            <a href={websiteUrl || '#'} target="_blank" rel="noreferrer" className="block group">
              <h3 className="text-xl text-blue-800 group-hover:underline leading-snug break-words">
                {campaign.google_ad.headlines[0]} | {campaign.google_ad.headlines[1]}
              </h3>
            </a>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed break-words">
              {campaign.google_ad.descriptions[0]} {campaign.google_ad.descriptions[1]}
            </p>

            <div className="mt-3 flex gap-2 flex-wrap">
              {/* Sitelink extensions mockup */}
              {['Features', 'Pricing', 'Reviews', 'Contact'].map((link, i) => (
                <span key={i} className="text-xs text-blue-800 hover:underline cursor-pointer border-r border-gray-300 pr-2 last:border-0">
                  {link}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};