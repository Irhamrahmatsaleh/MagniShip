// File: src/pages/CustomerDashboard.tsx

import React from "react";

const CustomerDashboard: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-pink-100 to-green-100 flex flex-col">
      {/* Header */}
      <header className="w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r from-green-400 via-pink-400 to-indigo-400 shadow-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wider drop-shadow-lg animate-pulse">
          💎 Customer Dashboard MagniShip 💎
        </h1>
        <button className="bg-white/80 hover:bg-white text-pink-700 font-bold px-6 py-2 rounded-2xl shadow-lg border border-pink-300 transition-all">
          Logout
        </button>
      </header>

      {/* Hero Greeting */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-tr from-blue-50 via-pink-100 to-green-50">
        <div className="bg-white/80 rounded-3xl shadow-2xl p-10 max-w-2xl flex flex-col items-center border-2 border-blue-300">
          <div className="text-5xl mb-4 animate-bounce">🎉🌈</div>
          <div className="text-2xl md:text-3xl font-extrabold text-indigo-700 text-center mb-2">
            Selamat Datang, Pelanggan Hebat!
          </div>
          <div className="text-pink-600 text-lg font-semibold text-center mb-4">
            “Setiap order, setiap perjalanan, adalah kebahagiaan baru!”
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <span className="bg-pink-200 text-pink-700 font-bold px-4 py-2 rounded-full shadow">
              Status: Aktif
            </span>
            <span className="bg-blue-200 text-blue-700 font-bold px-4 py-2 rounded-full shadow">
              Member: Silver
            </span>
          </div>
        </div>
      </section>

      {/* Menu Cards */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12 max-w-5xl mx-auto">
        <div className="bg-gradient-to-tr from-pink-200 via-blue-200 to-green-100 rounded-2xl p-8 shadow-2xl flex flex-col items-center hover:scale-105 transition">
          <span className="text-4xl mb-3">🛒</span>
          <div className="text-xl font-bold text-pink-800 mb-1">Order Saya</div>
          <div className="text-gray-700 text-center mb-3">
            Lacak status order, riwayat transaksi, dan detail pemesanan Anda.
          </div>
          <button className="bg-pink-500 hover:bg-indigo-500 text-white px-5 py-2 rounded-xl shadow mt-2 transition">Lihat Order</button>
        </div>
        <div className="bg-gradient-to-tr from-blue-200 via-green-100 to-pink-200 rounded-2xl p-8 shadow-2xl flex flex-col items-center hover:scale-105 transition">
          <span className="text-4xl mb-3">💬</span>
          <div className="text-xl font-bold text-blue-700 mb-1">Pesan & Notifikasi</div>
          <div className="text-gray-700 text-center mb-3">
            Tidak pernah ketinggalan kabar terbaru dan promo spesial!
          </div>
          <button className="bg-blue-500 hover:bg-pink-500 text-white px-5 py-2 rounded-xl shadow mt-2 transition">Baca Pesan</button>
        </div>
        <div className="bg-gradient-to-tr from-green-200 via-pink-100 to-blue-200 rounded-2xl p-8 shadow-2xl flex flex-col items-center hover:scale-105 transition">
          <span className="text-4xl mb-3">⭐</span>
          <div className="text-xl font-bold text-green-700 mb-1">Ulasan & Favorit</div>
          <div className="text-gray-700 text-center mb-3">
            Berikan ulasan, lihat supplier favorit, dan dapatkan rekomendasi!
          </div>
          <button className="bg-green-500 hover:bg-indigo-500 text-white px-5 py-2 rounded-xl shadow mt-2 transition">Ulasan Saya</button>
        </div>
        <div className="bg-gradient-to-tr from-indigo-200 via-pink-100 to-green-100 rounded-2xl p-8 shadow-2xl flex flex-col items-center hover:scale-105 transition">
          <span className="text-4xl mb-3">⚙️</span>
          <div className="text-xl font-bold text-indigo-700 mb-1">Pengaturan Akun</div>
          <div className="text-gray-700 text-center mb-3">
            Update data diri, ganti password, dan kelola preferensi akun.
          </div>
          <button className="bg-indigo-700 hover:bg-pink-600 text-white px-5 py-2 rounded-xl shadow mt-2 transition">Pengaturan</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 text-center text-indigo-600 bg-white/60 text-xs font-semibold tracking-widest shadow-inner">
        MagniShip Customer Dashboard &copy; {new Date().getFullYear()} • Happy Shipping, Happy Life! 🚀
      </footer>
    </div>
  );
};

export default CustomerDashboard;
