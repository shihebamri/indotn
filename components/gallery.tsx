export function Gallery() {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="mb-16 text-center font-playfair text-4xl font-light text-white">
            Gallery
            <br />
            <span className="text-golden text-sm tracking-widest">Notre Gallery</span>
          </h2>        
        <div className="grid gap-4 md:grid-cols-4">
          <div className="w-full h-48">
            <img src="/g1.png" alt="Gallery Image 1" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-48">
            <img src="/g2.png" alt="Gallery Image 2" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-48">
            <img src="/g3.png" alt="Gallery Image 3" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-48">
            <img src="/g4.png" alt="Gallery Image 4" className="w-full h-full object-cover" />
          </div>
          <div className="w-full h-48">
            <img src="/g5.png" alt="Gallery Image 5" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
