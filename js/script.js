const btnJugar = document.getElementById ('btnJugar');
 
if (btnJugar) {
    btnJugar.addEventListener('click', function (){

        window.location.href = 'intro/intro.html'
    });
}

const btnCreditos = document.getElementById ('btnCreditos');
 
if (btnCreditos) {
    btnCreditos.addEventListener('click', function (){

        window.location.href = 'creditos/creditos.html'
    });
}

const btnSiguiente = document.getElementById ('btnSiguiente');
 
if (btnSiguiente) {
    btnSiguiente.addEventListener('click', function (){

        window.location.href = '../seleccion/seleccion.html'
    });
}


const btnInicio = document.getElementById ('btnInicio');
 
if (btnInicio) {
    btnInicio.addEventListener('click', function (){

        window.location.href = '../index.html'
    });
}