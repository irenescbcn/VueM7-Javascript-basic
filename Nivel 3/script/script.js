document.getElementById("display").value = 0;

let digito = "";
let decimal;
let acumulado = 0;
let sumar = false;
let restar = false;
let multiplicar = false;
let dividir = false;
let firstOperation = true;
let firstMultiplication = true;
let firstDivision = true;


//MOSTRAR NÚMEROS POR PANTALLA
function displayNumeros(numero) {
    if (decimal) {
        display.value = decimal + numero;
        decimal = display.value;
        digito = 0;
    } else {
        display.value = digito + numero;
        digito = display.value;
        decimal = 0;
    }
}

function displayComa(coma) {
    decimal = digito + coma;
    display.value = digito + coma;
    decimal = display.value;
}



//OPERACIONES CALCULADORA
function infoOperacion(vDigito, vDecimal, vSumar, vRestar, vMultiplicar, vDividir, vFirstOperation){
    digito = vDigito;
    decimal = vDecimal;
    sumar = vSumar;
    restar = vRestar;
    multiplicar=vMultiplicar;
    dividir=vDividir;
    firstOperation = vFirstOperation;
}

function operacionSumar(valor){
    if(valor === "decimal"){
        acumulado = acumulado + parseFloat(decimal);
    }else{
        acumulado = acumulado + parseInt(digito);
    }
    display.value = acumulado;
}


function operacionRestar(valor){
    if (valor === "decimal"){
        acumulado = acumulado - parseFloat(decimal);
    }else{
        acumulado = acumulado - parseInt(digito);
    }
    display.value = acumulado;
}


function operacionMultiplicar(valor){
    if(firstMultiplication == false){
        display.value = acumulado; 
        firstMultiplication=true;
    }else{
        if (valor === "decimal"){
            acumulado = acumulado * parseFloat(decimal);
        }else{
            acumulado = acumulado * parseInt(digito);
        }
        display.value = acumulado;
    }
}

function operacionDividir(valor){
    if(firstDivision == false){
        display.value = acumulado; 
        firstDivision=true;
    }else{
        if (valor === "decimal"){
            acumulado = acumulado / parseFloat(decimal);
        }else{
            if(digito == "0"){
                alert("No es posible realizar esta operación");
            }else{
            acumulado = acumulado / parseInt(digito);
            }
        }
        display.value = acumulado;
    }
}


function suma() {
    if (decimal) {
        if (restar) operacionRestar("decimal");
        else if (multiplicar) operacionMultiplicar("decimal");
        else if(dividir) operacionDividir("decimal");
        else operacionSumar("decimal");  
    } else {
        if (restar) operacionRestar(digito);
        else if (multiplicar) operacionMultiplicar(digito);
        else if(dividir) operacionDividir(digito);
        else operacionSumar(digito);
    }
    infoOperacion("", "", true, false, false, false, false);
}


function resta() {
    if (decimal) {
        if (firstOperation == false) {
            if (sumar == true) operacionSumar("decimal");
            else if (multiplicar) operacionMultiplicar("decimal");
            else if (dividir) operacionDividir("decimal");
            else operacionRestar("decimal");
        } else {
            acumulado = parseFloat(decimal);
            firstOperation = false;
        }
    } else {
        if (firstOperation == false) {
            if (sumar == true) operacionSumar(digito);
            else if (multiplicar) operacionMultiplicar(digito);
            else if (dividir) operacionDividir(digito);
            else operacionRestar(digito);
        } else {
            acumulado = parseInt(digito);
            firstOperation = false;
        }
    }
    infoOperacion("", "", false, true, false, false, false);
}


function multiplicacion() {
    if (decimal) {
        if (firstOperation == false) {
            if (sumar) operacionSumar("decimal");
            else if (restar) operacionRestar("decimal");
            else if (dividir) operacionDividir("decimal");  
            else operacionMultiplicar("decimal");
        } else {
            acumulado = parseFloat(decimal);
            firstOperation = false;
        }
    } else {
        if (firstOperation == false) {
            if (sumar) operacionSumar(digito);
            else if (restar) operacionRestar(digito);
            else if (dividir) operacionDividir(digito); 
            else operacionMultiplicar(digito);    
        } else {
            acumulado = parseInt(digito);
            firstOperation = false;
        }
    }

    infoOperacion("", "", false, false, true, false, false);
}


function division() {
    if (decimal) {
        if (firstOperation == false) {
            if (sumar == true) operacionSumar("decimal");
            else if (restar) operacionRestar("decimal");
            else if (multiplicar) operacionMultiplicar ("decimal"); 
            else operacionDividir("decimal");
        } else {
            acumulado = parseFloat(decimal);
            firstOperation = false;
        }
    } else {
        if (firstOperation == false) {
            if (sumar == true) operacionSumar(digito);
            else if (restar) operacionRestar(digito);            
            else if (multiplicar) operacionMultiplicar(digito);
            else operacionDividir(digito);
        } else {
            acumulado = parseInt(digito);
            firstOperation = false;
        }
    }

    infoOperacion("", "", false, false, false, true, false)
}



//MOSTRAR RESULTADO
function resultado() {
    if (decimal) {
        if (sumar == true) operacionSumar("decimal");
        else if (restar) operacionRestar("decimal");
        else if (multiplicar) {
            operacionMultiplicar("decimal");
            firstMultiplication = false;
        } else {
            operacionDividir("decimal");
            firstDivision = false;
        }
        acumulado = parseFloat(display.value);
        decimal = 0;

    } else {
        if (sumar) operacionSumar(digito);
        else if (restar) operacionRestar(digito);
        else if (multiplicar) {
            operacionMultiplicar(digito);
            firstMultiplication = false;
        } else {
            operacionDividir(digito);
            firstDivision = false;
        }

        acumulado = parseInt(display.value);
        digito = 0;
    }
}