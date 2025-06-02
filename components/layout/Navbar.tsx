"use client";
import Link from "next/link";
import {
  Phone,
  Mail,
  Menu,
  X,
  Globe,
  ChevronDown,
  Award,
  Truck,
  Shield,
  BadgeCheck,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <>
      {/* Rich Top Bar */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-red-500 text-white py-3 px-4 relative overflow-hidden hidden lg:flex">
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
      <nav className="bg-white shadow-xl border-b-4 border-orange-200 sticky top-0 z-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 to-red-50/30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center h-20">
            {/* Premium Logo */}
            <div className="flex items-center space-x-4">
              <Image alt="Shri Shyam Logo" src={"/images/logo-main.png"} height={20} width={200}/>
            </div>

            {/* Professional Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300"
              >
                Home
              </Link>

              <div className="relative group">
                <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-orange-600 font-medium rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300">
                  <span>Our Products</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-orange-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 transform translate-y-4 group-hover:translate-y-0">
                  <div className="p-3">
                    <div className="grid grid-cols-1 gap-1">
                      <Link
                        href="/tractors"
                        className="flex items-start space-x-3 px-3 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-orange-600 rounded-lg transition-all duration-300"
                      >
                        <div>
                          <div className="font-medium text-sm">
                            Tractors & Power Tillers
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Heavy-duty farming equipment
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/harvesters"
                        className="flex items-start space-x-3 px-3 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-orange-600 rounded-lg transition-all duration-300"
                      >
                        <div>
                          <div className="font-medium text-sm">
                            Combine Harvesters
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Advanced harvesting solutions
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/irrigation"
                        className="flex items-start space-x-3 px-3 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-orange-600 rounded-lg transition-all duration-300"
                      >
                        <div>
                          <div className="font-medium text-sm">
                            Irrigation Systems
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Smart water management
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/implements"
                        className="flex items-start space-x-3 px-3 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-orange-600 rounded-lg transition-all duration-300"
                      >
                        <div>
                          <div className="font-medium text-sm">
                            Farm Implements
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Complete tool solutions
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/exports"
                className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300"
              >
                Export Process
              </Link>

              <Link
                href="/quality"
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
            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:via-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                >
                  Home
                </Link>

                <div>
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl font-semibold transition-all duration-300"
                  >
                    <span>Our Products</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isProductsOpen && (
                    <div className="ml-6 mt-3 space-y-2">
                      <Link
                        href="/tractors"
                        className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl transition-all duration-300"
                      >
                        <span className="text-lg">🚜</span>
                        <span className="font-medium">
                          Tractors & Power Tillers
                        </span>
                      </Link>
                      <Link
                        href="/harvesters"
                        className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl transition-all duration-300"
                      >
                        <span className="text-lg">🌾</span>
                        <span className="font-medium">Combine Harvesters</span>
                      </Link>
                      <Link
                        href="/irrigation"
                        className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl transition-all duration-300"
                      >
                        <span className="text-lg">💧</span>
                        <span className="font-medium">Irrigation Systems</span>
                      </Link>
                      <Link
                        href="/implements"
                        className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl transition-all duration-300"
                      >
                        <span className="text-lg">🔧</span>
                        <span className="font-medium">Farm Implements</span>
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  About Company
                </Link>

                <Link
                  href="/exports"
                  className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Truck className="w-4 h-4" />
                  <span>Export Services</span>
                </Link>

                <Link
                  href="/quality"
                  className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Quality Standards
                </Link>

                <Link
                  href="/contact"
                  className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </Link>

                <div className="pt-4">
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-bold rounded-2xl hover:from-orange-600 hover:via-orange-700 hover:to-red-700 transition-all duration-300 shadow-2xl transform hover:scale-105 hover:-translate-y-1">
                    Get Free Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
