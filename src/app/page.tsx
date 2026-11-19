"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Award, BarChart3, Blocks, Bot, Check, Code2, Database, Download, FileSpreadsheet, FileText, Github, Globe2, Layout, Linkedin, Mail, Menu, Moon, PanelsTopLeft, Smartphone, Sun, Wrench, X } from "lucide-react";
import { AnimatedFooterBottom } from "@/components/AnimatedFooterBottom";
import { certificate, profile as staticProfile, projects, services, skillScores, skills, type Project } from "@/data/portfolio";

const navItems = [["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Services", "services"], ["Projects", "projects"], ["Awards", "awards"], ["Contact", "contact"]];
const filters = ["All projects", "Web development", "Software development", "Data & Excel", "Research & planning", "Team project"];
const iconFor = (name: string) => ({ panels: PanelsTopLeft, smartphone: Smartphone, blocks: Blocks, chart: BarChart3, excel: FileSpreadsheet, docs: FileText, ai: Bot, wrench: Wrench, layout: Layout }[name] || Code2);
const skillIconFor = (category: string, item: string) => {
  if (item === "Microsoft Excel") return FileSpreadsheet;
  if (item === "Microsoft Power BI") return BarChart3;
  if (["SQLite", "MySQL"].includes(item)) return Database;
  if (category === "Frontend development") return PanelsTopLeft;
  return Code2;
};

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduce ? 0 : .65, delay, ease: [.21, .6, .35, 1] }}>{children}</motion.div>;
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text?: string }) {
  return <Reveal className="section-heading"><span className="eyebrow"><i />{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</Reveal>;
}

function CountUp({ value, pad = false }: { value: number; pad?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null); const [count, setCount] = useState(0); const reduce = useReducedMotion();
  useEffect(() => { const node = ref.current; if (!node) return; const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) return; if (reduce) { setCount(value); observer.disconnect(); return; } const start = performance.now(); const duration = 850; const tick = (now: number) => { const progress = Math.min((now - start) / duration, 1); setCount(Math.round(value * (1 - Math.pow(1 - progress, 3)))); if (progress < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); observer.disconnect(); }, { threshold: .8 }); observer.observe(node); return () => observer.disconnect(); }, [reduce, value]);
  return <span ref={ref}>{pad ? String(count).padStart(2, "0") : count}</span>;
}

