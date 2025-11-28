"use client";

import reelsData from "../../data/reels.json";
import artistsData from "../../data/artists.json";
import ReelCard from "../../components/ReelCard";

export default function ReelsPage() {

  const reels = reelsData;
  const allArtists = artistsData.categories.flatMap(c => c.members);

  return (
    <div className="bg-black text-white overflow-y-auto snap-y snap-mandatory h-[calc(100vh-128px)] mt-[64px] mb-[64px]">
      {reels.map(item => {
        const user = allArtists.find(a => a.username === item.user);
        return <ReelCard key={item.id} item={item} user={user} />;
      })}
    </div>
  );
}
