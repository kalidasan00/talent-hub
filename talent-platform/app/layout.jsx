import "../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Talent Platform",
  description: "Find artists and casting opportunities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f8f7fb] text-gray-800 antialiased">

        {/* 🔥 Fixed Top Navbar */}
        <Navbar />

        {/* 🔥 Page Area Between Top Navbar + Bottom Tabs */}
        <main className="pt-[64px] pb-[72px] min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6">
          {children}
        </main>

      </body>
    </html>
  );
}
