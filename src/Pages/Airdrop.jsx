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

    return (
        <div className="flex min-h-screen flex-col justify-center items-center px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-10 bg-no-repeat bg-cover bg-center"  
        style={{
            backgroundImage: `url(${Test})`,
          }}>
            <div className="mb-10 sm:text-center md:mb-12" >


                <div className="container mx-auto p-4">
                    <div className="space-y-4">

                        {/* Step 3 */}
                        <div>
                            <h2 className="mb-6 text-3xl font-bold leading-none tracking-tight md:text-6xl md:mx-auto">
                                {step === 3 ? 'Congratulations!' : isConnected ? 'Please Claim Airdrop' : 'Please Log in and Continue'}
                            </h2>
                            {step === 3 && <p className="text-lg">You are eligible for the airdrop</p>}
                            {step === 3 &&
                                <button className="bg-white inline-flex items-center justify-center h-12 px-6 my-3 font-bold tracking-wide text-black hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                                    Share
                                </button>}
                        </div>

                        {/* Step 1 */}
                        <div className={step === 1 ? '' : 'hidden'}>
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
                            <form onSubmit={handleSubmitTwitterId}>
                                <div className="space-y-2 flex flex-col">
                                    <label htmlFor="Label" className='font-bold'>Input your Twitter ID</label>
                                    <input
                                        required
                                        type="text"
                                        id="twitterId"
                                        name="twitterId"
                                        placeholder='@example'
                                        className="font-bold border border-gray-300 px-4 py-2 rounded focus:ring focus:ring-blue-200 focus:border-blue-500"
                                        value={twitterId}
                                        onChange={(e) => setTwitterId(e.target.value)}
                                    />

                                </div>
                                <button
                                    type="submit"
                                    className="bg-white inline-flex items-center justify-center h-12 my-3 px-6 font-bold tracking-wide text-black hover:scale-105 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                    disabled={!isConnected}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>




                    </div>
                </div>




            </div>
        </div>
    );
};

export default Airdrop;
