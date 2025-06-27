import Navbar from "../components/Navbar"
// Import di atas file HomePage.tsx
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';

import Footer from "../components/Footer";
import CarouselTestimoni from "../components/CarourselTestimoni";


const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full overflow-hidden">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-75 z-0"
      >
        <source src="/src/assets/magniship_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/60 via-blue-900/30 to-cyan-900/70 z-10" />

      <div className="relative z-20">
      </div>
      <section className="relative z-20 flex flex-col items-center justify-center min-h-screen pt-24 pb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl text-center animate-fadeInDown">
          MagniShip
        </h1>
        <h2 className="mt-5 mb-10 text-xl md:text-3xl font-semibold text-cyan-200 text-center max-w-2xl animate-fadeInUp">
          “Ekspor-Impor Tanpa Batas, Kualitas Terpercaya Dunia. <br />
          MagniShip menghadirkan solusi logistik global dengan teknologi masa depan.”
        </h2>
        <div className="mt-6 flex gap-6 justify-center animate-fadeInUp">
          <a
            href="/register/supplier"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:bg-gradient-to-l transition-all duration-300"
          >
            Mulai Jadi Supplier
          </a>
          <a
            href="/register/customer"
            className="px-8 py-3 rounded-xl border border-white text-white font-semibold text-lg bg-white/10 hover:bg-white/20 transition-all duration-300 shadow"
          >
            Mulai Jadi Customer
          </a>
        </div>


        <div className="relative z-20 mt-16 px-6 xl:px-0 max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-white drop-shadow-xl mb-12 animate-fadeInDown">
          Kenapa <span className="text-cyan-400">MagniShip</span> Sangat Berbeda?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Box 1 */}
          <div className="group bg-gradient-to-br from-cyan-400/80 to-violet-600/80 rounded-3xl p-8 shadow-2xl border-2 border-white/10 transform hover:-translate-y-2 hover:scale-105 transition-all duration-400 animate-fadeInUp">
            <div className="flex items-center justify-center mb-5">
              <svg className="w-12 h-12 text-white group-hover:text-yellow-300 transition" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Teknologi Ramalan AI</h4>
            <p className="text-white/90">Prediksi rute & biaya otomatis, cepat & minim risiko human error. Semua di genggaman Anda!</p>
          </div>
          {/* Box 2 */}
          <div className="group bg-gradient-to-br from-blue-500/90 to-cyan-400/60 rounded-3xl p-8 shadow-2xl border-2 border-white/10 transform hover:-translate-y-2 hover:scale-105 transition-all duration-400 animate-fadeInUp delay-100">
            <div className="flex items-center justify-center mb-5">
              <svg className="w-12 h-12 text-white group-hover:text-green-200 transition" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M12 4v16m8-8H4"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Integrasi Global</h4>
            <p className="text-white/90">Koneksi dengan pelabuhan & logistik dunia, kirim barang makin mudah ke seluruh penjuru bumi.</p>
          </div>
          {/* Box 3 */}
          <div className="group bg-gradient-to-br from-cyan-500/90 to-blue-500/70 rounded-3xl p-8 shadow-2xl border-2 border-white/10 transform hover:-translate-y-2 hover:scale-105 transition-all duration-400 animate-fadeInUp delay-200">
            <div className="flex items-center justify-center mb-5">
              <svg className="w-12 h-12 text-white group-hover:text-pink-200 transition" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 11l5 5 5-5M12 4v12"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Transparansi 100%</h4>
            <p className="text-white/90">Lacak status & dokumen real-time. Tidak ada biaya tersembunyi, semua transparan dan jelas.</p>
          </div>
          {/* Box 4 */}
          <div className="group bg-gradient-to-br from-violet-500/90 to-cyan-400/50 rounded-3xl p-8 shadow-2xl border-2 border-white/10 transform hover:-translate-y-2 hover:scale-105 transition-all duration-400 animate-fadeInUp delay-300">
            <div className="flex items-center justify-center mb-5">
                <svg className="w-12 h-12 text-white group-hover:text-orange-200 transition" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3m6-3A9 9 0 11.999 12 9 9 0 0121 12z"/>
                </svg>
            </div>
              <h4 className="text-xl font-bold text-white mb-2">24/7 Support</h4>
              <p className="text-white/90">Tim kami siap bantu kapan saja, dimanapun. Bisnis Anda aman di tangan MagniShip!</p>
            </div>
          </div>
        </div>
      </section>



      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#312e81] overflow-hidden">
        {/* Background Blur Effect */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-400/30 rounded-full blur-3xl z-0 animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-2xl z-0 animate-pulse-slow"></div>

        {/* Animated floating icons */}
        <div className="absolute left-20 top-1/2 -translate-y-1/2 z-10 animate-float-slow">
          <svg width={70} height={70} fill="none" viewBox="0 0 40 40"><circle cx={20} cy={20} r={18} stroke="#38bdf8" strokeWidth={4} /><path d="M20 13v7l5 3" stroke="#38bdf8" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div className="absolute right-36 bottom-20 z-10 animate-float-slow-rev">
          <svg width={60} height={60} fill="none" viewBox="0 0 40 40"><rect x={8} y={8} width={24} height={24} rx={6} stroke="#a78bfa" strokeWidth={4}/><path d="M16 20h8" stroke="#a78bfa" strokeWidth={3} strokeLinecap="round"/></svg>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 xl:px-0">
          <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white drop-shadow-2xl mb-8 tracking-tight animate-fadeInDown">
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent">
              MagniShip Experience
            </span>
          </h2>
          <p className="text-center text-lg md:text-2xl text-white/90 mb-16 max-w-2xl mx-auto animate-fadeInUp">
            Nikmati kemudahan, kecepatan, dan keajaiban logistik masa depan yang belum pernah Anda rasakan sebelumnya.
            <span className="font-semibold text-cyan-300"> Semuanya dalam satu platform.</span>
          </p>
          {/* Main Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-cyan-500 via-blue-500 to-fuchsia-400 rounded-3xl p-10 shadow-2xl border-2 border-white/10 overflow-hidden hover:scale-105 transition-transform duration-400">
              <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-bl-full blur-2xl group-hover:scale-125 transition"/>
              <svg className="w-16 h-16 mb-6 text-white group-hover:text-yellow-200 transition" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" strokeDasharray="4 2"/>
                <path d="M8 12l2 2l4-4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">Realtime Tracking Ajaib</h3>
              <p className="text-white/90 mb-6">
                Lacak posisi barang detik ke detik, lengkap dengan animasi rute di peta interaktif. Kiriman Anda, bisa "dipegang" dari layar!
              </p>
              <span className="inline-block px-4 py-1 rounded-full bg-cyan-100/20 text-cyan-200 font-semibold text-sm group-hover:bg-yellow-300/20 group-hover:text-yellow-200 transition">
                Live Map Integration
              </span>
            </div>
            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-violet-600 via-indigo-500 to-fuchsia-400 rounded-3xl p-10 shadow-2xl border-2 border-white/10 overflow-hidden hover:scale-105 transition-transform duration-400">
              <div className="absolute left-0 bottom-0 w-32 h-32 bg-white/10 rounded-tr-full blur-2xl group-hover:scale-125 transition"/>
              <svg className="w-16 h-16 mb-6 text-white group-hover:text-cyan-200 transition" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M3 16.5V8a2 2 0 012-2h3V4.5a2 2 0 012-2h2a2 2 0 012 2V6h3a2 2 0 012 2v8.5" />
                <rect x="7" y="12" width="10" height="8" rx="2"/>
              </svg>
              <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">Kalkulator Smart Tarif</h3>
              <p className="text-white/90 mb-6">
                Cukup input tujuan & berat, sistem langsung hitung biaya optimal dengan AI. Tidak ada kejutan, semuanya transparan!
              </p>
              <span className="inline-block px-4 py-1 rounded-full bg-fuchsia-100/20 text-fuchsia-200 font-semibold text-sm group-hover:bg-cyan-300/20 group-hover:text-cyan-200 transition">
                AI Pricing
              </span>
            </div>
            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-yellow-400 via-orange-400 to-rose-400 rounded-3xl p-10 shadow-2xl border-2 border-white/10 overflow-hidden hover:scale-105 transition-transform duration-400">
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/10 rounded-tl-full blur-2xl group-hover:scale-125 transition"/>
              <svg className="w-16 h-16 mb-6 text-white group-hover:text-fuchsia-200 transition" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="9" strokeDasharray="3 2"/>
              </svg>
              <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-sm">Pusat Bantuan Interaktif</h3>
              <p className="text-white/90 mb-6">
                Chatbot & tim manusia standby 24 jam. Tanya apapun, solusi datang dalam hitungan detik—langsung di aplikasi!
              </p>
              <span className="inline-block px-4 py-1 rounded-full bg-yellow-100/20 text-yellow-800 font-semibold text-sm group-hover:bg-fuchsia-300/20 group-hover:text-fuchsia-600 transition">
                24/7 Magic Help
              </span>
            </div>
          </div>
          {/* CTA */}
          <div className="mt-20 flex flex-col items-center">
            <span className="text-white text-lg md:text-2xl font-semibold mb-6 animate-fadeInUp">
              Sudah siap merasakan <span className="text-cyan-300">MagniShip?</span>
            </span>
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold text-xl rounded-full shadow-xl hover:scale-110 hover:from-yellow-400 hover:to-pink-500 transition-transform duration-300 animate-bounce">
              Mulai Sekarang Gratis!
            </button>
          </div>
        </div>
      </section>
      </div>

      <div>
        {/* SECTION: Testimoni Pelanggan & Logo Partner */}
        <section className="relative bg-gradient-to-br from-[#0f1123] via-[#23254d] to-[#1e293b] py-24 px-4 md:px-0 overflow-x-hidden z-10">
          {/* Logo Partner */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl text-white font-bold text-center mb-8 tracking-tight">
              Dipercaya oleh partner terbaik
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-90">
              <img src={logo1} alt="Partner 1" className="h-10 grayscale hover:grayscale-0 transition" />
              <img src={logo2} alt="Partner 2" className="h-10 grayscale hover:grayscale-0 transition" />
              <img src={logo3} alt="Partner 3" className="h-10 grayscale hover:grayscale-0 transition" />
              <img src={logo4} alt="Partner 4" className="h-10 grayscale hover:grayscale-0 transition" />
              <img src={logo5} alt="Partner 5" className="h-10 grayscale hover:grayscale-0 transition" />
            </div>
          </div>

          {/* Carousel Testimoni */}
          <CarouselTestimoni />
        </section>
        {/* SECTION: Statistik Pencapaian */}
        <section className="bg-gradient-to-t from-[#0f172a] via-[#1e293b] to-transparent py-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-xl animate-pulse">
                8.700+
              </span>
              <span className="text-white mt-2 text-lg font-semibold text-center">
                Barang Terkirim
              </span>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-xl animate-bounce">
                99.2%
              </span>
              <span className="text-white mt-2 text-lg font-semibold text-center">
                Tingkat Kepuasan
              </span>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-fuchsia-400 drop-shadow-xl animate-pulse">
                120+
              </span>
              <span className="text-white mt-2 text-lg font-semibold text-center">
                Partner Bisnis
              </span>
            </div>
            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-green-300 drop-shadow-xl animate-bounce">
                24/7
              </span>
              <span className="text-white mt-2 text-lg font-semibold text-center">
                Dukungan Nonstop
              </span>
            </div>
          </div>
        </section>

        {/* SECTION: FAQ Interaktif */}
        <section className="bg-[#181d31] py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Pertanyaan Umum (FAQ)</h3>
            <div className="space-y-6">
              {/* FAQ 1 */}
              <details className="bg-gradient-to-r from-cyan-400/10 to-violet-500/10 rounded-2xl p-6 shadow-md group">
                <summary className="flex items-center cursor-pointer font-semibold text-white text-lg group-open:text-cyan-300 transition">
                  <svg className="w-6 h-6 mr-3 text-cyan-400 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                  Bagaimana cara mulai menggunakan MagniShip?
                </summary>
                <p className="text-white/80 mt-3 pl-9">
                  Cukup daftar gratis, lengkapi profil, dan Anda bisa langsung mencoba kalkulator ongkir atau kirim barang pertama Anda!
                </p>
              </details>
              {/* FAQ 2 */}
              <details className="bg-gradient-to-r from-cyan-400/10 to-violet-500/10 rounded-2xl p-6 shadow-md group">
                <summary className="flex items-center cursor-pointer font-semibold text-white text-lg group-open:text-cyan-300 transition">
                  <svg className="w-6 h-6 mr-3 text-cyan-400 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                  Apakah ada biaya tersembunyi?
                </summary>
                <p className="text-white/80 mt-3 pl-9">
                  Tidak sama sekali. Semua biaya ditampilkan transparan sebelum Anda melakukan pengiriman.
                </p>
              </details>
              {/* FAQ 3 */}
              <details className="bg-gradient-to-r from-cyan-400/10 to-violet-500/10 rounded-2xl p-6 shadow-md group">
                <summary className="flex items-center cursor-pointer font-semibold text-white text-lg group-open:text-cyan-300 transition">
                  <svg className="w-6 h-6 mr-3 text-cyan-400 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                  Bagaimana jika terjadi kendala atau masalah pengiriman?
                </summary>
                <p className="text-white/80 mt-3 pl-9">
                  Tim support kami siap membantu Anda kapan saja, cukup klik fitur live chat di dashboard!
                </p>
              </details>
              {/* FAQ 4 */}
              <details className="bg-gradient-to-r from-cyan-400/10 to-violet-500/10 rounded-2xl p-6 shadow-md group">
                <summary className="flex items-center cursor-pointer font-semibold text-white text-lg group-open:text-cyan-300 transition">
                  <svg className="w-6 h-6 mr-3 text-cyan-400 group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                  Apakah bisa integrasi API untuk bisnis saya?
                </summary>
                <p className="text-white/80 mt-3 pl-9">
                  Bisa! Hubungi tim sales kami untuk aktivasi API dan dokumentasi lengkap.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default HomePage
