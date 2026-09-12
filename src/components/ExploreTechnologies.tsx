import React from "react";
import type { ItechnologyType } from "../types/technologyType";
import Technologies from "./Technologies";

const ExploreTechnologies = ({ technologies }) => {
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
