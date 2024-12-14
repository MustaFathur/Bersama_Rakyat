import { useState } from "react";
import { Search, ChevronRight, Clock, Target, User } from 'lucide-react';
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

const pusatData = [
    {
        title: "Presiden dan Wakil Presiden",
        description: "Pimpinan Tertinggi Negara",
        image: "/presiden.png",
        link: "/program/pemerintah-pusat/presiden"
    },
    {
        title: "DPR - RI",
        description: "Dewan Perwakilan Rakyat",
        image: "/dpr.webp",
        link: "/pemerintahan/dpr"
    },
    {
        title: "Kementerian",
        description: "Lembaga Eksekutif Negara",
        image: "/kementrian.png",
        link: "/pemerintahan/kementerian"
    },
    {
        title: "DPD - RI",
        description: "Dewan Perwakilan Daerah",
        image: "/dpd-id.jpg",
        link: "/pemerintahan/dpd"
    }
];

const daerahData = [
    {
        title: "DPRD - Provinsi",
        description: "Legislatif Tingkat Provinsi",
        image: "/DPRD.jpeg",
        link: "/pemerintahan/dprd"
    },
    {
        title: "Dinas Pendidikan",
        description: "Pengelola Sistem Pendidikan",
        image: "/pendidikan.png",
        link: "/pemerintahan/pendidikan"
    },
    {
        title: "Dinas Kesehatan",
        description: "Pelayanan Kesehatan Publik",
        image: "/bpjs.png",
        link: "/pemerintahan/kesehatan"
    },
    {
        title: "Kominfo",
        description: "Komunikasi dan Informatika",
        image: "/kominfo.png",
        link: "/pemerintahan/kominfo"
    }
];

const trendingData = [
    {
        number: "1",
        title: "Makan Siang Gratis",
        owner: "Presiden Republik Indonesia",
        target: "2025",
        image: "/makan-gratis.webp",
        description: "Program bantuan makan siang gratis untuk masyarakat prasejahtera dan pelajar"
    },
    {
        number: "2",
        title: "Rumah untuk Rakyat Kecil",
        owner: "Presiden Republik Indonesia",
        target: "2025",
        image: "/rumah-gratis.jpg",
        description: "Program pembangunan rumah subsidi untuk masyarakat berpenghasilan rendah"
    },
    {
        number: "3",
        title: "Proyek Non Quick Win",
        owner: "Presiden Republik Indonesia",
        target: "2025",
        image: "/non-quick.png",
        description: "Program pembangunan infrastruktur jangka panjang untuk kesejahteraan masyarakat"
    },
    {
        number: "4",
        title: "Rumah untuk Rakyat Kecil",
        owner: "Presiden Republik Indonesia",
        target: "2025",
        image: "/rumah-gratis.jpg",
        description: "Pengembangan hunian layak huni untuk masyarakat ekonomi menengah ke bawah"
    },
    {
        number: "5",
        title: "Proyek Non Quick Win",
        owner: "Presiden Republik Indonesia",
        target: "2025",
        image: "/non-quick.png",
        description: "Program strategis nasional untuk pengembangan ekonomi berkelanjutan"
    }
];

const ProgramPemerintah = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeSection, setActiveSection] = useState('all');

    const SectionHeader = ({ title, link }) => (
        <div className="flex justify-between items-center mb-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                <div className="h-1 w-20 bg-red-700 mt-2 rounded-full"></div>
            </div>
            {link && (
                <a 
                    href={link}
                    className="group flex items-center text-sm text-gray-600 hover:text-red-700 transition-colors duration-300"
                >
                    Selengkapnya
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
            )}
        </div>
    );

    const GovernmentCard = ({ item }) => (
        <a 
            href={item.link}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="aspect-square overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.description}
                </p>
            </div>
        </a>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header & Search */}
                <div className="max-w-3xl mx-auto text-center space-y-8 mb-16">
                    <h1 className="text-4xl font-bold text-gray-900">Program Pemerintahan</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Pantau dan evaluasi program-program pemerintah untuk memastikan transparansi
                        dan akuntabilitas dalam pelaksanaannya
                    </p>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cari program pemerintah..."
                            className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent shadow-sm transition-shadow duration-300 hover:shadow-md"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center mb-12 space-x-2">
                    {['all', 'pusat', 'daerah'].map((section) => (
                        <button
                            key={section}
                            onClick={() => setActiveSection(section)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeSection === section
                                    ? 'bg-red-700 text-white shadow-md'
                                    : 'bg-white text-gray-600 hover:bg-red-50'
                            }`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Pemerintahan Pusat */}
                <section className="mb-16">
                    <SectionHeader 
                        title="Pemerintahan Pusat" 
                        link="/program/pemerintah-pusat" 
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pusatData.map((item, index) => (
                            <GovernmentCard key={index} item={item} />
                        ))}
                    </div>
                </section>

                {/* Pemerintahan Daerah */}
                <section className="mb-16">
                    <SectionHeader 
                        title="Pemerintahan Daerah" 
                        link="/pemerintahan-daerah" 
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {daerahData.map((item, index) => (
                            <GovernmentCard key={index} item={item} />
                        ))}
                    </div>
                </section>

                {/* Proker Trending */}
                <section className="mb-16">
                    <SectionHeader title="Proker Trending Seminggu Terakhir" />
                    <div className="space-y-4">
                        {trendingData.map((item, index) => (
                            <div 
                                key={index}
                                className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="relative h-[140px] w-full">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-60">
                                        <div className="h-full p-6 flex flex-col justify-between">
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-2xl text-white font-bold flex items-center gap-2">
                                                        <span>{item.number}#</span>
                                                        {item.title}
                                                    </h3>
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex items-center text-sm text-white">
                                                            <Target className="w-4 h-4 mr-1" />
                                                            Target Realisasi: 
                                                            <span className="text-red-500 ml-1 font-medium">
                                                                {item.target}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center text-sm text-gray-300">
                                                        <User className="w-4 h-4 mr-1" />
                                                        Milik: 
                                                        <span className="text-red-500 ml-1">
                                                            {item.owner}
                                                        </span>
                                                    </div>
                                                    <a 
                                                        href={`/program/${index + 1}`}
                                                        className="text-sm text-white hover:text-red-400 transition-colors duration-300 opacity-0 group-hover:opacity-100 flex items-center gap-1"
                                                    >
                                                        Lihat Detail
                                                        <ChevronRight className="w-4 h-4" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProgramPemerintah;