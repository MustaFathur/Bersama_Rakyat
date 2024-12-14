import Navbar from "./Layout/Navbar"
import Footer from "./Layout/Footer"
import { Star, TrendingUp, MapPin, Award } from 'lucide-react';

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
    {
        title: "Pusat Program 5",
        description: "Description for program 5.",
        moreInfo: "Details about program 5",
        icon: <Star color="#FFD700" />,
        category: "Pendidikan",
        progress: 90
    },
    {
        title: "Pusat Program 6",
        description: "Description for program 6.",
        moreInfo: "Details about program 6",
        icon: <MapPin color="#4287f5" />,
        category: "Kesehatan",
        progress: 70
    },
];

const PemerintahPusat = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="w-3/4 mx-auto mt-12 flex flex-col">
                <h1 className="text-center text-4xl font-bold mb-6">Pemerintah Pusat</h1>
            </div>
            <div className="grid grid-cols-3 gap-4 my-4 px-8">
                {cardDataPusat.map((data, index) => (
                    <div
                        key={index}
                        className="card w-full shadow-xl transform hover:scale-105 transition duration-300"
                    >
                        <figure>
                            <img
                                src={data.image}
                                alt={`Card ${index + 1}`}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                        </figure>
                        <div className="text-center py-2 bg-gray-100 rounded-b-lg">
                            <h2 className="text-lg font-semibold">{data.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default PemerintahPusat;
