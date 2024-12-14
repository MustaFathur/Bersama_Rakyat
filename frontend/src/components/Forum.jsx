import React from "react";
import { Search, ThumbsUp, ThumbsDown, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

const forumData = [
    {
        id: 1,
        username: "khalled",
        tags: "#proker #presiden #2024",
        content: "Saya setuju , tapi apakah anggarannya cukup ?",
        likes: "12rb",
        dislikes: "300",
        views: "120k",
        date: "12-10-2024",
        image: "/Proker.png",
        slug: "proker"
    },
    {
        id: 2,
        username: "khalled",
        tags: "#proker #presiden #2024",
        content: "Saya setuju , tapi apakah anggarannya cukup ?",
        likes: "12rb",
        dislikes: "300",
        views: "120k",
        date: "12-10-2024",
        image: "/Proker.png",
        slug: "proker-2"
    },
    {
        id: 3,
        username: "khalled",
        tags: "#proker #presiden #2024",
        content: "Saya setuju , tapi apakah anggarannya cukup ?",
        likes: "12rb",
        dislikes: "300",
        views: "120k",
        date: "12-10-2024",
        image: "/Proker.png",
        slug: "proker-3"
    }
];

const tags = [
    "#proker",
    "#presiden",
    "#wakilpresiden",
    "#2024",
    "#dewanperwakilanrakyat",
    "#mpr",
    "#dewanperwakilandaerah",
    "#kemenkumham",
    "#kominfo",
    "#dinaspendidikan",
    "#dinaskesehatan"
];

const Forum = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold mb-8">Forum Diskusi</h1>

                {/* Search Bar */}
                <div className="relative mb-12">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
                    />
                </div>

                {/* Forum Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Left Column - Forum Trending */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-6">Forum Trending</h2>
                        <div className="space-y-4">
                            {forumData.map((forum) => (
                                <Link 
                                    key={forum.id}
                                    to={`/forum/${forum.slug}`}
                                    className="block group"
                                >
                                    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-transparent hover:border-red-100">
                                        <div className="flex justify-between gap-6">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="font-medium text-gray-900">{forum.username}</span>
                                                    <span className="text-red-700 text-sm">{forum.tags}</span>
                                                    <span className="text-gray-400 text-sm">{forum.date}</span>
                                                </div>
                                                <p className="text-gray-600 mb-4 group-hover:text-gray-900 transition-colors">
                                                    {forum.content}
                                                </p>
                                                <div className="flex items-center gap-6 text-sm text-gray-500">
                                                    <div className="flex items-center gap-2">
                                                        <ThumbsUp className="w-4 h-4" />
                                                        <span>{forum.likes}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <ThumbsDown className="w-4 h-4" />
                                                        <span>{forum.dislikes}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Eye className="w-4 h-4" />
                                                        <span>{forum.views}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <div className="overflow-hidden rounded-lg">
                                                    <img 
                                                        src={forum.image} 
                                                        alt="" 
                                                        className="w-24 h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Create Forum */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-xl font-bold mb-6">Buat Forum</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 mb-2">Nama Forum</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
                                        placeholder="Nama Forum"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Tag</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
                                        placeholder="Tag"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Foto</label>
                                    <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                                        <div className="flex flex-col items-center">
                                            <div className="mb-3">
                                                <img src="/api/placeholder/64/64" alt="upload" className="w-16 h-16 opacity-50" />
                                            </div>
                                            <p className="text-sm text-gray-500">
                                                Drag & drop files or {" "}
                                                <span className="text-red-700 hover:text-red-800 cursor-pointer">
                                                    Browse
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition-colors">
                                    Buat Forum
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tags Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Cari Berdasarkan Tag</h2>
                    <div className="flex flex-wrap gap-3">
                        {tags.map((tag, index) => (
                            <button
                                key={index}
                                className="px-4 py-2 rounded-full bg-red-700 text-white hover:bg-red-800 transition-colors"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Forum;