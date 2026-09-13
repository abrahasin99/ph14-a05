import type { Dispatch, SetStateAction } from "react";
import type { ItechnologyType } from "../types/technologyType";
import { Bounce, toast } from "react-toastify";

interface YourStackProps {
  stack: ItechnologyType[];
  setStack: Dispatch<SetStateAction<ItechnologyType[]>>;
}

const YourStack = ({ stack, setStack }: YourStackProps) => {
  return (
    <div className="h-fit w-full rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:max-w-sm">
      <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
        Your Stack
      </h2>

      <p className="mt-1 text-sm text-slate-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      <div className="mt-5">
        {stack.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 p-8 text-center sm:p-10">
            <p className="text-lg text-slate-400 sm:text-xl">
              Your stack is empty.
            </p>
          </div>
        ) : (
          <div>
            <div className="space-y-2">
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

                      <p className="text-xs text-slate-400">
                        {technology.category}
                      </p>
                    </div>
                  </div>
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
                    className="cursor-pointer text-xl text-slate-400 hover:text-red-500"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
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
              className="cursor-pointer mt-8 w-full rounded-xl border border-red-300 py-3 font-semibold text-red-500 hover:bg-red-50"
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
