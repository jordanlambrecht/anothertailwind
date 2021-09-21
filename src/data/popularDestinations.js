function getRandom(){
    return Math.floor(Math.random() * 300);
};
const authors = ["Jordan Lambrecht", "Bergen Johnston", "Miley Cyrus"];
function getRandomAuthor(){
    let whichAuth =  Math.floor(Math.random() * authors.length);
    console.log(authors[whichAuth]);
    return authors[whichAuth];
};
export default[
    {
        city: "Toronto, Canada",
        averagePrice: getRandom(),
        propertyCount: getRandom(),
        imageURL: "/assets/img/toronto.jpg",
        imageAlt: "Toronto Skyline",
        author: getRandomAuthor(),
    },
    {
        city: "Malibu, California",
        averagePrice: getRandom(),
        propertyCount: getRandom(),
        imageURL: "/assets/img/malibu.jpg",
        imageAlt: "Malibu Ocean",
        author: getRandomAuthor(),
    },
    {
        city: "Chicago, Illinois",
        averagePrice: getRandom(),
        propertyCount: getRandom(),
        imageURL: "/assets/img/chicago.jpg",
        imageAlt: "Chicago Skyline",
        author: getRandomAuthor(),
    },
    {
        city: "Seattle, WA",
        averagePrice: getRandom(),
        propertyCount: getRandom(),
        imageURL: "/assets/img/seattle.jpg",
        imageAlt: "Seattle Skyline",
        author: getRandomAuthor(),
    },
    {
        city: "Denver, Colorado",
        averagePrice: getRandom(),
        propertyCount: getRandom(),
        imageURL: "/assets/img/colorado.jpg",
        imageAlt: "Colorado Skyline",
        author: getRandomAuthor(),
    },
    {
        city: "Lincoln, Nebraska",
        averagePrice: getRandom(),
        propertyCount: getRandom(),
        imageURL: "/assets/img/lincoln.jpg",
        imageAlt: "Lincoln Skyline",
        author: getRandomAuthor(),
    },
    {
        city: "Omaha, Nebraska",
        averagePrice: getRandom(),
        propertyCount: getRandom(),
        imageURL: "/assets/img/omaha.jpg",
        imageAlt: "Omaha Skyline",
        author: getRandomAuthor(),
    },
    {
        city: "Marfa, Texas",
        averagePrice: getRandom(),
        propertyCount: getRandom(),
        imageURL: "/assets/img/marfa.jpg",
        imageAlt: "Marfa Gucci",
        author: getRandomAuthor(),
    }
]