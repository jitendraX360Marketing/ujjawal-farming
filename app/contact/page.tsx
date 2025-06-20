"use client";
import React, { useState, FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Factory, // For product inquiry
  Users, // For dealership
  Headphones, // For general support/24/7
  Globe, // For export inquiry/countries served
  Wrench, // For Shri Shyam Engineering product/technical support
  Star, // For customer satisfaction
  Shield, // For quality/certification
  MessageCircle, // For general inquiry
  User, // For name field
  Building, // For company name field
  ChevronRight, // For send button
  Award, // For years experience
  Heart, // For customer-centric
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [loading, setLoading] = useState(false); // New loading state

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submission starts
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form");
      }

      toast.success("Thank you for your inquiry! We'll get back to you soon."); // Success toast
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error(
        error.message ||
          "There was an error submitting your inquiry. Please try again."
      ); // Error toast
    } finally {
      setLoading(false); // Set loading to false when submission ends (success or failure)
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
      title: "Email Assistance", // Renamed for professionalism
      details: ["info@ujjawalfarming.com", "support@shrishyameng.com"],
      description: "Response within 2 hours", // Shortened description
      color: "from-blue-600 to-indigo-700",
      bgColor: "from-blue-50 to-indigo-100",
    },
    {
      icon: MapPin,
      title: "Factory & Head Office", // Renamed for clarity
      details: [
        "Industrial Area, Sector 5",
        "Bhiwadi, Rajasthan - 301019, India",
      ],
      description: "Shri Shyam Engineering", // More concise
      color: "from-amber-600 to-orange-700",
      bgColor: "from-amber-50 to-orange-100",
    },
    {
      icon: Clock,
      title: "Operational Hours", // Renamed for professionalism
      details: ["Mon-Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
      description: "Standard Business Hours", // More concise
      color: "from-red-600 to-pink-700",
      bgColor: "from-red-50 to-pink-100",
    },
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: MessageCircle },
    {
      value: "product_ujjawalfarming",
      label: "Ujjawal Farming Product", // Shortened
      icon: Factory,
    },
    {
      value: "product_shrishyameng",
      label: "Shri Shyam Engineering Product", // Shortened
      icon: Wrench,
    },
    { value: "support", label: "Technical Support", icon: Headphones },
    { value: "dealer", label: "Dealership Opportunities", icon: Users }, // Slightly expanded for clarity
    { value: "export", label: "Export & International", icon: Globe }, // Slightly expanded for clarity
  ];

  const quickStats = [
    {
      number: "2 Hrs", // Changed to "Hrs"
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
      label: "Support Availability", // Changed for professionalism
      icon: Headphones,
      color: "text-amber-700",
    },
    {
      number: "99%",
      label: "Client Satisfaction", // Changed for professionalism
      icon: Star,
      color: "text-red-700",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 text-gray-900  font-sans">
      <Toaster position="top-center" reverseOrder={false} />{" "}
      {/* Add Toaster component */}
      {/* Hero Section */}
      <section
        className={`relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20`}
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
        <div className="absolute inset-0 z-0">
          <div className="absolute top-16 left-16 w-28 h-28 bg-gradient-to-br from-amber-200/50 to-orange-300/50 rounded-lg rotate-12 opacity-50" />
          <div className="absolute top-32 right-16 w-20 h-20 bg-gradient-to-br from-green-200/50 to-emerald-300/50 rounded-full opacity-50" />
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-200/50 to-indigo-300/50 rounded-lg -rotate-12 opacity-50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-10">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-md border-2 border-amber-400">
              <Headphones className="w-4 h-4" />
              Always Here to Assist
            </div>

            <h1 className="text-5xl lg:text-7xl font-black mb-4 text-gray-900 leading-tight">
              Get In{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Touch
              </span>
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
            Ready to enhance your operations or require expert engineering
            solutions? Connect with our dedicated teams at **Shri Shyam
            Engineering** and **Ujjawal Farming**—your trusted partners.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className={`group bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-md border border-amber-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-amber-300`}
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
        </div>
      </section>
      {/* --- */}
      {/* Contact Information Section */}
      <section className={`py-20 px-6 bg-gradient-to-b from-white to-amber-50`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4 text-gray-900">
              Reach{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Us
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to connect with our team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {" "}
            {/* Reduced gap and bottom margin */}
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${info.bgColor} rounded-2xl p-6 shadow-lg border border-white/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform duration-300`}
                >
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {info.title}
                </h3>
                <div className="space-y-1.5 mb-3">
                  {" "}
                  {/* Reduced vertical space and margin */}
                  {info.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-gray-700 font-medium text-base"
                    >
                      {" "}
                      {/* Reduced font size */}
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
      {/* --- */}
      {/* Contact Form Section */}
      <section className={`py-20 px-6 bg-white`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {" "}
            {/* Reduced gap */}
            <div>
              <div className="mb-10">
                {" "}
                {/* Reduced bottom margin */}
                <h2 className="text-4xl font-black mb-4 text-gray-900">
                  {" "}
                  {/* Reduced font size */}
                  Send Us A{" "}
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Message
                  </span>
                </h2>
                <p className="text-lg text-gray-600">
                  {" "}
                  {/* Reduced font size */}
                  Complete the form below, and our team will respond within 2
                  hours during business hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {" "}
                {/* Reduced vertical space */}
                {/* Inquiry Type */}
                <div>
                  <label className="block text-base font-bold text-gray-900 mb-3">
                    {" "}
                    {/* Reduced font size */}
                    Inquiry Type
                  </label>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                    {" "}
                    {/* Reduced gap */}
                    {inquiryTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`flex items-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                          // Reduced padding, less rounded, smaller gap
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
                          className="sr-only"
                        />
                        <type.icon className="w-4 h-4" /> {/* Smaller icon */}
                        <span className="text-sm font-semibold">
                          {type.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Personal Information */}
                <div className="grid lg:grid-cols-2 gap-5">
                  {" "}
                  {/* Reduced gap */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-base font-bold text-gray-900 mb-2" // Reduced font size and margin
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />{" "}
                      {/* Smaller icon */}
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors duration-300 text-base" // Reduced padding, less rounded, smaller text
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-base font-bold text-gray-900 mb-2"
                    >
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors duration-300 text-base"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-bold text-gray-900 mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors duration-300 text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-base font-bold text-gray-900 mb-2"
                    >
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors duration-300 text-base"
                        placeholder="Your company name (optional)"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-base font-bold text-gray-900 mb-2"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors duration-300 text-base"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-base font-bold text-gray-900 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5} // Reduced rows
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors duration-300 text-base resize-none"
                    placeholder="Please provide details about your inquiry, requirements, or questions..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading} // Disable button when loading
                  className="group w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl text-base border-2 border-amber-400 disabled:opacity-50 disabled:cursor-not-allowed" // Added disabled styles
                >
                  <span className="flex items-center justify-center gap-2">
                    {" "}
                    {/* Reduced gap */}
                    {loading ? (
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <Send className="w-5 h-5" />
                    )}{" "}
                    {/* Conditional rendering for loading spinner */}
                    {loading ? "Submitting..." : "Send Message"}
                    {!loading && (
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    )}{" "}
                    {/* Chevron only when not loading */}
                  </span>
                </button>
              </form>
            </div>
            {/* Additional Information (Why Partner with Us & Support Hours) */}
            <div className="space-y-6">
              {" "}
              {/* Reduced vertical space */}
              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-7 shadow-lg border border-amber-200">
                {" "}
                {/* Less rounded, reduced padding, softer shadow */}
                <h3 className="text-2xl font-bold mb-5 text-gray-900">
                  {" "}
                  {/* Reduced font size and margin */}
                  Why Partner with <span className="text-amber-700">Us?</span>
                </h3>
                <div className="space-y-3">
                  {" "}
                  {/* Reduced vertical space */}
                  <div className="flex items-start gap-3">
                    {" "}
                    {/* Reduced gap, changed to items-start for better alignment */}
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center flex-shrink-0">
                      {" "}
                      {/* Smaller, flex-shrink-0 */}
                      <Award className="w-5 h-5 text-white" />{" "}
                      {/* Smaller icon */}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">
                        {" "}
                        {/* Reduced font size */}
                        20+ Years Expertise
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {" "}
                        {/* Reduced font size */}
                        Two decades of engineering and agricultural machinery
                        experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">
                        Global Presence
                      </h4>{" "}
                      {/* Renamed for professionalism */}
                      <p className="text-gray-600 text-sm">
                        Serving clients in over 50 countries worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">
                        Certified Quality
                      </h4>{" "}
                      {/* Renamed for professionalism */}
                      <p className="text-gray-600 text-sm">
                        ISO certified manufacturing ensuring top-tier products.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-pink-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">
                        Client-Centric Support
                      </h4>{" "}
                      {/* Renamed for professionalism */}
                      <p className="text-gray-600 text-sm">
                        Dedicated and comprehensive after-sales service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Support Hours */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-7 shadow-lg border border-green-200">
                {" "}
                {/* Less rounded, reduced padding, softer shadow */}
                <h3 className="text-2xl font-bold mb-5 text-gray-900">
                  {" "}
                  {/* Reduced font size and margin */}
                  Support <span className="text-green-700">Hours</span>
                </h3>
                <div className="space-y-2.5">
                  {" "}
                  {/* Reduced vertical space */}
                  <div className="flex justify-between items-center py-1.5 border-b border-green-200">
                    {" "}
                    {/* Reduced padding */}
                    <span className="font-semibold text-gray-900 text-base">
                      {" "}
                      {/* Reduced font size */}
                      Monday - Friday
                    </span>
                    <span className="text-green-700 font-bold text-base">
                      {" "}
                      {/* Reduced font size */}
                      9:00 AM - 7:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-green-200">
                    <span className="font-semibold text-gray-900 text-base">
                      Saturday
                    </span>
                    <span className="text-green-700 font-bold text-base">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-green-200">
                    <span className="font-semibold text-gray-900 text-base">
                      Sunday
                    </span>
                    <span className="text-green-700 font-bold text-base">
                      10:00 AM - 5:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="font-semibold text-gray-900 text-base">
                      Emergency Support
                    </span>
                    <span className="text-red-600 font-bold text-base">
                      Available 24/7 (via direct numbers)
                    </span>{" "}
                    {/* Clarified text */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <h1>Hello </h1>
        <Image
          src={
            "https://ik.imagekit.io/yourcompany/default-image.jpg?updatedAt=1750404370440"
          }
          alt="Image"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
}
