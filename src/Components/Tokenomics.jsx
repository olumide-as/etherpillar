import React from "react";

const Tokenomics = () => {
  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 "
      id="tokenomics"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight md:text-6xl md:mx-auto">
          Tokenomics
        </h2>
      </div>
      <div className="lg:px-48 grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-2  ">
        <div className="flex flex-col justify-between p-5 border rounded-xl shadow-sm backdrop-blur-sm bg-white/90">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold leading-5 text-neutral-950 text-2xl">
              Community
            </h3>
            <p className="mb-3 text-neutral-950">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded-xl shadow-sm backdrop-blur-sm bg-white/90">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold leading-5 text-neutral-950 text-2xl">
              Others
            </h3>
            <p className="mb-3 text-neutral-950">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
