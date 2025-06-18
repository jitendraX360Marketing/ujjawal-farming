"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin,
  Factory,
  Users,
  Star,
  Shield,
  Truck,
  ArrowRight,
  MessageCircle,
  Globe,
  Award,
  Leaf,
  Clock,
  CheckCircle,
} from "lucide-react";

const CTAFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the quality guarantee of our machines?",
      answer:
        "We offer a 2-year comprehensive warranty and ISO-certified quality, including free servicing and spare parts.",
      icon: Shield,
      color: "from-blue-600 to-indigo-700",
    },
    {
      question: "In how many countries are Ujjawal Farming machines available?",
      answer:
        "Our machines are available in over 50 countries, supported by global shipping and 24/7 local support.",
      icon: Globe,
      color: "from-green-600 to-emerald-700",
    },
    {
      question: "Do you design custom machines?",
      answer:
        "Yes, we design custom machines to specific requirements, leveraging 20+ years of engineering expertise and modern manufacturing.",
      icon: Factory,
      color: "from-amber-600 to-orange-700",
    },
    {
      question: "How is the service support after buying the machine?",
      answer:
        "We provide 24/7 technical assistance with a service network across India, offering online, onsite, and immediate spare parts support.",
      icon: Clock,
      color: "from-red-600 to-pink-700",
    },
    {
      question: "How are the prices of your machines?",
      answer:
        "We offer competitive pricing, EMI, and financing facilities, with seasonal and bulk order discounts.",
      icon: Award,
      color: "from-teal-600 to-cyan-700",
    },
    {
      question: "Are your machines environment friendly?",
      answer:
        "Yes, all our machines are eco-friendly, featuring low fuel consumption, reduced pollution, and the use of recyclable materials.",
      icon: Leaf,
      color: "from-green-600 to-emerald-700",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* FAQ Section */}
      <section className="py-20 px-6">
        {" "}
        {/* Reduced vertical padding */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {" "}
            {/* Reduced bottom margin */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-md border-2 border-amber-400">
              {" "}
              {/* Reduced padding, softer shadow */}
              <MessageCircle className="w-4 h-4" />{" "}
              {/* Slightly smaller icon */}
              Common Questions
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900">
              {" "}
              {/* Reduced font size and bottom margin */}
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {" "}
              {/* Reduced font size and max-width */}
              Find answers to common inquiries about **Ujjawal Farming** and
              **Shri Shyam Engineering**.
            </p>
          </div>

          <div className="space-y-4">
            {" "}
            {/* Reduced vertical space between FAQs */}
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-amber-100 hover:shadow-lg hover:border-amber-200 transition-all duration-300" // Softer shadow, slightly less rounded
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none" // Reduced padding
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-start gap-4 flex-1">
                    {" "}
                    {/* Reduced gap */}
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${faq.color} rounded-lg flex items-center justify-center shadow-sm border border-white group-hover:scale-105 transition-transform duration-300`} // Smaller icon container, softer shadow, less scale on hover
                    >
                      <faq.icon className="w-6 h-6 text-white" />{" "}
                      {/* Smaller icon */}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-amber-700 transition-colors duration-300">
                        {" "}
                        {/* Reduced font size and margin */}
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <div className="ml-4">
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" />
                    )}
                  </div>
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    {" "}
                    {/* Reduced padding */}
                    <div className="pl-16">
                      {" "}
                      {/* Adjusted padding for alignment */}
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-5 border-l-4 border-amber-500">
                        {" "}
                        {/* Slightly less rounded, reduced padding */}
                        <p className="text-gray-800 leading-relaxed text-base font-medium">
                          {" "}
                          {/* Reduced font size */}
                          {faq.answer}
                        </p>
                        <div className="flex gap-1.5 mt-3">
                          {" "}
                          {/* Reduced gap and margin */}
                          <div
                            className={`h-0.5 w-3 bg-gradient-to-r ${faq.color} rounded-full`}
                          ></div>
                          <div
                            className={`h-0.5 w-10 bg-gradient-to-r ${faq.color} rounded-full`}
                          ></div>
                          <div
                            className={`h-0.5 w-3 bg-gradient-to-r ${faq.color} rounded-full`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
        {/* Floating Elements (Subtly adjusted sizes and positions) */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-28 h-28 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-lg rotate-12 opacity-50" />
          <div className="absolute top-32 right-16 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-red-500/20 rounded-full opacity-50" />
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-lg -rotate-12 opacity-50" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-10">
            {" "}
            {/* Reduced bottom margin */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-md border-2 border-yellow-400">
              {" "}
              {/* Reduced padding, softer shadow */}
              <Factory className="w-4 h-4" /> {/* Slightly smaller icon */}
              Transform Your Operations
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-white leading-tight">
              {" "}
              {/* Reduced font size and bottom margin */}
              Transform Your Farming{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Today!
              </span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              {" "}
              {/* Reduced gap and bottom margin */}
              <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-orange-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
              </div>
              <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
          </div>

          <p className="text-xl text-amber-100 mb-10 leading-relaxed max-w-4xl mx-auto font-medium">
            {" "}
            {/* Reduced font size and max-width */}
            Join the modern agriculture revolution. Leverage over **20 years of
            engineering expertise** trusted by farmers in **50+ countries**.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col lg:flex-row gap-5 justify-center mb-16">
            {" "}
            {/* Reduced gap and bottom margin */}
            <button className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl text-lg border-2 border-amber-400">
              {" "}
              {/* Reduced padding, less rounded, softer shadow, smaller text */}
              <span className="relative z-10 flex items-center justify-center gap-3">
                {" "}
                {/* Reduced gap */}
                <Factory className="w-6 h-6" /> {/* Smaller icon */}
                View Our Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />{" "}
                {/* Smaller icon */}
              </span>
            </button>
            <button className="group px-10 py-5 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white font-bold rounded-xl border-2 border-white/30 transition-all duration-300 transform hover:scale-105 text-lg">
              {" "}
              {/* Reduced padding, less rounded, smaller text */}
              <span className="flex items-center justify-center gap-3">
                {" "}
                {/* Reduced gap */}
                <Phone className="w-6 h-6" /> {/* Smaller icon */}
                Contact Us
              </span>
            </button>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {" "}
            {/* Reduced gap and bottom margin, smaller max-width */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              {" "}
              {/* Less rounded, reduced padding */}
              <Phone className="w-8 h-8 text-amber-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />{" "}
              {/* Smaller icon, reduced margin */}
              <h4 className="text-base font-bold text-white mb-1">
                Call Us
              </h4>{" "}
              {/* Reduced font size, reduced margin */}
              <p className="text-amber-100 font-semibold text-sm">
                +91 9876543210
              </p>{" "}
              {/* Reduced font size */}
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <Mail className="w-8 h-8 text-amber-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-base font-bold text-white mb-1">Email Us</h4>
              <p className="text-amber-100 font-semibold text-sm">
                info@ujjawalfarming.com
              </p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <MapPin className="w-8 h-8 text-amber-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-base font-bold text-white mb-1">Visit Us</h4>
              <p className="text-amber-100 font-semibold text-sm">
                Jaipur, Rajasthan
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
};

export default CTAFAQ;
