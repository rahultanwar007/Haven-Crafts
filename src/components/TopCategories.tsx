// Example data for top categories (adjust with real image/icon paths as needed)
const topCategories = [
  {
    id: "sofas",
    name: "Sofas",
    image: "/images/categories/sofas.webp",
    href: "/categories/sofas",
  },
  {
    id: "dining",
    name: "Dining Sets",
    image: "/images/categories/dining.jpg",
    href: "/categories/dining",
  },
  {
    id: "bars",
    name: "Bar Sets",
    image: "/images/categories/bars.jpg",
    href: "/categories/bars",
  },
  {
    id: "loungers",
    name: "Loungers",
    image: "/images/categories/loungers.webp",
    href: "/categories/loungers",
  },
  {
    id: "swings",
    name: "Swings",
    image: "/images/categories/swings.webp",
    href: "/categories/swings",
  },
];

export default function TopCategoriesSection() {
  return (
    <section className="w-full py-12 bg-light">
      <div className="mx-auto w-[90%] max-w-7xl">
        <h2 className="text-3xl font-extrabold text-gray-50 mb-8 text-center uppercase">
          Top Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {topCategories.map(({ id, name, image, href }) => (
            <a
              key={id}
              href={href}
              className="relative flex flex-col items-center justify-center pb-1 rounded-lg bg-accent shadow overflow-hidden group"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-full object-contain rounded-t-lg transition-transform duration-300 group-hover:scale-105"
              />

              {/* Dark overlay fading in on desktop hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-30 md:opacity-0 md:group-hover:opacity-30 transition-opacity rounded-t-lg"></div>

              {/* Sliding text */}
              <span
                className="
      absolute 
      bottom-0 left-0 right-0 
      text-gray-100 font-semibold text-lg py-2 px-4 text-center
      translate-y-0 md:translate-y-full md:group-hover:translate-y-0
      transition-transform duration-300
    "
              >
                {name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
