"use client";

import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

let slimLoaded = false;

export default function ParticlesBackground() {
  useEffect(() => {
    let cancelled = false;

    async function init() {
      if (!slimLoaded) {
        await loadSlim(tsParticles);
        slimLoaded = true;
      }
      if (cancelled) return;

      const container = await tsParticles.load({
        id: "tsparticles",
        options: {
          fpsLimit: 60,
          particles: {
            number: { value: 60, density: { enable: false }, limit: { value: 80 } },
            links: {
              enable: true,
              opacity: 0.6,
              distance: 600,
            },
            move: {
              enable: true,
              speed: 0.6,
            },
            size: { value: 4 },
            opacity: { value: 0.6 },
          },
          interactivity: {
            events: {},
            modes: {},
          },
          background: { color: "#111" },
        },
      });

      if (cancelled) {
        container?.destroy();
      }

      const el = document.getElementById("tsparticles");
      if (el) el.style.opacity = "0.2";
    }

    init();

    return () => {
      cancelled = true;
      const container = tsParticles.item(0);
      container?.destroy();
    };
  }, []);

  return null;
}