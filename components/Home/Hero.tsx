"use client";
import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export default function MinimalHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate zoom and opacity based on scroll
  // Adjust these values to fine-tune the effect
  const zoomScale = 1 + scrollY * 0.0003; // Slower zoom out
  const contentOpacity = Math.max(0, 1 - scrollY * 0.002); // Content fades faster
  const imageOpacity = Math.max(0.1, 1 - scrollY * 0.0005); // Image fades slightly slower

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-fit bg-black flex items-center justify-center overflow-hidden">
        {/* Background Image with Zoom and Position Effect */}
        <div
          className="absolute inset-0 bg-cover bg-right transition-all duration-500 ease-out" // Added bg-right to align image to the right
          style={{
            backgroundImage: "url('/images/hero-bg-image.png')", // Make sure this path is correct
            transform: `scale(${zoomScale})`,
            opacity: imageOpacity,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content - Left Aligned */}
        <div className="relative z-10 pt-28 pb-28 max-w-7xl mx-auto px-6 flex items-start">
          <div className="grid lg:grid-cols-2 gap-16 items-start w-full">
            {/* Left Content - Moved up and made larger */}
            <div
              className="text-left text-white"
              style={{ opacity: contentOpacity }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Manufacturers and exporters of{" "}
                <span className="text-orange-500">Agriculture Machinery</span>
              </h1>
              <p className="text-xl lg:text-1xl mb-6 text-gray-100 font-medium">
                Advanced Agricultural Solutions
              </p>
              <p className="text-lg mb-10 text-gray-200 max-w-2xl leading-relaxed">
                Leading manufacturer of premium agricultural machinery, serving
                farmers across 50+ countries with innovative, reliable, and
                efficient farming equipment that transforms modern agriculture.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 mb-10 text-base">
                <div className="flex items-center space-x-3 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <span className="text-orange-500 font-bold text-lg">✓</span>
                  <span className="font-medium">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-3 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <span className="text-orange-500 font-bold text-lg">✓</span>
                  <span className="font-medium">Export Quality</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg">
                  Explore Products
                </button>
                <button className="px-5 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-xl border-2 border-white/30 transition-all duration-300 transform hover:scale-105 text-lg">
                  Get Quote
                </button>
              </div>
            </div>

            {/* Right Floating Stats - Redesigned */}
            <div className="relative hidden lg:block h-full">
              {/* Main Stats Container */}
              <div className="absolute inset-0 flex flex-col justify-center">
                {/* Top Row Stats */}
                <div className="flex justify-between mb-8">
                  <div
                    className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500"
                    style={{
                      opacity: contentOpacity,
                      animation: "float 8s ease-in-out infinite",
                    }}
                  >
                    <div className="text-center">
                      <div className="text-4xl font-black text-orange-400 mb-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                        50+
                      </div>
                      <div className="text-sm text-gray-300 font-semibold uppercase tracking-wide">
                        Countries
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500"
                    style={{
                      opacity: contentOpacity,
                      animation: "float 8s ease-in-out infinite 1s",
                    }}
                  >
                    <div className="text-center">
                      <div className="text-4xl font-black text-orange-400 mb-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                        10K+
                      </div>
                      <div className="text-sm text-gray-300 font-semibold uppercase tracking-wide">
                        Happy Clients
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Large Stat */}
                <div className="flex justify-center mb-8">
                  <div
                    className="bg-gradient-to-br from-orange-500/20 to-orange-700/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border-2 border-orange-500/30 transform hover:scale-105 transition-all duration-500"
                    style={{
                      opacity: contentOpacity,
                      animation: "float 8s ease-in-out infinite 2s",
                    }}
                  >
                    <div className="text-center">
                      <div className="text-4xl font-black mb-3 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                        20+
                      </div>
                      <div className="text-base text-white font-bold uppercase tracking-wider">
                        Years Experience
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Row Stats */}
                <div className="flex justify-between">
                  <div
                    className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500"
                    style={{
                      opacity: contentOpacity,
                      animation: "float 8s ease-in-out infinite 3s",
                    }}
                  >
                    <div className="text-center">
                      <div className="text-4xl font-black text-orange-400 mb-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                        99%
                      </div>
                      <div className="text-sm text-gray-300 font-semibold uppercase tracking-wide">
                        Quality Rate
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500"
                    style={{
                      opacity: contentOpacity,
                      animation: "float 8s ease-in-out infinite 4s",
                    }}
                  >
                    <div className="text-center">
                      <div className="text-4xl font-black text-orange-400 mb-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                        24/7
                      </div>
                      <div className="text-sm text-gray-300 font-semibold uppercase tracking-wide">
                        Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Animation */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-8px) rotate(0.5deg);
            }
            50% {
              transform: translateY(-15px) rotate(0deg);
            }
            75% {
              transform: translateY(-8px) rotate(-0.5deg);
            }
          }
        `}</style>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          style={{ opacity: contentOpacity }}
        >
          <ArrowDown className="w-6 h-6" />
        </div>
      </section>
    </>
  );
}
