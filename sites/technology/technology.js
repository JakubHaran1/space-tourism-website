// DOM ELEMENTS EVENT ELEMENT
const subNav = document.querySelector(".sub-menu");
const subEl = document.querySelectorAll(".sub-menu .element");

// DOM ELEMENTS TO CHANGE
const techName = document.querySelector(".technology-name h2");
const techDescription = document.querySelector(".technology-description");
const techImg = document.querySelector(".img");


const dataTechnology = [{
        "name": "Launch vehicle",
        "images": {
            "portrait": "../../assets/technology/image-launch-vehicle-portrait.jpg",
        },
        "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
        "name": "Spaceport",
        "images": {
            "portrait": "../../assets/technology/image-spaceport-portrait.jpg",
        },
        "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
        "name": "Space capsule",
        "images": {
            "portrait": "../../assets/technology/image-space-capsule-portrait.jpg",
        },
        "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
]

let position;

const showFunction = (e) => {
    if (!e.target.classList.contains("element")) return;
    subEl.forEach(el => el.classList.remove("active"));
    e.target.classList.add("active");
    position = e.target.closest(".element").dataset.slide;
    techName.textContent = dataTechnology[position].name;
    techDescription.textContent = dataTechnology[position].description;
    techImg.style.backgroundImage = `url(${dataTechnology[position].images.portrait})`;
};

const init = () => {
    subNav.addEventListener("click", (e) => showFunction(e));
};
init();