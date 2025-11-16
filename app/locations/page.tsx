"use client";

import Header from "@/components/Header";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Header />
      <LocationsSection />
      <Footer />
    </main>
  );
}

