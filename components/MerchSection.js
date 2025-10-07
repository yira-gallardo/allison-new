"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MerchSection() {
  return (
    <motion.section
      className="relative h-screen overflow-hidden p-8 md:p-16 lg:p-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Imagen de fondo para escritorio */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/img/banner-merch.jpg"
          alt="Allison Tienda Oficial"
          fill
          className="object-contain hidden md:block"
          priority
          style={{ objectPosition: "center center" }}
        />
      </motion.div>

      {/* Imagen de fondo para móvil */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/img/banner-merch-mobile.jpg"
          alt="Allison Tienda Oficial Mobile"
          fill
          className="object-contain block md:hidden"
          priority
          style={{ objectPosition: "center center" }}
        />
      </motion.div>
    </motion.section>
  );
}
