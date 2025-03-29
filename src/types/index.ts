export interface Campaign {
  id: string;
  title: string;
  description: string;
  brand: Brand;
  compensation: string;
  requirements: string;
  deadline: string;
  status: 'open' | 'closed';
  applied: boolean;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  industry: string;
}

export interface Message {
  id: string;
  sender: string;
  receiver: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  brandId: string;
  brandName: string;
  brandLogo: string;
  unreadCount: number;
  lastMessage: string;
  lastMessageTime: string;
}

export interface Payment {
  id: string;
  campaignId: string;
  campaignTitle: string;
  amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
}

export interface Analytics {
  impressions: number;
  engagement: number;
  clicks: number;
  conversions: number;
  revenue: number;
}

export interface InfluencerProfile {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  followers: number;
  niche: string[];
  platforms: Platform[];
}

export interface Platform {
  name: string;
  username: string;
  followers: number;
  url: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'influencer' | 'brand' | 'admin';
  profile: InfluencerProfile;
} 