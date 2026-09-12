import React from 'react';
import type { ItechnologyType } from '../types/technologyType';
const Technologies = ({technology}:{technology:ItechnologyType}) => {
    return (
        <div>
            <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-start justify-between">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-14 w-14 object-contain"
                />

                <span className="rounded-full border border-sky-100 bg-sky-50 px-5 py-2 text-lg font-medium text-sky-500">
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

              <div className="my-7 border-t border-slate-100"></div>

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

              <button className="mt-7 w-full rounded-xl bg-slate-950 py-4 text-xl font-medium text-white hover:bg-slate-800">
                Add to Stack
              </button>
            </div>
          </div>
    );
};

export default Technologies;