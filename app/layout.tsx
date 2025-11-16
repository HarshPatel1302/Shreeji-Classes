import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Shreeji Classes - Excellence in Education | Offline & Online Coaching",
  description:
    "Professional coaching for VIII-XII, JEE, NEET Foundation, Diploma, Engineering, and Commerce. Smart Study Programs by IITian S.VidhyaSagar. PAN India Online Classes.",
  keywords:
    "Shreeji Classes, tuition, coaching, JEE, NEET, IITian, online classes, offline classes, Panvel, Thane, Mumbai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

