import React from "react";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

const governmentData = [
    {
        title: "Presiden & Wakil Presiden",
        image: "/presiden-wapres.png",
        link: "/pemerintahan/presiden-wapres"
    },
    {
        title: "Dewan Perwakilan Rakyat RI",
        image: "/dpr-ri.png",
        link: "/pemerintahan/dpr-ri"
    },
    {
        title: "Kementrian",
        image: "/kementrian.png",
        link: "/pemerintahan/kementrian"
    },
    {
        title: "Dewan Perwakilan Daerah RI",
        image: "/dpd-ri.png",
        link: "/pemerintahan/dpd-ri"
    },
    {
        title: "Majelis Permusyawaratan Rakyat RI",
        image: "/mpr-ri.png",
        link: "/pemerintahan/mpr-ri"
    },
    {
        title: "Badan Pemeriksaan Keuangan",
        image: "/badan-pemeriksa-keuangan.png",
        link: "/pemerintahan/bpk"
    }
];

const PemerintahPusat = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            
            <main className="flex-grow container mx-auto px-4 py-12">
                {/* Header */}
                <h1 className="text-3xl font-bold text-center mb-16">Pemerintahan Pusat</h1>

                {/* Government Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {governmentData.map((item, index) => (
                        <a 
                            key={index}
                            href={item.link}
                            className="group"
                        >
                            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="aspect-square relative p-6">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="p-4 text-center bg-white">
                                    <h2 className="text-lg font-semibold text-gray-900">
                                        {item.title}
                                    </h2>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PemerintahPusat;