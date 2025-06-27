// import { useRef, useEffect, useState } from "react";
// import avatar1 from '../assets/avatar1.jpg';
// import avatar2 from '../assets/avatar2.jpg';
// import avatar3 from '../assets/avatar3.jpg';

// const testimonials = [
//   {
//     avatar: avatar1,
//     name: "Dewi Pramesti",
//     role: "Owner PT. Amanah Jaya",
//     color: "cyan-200",
//     border: "border-cyan-300",
//     bg: "from-cyan-400/30 to-violet-600/30",
//     text: `"MagniShip bikin proses ekspor kami super mulus. Tracking realtime & CS 24 jamnya juara. Sukses terus!"`,
//   },
//   {
//     avatar: avatar2,
//     name: "Budi Santoso",
//     role: "UMKM Surya Abadi",
//     color: "fuchsia-200",
//     border: "border-fuchsia-300",
//     bg: "from-fuchsia-400/30 to-cyan-400/30",
//     text: `"Harga transparan, bisa simulasi ongkir & dukungan admin yang sabar banget. Rekomendasi untuk bisnis pemula!"`,
//   },
//   {
//     avatar: avatar3,
//     name: "Joana Avelin",
//     role: "Logistics Manager",
//     color: "yellow-200",
//     border: "border-yellow-300",
//     bg: "from-yellow-400/30 to-cyan-400/30",
//     text: `"Integrasi API-nya memudahkan warehouse kami. Satu klik, puluhan pengiriman otomatis. Fitur premium!"`,
//   },
//   {
//     avatar: avatar3,
//     name: "Joana Avelin",
//     role: "Logistics Manager",
//     color: "yellow-200",
//     border: "border-yellow-300",
//     bg: "from-yellow-400/30 to-cyan-400/30",
//     text: `"Integrasi API-nya memudahkan warehouse kami. Satu klik, puluhan pengiriman otomatis. Fitur premium!"`,
//   },
//   {
//     avatar: avatar3,
//     name: "Joana Avelin",
//     role: "Logistics Manager",
//     color: "yellow-200",
//     border: "border-yellow-300",
//     bg: "from-yellow-400/30 to-cyan-400/30",
//     text: `"Integrasi API-nya memudahkan warehouse kami. Satu klik, puluhan pengiriman otomatis. Fitur premium!"`,
//   },
// ];

// const CarouselTestimoni = () => {
//   const [index, setIndex] = useState(0);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   // Auto slide effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % testimonials.length);
//     }, 3500);
//     return () => clearInterval(interval);
//   }, []);
//   // Scroll to active card
//   useEffect(() => {
//     const node = scrollRef.current;
//     if (node) {
//       const card = node.children[index] as HTMLElement;
//       if (card) card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
//     }
//   }, [index]);
//   // Pause auto-slide on user manual scroll
//   useEffect(() => {
//     const node = scrollRef.current;
//     let pause = false;
//     let timer: number;
//     if (node) {
//       const onScroll = () => {
//         clearInterval(timer);
//         pause = true;
//         timer = setTimeout(() => pause = false, 1500);
//       };
//       node.addEventListener("pointerdown", onScroll);
//       node.addEventListener("touchstart", onScroll);
//       node.addEventListener("wheel", onScroll);
//       return () => {
//         node.removeEventListener("pointerdown", onScroll);
//         node.removeEventListener("touchstart", onScroll);
//         node.removeEventListener("wheel", onScroll);
//         clearInterval(timer);
//       };
//     }
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto">
//       <h3 className="text-2xl md:text-3xl text-white font-bold text-center mb-8 tracking-tight">
//         Apa kata mereka?
//       </h3>
//       <div className="relative">
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto gap-8 snap-x snap-mandatory pb-4 no-scrollbar"
//           style={{ scrollBehavior: "smooth" }}
//         >
//           {testimonials.map((t, i) => (
//             <div
//               key={i}
//               className={`min-w-[320px] md:min-w-[380px] bg-gradient-to-tr ${t.bg} rounded-3xl shadow-xl p-8 flex flex-col items-center snap-center hover:scale-105 transition-all duration-300 border border-white/20`}
//             >
//               <img
//                 src={t.avatar}
//                 alt={`User ${i + 1}`}
//                 className={`w-20 h-20 rounded-full border-4 ${t.border} shadow-lg mb-4`}
//               />
//               <p className="text-lg text-white/90 text-center mb-4 italic">{t.text}</p>
//               <span className={`font-bold text-${t.color}`}>{t.name}</span>
//               <span className="text-sm text-white/70">{t.role}</span>
//             </div>
//           ))}
//         </div>
//         {/* Tombol manual prev/next */}
//         <button
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-cyan-500/60 hover:bg-cyan-700/80 p-2 rounded-full text-white shadow-lg z-10"
//           onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
//           style={{ display: testimonials.length <= 1 ? 'none' : undefined }}
//         >
//           <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M15 18l-6-6 6-6"/></svg>
//         </button>
//         <button
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-fuchsia-500/60 hover:bg-fuchsia-700/80 p-2 rounded-full text-white shadow-lg z-10"
//           onClick={() => setIndex((index + 1) % testimonials.length)}
//           style={{ display: testimonials.length <= 1 ? 'none' : undefined }}
//         >
//           <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2.4}><path d="M9 6l6 6-6 6"/></svg>
//         </button>
//       </div>
//       <div className="text-center mt-8 text-white/60 text-sm">
//         <span>Geser untuk lihat testimoni lainnya &rarr;</span>
//       </div>
//       <style>{`
//         .no-scrollbar::-webkit-scrollbar { display: none; }
//         .no-scrollbar { scrollbar-width: none; }
//       `}</style>
//     </div>
//   )
// };

