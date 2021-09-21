import React from "react";

export default function DestinationCard({ destination }){
    return (
        <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
        <img src={destination.imageURL} alt={destination.imageAlt} className="h-32 w-32 flex-shrink-0 object-cover object-center"/>
        <div className="px-6 py-4">
            <h3 className="text-medium font-bold text-gray-800 font-headline">{destination.city}</h3>
            <p className="text-gray-600">${destination.averagePrice} / night average</p>
            <div className="mt-4">
                <a href="#" className="text-brand hover:text-brand-light font-semibold text-sm">Explore {destination.propertyCount} Properties</a>
            </div>
        </div>
    </div>
    );
}