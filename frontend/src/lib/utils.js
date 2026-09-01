import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const SITE_CONFIG = {
  name: 'Code Voyagers',
  tagline: 'Digital Solutions That Move Businesses Forward',
  description: 'Premium IT consulting, web development, app development, UI/UX design, digital marketing, and AI automation services.',
  email: 'hello@codevoyagers.com',
  phone: '+1 (555) 123-4567',
  address: '123 Tech Avenue, Silicon Valley, CA 94025',
  social: {
    twitter: 'https://twitter.com/codevoyagers',
    linkedin: 'https://linkedin.com/company/codevoyagers',
    github: 'https://github.com/codevoyagers',
    dribbble: 'https://dribbble.com/codevoyagers',
  },
}

export const SERVICES = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription: 'Custom websites and web applications built for performance and scale.',
    description: 'We build fast, responsive, and scalable web applications using modern frameworks. From single-page apps to complex enterprise platforms, our solutions are engineered for growth.',
    icon: 'Globe',
    features: ['React & Next.js Apps', 'E-commerce Platforms', 'CMS Development', 'API Integration', 'Progressive Web Apps'],
  },
  {
    id: 'app-development',
    title: 'App Development',
    shortDescription: 'Native and cross-platform mobile applications your users will love.',
    description: 'Native iOS and Android apps, plus cross-platform solutions with React Native and Flutter. We design for engagement and build for performance.',
    icon: 'Smartphone',
    features: ['iOS & Android Native', 'React Native & Flutter', 'App Store Optimization', 'Push Notifications', 'Offline-First Architecture'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription: 'Research-driven interfaces that convert visitors into loyal customers.',
    description: 'User research, wireframing, prototyping, and high-fidelity design. We create interfaces that feel intuitive and look exceptional — backed by data, not guesswork.',
    icon: 'Palette',
    features: ['User Research & Testing', 'Wireframing & Prototyping', 'Design Systems', 'Interaction Design', 'Accessibility Audits'],
  },
  {
    id: 'graphics-designing',
    title: 'Graphics Designing',
    shortDescription: 'Visual identities and marketing materials that command attention.',
    description: 'Brand identities, marketing collateral, social media assets, and print design. We craft visuals that tell your story and strengthen your brand recognition.',
    icon: 'Paintbrush',
    features: ['Brand Identity Design', 'Marketing Collateral', 'Social Media Graphics', 'Print Design', 'Infographics'],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Data-driven campaigns that amplify your reach and drive measurable growth.',
    description: 'SEO, PPC, social media marketing, content strategy, and analytics. We build marketing engines that deliver consistent, measurable results.',
    icon: 'TrendingUp',
    features: ['SEO & Content Strategy', 'PPC Campaign Management', 'Social Media Marketing', 'Email Marketing', 'Analytics & Reporting'],
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    shortDescription: 'Intelligent workflows and custom AI solutions that eliminate manual overhead.',
    description: 'Custom AI chatbots, process automation, machine learning integration, and intelligent data pipelines. We help you work smarter, not harder.',
    icon: 'Brain',
    features: ['AI Chatbots & Assistants', 'Workflow Automation', 'ML Model Integration', 'Data Pipeline Design', 'Predictive Analytics'],
  },
]

export const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'CTO, Nextera Health',
    content: 'Code Voyagers transformed our outdated platform into a modern, HIPAA-compliant system. Their team delivered 3 weeks ahead of schedule.',
    avatar: 'SC',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Founder, UrbanFlux',
    content: 'The mobile app they built for us has a 4.8-star rating on both app stores. Their UI/UX team truly understands user psychology.',
    avatar: 'MR',
  },
  {
    name: 'Priya Sharma',
    role: 'VP of Engineering, LogiTrack',
    content: 'Their AI automation solutions saved us 40+ hours per week in manual data entry. The ROI was visible within the first month.',
    avatar: 'PS',
  },
  {
    name: 'James Walker',
    role: 'Marketing Director, BrightPath',
    content: 'Our organic traffic increased 340% in 6 months under their digital marketing guidance. They don\'t just execute — they strategize.',
    avatar: 'JW',
  },
]

export const STATS = [
  { label: 'Projects Delivered', value: 50, suffix: '+' },
  { label: 'Happy Clients', value: 30, suffix: '+' },
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Team Members', value: 25, suffix: '+' },
]
