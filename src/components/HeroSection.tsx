// components/HeroSection.tsx

export default function HeroSection() {
  return (
    <section className="min-h-screen py-12 bg-gradient-to-b from-secondary via-secondary to-white pt-30 md:pt-20">
      <div className="w-[90%] h-full flex flex-col justify-between mx-auto gap-25 md:gap-30">
        {/* Top - Brand & tagline */}
        <header className="text-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-primary mb-4 select-none">
            Haven Crafts
          </h1>
          <p className="text-sm md:text-lg font-semibold tracking-wide text-dark max-w-full mx-auto drop-shadow-md">
            Redefining strength and elegance in every piece.
          </p>
        </header>

        {/* Middle - Hero image */}
        <div className="flex justify-center items-center w-full">
          <img
            src="/steel-furniture.png"
            alt="Steel Furniture"
            className="w-auto max-w-[90vw] md:max-w-2xl lg:max-w-3xl max-h-[50vh] rounded-lg drop-shadow-xl hover:scale-105 transition-transform duration-500"
            loading="eager"
          />
        </div>

        {/* Bottom - closing tagline */}
        <footer className="text-center">
          <p className="text-lg text-light max-w-lg mx-auto font-bold">
            &ldquo; Crafted with care, our designs bring modern comfort and
            homely warmth into every corner of your space. &rdquo;
          </p>
        </footer>
      </div>
    </section>
  );
}
