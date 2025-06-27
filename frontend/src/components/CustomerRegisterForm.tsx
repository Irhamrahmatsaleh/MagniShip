// // File: src/components/CustomerRegisterForm.tsx

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CustomerRegisterForm: React.FC = () => {
//   const [form, setForm] = useState({
//     nama: "",
//     customer: { nama: "" },
//     alamat: "",
//     tanggalLahir: "",
//     noHp: "",
//     email: "",
//     passwordHash: "",
//     fotoKtpUrl: "",
//     fotoDiriUrl: "",
//   });
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     if (name.startsWith("customer.")) {
//       setForm({
//         ...form,
//         customer: { ...form.customer, [name.split(".")[1]]: value },
//       });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setSuccess(false);

//     if (!form.nama.trim()) {
//       setError("Nama Penanggung Jawab tidak boleh kosong");
//       return;
//     }
//     if (!form.customer.nama.trim()) {
//       setError("Nama Customer (PT/CV) tidak boleh kosong");
//       return;
//     }
//     if (!form.alamat.trim()) {
//       setError("Alamat tidak boleh kosong");
//       return;
//     }
//     if (!form.tanggalLahir.trim()) {
//       setError("Tanggal Lahir tidak boleh kosong");
//       return;
//     }
//     if (!form.email.trim()) {
//       setError("Email tidak boleh kosong");
//       return;
//     }
//     if (!form.noHp.trim()) {
//       setError("No HP tidak boleh kosong");
//       return;
//     }
//     if (!form.passwordHash.trim()) {
//       setError("Password tidak boleh kosong");
//       return;
//     }
//     if (form.passwordHash !== confirmPassword) {
//       setError("Konfirmasi password tidak sama dengan password");
//       return;
//     }
//     if (!form.fotoKtpUrl.trim()) {
//       setError("Foto KTP tidak boleh kosong");
//       return;
//     }
//     if (!form.fotoDiriUrl.trim()) {
//       setError("Foto Selfie tidak boleh kosong");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:8080/api/user-customer", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       if (!response.ok) {
//         const data = await response.json();
//         if (
//           data.message &&
//           data.message.toLowerCase().includes("customer_id") &&
//           data.message.toLowerCase().includes("duplicate")
//         ) {
//           throw new Error("PT/CV Sudah dimiliki orang lain");
//         }
//         throw new Error(data.message || "Gagal mendaftar customer");
//       }
//       setSuccess(true);
//       setForm({
//         nama: "",
//         customer: { nama: "" },
//         alamat: "",
//         tanggalLahir: "",
//         noHp: "",
//         email: "",
//         passwordHash: "",
//         fotoKtpUrl: "",
//         fotoDiriUrl: "",
//       });
//       setConfirmPassword("");
//       navigate("/customer/otp", { state: { email: form.email } });
//     } catch (err: any) {
//       setError(err.message);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 flex items-center justify-center">
//       <form
//         className="bg-white shadow-xl rounded-2xl px-10 py-8 w-full max-w-3xl flex flex-col gap-6"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-2xl font-bold text-center text-indigo-700 mb-2">
//           Daftar Customer Baru
//         </h2>
//         {/* Nama Penanggung Jawab */}
//         <input
//           className="border rounded px-3 py-2"
//           placeholder="Nama Penanggung Jawab"
//           name="nama"
//           value={form.nama}
//           onChange={handleChange}
//           required
//         />
//         {/* Nama Customer (PT/CV) & Alamat */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             className="border rounded px-3 py-2"
//             placeholder="Nama Customer (PT/CV)"
//             name="customer.nama"
//             value={form.customer.nama}
//             onChange={handleChange}
//             required
//           />
//           <input
//             className="border rounded px-3 py-2"
//             placeholder="Alamat"
//             name="alamat"
//             value={form.alamat}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         {/* Tanggal Lahir & No HP */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             className="border rounded px-3 py-2"
//             type="date"
//             placeholder="Tanggal Lahir"
//             name="tanggalLahir"
//             value={form.tanggalLahir}
//             onChange={handleChange}
//             required
//           />
//           <input
//             className="border rounded px-3 py-2"
//             placeholder="No HP"
//             name="noHp"
//             value={form.noHp}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         {/* Email & Password */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             className="border rounded px-3 py-2"
//             placeholder="Email"
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             className="border rounded px-3 py-2"
//             placeholder="Password"
//             type="password"
//             name="passwordHash"
//             value={form.passwordHash}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         {/* Konfirmasi Password & Foto KTP */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             className="border rounded px-3 py-2"
//             placeholder="Konfirmasi Password"
//             type="password"
//             name="confirmPassword"
//             value={confirmPassword}
//             onChange={e => setConfirmPassword(e.target.value)}
//             required
//           />
//           <input
//             className="border rounded px-3 py-2"
//             placeholder="URL Foto KTP"
//             name="fotoKtpUrl"
//             value={form.fotoKtpUrl}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         {/* Foto Selfie */}
//         <input
//           className="border rounded px-3 py-2"
//           placeholder="URL Foto Selfie"
//           name="fotoDiriUrl"
//           value={form.fotoDiriUrl}
//           onChange={handleChange}
//           required
//         />
//         <button
//           type="submit"
//           className="bg-indigo-700 text-white font-bold py-2 rounded-lg hover:bg-indigo-800 transition mt-2"
//           disabled={loading}
//         >
//           {loading ? "Mendaftar..." : "Daftar"}
//         </button>
//         {success && (
//           <div className="text-green-600 text-center font-semibold">
//             Customer berhasil didaftarkan! Silakan cek email untuk OTP.
//           </div>
//         )}
//         {error && (
//           <div className="text-red-600 text-center font-semibold">{error}</div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default CustomerRegisterForm;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CustomerRegisterForm: React.FC = () => {
  const [form, setForm] = useState({
    nama: "",
    customer: { nama: "" },
    alamat: "",
    tanggalLahir: "",
    noHp: "",
    email: "",
    passwordHash: "",
    fotoKtpUrl: "",
    fotoDiriUrl: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("customer.")) {
      setForm({
        ...form,
        customer: { ...form.customer, [name.split(".")[1]]: value },
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.nama.trim()) {
      setError("Nama Penanggung Jawab tidak boleh kosong");
      return;
    }
    if (!form.customer.nama.trim()) {
      setError("Nama Customer (PT/CV) tidak boleh kosong");
      return;
    }
    if (!form.alamat.trim()) {
      setError("Alamat tidak boleh kosong");
      return;
    }
    if (!form.tanggalLahir.trim()) {
      setError("Tanggal Lahir tidak boleh kosong");
      return;
    }
    if (!form.email.trim()) {
      setError("Email tidak boleh kosong");
      return;
    }
    if (!form.noHp.trim()) {
      setError("No HP tidak boleh kosong");
      return;
    }
    if (!form.passwordHash.trim()) {
      setError("Password tidak boleh kosong");
      return;
    }
    if (form.passwordHash !== confirmPassword) {
      setError("Konfirmasi password tidak sama dengan password");
      return;
    }
    if (!form.fotoKtpUrl.trim()) {
      setError("Foto KTP tidak boleh kosong");
      return;
    }
    if (!form.fotoDiriUrl.trim()) {
      setError("Foto Selfie tidak boleh kosong");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/user-customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const data = await response.json();
        if (
          data.message &&
          data.message.toLowerCase().includes("customer_id") &&
          data.message.toLowerCase().includes("duplicate")
        ) {
          throw new Error("Sebagian Data Sudah dimiliki orang lain");
        }
        throw new Error(data.message || "Gagal mendaftar customer");
      }
      setSuccess(true);
      setForm({
        nama: "",
        customer: { nama: "" },
        alamat: "",
        tanggalLahir: "",
        noHp: "",
        email: "",
        passwordHash: "",
        fotoKtpUrl: "",
        fotoDiriUrl: "",
      });
      setConfirmPassword("");
      navigate("/customer/otp", { state: { email: form.email } });
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 flex items-center justify-center pt-20 md:pt-0">
        <form
          className="bg-white shadow-xl rounded-2xl px-10 py-8 w-full max-w-3xl flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center text-indigo-700 mb-2">
            Daftar Customer Baru
          </h2>

          {/* Semua field dalam grid 2 kolom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nama Penanggung Jawab - Nama Customer */}
            <input
              className="border rounded px-3 py-2"
              placeholder="Nama Penanggung Jawab"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              required
            />
            <input
              className="border rounded px-3 py-2"
              placeholder="Nama Customer (PT/CV)"
              name="customer.nama"
              value={form.customer.nama}
              onChange={handleChange}
              required
            />

            {/* Alamat - Tanggal Lahir */}
            <input
              className="border rounded px-3 py-2"
              placeholder="Alamat"
              name="alamat"
              value={form.alamat}
              onChange={handleChange}
              required
            />
            <input
              className="border rounded px-3 py-2"
              type="date"
              placeholder="Tanggal Lahir"
              name="tanggalLahir"
              value={form.tanggalLahir}
              onChange={handleChange}
              required
            />

            {/* Email - No HP */}
            <input
              className="border rounded px-3 py-2"
              placeholder="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              className="border rounded px-3 py-2"
              placeholder="No HP"
              name="noHp"
              value={form.noHp}
              onChange={handleChange}
              required
            />

            {/* Password - Konfirmasi Password */}
            <input
              className="border rounded px-3 py-2"
              placeholder="Password"
              type="password"
              name="passwordHash"
              value={form.passwordHash}
              onChange={handleChange}
              required
            />
            <input
              className="border rounded px-3 py-2"
              placeholder="Konfirmasi Password"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />

            {/* URL Foto KTP - URL Foto Selfie */}
            <input
              className="border rounded px-3 py-2"
              placeholder="URL Foto KTP"
              name="fotoKtpUrl"
              value={form.fotoKtpUrl}
              onChange={handleChange}
              required
            />
            <input
              className="border rounded px-3 py-2"
              placeholder="URL Foto Selfie"
              name="fotoDiriUrl"
              value={form.fotoDiriUrl}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-700 text-white font-bold py-2 rounded-lg hover:bg-indigo-800 transition mt-2"
            disabled={loading}
          >
            {loading ? "Mendaftar..." : "Daftar"}
          </button>
          {success && (
            <div className="text-green-600 text-center font-semibold">
              Customer berhasil didaftarkan! Silakan cek email untuk OTP.
            </div>
          )}
          {error && (
            <div className="text-red-600 text-center font-semibold">{error}</div>
          )}

          <div className="flex flex-col md:flex-row md:justify-between items-center mt-4 gap-2">
            <span className="text-sm text-gray-600">
              Sudah punya akun?{" "}
              <a
                href="/login/customer"
                className="text-indigo-700 font-semibold hover:underline"
              >
                Silakan Login
              </a>
            </span>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default CustomerRegisterForm;
