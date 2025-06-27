// File: src/pages/AdminDashboard.tsx

import React from "react";

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-700 flex flex-col">
      {/* Header */}
      <header className="w-full px-8 py-6 flex items-center justify-between bg-indigo-950 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          MagniShip Admin Dashboard
        </h1>
        <div className="flex items-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-800 text-white px-4 py-2 rounded-xl font-semibold transition">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row gap-8 p-8">
        {/* Sidebar Widget */}
        <aside className="bg-white/10 rounded-2xl shadow-xl p-6 w-full md:w-1/4 flex flex-col gap-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-300 flex items-center justify-center text-4xl text-white font-extrabold shadow-lg mb-2">
              MS
            </div>
            <div className="text-indigo-200 font-bold text-lg mb-2">
              Selamat datang, Admin!
            </div>
            <div className="text-xs text-indigo-100 mb-4 text-center">
              Dashboard manajemen MagniShip. Semua kendali di tanganmu!
            </div>
          </div>
        </aside>

        {/* Dashboard Cards */}
        <section className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center hover:scale-105 transition">
            <span className="text-indigo-700 text-3xl mb-2">📦</span>
            <div className="text-xl font-bold text-indigo-800">Data Order</div>
            <div className="text-slate-600 mt-2 text-center">
              Lihat & kelola seluruh order pelanggan.
            </div>
            <button className="mt-4 bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800">
              Kelola Order
            </button>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center hover:scale-105 transition">
            <span className="text-indigo-700 text-3xl mb-2">👤</span>
            <div className="text-xl font-bold text-indigo-800">Daftar Admin</div>
            <div className="text-slate-600 mt-2 text-center">
              Pantau & atur akun admin lainnya.
            </div>
            <button className="mt-4 bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800">
              Kelola Admin
            </button>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center hover:scale-105 transition">
            <span className="text-indigo-700 text-3xl mb-2">📝</span>
            <div className="text-xl font-bold text-indigo-800">Laporan</div>
            <div className="text-slate-600 mt-2 text-center">
              Lihat statistik & laporan aktivitas.
            </div>
            <button className="mt-4 bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800">
              Lihat Laporan
            </button>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col items-center hover:scale-105 transition">
            <span className="text-indigo-700 text-3xl mb-2">⚙️</span>
            <div className="text-xl font-bold text-indigo-800">Pengaturan</div>
            <div className="text-slate-600 mt-2 text-center">
              Ubah preferensi & konfigurasi sistem.
            </div>
            <button className="mt-4 bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800">
              Pengaturan
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 text-center text-indigo-200 bg-indigo-950 text-xs">
        MagniShip Admin &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default AdminDashboard;
