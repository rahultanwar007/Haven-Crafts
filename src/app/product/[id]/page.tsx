import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import { productsByCategory } from "@/data/products"; // or your full product dataset

interface PageProps {
  params: Promise<{ id: string }>;
}
const allProducts = Object.values(productsByCategory).flat();

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }));
}


export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  // Find product by id (or slug if you use that)
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }

  return (
    <ProductDetails
      product={{
        id: product.id,
        title: product.category,
        name: product.name,
        price: product.price ?? 0,
        mainImage: product.image,
        subImages: product.subImages,
        description: product.description,
      }}
    />
  );
}
