import { getEngineeringProjects, getClientProjects } from "@/data/projects";
import Link from "next/link";

export const metadata = {
  title: "Projects",
  description:
    "Engineering projects and client work by Aditya Shubham. TypeScript, Rust, Go, Python across web, mobile, CLI, and systems.",
};

export default function ProjectsPage() {
  const engineeringProjects = getEngineeringProjects();
  const clientProjects = getClientProjects();

  return (
    <main className="min-h-screen">
      {/* Header with architecture background */}
      <section className="relative pt-24 pb-16 px-8 overflow-hidden min-h-[40vh] flex items-end">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url(/visuals/architecture-2.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-900/40 via-surface-900/60 to-surface-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-900/80 to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <p className="text-gold-500 font-mono text-sm tracking-widest uppercase mb-2">
            Portfolio
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold mb-4">
            All Projects
          </h1>
          <p className="text-text-secondary max-w-2xl">
            Engineering projects built from scratch and client work shipped end-to-end.
          </p>
        </div>
      </section>

      {/* Client Work */}
      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-bronze-400 font-mono text-sm uppercase tracking-wider mb-6">
            Client Delivery
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {clientProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block bg-surface-800 border border-border rounded-lg p-6 hover:border-bronze-400 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-bronze-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-700 px-2 py-1 rounded text-xs text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="px-8 py-16 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-gold-400 font-mono text-sm uppercase tracking-wider mb-6">
            Engineering
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {engineeringProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block bg-surface-800 border border-border rounded-lg p-6 hover:border-gold-600 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gold-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-700 px-2 py-1 rounded text-xs text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
