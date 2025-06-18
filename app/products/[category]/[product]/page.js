"use client";

import { useParams } from "next/navigation";

const productData = {
  "agriculture-machinery": {
    "tractor-attachment": {
      name: "Tractor Attachment",
      description: "High-quality tractor attachment for efficient farming.",
    },
    "harvester-blade": {
      name: "Harvester Blade",
      description: "Durable harvester blade for optimal crop harvesting.",
    },
    "plow-system": {
      name: "Plow System",
      description: "Reliable plow system for soil preparation.",
    },
    "sprayer-nozzle": {
      name: "Sprayer Nozzle",
      description: "Precision sprayer nozzle for effective spraying.",
    },
  },
  "electric-panel": {
    "control-box": {
      name: "Control Box",
      description: "Robust control box for electric panel management.",
    },
    "distribution-panel": {
      name: "Distribution Panel",
      description: "Efficient distribution panel for power control.",
    },
    "circuit-breaker": {
      name: "Circuit Breaker",
      description: "Safety circuit breaker for electrical protection.",
    },
    "motor-starter": {
      name: "Motor Starter",
      description: "Reliable motor starter for electric motors.",
    },
  },
  "laser-cutting-service": {
    "metal-art": {
      name: "Metal Art",
      description: "Custom metal art created with precision laser cutting.",
    },
    "precision-gears": {
      name: "Precision Gears",
      description: "High-precision gears for mechanical applications.",
    },
    "custom-brackets": {
      name: "Custom Brackets",
      description: "Tailored brackets for various structural needs.",
    },
    "architectural-decor": {
      name: "Architectural Decor",
      description: "Decorative architectural elements with laser cutting.",
    },
  },
  "powder-coating-service": {
    "red-finish": {
      name: "Red Finish",
      description: "Vibrant red powder coating finish.",
    },
    "blue-finish": {
      name: "Blue Finish",
      description: "Durable blue powder coating finish.",
    },
    "glossy-black": {
      name: "Glossy Black",
      description: "Sleek glossy black powder coating finish.",
    },
    "matte-white": {
      name: "Matte White",
      description: "Elegant matte white powder coating finish.",
    },
  },
};

export default function ProductPage() {
  const params = useParams();
  const categoryParam = params.category;
  const productParam = params.product;

  const category = typeof categoryParam === "string" ? categoryParam : "";
  const product = typeof productParam === "string" ? productParam : "";

  const productDetails =
    productData[category] && productData[category][product]
      ? productData[category][product]
      : null;

  if (!productDetails) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Product Not Found</h1>
        <p>No details found for this product.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{productDetails.name}</h1>
      <p className="text-gray-700">{productDetails.description}</p>
    </div>
  );
}
