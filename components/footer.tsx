"use client";

import { Facebook, Instagram, Mail, MapPin, PinIcon as Pinterest, ShoppingBag, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "./animations/fade-in";

export function Footer() {
  return (
    <footer className="bg-[#111]">
      <div className="container mx-auto px-4 py-16">
        <FadeInStagger>
          {/* Service Highlights */}
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            <FadeIn>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <ShoppingBag className="h-6 w-6 text-golden" />
                </div>
                <h3 className="text-lg">Customer Service</h3>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <ShoppingBag className="h-6 w-6 text-golden" />
                </div>
                <h3 className="text-lg">Shop Our Specialties Online</h3>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <MapPin className="h-6 w-6 text-golden" />
                </div>
                <h3 className="text-lg">Our Location</h3>
              </div>
            </FadeIn>
          </div>

          {/* Footer Links */}
          <div className="grid gap-8 border-t border-neutral-800 py-16 md:grid-cols-4">
            <FadeIn>
              <div>
                <Link href="/" className="text-2xl font-light text-center block mb-4">
                  INDONESIAN RESTAURANT
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <h4 className="mb-4 text-lg">Useful Links</h4>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                  <li>
                    <Link href="#">Menu</Link>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div>
                <div className="mt-6 flex justify-center space-x-4">
                  <Link href="#" className="text-neutral-400 hover:text-golden">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-neutral-400 hover:text-golden">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-neutral-400 hover:text-golden">
                    <Pinterest className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-neutral-400 hover:text-golden">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-neutral-400 hover:text-golden">
                    <Youtube className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Copyright */}
          <FadeIn>
            <div className="border-t border-neutral-800 py-8 text-center text-sm text-neutral-400">
              © 2023 INDONESIAN RESTAURANT. All rights reserved.
            </div>
          </FadeIn>
        </FadeInStagger>
      </div>
    </footer>
  );
}
