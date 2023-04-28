import { areaCodes } from "./js/areaCodes.js";
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
        name: data?.name?.value,
        email: data?.email?.value,
        number: data?.number?.value,
        password: data?.password?.value,
        passwordConfirm: data?.confirmPassword?.value,
        birth: data?.date?.value,
        banana: ''
    };
    const [year, month, day] = fields.birth.split("-");
    let isValid = true;
    const errors = [];
    let errorMessage = ""
    for (let [key, value] of Object.entries(fields)) {
        const validation = fieldValidationRules[key];
        if (!validation) {
            console.error("Faltando validação para o campo " + key);
            continue;
        }
        const { rule, message } = validation;
        isValid = rule(value);

        if (!isValid) {
            errors.push(message);
            errorMessage +=  "\n" + message
        }
    }
    console.log(isValid);
    console.log(errorMessage);
    
    alert(errorMessage)
    return false;
};
document.querySelector("form").onsubmit = validacao;
