import { areaCodes } from "./areaCodes.js";

export const fieldValidationRules = {
  name: {
    rule: (nome) => nome.indexOf(" ") !== -1,
    message:
      "Nome precisa ser nome completo, não apenas um nome(Ex.: Abimael Neto, não Abimael)",
  },
  email: {
    rule: (email) => email.includes("@") && email.includes(".com"),
    message: `Email precisa ser um email válido, contendo @ e também .com`,
  },
  number: {
    rule: (number) =>
      areaCodes.includes(parseInt(number.substring(0, 2))) &&
      number.length === 11,
    message: `O telefone deve conter DDD válido e conter 11 caracteres`,
  },
  // DUAS REGRAS PARA O INPUT DATA DE NASCIMENTO
  birth: {
    rule: (date,today) =>
      0 > new Number(date.split('-')[2]) > 31 &&
      0 > new Number(date.split('-')[1]) > 12 &&
      new Number(date.split('-')[0]) < 1899 &&
      today.getFullYear() < new Number(date.split('-')[0]),
    message: `o campo DD não pode ser maior que 31, o campo MM não pode ser maior que 12,O ano não pode ser menor que 1900,O ano não pode ser maior que atual!`,
  },
  // TRÊS REGRAS PARA O INPUT PASSWORD
  password: {
    rule: (password) =>
      password.match(/[0-9]/g) &&
      password.match(/[a-z]/g) &&
      password.match(/[/@#$?]/g),
    message: `O campo senha pelo menos um número uma letra minuscula e um símbolo`,
  },
  confirmPassword: {
    rule: (passwordConfirmation, password) => passwordConfirmation === password,
    message: `A confirmação da senha deve ser igual á senha`,
  },
};
