import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Technology from "./components/Technology";
import { Suspense } from "react";
import Footer from "./components/Footer";
import type { ItechnologyType } from "./types/technologyType";

const technologyFetch = async (): Promise<ItechnologyType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const technologyPromise = technologyFetch();
  return (
    <>
      <Nav />
      <Banner />
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-20">
            <p className="text-xl text-slate-500">Loading technologies...</p>
          </div>
        }
      >
        <Technology technologyPromise={technologyPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
