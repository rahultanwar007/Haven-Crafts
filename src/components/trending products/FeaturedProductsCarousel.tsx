"use client";

import { Carousel } from "react-responsive-carousel";
import FeaturedProductCard from "./FeaturedProductCard"; // Accepts: id, name, price, image
import { featuredProducts } from "@/data/trendingProducts";

export default function FeaturedProductsCarousel() {
  return (
    <div className="sm:hidden py-10">
      {" "}
      {/* Show only on mobile */}
      <h2 className="text-2xl font-extrabold text-primary mb-4 text-center">
        Featured Products
      </h2>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={true} // Dots
        infiniteLoop={true}
        useKeyboardArrows={true}
        emulateTouch={true}
        className="rounded-lg"
      >
        {featuredProducts.map(({ id, name, image, price }) => (
          <div className="w-full mb-14" key={id}>
            <FeaturedProductCard
              id={id}
              name={name}
              imageSrc={image}
              imageAlt={name + " image"}
              href={"product/"}
              price={price}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
