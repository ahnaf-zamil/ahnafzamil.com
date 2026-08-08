import ParticlesBackground from "@/components/ParticlesBackground";

export default function Hero() {
  return (
    <div
      id="home-hero"
      className="h-[calc(100vh-80px)] parallax text-center flex items-center justify-center relative"
    >
      <div
        id="tsparticles"
        className="fixed z-[-1] opacity-0 transition-opacity duration-2500 top-0 h-full w-full"
      />
      <ParticlesBackground />

      <div className="margin-auto align-middle fadeIn mx-4">
        <h1 className="text-5xl md:text-6xl font-bold font-title">K M AHNAF ZAMIL</h1>
        <h2 className="text-theme-text text-lg md:text-xl mt-2">
          Backend Systems & AI Engineer
        </h2>
        <h3 className="text-theme-text text-lg md:text-xl mt-8">
        Where systems engineering meets product.
        </h3>

        {/* OLD BUTTONS — commented out for revert
        <div id="hero-buttons" className="my-10">
          <a
            href="https://github.com/ahnaf-zamil"
            className="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              See My Work
            </span>
          </a>
          <a
            href="/contact"
            className="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Get in Touch
            </span>
          </a>
        </div>
        */}

        <div id="hero-buttons" className="my-10">
          <a
            href="https://github.com/ahnaf-zamil"
            className="inline-block px-6 py-3 rounded-lg border border-white bg-[#111] text-white hover:bg-white hover:text-[#111] text-sm font-medium transition-colors duration-700"
          >
            See My Work
          </a>
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-lg border border-white bg-[#111] text-white hover:bg-white hover:text-[#111] text-sm font-medium ml-2 transition-colors duration-700"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
