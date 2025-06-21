"use client";
import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

// --- Product Data ---
const allProducts = [
	{
		name: "Tractor Attachment",
		slug: "tractor-attachment",
		category: "agriculture-machinery",
		images: [
			"/images/demo-prd.png", // Main image
			"/images/tractor_attachment_detail1.png", // Placeholder for detail view 1
			"/images/tractor_attachment_detail2.png", // Placeholder for detail view 2
			"/images/tractor_attachment_action.png", // Placeholder for action shot
		],
		price: 15000,
		shortDescription:
			"Durable and efficient tractor attachment designed for various agricultural tasks, improving productivity and reducing manual labor.",
		description:
			"This state-of-the-art tractor attachment is engineered for peak performance in diverse agricultural settings. Its robust construction, using high-grade hardened steel, ensures exceptional durability and longevity, even under the most demanding conditions. Ideal for a wide range of tasks including deep plowing, precise tilling, and efficient seeding operations, it significantly enhances farm productivity. The attachment features an intuitive quick-connect system for easy installation and detachment, saving valuable time. Its optimized design ensures minimal soil compaction while maximizing nutrient distribution for healthier crops. With a focus on user ergonomics, maintenance is straightforward, allowing farmers to spend more time cultivating and less time on upkeep.",
		features: [
			{ key: "Material", value: "High-Grade Hardened Steel" },
			{ key: "Weight", value: "Approx. 350 kg" },
			{ key: "Compatibility", value: "Universal 3-Point Hitch" },
			{ key: "Working Depth", value: "Up to 12 inches" },
			{ key: "Warranty", value: "2 Years Manufacturer" },
			{ key: "Color", value: "Customizable" },
		],
		applications: [
			"Plowing and Tilling",
			"Seedbed Preparation",
			"Weed Control",
			"Crop Residue Management",
			"Soil Aeration",
		],
		whyChoose: [
			"Superior build quality for maximum lifespan.",
			"Increases field efficiency by up to 40%.",
			"Low maintenance design reduces operational costs.",
			"Versatile for various farming needs.",
			"Excellent after-sales support and spare parts availability.",
		],
	},
	{
		name: "Harvester Blade",
		slug: "harvester-blade",
		category: "agriculture-machinery",
		images: ["/images/demo-prd.png"],
		price: 2500,
		shortDescription:
			"High-quality, sharp harvester blade for clean and precise cutting, ensuring minimal crop damage.",
		description:
			"Our premium harvester blades are crafted from a specialized alloy, heat-treated to achieve unparalleled sharpness and edge retention. Designed for a clean, precise cut, these blades significantly reduce crop shattering and loss during harvest, leading to a higher yield quality. The precision engineering ensures a perfect fit for a wide range of harvester models, minimizing vibration and wear on your machinery. Each blade undergoes rigorous quality control to guarantee consistent performance and extended operational life. Ideal for grains, pulses, and fodder, these blades are an investment in efficiency and productivity.",
		features: [
			{ key: "Material", value: "Hardened Alloy Steel" },
			{ key: "Length", value: "Varies by Model" },
			{ key: "Edge Type", value: "Serrated/Smooth" },
			{ key: "Coating", value: "Anti-Corrosion" },
			{ key: "Durability", value: "High Wear Resistance" },
		],
		applications: [
			"Grain Harvesting (Wheat, Rice, Corn)",
			"Oilseed Harvesting (Soybean, Rapeseed)",
			"Fodder Cutting",
			"Precision Cutting for Specialty Crops",
		],
		whyChoose: [
			"Exceptional sharpness for clean cuts.",
			"Extended lifespan reduces replacement frequency.",
			"Optimized design for various crop types.",
			"Minimizes crop loss during harvest.",
			"Backed by extensive field testing and positive farmer feedback.",
		],
	},
	{
		name: "Plow System",
		slug: "plow-system",
		category: "agriculture-machinery",
		images: ["/images/demo-prd.png"],
		price: 25000,
		shortDescription:
			"Robust plow system for deep tilling and soil preparation, enhancing soil aeration and nutrient distribution.",
		description:
			"This heavy-duty plow system is designed for effective primary tillage, capable of penetrating deep into the soil to break up hardpans and improve soil structure. Its innovative moldboard design ensures complete inversion of the soil, burying weeds and crop residues efficiently, which contributes to natural fertilization and pest control. Adjustable working width and depth allow for versatile use across different soil types and farming practices. Built with reinforced steel frames, it withstands extreme stresses and provides reliable performance year after year. The system promotes better water infiltration and root development, leading to significantly higher crop yields.",
		features: [
			{ key: "Type", value: "Mouldboard Plow" },
			{ key: "Number of Furrows", value: "2 to 5 (Configurable)" },
			{ key: "Frame Material", value: "Heavy-Duty Steel" },
			{ key: "Adjustability", value: "Depth & Width" },
			{ key: "Power Requirement", value: "45-90 HP Tractor" },
		],
		applications: [
			"Primary Tillage",
			"Soil Inversion",
			"Weed and Residue Burial",
			"Hardpan Breaking",
			"New Field Preparation",
		],
		whyChoose: [
			"Superior soil preparation for optimal crop growth.",
			"Reduces manual labor and fuel consumption.",
			"Built to last with minimal maintenance.",
			"Enhances soil health and productivity.",
			"Proven performance in diverse agricultural environments.",
		],
	},
	{
		name: "Sprayer Nozzle",
		slug: "sprayer-nozzle",
		category: "agriculture-machinery",
		images: ["/images/demo-prd.png"],
		price: 350,
		shortDescription:
			"Precision sprayer nozzle for even distribution of pesticides and fertilizers, minimizing waste.",
		description:
			"Achieve uniform coverage with our precision-engineered sprayer nozzles, critical for effective application of pesticides, herbicides, and liquid fertilizers. Each nozzle is manufactured to exacting standards, ensuring consistent droplet size and spray pattern, which minimizes drift and chemical waste. Made from chemical-resistant materials, they offer exceptional durability and a long service life, even with aggressive agrochemicals. Available in a variety of spray angles and flow rates to match specific application requirements, from fine misting for delicate crops to high-volume coverage for broad acres. Easy to install and clean, these nozzles are essential for optimizing your spraying operations.",
		features: [
			{ key: "Material", value: "Chemically Resistant Polymer" },
			{ key: "Spray Angle", value: "60°, 80°, 110°" },
			{ key: "Flow Rate", value: "Varies by Nozzle Type" },
			{ key: "Compatibility", value: "Standard Sprayer Booms" },
			{ key: "Accuracy", value: "High Precision" },
		],
		applications: [
			"Pesticide Application",
			"Herbicide Spraying",
			"Liquid Fertilizer Distribution",
			"Foliar Feeding",
			"Fungicide Application",
		],
		whyChoose: [
			"Ensures optimal chemical efficacy with even coverage.",
			"Reduces chemical consumption and environmental impact.",
			"Long-lasting and resistant to corrosion.",
			"Wide range of options for diverse spraying needs.",
			"Simple to install and maintain.",
		],
	},
	{
		name: "Control Box",
		slug: "control-box",
		category: "electric-panel",
		images: ["/images/demo-prd.png"],
		price: 8000,
		shortDescription:
			"Customizable electric control box for industrial and commercial applications, ensuring safe and efficient operation.",
		description:
			"Our customizable electric control boxes are the heart of efficient machinery operation, designed to meet the precise demands of industrial and commercial environments. Built with high-quality, CE-certified components, these robust enclosures offer superior protection against dust, water, and electromagnetic interference. Each control box is meticulously assembled and tested to ensure reliable performance and compliance with international safety standards. We offer tailor-made solutions, integrating PLCs, motor starters, variable frequency drives, and human-machine interfaces (HMIs) to provide seamless control over complex systems. Ideal for automating processes, enhancing safety, and improving operational efficiency.",
		features: [
			{ key: "Input Voltage", value: "220-440V AC (Customizable)" },
			{ key: "Enclosure Rating", value: "IP65 (Dust & Water Protection)" },
			{ key: "Control Type", value: "PLC, Relay Logic, VFD" },
			{ key: "Safety Features", value: "Overload, Short Circuit, E-Stop" },
			{ key: "Dimensions", value: "Customizable" },
			{ key: "Material", value: "Powder-Coated Steel / Stainless Steel" },
		],
		applications: [
			"Industrial Automation",
			"Motor Control Systems",
			"Process Control Units",
			"HVAC Systems",
			"Pump Control",
		],
		whyChoose: [
			"Tailored to specific operational needs.",
			"Built with high-quality, long-lasting components.",
			"Ensures maximum safety and reliability.",
			"Optimizes machinery performance.",
			"Comprehensive testing for dependable operation.",
		],
	},
	{
		name: "Distribution Panel",
		slug: "distribution-panel",
		category: "electric-panel",
		images: ["/images/demo-prd.png"],
		price: 12000,
		shortDescription:
			"Compact and robust electrical distribution panel for safe power management in various setups.",
		description:
			"Our electrical distribution panels are engineered to safely and efficiently manage power distribution in residential, commercial, and industrial settings. Designed for easy installation and maintenance, these panels are equipped with high-quality circuit breakers, busbars, and protective devices to ensure reliable power flow and paramount safety. The compact design allows for flexible placement, while the robust enclosure provides protection against environmental factors. Each panel is designed to comply with relevant electrical codes and standards, offering peace of mind through secure and organized power distribution. Available in various configurations to meet diverse power requirements.",
		features: [
			{ key: "Max Current", value: "Up to 400A (Customizable)" },
			{ key: "Enclosure Type", value: "Wall-Mount / Floor-Standing" },
			{ key: "Protection", value: "Overload, Short Circuit, Earth Leakage" },
			{ key: "Busbar Material", value: "Copper / Aluminum" },
			{ key: "Phases", value: "Single Phase / Three Phase" },
		],
		applications: [
			"Residential Buildings",
			"Commercial Complexes",
			"Industrial Plants",
			"Data Centers",
			"Renewable Energy Systems",
		],
		whyChoose: [
			"Ensures safe and organized power distribution.",
			"High-quality components for long-term reliability.",
			"Compact design for space efficiency.",
			"Easy to install and expand.",
			"Meets all relevant safety standards.",
		],
	},
	{
		name: "Circuit Breaker",
		slug: "circuit-breaker",
		category: "electric-panel",
		images: ["/images/demo-prd.png"],
		price: 1500,
		shortDescription:
			"High-performance circuit breaker for overload and short-circuit protection, essential for electrical safety.",
		description:
			"Our high-performance circuit breakers are the first line of defense for your electrical systems, providing critical protection against overcurrents and short circuits. Designed for rapid response, they instantly interrupt the circuit when an anomaly is detected, preventing damage to equipment and reducing the risk of electrical fires. Manufactured to international standards, these breakers offer reliable and consistent performance, even in challenging environments. Available in a wide range of ampere ratings and types (MCB, MCCB, RCCB) to suit various applications, from residential wiring to heavy industrial machinery. Their robust construction ensures a long operational life with minimal maintenance.",
		features: [
			{ key: "Type", value: "MCB / MCCB / RCCB (Varies)" },
			{ key: "Rated Current", value: "6A to 1000A (Range)" },
			{ key: "Breaking Capacity", value: "Up to 50 kA" },
			{ key: "Poles", value: "1P, 2P, 3P, 4P" },
			{ key: "Standards", value: "IEC, IS Compliant" },
		],
		applications: [
			"Residential Electrical Systems",
			"Commercial Building Wiring",
			"Industrial Machinery Protection",
			"Motor Protection",
			"Lighting Circuits",
		],
		whyChoose: [
			"Superior protection against electrical faults.",
			"Ensures safety of personnel and equipment.",
			"High reliability and long service life.",
			"Wide range of types and ratings available.",
			"Easy installation and reset capabilities.",
		],
	},
	{
		name: "Motor Starter",
		slug: "motor-starter",
		category: "electric-panel",
		images: ["/images/demo-prd.png"],
		price: 4000,
		shortDescription:
			"Reliable motor starter for smooth and controlled operation of electric motors, protecting them from damage.",
		description:
			"Our robust motor starters are engineered to provide smooth and controlled starting and stopping of electric motors, while offering vital protection against electrical faults. Integrating overload protection, short-circuit protection, and phase loss detection, these starters extend the lifespan of your motors by preventing common damage causes. Available in various types including Direct-On-Line (DOL), Star-Delta, and Soft Start, they are suitable for a wide range of motor sizes and industrial applications. Designed for easy integration into existing control systems and built with durable components, our motor starters ensure consistent and safe operation of your machinery.",
		features: [
			{ key: "Type", value: "DOL / Star-Delta / Soft Start (Varies)" },
			{ key: "Rated Power", value: "0.5 HP to 500 HP" },
			{ key: "Protection", value: "Overload, Short-Circuit, Phase Loss" },
			{ key: "Control Voltage", value: "24V DC / 110V AC / 220V AC" },
			{ key: "Enclosure", value: "Open / Enclosed (IP Rating)" },
		],
		applications: [
			"Industrial Motors",
			"Pumps and Compressors",
			"Conveyor Systems",
			"HVAC Fans",
			"Machine Tools",
		],
		whyChoose: [
			"Extends motor lifespan through comprehensive protection.",
			"Ensures smooth and safe motor operation.",
			"Reliable performance in demanding industrial settings.",
			"Easy to install and integrate.",
			"Reduces downtime and maintenance costs.",
		],
	},
	{
		name: "Metal Art",
		slug: "metal-art",
		category: "laser-cutting-service",
		images: ["/images/demo-prd.png"],
		price: 2092,
		shortDescription:
			"Bespoke metal art creations using advanced laser cutting technology, perfect for decorative purposes.",
		description:
			"Unleash your creativity with our bespoke metal art services, where advanced laser cutting technology transforms your vision into stunning metallic masterpieces. From intricate wall hangings to custom sculptures and decorative panels, we precision-cut various metals like stainless steel, mild steel, aluminum, and brass. Our high-precision lasers ensure flawless edges and intricate details, allowing for complex designs previously impossible. Ideal for enhancing interior spaces, creating unique outdoor installations, or crafting personalized gifts. We work closely with artists, designers, and individuals to bring unique, durable, and visually striking metal art to life.",
		features: [
			{
				key: "Material Options",
				value: "Stainless Steel, Mild Steel, Aluminum, Brass",
			},
			{ key: "Max Thickness", value: "Up to 20mm (Mild Steel)" },
			{ key: "Precision", value: "±0.05 mm" },
			{ key: "Finish Options", value: "Polished, Brushed, Powder Coated" },
			{ key: "Customization", value: "Full Design Flexibility" },
		],
		applications: [
			"Interior Decor (Wall Art, Partitions)",
			"Exterior Landscaping Features",
			"Signage and Branding",
			"Personalized Gifts",
			"Architectural Elements",
		],
		whyChoose: [
			"High-precision cuts for intricate details.",
			"Wide range of materials and finishes.",
			"Durable and long-lasting artistic pieces.",
			"Full customization to match your vision.",
			"Expert craftsmanship and design support.",
		],
	},
	{
		name: "Precision Gears",
		slug: "precision-gears",
		category: "laser-cutting-service",
		images: ["/images/demo-prd.png"],
		price: 2827,
		shortDescription:
			"Manufacture of high-precision gears with intricate designs using laser cutting, ensuring perfect fit.",
		description:
			"We specialize in the fabrication of high-precision gears using state-of-the-art laser cutting technology. This method allows for the production of gears with exceptionally tight tolerances and complex tooth profiles, essential for smooth and efficient operation in critical machinery. From spur gears to planetary gears, our laser cutting process ensures minimal material distortion and a superior surface finish, reducing the need for extensive post-processing. Ideal for industries such as robotics, automotive, aerospace, and medical devices where exact specifications and reliable performance are paramount. We handle both small batch prototyping and large-scale production runs with consistent quality.",
		features: [
			{ key: "Material", value: "Stainless Steel, Mild Steel, Aluminum" },
			{ key: "Accuracy", value: "AGMA Class 10 Equivalent" },
			{ key: "Tooth Profile", value: "Customizable" },
			{ key: "Production Type", value: "Prototyping & Batch Production" },
			{ key: "Surface Finish", value: "Excellent" },
		],
		applications: [
			"Robotics and Automation",
			"Automotive Components",
			"Aerospace Systems",
			"Medical Devices",
			"Precision Instruments",
		],
		whyChoose: [
			"Exceptional precision for optimal performance.",
			"Fast turnaround times for prototypes.",
			"Reduced material waste.",
			"Suitable for complex gear designs.",
			"Cost-effective for small to medium batches.",
		],
	},
	{
		name: "Custom Brackets",
		slug: "custom-brackets",
		category: "laser-cutting-service",
		images: ["/images/demo-prd.png"],
		price: 9821,
		shortDescription:
			"Fabrication of custom brackets to exact specifications, ideal for industrial, automotive, or architectural applications.",
		description:
			"Our custom bracket fabrication service provides robust and precisely manufactured solutions tailored to your exact needs. Utilizing advanced laser cutting, bending, and welding capabilities, we produce brackets of any shape, size, and material, from simple L-brackets to complex multi-bend assemblies. Whether for structural support, mounting components, or aesthetic purposes, our brackets offer superior strength and durability. We work with a variety of metals including mild steel, stainless steel, and aluminum, and can apply various finishes such as powder coating or galvanization for enhanced corrosion resistance. Perfect for industries requiring specific, high-performance fastening solutions.",
		features: [
			{
				key: "Material Options",
				value: "Mild Steel, Stainless Steel, Aluminum",
			},
			{ key: "Thickness Range", value: "1mm to 25mm" },
			{ key: "Finishing", value: "Powder Coating, Galvanization, Polishing" },
			{ key: "Design Complexity", value: "Simple to Complex Multi-Bend" },
			{ key: "Tolerance", value: "High Precision" },
		],
		applications: [
			"Industrial Machinery Mounts",
			"Automotive Frame Components",
			"Architectural Supports",
			"Electronics Enclosures",
			"Solar Panel Mounting",
		],
		whyChoose: [
			"Tailored to your precise dimensions and load requirements.",
			"High strength and durability.",
			"Wide choice of materials and protective finishes.",
			"Rapid prototyping and production.",
			"Cost-effective for custom solutions.",
		],
	},
	{
		name: "Architectural Decor",
		slug: "architectural-decor",
		category: "laser-cutting-service",
		images: ["/images/demo-prd.png"],
		price: 9876,
		shortDescription:
			"Innovative architectural decorative elements crafted with precision laser cutting, adding a unique touch to buildings.",
		description:
			"Transform spaces with our innovative architectural decorative elements, meticulously crafted using state-of-the-art laser cutting technology. We create intricate facade panels, elegant interior screens, bespoke signage, and unique outdoor installations that add a distinct character to any building or landscape. Our capability to work with various metals like steel, aluminum, and brass allows for diverse designs, from geometric patterns to organic motifs. These durable and visually striking elements are perfect for adding aesthetic value, privacy, or branding to commercial, residential, or public spaces. Our precision ensures seamless integration with your architectural vision.",
		features: [
			{
				key: "Material",
				value: "Mild Steel, Stainless Steel, Aluminum, Corten Steel",
			},
			{ key: "Design Flexibility", value: "Unlimited Patterns & Shapes" },
			{ key: "Max Panel Size", value: "Custom (Large Format Available)" },
			{
				key: "Finish Options",
				value: "Powder Coating, Anodizing, Natural Patina",
			},
			{ key: "Application", value: "Interior & Exterior" },
		],
		whyChoose: [
			"Unique and striking aesthetic appeal.",
			"Durable and weather-resistant materials.",
			"Precision laser cutting for intricate designs.",
			"Full customization to architectural themes.",
			"Adds significant value and character to properties.",
		],
	},
	{
		name: "Red Finish",
		slug: "red-finish",
		category: "powder-coating-service",
		images: ["/images/demo-prd.png"],
		price: 2321,
		shortDescription:
			"Vibrant red powder coating for a durable and aesthetically pleasing finish.",
		description:
			"Our vibrant red powder coating service delivers a stunning, durable, and highly protective finish to your metal components. Using advanced electrostatic application, we ensure a uniform and flawless red coat that resists chipping, scratching, fading, and corrosion far better than traditional paint. This finish is perfect for adding a bold, energetic statement to industrial machinery, automotive parts, furniture, or architectural elements. The rich red pigment maintains its intensity even under harsh environmental conditions, providing long-lasting aesthetic appeal and robust protection.",
		features: [
			{ key: "Color Code", value: "RAL 3000 (Flame Red) / Custom" },
			{ key: "Finish Type", value: "Glossy, Semi-Gloss, Matte" },
			{ key: "Durability", value: "High Scratch & Corrosion Resistance" },
			{ key: "Application", value: "Indoor / Outdoor" },
			{ key: "Thickness", value: "Standard 60-80 microns" },
		],
		applications: [
			"Automotive Parts",
			"Industrial Equipment",
			"Architectural Elements",
			"Furniture Components",
			"Sporting Goods",
		],
		whyChoose: [
			"Exceptional durability and longevity.",
			"Vibrant, long-lasting color.",
			"Superior resistance to corrosion and wear.",
			"Environmentally friendly process.",
			"Uniform and high-quality finish.",
		],
	},
	{
		name: "Blue Finish",
		slug: "blue-finish",
		category: "powder-coating-service",
		images: ["/images/demo-prd.png"],
		price: 2212,
		shortDescription:
			"Smooth blue powder coating for a resilient and attractive surface, offering superior protection.",
		description:
			"Experience the serene yet resilient beauty of our blue powder coating service. This finish provides a smooth, uniform, and incredibly durable surface that offers excellent protection against impacts, abrasions, UV degradation, and corrosion. Whether you're aiming for a classic navy, a modern sky blue, or a deep sapphire, our wide range of blue hues can be applied to various metal substrates. Ideal for components that require both aesthetic appeal and robust protective qualities, such as marine equipment, outdoor furniture, or machinery covers. The blue finish not only looks great but also significantly extends the lifespan of your products.",
		features: [
			{ key: "Color Code", value: "RAL 5010 (Gentian Blue) / Custom" },
			{ key: "Finish Type", value: "Glossy, Semi-Gloss, Matte, Textured" },
			{ key: "UV Stability", value: "Excellent" },
			{ key: "Resistance", value: "Chemical, Abrasion, Corrosion" },
			{ key: "Application", value: "Industrial, Commercial, Decorative" },
		],
		whyChoose: [
			"Aesthetically pleasing and long-lasting blue hue.",
			"High resistance to weathering and wear.",
			"Provides excellent surface protection.",
			"Environmentally responsible coating process.",
			"Consistent color and finish quality.",
		],
	},
	{
		name: "Glossy Black",
		slug: "glossy-black",
		category: "powder-coating-service",
		images: ["/images/demo-prd.png"],
		price: 7654,
		shortDescription:
			"Elegant glossy black powder coating for a sleek and sophisticated look with exceptional durability.",
		description:
			"Our glossy black powder coating offers a timeless, sophisticated, and incredibly durable finish. This deep, reflective black surface provides superior resistance to chipping, scratching, and corrosion, making it an ideal choice for high-traffic or exposed components. The high-gloss sheen adds a premium aesthetic, enhancing the perceived quality of any product, from automotive parts and architectural elements to consumer electronics and industrial machinery. It's a versatile finish that complements almost any design, ensuring your products not only look exceptional but are also protected against the rigors of daily use and environmental exposure.",
		features: [
			{ key: "Color Code", value: "RAL 9005 (Jet Black)" },
			{ key: "Finish Type", value: "High Gloss" },
			{ key: "Reflectivity", value: "High" },
			{ key: "Protection", value: "Superior Chip & Scratch Resistance" },
			{ key: "Versatility", value: "Wide Range of Substrates" },
		],
		applications: [
			"Automotive Rims & Chassis",
			"High-End Furniture",
			"Architectural Trim",
			"Consumer Electronics Casings",
			"Industrial Equipment Panels",
		],
		whyChoose: [
			"Sleek, premium, and sophisticated appearance.",
			"Exceptional durability and protective qualities.",
			"Timeless and versatile aesthetic.",
			"Resistant to fading and environmental factors.",
			"Adds significant value to product presentation.",
		],
	},
	{
		name: "Matte White",
		slug: "matte-white",
		category: "powder-coating-service",
		images: ["/images/demo-prd.png"],
		price: 7654,
		shortDescription:
			"Clean matte white powder coating for a modern and subtle aesthetic with excellent protective properties.",
		description:
			"Achieve a contemporary and minimalist look with our matte white powder coating service. This non-reflective, smooth finish provides a clean, sophisticated aesthetic while offering robust protection against corrosion, scratches, and UV damage. Unlike glossy finishes, matte white hides minor imperfections and provides a soft, elegant touch, making it perfect for modern architectural components, minimalist furniture, and precision instruments. It's an excellent choice for creating a bright and expansive feel in any setting, ensuring your products are both visually appealing and incredibly resilient to daily wear and tear.",
		features: [
			{ key: "Color Code", value: "RAL 9003 (Signal White) / Custom" },
			{ key: "Finish Type", value: "Matte" },
			{ key: "Reflectivity", value: "Low (Non-Glare)" },
			{ key: "Properties", value: "Anti-Fingerprint, Smooth Touch" },
			{ key: "Ideal For", value: "Modern & Minimalist Designs" },
		],
		whyChoose: [
			"Contemporary and elegant aesthetic.",
			"Excellent durability and protective qualities.",
			"Non-reflective, soft-touch finish.",
			"Hides minor surface imperfections.",
			"Creates a bright and clean appearance.",
		],
	},
];

