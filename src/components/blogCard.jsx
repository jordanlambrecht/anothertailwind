import React from "react";
function Carousel() {
  return (
    <Flickity>
      <img style={{ marginLeft: 5, marginRight: 5 }} src="https://placeimg.com/640/480/animals" />
      <img style={{ marginLeft: 5, marginRight: 5 }} src="https://placeimg.com/640/480/animals" />
    </Flickity>
  );
}

export default function BlogCard({ blogPosts }){
    return (
        
        <article className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden ">
            <div className="w-1/3 bg-gray-600" >
                <div className="bg-pb-peach object-cover h-full w-full object-center overflow-hidden">
                    <img src={blogPosts.authorImg} alt={blogPosts.title} className="bg-pb-yellow object-cover h-full w-full object-center"/>
                </div>
            </div>
        <div className="w-2/3 px-6 py-4 ">
            <h3 className="text-medium font-semibold text-gray-800 font-headline leading-tight sm:leading-normal pb-">{blogPosts.title}</h3>
            <p className="font-light text-sm text-gray-600">Written by <a href="#" className="text-pb-peach">{blogPosts.author}</a> | {blogPosts.date}</p>
            <div className="mt-4">
                <a href="#" className="text-brand hover:text-brand-light font-semibold text-sm">Read More</a>
            </div>
        </div>
    </article>
    );
}