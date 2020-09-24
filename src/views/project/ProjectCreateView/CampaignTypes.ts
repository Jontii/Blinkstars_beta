export interface CreateCampaign {
  campaignTitle: string;
  campaignUrl: string;
  campaignDescription: string;
  campaignBudget: string;
  hashtags: string[];
}

export interface CompanyCampaign {
  companyName: string;
  aboutCompany: string;
}

export interface InfluencerCampaign {
  roleTags: string[];
  countryTags: string[];
  value: number;
}

export interface CompleteCampaign {
  startDate: number;
  endDate: number;
}

export interface ApprovedUsers {
  userAccepted: boolean;
  companyAcceptedUser: boolean;
}
