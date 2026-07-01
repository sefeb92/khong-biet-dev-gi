import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import CartDrawer from "@/components/layout/CartDrawer";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NordicNest - Nội Thất Scandinavian",
  description: "Trải nghiệm mua sắm nội thất không gian phong cách Scandinavian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fbf9f4] text-[#1b1c19]">
        <CartProvider>
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
