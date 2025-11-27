export default function FeedCard({ post }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 mb-5 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">

      {/* HEADER */}
      <div className="flex items-center gap-3">
        <img
          src={post.avatar || post.authorImg}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-1 ring-transparent hover:ring-blue-500 transition"
        />

        <div>
          <h3 className="font-semibold text-[14.5px] sm:text-[16px] text-gray-900">
            {post.name || post.author}
          </h3>

          <p className="text-[11.5px] sm:text-[13px] text-gray-500">
            {post.role} • {post.time || "2h ago"}
          </p>
        </div>
      </div>

      {/* TEXT */}
      {post.content && (
        <p className="mt-2 sm:mt-3 text-[13.5px] sm:text-[15px] text-gray-800 leading-snug sm:leading-relaxed">
          {post.content}
        </p>
      )}

      {/* COMPANY TAG */}
      {post.company && (
        <span className="mt-2 inline-block bg-blue-50 text-blue-700 text-[11px] sm:text-[12.5px] px-2.5 py-1 rounded-lg">
          {post.company}
        </span>
      )}

      {/* MEDIA (RESPONSIVE HEIGHT) */}
      {post.image && (
        <div className="mt-3 sm:mt-4 overflow-hidden rounded-lg w-full
          aspect-[5/4] sm:aspect-[4/3]">
          <img
            src={post.image}
            className="w-full h-full object-cover hover:scale-[1.02] transition duration-500"
          />
        </div>
      )}

      {/* STATS */}
      <div className="flex justify-between text-gray-600 text-[11.5px] sm:text-[13.5px] mt-2 sm:mt-3">
        <span>❤️ {post.likes}</span>
        <span>💬 {post.comments} · 🔁 {post.shares}</span>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex justify-around border-t pt-2 sm:pt-3 mt-2 sm:mt-3
        text-[12px] sm:text-[14px] text-gray-700 font-medium">

        <button className="px-2 py-1 hover:bg-gray-100 rounded-md transition">👍 Like</button>
        <button className="px-2 py-1 hover:bg-gray-100 rounded-md transition">💬 Comment</button>
        <button className="px-2 py-1 hover:bg-gray-100 rounded-md transition">🔁 Share</button>
        <button className="px-2 py-1 hover:bg-gray-100 rounded-md transition">📩 Send</button>
      </div>

    </div>
  );
}
