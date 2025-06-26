"use client"; // If you are using Next.js App Router

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"; // Using Chevron icons

// Import Swiper styles globally (recommended in your root CSS, e.g., globals.css or index.css)
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      quote:
        "Working with them was a game-changer for our business. The results were outstanding and truly exceeded our expectations. Highly recommended!",
      name: "Alice Johnson",
      title: "CEO, Tech Solutions",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "The team's dedication and expertise truly exceeded our expectations. Their innovative approach made a significant difference and brought new life to our projects.",
      name: "Bob Williams",
      title: "Marketing Director, Creative Minds",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Outstanding service and incredible attention to detail. We couldn't be happier with the outcome and look forward to future collaborations for sure.",
      name: "Carol Davis",
      title: "Founder, Innovate Co.",
      rating: 4,
    },
    {
      id: 4,
      quote:
        "A truly professional and results-driven team. They transformed our vision into reality seamlessly and provided exceptional support throughout.",
      name: "David Lee",
      title: "Product Manager, Growth Corp.",
      rating: 5,
    },
    {
      id: 5,
      quote:
        "Their agricultural machinery has revolutionized our farm operations, significantly boosting efficiency and yield. A top-tier provider.",
      name: "Maria Sanchez",
      title: "Farm Owner, Green Fields",
      rating: 5,
    },
    {
      id: 6,
      quote:
        "From initial consultation to after-sales support, their commitment to quality and customer satisfaction is evident. Highly impressed!",
      name: "John Smith",
      title: "Operations Head, Agri-Supply Co.",
      rating: 4,
    },
  ];

  const primaryOrangeHex = "#f97316"; // Tailwind's orange-500 hex value

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className="py-16 sm:py-24 bg-gray-900 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight relative inline-block pb-4">
            <span className="text-white">What Our </span>
            <span className="text-orange-500">Clients Say</span>
            <span
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full"
              style={{ backgroundColor: primaryOrangeHex }}
            ></span>
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Hear directly from the farmers and businesses we've helped succeed.
          </p>
        </div>

        {/* Swiper Carousel Container */}
        {/* Added group class for hover effects on arrows */}
        <div className="relative group">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // Pause autoplay on hover
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: ".swiper-pagination-custom", // Custom pagination element
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // Manually assign refs for navigation buttons
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper !pb-12" // !pb-12 to make space for pagination dots
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto pb-4">
                <div
                  className="relative bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-gray-700 transform transition-all duration-300 hover:scale-[1.02] flex flex-col h-full overflow-hidden"
                  style={{
                    boxShadow: `0 10px 30px rgba(0,0,0,0.3), 0 0 0 2px ${primaryOrangeHex}40 inset`, // Subtle inner border on hover
                  }}
                >
                  {/* Background overlay for visual flair */}
                  <div
                    className="absolute inset-0 z-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(ellipse at top left, #f97316 0%, transparent 70%)",
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-start mb-4">
                      <Quote className="w-10 h-10 text-orange-500 opacity-70" />
                    </div>

                    <p className="text-lg text-gray-200 italic mb-6 leading-relaxed flex-grow">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center justify-start mb-4">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-orange-500 fill-current"
                              : "text-gray-500"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-700/50">
                      <p className="font-semibold text-xl text-orange-400">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination-custom text-center mt-6 relative z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
