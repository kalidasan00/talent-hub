"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* ───────── LOGO ───────── */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-700 to-primary-500 flex items-center justify-center text-white font-bold">
            TP
          </div>
          <span className="hidden sm:block font-semibold text-xl text-gray-800">TalentHub</span>
        </Link>

        {/* ───────── DESKTOP NAV ───────── */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 text-[15px] font-medium">
          <Link href="/" className="hover:text-primary-600 flex items-center gap-1">🏠 Home</Link>
          <Link href="/feed" className="hover:text-primary-600 flex items-center gap-1">📰 Feed</Link>
          <Link href="/explore" className="hover:text-primary-600 flex items-center gap-1">🔍 Explore</Link>

          <button className="hover:text-primary-600 flex items-center gap-1">➕ Create</button>
          <Link href="/messages" className="hover:text-primary-600 text-xl">💬</Link>

          {/* Notifications */}
          <button className="relative hover:text-primary-600 text-xl">
            🔔
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1">
              3
            </span>
          </button>

          <Link href="/profile/me" className="hover:text-primary-600 text-xl">👤</Link>
        </nav>

        {/* ───────── MOBILE MENU TOGGLE ───────── */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>☰</button>
      </div>

      {/* ───────── MOBILE DROPDOWN MENU ───────── */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md px-6 py-4 flex flex-col gap-4 text-[16px] font-medium animate-fadeDown">
          <Link href="/" onClick={() => setOpen(false)}>🏠 Home</Link>
          <Link href="/feed" onClick={() => setOpen(false)}>📰 Feed</Link>
          <Link href="/explore" onClick={() => setOpen(false)}>🔍 Explore</Link>
          <button onClick={() => setOpen(false)}>➕ Create</button>
          <Link href="/messages" onClick={() => setOpen(false)}>💬 Messages</Link>
          <Link href="/notifications" onClick={() => setOpen(false)}>🔔 Notifications</Link>
          <Link href="/profile/me" onClick={() => setOpen(false)}>👤 My Profile</Link>
        </div>
      )}

      {/* ───────── MOBILE BOTTOM BAR (Instagram style) ───────── */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg md:hidden flex justify-around py-2 text-[23px]">
        <Link href="/">🏠</Link>
        <Link href="/feed">📰</Link>
        <Link href="/explore">🔍</Link>
        <button>➕</button>
        <Link href="/messages">💬</Link>
      </div>
    </header>
  );
}
