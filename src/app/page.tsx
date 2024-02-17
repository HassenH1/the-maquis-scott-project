import IntroductionHero from "./components/IntroductionHero";
import Footer from "./components/footer";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <>
      {/* <!-- Header --> */}
      <header className="p-4" />

      {/* <!-- Main Content --> */}
      <IntroductionHero />

      {/* <!-- Footer --> */}
      {/* <footer className="text-center pt-4 pb-2">
        <p className="md:text-sm text-xs">
          <strong>ALL RIGHTS RESERVED</strong> &copy; 2013 - {year}{" "}
          <strong>STUDIO EXIT LLC</strong>
        </p>
      </footer> */}
      <Footer />
    </>
  );
}
