import { Suspense } from "react";
import ArtistsPageClient from "./ArtistsPageClient.jsx";   //  ← EXTENSION REQUIRED

export default function ArtistsPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading artists…</div>}>
      <ArtistsPageClient />
    </Suspense>
  );
}
