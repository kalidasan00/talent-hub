import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-br from-primary-700 to-primary-500 text-white">
      {/* top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-bold text-white">
              TP
            </div>
            <span className="text-xl font-semibold">TalentPlatform</span>
          </div>

          <p className="text-white/80 text-sm">
            Connecting artists, creators, and industry professionals across India.
          </p>
        </div>

        {/* Popular Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link href="/categories/actors">Actors</Link></li>
            <li><Link href="/categories/directors">Directors</Link></li>
            <li><Link href="/categories/dancers">Dancers</Link></li>
            <li><Link href="/categories/singers">Singers</Link></li>
            <li><Link href="/categories/photographers">Photographers</Link></li>
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Platform</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link href="/artists">Browse Artists</Link></li>
            <li><Link href="/jobs">Jobs & Casting</Link></li>
            <li><Link href="/create-job">Post a Job</Link></li>
            <li><Link href="/community">Community Feed</Link></li>
            <li><Link href="/login">Login / Signup</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex gap-4 mt-2">
            <Link href="#" className="hover:opacity-80">
              <img src="/assets/icons/instagram.svg" className="w-6" />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <img src="/assets/icons/facebook.svg" className="w-6" />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <img src="/assets/icons/linkedin.svg" className="w-6" />
            </Link>
            <Link href="#" className="hover:opacity-80">
              <img src="/assets/icons/youtube.svg" className="w-6" />
            </Link>
          </div>
        </div>

      </div>

      {/* bottom section */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-white/70 text-sm">
          <p>© {new Date().getFullYear()} TalentPlatform. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/support">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
