import React from "react";
import { Test } from "../Assets";

const Hero = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-no-repeat bg-cover bg-center "         style={{
      backgroundImage: `url(${Test})`,
    }}>
      <div
        className="max-w-xl sm:mx-auto lg:max-w-2xl "

      >
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 text-6xl font-bold leading-none tracking-tight  sm:text-8xl md:mx-auto">
              The birth of ETHER PILLAR is at hand!
            </h2>
            <p className="text-base text-gray-300 md:text-lg">
              A strong support and foundation built for the Ether Community
            </p>
          </div>
          <div>
            <button
              href="/"
              className="bg-white inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-black hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
