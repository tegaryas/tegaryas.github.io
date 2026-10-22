export const portfolioData = {
  profile: {
    name: "Tegar Yasindra",
    title: "Fullstack & Mobile Developer",
    location: "Bekasi & South Jakarta, Indonesia",
    email: "tegar.yasindraa@gmail.com",
    phone: "+62 813-5400-0987",
    whatsapp: "https://wa.me/6281354000987",
    calendar: "https://calendar.app.google/idA6J4Yt3fwR2z1a9",
    github: "https://github.com/tegaryas",
    linkedin: "https://linkedin.com/in/tegaryasindra",
    bio: "Fullstack & Mobile developer specializing in Go, Python, and Flutter. Experienced in building high-scale fintech systems, AI/OCR processing engines, and user-friendly mobile applications reaching 500,000+ users.",
    status: "Available for Fullstack & Mobile roles / freelance projects",
  },

  projects: [
    {
      id: "sribuu",
      title: "Sribuu",
      tagline: "Personal Finance & Budgeting App",
      desc: "Led Sribuu from a single Flutter codebase to a comprehensive fintech platform trusted by 500,000+ active users. Owned frontend mobile development end-to-end at Fintelite.",
      metrics: "500K+ Active Users",
      tech: ["Flutter", "Dart", "Firebase", "REST APIs", "Fintech"],
      link: "https://sribuu.id/",
      linkLabel: "Visit sribuu.id",
      image: "/images/sribuu.png",
      channelBadge: "CH 01 · Sribuu",
    },
    {
      id: "fintelite",
      title: "Fintelite",
      tagline: "Financial OCR & AI Systems",
      desc: "Architected and maintained OCR, AI extraction pipelines, and backend fintech systems shipped to B2B clients across Southeast Asia across Go, Python, and Flutter.",
      metrics: "Enterprise B2B OCR & AI",
      tech: ["Go", "Python", "Computer Vision / AI", "Flutter", "MySQL"],
      link: "https://fintelite.id/",
      linkLabel: "Visit fintelite.id",
      image: "/images/fintelite.png",
      channelBadge: "CH 02 · Fintelite",
    },
    {
      id: "anycheck",
      title: "Anycheck",
      tagline: "Document & Certificate Verification",
      desc: "Built Anycheck from scratch for client delivery — a robust Go backend engine and cross-platform Flutter app providing unified document authentication and verification.",
      metrics: "Production Document Auth",
      tech: ["Go", "Flutter", "PostgreSQL", "Docker", "Security"],
      link: "https://anycheck.ai/",
      linkLabel: "Visit anycheck.ai",
      image: "/images/anycheck.png",
      channelBadge: "CH 03 · Anycheck",
    },
  ],

  experience: [
    {
      role: "Fullstack Developer",
      company: "Fintelite",
      period: "Jan 2022 – Present",
      location: "South Jakarta",
      details:
        "Building core OCR, machine learning services, and high-throughput financial microservices using Go and Python. Developing cross-platform mobile apps using Flutter.",
    },
    {
      role: "Mobile Developer",
      company: "BintanGo",
      period: "Oct 2022 – Mar 2023",
      location: "South Jakarta",
      details:
        "Engineered creator economy mobile solutions, optimized UI rendering performance, and integrated real-time analytics for digital creators.",
    },
    {
      role: "Mobile Developer Intern",
      company: "LingoTalk",
      period: "Oct 2021 – Feb 2022",
      location: "South Jakarta",
      details:
        "Implemented gamified language learning interactive modules and native audio player integrations for early childhood education apps.",
    },
  ],

  techStack: [
    { name: "Go / Golang", category: "Backend", level: "Senior / Core" },
    { name: "Python", category: "Backend / AI", level: "Senior / Core" },
    { name: "Flutter & Dart", category: "Mobile", level: "Specialist" },
    { name: "React & JavaScript", category: "Frontend", level: "Proficient" },
    { name: "React Native", category: "Mobile", level: "Experienced" },
    { name: "MySQL & PostgreSQL", category: "Database", level: "Advanced" },
    { name: "Firebase & Cloud", category: "Cloud", level: "Advanced" },
    { name: "CI/CD & Docker", category: "DevOps", level: "Automated" },
  ],

  processSteps: [
    {
      number: "01",
      title: "Discovery Call",
      desc: "A focused call to unpack your vision, target metrics, and technical constraints before writing specifications.",
    },
    {
      number: "02",
      title: "Scope & Architecture",
      desc: "Translating business goals into system architecture, tech stack selection, milestones, and realistic timelines.",
    },
    {
      number: "03",
      title: "Design & Prototyping",
      desc: "Wireframes and API schema contracts aligned early to prevent costly rework down the line.",
    },
    {
      number: "04",
      title: "Build & CI/CD",
      desc: "Iterative sprints with clean, typed code, test coverage, and automated deployment pipelines.",
    },
    {
      number: "05",
      title: "Launch & Support",
      desc: "Staged production rollout, telemetry monitoring, documentation handoff, and post-launch maintenance.",
    },
  ],
};

