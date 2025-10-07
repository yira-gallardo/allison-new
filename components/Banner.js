import Image from "next/image";
import Navigation from "./Navigation";

export default function Banner() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Imagen de fondo para escritorio */}
      <Image
        src="/img/banner.jpg"
        alt="Allison Euforia Tour Banner"
        fill
        className="object-cover hidden md:block"
        priority
      />

      {/* Imagen de fondo para móvil */}
      <Image
        src="/img/banner-mobile.jpg"
        alt="Allison Euforia Tour Banner Mobile"
        fill
        className="object-contain block md:hidden"
        priority
      />

      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navegación superior - posicionada absolutamente */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Navigation />
      </div>
    </div>
  );
}
