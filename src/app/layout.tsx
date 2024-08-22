import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Splashscreen from "./components/splashscreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MaQuis Scott",
  description: "Maquis Scott photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col relative min-h-screen`}>
        {/* <body className={`${inter.className} bg-gray-100 flex flex-col h-screen`}> */}
        <header className="p-4" />
        <Splashscreen />
        {children}
        <Footer />
      </body>
    </html>
  );
}
