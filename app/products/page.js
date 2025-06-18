"use client";

import Link from "next/link";

const productCategories = [
  {
    name: "Agriculture Machinery",
    slug: "agriculture-machinery",
  },
  {
    name: "Electric Panel",
    slug: "electric-panel",
  },
  {
    name: "Laser Cutting Service",
    slug: "laser-cutting-service",
  },
  {
    name: "Powder Coating Service",
    slug: "powder-coating-service",
  },
];

const allProducts = [
  { name: "Tractor Attachment", slug: "tractor-attachment", category: "agriculture-machinery" },
  { name: "Harvester Blade", slug: "harvester-blade", category: "agriculture-machinery" },
  { name: "Plow System", slug: "plow-system", category: "agriculture-machinery" },
  { name: "Sprayer Nozzle", slug: "sprayer-nozzle", category: "agriculture-machinery" },
  { name: "Control Box", slug: "control-box", category: "electric-panel" },
  { name: "Distribution Panel", slug: "distribution-panel", category: "electric-panel" },
  { name: "Circuit Breaker", slug: "circuit-breaker", category: "electric-panel" },
  { name: "Motor Starter", slug: "motor-starter", category: "electric-panel" },
  { name: "Metal Art", slug: "metal-art", category: "laser-cutting-service" },
  { name: "Precision Gears", slug: "precision-gears", category: "laser-cutting-service" },
  { name: "Custom Brackets", slug: "custom-brackets", category: "laser-cutting-service" },
  { name: "Architectural Decor", slug: "architectural-decor", category: "laser-cutting-service" },
  { name: "Red Finish", slug: "red-finish", category: "powder-coating-service" },
  { name: "Blue Finish", slug: "blue-finish", category: "powder-coating-service" },
  { name: "Glossy Black", slug: "glossy-black", category: "powder-coating-service" },
  { name: "Matte White", slug: "matte-white", category: "powder-coating-service" },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.category}/${product.slug}`}
            className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
