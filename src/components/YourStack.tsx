import type { Dispatch, SetStateAction } from "react";
import type { ItechnologyType } from "../types/technologyType";
import { Bounce, toast } from "react-toastify";

interface YourStackProps {
  stack: ItechnologyType[];
  setStack: Dispatch<SetStateAction<ItechnologyType[]>>;
}

const YourStack = ({ stack, setStack }: YourStackProps) => {
  return (
    <div className="h-fit w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Heading */}
      <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>

      {/* Selected technology count */}
      <p className="mt-1 text-sm text-slate-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {/* Stack content */}
      <div className="mt-5">
        {stack.length === 0 ? (
          /* Empty stack */
          <div className="rounded-2xl border border-dashed border-slate-200 p-10 text-center">
            <p className="text-xl text-slate-400">Your stack is empty.</p>
          </div>
        ) : (
          /* Technologies selected */
          <div>
            <div className="space-y-2">
              {stack.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
                >
                  {/* Technology information */}
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

                      <p className="text-xs text-slate-400">
                        {technology.category}
                      </p>
                    </div>
                  </div>

                  {/* Remove individual technology */}
                  <button
                    onClick={() => {
                      setStack((currentStack) =>
                        currentStack.filter(
                          (item) => item.id !== technology.id,
                        ),
                      );
                      toast.success(`${technology.name} removed successfully`, {
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
                    }}
                    className="text-xl text-slate-400 hover:text-red-500"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* Remove all */}
            <button
              onClick={() => {
                setStack([]);
                toast.success("Successfully removed all stacks", {
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
              }}
              className="mt-8 w-full rounded-xl border border-red-300 py-3 font-semibold text-red-500 hover:bg-red-50"
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default YourStack;
