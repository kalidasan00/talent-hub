"use client"
import Link from "next/link";

export default function ArtistCard({ artist }) {

  const slug = artist.username;
  const image = artist.profilePic || "https://i.pravatar.cc/200";

  return (
    <div className="
      bg-white rounded-2xl p-4 border border-gray-200
      shadow-sm hover:shadow-xl hover:-translate-y-1
      transition-all duration-300 cursor-pointer
    ">

      {/* Profile Top */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={artist.name}
          className="w-16 h-16 rounded-xl object-cover border border-gray-300"
        />
        <div>
          <h4 className="font-semibold text-gray-900 text-[15px]">{artist.name}</h4>
          <p className="text-xs text-gray-500">{artist.location || "Unknown Location"}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="mt-3 text-sm text-gray-600 line-clamp-2 leading-relaxed">
        {artist.bio}
      </p>

      {/* Skills (🔥 new — short tags) */}
      {artist.skills && (
        <div className="flex flex-wrap gap-2 mt-3">
          {artist.skills.slice(0,3).map((s,i)=>(
            <span key={i} className="text-[11px] bg-gray-100 px-2 py-0.5 rounded-full text-gray-700">
              {s}
            </span>
          ))}
        </div>
      )}

      {/* Followers Count + Profile CTA */}
      <div className="mt-4 flex justify-between items-center">

        {/* Followers Count */}
        <p className="text-[11.5px] text-gray-500">
          ⭐ <span className="font-medium text-gray-700">{artist.followers.toLocaleString()}</span> followers
        </p>

        {/* CTA Button */}
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
