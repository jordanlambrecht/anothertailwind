import React, { useState } from "react";


export default function HappyCard({ happyitem }) {



let len =  happyitem.length;
let randitem =  Math.floor(Math.random()  * len);



  return (
    <div >
        <p className="my-5 py-3 text-center text-4xl text-pb-whipped">{happyitem[randitem].text}</p>
    </div>
  );
}