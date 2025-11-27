"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import artistsData from "../../data/artists.json";
import ArtistCard from "../../components/ArtistCard";
import SearchBar from "../../components/SearchBar";

export default function ArtistsPageClient() {

  const params = useSearchParams();
  const category = params.get("category");

  const allArtists = artistsData.categories.flatMap(c =>
    category
      ? (c.name?.toLowerCase() === category.toLowerCase() ? c.members : [])
      : c.members
  );

  const [search, setSearch] = useState("");

  const filtered = allArtists.filter(a => {
    const q = search.toLowerCase();
    return a.name?.toLowerCase().includes(q) || a.role?.toLowerCase().includes(q);
  });

  return (
    <main className="px-6 py-10 max-w-6xl mx-auto">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          {category ? `${category} Artists` : "All Artists"}
        </h1>
        <p className="text-gray-500">{filtered.length} results</p>
      </div>

      <SearchBar onSearch={setSearch} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
        {filtered.length ? (
          filtered.map((artist, i) => <ArtistCard key={i} artist={artist} />)
        ) : (
          <p className="text-center text-gray-400 col-span-full mt-10 text-lg">
            No artists found 😕
          </p>
        )}
      </div>

    </main>
  );
}
