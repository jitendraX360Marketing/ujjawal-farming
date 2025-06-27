"use client";

import Image from "next/image";
import Link from "next/link";
import { productData } from "@/data/products";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

export default function HomeProductsSection() {
  // Flatten all products from all categories
  const products = Object.values(productData).flat();

  const handleWhatsApp = (productName: string) => {
    const message = `Hi, I'm interested in ${productName}. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/919929596124?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of high-quality products designed
            for excellence
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.slice(0, 10).map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Category Badge */}
              {product.category && (
                <div className="px-4 pt-4">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                    {product.category}
                  </span>
                </div>
              )}

              {/* Product Image */}
              <div className="p-4">
                <div className="relative w-full h-48 bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {"shortDescription" in product
                    ? product.shortDescription
                    : "Premium quality product for your needs"}
                </p>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Link
                    href={product.href || "/products"}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleWhatsApp(product.name)}
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      WhatsApp
                    </button>

                    <Link
                      href="/contact"
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Enquiry
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link href="/products">
            <span className="inline-flex items-center gap-2 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
