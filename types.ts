// export type Language = 'en' | 'pt' | 'es';

// export interface MetaAd {
//   headline: string; // Max 25-40 chars
//   body: string; // Max 90-125 chars
//   cta: string;
//   link_description: string;
// }

// export interface GoogleAd {
//   headlines: string[]; // Max 30 chars each, usually 3
//   descriptions: string[]; // Max 90 chars each, usually 2
//   path: string;
// }

// export interface AdMetadata {
//   campaign_name_suggestion: string;
//   target_audience_inferred: string;
//   tone_of_voice: string;
//   key_benefit_highlighted: string;
//   compliance_check: boolean;
//   keywords: string[];
// }

// export interface GeneratedAdCampaign {
//   meta_ad: MetaAd;
//   google_ad: GoogleAd;
//   metadata: AdMetadata;
// }

// export interface GenerationResult {
//   campaign: GeneratedAdCampaign;
//   imageUrl?: string;
//   searchSources?: { title: string; uri: string }[];
// }

// export enum GenerationStatus {
//   IDLE = 'IDLE',
//   SEARCHING = 'SEARCHING',
//   WRITING = 'WRITING',
//   DESIGNING = 'DESIGNING',
//   COMPLETED = 'COMPLETED',
//   ERROR = 'ERROR',
// }



export type Language = 'en' | 'pt' | 'es';

export interface MetaAd {
  headline: string; // Max 25-40 chars
  body: string; // Max 90-125 chars
  cta: string;
  link_description: string;
}

export interface GoogleAd {
  headlines: string[]; // Max 30 chars each, usually 3
  descriptions: string[]; // Max 90 chars each, usually 2
  path: string;
}

export interface AdMetadata {
  campaign_name_suggestion: string;
  target_audience_inferred: string;
  tone_of_voice: string;
  key_benefit_highlighted: string;
  image_prompt: string; // New field: Physical description for image generation
  compliance_check: boolean;
  keywords: string[];
}

export interface GeneratedAdCampaign {
  meta_ad: MetaAd;
  google_ad: GoogleAd;
  metadata: AdMetadata;
}

export interface GenerationResult {
  campaign: GeneratedAdCampaign;
  imageUrl?: string;
  searchSources?: { title: string; uri: string }[];
}

export enum GenerationStatus {
  IDLE = 'IDLE',
  SEARCHING = 'SEARCHING',
  WRITING = 'WRITING',
  DESIGNING = 'DESIGNING',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR',
}