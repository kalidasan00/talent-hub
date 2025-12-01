"use client";
import Link from "next/link";
import artistsData from "../data/artists.json";

export default function HomePage() {

  const allArtists = artistsData.categories.flatMap(c => c.members);

  const topCreators    = [...allArtists].sort((a,b)=>b.followers-a.followers).slice(0,10);
  const trending       = [...allArtists].sort((a,b)=>b.followers-a.followers).slice(0,6);
  const reelsPreview   = [...allArtists].slice(0,10);
  const featuredWorks  = [...allArtists].slice(0,12);
  const recentlyJoined = [...allArtists].slice(-6);

  return (
    <div className="pt-[55px] pb-[95px] px-5 max-w-xl mx-auto -mt-[5px]">  {/*  FIXED SPACING */}

      {/* 🔍 SEARCH */}
      <input
        placeholder="Search creators, skills, location..."
        className="w-full p-3 rounded-xl bg-gray-100 border outline-none text-sm mb-6"
      />

      {/* ⭕ Top Creators */}
      <Section title="Top Creators">
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-1">
          {topCreators.map((artist,i)=>(
            <div key={i} className="flex flex-col items-center">
              <img src={artist.profilePic} className="h-14 w-14 rounded-full border-2 border-pink-500"/>
              <p className="text-[11px] mt-1 w-14 text-center truncate">{artist.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 🎤 Book A Show */}
      <Section title="Book a Show">
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-1">

          <BookCard label="Singers" img="https://images.pexels.com/photos/2747445/pexels-photo-2747445.jpeg?w=600"/>
          <BookCard label="Bands"   img="https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg?w=600"/>
          <BookCard label="Dancers" img="https://images.pexels.com/photos/167447/pexels-photo-167447.jpeg?w=600"/>

        </div>
      </Section>

      {/* 🔥 Trending */}
      <Section title="Trending This Week" link="/artists">
        <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
          {trending.map((a,i)=>(
            <div key={i} className="min-w-[160px] p-3 bg-white rounded-xl shadow">
              <img src={a.profilePic} className="h-24 w-full rounded-lg object-cover"/>
              <h4 className="text-sm font-semibold mt-2">{a.name}</h4>
              <p className="text-xs text-gray-500 truncate">{a.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 🎥 Reels */}
      <Section title="Top Reels" link="/reels">
        <div className="flex gap-3 overflow-x-scroll no-scrollbar py-1">
          {reelsPreview.map((a,i)=>(
            <div key={i} className="min-w-[120px] h-[170px] bg-black rounded-xl relative">
              <img src={a.profilePic} className="absolute inset-0 w-full h-full object-cover opacity-80"/>
              <span className="absolute bottom-2 left-2 text-xs bg-white/20 px-2 py-1 rounded text-white">▶ Reel</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 🎨 Masonry */}
      <Section title="Featured Work Gallery" link="/artists">
        <div className="columns-3 gap-2 space-y-2">
          {featuredWorks.map((a,i)=>(<img key={i} src={a.profilePic} className="w-full rounded-lg break-inside-avoid"/>))}
        </div>
      </Section>

      <Section title="Leaderboard">
        <div className="flex gap-3 overflow-x-scroll no-scrollbar py-1">
          {topCreators.slice(0,8).map((a,i)=>(
            <div key={i} className="min-w-[120px] bg-white p-3 rounded-xl shadow text-center">
              <img src={a.profilePic} className="h-16 w-16 rounded-full mx-auto"/>
              <p className="font-medium text-sm mt-1">{i+1}. {a.name}</p>
              <p className="text-xs text-gray-500">{a.followers} followers</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Recently Joined">
        <div className="space-y-3">
          {recentlyJoined.map((a,i)=>(
            <div key={i} className="flex gap-3 items-center bg-white p-3 rounded-xl shadow">
              <img src={a.profilePic} className="h-12 w-12 rounded-full"/>
              <div>
                <p className="text-sm font-semibold">{a.name}</p>
                <p className="text-xs text-gray-500">{a.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
}


/* ---- Components ---- */
const Section = ({title,link,children}) => (
  <div className="mb-8">
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-[17px] font-semibold">{title}</h2>
      {link && <Link href={link} className="text-xs font-semibold text-blue-600">See All →</Link>}
    </div>
    {children}
  </div>
);

const BookCard = ({label,img}) => (
  <div className="min-w-[160px] h-[110px] relative rounded-xl overflow-hidden shadow bg-gray-200">
    <img src={img} className="absolute inset-0 w-full h-full object-cover"/>
    <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-[3px] rounded">{label}</div>
  </div>
);
