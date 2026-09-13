import type { Dispatch, SetStateAction } from "react";
import type { ItechnologyType } from "../types/technologyType";
import Technologies from "./Technologies";
interface ExploreTechnologiesProps {
  technologies: ItechnologyType[];
  stack: ItechnologyType[];
  setStack: Dispatch<SetStateAction<ItechnologyType[]>>;
}

const ExploreTechnologies = ({
  technologies,
  stack,
  setStack,
}: ExploreTechnologiesProps) => {
  const handleAdd = (technology: ItechnologyType) => {
    setStack((currentStack) => [...currentStack, technology]);
  };
  return (
    <div className="grid flex-1 grid-cols-3 gap-4 pb-20">
      {technologies.map((technology: ItechnologyType) => {
        return (
          <Technologies
            key={technology.id}
            technology={technology}
            onAdd={handleAdd}
            stacked={stack.some((item) => item.id === technology.id)}
          />
        );
      })}
    </div>
  );
};

export default ExploreTechnologies;
