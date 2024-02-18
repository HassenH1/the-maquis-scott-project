import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MQS",
  description: "Maquis Scott photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 flex flex-col h-screen`}>
        <header className="p-4" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
