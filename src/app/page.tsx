import FadeIn from "@/components/FadeIn"
import { projects } from "@/data/projects"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="text-5xl font-bold mb-4">MinotaurG</h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-2xl text-gray-400 mb-6">Developer who knows the maze.</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            I build data pipelines, full-stack applications, and DevOps tools.
            Currently exploring the intersection of machine learning and real-world data.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <nav className="flex gap-6">
            <a href="#projects" className="text-blue-400 hover:text-blue-300 transition">Projects</a>
            <a href="#skills" className="text-blue-400 hover:text-blue-300 transition">Skills</a>
            <a href="#contact" className="text-blue-400 hover:text-blue-300 transition">Contact</a>
          </nav>
        </FadeIn>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-8 py-20 max-w-4xl mx-auto border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        
        <div className="grid gap-6">
          {projects.map((project) => (
            <div 
              key={project.slug}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500 transition"
            >
              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-xl font-semibold mb-2 hover:text-blue-400 transition">
                  {project.title}
                </h3>
              </Link>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300"
                >
                  GitHub
                </a>
                {project.live && (
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Live Demo
                  </a>
                )}
                <Link 
                  href={`/projects/${project.slug}`}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-8 py-20 max-w-4xl mx-auto border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-12">Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-blue-400 font-semibold mb-4">Languages</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Python</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Java</li>
              <li>SQL</li>
              <li>Bash</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-400 font-semibold mb-4">Data and ML</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Pandas / NumPy</li>
              <li>Scikit-learn</li>
              <li>Transformers</li>
              <li>ETL Pipelines</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-400 font-semibold mb-4">Web and Backend</h3>
            <ul className="space-y-2 text-gray-400">
              <li>React / Next.js</li>
              <li>Node.js</li>
              <li>Spring Boot</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-400 font-semibold mb-4">Tools and Infra</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Git / GitHub</li>
              <li>Linux</li>
              <li>Docker</li>
              <li>AWS / DynamoDB</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20 max-w-4xl mx-auto border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="flex flex-wrap gap-8">
          <a 
            href="https://github.com/MinotaurG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/aditya-shubham/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            LinkedIn
          </a>
          <a 
            href="https://medium.com/@minotaurg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Medium
          </a>
          <a 
            href="https://dev.to/minotaurg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            dev.to
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 text-center text-gray-500 border-t border-gray-800">
        <p>2025 MinotaurG</p>
      </footer>

    </main>
  )
}