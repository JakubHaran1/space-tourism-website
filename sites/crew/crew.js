// DOM ELEMENTS EVENT ELEMENT
const subMenuWrapper = document.querySelector(".sub-menu.desktop");
const subMenuWrapperMobile = document.querySelector(".sub-menu.desktop");

// DOM ELEMENTS TO CHANGE
const job = document.querySelector(".job");
const name_p = document.querySelector(".name");
const description = document.querySelector(".description");
const imgEl = document.querySelector(".crew-img img");

let data;

// DATA
let job_data;
let name_data;
let description_data;
let img_data;


let position = 0; //pozycja slidera

const slideBtn = (e) => {
    if (e.target.classList.contains("element")) {
        e.target.closest(".sub-menu").querySelectorAll(".element").forEach(el => el.classList.remove("active"));
        e.target.classList.add("active");
        position = e.target.dataset.slide;
        getData()
    };
}

const getData = () => {
    fetch('../../assets/data.json')
        .then((response) => response.json())
        .then((json) => {
            name_data = json.crew[position].name
            console.log(name_data)
        })
}

const init = () => {

    subMenuWrapper.addEventListener("click", e => slideBtn(e))
    subMenuWrapperMobile.addEventListener("click", e => slideBtn(e))
}
init()