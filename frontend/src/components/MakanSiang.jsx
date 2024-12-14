import React from "react";
import { ChevronRight, ThumbsUp, ThumbsDown, Eye } from 'lucide-react';
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

const publicRatings = [
    { label: "Kepuasan Publik", value: 86 },
    { label: "Rating Program", value: 78 },
    { label: "Persentase teraliasi", value: 94 },
    { label: "Indeks Kepercayaan", value: 73 }
];

const programDetails = [
    { label: "Target", value: "Anak anak Sekolah dan Ibu Hamil" },
    { label: "Durasi", value: "Selama Periode Pemerintahan 2024-2029" },
    { label: "Status", value: "Pelaksanaan" },
    { label: "Penanggung Jawab", value: "Presiden Republik Indonesia" },
    { label: "Wilayah", value: "Seluruh Wilayah di Indonesia" }
];

const comments = [
    {
        id: 1,
        username: "khalied",
        tag: "#proker #presiden #2024",
        content: "Saya setuju , tapi apakah anggarannya cukup ?",
        likes: "12/b",
        dislikes: "300",
        views: "120k"
    },
    {
        id: 2,
        username: "khalied",
        tag: "#proker #presiden #2024",
        content: "Saya setuju , tapi apakah anggarannya cukup ?",
        likes: "12/b",
        dislikes: "300",
        views: "120k"
    }
];

const MakanSiang = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Makan Siang Bergizi Gratis</h1>
                    <p className="text-gray-600">Program Presiden Republik Indonesia</p>
                </div>

                {/* Main Image */}
                <div className="mb-8">
                    <img
                        src="/anti-stunting.png"
                        alt="Program Makan Siang"
                        className="w-full rounded-xl"
                    />
                </div>

                {/* Description */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Deskripsi</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Program Makan Siang Gratis adalah inisiatif untuk memastikan anak-anak sekolah mendapatkan asupan gizi 
                        yang cukup melalui penyediaan makan siang sehat setiap hari. Program ini bertujuan untuk meningkatkan 
                        konsentrasi belajar, kesehatan siswa, dan meringankan beban ekonomi keluarga. Dengan melibatkan petani 
                        lokal sebagai pemasok bahan makanan, program ini juga mendukung pemberdayaan ekonomi masyarakat setempat.
                    </p>
                </div>

                {/* Program Details */}
                <div className="mb-8 space-y-4">
                    {programDetails.map((detail, index) => (
                        <div key={index} className="flex border-b border-gray-200 py-3">
                            <span className="font-semibold w-48">{detail.label}</span>
                            <span className="text-gray-600">{detail.value}</span>
                        </div>
                    ))}
                </div>

                {/* Document Button */}
                <div className="mb-12">
                    <button className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition-colors">
                        Dokumen Terkait
                    </button>
                </div>

                {/* Public Ratings */}
                <div className="bg-gray-50 rounded-xl p-8 mb-12">
                    <h2 className="text-xl font-bold mb-6">Penilaian Masyarakat</h2>
                    <div className="space-y-6">
                        {publicRatings.map((rating, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>{rating.label}</span>
                                    <span className="font-semibold">{rating.value}% Puas</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-red-700 h-2 rounded-full"
                                        style={{ width: `${rating.value}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Public Comments */}
                <div>
                    <h2 className="text-xl font-bold mb-6">Komentar Publik</h2>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4 mb-8">
                        <button className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition-colors">
                            Forum Diskusi
                        </button>
                        <button className="border border-red-700 text-red-700 px-6 py-2 rounded-lg hover:bg-red-50 transition-colors">
                            Tanggapan
                        </button>
                        <button className="border border-red-700 text-red-700 px-6 py-2 rounded-lg hover:bg-red-50 transition-colors">
                            Survey Terkait
                        </button>
                    </div>

                    {/* Comments Section */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Tanggapan Teratas</h3>
                        {comments.map((comment) => (
                            <div key={comment.id} className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="font-medium">{comment.username}</span>
                                    <span className="text-sm text-red-700">{comment.tag}</span>
                                </div>
                                <p className="text-gray-600 mb-4">{comment.content}</p>
                                <div className="flex items-center gap-6 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <ThumbsUp className="w-4 h-4" />
                                        <span>{comment.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ThumbsDown className="w-4 h-4" />
                                        <span>{comment.dislikes}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Eye className="w-4 h-4" />
                                        <span>{comment.views}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MakanSiang;