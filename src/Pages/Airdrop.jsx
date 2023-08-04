import React, { useState } from 'react';
import { Test } from "../Assets";

const Airdrop = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [twitterId, setTwitterId] = useState('');
    const [step, setStep] = useState(1);

    const handleConnectWallet = () => {
        // Add your logic for connecting the wallet here
        setIsConnected(true);
        setStep(2);
    };

    const handleSubmitTwitterId = (e) => {
        e.preventDefault();
        // Add your logic for handling the Twitter ID form submission here
        console.log(twitterId);
        setStep(3);
    };

    const handleClaimAirdrop = () => {
        // Add your logic for handling the airdrop claim here
        // Open a new tab with the specified URL
        const newTab = window.open('https://ctt.ac/i14Na', '_blank');

        // Check if the new tab has been opened successfully
        if (newTab) {
            // Proceed to Step 4 after a brief delay (e.g., 1 second)
            setTimeout(() => {
                setStep(4);
            }, 1000);
        } else {
            // If the new tab was blocked by the browser, proceed to Step 4 immediately
            setStep(4);
        }
    };

    const handleThankYou = () => {
        // Handle any necessary actions after the "Thank you" step (Step 5) here
        setStep(5);
    };

    return (
        <div className="flex min-h-screen flex-col justify-center items-center px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-10 bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url(${Test})`,
            }}>
            <div className="mb-10 sm:text-center md:mb-12">


                <div className="container mx-auto p-4">
                    <div className="space-y-4">

                        {/* Step 1 */}
                        <div className={step === 1 ? '' : 'hidden'}>
                            <h2 className="mb-6 text-3xl font-bold leading-none tracking-tight md:text-6xl md:mx-auto">
                                {isConnected ? 'Please Claim Airdrop' : 'Please Log in and Continue'}
                            </h2>
                            <button
                                className="bg-white inline-flex items-center justify-center h-12 px-6 font-bold tracking-wide text-black hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                disabled={isConnected}
                                onClick={handleConnectWallet}
                            >
                                {isConnected ? 'Connected' : 'Connect Wallet'}
                            </button>
                        </div>

                        {/* Step 2 */}
                        <div className={step === 2 ? '' : 'hidden'}>
                            <h2 className="mb-6 text-3xl font-bold leading-none tracking-tight md:text-6xl md:mx-auto">
                                Verify your Account
                            </h2>
                            <form>
                                <div className="space-y-2 flex flex-col">
                                    <label htmlFor="Label" className='font-bold'>Input your Twitter ID</label>
                                    <input
                                        required
                                        type="text"
                                        id="twitterId"
                                        name="twitterId"
                                        placeholder='@example'
                                        className="input-gray-500 font-bold text-black border border-gray-300 px-4 py-2 rounded focus:ring focus:ring-blue-200 focus:border-blue-500"
                                        value={twitterId}
                                        onChange={(e) => setTwitterId(e.target.value)}
                                    />

                                </div>
                                <button
                                    type="submit"
                                    className="bg-white inline-flex items-center justify-center h-12 my-3 px-6 font-bold tracking-wide text-black hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                    disabled={!isConnected}
                                    onClick={handleSubmitTwitterId}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* Step 3 */}
                        <div className={step === 3 ? '' : 'hidden'}>
                            <h2 className="mb-6 text-3xl font-bold leading-none tracking-tight md:text-6xl md:mx-auto">
                                Congratulations!
                            </h2>
                            <p className="text-lg">You are eligible for the airdrop</p>
                            <p className="py-4 text-lg">To Claim Airdrop, share, comment and tag 3 friends to claim</p>
                            <button
                                className="bg-white inline-flex items-center justify-center m-2 h-12 px-6 my-3 font-bold tracking-wide text-black hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                onClick={handleClaimAirdrop}
                            >
                                Share and @ 3 friends
                            </button>
                        </div>

                        {/* Step 4 */}
                        <div className={step === 4 ? '' : 'hidden'}>
                            <h2 className="mb-6 text-3xl font-bold leading-none tracking-tight md:text-6xl md:mx-auto">
                                Completed the Task?
                            </h2>
                            <p className="text-lg">Paste your comment link below</p>
                            <form onSubmit={handleThankYou}>
                                <div className="space-y-2 flex flex-col">
                                    <textarea
                                        required
                                        type="text"
                                        id="twitterId"
                                        name="twitterId"
                                        placeholder='https://twitter.com/example'
                                        className="input-gray-500 font-bold text-black border border-gray-300 px-4 py-2 rounded focus:ring focus:ring-blue-200 focus:border-blue-500"
                                        value={twitterId}
                                        onChange={(e) => setTwitterId(e.target.value)}
                                    />

                                </div>
                                <button
                                    type="submit"
                                    className="bg-white inline-flex items-center justify-center h-12 my-3 px-6 font-bold tracking-wide text-black hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                    disabled={!isConnected}
                                >
                                    Claim Airdrop
                                </button>
                            </form>
                        </div>

                        {/* Step 5 - Thank You */}
                        <div className={step === 5 ? '' : 'hidden'}>
                            <h2 className="mb-6 text-3xl font-bold leading-none tracking-tight md:text-6xl md:mx-auto">
                                Thank You
                            </h2>
                            <p className="text-lg">You have successfully claimed the airdrop.</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Airdrop;
