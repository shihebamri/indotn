"use client"

import { FadeIn, FadeInStagger } from "./animations/fade-in"
import { HoverCard } from "./ui/hover-card"
import { motion } from "framer-motion"
import { Facebook, Instagram, Phone, MapPin, Mail } from "lucide-react"

export function ContactPage() {
  return (
    <section className="bg-[#111] py-24 relative">
      {/* Separator Image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
        <img
          src="https://i.postimg.cc/8PfDFZSG/sushi.png"
          alt="Separator"
          className="w-full h-auto"
        />
      </div>

      <div className="container mx-auto px-4">
        <FadeIn>
          <h3 className="mb-12 text-center text-xs uppercase tracking-[0.3em] text-neutral-400">Contact Us</h3>
          <h2 className="mb-16 text-center font-playfair text-4xl font-light">OUR LOCATION</h2>
        </FadeIn>
        <FadeInStagger>
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <HoverCard>
                <div className="cursor-pointer h-full">
                  <div className="mb-6 overflow-hidden rounded-lg h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.77918178571!2d10.267752600000001!3d36.8477642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4b0012ecd73f%3A0xe2baa29c5d2aa45e!2sIndonesian%20Restaurant!5e0!3m2!1sen!2stn!4v1747483026853!5m2!1sen!2stn"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </HoverCard>
            </FadeIn>
            <FadeIn>
              <HoverCard>
                <div className="cursor-pointer h-full bg-neutral-900 p-8 rounded-lg">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <MapPin className="text-golden" size={24} />
                      <p className="text-neutral-400">Rue De L’Ile De Rhodes, Tunis</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="text-golden" size={24} />
                      <p className="text-neutral-400">+216 52 555 438</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="text-golden" size={24} />
                      <p className="text-neutral-400">contact@INDONESIANRESTAURANT.com</p>
                    </div>
                    <div className="pt-6">
                      <h3 className="font-playfair text-xl font-light mb-4">Follow Us</h3>
                      <div className="flex space-x-4">
                        <motion.a
                          href="https://www.facebook.com/INDONESIANRESTAURANT/"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Facebook className="text-golden" size={32} />
                        </motion.a>
                        <motion.a
                          href="https://www.instagram.com/indonesian_restaurants/"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Instagram className="text-golden" size={32} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </FadeIn>
          </div>
        </FadeInStagger>
      </div>
    </section>
  )
}

