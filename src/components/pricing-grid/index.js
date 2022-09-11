import React from 'react';
import PricingCard from './PricingCard';

const data = [
    { subscriptionType: "Basic", data: "100GB", ratePerMonth: "$1.99/month" },
    { subscriptionType: "Standard", data: "200GB", ratePerMonth: "$3.99/month" },
    { subscriptionType: "Premium", data: "2TB", ratePerMonth: "$8.99/month" },
];

const PricingGrid = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-slate-800 gap-5'>
            {data.map(({ subscriptionType, data, ratePerMonth }, i) => (
                <PricingCard key={i} subscriptionType={subscriptionType} data={data} ratePerMonth={ratePerMonth} />
            ))}
        </div>
    );
}

export default PricingGrid;