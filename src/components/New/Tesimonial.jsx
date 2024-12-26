import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import wood from "../../assets/wood.jpg";
import { testimonials } from "../../Data";
import avatar from "../../assets/avartar.png"



const Testimonial = () => {
  return (
    <section
      className="relative flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8 bg-fixed"
      style={{ backgroundImage: `url(${wood})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

      {/* Swiper Content */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper max-w-4xl px-6 relative z-10"
      >
        {testimonials.map((testimonial, idx) => (
         
          <SwiperSlide
            key={idx}
            className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg px-8 pt-8 pb-16 hover:scale-105 transition-all duration-300"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6 items-center">
              {/* Image Section */}
              <div className="flex justify-center items-center mb-6 sm:mb-0">
                <img
                  src={testimonial.img || avatar}
                  alt={testimonial.name}
                  className="rounded-full h-32 w-32 sm:h-40 sm:w-40 object-cover border-4 border-purple-500 shadow-md"
                />
              </div>

              {/* Content Section */}
              <div className="col-span-2 text-center md:text-left">
                <p className="text-gray-300 italic text-lg leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="text-purple-400 font-bold text-xl sm:text-2xl">
                  {testimonial.name}
                </div>
                <div className="text-gray-500 text-sm sm:text-base">
                  {testimonial.title}
                </div>
              </div>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
