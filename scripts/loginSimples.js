const login = document.getElementById("Login");
const form_login = login.querySelector("#login__form");
const form_input = login.querySelector(".login_input");

const container = document.getElementById("container"); // agora o container representa a calculadora

const cores = ['blueviolet', 'cadetblue', 'brown', 'coral', 'cornflowerblue'];

function corAleatoria() {
    return cores[Math.floor(Math.random() * cores.length)];
}

const Usuario = {
    id: "",
    nome: "",
    corUser: ""
};

const submitFunc = (e) => {
    e.preventDefault();

    Usuario.id = crypto.randomUUID();
    Usuario.nome = form_input.value;
    Usuario.corUser = corAleatoria();

    login.style.display = "none";
    container.style.display = "flex";
};

form_login.addEventListener("submit", submitFunc);
