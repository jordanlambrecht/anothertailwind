import React from "react";
let timeout = true; // holder for timeout id
let delay = 350;// delay after event is "complete" to run callback
let temp1 = document.getElementById('temp1');

function removeAllChildNodes() {
   
    
    let removalTarget = document.getElementById('instafeed');
    while (removalTarget.firstChild) {
        console.log("removing");
        removalTarget.removeChild(removalTarget.firstChild);
    }
}

function buildTheFeed(postLimit){
    removeAllChildNodes()
    console.log(postLimit);
    let feed = new Instafeed({
        limit: postLimit,
        accessToken: 'IGQVJYNHBscXExclNwV2t2cTJmRC00TVJPNDRaVjJMZAkhiOG1WWndoeGNJQ29hUmFRT2dwRDVLRkJGemVQa3hjdnRmZAlNBYmJvS0FrVmJWQU1oWmlReENJOV8yQUowYThoM1VEQnN4d1Bpb05zc2d1NwZDZD'
    });
    feed.run()
}
function doneResizing(){

    let lWidth = window.innerWidth;
    let postLimit = 4;
    if(lWidth > 1536){
        postLimit = 12;
    }
    else if(lWidth >1280){
        // XL
        postLimit = 10;
    }
    else if(lWidth > 1024){
        // Large
        postLimit = 8;
    }
    else if(lWidth > 768){
        // Medium
        postLimit = 8;
    }
    else if(lWidth > 640){
        // Small
        postLimit = 6;
    }
    else if(lWidth > 500){
        //not a real breakpoint
        postLimit = 4;
    }
    else{
        // < SM
        postLimit = 4;
    }

    buildTheFeed(postLimit);
}

export default function insta({}){
    window.addEventListener('resize', function() {
        // clear the timeout
      clearTimeout(timeout);
      // start timing for event "completion"
      timeout = setTimeout(doneResizing(), delay);
    });
    return(
        <>
            { doneResizing() }
       </>
    );
}