import tulisanMagniShip from '../assets/tulisanMagniShip.png'

const footerLinks = [
  {
    title: "Produk",
    links: [
      { name: "Kalkulator Ongkir", url: "#" },
      { name: "Tracking Real-time", url: "#" },
      { name: "Integrasi API", url: "#" },
      { name: "Aplikasi Mobile", url: "#" },
      { name: "Demo Interaktif", url: "#" },
    ],
  },
  {
    title: "Dukungan",
    links: [
      { name: "Pusat Bantuan", url: "#" },
      { name: "FAQ", url: "#" },
      { name: "Dokumentasi", url: "#" },
      { name: "Status Sistem", url: "#" },
      { name: "Live Chat 24/7", url: "#" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { name: "Tentang MagniShip", url: "#" },
      { name: "Karir", url: "#" },
      { name: "Blog Resmi", url: "#" },
      { name: "Kontak", url: "#" },
      { name: "Media Partner", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Kebijakan Privasi", url: "#" },
      { name: "Syarat & Ketentuan", url: "#" },
      { name: "Keamanan Data", url: "#" },
      { name: "Compliance", url: "#" },
      { name: "Whistleblower", url: "#" },
    ],
  },
]

const socialLinks = [
  { name: "Instagram", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r="1"/></svg>, url: "#" },
  { name: "LinkedIn", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M6 9v6M6 9V7.5A1.5 1.5 0 0 1 7.5 6h.01A1.5 1.5 0 0 1 9 7.5V9m0 0v6m0 0h6m-6 0v-3m6 3v-3a3 3 0 0 0-6 0"/></svg>, url: "#" },
  { name: "Twitter", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path d="M22 4.01c-.77.35-1.6.59-2.47.7A4.03 4.03 0 0 0 21.44 2a8.07 8.07 0 0 1-2.56.98A4.01 4.01 0 0 0 12 7.03v1A11.39 11.39 0 0 1 3 3.36a4 4 0 0 0 1.25 5.35c-.67-.02-1.3-.2-1.85-.5v.05a4.01 4.01 0 0 0 3.22 3.93c-.31.09-.63.14-.97.14-.23 0-.46-.02-.68-.06a4.01 4.01 0 0 0 3.74 2.77A8.07 8.07 0 0 1 2 19.54a11.36 11.36 0 0 0 6.14 1.8c7.38 0 11.42-6.11 11.42-11.42 0-.17 0-.34-.01-.51A8.18 8.18 0 0 0 24 4.59a8.07 8.07 0 0 1-2.32.64z"/></svg>, url: "#" },
  { name: "YouTube", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><rect x="2.5" y="6.5" width="19" height="11" rx="4"/><path d="M10 9.5v5l5-2.5-5-2.5z"/></svg>, url: "#" },
]

const Footer = () => (
  <footer className="relative bg-gradient-to-tr from-[#0f172a] to-[#23254d] pt-12 pb-6 text-white z-50 overflow-x-hidden">
    <div className="absolute -left-10 -top-20 w-[140px] h-[140px] rounded-full bg-cyan-400/20 blur-2xl z-0 pointer-events-none" />
    <div className="absolute right-0 -bottom-28 w-[180px] h-[180px] rounded-full bg-fuchsia-600/10 blur-2xl z-0 pointer-events-none" />
    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center md:items-start justify-between mb-12">
        <div className="flex flex-col items-center md:items-start flex-shrink-0">
          <div className="relative mb-2">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-tr from-cyan-400 via-fuchsia-400 to-yellow-300 blur-[10px] opacity-70"></div>
            <img
              src={tulisanMagniShip}
              alt="MagniShip Logo"
              className="relative h-12 md:h-14 drop-shadow-[0_2px_12px_rgba(56,189,248,0.32)] select-none max-w-[200px] w-auto"
              draggable={false}
              style={{ filter: 'drop-shadow(0 0 20px #38bdf8) drop-shadow(0 0 8px #fff)' }}
            />
          </div>
          <div className="font-semibold text-white/90 text-base md:max-w-xs text-center md:text-left mb-3">
            Platform logistik masa depan: <span className="text-cyan-300">otomatis</span>, <span className="text-cyan-300">transparan</span>, <span className="text-cyan-300">terintegrasi</span>, dan selalu siap mendukung bisnis Anda 24/7.
          </div>
          <div className="flex flex-row gap-3 mt-2">
            {socialLinks.map(({ name, icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-yellow-300 p-2 rounded-full shadow-lg hover:scale-110 hover:-rotate-6 hover:from-yellow-300 hover:to-cyan-400 transition-all duration-200"
                aria-label={name}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <div className="mb-3 text-lg font-bold text-white/90 tracking-wide flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse mr-2" />
                {section.title}
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      className="text-white/70 hover:text-cyan-300 transition-colors duration-150 text-sm font-medium flex items-center gap-1"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-fuchsia-400/60 group-hover:bg-cyan-400/80 transition" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="h-0.5 w-full bg-gradient-to-r from-cyan-400/30 via-white/10 to-fuchsia-400/30 rounded-full mb-6" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-bold text-cyan-300">MagniShip</span> © {new Date().getFullYear()} | PT. MagniShip Digital Nusantara
        </div>
        <div className="flex gap-4">
          <a
            href="#"
            className="hover:text-cyan-300 underline underline-offset-2 transition"
          >
            Kebijakan Privasi
          </a>
          <a
            href="#"
            className="hover:text-cyan-300 underline underline-offset-2 transition"
          >
            Syarat & Ketentuan
          </a>
        </div>
        <div className="font-mono text-xs text-yellow-400/50 hidden md:block">
          ⛵️ Powered by IRHAM RS, crafted with <span className="text-fuchsia-300 animate-pulse">♥</span> & Next Logistics Tech
        </div>
      </div>
    </div>
    <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 z-0 opacity-30">
      <svg width="320" height="36" viewBox="0 0 320 36" fill="none"><path d="M0 24C40 32 80 4 160 4C240 4 280 32 320 24V36H0V24Z" fill="url(#paint0_linear)" /><defs><linearGradient id="paint0_linear" x1="0" y1="20" x2="320" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="#38bdf8"/><stop offset="1" stopColor="#a78bfa"/></linearGradient></defs></svg>
    </div>
    <style>{`
      ::-webkit-scrollbar {
        width: 0px !important;
        background: transparent !important;
      }
      html {
        scrollbar-width: none !important;
        overflow-y: scroll;
      }
      body {
        overflow-y: scroll;
        overflow-x: hidden !important;
      }
      body::-webkit-scrollbar {
        display: none !important;
      }
    `}</style>
  </footer>
)

export default Footer
