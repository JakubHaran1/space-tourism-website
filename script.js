//  Nawigacja
const nav = document.querySelector(".nav.mobile");
const hamburgerBtn = document.querySelector(".hamburger");
const hamburgerEL = document.querySelectorAll(".hamburger-element")

// Animacia rozsuwania nawigacji

const navFunction = () => {
    nav.classList.toggle("active")
    hamburgerEL.forEach(el => el.classList.toggle("active"))
}
// Main Function

const main = () => {
    hamburgerBtn.addEventListener("click", navFunction)
}
main()