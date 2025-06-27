import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AdminRegisterForm: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    inviteCode: "",
    nama: "",
    tanggalLahir: "",
    alamat: "",
    nik: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.fotoKtpUrl.trim()) {
      setError("Foto KTP tidak boleh kosong");
      return;
    }
    if (!form.fotoDiriUrl.trim()) {
      setError("Foto Selfie tidak boleh kosong");
      return;
    }
    if (!form.passwordHash.trim()) {
      setError("Password tidak boleh kosong");
      return;
    }
    if (form.passwordHash !== confirmPassword) {
      setError("Password harus sama");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const data = await response.json();
        // Tangkap error NIK duplikat dari backend (cek isi pesan error)
        if (
          data.message &&
          data.message.toLowerCase().includes("nik") &&
          data.message.toLowerCase().includes("duplicate")
        ) {
          throw new Error("NIK telah digunakan");
        }
        throw new Error(data.message || "Gagal mendaftar admin");
      }
      setSuccess(true);
      setForm({
        inviteCode: "",
        nama: "",
        tanggalLahir: "",
        alamat: "",
        nik: "",
        noHp: "",
        email: "",
        passwordHash: "",
        fotoKtpUrl: "",
        fotoDiriUrl: "",
      });
      setConfirmPassword("");
      navigate("/admin/otp", { state: { email: form.email } });
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
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-gray-900 flex items-center justify-center pt-20 md:pt-0">
        <form
          className="bg-white shadow-xl rounded-2xl px-10 py-8 w-full max-w-3xl flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center text-indigo-700 mb-2">
            Daftar Admin Baru
          </h2>
          {/* Kode Undangan Full Lebar */}
          <input
            className="border rounded px-3 py-2 mb-2"
            placeholder="Kode Undangan"
            name="inviteCode"
            value={form.inviteCode}
            onChange={handleChange}
            required
          />
          {/* Grid 2 Kolom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nama - Tgl Lahir */}
            <input
              className="border rounded px-3 py-2"
              placeholder="Nama"
              name="nama"
              value={form.nama}
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
            {/* Alamat - NIK */}
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
              placeholder="NIK"
              name="nik"
              value={form.nik}
              onChange={handleChange}
              required
            />
            {/* No HP - Email */}
            <input
              className="border rounded px-3 py-2"
              placeholder="No HP"
              name="noHp"
              value={form.noHp}
              onChange={handleChange}
              required
            />
            <input
              className="border rounded px-3 py-2"
              placeholder="Email"
              type="email"
              name="email"
              value={form.email}
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
            {/* Foto KTP - Foto Diri */}
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
              Admin berhasil didaftarkan! Silakan cek email untuk OTP.
            </div>
          )}
          {error && (
            <div className="text-red-600 text-center font-semibold">{error}</div>
          )}

          <div className="flex flex-col md:flex-row md:justify-between items-center mt-4 gap-2">
            <span className="text-sm text-gray-600">
              Sudah punya akun?{" "}
              <a
                href="/login/admin"
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

export default AdminRegisterForm;
