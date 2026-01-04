import { projects, getProjectBySlug } from "@/data/projects"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <article className="px-8 py-20 max-w-4xl mx-auto">
        
        {/* Back Link */}
        <Link 
          href="/#projects"
          className="text-blue-400 hover:text-blue-300 transition mb-8 inline-block"
        >
          Back to Projects
        </Link>

        {/* Header */}
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-12">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            View on GitHub
          </a>
          {project.live && (
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition"
            >
              Live Demo
            </a>
          )}
        </div>

        {/* Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-3">-</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Challenges */}
        {project.challenges && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
            <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
          </section>
        )}

        {/* Learnings */}
        {project.learnings && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">What I Learned</h2>
            <p className="text-gray-300 leading-relaxed">{project.learnings}</p>
          </section>
        )}

        {/* Back Link */}
        <Link 
          href="/#projects"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          Back to Projects
        </Link>

      </article>

      {/* Footer */}
      <footer className="px-8 py-8 text-center text-gray-500 border-t border-gray-800">
        <p>2025 MinotaurG</p>
      </footer>
    </main>
  )
}
