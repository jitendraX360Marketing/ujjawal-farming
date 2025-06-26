"use client";
import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { productData, allProductsFlat } from "../../../../data/products";

// --- Product Page Component ---
export default function ProductPage({ params }) {
	// Unwrap params if it's a Promise (Next.js 14+)
	const resolvedParams =
		typeof params.then === "function" ? React.use(params) : params;
	const { category, slug } = resolvedParams;
	const normalize = (str) => str && str.toLowerCase().replace(/[-_\s]+/g, "-");
	// Find product from allProductsFlat using category and slug
	const product = allProductsFlat.find(
		(p) => p.slug === slug && p.category === category
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

	// For images, use product.images if available, else fallback to [product.imageSrc]
	const images = product?.images || [product?.imageSrc];

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
							src={images[currentImageIndex]}
							alt={`${product.name} image ${currentImageIndex + 1}`}
							className="w-full h-80 md:h-96 object-contain rounded-md transition-opacity duration-500 ease-in-out"
							key={currentImageIndex}
						/>
						{/* Manual Navigation Controls (if more than one image) */}
						{images.length > 1 && (
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
									{images.map((_, idx) => (
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
									{typeof product.price === "number" && !isNaN(product.price)
										? `₹ ${product.price.toLocaleString("en-IN")}`
										: "Custom Quote"}
								</span>
								{typeof product.price === "number" && !isNaN(product.price) && (
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
									Contact Us
								</Link>
								<a
									href="https://wa.me/919929596124?text=Hi%2C%20I%20am%20interested%20in%20your%20product%20-%20{encodeURIComponent(product.name)}"
									target="_blank"
									rel="noopener noreferrer"
									className="flex-1 flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold text-base transition-colors duration-300 shadow-sm"
									style={{ backgroundColor: '#25D366' }}
								>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" className="mr-2"><path fill="#fff" d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.58 2.236 6.364L4 29l7.01-2.184A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.77 0-3.468-.463-4.938-1.34l-.352-.207-4.164 1.299 1.299-4.164-.207-.352C6.463 18.468 6 16.77 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.145-1.715-.848-1.98-.945-.265-.097-.458-.145-.65.145-.19.29-.748.945-.917 1.14-.17.19-.34.217-.63.072-.29-.145-1.225-.452-2.334-1.44-.863-.77-1.445-1.72-1.615-2.01-.17-.29-.018-.447.127-.592.13-.13.29-.34.435-.51.145-.17.193-.29.29-.48.097-.19.048-.362-.024-.507-.072-.145-.65-1.57-.89-2.15-.235-.565-.475-.488-.65-.497l-.555-.01c-.19 0-.497.072-.757.362-.26.29-.99.97-.99 2.36s1.014 2.74 1.155 2.93c.14.19 2 3.05 4.85 4.15.68.293 1.21.468 1.625.598.682.217 1.304.187 1.797.113.548-.08 1.715-.7 1.957-1.377.242-.677.242-1.257.17-1.377-.072-.12-.265-.193-.555-.338z"/></svg>
									WhatsApp Now
								</a>
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
