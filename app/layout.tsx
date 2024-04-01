import "./globals.css";
import type { Metadata } from "next";
import { Inter, Shippori_Mincho } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-shippori-mincho",
  weight: "400",
});

export const metadata: Metadata = {
  title: "NYC Schools",
  description: "NYC schools...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${shipporiMincho.variable}`}>
      <body
        className={`border-tertiary bg-bg dark:border-tertiary-dark dark:bg-bg-dark text-primary dark:text-primary-dark`}
      >
        <div className="flex flex-col justify-between min-h-screen">
          <div className="flex flex-col">
            <NavBar />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
