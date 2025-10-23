// Lógica del menú

// Selección de elemtos del HTML
let burger = document.querySelector(".burger > i");
let menu_opt = document.querySelector(".menu");

// Variable para saber si el menu esta abierto o cerrado
let isOpen = false;

// Definimos evento click sobr eel botón del menú
burger. addEventListener("click", function(){

    let isOpen = menu_opt.classList.contains("menu-show")

    if (isOpen === false) {

        menu_opt.classList.add("menu-show");
           

    } else {

        menu_opt.classList.remove("menu-show");

    }

});
