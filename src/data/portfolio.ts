// Portfolio data structure for Arun's work
// This will be replaced with dynamic data from external sources

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  fullImage: string;
  tags: string[];
  client?: string;
  year?: string;
  formats?: string[];
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 'prakruti-campaign',
    title: 'Prakruti Ad Campaign - May Discovery',
    category: 'real-estate',
    description: 'Comprehensive multi-format digital marketing campaign for luxury residential project Prakruti. Created consistent visual identity across social media platforms with emphasis on nature-inspired luxury living. Campaign includes Instagram posts, stories, carousel ads, and Facebook cover designs.',
    thumbnail: '/placeholder/prakruti-thumb.jpg',
    fullImage: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
    tags: ['Digital Marketing', 'Real Estate', 'Social Media Campaign', 'Multi-format Design', 'Luxury Branding'],
    client: 'Kumar Corporation',
    year: '2024',
    formats: ['1080x1920 (Stories)', '1200x1200 (Posts)', '1200x628 (Cover)', '960x1200 (Carousel)']
  },
  {
    id: 'akshaya-tritiya',
    title: 'Akshaya Tritiya Festival Campaign',
    category: 'seasonal',
    description: 'Cultural festival marketing campaign celebrating Akshaya Tritiya with traditional Indian design elements. Successfully merged festival aesthetics with real estate marketing, creating engaging content that resonated with target audience during the auspicious buying season.',
    thumbnail: '/placeholder/akshaya-thumb.jpg',
    fullImage: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
    tags: ['Festival Campaign', 'Cultural Design', 'Traditional Graphics', 'Seasonal Marketing', 'Indian Festivals'],
    client: 'Kumar Corporation',
    year: '2024',
    formats: ['1080x1080 (Instagram)', '1080x1350 (Feed)', '1200x628 (Facebook)']
  },
  {
    id: 'panache-campaign',
    title: 'Panache September Discovery Campaign',
    category: 'real-estate',
    description: 'Sophisticated marketing campaign for premium residential project Panache. Focused on luxury lifestyle positioning with elegant typography, premium color palette, and architectural photography integration. Campaign successfully positioned the project as a high-end residential destination.',
    thumbnail: '/placeholder/panache-thumb.jpg',
    fullImage: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
    tags: ['Luxury Design', 'Premium Branding', 'Architecture Marketing', 'High-end Real Estate', 'Lifestyle Positioning'],
    client: 'Kumar Corporation',
    year: '2024',
    formats: ['1200x1200 (Posts)', '1200x628 (Cover)', '1080x1920 (Stories)', '960x1200 (Carousel)']
  },
  {
    id: 'diwali-campaign',
    title: 'Diwali Tak Festive Campaign',
    category: 'seasonal',
    description: 'Comprehensive Diwali season marketing campaign combining traditional festival elements with real estate messaging. Created warm, inviting designs that captured the spirit of homecoming during the festival of lights, resulting in increased engagement and lead generation.',
    thumbnail: '/placeholder/diwali-thumb.jpg',
    fullImage: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
    tags: ['Festival Campaign', 'Diwali Marketing', 'Traditional Design', 'Homecoming Theme', 'Festive Branding'],
    client: 'Kumar Corporation',
    year: '2024',
    formats: ['1080x1080 (Posts)', '1080x1350 (Feed)', '1200x628 (Cover)', '1080x1920 (Stories)']
  },
  {
    id: 'kumar-brochures',
    title: 'Corporate Brochures & Floor Plans',
    category: 'print',
    description: 'Professional print design suite including corporate brochures, property floor plans, and marketing collateral. Maintained brand consistency while ensuring high print quality and readability. Designs featured clear information hierarchy and premium finishing specifications.',
    thumbnail: '/placeholder/brochure-thumb.jpg',
    fullImage: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
    tags: ['Print Design', 'Corporate Brochures', 'Floor Plans', 'Marketing Collateral', 'Brand Consistency'],
    client: 'Kumar Corporation',
    year: '2024',
    formats: ['A4 Print Ready', 'Tri-fold Brochure', 'Floor Plan Layouts', 'High-res PDF']
  },
  {
    id: 'pst-facebook',
    title: 'PST November Facebook Campaign',
    category: 'social-media',
    description: 'Targeted Facebook marketing campaign for PST project launch. Created engaging visual content optimized for Facebook\'s algorithm and audience preferences. Campaign included video thumbnails, carousel ads, and promotional graphics with strong call-to-action elements.',
    thumbnail: '/placeholder/pst-thumb.jpg',
    fullImage: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
    tags: ['Facebook Marketing', 'Social Media Campaign', 'Project Launch', 'Digital Advertising', 'CTA Optimization'],
    client: 'Kumar Corporation',
    year: '2024',
    formats: ['1200x628 (Cover)', '1200x1200 (Posts)', '1080x1080 (Square)', 'Video Thumbnails']
  },
  {
    id: 'corporate-signatures',
    title: 'Corporate Email Signatures',
    category: 'corporate',
    description: 'Professional email signature designs for executive team and staff members. Ensured brand consistency across all corporate communications while maintaining clean, professional appearance that works across different email clients and devices.',
    thumbnail: '/placeholder/signature-thumb.jpg',
    fullImage: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
    tags: ['Corporate Identity', 'Email Design', 'Professional Branding', 'Communications', 'Brand Guidelines'],
    client: 'Kumar Corporation',
    year: '2024',
    formats: ['HTML Email Signatures', 'Multi-device Compatible', 'Executive & Staff Versions']
  },
  {
    id: 'organic-posts',
    title: 'Organic Social Media Posts',
    category: 'social-media',
    description: 'Regular content creation for organic social media presence. Designed engaging posts that maintain brand voice while providing value to followers. Includes inspirational quotes, project updates, behind-the-scenes content, and community engagement posts.',
    thumbnail: '/placeholder/organic-thumb.jpg',
    fullImage: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
    tags: ['Organic Content', 'Social Media Management', 'Brand Voice', 'Community Engagement', 'Content Strategy'],
    client: 'Kumar Corporation',
    year: '2024',
    formats: ['1080x1080 (Posts)', '1080x1350 (Portrait)', '1200x628 (Landscape)', 'Story Templates']
  }
];

export const categories = [
  { id: 'all', name: 'All Work', count: portfolioData.length },
  { id: 'real-estate', name: 'Real Estate Campaigns', count: portfolioData.filter(item => item.category === 'real-estate').length },
  { id: 'seasonal', name: 'Festival Campaigns', count: portfolioData.filter(item => item.category === 'seasonal').length },
  { id: 'social-media', name: 'Social Media', count: portfolioData.filter(item => item.category === 'social-media').length },
  { id: 'print', name: 'Print Design', count: portfolioData.filter(item => item.category === 'print').length },
  { id: 'corporate', name: 'Corporate Design', count: portfolioData.filter(item => item.category === 'corporate').length }
];

// Placeholder image URLs - these will be replaced with actual optimized images
export const placeholderImages = {
  hero: '/placeholder/hero-bg.jpg',
  prakruti: '/placeholder/prakruti-campaign.jpg',
  akshaya: '/placeholder/akshaya-tritiya.jpg',
  panache: '/placeholder/panache-campaign.jpg',
  brochure: '/placeholder/kumar-brochure.jpg',
  diwali: '/placeholder/diwali-campaign.jpg',
  signatures: '/placeholder/email-signatures.jpg'
};