document.addEventListener("DOMContentLoaded", () => {
    let icone_menu = document.querySelector(".icone_menu");
    let liensList = document.querySelector(".liens");

    icone_menu.onclick = () => {
        console.log("Icône cliquée");
        liensList.classList.toggle("open");
    };
});
