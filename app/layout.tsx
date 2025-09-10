import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/lib/components/Footer";

const baseFontFamily = Roboto_Condensed({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SCE International",
  description: "Deploy your static Next.js site to GitHub Pages.",
  icons: {
    icon: "/sce-favicon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={baseFontFamily.className + " tracking-wide scroll-smooth"}
      data-scroll-behavior="smooth"
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=nature,potted_plant"
        />
      </head>
      <body>
        <Toaster
          position="bottom-center"
          toastOptions={{ className: "text-xl" }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
