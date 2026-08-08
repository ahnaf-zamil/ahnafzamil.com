import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-theme-bg text-theme-text py-10 px-4">
      <div className="container mx-auto text-center space-y-4">
        <p className="text-lg font-semibold text-gray-200 font-title">
          K M AHNAF ZAMIL
        </p>

        <div className="flex justify-center space-x-6">
          <Link
            href="/contact"
            target="_blank"
            className="hover:text-indigo-200 hover:drop-shadow-[0_0_6px_#1e88e5] transition"
          >
            Contact
          </Link>
          <a
            href="https://github.com/ahnaf-zamil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-200 hover:drop-shadow-[0_0_6px_#1e88e5] transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ahnafzamil/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-200 hover:drop-shadow-[0_0_6px_#1e88e5] transition"
          >
            LinkedIn
          </a>
          <a
            href="https://dev.to/ahnafzamil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-200 hover:drop-shadow-[0_0_6px_#1e88e5] transition"
          >
            Blog
          </a>
        </div>

        <p className="text-sm text-gray-500">
          &copy; 2026 K M Ahnaf Zamil. All rights reserved. Made with 💗 using
          Next.js
        </p>
      </div>
    </footer>
  );
}