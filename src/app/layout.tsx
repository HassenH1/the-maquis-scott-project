import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import Splashscreen from "./components/splashscreen";

// @todo put globe in tab icon
export const metadata: Metadata = {
  title: "Visual language by",
  description: "Visual language by Maquis Scott",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Splashscreen /> */}
        <div className="mx-auto flex flex-col relative">
          {children}
          <Footer />
        </div>
        {/* <Layout>
          {children}
        </Layout> */}
        {/* <header className="p-4" /> */}
        {/* <Splashscreen />
        {children}
        <Footer /> */}
      </body>
    </html>
  );
}
