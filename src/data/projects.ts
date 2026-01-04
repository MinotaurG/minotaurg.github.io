export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  github: string
  live?: string
  features: string[]
  challenges?: string
  learnings?: string
}

export const projects: Project[] = [
  {
    slug: "football-sentiment-analysis",
    title: "Football Sentiment Analysis",
    description: "Analyzing social media sentiment vs football performance. Compared 5 NLP methods, achieved 98.6% accuracy with transformers.",
    longDescription: "A data science project analyzing the relationship between public sentiment on social media and football player/team performance. Built with best development practices including git branching, modular code, and comprehensive documentation.",
    tags: ["Python", "NLP", "Transformers", "Streamlit", "Pandas", "Scikit-learn"],
    github: "https://github.com/MinotaurG/football-sentiment-analysis",
    live: "https://football-sentiment-analysis.streamlit.app/",
    features: [
      "5 sentiment analysis methods compared (TextBlob, VADER, Football-VADER, ML, Transformer)",
      "Twitter-RoBERTa transformer achieving 98.6% accuracy",
      "Custom football-specific sentiment lexicon",
      "ML model trained on 18,000 labeled tweets",
      "7 visualization chart types",
      "Sentiment-performance correlation analysis",
      "Interactive Streamlit dashboard"
    ],
    challenges: "The biggest challenge was handling the nuances of football-specific language. Words like 'killer' (killer pass), 'destroyed' (destroyed the defense), and 'sick' (sick goal) have positive meanings in football context but negative sentiment in general English. I built a custom Football-VADER lexicon to handle these cases.",
    learnings: "Pre-tournament hype doesn't predict success (correlation +0.06), but ongoing fan sentiment correlates moderately with performance (+0.645 for EPL season). Transformers significantly outperform rule-based methods for social media text."
  },
  {
    slug: "online-bookstore",
    title: "Online Bookstore Application",
    description: "Full-stack e-commerce application with user authentication, shopping cart, and admin inventory management.",
    longDescription: "A production-ready full-stack online bookstore built with React and Spring Boot, featuring Amazon-style ASIN inventory management, personalized recommendations, and comprehensive admin tools. Developed as part of the Amazon ATLAS Training Program.",
    tags: ["Java", "Spring Boot", "React", "DynamoDB", "Docker", "Vite"],
    github: "https://github.com/MinotaurG/Online_Bookstore_Application",
    features: [
      "Advanced search with full-text search by title/author",
      "Smart shopping cart with real-time stock validation",
      "Order history and browsing history tracking",
      "Personalized recommendations engine",
      "Admin panel with CRUD operations",
      "Bulk upload via CSV/JSON with drag & drop",
      "Docker Compose for one-command deployment",
      "134 automated tests with 58% code coverage",
      "CI/CD pipeline with GitHub Actions"
    ],
    challenges: "Implementing the ASIN (Amazon Standard Identification Number) system was interesting. I created deterministic ID generation so the same book always gets the same ID, preventing duplicates during bulk imports. Also built a browsing history feature using a LinkedList with FIFO ordering (capacity: 10 books).",
    learnings: "Learned production-ready practices: Docker containerization, CI/CD pipelines, proper testing strategies, and building scalable REST APIs. The DynamoDB integration taught me NoSQL data modeling."
  },
  {
    slug: "mulyam-jewels",
    title: "Mulyam Jewels",
    description: "E-commerce website for India's first fashion jewelry brand for pets, kids, and women.",
    longDescription: "A modern e-commerce website built for a friend starting a jewelry business. The site showcases fashion jewelry for pets, kids, and women - a unique niche in the Indian market.",
    tags: ["Next.js", "React", "Vercel", "TypeScript"],
    github: "https://github.com/MinotaurG/mulyam-jewels",
    live: "https://mulyam-jewels.vercel.app/",
    features: [
      "Modern responsive design",
      "Product catalog structure",
      "Mobile-first approach",
      "Fast deployment on Vercel",
      "SEO-friendly Next.js architecture"
    ],
    challenges: "Building for a real client meant understanding business requirements beyond just code. Had to balance design aesthetics with practical e-commerce needs. The site is still evolving as the business grows.",
    learnings: "Real-world project for a real client. Learned to gather requirements, iterate on feedback, and build something that serves actual business needs."
  },
  {
    slug: "network-troubleshooter",
    title: "Network Troubleshooter",
    description: "Command-line network diagnostic toolkit for Support Engineers with connectivity checks, DNS lookups, and port scanning.",
    longDescription: "A comprehensive command-line network diagnostic toolkit designed for Support Engineers. Provides quick connectivity checks, DNS lookups, ping analysis, port scanning, traceroute visualization, and HTTP endpoint testing.",
    tags: ["Bash", "Linux", "Networking", "DNS", "TCP/IP"],
    github: "https://github.com/MinotaurG/network-troubleshooter",
    features: [
      "Quick connectivity checks (gateway, internet, DNS, HTTPS)",
      "DNS lookups with IPv4/IPv6 resolution",
      "Ping analysis with color-coded latency results",
      "Port scanning for common services",
      "Local and public IP information",
      "Traceroute with latency analysis",
      "HTTP endpoint testing with timing breakdown",
      "Full diagnostic report generation for escalation"
    ],
    challenges: "Making the output both informative and readable in a terminal environment. Used ANSI color codes for status indicators (green/yellow/red) and box-drawing characters for clean formatting.",
    learnings: "Deep dive into networking fundamentals: DNS resolution, TCP handshakes, ICMP, traceroute mechanics, and HTTP timing. These are essential concepts for any Support Engineer role."
  },
  {
    slug: "server-health-dashboard",
    title: "Server Health Dashboard",
    description: "Real-time terminal dashboard monitoring CPU, memory, disk, and network with color-coded status indicators.",
    longDescription: "A real-time terminal dashboard that monitors server health metrics. Displays system information, CPU load, memory usage, disk space, network connections, and top processes with auto-refresh every 5 seconds.",
    tags: ["Bash", "Linux", "Monitoring", "System Administration"],
    github: "https://github.com/MinotaurG/server-health-dashboard",
    features: [
      "System information (hostname, OS, kernel, uptime)",
      "CPU monitoring (cores, load average, percentage)",
      "Memory monitoring (used, available, swap)",
      "Disk usage monitoring",
      "Network connections count",
      "Top 5 processes by CPU usage",
      "Color-coded status indicators (green < 70%, yellow 70-90%, red > 90%)",
      "Auto-refresh every 5 seconds"
    ],
    challenges: "Parsing output from various Linux commands (free, df, ps, uptime) consistently across different systems. Used awk extensively for text processing and extraction.",
    learnings: "Gained practical experience with Linux system administration commands and process monitoring. Understanding these metrics is crucial for diagnosing server issues in support roles."
  },
  {
    slug: "log-detective",
    title: "Log Detective",
    description: "Log analysis toolkit using grep, awk, sed with SQLite storage for pattern identification and insights.",
    longDescription: "A log analysis toolkit for Support Engineers. Parses web server logs, identifies patterns (errors, slow requests, suspicious IPs), and stores insights in a SQLite database for querying.",
    tags: ["Bash", "Linux", "SQL", "SQLite", "Log Analysis"],
    github: "https://github.com/MinotaurG/log-detective",
    features: [
      "Generate realistic fake log data for testing",
      "Parse and analyze log files using grep, awk, sed",
      "Store insights in SQLite database",
      "Query patterns: errors, slow requests, suspicious IPs",
      "Regular expression pattern matching",
      "Automated analysis pipeline"
    ],
    challenges: "Designing regex patterns that catch various log formats while remaining performant on large files. Also learned to structure data properly for SQLite storage and efficient querying.",
    learnings: "Advanced text processing with grep, awk, and sed. These tools are invaluable for log analysis in production environments. Also practiced SQL for storing and querying structured data."
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
