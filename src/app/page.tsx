import IntroductionHero from "./components/IntroductionHero";

export default function Home() {
  return (
    <>
      {/* <!-- Header --> */}
      <header className="p-4" />

      {/* <!-- Main Content --> */}
      <IntroductionHero />

      {/* <!-- Footer --> */}
      <footer className="text-center p-4">
        <p className="md:text-sm text-xs">
          <strong>ALL RIGHTS RESERVED</strong> &copy; 2013 - 2023{" "}
          <strong>STUDIO EXIT LLC</strong>
        </p>
      </footer>
    </>
  );
}
