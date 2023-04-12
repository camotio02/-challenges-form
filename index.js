import { fieldValidationRules } from "./js/fieldValidationRules.js";

//CRIANDO O ARRAY DE ERROS
var errorMessages = [];
var button = document.querySelector(".button");
var forms = document.querySelector(".forms");
var buttonError = document.querySelector(".showFieldsErros");
var container = document.querySelector(".container");

export const validacao = () => {
    // PEGANDO A DATA DE HOJE
    const today = new Date();

    // PEGANDO OS INPUTS DO FORM
    const data = document.forms["formvalidation"];
    // PEGANDO TERMOS E CONDIÇÕES
    var terms = data?.terms?.value;

    // PEGANDO OS CAMPOS E SEUS RESPETIVOS VÁLORES
    const fields = {
        nome: data?.name?.value,
        email: data?.email?.value,
        number: data?.number?.value,
        password: data?.password?.value,
        passwordConfirm: data?.confirmPassword?.value,
        date: data.date?.value,
    };
    const dateSplited = data.date.value.split("-");
    let isValid = true;
    const errors = {};
    for (let [key, value] of Object.entries(fields)) {
        const validation = fieldValidationRules[key];
        if (!validation) {
            console.error("Faltando validação para o campo " + key);
            continue;
        }
        const { rule, message } = validation;
        isValid = rule(value)


        if (!isValid) {
            const pushedErrors = errors[key] = message;
            alert(`${pushedErrors}`)
        }
    }
    return false;
};
document.querySelector("form").onsubmit = validacao;
