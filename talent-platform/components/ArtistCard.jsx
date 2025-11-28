"use client"
import Link from "next/link";

export default function ArtistCard({ artist }) {

  const slug = artist.username;  // 🔥 correct & matches profile page
  const image = artist.profilePic || artist.avatar || artist.photo || "https://i.pravatar.cc/200";

  return (
    <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-200">

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={artist.name}
          className="w-16 h-16 rounded-xl object-cover border"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{artist.name}</h4>
          <p className="text-xs text-gray-500">{artist.location || "Location unknown"}</p>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-700 line-clamp-3">{artist.bio}</p>

      <div className="mt-4 flex justify-end">
        <Link
          href={`/artist/${slug}`}
          className="text-xs px-4 py-1.5 rounded-lg bg-black text-white hover:bg-gray-800 transition"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
