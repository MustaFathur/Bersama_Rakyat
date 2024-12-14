import React from "react";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import { ArrowRight, ChevronRight, Users, Building, BookOpen, MessageSquare, Eye, MessageCircle } from 'lucide-react';

const Homepage = () => {
  const stats = [
    { value: "50+", label: "Program Pemerintah", description: "Program aktif yang sedang berjalan" },
    { value: "1000+", label: "Diskusi Aktif", description: "Forum diskusi yang berkembang" },
    { value: "25K+", label: "Pengguna Aktif", description: "Pengguna yang berpartisipasi aktif" },
    { value: "100+", label: "Daerah Terjangkau", description: "Wilayah yang telah terjangkau" }
  ];

  const governmentPrograms = [
    {
      title: "Pemerintahan Pusat",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
      image: "/IKN.png"
    },
    {
      title: "Pemerintahan Daerah",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
      image: "/Istana.png"
    }
  ];

  const discussions = [
    {   
      tag: "IKN #Infrastruktur2024",
      title: "Evaluasi Program Pembangunan Infrastruktur 2024",
      description: "Analisis mendalam mengenai pencapaian dan tantangan dalam program pembangunan infrastruktur nasional tahun 2024.",
      views: "1,231",
      comments: "85",
      image: "/pp1.jpeg",
      author: "Prof. Khalied",
      timeAgo: "2 jam yang lalu",
      category: "Infrastruktur"
    },
    {
      tag: "Pendidikan2024 #KurikulumMerdeka",
      title: "Implementasi Kurikulum Baru di Sekolah Negeri",
      description: "Pembahasan mengenai efektivitas dan tantangan dalam penerapan kurikulum pendidikan terbaru di sekolah negeri.",
      views: "958",
      comments: "67",
      image: "/pp2.jpeg",
      author: "Talitha",
      timeAgo: "4 jam yang lalu",
      category: "Pendidikan"
    },
    {
      tag: "KesehatanPublik #BPJS",
      title: "Peningkatan Layanan BPJS di Daerah Terpencil",
      description: "Evaluasi dan solusi untuk meningkatkan akses layanan kesehatan BPJS di daerah-daerah terpencil Indonesia.",
      views: "847",
      comments: "45",
      image: "/pp3.jpeg",
      author: "Dr. Nouval",
      timeAgo: "5 jam yang lalu",
      category: "Kesehatan"
    }
  ];

  const features = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Program Pemerintah",
      description: "Pantau dan evaluasi program-program pemerintah secara real-time dengan data terverifikasi"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Perundang-undangan",
      description: "Akses dokumen hukum dan perundangan dengan mudah melalui sistem pencarian yang canggih"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Kolaborasi",
      description: "Berpartisipasi dalam diskusi dan sampaikan aspirasi Anda bersama masyarakat lainnya"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Forum Diskusi",
      description: "Ruang diskusi interaktif untuk membahas isu-isu terkini dengan para ahli dan masyarakat"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-700/5 to-red-700/10 pt-32 pb-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <div className="inline-flex items-center rounded-full px-6 py-2 bg-red-700/10 text-red-700">
                  <span className="text-sm font-semibold">Bersama Rakyat, Untuk Indonesia</span>
                </div>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Kawal Setiap Program <span className="text-red-700">Pemerintah</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Bersama rakyat kita wujudkan pemerintahan yang bersih dan transparan. 
                Pastikan setiap pelaksana pemerintah menjalankan tugasnya dengan penuh 
                tanggung jawab dan berorientasi pada kesejahteraan rakyat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors">
                  Mulai Sekarang
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-6 py-3 rounded-lg transition-colors">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/Garuda.png"
                  alt="Garuda"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700/20 to-red-700/10 rounded-2xl transform rotate-3 scale-105 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-red-700">{stat.value}</h3>
                  <div className="space-y-1">
                    <p className="text-lg font-semibold text-gray-900">{stat.label}</p>
                    <p className="text-sm text-gray-500">{stat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Fitur Unggulan Platform</h2>
            <p className="text-xl text-gray-600">
              Kami menyediakan berbagai fitur inovatif untuk memudahkan Anda 
              dalam mengawasi dan berpartisipasi dalam program pemerintah
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-red-700/10 flex items-center justify-center text-red-700 group-hover:bg-red-700 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                  <button className="inline-flex items-center text-red-700 font-semibold group-hover:text-red-800">
                    Pelajari Lebih Lanjut
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Program Pemerintah Section */}
            <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Program Pemerintah</h2>
            <p className="text-xl text-gray-600">
              Kawal dan pantau program-program pemerintah untuk memastikan transparansi
              dan akuntabilitas dalam pelaksanaannya
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {governmentPrograms.map((program, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-8">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                  <button className="inline-flex items-center text-red-700 font-semibold group-hover:text-red-800">
                    Pelajari Lebih Lanjut
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Discussions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Diskusi Terkini</h2>
              <p className="text-xl text-gray-600">
                Ikuti pembahasan terkini seputar program dan kebijakan pemerintah
              </p>
            </div>
            <button className="border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-4 py-2 rounded-lg transition-colors flex items-center">
              Lihat Semua
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {discussions.map((discussion, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm">{discussion.category}</span>
                    <span className="text-sm text-gray-500">#{discussion.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight hover:text-red-700 cursor-pointer">
                    {discussion.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">{discussion.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Eye className="w-4 h-4" />
                        <span>{discussion.views}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <MessageCircle className="w-4 h-4" />
                        <span>{discussion.comments}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200">
                        <img
                          src={discussion.image}
                          alt="Author"
                          className="w-full h-full object-cover rounded-full"
                        />
                        </div>
                      <div>
                        <p className="text-sm font-medium">{discussion.author}</p>
                        <p className="text-xs text-gray-500">{discussion.timeAgo}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Bergabung Sekarang</h2>
            <p className="text-xl text-gray-600">
              Jadilah bagian dari perubahan. Bersama kita wujudkan Indonesia yang lebih baik 
              melalui pengawasan dan partisipasi aktif dalam program pemerintah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-colors">
                Daftar Gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-6 py-3 rounded-lg transition-colors">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;