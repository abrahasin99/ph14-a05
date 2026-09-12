import type { ItechnologyType } from "../types/technologyType";
import Technologies from "./Technologies";
interface ExploreTechnologiesProps {
  technologies: ItechnologyType[];
}

const ExploreTechnologies = ({technologies}: ExploreTechnologiesProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {technologies.map((technology:ItechnologyType,ind:number) => {
        return (
          <Technologies key={ind} technology={technology}/>
        );
      })}
    </div>
  );
};

export default ExploreTechnologies;
