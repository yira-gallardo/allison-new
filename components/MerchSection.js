import Image from "next/image";

export default function MerchSection() {
  return (
    <section className="relative h-screen overflow-hidden p-8 md:p-16 lg:p-24">
      {/* Imagen de fondo para escritorio */}
      <Image
        src="/img/banner-merch.jpg"
        alt="Allison Tienda Oficial"
        fill
        className="object-contain hidden md:block"
        priority
        style={{ objectPosition: "center center" }}
      />

      {/* Imagen de fondo para móvil */}
      <Image
        src="/img/banner-merch-mobile.jpg"
        alt="Allison Tienda Oficial Mobile"
        fill
        className="object-contain block md:hidden"
        priority
        style={{ objectPosition: "center center" }}
      />
    </section>
  );
}
