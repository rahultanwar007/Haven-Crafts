import Link from "next/link";

interface FeaturedProductCardProps {
  id: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  price: string | number;
}

export default function FeaturedProductCard({
  id,
  href,
  imageSrc,
  imageAlt,
  name,
  price,
}: FeaturedProductCardProps) {
  return (
    <Link
      href={href + id}
      className="w-[90%] md:w-70 mx-auto group relative block rounded-md shadow-sm overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
    >
      <img
        alt={imageAlt}
        src={imageSrc}
        className="aspect-square w-full object-cover rounded-t-md group-hover:opacity-75"
      />
      <div className="mt-4 flex justify-between px-4 pb-4">
        <div>
          <h3 className="text-sm text-gray-700 font-medium">
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          </h3>
        </div>
        <p className="text-sm font-semibold text-gray-900">${price}</p>
      </div>
    </Link>
  );
}
