"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Animation from "./components/UI/Animation/Animation";

const socialLinks = [
  {
    href: "https://www.instagram.com/allisonband/",
    label: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        width="20px"
        height="20px"
      >
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/Allisonoficial",
    label: "Facebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        width="20px"
        height="20px"
      >
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@allisonband?lang=es",
    label: "TikTok",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/allisonband?s=21&t=jOMXuFf-hUP2NIFrs9v4vQ",
    label: "Twitter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
      </svg>
    ),
  },
];

interface Photo {
  src: string;
  alt: string;
}

const photos: Photo[] = [
  {
    src: "/img/gallery-.png",
    alt: "Photo 1",
  },
  {
    src: "/img/gallery-1.png",
    alt: "Photo 2",
  },
  {
    src: "/img/gallery-2.png",
    alt: "Photo 3",
  },
  {
    src: "/img/gallery-3.jpg",
    alt: "Photo 4",
  },
  {
    src: "/img/gallery-4.jpg",
    alt: "Photo 5",
  },
  {
    src: "/img/gallery-5.jpg",
    alt: "Photo 6",
  },
  {
    src: "/img/gallery-6.jpg",
    alt: "Photo 7",
  },
  {
    src: "/img/gallery-7.jpg",
    alt: "Photo 8",
  },
  {
    src: "/img/gallery-8.jpg",
    alt: "Photo 9",
  },
  {
    src: "/img/gallery-9.jpg",
    alt: "Photo 10",
  },
  {
    src: "/img/gallery-10.jpg",
    alt: "Photo 11",
  },
  // {
  //   src: "/img/gallery-11.jpg",
  //   alt: "Photo 12",
  // },
  {
    src: "/img/gallery-12.jpg",
    alt: "Photo 13",
  },
  {
    src: "/img/gallery-13.jpg",
    alt: "Photo 14",
  },
  {
    src: "/img/gallery-14.jpg",
    alt: "Photo 15",
  },
  {
    src: "/img/gallery-15.jpg",
    alt: "Photo 16",
  },
  {
    src: "/img/gallery-16.jpg",
    alt: "Photo 17",
  },
];

const tourDates = [
  {
    date: "Nov. 8",
    venue: "Vamos Otra Vez Fest",
    city: "Toluca, MX",
    link: "https://boleticka.com/puntoVenta/#/preview/136",
  },
  {
    date: "Dic. 5",
    venue: "House Of Punk",
    city: "Puebla, MX",
    link: "https://www.passline.com/eventos/house-of-punk-xmass-fest?fbclid=IwY2xjawNtFgFleHRuA2FlbQIxMABicmlkETExZDNtVlNoTjdneVVocHdZAR4YMbkWpR7MNLSejd5PbnicMGvb90_Pe53PvelIu1VJm4J639J1XBu5Vgcaaw_aem_9IGlmP6d5hYKj_OWYa73UQ",
  },
  {
    date: "Dic. 6",
    venue: "Jardines de México",
    city: "Tequesquitengo, MX",
    link: "https://web2.superboletos.com/SuperBoletos/landing-evento?event_id=2PwXQC9H2Moo5wUENjVDVg",
  },
  {
    date: "Feb. 20",
    venue: "Vamos Otra Vez Fest",
    city: "San Luis Potosí, MX",
    link: "https://eventos.taquillaplus.com.mx/eventperformances.asp?evt=636",
  },
  {
    date: "Feb. 1",
    venue: "Vamos Otra Vez Fest",
    city: "León, MX",
    link: "https://eventos.taquillaplus.com.mx/eventperformances.asp?evt=616",
  },
  {
    date: "Feb. 28",
    venue: "Vamos Otra Vez Fest",
    city: "Querétaro, MX",
    link: "https://www.eticket.mx/masinformacion.aspx?idevento=34254",
  },
];

const merchItems = [
  {
    image: "/img/merch-1.png",
    link: "https://reycamiseta.com/producto/oversize-negra-foto/",
  },
  {
    image: "/img/merch-2.png",
    link: "https://reycamiseta.com/producto/oversize-negra-pantera-trueno/",
  },
  {
    image: "/img/merch-3.png",
    link: "https://reycamiseta.com/producto/oversize-negra-pantera/",
  },
];

