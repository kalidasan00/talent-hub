import  "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Talent Platform",
  description: "Find artists and casting opportunities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#f8f7fb] text-gray-800 antialiased">

        {/* Fixed Navbar */}
        <Navbar />

        {/* PAGE CONTENT WRAPPER */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}
