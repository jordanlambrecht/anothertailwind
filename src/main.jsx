import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";
import InstagramFeed from "./components/instagramFeed"; 
import "flickity/css/flickity.css";
import "./css/typefaces.css";
import "./css/tailwind.css";


ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<InstagramFeed />, document.getElementById("instafeed"));

function test(){
    let removalTarget = document.getElementById('instafeed');
    while (removalTarget.firstChild) {
        console.log("removing");
        removalTarget.removeChild(removalTarget.firstChild);
    }
    

}
const temp1= document.getElementById('temp1');
temp1.onclick = function(){
    test();
};