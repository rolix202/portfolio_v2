import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import wood from "../../assets/wood.jpg";
import rooo from "../../assets/rooo.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      img: rooo,
      quote:
        "Working with [Your Name] was a game-changer. They didn’t just solve problems—they anticipated them, offering elegant solutions that transformed our project into a massive success.",
      name: "Mo Salah",
      title: "Software Engineer, Liverpool FC",
    },
    {
      img: rooo,
      quote:
        "[Your Name]'s creativity and technical expertise are unmatched. Their ability to bridge the gap between vision and execution made all the difference in delivering results we are proud of.",
      name: "Jane Doe",
      title: "Project Manager, TechCorp",
    },
    {
      img: rooo,
      quote:
        "Every interaction with [Your Name] is inspiring. They bring not just technical skills but empathy and a collaborative spirit that makes every project feel like a shared success story.",
      name: "John Smith",
      title: "CEO, StartUp XYZ",
    },
  ];

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
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Image Section */}
              <div className="flex justify-center items-center">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="rounded-full h-40 w-40 object-cover border-4 border-purple-500 shadow-md"
                />
              </div>
              {/* Content Section */}
              <div className="col-span-2 text-center md:text-left">
                <p className="text-gray-300 italic text-lg leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="text-purple-400 font-bold text-xl">
                  {testimonial.name}
                </div>
                <div className="text-gray-500 text-sm">{testimonial.title}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
