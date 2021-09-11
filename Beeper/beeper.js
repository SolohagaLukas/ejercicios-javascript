var boton = document.querySelector("button")
var body = document.body

var seEjecutaEnEvento = function(){
    body.insertAdjacentHTML("beforeend","<p>BEEP</p>") 
    body.classList.toggle("color")
}

boton.addEventListener("click", seEjecutaEnEvento)
