import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'srmu-website',
    slug: 'srmu-website',
    title: 'University Website',
    category: 'Websites',
    categoryLabel: 'Website',
    description: 'Modern, Responsive & User Friendly',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    client: 'Shri Ramswaroop Memorial University',
    year: '2026',
    featured: true,
    accentColor: '#267BFF',
    services: ['UI/UX Design', 'Web Design', 'Full-Stack Development', 'SEO Optimization'],
    liveUrl: 'https://srmu.ac.in',
    overview: 'We designed and developed a modern, responsive, and user-friendly website for Shri Ramswaroop Memorial University. The goal was to create a digital platform that reflects the university\'s vision, provides easy access to information, and enhances the overall user experience for prospective students, faculty, and alumni.',
    challenge: 'The existing university portal suffered from outdated navigation, slow load times, lack of mobile optimization, and fragmented program directories that resulted in high bounce rates among prospective students applying from mobile devices.',
    solution: 'We engineered an ultra-fast, high-performing digital campus experience built on a responsive design system with instant course filtering, 360 virtual campus tour integration, streamlined admission inquiry funnels, and dynamic event management.',
    features: [
      'Modern & Clean UI/UX Architecture',
      'Fully Responsive Multi-Device Support',
      'Real-time Program Search & Filtering',
      'Search Engine & Core Web Vitals Optimization',
      'Blazing-Fast 99+ Performance Score',
      'Headless CMS for Seamless Content Updates'
    ],
    metrics: [
      { value: '+85%', label: 'Organic Search Visibility' },
      { value: '+40%', label: 'Mobile User Engagement' },
      { value: '95+', label: 'Google Lighthouse Performance' }
    ],
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'brand-identity-lux',
    slug: 'brand-identity-lux',
    title: 'Brand Identity',
    category: 'Logo & Branding',
    categoryLabel: 'Logo & Branding',
    description: 'Logos that create lasting impressions',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop',
    client: 'Aura Luxury Group',
    year: '2026',
    featured: true,
    accentColor: '#FF7A18',
    services: ['Brand Strategy', 'Logo Design', 'Stationery Kit', 'Brand Guidelines', 'Packaging'],
    overview: 'A complete golden lion embossed visual identity system engineered for a premier luxury lifestyle and investment syndicate.',
    challenge: 'The brand needed an iconic emblem that conveys timeless strength, prestige, and modern elegance across physical debossed stationery and 4K digital displays.',
    solution: 'Crafted a bespoke geometric lion crest paired with refined modern serif and grotesk typography, printed on soft-touch matte black stock with foil stamping.',
    features: ['Custom Monogram Crest', 'Color Palette & Typographic Hierarchy', 'Bespoke Business Cards & Stationery', 'Luxury Packaging Guide'],
    metrics: [
      { value: '300%', label: 'Brand Recall Improvement' },
      { value: '100%', label: 'Executive Stakeholder Approval' }
    ]
  },
  {
    id: 'marketing-collateral',
    slug: 'marketing-collateral',
    title: 'Marketing Collateral',
    category: 'Print Design',
    categoryLabel: 'Print Design',
    description: 'Brochures, Flyers, Stationery & more',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop',
    client: 'Vanguard Innovations',
    year: '2025',
    featured: true,
    accentColor: '#FF3154',
    services: ['Editorial Design', 'Brochures', 'Flyers', 'Print Production'],
    overview: '"Ideas That Inspire" editorial publication and marketing suites for global tech conference summits.',
    challenge: 'Translating complex high-tech enterprise roadmaps into tactile, visually captivating editorial print designs that C-level attendees keep on their desks.',
    solution: 'Designed an award-winning horizontal layout lookbook utilizing silver spot inks, multi-tier foldouts, and bold neon typography accents.',
    features: ['Custom Grid System', 'Spot UV & Foil Finishes', 'Sustainable Eco-Fibers Stock', 'Multi-Language Formats'],
    metrics: [
      { value: '50k+', label: 'Copies Distributed Globally' },
      { value: '98%', label: 'Positive Feedback Rating' }
    ]
  },
  {
    id: 'campaign-design',
    slug: 'campaign-design',
    title: 'Campaign Design',
    category: 'Digital Marketing',
    categoryLabel: 'Digital Marketing',
    description: 'Social Media & Ad Creatives',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
    client: 'Pulse Lifestyle App',
    year: '2026',
    featured: true,
    accentColor: '#8B3DFF',
    services: ['Social Media Ads', 'Video Animation', 'Content Strategy', 'Growth Marketing'],
    overview: 'High-converting viral multi-platform social campaigns for a gen-Z fitness and nutrition app launch.',
    challenge: 'Cutting through social feed noise across Instagram Reels, TikTok, YouTube Shorts, and X with under 1.5s hook time.',
    solution: 'Created 40+ animated dynamic 3D motion ad assets with synchronized sound design and vibrant typography.',
    features: ['Omnichannel Ad Creatives', 'A/B Testing Framework', 'Interactive Story Ads', 'Influencer Media Kit'],
    metrics: [
      { value: '1.2M+', label: 'Video Views Generated' },
      { value: '4.8x', label: 'Return on Ad Spend (ROAS)' }
    ]
  },
  {
    id: 'custom-artwork',
    slug: 'custom-artwork',
    title: 'Custom Artwork',
    category: 'Illustration',
    categoryLabel: 'Illustration',
    description: 'Unique visuals for your ideas',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    client: 'Velocita City Mobility',
    year: '2025',
    featured: true,
    accentColor: '#28D7FF',
    services: ['Vector Illustration', '3D Characters', 'Visual Storytelling', 'Iconography'],
    overview: 'Custom vibrant neo-pop illustrations celebrating urban cycling culture, eco-transportation, and modern movement.',
    challenge: 'Creating a distinct illustrative art style that differentiates the brand from standard corporate stock illustration.',
    solution: 'Developed dynamic isometric and flat vector compositions featuring electric cyan, hot magenta, and geometric cyclists.',
    features: ['Custom Vector Library', 'Scalable SVG Icons', 'Animation-ready Rigged Assets', 'Poster Wall Prints'],
    metrics: [
      { value: '100+', label: 'Unique Custom Vector Assets' },
      { value: 'Top 5%', label: 'Behance Curated Feature' }
    ]
  },
  {
    id: 'product-shoot',
    slug: 'product-shoot',
    title: 'Product Shoot',
    category: 'Photography',
    categoryLabel: 'Photography',
    description: 'High quality product photography',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    client: 'Acoustic Sound Labs',
    year: '2026',
    featured: true,
    accentColor: '#FF7A18',
    services: ['Studio Photography', 'Lighting Setup', 'High-End Retouching', 'E-commerce Assets'],
    overview: 'Cinematic studio photography showcasing premium matte black wireless audio equipment with dramatic spotlighting.',
    challenge: 'Capturing the deep textures of anodized aluminium, leather cups, and subtle LED indicators without harsh glare.',
    solution: 'Designed a dual-strobe darkroom studio setup with warm amber rim lighting and clean charcoal reflections.',
    features: ['Macro Material Detail Shots', 'Exploded View Technical Composites', '360 Spin Product Views', 'Editorial Lookbook'],
    metrics: [
      { value: '+62%', label: 'E-commerce Conversion Lift' },
      { value: '4K', label: 'Ultra HD Retouched Assets' }
    ]
  },
  {
    id: 'custom-merchandise',
    slug: 'custom-merchandise',
    title: 'Custom Merchandise',
    category: 'Merchandise',
    categoryLabel: 'Merchandise',
    description: 'T-Shirts, Stickers, Packaging',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
    client: 'SRMUCANVAS Originals',
    year: '2026',
    featured: true,
    accentColor: '#FF167D',
    services: ['Apparel Design', 'Screen Printing', 'Packaging Design', 'Swag Kit Production'],
    overview: 'Signature studio apparel collection featuring heavy-weight black cotton tees with typography "Good Design. Better Business."',
    challenge: 'Designing merchandise that team members, clients, and design enthusiasts genuinely want to wear as everyday streetwear.',
    solution: 'Combined heavy 280 GSM oversized drops with puff screen-print details, laser-engraved matte water bottles, and structured caps.',
    features: ['Puff & Discharge Screen-Print', 'Custom Woven Neck Tags', 'Eco-Friendly Kraft Packaging', 'Laser Engraved Hardware'],
    metrics: [
      { value: '2,500+', label: 'Units Shipped In First Drop' },
      { value: '5/5', label: 'Quality Rating' }
    ]
  },
  {
    id: 'creative-projects',
    slug: 'creative-projects',
    title: 'Creative Projects',
    category: 'Others',
    categoryLabel: 'Others',
    description: 'Exploring new possibilities',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    client: 'SRMUCANVAS R&D Labs',
    year: '2026',
    featured: true,
    accentColor: '#8B3DFF',
    services: ['3D Modeling', 'Motion Graphics', 'Generative Art', 'Interactive Experiment'],
    overview: 'Experimental 3D glassmorphic art exploration featuring translucent glowing hearts, fluid dynamics, and spatial UI concepts.',
    challenge: 'Pushing the boundaries of web-renderable 3D shader lighting and tactile glass physics in interactive interfaces.',
    solution: 'Modeled sub-surface scattering materials with chromatic aberration and real-time cursor reaction.',
    features: ['Subsurface Glass Shaders', 'WebGL Interactive Experiments', 'Dynamic Ambient Glow', 'Audio-Reactive Physics'],
    metrics: [
      { value: '25k+', label: 'Design Community Stars' },
      { value: 'Award', label: 'Awwwards Site of the Day Nominee' }
    ]
  },
  {
    id: 'brochure-design-corporate',
    slug: 'brochure-design-corporate',
    title: 'Brochure Design',
    category: 'Print Design',
    categoryLabel: 'Print Design',
    description: 'Corporate Showcase & Profile',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
    client: 'Summit Enterprise Holdings',
    year: '2025',
    featured: false,
    accentColor: '#267BFF',
    services: ['Corporate Brochure', 'Annual Report', 'Print Production', 'Infographics'],
    overview: 'A sophisticated 48-page corporate annual report and company brochure highlighting fiscal growth and sustainability.',
    challenge: 'Organizing complex financial data, ESG metrics, and executive summaries into a clean, legible print document.',
    solution: 'Created a modular grid with infographic callouts and die-cut tabbed navigation.',
    features: ['Modular Editorial Grid', 'Die-Cut Section Tabs', 'Infographic Data Visualizations', 'Digital PDF Interactive Version'],
    metrics: [
      { value: '100%', label: 'On-Time Annual Delivery' },
      { value: '48', label: 'Pages of Custom Layout' }
    ]
  }
];

export const projectCategories: ('All Projects' | Project['category'])[] = [
  'All Projects',
  'Websites',
  'Logo & Branding',
  'Print Design',
  'Digital Marketing',
  'Illustration',
  'Photography',
  'Merchandise',
  'Others'
];
