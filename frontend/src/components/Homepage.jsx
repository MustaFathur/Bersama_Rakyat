import React from "react";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="./public/Garuda.png"
                        className="max-w-sm rounded-lg"
                        alt="Hero"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Bersama Rakyat</h1>
                        <p className="py-6">
                            Kawal Setiap Program Pemerintah 
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt mi sed tincidunt blandit. Nullam et dui risus. Aenean cursus dapibus 
                        </p>
                        <div className="flex">
                            <button className="btn bg-red-800 hover:bg-red-600 text-white mr-8">Get Started</button>
                            <button className="btn bg-red-800 hover:bg-red-600 text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;
