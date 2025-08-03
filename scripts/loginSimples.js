const login = document.getElementById("Login");
const form_login = login.querySelector("#login__form");
const form_input = login.querySelector(".login_input");

const container = document.getElementById("container"); 
const boasVindas = document.getElementById("boas-vindas");


const Usuario = {
    id: "",
    nome: "",
    corUser: ""
};

const submitFunc = (e) => {
    e.preventDefault();

    Usuario.id = crypto.randomUUID();
    Usuario.nome = form_input.value;

    boasVindas.textContent = `Bem-vindo, ${Usuario.nome}!`;
    boasVindas.style.display = "block";

    login.style.display = "none";
    container.style.display = "flex";
};

form_login.addEventListener("submit", submitFunc);
