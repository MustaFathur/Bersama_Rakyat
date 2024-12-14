import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar bg-red-800 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                {/* Logo Section */}
                <div className="flex-1">
                    <a href="/" className="btn btn-ghost text-white text-xl hover:bg-red-700">
                        Bersama Rakyat
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-none text-white">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="/" className="hover:bg-red-700">Beranda</a></li>
                        <li><a href="/program" className="hover:bg-red-700">Program Pemerintah</a></li>
                        <li><a href="/forum" className="hover:bg-red-700">Forum</a></li>
                        <li><a href="/berita" className="hover:bg-red-700">Berita</a></li>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex-none lg:hidden">
                    <button 
                        className="btn btn-ghost text-white"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-red-800 shadow-lg">
                    <ul className="menu menu-vertical p-4 text-white">
                        <li><a href="/" className="hover:bg-red-700">Beranda</a></li>
                        <li><a href="/program" className="hover:bg-red-700">Lembaga Pemerintahan</a></li>
                        <li><a href="/forum" className="hover:bg-red-700">Forum</a></li>
                        <li>
                            <details>
                                <summary className="hover:bg-red-700">Berita</summary>
                                <ul className="bg-red-900 rounded-lg mt-2">
                                    <li><a className="hover:bg-red-700">Link 1</a></li>
                                    <li><a className="hover:bg-red-700">Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;