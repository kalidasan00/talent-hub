"use client";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function ReelCard({ item, user }) {

  const videoRef = useRef();
  const [sound, setSound] = useState(false);

  /* 🟢 Auto Play/Pause based on visibility */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play();   // reel visible → play
        else video.pause();                       // leaving screen → pause
      },
      { threshold: 0.75 } // 75% must be visible to play
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
    <div className="relative h-full w-full snap-start flex items-end justify-between overflow-hidden">

      {/* USER INFO */}
      <Link href={`/artist/${user?.username}`} className="absolute top-3 left-4 flex items-center gap-2 z-20">
        <img src={user?.profilePic} className="w-8 h-8 rounded-full object-cover border" />
        <span className="text-sm font-medium">@{user?.username}</span>
      </Link>

      {/* REEL VIDEO with Observer */}
      <video
        ref={videoRef}
        src={item.video}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted // autoplay rule
        playsInline
      />

      {/* SOUND BUTTON */}
      <button
        onClick={toggleSound}
        className="absolute right-4 top-16 z-20 bg-black/60 p-2 rounded-full text-lg"
      >
        {sound ? "🔊" : "🔇"}
      </button>

      {/* CAPTION & ACTION BUTTONS */}
      <div className="relative z-20 p-4 w-full flex justify-between items-end pb-2">
        <p className="text-base font-semibold max-w-[70%] leading-tight">{item.caption}</p>
        <div className="flex flex-col gap-3 text-[26px]">
          <button>❤️</button>
          <button>💬</button>
          <button>↗</button>
        </div>
      </div>

    </div>
  );
}
