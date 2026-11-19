export const profile = {
  name: "Masereka Benet",
  role: "Software Developer",
  location: "Kampala, Uganda",
  email: "benetmasereka21@gmail.com",
  phone: "0792910305",
  linkedin: "https://linkedin.com/in/masereka-benet-365427383",
  github: "https://github.com/MASEREKA-BENET",
  intro: "I’m a Software Engineering student who loves turning thoughtful ideas into useful, human-friendly digital experiences. I build clean interfaces, explore data, and enjoy solving problems one considered detail at a time.",
};

import { projects as projectData, type Project as ProjectData } from "@/data/projects";

export type Project = ProjectData & { tools: string[]; image?: string; link?: string };
export const projects: Project[] = projectData.map((project) => ({
  ...project,
  tools: project.technologies,
  image: project.coverImage?.src,
  link: project.githubUrl,
}));

export const skills = [
  { category: "Frontend development", items: ["HTML", "CSS", "JavaScript"] },
  { category: "Backend & databases", items: ["Node.js", "Python", "PHP", "SQLite", "MySQL"] },
  { category: "Productivity & data", items: ["Microsoft Excel", "Microsoft Power BI"] },
  { category: "Building this portfolio", items: ["TypeScript", "Next.js", "Tailwind CSS"] },
];

export const skillScores: Record<string, number> = {
  HTML: 89,
  CSS: 82,
  JavaScript: 85,
  "Node.js": 61,
  Python: 61,
  PHP: 51,
  SQLite: 73,
  MySQL: 70,
  "Microsoft Excel": 90,
  "Microsoft Power BI": 80,
  TypeScript: 70,
  "Next.js": 65,
  "Tailwind CSS": 79,
};

export const services = [
  { icon: "panels", title: "Web Development", description: "Responsive websites and web applications for individuals and organizations.", items: ["Responsive website design and development", "Business and organizational websites", "Personal portfolios and professional websites", "E-commerce website development", "Web application development", "Website maintenance and improvements", "Frontend and backend development"] },
  { icon: "blocks", title: "Software Development & System Design", description: "Software and systems shaped around practical organizational needs.", items: ["Custom software solutions", "School and university management systems", "Student attendance management systems", "Payroll management systems", "Inventory and record management systems", "Database design and management", "System analysis, design, and documentation", "Software testing and debugging"] },
  { icon: "excel", title: "Microsoft Excel Solutions", description: "Spreadsheets, trackers and dashboards for organizing everyday data.", items: ["Advanced Excel spreadsheets", "Automated payroll and attendance trackers", "Data entry, cleaning, and organization", "Excel dashboards and reporting", "Financial and budget tracking systems", "Formulas, functions, and data analysis", "Business performance tracking"] },
  { icon: "chart", title: "Power BI & Data Analytics", description: "Data preparation, reporting and visual dashboards for clearer decisions.", items: ["Interactive Power BI dashboards", "Data visualization and reporting", "Business intelligence solutions", "Data cleaning and transformation using Power Query", "DAX calculations and measures", "Educational and business performance dashboards", "Data-driven decision-support solutions"] },
  { icon: "docs", title: "Microsoft Word & Documentation", description: "Polished documents and useful templates for academic and professional work.", items: ["Professional document formatting", "CV and résumé design", "Business reports and proposals", "Academic and research document formatting", "Templates, forms, and official documents", "Mail merge and document automation", "Technical documentation"] },
  { icon: "ai", title: "Artificial Intelligence Solutions", description: "Practical AI-assisted tools and workflows for everyday productivity.", items: ["AI-assisted application development", "AI tools integration into digital workflows", "Prompt engineering", "AI-powered productivity solutions", "Workflow automation", "AI-assisted data analysis", "Research and content productivity tools"] },
  { icon: "wrench", title: "Technical Support & Consultancy", description: "Hands-on guidance for people, teams and growing organizations.", items: ["Software installation and configuration", "Computer applications training", "Digital skills training", "Technical troubleshooting", "Git and GitHub support", "Technology consultation for startups and small businesses"] },
];

export const certificate = { title: "IEEE Hackathon — First Place", date: "4 November 2026", team: "Campus Compass", organizations: "IEEE Cavendish University Student Branch · CUUCSA", location: "Cavendish University Uganda, Siyoni Campus", image: "/certificates/first-place.jpeg" };
