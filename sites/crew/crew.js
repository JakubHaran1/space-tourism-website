// DOM ELEMENTS EVENT ELEMENT
const subElementMobile = document.querySelectorAll(".sub-menu.mobile .element");
const subElementDesktop = document.querySelectorAll(".sub-menu.desktop .element");

// DOM ELEMENTS TO CHANGE
const job = document.querySelector(".job");
const name_p = document.querySelector(".name");
const description = document.querySelector(".description");
const imgEl = document.querySelector(".crew-img img");

let last_subElementDesktop = subElementDesktop[0];
let last_subElementMobile = subElementMobile[0];
const change_function = (e) => {


    if (e.target == subElementMobile[0] || e.target == subElementDesktop[0]) {
        last_subElementMobile.classList.remove("active");
        last_subElementDesktop.classList.remove("active")
        job.textContent = "Commander";
        name_p.textContent = "Douglas Hurley";
        description.textContent = " Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
        imgEl.src = "../../assets/crew/image-douglas-hurley.webp";
        subElementMobile[0].classList.add("active");
        subElementDesktop[0].classList.add("active");
        last_subElementMobile = subElementMobile[0];
        last_subElementDesktop = subElementDesktop[0];

    } else if (e.target == subElementMobile[1] || e.target == subElementDesktop[1]) {
        last_subElementMobile.classList.remove("active");
        last_subElementDesktop.classList.remove("active")
        job.textContent = "Mission Specialist";
        name_p.textContent = "Mark Shuttleworth";
        description.textContent = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist..";
        imgEl.src = "../../assets/crew/image-mark-shuttleworth.webp";
        subElementMobile[1].classList.add("active");
        subElementDesktop[1].classList.add("active");
        last_subElementMobile = subElementMobile[1];
        last_subElementDesktop = subElementDesktop[1];
    } else if (e.target == subElementMobile[2] || e.target == subElementDesktop[2]) {
        last_subElementMobile.classList.remove("active");
        last_subElementDesktop.classList.remove("active")
        job.textContent = "Pilot";
        name_p.textContent = "Victor Glover";
        description.textContent = " Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
        imgEl.src = "../../assets/crew/image-victor-glover.webp";
        subElementMobile = subElementMobile[2];
        subElementDesktop = subElementDesktop[2];
    } else if (e.target == subElementMobile[3] || e.target == subElementDesktop[3]) {
        job.textContent = "Flight Engineer";
        name_p.textContent = "Anousheh Ansari";
        description.textContent = " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
        imgEl.src = "../../assets/crew/image-anousheh-ansari.webp"
    } else {

    };
};

for (let i = 0; i < subElementMobile.length; i++) {
    subElementMobile[i].addEventListener("click", change_function)
    subElementDesktop[i].addEventListener("click", change_function)


}