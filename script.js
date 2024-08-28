// menu hamburger em X

const menuHamburger = document.querySelector(".menu-hamburger");
menuHamburger.addEventListener("click", () => {
    toggleMenu();

});

function toggleMenu() {
    const nav = document.querySelector(".nav-responsive");
    menuHamburger.classList.toggle("change");

    if (menuHamburger.classList.contains("change")) {
        nav.style.display = "block";
    }

    else {
        nav.style.display = "none";
    }
}