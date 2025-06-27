

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-pink-50 to-yellow-50 flex flex-col items-center justify-center px-4 py-12 pt-24">
        {/* Hero Section */}
        <section className="w-full max-w-3xl bg-white/90 rounded-3xl shadow-2xl border border-indigo-200 p-8 flex flex-col items-center mb-10 animate-fade-in">
          <div className="text-5xl mb-2 animate-bounce">🚀</div>
          <h1 className="text-4xl font-extrabold text-indigo-800 mb-2 text-center drop-shadow-lg">
            Tentang MagniShip
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-2xl mt-4">
            <span className="font-bold text-pink-700">MagniShip</span> adalah platform revolusioner yang menghubungkan pelanggan, supplier, dan admin dalam satu ekosistem digital pengiriman barang yang <span className="text-indigo-700 font-semibold">mudah</span>, <span className="text-pink-700 font-semibold">aman</span>, dan <span className="text-amber-500 font-semibold">transparan</span>.
          </p>
          <p className="mt-3 text-center text-indigo-600 font-semibold italic">
            “Kami percaya setiap pengiriman adalah awal cerita sukses baru.”
          </p>
        </section>

        {/* Value Section */}
        <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-tr from-pink-200 via-indigo-200 to-yellow-100 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition">
            <span className="text-4xl mb-2">💡</span>
            <div className="text-xl font-bold text-indigo-800 mb-1">Inovasi Tanpa Batas</div>
            <p className="text-gray-700 text-center">
              Kami selalu berinovasi menghadirkan teknologi mutakhir untuk kemudahan semua pihak.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-gradient-to-tr from-yellow-200 via-pink-100 to-indigo-200 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition">
            <span className="text-4xl mb-2">🤝</span>
            <div className="text-xl font-bold text-pink-700 mb-1">Kolaborasi Hebat</div>
            <p className="text-gray-700 text-center">
              Kami membangun jembatan antara pelanggan dan supplier, mempercepat pertumbuhan bisnis Anda.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-gradient-to-tr from-indigo-200 via-yellow-100 to-pink-200 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition">
            <span className="text-4xl mb-2">🔒</span>
            <div className="text-xl font-bold text-amber-700 mb-1">Keamanan & Transparansi</div>
            <p className="text-gray-700 text-center">
              Data dan transaksi Anda terlindungi, transparan, dan dapat dipantau kapan saja.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full max-w-4xl bg-white/80 rounded-2xl shadow-xl p-8 mt-8 mb-4 flex flex-col items-center">
          <div className="text-2xl font-extrabold text-pink-700 mb-2">Tim Kami</div>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Caleb" className="w-20 h-20 rounded-full shadow-lg mb-2" />
              <span className="font-bold text-indigo-800">Caleb</span>
              <span className="text-xs text-gray-500">Lead Developer</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Dewi" className="w-20 h-20 rounded-full shadow-lg mb-2" />
              <span className="font-bold text-pink-700">Eliza</span>
              <span className="text-xs text-gray-500">UI/UX Designer</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/men/77.jpg" alt="Roni" className="w-20 h-20 rounded-full shadow-lg mb-2" />
              <span className="font-bold text-amber-700">John</span>
              <span className="text-xs text-gray-500">Product Manager</span>
            </div>
          </div>
        </section>


      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default About;
