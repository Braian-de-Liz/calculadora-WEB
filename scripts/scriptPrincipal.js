const MostrarRes = document.getElementById("Mostrar");
const LimpaResult = document.getElementById("C");
const LimparNum = document.getElementById("backstao");

function soma(num1, num2) {
    const resultado = num1 + num2;
    return resultado;
}

function subtrair(num1, num2) {
    const resultado = num1 - num2;
    return resultado;
}

function multiplicar(num1, num2) {
    const resultado = num1 * num2;
    return resultado;
}

function dividir(num1, num2) {
    const resultado = num1 / num2;
    return resultado;
}

const inserirNum1 = (num1) => {
    let numero = document.getElementById("Mostrar").innerHTML;
    document.getElementById("Mostrar").innerHTML = numero + num1;

}

const limpar = () => {
    document.getElementById("Mostrar").innerHTML = "";
}

function apagar() {
    let apagarElemento = document.getElementById("Mostrar").innerHTML;
    document.getElementById("Mostrar").innerHTML = apagarElemento.substring(0, apagarElemento.length - 1)
}

function calcularVarios() {
    const expressao = MostrarRes.innerHTML;

    const expressaoValida = /^[0-9+\-*/().\s]+$/.test(expressao);
    if (!expressaoValida) {
        return "Inválido";
    }

    const resultado = eval(expressao);
    return resultado;
}


const igual = document.getElementById("=");

LimpaResult.addEventListener("click", limpar);

document.addEventListener("keydown", (event) => {

    const tecla = event.key;

    if (tecla === 'Backspace') {
        apagar();
    } 
    else if (tecla === 'Enter') {
        igual.click();
    }
    else if(tecla === 'c'){
        limpar();
    }
    else if (/^[0-9+\-*/().]$/.test(tecla)) {
        MostrarRes.innerHTML += tecla;
    }

});



LimparNum.addEventListener("click", apagar);


igual.addEventListener("click", (Event) => {
    if (MostrarRes.innerHTML.length > 8) {
        const resultado = calcularVarios();
        if (isNaN(resultado) || resultado === undefined || resultado === Infinity || resultado === -Infinity) {
            MostrarRes.innerHTML = "Inválido";
        } else {
            MostrarRes.innerHTML = resultado;
        }

    }
    else {
        const expressao = MostrarRes.innerHTML;
        let operador;

        if (expressao.includes("+")) {
            operador = '+';
        } else if (expressao.includes("-")) {
            operador = "-";
        } else if (expressao.includes("*")) {
            operador = "*";
        } else if (expressao.includes("/")) {
            operador = "/";
        }

        const [a, b] = expressao.split(operador).map(Number);

        if (isNaN(a) || isNaN(b)) {
            MostrarRes.innerHTML = "Inválido";
            return;
        }

        let resultado;

        switch (operador) {
            case "+":
                resultado = soma(a, b);
                break;
            case "-":
                resultado = subtrair(a, b);
                break;
            case "*":
                resultado = multiplicar(a, b);
                break;
            case "/":
                resultado = dividir(a, b);
                break;
        }

        MostrarRes.innerHTML = resultado;
    }
});


