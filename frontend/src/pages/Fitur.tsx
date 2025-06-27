// File: src/pages/Fitur.tsx

import React from "react";
import Navbar from "../components/Navbar";

const features = [
  {
    icon: "⚡",
    title: "Super Cepat & Real-time",
    desc: "Nikmati update status pengiriman secara real-time, setiap detik! Teknologi MagniShip memastikan kamu selalu tahu posisi barangmu tanpa menunggu.",
    color: "from-indigo-300 via-pink-200 to-yellow-200",
  },
  {
    icon: "🤖",
    title: "Automasi Cerdas",
    desc: "AI MagniShip menyesuaikan penawaran dan rute terbaik untuk setiap pengirimanmu. Pengalaman logistik yang benar-benar personal dan optimal.",
    color: "from-pink-200 via-yellow-100 to-indigo-100",
  },
  {
    icon: "🫶",
    title: "Kolaborasi Tanpa Batas",
    desc: "Ribuan supplier, customer, dan admin terhubung, membentuk jaringan pengiriman paling solid di seluruh Indonesia.",
    color: "from-yellow-200 via-indigo-100 to-pink-100",
  },
  {
    icon: "🔐",
    title: "Keamanan Berlapis",
    desc: "Setiap data, transaksi, dan komunikasi dienkripsi. Privasi dan keamanan kamu adalah prioritas utama kami.",
    color: "from-indigo-200 via-pink-100 to-yellow-100",
  },
  {
    icon: "🌍",
    title: "Jangkauan Meluas",
    desc: "MagniShip menjangkau seluruh pelosok negeri, bahkan daerah yang belum pernah dijangkau layanan lain.",
    color: "from-pink-300 via-yellow-200 to-indigo-100",
  },
  {
    icon: "💸",
    title: "Biaya Transparan",
    desc: "Tidak ada biaya tersembunyi. Semua tarif dan promo dijelaskan di depan. Hemat dan pasti.",
    color: "from-yellow-100 via-pink-100 to-indigo-100",
  },
  {
    icon: "📊",
    title: "Laporan & Analitik",
    desc: "Pantau performa bisnis, statistik pengiriman, dan insight pelanggan lewat dashboard visual yang menawan.",
    color: "from-indigo-100 via-yellow-100 to-pink-100",
  },
  {
    icon: "🎁",
    title: "Reward & Loyalty",
    desc: "Dapatkan poin, badge, dan hadiah menarik setiap kali kamu menggunakan layanan MagniShip. Kirim barang, dapat bonus!",
    color: "from-pink-100 via-indigo-100 to-yellow-100",
  },
  {
    icon: "💬",
    title: "Chat & Support 24/7",
    desc: "Tim support kami siap membantumu kapan saja lewat chat interaktif, chatbot AI, dan human agent terbaik.",
    color: "from-yellow-200 via-pink-200 to-indigo-100",
  },
];

const testimonials = [
  {
    name: "Emily Johnson",
    avatar: "https://randomuser.me/api/portraits/women/91.jpg",
    text: "MagniShip menyelamatkan bisnis onlineshopku! Barang selalu sampai tepat waktu dan aku bisa pantau semuanya dari HP.",
  },
  {
    name: "Michael Smith",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    text: "Jaringan supplier-nya luas banget. Setiap pengiriman terasa mudah dan aman. Fitur analitiknya juga membantu bisnis saya berkembang.",
  },
  {
    name: "Jessica Brown",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Customer service MagniShip ramah dan responsif. Selalu bisa diandalkan kalau ada kendala.",
  },
];

const Fitur: React.FC = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-pink-50 to-yellow-50 flex flex-col px-4 pt-24 pb-10">
        {/* HERO */}
        <section className="w-full max-w-4xl mx-auto mb-14 bg-white/90 shadow-2xl rounded-3xl border border-indigo-200 p-10 flex flex-col items-center">
          <div className="text-5xl mb-3 animate-bounce">✨</div>
          <h1 className="text-4xl font-extrabold text-center text-indigo-800 mb-2 drop-shadow-lg tracking-wide">
            Fitur Unggulan MagniShip
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-2xl mt-3">
            <span className="font-bold text-pink-700">MagniShip</span> hadir sebagai solusi logistik digital <span className="text-indigo-700 font-semibold">terlengkap</span> untuk kamu yang ingin kirim barang tanpa repot, aman, dan penuh kejutan istimewa.
          </p>
          <p className="mt-3 text-center text-indigo-600 font-semibold italic">
            “Kami percaya logistik cerdas adalah kunci pertumbuhan masa depan.”
          </p>
        </section>

        {/* FITUR CARD */}
        <section className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-2xl p-8 flex flex-col items-center hover:scale-105 transition bg-gradient-to-br ${item.color}`}
            >
              <span className="text-5xl mb-3 animate-pulse">{item.icon}</span>
              <div className="text-xl font-bold mb-2 text-center text-indigo-900">{item.title}</div>
              <div className="text-gray-700 text-center">{item.desc}</div>
            </div>
          ))}
        </section>

        {/* ANIMATED SECTION */}
        <section className="w-full max-w-5xl mx-auto my-14 flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="flex-1 flex flex-col items-center">
            <div className="animate-spin-slow text-6xl mb-4">🌐</div>
            <h2 className="text-2xl font-extrabold text-indigo-700 mb-2 text-center">
              Integrasi Multi-Platform
            </h2>
            <p className="text-center text-gray-700">
              MagniShip terhubung dengan berbagai marketplace, ERP, dan sistem logistik modern lain. Semua dalam satu sentuhan, bisnis jadi lebih efisien dan tanpa batas!
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="animate-bounce text-6xl mb-4">🦾</div>
            <h2 className="text-2xl font-extrabold text-pink-700 mb-2 text-center">
              Otomasi Tanpa Takut Error
            </h2>
            <p className="text-center text-gray-700">
              Notifikasi otomatis, pengingat, dan smart suggestion. Kamu tinggal fokus pada pengembangan usaha, urusan logistik biar MagniShip yang atur!
            </p>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="w-full max-w-4xl mx-auto my-16">
          <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-8">
            Apa Kata Mereka?
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-xl p-8 flex-1 flex flex-col items-center border border-pink-100 hover:border-indigo-200 transition"
              >
                <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full shadow-lg mb-3 object-cover" />
                <div className="text-lg italic text-center text-gray-700 mb-2">"{t.text}"</div>
                <div className="mt-2 font-bold text-pink-700">{t.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="w-full max-w-2xl mx-auto mt-20 mb-8">
          <div className="bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-3xl shadow-2xl p-10 flex flex-col items-center animate-fade-in">
            <div className="text-4xl mb-4 font-extrabold text-white drop-shadow">Siap Gabung?</div>
            <p className="text-lg text-white font-semibold text-center mb-4">
              Jadilah bagian dari revolusi logistik Indonesia bersama <span className="font-bold text-yellow-200">MagniShip</span>.<br />
              Daftarkan dirimu, supplier, atau bisnis kamu sekarang dan nikmati semua fiturnya!
            </p>
            <a
              href="/register/customer"
              className="mt-2 bg-white text-indigo-700 font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-yellow-50 hover:text-pink-700 transition text-xl"
            >
              Daftar Sekarang
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 text-center text-indigo-700 font-semibold text-xs tracking-widest opacity-80">
          &copy; {new Date().getFullYear()} MagniShip — Satu Sentuhan, Semua Sampai.
        </footer>
      </div>
    </>
  );
};

export default Fitur;
