const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.querySelector(".header-container__menu-list");

menuBtn.addEventListener("click", function (e) {
    e.preventDefault();

    this.classList.toggle("menu-btn_active");
    mobileMenu.classList.toggle("open");

    document.body.style.overflow = mobileMenu.classList.contains("open")
        ? "hidden"
        : "auto";
});
