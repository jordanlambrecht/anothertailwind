import React from "react";

import popularDestinations from "../data/popularDestinations";
import DestinationCard from "../components/destinationCard";

export default function PopularDestinations(){
    return(
        <section className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8 lg:py-16 text-pb_peach">
            <h2 className="text-xl lg:text-2xl lg:font-bold  text-gray-900">Popular Destinations</h2>
            <p className="mt-2 text-gray-400 lg:text-xl">A selection of great work-friendly cities with lots of sights to see and explore.</p>
            <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {/* <DestinationCard destination={popularDestinations[1]} /> */}
                {
                    popularDestinations.map(destination=>(
                        <DestinationCard destination={destination} key={destination.city} />
                    ))}
            </div>
        </section>
            );
}

