import React from 'react'
import { etp1, etp2, etp3 } from '../Assets'

const AirdropBanner = () => {
  return (
    <div>
      <div className="lg:px-48 px-6 grid gap-4 row-gap-5 grid-cols-1 text-center ">
        <div className="flex flex-col justify-between p-5 lg:pt-10 border rounded-xl shadow-sm backdrop-blur-sm bg-white/90">
          <div>
            <h3 className="mb-2 font-semibold  text-neutral-950 text-4xl">
            999 Ether Pillars Genesis collection are to be minted for FREE
            </h3>
            <p className="mb-3  font-bold text-neutral-950">
            The Ether Pillars are a unique and rare collection of unique Pillars scattered across the globe. Each Pillar is invented directly to the Ethereum blockchain and gives its holders access to the entire Ether Pillars features and products. The Pillars are certified and are digital evidence to every genuine products built in the ecosystem.

            </p>
          </div>
        </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white  rounded-xl">
            <img
              src={etp1}
              className="object-cover w-full h-64 rounded"
              alt=""
            />
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-xl">
            <img
              src={etp2}
              className="object-cover w-full h-64 rounded"
              alt=""
            />
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-xl">
            <img
              src={etp3}
              className="object-cover w-full h-64 rounded"
              alt=""
            />
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default AirdropBanner