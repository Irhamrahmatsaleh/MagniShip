import React, { useState } from "react";

const PASSWORD = "Sorayah73#";

const AdminInviteCodeGenerator: React.FC = () => {
  const [inviteCode, setInviteCode] = useState(""); // State untuk hasil kode
  const [loading, setLoading] = useState(false);    // State loading
  const [error, setError] = useState("");           // State error
  const [password, setPassword] = useState("");     // State untuk input password
  const [unlocked, setUnlocked] = useState(false);  // State akses

  const handleCheckPassword = () => {
    if (password === PASSWORD) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Password salah.");
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    setError("");
    setInviteCode("");
    try {
      const response = await fetch("http://localhost:8080/api/admin-invite/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Gagal generate kode");
      }
      const code = await response.text();
      setInviteCode(code);
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-indigo-950 to-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-900 shadow-xl rounded-2xl p-8 flex flex-col items-center">
        {!unlocked ? (
          <>
            <h2 className="text-xl font-bold mb-4 text-indigo-300">Masukkan Password Khusus</h2>
            <input
              className="border rounded px-4 py-2 mb-4 w-full text-center"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoFocus
            />
            <button
              className="bg-indigo-700 text-white font-bold px-6 py-2 rounded-lg mb-2 hover:bg-indigo-800 transition"
              onClick={handleCheckPassword}
            >
              Masuk
            </button>
            {error && (
              <div className="mt-2 p-2 bg-red-900 text-red-300 rounded-lg w-full text-center text-sm border border-red-700">
                {error}
              </div>
            )}
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4 text-indigo-300">Generate Kode Undangan Admin</h2>
            <button
              className="bg-indigo-700 text-white font-bold px-6 py-2 rounded-lg mb-4 hover:bg-indigo-800 transition disabled:opacity-60"
              onClick={handleGenerate}
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Code"}
            </button>
            {inviteCode && (
              <div className="mt-4 p-3 bg-green-900 text-green-200 rounded-lg w-full text-center font-mono text-lg select-all border border-green-600">
                {inviteCode}
              </div>
            )}
            {error && (
              <div className="mt-4 p-3 bg-red-900 text-red-300 rounded-lg w-full text-center text-sm border border-red-700">
                {error}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminInviteCodeGenerator;
