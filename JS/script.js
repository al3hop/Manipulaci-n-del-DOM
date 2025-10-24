// Lógica del menú

// Selección de elemtos del HTML
let burger = document.querySelector(".burger > i");
let menu_opt = document.querySelector(".menu");

// Variable para saber si el menu esta abierto o cerrado
let isOpen = false;

// Definimos evento click sobre el botón del menú
burger.addEventListener("click", function(){

    burger.classList.toggle("fa-bars");
    burger.classList.toggle("fa-times");
    menu_opt.classList.toggle("menu-show");

});



// Cambio de modo
let btnSwitchMode = document.querySelector(".theme-switch");

btnSwitchMode.addEventListener("click", function() {
    let body = document.querySelector("body");
    let to_dark_mode = document.querySelector(".to-dark-mode");
    let to_light_mode = document.querySelector(".to-light-mode");
    let condition = body.classList.contains("dark-theme");

    console.log(condition);



    if (condition) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");

    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");

    }

    to_dark_mode.classList.toggle("hide-cont");
    to_light_mode.classList.toggle("hide-cont");




    

});


