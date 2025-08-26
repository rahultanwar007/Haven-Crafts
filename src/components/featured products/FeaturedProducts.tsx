import { featuredProducts } from "@/data/featuredProducts";
import FeaturedProductCard from "./FeaturedProductCard";

export default function FeaturedProductsSection() {
  return (
    <section className="w-full py-10 bg-white hidden sm:block">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="flex items-center mb-8 md:mb-10 gap-4">
          {/* Divider line */}
          <div className="flex-grow h-px bg-gray-300"></div>
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary whitespace-nowrap uppercase">
            Featured Products
          </h2>
          {/* Divider line */}
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {featuredProducts.map(({ id, name, image, price }) => (
            <FeaturedProductCard
              key={id}
              id={id}
              name={name}
              imageSrc={image}
              imageAlt={`${name} image`}
              href={"product/"}
              price={price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
