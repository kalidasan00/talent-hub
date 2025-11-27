"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full flex items-center gap-3 bg-white border rounded-xl px-4 py-2
      shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition-all">

      <span className="text-gray-500 text-lg">🔍</span>

      <input
        type="text"
        placeholder="Search artists..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);   // <-- sends search to Explore page
        }}
        className="w-full bg-transparent outline-none text-[15px]"
      />

      {query.length > 0 && (
        <button
          onClick={() => { setQuery(""); onSearch(""); }}
          className="text-gray-400 hover:text-gray-600">
          ✖
        </button>
      )}
    </div>
  );
}
