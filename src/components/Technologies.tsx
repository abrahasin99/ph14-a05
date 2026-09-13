import { useEffect, useState } from "react";
import type { ItechnologyType } from "../types/technologyType";
import { Bounce, toast } from "react-toastify";
interface TechnologiesProps {
  technology: ItechnologyType;
  onAdd: (technology: ItechnologyType) => void;
  stacked: boolean;
}

const Technologies = ({ technology, onAdd, stacked }: TechnologiesProps) => {
  const [isStacked, setIsStacked] = useState(false);
  useEffect(() => {
    setIsStacked(stacked);
  }, [stacked]);
  return (
    <div>
      <div
        className={`w-full max-w-md rounded-3xl border ${isStacked ? "border-pink-200 bg-pink-50" : "border-slate-200 bg-white"} p-5 shadow-sm sm:p-6 lg:p-8`}
      >
        <div className="flex items-start justify-between">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-10 w-10 object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14"
          />

          <span
            className={
              isStacked
                ? "rounded-full border border-pink-300 bg-pink-100 px-3 py-1.5 text-sm font-medium text-pink-500 sm:px-5 sm:py-2 sm:text-lg"
                : "rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-500 sm:px-5 sm:py-2 sm:text-lg"
            }
          >
            {technology.badge}
          </span>
        </div>

        <div className="mt-6 lg:mt-10">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">
            {technology.name}
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-500 sm:text-lg lg:mt-4 lg:text-xl lg:leading-8">
            {technology.description}
          </p>
        </div>

        <div
          className={
            isStacked
              ? "my-5 border-t border-pink-100 sm:my-7"
              : "my-5 border-t border-slate-100 sm:my-7"
          }
        ></div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-600 sm:text-lg">
            {technology.category}
          </span>

          <span className="text-sm text-slate-500 sm:text-lg">
            {technology.difficulty}
          </span>

          <span className="flex items-center gap-1 text-sm font-medium text-slate-700 sm:text-lg">
            <span className="text-yellow-400">★</span>
            {technology.rating}
          </span>
        </div>

        <button
          onClick={() => {
            setIsStacked(true);
            if (!isStacked) {
              onAdd(technology);
              toast.success(`${technology.name} added successfully`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
            } else {
              toast.error(`${technology.name} already added!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
            }
          }}
          className={
            isStacked
              ? "cursor-pointer mt-6 w-full rounded-xl bg-pink-200 py-3 text-base font-medium text-pink-500 sm:mt-7 sm:py-4 sm:text-xl"
              : "cursor-pointer mt-6 w-full rounded-xl bg-slate-950 py-3 text-base font-medium text-white hover:bg-slate-800 sm:mt-7 sm:py-4 sm:text-xl"
          }
        >
          {isStacked ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default Technologies;
