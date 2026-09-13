import { use, useState } from "react";
import type { ItechnologyType } from "../types/technologyType";
import ExploreTechnologies from "./ExploreTechnologies";
import YourStack from "./YourStack";

interface TechnologyProps {
  technologyPromise: Promise<ItechnologyType[]>;
}

const Technology = ({ technologyPromise }: TechnologyProps) => {
  const technologies = use(technologyPromise);
  const [stack, setStack] = useState<ItechnologyType[]>([]);
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-22">
      <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-[36px]">
        Explore the{" "}
        <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="pb-6 font-jakarta text-sm text-[#64748B] sm:text-[16px] lg:pb-7">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="flex flex-col gap-6 lg:flex-row">
        <ExploreTechnologies
          technologies={technologies}
          stack={stack}
          setStack={setStack}
        />

        <YourStack stack={stack} setStack={setStack} />
      </div>
    </div>
  );
};

export default Technology;
