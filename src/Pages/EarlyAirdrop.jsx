import React from 'react';
import { Test } from "../Assets";

const EarlyAirdrop = () => {


    return (
        <div className="flex min-h-screen flex-col justify-center  py-16 mx-auto md:px-24 lg:px-8 lg:py-10 bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url(${Test})`,
            }}>
            <div className="mb-10 text-left md:mb-12">


                <div className=" w-10/12 mx-auto md:p-4 ">
                    <div className="space-y-4 ">

                        <div className>
                            <p class="text-gray-300 font-bold text-lg">You are almost there</p>

                            <h4 className="mb-6 text-3xl font-bold leading-none md:text-4xl md:mx-auto">
                                To Join Early Access :
                            </h4>
                            <div className='w-'>
                                <div class="p-1 md:p-8 bg-neutral-950/80  flex flex-col rounded justify-center ">

                                    <div className=" py-2 md:p-5 border-b-4 rounded-xl ">
                                        <div className='flex flex-col md:flex-row justify-around md:items-center'>
                                            <div className="mx-10 basis-1/12 flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white">
                                                <h3 className="text-neutral-950 font-bold ">1</h3>
                                            </div>
                                            <h3 className="mx-10 basis-6/12 mb-2 font-semibold leading-5 text-white text-2xl">
                                                Get Invite Code
                                            </h3>
                                            <button className="mx-10 basis-5/12  bg-white inline-flex items-center justify-center h-12 my-2 px-6 font-bold tracking-wide text-black hover:scale-105 transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none">
                                                Enter Invite Code
                                            </button>
                                        </div>
                                    </div>

                                    <div className=" py-2 md:p-5 border-b-4 rounded-xl">
                                        <div className='flex flex-col md:flex-row justify-around md:items-center'>
                                            <div className="mx-10 basis-1/12 flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white">
                                                <h3 className="text-neutral-950 font-bold ">2</h3>
                                            </div>
                                            <h3 className="mx-10 basis-7/12 mb-2 font-semibold leading-5 text-white text-2xl">
                                                Connect to X
                                            </h3>
                                            <button className="mx-10 basis-4/12  bg-white inline-flex items-center justify-center h-12 my-2 px-6 font-bold tracking-wide text-black hover:scale-105 transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none">
                                                X
                                            </button>
                                        </div>
                                    </div>

                                    <div className=" py-2 md:p-5 border-b-4 rounded-xl ">
                                        <div className='flex flex-col md:flex-row justify-around md:items-center'>
                                            <div className="mx-10 basis-1/12 flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white">
                                                <h3 className="text-neutral-950 font-bold ">3</h3>
                                            </div>
                                            <h3 className="mx-10 basis-7/12 mb-2 font-semibold leading-5 text-white text-2xl">
                                                Join Ether Pillar Discord
                                            </h3>
                                            <button className="mx-10 basis-4/12  bg-white inline-flex items-center justify-center h-12 my-2 px-6 font-bold tracking-wide text-black hover:scale-105 transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none">
                                                Discord
                                            </button>
                                        </div>
                                    </div>

                                    <div className=" py-2 md:p-5 border-b-4 rounded-xl ">
                                        <div className='flex flex-col md:flex-row justify-around md:items-center'>
                                            <div className="mx-10 basis-1/12 flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white">
                                                <h3 className="text-neutral-950 font-bold ">4</h3>
                                            </div>
                                            <h3 className="mx-10 basis-6/12 mb-2 font-semibold leading-5 text-white text-2xl">
                                                Check Your Airdrop
                                            </h3>
                                            <button className="mx-10 basis-4/12  bg-white inline-flex items-center justify-center h-12 my-2 px-6 font-bold tracking-wide text-black hover:scale-105 transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none">
                                                Connect Wallet
                                            </button>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EarlyAirdrop;
