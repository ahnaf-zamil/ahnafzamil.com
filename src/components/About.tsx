export default function About() {
  return (
    <section className="about-me py-16 bg-theme-bg">
      <div className="container mx-auto px-8">
        <div className="text-left flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-6 text-white text-center md:text-left font-title">
            ABOUT ME
          </h2>
          <div className="w-full max-w-[70%] text-xl text-theme-text">
            <p className="mb-4">
              Hi, I&apos;m <b>Ahnaf</b>. I design and ship production systems that handle complexity at scale, from distributed architectures to AI-powered applications.
            </p>
            <br />
            <p className="mb-4">
              Over the past {new Date().getFullYear() - 2018} years, I&apos;ve built real-time messaging systems, container orchestration platforms and distributed video processing backends and complete end-to-end products and platforms. <br/><br/>Most recently, I spent five months at a startup architecting AI agents and agentic workflows into production applications - shipping RAG pipelines, function-calling systems and multi-step workflows that integrate seamlessly with complex backend infrastructure.
            </p>
            <br />
            <p className="mb-4">
              I work in TypeScript, Go, and Python, with deep expertise in developing product, distributed systems, production AI agent architecture and database systems.
            </p>
            <br />
            <p className="mb-4">
              Currently studying Computer Science; previously Software Engineer at a UK startup.
              I&apos;m available for consulting and development projects.
            </p>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}
