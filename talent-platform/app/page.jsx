import CategoryCard from "../components/CategoryCard";
import ArtistCard from "../components/ArtistCard";
import categories from "../data/categories.json";
import artistsData from "../data/artists.json";

export default function HomePage() {
  // Convert nested categories -> flat artist list
  const allArtists = artistsData.categories.flatMap(cat => cat.members);

  return (
    <>
      {/* HERO SECTION */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white rounded-3xl p-10 shadow-deep">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* Left Side */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Connect. Discover. <br /> Get Hired.
              </h1>

              <p className="mt-4 text-lg text-white/90">
                Find artists, creators and casting opportunities across India.
              </p>

              {/* Search Bar */}
              <div className="mt-6">
                <input
                  className="p-4 rounded-xl w-full md:w-96 bg-white text-gray-700 shadow-soft"
                  placeholder="Search artists, jobs, teams..."
                />
              </div>

              {/* Stats */}
              <div className="flex gap-6 mt-6 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  ⭐ <span>10 lakh active users</span>
                </div>
                <div className="flex items-center gap-2">
                  📦 <span>50,000 jobs posted</span>
                </div>
              </div>
            </div>

            {/* Right Side Showcase */}
            <div className="hidden md:flex justify-center">
              <div className="w-72 h-72 bg-white/10 rounded-3xl backdrop-blur-xl border border-white/20 shadow-xl flex items-center justify-center text-5xl">
                🎬
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK CTA */}
      <section className="my-10 flex flex-col md:flex-row gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-soft flex items-center gap-4 flex-1">
          <span className="text-3xl">📁</span>
          <div>
            <h3 className="font-semibold text-lg">Build your portfolio</h3>
            <p className="text-muted text-sm">Show your skills to the world</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-soft flex items-center gap-4 flex-1">
          <span className="text-3xl">🎭</span>
          <div>
            <h3 className="font-semibold text-lg">Find casting calls</h3>
            <p className="text-muted text-sm">Daily updated jobs & roles</p>
          </div>
        </div>
      </section>

      {/* CATEGORIES LIST */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Categories</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* FEATURED ARTISTS */}
      <section className="pb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Featured Artists</h2>
          <a href="/artists" className="text-primary-700 text-sm font-semibold">
            View all →
          </a>
        </div>

        {/* 🔥 Fixed Mapping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {allArtists.slice(0, 6).map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))}
        </div>
      </section>
    </>
  );
}
