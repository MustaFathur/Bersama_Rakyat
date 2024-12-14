import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

const trendingNews = [
    {
        id: 1,
        title: "Makan Siang Bergizi Gartis",
        description: "Program Makan Siang Gratis adalah inisiatif untuk memastikan anak-anak sekolah mendapatkan asupan gizi yang cukup melalui penyediaan makan siang sehat setiap hari. Program ini bertujuan untuk meningkatkan konsentrasi belajar, kesehatan siswa, dan meringankan beban ekonomi....",
        image: "/anti-stunting.png",
        link: "baca selengkapnya"
    },
    // Add more trending items as needed
];

const newsData = [
    {
        id: 1,
        source: "detik.com",
        sourceLogo: "/detik.png",
        title: "Prabowo berjanji akan melaksanakan makan gratis pada 2025",
        date: "12-10-2024",
        image: "/makan-gratis.webp",
        link: "baca selengkapnya"
    },
    {
        id: 2,
        source: "detik.com",
        sourceLogo: "/detik.png",
        title: "Prabowo berjanji akan melaksanakan makan gratis pada 2025",
        date: "12-10-2024",
        image: "/makan-gratis.webp",
        link: "baca selengkapnya"
    },
    {
        id: 3,
        source: "detik.com",
        sourceLogo: "/detik.png",
        title: "Prabowo berjanji akan melaksanakan makan gratis pada 2025",
        date: "12-10-2024",
        image: "/makan-gratis.webp",
        link: "baca selengkapnya"
    }
];

const Berita = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % trendingNews.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + trendingNews.length) % trendingNews.length);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Trending Section */}
                <h1 className="text-3xl font-bold mb-6">Trending</h1>

                {/* Carousel with Increased Height */}
                <div className="relative mb-12">
                    <div className="overflow-hidden rounded-2xl relative">
                        <div className="relative h-[600px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                            <img
                                src={trendingNews[currentSlide].image}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                    {trendingNews[currentSlide].title}
                                </h2>
                                <p className="text-white text-base md:text-lg lg:text-xl mb-4 max-w-3xl">
                                    {trendingNews[currentSlide].description}
                                </p>
                                <Link 
                                    to="/berita/detail"
                                    className="text-white text-lg hover:underline inline-flex items-center"
                                >
                                    {trendingNews[currentSlide].link}
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>

                {/* News List */}
                <div className="space-y-6">
                    {newsData.map((news) => (
                        <Link 
                            key={news.id}
                            to="/berita/detail"
                            className="block group"
                        >
                            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
                                <div className="flex gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-3">
                                            <img 
                                                src={news.sourceLogo} 
                                                alt={news.source} 
                                                className="w-6 h-6 rounded-full"
                                            />
                                            <span className="font-medium text-gray-900">{news.source}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-red-700 transition-colors">
                                            {news.title}
                                        </h3>
                                        <div className="flex items-center text-gray-500">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            <span>{news.date}</span>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div className="overflow-hidden rounded-lg">
                                            <img 
                                                src={news.image}
                                                alt=""
                                                className="w-32 h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <span className="text-gray-500 group-hover:text-red-700 inline-flex items-center transition-colors">
                                        {news.link}
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Berita;