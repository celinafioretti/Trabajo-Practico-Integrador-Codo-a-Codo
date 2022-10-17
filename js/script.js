// VALOR DEL TICKET $200    
let valorTicket = 200;

let cantidadForm = document.getElementById('cantidad-form');

let seleccionCategoria = document.getElementById('selector-categoria');

let totalPagar = document.getElementById('total-pagar');

let botonBorrar = document.getElementById('botonBorrar');

let botonResumen = document.getElementById('botonResumen');



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
    totalPagar.textContent = `Total a Pagar: ${valorTotalTicket()}`;
}

function editarValorTotal () {
    valorTicket = 200;
    totalPagar.textContent = `Total a Pagar: ${0}`;
}

botonResumen.addEventListener('click',  editarTotalAPagar);
botonBorrar.addEventListener('click', editarValorTotal);

//TODO: ver si se puede lograr que el resultado no descuente una y otra vez el valorTotalAPagar