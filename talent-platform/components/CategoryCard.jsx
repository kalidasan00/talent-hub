export default function CategoryCard({ category }) {

  // Random Emoji fallback if no icon exists
  const fallbackIcons = ["🎭","🎬","📸","🎤","🎧","⭐","🎨","📹","🕺","💃"];
  const randomFallback = fallbackIcons[Math.floor(Math.random() * fallbackIcons.length)];

  // Safe label fetcher
  const title = category.title || category.name || category.category || "Unknown";

  return (
    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl
                    transition-all cursor-pointer text-center border border-gray-100">

      {/* Category Icon */}
      <div className="flex justify-center mb-3">
        {category.icon ? (
          <img
            src={category.icon}
            alt={title}
            className="w-12 h-12 object-cover rounded-md"
          />
        ) : (
          <span className="text-4xl">{randomFallback}</span>
        )}
      </div>

      {/* Name */}
      <h3 className="font-semibold text-lg">{title}</h3>

      {/* Count */}
      <p className="text-sm text-gray-500 mt-1">
        {category.count ? category.count.toLocaleString() : "—"} artists
      </p>
    </div>
  );
}
