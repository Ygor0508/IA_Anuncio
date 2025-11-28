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

export interface CampaignConfig {
  status: string; // "PAUSED" | "ACTIVE"
  daily_budget: number;
  currency: string;
  final_url: string;
}

export interface Assets {
  image_url?: string;
}

export interface MetaAdPayload {
  headline: string; // Max 25-40 chars
  body: string; // Max 90-125 chars
  call_to_action_type: string;
  link_description?: string;
  targeting: {
    age_min: number;
    age_max: number;
    geo_locations: { countries: string[] };
    interests: string[]; // IDs or names
  };
}

export interface GoogleAdHeadline {
  text: string;
  pinned_field?: string;
}

export interface GoogleAdDescription {
  text: string;
}

export interface GoogleAdKeyword {
  text: string;
  match_type: string; // "PHRASE" | "BROAD" | "EXACT"
}

export interface GoogleAdPayload {
  headlines: GoogleAdHeadline[];
  descriptions: GoogleAdDescription[];
  path?: string;
  keywords: GoogleAdKeyword[];
}

export interface AdMetadata {
  campaign_name_suggestion: string;
  target_audience_inferred: string;
  tone_of_voice: string;
  key_benefit_highlighted: string;
  image_prompt: string;
  compliance_check: boolean;
  keywords: string[]; // Keep simple list for UI display if needed, or derive from payload
}

export interface GeneratedAdCampaign {
  campaign_config: CampaignConfig;
  assets: Assets;
  meta_ad_payload: MetaAdPayload;
  google_ad_payload: GoogleAdPayload;
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