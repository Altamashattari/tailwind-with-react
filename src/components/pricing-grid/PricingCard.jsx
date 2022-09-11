import React from 'react';

const PricingCard = ({ subscriptionType, data, ratePerMonth }) => {
    return (
        <div className='flex flex-col md:flex-row my-6  space-y-6 md:space-y-0 md:space-x-6 md:my-0'>
            {/* Col 1 */}
            <div className='bg-slate-700 rounded-xl text-white'>
                {/* Upper Container */}
                <div className='p-8 mx-3 mt-3 rounded-t-xl bg-slate-800'>
                    <div className='text-center uppercase'>{subscriptionType}</div>
                    <h2 className='text-center uppercase text-5xl mt-8 font-serif'>{data}</h2>
                    <h3 className='text-center text-sm mt-2'>{ratePerMonth}</h3>

                    <div className='flex justify-center'>
                        <a
                            href='#'
                            className='inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 hover:scale-105 hover:border-violet-800 duration-200'>
                            Purchase
                        </a>
                    </div>
                </div>
                {/* Border */}
                <div className='border-t border-slate-700'></div>

                {/* Lower Container */}
                <div className='p-8 mx-3 mb-3 rounded-b-xl bg-slate-800'>
                    {/* List Container */}
                    <div className='flex flex-col  spacing-y-2'>
                        {/* List item 1 */}
                        <div className='flex justify-center'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                            <span className='text-sm ml-1'>{`${data} of storage`}</span>
                        </div>
                        {/* List item 2 */}
                        <div className='flex justify-center'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                            <span className='text-sm ml-1'>Option to add members</span>
                        </div>
                        {/* List item 3 */}
                        <div className='flex justify-center'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                            <span className='text-sm ml-1'>Extra member benefits</span>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default PricingCard;