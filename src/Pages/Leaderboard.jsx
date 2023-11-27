import React from 'react';
import { Test } from "../Assets";

const Leaderboard = () => {
    return (
        <div className="flex min-h-screen flex-col justify-center py-16 mx-auto md:px-24 lg:px-8 lg:py-10 bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url(${Test})`,
            }}>
            <div className="mb-10 text-left md:mb-12">
                <div className="mx-auto p-4 w-10/12">
                    <div className="space-y-4">
                        <div className="">
                            <h4 className="mb-6 text-3xl font-bold leading-none md:text-4xl md:mx-auto">
                                Leaderboard
                            </h4>
                            <div className=''>
                                <div className="p-8 bg-neutral-950/80 flex flex-col rounded justify-center overflow-x-auto">
                                    <table className="w-full table-auto">
                                        <thead>
                                            <tr className='border-y-2'>
                                                <th className="p-2">Rank</th>
                                                <th className="p-2">Name</th>
                                                <th className="p-2">Invited By</th>
                                                <th className="p-2">Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="p-2">01</td>
                                                <td className="p-2">Malcolm Lockyer</td>
                                                <td className="p-2">Malcolm Lockyer</td>
                                                <td className="p-2">1961</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2">02</td>
                                                <td className="p-2">The Eagles</td>
                                                <td className="p-2">The Eagles</td>
                                                <td className="p-2">1972</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2">03</td>
                                                <td className="p-2">Earth, Wind, and Fire</td>
                                                <td className="p-2">Earth, Wind, and Fire</td>
                                                <td className="p-2">1975</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
