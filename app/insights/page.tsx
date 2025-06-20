"use client";
import React, { useState, useEffect } from "react";
import {
  Calendar,
  User,
  ArrowRight,
  Leaf,
  Factory,
  Cog,
  TrendingUp,
  Globe,
  Lightbulb,
  Award,
  Settings,
  Truck,
  Clock,
  Eye,
  ChevronRight,
  Filter,
  Search,
  Tag,
} from "lucide-react";
import Image from "next/image";

export default function InsightsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        const res = await fetch("/api/insights");
        const data = await res.json();
        setBlogs(data.blogs || []);
        console.log(data);
      } catch (e) {
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const categories = [
    "All",
    ...Array.from(new Set(blogs.map((post) => post.category).filter(Boolean))),
  ];

  // Only show posts with status 'active' (case-insensitive, fallback to true if no status field)
  const onlyActive = blogs.filter(
    (post) => !post.status || String(post.status).toLowerCase() === "active"
  );
  // Use onlyActive instead of blogs/regularPosts for rendering
  const filteredPosts = onlyActive.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags?.some((tag: string) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold text-amber-700">
        Loading Insights...
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-300 rounded-lg rotate-12 opacity-50"
            style={{
              transform: `translateY(${scrollY * 0.2}px) rotate(12deg)`,
            }}
          />
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-50"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          />
          <div
            className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg -rotate-12 opacity-50"
            style={{
              transform: `translateY(${scrollY * 0.1}px) rotate(-12deg)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-8 py-4 rounded-full text-sm font-bold mb-8 shadow-lg border-2 border-amber-400">
            <Lightbulb className="w-5 h-5" />
            Knowledge Hub • Latest Insights
          </div>

          <h1 className="text-6xl lg:text-8xl font-black mb-6 text-gray-900 leading-tight">
            Industry{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Insights
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

          <p className="text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-12 font-medium">
            Explore the latest trends, innovations, and insights in agricultural
            machinery and manufacturing technology.
            <br />
            <span className="font-bold text-amber-700">
              Expert knowledge
            </span>{" "}
            from 20 years of industry experience.
          </p>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-amber-200">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none bg-white/90"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none bg-white/90"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 text-gray-900">
              Latest{" "}
              <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Articles
              </span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-3">
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
            <p className="text-xl text-gray-600">
              Stay updated with industry trends and innovations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post._id || post.id}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  {post.imageUrl && (
                    <Image
                      fill
                      src={post.imageUrl}
                      alt={post.title}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white text-xs">
                    <Eye className="w-3 h-3" />
                    {post.views}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-xs mb-3 opacity-75 line-clamp-1">
                    {post.title}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {(post.tags && Array.isArray(post.tags)
                        ? post.tags.slice(0, 2)
                        : []
                      ).map((tag: string) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-1 text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300 text-sm">
                      Read
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No articles found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-700 transition-colors duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