const roleTitles = ["Software Developer", "Data Analyst", "UI/UX Designer"];
function AnimatedRole() {
  const [index, setIndex] = useState(0); const reduce = useReducedMotion();
  useEffect(() => { if (reduce) return; const timer = window.setInterval(() => setIndex(current => (current + 1) % roleTitles.length), 2400); return () => window.clearInterval(timer); }, [reduce]);
  return <div className="hero-role"><span/><div className="role-window"><AnimatePresence mode="wait" initial={false}><motion.span className="role-title" key={roleTitles[index]} initial={reduce ? false : { x: -28, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={reduce ? undefined : { x: 28, opacity: 0 }} transition={{ duration: .45, ease: [.22, .7, .25, 1] }} aria-live="off">{roleTitles[index]}</motion.span></AnimatePresence></div></div>;
}

function CVLink({ children, className = "button button-primary", href = "/documents/PERSONAL%20CV%202026.pdf" }: { children: React.ReactNode; className?: string; href?: string }) {
  return <a className={className} href={href} download aria-label="Download Masereka Benet's CV"><Download size={16} />{children}</a>;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <Reveal delay={(index % 3) * .06} className={`project-card ${project.kind === "Research & planning" ? "research-card" : ""}`}>
    <Link className="project-card-link" href={`/projects/${project.slug}`} aria-label={`View ${project.title} project details`}><div className="project-image">
      {project.image ? <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 720px) 100vw, 33vw" unoptimized={project.image.startsWith("http")}/> : <div className="image-placeholder"><span className="placeholder-mark">{project.title.slice(0, 2).toUpperCase()}</span><span>{project.category}</span></div>}
      <span className={`project-kind ${project.kind === "Built" ? "kind-built" : project.kind === "Research & planning" ? "kind-research" : ""}`}>{project.kind}</span>
      {project.award && <span className="project-award"><Award size={13} />{project.award}</span>}
    </div>
    <div className="project-copy"><div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight className="project-open-icon" size={17}/></div>
      {project.status && <span className="status-line"><i />{project.status}</span>}<p>{project.description}</p><div className="project-role">{project.role}</div>
      <div className="tag-list">{project.tools.map(t => <span key={t}>{t}</span>)}</div><span className="text-link">Project details <ArrowRight size={15}/></span>
    </div></Link>
  </Reveal>;
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [theme, setTheme] = useState("dark"); const [menuOpen, setMenuOpen] = useState(false); const [active, setActive] = useState("home"); const [filter, setFilter] = useState("All projects"); const [certificateOpen, setCertificateOpen] = useState(false); const [formState, setFormState] = useState(""); const [formError, setFormError] = useState("");
  useEffect(() => { const light = document.documentElement.dataset.theme === "light"; setTheme(light ? "light" : "dark"); const nodes = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[]; const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: "-30% 0px -60% 0px" }); nodes.forEach(n => observer.observe(n)); const keydown = (e: KeyboardEvent) => { if (e.key === "Escape") { setCertificateOpen(false); setMenuOpen(false); } }; window.addEventListener("keydown", keydown); return () => { observer.disconnect(); window.removeEventListener("keydown", keydown); }; }, []);
  const profile = staticProfile;
  const nameParts=profile.name.trim().split(/\s+/);const displayNameFirst=nameParts.shift()||"";const displayNameRest=nameParts.join(" ");const cvUrl="/documents/PERSONAL%20CV%202026.pdf";const whatsappUrl=`https://wa.me/256${profile.phone.replace(/^0/,"")}`;
  const toggleTheme = () => { const next = theme === "dark" ? "light" : "dark"; setTheme(next); document.documentElement.dataset.theme = next; localStorage.setItem("mb-theme", next); };
  const shownProjects = projects.filter(p => filter === "All projects" || p.category === filter || p.kind === filter);
  const submitContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    setFormState("");
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
      setFormError("Please enter your name, a valid email and a message of at least 10 characters.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFormState("Your email draft is ready. Send it from your email app to complete your message.");
  };
  return <main>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="navbar"><a href="#home" className="brand" aria-label="Masereka Benet home"><span>MB</span><b>MASEREKA<span>.</span></b></a><nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">{navItems.map(([name,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className={active === id ? "active" : ""}>{name}</a>)}</nav><div className="nav-actions"><button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>{theme === "dark" ? <Sun size={17}/> : <Moon size={17}/>}</button><a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15}/></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X/> : <Menu/>}</button></div></header>
    <section className="hero section-shell" id="home"><div className="hero-content"><div className="availability"><span className="pulse-dot"/>Open to opportunities <span className="availability-divider">/</span> {profile.location}</div><p className="hero-kicker">HELLO, I’M</p><h1>{displayNameFirst}<br/><span>{displayNameRest}</span><i>.</i></h1><AnimatedRole/><p className="hero-intro">{profile.intro}</p><div className="hero-buttons"><a className="button button-primary" href="#projects">View my projects <ArrowDownRight size={17}/></a><CVLink href={cvUrl} className="button button-ghost">Download my CV</CVLink></div><div className="social-row"><span>LET’S CONNECT</span><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Globe2/></a><a href={`mailto:${profile.email}`} aria-label="Email Masereka Benet"><Mail/></a></div></div>
      <Reveal className="hero-visual"><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="visual-grid"/><div className="hero-photo-wrap"><Image src="/images/benet.jpg" alt={profile.name} className="hero-photo" fill sizes="(max-width: 720px) 245px, 300px" priority unoptimized/><div className="photo-shade"/></div><div className="floating-code code-bottom"><span className="terminal-dot"/><motion.span className="hero-title-label" animate={reduceMotion ? undefined : { scale: [.94, 1.08, .94] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}>{profile.role.toUpperCase()}</motion.span></div><div className="visual-index">01 <span>—</span> 05</div><div className="hero-visual-caption"><span>BUILT WITH INTENTION</span><ArrowDown size={14}/></div></Reveal>
      <a className="scroll-note" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a></section>

      <section className="about section-shell section-pad" id="about"><SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curious by nature.<br/><span>Developer by choice.</span></>} text="I’m building the skills to make technology feel a little more human."/><div className="about-grid"><Reveal className="about-copy"><p className="lead-copy">I’m a <strong>Bachelor of Science in Software Engineering student</strong> at Cavendish University Uganda, learning to turn complex ideas into simple, welcoming experiences.</p><p>I’m drawn to frontend development and web applications, and I’ve also explored backend fundamentals, Microsoft Excel and Power BI dashboards. From research and planning to collaborating on a working prototype, I love understanding the problem before reaching for a solution.</p><p>Every project is an opportunity to learn something new, think carefully, and make a useful contribution. I bring curiosity, teamwork and a thoughtful approach to the work I do.</p><CVLink href={cvUrl}>Get my CV <ArrowUpRight size={15}/></CVLink></Reveal><Reveal className="about-aside" delay={.12}><div className="aside-number">02<span>—</span></div><div className="about-aside-content"><span className="eyebrow">CURRENTLY</span><h3>Learning, building<br/>& moving forward.</h3><div className="about-fact"><span>01</span><p><b>Studying</b><br/>Software Engineering</p></div><div className="about-fact"><span>02</span><p><b>Based in</b><br/>{profile.location}</p></div><div className="about-fact"><span>03</span><p><b>Interested in</b><br/>Frontend & useful software</p></div></div><div className="aside-glow"/></Reveal></div></section>

    <section className="stats section-shell"><div className="stat-intro"><span className="eyebrow">A FEW MILESTONES</span><p>Small steps.<br/><span>Meaningful progress.</span></p></div><div className="stat"><b><CountUp value={projects.length}/></b><span>Documented projects</span><i>Across development, data and research</i></div><div className="stat"><b><CountUp value={1} pad/><span className="stat-suffix">st</span></b><span>IEEE Hackathon</span><i>First place with Campus Compass</i></div><div className="stat"><b><CountUp value={2} pad/></b><span>Ways of working</span><i>Individual & team projects</i></div></section>

     <section className="skills section-shell section-pad" id="skills"><SectionHeading eyebrow="SKILLS" title={<>Tools I build <span>with.</span></>} text="Technologies I’ve used in projects, coursework and building this portfolio. Proficiency scores are self-assessed."/><div className="skill-grid">{skills.map((group,i)=><Reveal key={group.category} delay={i*.07} className="skill-card"><div className="skill-card-head"><span>0{i+1} <i>—</i> TOOLKIT</span><ArrowUpRight size={17}/></div><h3>{group.category}</h3><div className="skill-list">{group.items.map(item=>{const Icon=skillIconFor(group.category,item);const score=skillScores[item];return <div className="skill-row" key={item}><div className="skill-row-label"><Icon size={17}/><span>{item}</span><span className={score === undefined ? "skill-score skill-unrated" : "skill-score"}>{score === undefined ? "Not rated" : `${score}%`}</span></div>{score !== undefined && <div className="skill-meter" role="progressbar" aria-label={`${item} self-assessed proficiency`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={score}><span style={{width:`${score}%`}}/></div>}</div>})}</div>{group.category === "Building this portfolio" && <p className="skill-note">Scores for this section are self-assessed; these are the tools used to build this portfolio.</p>}</Reveal>)}</div></section>

    <section className="services section-shell section-pad" id="services"><SectionHeading eyebrow="WHAT I CAN HELP WITH" title={<>My professional <span>services.</span></>} text="Digital, software, data and technical services for individuals, businesses, educational institutions and communities."/><div className="service-grid">{services.map((service,i)=>{const Icon=iconFor(service.icon);return <Reveal key={service.title} delay={(i%2)*.06} className={`service-card ${i===services.length-1 ? "service-card-wide" : ""}`}><div className="service-card-head"><span className="service-icon"><Icon size={19}/></span><span className="service-index">0{i+1} / 0{services.length}</span></div><h3>{service.title}</h3><p>{service.description}</p><ul className="service-items">{service.items.map(item=><li key={item}><span/> {item}</li>)}</ul></Reveal>})}</div><Reveal className="service-mission"><div className="mission-copy"><span className="eyebrow">MY MISSION</span><p>To empower individuals, businesses, educational institutions, and communities through affordable, accessible, innovative, and user-friendly digital solutions.</p><strong>Building technology. Solving problems. Creating impact.</strong></div><div className="opportunities"><span className="eyebrow">OPEN TO OPPORTUNITIES</span><div>{["Freelance projects", "Internships & employment", "Technology collaborations", "Startups & innovation", "Open-source contributions", "Digital transformation"].map(item=><span key={item}>{item}</span>)}</div><a href="#contact">Have an idea? Let’s collaborate <ArrowUpRight size={15}/></a></div></Reveal></section>

     <section className="projects section-shell section-pad" id="projects"><SectionHeading eyebrow="SELECTED WORK" title={<>Ideas made <span>tangible.</span></>} text="A mix of built projects, team contributions and early-stage concepts — each one a chance to learn."/><div className="project-toolbar"><span>{projects.length} PROJECTS <i>—</i> A WORK IN PROGRESS</span><div className="filter-list" aria-label="Filter projects">{filters.map(f=><button className={filter===f ? "selected" : ""} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div></div><motion.div layout className="project-grid"><AnimatePresence mode="popLayout">{shownProjects.map((p,i)=><motion.div key={p.title} layout initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:.96}} transition={{duration:.24}}><ProjectCard project={p} index={i}/></motion.div>)}</AnimatePresence></motion.div></section>

     <section className="award-section section-shell section-pad" id="awards"><SectionHeading eyebrow="RECOGNITION" title={<>A moment worth <span>celebrating.</span></>} text="Recognition earned together through a little pressure, a lot of teamwork, and a good idea."/><Reveal className="award-card"><button className="certificate-preview" onClick={()=>setCertificateOpen(true)} aria-label={`Enlarge ${certificate.title} certificate`}><Image src={certificate.image} alt={`${certificate.title} certificate`} fill sizes="(max-width: 720px) 100vw, 45vw" unoptimized/><span className="zoom-hint">View certificate <ArrowUpRight size={14}/></span></button><div className="award-copy"><div className="award-icon"><Award size={22}/></div><span className="eyebrow">FIRST PLACE · IEEE HACKATHON</span><h3>{certificate.title}</h3><p>Recognized at the launch hackathon for the IEEE Cavendish University Student Branch and CUUCSA, with our Campus Compass team.</p><div className="award-meta"><span>RECIPIENT</span><b>{profile.name}</b><span>DATE & LOCATION</span><b>{certificate.date} · {certificate.location}</b><span>AWARDED BY</span><b>{certificate.organizations}</b></div></div></Reveal></section>
     <section className="testimonials section-shell"><div className="testimonial-mark">“</div><span className="eyebrow">KIND WORDS</span><h2>Good work is a team effort.</h2><p>Teammate testimonials are on their way. I’m looking forward to sharing what we learned building Campus Compass together.</p><span className="coming-soon"><i/> TESTIMONIALS COMING SOON</span></section>

    <section className="contact section-shell section-pad" id="contact"><SectionHeading eyebrow="LET’S MAKE SOMETHING USEFUL" title={<>Have a project<br/>or opportunity? <span>Let’s talk.</span></>} text="I’m open to internships, collaborations and thoughtful conversations about technology."/><div className="contact-grid"><Reveal className="contact-details"><div className="contact-detail"><span className="contact-detail-icon"><Mail size={18}/></span><div><small>EMAIL ME</small><a href={`mailto:${profile.email}`}>{profile.email}</a></div><ArrowUpRight size={17}/></div><div className="contact-detail"><span className="contact-detail-icon"><Globe2 size={18}/></span><div><small>FIND ME</small><span>{profile.location}</span></div></div><div className="contact-socials"><a href={`https://wa.me/256792910305`} target="_blank" rel="noreferrer"><Smartphone size={17}/> WhatsApp <ArrowUpRight size={14}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a></div><CVLink>Download my CV <Download size={15}/></CVLink></Reveal><Reveal className="contact-form-wrap" delay={.12}><form onSubmit={submitContact} noValidate><div className="form-row"><label>Your name<input name="name" placeholder="How should I call you?" required/></label><label>Your email<input name="email" type="email" placeholder="you@example.com" required/></label></div><label>Your message<textarea name="message" rows={5} placeholder="Tell me a little about what you have in mind…" required minLength={10}/></label>{formError && <p className="form-error" role="alert">{formError}</p>}{formState && <p className="form-success" role="status"><Check size={16}/>{formState}</p>}<button className="button button-primary" type="submit">Prepare email <ArrowUpRight size={17}/></button><p className="form-note">This opens your email app with the message ready to send. Nothing is stored on this site.</p></form></Reveal></div></section>

     <footer className="footer section-shell"><div className="footer-top"><a href="#home" className="brand"><span>MB</span><b>MASEREKA<span>.</span></b></a><p>Building with curiosity.<br/>Growing with every project.</p><div className="footer-nav">{["about","skills","projects","contact"].map(id=><a key={id} href={`#${id}`}>{id}</a>)}</div><a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={18}/></a></div><AnimatedFooterBottom/></footer>

     <AnimatePresence>{certificateOpen && <motion.div className="modal-backdrop certificate-modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={e=>{if(e.target===e.currentTarget)setCertificateOpen(false)}}><button className="modal-close certificate-close" onClick={()=>setCertificateOpen(false)} aria-label="Close certificate"><X/></button><motion.div initial={{scale:.96}} animate={{scale:1}} exit={{scale:.96}}><Image src={certificate.image} alt={`${certificate.title} certificate`} width={1400} height={990} sizes="90vw" unoptimized/></motion.div></motion.div>}</AnimatePresence>
  </main>;
}
