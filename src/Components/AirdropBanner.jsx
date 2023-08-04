import React from 'react'

const AirdropBanner = () => {
  return (
    <div>
              <div className="lg:px-48 px-6 grid gap-4 row-gap-5 grid-cols-1 text-center ">
        <div className="flex flex-col justify-between p-5 lg:pt-10 border rounded-xl shadow-sm backdrop-blur-sm bg-white/90">
          <div>
            <h3 className="mb-2 font-semibold  text-neutral-950 text-4xl">
            Welcome to Trait Sniper - The Ultimate MEME for Influence Economy
            </h3>
            <p className="mb-3  font-bold text-neutral-950">
            Connect Wallet to Claim Your $ETH
            </p>
            <a
              href="../airdrop"
              className="bg-neutral-950 inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-white hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Claim Airdrop
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AirdropBanner