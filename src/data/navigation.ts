export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Profile', path: '/about#team' },
  { label: 'Contact Us', path: '/contact' },
];

export const footerServices = [
  { label: 'Logo & Branding', path: '/services/logo-branding' },
  { label: 'Website Design', path: '/services/website-design' },
  { label: 'Print Design', path: '/services/print-design' },
  { label: 'Digital Marketing', path: '/services/digital-marketing' },
  { label: 'Illustration', path: '/services/illustration' },
  { label: 'IT Support', path: '/services/it-support' },
];

export const companyContact = {
  address: 'Kakoriama Business Solution Private Limited, C-142, Vibhuti Khand, Near Pake Hospital, Gomtinagar, Lucknow, UP 226010',
  phone: '+91 7305092924',
  phoneDisplay: '+91 7305092924',
  email: 'redcanvassdesigns@gmail.com',
  socials: {
    instagram: 'https://instagram.com/redcanvass',
    linkedin: 'https://linkedin.com/company/redcanvass',
    facebook: 'https://facebook.com/redcanvass',
    youtube: 'https://youtube.com/@redcanvass',
    x: 'https://x.com/redcanvass',
  }
};
