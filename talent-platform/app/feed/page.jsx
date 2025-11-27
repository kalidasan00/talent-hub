import feed from "../../data/feeds.json";
import FeedCard from "../../components/FeedCard.jsx";

export default function FeedPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-5">📰 Latest Feed</h2>

      {feed.map(post => (
        <FeedCard key={post.id} post={post} />
      ))}
    </main>
  );
}
