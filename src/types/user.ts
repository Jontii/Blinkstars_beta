export interface User {
  id: string;
  avatar: string;
  email: string;
  name: string;
  tier: 'Company' | 'Influencer';
  about?: string;
  [key: string]: any;
}
