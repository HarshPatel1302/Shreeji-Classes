"use client";

import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pt-20">
      <Header />
      <AboutSection />
      <Footer />
    </main>
  );
}

