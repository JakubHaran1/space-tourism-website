// DOM ELEMENTS EVENT ELEMENT
const subMenuWrapper = document.querySelector(".sub-menu.desktop");
const subMenuWrapperMobile = document.querySelector(".sub-menu.desktop");

// DOM ELEMENTS TO CHANGE
const personName = document.querySelector(".name");
const role = document.querySelector(".job");
const bio = document.querySelector(".description");
const imgEl = document.querySelector(".crew-img img");

// DATA
const crew_data = [{
        "name": "Douglas Hurley",
        "images": {
            "webp": "./../../assets/crew/image-douglas-hurley.webp"
        },
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        "name": "Mark Shuttleworth",
        "images": {
            "webp": "./../../assets/crew/image-mark-shuttleworth.webp"
        },
        "role": "Mission Specialist",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    }, {
        "name": "Victor Glover",
        "images": {
            "webp": "./../../assets/crew/image-victor-glover.webp"
        },
        "role": "Pilot",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    }, {
        "name": "Anousheh Ansari",
        "images": {
            "webp": "./../../assets/crew/image-anousheh-ansari.webp"
        },
        "role": "Flight Engineer",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
]


console.log(crew_data)
let position = 0; //pozycja slidera
const showInfo = () => {
    personName.textContent = crew_data[position].name;
    role.textContent = crew_data[position].role;
    bio.textContent = crew_data[position].bio;
    imgEl.setAttribute("src", crew_data[position].images.webp)

}
const slideBtn = (e) => {
    if (e.target.classList.contains("element")) {
        e.target.closest(".sub-menu").querySelectorAll(".element").forEach(el => el.classList.remove("active"));
        e.target.classList.add("active");
        position = e.target.dataset.slide;
        showInfo()
    };
}


const init = () => {
    subMenuWrapper.addEventListener("click", e => slideBtn(e));
    subMenuWrapperMobile.addEventListener("click", e => slideBtn(e));
}

init()