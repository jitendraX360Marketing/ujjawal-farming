"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa"; // Using react-icons for WhatsApp and Email icons
import { productData, allProductsFlat } from "../../data/products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("default"); // 'default', 'price-asc', 'price-desc', 'name-asc', 'name-desc'

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...allProductsFlat]; // Create a mutable copy

    // 1. Filter by Category
    if (selectedCategory !== "all") {
      products = products.filter(
        (product) => product.category === selectedCategory
      );
    }

    // 2. Filter by Search Term
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          product.description.toLowerCase().includes(lowerCaseSearchTerm) ||
          (product.category &&
            product.category
              .toLowerCase()
              .includes(lowerCaseSearchTerm.replace(/ /g, "-")))
      );
    }

    // 3. Filter by Price Range
    const parsedMinPrice = parseFloat(minPrice);
    const parsedMaxPrice = parseFloat(maxPrice);

    products = products.filter((product) => {
      // If product has no price (null), it's always included unless both min/max are set and it doesn't fit
      if (product.price === null || isNaN(product.price)) {
        return true; // Products with "Custom Quote" are not affected by numerical price filters
      }
      const meetsMin = isNaN(parsedMinPrice) || product.price >= parsedMinPrice;
      const meetsMax = isNaN(parsedMaxPrice) || product.price <= parsedMaxPrice;
      return meetsMin && meetsMax;
    });

    // 4. Sort Products
    if (sortBy !== "default") {
      products.sort((a, b) => {
        if (sortBy === "price-asc") {
          // Handle null prices: nulls go to the end
          if (a.price === null && b.price === null) return 0;
          if (a.price === null) return 1;
          if (b.price === null) return -1;
          return a.price - b.price;
        } else if (sortBy === "price-desc") {
          // Handle null prices: nulls go to the end
          if (a.price === null && b.price === null) return 0;
          if (a.price === null) return 1;
          if (b.price === null) return -1;
          return b.price - a.price;
        } else if (sortBy === "name-asc") {
          return a.name.localeCompare(b.name);
        } else if (sortBy === "name-desc") {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
    }

    return products;
  }, [selectedCategory, searchTerm, minPrice, maxPrice, sortBy]);

  // Function to truncate description to a maximum of 2 lines
  const truncateDescription = (text, maxLines = 2, maxCharsPerLine = 40) => {
    const words = text.split(" ");
    let currentLine = "";
    const lines = [];

    for (let i = 0; i < words.length; i++) {
      const nextWord = words[i];
      // Check if adding the next word exceeds the max characters for the current line
      if (
        (currentLine + (currentLine ? " " : "") + nextWord).length <=
        maxCharsPerLine
      ) {
        currentLine += (currentLine ? " " : "") + nextWord;
      } else {
        lines.push(currentLine); // Push the current line
        currentLine = nextWord; // Start a new line with the current word
        if (lines.length >= maxLines) {
          // If max lines reached, stop
          if (currentLine) {
            // If there's content for currentLine, add '...'
            return lines.join(" ") + "...";
          }
          return lines.join(" ") + "...";
        }
      }
    }
    // Add any remaining content as the last line
    if (currentLine) {
      lines.push(currentLine);
    }

    const result = lines.join(" ");
    // If the original text is longer than the displayed result, add '...'
    return result.length < text.length ? result + "..." : result;
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-20 md:py-28 text-center overflow-hidden">
        <div className="absolute inset-0 bg-pattern-light opacity-10"></div>{" "}
        {/* Subtle background pattern */}
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            Discover Our Innovative Products
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
            High-quality solutions for Agriculture, Electrical, and Custom
            Fabrication Needs.
          </p>

          {/* Search Bar and Sort By in Hero Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-4">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search for products or services..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-500 text-lg shadow-md text-gray-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Sort By Dropdown */}
            <div className="relative w-full md:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none w-full px-6 py-3 border border-gray-300 rounded-full bg-white text-gray-700 text-lg focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-500 shadow-md pr-10 cursor-pointer"
              >
                <option value="default">Sort By: Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Separator */}
      <div className="max-w-7xl mx-auto px-4 my-10">
        <hr className="border-t-2 border-orange-300 w-1/3 mx-auto" />
      </div>

      {/* Main Content Area: Sidebar and Products */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 pb-12">
        {/* Left Sidebar for Categories & Filters */}
        <div
          className="md:w-64 lg:w-72 flex-shrink-0
                        md:sticky md:top-24 md:self-start md:max-h-[calc(100vh-theme(space.24))] md:overflow-y-auto
                        p-6 bg-white rounded-xl  shadow-lg border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
            Filters
          </h2>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Categories
            </h3>
            <nav>
              <ul>
                <li className="mb-2">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium text-base transition-all duration-200
                      ${
                        selectedCategory === "all"
                          ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md"
                          : "text-gray-700 hover:bg-orange-50 hover:text-orange-700"
                      }`}
                  >
                    All Products
                  </button>
                </li>
                {Object.entries(productData).map(([categoryKey, products]) => (
                  <li key={categoryKey} className="mb-2">
                    <button
                      onClick={() => setSelectedCategory(categoryKey)}
                      className={`w-full text-left px-4 py-2 rounded-lg font-medium text-base transition-all duration-200
                        ${
                          selectedCategory === categoryKey
                            ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md"
                            : "text-gray-700 hover:bg-orange-50 hover:text-orange-700"
                        }`}
                    >
                      {categoryKey.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Price Range (₹)
            </h3>
            <div className="flex items-center space-x-3">
              <input
                type="number"
                placeholder="Min"
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-200"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-200"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Products with "Custom Quote" are always visible.
            </p>
          </div>

          {/* Add more filters here if needed, e.g., by material, brand, etc. */}
        </div>

        {/* Products Display Area */}
        <main className="flex-1">
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {" "}
              {/* 3 cards per line for large screens */}
              {filteredAndSortedProducts.map((product) => (
                <div
                  key={product.slug}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden
                             hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out flex flex-col"
                >
                  <Link href={`/products/${product.category}/${product.slug}`}>
                    <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                      {/* Using Next.js Image component for optimization in a real app */}
                      <img
                        src={product.imageSrc || (product.images && product.images[0])}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </Link>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-1 leading-tight">
                      <Link
                        href={`/products/${product.category}/${product.slug}`}
                        className="hover:text-orange-600 transition-colors duration-200"
                      >
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-gray-500 mb-2 capitalize">
                      Category:{" "}
                      <span className="font-semibold text-gray-600">
                        {product.category.replace(/-/g, " ")}
                      </span>
                    </p>
                    <p className="text-lg font-bold text-orange-700 mb-3">
                      {product.price !== null
                        ? `₹ ${product.price.toLocaleString("en-IN")}`
                        : "Custom Quote"}
                    </p>
                    <p
                      className="text-gray-600 text-sm mb-4 flex-grow"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {truncateDescription(product.description, 2, 45)}{" "}
                      {/* Max 2 lines for description */}
                    </p>

                    <div className="flex flex-row space-x-2 mt-auto">
                      <a
                        href={`https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hello! I'm interested in your product: ${product.name}. Could you please provide more details?`} // Replace YOUR_WHATSAPP_NUMBER
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center px-2 py-2 bg-green-500 text-white rounded-lg font-semibold text-sm
                                   hover:bg-green-600 transition-colors duration-200 shadow-sm"
                      >
                        <FaWhatsapp className="mr-1 text-base" /> WhatsApp
                      </a>
                      <Link
                        href={`/contact?product=${product.slug}`}
                        className="flex-1 flex items-center justify-center px-2 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold text-sm
                                   hover:from-orange-600 hover:to-amber-600 transition-colors duration-200 shadow-sm"
                      >
                        <FaRegEnvelope className="mr-1 text-base" /> Enquiry
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl shadow-lg">
              <p className="text-3xl text-gray-600 font-semibold mb-4">
                No products found!
              </p>
              <p className="text-lg text-gray-500">
                Please adjust your filters or search term to see products.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
