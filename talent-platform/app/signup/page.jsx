"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Creating Account:", name, email, password); // Save later to DB
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-5">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border border-gray-200">

        <h2 className="text-2xl font-semibold text-center mb-6">Create an Account ✨</h2>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">

          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-green-300 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-green-300 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-green-300 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition">
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account? <Link href="/login" className="text-green-600 font-medium">Login</Link>
        </p>
      </div>
    </main>
  );
}
