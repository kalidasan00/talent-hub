"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import artistsData from "../../data/artists.json";
import ArtistCard from "../../components/ArtistCard";
import SearchBar from "../../components/SearchBar";

export default function ArtistsPage() {

  const query = useSearchParams();
  const selectedCategory = query.get("category"); // 🔥 get category from URL

  const allArtists = artistsData.categories.flatMap(cat =>
    selectedCategory ?
      (cat.name.toLowerCase() === selectedCategory.toLowerCase() ? cat.members : []) :
      cat.members
  );

  const [searchQuery, setSearchQuery] = useState("");

  // 🔍 filter by search text
  const filteredArtists = allArtists.filter(artist => {
    const name = artist.name?.toLowerCase() || "";
    const role = artist.role?.toLowerCase() || "";
    const q = searchQuery.toLowerCase();
    return name.includes(q) || role.includes(q);
  });

  return (
    <main className="px-6 pb-24 pt-6 max-w-6xl mx-auto">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          {selectedCategory ? `${selectedCategory} Artists` : "Explore Artists"}
        </h1>

        <p className="text-gray-500">
          {filteredArtists.length} results
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <SearchBar onSearch={setSearchQuery} />
      </div>

      {/* Artist Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist, i) => (
            <ArtistCard key={i} artist={artist} />
          ))
        ) : (
          <p className="text-gray-500 text-center mt-10 col-span-full text-lg">
            No artists found 😕
          </p>
        )}

      </div>
    </main>
  );
}
