import artistsData from "../../data/artists.json";
import ArtistCard from "../../components/ArtistCard";

export default function ArtistsPage() {

  const allArtists = artistsData.categories.flatMap(cat => cat.members);

  return (
    <main className="p-6 pb-20">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">All Artists</h1>
        <p className="text-gray-500">{allArtists.length} total profiles</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allArtists.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
    </main>
  );
}
