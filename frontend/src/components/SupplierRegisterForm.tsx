import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SupplierRegisterForm: React.FC = () => {
  const [form, setForm] = useState({
    nama: "",
    supplier: { nama: "" },
    alamat: "",
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
    if (name.startsWith("supplier.")) {
      setForm({
        ...form,
        supplier: { ...form.supplier, [name.split(".")[1]]: value },
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
    if (!form.supplier.nama.trim()) {
      setError("Nama PT/CV tidak boleh kosong");
      return;
    }
    if (!form.alamat.trim()) {
      setError("Alamat tidak boleh kosong");
      return;
    }
    if (!form.noHp.trim()) {
      setError("No HP tidak boleh kosong");
      return;
    }
    if (!form.email.trim()) {
      setError("Email tidak boleh kosong");
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
      const response = await fetch("http://localhost:8080/api/user-supplier", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const data = await response.json();

        if (
          data.message &&
          data.message.toLowerCase().includes("nik") &&
          data.message.toLowerCase().includes("duplicate")
        ) {
          throw new Error("NIK telah digunakan");
        }

        if (
          data.message &&
          data.message.toLowerCase().includes("supplier_id") &&
          data.message.toLowerCase().includes("duplicate")
        ) {
          throw new Error("Data sudah dipakai, silahkan masukan data yang valid");
        }

        throw new Error(data.message || "Gagal mendaftar supplier");
      }

      setSuccess(true);
      setForm({
        nama: "",
        supplier: { nama: "" },
        alamat: "",
        noHp: "",
        email: "",
        passwordHash: "",
        fotoKtpUrl: "",
        fotoDiriUrl: "",
      });
      setConfirmPassword("");
      navigate("/supplier/otp", { state: { email: form.email } });
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
            Daftar Supplier Baru
          </h2>
          {/* Nama Penanggung Jawab sendiri */}
          <input
            className="border rounded px-3 py-2"
            placeholder="Nama Penanggung Jawab"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            required
          />
          {/* Nama PT/CV - Alamat */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border rounded px-3 py-2"
              placeholder="Nama PT/CV"
              name="supplier.nama"
              value={form.supplier.nama}
              onChange={handleChange}
              required
            />
            <input
              className="border rounded px-3 py-2"
              placeholder="Alamat"
              name="alamat"
              value={form.alamat}
              onChange={handleChange}
              required
            />
          </div>
          {/* Email - No HP */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border rounded px-3 py-2"
              placeholder="Email"
              name="email"
              type="email"
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
          </div>
          {/* Password - Konfirmasi Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>
          {/* Foto KTP - Foto Selfie */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              Supplier berhasil didaftarkan! Silakan cek email untuk OTP.
            </div>
          )}
          {error && (
            <div className="text-red-600 text-center font-semibold">{error}</div>
          )}

          <div className="flex flex-col md:flex-row md:justify-between items-center mt-4 gap-2">
            <span className="text-sm text-gray-600">
              Sudah punya akun?{" "}
              <a
                href="/login/supplier"
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
  )
};

export default SupplierRegisterForm;
