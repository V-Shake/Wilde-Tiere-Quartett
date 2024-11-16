document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const navLinks = nav.querySelectorAll("a");
    const logo = document.querySelector("#logo");
    const mainElement = document.querySelector("main");
    const overviewHeader = document.querySelector(".overview-header"); // Select overview-header

    // Start with a light transparent background on all pages
    nav.classList.add("transparent-light");

    // Set initial font color based on the page
    if (mainElement.classList.contains("overview-page")) {
        navLinks.forEach(link => link.classList.add("font-black"));
        logo.classList.add("font-black");
        if (overviewHeader) overviewHeader.classList.add("font-black");
    } else {
        navLinks.forEach(link => link.classList.add("font-white"));
        logo.classList.add("font-white");
    }

    // Scroll listener to switch background and font color on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            nav.classList.remove("transparent-light");
            nav.classList.add("transparent-dark");
            navLinks.forEach(link => {
                link.classList.remove("font-black");
                link.classList.add("font-white");
            });
            logo.classList.remove("font-black");
            logo.classList.add("font-white");
            if (overviewHeader) overviewHeader.classList.remove("font-black");
        } else {
            // Return to initial state based on the page
            nav.classList.remove("transparent-dark");
            nav.classList.add("transparent-light");

            if (mainElement.classList.contains("overview-page")) {
                navLinks.forEach(link => {
                    link.classList.remove("font-white");
                    link.classList.add("font-black");
                });
                logo.classList.remove("font-white");
                logo.classList.add("font-black");
                if (overviewHeader) overviewHeader.classList.add("font-black");
            } else {
                navLinks.forEach(link => link.classList.add("font-white"));
                logo.classList.add("font-white");
            }
        }
    });
});
