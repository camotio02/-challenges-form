// CRINADO DDD's
var codigosDDD = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35,
  37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 64, 63,
  65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88,
  89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
];
//CRIANDO O ARRAY DE ERROS
var errorMessages = [];
var button = document.querySelector(".button");
var forms = document.querySelector(".forms");
var buttonError = document.querySelector(".showFieldsErros");
var container = document.querySelector(".container");
const validacao = () => {
  // PEGANDO A DATA DE HOJE
  const today = new Date();

  // PEGANDO OS INPUTS DO FORM
  const data = document.forms["formvalidation"];
  console.log(data);
  // PEGANDO TERMOS E CONDIÇÕES
  var terms = data?.terms?.value;

  // PEGANDO OS CAMPOS E SEUS RESPETIVOS VÁLORES
  const fields = {
    nome: data?.name?.value,
    email: data?.email?.value,
    number: data?.number?.value,
    password: data?.password?.value,
    passwordConfirm: data?.confirmPassword?.value,
    birthConfirm: {
      birthDay: new Number(data?.birthDay?.value),
      birthGetMonth: new Number(data?.birthMonth?.value),
      birthGetYear: new Number(data?.birthYear?.value),
    },
  };
  const [year, month, day] = data.date.value.split("-");
  console.log({ year, month, day });
  // CRIANDO REGRAS DE CADA CAMPO DO FORMULÁRIO
  //   const rulesfieldsValidationForm = {
  //     banana: {
  //       rule: (nome) => nome.indexOf(" ") !== -1,
  //       message:
  //         "Nome precisa ser nome completo, não apenas um nome(Ex.: Abimael Neto, não " +
  //         nome,
  //     },
  // name: {

  // },
  // email: {
  //   rule: email.includes("@") && email.includes(".com"),
  //   message: `Email precisa ser um email válido, contendo @ e também .com,
  //   não ${email}`,
  // },
  // number: {
  //   rule:
  //     codigosDDD.includes(parseInt(number.substring(0, 2))) &&
  //     number.length === 11,
  //   message: `O telefone deve conter DDD válido e conter 11 caracteres`,
  // },
  // // DUAS REGRAS PARA O INPUT DATA DE NASCIMENTO
  // birth: {
  //   rule:
  //     0 > birthConfirm?.birthDay > 31 &&
  //     0 > birthConfirm?.birthGetMonth > 12 &&
  //     birthConfirm?.birthGetYear < 1899 &&
  //     today.getFullYear() < birthConfirm?.birthGetYear,
  //   message: `o campo DD não pode ser maior que 31, o campo MM não pode ser maior que 12,O ano não pode ser menor que 1900,O ano não pode ser maior que atual!`,
  // },
  // // TRÊS REGRAS PARA O INPUT PASSWORD
  // password: {
  //   rule:
  //     password.match(/[0-9]/g) &&
  //     password.match(/[a-z]/g) &&
  //     password.match(/[/@#$?]/g),
  //   message: `O campo senha pelo menos um número uma letra minuscula e um símbolo`,
  // },
  // confirmPassword: {
  //   rule: passwordConfirm === password,
  //   message: `A confirmação da senha deve ser igual á senha`,
  // },
  //   };

  //   Object.entries(fields).map((element) => {
  //     console.log(element);
  //   });
  return false;
  /*

  1 - para cada campo, validar o valor atual
  2 - se não for válido, adicionar a mensagem de erro à lista de erros
  */
  return true;
  // VALIDÁÇÃO FINAL, VERIFICANDO SE A ARRAY DE ERROR
  // TEM ALGO OU NÃO.
  if (errorMessages.length == 0) {
    // SE TEM
    alert("Formulário válido");
    return true;
  } else {
    // SE NÃO TEM
    alert(
      `${errorMessages.map((item) => {
        return item;
      })}`
    );
    button.style.display = "none";
    buttonError.style.display = "flex";
    setTimeout(() => {
      buttonError.style.display = "none";
      button.style.display = "flex";
      errorMessages = [];
    }, 4000);
    return false;
  }
};
