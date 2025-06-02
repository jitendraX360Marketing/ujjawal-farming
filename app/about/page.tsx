"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Award,
  Users,
  Factory,
  Cog,
  Leaf,
  Star,
  ArrowRight,
  Calendar,
  Target,
  Heart,
  Wrench,
  Truck,
  Settings,
  Shield,
} from "lucide-react";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Set());
  // FIX: Update the type of observerRef to include IntersectionObserver
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Ensure observerRef.current is assigned correctly
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Disconnect the observer if it exists
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Journey milestones data (rest of your data remains the same)
  const journeyMilestones = [
    {
      year: "2005",
      title: "Foundation & Panel Manufacturing",
      titleEng: "Foundation & Panel Manufacturing",
      description:
        "Maliram Ji Jangid founded Shri Shyam Engineering. Started with industrial panel manufacturing, laying the foundation of quality.",
      icon: Factory,
      color: "from-amber-600 to-orange-700",
      bgColor: "from-amber-50 to-orange-100",
    },
    {
      year: "2008",
      title: "Powder Coating Plant Setup",
      titleEng: "Powder Coating Plant Setup",
      description:
        "Established a state-of-the-art powder coating facility. Set a new standard in machinery finishing and durability.",
      icon: Settings,
      color: "from-green-600 to-emerald-700",
      bgColor: "from-green-50 to-emerald-100",
    },
    {
      year: "2012",
      title: "Laser Cutting Technology",
      titleEng: "Laser Cutting Technology",
      description:
        "Introduction of laser cutting machines. Revolutionized production with precise cutting and modern manufacturing capabilities.",
      icon: Cog,
      color: "from-blue-600 to-indigo-700",
      bgColor: "from-blue-50 to-indigo-100",
    },
    {
      year: "2018",
      title: "Ujjawal Farming Launch",
      titleEng: "Ujjawal Farming Launch",
      description:
        "Ventured into agricultural machinery under the 'Ujjawal Farming' brand. Began providing innovative solutions for modern farming.",
      icon: Leaf,
      color: "from-teal-600 to-cyan-700",
      bgColor: "from-teal-50 to-cyan-100",
    },
    {
      year: "2025",
      title: "Global Leadership",
      titleEng: "Global Leadership",
      description:
        "Today, we are a leading agricultural machinery company serving 50+ countries. The global flag of Indian quality.",
      icon: Award,
      color: "from-red-600 to-pink-700",
      bgColor: "from-red-50 to-pink-100",
    },
  ];

  const stats = [
    {
      number: "20+",
      label: "Years Experience",
      labelEng: "Years Experience",
      icon: Calendar,
      color: "text-amber-700",
    },
    {
      number: "50+",
      label: "Countries Served",
      labelEng: "Countries Served",
      icon: Target,
      color: "text-green-700",
    },
    {
      number: "10K+",
      label: "Happy Farmers",
      labelEng: "Happy Farmers",
      icon: Users,
      color: "text-blue-700",
    },
    {
      number: "99%",
      label: "Quality Assurance",
      labelEng: "Quality Assurance",
      icon: Shield,
      color: "text-red-700",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer Service",
      titleEng: "Customer Service",
      description:
        "The success and satisfaction of our farmer brothers is at the heart of every decision we make.",
      gradient: "from-red-600 to-rose-700",
      bg: "from-red-50 to-rose-100",
    },
    {
      icon: Wrench,
      title: "Technical Innovation",
      titleEng: "Technical Innovation",
      description:
        "We combine modern technology with traditional agriculture to provide better solutions.",
      gradient: "from-blue-600 to-indigo-700",
      bg: "from-blue-50 to-indigo-100",
    },
    {
      icon: Award,
      title: "Quality Commitment",
      titleEng: "Quality Commitment",
      description:
        "An unwavering commitment to ensuring the best quality and durability in every product.",
      gradient: "from-yellow-600 to-amber-700",
      bg: "from-yellow-50 to-amber-100",
    },
    {
      icon: Leaf,
      title: "Sustainable Farming",
      titleEng: "Sustainable Farming",
      description:
        "Promoting sustainable agriculture through environmentally friendly machinery.",
      gradient: "from-green-600 to-emerald-700",
      bg: "from-green-50 to-emerald-100",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 text-gray-900 min-h-screen">
      {/* Traditional Indian Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Traditional Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              radial-gradient(circle at 25% 25%, #f97316 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #dc2626 2px, transparent 2px),
              radial-gradient(circle at 25% 75%, #059669 2px, transparent 2px),
              radial-gradient(circle at 75% 25%, #2563eb 2px, transparent 2px)
            `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Floating Machinery Elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-300 rounded-lg rotate-12 opacity-60"
            style={{
              transform: `translateY(${scrollY * 0.2}px) rotate(12deg)`,
            }}
          />
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-60"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          />
          <div
            className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg -rotate-12 opacity-60"
            style={{
              transform: `translateY(${scrollY * 0.1}px) rotate(-12deg)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-12">
            {/* Traditional Header Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-lg border-2 border-amber-400">
              <Factory className="w-5 h-5" />
              Established 2005 • Symbol of Quality
            </div>

            <h1 className="text-6xl lg:text-8xl font-black mb-6 text-gray-900 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Legacy
              </span>
            </h1>

            <div className="flex items-center justify-center gap-6 mb-10">
              <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            </div>
          </div>

          <p className="text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-16 font-medium">
            An unparalleled journey from 2005 to today - from local
            manufacturing to a global agricultural revolution.
            <br />
            The glorious story of{" "}
            <span className="font-bold text-amber-700">
              Shri Shyam Engineering
            </span>{" "}
            and our brand
            <span className="font-bold text-green-700 mx-2">
              Ujjawal Farming
            </span>
            .
          </p>

          {/* Enhanced Stats Grid with Indian Touch */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-amber-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:border-amber-300"
              >
                <stat.icon
                  className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                />
                <div className="text-4xl font-black mb-2 text-gray-800">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-gray-600 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  {stat.labelEng}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section with Indian Elements */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Vision & Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our contribution and resolve in the agricultural revolution
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Vision */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  Our Vision
                </h3>
                <h4 className="text-lg font-semibold text-blue-700 mb-4">
                  Our Vision
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  To become the world's most trusted agricultural machinery
                  company. To transform traditional farming into a modern,
                  sustainable, and profitable business by providing advanced
                  technology to farmers.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 shadow-xl border-2 border-green-200 hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  Our Mission
                </h3>
                <h4 className="text-lg font-semibold text-green-700 mb-4">
                  Our Mission
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  To provide excellent agricultural machinery and engineering
                  solutions that exceed customer expectations. To contribute to
                  global food security and sustainable agriculture.
                </p>
              </div>
            </div>

            {/* Founder */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-8 shadow-xl border-2 border-amber-200 hover:shadow-2xl transition-all duration-500">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-amber-200">
                    <span className="text-2xl font-black text-white">M</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    Maliram Ji Jangid
                  </h4>
                  <p className="text-amber-700 font-semibold mb-2">
                    Founder & Visionary Leader
                  </p>
                  <p className="text-sm text-gray-600">
                    Founder & Visionary Leader
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">
                  Whose strong determination and innovation transformed a small
                  dream into a global agricultural revolution. A true servant of
                  Indian agriculture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Journey Timeline */}
      <section className="py-24 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-700 to-orange-800 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-lg">
              <Calendar className="w-5 h-5" />
              2005 - 2025 • A Saga of Growth
            </div>
            <h2 className="text-6xl lg:text-7xl font-black mb-8 text-gray-900">
              Our{" "}
              <span className="bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Two decades of continuous advancement, transformative growth, and
              excellence - the journey from local manufacturing to global
              agricultural technology leadership
            </p>
          </div>

          <div className="relative">
            {/* Central Decorative Line with Indian Pattern */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full rounded-full bg-gradient-to-b from-amber-500  to-red-500 shadow-lg"></div>
            {/* Traditional Pattern Overlay */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-full opacity-20">
              <div
                className="w-full h-full bg-repeat-y"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(251, 146, 60, 0.3) 20px, rgba(251, 146, 60, 0.3) 40px)`,
                }}
              />
            </div>

            {journeyMilestones.map((milestone, index) => (
              <div key={index} className="relative mb-24 last:mb-0">
                {/* Enhanced Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 z-20">
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${milestone.color} shadow-2xl flex items-center justify-center border-4 border-white ring-4 ring-amber-200`}
                  >
                    <milestone.icon className="w-12 h-12 text-white" />
                  </div>
                  {/* Year Badge with Traditional Design */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`bg-gradient-to-r ${milestone.color} text-white px-6 py-3 rounded-full text-base font-black shadow-lg border-2 border-white`}
                    >
                      {milestone.year}
                    </div>
                  </div>
                </div>

                {/* Content Card - Alternating Layout */}
                <div
                  className={`flex ${
                    index % 2 === 0
                      ? "justify-start pr-1/2"
                      : "justify-end pl-1/2"
                  }`}
                >
                  <div
                    className={`w-full max-w-lg ${
                      index % 2 === 0 ? "mr-16" : "ml-16"
                    }`}
                  >
                    <div
                      className={`bg-gradient-to-br ${
                        milestone.bgColor
                      } rounded-3xl p-8 shadow-2xl border-2 border-white/80 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 ${
                        index % 2 === 1 ? "text-right" : ""
                      }`}
                    >
                      {/* Traditional Header Design */}
                      <div
                        className={`mb-6 ${
                          index % 2 === 1 ? "text-right" : ""
                        }`}
                      >
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-600 mb-4">
                          {milestone.titleEng}
                        </h4>
                        <div
                          className={`flex items-center gap-3 ${
                            index % 2 === 1 ? "justify-end" : ""
                          }`}
                        >
                          <div
                            className={`${index % 2 === 1 ? "order-2" : ""}`}
                          >
                            <ArrowRight
                              className={`w-6 h-6 text-gray-400 ${
                                index % 2 === 1 ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        {milestone.description}
                      </p>

                      {/* Traditional Decorative Element */}
                      <div
                        className={`flex ${
                          index % 2 === 1 ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div className="flex gap-2">
                          <div
                            className={`h-2 w-2 bg-gradient-to-r ${milestone.color} rounded-full`}
                          ></div>
                          <div
                            className={`h-2 w-8 bg-gradient-to-r ${milestone.color} rounded-full`}
                          ></div>
                          <div
                            className={`h-2 w-2 bg-gradient-to-r ${milestone.color} rounded-full`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Values Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 text-gray-900">
              Core{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that shape our success and inspire excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${value.bg} rounded-3xl p-10 shadow-xl border-2 border-white/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}
              >
                <div className="flex items-start gap-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white`}
                  >
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-600 mb-4">
                      {value.titleEng}
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      {value.description}
                    </p>
                    <div className="flex gap-2">
                      <div
                        className={`h-1 w-4 bg-gradient-to-r ${value.gradient} rounded-full`}
                      ></div>
                      <div
                        className={`h-1 w-12 bg-gradient-to-r ${value.gradient} rounded-full`}
                      ></div>
                      <div
                        className={`h-1 w-4 bg-gradient-to-r ${value.gradient} rounded-full`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white relative overflow-hidden">
        {/* Traditional Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px),
              repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 40px)
            `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-white">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Farming
            </span>{" "}
            Today!
          </h2>
          <p className="text-xl text-amber-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join the modern agriculture revolution with Ujjawal Farming.
            Experience over 20 years of engineering expertise and the trust of
            farmers in 50+ countries.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg border-2 border-amber-400">
              <span className="relative z-10 flex items-center gap-3">
                <Factory className="w-6 h-6" />
                View Our Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="group px-10 py-5 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white font-bold rounded-2xl border-2 border-white/30 transition-all duration-300 transform hover:scale-105 text-lg">
              <span className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                Contact Us
              </span>
            </button>
          </div>

          {/* Trust Indicators with English */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black text-amber-400 mb-2">
                <Shield className="w-10 h-10 mx-auto text-amber-400 mb-2" />
                ISO Certified
              </div>
              <p className="text-sm text-amber-200">ISO Certified</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-amber-400 mb-2">
                <Star className="w-10 h-10 mx-auto text-amber-400 mb-2" />
                5-Star Rated
              </div>
              <p className="text-sm text-amber-200">5-Star Rated</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-amber-400 mb-2">
                <Truck className="w-10 h-10 mx-auto text-amber-400 mb-2" />
                Reliable Delivery
              </div>
              <p className="text-sm text-amber-200">Reliable Delivery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
