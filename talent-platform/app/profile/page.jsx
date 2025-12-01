"use client";
import { useState } from "react";
import userData from "../../data/user.json";
import { Play, Image as ImageIcon, FileText, Plus } from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState(userData); // <-- editable data state
  const [tab, setTab] = useState("posts");
  const [editOpen, setEditOpen] = useState(false);

  // Handle updates
  const updateField = (key, value) => {
    setUser(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen px-6 max-w-lg mx-auto pt-[120px] pb-[100px]">

      {/* ---------------- HEADER ---------------- */}
      <div className="text-center relative">

        {/* Edit Button */}
        <button
          onClick={() => setEditOpen(true)}
          className="absolute right-0 top-0 text-sm bg-black/80 text-white px-3 py-1 rounded-full"
        >
          Edit Profile
        </button>

        <img src={user.img} className="w-28 h-28 rounded-full mx-auto shadow-md object-cover" />
        <h1 className="mt-3 text-2xl font-semibold">{user.name}</h1>
        <p className="text-gray-500 text-sm">{user.category}</p>

        <div className="flex justify-center gap-10 mt-4">
          <Stat label="Followers" count={user.followers}/>
          <Stat label="Projects" count={user.projects}/>
        </div>
      </div>

      {/* ---------------- CREATE POST ---------------- */}
      <div className="mt-8 bg-white border rounded-3xl shadow-sm p-3 flex-col">
        <input placeholder="Start a post"
          className="w-full bg-gray-100 rounded-2xl px-4 py-3 outline-none text-sm"
        />
        <div className="flex justify-around mt-3 text-sm font-medium">
          <ActionBtn icon={<ImageIcon size={18}/>} label="Photo"/>
          <ActionBtn icon={<Play size={18}/>} label="Video"/>
          <ActionBtn icon={<FileText size={18}/>} label="Write article"/>
        </div>
      </div>

      {/* ---------------- TABS ---------------- */}
      <div className="flex mt-8 border-b text-sm font-medium">
        {["posts","videos","about","skills"].map(t=>(
          <button key={t} onClick={()=>setTab(t)}
            className={`flex-1 pb-2 ${tab===t?"border-b-2 border-black font-bold":"text-gray-400"}`}>
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {/* ---------------- POSTS ---------------- */}
      {tab==="posts" && (
        <div className="grid grid-cols-3 gap-2 mt-5">
          <UploadTile label="Add Photo" />
          {user.posts?.map((img,i)=>(
            <img key={i} src={img} className="w-full h-32 object-cover rounded-lg" />
          ))}
        </div>
      )}

      {/* ---------------- VIDEOS ---------------- */}
      {tab==="videos" && (
        <div className="grid gap-4 mt-6">
          <UploadTile label="Add Video" />
          {user.videos?.map((v,i)=>(
            <a key={i} href={v.videoUrl} target="_blank" className="block rounded overflow-hidden shadow">
              <div className="relative">
                <img src={v.thumbnail} className="w-full h-40 object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play size={26} color="white"/>
                </div>
              </div>
              <p className="text-sm mt-1 font-medium px-1 pb-2">{v.title}</p>
            </a>
          ))}
        </div>
      )}

      {/* ---------------- ABOUT ---------------- */}
      {tab==="about" && (
        <p className="mt-6 text-gray-700 leading-relaxed text-sm">{user.about}</p>
      )}

      {/* ---------------- SKILLS ---------------- */}
      {tab==="skills" && (
        <div className="flex flex-wrap gap-2 mt-6">
          {user.skills.map((skill,i)=>(
            <span key={i} className="bg-gray-200 px-3 py-1 rounded-lg text-sm">{skill}</span>
          ))}
          <AddSkillBtn/>
        </div>
      )}

      {/* ------------ ✨ EDIT PROFILE MODAL ----------- */}
      {editOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-5">
          <div className="bg-white w-full max-w-md p-5 rounded-xl shadow-xl">

            <h2 className="text-lg font-semibold mb-3">Edit Profile</h2>

            <label className="text-sm text-gray-600">Name</label>
            <input value={user.name} onChange={e=>updateField("name",e.target.value)}
              className="w-full border px-3 py-2 rounded mb-3" />

            <label className="text-sm text-gray-600">Bio / About</label>
            <textarea value={user.about} onChange={e=>updateField("about",e.target.value)}
              className="w-full border px-3 py-2 rounded h-24 mb-3"></textarea>

            <label className="text-sm text-gray-600">Profile Image URL</label>
            <input value={user.img} onChange={e=>updateField("img",e.target.value)}
              className="w-full border px-3 py-2 rounded mb-3" />

            <button onClick={()=>setEditOpen(false)}
              className="w-full bg-black text-white py-2 rounded-lg mt-2">
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* UI Components */
const Stat = ({label,count}) => (
  <div className="text-center">
    <p className="font-bold text-lg">{count}</p>
    <p className="text-xs text-gray-500">{label}</p>
  </div>
);

const ActionBtn = ({icon,label}) => (
  <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg">
    {icon} <span>{label}</span>
  </button>
);

const UploadTile = ({label}) => (
  <button className="h-32 border border-gray-300 rounded-lg flex flex-col items-center justify-center hover:bg-gray-100">
    <Plus size={22}/> <span className="text-xs text-gray-600">{label}</span>
  </button>
);

const AddSkillBtn = () => (
  <button className="px-3 py-1 border rounded-lg text-sm font-medium">+ Add Skill</button>
);
