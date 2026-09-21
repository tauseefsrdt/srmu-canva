export interface NavItem {
  label: string;
  path: string;
  badge?: string;
  children?: {
    label: string;
    path: string;
    description: string;
    icon?: string;
    services?: string[];
  }[];
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'What We Do', 
    path: '/what-we-do',
    children: [
      {
        label: 'Get Found',
        path: '/get-found',
        description: 'SEO, Local SEO, AI Search & AEO visibility',
        icon: 'Search',
        services: ['SEO', 'Local SEO', 'AI Search', 'AEO']
      },
      {
        label: 'Get Customers',
        path: '/get-customers',
        description: 'Google Ads, Meta Ads, YouTube & Lead Generation',
        icon: 'TrendingUp',
        services: ['Google Ads', 'Meta Ads', 'YouTube Ads', 'Lead Generation', 'Remarketing']
      },
      {
        label: 'Get Remembered',
        path: '/get-remembered',
        description: 'Ad Creatives, Landing Pages & Campaign Design',
        icon: 'Sparkles',
        services: ['Ad Creatives', 'Landing Pages', 'Campaign Design', 'Flyers & Posters']
      }
    ]
  },
  { label: 'Who We Help', path: '/who-we-help' },
  { label: "Let's Talk", path: '/lets-talk' },
];

export const footerServices = [
  { label: 'SEO & Organic Search', path: '/get-found' },
  { label: 'Local SEO & Maps', path: '/get-found' },
  { label: 'AEO & AI Search', path: '/get-found' },
  { label: 'Google & Meta Ads', path: '/get-customers' },
  { label: 'Lead Generation & Remarketing', path: '/get-customers' },
  { label: 'Ad Creatives & Landing Pages', path: '/get-remembered' },
  { label: 'Campaign Design & Print', path: '/get-remembered' },
];

export const footerIndustries = [
  { label: 'Education Marketing', path: '/who-we-help#education' },
  { label: 'Healthcare & Clinics', path: '/who-we-help#healthcare' },
  { label: 'Real Estate & Properties', path: '/who-we-help#real-estate' },
  { label: 'Professional Services', path: '/who-we-help#professional-services' },
  { label: 'Hospitality & Travel', path: '/who-we-help#hospitality' },
  { label: 'B2B Companies', path: '/who-we-help#b2b' },
];

export const companyContact = {
  name: 'Redcanvass',
  address: 'Lucknow, Uttar Pradesh, India',
  phone: '+91 7305092924',
  phoneDisplay: '+91 7305092924',
  whatsapp: '+91 7305092924',
  email: 'hello@redcanvass.com',
  socials: {
    instagram: 'https://instagram.com/redcanvass',
    linkedin: 'https://linkedin.com/company/redcanvass',
    facebook: 'https://facebook.com/redcanvass',
    youtube: 'https://youtube.com/@redcanvass',
    x: 'https://x.com/redcanvass',
  }
};
