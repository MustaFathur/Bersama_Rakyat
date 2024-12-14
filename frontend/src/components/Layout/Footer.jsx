import React from "react";
import { Youtube, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-red-700 mt-16 lg:mt-24">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-white text-2xl font-bold">Bersama Rakyat</h2>
                        <p className="text-red-100/80 text-sm leading-relaxed">
                            Portal informasi resmi untuk memantau program kerja dan perkembangan kebijakan pemerintah Indonesia.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h6 className="text-white font-semibold mb-4">Quick Links</h6>
                        <ul className="space-y-2">
                            <li>
                                <a href="/beranda" className="text-red-100/80 hover:text-white transition-colors">
                                    Beranda
                                </a>
                            </li>
                            <li>
                                <a href="/program" className="text-red-100/80 hover:text-white transition-colors">
                                    Program
                                </a>
                            </li>
                            <li>
                                <a href="/forum" className="text-red-100/80 hover:text-white transition-colors">
                                    Forum
                                </a>
                            </li>
                            <li>
                                <a href="/berita" className="text-red-100/80 hover:text-white transition-colors">
                                    Berita
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Lembaga */}
                    <div>
                        <h6 className="text-white font-semibold mb-4">Lembaga Terkait</h6>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-red-100/80 hover:text-white transition-colors">
                                    Kementerian
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-red-100/80 hover:text-white transition-colors">
                                    DPR RI
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-red-100/80 hover:text-white transition-colors">
                                    MPR RI
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-red-100/80 hover:text-white transition-colors">
                                    Kominfo
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h6 className="text-white font-semibold mb-4">Legal</h6>
                        <ul className="space-y-2">
                            <li>
                                <a href="/privacy" className="text-red-100/80 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="text-red-100/80 hover:text-white transition-colors">
                                    Terms of Use
                                </a>
                            </li>
                            <li>
                                <a href="/cookie" className="text-red-100/80 hover:text-white transition-colors">
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-red-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-red-100/80 text-sm">
                            © {new Date().getFullYear()} Bersama Rakyat. All Rights Reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-6">
                            <a href="#" className="text-red-100/80 hover:text-white transition-colors">
                                <Youtube size={20} />
                            </a>
                            <a href="#" className="text-red-100/80 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-red-100/80 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-red-100/80 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;