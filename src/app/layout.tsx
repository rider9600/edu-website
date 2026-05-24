import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import ScrollTopButton from "@/components/ui/ScrollTopButton";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} - Probability & Statistics`,
  description: SITE_DESCRIPTION,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100">
        <Navbar />
        <div className="min-h-[calc(100vh-64px)]">{children}</div>
        <Footer />
        <ScrollTopButton />
      </body>
    </html>
  );
}
