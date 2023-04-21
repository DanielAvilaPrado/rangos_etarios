let btnEnviar = document.getElementById("btnRangoEtario");
let resultados = document.getElementById("resultados");

function rangoEtario(e) {
    e.preventDefault()
    let edadIngresada = parseInt(document.getElementById("edadIngresada").value)
    if (edadIngresada > 0 && edadIngresada < 18) {
        resultados.innerHTML = `<div class="contenedor">
                                <p>Persona es menor de edad</p>
                                <img src="./assets/img/N.jpg" alt="" width="50%">
                                </div>`;
    } else if (edadIngresada >= 18 && edadIngresada < 65) {
        resultados.innerHTML = `<div class="contenedor">
                                <p>Persona es adulto</p>
                                <img src="./assets/img/A.jpg" alt="" width="50%">
                                </div>`;
    } else if (edadIngresada >= 65 && edadIngresada < 85) {
        resultados.innerHTML = `<div class="contenedor">
                                <p>Persona es adulto mayor</p>
                                <img src="./assets/img/AM.jpg" alt="" width="50%">
                                </div>`;
    } else if (edadIngresada >= 85) {
        resultados.innerHTML = `<div class="contenedor">
                                <p>Persona es de años dorados</p>
                                <img src="./assets/img/AD.jpg" alt="" width="50%">
                                </div>`;
    };
}
btnEnviar.addEventListener("click", rangoEtario)
