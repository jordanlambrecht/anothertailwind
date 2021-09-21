import React from "react";


export default function FooterNav({ navitem }){
    return (
        <li className="my-1 text-center flex-grow" ><a className="text-pb-whipped text-2xl font-medium" href={navitem.url}>{navitem.text}</a></li>
    );
}