export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">MinotaurG</h1>
        <p className="text-2xl text-gray-400 mb-6">Developer who knows the maze.</p>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          I build data pipelines, full-stack applications, and DevOps tools.
          Currently exploring the intersection of machine learning and real-world data.
        </p>
        <nav className="flex gap-6">
          <a href="#projects" className="text-blue-400 hover:text-blue-300 transition">Projects</a>
          <a href="#skills" className="text-blue-400 hover:text-blue-300 transition">Skills</a>
          <a href="#contact" className="text-blue-400 hover:text-blue-300 transition">Contact</a>
        </nav>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-8 py-20 max-w-4xl mx-auto border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        
        <div className="grid gap-6">
          
          {/* Project 1 */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-2">🏆 Football Sentiment Analysis</h3>
            <p className="text-gray-400 mb-4">
              Analyzing social media sentiment vs football performance. 
              Compared 5 NLP methods, achieved 98.6% accuracy with transformers.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300">Python</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300">NLP</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300">Transformers</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300">Streamlit</span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/MinotaurG/football-sentiment-analysis" className="text-blue-400 hover:text-blue-300">GitHub</a>
              <a href="#" className="text-blue-400 hover:text-blue-300">Live Demo</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-2">📚 Online Bookstore</h3>
            <p className="text-gray-400 mb-4">
              Full-stack e-commerce application with user authentication and shopping cart.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300">Java</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300">React</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300">Vite</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300">DynamoDB</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-2">💎 Mulyam Jewelry</h3>
            <p className="text-gray-400 mb-4">
              E-commerce website for jewelry shopping with product catalog and checkout flow.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300">Node.js</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300">Express</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-2">🔧 DevOps Toolkit</h3>
            <p className="text-gray-400 mb-4">
              Bash scripts for network troubleshooting, server health monitoring, and log analysis.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300">Bash</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300">Linux</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
            </div>
          </div>

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
            <h3 className="text-blue-400 font-semibold mb-4">Data & ML</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Pandas / NumPy</li>
              <li>Scikit-learn</li>
              <li>Transformers</li>
              <li>ETL Pipelines</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-400 font-semibold mb-4">Web & Backend</h3>
            <ul className="space-y-2 text-gray-400">
              <li>React / Next.js</li>
              <li>Node.js</li>
              <li>Streamlit</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-400 font-semibold mb-4">Tools & Infra</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Git / GitHub</li>
              <li>Linux</li>
              <li>DynamoDB</li>
              <li>AWS</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20 max-w-4xl mx-auto border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="flex gap-8">
          <a href="https://github.com/MinotaurG" className="text-blue-400 hover:text-blue-300 transition">GitHub</a>
          <a href="#" className="text-blue-400 hover:text-blue-300 transition">LinkedIn</a>
          <a href="#" className="text-blue-400 hover:text-blue-300 transition">Medium</a>
          <a href="#" className="text-blue-400 hover:text-blue-300 transition">dev.to</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 text-center text-gray-500 border-t border-gray-800">
        <p>© 2025 MinotaurG</p>
      </footer>

    </main>
  )
}