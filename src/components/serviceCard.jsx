import React from "react";


export default function ServiceCard({service}){
    return(
        <a href="#" className="">
            <article className="my-3  bg-pb-peach rounded-lg shadow-sm text-pb-whipped" id="serviceAnimation">
                <div className="grid md:grid-cols-3 p-3 gap-0 md:gap-8 xl:grid-cols-1">
                    <div className="p-4 col-span-1 xl:flex xl:flex-col xl:justify-center xl:w-full">
                        <div className="w-16 h-16">
                            <img src="./assets/img/PB_svgicon.svg" alt="" className="object-fit object-center w-full h-full" />
                        </div>
                    
                    </div>
                    <div className="col-span-2 flex flex-col justify-center text-center">
                        <h3 className="text-2xl text-center font-bold inline-block align-middle">{service.service}</h3>
                    
                    </div>
                </div>
            </article>     
        </a> 
    );
}