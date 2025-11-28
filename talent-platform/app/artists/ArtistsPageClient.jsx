"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import artistsData from "../../data/artists.json";
import ArtistCard from "../../components/ArtistCard";
import SearchBar from "../../components/SearchBar";

export default function ArtistsPageClient() {

  const params = useSearchParams();
  const category = params.get("category"); // ?category=actors

  // FIXED category reading
  const allArtists = artistsData.categories.flatMap(c =>
    category && c.category.toLowerCase() !== category.toLowerCase()
      ? [] : c.members
  );

  const [search, setSearch] = useState("");

  // FIXED search field (role removed → using name + skills)
  const filtered = allArtists.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.skills.join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="px-4 pt-6 pb-24 max-w-6xl mx-auto">

      <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-bold">Explore</h1>
        <p className="text-gray-500 text-sm">{filtered.length} found</p>
      </div>

      {/* FILTER UI */}
      <div className="bg-white rounded-xl p-3 shadow-sm border">
        <SearchBar onSearch={setSearch} />
      </div>

      {/* ARTIST GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
        {filtered.length ? (
          filtered.map((artist, i) => <ArtistCard key={i} artist={artist} />)
        ) : (
          <p className="col-span-full text-center text-gray-400 mt-4">No results 😕</p>
        )}
      </div>

    </main>
  );
}
