interface BlogPost {
  title: string;
  description: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Stratus: Building a Multi-Tenant PaaS",
    description:
      "Part 1 of a series exploring how to build a multi-tenant Platform-as-a-Service, covering architecture and orchestration.",
    url: "https://dev.to/ahnafzamil/building-a-multi-tenant-paas-application-part-1-architecture-initial-design-4d49",
  },
  {
    title: "OpenResty: The Overpowered Web Server",
    description:
      "An in-depth look at OpenResty, a high-performance web server that powers over 40M websites, and why it's underrated.",
    url: "https://dev.to/ahnafzamil/openresty-the-overpowered-web-server-used-by-40m-websites-that-people-rarely-talk-about-2fjg",
  },
  {
    title: "Service Registry: When Should You Use Them?",
    description:
      "A guide to service registry patterns, when they're useful, and how they fit into modern microservices architectures.",
    url: "https://dev.to/ahnafzamil/service-registry-when-should-you-use-them-and-why-3o92",
  },
];

export default function Blog() {
  return (
    <section className="bg-theme-bg pb-32">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left font-title">
          BLOG & ARTICLES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-neutral-800 bg-neutral-900 p-6 transition-all hover:shadow-lg hover:shadow-blue-500/10 duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold font-mono text-white">{post.title}</h3>
              <p className="text-theme-text mt-2">{post.description}</p>
              <span className="mt-4 inline-block text-theme-accent hover:underline">
                Read More →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}