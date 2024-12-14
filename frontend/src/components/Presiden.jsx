import React from "react";
import { ChevronRight, ArrowRight, Users, Calendar, Award } from 'lucide-react';
import { Link } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

const programData = [
    {
        number: "1",
        title: "Makan Siang Bergizi Gratis",
        description: "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy...",
        image: "/makan-gratis.webp",
        watchers: "500ribu+ orang memantau program ini",
        slug: "pemerintah-pusat/presiden/makan-siang"
    },
    {
        number: "2",
        title: "Makan Siang Bergizi Gratis",
        description: "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy...",
        image: "/makan-gratis.webp",
        watchers: "500ribu+ orang memantau program ini",
        slug: "pemerintah-pusat/presiden/makan-siang-2"
    },
    {
        number: "3",
        title: "Makan Siang Bergizi Gratis",
        description: "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy...",
        image: "/makan-gratis.webp",
        watchers: "500ribu+ orang memantau program ini",
        slug: "pemerintah-pusat/presiden/makan-siang-3"
    },
    {
        number: "4",
        title: "Makan Siang Bergizi Gratis",
        description: "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy...",
        image: "/makan-gratis.webp",
        watchers: "500ribu+ orang memantau program ini",
        slug: "pemerintah-pusat/presiden/makan-siang-4"
    }
];

const Presiden = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Simplified Elegant Header Section */}
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                        {/* Clean Banner */}
                        <div className="relative h-56 lg:h-64 bg-red-700">
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="relative h-full flex items-center justify-center">
                                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                                    Presiden dan Wakil Presiden
                                </h1>
                            </div>
                        </div>

                        <div className="px-6 lg:px-12">
                            {/* Elegant Profile Image */}
                            <div className="flex justify-center">
                                <div className="relative -mt-20 lg:-mt-24">
                                    <div className="w-64 lg:w-72 overflow-hidden border-4 border-white shadow-lg">
                                        <img
                                            src="/presiden.jpeg"
                                            alt="Presiden dan Wakil Presiden"
                                            className="w-full h-auto object-cover transform hover:scale-102 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Clean Profile Info */}
                            <div className="text-center mt-8 mb-16">
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Prabowo Subianto dan Gibran Rakabuming Raka
                                </h2>
                                <span className="inline-block px-6 py-2 bg-red-50 text-red-700 rounded-full text-base font-medium">
                                    Presiden dan Wakil Presiden Republik Indonesia
                                </span>
                            </div>

                            {/* Minimal Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pb-16">
                                <div className="flex flex-col items-center py-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
                                    <Calendar className="w-7 h-7 text-red-700 mb-4" />
                                    <span className="text-gray-500 mb-2">Masa Jabatan</span>
                                    <span className="text-xl font-bold text-gray-900">2024 - 2029</span>
                                </div>

                                <div className="flex flex-col items-center py-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
                                    <div className="w-7 h-7 text-red-700 mb-4">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                                        </svg>
                                    </div>
                                    <span className="text-gray-500 mb-2">Kedudukan</span>
                                    <span className="text-xl font-bold text-gray-900">Jakarta</span>
                                </div>

                                <div className="flex flex-col items-center py-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
                                    <Award className="w-7 h-7 text-red-700 mb-4" />
                                    <span className="text-gray-500 mb-2">Status</span>
                                    <span className="text-xl font-bold text-gray-900">Aktif</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 flex items-center">
                        <span className="text-red-700 mr-2">#</span>
                        Trending di Pembahasan
                    </h2>

                    <div className="space-y-4">
                        {programData.map((program, index) => (
                            <Link 
                                key={index}
                                to={`/program/${program.slug}`}
                                className="block group"
                            >
                                <div className="bg-white rounded-2xl border border-gray-100 group-hover:border-red-100 group-hover:shadow-sm transition-all duration-300">
                                    <div className="flex gap-6 p-6">
                                        {/* Number */}
                                        <div className="text-3xl font-bold text-red-700/20 group-hover:text-red-700/30 transition-colors">
                                            {program.number}
                                        </div>

                                        {/* Image */}
                                        <div className="flex-shrink-0 hidden sm:block overflow-hidden rounded-xl">
                                            <img
                                                src={program.image}
                                                alt={program.title}
                                                className="w-28 h-28 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="flex-grow">
                                            <div className="flex flex-col h-full">
                                                <div className="mb-4">
                                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300 mb-2">
                                                        {program.title}
                                                    </h3>
                                                    <p className="text-gray-600 line-clamp-2">
                                                        {program.description}
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between mt-auto">
                                                    <div className="flex items-center text-sm text-gray-500">
                                                        <Users className="w-4 h-4 mr-2" />
                                                        <span>{program.watchers}</span>
                                                    </div>
                                                    <span className="text-red-700 group-hover:text-red-800 text-sm font-medium flex items-center">
                                                        Lihat Detail
                                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link 
                            to="/program"
                            className="inline-flex items-center justify-center bg-red-700 text-white px-8 py-3 rounded-xl hover:bg-red-800 transition-colors duration-300"
                        >
                            Lihat Semua Program
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Presiden;