export interface NavItem {
  label: string;
  path: string;
  badge?: string;
  children?: {
    label: string;
    path: string;
    description: string;
    icon?: string;
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
        icon: 'Search'
      },
      {
        label: 'Get Customers',
        path: '/get-customers',
        description: 'Google Ads, Meta Ads, YouTube & Lead Generation',
        icon: 'TrendingUp'
      },
      {
        label: 'Get Remembered',
        path: '/get-remembered',
        description: 'Ad Creatives, Landing Pages & Campaign Design',
        icon: 'Sparkles'
      }
    ]
  },
  { label: 'Who We Help', path: '/who-we-help' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: "Let's Talk", path: '/lets-talk' },
];

export const footerServices = [
  { label: 'SEO & Search Visibility', path: '/get-found' },
  { label: 'AEO & AI Search', path: '/get-found' },
  { label: 'Google & Meta Ads', path: '/get-customers' },
  { label: 'Lead Generation', path: '/get-customers' },
  { label: 'Ad Creatives & Video', path: '/get-remembered' },
  { label: 'Conversion Landing Pages', path: '/get-remembered' },
  { label: 'Who We Help (Industries)', path: '/who-we-help' },
];

export const footerIndustries = [
  { label: 'Education Marketing', path: '/who-we-help#education' },
  { label: 'Healthcare & Clinics', path: '/who-we-help#healthcare' },
  { label: 'Real Estate & Properties', path: '/who-we-help#real-estate' },
  { label: 'Professional Services', path: '/who-we-help#professional-services' },
  { label: 'Hospitality & Resorts', path: '/who-we-help#hospitality' },
  { label: 'B2B Enterprise', path: '/who-we-help#b2b' },
];

export const companyContact = {
  address: 'C-2/42, Vishesh Khand, Opposite Chote Lal Nursery, Gomtinagar, Lucknow',
  phone: '+91 7305092924',
  phoneDisplay: '+91 7305092924',
  whatsapp: '+91 7305092924',
  email: 'srmucanvas@gmail.com',
  socials: {
    instagram: 'https://instagram.com/srmucanvas',
    linkedin: 'https://linkedin.com/company/srmucanvas',
    facebook: 'https://facebook.com/srmucanvas',
    youtube: 'https://youtube.com/@srmucanvas',
    x: 'https://x.com/srmucanvas',
  }
};
