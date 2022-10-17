// Seleccion de Elementos y Declaracion de variables
let valorTicket = 200;
let cantidadForm = document.getElementById('cantidad-form');
let seleccionCategoria = document.getElementById('selector-categoria');
let totalPagar = document.getElementById('total-pagar');
let botonBorrar = document.getElementById('botonBorrar');
let botonResumen = document.getElementById('botonResumen');

// Funciones
function valorTotalTicket () {
    if (seleccionCategoria.value == 'Estudiante') {
        valorTicket -= valorTicket * 80 / 100;
    }
    else if (seleccionCategoria.value == 'Trainee') {
        valorTicket -= valorTicket * 50 / 100;
    }
    else if (seleccionCategoria.value == 'Junior') {
        valorTicket -= valorTicket * 15 / 100;
    }
    return Number(cantidadForm.value) * valorTicket;
}

function editarTotalAPagar () {
    if (isNaN(cantidadForm.value)) {
        totalPagar.textContent = `Total a Pagar: Debe colocar un Número`; 
    }
    else {
        totalPagar.textContent = `Total a Pagar: ${valorTotalTicket()}`;
        valorTicket = 200;
    }

}
let borrarTotal = () => totalPagar.textContent = `Total a Pagar: ${0}`;

// Eventos
botonResumen.addEventListener('click',  editarTotalAPagar);
botonBorrar.addEventListener('click', borrarTotal);
