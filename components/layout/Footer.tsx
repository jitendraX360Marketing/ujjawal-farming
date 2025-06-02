import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Wrench,
  Truck,
  Cog,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-6">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Cog className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-white">
                AgriTech <span className="text-orange-500">Machinery</span>
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading manufacturer of advanced agricultural machinery.
              Empowering farmers with innovative, reliable, and efficient
              equipment for modern agriculture.
            </p>
            <div className="flex space-x-4 pt-2">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors duration-300" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors duration-300" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors duration-300" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors duration-300" />
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500 border-b border-orange-500/30 pb-2">
              Our Products
            </h4>
            <ul className="space-y-2">
              {[
                "Tractors",
                "Harvesters",
                "Tillers",
                "Seed Drills",
                "Cultivators",
                "Sprayers",
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500 border-b border-orange-500/30 pb-2">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Sales",
                "Service & Repair",
                "Spare Parts",
                "Maintenance",
                "Training",
                "Warranty",
              ].map((service) => (
                <li key={service} className="flex items-center space-x-2">
                  <Wrench className="w-4 h-4 text-orange-500" />
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500 border-b border-orange-500/30 pb-2">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Industrial Area, Sector 15
                  <br />
                  Punjab, India 141001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@agritech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  24/7 Service Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter & Dealer Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dealer Inquiry */}
            <div>
              <h4 className="text-lg font-semibold text-orange-500 mb-3">
                Become a Dealer
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Join our network of authorized dealers and grow your business
                with us.
              </p>
              <button className="px-6 py-2 bg-orange-500 text-black font-semibold rounded hover:bg-orange-600 transition-colors duration-300">
                Dealer Inquiry
              </button>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-orange-500 mb-3">
                Stay Updated
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Get latest updates on new machinery and agricultural technology.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-orange-500 flex-1"
                />
                <button className="px-6 py-2 bg-orange-500 text-black font-semibold rounded hover:bg-orange-600 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 AgriTech Machinery. All rights reserved. | Empowering
              Indian Agriculture
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
              >
                Warranty Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
