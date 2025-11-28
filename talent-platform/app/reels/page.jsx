"use client";

import reelsData from "../../data/reels.json";
import artistsData from "../../data/artists.json";
import ReelCard from "../../components/ReelCard";

export default function ReelsPage() {

  const reels = reelsData;
  const allArtists = artistsData.categories.flatMap(c => c.members);

  return (
    <div
      className="
      bg-black text-white
      h-[calc(100vh-136px)]    /* viewport minus top+bottom bars */
      snap-y snap-mandatory
      overflow-y-scroll
      "
    >
      {reels.map(item => {
        const user = allArtists.find(a => a.username === item.user);
        return <ReelCard key={item.id} item={item} user={user} />;
      })}
    </div>
  );
}
