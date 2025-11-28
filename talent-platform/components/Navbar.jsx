"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  /* 🔥 Close MENU when clicked outside */
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* ───────── LOGO ───────── */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center text-white font-bold">
            TP
          </div>
          <span className="hidden sm:block font-semibold text-xl text-gray-800">TalentHub</span>
        </Link>

        {/* ───────── DESKTOP NAV ───────── */}
        <nav className="hidden md:flex items-center gap-6 text-gray-600 font-medium">

          <Link href="/" className="hover:text-blue-600">🏠 Home</Link>
          <Link href="/feed" className="hover:text-blue-600">📰 Feed</Link>

          {/* 🔥 NEW TOP REELS BUTTON */}
          <Link href="/reels" className="hover:text-blue-600 font-semibold">🎥 Reels</Link>

          <Link href="/artists" className="hover:text-blue-600">🔍 Explore</Link>

          <Link href="/login" className="hover:text-blue-600">Login</Link>
          <Link href="/signup"
            className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Sign Up
          </Link>
        </nav>

        {/* ───────── MOBILE HAMBURGER ───────── */}
        <button ref={buttonRef} className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* ───────── MOBILE MENU ───────── */}
      {open && (
        <div ref={menuRef}
          className="md:hidden bg-white border-t shadow-md px-6 py-5 flex flex-col gap-4 font-medium">

          <Link href="/" onClick={() => setOpen(false)}>🏠 Home</Link>
          <Link href="/feed" onClick={() => setOpen(false)}>📰 Feed</Link>
          <Link href="/reels" onClick={() => setOpen(false)}>🎥 Reels</Link>
          <Link href="/artists" onClick={() => setOpen(false)}>🔍 Explore</Link>

          <Link href="/login" onClick={() => setOpen(false)} className="text-blue-600 font-semibold">Login</Link>
          <Link href="/signup" onClick={() => setOpen(false)}
            className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-center">
            Create Account
          </Link>
        </div>
      )}

      {/* 🔥 Modern Mobile Bottom Navbar (Reels Center) */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg md:hidden
                      flex justify-around items-center py-2 text-[24px] z-50">

        <Link href="/"        className="hover:scale-110 transition">🏠</Link>
        <Link href="/feed"    className="hover:scale-110 transition">📰</Link>

        {/* 🔥 Highlighted Center Reel Button */}
        <Link href="/reels"
          className=" hover:scale-110 transition">
          🎥
        </Link>

        <Link href="/artists" className="hover:scale-110 transition">🔍</Link>
        <Link href="/profile" className="hover:scale-110 transition">👤</Link>

      </div>

    </header>
  );
}
