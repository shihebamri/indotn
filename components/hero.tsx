"use client";

import { motion } from "framer-motion";
import { Parallax } from "./animations/parallax";
import { FadeIn } from "./animations/fade-in";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Parallax offset={300} className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/intro.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
      </Parallax>

      <div className="relative flex min-h-screen items-center justify-center px-4 pt-20 text-center">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="mb-4 text-sm uppercase tracking-[0.3em]">
              A unique gastronomic experience
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-playfair text-5xl font-light leading-tight md:text-7xl">
              ELEGANCE IN
              <br />
              EVERY BITE
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mx-auto mt-6 max-w-xl text-sm opacity-80">
              Discover refined cuisine, prepared with passion and served in an exceptional setting. At INDONESIAN RESTAURANT, every meal is a work of art.
            </p>
          </FadeIn>
            <FadeIn delay={0.6}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 border border-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-white hover:text-black"
              onClick={() => {
                const productsSection = document.getElementById("products");
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore the menu
            </motion.button>
            </FadeIn>
        </div>
      </div>
    </section>
  );
}
