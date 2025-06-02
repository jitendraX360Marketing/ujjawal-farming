"use client";
import React, { useState, FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Factory,
  Users,
  Headphones,
  Globe,
  Wrench,
  Star,
  Shield,
  MessageCircle,
  User,
  Building,
  ChevronRight,
  Award,
  Heart,
} from "lucide-react";

export default function ContactPage() {
  // Removed scrollY state and its associated useEffect
  // Removed all useRefs for sections and individual cards

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log("Form submitted:", formData);
     
      alert("Thank you for your inquiry! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your inquiry. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: [
        "+91 98765 43210 (Ujjawal Farming)",
        "+91 87654 32109 (Shri Shyam Engineering)",
      ],
      description: "24/7 Customer Support",
      color: "from-green-600 to-emerald-700",
      bgColor: "from-green-50 to-emerald-100",
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["info@ujjawalfarming.com", "support@shrishyameng.com"],
      description: "Quick Response Within 2 Hours",
      color: "from-blue-600 to-indigo-700",
      bgColor: "from-blue-50 to-indigo-100",
    },
    {
      icon: MapPin,
      title: "Factory Address",
      details: [
        "Industrial Area, Sector 5",
        "Bhiwadi, Rajasthan - 301019, India",
      ],
      description: "Manufacturing & Head Office (Shri Shyam Engineering)",
      color: "from-amber-600 to-orange-700",
      bgColor: "from-amber-50 to-orange-100",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon-Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
      description: "Customer Service Hours",
      color: "from-red-600 to-pink-700",
      bgColor: "from-red-50 to-pink-100",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: MessageCircle },
    {
      value: "product_ujjawalfarming",
      label: "Product Info (Ujjawal Farming)",
      icon: Factory,
    },
    {
      value: "product_shrishyameng",
      label: "Product Info (Shri Shyam Engineering)",
      icon: Wrench,
    },
    { value: "support", label: "Technical Support", icon: Headphones },
    { value: "dealer", label: "Dealership", icon: Users },
    { value: "export", label: "Export Inquiry", icon: Globe },
  ];

  const quickStats = [
    {
      number: "2hrs",
      label: "Response Time",
      icon: Clock,
      color: "text-green-700",
    },
    {
      number: "50+",
      label: "Countries Served",
      icon: Globe,
      color: "text-blue-700",
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: Headphones,
      color: "text-amber-700",
    },
    {
      number: "99%",
      label: "Customer Satisfaction",
      icon: Star,
      color: "text-red-700",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 text-gray-900 min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className={`relative min-h-screen flex items-center justify-center overflow-hidden py-24
        opacity-100 translate-y-0`} 
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

        {/* Floating Elements (No Parallax) */}
        <div className="absolute inset-0 z-0">
          {/* Removed style={{ transform: `translateY(${scrollY * ...}px)` }} */}
          <div
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-300 rounded-lg rotate-12 opacity-60"
          />
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-60"
          />
          <div
            className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg -rotate-12 opacity-60"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-12">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-lg border-2 border-amber-400">
              <Headphones className="w-5 h-5" />
              Always Here to Help
            </div>

            <h1 className="text-6xl lg:text-8xl font-black mb-6 text-gray-900 leading-tight">
              Contact{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Us
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
            Ready to revolutionize your farming or need engineering solutions?
            Get in touch with our expert teams.
            <br />
            <span className="font-bold text-amber-700">
              Shri Shyam Engineering
            </span>{" "}
            and{" "}
            <span className="font-bold text-green-700">Ujjawal Farming</span> —
            your partners in success.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-amber-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 hover:border-amber-300
                opacity-100 translate-y-0`} 
              >
                <stat.icon
                  className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                />
                <div className="text-4xl font-black mb-2 text-gray-800">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`py-24 px-6 bg-gradient-to-b from-white to-amber-50
        opacity-100 translate-y-0`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900">
              Get In{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to connect with us - choose what's convenient for
              you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${
                  info.bgColor
                } rounded-3xl p-8 shadow-xl border-2 border-white/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500
                opacity-100 translate-y-0`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-gray-600 font-semibold">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`py-24 px-6 bg-white
        opacity-100 translate-y-0`} 
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-12">
                <h2 className="text-5xl font-black mb-6 text-gray-900">
                  Send Us A{" "}
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Message
                  </span>
                </h2>
                <p className="text-xl text-gray-600">
                  Fill out the form and our team will get back to you within 2
                  hours during business hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-4">
                    Inquiry Type
                  </label>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {inquiryTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.inquiryType === type.value
                            ? "border-amber-500 bg-amber-50 text-amber-700"
                            : "border-gray-200 hover:border-amber-300 hover:bg-amber-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="inquiryType"
                          value={type.value}
                          checked={formData.inquiryType === type.value}
                          onChange={handleInputChange}
                          className="sr-only" // Hidden radio button, styled by parent label
                        />
                        <type.icon className="w-5 h-5" />
                        <span className="text-sm font-semibold">
                          {type.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-bold text-gray-900 mb-3"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 text-lg"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-lg font-bold text-gray-900 mb-3"
                    >
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 text-lg"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-bold text-gray-900 mb-3"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 text-lg"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-lg font-bold text-gray-900 mb-3"
                    >
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 text-lg"
                        placeholder="Your company name (optional)"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-lg font-bold text-gray-900 mb-3"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 text-lg"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-bold text-gray-900 mb-3"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none transition-colors duration-300 text-lg resize-none"
                    placeholder="Please provide details about your inquiry, requirements, or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg border-2 border-amber-400"
                >
                  <span className="flex items-center justify-center gap-3">
                    <Send className="w-6 h-6" />
                    Send Message
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-8 shadow-xl border-2 border-amber-200">
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  Why Partner with{" "}
                  <span className="text-amber-700">Us?</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        20+ Years Experience
                      </h4>
                      <p className="text-gray-600">
                        Two decades of expertise in both agriculture and
                        engineering.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Global Reach</h4>
                      <p className="text-gray-600">
                        Serving clients in 50+ countries worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Uncompromising Quality
                      </h4>
                      <p className="text-gray-600">
                        ISO certified manufacturing processes ensuring top-tier
                        products.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-700 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Customer-Centric Approach
                      </h4>
                      <p className="text-gray-600">
                        Dedicated support and comprehensive after-sales service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Hours */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 shadow-xl border-2 border-green-200">
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  Support <span className="text-green-700">Hours</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="font-semibold text-gray-900">
                      Monday - Friday
                    </span>
                    <span className="text-green-700 font-bold">
                      9:00 AM - 7:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="font-semibold text-gray-900">
                      Saturday
                    </span>
                    <span className="text-green-700 font-bold">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-green-200">
                    <span className="font-semibold text-gray-900">Sunday</span>
                    <span className="text-green-700 font-bold">
                      10:00 AM - 5:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-gray-900">
                      Emergency Support
                    </span>
                    <span className="text-red-600 font-bold">
                      Available 24/7 (Contact given numbers)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}