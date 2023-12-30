function ToggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon"); // Corrected class name
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}