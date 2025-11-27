export default function FeedCard({ post }) {
  return (
    <div className="bg-white rounded-xl p-5 mb-5 shadow-sm border border-gray-200 hover:shadow-md transition">

      {/* Header */}
      <div className="flex items-center gap-3">
        <img
          src={post.avatar}
          alt="avatar"
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-[16px]">{post.name}</h3>
          <p className="text-sm text-gray-500">{post.role} • {post.time}</p>
        </div>
      </div>

      {/* Main Post */}
      <p className="mt-4 text-gray-800">{post.text}</p>
      {post.company && (
        <p className="text-blue-600 font-semibold mt-1">Company: {post.company}</p>
      )}

      {post.image && (
        <img src={post.image} className="rounded-xl mt-4 shadow-sm" />
      )}

      {/* Stats */}
      <div className="flex justify-between text-gray-500 text-sm mt-4">
        <span>❤️ {post.likes}</span>
        <span>{post.comments} comments · {post.shares} reposts</span>
      </div>

      {/* Actions */}
      <div className="flex justify-between text-[15px] font-medium text-gray-600 border-t pt-3 mt-3">
        <button className="hover:text-primary-600">👍 Like</button>
        <button className="hover:text-primary-600">💬 Comment</button>
        <button className="hover:text-primary-600">🔁 Share</button>
        <button className="hover:text-primary-600">📩 Send</button>
      </div>
    </div>
  );
}
