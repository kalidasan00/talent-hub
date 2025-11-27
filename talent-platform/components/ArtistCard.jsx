export default function ArtistCard({ artist }) {
  const slug = artist.name.toLowerCase().replace(/ /g, "-"); // dynamic URL

  return (
    <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-200">

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <img
          src={artist.image || "https://via.placeholder.com/100"}
          alt={artist.name}
          className="w-16 h-16 rounded-xl object-cover border"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{artist.name}</h4>
          <p className="text-xs text-gray-500">{artist.location}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="mt-3 text-sm text-gray-700 leading-relaxed line-clamp-3">
        {artist.bio ? artist.bio.slice(0, 110) + "..." : "No bio available."}
      </p>

      {/* Button */}
      <div className="mt-4 flex justify-end">
        <a
          href={`/artists/${slug}`}
          className="text-xs px-4 py-1.5 rounded-lg bg-black text-white hover:bg-gray-800 transition"
        >
          View Profile
        </a>
      </div>

    </div>
  );
}
