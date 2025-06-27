"use client";
import React from "react";
import Link from "next/link";
import { productData, allProductsFlat } from "../../../data/products";

export default function CategoryPage({ params }) {
  // Unwrap params if it's a Promise (Next.js 14+)
  const resolvedParams = typeof params.then === "function" ? React.use(params) : params;
  const { category } = resolvedParams;
  // Normalize category slug
  const normalize = (str) => str && str.toLowerCase().replace(/[-_\s]+/g, "-");
  const filteredProducts = allProductsFlat.filter(
    (p) => normalize(p.category) === normalize(category)
  );

  if (!filteredProducts.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">No products found for this category.</h1>
        <Link href="/products" className="text-orange-600 hover:underline">Back to All Products</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 capitalize">
          {filteredProducts[0].category.replace(/-/g, " ")} Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${normalize(product.category)}/${product.slug}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <img
                src={product.imageSrc}
                alt={product.name}
                className="w-full h-56 object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {product.shortDescription}
                </p>
                <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
                  {product.category.replace(/-/g, " ")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
