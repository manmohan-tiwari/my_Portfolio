export type Project = {
  number: string
  title: string
  category: string
  role: string
  description: string
  tech: string[]
  liveUrl?: string
  sourceUrl?: string
  visual: 'business' | 'workflow' | 'studio' | 'mobile'
  primaryImage: string
  secondaryImage: string
  galleryLabel: string
  galleryCategories: string[]
  galleryItems: ProjectGalleryItem[]
  galleryHref?: string
}

export type ProjectGalleryItem = {
  image: string
  size: 'feature' | 'standard'
}

export type DaisActivity = {
  title: string
  image: string
}

export const profileImage = '/assets/profile/manmohan-tiwari.webp'

export const navigationItems = [
  { id: 'selected-work', label: 'WORK' },
  { id: 'gallery', label: 'GALLERY' },
  { id: 'profile', label: 'PROFILE' },
  { id: 'expertise', label: 'EXPERTISE' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'leadership', label: 'LEADERSHIP' },
  { id: 'academic', label: 'ACADEMIC' },
  { id: 'contact', label: 'CONTACT' },
] as const

export const stackedPanels = [
  {
    id: 'code',
    title: 'LANGUAGES',
    subtitle: 'Core implementation',
    tags: ['Dart', 'PHP', 'TypeScript'],
  },
  {
    id: 'systems',
    title: 'BACKEND',
    subtitle: 'Backend architecture',
    tags: ['API', 'MySQL', 'Auth'],
  },
  {
    id: 'products',
    title: 'PRODUCTS',
    subtitle: 'User-facing delivery',
    tags: ['Web', 'Android', 'AI'],
  },
]

export const projects: Project[] = [
  {
    number: '01',
    title: 'Jaiswal Trophy Billing System',
    category: 'Business Product Interface',
    role: 'Full-Stack PHP Developer',
    description:
      'A centralized billing and operations system for sales, purchases, inventory, customers, vendors, payments, and reporting.',
    tech: ['PHP', 'MySQL', 'PDO', 'JavaScript'],
    liveUrl: 'http://nagarsoftware.in/trophy/',
    visual: 'business',
    primaryImage: '/assets/projects/jaiswal-trophy/Dashboard_J.png',
    secondaryImage: '/assets/projects/jaiswal-trophy/Purchase.png',
    galleryLabel: 'Business Management System',
    galleryCategories: ['BUSINESS'],
    galleryItems: [
      { image: '/assets/projects/jaiswal-trophy/Dashboard_J.png', size: 'feature' },
      { image: '/assets/projects/jaiswal-trophy/Purchase.png', size: 'standard' },
    ],
    galleryHref: 'http://nagarsoftware.in/trophy/',
  },
  {
    number: '02',
    title: 'Coaching Institute Management System',
    category: 'Administration Workflow',
    role: 'Full-Stack PHP Developer',
    description:
      'A workflow platform for enquiries, admissions, attendance, fees, receipts, and PDF reporting for a coaching institute.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Dompdf'],
    visual: 'workflow',
    primaryImage: '/assets/projects/coaching-institute/Dashboard_C.png',
    secondaryImage: '/assets/projects/coaching-institute/Fee_Receipt.png',
    galleryLabel: 'Education Management Platform',
    galleryCategories: ['BUSINESS'],
    galleryItems: [
      { image: '/assets/projects/coaching-institute/Dashboard_C.png', size: 'feature' },
      { image: '/assets/projects/coaching-institute/Fee_Receipt.png', size: 'standard' },
    ],
    galleryHref: '/#project-2',
  },
  {
    number: '03',
    title: 'RKAAN Technobyte',
    category: 'Studio Website Presentation',
    role: 'Frontend Developer / UI Engineer',
    description:
      'A polished one-page website for an AI-first technology studio with responsive presentation and editorial motion.',
    tech: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
    liveUrl: 'https://rkkan.netlify.app/',
    visual: 'studio',
    primaryImage: '/assets/projects/rkaan/home.png',
    secondaryImage: '/assets/projects/rkaan/Contact.png',
    galleryLabel: 'Digital Studio Website',
    galleryCategories: ['WEB'],
    galleryItems: [
      { image: '/assets/projects/rkaan/home.png', size: 'feature' },
      { image: '/assets/projects/rkaan/Contact.png', size: 'standard' },
    ],
    galleryHref: 'https://rkkan.netlify.app/',
  },
  {
    number: '04',
    title: 'FocusForge',
    category: 'Mobile AI Product',
    role: 'Full-Stack Flutter Developer',
    description:
      'An AI-assisted productivity application built around energy-aware planning, task breakdowns, and focused execution.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Groq API', 'Riverpod'],
    liveUrl: 'https://focusforgge.netlify.app/',
    visual: 'mobile',
    primaryImage: '/assets/projects/focusforge/home.png',
    secondaryImage: '/assets/projects/focusforge/streak.png',
    galleryLabel: 'AI Productivity Application',
    galleryCategories: ['MOBILE', 'AI'],
    galleryItems: [
      { image: '/assets/projects/focusforge/home.png', size: 'feature' },
      { image: '/assets/projects/focusforge/streak.png', size: 'standard' },
    ],
    galleryHref: 'https://focusforgge.netlify.app/',
  },
]

export const galleryFilterOptions = ['ALL', 'WEB', 'MOBILE', 'BUSINESS', 'AI'] as const

export const daisActivities: DaisActivity[] = [
  { title: 'BCA AI Agent Workshop', image: '/assets/dais/ai-workshop.webp' },
  { title: 'BCA IoT Workshop', image: '/assets/dais/iot-workshop.webp' },
  { title: 'BCA AI Agent Workshop', image: '/assets/dais/Ai_workshop.jpeg' },
  { title: 'BCA IoT Workshop', image: '/assets/dais/iot_workshop.jpeg' },
  { title: 'BCA JITO Cyber Workshop', image: '/assets/dais/cyber-workshop.webp' },
  { title: 'Codiant Software Technologies Visit', image: '/assets/dais/codiant-visit.webp' },
  { title: 'SEO Workshop', image: '/assets/dais/seo-workshop.webp' },
]

export const expertiseGroups = [
  { title: 'APPLICATION DEVELOPMENT', items: ['Flutter', 'Dart'] },
  { title: 'WEB', items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: 'BACKEND', items: ['PHP', 'Firebase', 'REST APIs'] },
  { title: 'DATA', items: ['MySQL', 'MariaDB', 'Firestore', 'SQL'] },
  { title: 'AI', items: ['OpenAI APIs', 'Gemini', 'Groq', 'Ollama', 'LLMs', 'AI Agents'] },
  { title: 'TOOLS', items: ['Git', 'GitHub', 'Android Studio', 'VS Code', 'Apache', 'XAMPP'] },
]

export const leadershipItems = {
  responsibilities: [
    'Organizing technical events',
    'Managing the technical team',
    'Coordinating workshops',
    'Coordinating technical activities',
    'Supporting student participation',
  ],
  activities: [
    'BCA AI Agent Workshop',
    'BCA IoT Workshop',
    'BCA JITO Cyber Workshop',
    'Codiant Software Technologies Visit',
    'SEO Workshop',
  ],
}
