import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "India's Most Trusted Digital Marketing Agency - digiVirus.in",
  description:
    "Best Digital Marketing Agency In India | Trusted By Leading Brands & Unicorns | Improve Business Performance Up To 60% | 5.0 Rated On Google",
  keywords: [
    "Digital Marketing Agency India",
    "Performance Marketing",
    "Lead Generation Agency",
    "AI Ads Creation",
    "digiVirus",
    "SEO Agency India",
  ],
  authors: [{ name: "digiVirus.in" }],
  openGraph: {
    title: "India's Most Trusted Digital Marketing Agency - digiVirus.in",
    description:
      "Best Digital Marketing Agency In India | Trusted By Leading Brands & Unicorns | Improve Business Performance Up To 60% | 5.0 Rated On Google",
    url: "https://digivirus.in/",
    siteName: "digiVirus",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#F4F0EA] text-black min-h-screen">
        {children}
      </body>
    </html>
  );
}
