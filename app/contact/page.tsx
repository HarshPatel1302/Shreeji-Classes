"use client";

import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <Header />
      <ContactForm />
      <Footer />
    </main>
  );
}

