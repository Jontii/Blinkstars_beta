export interface User {
  id: string;
  avatar: string;
  email: string;
  name: string;
  tier: 'Company' | 'Influencer';
  [key: string]: any;
}
