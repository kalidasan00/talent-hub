"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

// 🆕 Premium Lucide Icons
import {
  Home,
  Rss,
  Video,
  Search,
  UserRound,
  Menu,
  Camera,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  /* close dropdown on outside click */
  useEffect(() => {
    function handle(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  const active = (path) =>
    pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-600";

  return (
    <>
      {/* 🔥 PREMIUM FIXED TOP NAV */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400
                            flex items-center justify-center text-white font-bold text-lg shadow-sm">
              TH
            </div>
            <span className="hidden sm:block font-semibold text-xl text-gray-800">
              TalentHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            <Link href="/"        className={`flex items-center gap-1 ${active("/")}`}><Home size={18}/>Home</Link>
            <Link href="/feed"    className={`flex items-center gap-1 ${active("/feed")}`}><Rss size={18}/>Feed</Link>
            <Link href="/reels"   className={`flex items-center gap-1 ${active("/reels")}`}><Video size={18}/>Reels</Link>
            <Link href="/artists" className={`flex items-center gap-1 ${active("/artists")}`}><Search size={18}/>Explore</Link>

            <Link href="/login" className="hover:text-blue-600">Login</Link>
            <Link href="/signup"
              className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm">
              Sign Up
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button ref={buttonRef} onClick={() => setOpen(!open)} className="md:hidden text-3xl text-gray-800">
            <Menu size={30}/>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div ref={menuRef}
            className="md:hidden bg-white border-t shadow-lg px-6 py-5 flex flex-col gap-5">

            <Link href="/"        onClick={()=>setOpen(false)} className={`flex items-center gap-2 ${active("/")}`}><Home size={20}/>Home</Link>
            <Link href="/feed"    onClick={()=>setOpen(false)} className={`flex items-center gap-2 ${active("/feed")}`}><Rss size={20}/>Feed</Link>
            <Link href="/reels"   onClick={()=>setOpen(false)} className={`flex items-center gap-2 ${active("/reels")}`}><Video size={20}/>Reels</Link>
            <Link href="/artists" onClick={()=>setOpen(false)} className={`flex items-center gap-2 ${active("/artists")}`}><Search size={20}/>Explore</Link>

            <Link href="/login" onClick={()=>setOpen(false)} className="text-blue-600 font-semibold">Login</Link>
            <Link href="/signup" onClick={()=>setOpen(false)}
              className="bg-blue-600 text-white px-3 py-2 rounded-lg text-center shadow-sm">
              Create Account
            </Link>
          </div>
        )}
      </header>

      {/* 📌 PREMIUM MOBILE BOTTOM NAV */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-xl h-16
                      flex justify-around items-center z-50 text-gray-700">

        <Link href="/"        className={`flex flex-col items-center ${active("/")}`}><Home size={22}/> <span className="text-[11px]">Home</span></Link>
        <Link href="/feed"    className={`flex flex-col items-center ${active("/feed")}`}><Rss size={22}/> <span className="text-[11px]">Feed</span></Link>

        {/* 🔥 Center highlight (reels primary) */}
        <Link href="/reels"
          className="bg-blue-600 text-white rounded-full p-3 translate-y-[-15px] shadow-lg hover:scale-105 transition">
          <Video size={26}/>
        </Link>

        <Link href="/artists" className={`flex flex-col items-center ${active("/artists")}`}><Search size={22}/> <span className="text-[11px]">Explore</span></Link>
        <Link href="/profile" className={`flex flex-col items-center ${active("/profile")}`}><UserRound size={22}/> <span className="text-[11px]">Profile</span></Link>
      </nav>
    </>
  );
}
