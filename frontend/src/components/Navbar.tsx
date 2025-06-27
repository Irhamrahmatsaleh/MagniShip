import { useState } from "react"
import { Link } from "react-router-dom"
import { Bars3BottomLeftIcon, XMarkIcon, ChevronDownIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import { motion, AnimatePresence } from "framer-motion"
import logoMagniShip from "../assets/logoMagniShip.png"
import type { Variants } from "framer-motion";


// Dummy user (ganti dengan logic auth asli)
const dummyUser = {
  isLoggedIn: false,
  name: "Andi S.",
  role: "Admin"
}

const slideVariants: Variants = {
  hidden: { x: 400, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 140, damping: 18 }
  },
  exit: {
    x: 400,
    opacity: 0,
    transition: { duration: 0.35, ease: "easeInOut" }
  }
};



const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [profileDropdown, setProfileDropdown] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 shadow-2xl fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logoMagniShip} alt="MagniShip Logo" className="h-9 w-auto drop-shadow-xl transition-transform duration-300 group-hover:scale-105" />
          <span className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-300 to-violet-400 bg-clip-text text-transparent drop-shadow-lg animate-pulse select-none">
            MagniShip
          </span>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-white text-base font-medium hover:text-cyan-300 transition-colors">Beranda</Link>
          <Link to="/tentang" className="text-white text-base font-medium hover:text-cyan-300 transition-colors">Tentang</Link>
          <Link to="/fitur" className="text-white text-base font-medium hover:text-cyan-300 transition-colors">Fitur</Link>
          {!dummyUser.isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1 text-white text-base font-semibold px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-800 transition-all shadow"
              >
                Masuk/Daftar
                <ChevronDownIcon className={`h-5 w-5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 80 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 ring-1 ring-blue-200 z-30"
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="px-3 py-2 text-gray-700 font-bold text-xs uppercase tracking-widest border-b border-gray-100">
                      Masuk/Daftar
                    </div>
                    <Link to="/login/admin" className="block px-4 py-2 hover:bg-blue-50 text-gray-800 font-medium">Admin</Link>
                    <Link to="/login/customer" className="block px-4 py-2 hover:bg-blue-50 text-gray-800 font-medium">Customer</Link>
                    <Link to="/login/supplier" className="block px-4 py-2 hover:bg-blue-50 text-gray-800 font-medium">Supplier</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setProfileDropdown((prev) => !prev)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-xl text-white shadow transition-all"
              >
                <UserCircleIcon className="h-7 w-7 text-cyan-300" />
                <span className="font-semibold">{dummyUser.name}</span>
                <ChevronDownIcon className={`h-5 w-5 transition-transform ${profileDropdown ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {profileDropdown && (
                  <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 80 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 ring-1 ring-blue-200"
                    onMouseLeave={() => setProfileDropdown(false)}
                  >
                    <div className="px-4 py-2 text-gray-700 font-bold text-xs uppercase tracking-widest border-b border-gray-100">
                      {dummyUser.role}
                    </div>
                    <Link to="/profile" className="block px-4 py-2 hover:bg-blue-50 text-gray-800 font-medium">Profil Saya</Link>
                    <Link to="/logout" className="block px-4 py-2 hover:bg-blue-50 text-red-600 font-medium">Keluar</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
        {/* Mobile Modern Drawer */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all shadow-lg"
            onClick={() => setDrawerOpen(true)}
          >
            <Bars3BottomLeftIcon className="h-8 w-8 text-cyan-200" />
          </button>
        </div>
        <AnimatePresence>
          {drawerOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.65 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setDrawerOpen(false)}
              />
              {/* Drawer */}
              <motion.div
                  className="fixed top-0 right-0 h-full w-[85vw] max-w-xs z-50 shadow-2xl"
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
              >
                <div className="bg-gradient-to-b from-indigo-900 via-blue-900 to-indigo-900 h-full flex flex-col py-8 px-6 relative">
                  <button
                    className="absolute right-4 top-4 bg-white/10 rounded-full p-1 hover:bg-white/20"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <XMarkIcon className="h-7 w-7 text-cyan-200" />
                  </button>
                  <div className="flex flex-col items-start gap-7 mt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <img src={logoMagniShip} alt="Logo" className="h-8 w-auto drop-shadow-xl" />
                      <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-300 to-violet-400 bg-clip-text text-transparent drop-shadow-lg">
                        MagniShip
                      </span>
                    </div>
                    <Link to="/" className="text-white text-lg font-semibold hover:text-cyan-300" onClick={() => setDrawerOpen(false)}>Beranda</Link>
                    <Link to="/tentang" className="text-white text-lg font-semibold hover:text-cyan-300" onClick={() => setDrawerOpen(false)}>Tentang</Link>
                    <Link to="/fitur" className="text-white text-lg font-semibold hover:text-cyan-300" onClick={() => setDrawerOpen(false)}>Fitur</Link>
                    {!dummyUser.isLoggedIn ? (
                      <div className="w-full mt-2">
                        <div className="text-cyan-300 text-xs uppercase font-bold mb-2 tracking-widest">Masuk/Daftar sebagai:</div>
                        <Link to="/login/admin" className="block py-2 text-cyan-200 font-medium hover:text-cyan-400" onClick={() => setDrawerOpen(false)}>Admin</Link>
                        <Link to="/login/customer" className="block py-2 text-cyan-200 font-medium hover:text-cyan-400" onClick={() => setDrawerOpen(false)}>Customer</Link>
                        <Link to="/login/supplier" className="block py-2 text-cyan-200 font-medium hover:text-cyan-400" onClick={() => setDrawerOpen(false)}>Supplier</Link>
                      </div>
                    ) : (
                      <div className="w-full mt-2">
                        <div className="flex items-center gap-3 mb-3">
                          <UserCircleIcon className="h-9 w-9 text-cyan-300" />
                          <div>
                            <div className="text-white font-semibold">{dummyUser.name}</div>
                            <div className="text-xs bg-cyan-500 text-white rounded px-2 py-0.5 mt-1 inline-block">{dummyUser.role}</div>
                          </div>
                        </div>
                        <Link to="/admin/dashboard" className="block py-2 text-cyan-200 font-medium hover:text-cyan-400" onClick={() => setDrawerOpen(false)}>Dashboard</Link>
                        <Link to="/logout" className="block py-2 text-red-400 font-medium hover:text-red-600" onClick={() => setDrawerOpen(false)}>Keluar</Link>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
