"use client";

import { useSearchParams } from "next/navigation";
import artistsData from "../../data/artists.json";
import ArtistCard from "../../components/ArtistCard";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";

export default function ArtistsPageClient() {

  const params = useSearchParams();
  const category = params.get("category");   // 🔥 safe now

  const allArtists = artistsData.categories.flatMap(cat =>
    category
      ? (cat.name?.toLowerCase() === category.toLowerCase() ? cat.members : [])
      : cat.members
  );

  const [search, setSearch] = useState("");

  const filteredArtists = allArtists.filter(a => {
    const n = a.name?.toLowerCase() || "";
    const r = a.role?.toLowerCase() || "";
    const s = search.toLowerCase();
    return n.includes(s) || r.includes(s);
  });

  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          {category ? `${category} Artists` : "All Artists"}
        </h1>
        <p className="text-gray-500">{filteredArtists.length} results</p>
      </div>

      <SearchBar onSearch={setSearch} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
        {filteredArtists.length ? (
          filteredArtists.map((artist,i)=> <ArtistCard key={i} artist={artist}/>)
        ) : (
          <p className="text-gray-400 col-span-full text-center mt-10 text-lg">
            No artists found 😕
          </p>
        )}
      </div>

    </main>
  );
}
