import React from "react";
import { useParams } from "react-router-dom";
import { ThumbsUp, ThumbsDown, Eye } from "lucide-react";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

// Sample forum thread data
const forumThread = {
    id: 1,
    trending: "#Trending 1",
    title: "Saya setuju , tapi apakah anggarannya cukup ?",
    username: "khalied",
    likes: "12rb",
    dislikes: "300",
    views: "120k",
    tags: "#proker #presiden #2024",
    image: "/Proker.png",
    comments: [
        {
            id: 1,
            username: "khalied",
            tags: "#proker #presiden #2024",
            content: "Sabar dong, kan presiden kita baru saja dilantik bulan november lalu",
            likes: "12rb",
            dislikes: "300",
            views: "120k",
            date: "12-10-2024"
        },
        {
            id: 2,
            username: "khalied",
            tags: "#proker #presiden #2024",
            content: "Tapi agak kurang yakin sih sama prokernya, mengingat ini berimbas ke PPN yang naik 12%",
            likes: "12rb",
            dislikes: "300",
            views: "120k",
            date: "12-10-2024"
        },
        {
            id: 3,
            username: "khalied",
            tags: "#proker #presiden #2024",
            content: "Kita tunggu saja kedepannya bagaimana",
            likes: "12rb",
            dislikes: "300",
            views: "120k",
            date: "12-10-2024"
        }
    ]
};

const DetailForum = () => {
    const { slug } = useParams();

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Main Post */}
                <div className="mb-8">
                    <span className="text-gray-500 block mb-4">{forumThread.trending}</span>
                    <h1 className="text-3xl font-bold mb-4">{forumThread.title}</h1>
                    
                    <div className="flex items-center mb-4">
                        <span className="font-medium mr-4">{forumThread.username}</span>
                        <div className="flex items-center space-x-4 text-gray-500">
                            <div className="flex items-center">
                                <ThumbsUp className="w-5 h-5 mr-1" />
                                <span>{forumThread.likes}</span>
                            </div>
                            <div className="flex items-center">
                                <ThumbsDown className="w-5 h-5 mr-1" />
                                <span>{forumThread.dislikes}</span>
                            </div>
                            <div className="flex items-center">
                                <Eye className="w-5 h-5 mr-1" />
                                <span>{forumThread.views}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <span className="text-sm font-medium">Tag:</span>
                        <span className="text-red-700 text-sm ml-2">{forumThread.tags}</span>
                    </div>

                    <div className="mb-8">
                        <img
                            src={forumThread.image}
                            alt={forumThread.title}
                            className="w-full rounded-2xl"
                        />
                    </div>
                </div>

                {/* Comments Section */}
                <div className="space-y-4">
                    {forumThread.comments.map((comment) => (
                        <div 
                            key={comment.id}
                            className="bg-white rounded-xl shadow-sm p-4 border border-gray-100"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">{comment.username}</span>
                                    <span className="text-red-700 text-sm">{comment.tags}</span>
                                </div>
                                <span className="text-gray-400 text-sm">{comment.date}</span>
                            </div>
                            
                            <p className="text-gray-800 mb-4">{comment.content}</p>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center">
                                    <ThumbsUp className="w-4 h-4 mr-1" />
                                    <span>{comment.likes}</span>
                                </div>
                                <div className="flex items-center">
                                    <ThumbsDown className="w-4 h-4 mr-1" />
                                    <span>{comment.dislikes}</span>
                                </div>
                                <div className="flex items-center">
                                    <Eye className="w-4 h-4 mr-1" />
                                    <span>{comment.views}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Comments Button */}
                <div className="mt-8 text-center">
                    <button className="bg-red-700 text-white px-8 py-3 rounded-xl hover:bg-red-800 transition-colors">
                        Lihat Komentar Lainnya
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default DetailForum;