export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Aditya Shubham. Open to software engineering roles.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Header with architecture background */}
      <section className="relative pt-24 pb-16 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: "url(/visuals/architecture-1.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              maskImage:
                "linear-gradient(to bottom, black 30%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 30%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-900/50 to-surface-900" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <p className="text-gold-500 font-mono text-sm tracking-widest uppercase mb-2">
            Contact
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold mb-8">
            Find the Exit
          </h1>

          <p className="text-text-secondary text-lg mb-12 max-w-lg">
            Open to software engineering roles. If you're building something interesting,
            I'd like to hear about it.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="px-8 pb-20">
        <div className="max-w-4xl mx-auto space-y-6">
          <a
            href="mailto:adixavi7@gmail.com"
            className="block bg-surface-800 border border-border rounded-lg p-6 hover:border-gold-600 transition-colors group"
          >
            <p className="text-text-muted font-mono text-sm mb-1">Email</p>
            <p className="text-xl text-text-primary group-hover:text-gold-400 transition-colors">
              adixavi7@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/MinotaurG"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-surface-800 border border-border rounded-lg p-6 hover:border-gold-600 transition-colors group"
          >
            <p className="text-text-muted font-mono text-sm mb-1">GitHub</p>
            <p className="text-xl text-text-primary group-hover:text-gold-400 transition-colors">
              MinotaurG
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-shubham/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-surface-800 border border-border rounded-lg p-6 hover:border-gold-600 transition-colors group"
          >
            <p className="text-text-muted font-mono text-sm mb-1">LinkedIn</p>
            <p className="text-xl text-text-primary group-hover:text-gold-400 transition-colors">
              Aditya Shubham
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
