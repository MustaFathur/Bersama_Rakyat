// Import komponen yang diperlukan
import React from "react";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

// Data untuk kartu Pemerintahan Pusat
const cardDataPusat = [
    { title: "Pusat Program 1", description: "Description for program 1.", moreInfo: "Jokowi" },
    { title: "Pusat Program 2", description: "Description for program 2.", moreInfo: "Details about program 2" },
    { title: "Pusat Program 3", description: "Description for program 3.", moreInfo: "Details about program 3" },
    { title: "Pusat Program 4", description: "Description for program 4.", moreInfo: "Details about program 4" },
];

// Data untuk kartu Pemerintahan Daerah
const cardDataDaerah = [
    { title: "Daerah Program 1", description: "Description for regional program 1.", moreInfo: "More about region 1" },
    { title: "Daerah Program 2", description: "Description for regional program 2.", moreInfo: "More about region 2" },
    { title: "Daerah Program 3", description: "Description for regional program 3.", moreInfo: "More about region 3" },
    { title: "Daerah Program 4", description: "Description for regional program 4.", moreInfo: "More about region 4" },
];

// Komponen utama
const ProgramPemerintah = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Konten utama */}
            <div className="w-3/4 mx-auto mt-12 flex flex-col">
                <h1 className="text-4xl font-bold mb-6 text-center">Program Pemerintah</h1>
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Cari program"
                        className="input input-bordered w-full mb-6"
                    />
                </div>

                {/* Pemerintahan Pusat */}
                <h2 className="text-2xl font-semibold mt-4">Pemerintahan Pusat</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                    {cardDataPusat.map((data, index) => (
                        <div key={index} className="card bg-base-100 image-full w-full shadow-xl h-64">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt={`Card ${index + 1}`}
                                />
                            </figure>
                            <div className="card-body relative">
                                {/* <h2 className="card-title">{data.title}</h2>
                                <p>{data.description}</p> */}
                                <div className="absolute bottom-2 right-2 text-sm font-medium">
                                    {data.moreInfo}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pemerintahan Daerah */}
                <h2 className="text-2xl font-semibold mt-4">Pemerintahan Daerah</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                    {cardDataDaerah.map((data, index) => (
                        <div key={index} className="card bg-base-100 image-full w-full shadow-xl h-64">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt={`Card ${index + 1}`}
                                />
                            </figure>
                            <div className="card-body relative">
                                {/* <h2 className="card-title">{data.title}</h2>
                                <p>{data.description}</p> */}
                                <div className="absolute bottom-2 right-2 text-sm font-medium">
                                    {data.moreInfo}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Proker Trending */}
                <h2 className="text-2xl font-semibold mt-4">Proker Trending Seminggu Terakhir</h2>
                <div className="grid grid-cols-1 gap-4 my-8 flex flex-row">
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className="hero h-24 rounded-lg"
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
