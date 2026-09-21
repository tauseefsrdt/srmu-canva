import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'website-design',
    slug: 'website-design',
    number: '01',
    title: 'Website Design',
    shortDescription: 'Modern, responsive and high performance websites.',
    fullDescription: 'We design and engineer bespoke web experiences that combine aesthetic brilliance with blazing-fast performance. From corporate websites and educational portals to high-converting eCommerce and WebGL showcases, we elevate your digital presence.',
    icon: 'Globe',
    deliverables: [
      'Custom UI/UX Wireframing & Prototyping',
      'Full-Stack Responsive Web Development',
      'SEO & Core Web Vitals Optimization',
      'Headless CMS & E-Commerce Integration',
      'Micro-interactions & Smooth GSAP Animations'
    ],
    process: [
      { step: '01', title: 'Discovery & UX Architecture', description: 'User personas, sitemap, wireframes, and conversion strategy.' },
      { step: '02', title: 'Visual UI Design', description: 'High-fidelity design tokens, dark & light palettes, interactive prototypes.' },
      { step: '03', title: 'Modern Development', description: 'Clean TypeScript, React/Next.js, Tailwind CSS and interactive GSAP animations.' },
      { step: '04', title: 'QA, SEO & Launch', description: 'Lighthouse 95+ score optimization, cross-browser testing, analytics integration.' }
    ],
    benefits: [
      'Higher Conversion Rates & Reduced Bounce Rate',
      'Lightning-Fast Sub-Second Page Loads',
      'Flawless Experience Across Mobile, Tablet & 4K Displays',
      'Intuitive CMS for Simple In-House Editing'
    ],
    featuredProjects: ['srmu-website', 'campaign-design']
  },
  {
    id: 'logo-branding',
    slug: 'logo-branding',
    number: '02',
    title: 'Logo & Branding',
    shortDescription: 'Unique brand identity that makes you stand out.',
    fullDescription: 'Your brand is more than just a logo—it is the emotional connection you forge with your audience. We craft holistic visual identity systems that communicate prestige, trustworthiness, and distinct character across every touchpoint.',
    icon: 'Sparkles',
    deliverables: [
      'Logo Suite (Primary, Secondary, Monogram, Favicon)',
      'Comprehensive Brand Style Guide & Rules',
      'Color Palette & Typographic System',
      'Corporate Stationery & Business Cards',
      'Digital & Social Media Assets'
    ],
    process: [
      { step: '01', title: 'Brand Strategy & Audit', description: 'Market research, competitor mapping, and brand personality definition.' },
      { step: '02', title: 'Concept Exploration', description: 'Sketching, emblem geometry, and typographic pairing.' },
      { step: '03', title: 'Refinement & Guidelines', description: 'Vector precision, color breakdowns, spacing rules, and usage guides.' },
      { step: '04', title: 'Asset Handoff', description: 'Vector SVGs, print-ready PDFs, digital PNGs, and comprehensive brand book.' }
    ],
    benefits: [
      'Instant Brand Recognition & Memorability',
      'Consistent Visual Language Across All Media',
      'Increased Perceived Product Value',
      'Cohesive Foundation for Future Marketing'
    ],
    featuredProjects: ['brand-identity-lux']
  },
  {
    id: 'print-design',
    slug: 'print-design',
    number: '03',
    title: 'Print Design',
    shortDescription: 'Brochures, flyers, stationery and more.',
    fullDescription: 'In a digital world, tactile print pieces leave an undeniable impression. We produce premium marketing collateral, annual reports, packaging, and exhibition graphics with meticulous print finishes.',
    icon: 'Layers',
    deliverables: [
      'Corporate Brochures & Lookbooks',
      'Flyers, Leaflets & Direct Mailers',
      'Annual Reports & Pitch Decks',
      'Event Banners & Exhibition Booths',
      'Custom Packaging & Die-Cut Boxes'
    ],
    process: [
      { step: '01', title: 'Grid & Content Architecture', description: 'Content hierarchy, page layout grids, and paper stock selection.' },
      { step: '02', title: 'Editorial Design', description: 'Modern typographic layout, infographic spreads, and image curation.' },
      { step: '03', title: 'Print Finishing Specs', description: 'Spot UV, foil stamping, embossing, and paper weight specifications.' },
      { step: '04', title: 'Production & Press Check', description: 'Color-calibrated CMYK pre-flight files and vendor coordination.' }
    ],
    benefits: [
      'Tangible, Premium Brand Experience for Clients',
      'Exceptional Precision in Typography & Layout',
      'Flawless Color Accuracy & Production Readiness'
    ],
    featuredProjects: ['marketing-collateral', 'brochure-design-corporate']
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    number: '04',
    title: 'Digital Marketing',
    shortDescription: 'Social media, ads and campaigns that convert.',
    fullDescription: 'We build end-to-end performance marketing funnels, high-impact social media creatives, and data-driven ad campaigns that turn casual scrollers into loyal customers.',
    icon: 'TrendingUp',
    deliverables: [
      'Social Media Creatives & Video Ads',
      'Google, Meta & LinkedIn Ad Campaigns',
      'Search Engine Optimization (SEO)',
      'Content Strategy & Copywriting',
      'Funnel Optimization & Analytics'
    ],
    process: [
      { step: '01', title: 'Target Audience Analysis', description: 'Customer segments, intent keywords, and channel strategy.' },
      { step: '02', title: 'Creative Production', description: 'High-converting video ads, static banners, and engaging copy.' },
      { step: '03', title: 'Campaign Execution', description: 'A/B testing, pixel tracking, and bid management.' },
      { step: '04', title: 'Optimization & Scaling', description: 'Daily budget re-allocation toward winning creatives to maximize ROAS.' }
    ],
    benefits: [
      'Consistent Flow of Qualified Inbound Leads',
      'High Return on Ad Spend (ROAS)',
      'Enhanced Brand Authority Across Social Channels'
    ],
    featuredProjects: ['campaign-design']
  },
  {
    id: 'illustration',
    slug: 'illustration',
    number: '05',
    title: 'Illustration',
    shortDescription: 'Custom illustrations for your ideas.',
    fullDescription: 'Bring warmth, personality, and distinctive storytelling to your products through bespoke illustration systems, editorial artworks, and character designs.',
    icon: 'PenTool',
    deliverables: [
      'Custom Vector Illustration Kits',
      'Editorial & Magazine Cover Art',
      '3D Character & Object Concepts',
      'Custom UI Icon Sets',
      'Interactive Animated SVGs'
    ],
    process: [
      { step: '01', title: 'Style Direction & Moodboard', description: 'Establishing texture, stroke weight, color harmony, and character styles.' },
      { step: '02', title: 'Rough Sketches', description: 'Storyboarding concepts and dynamic scene composition.' },
      { step: '03', title: 'Vector Inking & Color', description: 'Crisp SVG vectorization and rich color shading.' },
      { step: '04', title: 'Export & Lottie Setup', description: 'Scalable exports ready for web, mobile apps, and merchandise.' }
    ],
    benefits: [
      'Instantly Distinguishable Visual Identity',
      'Simplifies Complex Ideas into Engaging Visuals',
      'Infinite Scalability for All Display Sizes'
    ],
    featuredProjects: ['custom-artwork']
  },
  {
    id: 'photography',
    slug: 'photography',
    number: '06',
    title: 'Photography',
    shortDescription: 'Product and event photography.',
    fullDescription: 'High-end commercial, product, and studio photography that captures the finest craftsmanship of your offerings with cinematic lighting and meticulous post-processing.',
    icon: 'Camera',
    deliverables: [
      'Commercial Product Studio Shoots',
      'Lifestyle & In-Context Photography',
      '360 Product Spin Sequences',
      'High-End Retouching & Color Grading',
      'Event & Corporate Executive Portraits'
    ],
    process: [
      { step: '01', title: 'Art Direction & Shot List', description: 'Lighting concepts, moodboards, prop selection, and schedule.' },
      { step: '02', title: 'Studio Production', description: 'Professional multi-light setups, tethered live review, and staging.' },
      { step: '03', title: 'Master Retouching', description: 'Skin smoothing, dust removal, color grading, and shadow enhancement.' },
      { step: '04', title: 'Multi-Resolution Delivery', description: 'High-res RAW outputs + web-optimized compressed assets.' }
    ],
    benefits: [
      'Presents Products with Luxury Elegance',
      'Drastically Boosts eCommerce Purchase Intent',
      'Custom Proprietary Imagery Eliminates Stock Visuals'
    ],
    featuredProjects: ['product-shoot']
  },
  {
    id: 'merchandise',
    slug: 'merchandise',
    number: '07',
    title: 'Merchandise',
    shortDescription: 'Custom apparel, swag, and branded merchandise.',
    fullDescription: 'Transform your brand into wearable culture. We design and coordinate production for premium apparel, company swag kits, and retail-grade packaging.',
    icon: 'ShoppingBag',
    deliverables: [
      'Streetwear T-Shirts, Hoodies & Caps',
      'Custom Drinkware & Tech Accessories',
      'Onboarding Welcome Kits & Swag Boxes',
      'Hangtags, Custom Labels & Tissue Wrap',
      'Manufacturer Sourcing & Quality Control'
    ],
    process: [
      { step: '01', title: 'Apparel Concepting', description: 'Design concepts, typography, placement, and fabric selection.' },
      { step: '02', title: 'Tech Packs', description: 'Detailed sizing specifications, pantone codes, and print techniques.' },
      { step: '03', title: 'Sampling & Proofing', description: 'Material testing, fit review, and print sharpness validation.' },
      { step: '04', title: 'Batch Production', description: 'Coordinating fulfillment, packaging, and direct distribution.' }
    ],
    benefits: [
      'Deepens Client Loyalty & Team Pride',
      'High-Quality Materials Built to Last',
      'Turns Fans into Walking Brand Advocates'
    ],
    featuredProjects: ['custom-merchandise']
  },
  {
    id: 'it-support',
    slug: 'it-support',
    number: '08',
    title: 'IT Support & Cloud',
    shortDescription: 'Infrastructure, DevOps, cloud and technical maintenance.',
    fullDescription: 'Comprehensive technical maintenance, cloud deployment, continuous security monitoring, and dedicated IT infrastructure management to keep your platforms running 24/7 without friction.',
    icon: 'ShieldCheck',
    deliverables: [
      '24/7 Server & Application Monitoring',
      'AWS / GCP Cloud Infrastructure Setup',
      'SSL, Security Hardening & Firewall Setup',
      'Automated Backups & Disaster Recovery',
      'Software Updates & Bug Fix SLA'
    ],
    process: [
      { step: '01', title: 'Infrastructure Audit', description: 'Security scan, speed diagnostics, and bottleneck identification.' },
      { step: '02', title: 'Architecture Setup', description: 'CI/CD pipeline, SSL encryption, CDN routing, and database clustering.' },
      { step: '03', title: 'Continuous Monitoring', description: 'Uptime alerts, error tracking, and DDoS mitigation.' },
      { step: '04', title: 'Dedicated Support Desk', description: 'Fast-response ticket management with guaranteed SLAs.' }
    ],
    benefits: [
      '99.99% Guaranteed Platform Uptime',
      'Proactive Defense Against Cyber Threats',
      'Peace of Mind with Scheduled Backups'
    ],
    featuredProjects: ['srmu-website']
  }
];
