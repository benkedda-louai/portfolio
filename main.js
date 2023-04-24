const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const xmark = document.querySelector(".xmark");
xmark.style.display = "none";
menuButton.addEventListener("click", () => {
if (menu.style.display === "none") {
    menu.style.display = "block";
    xmark.style.display = "block";
    menuButton.style.display = "none";
} else {
menu.style.display = "none";
xmark.style.display = "none";
}
});
xmark.addEventListener("click",()=> {
    if (menuButton.style.display === "none") {
        menu.style.display = "none";
        menuButton.style.display = "block";
        xmark.style.display = "none"
    }else {
        xmark.style.display = "block"
        menuButton.style.display = "none";
    }
});