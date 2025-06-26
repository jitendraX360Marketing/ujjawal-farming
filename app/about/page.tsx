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
  Target, // For countries served/vision
  Heart,
  Wrench, // For technical innovation
  Truck, // For delivery/mission
  Settings, // For powder coating/general engineering
  Shield, // For quality assurance
  Phone, // For contact info
  Mail, // For contact info
  MapPin, // For contact info
  CheckCircle, // For 24/7 support
} from "lucide-react";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

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
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const journeyMilestones = [
    {
      year: "2005",
      title: "Foundation & Panel Manufacturing",
      titleEng: "Foundation & Panel Manufacturing",
      description:
        "Maliram Ji Jangid founded Shri Shyam Engineering. We began with industrial panel manufacturing, setting the groundwork for quality.",
      icon: Factory, // Changed to Factory for manufacturing
      color: "from-amber-600 to-orange-700",
      bgColor: "from-amber-50 to-orange-100",
    },
    {
      year: "2008",
      title: "Advanced Coating Facility",
      titleEng: "Powder Coating Plant Setup", // Kept original for clarity
      description:
        "Established a modern powder coating facility, enhancing machinery finishing and durability standards.",
      icon: Settings, // Generic settings/engineering icon
      color: "from-green-600 to-emerald-700",
      bgColor: "from-green-50 to-emerald-100",
    },
    {
      year: "2012",
      title: "Precision Laser Cutting",
      titleEng: "Laser Cutting Technology", // Kept original for clarity
      description:
        "Integrated laser cutting technology, revolutionizing production with unparalleled precision and modern manufacturing capabilities.",
      icon: Cog, // Gear/cog for machinery and precision
      color: "from-blue-600 to-indigo-700",
      bgColor: "from-blue-50 to-indigo-100",
    },
    {
      year: "2018",
      title: "Ujjawal Farming Initiative",
      titleEng: "Ujjawal Farming Launch", // Kept original for clarity
      description:
        "Launched our agricultural machinery line under the 'Ujjawal Farming' brand, providing innovative solutions for modern agriculture.",
      icon: Leaf, // Represents agriculture
      color: "from-teal-600 to-cyan-700",
      bgColor: "from-teal-50 to-cyan-100",
    },
    {
      year: "2025",
      title: "Global Market Leadership",
      titleEng: "Global Leadership", // Kept original for clarity
      description:
        "Today, we stand as a premier agricultural machinery provider, serving over 50 countries globally. A true symbol of Indian quality on the world stage.",
      icon: Award, // Represents achievement
      color: "from-red-600 to-pink-700",
      bgColor: "from-red-50 to-pink-100",
    },
  ];

  const stats = [
    {
      number: "20+",
      label: "Years Expertise",
      labelEng: "Years Experience", // Kept original for clarity
      icon: Calendar,
      color: "text-amber-700",
    },
    {
      number: "50+",
      label: "Countries Served",
      labelEng: "Countries Served",
      icon: Target, // Target for reach/global presence
      color: "text-green-700",
    },
    {
      number: "10K+",
      label: "Satisfied Farmers",
      labelEng: "Happy Farmers", // Kept original for clarity
      icon: Users,
      color: "text-blue-700",
    },
    {
      number: "99%",
      label: "Precision Quality",
      labelEng: "Quality Assurance", // Kept original for clarity
      icon: Shield,
      color: "text-red-700",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer Focus",
      titleEng: "Customer Service", // Kept original for clarity
      description:
        "The success and satisfaction of our farming partners drive every decision we make.",
      gradient: "from-red-600 to-rose-700",
      bg: "from-red-50 to-rose-100",
    },
    {
      icon: Wrench, // Represents engineering/technicality
      title: "Technical Innovation",
      titleEng: "Technical Innovation",
      description:
        "We integrate modern technology with traditional agricultural practices to deliver superior solutions.",
      gradient: "from-blue-600 to-indigo-700",
      bg: "from-blue-50 to-indigo-100",
    },
    {
      icon: Award,
      title: "Unwavering Quality",
      titleEng: "Quality Commitment", // Kept original for clarity
      description:
        "An unwavering commitment to ensuring the highest quality and durability in every machine.",
      gradient: "from-yellow-600 to-amber-700",
      bg: "from-yellow-50 to-amber-100",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      titleEng: "Sustainable Farming", // Kept original for clarity
      description:
        "Promoting sustainable agriculture through the development of environmentally conscious machinery.",
      gradient: "from-green-600 to-emerald-700",
      bg: "from-green-50 to-emerald-100",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 text-gray-900 min-h-screen">
      {/* --- */}
      {/* Traditional Indian Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
        {" "}
        {/* Added vertical padding */}
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
        {/* Floating Machinery Elements (Subtly adjusted sizes and positions) */}
        <div className="absolute inset-0">
          <div
            className="absolute top-16 left-16 w-28 h-28 bg-gradient-to-br from-amber-200/50 to-orange-300/50 rounded-lg rotate-12 opacity-60" // Softer gradient, slightly smaller
            style={{
              transform: `translateY(${scrollY * 0.2}px) rotate(12deg)`,
            }}
          />
          <div
            className="absolute top-32 right-16 w-20 h-20 bg-gradient-to-br from-green-200/50 to-emerald-300/50 rounded-full opacity-60" // Softer gradient, slightly smaller
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          />
          <div
            className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-200/50 to-indigo-300/50 rounded-lg -rotate-12 opacity-60" // Softer gradient, slightly smaller
            style={{
              transform: `translateY(${scrollY * 0.1}px) rotate(-12deg)`,
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-10">
            {" "}
            {/* Reduced bottom margin */}
            {/* Traditional Header Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-md border-2 border-amber-400">
              {" "}
              {/* Reduced padding, smaller icon, softer shadow */}
              <Factory className="w-4 h-4" />
              Established 2005 • Symbol of Quality
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-4 text-gray-900 leading-tight">
              {" "}
              {/* Reduced font size */}
              Our{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Legacy
              </span>
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              {" "}
              {/* Reduced gap and bottom margin */}
              <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>{" "}
              {/* Shorter width */}
              <div className="flex gap-1.5">
                {" "}
                {/* Smaller gap for dots */}
                <div className="w-2.5 h-2.5 bg-amber-500 rounded-full"></div>{" "}
                {/* Smaller dots */}
                <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              </div>
              <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            </div>
          </div>

          <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
            {" "}
            {/* Reduced font size and max-width */}
            An unparalleled journey from 2005 to today — from local
            manufacturing to a global agricultural revolution.
            <br />
            The glorious story of{" "}
            <span className="font-bold text-amber-700">
              Shri Shyam Engineering
            </span>{" "}
            and our brand{" "}
            <span className="font-bold text-green-700 mx-1">
              Ujjawal Farming
            </span>
            .
          </p>

          {/* Enhanced Stats Grid with Indian Touch */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {" "}
            {/* Reduced gap */}
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-amber-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-amber-300" // Reduced padding, less rounded, softer shadow, faster transition
              >
                <stat.icon
                  className={`w-10 h-10 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} // Smaller icon, reduced margin
                />
                <div className="text-3xl font-black mb-1 text-gray-800">
                  {" "}
                  {/* Reduced font size and margin */}
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-gray-600">
                  {" "}
                  {/* Reduced font size */}
                  {stat.label}
                </div>
                {/* <div className="text-xs text-gray-500 uppercase tracking-wide">
                  {stat.labelEng}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}
      {/* Vision & Mission Section with Indian Elements */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-amber-50">
        {" "}
        {/* Reduced vertical padding */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {" "}
            {/* Reduced bottom margin */}
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900">
              {" "}
              {/* Reduced font size */}
              Vision & Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {" "}
              {/* Reduced font size */}
              Our contribution and commitment to the agricultural revolution.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {" "}
            {/* Reduced gap */}
            {/* Vision */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-7 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300">
                {" "}
                {/* Reduced padding, less rounded, softer shadow, faster transition */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center mb-5 shadow-md">
                  {" "}
                  {/* Smaller, less rounded, softer shadow */}
                  <Target className="w-7 h-7 text-white" /> {/* Smaller icon */}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {" "}
                  {/* Reduced font size and margin */}
                  Our Vision
                </h3>
                {/* <h4 className="text-base font-semibold text-blue-700 mb-3">
                  Our Vision
                </h4> */}
                <p className="text-base text-gray-700 leading-relaxed">
                  {" "}
                  {/* Reduced font size */}
                  To become the world's most trusted agricultural machinery
                  company, transforming traditional farming into a modern,
                  sustainable, and profitable business.
                </p>
              </div>
            </div>
            {/* Mission */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-7 shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300">
                {" "}
                {/* Reduced padding, less rounded, softer shadow, faster transition */}
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center mb-5 shadow-md">
                  {" "}
                  {/* Smaller, less rounded, softer shadow */}
                  <Truck className="w-7 h-7 text-white" /> {/* Smaller icon */}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {" "}
                  {/* Reduced font size and margin */}
                  Our Mission
                </h3>
                {/* <h4 className="text-base font-semibold text-green-700 mb-3">
                  Our Mission
                </h4> */}
                <p className="text-base text-gray-700 leading-relaxed">
                  {" "}
                  {/* Reduced font size */}
                  To provide excellent agricultural machinery and engineering
                  solutions that exceed customer expectations, contributing to
                  global food security and sustainable agriculture.
                </p>
              </div>
            </div>
            {/* Founder */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-7 shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300">
                {" "}
                {/* Reduced padding, less rounded, softer shadow, faster transition */}
                <div className="text-center mb-5">
                  {" "}
                  {/* Reduced margin */}
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md border-3 border-amber-200">
                    {" "}
                    {/* Smaller, less rounded, softer shadow, thinner border */}
                    <span className="text-xl font-black text-white">
                      M
                    </span>{" "}
                    {/* Smaller font */}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {" "}
                    {/* Reduced font size and margin */}
                    Maliram Ji Jangid
                  </h4>
                  <p className="text-amber-700 font-semibold text-sm mb-2">
                    {" "}
                    {/* Reduced font size, reduced margin */}
                    Founder & Visionary Leader
                  </p>
                  {/* <p className="text-xs text-gray-600">
                    Founder & Visionary Leader
                  </p> */}
                </div>
                <p className="text-base text-gray-700 leading-relaxed text-center">
                  {" "}
                  {/* Reduced font size */}
                  Whose strong determination and innovation transformed a small
                  dream into a global agricultural revolution, serving Indian
                  agriculture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}
      {/* Traditional Journey Timeline */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        {" "}
        {/* Reduced vertical padding */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {" "}
            {/* Reduced bottom margin */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-700 to-orange-800 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-md">
              {" "}
              {/* Reduced padding, softer shadow */}
              <Calendar className="w-4 h-4" /> {/* Smaller icon */}
              2005 - 2025 • A Saga of Growth
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              {" "}
              {/* Reduced font size */}
              Our{" "}
              <span className="bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {" "}
              {/* Reduced font size */}
              Two decades of continuous advancement, transformative growth, and
              excellence — from local manufacturing to global agricultural
              technology leadership.
            </p>
          </div>

          <div className="relative">
            {/* Central Decorative Line with Indian Pattern */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full rounded-full bg-gradient-to-b from-amber-500  to-red-500 shadow-sm"></div>{" "}
            {/* Thinner, softer shadow */}
            {/* Traditional Pattern Overlay */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-full opacity-15">
              {" "}
              {/* Thinner, less opaque */}
              <div
                className="w-full h-full bg-repeat-y"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 15px, rgba(251, 146, 60, 0.2) 15px, rgba(251, 146, 60, 0.2) 30px)`, // Adjusted pattern density
                }}
              />
            </div>
            {journeyMilestones.map((milestone, index) => (
              <div key={index} className="relative mb-20 last:mb-0">
                {" "}
                {/* Reduced bottom margin */}
                {/* Enhanced Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3 z-20">
                  {" "}
                  {/* Slightly higher position */}
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${milestone.color} shadow-lg flex items-center justify-center border-3 border-white ring-3 ring-amber-200`} // Smaller, softer shadow, thinner borders
                  >
                    <milestone.icon className="w-9 h-9 text-white" />{" "}
                    {/* Smaller icon */}
                  </div>
                  {/* Year Badge with Traditional Design */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    {" "}
                    {/* Adjusted position */}
                    <div
                      className={`bg-gradient-to-r ${milestone.color} text-white px-5 py-2.5 rounded-full text-sm font-black shadow-md border-2 border-white`} // Reduced padding, font size, softer shadow
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
                    className={`w-full max-w-md ${
                      index % 2 === 0 ? "mr-12" : "ml-12"
                    }`} // Reduced margin
                  >
                    <div
                      className={`bg-gradient-to-br ${
                        milestone.bgColor
                      } rounded-2xl p-7 shadow-lg border border-white/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                        index % 2 === 1 ? "text-right" : ""
                      }`} // Less rounded, softer shadow, faster transition
                    >
                      {/* Traditional Header Design */}
                      <div
                        className={`mb-5 ${
                          index % 2 === 1 ? "text-right" : ""
                        }`} // Reduced margin
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-1.5">
                          {" "}
                          {/* Reduced font size and margin */}
                          {milestone.title}
                        </h3>
                        <h4 className="text-base font-semibold text-gray-600 mb-3">
                          {" "}
                          {/* Reduced font size and margin */}
                          {milestone.titleEng}
                        </h4>
                        <div
                          className={`flex items-center gap-2 ${
                            index % 2 === 1 ? "justify-end" : ""
                          }`}
                        >
                          <div
                            className={`${index % 2 === 1 ? "order-2" : ""}`}
                          >
                            <ArrowRight
                              className={`w-5 h-5 text-gray-400 ${
                                index % 2 === 1 ? "rotate-180" : ""
                              }`} // Smaller icon
                            />
                          </div>
                        </div>
                      </div>

                      <p className="text-base text-gray-700 leading-relaxed mb-5">
                        {" "}
                        {/* Reduced font size and margin */}
                        {milestone.description}
                      </p>

                      {/* Traditional Decorative Element */}
                      <div
                        className={`flex ${
                          index % 2 === 1 ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div className="flex gap-1.5">
                          {" "}
                          {/* Reduced gap */}
                          <div
                            className={`h-1.5 w-1.5 bg-gradient-to-r ${milestone.color} rounded-full`} // Smaller dots
                          ></div>
                          <div
                            className={`h-1.5 w-6 bg-gradient-to-r ${milestone.color} rounded-full`} // Shorter bar
                          ></div>
                          <div
                            className={`h-1.5 w-1.5 bg-gradient-to-r ${milestone.color} rounded-full`}
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

      {/* --- */}
      {/* Traditional Values Section */}
      <section className="py-20 px-6 bg-white">
        {" "}
        {/* Reduced vertical padding */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {" "}
            {/* Reduced bottom margin */}
            <h2 className="text-5xl font-black mb-4 text-gray-900">
              {" "}
              {/* Reduced font size */}
              Core{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {" "}
              {/* Reduced font size */}
              The principles that shape our success and inspire excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {" "}
            {/* Reduced gap */}
            {values.map((value, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${value.bg} rounded-2xl p-8 shadow-lg border border-white/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`} // Less rounded, reduced padding, softer shadow, faster transition
              >
                <div className="flex items-start gap-6">
                  {" "}
                  {/* Reduced gap */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md border-2 border-white`} // Smaller, less rounded, softer shadow, less scale on hover
                  >
                    <value.icon className="w-8 h-8 text-white" />{" "}
                    {/* Smaller icon */}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {" "}
                      {/* Reduced font size and margin */}
                      {value.title}
                    </h3>
                    {/* <h4 className="text-base font-semibold text-gray-600 mb-3">
                      {value.titleEng}
                    </h4> */}
                    <p className="text-base text-gray-700 leading-relaxed mb-5">
                      {" "}
                      {/* Reduced font size and margin */}
                      {value.description}
                    </p>
                    <div className="flex gap-1.5">
                      {" "}
                      {/* Reduced gap */}
                      <div
                        className={`h-1.5 w-1.5 bg-gradient-to-r ${value.gradient} rounded-full`}
                      ></div>
                      <div
                        className={`h-1.5 w-6 bg-gradient-to-r ${value.gradient} rounded-full`}
                      ></div>
                      <div
                        className={`h-1.5 w-1.5 bg-gradient-to-r ${value.gradient} rounded-full`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}
      {/* Traditional CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white relative overflow-hidden">
        {" "}
        {/* Reduced vertical padding */}
        {/* Traditional Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,0.1) 15px, rgba(255,255,255,0.1) 30px), /* Adjusted pattern density */
              repeating-linear-gradient(-45deg, transparent, transparent 15px, rgba(255,255,255,0.05) 15px, rgba(255,255,255,0.05) 30px)
            `,
            }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
            {" "}
            {/* Reduced font size */}
            Transform Your{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Farming
            </span>{" "}
            Today!
          </h2>
          <p className="text-lg text-amber-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            {" "}
            {/* Reduced font size and margin */}
            Join the modern agriculture revolution with Ujjawal Farming.
            Experience over 20 years of engineering expertise and the trust of
            farmers in 50+ countries.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            {" "}
            {/* Reduced gap and margin */}
            <button className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl text-base border-2 border-amber-400">
              {" "}
              {/* Reduced padding, less rounded, softer shadow, smaller text */}
              <span className="relative z-10 flex items-center gap-2">
                {" "}
                {/* Reduced gap */}
                <Factory className="w-5 h-5" /> {/* Smaller icon */}
                View Our Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />{" "}
                {/* Smaller icon */}
              </span>
            </button>
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white font-bold rounded-xl border-2 border-white/30 transition-all duration-300 transform hover:scale-105 text-base">
              {" "}
              {/* Reduced padding, less rounded, smaller text */}
              <span className="flex items-center gap-2">
                {" "}
                {/* Reduced gap */}
                <Users className="w-5 h-5" /> {/* Smaller icon */}
                Contact Us
              </span>
            </button>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            {/* Jaipur Unit */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <Phone className="w-8 h-8 text-amber-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-base font-bold text-white mb-1">Call Us</h4>
              <p className="text-amber-100 font-semibold text-sm">
                +91 99295 96124<br />+91 70734 96124
              </p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <Mail className="w-8 h-8 text-amber-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-base font-bold text-white mb-1">Email Us</h4>
              <p className="text-amber-100 font-semibold text-sm">
                info@jaishrishyameng.com
              </p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <MapPin className="w-8 h-8 text-amber-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-base font-bold text-white mb-1">Visit Us</h4>
              <p className="text-amber-100 font-semibold text-sm">
                Jaipur Unit:<br />Near by Bhagwati Nursery Road No 14, VKI, Jaipur, Laxminarayanpura, Rajasthan 302013, India
                <br /><br />Shahpura Unit:<br />Plot No. 277/278 Mangalam Industries Part, Manoharpur, Jaipur, Rajasthan
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 max-w-4xl mx-auto">
            {" "}
            {/* Reduced gap, smaller max-width */}
            <div className="text-center group">
              <Shield className="w-10 h-10 mx-auto text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300" />{" "}
              {/* Smaller icon, reduced margin */}
              <div className="text-xl font-black text-amber-400 mb-0.5">
                ISO
              </div>{" "}
              {/* Reduced font size and margin */}
              <p className="text-xs text-amber-200">Certified</p>{" "}
              {/* Smaller text */}
            </div>
            <div className="text-center group">
              <Star className="w-10 h-10 mx-auto text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-xl font-black text-amber-400 mb-0.5">
                5-Star
              </div>
              <p className="text-xs text-amber-200">Rated</p>
            </div>
            <div className="text-center group">
              <Truck className="w-10 h-10 mx-auto text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-xl font-black text-amber-400 mb-0.5">
                Fast
              </div>
              <p className="text-xs text-amber-200">Delivery</p>
            </div>
            <div className="text-center group">
              <Users className="w-10 h-10 mx-auto text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-xl font-black text-amber-400 mb-0.5">
                10K+
              </div>
              <p className="text-xs text-amber-200">Happy Farmers</p>
            </div>
            <div className="text-center group">
              <CheckCircle className="w-10 h-10 mx-auto text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-xl font-black text-amber-400 mb-0.5">
                24/7
              </div>
              <p className="text-xs text-amber-200">Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
