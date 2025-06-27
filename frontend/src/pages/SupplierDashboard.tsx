// File: src/pages/SupplierDashboard.tsx

import React from "react";
import Footer from "../components/Footer";

const SupplierDashboard: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-yellow-100 via-pink-100 to-indigo-200 flex flex-col">
      {/* Header */}
      <header className="w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r from-pink-600 via-indigo-600 to-yellow-400 shadow-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide drop-shadow-md animate-pulse">
          🌟 Supplier Dashboard MagniShip 🌟
        </h1>
        <button className="bg-white/80 hover:bg-white text-pink-700 font-bold px-6 py-2 rounded-2xl shadow-lg transition-all border border-pink-300">
          Logout
        </button>
      </header>

      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-br from-pink-100 via-yellow-100 to-indigo-200">
        <div className="bg-white/80 rounded-3xl shadow-2xl p-10 max-w-2xl flex flex-col items-center border-2 border-indigo-300">
          <div className="text-5xl mb-4 animate-bounce">🚚✨</div>
          <div className="text-2xl md:text-3xl font-extrabold text-indigo-700 text-center mb-2">
            Selamat Datang, Supplier Hebat!
          </div>
          <div className="text-pink-600 text-lg font-semibold text-center mb-4">
            “Setiap pengiriman adalah awal dari peluang baru”
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <span className="bg-pink-200 text-pink-700 font-bold px-4 py-2 rounded-full shadow transition">Status: Aktif</span>
            <span className="bg-indigo-200 text-indigo-700 font-bold px-4 py-2 rounded-full shadow transition">Level: Gold</span>
          </div>
        </div>
      </section>

      {/* Menu Cards */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12 max-w-5xl mx-auto">
        <div className="bg-gradient-to-tr from-indigo-500 via-pink-300 to-yellow-200 rounded-2xl p-8 shadow-2xl flex flex-col items-center hover:scale-105 transition">
          <span className="text-4xl mb-3">📦</span>
          <div className="text-xl font-bold text-indigo-800 mb-1">Order Masuk</div>
          <div className="text-gray-700 text-center mb-3">
            Pantau dan kelola setiap pesanan yang masuk dengan mudah dan cepat.
          </div>
          <button className="bg-indigo-600 hover:bg-pink-500 text-white px-5 py-2 rounded-xl shadow mt-2 transition">Lihat Order</button>
        </div>
        <div className="bg-gradient-to-tr from-pink-200 via-yellow-100 to-indigo-300 rounded-2xl p-8 shadow-2xl flex flex-col items-center hover:scale-105 transition">
          <span className="text-4xl mb-3">📈</span>
          <div className="text-xl font-bold text-pink-700 mb-1">Statistik & Laporan</div>
          <div className="text-gray-700 text-center mb-3">
            Cek performa penjualan dan raih pencapaian terbaikmu.
          </div>
          <button className="bg-pink-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-xl shadow mt-2 transition">Lihat Statistik</button>
        </div>
        <div className="bg-gradient-to-tr from-yellow-200 via-indigo-100 to-pink-300 rounded-2xl p-8 shadow-2xl flex flex-col items-center hover:scale-105 transition">
          <span className="text-4xl mb-3">💬</span>
          <div className="text-xl font-bold text-yellow-700 mb-1">Pesan & Notifikasi</div>
          <div className="text-gray-700 text-center mb-3">
            Tidak pernah ketinggalan info terbaru dari pelanggan dan sistem.
          </div>
          <button className="bg-yellow-400 hover:bg-pink-400 text-white px-5 py-2 rounded-xl shadow mt-2 transition">Baca Pesan</button>
        </div>
        <div className="bg-gradient-to-tr from-indigo-300 via-pink-100 to-yellow-100 rounded-2xl p-8 shadow-2xl flex flex-col items-center hover:scale-105 transition">
          <span className="text-4xl mb-3">⚙️</span>
          <div className="text-xl font-bold text-indigo-700 mb-1">Pengaturan Akun</div>
          <div className="text-gray-700 text-center mb-3">
            Update profil, ganti password, dan kelola keamanan akun.
          </div>
          <button className="bg-indigo-700 hover:bg-pink-600 text-white px-5 py-2 rounded-xl shadow mt-2 transition">Pengaturan</button>
        </div>
      </main>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SupplierDashboard;