// export default CarouselTestimoni;




import { useRef } from "react";
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';

const testimonials = [
  {
    avatar: avatar1,
    name: "Dewi Pramesti",
    role: "Owner PT. Amanah Jaya",
    color: "cyan-200",
    border: "border-cyan-300",
    bg: "from-cyan-400/30 to-violet-600/30",
    text: `"MagniShip bikin proses ekspor kami super mulus. Tracking realtime & CS 24 jamnya juara. Sukses terus!"`,
  },
  {
    avatar: avatar3,
    name: "Linda Auila",
    role: "Logistics Manager",
    color: "yellow-200",
    border: "border-yellow-300",
    bg: "from-yellow-400/30 to-cyan-400/30",
    text: `"Integrasi API-nya memudahkan warehouse kami. Satu klik, puluhan pengiriman otomatis. Fitur premium!"`,
  },
  {
    avatar: avatar2,
    name: "Budi Santoso",
    role: "UMKM Surya Abadi",
    color: "fuchsia-200",
    border: "border-fuchsia-300",
    bg: "from-fuchsia-400/30 to-cyan-400/30",
    text: `"Harga transparan, bisa simulasi ongkir & dukungan admin yang sabar banget. Rekomendasi untuk bisnis pemula!"`,
  }
];

const CarouselTestimoni = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full px-2">
      <h3 className="text-2xl md:text-3xl text-white font-bold text-center mb-8 tracking-tight">
        Apa kata mereka?
      </h3>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto overflow-y-hidden gap-8 snap-x snap-mandatory pb-4 no-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`min-w-[320px] md:min-w-[380px] bg-gradient-to-tr ${t.bg} rounded-3xl shadow-xl p-8 flex flex-col items-center snap-center hover:scale-105 transition-all duration-300 border border-white/20`}
            >
              <img
                src={t.avatar}
                alt={`User ${i + 1}`}
                className={`w-20 h-20 rounded-full border-4 ${t.border} shadow-lg mb-4`}
              />
              <p className="text-lg text-white/90 text-center mb-4 italic">{t.text}</p>
              <span className={`font-bold text-${t.color}`}>{t.name}</span>
              <span className="text-sm text-white/70">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8 text-white/60 text-sm">
        <span>Bergabunglah bersama kami &rarr;</span>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>
    </div>
  )
};

export default CarouselTestimoni;
