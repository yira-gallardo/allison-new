"use client";

import React from "react";

export default function TourSection() {
  // Cargar fuente de Google Fonts
  React.useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Anton:wght@400&family=Bebas+Neue:wght@400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const tourDates = [
    { date: "26.SEP", location: "TIJUANA, MÉXICO - BLACK BOX" },
    { date: "27.SEP", location: "MEXICALI, MÉXICO - FORO DRAGÓN" },
    { date: "02.OCT", location: "BOCA DEL RÍO, VERACRUZ, MÉXICO - MCCARTHY'S" },
    { date: "03.OCT", location: "TLAXCALA, MÉXICO - LIVER PUB" },
    { date: "04.OCT", location: "PACHUCA, MÉXICO - JARDÍN CANIBAL" },
    { date: "11.OCT", location: "TAMPICO, MÉXICO - WEEKEND FEST" },
    { date: "16.OCT", location: "ZACATECAS, MÉXICO - FORO DESTROY" },
    { date: "17.OCT", location: "AGUASCALIENTES, MÉXICO - ROCK SI" },
    { date: "18.OCT", location: "MORELIA, MÉXICO - LA SUAVECITA" },
    { date: "08.NOV", location: "TOLUCA, MÉXICO - VAMOS OTRA VEZ" },
    { date: "05.DIC", location: "PUEBLA, MÉXICO - HOUSE OF PUNK" },
    { date: "06.DIC", location: "TEQUESQUITENGO, MÉXICO - JARDINES DE MÉXICO" },
    { date: "20.FEB", location: "SAN LUIS POTOSÍ, MÉXICO - VAMOS OTRA VEZ" },
    { date: "21.FEB", location: "LEÓN, MÉXICO - VAMOS OTRA VEZ" },
    { date: "28.FEB", location: "QUERÉTARO, MÉXICO - VAMOS OTRA VEZ" },
  ];

  return (
    <section
      className="py-8 md:py-16 px-4 md:px-6 relative"
      style={{
        backgroundImage: "url('/img/textura.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay para mantener la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Título */}
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-black text-[#A0BEC0] mb-4 tracking-wider uppercase"
            style={{
              fontFamily: "Anton, sans-serif",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              letterSpacing: "0.1em",
              fontWeight: "400",
            }}
          >
            TOUR DATES
          </h2>
        </div>

        {/* Tabla de fechas */}
        <div className="bg-black/40 rounded-lg overflow-hidden">
          <div className="divide-y divide-white/20">
            {tourDates.map((show, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-6 hover:bg-white/5 transition-colors duration-300 space-y-3 md:space-y-0"
              >
                {/* Fecha */}
                <div className="flex-shrink-0 w-full md:w-auto md:flex-1">
                  <span
                    className="text-[#A0BEC0] font-black text-base md:text-lg uppercase tracking-wide block"
                    style={{
                      fontFamily: "Anton, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    {show.date}
                  </span>
                </div>

                {/* Ubicación */}
                <div className="flex-grow w-full md:flex-2 md:text-center">
                  <span
                    className="text-[#A0BEC0] font-black text-sm md:text-lg uppercase tracking-wide block"
                    style={{
                      fontFamily: "Anton, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    {show.location}
                  </span>
                </div>

                {/* Botón de tickets */}
                <div className="flex-shrink-0 w-full md:w-auto md:flex-1 md:text-right">
                  <button
                    className="w-full md:w-auto border border-white text-white font-black py-2 px-4 md:px-6 rounded hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-wide text-sm md:text-base"
                    style={{
                      fontFamily: "Anton, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    TICKETS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
