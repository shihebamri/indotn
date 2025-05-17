import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Products } from "@/components/products"
import { Mission } from "@/components/mission"
import { ContactPage } from "@/components/ContactPage"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

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
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

