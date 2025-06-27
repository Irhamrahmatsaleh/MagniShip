import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


const OTP_LENGTH = 6;

const AdminOTPForm: React.FC = () => {
  // Ambil email dari location state (hasil navigate dari register)
  const location = useLocation();
  const email = location.state?.email || "";

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return; // hanya boleh angka satu digit
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // auto-focus ke input berikutnya
    if (value !== "" && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text").slice(0, OTP_LENGTH).split("");
    setOtp((prev) =>
      prev.map((_, i) => pasted[i] && /^[0-9]$/.test(pasted[i]) ? pasted[i] : "")
    );
    // auto-focus terakhir
    setTimeout(() => {
      inputsRef.current[pasted.length - 1]?.focus();
    }, 10);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Email tidak ditemukan. Silakan daftar ulang.");
      return;
    }

    if (otp.some((digit) => digit === "")) {
      setError("Semua digit OTP harus diisi.");
      return;
    }

    setLoading(true);
    try {
      const code = otp.join("");
      // Kirim email dan otp sebagai query sesuai backend
      const response = await fetch(
        `http://localhost:8080/api/admin/verify-otp?email=${encodeURIComponent(email)}&otp=${code}`,
        { method: "POST" }
      );

      if (!response.ok) {
        let data = {};
        try {
          data = await response.json();
        } catch {
          /* abaikan jika bukan json */
        }
        throw new Error((data as any).message || "OTP salah atau telah kadaluarsa.");
      }
      setSuccess(true);
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1200);

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
          Verifikasi OTP Email Admin
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Masukkan 6 digit kode OTP yang telah dikirim ke email Anda
        </p>
        <div className="flex justify-center gap-2">
          {otp.map((value, idx) => (
            <input
              key={idx}
              ref={el => { inputsRef.current[idx] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className="w-12 h-12 text-center text-2xl border rounded-lg focus:ring-2 focus:ring-indigo-600 transition"
              value={value}
              onChange={e => handleChange(idx, e.target.value)}
              onKeyDown={e => handleBackspace(idx, e)}
              onPaste={idx === 0 ? handlePaste : undefined}
              required
            />
          ))}
        </div>
        <button
          type="submit"
          className="bg-indigo-700 text-white font-bold py-2 rounded-lg hover:bg-indigo-800 transition mt-1"
          disabled={loading}
        >
          {loading ? "Memverifikasi..." : "Verifikasi"}
        </button>
        {success && (
          <div className="text-green-600 text-center font-semibold">
            OTP berhasil diverifikasi!
          </div>
        )}
        {error && (
          <div className="text-red-600 text-center font-semibold">{error}</div>
        )}
      </form>
    </div>
    </>
  );
};

export default AdminOTPForm;
