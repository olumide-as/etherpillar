import React, { useState } from 'react';
import { Test } from "../Assets";

const Early = () => {
    const [inviteCode, setInviteCode] = useState(['', '', '', '', '']);

    const handleInputChange = (index, value) => {
        const updatedInviteCode = [...inviteCode];
        updatedInviteCode[index] = value;
        setInviteCode(updatedInviteCode);
    };

    const isFormDisabled = inviteCode.some(code => code === '');

    return (
        <div className="flex min-h-screen flex-col justify-center items-center py-16 mx-auto md:px-24 lg:px-8 lg:py-10 bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url(${Test})`,
            }}>
            <div className="mb-10 sm:text-center md:mb-12">
                <div className="container mx-auto p-4">
                    <div className="space-y-4">
                        <div className="">
                            <h2 className="mb-6 text-3xl font-bold leading-none md:text-6xl md:mx-auto">
                                Early Access Airdrop
                            </h2>
                            <div>
                                <div className="p-8 bg-neutral-950/80 flex flex-col rounded justify-center items-center">
                                    <p className="font-medium text-gray-300">Enter your invite code to claim your airdrop</p>

                                    <div className="my-8 flex gap-2">
                                        {Array.from({ length: 5 }, (_, index) => (
                                            <div key={index} className="relative flex justify-center">
                                                <input
                                                    aria-label={`Enter the early access invite code Digit ${index + 1}`}
                                                    id={`early-access-digit-${index + 1}`}
                                                    autoComplete="off"
                                                    className="typography-brand-heading-3-caps peer h-[62px] w-[50px] rounded-[15px] border border-camo-300 bg-transparent p-[10px] text-center text-yellow-100 transition-colors focus:border-yellow-100 "
                                                    maxLength="1"
                                                    value={inviteCode[index]}
                                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                                />
                                                <div className="absolute bottom-[10px] m-auto h-[2px] w-[24px] bg-camo-300 opacity-40 transition peer-focus:translate-y-[11px] peer-focus:scale-x-150 peer-focus:opacity-0">
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <a href='../early-access-airdrop'>
                                        <button
                                            disabled={isFormDisabled}
                                            className="bg-white inline-flex items-center justify-center h-12 my-2 px-6 font-bold tracking-wide text-black hover:scale-105 transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                                        >
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
