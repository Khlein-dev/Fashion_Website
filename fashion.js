let lastScrollTop = 0;
let logoScreen = document.getElementById("logo-screen");
let mainContent = document.getElementById("main-content");

// Fade in content after logo disappears
window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        // Scrolling Down - Smooth Fade Out Logo
        logoScreen.style.transition = "opacity 1s ease-out";
        logoScreen.style.opacity = "0";
        setTimeout(() => {
            if (window.scrollY > 50) { 
                logoScreen.style.visibility = "hidden"; 
            }
        }, 1000); // Delay hiding to ensure smooth fade

        // Reveal Main Content Smoothly
        if (currentScroll > 50) {
            mainContent.style.opacity = "1";
            mainContent.style.transform = "translateY(0)";
        }
    } else if (currentScroll < lastScrollTop && window.scrollY < 50) {
        // Scrolling Up - Smooth Fade In Logo
        logoScreen.style.visibility = "visible";
        logoScreen.style.transition = "opacity 1s ease-in";
        logoScreen.style.opacity = "1";
    }

    lastScrollTop = currentScroll;
});
