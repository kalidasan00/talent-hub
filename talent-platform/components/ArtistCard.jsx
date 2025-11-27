export default function ArtistCard({ artist }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-soft hover:scale-[1.01] transition transform">
      <div className="flex items-center gap-4">
        <img
          src={artist.avatar}
          alt={artist.name}
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div>
          <h4 className="font-semibold">{artist.name}</h4>
          <p className="text-sm text-muted">
            {artist.location} • {artist.experience}
          </p>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-700">
        {artist.bio?.slice(0, 120)}...
      </p>

      <div className="mt-3 flex justify-between items-center">
        <span className="text-sm font-medium text-primary-700">{artist.price}</span>
        <a
          href={`/artists/${artist.id}`}
          className="text-sm px-3 py-1 rounded-lg bg-primary-500 text-white"
        >
          View
        </a>
      </div>
    </div>
  );
}
