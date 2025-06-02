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
  Leaf,
  Star,
  Package,
  FileText,
  CreditCard,
  Ship,
  Plane,
  Calculator,
  Calendar,
  HeadphonesIcon,
  Target,
  TrendingUp,
  Settings,
  ChevronDown,
  ChevronRight,
  Download,
  Eye,
  MessageCircle,
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
      title: "Initial Contact & Inquiry",
      titleHindi: "प्रारंभिक संपर्क और पूछताछ",
      description:
        "Reach out to us through any channel - phone, email, or our online form. Share your machinery requirements, quantity, and destination country.",
      duration: "1-2 Days",
      icon: Phone,
      color: "from-blue-600 to-indigo-700",
      bgColor: "from-blue-50 to-indigo-100",
      details: [
        "Share your specific machinery requirements",
        "Provide destination country and port details",
        "Discuss quantity and timeline expectations",
        "Initial technical consultation",
      ],
    },
    {
      id: 2,
      title: "Product Consultation & Selection",
      titleHindi: "उत्पाद परामर्श और चयन",
      description:
        "Our export specialists will guide you through our product range, help select the right machinery for your needs and local conditions.",
      duration: "2-3 Days",
      icon: Settings,
      color: "from-green-600 to-emerald-700",
      bgColor: "from-green-50 to-emerald-100",
      details: [
        "Detailed product catalog presentation",
        "Technical specifications review",
        "Customization options discussion",
        "Local regulation compliance check",
      ],
    },
    {
      id: 3,
      title: "Quotation & Pricing",
      titleHindi: "कोटेशन और मूल्य निर्धारण",
      description:
        "Receive detailed quotation including machinery cost, shipping, insurance, and all applicable charges. Transparent pricing with no hidden costs.",
      duration: "1-2 Days",
      icon: Calculator,
      color: "from-amber-600 to-orange-700",
      bgColor: "from-amber-50 to-orange-100",
      details: [
        "Comprehensive cost breakdown",
        "FOB/CIF pricing options",
        "Shipping and insurance costs",
        "Payment terms and conditions",
      ],
    },
    {
      id: 4,
      title: "Virtual/Physical Meeting",
      titleHindi: "वर्चुअल/भौतिक मीटिंग",
      description:
        "Schedule a detailed discussion via video call or visit our facility. Review product demonstrations, finalize specifications, and build trust.",
      duration: "3-5 Days",
      icon: Users,
      color: "from-purple-600 to-pink-700",
      bgColor: "from-purple-50 to-pink-100",
      details: [
        "Live product demonstration",
        "Factory tour (virtual/physical)",
        "Quality certification review",
        "After-sales support discussion",
      ],
    },
    {
      id: 5,
      title: "Order Confirmation & Documentation",
      titleHindi: "ऑर्डर पुष्टि और दस्तावेजीकरण",
      description:
        "Sign the purchase agreement, complete documentation, and provide necessary certificates. All export documentation prepared.",
      duration: "2-3 Days",
      icon: FileText,
      color: "from-red-600 to-rose-700",
      bgColor: "from-red-50 to-rose-100",
      details: [
        "Purchase order confirmation",
        "Export documentation preparation",
        "Quality certificates provision",
        "Compliance documentation",
      ],
    },
    {
      id: 6,
      title: "Payment Processing",
      titleHindi: "भुगतान प्रक्रिया",
      description:
        "Secure payment processing through multiple options - Letter of Credit, Wire Transfer, or other mutually agreed methods.",
      duration: "3-7 Days",
      icon: CreditCard,
      color: "from-teal-600 to-cyan-700",
      bgColor: "from-teal-50 to-cyan-100",
      details: [
        "Multiple payment options available",
        "Secure transaction processing",
        "Payment confirmation",
        "Financial documentation",
      ],
    },
    {
      id: 7,
      title: "Manufacturing & Quality Check",
      titleHindi: "निर्माण और गुणवत्ता जांच",
      description:
        "Your machinery goes into production with regular updates. Rigorous quality checks ensure 99% quality standards before dispatch.",
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
      titleHindi: "पैकेजिंग और प्रेषण",
      description:
        "Expert packaging for international shipping, complete documentation, and dispatch from our facility to the nearest port.",
      duration: "3-5 Days",
      icon: Package,
      color: "from-orange-600 to-red-700",
      bgColor: "from-orange-50 to-red-100",
      details: [
        "Export-grade packaging",
        "Loading and container stuffing",
        "Final documentation",
        "Dispatch confirmation",
      ],
    },
    {
      id: 9,
      title: "International Shipping",
      titleHindi: "अंतर्राष्ट्रीय शिपिंग",
      description:
        "Professional logistics partners ensure safe transportation. Real-time tracking and regular updates until delivery at your port.",
      duration: "15-45 Days",
      icon: Ship,
      color: "from-emerald-600 to-teal-700",
      bgColor: "from-emerald-50 to-teal-100",
      details: [
        "Professional logistics handling",
        "Real-time shipment tracking",
        "Insurance coverage",
        "Port clearance assistance",
      ],
    },
    {
      id: 10,
      title: "Delivery & After-Sales Support",
      titleHindi: "डिलीवरी और बिक्री के बाद सहायता",
      description:
        "Successful delivery at destination with complete after-sales support including installation guidance, training, and warranty services.",
      duration: "Ongoing",
      icon: HeadphonesIcon,
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
      labelHindi: "देशों की सेवा",
      icon: Globe,
      color: "text-blue-700",
    },
    {
      number: "5000+",
      label: "International Customers",
      labelHindi: "अंतर्राष्ट्रीय ग्राहक",
      icon: Users,
      color: "text-green-700",
    },
    {
      number: "99%",
      label: "On-Time Delivery",
      labelHindi: "समय पर डिलीवरी",
      icon: Clock,
      color: "text-amber-700",
    },
    {
      number: "15+",
      label: "Years Export Experience",
      labelHindi: "साल निर्यात अनुभव",
      icon: Award,
      color: "text-red-700",
    },
  ];

  const exportBenefits = [
    {
      icon: Shield,
      title: "Quality Assurance",
      titleHindi: "गुणवत्ता आश्वासन",
      description:
        "ISO certified manufacturing with 99% quality standards. Every machine undergoes rigorous testing before export.",
      color: "from-blue-600 to-indigo-700",
    },
    {
      icon: Truck,
      title: "Global Logistics",
      titleHindi: "वैश्विक लॉजिस्टिक्स",
      description:
        "Professional logistics network ensuring safe and timely delivery to any corner of the world.",
      color: "from-green-600 to-emerald-700",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      titleHindi: "24/7 सहायता",
      description:
        "Round-the-clock technical support and customer service in multiple languages for international customers.",
      color: "from-amber-600 to-orange-700",
    },
    {
      icon: Star,
      title: "Competitive Pricing",
      titleHindi: "प्रतिस्पर्धी मूल्य निर्धारण",
      description:
        "Best-in-class machinery at competitive prices with transparent pricing and no hidden costs.",
      color: "from-red-600 to-rose-700",
    },
  ];

  const faqs = [
    {
      question: "What are your payment terms for international orders?",
      questionHindi: "अंतर्राष्ट्रीय ऑर्डर के लिए आपकी भुगतान शर्तें क्या हैं?",
      answer:
        "We accept various payment methods including Letter of Credit (L/C), Wire Transfer (T/T), and other mutually agreed secure payment methods. Typically, we require 30% advance payment and 70% before shipment.",
    },
    {
      question: "How long does it take to deliver machinery internationally?",
      questionHindi:
        "अंतर्राष्ट्रीय स्तर पर मशीनरी की डिलीवरी में कितना समय लगता है?",
      answer:
        "Total delivery time ranges from 25-60 days including manufacturing (15-30 days) and shipping (15-45 days depending on destination). We provide regular updates throughout the process.",
    },
    {
      question: "Do you provide installation and training services abroad?",
      questionHindi:
        "क्या आप विदेश में स्थापना और प्रशिक्षण सेवाएं प्रदान करते हैं?",
      answer:
        "Yes, we provide comprehensive installation support, operator training, and technical guidance. We can arrange for our technicians to visit your location or provide detailed remote assistance.",
    },
    {
      question: "What certifications do your exported machines have?",
      questionHindi: "आपकी निर्यातित मशीनों के पास कौन से प्रमाणपत्र हैं?",
      answer:
        "All our exported machinery comes with ISO certification, CE marking (for European markets), and other relevant certifications as required by the destination country's regulations.",
    },
    {
      question:
        "How do you handle warranty and after-sales service internationally?",
      questionHindi:
        "आप अंतर्राष्ट्रीय स्तर पर वारंटी और बिक्री के बाद की सेवा कैसे संभालते हैं?",
      answer:
        "We provide comprehensive warranty coverage and maintain a network of authorized service partners globally. Additionally, we offer remote technical support and can ship spare parts worldwide.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 text-gray-900 min-h-screen">
      {/* Hero Section */}
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

        {/* Floating Elements */}
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
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-lg border-2 border-amber-400">
              <Globe className="w-5 h-5" />
              Global Exports • Trusted Worldwide
            </div>

            <h1 className="text-6xl lg:text-8xl font-black mb-6 text-gray-900 leading-tight">
              Global{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Machinery
              </span>
              <br />
              Exports
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
            From India to the World - Premium agricultural machinery exports to
            50+ countries.
            <br />
            Experience seamless international procurement with{" "}
            <span className="font-bold text-amber-700">
              Shri Shyam Engineering
            </span>
            .
          </p>

          {/* Export Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {exportStats.map((stat, index) => (
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
                  {stat.labelHindi}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg border-2 border-amber-400">
              <span className="relative z-10 flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Start Export Inquiry
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="group px-10 py-5 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-gray-900 font-bold rounded-2xl border-2 border-gray-300 transition-all duration-300 transform hover:scale-105 text-lg">
              <span className="flex items-center gap-3">
                <Download className="w-6 h-6" />
                Export Catalog
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Export Process Timeline */}
      <section className="py-24 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-700 to-orange-800 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-lg">
              <Target className="w-5 h-5" />
              Step-by-Step Process • Simple & Transparent
            </div>
            <h2 className="text-6xl lg:text-7xl font-black mb-8 text-gray-900">
              Export{" "}
              <span className="bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From initial inquiry to final delivery - our streamlined 10-step
              process ensures smooth international machinery procurement
            </p>
          </div>

          <div className="relative">
            {/* Central Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full rounded-full bg-gradient-to-b from-amber-500 to-red-500 shadow-lg"></div>

            {exportProcess.map((step, index) => (
              <div key={step.id} className="relative mb-24 last:mb-0">
                {/* Step Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 z-20">
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} shadow-2xl flex items-center justify-center border-4 border-white ring-4 ring-amber-200 cursor-pointer hover:scale-110 transition-transform duration-300`}
                    onClick={() =>
                      setActiveStep(activeStep === index ? -1 : index)
                    }
                  >
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`bg-gradient-to-r ${step.color} text-white px-4 py-2 rounded-full text-sm font-black shadow-lg border-2 border-white`}
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
                    className={`w-full max-w-lg ${
                      index % 2 === 0 ? "mr-16" : "ml-16"
                    }`}
                  >
                    <div
                      className={`bg-gradient-to-br ${
                        step.bgColor
                      } rounded-3xl p-8 shadow-2xl border-2 border-white/80 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 ${
                        index % 2 === 1 ? "text-right" : ""
                      }`}
                    >
                      <div
                        className={`mb-6 ${
                          index % 2 === 1 ? "text-right" : ""
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`flex items-center gap-2 ${
                              index % 2 === 1 ? "flex-row-reverse" : ""
                            }`}
                          >
                            <Clock className="w-5 h-5 text-gray-500" />
                            <span className="text-sm font-bold text-gray-600">
                              {step.duration}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-600 mb-4">
                          {step.titleHindi}
                        </h4>
                      </div>

                      <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        {step.description}
                      </p>

                      {/* Expandable Details */}
                      {activeStep === index && (
                        <div className="bg-white/50 rounded-2xl p-6 mb-6 border border-white/80">
                          <h5 className="font-bold text-gray-800 mb-4">
                            Key Activities:
                          </h5>
                          <ul className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{detail}</span>
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
                          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold transition-colors duration-300"
                        >
                          {activeStep === index ? (
                            <>
                              Less Details <ChevronDown className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              More Details <ChevronRight className="w-4 h-4" />
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

      {/* Export Countries Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 text-gray-900">
              Countries We{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Serve
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted machinery supplier to farmers across 6 continents
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {exportCountries.map((country, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl shadow-lg border-2 transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                  country.popular
                    ? "bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200 hover:shadow-xl hover:border-amber-300"
                    : "bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:shadow-xl hover:border-gray-300"
                }`}
                onClick={() => setSelectedCountry(country.name)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{country.flag}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {country.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {country.customers} Happy Customers
                  </p>
                  {country.popular && (
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Don't see your country? We ship worldwide!
            </p>
            <button className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-8 py-4 rounded-xl font-bold hover:from-green-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Check Shipping to Your Country
            </button>
          </div>
        </div>
      </section>

      {/* Export Benefits */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 text-gray-900">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Our Exports
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive benefits that make us the preferred choice for
              international machinery procurement
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {exportBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-start gap-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                  >
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-600 mb-4">
                      {benefit.titleHindi}
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 text-gray-900">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common queries about our international export
              services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border-2 border-amber-100 overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-8 text-left focus:outline-none"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-md text-gray-600">{faq.questionHindi}</p>
                  </div>
                  {expandedFaq === index ? (
                    <ChevronDown className="w-6 h-6 text-amber-600" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-8 pb-8 pt-4 border-t border-amber-100 bg-amber-50">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 px-6 bg-gradient-to-r from-amber-600 to-orange-700 text-white text-center shadow-inner">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black mb-6 leading-tight">
            Ready to Expand Your Business Globally?
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Contact us today for a personalized export consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="group px-10 py-5 bg-white text-orange-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg flex items-center justify-center gap-3">
              <Phone className="w-6 h-6" />
              Call Us: +91-XXXXXXXXXX
            </button>
            <button className="group px-10 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg flex items-center justify-center gap-3">
              <Mail className="w-6 h-6" />
              Email Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-4">
              Shri Shyam Engineering
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for premium agricultural machinery exports
              worldwide. Committed to quality, reliability, and global reach.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Globe className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Export Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <p className="flex items-center gap-3 text-gray-400 mb-2">
              <MapPin className="w-5 h-5 text-amber-500" />
              [Your Company Address], India
            </p>
            <p className="flex items-center gap-3 text-gray-400 mb-2">
              <Phone className="w-5 h-5 text-amber-500" />
              +91 XXXXXXXXXX
            </p>
            <p className="flex items-center gap-3 text-gray-400 mb-2">
              <Mail className="w-5 h-5 text-amber-500" />
              info@shrishyamengineering.com
            </p>
            <p className="flex items-center gap-3 text-gray-400">
              <Clock className="w-5 h-5 text-amber-500" />
              Mon - Sat: 9:00 AM - 6:00 PM (IST)
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Shri Shyam Engineering. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
