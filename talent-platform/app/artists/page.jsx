import { Suspense } from "react";
import ArtistsPageClient from "./ArtistsPageClient";

export default function ArtistsPage() {
  return (
    <Suspense fallback={<div className="text-center p-10 text-gray-600">Loading artists...</div>}>
      <ArtistsPageClient />
    </Suspense>
  );
}
