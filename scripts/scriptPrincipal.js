const MostrarRes = document.getElementById("Mostrar");
const LimpaResult = document.getElementById("C");
const LimparNum = document.getElementById("backstao");

function soma(num1, num2) {
    const resultado = num1 + num2;
}

function subtrair8(num1, num2) {
    const resultado = num1 - num2;
}

function multiplicar(num1, num2) {
    const resultado = num1 * num2;
}

function dividir(num1, num2) {
    const resultado = num1 / num2;
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

function calcularVarios(NumEscrito) {
    NumEscrito = document.getElementById('Mostrar').innerHTML.eval();
}

const igual = document.getElementById("=");

LimpaResult.addEventListener("click", limpar);

LimparNum.addEventListener("keydown", (event) => {
    if (event.key === 'Backspace') {
        apagar();
    }
});

LimparNum.addEventListener("click", apagar);


igual.addEventListener("click",)

if (MostrarRes.value.length > 8) {
    
}


/* function soma2() {
    let num1 = +prompt("digiga o numero 1º");
    let num2 = +prompt("digiga o numero 2º");

    const resultadooo = num1 + num2;

    alert(resultadooo);
} */