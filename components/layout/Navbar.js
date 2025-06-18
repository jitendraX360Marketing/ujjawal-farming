"use client";
import Link from "next/link";
import {
  Phone,
  Mail,
  Menu,
  X,
  Globe,
  Award,
  Truck,
  BadgeCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  // New state to manage the currently active category in the mega-menu for image display
  const [activeCategoryInMenu, setActiveCategoryInMenu] = useState("all"); // 'all' for default images

  // Define your product data with images, organized by category
  const productData = {
    all: [
      // Default images for "All Products" or initial open
      {
        name: "Agri Machine 1",
        imageSrc:
          "https://via.placeholder.com/180x120/FFDDC1/804000?text=Agri+Machinery",
        href: "/products/agriculture-machinery",
      },
      {
        name: "Electric Panel A",
        imageSrc:
          "https://via.placeholder.com/180x120/FFDDC1/804000?text=Electric+Panel",
        href: "/products/electric-panel",
      },
      {
        name: "Laser Cut Part",
        imageSrc:
          "https://via.placeholder.com/180x120/FFDDC1/804000?text=Laser+Cutting",
        href: "/products/laser-cutting-service",
      },
      {
        name: "Powder Coated Item",
        imageSrc:
          "https://via.placeholder.com/180x120/FFDDC1/804000?text=Powder+Coating",
        href: "/products/powder-coating-service",
      },
    ],
    "agriculture-machinery": [
      {
        name: "Tractor Attachment",
        imageSrc:
          "https://via.placeholder.com/180x120/A8DADC/2F4F4F?text=Tractor",
        href: "/products/agriculture-machinery/tractor-attachment",
      },
      {
        name: "Harvester Blade",
        imageSrc:
          "https://via.placeholder.com/180x120/A8DADC/2F4F4F?text=Harvester",
        href: "/products/agriculture-machinery/harvester-blade",
      },
      {
        name: "Plow System",
        imageSrc: "https://via.placeholder.com/180x120/A8DADC/2F4F4F?text=Plow",
        href: "/products/agriculture-machinery/plow-system",
      },
      {
        name: "Sprayer Nozzle",
        imageSrc:
          "https://via.placeholder.com/180x120/A8DADC/2F4F4F?text=Sprayer",
        href: "/products/agriculture-machinery/sprayer-nozzle",
      },
    ],
    "electric-panel": [
      {
        name: "Control Box",
        imageSrc:
          "https://via.placeholder.com/180x120/FAD0C4/8B0000?text=Control+Box",
        href: "/products/electric-panel/control-box",
      },
      {
        name: "Distribution Panel",
        imageSrc:
          "https://via.placeholder.com/180x120/FAD0C4/8B0000?text=Distribution",
        href: "/products/electric-panel/distribution-panel",
      },
      {
        name: "Circuit Breaker",
        imageSrc:
          "https://via.placeholder.com/180x120/FAD0C4/8B0000?text=Circuit+Breaker",
        href: "/products/electric-panel/circuit-breaker",
      },
      {
        name: "Motor Starter",
        imageSrc:
          "https://via.placeholder.com/180x120/FAD0C4/8B0000?text=Motor+Starter",
        href: "/products/electric-panel/motor-starter",
      },
    ],
    "laser-cutting-service": [
      {
        name: "Metal Art",
        imageSrc:
          "https://via.placeholder.com/180x120/BCEAD5/006400?text=Metal+Art",
        href: "/products/laser-cutting-service/metal-art",
      },
      {
        name: "Precision Gears",
        imageSrc:
          "https://via.placeholder.com/180x120/BCEAD5/006400?text=Gears",
        href: "/products/laser-cutting-service/precision-gears",
      },
      {
        name: "Custom Brackets",
        imageSrc:
          "https://via.placeholder.com/180x120/BCEAD5/006400?text=Brackets",
        href: "/products/laser-cutting-service/custom-brackets",
      },
      {
        name: "Architectural Decor",
        imageSrc:
          "https://via.placeholder.com/180x120/BCEAD5/006400?text=Decor",
        href: "/products/laser-cutting-service/architectural-decor",
      },
    ],
    "powder-coating-service": [
      {
        name: "Red Finish",
        imageSrc:
          "https://via.placeholder.com/180x120/FDD835/E65100?text=Red+Coating",
        href: "/products/powder-coating-service/red-finish",
      },
      {
        name: "Blue Finish",
        imageSrc:
          "https://via.placeholder.com/180x120/FDD835/E65100?text=Blue+Coating",
        href: "/products/powder-coating-service/blue-finish",
      },
      {
        name: "Glossy Black",
        imageSrc:
          "https://via.placeholder.com/180x120/FDD835/E65100?text=Glossy+Black",
        href: "/products/powder-coating-service/glossy-black",
      },
      {
        name: "Matte White",
        imageSrc:
          "https://via.placeholder.com/180x120/FDD835/E65100?text=Matte+White",
        href: "/products/powder-coating-service/matte-white",
      },
    ],
  };

  const productCategories = [
    {
      name: "Agriculture Machinery",
      slug: "agriculture-machinery",
      href: "/products/agriculture-machinery",
    },
    {
      name: "Electric Panel",
      slug: "electric-panel",
      href: "/products/electric-panel",
    },
    {
      name: "Laser Cutting Service",
      slug: "laser-cutting-service",
      href: "/products/laser-cutting-service",
    },
    {
      name: "Powder Coating Service",
      slug: "powder-coating-service",
      href: "/products/powder-coating-service",
    },
  ];

  // Function to get images for the active category
  const getImagesForActiveCategory = () => {
    return productData[activeCategoryInMenu] || productData.all;
  };

  // Function to handle link clicks in mobile menu
  const handleMobileLinkClick = () => {
    setIsMenuOpen(false); // Close the mobile menu
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <>
      {/* Rich Top Bar with Indian Touch */}
      <div className="bg-gradient-to-r from-red-400 via-orange-500 to-red-500 text-white py-3 px-4 relative overflow-hidden hidden lg:flex">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="w-7xl px-5 mx-auto flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
              <Mail className="w-4 h-4" />
              <span className="font-medium">info@agrimachinery.in</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
              <BadgeCheck className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Trademark Registered
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span className="font-medium">50+ Countries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Main Navigation */}
      <nav className="bg-white shadow-xl border-b-4 border-orange-200 sticky top-0 z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 to-red-50/30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center h-20">
            {/* Premium Logo */}
            <Link href={"/"}>
              <div className="flex items-center space-x-4">
                <Image
                  alt="Shri Shyam Logo"
                  src={"/images/logo-main.png"} // Make sure this path is correct
                  height={20}
                  width={200}
                />
              </div>
            </Link>

            {/* Professional Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300"
              >
                Home
              </Link>

              {/* Mega Menu for Products */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setIsProductsMenuOpen(true);
                  setActiveCategoryInMenu("all"); // Reset to 'all' or default on hover enter
                }}
                onMouseLeave={() => setIsProductsMenuOpen(false)}
              >
                <button className="flex items-center px-4 py-2 text-gray-700 hover:text-orange-600 font-medium rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300">
                  Our Products
                  {isProductsMenuOpen ? (
                    <ChevronUp className="ml-1 w-4 h-4" />
                  ) : (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </button>

                {isProductsMenuOpen && (
                  <div className="absolute left-1/2 top-9 -translate-x-1/2 mt-2 w-[800px] bg-white rounded-xl shadow-2xl p-6 border border-orange-100 transform -translate-y-0.5 animate-fade-in-down">
                    <div className="flex flex-col">
                      {/* Product Images/Showcase - Top Row (Horizontal Layout) */}
                      <div className="flex justify-around items-start gap-4 mb-6">
                        {getImagesForActiveCategory().map((product, index) => (
                          <Link
                            href={product.href}
                            key={index}
                            className="block flex-shrink-0 w-[180px]"
                          >
                            <div className="rounded-lg overflow-hidden shadow-md group border border-gray-100 hover:border-orange-300 transition-all duration-200">
                              <Image
                                src={product.imageSrc}
                                alt={product.name}
                                width={180}
                                height={120}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="p-2 bg-white text-center text-sm font-medium text-gray-700 group-hover:text-orange-600">
                                {product.name}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Product Categories - Bottom Section */}
                      <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-lg border-b pb-2 border-orange-100">
                          Browse Categories
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                          {/* Categories are split into two columns */}
                          <ul className="space-y-1">
                            {productCategories
                              .slice(0, Math.ceil(productCategories.length / 2))
                              .map((category, index) => (
                                <li key={index}>
                                  {/* Use button or div instead of Link if only changing images */}
                                  <button
                                    onClick={() =>
                                      setActiveCategoryInMenu(category.slug)
                                    }
                                    // Optional: Add styling to indicate active category
                                    className={`block w-full text-left py-1.5 px-3 rounded-md transition-colors duration-200 ${
                                      activeCategoryInMenu === category.slug
                                        ? "bg-orange-100 text-orange-700 font-semibold"
                                        : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                                    }`}
                                  >
                                    {category.name}
                                  </button>
                                </li>
                              ))}
                          </ul>
                          <ul className="space-y-1">
                            {productCategories
                              .slice(Math.ceil(productCategories.length / 2))
                              .map((category, index) => (
                                <li key={index}>
                                  <button
                                    onClick={() =>
                                      setActiveCategoryInMenu(category.slug)
                                    }
                                    className={`block w-full text-left py-1.5 px-3 rounded-md transition-colors duration-200 ${
                                      activeCategoryInMenu === category.slug
                                        ? "bg-orange-100 text-orange-700 font-semibold"
                                        : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                                    }`}
                                  >
                                    {category.name}
                                  </button>
                                </li>
                              ))}
                            <li>
                              {/* This link will still navigate to the main products page */}
                              <Link
                                href="/products"
                                className="block py-1.5 px-3 text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-md transition-colors duration-200 font-semibold"
                              >
                                View All Products &rarr;
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/export"
                className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300"
              >
                Export
              </Link>

              <Link
                href="/insights"
                className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300"
              >
                Insights
              </Link>

              <Link
                href="/contact"
                className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300"
              >
                Contact
              </Link>

              <Link
                href="/about"
                className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300"
              >
                About
              </Link>
            </div>

            {/* Professional CTA Button */}
            <Link href={"/contact"}>
              <div className="hidden lg:flex items-center space-x-4">
                <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:via-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Quote
                </button>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsProductsMenuOpen(false); // Close products menu when main mobile menu toggles
              }}
              className="lg:hidden p-3 rounded-xl text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 transform hover:scale-110"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t-2 border-orange-200 bg-gradient-to-br from-white to-orange-50">
              <div className="px-4 pt-4 pb-6 space-y-3">
                <Link
                  href="/"
                  className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={handleMobileLinkClick}
                >
                  Home
                </Link>

                {/* Products Toggle for Mobile */}
                <button
                  onClick={() => setIsProductsMenuOpen(!isProductsMenuOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Our Products
                  {isProductsMenuOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {/* Mobile Products Sub-menu (Mega-Menu simplified) */}
                {isProductsMenuOpen && (
                  <div className="pl-8 pt-2 pb-4 space-y-2 bg-orange-50/50 rounded-lg">
                    {productCategories.map((category, index) => (
                      <Link
                        key={index}
                        href={category.href} // On mobile, clicking the category link takes you to the category page
                        className="block py-2 px-3 text-gray-600 hover:text-orange-600 hover:bg-orange-100 rounded-lg transition-colors duration-200"
                        onClick={handleMobileLinkClick}
                      >
                        {category.name}
                      </Link>
                    ))}
                    <Link
                      href="/products"
                      className="block py-2 px-3 text-orange-600 hover:text-orange-700 hover:bg-orange-100 rounded-lg transition-colors duration-200 font-semibold"
                      onClick={handleMobileLinkClick}
                    >
                      View All Products &rarr;
                    </Link>
                  </div>
                )}

                <Link
                  href="/about"
                  className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={handleMobileLinkClick}
                >
                  About
                </Link>

                <Link
                  href="/export"
                  className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={handleMobileLinkClick}
                >
                  Export{" "}
                </Link>

                <Link
                  href="/insights"
                  className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={handleMobileLinkClick}
                >
                  Insights
                </Link>

                <Link
                  href="/contact"
                  className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={handleMobileLinkClick}
                >
                  Contact
                </Link>

                <Link href={"/contact"}>
                  <div className="pt-4">
                    {" "}
                    <button
                      className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-bold rounded-2xl hover:from-orange-600 hover:via-orange-700 hover:to-red-700 transition-all duration-300 shadow-2xl transform hover:scale-105 hover:-translate-y-1"
                      onClick={handleMobileLinkClick}
                    >
                      Get Quote
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
