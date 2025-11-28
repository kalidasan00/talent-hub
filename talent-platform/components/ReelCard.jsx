"use client";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

// 🔥 Lucide Icons
import { Heart, MessageCircle, Send, Volume2, VolumeX } from "lucide-react";

export default function ReelCard({ item, user }) {

  const videoRef = useRef(null);
  const [sound, setSound] = useState(false);

  /* 🟢 Auto Play + Auto Pause on scroll visibility */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? video.play() : video.pause();
      },
      { threshold: 0.70 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  /* 🔊 Sound Toggle */
  const toggleSound = () => {
    const vid = videoRef.current;
    vid.muted = !vid.muted;
    setSound(!sound);
  };

  return (
    <div className="relative h-full w-full snap-start flex items-end justify-between overflow-hidden select-none">

      {/* ───────── User top-left */}
      <Link href={`/artist/${user?.username}`} className="absolute top-4 left-4 flex items-center gap-2 z-20">
        <img src={user?.profilePic} className="w-8 h-8 rounded-full border border-white/40 shadow" />
        <span className="font-medium text-sm">@{user?.username}</span>
      </Link>

      {/* ───────── Video */}
      <video
        ref={videoRef}
        src={item.video}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ───────── Right-Side Action Column */}
      <div className="absolute right-4 bottom-28 flex flex-col gap-5 items-center z-20 text-white">

        {/* Like */}
        <button className="hover:scale-110 transition p-1">
          <Heart className="w-8 h-8 drop-shadow" strokeWidth={1.8}/>
        </button>

        {/* Comment */}
        <button className="hover:scale-110 transition p-1">
          <MessageCircle className="w-8 h-8 drop-shadow" strokeWidth={1.8}/>
        </button>

        {/* Share */}
        <button className="hover:scale-110 transition p-1">
          <Send className="w-7 h-7 drop-shadow" strokeWidth={1.8}/>
        </button>

        {/* Sound toggle */}
        <button onClick={toggleSound} className="bg-black/40 rounded-full p-2 mt-3 hover:scale-105 transition">
          {sound ? <Volume2 className="w-6 h-6"/> : <VolumeX className="w-6 h-6"/>}
        </button>

      </div>

      {/* ───────── Bottom Caption */}
      <div className="absolute bottom-4 left-4 z-20 max-w-[70%] text-sm font-medium leading-tight drop-shadow-lg">
        {item.caption}
      </div>

    </div>
  );
}
