function openSideMenu() {
    const menuButton=document.querySelector(".menu-button");
    const sideMenu=document.querySelector(".side-bar");
    const overlay=document.querySelector(".overlay");

    menuButton.addEventListener("click",  () => {
        sideMenu.classList.remove("side-bar-out");
        overlay.classList.remove("overlay-slide-out");
        sideMenu.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
}

function closeSideMenu() {
    const menuButton=document.querySelector(".menu-button");
    const sideMenu=document.querySelector(".side-bar");
    const overlay=document.querySelector(".overlay");
    const menuCloseButton=document.querySelector(".close-icon-button");

    menuCloseButton.addEventListener("click", () => {
        sideMenu.classList.add("side-bar-out");
        overlay.classList.add("overlay-slide-out");
    sideMenu.addEventListener("animationend", () => {
        overlay.classList.add("hidden");
        sideMenu.classList.add("hidden");
    }
    ,{ once: true });
    });
}

openSideMenu();
closeSideMenu();