import CategoryCard from "../components/CategoryCard";
import ArtistCard from "../components/ArtistCard";
import artistsData from "../data/artists.json";
import Link from "next/link";

export default function HomePage() {

  // Flatten artists
  const allArtists = artistsData.categories.flatMap(cat => cat.members);

  const getCatName = (cat) =>
    cat.name || cat.title || cat.category || "unknown";

  return (
    <>
      {/* HERO SECTION */}
      <section className="mb-14">
        <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white rounded-3xl p-10 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Connect. Discover. <br /> Get Hired.
              </h1>

              <p className="mt-4 text-lg text-white/90">
                Find artists, creators and casting opportunities across India.
              </p>

              <div className="mt-6">
                <input
                  className="p-4 rounded-xl w-full md:w-96 bg-white text-gray-700 shadow-md border border-white/20 outline-none"
                  placeholder="Search artists, jobs, teams..."
                />
              </div>

              <div className="flex gap-6 mt-6 text-sm text-white/90">
                <p>⭐ 10,00,000+ active creators</p>
                <p>📦 50,000+ casting calls</p>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="w-72 h-72 bg-white/10 rounded-3xl backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center text-6xl">
                🎬
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED ARTISTS */}
      <section className="pb-20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Featured Artists</h2>
          <Link href="/artists" className="text-primary-700 text-sm font-semibold">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allArtists.slice(0, 6).map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))}
        </div>
      </section>
    </>
  );
}
