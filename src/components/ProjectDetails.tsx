import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectThemeToggle } from "@/components/ProjectThemeToggle";
import { AnimatedFooterBottom } from "@/components/AnimatedFooterBottom";

export function ProjectDetails({ project, related }: { project: Project & { overview?: string }; related: Project[] }) {
  return <main className="project-detail-page">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="project-detail-nav section-shell">
      <Link href="/#home" className="brand" aria-label="Masereka Benet home"><span>MB</span><b>MASEREKA<span>.</span></b></Link>
      <div className="project-detail-nav-actions"><ProjectThemeToggle/><Link className="project-back-link" href="/#projects"><ArrowLeft size={15}/> Back to Projects</Link></div>
    </header>
    <article className="project-detail section-shell">
      <div className="project-detail-heading">
        <span className="eyebrow"><i/> {project.kind} · {project.category}</span>
        <h1>{project.title}</h1><p className="project-subtitle">{project.subtitle}</p>
        <div className="project-detail-actions">
          {project.githubUrl ? <a className="button button-primary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">Source Code <ExternalLink size={15}/></a> : <span className="repository-unavailable">Repository not available yet</span>}
          {project.liveUrl && <a className="button button-ghost" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Website <ArrowUpRight size={15}/></a>}
        </div>
      </div>

      {project.coverImage ? <figure className="project-detail-cover"><Image src={project.coverImage} alt={`${project.title} project screenshot`} priority sizes="(max-width: 720px) 100vw, 1160px" unoptimized={project.coverImage.src.startsWith("http")}/><figcaption>{project.title}</figcaption></figure> : <div className="project-detail-cover project-cover-placeholder" aria-label={`${project.title} visual cover`}><span>{project.title.slice(0, 2).toUpperCase()}</span><small>{project.kind}</small></div>}

      <div className="project-detail-content">
        <section className="project-overview"><span className="eyebrow">PROJECT OVERVIEW</span><h2>{project.subtitle}</h2><p>{project.overview||project.description}</p></section>
        <div className="project-story-grid">
          <section className="project-story-card"><span className="eyebrow">THE PROBLEM</span><p>{project.problem}</p></section>
          <section className="project-story-card"><span className="eyebrow">THE APPROACH</span><p>{project.solution}</p></section>
        </div>
        <section className="project-contribution project-story-card"><span className="eyebrow">MY ROLE & CONTRIBUTIONS</span><h2>{project.role}</h2><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section className="project-features project-story-card"><span className="eyebrow">FEATURES & SCOPE</span><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
        {project.technologies.length > 0 && <section className="project-tech project-story-card"><span className="eyebrow">TECHNOLOGIES USED</span><div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></section>}
        <section className="project-status project-story-card"><span className="eyebrow">PROJECT STATUS</span><p><i/>{project.status}</p></section>
        {project.gallery.length > 0 && <section className="project-gallery"><span className="eyebrow">PROJECT SCREENSHOTS</span><div>{project.gallery.map((image) => <figure key={image.alt}><Image src={image.src} alt={image.alt} sizes="(max-width: 720px) 100vw, 50vw" unoptimized/><figcaption>{image.alt}</figcaption></figure>)}</div></section>}
      </div>

      {related.length > 0 && <section className="related-projects"><div className="related-heading"><span className="eyebrow">KEEP EXPLORING</span><h2>Related projects<span>.</span></h2></div><div className="related-project-grid">{related.map((item) => <Link href={`/projects/${item.slug}`} className="related-project-card" key={item.slug}><span>{item.kind}</span><h3>{item.title}</h3><p>{item.subtitle}</p><ArrowUpRight size={17}/></Link>)}</div></section>}
      <Link className="button button-ghost project-bottom-back" href="/#projects"><ArrowLeft size={15}/> Back to Projects</Link>
    </article>
    <footer className="project-detail-footer section-shell"><AnimatedFooterBottom/><Link href="/#projects">Featured Projects</Link></footer>
  </main>;
}
