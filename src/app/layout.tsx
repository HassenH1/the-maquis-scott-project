import type { Metadata } from "next";
import Footer from "./components/footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "visual language by...",
  description: "visual language by Maquis Scott",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto flex flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
