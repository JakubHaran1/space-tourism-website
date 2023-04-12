//  Nawigacja
const nav = document.querySelector(".nav.mobile");
const hamburgerBtn = document.querySelector(".hamburger");
const hamburgerEL = document.querySelectorAll(".hamburger-element")

// Animacia rozsuwania nawigacji

const navFunction = () => {
    nav.classList.toggle("active")

    for (let i = 0; i < hamburgerEL.length; i++) {
        hamburgerEL[i].classList.toggle("active")
    }
}

// Main Function

const main = () => {
    hamburgerBtn.addEventListener("click", navFunction)
}
main()