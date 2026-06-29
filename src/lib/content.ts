// ============================================================================
// SITE CONTENT
// All copy lives here so it can be edited without touching component code.
// Every word below is real content from the brief — nothing here is a
// placeholder, a fabricated achievement, or invented work experience.
// ============================================================================

export const SITE = {
  name: "Rishav Sharma",
  role: "Class XII Science Student (Computer Science)",
  tagline: "AI Builder • Developer • Problem Solver",
  email: "rishav1009@gmail.com",
  github: "https://github.com/RishavRq",
  githubHandle: "RishavRq",
};

export const HERO = {
  eyebrow: "Portfolio",
  headline: "RISHAV SHARMA",
  subheadline: "AI Builder • Developer • Problem Solver",
  description:
    "Building software, automation systems, and AI-powered products while balancing Class XII Science.",
};

export const ABOUT = {
  title: "Wired To Build Things",
  paragraphs: [
    "Rishav Sharma is a Class XII Science student with Computer Science who started programming through Java and gradually expanded into Python, web development, automation, and AI.",
    "Rather than treating coding as a school subject, the focus has always been on building useful tools, experimenting with product ideas, and solving real-world problems.",
  ],
  interests: [
    "Artificial Intelligence",
    "Automation",
    "Software Engineering",
    "Product Development",
    "Startups",
    "Emerging Technologies",
  ],
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
  projects?: { name: string; tag: string }[];
  bullets?: string[];
};

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2022",
    title: "First Exposure To Programming",
    description:
      "Introduced to Java fundamentals in school and learned the foundations of programming logic.",
  },
  {
    year: "2023",
    title: "Programming Becomes Serious",
    description:
      "Started writing real code and developing problem-solving skills.",
  },
  {
    year: "2024",
    title: "Development Exploration",
    description:
      "Expanded into web development and broader computer science concepts.",
  },
  {
    year: "2025",
    title: "Python & Product Building",
    description: "Used these projects to learn product thinking and software design.",
    projects: [
      { name: "Houra", tag: "Fitness application prototype" },
      { name: "Early Arrival", tag: "Travel-time optimization assistant" },
    ],
  },
  {
    year: "2026",
    title: "AI & Automation",
    description: "",
    bullets: [
      "AI tools",
      "Workflow automation",
      "Modern web applications",
      "Building public projects",
    ],
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "Currently Learning",
    items: [
      "React",
      "Next.js",
      "Firebase",
      "AI Integrations",
      "APIs",
      "Automation Systems",
    ],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "VS Code", "Firebase", "AI Development Platforms"],
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  status?: "Archived" | "Active" | "Concept";
};

export const PROJECTS: Project[] = [
  {
    name: "Houra",
    description:
      "Fitness-focused application concept aimed at improving consistency and training management.",
    tech: ["Python"],
    status: "Concept",
  },
  {
    name: "Early Arrival",
    description:
      "Travel-time optimization assistant designed to improve planning and punctuality.",
    tech: ["Python"],
    status: "Archived",
  },
  {
    name: "Personal Portfolio",
    description:
      "Modern portfolio showcasing projects, growth, and technical journey.",
    tech: ["Next.js", "TypeScript", "Three.js"],
    status: "Active",
  },
];

export const PHILOSOPHY = {
  quote: "Technology is the greatest leverage a young person can have.",
  words: ["Build.", "Learn.", "Ship.", "Repeat."],
};

export const GITHUB_REPOS_FALLBACK = [
  {
    name: "houra",
    description: "Fitness application prototype written in Python.",
    language: "Python",
    placeholder: true,
  },
  {
    name: "early-arrival",
    description: "Travel-time optimization assistant. Archived.",
    language: "Python",
    placeholder: true,
  },
  {
    name: "portfolio",
    description: "This site — built with Next.js, TypeScript, and Three.js.",
    language: "TypeScript",
    placeholder: true,
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];
