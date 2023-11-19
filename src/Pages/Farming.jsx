import React, { useState } from 'react';
import { Test } from "../Assets";

const Farming = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [step, setStep] = useState(1);

    const handleConnectWallet = () => {
        // Add your logic for connecting the wallet here
        setIsConnected(true);
        setStep(2);
    };



    return (
        <div className="flex min-h-screen flex-col justify-center items-center py-16 mx-auto md:px-24 lg:px-8 lg:py-10 bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url(${Test})`,
            }}>
            <div className="mb-10 sm:text-center md:mb-12">


                <div className="container mx-auto p-4">
                    <div className="space-y-4">

                        {/* Step 1 */}
                        <div className={step === 1 ? '' : 'hidden'}>
                            <h2 className="mb-6 text-3xl font-bold leading-none tracking-tight md:text-6xl md:mx-auto">
                                {isConnected ? 'Please Farm ETP' : 'Please Log in and Continue'}
                            </h2>
                            <div>
                                <div class="p-8 bg-neutral-950/80  rounded">



                                    <div class="mb-4 text-center">
                                        <h2 className="mb-6 py-6 text-3xl font-bold font-grandstander text-white leading-none tracking-tight md:text-6xl md:mx-auto">
                                            ETP FARMING
                                        </h2>

                                    </div>
                                    <ul class="mb-8 space-y-2">
                                        <li class="flex items-center">
                                            <div class="mr-3">
                                                <svg
                                                    class="w-4 h-4 text-white"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p class="font-medium text-gray-300">Complete Quests</p>
                                        </li>
                                        <li class="flex items-center">
                                            <div class="mr-3">
                                                <svg
                                                    class="w-4 h-4 text-white"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p class="font-medium text-gray-300">Collect ETP Points</p>
                                        </li>
                                        <li class="flex items-center">
                                            <div class="mr-3">
                                                <svg
                                                    class="w-4 h-4 text-white"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p class="font-medium text-gray-300">Harvest ETP</p>
                                        </li>
                                    </ul>
                                    <button
                                        className="bg-white inline-flex items-center justify-center h-12 my-2 px-6 font-bold tracking-wide text-black hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                        disabled={isConnected}
                                        onClick={handleConnectWallet}
                                    >
                                        {isConnected ? 'Connected' : 'Connect to X'}
                                    </button>
                                    <p className='text-white font-jost'>{isConnected ? '' : 'Receive your first ETP POINTS upon connecting'}</p>
                                </div>
                                <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                                <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                                <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className={step === 2 ? '' : 'hidden'}>
                            <div>
                                <div class="p-8 bg-zinc-950/80 shadow-xl shadow-neutral-950/100 rounded">

                                    <div class="mb-4">
                                        <p className='text-white font-jost text-left'>ETP Point</p>
                                        <h3 className="mb-6 py-6 text-3xl text-left font-bold font-grandstander text-white leading-none tracking-tight md:text-5xl md:mx-auto">
                                            690 ETP
                                        </h3>

                                        <div className='lg:flex gap-4'>
                                            <p className="bg-white inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-black hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                            >
                                                Referrals : 35
                                            </p>

                                            <p className="bg-white inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-black hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                            >
                                                Sub - Referrals : 135
                                            </p>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <ul class="mb-8 space-y-2">
                                            <li class="flex items-center">
                                                <div class="mr-3">
                                                    <svg
                                                        class="w-4 h-4 text-neutral-950"
                                                        viewBox="0 0 24 24"
                                                        strokeLinecap="round"
                                                        strokeWidth="2"
                                                    >
                                                        <polyline
                                                            fill="none"
                                                            stroke="currentColor"
                                                            points="6,12 10,16 18,8"
                                                        />
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            fill="none"
                                                            r="11"
                                                            stroke="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <p class="font-medium font-jost text-gray-300">Complete Quests</p>
                                            </li>
                                            <li class="flex items-center">
                                                <div class="mr-3">
                                                    <svg
                                                        class="w-4 h-4 text-neutral-950"
                                                        viewBox="0 0 24 24"
                                                        strokeLinecap="round"
                                                        strokeWidth="2"
                                                    >
                                                        <polyline
                                                            fill="none"
                                                            stroke="currentColor"
                                                            points="6,12 10,16 18,8"
                                                        />
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            fill="none"
                                                            r="11"
                                                            stroke="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <p class="font-medium font-jost text-gray-300">Collect Solmeme Points</p>
                                            </li>
                                            <li class="flex items-center">
                                                <div class="mr-3">
                                                    <svg
                                                        class="w-4 h-4 text-neutral-950"
                                                        viewBox="0 0 24 24"
                                                        strokeLinecap="round"
                                                        strokeWidth="2"
                                                    >
                                                        <polyline
                                                            fill="none"
                                                            stroke="currentColor"
                                                            points="6,12 10,16 18,8"
                                                        />
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            fill="none"
                                                            r="11"
                                                            stroke="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <p class="font-medium font-jost text-gray-300">Harvest ETP</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-2 sm:mx-auto lg:max-w-full">
                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-neutral-950 uppercase">
                                                300 ETP
                                            </p>
                                            <p
                                                href="/"
                                                className="text-neutral-950 font-bold inline-block max-w-xs mx-auto mb-3 text-2xl leading-7"
                                                aria-label="Read article"
                                            >
                                                Add "❤️ solmeme" to your X name to show your love
                                            </p>
                                            <p className="max-w-xs mx-auto mb-2 text-neutral-950 font-bold  font-jost">
                                                How much do you love solmeme? Add "❤️ solmeme" to your X name to show your love
                                            </p>
                                            <button
                                                className="bg-neutral-950 inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-white hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                                                Collect Reward
                                            </button>

                                        </div>

                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-neutral-950 uppercase">
                                                300 ETP
                                            </p>
                                            <a
                                                href="/"
                                                className="text-neutral-950 font-bold inline-block max-w-xs mx-auto mb-3 text-2xl leading-7"
                                                aria-label="Read article"
                                            >
                                                Add "❤️ solmeme" to your X name to show your love
                                            </a>
                                            <p className="max-w-xs mx-auto mb-2 text-neutral-950 font-bold  font-jost">
                                                How much do you love solmeme? Add "❤️ solmeme" to your X name to show your love
                                            </p>
                                            <button
                                                className="bg-neutral-950 inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-white hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                                                Collect Reward
                                            </button>

                                        </div>

                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-neutral-950 uppercase">
                                                300 ETP
                                            </p>
                                            <a
                                                href="/"
                                                className="text-neutral-950 font-bold inline-block max-w-xs mx-auto mb-3 text-2xl leading-7"
                                                aria-label="Read article"
                                            >
                                                Add "❤️ solmeme" to your X name to show your love
                                            </a>
                                            <p className="max-w-xs mx-auto mb-2 text-neutral-950 font-bold  font-jost">
                                                How much do you love solmeme? Add "❤️ solmeme" to your X name to show your love
                                            </p>
                                            <button
                                                className="bg-neutral-950 inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-white hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                                                Collect Reward
                                            </button>

                                        </div>

                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-neutral-950 uppercase">
                                                300 ETP
                                            </p>
                                            <a
                                                href="/"
                                                className="text-neutral-950 font-bold inline-block max-w-xs mx-auto mb-3 text-2xl leading-7"
                                                aria-label="Read article"
                                            >
                                                Add "❤️ solmeme" to your X name to show your love
                                            </a>
                                            <p className="max-w-xs mx-auto mb-2 text-neutral-950 font-bold  font-jost">
                                                How much do you love solmeme? Add "❤️ solmeme" to your X name to show your love
                                            </p>
                                            <button
                                                className="bg-neutral-950 inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-white hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                                                Collect Reward
                                            </button>

                                        </div>

                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-neutral-950 uppercase">
                                                300 ETP
                                            </p>
                                            <a
                                                href="/"
                                                className="text-neutral-950 font-bold inline-block max-w-xs mx-auto mb-3 text-2xl leading-7"
                                                aria-label="Read article"
                                            >
                                                Add "❤️ solmeme" to your X name to show your love
                                            </a>
                                            <p className="max-w-xs mx-auto mb-2 text-neutral-950 font-bold  font-jost">
                                                How much do you love solmeme? Add "❤️ solmeme" to your X name to show your love
                                            </p>
                                            <button
                                                className="bg-neutral-950 inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-white hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                                                Collect Reward
                                            </button>

                                        </div>

                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-neutral-950 uppercase">
                                                300 ETP
                                            </p>
                                            <a
                                                href="/"
                                                className="text-neutral-950 font-bold inline-block max-w-xs mx-auto mb-3 text-2xl leading-7"
                                                aria-label="Read article"
                                            >
                                                Add "❤️ solmeme" to your X name to show your love
                                            </a>
                                            <p className="max-w-xs mx-auto mb-2 text-neutral-950 font-bold font-jost">
                                                How much do you love solmeme? Add "❤️ solmeme" to your X name to show your love
                                            </p>
                                            <button
                                                className="bg-neutral-950 inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-white hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                                                Collect Reward
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                                <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                                <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Farming;
