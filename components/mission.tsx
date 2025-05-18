"use client"

import Image from "next/image"
import { FadeIn, FadeInStagger } from "./animations/fade-in"

export function Mission() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4">
        <FadeInStagger>
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://i.postimg.cc/8PXB93VW/1.jpg"
                  alt="Chef's portrait"
                  className="col-span-1 row-span-1"
                  width={300}
                  height={300}
                  unoptimized
                />
                <Image
                  src="https://i.postimg.cc/cLjhgz9Z/1-1.jpg"
                  alt="Hot chocolate"
                  className="col-span-1 row-span-1"
                  width={300}
                  height={300}
                  unoptimized
                />
                <Image
                  src="https://i.postimg.cc/fR3jNKwP/1-2.jpg"
                  alt="Box of chocolates"
                  className="col-span-2 row-span-1"
                  width={600}
                  height={300}
                  unoptimized
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col justify-center">
                <span className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">Original Taste</span>
                <h2 className="font-playfair text-4xl font-light leading-tight">
                  OUR MISSION
                  <br />
                  IS TO CREATE
                  <br />
                  WITH PASSION
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-neutral-400">
                  Our mission is to bring the authentic flavors of Indonesia to your table, crafted with passion and
                  tradition. We are dedicated to sharing the rich culinary heritage of Indonesia through every dish we
                  serve.
                </p>
                <div className="mt-8">
                  <Image src="/logo.png" alt="Signature" className="h-12" width={48} height={48} />
                  <p className="mt-2 text-sm">The creators of INDONESIAN RESTAURANT</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeInStagger>
      </div>
    </section>
  )
}

