// Seleccion de Elementos y Declaracion de variables
let valorTicket = 200;
const cantidadForm = document.getElementById('cantidad-form');
const seleccionCategoria = document.getElementById('selector-categoria');
const totalPagar = document.getElementById('total-pagar');
const botonBorrar = document.getElementById('botonBorrar');
const botonResumen = document.getElementById('botonResumen');

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
