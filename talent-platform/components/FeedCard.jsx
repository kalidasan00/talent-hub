"use client";
import artistsData from "../data/artists.json";

export default function FeedCard({ post }) {

  // Find full user details from username
  const artist = artistsData.categories
    .flatMap(c => c.members)
    .find(a => a.username === post.user);

  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 mb-5 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">

      {/* HEADER */}
      <div className="flex items-center gap-3">
        <img
          src={artist?.profilePic}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border"
        />

        <div>
          <h3 className="font-semibold text-[15px]">{artist?.name}</h3>
          <p className="text-[12px] text-gray-500">@{artist?.username}</p>
        </div>
      </div>

      {/* CAPTION (TOP — as per your UI rules) */}
      {post.caption && (
        <p className="mt-2 text-[14px] text-gray-800 leading-snug">
          {post.caption}
        </p>
      )}

      {/* IMAGE FEED */}
      {post.image && (
        <div className="mt-3 overflow-hidden rounded-lg">
          <img
            src={post.image}
            className="w-full h-[320px] sm:h-[420px] object-cover hover:scale-105 transition duration-500"
          />
        </div>
      )}

      {/* ACTIONS */}
      <div className="flex justify-around border-t pt-3 mt-3 text-[13px] text-gray-700">

        <button className="hover:bg-gray-100 px-2 py-1 rounded-md transition">❤️ Like</button>
        <button className="hover:bg-gray-100 px-2 py-1 rounded-md transition">💬 Comment</button>
        <button className="hover:bg-gray-100 px-2 py-1 rounded-md transition">↗ Share</button>

      </div>

    </div>
  );
}
