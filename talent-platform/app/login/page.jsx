"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password); // Later connect to backend
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-5">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border border-gray-200">

        <h2 className="text-2xl font-semibold text-center mb-6">Welcome Back 👋</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          New here? <Link href="/signup" className="text-blue-600 font-medium">Create an account</Link>
        </p>
      </div>
    </main>
  );
}