// --- Product Page Component ---
export default function ProductPage({ params }) {
	// Unwrap params if it's a Promise (Next.js 14+)
	const resolvedParams =
		typeof params.then === "function" ? React.use(params) : params;
	const { category, slug } = resolvedParams;
	const normalize = (str) => str && str.toLowerCase().replace(/[-_\s]+/g, "-");
	const product = allProducts.find(
		(p) => p.slug === slug && normalize(p.category) === normalize(category)
	);

	if (!product) return notFound();

	// State for image slider
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// --- Auto Image Slider ---
	useEffect(() => {
		if (product.images.length > 1) {
			const interval = setInterval(() => {
				setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
			}, 3500); // 3.5 seconds
			return () => clearInterval(interval);
		}
	}, [product.images.length]);

	// Manual navigation for slider
	const goToNextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
	};

	const goToPrevImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
	};

	return (
		<div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 animate-fade-in">
			<div className="max-w-6xl mx-auto">
				{/* Back Button */}
				<Link
					href="/products"
					className="inline-flex items-center text-gray-600 hover:text-orange-700 transition-colors duration-200 mb-6 font-medium text-base group"
				>
					<svg
						className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:-translate-x-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						></path>
					</svg>
					Back to all Products
				</Link>

				{/* --- Main Product Info Section (Images Left, Info Right) --- */}
				<section className="bg-white rounded-lg shadow-xl overflow-hidden md:grid md:grid-cols-2 gap-8 p-6 mb-8">
					{/* Product Image Gallery (Left Side) */}
					<div className="flex flex-col items-center bg-gray-100 rounded-md p-4 relative">
						<img
							src={product.images[currentImageIndex]}
							alt={`${product.name} image ${currentImageIndex + 1}`}
							className="w-full h-80 md:h-96 object-contain rounded-md transition-opacity duration-500 ease-in-out"
							key={currentImageIndex}
						/>
						{/* Manual Navigation Controls (if more than one image) */}
						{product.images.length > 1 && (
							<>
								<button
									onClick={goToPrevImage}
									className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
									aria-label="Previous image"
								>
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 19l-7-7 7-7"
										></path>
									</svg>
								</button>
								<button
									onClick={goToNextImage}
									className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
									aria-label="Next image"
								>
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 5l7 7-7 7"
										></path>
									</svg>
								</button>
								{/* Thumbnail/Indicator Dots */}
								<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
									{product.images.map((_, idx) => (
										<button
											key={idx}
											onClick={() => setCurrentImageIndex(idx)}
											className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImageIndex === idx ? "bg-orange-500 scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
											aria-label={`View image ${idx + 1}`}
										></button>
									))}
								</div>
							</>
						)}
					</div>

					{/* Product Details (Right Side) */}
					<div className="flex flex-col justify-between p-2 md:p-0">
						<div>
							<span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
								{product.category.replace(/-/g, " ")}
							</span>
							<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
								{product.name}
							</h1>
							<p className="text-gray-700 text-base mb-3 leading-relaxed">
								{product.shortDescription}
							</p>
							{/* Bullet points for features (first 3) */}
							{product.features && product.features.length > 0 && (
								<ul className="mb-4 ml-4 list-disc text-gray-700 text-sm">
									{product.features.slice(0, 3).map((feature, idx) => (
										<li key={idx}><b>{feature.key}:</b> {feature.value}</li>
									))}
								</ul>
							)}
							{/* Additional Information below short description */}
							<div className="mb-4 text-gray-600 text-sm">
								<p><strong>Product ID:</strong> PROD-{product.slug.toUpperCase().substring(0, 8)}</p>
								<p><strong>Availability:</strong> In Stock</p>
							</div>
						</div>
						<div className="mt-auto">
							<div className="flex items-baseline mb-5">
								<span className="text-4xl font-bold text-orange-700">
									{product.price !== null ? `₹ ${product.price.toLocaleString("en-IN")}` : "Custom Quote"}
								</span>
								{product.price !== null && (
									<span className="ml-2 text-base text-gray-500">onwards</span>
								)}
							</div>
							{/* Call to Action Buttons */}
							<div className="flex flex-col sm:flex-row gap-2">
								<Link
									href={`/contact?product=${product.slug}`}
									className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-md font-semibold text-base hover:from-orange-600 hover:to-amber-600 transition-colors duration-300 shadow-sm"
								>
									<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
									Send Enquiry
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* --- Detailed Description Section --- */}
				<section className="bg-white rounded-lg shadow-md p-6 mb-8">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-orange-400 pb-2">
						Product Overview
					</h2>
					<p className="text-gray-700 text-base leading-relaxed">
						{product.description}
					</p>
				</section>

				{/* --- Specifications / Key Features Table Section --- */}
				{product.features && product.features.length > 0 && (
					<section className="bg-white rounded-lg shadow-md p-6 mb-8">
						<h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-orange-400 pb-2">
							Technical Specifications & Key Features
						</h2>
						<div className="overflow-x-auto">
							<table className="min-w-full bg-white border border-gray-200 text-base">
								<tbody className="divide-y divide-gray-200">
									{product.features.map((feature, index) => (
										<tr
											key={index}
											className={`${
												index % 2 === 0 ? "bg-gray-50" : "bg-white"
											} hover:bg-orange-50 transition-colors duration-200`}
										>
											<td className="px-6 py-3 whitespace-nowrap font-medium text-gray-900">
												{feature.key}
											</td>
											<td className="px-6 py-3 whitespace-nowrap text-gray-700">
												{feature.value}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</section>
				)}

				{/* --- Applications Section --- */}
				{product.applications && product.applications.length > 0 && (
					<section className="bg-white rounded-lg shadow-md p-6 mb-8">
						<h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-orange-400 pb-2">
							Ideal Applications
						</h2>
						<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-4 text-gray-700 text-base list-none p-0">
							{product.applications.map((app, index) => (
								<li key={index} className="flex items-start">
									<svg
										className="w-4 h-4 text-orange-600 flex-shrink-0 mr-2 mt-1"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>{app}</span>
								</li>
							))}
						</ul>
					</section>
				)}

				{/* --- Why Choose This Product Section --- */}
				{product.whyChoose && product.whyChoose.length > 0 && (
					<section className="bg-white rounded-lg shadow-md p-6 mb-8">
						<h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-orange-400 pb-2">
							Why Choose This Product?
						</h2>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-gray-700 text-base list-none p-0">
							{product.whyChoose.map((reason, index) => (
								<li key={index} className="flex items-start">
									<svg
										className="w-4 h-4 text-green-600 flex-shrink-0 mr-2 mt-1"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>{reason}</span>
								</li>
							))}
						</ul>
					</section>
				)}
			</div>
		</div>
	);
}
