import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetails } from "@/components/ProjectDetails";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found | Masereka Benet" };
  return {
    title: `${project.title} | Projects by Masereka Benet`,
    description: project.subtitle,
    openGraph: { title: project.title, description: project.subtitle, type: "article", images: project.coverImage ? [project.coverImage.src] : [] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = project.relatedProjects.map((relatedSlug) => getProject(relatedSlug)).filter((item) => item !== undefined);
  return <ProjectDetails project={project} related={related}/>;
}
