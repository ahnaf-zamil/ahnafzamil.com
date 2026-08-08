interface TechItem {
  name: string;
  icon?: string;
  customSvg?: React.ReactNode;
}

const techStack: TechItem[] = [
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Go", icon: "devicon-go-original-wordmark" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
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
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "Redis", icon: "devicon-redis-plain" },
  { name: "RabbitMQ", icon: "devicon-rabbitmq-original" },
  { name: "NATS", icon: "devicon-nats-plain" },
  { name: "Apache Kafka", icon: "devicon-apachekafka-original" },
  { name: "GraphQL", icon: "devicon-graphql-plain" },
  { name: "gRPC", icon: "devicon-grpc-plain" },
  {
    name: "OpenAI API",
    customSvg: (
      <svg className="w-8 h-8" viewBox="0 0 512 512" fill="white">
        <path d="M196.4 185.8l0-48.6c0-4.1 1.5-7.2 5.1-9.2l97.8-56.3c13.3-7.7 29.2-11.3 45.6-11.3 61.4 0 100.4 47.6 100.4 98.3 0 3.6 0 7.7-.5 11.8L343.3 111.1c-6.1-3.6-12.3-3.6-18.4 0L196.4 185.8zM424.7 375.2l0-116.2c0-7.2-3.1-12.3-9.2-15.9L287 168.4 329 144.3c3.6-2 6.7-2 10.2 0L437 200.7c28.2 16.4 47.1 51.2 47.1 85 0 38.9-23 74.8-59.4 89.6l0 0zM166.2 272.8l-42-24.6c-3.6-2-5.1-5.1-5.1-9.2l0-112.6c0-54.8 42-96.3 98.8-96.3 21.5 0 41.5 7.2 58.4 20L175.4 108.5c-6.1 3.6-9.2 8.7-9.2 15.9l0 148.5 0 0zm90.4 52.2l-60.2-33.8 0-71.7 60.2-33.8 60.2 33.8 0 71.7-60.2 33.8zm38.7 155.7c-21.5 0-41.5-7.2-58.4-20l100.9-58.4c6.1-3.6 9.2-8.7 9.2-15.9l0-148.5 42.5 24.6c3.6 2 5.1 5.1 5.1 9.2l0 112.6c0 54.8-42.5 96.3-99.3 96.3l0 0zM173.8 366.5L76.1 310.2c-28.2-16.4-47.1-51.2-47.1-85 0-39.4 23.6-74.8 59.9-89.6l0 116.7c0 7.2 3.1 12.3 9.2 15.9l128 74.2-42 24.1c-3.6 2-6.7 2-10.2 0zm-5.6 84c-57.9 0-100.4-43.5-100.4-97.3 0-4.1 .5-8.2 1-12.3l100.9 58.4c6.1 3.6 12.3 3.6 18.4 0l128.5-74.2 0 48.6c0 4.1-1.5 7.2-5.1 9.2l-97.8 56.3c-13.3 7.7-29.2 11.3-45.6 11.3l0 0zm127 60.9c62 0 113.7-44 125.4-102.4 57.3-14.9 94.2-68.6 94.2-123.4 0-35.8-15.4-70.7-43-95.7 2.6-10.8 4.1-21.5 4.1-32.3 0-73.2-59.4-128-128-128-13.8 0-27.1 2-40.4 6.7-23-22.5-54.8-36.9-89.6-36.9-62 0-113.7 44-125.4 102.4-57.3 14.8-94.2 68.6-94.2 123.4 0 35.8 15.4 70.7 43 95.7-2.6 10.8-4.1 21.5-4.1 32.3 0 73.2 59.4 128 128 128 13.8 0 27.1-2 40.4-6.7 23 22.5 54.8 36.9 89.6 36.9z" />
      </svg>
    ),
  },
  {
    name: "Anthropic API",
    customSvg: (
      <svg className="w-8 h-8" viewBox="0 0 512 512" fill="white">
        <path d="M100.4 340.5l100.7-56.5 1.7-4.9-1.7-2.7-4.9 0-16.8-1-57.5-1.6-49.9-2.1-48.3-2.6-12.2-2.6-11.4-15 1.2-7.5 10.2-6.9 14.7 1.3c18.9 1.3 45.9 3.1 81 5.6l35.2 2.1 52.2 5.4 8.3 0 1.2-3.4-2.8-2.1-2.2-2.1-50.3-34.1-54.4-36-28.5-20.7-15.4-10.5-7.8-9.8-3.4-21.5 14-15.4 18.8 1.3 4.8 1.3 19 14.7 40.7 31.5 53.1 39.1 7.8 6.5 3.1-2.2 .4-1.6-3.5-5.8-28.9-52.2-30.8-53.1-13.7-22-3.6-13.2c-1.3-5.4-2.2-10-2.2-15.5l15.9-21.6 8.8-2.8 21.2 2.8 8.9 7.8 13.2 30.2 21.4 47.5 33.2 64.6 9.7 19.2 5.2 17.8 1.9 5.4 3.4 0 0-3.1 2.7-36.4 5-44.7 4.9-57.5 1.7-16.2 8-19.4 15.9-10.5 12.4 5.9 10.2 14.7-1.4 9.5-6.1 39.5-11.9 61.9-7.8 41.5 4.5 0 5.2-5.2 21-27.8 35.2-44.1 15.5-17.5 18.1-19.3 11.6-9.2 22 0 16.2 24.1-7.3 24.9-22.7 28.7-18.8 24.4-27 36.3-16.8 29 1.6 2.3 4-.4 60.9-13 32.9-5.9 39.3-6.7 17.8 8.3 1.9 8.4-7 17.2-42 10.4-49.2 9.8-73.3 17.3-.9 .7 1 1.3 33 3.1 14.1 .8 34.6 0 64.4 4.8 16.8 11.1 10.1 13.6-1.7 10.4-25.9 13.2c-15.5-3.7-54.4-12.9-116.6-27.7l-28-7-3.9 0 0 2.3 23.3 22.8 42.7 38.6 53.5 49.8 2.7 12.3-6.9 9.7-7.3-1-47-35.4-18.1-15.9-41.1-34.6-2.7 0 0 3.6 9.5 13.9 50 75.2 2.6 23-3.6 7.5-13 4.5-14.2-2.6-29.3-41.1-30.2-46.3-24.4-41.5-3 1.7-14.4 154.8-6.7 7.9-15.5 5.9-13-9.8-6.9-15.9 6.9-31.5 8.3-41.1 6.7-32.7 6.1-40.6 3.6-13.5-.2-.9-3 .4-30.6 42-46.5 62.9-36.8 39.4-8.8 3.5-15.3-7.9 1.4-14.1 8.5-12.6 50.9-64.8 30.7-40.2 19.8-23.2-.1-3.4-1.2 0-135.3 87.8-24.1 3.1-10.4-9.7 1.3-15.9 4.9-5.2 40.7-28-.1 .1 0 .1z" />
      </svg>
    ),
  },
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
  { name: "React.js", icon: "devicon-react-original" },
  { name: "C/C++", icon: "devicon-c-plain" },
  { name: "Lua", icon: "devicon-lua-plain" },
  { name: "React Native", icon: "devicon-reactnative-original" },
  { name: "Cloudflare Stack", icon: "devicon-cloudflare-plain" },
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