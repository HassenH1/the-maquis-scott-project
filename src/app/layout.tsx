import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Maquis Scott research project",
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
        {children}
      </body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}
