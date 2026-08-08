export default function Projects() {
  const projects = [
    {
      title: "Stratus",
      href: "https://github.com/ahnaf-zamil/stratus",
      description: "A multi-tenant Platform-as-a-Service infrastructure I built to understand how platforms like Heroku work under the hood. Current features: Code upload and deployment, intelligent compute node selection based on resource availability, agent-based orchestration, fault-tolerant task distribution with health checks.",
      tech: "Go, Python, gRPC, TypeScript/React, Docker + gVisor, PostgreSQL",
    },
    {
      title: "Monsoon",
      href: "https://github.com/ahnaf-zamil/ws_rt_app",
      description: "A real-time, secure, scalable, end-to-end encrypted messaging platform designed with a zero-trust architecture. It features client-side key generation and cryptographic operations to ensure that raw passwords and private keys never leave the user's device.",
      tech: "Go, NATS, Kafka, CockroachDB/PostgreSQL",
    },
    {
      title: "MeTube",
      href: "https://github.com/ahnaf-zamil/metube",
      description: "A custom-built distributed video encoding backend inspired by YouTube - featuring chunked uploads, task queues, and worker nodes for scalable processing.",
      tech: "C/C++, RabbitMQ, Flask, Python, FFMPEG, MinIO/AWS S3",
    },
    {
      title: "Project LocalDown",
      href: "https://github.com/ahnaf-zamil/project-localdown",
      description: "A Plex-like system for browsing locally downloaded Light Novels via a centralized UI - featuring a custom data scraper, multilingual full-text search engine, and client-side caching. Multi-device sync and LAN file access coming soon.",
      tech: "Python, Flask, TypeScript, React, PostgreSQL, BeautifulSoup",
    },
  ];

  return (
    <section className="bg-theme-bg pb-18">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left font-title">
          FEATURED PROJECTS
        </h2>

        <div className="grid grid-cols-1 auto-rows-fr sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              className="block rounded-xl font-sans border border-neutral-800 bg-neutral-900 duration-1000 ease-in-out hover:bg-linear-to-r/oklab from-indigo-500/15 to-neutral-900/25 p-6 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h3 className="text-xl font-semibold font-mono text-white">
                {project.title}
              </h3>
              <p className="text-theme-text mt-2">{project.description}</p>
              <p className="text-theme-text mt-2">
                <span className="text-white font-medium">Technology used: </span>
                {project.tech}
              </p>
              <span className="mt-4 inline-block text-theme-accent hover:underline">
                View on GitHub →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}