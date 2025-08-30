// components/ReviewsSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const reviews = [
  {
    id: 1,
    name: "Emily Carter",
    image: "/images/client1.jpg",
    comment:
      "Absolutely love the quality of the furniture! It perfectly blends comfort and style in my living room.",
  },
  {
    id: 2,
    name: "James Miller",
    image: "/images/client2.jpg",
    comment:
      "Fantastic service and premium craftsmanship. My dining set has become the centerpiece of our home!",
  },
  {
    id: 3,
    name: "Sophia Brown",
    image: "/images/client3.jpg",
    comment:
      "The loungers are super comfy and the design is stunning. I’ve received so many compliments already.",
  },
  {
    id: 4,
    name: "Daniel Wilson",
    image: "/images/client4.jpg",
    comment:
      "Loved the quick delivery and the overall buying experience. Will definitely shop again!",
  },
];

export default function ReviewsSection() {
  return (
    <section className="w-full py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-5">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center">
          What Our Clients Say
        </h2>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <div className="pl-10" key={review.id}>
              <div className="relative flex items-center bg-green rounded-lg shadow-md p-6">
                {/* Image */}
                <div className="absolute -left-10">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-green shadow-md"
                  />
                </div>

                {/* Text Content */}
                <div className="pl-10">
                  <h3 className="font-semibold text-white text-lg">
                    {review.name}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to more reviews */}
        <div className="text-right">
          <Link
            href="/reviews"
            className="text-secondary2 hover:underline font-medium"
          >
            more →
          </Link>
        </div>
      </div>
    </section>
  );
}
