import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K M Ahnaf Zamil | Backend Systems & AI Engineer",
  description: "K M Ahnaf Zamil - Backend Systems & AI Engineer. Architecting production AI agents and distributed systems. Backend engineer at the intersection of AI and infrastructure.",
  keywords: "backend scalability, backend engineer, startup infrastructure, infrastructure audit, cloud architecture, distributed systems, real-time backend, scaling backend, reliability engineering, K M Ahnaf Zamil, Ahnaf Zamil, Infrastructure Engineer, Systems Engineer, python, golang, ai agents, RAG pipelines, function-calling agents, production AI systems",
  authors: [{ name: "K M Ahnaf Zamil" }],
  openGraph: {
    title: "K M Ahnaf Zamil | Backend Systems & AI Engineer",
    description: "Architecting production AI agents and distributed systems. Backend engineer at the intersection of AI and infrastructure.",
    url: "https://ahnafzamil.com",
    type: "website",
    images: ["/assets/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "K M Ahnaf Zamil | Backend Systems & AI Engineer",
    description: "Helping companies build fault-tolerant, scalable infrastructure that doesn't break under growth. Explore projects.",
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=bespoke-stencil@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link rel="icon" href="/assets/logo.png" type="image/png" />
    <script defer src="https://cloud.umami.is/script.js" data-website-id="b76aa8ba-3553-4b09-9215-60acd1f9d814"></script>
      </head>
      <body className="flex flex-col min-h-screen bg-theme-bg">
        {children}
      </body>
    </html>
  );
}