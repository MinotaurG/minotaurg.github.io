export const metadata = {
  title: "About",
  description:
    "Aditya Shubham - software engineer building in TypeScript, Rust, Go, Python, and Java. Polyglot systems thinker with published open-source packages.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero banner with minotaur */}
      <section className="relative pt-24 pb-16 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute right-0 top-0 bottom-0 w-1/2 md:w-2/5 mix-blend-screen opacity-60"
            style={{
              backgroundImage: "url(/visuals/Minotaur_2.jpeg)",
              backgroundSize: "contain",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
              maskImage:
                "linear-gradient(to left, black 30%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, black 30%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-900 via-surface-900/80 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <p className="text-gold-500 font-mono text-sm tracking-widest uppercase mb-2">
            About
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold mb-8">
            The Engineer Behind the Labyrinth
          </h1>

          <div className="space-y-6 text-text-secondary leading-relaxed text-lg max-w-2xl">
            <p>
              I'm Aditya Shubham. I build software across the full stack and beyond it,
              from mobile apps to CLI tools to systems-level Rust, from e-commerce platforms
              to ML pipelines.
            </p>
            <p>
              I work in TypeScript, Rust, Go, Python, and Java. Not because I collect
              languages, but because each project demands its own tool. A rules engine
              belongs in Go. A CLI that needs to be fast belongs in Rust. A storefront
              belongs in TypeScript. I pick the right one and ship.
            </p>
            <p>
              I've published open-source packages used in production, built products that
              grew from 300 to 900 monthly signups, and shipped e-commerce platforms
              handling real money. I also run{" "}
              <a
                href="https://elevatestrategy.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-500 transition-colors"
              >
                Elevate Strategy
              </a>
              , a digital agency for sports and lifestyle brands.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Identity */}
      <section className="px-8 py-16 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-8">
            How I Work
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface-800 border border-border rounded-lg p-6">
              <h3 className="text-gold-400 font-mono text-sm uppercase tracking-wider mb-3">
                Polyglot by Design
              </h3>
              <p className="text-text-secondary text-sm">
                TypeScript for web and mobile. Rust for performance-critical tools.
                Go for concurrent systems. Python for ML and automation. Java for
                enterprise backends.
              </p>
            </div>
            <div className="bg-surface-800 border border-border rounded-lg p-6">
              <h3 className="text-gold-400 font-mono text-sm uppercase tracking-wider mb-3">
                Full Product Ownership
              </h3>
              <p className="text-text-secondary text-sm">
                I don't just write features. I architect systems, build the infrastructure,
                ship to production, and maintain what I build. From initial design through
                to user-facing deployment.
              </p>
            </div>
            <div className="bg-surface-800 border border-border rounded-lg p-6">
              <h3 className="text-gold-400 font-mono text-sm uppercase tracking-wider mb-3">
                Open Source
              </h3>
              <p className="text-text-secondary text-sm">
                Published packages solving real gaps in the ecosystem. Payment gateways,
                fulfillment integrations, developer tools. Used in production by others.
              </p>
            </div>
            <div className="bg-surface-800 border border-border rounded-lg p-6">
              <h3 className="text-gold-400 font-mono text-sm uppercase tracking-wider mb-3">
                Systems Thinking
              </h3>
              <p className="text-text-secondary text-sm">
                Every project is a system. I think about data flow, failure modes,
                user experience, and long-term maintainability before writing the first line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="px-8 py-16 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-8">
            Background
          </h2>
          <div className="space-y-4 text-text-secondary">
            <p>
              Selected into a competitive engineering program (top 0.5% of 14,000 applicants).
              Built production systems in enterprise environments. Ran a digital agency
              delivering e-commerce and corporate web products.
            </p>
            <p>
              Currently exploring software engineering opportunities where I can build
              complex systems at scale.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