export default function Home() {
  const [enlargedPhoto, setEnlargedPhoto] = useState<Photo | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = new Audio("/background-music.mp3");
    setAudio(audioElement);
  }, []);

  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      }
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const togglePhotoSize = (photo: Photo) => {
    if (enlargedPhoto?.src === photo.src) {
      setEnlargedPhoto(null);
    } else {
      setEnlargedPhoto(photo);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main className="">
      <header className="relative md:min-h-[100vh]">
        <link rel="icon" href="/favicon.ico"></link>
        <div className="absolute inset-0 z-0">
          <div className="hidden md:block">
            <Image
              src="/img/banner_b.jpg"
              alt="hero"
              layout="fill"
              objectFit="cover"
              objectPosition="top center"
              className="md:block"
            />
          </div>
        </div>
        <div className="block md:hidden">
          <Image
            src="/img/banda-mobile.jpg"
            alt="Allison"
            width={1300}
            height={1920}
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-white/5 to-transparent"></div>
        <div className="absolute top-4 right-4 z-20 flex space-x-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </Link>
          ))}
        </div>
        <div className="absolute top-4 left-4 z-20 flex md:hidden">
          <button onClick={toggleMobileMenu} className="text-3xl">
            &#9776; {/* Icono de hamburguesa */}
          </button>
        </div>
        <div
          className={`absolute top-16 left-4 z-30 bg-white border border-black ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden`}
        >
          <button
            onClick={() => scrollTo("tour")}
            className="block w-full border-b py-2 px-4 hover:bg-gray-200"
          >
            TOUR
          </button>
          <button
            onClick={() => scrollTo("musica")}
            className="block w-full border-b py-2 px-4 hover:bg-gray-200"
          >
            MÚSICA
          </button>
          <button
            onClick={() => scrollTo("merch")}
            className="block w-full border-b py-2 px-4 hover:bg-gray-200"
          >
            MERCH
          </button>
          <Link
            href="https://www.youtube.com/channel/UCFCFBfGHOv8wItbjwQPktyA"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border-b py-2 px-4 hover:bg-gray-200"
          >
            VIDEOS
          </Link>
          <button
            onClick={() => scrollTo("galeria")}
            className="block w-full border-b py-2 px-4 hover:bg-gray-200"
          >
            GALERÍA
          </button>
        </div>
        <div className="hidden md:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="flex justify-between items-center w-full px-4 py-2">
            <div className="md:flex justify-center space-x-16 mt-4 text-3xl font-bold">
              <button
                onClick={() => scrollTo("tour")}
                className="border-2 border-transparent py-1 px-4 hover:border-black"
              >
                TOUR
              </button>
              <button
                onClick={() => scrollTo("musica")}
                className="border-2 border-transparent py-1 px-4 hover:border-black"
              >
                MÚSICA
              </button>
              <button
                onClick={() => scrollTo("merch")}
                className="border-2 border-transparent py-1 px-4 hover:border-black"
              >
                MERCH
              </button>
              <Link
                href="https://www.youtube.com/channel/UCFCFBfGHOv8wItbjwQPktyA"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-transparent py-1 px-4 hover:border-black"
              >
                VIDEOS
              </Link>
              <button
                onClick={() => scrollTo("galeria")}
                className="border-2 border-transparent py-1 px-4 hover:border-black"
              >
                GALERÍA
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 z-30">
          <button
            onClick={toggleMusic}
            className="bg-black text-white py-2 px-4 rounded"
          >
            {isPlaying ? "Pause Music" : "Play Music"}
          </button>
        </div>
      </header>
      <section id="tour" className="py-16">
        <Animation
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-bold text-center mb-8">TOUR</h2>
        </Animation>
        <Animation
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            {tourDates.map((tour, index) => (
              <div
                key={index}
                className="grid grid-cols-3 items-center py-4 border-b border-gray-300"
              >
                <div className="text-center">
                  <p>{tour.date}</p>
                  <p>{tour.venue}</p>
                </div>
                <div className="text-center">
                  <p>{tour.city}</p>
                </div>
                <div className="text-center">
                  <a href={tour.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-black text-white py-2 px-4">
                      TICKETS
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Animation>
      </section>
      <section id="musica" className="py-12">
        <Animation
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-bold text-center mb-8">MÚSICA</h2>
        </Animation>
        <Animation
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <iframe
              style={{
                borderRadius: "8px",
              }}
              src="https://open.spotify.com/embed/artist/4AP5EFbVVcBv8cfyqO0oqr?utm_source=generator&theme=0"
              width="60%"
              height="382"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </Animation>
      </section>
      <section id="merch" className="bg-white py-[128px]">
        <Animation
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-bold text-center mb-8">MERCH</h2>
        </Animation>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {merchItems.map((item, index) => (
            <div key={index} className="text-center">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {" "}
                <Animation
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={item.image}
                    alt={`Merch item ${index + 1}`}
                    className="w-full h-auto mb-4 cursor-pointer"
                  />
                </Animation>
              </a>
            </div>
          ))}
        </div>
      </section>
      <section id="galeria" className="bg-black py-[128px] text-white">
        <Animation
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-bold text-center mb-8">GALERÍA</h2>
        </Animation>
        <Animation
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-transform duration-300 ${
                  enlargedPhoto?.src === photo.src ? "transform scale-150" : ""
                }`}
                onClick={() => togglePhotoSize(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </Animation>
      </section>
      <footer className="bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="py-20 max-w-screen-xl mx-auto">
            <div className="flex justify-between">
              <div className="flex columns-2 gap-4 justify-center">
                <Link
                  href="https://www.instagram.com/allisonband/"
                  target="_blank"
                  className="flex justify-center items-center gap-2"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      width="20px"
                      height="20px"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://www.facebook.com/Allisonoficial"
                  target="_blank"
                  className="flex justify-center items-center gap-2"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      width="20px"
                      height="20px"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://www.tiktok.com/@allisonband?lang=es"
                  target="_blank"
                  className="flex justify-center items-center gap-2"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://x.com/allisonband?s=21&t=jOMXuFf-hUP2NIFrs9v4vQ"
                  target="_blank"
                  className="flex justify-center items-center gap-2"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="text-right">
                <h1 className="font-bold">2024 ®Allison</h1>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
