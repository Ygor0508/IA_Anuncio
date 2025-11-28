// import React, { useState } from 'react';

// interface InputFormProps {
//   onSubmit: (name: string, features: string) => void;
//   isLoading: boolean;
//   t: any;
// }

// export const InputForm: React.FC<InputFormProps> = ({ onSubmit, isLoading, t }) => {
//   const [productName, setProductName] = useState(t.defaultProduct);
//   const [features, setFeatures] = useState(t.defaultFeatures);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (productName.trim() && features.trim()) {
//       onSubmit(productName, features);
//     }
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
//         </svg>
//         {t.inputTitle}
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">{t.productNameLabel}</label>
//           <input
//             type="text"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//             placeholder={t.productNamePlaceholder}
//             disabled={isLoading}
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">{t.featuresLabel}</label>
//           <textarea
//             value={features}
//             onChange={(e) => setFeatures(e.target.value)}
//             rows={4}
//             className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
//             placeholder={t.featuresPlaceholder}
//             disabled={isLoading}
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={isLoading}
//           className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-white font-medium transition-all
//             ${isLoading 
//               ? 'bg-blue-400 cursor-not-allowed' 
//               : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
//             }`}
//         >
//           {isLoading ? (
//             <>
//               <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               {t.submitBtnLoading}
//             </>
//           ) : (
//             <>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               {t.submitBtnIdle}
//             </>
//           )}
//         </button>
//       </form>
//     </div>
//   );
// };





import React, { useRef } from 'react';

interface InputFormProps {
  onSubmit: () => void;
  isLoading: boolean;
  t: any;
  // State props
  brandName: string;
  setBrandName: (val: string) => void;
  websiteUrl: string;
  setWebsiteUrl: (val: string) => void;
  productName: string;
  setProductName: (val: string) => void;
  features: string;
  setFeatures: (val: string) => void;
  uploadedImage: string | null;
  setUploadedImage: (val: string | null) => void;
  useAiGeneration: boolean;
  setUseAiGeneration: (val: boolean) => void;
}

export const InputForm: React.FC<InputFormProps> = ({
  onSubmit,
  isLoading,
  t,
  brandName, setBrandName,
  websiteUrl, setWebsiteUrl,
  productName, setProductName,
  features, setFeatures,
  uploadedImage, setUploadedImage,
  useAiGeneration, setUseAiGeneration
}) => {

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (productName.trim() && features.trim()) {
      onSubmit();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setUploadedImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
        {t.inputTitle}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Brand Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.brandLabel}</label>
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder={t.brandPlaceholder}
            disabled={isLoading}
          />
        </div>

        {/* Website URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.siteLabel}</label>
          <input
            type="text"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder={t.sitePlaceholder}
            disabled={isLoading}
          />
        </div>

        {/* Product Name (Required) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t.productNameLabel} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder={t.productNamePlaceholder}
            disabled={isLoading}
            required
          />
        </div>

        {/* Features (Required) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t.featuresLabel} <span className="text-red-500">*</span>
          </label>
          <textarea
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
            placeholder={t.featuresPlaceholder}
            disabled={isLoading}
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.photoLabel}</label>
          <div className="mt-1 flex flex-col gap-2">
            {!uploadedImage ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-xs text-gray-500">{t.photoHelp}</p>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                  disabled={isLoading}
                />
              </div>
            ) : (
              <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <img src={uploadedImage} alt="Upload" className="w-12 h-12 object-cover rounded" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-700 truncate">Image uploaded</p>
                    <button
                      type="button"
                      onClick={() => { setUploadedImage(null); if (fileInputRef.current) fileInputRef.current.value = '' }}
                      className="text-xs text-red-600 hover:text-red-800"
                    >
                      {t.removePhoto}
                    </button>
                  </div>
                </div>

                {/* Toggle: Use AI vs Use Original */}
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="imgMode"
                      checked={!useAiGeneration}
                      onChange={() => setUseAiGeneration(false)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    {t.useOriginalImage}
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="imgMode"
                      checked={useAiGeneration}
                      onChange={() => setUseAiGeneration(true)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    {t.useAiForImage}
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-white font-medium transition-all
            ${isLoading
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
            }`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t.submitBtnLoading}
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {t.submitBtnIdle}
            </>
          )}
        </button>
      </form>
    </div>
  );
};