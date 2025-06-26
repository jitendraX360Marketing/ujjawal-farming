import Image from "next/image";
import Link from "next/link";
import { productData } from "@/data/products";

export default function HomeProductsSection() {
  // Flatten all products from all categories
  const products = Object.values(productData).flat();
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-black text-gray-900 mb-8 text-center">
          Our <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Products</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0, 8).map((product, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl border border-amber-100 hover:border-amber-300 transition-all duration-300 overflow-hidden group">
              <Link href={product.href || "/products"}>
                <div className="relative w-full h-48 bg-amber-50">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 min-h-[48px]">
                    {"shortDescription" in product ? product.shortDescription : ""}
                  </p>
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold rounded-full shadow-sm">
                    View Details
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/products">
            <span className="inline-block px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 border-2 border-amber-400 text-lg">
              View All Products
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
