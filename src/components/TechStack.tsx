interface TechItem {
  name: string;
  icon?: string;
  customSvg?: React.ReactNode;
}

const techStack: TechItem[] = [
  // Languages
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Go", icon: "devicon-go-original-wordmark" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "C/C++", icon: "devicon-c-plain" },
  { name: "Lua", icon: "devicon-lua-plain" },

  // Databases & Storage
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "Redis", icon: "devicon-redis-plain" },
  { name: "Elasticsearch", icon: "devicon-elasticsearch-plain" },
  { name: "Supabase", icon: "devicon-supabase-plain" },

  // Backend & Frameworks
  {
    name: "Mastra",
    customSvg: (
      <svg className="w-8 h-8" viewBox="0 0 34 21" fill="white">
        <path d="M4.5 11.7a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M10.4 0a4.5 4.5 0 0 1 4.4 5.5c-.3 1.4-.6 3 .2 4.2l1.3 1.8.3.2q.2 0 .3-.2l1.3-1.9c.8-1.1.5-2.7.2-4a4.5 4.5 0 1 1 8.8 0c-.3 1.3-.6 2.8 0 4l1.3 2a4.5 4.5 0 1 1-4.3 3.5c.3-1.3.6-2.8 0-4l-1.2-2h-.2L21.5 11c-.8 1.2-.5 2.8-.2 4.2a4.5 4.5 0 1 1-8.8.2q.5-2-.4-3.8l-.9-1.3q-.9-1.1-2.4-1.6A4.5 4.5 0 0 1 10.4 0" />
      </svg>
    ),
  },
  {
    name: "Convex",
    customSvg: (
      <svg className="w-8 h-8" viewBox="0 0 184 188" fill="white">
        <path d="M108.092 130.021C126.258 128.003 143.385 118.323 152.815 102.167C148.349 142.127 104.653 167.385 68.9858 151.878C65.6992 150.453 62.8702 148.082 60.9288 145.034C52.9134 132.448 50.2786 116.433 54.0644 101.899C64.881 120.567 86.8748 132.01 108.092 130.021Z" />
        <path d="M53.4012 90.1735C46.0375 107.19 45.7186 127.114 54.7463 143.51C22.9759 119.608 23.3226 68.4578 54.358 44.7949C57.2286 42.6078 60.64 41.3096 64.2178 41.1121C78.9312 40.336 93.8804 46.0225 104.364 56.6193C83.0637 56.8309 62.318 70.4756 53.4012 90.1735Z" />
        <path d="M114.637 61.8552C103.89 46.8701 87.0686 36.6684 68.6387 36.358C104.264 20.1876 148.085 46.4045 152.856 85.1654C153.3 88.7635 152.717 92.4322 151.122 95.6775C144.466 109.195 132.124 119.679 117.702 123.559C128.269 103.96 126.965 80.0151 114.637 61.8552Z" />
      </svg>
    ),
  },
  { name: "React.js", icon: "devicon-react-original" },

  // Event & Messaging Systems
  { name: "RabbitMQ", icon: "devicon-rabbitmq-original" },
  { name: "NATS", icon: "devicon-nats-plain" },
  { name: "Apache Kafka", icon: "devicon-apachekafka-original" },

  // Protocols & Networking
  { name: "GraphQL", icon: "devicon-graphql-plain" },
  { name: "gRPC", icon: "devicon-grpc-plain" },
  {
    name: "OpenResty",
    customSvg: (
      <svg className="w-8 h-8" viewBox="0 0 91 93" fill="white">
        <path d="M4.568 45.44c12.649.29 17.036.87 26.321 1.753 5.127 10.439 4.91 8.245 7.066 20.469-8.34-9.485-20.866-19.538-33.769-22.304" />
        <path d="M6.02 0c11.148 5.729 38.795 24.218 46.376 27.864 4.013-1.042 9.81-3.646 17.837-.521-8.918 1.042-16.499 10.937-25.418 17.708-8.026-20.312-21.404-32.031-27.201-38.281" />
        <path d="M.167 26.627c15.384 3.125 20.568 4.883 31.716 8.008C39 49.5 37 56.5 35.451 65.884 28.316 48.697 15.161 32.812 0 26.562" />
        <path d="M6.243.13c8.919 5.208 20.736 20.963 25.641 33.984 1.784 5.208 4.459 17.708 3.567 31.77 1.561 8.854 12.932 34.375 38.349 23.437-12.932 0-19.175-4.948-25.863-15.885-.446-.26-6.689-18.489-3.122-28.385C36.343 16.927 12.932 3.125 6.02 0" />
        <path d="M69.341 82.551c10.256 0 18.506-7.031 20.512-18.229.112-.651 1.617 8.333-8.194 19.271-.725.651-6.745 1.562-12.096-1.042" />
        <path d="M76.476 42.968c2.23 1.563 3.567 2.864 4.905 4.427 1.338 1.042-.892-3.646-1.338-4.167.669-3.385-1.449-8.463-1.672-8.594-1.561-1.562-29.988 9.375-20.178 35.416-.892-21.875 9.309-26.041 18.227-27.083z" />
        <path d="M73.8 89.321c3.121-1.302 5.128-3.581 7.804-5.664.111-.065-18.06 2.474-23.411-13.672-1.784-2.865-8.316-26.692 20.122-35.546-1.338-2.864-6.745-6.575-8.082-7.096C51.275 28.385 45 33.42 45 44.5c-5 9-2.378 46.598 28.8 44.822z" />
        <circle cx="76.03" cy="37.239" r="1.338" />
      </svg>
    ),
  },

  // Cloud & Servers
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
  { name: "Cloudflare Stack", icon: "devicon-cloudflare-plain" },

  // CI/CD
  { name: "GitHub Actions", icon: "devicon-githubactions-plain-wordmark" },
];

export default function TechStack() {
  return (
    <section className="bg-theme-bg pb-32 pt-16">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left font-title">
          WHAT I USE
        </h2>
        <p className="text-xl text-theme-muted">
          I&apos;m constantly learning and working with new technologies, so this list will keep getting
          longer.
        </p>
        <div className="py-4 sm:grid grid-rows-10 md:grid-rows-7 lg:grid-rows-5 grid-flow-col gap-x-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center bg-neutral-900 px-6 py-4 my-4 sm:my-3 duration-1000 ease-in-out hover:bg-linear-to-r/oklab from-neutral-700/15 to-neutral-900/25 transition-all w-full"
            >
              <button className="flex w-full cursor-pointer">
                <div className="flex items-center gap-7 text-lg text-theme-muted">
                  {tech.icon && (
                    <i className={`${tech.icon} text-white text-2xl`} />
                  )}
                  {tech.customSvg}
                  {tech.name}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}