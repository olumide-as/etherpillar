import React from 'react';
import { Test } from "../Assets";

const Early = () => {


    return (
        <div className="flex min-h-screen flex-col justify-center items-center py-16 mx-auto md:px-24 lg:px-8 lg:py-10 bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url(${Test})`,
            }}>
            <div className="mb-10 sm:text-center md:mb-12">


                <div className="container mx-auto p-4">
                    <div className="space-y-4">

                        <div className>
                            <h2 className="mb-6 text-3xl font-bold leading-none md:text-6xl md:mx-auto">
                                Early Access Airdrop
                            </h2>
                            <div>
                                <div class="p-8 bg-neutral-950/80 flex flex-col rounded justify-center items-center">
                                    <p class="font-medium text-gray-300">Enter your invite code to claim your aidrop</p>

                                    <div class="my-8 flex gap-2">
                                        <div class="relative flex justify-center">
                                            <input aria-label="Enter the early access invite code Digit 1" id="early-access-digit-1" autocomplete="off" class="typography-brand-heading-3-caps peer h-[62px] w-[50px] rounded-[15px] border border-camo-300 bg-transparent p-[10px] text-center text-yellow-100 transition-colors focus:border-yellow-100 disabled:text-camo-300" maxlength="1" value=""></input>
                                                <div class="absolute bottom-[10px] m-auto h-[2px] w-[24px] bg-camo-300 opacity-40 transition peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0">
                                                </div>
                                        </div>
                                        <div class="relative flex justify-center">
                                            <input aria-label="Enter the early access invite code Digit 2" id="early-access-digit-2" autocomplete="off" class="typography-brand-heading-3-caps peer h-[62px] w-[50px] rounded-[15px] border border-camo-300 bg-transparent p-[10px] text-center text-yellow-100 transition-colors focus:border-yellow-100 disabled:text-camo-300" maxlength="1" value=""></input>
                                                <div class="absolute bottom-[10px] m-auto h-[2px] w-[24px] bg-camo-300 opacity-40 transition peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0">
                                                </div>
                                        </div>
                                        <div class="relative flex justify-center">
                                            <input aria-label="Enter the early access invite code Digit 3" id="early-access-digit-3" autocomplete="off" class="typography-brand-heading-3-caps peer h-[62px] w-[50px] rounded-[15px] border border-camo-300 bg-transparent p-[10px] text-center text-yellow-100 transition-colors focus:border-yellow-100 disabled:text-camo-300" maxlength="1" value=""></input>
                                                <div class="absolute bottom-[10px] m-auto h-[2px] w-[24px] bg-camo-300 opacity-40 transition peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0">
                                                </div>
                                        </div>
                                        <div class="relative flex justify-center">
                                            <input aria-label="Enter the early access invite code Digit 4" id="early-access-digit-4" autocomplete="off" class="typography-brand-heading-3-caps peer h-[62px] w-[50px] rounded-[15px] border border-camo-300 bg-transparent p-[10px] text-center text-yellow-100 transition-colors focus:border-yellow-100 disabled:text-camo-300" maxlength="1" value=""></input>
                                                <div class="absolute bottom-[10px] m-auto h-[2px] w-[24px] bg-camo-300 opacity-40 transition peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0">
                                                </div>
                                        </div>
                                        <div class="relative flex justify-center">
                                            <input aria-label="Enter the early access invite code Digit 5" id="early-access-digit-5" autocomplete="off" class="typography-brand-heading-3-caps peer h-[62px] w-[50px] rounded-[15px] border border-camo-300 bg-transparent p-[10px] text-center text-yellow-100 transition-colors focus:border-yellow-100 disabled:text-camo-300" maxlength="1" value=""></input>
                                                <div class="absolute bottom-[10px] m-auto h-[2px] w-[24px] bg-camo-300 opacity-40 transition peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0">
                                                </div>
                                        </div>
                                    </div>

                                    <a href='../early-access-airdrop'><button className="bg-white inline-flex items-center justify-center h-12 my-2 px-6 font-bold tracking-wide text-black hover:scale-105 transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none">
                                        Enter Invite Code
                                    </button>
                                    </a>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Early;
