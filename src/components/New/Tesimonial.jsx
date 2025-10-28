import React from "react";
import { testimonials } from "../../Data";
import avatar from "../../assets/avartar.png"

const Testimonial = () => {
  return (
    <section className="bg-black text-white py-32" id='testimonial'>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-baseline gap-3 md:gap-6">
            <span className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tight">06</span>
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-light mb-2 md:mb-3">Testimonials</h2>
              <p className="text-gray-500 text-sm md:text-lg max-w-2xl">
                What colleagues and collaborators say about working with me.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex flex-col p-6 md:p-8 border border-gray-900 hover:border-gray-800 transition-colors"
            >
              {/* Quote */}
              <div className="mb-6 md:mb-8">
                <div className="w-12 h-px bg-gradient-to-r from-slate-500 to-transparent mb-4"></div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="mt-auto flex items-center gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.img || avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border border-gray-800"
                  />
                </div>
                <div>
                  <div className="text-white text-sm md:text-base font-light mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
