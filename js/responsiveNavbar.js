//Conecto las variables
let menu = document.getElementById("menu");
let nav = document.getElementById("navbar");
//Creo un controlador booleano
let semaforo = false;

//Función flecha con EventListener
menu.addEventListener("click", () => {
    console.log("click");

    if(semaforo == false){
        nav.style.display = "flex";
        semaforo = true;

    }else{
        nav.style.display = "none";
        semaforo = false;
    }
})