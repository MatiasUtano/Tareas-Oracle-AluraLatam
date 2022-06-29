/*let titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "Buena Vida Nutrición";*/

let pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(let i=0; i<pacientes.length; i++){

    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    console.log(tdPeso);

    let peso = tdPeso.textContent;
    console.log(peso);

    let tdAltura = paciente.querySelector(".info-altura");
    console.log(tdAltura);

    let altura = tdAltura.textContent;
    console.log(altura);

    let tdIMC = paciente.querySelector(".info-imc");

    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);

    if(!pesoEsValido){
        console.log("Peso Incorrecto");
        tdIMC.textContent= "Peso Incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if(!alturaEsValida){
        console.log("Altura Incorrecta");
        tdIMC.textContent= "Altura Incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
    }

    if(pesoEsValido && alturaEsValida){
        tdIMC.textContent = calcularIMC(peso,altura);
    }
}

function calcularIMC(peso,altura){
    let imc = peso / (altura*altura);
    return imc.toFixed(2);
}


function validarPeso(peso){
    if(peso > 0 && peso < 500){
        return true;
    }else{
        return false;
    }
}

function validarAltura(altura){
    if(altura > 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}