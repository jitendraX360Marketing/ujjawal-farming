"use client";
import React, { useState, useEffect } from "react";
import {
  Globe,
  Truck,
  Shield,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Factory,
  Star,
  Package,
  FileText,
  CreditCard,
  Ship,
  Headphones,
  Target,
  Settings,
  ChevronDown,
  ChevronRight,
  Download,
  MessageCircle,
  Calculator,
} from "lucide-react";

export default function ExportPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const exportProcess = [
    {
      id: 1,
      title: "Initial Inquiry & Contact",
      description:
        "Connect with us via phone, email, or our online form. Share your machinery requirements, quantity, and destination.",
      duration: "1-2 Days",
      icon: Phone,
      color: "from-blue-600 to-indigo-700",
      bgColor: "from-blue-50 to-indigo-100",
      details: [
        "Share specific machinery needs",
        "Provide destination country & port",
        "Discuss quantity and timeline",
        "Initial technical consultation",
      ],
    },
    {
      id: 2,
      title: "Product Consultation",
      description:
        "Our export specialists will guide you to select the right machinery for your needs and local conditions.",
      duration: "2-3 Days",
      icon: Settings,
      color: "from-green-600 to-emerald-700",
      bgColor: "from-green-50 to-emerald-100",
      details: [
        "Detailed product catalog review",
        "Technical specifications alignment",
        "Customization options",
        "Local compliance check",
      ],
    },
    {
      id: 3,
      title: "Quotation & Pricing",
      description:
        "Receive a transparent quotation, including machinery cost, shipping, insurance, and all applicable charges.",
      duration: "1-2 Days",
      icon: Calculator,
      color: "from-amber-600 to-orange-700",
      bgColor: "from-amber-50 to-orange-100",
      details: [
        "Comprehensive cost breakdown",
        "FOB/CIF pricing options",
        "Shipping & insurance details",
        "Payment terms & conditions",
      ],
    },
    {
      id: 4,
      title: "Meeting & Finalization",
      description:
        "Schedule a virtual meeting or factory visit. Review demonstrations, finalize specifications, and build trust.",
      duration: "3-5 Days",
      icon: Users,
      color: "from-purple-600 to-pink-700",
      bgColor: "from-purple-50 to-pink-100",
      details: [
        "Live product demonstration",
        "Virtual/physical factory tour",
        "Quality certification review",
        "After-sales support discussion",
      ],
    },
    {
      id: 5,
      title: "Order & Documentation",
      description:
        "Sign the purchase agreement and complete all necessary export documentation and certificates.",
      duration: "2-3 Days",
      icon: FileText,
      color: "from-red-600 to-rose-700",
      bgColor: "from-red-50 to-rose-100",
      details: [
        "Purchase order confirmation",
        "Export documentation prep.",
        "Quality certificates provision",
        "Compliance documentation",
      ],
    },
    {
      id: 6,
      title: "Payment Processing",
      description:
        "Secure payment via Letter of Credit, Wire Transfer, or other mutually agreed methods.",
      duration: "3-7 Days",
      icon: CreditCard,
      color: "from-teal-600 to-cyan-700",
      bgColor: "from-teal-50 to-cyan-100",
      details: [
        "Multiple secure payment options",
        "Transaction processing",
        "Payment confirmation",
        "Financial documentation",
      ],
    },
    {
      id: 7,
      title: "Manufacturing & QC",
      description:
        "Your machinery enters production with regular updates and rigorous 99% quality checks before dispatch.",
      duration: "15-30 Days",
      icon: Factory,
      color: "from-indigo-600 to-blue-700",
      bgColor: "from-indigo-50 to-blue-100",
      details: [
        "Production progress updates",
        "Quality assurance testing",
        "Pre-dispatch inspection",
        "Performance verification",
      ],
    },
    {
      id: 8,
      title: "Packaging & Dispatch",
      description:
        "Expert international packaging, full documentation, and dispatch from our facility to your nearest port.",
      duration: "3-5 Days",
      icon: Package,
      color: "from-orange-600 to-red-700",
      bgColor: "from-orange-50 to-red-100",
      details: [
        "Export-grade packaging",
        "Loading & container stuffing",
        "Final documentation",
        "Dispatch confirmation",
      ],
    },
    {
      id: 9,
      title: "International Shipping",
      description:
        "Professional logistics partners ensure safe transportation with real-time tracking until delivery.",
      duration: "15-45 Days",
      icon: Ship,
      color: "from-emerald-600 to-teal-700",
      bgColor: "from-emerald-50 to-teal-100",
      details: [
        "Professional logistics handling",
        "Real-time shipment tracking",
        "Comprehensive insurance",
        "Port clearance assistance",
      ],
    },
    {
      id: 10,
      title: "Delivery & After-Sales",
      description:
        "Successful delivery at destination with complete after-sales support: installation, training, and warranty.",
      duration: "Ongoing",
      icon: Headphones,
      color: "from-violet-600 to-purple-700",
      bgColor: "from-violet-50 to-purple-100",
      details: [
        "Installation support",
        "Operator training",
        "Warranty services",
        "24/7 technical support",
      ],
    },
  ];

  const exportCountries = [
    { name: "United States", flag: "🇺🇸", customers: "500+", popular: true },
    { name: "Canada", flag: "🇨🇦", customers: "300+", popular: true },
    { name: "United Kingdom", flag: "🇬🇧", customers: "400+", popular: true },
    { name: "Germany", flag: "🇩🇪", customers: "350+", popular: true },
    { name: "Australia", flag: "🇦🇺", customers: "450+", popular: true },
    { name: "Brazil", flag: "🇧🇷", customers: "600+", popular: true },
    { name: "Argentina", flag: "🇦🇷", customers: "200+", popular: false },
    { name: "South Africa", flag: "🇿🇦", customers: "250+", popular: false },
    { name: "Kenya", flag: "🇰🇪", customers: "180+", popular: false },
    { name: "Nigeria", flag: "🇳🇬", customers: "220+", popular: false },
    { name: "UAE", flag: "🇦🇪", customers: "300+", popular: true },
    { name: "Saudi Arabia", flag: "🇸🇦", customers: "150+", popular: false },
  ];

  const exportStats = [
    {
      number: "50+",
      label: "Countries Served",
      icon: Globe,
      color: "text-blue-700",
    },
    {
      number: "5000+",
      label: "Intl. Customers",
      icon: Users,
      color: "text-green-700",
    },
    {
      number: "99%",
      label: "On-Time Delivery",
      icon: Clock,
      color: "text-amber-700",
    },
    {
      number: "15+",
      label: "Years Export Exp.",
      icon: Award,
      color: "text-red-700",
    },
  ];

  const exportBenefits = [
    {
      icon: Shield,
      title: "Certified Quality",
      description:
        "ISO certified manufacturing ensures rigorous testing and 99% quality standards for every exported machine.",
      color: "from-blue-600 to-indigo-700",
    },
    {
      icon: Truck,
      title: "Global Logistics Network",
      description:
        "Our professional logistics network guarantees safe and timely delivery to any part of the world.",
      color: "from-green-600 to-emerald-700",
    },
    {
      icon: Headphones,
      title: "24/7 Global Support",
      description:
        "Round-the-clock technical and customer service, available in multiple languages for our international clients.",
      color: "from-amber-600 to-orange-700",
    },
    {
      icon: Star,
      title: "Competitive Pricing",
      description:
        "Access best-in-class machinery at highly competitive prices, with fully transparent, no-hidden-cost pricing.",
      color: "from-red-600 to-rose-700",
    },
  ];

  const faqs = [
    {
      question: "What are your international payment terms?",
      answer:
        "We accept various secure payment methods including Letter of Credit (L/C) and Wire Transfer (T/T). Typically, we require 30% advance payment and 70% before shipment.",
    },
    {
      question: "What is the international delivery timeline?",
      answer:
        "Total delivery time typically ranges from 25-60 days, including manufacturing (15-30 days) and shipping (15-45 days, destination dependent). We provide regular updates.",
    },
    {
      question: "Do you offer installation & training abroad?",
      answer:
        "Yes, we provide comprehensive installation support, operator training, and technical guidance. Our technicians can visit your location or provide detailed remote assistance.",
    },
    {
      question: "What certifications do exported machines have?",
      answer:
        "All our exported machinery is ISO certified, includes CE marking (for European markets), and holds other relevant certifications as per destination country regulations.",
    },
    {
      question: "How is international warranty & after-sales service handled?",
      answer:
        "We offer comprehensive warranty coverage and a global network of authorized service partners. We also provide remote technical support and worldwide spare parts shipping.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 text-gray-900 min-h-screen font-sans">
      {/* --- */}
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      >
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

        {/* Floating Elements (No Parallax) - Subtly adjusted sizes/opacity */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-28 h-28 bg-gradient-to-br from-amber-200/50 to-orange-300/50 rounded-lg rotate-12 opacity-50" />
          <div className="absolute top-32 right-16 w-20 h-20 bg-gradient-to-br from-green-200/50 to-emerald-300/50 rounded-full opacity-50" />
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-200/50 to-indigo-300/50 rounded-lg -rotate-12 opacity-50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-md border-2 border-amber-400">
              <Globe className="w-4 h-4" />
              Global Exports • Trusted Worldwide
            </div>

            <h1 className="text-5xl lg:text-7xl font-black mb-4 text-gray-900 leading-tight">
              Global{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Machinery
              </span>
              <br />
              Exports
            </h1>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 bg-amber-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              </div>
              <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            </div>
          </div>

          <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
            From India to the World — Premium agricultural machinery exports to
            over 50 countries. Experience seamless international procurement
            with{" "}
            <span className="font-bold text-amber-700">
              Shri Shyam Engineering
            </span>
            .
          </p>

          {/* Export Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-12">
            {exportStats.map((stat, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-amber-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-amber-300"
              >
                <stat.icon
                  className={`w-10 h-10 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                />
                <div className="text-3xl font-black mb-1 text-gray-800">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl text-base border-2 border-amber-400">
              <span className="relative z-10 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Start Export Inquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-gray-900 font-bold rounded-xl border-2 border-gray-300 transition-all duration-300 transform hover:scale-105 text-base">
              <span className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export Catalog
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* --- */}
      {/* Export Process Timeline */}
      <section
        id="export-process-section"
        className="py-20 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-700 to-orange-800 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-md">
              <Target className="w-4 h-4" />
              Step-by-Step Process • Simple & Transparent
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Export{" "}
              <span className="bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From inquiry to delivery — our streamlined 10-step process ensures
              seamless international machinery procurement.
            </p>
          </div>

          <div className="relative">
            {/* Central Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full rounded-full bg-gradient-to-b from-amber-500 to-red-500 shadow-sm"></div>

            {exportProcess.map((step, index) => (
              <div key={step.id} className="relative mb-20 last:mb-0">
                {/* Step Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3 z-20">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center border-3 border-white ring-3 ring-amber-200 cursor-pointer hover:scale-105 transition-transform duration-300`}
                    onClick={() =>
                      setActiveStep(activeStep === index ? -1 : index)
                    }
                  >
                    <step.icon className="w-9 h-9 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`bg-gradient-to-r ${step.color} text-white px-5 py-2.5 rounded-full text-sm font-black shadow-md border-2 border-white`}
                    >
                      Step {step.id}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
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
                    }`}
                  >
                    <div
                      className={`bg-gradient-to-br ${
                        step.bgColor
                      } rounded-2xl p-7 shadow-lg border border-white/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                        index % 2 === 1 ? "text-right" : ""
                      }`}
                    >
                      <div
                        className={`mb-5 ${
                          index % 2 === 1 ? "text-right" : ""
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div
                            className={`flex items-center gap-1.5 ${
                              index % 2 === 1 ? "flex-row-reverse" : ""
                            }`}
                          >
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-xs font-bold text-gray-600">
                              {step.duration}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1.5">
                          {step.title}
                        </h3>
                        {/* Removed Hindi title */}
                      </div>

                      <p className="text-base text-gray-700 leading-relaxed mb-5">
                        {step.description}
                      </p>

                      {/* Expandable Details */}
                      {activeStep === index && (
                        <div className="bg-white/50 rounded-lg p-5 mb-5 border border-white/80">
                          <h5 className="font-bold text-gray-800 text-base mb-3">
                            Key Activities:
                          </h5>
                          <ul className="space-y-1.5">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div
                        className={`flex ${
                          index % 2 === 1 ? "justify-end" : "justify-start"
                        }`}
                      >
                        <button
                          onClick={() =>
                            setActiveStep(activeStep === index ? -1 : index)
                          }
                          className="flex items-center gap-1.5 text-gray-600 hover:text-gray-800 font-semibold transition-colors duration-300 text-sm"
                        >
                          {activeStep === index ? (
                            <>
                              Less Details{" "}
                              <ChevronDown className="w-3.5 h-3.5" />
                            </>
                          ) : (
                            <>
                              More Details{" "}
                              <ChevronRight className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
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
      {/* Export Countries Section */}
      <section id="countries-served-section" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 text-gray-900">
              Countries We{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Serve
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted machinery supplier to farmers across 6 continents.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-12">
            {exportCountries.map((country, index) => (
              <div
                key={index}
                className={`group p-5 rounded-xl shadow-md border transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                  country.popular
                    ? "bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200 hover:shadow-lg hover:border-amber-300"
                    : "bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:shadow-lg hover:border-gray-300"
                }`}
                onClick={() => setSelectedCountry(country.name)}
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">{country.flag}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">
                    {country.name}
                  </h3>
                  <p className="text-gray-600 text-xs mb-2">
                    {country.customers} Happy Customers
                  </p>
                  {country.popular && (
                    <span className="bg-amber-500 text-white px-2.5 py-0.5 rounded-full text-xs font-bold">
                      Popular
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 text-base mb-5">
              Don't see your country listed? We ship worldwide!
            </p>
            <button className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-8 py-4 rounded-xl font-bold hover:from-green-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-base">
              Check Shipping to Your Country
            </button>
          </div>
        </div>
      </section>

      {/* --- */}
      {/* Export Benefits */}
      <section
        id="export-benefits-section"
        className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 text-gray-900">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Our Exports
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive benefits make us the preferred choice for
              international machinery procurement.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {exportBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md border-2 border-white`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
