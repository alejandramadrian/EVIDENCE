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

const btnComenzar = document.getElementById ('btnComenzar');
 
if (btnComenzar) {
    btnComenzar.addEventListener('click', function (){

        window.location.href = '../seleccion/seleccion.html'
    });
}
