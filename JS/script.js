// Lógica del menú

// Selección de elemtos del HTML
let burger = document.querySelector(".burger > i");
let menu_opt = document.querySelector(".menu");

// Variable para saber si el menu esta abierto o cerrado
let isOpen = false;

// Definimos evento click sobr eel botón del menú
burger. addEventListener("click", function(){

    if (isOpen === false) {

            menu_opt.style.right = "0";
            isOpen = true;

    } else {

        menu_opt.style.right = "-100%";
        isOpen = false;

    }

});
