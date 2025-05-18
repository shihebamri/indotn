"use client";

import { FadeIn } from "./animations/fade-in";
import Image from "next/image";

export function Features() {
  return (
    <section className="bg-[#111] py-24">
      <div className="container mx-auto grid gap-12 px-4 md:grid-cols-3">
        <FadeIn>
          <div className="text-center">
            <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-400">Expertise</h3>
            <h2 className="font-playfair text-3xl font-light">THE ART OF <br />GASTRONOMY</h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              At INDONESIAN RESTAURANT, every dish is an expression of creativity and passion. Discover unique flavors, designed to delight your taste buds.
            </p>
            <button
              className="mt-6 border border-white px-6 py-2 text-xs uppercase tracking-wider hover:bg-white hover:text-black"
              onClick={() => {
              const missionSection = document.getElementById("mission");
              if (missionSection) {
                missionSection.scrollIntoView({ behavior: "smooth" });
              }
              }}
            >
              Discover
            </button>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                src="https://i.postimg.cc/6qpnKzM2/SHRIMPS.png"
                alt="Plat raffiné"
                className="max-w-[300px] rounded-lg"
                width={300}
                height={200}
                unoptimized
              />
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="text-center">
            <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-400">Excellence</h3>
            <h2 className="font-playfair text-3xl font-light">A CULINARY<br />SIGNATURE</h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              We select the finest ingredients to create exceptional dishes. Every bite is an unforgettable experience, orchestrated by our talented chefs.
            </p>
            <button
              className="mt-6 border border-white px-6 py-2 text-xs uppercase tracking-wider hover:bg-white hover:text-black"
              onClick={() => {
                const productsSection = document.getElementById("products");
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore the menu
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
