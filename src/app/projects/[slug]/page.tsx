import { projects, getProjectBySlug } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const accentColor =
    project.category === "client" ? "bronze-400" : "gold-400";

  return (
    <main className="min-h-screen pt-24 px-8">
      <article className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className={`text-${accentColor} hover:opacity-80 transition text-sm font-mono mb-8 inline-block`}
        >
          &larr; All Projects
        </Link>

        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-surface-700 px-3 py-1 rounded text-sm text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mb-12">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border px-4 py-2 rounded text-sm text-text-secondary hover:border-text-secondary hover:text-text-primary transition-colors"
            >
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-${accentColor} text-surface-900 px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition`}
            >
              Live Site
            </a>
          )}
        </div>

        <section className="mb-12">
          <p className="text-text-secondary leading-relaxed text-lg">
            {project.longDescription}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-6">
            Features
          </h2>
          <ul className="space-y-3">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="text-text-secondary flex items-start"
              >
                <span className={`text-${accentColor} mr-3 mt-1`}>&#x2022;</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {project.challenges && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-4">
              Challenges
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {project.challenges}
            </p>
          </section>
        )}

        {project.learnings && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-4">
              Learnings
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {project.learnings}
            </p>
          </section>
        )}

        <div className="border-t border-border pt-8 mt-16">
          <Link
            href="/projects"
            className={`text-${accentColor} hover:opacity-80 transition text-sm font-mono`}
          >
            &larr; All Projects
          </Link>
        </div>
      </article>
    </main>
  );
}
