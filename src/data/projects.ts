import attendanceScreenshot from "../../attendance tracker screenshoot.png";
import campusScreenshot from "../../campus compus screenshoot.png";
import findMeScreenshot from "../../findme screenshot.png";
import greenTokenScreenshot from "../../greentoken -kasese screenshoot.png";
import hydroSenseScreenshot from "../../hydrosense screenshoot.png";
import libraryScreenshot from "../../library management system screenshot.jpeg";
import payrollScreenshot from "../../payrol screenshot.png";
import schoolScreenshot from "../../school management system screenshoot.png";
import universityDashboardScreenshot from "../../university  student performance dashboard screenshot.png";

export type Project = {
  title: string;
  slug: string;
  subtitle: string;
  category: string;
  kind: "Built" | "Team project" | "Research & planning";
  description: string;
  problem: string;
  solution: string;
  role: string;
  contributions: string[];
  features: string[];
  technologies: string[];
  status: string;
  coverImage?: typeof attendanceScreenshot;
  gallery: { src: typeof attendanceScreenshot; alt: string }[];
  githubUrl?: string;
  liveUrl?: string;
  relatedProjects: string[];
  award?: string;
};

export const projects: Project[] = [
  {
    title: "Campus Compass", slug: "campus-compass", subtitle: "A room-booking prototype for campus spaces", category: "Web development", kind: "Team project",
    description: "A campus room-booking prototype to help students discover available rooms, schedule bookings and check in with QR codes.",
    problem: "Students need a way to find available campus rooms and coordinate room use.", solution: "A working prototype bringing room discovery, booking and QR-code check-in together.",
    role: "Frontend Developer on a team project.", contributions: ["Developed the frontend as part of the project team."],
    features: ["Discover available rooms", "Schedule room bookings", "QR-code check-in"], technologies: ["JavaScript", "Python", "MySQL"], status: "Working prototype",
    coverImage: campusScreenshot, gallery: [{ src: campusScreenshot, alt: "Campus Compass project screenshot" }], githubUrl: "https://github.com/muzoora2000/RoomBooking.git", relatedProjects: ["greentoken-kasese", "school-management-system"], award: "1st place · IEEE Hackathon",
  },
  {
    title: "GreenToken Kasese", slug: "greentoken-kasese", subtitle: "A farmer and carbon-credit management platform", category: "Web development", kind: "Team project",
    description: "A farmer and carbon-credit management platform for registrations, estimated credits, sales and payouts across administrator, finance and farmer portals.",
    problem: "The project addresses the need to manage farmer registration and carbon-credit activity across different user roles.", solution: "A locally running platform concept with dedicated administrator, finance and farmer portals.",
    role: "Developer, collaborating with Mirembe Martha.", contributions: ["Contributed to the project with Mirembe Martha."],
    features: ["Farmer registration", "Estimated carbon credits", "Sales and payouts", "Administrator, finance and farmer portals"], technologies: ["JavaScript", "HTML", "CSS", "Node.js", "SQLite"], status: "Running locally",
    coverImage: greenTokenScreenshot, gallery: [{ src: greenTokenScreenshot, alt: "GreenToken Kasese project screenshot" }], githubUrl: "https://github.com/MASEREKA-BENET/GREENTOKEN-KASESE.git", relatedProjects: ["campus-compass", "hydrosense"],
  },
  {
    title: "University Student Performance Dashboard", slug: "university-student-performance-dashboard", subtitle: "An Excel dashboard for student performance data", category: "Data & Excel", kind: "Built",
    description: "An individual Excel dashboard that visualizes student enrolment and marks by course.", problem: "Student enrolment and course marks can be difficult to review together in raw tabular form.", solution: "An Excel dashboard that visualizes enrolment and marks by course.",
    role: "Sole Developer.", contributions: ["Created the dashboard independently."], features: ["Visualizes student enrolment", "Shows marks by course"], technologies: ["Microsoft Excel"], status: "Completed individual project",
    coverImage: universityDashboardScreenshot, gallery: [{ src: universityDashboardScreenshot, alt: "University Student Performance Dashboard screenshot" }], githubUrl: "https://github.com/MASEREKA-BENET/University-Student-Performance-Tracker.git", relatedProjects: ["student-attendance-tracker", "payroll-system"],
  },
  {
    title: "School Management System", slug: "school-management-system", subtitle: "A system for core school records and administration", category: "Web development", kind: "Built",
    description: "A school management system covering admissions, student records, course registration, fee tracking and examination results.", problem: "Core school information and administrative activities need to be organized in one system.", solution: "A management system designed around admissions, student records, course registration, fees and examination results.",
    role: "Sole Developer.", contributions: ["Contributed independently across system planning, research, design and development."], features: ["Admissions", "Student records", "Course registration", "Fee tracking", "Examination results"], technologies: ["HTML", "CSS", "JavaScript", "Python Standard Library", "SQLite"], status: "Development project",
    coverImage: schoolScreenshot, gallery: [{ src: schoolScreenshot, alt: "School Management System project screenshot" }], githubUrl: "https://github.com/MASEREKA-BENET/NUU.git", relatedProjects: ["campus-compass", "library-management-system"],
  },
  {
    title: "Student Attendance Tracker", slug: "student-attendance-tracker", subtitle: "An Excel tracker for attendance records and summaries", category: "Data & Excel", kind: "Built",
    description: "An individual Excel solution for recording attendance by date and generating summaries.", problem: "Recording attendance over time calls for a consistent way to organize entries and review totals.", solution: "An Excel tracker for date-based attendance records and summaries.",
    role: "Sole Developer.", contributions: ["Created the tracker independently."], features: ["Record attendance by date", "Generate attendance summaries"], technologies: ["Microsoft Excel"], status: "Completed individual project",
    coverImage: attendanceScreenshot, gallery: [{ src: attendanceScreenshot, alt: "Student Attendance Tracker project screenshot" }], githubUrl: "https://github.com/MASEREKA-BENET/LakeView-Attendance-Tracker-.git", relatedProjects: ["payroll-system", "university-student-performance-dashboard"],
  },
  {
    title: "Payroll System", slug: "payroll-system", subtitle: "An Excel payroll solution for salary calculations", category: "Data & Excel", kind: "Built",
    description: "An individual Excel payroll solution for calculating gross pay, deductions and net salaries.", problem: "Payroll calculations require a clear way to account for gross pay, deductions and net salary.", solution: "An Excel payroll solution organizing those calculations in one workbook.",
    role: "Sole Developer.", contributions: ["Created the payroll solution independently."], features: ["Calculate gross pay", "Account for deductions", "Calculate net salaries"], technologies: ["Microsoft Excel"], status: "Completed individual project",
    coverImage: payrollScreenshot, gallery: [{ src: payrollScreenshot, alt: "Payroll System project screenshot" }], githubUrl: "https://github.com/MASEREKA-BENET/BENT-COMPANY-LIMITED-PAYROLL-SYSTEM.git", relatedProjects: ["student-attendance-tracker", "university-student-performance-dashboard"],
  },
  {
    title: "Youth Employment Platform (YEP)", slug: "yep", subtitle: "A platform concept for youth employment opportunities", category: "Web development", kind: "Team project",
    description: "A platform designed to help young people find employment opportunities.", problem: "Young people need accessible ways to find employment opportunities.", solution: "A team-built platform concept focused on connecting young people with opportunities.",
    role: "Team contributor.", contributions: ["Implemented Add, Edit and Delete functionality."], features: ["Add records", "Edit records", "Delete records"], technologies: ["PHP", "HTML", "CSS"], status: "Team project",
    gallery: [], relatedProjects: ["find-me", "school-management-system"],
  },
  {
    title: "Find Me", slug: "find-me", subtitle: "A university lost-and-found platform concept", category: "Research & planning", kind: "Research & planning",
    description: "A university lost-and-found platform concept for reporting and recovering misplaced items.", problem: "A campus community needs a clear way to report and recover misplaced items.", solution: "A researched and planned concept for a university lost-and-found platform.",
    role: "Planning and research contributor only.", contributions: ["Contributed to planning and research; no software development contribution is claimed."], features: ["Concept for reporting misplaced items", "Concept for helping recover items"], technologies: [], status: "Planning and research",
    coverImage: findMeScreenshot, gallery: [{ src: findMeScreenshot, alt: "Find Me project screenshot" }], githubUrl: "https://github.com/walterolum/FindMe-lost-and-found-management-system.git", relatedProjects: ["yep", "library-management-system"],
  },
  {
    title: "Library Management System", slug: "library-management-system", subtitle: "A concept for organizing library collections and operations", category: "Web development", kind: "Research & planning",
    description: "A library management system concept for organizing a collection and supporting day-to-day library operations.", problem: "Library collections and everyday operations require organized management.", solution: "A project concept focused on organizing the collection and library operations.",
    role: "Planning and research contributor only.", contributions: ["Contributed to planning and research; no software development contribution is claimed."], features: ["Collection organization concept", "Day-to-day library operations concept"], technologies: [], status: "Planning and research",
    coverImage: libraryScreenshot, gallery: [{ src: libraryScreenshot, alt: "Library Management System project screenshot" }], githubUrl: "https://github.com/alitdel/Library-Management-System.git", relatedProjects: ["find-me", "school-management-system"],
  },
  {
    title: "HydroSense", slug: "hydrosense", subtitle: "A climate-resilient rural water management concept", category: "Research & planning", kind: "Research & planning",
    description: "An AI-enabled platform concept for climate-resilient rural water management in Uganda, connecting IoT monitoring, climate forecasting and community engagement.", problem: "Rural water management faces climate-related challenges that call for informed monitoring and community engagement.", solution: "A researched concept connecting IoT monitoring, climate forecasting and community engagement.",
    role: "Planning and research contributor only.", contributions: ["Contributed to planning and research; no software development contribution is claimed."], features: ["IoT monitoring concept", "Climate forecasting concept", "Community engagement concept"], technologies: [], status: "Planning and research",
    coverImage: hydroSenseScreenshot, gallery: [{ src: hydroSenseScreenshot, alt: "HydroSense project concept screenshot" }], githubUrl: "https://github.com/walterolum/HydroSense.git", relatedProjects: ["greentoken-kasese", "drain-guard"],
  },
  {
    title: "DrainGuard", slug: "drain-guard", subtitle: "A smart drainage monitoring and response concept", category: "Research & planning", kind: "Research & planning",
    description: "A smart drainage monitoring and response-support platform concept.", problem: "Drainage systems can benefit from monitoring and timely response support.", solution: "A project concept for smart drainage monitoring and response support.",
    role: "Planning, research and design contributor only.", contributions: ["Contributed to planning, research and design; no software development contribution is claimed."], features: ["Drainage monitoring concept", "Response-support concept"], technologies: [], status: "Planning, research and design",
    gallery: [], relatedProjects: ["hydrosense", "greentoken-kasese"],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
