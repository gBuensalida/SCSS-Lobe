const burgerBtn = document.querySelector(".burger__btn");
const headerNav = document.querySelector(".header__nav");
burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("open")
    headerNav.classList.toggle("open")
})