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
        document.getElementById("display").value = decimal + numero;
        decimal = document.getElementById("display").value;
        digito = 0;
    } else {
        document.getElementById("display").value = digito + numero;
        digito = document.getElementById("display").value;
        decimal = 0;
    }
}

function displayComa(coma) {
    decimal = digito + coma;
    document.getElementById("display").value = digito + coma;
    decimal = document.getElementById("display").value;
}


//OPERACIONES CALCULADORA
function suma() {
    if (decimal) {
        if (restar) {
            acumulado = acumulado - parseFloat(decimal);
            document.getElementById("display").value = acumulado;
        } else if (multiplicar){
            if (firstMultiplication == false) {
                    document.getElementById("display").value = acumulado;
                    firstMultiplication=true;
                } else {
                    acumulado = acumulado * parseFloat(decimal);
                    document.getElementById("display").value = acumulado;
                }
        } else if(dividir){
            if (firstDivision == false) {
                    document.getElementById("display").value = acumulado;
                    firstDivision=true;
                } else {
                    acumulado = acumulado / parseFloat(decimal);
                    document.getElementById("display").value = acumulado;
                }
        }else{
            acumulado = acumulado + parseFloat(decimal);
            document.getElementById("display").value = acumulado;  
        }
    } else {
        if (restar) {
            acumulado = acumulado - parseInt(digito);
            document.getElementById("display").value = acumulado;
        } else if (multiplicar){
            if (firstMultiplication == false) {
                    document.getElementById("display").value = acumulado;
                    firstMultiplication=true;
                } else {
                    acumulado = acumulado * parseInt(digito);
                    document.getElementById("display").value = acumulado;
                }
        } else if(dividir){
            if (firstDivision == false) {
                    document.getElementById("display").value = acumulado;
                    firstDivision=true;
                } else {
                    acumulado = acumulado / parseInt(digito);
                    document.getElementById("display").value = acumulado;
                }
        }else{
            acumulado = acumulado + parseInt(digito);
            document.getElementById("display").value = acumulado;  
        }
    }

    digito = "";
    decimal = "";
    sumar = true;
    restar = false;
    multiplicar=false;
    dividir=false;
    firstOperation = false;
}


function resta() {
    if (decimal) {
        if (firstOperation == false) {
            if (sumar == true) {
                acumulado = acumulado + parseFloat(decimal);
                document.getElementById("display").value = acumulado;
            } else if (multiplicar) {
                if (firstMultiplication == false) {
                    document.getElementById("display").value = acumulado;
                    firstMultiplication=true;
                } else {
                    acumulado = acumulado * parseFloat(decimal);
                    document.getElementById("display").value = acumulado;
                }
            } else if (dividir) {
                if (firstDivision == false) {
                    document.getElementById("display").value = acumulado;
                    firstDivision=true;
                } else {
                    acumulado = acumulado / parseFloat(decimal);
                    document.getElementById("display").value = acumulado;
                }
            } else {
                acumulado = acumulado - parseFloat(decimal);
                document.getElementById("display").value = acumulado;
            }
    
        } else {
            acumulado = parseFloat(decimal);
            firstOperation = false;
        }
    } else {
        if (firstOperation == false) {
            if (sumar == true) {
                acumulado = acumulado + parseInt(digito);
                document.getElementById("display").value = acumulado;
            } else if (multiplicar) {
                if (firstMultiplication == false) {
                    document.getElementById("display").value = acumulado;
                    firstMultiplication=true;
                } else {
                    acumulado = acumulado * parseInt(digito);
                    document.getElementById("display").value = acumulado;
                }
            } else if (dividir) {
                if (firstDivision == false) {
                    document.getElementById("display").value = acumulado;
                    firstDivision=true;
                } else {
                    acumulado = acumulado / parseInt(digito);
                    document.getElementById("display").value = acumulado;
                }
            } else {
                acumulado = acumulado - parseInt(digito);
                document.getElementById("display").value = acumulado;
            }
    
        } else {
            acumulado = parseInt(digito);
            firstOperation = false;
        }
    }


    digito = "";
    decimal = "";
    sumar = false;
    multiplicar = false;
    dividir = false;
    restar = true;
}


