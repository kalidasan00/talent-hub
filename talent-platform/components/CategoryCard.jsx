export default function CategoryCard({category}){
  return (
    <div className="bg-white rounded-xl p-4 shadow-soft hover:shadow-lg transition">
      <img src={category.icon} alt="" className="w-12 h-12 rounded-lg mb-3"/>
      <h3 className="font-semibold text-lg">{category.title}</h3>
      <p className="text-sm text-muted">{category.count?.toLocaleString()} artists</p>
    </div>
  );
}
