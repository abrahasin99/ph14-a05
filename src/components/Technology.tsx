import React, { use } from "react";
import type { ItechnologyType } from "../types/technologyType";
import ExploreTechnologies from "./ExploreTechnologies";

interface TechnologyProps {
  technologyPromise: Promise<ItechnologyType[]>;
}

const Technology = ({ technologyPromise }: TechnologyProps) => {
  const technologies = use(technologyPromise);
  return (
    <div className="px-22">
      <h2 className="font-extrabold text-[36px]">Explore the <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
      <p className="text-[16px] text-[#64748B] font-jakarta pb-7">Pick one technology per category to build your ideal stack.</p>
      <ExploreTechnologies technologies={technologies} />
    </div>
  );
};

export default Technology;
