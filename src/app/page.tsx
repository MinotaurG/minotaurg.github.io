import FadeIn from "@/components/FadeIn";
import { getEngineeringProjects, getClientProjects } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  const engineeringProjects = getEngineeringProjects();
  const clientProjects = getClientProjects();

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0">
          {/* Labyrinth */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: "url(/visuals/labyrinth-1.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Geometric overlay */}
          <div className="absolute inset-0 opacity-[0.04]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="greek-key"
                  x="0"
                  y="0"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 0h60v15h-45v30h30v-15h-15v-15h30v45h-60z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-gold-400"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#greek-key)" />
            </svg>
          </div>

          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-surface-900/90 via-surface-900/60 to-surface-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-transparent to-surface-900/80" />
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto w-full">
          <FadeIn>
            <p className="text-gold-400 font-mono text-sm tracking-widest uppercase mb-4">
              Enter the Labyrinth
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl font-black tracking-tight mb-4">
              MinotaurG
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-text-secondary text-xl md:text-2xl mb-8 max-w-2xl">
              Software engineer building across TypeScript, Rust, Go, Python, and Java.
              Systems thinker. Product builder. Open-source contributor.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="border border-gold-500 text-gold-400 px-6 py-3 hover:bg-gold-500 hover:text-surface-900 transition-colors font-medium"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="border border-border text-text-secondary px-6 py-3 hover:border-text-secondary hover:text-text-primary transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Client Work */}
      <section className="px-8 py-20 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-bronze-400 font-mono text-sm tracking-widest uppercase mb-2">
              Client Delivery
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-12">
              Shipped End-to-End
            </h2>
          </FadeIn>

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

      {/* Engineering Projects */}
      <section id="projects" className="px-8 py-20 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-gold-500 font-mono text-sm tracking-widest uppercase mb-2">
              Engineering
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-12">
              Built from Scratch
            </h2>
          </FadeIn>

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

      {/* Skills */}
      <section id="skills" className="px-8 py-20 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-12">
              Arsenal
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-gold-400 font-mono text-sm uppercase tracking-wider mb-4">
                Languages
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li>TypeScript</li>
                <li>Rust</li>
                <li>Go</li>
                <li>Python</li>
                <li>Java</li>
                <li>Shell</li>
              </ul>
            </div>

            <div>
              <h3 className="text-gold-400 font-mono text-sm uppercase tracking-wider mb-4">
                Frontend
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li>React / Next.js</li>
                <li>React Native</li>
                <li>Tailwind</li>
                <li>Framer Motion</li>
              </ul>
            </div>

            <div>
              <h3 className="text-gold-400 font-mono text-sm uppercase tracking-wider mb-4">
                Backend
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li>Node.js</li>
                <li>Medusa.js</li>
                <li>Spring Boot</li>
                <li>REST / RPC</li>
              </ul>
            </div>

            <div>
              <h3 className="text-gold-400 font-mono text-sm uppercase tracking-wider mb-4">
                Systems
              </h3>
              <ul className="space-y-2 text-text-secondary">
                <li>Docker</li>
                <li>CI/CD</li>
                <li>AWS</li>
                <li>CLI tooling</li>
                <li>WebAssembly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-6">
              Find the Exit
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg">
              Open to software engineering roles. Currently exploring opportunities.
            </p>
          </FadeIn>

          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:adixavi7@gmail.com"
              className="text-gold-400 hover:text-gold-500 transition-colors"
            >
              adixavi7@gmail.com
            </a>
            <a
              href="https://github.com/MinotaurG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-shubham/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 text-center text-text-muted border-t border-border">
        <p className="font-mono text-sm">2025 MinotaurG</p>
      </footer>
    </main>
  );
}
