export default function AboutUsSection() {
  return (
    <section className="w-full py-16">
      <div className="w-[90%] mx-auto items-center mb-8 md:mb-10 gap-4 md:hidden flex ">
        {/* Divider line */}
        <div className="flex-grow h-px bg-gray-300"></div>
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary whitespace-nowrap uppercase">
          About Us
        </h2>
        {/* Divider line */}
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/team.webp"
            alt="About HavenCraft"
            className="w-full max-w-md h-auto drop-shadow-xl rounded-lg md:hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 text-left md:text-left">
          <div className="items-center mb-8 md:mb-10 gap-4 hidden md:flex ">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary whitespace-nowrap uppercase">
              About Us
            </h2>
            {/* Divider line */}
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <p className="text-lg text-secondary mb-6 leading-relaxed">
            At <span className="font-semibold text-accent">HavenCraft</span>, we
            believe furniture should be more than just functional—it should be a
            statement of durability and timeless style. With a passion for steel
            craftsmanship, we design and create pieces that blend
            <span className="font-semibold text-light">
              {" "}
              strength, elegance, and modern design
            </span>
            .
          </p>
          <p className="text-lg text-secondary mb-8 leading-relaxed">
            Every piece we build is engineered to last, crafted with precision,
            and designed to elevate your living and working spaces. Driven by
            innovation and guided by craftsmanship, HavenCraft stands for
            quality you can trust and designs you’ll love for a lifetime.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-light backdrop-blur-md shadow-md hover:shadow-lg transition">
              <span className="text-2xl">✅</span>
              <p className="mt-2 font-bold text-accent">Premium Steel</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary backdrop-blur-md shadow-md hover:shadow-lg transition">
              <span className="text-2xl">🎨</span>
              <p className="mt-2 font-bold text-primary">Modern Designs</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary backdrop-blur-md shadow-md hover:shadow-lg transition">
              <span className="text-2xl">🛠️</span>
              <p className="mt-2 font-bold text-primary">Handcrafted</p>
            </div>
            <div className="p-4 rounded-xl bg-light backdrop-blur-md shadow-md hover:shadow-lg transition">
              <span className="text-2xl">🌍</span>
              <p className="mt-2 font-bold text-accent">Sustainable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
