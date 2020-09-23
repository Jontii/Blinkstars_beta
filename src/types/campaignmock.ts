export interface CampaignMock {
  campaignTitle: string;
  campaignUrl: string;
  campaignDescription: string;
  companyName: string;
  companyAvatar: string;
  campaignBudget?: string;
  influencerText: string;
  hashtags: string[];
  countryTags?: string[];
  value?: number;
  roleTags: string[];
  files: any[];
  startDate: number;
  endDate: number;
}
