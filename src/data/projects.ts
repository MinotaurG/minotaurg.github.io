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
    description: "ML pipeline comparing 5 NLP methods. Transformer model achieved 98.6% accuracy on FIFA World Cup tweets.",
    longDescription: "A data science project analyzing the relationship between public sentiment on social media and football player/team performance. Built with best development practices including git branching, modular code, and comprehensive documentation.",
    tags: ["Python", "Transformers", "Scikit-learn", "NLP", "Pandas", "ML"],
    github: "https://github.com/MinotaurG/football-sentiment-analysis",
    features: [
      "5 sentiment analysis methods compared (TextBlob, VADER, Football-VADER, ML, Transformer)",
      "Twitter-RoBERTa transformer achieving 98.6% accuracy",
      "ML model trained on 18,000 labeled tweets (80.4% accuracy)",
      "Custom football-specific sentiment lexicon",
      "7 visualization chart types",
      "Sentiment-performance correlation analysis"
    ],
    challenges: "The biggest challenge was handling football-specific language. Words like 'killer' (killer pass), 'destroyed' (destroyed the defense), and 'sick' (sick goal) have positive meanings in football context but negative sentiment in general English. I built a custom Football-VADER lexicon to handle these cases.",
    learnings: "Pre-tournament hype doesn't predict success (correlation +0.06), but ongoing fan sentiment correlates moderately with performance (+0.645 for EPL season). Transformers significantly outperform rule-based methods for social media text."
  },
  {
    slug: "online-bookstore",
    title: "Online Bookstore Application",
    description: "Full-stack e-commerce app with DynamoDB, Docker, CI/CD pipeline, and 134 automated tests. Built during Amazon ATLAS.",
    longDescription: "A production-ready full-stack online bookstore built with React and Spring Boot, featuring Amazon-style ASIN inventory management, personalized recommendations, and comprehensive admin tools. Developed as part of the Amazon ATLAS Training Program.",
    tags: ["Java", "Spring Boot", "React", "DynamoDB", "Docker", "CI/CD"],
    github: "https://github.com/MinotaurG/Online_Bookstore_Application",
    features: [
      "Full CRUD with DynamoDB backend",
      "134 automated tests (58% code coverage)",
      "CI/CD pipeline with GitHub Actions",
      "Docker Compose deployment",
      "Amazon-style ASIN inventory system",
      "Bulk upload via CSV/JSON",
      "Personalized recommendations engine",
      "Admin panel with inventory management"
    ],
    challenges: "Implementing deterministic ID generation so the same book always gets the same ID, preventing duplicates during bulk imports. Also built a browsing history feature using a LinkedList with FIFO ordering.",
    learnings: "Production-ready practices: Docker containerization, CI/CD pipelines, testing strategies, and scalable REST APIs. DynamoDB integration taught me NoSQL data modeling."
  },
  {
    slug: "sql-olap-analytics",
    title: "SQL & OLAP Analytics",
    description: "SQL database projects demonstrating OLAP operations: drill down, rollup, cube, slice, and dice on sales data.",
    longDescription: "SQL database management and OLAP analytics projects demonstrating data querying, reporting, and analytical operations across multiple domains.",
    tags: ["SQL", "PostgreSQL", "OLAP", "Analytics", "Data Modeling"],
    github: "https://github.com/MinotaurG/sql-olap-analytics",
    features: [
      "OLAP Operations: Drill Down, Roll Up, Cube, Slice, Dice",
      "Academic Management System with student analytics",
      "Event Management System with attendance tracking",
      "Complex SQL queries and aggregations",
      "Data modeling and normalization"
    ],
    challenges: "Designing efficient queries for multi-dimensional analysis while maintaining readability and performance.",
    learnings: "Deep understanding of analytical processing, data warehousing concepts, and how to translate business questions into SQL queries."
  },
  {
    slug: "log-detective",
    title: "Log Detective",
    description: "Log analysis toolkit using grep, awk, sed with SQLite storage for pattern identification.",
    longDescription: "A log analysis toolkit for Support Engineers. Parses web server logs, identifies patterns (errors, slow requests, suspicious IPs), and stores insights in a SQLite database.",
    tags: ["Bash", "SQL", "SQLite", "Linux", "Analytics"],
    github: "https://github.com/MinotaurG/log-detective",
    features: [
      "Parse and analyze log files using grep, awk, sed",
      "Store insights in SQLite database",
      "Query patterns: errors, slow requests, suspicious IPs",
      "Regular expression pattern matching",
      "Automated analysis pipeline"
    ],
    challenges: "Designing regex patterns that catch various log formats while remaining performant on large files.",
    learnings: "Advanced text processing and SQL for storing and querying structured data from unstructured logs."
  },
  {
    slug: "server-health-dashboard",
    title: "Server Health Dashboard",
    description: "Real-time terminal dashboard monitoring CPU, memory, disk with color-coded alerts.",
    longDescription: "A real-time terminal dashboard that monitors server health metrics with auto-refresh every 5 seconds.",
    tags: ["Bash", "Linux", "Monitoring", "DevOps"],
    github: "https://github.com/MinotaurG/server-health-dashboard",
    features: [
      "CPU, Memory, Disk monitoring",
      "Color-coded status (green < 70%, yellow 70-90%, red > 90%)",
      "Top 5 processes by CPU usage",
      "Network connections tracking",
      "Auto-refresh every 5 seconds"
    ],
    challenges: "Parsing output from various Linux commands consistently across different systems.",
    learnings: "Linux system administration commands and process monitoring fundamentals."
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}