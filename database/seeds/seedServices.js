const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/code-voyagers'

const services = [
  {
    slug: 'web-development',
    title: 'Website & App Development',
    shortDescription: 'Custom websites and mobile applications built for performance and scale.',
    fullDescription: 'We build fast, responsive, and scalable web applications using modern frameworks. From single-page apps to complex enterprise platforms, our solutions are engineered for growth.',
    deliverables: ['React & Next.js Apps', 'E-commerce Platforms', 'CMS Development', 'API Integration', 'Progressive Web Apps'],
    iconName: 'Globe',
    order: 1,
    isActive: true,
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Designing',
    shortDescription: 'Research-driven interfaces that convert visitors into loyal customers.',
    fullDescription: 'User research, wireframing, prototyping, and high-fidelity design. We create interfaces that feel intuitive and look exceptional — backed by data, not guesswork.',
    deliverables: ['User Research & Testing', 'Wireframing & Prototyping', 'Design Systems', 'Interaction Design', 'Accessibility Audits'],
    iconName: 'Palette',
    order: 2,
    isActive: true,
  },
  {
    slug: 'graphics-designing',
    title: 'Graphics Designing',
    shortDescription: 'Visual identities and marketing materials that command attention.',
    fullDescription: 'Brand identities, marketing collateral, social media assets, and print design. We craft visuals that tell your story and strengthen your brand recognition.',
    deliverables: ['Brand Identity Design', 'Marketing Collateral', 'Social Media Graphics', 'Print Design', 'Infographics'],
    iconName: 'Paintbrush',
    order: 3,
    isActive: true,
  },
  {
    slug: 'ai-automation',
    title: 'Agentic AI & AI Automation',
    shortDescription: 'Intelligent AI agents and custom workflows that eliminate manual overhead.',
    fullDescription: 'Custom AI chatbots, agentic workflows, process automation, machine learning integration, and intelligent data pipelines. We help you work smarter, not harder.',
    deliverables: ['AI Chatbots & Assistants', 'Agentic Workflows', 'Workflow Automation', 'ML Model Integration', 'Predictive Analytics'],
    iconName: 'Brain',
    order: 4,
    isActive: true,
  },
  {
    slug: 'video-editing',
    title: 'Video Editing',
    shortDescription: 'Professional video production and editing for marketing and branding.',
    fullDescription: 'From concept to final cut, we produce polished video content that tells your story. Social media reels, product demos, explainers, and promotional videos — all crafted for impact.',
    deliverables: ['Social Media Reels', 'Product Demos', 'Explainer Videos', 'Promotional Content', 'Motion Graphics'],
    iconName: 'Video',
    order: 5,
    isActive: true,
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Data-driven campaigns that amplify your reach and drive measurable growth.',
    fullDescription: 'SEO, PPC, social media marketing, content strategy, and analytics. We build marketing engines that deliver consistent, measurable results.',
    deliverables: ['SEO & Content Strategy', 'PPC Campaign Management', 'Social Media Marketing', 'Email Marketing', 'Analytics & Reporting'],
    iconName: 'TrendingUp',
    order: 6,
    isActive: true,
  },
]

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')

    const db = mongoose.connection.db
    await db.dropCollection('services').catch(() => {})
    console.log('Dropped existing services collection')

    const result = await db.collection('services').insertMany(services)
    console.log(`Seeded ${result.insertedCount} services`)

    await mongoose.disconnect()
    console.log('Disconnected from MongoDB')
  } catch (error) {
    console.error('Seed failed:', error.message)
    process.exit(1)
  }
}

seed()
