// DOM ELEMENTS EVENT ELEMENT

const underlineToActive = document.querySelectorAll(".sub-position .position-underline")
const navSubPositions = document.querySelectorAll(".sub-position")
let underline = underlineToActive[0];



// DOM ELEMENTS TO CHANGE
const mainHeader = document.querySelector(".main-header");
const description = document.querySelector(".description p");
const planet = document.querySelector(".planet");
let infoFirstDescription = document.querySelector(".info:nth-child(1) .info-description");
let infoSecondDescription = document.querySelector(".info:nth-child(2) .info-description");

const changeFunction = (e) => {
    console.log(e.target)
    if (e.target == navSubPositions[0]) {
        mainHeader.textContent = "Moon";
        description.textContent = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
        infoFirstDescription.textContent = "384,400 km";
        infoSecondDescription.textContent = "3 days";
        planet.style.backgroundImage = "url(../../assets/destination/image-moon.webp)"
        underline.classList.remove("active")
        if (!underline.className != ("active")) {
            underlineToActive[0].classList.add("active");
        }
        underline = underlineToActive[0];
    } else if (e.target == navSubPositions[1]) {
        mainHeader.textContent = "Mars";
        description.textContent = "Don’ t forget to pack your hiking boots.You’ ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system.It’ s two and a half times the size of Everest!";
        infoFirstDescription.textContent = "225 mil.km";
        infoSecondDescription.textContent = "9 months";
        planet.style.backgroundImage = "url(../../assets/destination/image-mars.webp)"

        underline.classList.remove("active")
        underlineToActive[1].classList.add("active");
        underline = underlineToActive[1];

    } else if (e.target == navSubPositions[2]) {
        mainHeader.textContent = "Europa";
        description.textContent = " The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’ s dream.With an icy surface, it’ s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
        infoFirstDescription.textContent = "628 mil.km";
        infoSecondDescription.textContent = "3 years";
        planet.style.backgroundImage = "url(../../assets/destination/image-europa.webp)"
        underline.classList.remove("active")
        underlineToActive[2].classList.add("active");
        underline = underlineToActive[2];

    } else if (e.target == navSubPositions[3]) {
        mainHeader.textContent = " Titan";
        description.textContent = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn..";
        infoFirstDescription.textContent = "1.6 bil. km";
        infoSecondDescription.textContent = "7 years";
        planet.style.backgroundImage = "url(../../assets/destination/image-titan.webp)"
        underline.classList.remove("active")
        underlineToActive[3].classList.add("active");
        underline = underlineToActive[3];
    }

};
for (let i = 0; i < navSubPositions.length; i++) {
    navSubPositions[i].addEventListener("click", changeFunction)
}