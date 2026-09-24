export interface SubNavItem {
  label: string;
  path: string;
  description?: string;
  badge?: string;
}

export interface NavItem {
  label: string;
  path: string;
  hasDropdown?: boolean;
  children?: SubNavItem[];
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'What We Do', 
    path: '/what-we-do',
    hasDropdown: true,
    children: [
      { label: 'Get Found', path: '/get-found', description: 'Search & AI Visibility (SEO, Local SEO, AEO, AI Search)' },
      { label: 'Get Customers', path: '/get-customers', description: 'Performance Marketing (Google Ads, Meta Ads, Lead Gen)' },
      { label: 'Get Remembered', path: '/get-remembered', description: 'Creative & Conversion (Creatives, Landing Pages, Campaigns)' },
    ]
  },
  {
    label: 'Get Found',
    path: '/get-found',
    hasDropdown: true,
    children: [
      { label: 'SEO', path: '/get-found#seo', description: 'Organic Search Optimization' },
      { label: 'Local SEO', path: '/get-found#local-seo', description: 'Google Business Profile & Location Visibility' },
      { label: 'AI Search', path: '/get-found#ai-search', description: 'Discovery in Generative Search Engines' },
      { label: 'AEO', path: '/get-found#aeo', description: 'Answer Engine Optimization' },
    ]
  },
  {
    label: 'Get Customers',
    path: '/get-customers',
    hasDropdown: true,
    children: [
      { label: 'Google Ads', path: '/get-customers#google-ads', description: 'Capture Active Search Demand' },
      { label: 'Meta Ads', path: '/get-customers#meta-ads', description: 'Targeted Campaigns on FB & Instagram' },
      { label: 'YouTube Ads', path: '/get-customers#youtube-ads', description: 'Video for Awareness & Action' },
      { label: 'Lead Generation', path: '/get-customers#lead-generation', description: 'High-Intent Customer Acquisition' },
      { label: 'Remarketing', path: '/get-customers#remarketing', description: 'Reconnect with Engaged Audiences' },
    ]
  },
  {
    label: 'Get Remembered',
    path: '/get-remembered',
    hasDropdown: true,
    children: [
      { label: 'Ad Creatives', path: '/get-remembered#ad-creatives', description: 'Visuals Designed to Stop the Scroll' },
      { label: 'Landing Pages', path: '/get-remembered#landing-pages', description: 'Conversion-Focused Campaign Pages' },
      { label: 'Campaign Design', path: '/get-remembered#campaign-design', description: 'Unified Multi-Channel Creative Direction' },
      { label: 'Flyers & Posters', path: '/get-remembered#flyers-posters', description: 'Campaign-Led Offline Collateral' },
    ]
  },
  { label: 'Who We Help', path: '/who-we-help' },
  { label: "Let's Talk", path: '/lets-talk' },
];

export const footerServices = [
  { label: 'Get Found (SEO & AEO)', path: '/get-found' },
  { label: 'Get Customers (Ads & Lead Gen)', path: '/get-customers' },
  { label: 'Get Remembered (Creative & Landing Pages)', path: '/get-remembered' },
  { label: 'What We Do Overview', path: '/what-we-do' },
];

export const footerIndustries = [
  { label: 'Education', path: '/who-we-help#education' },
  { label: 'Healthcare', path: '/who-we-help#healthcare' },
  { label: 'Real Estate', path: '/who-we-help#real-estate' },
  { label: 'Professional Services', path: '/who-we-help#professional-services' },
  { label: 'Hospitality', path: '/who-we-help#hospitality' },
  { label: 'B2B', path: '/who-we-help#b2b' },
];

export const companyContact = {
  name: 'Redcanvass',
  tagline: 'Digital Marketing That Means Business.',
  location: 'Lucknow, India',
  address: 'Lucknow, India',
  email: 'contact@redcanvass.com',
  phone: '+91 98765 43210',
  phoneDisplay: '+91 98765 43210',
  socials: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    x: 'https://twitter.com',
  }
};
