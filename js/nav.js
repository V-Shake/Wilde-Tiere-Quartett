document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");

    nav.classList.add("transparent-light");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            nav.classList.remove("transparent-light");
            nav.classList.add("transparent-dark");
        } else {
            nav.classList.remove("transparent-dark");
            nav.classList.add("transparent-light");
        }
    });
});
