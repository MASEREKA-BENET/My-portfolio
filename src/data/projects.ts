import attendanceScreenshot from "../../attendance tracker screenshoot.png";
import campusScreenshot from "../../campus compus screenshoot.png";
import findMeScreenshot from "../../findme screenshot.png";
import greenTokenScreenshot from "../../greentoken -kasese screenshoot.png";
import hydroSenseScreenshot from "../../hydrosense screenshoot.png";
import libraryScreenshot from "../../library management system screenshot.jpeg";
import payrollScreenshot from "../../payrol screenshot.png";
import rwediScreenshot from "../../RWeDI SCREEN SHOOT.png";
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
    coverImage: greenTokenScreenshot, gallery: [{ src: greenTokenScreenshot, alt: "GreenToken Kasese project screenshot" }], githubUrl: "https://github.com/MASEREKA-BENET/GREENTOKEN-KASESE", relatedProjects: ["campus-compass", "hydrosense"],
  },
  {
    title: "University Student Performance Tracker", slug: "university-student-performance-dashboard", subtitle: "An Excel workbook for grades, GPA, rankings and academic insights", category: "Data & Excel", kind: "Built",
    description: "An individual Excel system that tracks students and courses, automates marks, grades, semester and cumulative GPA, rankings, degree classification and printable transcripts.",
    problem: "Universities often keep marks in separate files, calculate GPA manually and identify students at risk too late.", solution: "A connected workbook that centralizes academic records, automates calculations, flags student standing and provides filtered dashboards and transcripts.",
    role: "Sole Developer.", contributions: ["Designed and built the Excel tracker and dashboard independently."], features: ["Student and course registers with validation", "Automatic totals, grades, GPA and degree classification", "Dean's List, at-risk and probation flags", "Programme and semester dashboard with course analysis", "Printable student transcripts"], technologies: ["Microsoft Excel"], status: "Completed Excel project",
    coverImage: universityDashboardScreenshot, gallery: [{ src: universityDashboardScreenshot, alt: "University Student Performance Tracker dashboard" }], githubUrl: "https://github.com/MASEREKA-BENET/University-Student-Performance-Tracker", relatedProjects: ["student-attendance-tracker", "payroll-system"],
  },
  {
    title: "Rwenzori Development Initiative (RWeDI)", slug: "rwenzori-development-initiative", subtitle: "A community development website for agriculture, youth and education", category: "Web development", kind: "Built",
    description: "A responsive five-page website introducing Rwenzori Development Initiative (RWeDI), its community programmes and ways to get involved.",
    problem: "A community development organisation needs a clear, accessible online presence to explain its work and connect with the community.", solution: "A responsive website with dedicated pages for the organisation, programmes, projects and contact information.",
    role: "Website Developer.", contributions: ["Built the responsive website and its shared navigation, content pages and interactive elements."],
    features: ["Five responsive pages", "Organisation and programme information", "Project showcase", "Mobile navigation and interactive homepage slideshow", "Contact and social links"], technologies: ["HTML", "CSS", "JavaScript"], status: "Private preview",
    coverImage: rwediScreenshot, gallery: [{ src: rwediScreenshot, alt: "RWeDI homepage showing its community development programmes" }], githubUrl: "https://github.com/MASEREKA-BENET/rwedi-website", relatedProjects: ["greentoken-kasese", "hydrosense"],
  },
  {
    title: "African Ark College Management System", slug: "school-management-system", subtitle: "A role-based college and student administration platform", category: "Web development", kind: "Built",
    description: "A full college management platform for African Ark College of Management Sciences, with role-based access across admissions, student records, finance, hostels and staff workflows.",
    problem: "College administration spans multiple roles and services that need secure, coordinated access for staff, students and applicants.", solution: "A single-page web application backed by a Python API, with eight roles, granular permissions and connected college services.",
    role: "Sole Developer.", contributions: ["Built the college management platform and its application workflows."], features: ["Eight user roles with permission controls", "Student and staff portals", "Online applications and admissions", "Finance and hostel modules", "Assignments, library, announcements and messaging"], technologies: ["HTML", "CSS", "JavaScript", "Python", "SQLite", "PostgreSQL"], status: "Deployed on Vercel",
    coverImage: schoolScreenshot, gallery: [{ src: schoolScreenshot, alt: "African Ark College Management System screenshot" }], githubUrl: "https://github.com/MASEREKA-BENET/NUU", liveUrl: "https://nuu-two.vercel.app", relatedProjects: ["campus-compass", "library-management-system"],
  },
  {
    title: "Student Attendance Tracker", slug: "student-attendance-tracker", subtitle: "An Excel tracker for attendance records and summaries", category: "Data & Excel", kind: "Built",
    description: "An individual Excel attendance and audit system that tracks class records, monitors students at risk, manages leave requests and flags data-quality issues.",
    problem: "Paper registers and disconnected spreadsheets make attendance reporting slow and leave duplicates, clashes and late entries hard to detect.", solution: "An eight-sheet workbook that connects student and course registers, attendance, leave, reporting and audit checks.",
    role: "Sole Developer.", contributions: ["Designed and built the attendance workbook, reporting dashboard and audit checks."], features: ["Attendance summaries, standing and at-risk indicators", "Timetable and course statistics", "Printable student reports", "Absence and leave tracking", "Audit flags for duplicates, clashes and late entries"], technologies: ["Microsoft Excel"], status: "Completed Excel project",
    coverImage: attendanceScreenshot, gallery: [{ src: attendanceScreenshot, alt: "Student Attendance Tracker dashboard" }], githubUrl: "https://github.com/MASEREKA-BENET/lake-view-attendance-tracker-", relatedProjects: ["payroll-system", "university-student-performance-dashboard"],
  },
  {
    title: "Bent Company Limited Payroll System", slug: "payroll-system", subtitle: "Excel payroll automation and compliance reporting", category: "Data & Excel", kind: "Built",
    description: "An individual Excel payroll system that automates PAYE, NSSF and overtime calculations, produces payslips and remittance schedules, and summarizes labour costs.",
    problem: "Payroll requires accurate salary, deduction and statutory remittance calculations that are difficult to manage consistently by hand.", solution: "A structured workbook that connects employee details, payroll calculations, payslips, remittances and a cost dashboard.",
    role: "Sole Developer.", contributions: ["Built the payroll workbook and its calculation and reporting sheets."], features: ["PAYE, NSSF and overtime calculations", "Payslip generation", "URA and NSSF remittance schedules", "Payroll and labour-cost dashboard"], technologies: ["Microsoft Excel"], status: "Completed Excel project",
    coverImage: payrollScreenshot, gallery: [{ src: payrollScreenshot, alt: "Bent Company Limited Payroll System dashboard" }], githubUrl: "https://github.com/MASEREKA-BENET/BENT-COMPANY-LIMITED-PAYROLL-SYSTEM", relatedProjects: ["student-attendance-tracker", "university-student-performance-dashboard"],
  },
  {
    title: "Simple Calculator", slug: "simple-calculator", subtitle: "A Python command-line calculator", category: "Software development", kind: "Built",
    description: "A Python calculator supporting addition, subtraction, multiplication, division, powers, square roots, modulo and calculation history.",
    problem: "A small command-line calculator should handle common operations while giving clear feedback for invalid input and unsafe calculations.", solution: "A standard-library Python program with an interactive menu, operation history and checks for division by zero and negative square roots.",
    role: "Sole Developer.", contributions: ["Built the calculator using Python's standard library."], features: ["Basic arithmetic and powers", "Square root and modulo", "Calculation history", "Invalid input and division-by-zero handling"], technologies: ["Python"], status: "Completed command-line project",
    gallery: [], githubUrl: "https://github.com/MASEREKA-BENET/SIMPLE-CALCULATOR", relatedProjects: [],
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
