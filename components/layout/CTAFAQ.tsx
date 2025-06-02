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
        "We provide 2 years comprehensive warranty on all our machines. 99% quality assurance with ISO certified quality. Free servicing and spare parts support.",
      icon: Shield,
      color: "from-blue-600 to-indigo-700",
    },
    {
      question: "In how many countries are Ujjawal Farming machines available?",
      answer:
        "Our machines are available in 50+ countries. Global shipping and delivery facility. Local dealer network and 24/7 customer support in all countries.",
      icon: Globe,
      color: "from-green-600 to-emerald-700",
    },
    {
      question: "Do you design custom machines?",
      answer:
        "Yes, we design custom machines according to farmers' specific requirements. 20+ years of engineering experience. Modern technology of laser cutting and powder coating.",
      icon: Factory,
      color: "from-amber-600 to-orange-700",
    },
    {
      question: "How is the service support after buying the machine?",
      answer:
        "24/7 technical assistance. Service network across India. Online and onsite support. Real-time machine monitoring. Immediate spare parts availability.",
      icon: Clock,
      color: "from-red-600 to-pink-700",
    },
    {
      question: "How are the prices of your machines?",
      answer:
        "Best quality at competitive prices. EMI and financing facility. Seasonal discounts and offers. Special discount on bulk orders.",
      icon: Award,
      color: "from-teal-600 to-cyan-700",
    },
    {
      question: "Are your machines environment friendly?",
      answer:
        "Yes, all our machines are environment friendly. Low fuel consumption. Less pollution. Use of recyclable materials. Promoting sustainable farming.",
      icon: Leaf,
      color: "from-green-600 to-emerald-700",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-lg border-2 border-amber-400">
              <MessageCircle className="w-5 h-5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Your{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Most frequently asked questions about Ujjawal Farming and Shri
              Shyam Engineering
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-amber-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300"
              >
                <button
                  className="w-full p-8 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-start gap-6 flex-1">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${faq.color} rounded-xl flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      <faq.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <div className="ml-4">
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" />
                    )}
                  </div>
                </button>

                {openFAQ === index && (
                  <div className="px-8 pb-8">
                    <div className="pl-20">
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-l-4 border-amber-500">
                        <p className="text-gray-800 leading-relaxed text-lg font-medium">
                          {faq.answer}
                        </p>
                        <div className="flex gap-2 mt-4">
                          <div
                            className={`h-1 w-4 bg-gradient-to-r ${faq.color} rounded-full`}
                          ></div>
                          <div
                            className={`h-1 w-12 bg-gradient-to-r ${faq.color} rounded-full`}
                          ></div>
                          <div
                            className={`h-1 w-4 bg-gradient-to-r ${faq.color} rounded-full`}
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

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-lg rotate-12 opacity-60" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-red-500/20 rounded-full opacity-60" />
          <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-lg -rotate-12 opacity-60" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-lg border-2 border-yellow-400">
              <Factory className="w-5 h-5" />
              Ready to Transform
            </div>

            <h2 className="text-5xl lg:text-7xl font-black mb-8 text-white leading-tight">
              Transform Your Farming{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Today!
              </span>
            </h2>

            <div className="flex items-center justify-center gap-6 mb-10">
              <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              </div>
              <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
          </div>

          <p className="text-xl lg:text-2xl text-amber-100 mb-12 leading-relaxed max-w-5xl mx-auto font-medium">
            Join the modern agriculture revolution with Ujjawal Farming.
            Experience over 20 years of engineering expertise and the trust of
            farmers in 50+ countries.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center mb-20">
            <button className="group px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-xl border-2 border-amber-400">
              <span className="relative z-10 flex items-center justify-center gap-4">
                <Factory className="w-7 h-7" />
                View Our Products
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="group px-12 py-6 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white font-bold rounded-2xl border-2 border-white/30 transition-all duration-300 transform hover:scale-105 text-xl">
              <span className="flex items-center justify-center gap-4">
                <Phone className="w-7 h-7" />
                Contact Us
              </span>
            </button>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <Phone className="w-10 h-10 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-bold text-white mb-2">Call Us</h4>
              <p className="text-amber-100 font-semibold">+91 9876543210</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <Mail className="w-10 h-10 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-bold text-white mb-2">Email Us</h4>
              <p className="text-amber-100 font-semibold">
                info@ujjawalfarming.com
              </p>
            </div>
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <MapPin className="w-10 h-10 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-bold text-white mb-2">Visit Us</h4>
              <p className="text-amber-100 font-semibold">Jaipur, Rajasthan</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div className="text-center group">
              <Shield className="w-12 h-12 mx-auto text-amber-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-black text-amber-400 mb-1">ISO</div>
              <p className="text-sm text-amber-200">Certified</p>
            </div>
            <div className="text-center group">
              <Star className="w-12 h-12 mx-auto text-amber-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-black text-amber-400 mb-1">
                5-Star
              </div>
              <p className="text-sm text-amber-200">Rated</p>
            </div>
            <div className="text-center group">
              <Truck className="w-12 h-12 mx-auto text-amber-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-black text-amber-400 mb-1">
                Fast
              </div>
              <p className="text-sm text-amber-200">Delivery</p>
            </div>
            <div className="text-center group">
              <Users className="w-12 h-12 mx-auto text-amber-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-black text-amber-400 mb-1">
                10K+
              </div>
              <p className="text-sm text-amber-200">Happy Farmers</p>
            </div>
            <div className="text-center group">
              <CheckCircle className="w-12 h-12 mx-auto text-amber-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-black text-amber-400 mb-1">
                24/7
              </div>
              <p className="text-sm text-amber-200">Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTAFAQ;
