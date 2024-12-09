import React from "react";
import { Link } from "react-router-dom";

const blogs = [
    {
        id: "iphone-15-pro",
        title: "The Latest iPhone 15 Pro Review",
        date: "2024-12-01",
        excerpt: "Discover the incredible features and performance of the iPhone 15 Pro.",
    },
    {
        id: "macbook-air-m3",
        title: "MacBook Air M3: Worth the Hype?",
        date: "2024-12-03",
        excerpt: "Is Apple's M3 chip the game-changer it claims to be? Find out in this review.",
    },
    {
        id: "galaxy-s24-ultra",
        title: "Samsung Galaxy S24 Ultra: The King of Android",
        date: "2024-12-05",
        excerpt: "Unpacking the power and innovation behind Samsung's flagship device.",
    },
    {
        id: "sony-wh-1000xm5",
        title: "Sony WH-1000XM5: Audio Bliss",
        date: "2024-12-07",
        excerpt: "Experience unparalleled noise cancellation and audio quality with Sony's best headphones yet.",
    },
    {
        id: "garmin-epix-pro-gen-2",
        title: "Garmin EPIX Pro Gen 2",
        date: "2024-12-09",
        excerpt: "Experience unparalleled Health Tracking and amazing Hikes.",
    },

];

const BlogList = () => {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10 tracking-wide">
                Latest Tech Reviews
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="relative bg-white rounded-lg shadow-md p-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-500"
                    >
                        <h2 className="text-2xl font-semibold text-blue-800 hover:text-yellow-500 transition-all">
                            {blog.title}
                        </h2>
                        <p className="text-sm text-gray-500 mt-2 italic">{blog.date}</p>
                        <p className="text-gray-600 mt-4">{blog.excerpt}</p>
                        <Link to={`/blogs/${blog.id}`}>
                            <button className="absolute bottom-4 right-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-300">
                                Read More
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
