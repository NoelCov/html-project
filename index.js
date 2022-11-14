const linksContainer = document.getElementsByClassName("linksContainer")[0];
const hamburgerMenu = document.getElementsByClassName("hamburgerMenu")[0];

console.log("Hello!");

hamburgerMenu.addEventListener("click", () => {
    if (linksContainer.classList.contains("inactive")) {
        linksContainer.classList.remove("inactive");
        linksContainer.classList.add("active");
    } else {
        linksContainer.classList.remove("active");
        linksContainer.classList.add("inactive");
    }
});