function multiplicacion() {
    if (decimal) {
        if (firstOperation == false) {
            if (sumar == true) {
                acumulado = acumulado + parseFloat(decimal);
                document.getElementById("display").value = acumulado;
            } else if (restar) {
                acumulado = acumulado - parseFloat(decimal);
                document.getElementById("display").value = acumulado;
            } else if (dividir) {
                if (firstDivision == false) {
                    document.getElementById("display").value = acumulado;
                } else {
                    acumulado = acumulado / parseFloat(decimal);
                    document.getElementById("display").value = acumulado;
                }
            } else {
                if (firstMultiplication == false) {
                    document.getElementById("display").value = acumulado;
                    firstMultiplication=true;
                } else {
                    acumulado = acumulado * parseFloat(decimal);
                    document.getElementById("display").value = acumulado;
                }
            }
        } else {
            acumulado = parseFloat(decimal);
            firstOperation = false;
        }
    } else {
        if (firstOperation == false) {
            if (sumar == true) {
                acumulado = acumulado + parseInt(digito);
                document.getElementById("display").value = acumulado;
            } else if (restar) {
                acumulado = acumulado - parseInt(digito);
                document.getElementById("display").value = acumulado;
            } else if (dividir) {
                if (firstDivision == false) {
                    document.getElementById("display").value = acumulado;
                } else {
                    acumulado = acumulado / parseInt(digito);
                    document.getElementById("display").value = acumulado;
                }
            } else {
                if (firstMultiplication == false) {
                    document.getElementById("display").value = acumulado;
                    firstMultiplication=true;
                } else {
                    acumulado = acumulado * parseInt(digito);
                    document.getElementById("display").value = acumulado;
                }
            }
        } else {
            acumulado = parseInt(digito);
            firstOperation = false;
        }
    }
    digito = "";
    decimal = "";
    sumar = false;
    restar = false;
    dividir = false;
    multiplicar = true;
}

function division() {
    if (decimal) {
        if (firstOperation == false) {
            if (sumar == true) {
                acumulado = acumulado + parseFloat(decimal);
                document.getElementById("display").value = acumulado;
            } else if (restar) {
                acumulado = acumulado - parseFloat(decimal);
                document.getElementById("display").value = acumulado;
            } else if (multiplicar) {
                if (firstMultiplication == false) {
                    document.getElementById("display").value = acumulado;
                } else {
                    acumulado = acumulado * parseFloat(decimal);
                    document.getElementById("display").value = acumulado;
                }
            } else {
                if (firstDivision == false) {
                    document.getElementById("display").value = acumulado;
                    firstDivision=true;
                } else {
                    acumulado = acumulado / parseFloat(decimal);
                    document.getElementById("display").value = acumulado;
                }
            }
        } else {
            acumulado = parseFloat(decimal);
            firstOperation = false;
        }
    } else {
        if (firstOperation == false) {
            if (sumar == true) {
                acumulado = acumulado + parseInt(digito);
                document.getElementById("display").value = acumulado;
            } else if (restar) {
                acumulado = acumulado - parseInt(digito);
                document.getElementById("display").value = acumulado;
            } else if (multiplicar) {
                if (firstMultiplication == false) {
                    document.getElementById("display").value = acumulado;
                } else {
                    acumulado = acumulado * parseInt(digito);
                    document.getElementById("display").value = acumulado;
                }
            } else {
                if (firstDivision == false) {
                    document.getElementById("display").value = acumulado;
                    firstDivision=true;
                } else {
                    acumulado = acumulado / parseInt(digito);
                    document.getElementById("display").value = acumulado;
                }
    
            }
        } else {
            acumulado = parseInt(digito);
            firstOperation = false;
        }
    }

    digito = "";
    decimal = "";
    sumar = false;
    restar = false;
    multiplicar = false;
    dividir = true;
}



//MOSTRAR RESULTADO
function resultado() {
    if (decimal) {
        if (sumar == true) {
            document.getElementById("display").value = acumulado + parseFloat(decimal);
        } else if (restar == true) {
            document.getElementById("display").value = acumulado - parseFloat(decimal);
        } else if (multiplicar == true) {
            document.getElementById("display").value = acumulado * parseFloat(decimal);
            firstMultiplication = false;
        } else {
            document.getElementById("display").value = acumulado / parseFloat(decimal);
            firstDivision = false;
        }
    
        acumulado = parseFloat(document.getElementById("display").value);
        decimal = 0;

    } else {
        if (sumar == true) {
            document.getElementById("display").value = acumulado + parseInt(digito);
        } else if (restar == true) {
            document.getElementById("display").value = acumulado - parseInt(digito);
        } else if (multiplicar == true) {
            document.getElementById("display").value = acumulado * parseInt(digito);
            firstMultiplication = false;
        } else {
            document.getElementById("display").value = acumulado / parseInt(digito);
            firstDivision = false;
        }
    
        acumulado = parseInt(document.getElementById("display").value);
        digito = 0;
    }
}