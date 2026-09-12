import type { Dispatch, SetStateAction } from "react";
import type { ItechnologyType } from "../types/technologyType";

interface YourStackProps {
  stack: ItechnologyType[];
  setStack: Dispatch<SetStateAction<ItechnologyType[]>>;
}

const YourStack = ({ stack, setStack }: YourStackProps) => {
  return (
    <div className="h-fit w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>

      <p className="mt-1 text-sm text-slate-400">
        {stack.length} Technology Selected
      </p>

      <div className="mt-5 space-y-2">
        {stack.map((technology) => (
          <div
            key={technology.id}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-8 w-8 object-contain"
              />

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {technology.name}
                </p>

                <p className="text-xs text-slate-400">{technology.category}</p>
              </div>
            </div>

            <button
              onClick={() => {
                setStack((currentStack) =>
                  currentStack.filter((item) => item.id !== technology.id),
                );
              }}
              className="text-xl text-slate-400"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <button onClick={() => setStack([])} className="mt-8 w-full rounded-xl border border-red-300 py-3 font-semibold text-red-500">
        Remove All
      </button>
    </div>
  );
};

export default YourStack;
