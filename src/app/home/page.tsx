import ButtonContainer from "./components/ButtonContainer";

export default async function Home() {
  return (
    <main className="h-3/4">
      <div className="text-center h-full flex justify-center items-center">
        <div className="text-5xl">Graphics here</div>
      </div>
      <ButtonContainer />
    </main>
  );
}
