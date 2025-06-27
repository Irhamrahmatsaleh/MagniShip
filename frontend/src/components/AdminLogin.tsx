import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AdminLogin: React.FC = () => {
  const [form, setForm] = useState({ email: "", passwordHash: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const data = await response.text();
        throw new Error(data || "Login gagal");
      }
      // Jika login sukses, langsung ke dashboard
      localStorage.setItem("admin_logged_in", "true");
      navigate("/admin/dashboard");
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
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-gray-900 flex items-center justify-center">
      <form
        className="bg-white shadow-xl rounded-2xl px-10 py-8 w-full max-w-md flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-2">
          Login Admin
        </h2>
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
          placeholder="Password"
          type="password"
          name="passwordHash"
          value={form.passwordHash}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-indigo-700 text-white font-bold py-2 rounded-lg hover:bg-indigo-800 transition mt-1"
          disabled={loading}
        >
          {loading ? "Masuk..." : "Masuk"}
        </button>
        {error && (
          <div className="text-red-600 text-center font-semibold">{error}</div>
        )}

        <div className="flex flex-col md:flex-row md:justify-between items-center mt-4 gap-2">
          <span className="text-sm text-gray-600">
            Belum punya akun?{" "}
            <a
              href="/register/admin"
              className="text-indigo-700 font-semibold hover:underline"
            >
              Silakan Daftar
            </a>
          </span>
          <a
            href="#"
            className="text-xs text-indigo-500 hover:underline"
          >
            Lupa password?
          </a>
        </div>
      </form>
    </div>
    <div>
      <Footer />
    </div>
    </>

  );
};

export default AdminLogin;
