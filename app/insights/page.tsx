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

export default function InsightsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title:
        "Modern Agriculture Revolution: How Advanced Machinery is Transforming Indian Farming",
      titleHindi:
        "आधुनिक कृषि क्रांति: उन्नत मशीनरी कैसे भारतीय कृषि को बदल रही है",
      excerpt:
        "Discover how cutting-edge agricultural machinery is revolutionizing traditional farming practices across India, increasing productivity and reducing manual labor.",
      content:
        "The agricultural landscape in India is undergoing a massive transformation...",
      author: "Maliram Ji Jangid",
      date: "2025-05-28",
      readTime: "8 min read",
      views: "2.4K",
      category: "Technology",
      image: "agriculture-revolution",
      tags: ["Modern Farming", "Technology", "Innovation"],
      featured: true,
      gradient: "from-green-600 to-emerald-700",
    },
    {
      id: 2,
      title:
        "Complete Guide to Panel Board Manufacturing: Quality Standards & Best Practices",
      titleHindi:
        "पैनल बोर्ड निर्माण की संपूर्ण गाइड: गुणवत्ता मानक और सर्वोत्तम प्रथाएं",
      excerpt:
        "Learn about the essential quality standards, manufacturing processes, and best practices in panel board production for industrial applications.",
      content:
        "Panel board manufacturing requires precision, quality control, and adherence to strict standards...",
      author: "Technical Team",
      date: "2025-05-25",
      readTime: "10 min read",
      views: "1.8K",
      category: "Manufacturing",
      image: "panel-manufacturing",
      tags: ["Panel Boards", "Quality", "Standards"],
      featured: true,
      gradient: "from-blue-600 to-indigo-700",
    },
    {
      id: 3,
      title:
        "Sustainable Farming Equipment: Building an Eco-Friendly Agricultural Future",
      titleHindi: "टिकाऊ कृषि उपकरण: पर्यावरण-अनुकूल कृषि भविष्य का निर्माण",
      excerpt:
        "Explore how sustainable agricultural equipment is helping farmers reduce environmental impact while maintaining high productivity levels.",
      content:
        "Sustainability in agriculture is no longer optional—it's essential for our planet's future...",
      author: "Environmental Team",
      date: "2025-05-22",
      readTime: "7 min read",
      views: "3.1K",
      category: "Sustainability",
      image: "sustainable-farming",
      tags: ["Sustainability", "Environment", "Green Technology"],
      featured: false,
      gradient: "from-emerald-600 to-teal-700",
    },
    {
      id: 4,
      title:
        "Powder Coating Technology: Enhancing Durability in Agricultural Machinery",
      titleHindi: "पाउडर कोटिंग तकनीक: कृषि मशीनरी में स्थायित्व बढ़ाना",
      excerpt:
        "Understanding the importance of powder coating in agricultural equipment and how it extends machinery lifespan in harsh farming conditions.",
      content:
        "Powder coating has revolutionized the way we protect agricultural machinery from corrosion...",
      author: "Production Team",
      date: "2025-05-20",
      readTime: "6 min read",
      views: "1.5K",
      category: "Technology",
      image: "powder-coating",
      tags: ["Coating", "Durability", "Protection"],
      featured: false,
      gradient: "from-purple-600 to-pink-700",
    },
    {
      id: 5,
      title:
        "Global Export Success: Taking Indian Agriculture Machinery to 50+ Countries",
      titleHindi:
        "वैश्विक निर्यात सफलता: भारतीय कृषि मशीनरी को 50+ देशों तक पहुंचाना",
      excerpt:
        "The journey of expanding Indian-made agricultural machinery to international markets and establishing global trust in quality.",
      content:
        "From humble beginnings in 2005 to serving farmers in over 50 countries...",
      author: "Export Team",
      date: "2025-05-18",
      readTime: "9 min read",
      views: "2.7K",
      category: "Business",
      image: "global-export",
      tags: ["Export", "Global", "Success Story"],
      featured: false,
      gradient: "from-orange-600 to-red-700",
    },
    {
      id: 6,
      title:
        "Laser Cutting Innovation: Precision Manufacturing in Agricultural Equipment",
      titleHindi: "लेजर कटिंग नवाचार: कृषि उपकरणों में सटीक विनिर्माण",
      excerpt:
        "How laser cutting technology has transformed manufacturing precision and quality in agricultural machinery production.",
      content:
        "The introduction of laser cutting technology in 2012 marked a turning point...",
      author: "Engineering Team",
      date: "2025-05-15",
      readTime: "8 min read",
      views: "1.9K",
      category: "Technology",
      image: "laser-cutting",
      tags: ["Laser Technology", "Precision", "Manufacturing"],
      featured: false,
      gradient: "from-cyan-600 to-blue-700",
    },
    {
      id: 7,
      title:
        "Farmer Success Stories: Real Impact of Quality Agricultural Machinery",
      titleHindi:
        "किसान सफलता की कहानियां: गुणवत्तापूर्ण कृषि मशीनरी का वास्तविक प्रभाव",
      excerpt:
        "Inspiring stories from farmers who have transformed their agricultural practices and increased productivity with modern machinery.",
      content:
        "Behind every piece of machinery we manufacture are real farmers with real stories...",
      author: "Customer Relations",
      date: "2025-05-12",
      readTime: "11 min read",
      views: "4.2K",
      category: "Success Stories",
      image: "farmer-success",
      tags: ["Farmers", "Success", "Testimonials"],
      featured: true,
      gradient: "from-amber-600 to-yellow-700",
    },
    {
      id: 8,
      title:
        "Quality Assurance in Manufacturing: Maintaining 99% Quality Standards",
      titleHindi:
        "विनिर्माण में गुणवत्ता आश्वासन: 99% गुणवत्ता मानकों को बनाए रखना",
      excerpt:
        "Deep dive into our quality assurance processes and how we maintain industry-leading standards in manufacturing.",
      content:
        "Quality is not just a promise—it's a commitment that drives every aspect of our manufacturing...",
      author: "Quality Team",
      date: "2025-05-10",
      readTime: "7 min read",
      views: "2.1K",
      category: "Quality",
      image: "quality-assurance",
      tags: ["Quality", "Standards", "Manufacturing"],
      featured: false,
      gradient: "from-red-600 to-rose-700",
    },
    {
      id: 9,
      title: "Future of Agriculture: AI and IoT Integration in Farm Equipment",
      titleHindi: "कृषि का भविष्य: कृषि उपकरणों में AI और IoT का एकीकरण",
      excerpt:
        "Exploring the future trends of artificial intelligence and Internet of Things in agricultural machinery and smart farming solutions.",
      content:
        "The future of agriculture lies in the seamless integration of technology with traditional farming...",
      author: "Innovation Team",
      date: "2025-05-08",
      readTime: "12 min read",
      views: "3.8K",
      category: "Innovation",
      image: "future-agriculture",
      tags: ["AI", "IoT", "Future Tech"],
      featured: false,
      gradient: "from-violet-600 to-purple-700",
    },
    {
      id: 10,
      title:
        "20 Years of Excellence: Celebrating Two Decades of Agricultural Innovation",
      titleHindi: "20 साल की उत्कृष्टता: कृषि नवाचार के दो दशकों का जश्न",
      excerpt:
        "Reflecting on our 20-year journey from a small panel manufacturing unit to a global agricultural machinery leader.",
      content:
        "As we celebrate 20 years of Shri Shyam Engineering, we look back at the milestones...",
      author: "Maliram Ji Jangid",
      date: "2025-05-05",
      readTime: "15 min read",
      views: "5.6K",
      category: "Company",
      image: "company-milestone",
      tags: ["Milestone", "Journey", "Celebration"],
      featured: true,
      gradient: "from-indigo-600 to-blue-700",
    },
  ];

  const categories = [
    "All",
    "Technology",
    "Manufacturing",
    "Sustainability",
    "Business",
    "Success Stories",
    "Quality",
    "Innovation",
    "Company",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.titleHindi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

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

      {/* Featured Articles Section */}
      {featuredPosts.length > 0 && (
        <section className="py-20 px-6 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-4 text-gray-900">
                Featured{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Articles
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Must-read insights from our experts
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-amber-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div
                    className={`h-64 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-bold">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 opacity-75">
                      {post.titleHindi}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-300">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 text-gray-900">
              Latest{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Articles
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with industry trends and innovations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
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
                    {post.titleHindi}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
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
