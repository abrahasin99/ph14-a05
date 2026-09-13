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
        className={`w-full max-w-md rounded-3xl border ${isStacked ? "border-pink-200 bg-pink-50" : "border-slate-200 bg-white"} p-8 shadow-sm`}
      >
        <div className="flex items-start justify-between">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-14 w-14 object-contain"
          />

          <span
            className={
              isStacked
                ? "rounded-full border border-pink-300 bg-pink-100 px-5 py-2 text-lg font-medium text-pink-500"
                : "rounded-full border border-sky-100 bg-sky-50 px-5 py-2 text-lg font-medium text-sky-500"
            }
          >
            {technology.badge}
          </span>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-slate-900">
            {technology.name}
          </h2>

          <p className="mt-4 text-xl leading-8 text-slate-500">
            {technology.description}
          </p>
        </div>

        <div
          className={
            isStacked
              ? "my-7 border-t border-pink-100"
              : "my-7 border-t border-slate-100"
          }
        ></div>

        <div className="flex items-center justify-between">
          <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-lg text-slate-600">
            {technology.category}
          </span>

          <span className="text-lg text-slate-500">
            {technology.difficulty}
          </span>

          <span className="flex items-center gap-1 text-lg font-medium text-slate-700">
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
              ? "mt-7 w-full rounded-xl text-pink-500 bg-pink-200 py-4 text-xl font-medium"
              : "mt-7 w-full rounded-xl bg-slate-950 py-4 text-xl font-medium text-white hover:bg-slate-800"
          }
        >
          {isStacked ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default Technologies;
