import React from "react";
import rooo from "../assets/rooo.jpg"; // Placeholder image

const Blog = () => {
  const blogPosts = [
    {
      title: "How I build my new portfolio using Astro",
      description: "Discover more about how I use Astro to create a revamped portfolio.",
      image: rooo,
      link: "#",
    },
    {
      title: "2024 in review",
      description: "A personal review about my 2024.",
      image: rooo,
      link: "#",
    },
    {
      title: "Use TypeScript or not",
      description: "A deep dive into my thoughts about using TypeScript in current projects.",
      image: rooo,
      link: "#",
    },
  ];

  return (
    <section className="py-16 blog bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">From the Blog</h2>
            <p className="text-gray-600 mt-2">
              Read more about my thoughts as a full-stack developer.
            </p>
          </div>
          <button className="px-6 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition">
            Show all →
          </button>
        </div>

        {/* Blog Cards */}
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-24 h-24 bg-gray-200 overflow-hidden rounded-md">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{post.description}</p>
              </div>

              {/* Read More */}
              <a
                href={post.link}
                className="text-sm font-medium text-purple-600 ml-4 hover:underline"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
