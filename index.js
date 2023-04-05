// CRINADO DDD's
var codigosDDD = [
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    21, 22, 24, 27, 28, 31, 32, 33, 34,
    35, 37, 38, 41, 42, 43, 44, 45, 46,
    47, 48, 49, 51, 53, 54, 55, 61, 62,
    64, 63, 65, 66, 67, 68, 69, 71, 73,
    74, 75, 77, 79, 81, 82, 83, 84, 85,
    86, 87, 88, 89, 91, 92, 93, 94, 95,
    96, 97, 98, 99
];
//CRIANDO O ARRAY DE ERROS
var errorMessages = []
var button = document.querySelector('.button')
var forms = document.querySelector('.forms')
var buttonError = document.querySelector('.showFieldsErros')
var container = document.querySelector('.container')
const validacao = () => {
    // PEGANDO A DATA DE HOJE
    const today = new Date();

    // PEGANDO OS INPUTS DO FORM
    const dada = document.forms["formvalidation"]

    // PEGANDO O TODOS OS SPANS PARA MOSTRAR OS ERROS
    const showError = document.querySelectorAll('span.error')

    // PEGANDO TERMOS E CONDIÇÕES
    var terms = dada?.terms?.value

    // PEGANDO OS CAMPOS E SEUS RESPETIVOS VÁLORES
    const nome = dada?.name?.value
    const email = dada?.email?.value
    const number = dada?.number?.value
    const password = dada?.password?.value
    const passwordConfirm = dada?.confirmPassword?.value

    // SEPARANDO A DATA EM: DD,MM E AAAA,  E CRIANDO CADA UM DELE 
    // COMO NÚMERO
    const birthConfirm = {
        birthDay: new Number(dada?.birthDay?.value),
        birthGetMonth: new Number(dada?.birthMonth?.value),
        birthGetYear: new Number(dada?.birthYear?.value),
    }


    // CRIANDO REGRAS DE CADA CAMPO DO FORMULÁRIO
    const rulesfieldsValidationForm = {
        ruleTheName: nome.indexOf(" ") == -1,
        ruleTheEmail: email.includes('@')
            && email.includes('.com'),
        rulesTheNumber: {
            ruleTheNumberOne: codigosDDD.indexOf(parseInt(number.substring(0, 2))),
            ruleTheNumberTwo: number.length < 11,
        },
        // DUAS REGRAS PARA O INPUT DATA DE NASCIMENTO
        rulesFieldBirth: {
            ruleTheBirthOne: birthConfirm?.birthDay > 31,
            ruleTheBirthTwo: birthConfirm?.birthGetMonth > 12,
            ruleTheBirthThree: birthConfirm?.birthGetYear < 1900,
            ruleTheBirthFour: (today.getFullYear() < birthConfirm?.birthGetYear),
        },
        // TRÊS REGRAS PARA O INPUT PASSWORD
        rulesFieldPassword: {
            ruleThePasswordOne: password.match(/[0-9]/g) == null,
            ruleThePasswordTwo: password.match(/[a-z]/g) == null,
            ruleThePasswordThree: password.match(/[/@#$?]/g) == null,
        },
        ruleTheConfirmPassword: passwordConfirm != password
    }

    // VERIFICANDO AS REGRAS
    if (rulesfieldsValidationForm?.ruleTheName) {
        const error = `Nome precisa ser nome completo, 
            não apenas um nome(Ex.: Abimael Neto, não ${nome}`
        errorMessages.push(`${error}`)
    }
    if (!rulesfieldsValidationForm?.ruleTheEmail) {
        const error = `Email precisa ser um email válido, contendo @ e também .com,
            não ${email}`

        errorMessages.push(`${error}`)
    }
    if (rulesfieldsValidationForm?.rulesTheNumber?.ruleTheNumberOne) {
        const error = `Telefone precisa conter o 
            DDD(Ex.: 41 99928238, não apenas ${number}`
        errorMessages.push(`${error}`)
    } else if (rulesfieldsValidationForm?.rulesTheNumber?.ruleTheNumberTwo) {
        const error = `Telefone deve ter 11 números`
        errorMessages.push(`${error}`)
    }
    if (rulesfieldsValidationForm?.rulesFieldBirth?.ruleTheBirthOne) {
        const error = `o campo DD não pode ser maior que 31`
        errorMessages.push(`${error}`)
    }



    if (rulesfieldsValidationForm?.rulesFieldBirth?.ruleTheBirthTwo) {
        const error = `o campo MM não pode ser maior que 12`
        errorMessages.push(`${error}`)
    }
    if (rulesfieldsValidationForm?.rulesFieldBirth?.ruleTheBirthThree) {
        const error = `o campo YYYY não pode ter menos que 4 números`
        errorMessages.push(`${error}`)
    }
    if (rulesfieldsValidationForm?.rulesFieldBirth?.ruleTheBirthFour) {
        const error = `O ano não pode ser maior que atual!`
        errorMessages.push(`${error}`)
    }
    if (rulesfieldsValidationForm?.ruleThePasswordOne) {
        const error = `O campo senha pelo menos um número`

        errorMessages.push(`${error}`)
    }
    if (rulesfieldsValidationForm?.ruleThePasswordTwo) {
        const error = `O campo senha deve conter uma letra minuscula pelo menos`
        errorMessages.push(`${error}`)
    }
    if (rulesfieldsValidationForm?.ruleThePasswordThree) {
        const error = (`O campo senha deve conter 1 simbolo pelo menos`)

        errorMessages.push(`${error}`)
    }
    if (rulesfieldsValidationForm?.ruleTheConfirmPassword) {
        const error = `A confirmação da senha deve ser igual á senha`
        errorMessages.push(`${error}`)
    }


    // VALIDÁÇÃO FINAL, VERIFICANDO SE A ARRAY DE ERROR 
    // TEM ALGO OU NÃO.
    if (errorMessages.length == 0) {
        // SE TEM
        alert('Formulário válido')
        return true
    } else {
        // SE NÃO TEM
        const windowErros = errorMessages.map((item, index) => {
            return(`\n Erro nos campos: ${index + 1} ${item}\n`)
        })
        alert(`${windowErros}`)
        button.style.display = 'none'
        buttonError.style.display = 'flex'
        setTimeout(() => {
            buttonError.style.display = 'none'
            button.style.display = 'flex'
        }, 4000)
        return false
    }
}

