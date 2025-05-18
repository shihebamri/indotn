import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Products } from "@/components/products"
import { Mission } from "@/components/mission"
import dynamic from "next/dynamic"
import { Footer } from "@/components/footer"
import ReservationForm from "@/components/ReservationForm"

const Gallery = dynamic(() => import("@/components/gallery").then(m => m.Gallery), { ssr: false })
const Review = dynamic(() => import("@/components/Review").then(m => m.default), { ssr: false })
const ContactPage = dynamic(() => import("@/components/ContactPage").then(m => m.ContactPage), { ssr: false })

export default function Page() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <Features />
        <section id="products">
          <Products />
        </section>
        <section id="mission">
          <Mission />
        </section>
        <section id="ContactPage">
          <ContactPage />
        </section>
        <section id="reservation" className="bg-[#111] py-24 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto bg-neutral-900 p-8 rounded-lg shadow-lg">
              <h3 className="mb-12 text-center text-xs uppercase tracking-[0.3em] text-neutral-400">Reservation</h3>
              <h2 className="mb-8 text-center font-playfair text-4xl font-light text-golden">Book a Table</h2>
              <ReservationForm />
            </div>
          </div>
        </section>
        <section id="review-section">
          <Review />
        </section>
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

