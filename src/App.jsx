import React from "react";

import footerMenu from "./data/footerMenu";
import FooterNav from "./components/footerNav";
import footerMenuMore from "./data/footerMenuMore";
import FooterNavMoreCard from "./components/footerNavMoreCard";
import InstagramFeed from "./components/instagramFeed";
import wordsOfEncouragement from "./data/wordsOfEncouragement";
import HappyCard from "./components/happyCard";

import Carousel  from "./components/carousel";
import blogPosts from "./data/blogPosts";
import BlogCard from "./components/blogCard";
import HomeLanding from "./components/homeLanding";
import HomeWhoTheHeck from "./components/homeWhoTheHeck";
import HomePopularDestinations from "./components/homePopularDestinations";
import HomeWhatWeMake from "./components/homeWhatWeMake";
import HomeServices from "./components/homeServices"

export default function App(){
 
    return(
        <div>
            <HomeLanding />
            <HomeWhoTheHeck />
            <HomeWhatWeMake />
            <HomeServices />
            
            {/* <HomePopularDestinations /> */}
            {/* <section className="bg-white grid text-pb-blue lg:grid-cols-2 2xl:grid-cols-5">
                <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
                    <div className="xl:max-w-xl "> 
                        <img className="h-10 center" src="/assets/img/logo-brand.svg" alt="logogogogo"/>
                        <img className="mt-6 sm:mt-8 rounded-lg shadow-lg sm:h-64 sm:w-full sm:object-cover object-center lg:hidden" src="/assets/img/beach-work.jpg" alt="Woman working on the beach"/>
                
                        <h1 className="mt-6 sm:mt-8 text-2xl sm:text-4xl font-bold text-left text-gray-800 lg:text-3xl xl:text-4xl font-headline">You can work anywhere in the world. <br className="hidden lg:inline" /> <span className="text-brand">Take advantage of it. </span></h1>
                        <p className="mt-2 text-pb_peach sm:mt-4 sm:text-xl lg:text-xl">Intrinsicly synergize impactful meta-services whereas proactive technologies. Efficiently synthesize empowered data rather.</p>
                        <div className="mt-4 space-x-1 sm-mt-6">
                            <a href="#" className="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition">Book Your Escape</a>
                            <a href="#" className="btn btn-secondary  ">Learn More</a>
                        </div> 
                    </div>
                </div>
                <div className="hidden relative lg:block 2xl:col-span-3">
                    <img className="absolute inset-0 w-full h-full object-cover object-center" src="/assets/img/beach-work.jpg" alt="Woman working on the beach"/>
                </div>
            </section> */}
            

            
            
            
            {/* OUR BEST HITS */}
            <section id="besthits" className="bg-white grid text-pb-blue lg:grid-cols-2 2xl:grid-cols-5">
                <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
                   
                    <h2 className="text-pb-wine text-xl lg:text-2xl font-bold  text-gray-900 my-3"> Our Best Hits</h2>
                    <p className="my-3">Professionally coordinate real-time mindshare whereas cross functional "outside the box" thinking. Dynamically reintermediate revolutionary "outside the box" thinking without.</p>
                </div>
                <div className="w-full bg-pb-peach "> 
                    <Carousel />
                </div>
            </section>
            <section className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-12 lg:py-16 text-pb_peach my-8">
                <div className="mb-3">   
                    <h2 className="text-pb-wine ">Mom's Recipes</h2>
                    <p className="mt-2 text-gray-400 lg:text-xl pb-6">A selection of great work-friendly cities with lots of sights to see and explore.</p>  
                </div>
                <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0">
                        <img class="h-48 w-full object-cover md:w-48" src="/img/store.jpg" alt="Man looking at item at a store" />
                        </div>
                        <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                        <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3 auto-cols-fr ">
                {
                    blogPosts.map(blogPosts=>(
                        
                            
                        
                    <BlogCard blogPosts={blogPosts} key={blogPosts.title} />
                ))}
                </div>     
                <a href="#" className="mb-16 mt-8 btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition">See All Recipes</a>
            </section>
            <footer className="bg-pb-peach px-12 py-12">
                <div className="text-center text-pb-whipped text-4xl font-extrabold leading-9 "><a href="/"><span className="tracking-wider">pixel bakery</span><br/><span className="tracking-normal">design studio</span></a></div>
                
                    {/* <img className="mx-auto h-32 flex-shrink-0 object-cover object-center " src="https://pixelbakery.pbds.dev/wp-content/themes/pixel-bakery-child/assets/branding/PB_Branding_Logo_3D_Frosting_v01.svg"/> */}
                            
          
                <nav className="px-5 py-5 my-3">
                    <ul className="grid grid-cols-2">
                    { footerMenu.map(navitem=>(
                        <FooterNav navitem={navitem} key={navitem.text} />
                    ))}
                    </ul>
                </nav>
                <div className="mt-2 py-3">
                    <div className=" border-b-4 border-b-pb-whipped text-bold">
                        <h3 className="font-extrabold text-3xl text-pb-whipped pb-3">studio</h3>
                    </div>
                    <ul className="mt-3">
                       <li> <a className="text-pb-whipped text-xl" href="#">2124 y st ste 208<br/>lincoln, ne 68503</a></li>
                       <li className="mt-3 text-xl text-pb-whipped"><a href="tel:4024138366" target="_blank">402 413 8366</a></li>
                    </ul>
                    <div className="pt-8">
                        <div className="mt-4 border-b-4 border-b-pb-whipped mb-4">
                            <h3 className="font-extrabold text-3xl  text-pb-whipped pb-3">more stuff</h3>
                        </div>
                       
                        <nav >
                            <ul className="mt-3">
                            { footerMenuMore.map(navitem=>(
                                <FooterNavMoreCard navitem={navitem} key={navitem.text} />
                            ))}
                            </ul>
                        </nav>
                        
                    </div>
                </div>
                <div>
                    <HappyCard happyitem={wordsOfEncouragement}/>
                </div>
                <button id="temp1">Click me</button>
                <div className="my-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 2xl:grid-cols-12 gap-0" id="instafeed"></div>
                <div className="text-center pt-4">
                
                    
                    <span className="italic text-sm  text-pb-whipped">
                        © 2021 Pixel Bakery Design Studio
                        <br />
                        Made with lust and flour in Lincoln, Nebraska   
                    </span>
                </div>
                <script >
                                

                </script>
           
            </footer>
        </div>
    );
}



