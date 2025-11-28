"use client";
import feed from "../../data/feeds.json";
import FeedCard from "../../components/FeedCard.jsx";

export default function FeedPage() {
  return (
    <main className="max-w-xl mx-auto px-3 pt-3 pb-20">  {/* ← Important: remove pt-24 */}

      {/* Feed heading */}
      <div className="mb-5 flex items-center gap-2">
        <div className="h-5 w-1.5 rounded-full bg-blue-600"></div>
        <h2 className="text-xl font-bold">Trending Feed</h2>
      </div>

      {/* Feed List */}
      <div className="flex flex-col gap-5">
        {feed.map(post => (
          <FeedCard key={post.id} post={post} />
        ))}
      </div>

    </main>
  );
}
