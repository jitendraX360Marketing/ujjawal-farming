"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const productData = {
  "agriculture-machinery": [
    { name: "Tractor Attachment", slug: "tractor-attachment" },
    { name: "Harvester Blade", slug: "harvester-blade" },
    { name: "Plow System", slug: "plow-system" },
    { name: "Sprayer Nozzle", slug: "sprayer-nozzle" },
  ],
  "electric-panel": [
    { name: "Control Box", slug: "control-box" },
    { name: "Distribution Panel", slug: "distribution-panel" },
    { name: "Circuit Breaker", slug: "circuit-breaker" },
    { name: "Motor Starter", slug: "motor-starter" },
  ],
  "laser-cutting-service": [
    { name: "Metal Art", slug: "metal-art" },
    { name: "Precision Gears", slug: "precision-gears" },
    { name: "Custom Brackets", slug: "custom-brackets" },
    { name: "Architectural Decor", slug: "architectural-decor" },
  ],
  "powder-coating-service": [
    { name: "Red Finish", slug: "red-finish" },
    { name: "Blue Finish", slug: "blue-finish" },
    { name: "Glossy Black", slug: "glossy-black" },
    { name: "Matte White", slug: "matte-white" },
  ],
};

export default function CategoryPage() {
  const params = useParams();
  const categoryParam = params.category;
  const category = typeof categoryParam === "string" ? categoryParam : "";

  const products = productData[category] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{category.replace(/-/g, " ")}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${category}/${product.slug}`}
            className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
