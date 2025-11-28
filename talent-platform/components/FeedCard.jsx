"use client";
import artistsData from "../data/artists.json";
import { Heart, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function FeedCard({ post }) {

  const [liked, setLiked] = useState(false);

  // Find User by username
  const artist = artistsData.categories
    .flatMap(c => c.members)
    .find(a => a.username === post.user);

  const image = post.image || "https://via.placeholder.com/800x600?text=No+Image";
  const avatar = artist?.profilePic || "https://i.pravatar.cc/100";

  return (
    <div className="bg-white rounded-xl p-5 mb-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">

      {/* USER HEADER */}
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={artist?.name}
          className="w-11 h-11 rounded-full object-cover border shadow-sm"
        />

        <div>
          <h3 className="font-semibold text-[15px]">{artist?.name}</h3>
          <p className="text-[12px] text-gray-500">@{artist?.username}</p>
        </div>
      </div>

      {/* CAPTION */}
      {post.caption && (
        <p className="mt-3 text-[14px] leading-relaxed text-gray-800 line-clamp-3">
          {post.caption}
        </p>
      )}

      {/* IMAGE POST */}
      <div className="mt-3 overflow-hidden rounded-xl bg-gray-200 animate-pulse h-auto">
        <img
          src={image}
          alt="feed-media"
          className="w-full h-[330px] sm:h-[430px] object-cover hover:scale-[1.04] duration-500"
          loading="lazy"
        />
      </div>

      {/* ACTION BAR */}
      <div className="flex justify-between items-center pt-3 border-t mt-4 text-[14px]">

        {/* LIKE BUTTON WITH HEART BEAT ANIMATION */}
        <button
          onClick={() => setLiked(!liked)}
          className={`flex items-center gap-1 transition ${
            liked ? "text-red-500 scale-110" : "hover:scale-105 hover:text-red-500"
          }`}
        >
          <Heart size={18} fill={liked ? "red" : "none"} />
          Like
        </button>

        <button className="flex items-center gap-1 hover:text-blue-600 hover:scale-105 transition">
          <MessageCircle size={18} /> Comment
        </button>

        <button className="flex items-center gap-1 hover:text-green-600 hover:scale-105 transition">
          <Send size={18} /> Share
        </button>

      </div>
    </div>
  );
}
