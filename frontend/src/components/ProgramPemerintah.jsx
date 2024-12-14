import { useState } from "react";
import { Star, TrendingUp, MapPin, Award } from 'lucide-react';
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

// Data untuk kartu Pemerintahan Pusat - Diperkaya
const cardDataPusat = [
    {
        title: "Pusat Program 1",
        description: "Description for program 1.",
        moreInfo: "Jokowi",
        icon: <Star color="#FFD700" />,
        category: "Pembangunan",
        progress: 75
    },
    {
        title: "Pusat Program 2",
        description: "Description for program 2.",
        moreInfo: "Details about program 2",
        icon: <MapPin color="#4287f5" />,
        category: "Infrastruktur",
        progress: 60
    },
    {
        title: "Pusat Program 3",
        description: "Description for program 3.",
        moreInfo: "Details about program 3",
        icon: <Award color="#32CD32" />,
        category: "Ekonomi",
        progress: 85
    },
    {
        title: "Pusat Program 4",
        description: "Description for program 4.",
        moreInfo: "Details about program 4",
        icon: <TrendingUp color="#FF6347" />,
        category: "Sosial",
        progress: 50
    },
];

// Data untuk kartu Pemerintahan Daerah - Diperkaya
const cardDataDaerah = [
    {
        title: "Daerah Program 1",
        description: "Description for regional program 1.",
        moreInfo: "More about region 1",
        icon: <Star color="#FFD700" />,
        category: "Pertanian",
        progress: 70
    },
    {
        title: "Daerah Program 2",
        description: "Description for regional program 2.",
        moreInfo: "More about region 2",
        icon: <MapPin color="#4287f5" />,
        category: "Pariwisata",
        progress: 65
    },
    {
        title: "Daerah Program 3",
        description: "Description for regional program 3.",
        moreInfo: "More about region 3",
        icon: <Award color="#32CD32" />,
        category: "Pendidikan",
        progress: 80
    },
    {
        title: "Daerah Program 4",
        description: "Description for regional program 4.",
        moreInfo: "More about region 4",
        icon: <TrendingUp color="#FF6347" />,
        category: "Kesehatan",
        progress: 55
    },
];

// Komponen utama
const ProgramPemerintah = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Fungsi filter untuk pencarian
    const filteredPusatPrograms = cardDataPusat.filter(data =>
        data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredDaerahPrograms = cardDataDaerah.filter(data =>
        data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderProgressBar = (progress) => (
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Konten utama */}
            <div className="w-3/4 mx-auto mt-12 flex flex-col">
                <h1 className="text-4xl font-bold mb-6 text-center">Program Pemerintah</h1>
                <div className="w-full relative">
                    <input
                        type="text"
                        placeholder="Cari program"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input input-bordered w-full mb-6 pl-10"
                    />
                </div>

                {/* Pemerintahan Pusat */}
                <div className="flex flex-row items-center">
                    <h2 className="text-2xl font-semibold mt-4 flex items-center">
                        <TrendingUp className="text-blue-500 mr-2" />
                        Pemerintahan Pusat
                    </h2>
                    <div className="flex-grow"></div>
                    <a className="text-sm font-semibold mt-4 hover:text-red-600" href="/program/pemerintah-pusat">Selengkapnya</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                    {filteredPusatPrograms.map((data, index) => (
                        <div key={index} className="card bg-base-100 image-full w-full shadow-xl h-64 transform hover:scale-105 transition duration-300">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt={`Card ${index + 1}`}
                                />
                            </figure>
                            <div className="card-body relative">
                                <div className="absolute top-2 right-2 flex items-center">
                                    {data.icon}
                                    <span className="ml-2 text-xs text-white">{data.category}</span>
                                </div>
                                <div className="absolute bottom-2 right-2 text-sm font-medium">
                                    {data.moreInfo}
                                </div>
                                {renderProgressBar(data.progress)}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pemerintahan Daerah */}
                <div className="flex flex-row items-center">
                    <h2 className="text-2xl font-semibold mt-4 flex items-center">
                        <MapPin className="mr-2 text-green-500" />
                        Pemerintahan Daerah
                    </h2>
                    <div className="flex-grow"></div>
                    <a className="text-sm font-semibold mt-4 hover:text-red-600" href="/pemerintahan-daerah">Selengkapnya</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                    {filteredDaerahPrograms.map((data, index) => (
                        <div key={index} className="card bg-base-100 image-full w-full shadow-xl h-64 transform hover:scale-105 transition duration-300">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt={`Card ${index + 1}`}
                                />
                            </figure>
                            <div className="card-body relative">
                                <div className="absolute top-2 right-2 flex items-center">
                                    {data.icon}
                                    <span className="ml-2 text-xs text-white">{data.category}</span>
                                </div>
                                <div className="absolute bottom-2 right-2 text-sm font-medium">
                                    {data.moreInfo}
                                </div>
                                {renderProgressBar(data.progress)}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Proker Trending */}
                <h2 className="text-2xl font-semibold mt-4 flex items-center">
                    <Award className="mr-2 text-yellow-500" />
                    Proker Trending Seminggu Terakhir
                </h2>
                <div className="grid grid-cols-1 gap-4 my-8 flex flex-row">
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className="hero h-24 rounded-lg transform hover:scale-105 transition duration-300"
                            style={{
                                backgroundImage:
                                    "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                            }}
                        >
                            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                            <div className="hero-content text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-2 text-xl font-bold">Trending Program {index + 1}</h1>
                                    <p className="text-sm">Trending description {index + 1}.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ProgramPemerintah;