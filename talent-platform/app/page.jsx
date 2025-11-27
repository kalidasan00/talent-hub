import CategoryCard from "../components/CategoryCard";
import ArtistCard from "../components/ArtistCard";
import categories from "../data/categories.json";
import artistsData from "../data/artists.json";
import Link from "next/link";

// 🎭 Random emoji generator for dynamic branding
const randomEmojis = ["🎬","🎭","📸","🎤","🎥","⭐","🎨","🎧","🎼","📺","🕺","💃","📽️","🎞️"];
const logoEmoji = randomEmojis[Math.floor(Math.random() * randomEmojis.length)];

export default function HomePage() {

  // Flatten artists
  const allArtists = artistsData.categories.flatMap(cat => cat.members);

  // Safety formatter for category names
  const getCatName = (cat) =>
    cat.name || cat.title || cat.category || "unknown";

  // 🔥 Added NEW categories list (10 total)
  const extendedCategories = [
    ...categories,
    { id: 101, name: "Singers",  count: "1,80,000" },
    { id: 102, name: "Dancers",  count: "2,30,000" },
    { id: 103, name: "Models",   count: "1,20,500" },
    { id: 104, name: "Writers",  count: "90,000"   },
    { id: 105, name: "Photographers", count: "3,10,000" },
    { id: 106, name: "Cinematographers", count: "55,000" },
    { id: 107, name: "Comedians",count: "45,000"   },
    { id: 108, name: "Makeup Artists", count: "70,000" }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="mb-14">
        <div className="bg-gradient-to-r from-primary-700 to-primary-500 text-white rounded-3xl p-10 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* LEFT HERO */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Connect. Discover. <br /> Get Hired.
              </h1>

              <p className="mt-4 text-lg text-white/90">
                Find artists, creators and casting opportunities across India.
              </p>

              {/* Search Bar UI */}
              <div className="mt-6">
                <input
                  className="p-4 rounded-xl w-full md:w-96 bg-white text-gray-700 shadow-lg border border-white/20 outline-none"
                  placeholder="Search artists, jobs, teams..."
                />
              </div>

              {/* Stats */}
              <div className="flex gap-6 mt-6 text-sm text-white/90">
                <p>⭐ 10,00,000+ creators</p>
                <p>📦 50,000+ casting calls</p>
              </div>
            </div>

            {/* RIGHT HERO — random icon */}
            <div className="hidden md:flex justify-center">
              <div className="w-72 h-72 bg-white/10 rounded-3xl backdrop-blur-xl
                border border-white/20 shadow-2xl flex items-center justify-center text-7xl">
                {logoEmoji}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CTA SECTION */}
      <section className="my-10 flex flex-col md:flex-row gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4 flex-1">
          <span className="text-3xl">📁</span>
          <div>
            <h3 className="font-semibold text-lg">Build Your Portfolio</h3>
            <p className="text-sm text-gray-500">Showcase your talent professionally</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4 flex-1">
          <span className="text-3xl">🎭</span>
          <div>
            <h3 className="font-semibold text-lg">Find Casting Calls</h3>
            <p className="text-sm text-gray-500">Daily updated roles & auditions</p>
          </div>
        </div>
      </section>


      {/* CATEGORY GRID — UPDATED */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
          {extendedCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/artists?category=${getCatName(cat).toLowerCase()}`}
            >
              <CategoryCard category={cat} />
            </Link>
          ))}
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
          {allArtists.slice(0, 6).map((artist, i) => (
            <ArtistCard key={i} artist={artist} />
          ))}
        </div>
      </section>
    </>
  );
}
