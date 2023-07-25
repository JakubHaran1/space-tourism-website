// DOM ELEMENTS EVENT ELEMENT
const underlineToActive = document.querySelectorAll(".sub-position .position-underline");
const navSubPositions = document.querySelectorAll(".sub-position");

const subNav = document.querySelector(".destination-nav");

// DOM ELEMENTS TO CHANGE
const namePlanet = document.querySelector(".main-header");
const description = document.querySelector(".description p");
const planetImg = document.querySelector(".planet");
const distance = document.querySelector(".info:nth-child(1) .info-description");
const travel = document.querySelector(".info:nth-child(2) .info-description");

let position;

const destinationData = [{
        "name": "Moon",
        "images": {
            "webp": "./../../assets/destination/image-moon.webp"
        },
        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
    },
    {
        "name": "Mars",
        "images": {
            "webp": "./../../assets/destination/image-mars.webp"
        },
        "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months"
    },
    {
        "name": "Europa",
        "images": {
            "webp": "./../../assets/destination/image-europa.webp"
        },
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
    },
    {
        "name": "Titan",
        "images": {
            "webp": "./../../assets/destination/image-titan.webp"
        },
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
    }
]

const showInfo = () => {
    namePlanet.textContent = destinationData[position].name;
    description.textContent = destinationData[position].description;
    distance.textContent = destinationData[position].distance;
    travel.textContent = destinationData[position].travel;
    planetImg.style.backgroundImage = `url(${destinationData[position].images.webp})`
}


const subNavFunction = (e) => {
    if (!e.target.classList.contains("sub-position")) return
    position = e.target.closest(".sub-position ").dataset.slide;
    underlineToActive.forEach(u => u.classList.remove("active"));
    underlineToActive[position].classList.add("active");
    showInfo()
}

const init = () => {
    subNav.addEventListener("click", (e) => subNavFunction(e))
}
init()