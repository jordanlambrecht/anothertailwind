import React from "react";
import Flickity from "react-flickity-component";


const flickityOptions = {
    initialIndex: 2
}


export default function Carousel(){
    return (
        <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <img className="w-full h-full object-cover object-center" style={{ marginLeft: 5, marginRight: 5 }} src="./assets/img/beach-work.jpg" />
        <img className=" object-cover object-center" style={{ marginLeft: 5, marginRight: 5 }} src="./assets/img/chicago.jpg" />
      </Flickity>
    );
  }