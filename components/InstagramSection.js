"use client";

import { useEffect } from "react";

export default function InstagramSection() {
  useEffect(() => {
    // Load LightWidget script if not already loaded
    if (
      !document.querySelector(
        'script[src="https://cdn.lightwidget.com/widgets/lightwidget.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section
      className="py-16 relative"
      style={{
        backgroundImage: "url('/img/textura.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay para mantener la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Instagram Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-12 tracking-wider">
          INSTAGRAM
        </h2>

        {/* LightWidget Instagram Feed */}
        <div className="max-w-6xl mx-auto">
          <iframe
            src="//lightwidget.com/widgets/4f47618adfef597a838000bf15d19015.html"
            scrolling="no"
            allowtransparency="true"
            className="lightwidget-widget w-full border-0 overflow-hidden rounded-lg"
            style={{
              width: "100%",
              border: 0,
              overflow: "hidden",
              minHeight: "600px", // Ensure minimum height for loading
            }}
            title="Instagram Feed"
          />
        </div>
      </div>
    </section>
  );
}
