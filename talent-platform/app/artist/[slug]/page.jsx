"use client";

import { useParams } from "next/navigation";
import artistsData from "../../../data/artists.json";
import feedsData from "../../../data/feeds.json";
import reelsData from "../../../data/reels.json";
import { useState } from "react";

export default function ArtistProfilePage() {

  const { slug } = useParams();

  // 🔥 Correct Match — username is slug
  const artist = artistsData.categories
    .flatMap(c => c.members)
    .find(a => a.username.toLowerCase() === slug.toLowerCase());

  if (!artist)
    return <p className="text-center p-10 text-red-500 text-lg font-semibold">❌ Artist Not Found</p>;

  const [activeTab, setActiveTab] = useState("posts");

  // FILTER DATA FOR SPECIFIC ARTIST
  const userFeeds = feedsData.filter(f => f.user === artist.username);
  const userReels = reelsData.filter(r => r.user === artist.username);

  return (
    <main className="max-w-3xl mx-auto px-5 py-8">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center sm:gap-6">

        {/* PROFILE PICTURE */}
        <img
          src={artist.profilePic}
          className="w-28 h-28 rounded-full object-cover border-4 border-gray-300 shadow-sm"
        />

        <div className="mt-4 sm:mt-0">
          <h1 className="text-2xl font-bold">{artist.name}</h1>
          <p className="text-gray-500 text-sm">{artist.location}</p>
          <p className="text-xs text-gray-600">@{artist.username}</p>
        </div>
      </div>


      {/* ================= STATS ================= */}
      <div className="mt-6 grid grid-cols-3 text-center text-sm font-medium">

        <div>
          <p className="text-lg font-bold">{userFeeds.length}</p>
          <span className="text-gray-500 text-xs">Posts</span>
        </div>

        <div>
          <p className="text-lg font-bold">{artist.followers}</p>
          <span className="text-gray-500 text-xs">Followers</span>
        </div>

        <div>
          <p className="text-lg font-bold">{userReels.length}</p>
          <span className="text-gray-500 text-xs">Reels</span>
        </div>

      </div>


      {/* ================= ABOUT ================= */}
      <section className="mt-6 text-center sm:text-left">

        <h2 className="font-semibold text-gray-800 text-lg">About</h2>
        <p className="text-gray-700 text-sm mt-1 leading-relaxed">{artist.bio}</p>

        <h3 className="mt-3 text-gray-700 font-medium text-sm">Skills</h3>
        <p className="text-gray-600 text-xs">{artist.skills.join(", ")}</p>

      </section>


      {/* ================= TABS ================= */}
      <div className="flex justify-around mt-8 border-b pb-2 text-sm font-semibold">

        <button
          onClick={() => setActiveTab("posts")}
          className={activeTab==="posts" ? "border-b-2 border-black" : "text-gray-400"}
        >📷 Posts</button>

        <button
          onClick={() => setActiveTab("reels")}
          className={activeTab==="reels" ? "border-b-2 border-black" : "text-gray-400"}
        >🎞 Reels</button>

      </div>


      {/* ================= POSTS ================= */}
      {activeTab === "posts" && (
        <div className="grid grid-cols-3 gap-1 mt-5">
          {userFeeds.length > 0 ? userFeeds.map(p => (
            <img key={p.id} src={p.image} className="aspect-square object-cover" />
          )) : (
            <p className="col-span-full text-center text-gray-400 mt-6">No Posts Yet</p>
          )}
        </div>
      )}

      {/* ================= REELS ================= */}
      {activeTab === "reels" && (
        <div className="grid grid-cols-2 gap-2 mt-5">
          {userReels.length > 0 ? userReels.map(r => (
            <video key={r.id} src={r.video} className="rounded-lg w-full aspect-[9/16] object-cover" muted autoPlay loop />
          )) : (
            <p className="col-span-full text-center text-gray-400 mt-6">No Reels Yet 🎥</p>
          )}
        </div>
      )}

    </main>
  );
}
