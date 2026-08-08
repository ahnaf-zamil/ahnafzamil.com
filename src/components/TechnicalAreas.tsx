interface TechnicalArea {
  title: string;
  skills: string[];
}

const areas: TechnicalArea[] = [
  {
    title: "Backend Architecture & Design",
    skills: [
      "Microservices architecture and service boundaries",
      "Fault-tolerant distributed system design",
      "Database architecture and partitioning strategies",
      "Service discovery and API gateway implementation",
    ],
  },
  {
    title: "System Scaling & Performance",
    skills: [
      "Query optimization and strategic indexing",
      "Caching layer implementation (Redis, CDN)",
      "Architecting horizontally scalable systems",
    ],
  },
  {
    title: "Full-Stack Product Engineering",
    skills: [
      "Shipping end-to-end products from concept to production",
      "Building MVPs and prototypes for rapid market validation",
      "Owning product decisions alongside technical architecture",
    ],
  },
  {
    title: "Real-Time & Event-Driven Systems",
    skills: [
      "Building low-latency, distributed real-time communication layers",
      "Ensuring data consistency in eventual consistency systems",
      "Pub/sub patterns and event-driven design",
    ],
  },
  {
    title: "Container Orchestration & Deployment",
    skills: [
      "Containerization and registry optimization",
      "GitOps and progressive deployment strategies",
      "Kubernetes and deployment automation",
    ],
  },
  {
    title: "AI & Agent Systems",
    skills: [
      "Integrating agentic AI systems into production applications",
      "RAG pipelines for domain-specific knowledge and context scaling",
      "Cost optimization and latency management in LLM applications",
    ],
  },
];

export default function TechnicalAreas() {
  return (
    <section className="bg-theme-bg py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center md:text-left font-title">
          TECHNICAL AREAS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-neutral-900 duration-1000 ease-in-out hover:bg-linear-to-r/oklab from-neutral-700/15 to-neutral-900/25 transition-all border-l-4 border-theme-accent rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2 text-theme-text">{area.title}</h3>
              <ul className="space-y-2">
                {area.skills.map((skill) => (
                  <li key={skill} className="flex items-start text-sm">
                    <span className="text-theme-accent font-bold mr-2 flex-shrink-0">→</span>
                    <span className="text-theme-text/90">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}