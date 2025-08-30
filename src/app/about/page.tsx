// src/app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen md:mt-0 mt-15">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-ocean to-green text-white py-10 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We are passionate creators, building unique furniture that blends
          craftsmanship, comfort, and modern design.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded with a vision to bring elegance and personalization into
            homes, we believe furniture should not only serve its purpose but
            also tell a story. Every piece we design reflects our dedication to
            detail and quality.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            From humble beginnings to becoming a trusted brand, our journey has
            been guided by creativity, innovation, and a deep love for design.
          </p>
        </div>
        {/* Image */}
        <div className="relative w-full h-80 rounded overflow-hidden shadow-green/50 shadow-inner">
          <Image
            src="/images/CTA-image.png"
            alt="Our Story"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-secondary2 rounded transition shadow-inner">
              <h3 className="text-xl text-white font-semibold mb-2">Quality</h3>
              <p className="text-gray-100">
                We craft each product with premium materials and careful
                attention to detail.
              </p>
            </div>
            <div className="p-6 bg-secondary2 rounded shadow hover:shadow-md transition">
              <h3 className="text-xl text-white font-semibold mb-2">Customization</h3>
              <p className="text-gray-100">
                Every home is unique — our furniture adapts to your personal
                style and needs.
              </p>
            </div>
            <div className="p-6 bg-secondary2 rounded shadow hover:shadow-md transition">
              <h3 className="text-xl text-white font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-100">
                We care about the planet, choosing eco-friendly practices in our
                design and production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Member 1 */}
          <div className="space-y-3">
            <Image
              src="/images/client2.jpg"
              alt="Team Member"
              width={100}
              height={100}
              className="rounded-full mx-auto shadow-lg"
            />
            <h3 className="text-lg font-medium">James Miller</h3>
            <p className="text-sm text-gray-600">Founder & Designer</p>
          </div>
          {/* Member 2 */}
          <div className="space-y-3">
            <Image
              src="/images/client1.jpg"
              alt="Team Member"
              width={100}
              height={100}
              className="rounded-full mx-auto shadow-lg"
            />
            <h3 className="text-lg font-medium">Anjali Sharma</h3>
            <p className="text-sm text-gray-600">Marketing Head</p>
          </div>
          {/* Member 3 */}
          <div className="space-y-3">
            <Image
              src="/images/client4.jpg"
              alt="Team Member"
              width={100}
              height={100}
              className="rounded-full mx-auto shadow-lg"
            />
            <h3 className="text-lg font-medium">Vikram Singh</h3>
            <p className="text-sm text-gray-600">Craftsman</p>
          </div>
        </div>
      </section>
    </main>
  );
}
