const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom websites and web applications built for performance and scale.',
    features: ['React & Next.js Apps', 'E-commerce Platforms', 'CMS Development', 'API Integration', 'Progressive Web Apps'],
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications your users will love.',
    features: ['iOS & Android Native', 'React Native & Flutter', 'App Store Optimization', 'Push Notifications', 'Offline-First Architecture'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Research-driven interfaces that convert visitors into loyal customers.',
    features: ['User Research & Testing', 'Wireframing & Prototyping', 'Design Systems', 'Interaction Design', 'Accessibility Audits'],
  },
  {
    id: 'graphics-designing',
    title: 'Graphics Designing',
    description: 'Visual identities and marketing materials that command attention.',
    features: ['Brand Identity Design', 'Marketing Collateral', 'Social Media Graphics', 'Print Design', 'Infographics'],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that amplify your reach and drive measurable growth.',
    features: ['SEO & Content Strategy', 'PPC Campaign Management', 'Social Media Marketing', 'Email Marketing', 'Analytics & Reporting'],
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description: 'Intelligent workflows and custom AI solutions that eliminate manual overhead.',
    features: ['AI Chatbots & Assistants', 'Workflow Automation', 'ML Model Integration', 'Data Pipeline Design', 'Predictive Analytics'],
  },
]

console.log('Service catalog seed data:')
console.log(JSON.stringify(services, null, 2))
console.log(`\n${services.length} services defined.`)
