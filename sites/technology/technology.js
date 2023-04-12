// DOM ELEMENTS EVENT ELEMENT
const subElements = document.querySelectorAll(".sub-menu .element");

// DOM ELEMENTS TO CHANGE
const techName = document.querySelector(".technology-name h2");
const techDescription = document.querySelector(".technology-description");
const techImg = document.querySelector(".img");

let lastBtn = subElements[0];
const change_function = (e) => {
    if (e.target == subElements[0]) {
        lastBtn.classList.remove("active");
        techName.textContent = "Launch vehicle";
        techDescription.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
        techImg.style.backgroundImage = "url(../../assets/technology/image-launch-vehicle-portrait.jpg)"
        subElements[0].classList.add("active")
        lastBtn = subElements[0]
    } else if (e.target == subElements[1]) {
        lastBtn.classList.remove("active");
        techName.textContent = "Spaceport";
        techDescription.textContent = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
        techImg.style.backgroundImage = "url(../../assets/technology/image-spaceport-portrait.jpg)";
        subElements[1].classList.add("active");
        lastBtn = subElements[1];
    } else if (e.target == subElements[2]) {
        lastBtn.classList.remove("active");
        techName.textContent = "Space capsule";
        techDescription.textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
        techImg.style.backgroundImage = "url(../../assets/technology/image-space-capsule-portrait.jpg)";
        subElements[2].classList.add("active");
        lastBtn = subElements[2];
    }
}
for (let i = 0; i < subElements.length; i++) {
    subElements[i].addEventListener("click", change_function)



}